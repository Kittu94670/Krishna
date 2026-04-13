"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// TODO: clean up the types for all of this
/* eslint-disable @typescript-eslint/consistent-type-assertions */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sfToggleCheckpoint = exports.sfCreateCheckpoints = exports.processBreakpointChangedForCheckpoints = exports.CheckpointNode = exports.checkpointService = void 0;
const salesforcedx_apex_replay_debugger_1 = require("@salesforce/salesforcedx-apex-replay-debugger");
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const Effect = require("effect/Effect");
const vscode = require("vscode");
const vscode_1 = require("vscode");
const debuggerConstants_1 = require("../debuggerConstants");
const index_1 = require("../index");
const messages_1 = require("../messages");
const coreExtensionUtils_1 = require("../utils/coreExtensionUtils");
const EDITABLE_FIELD_LABEL_ITERATIONS = 'Iterations: ';
const EDITABLE_FIELD_LABEL_ACTION_SCRIPT = 'Script: ';
const EDITABLE_FIELD_LABEL_ACTION_SCRIPT_TYPE = 'Type: ';
/** Gets the Connection from the core extension */
const getConnection = async () => {
    try {
        const coreExtension = await (0, coreExtensionUtils_1.getVscodeCoreExtension)();
        const connection = await coreExtension.exports.services.WorkspaceContext.getInstance().getConnection();
        return connection;
    }
    catch (error) {
        const errorMessage = `${messages_1.nls.localize('unable_to_retrieve_org_info')} : ${error instanceof Error ? error.message : String(error)}`;
        (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
        return undefined;
    }
};
/** Clears existing checkpoints from the org, making VS Code the source of truth */
const clearExistingCheckpoints = async () => {
    try {
        const coreExtension = await (0, coreExtensionUtils_1.getVscodeCoreExtension)();
        const userId = await coreExtension.exports.getUserId();
        if (!userId) {
            const errorMessage = messages_1.nls.localize('unable_to_retrieve_active_user_for_sf_project');
            (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
            return false;
        }
        const connection = await getConnection();
        if (!connection) {
            return false;
        }
        // Query for existing overlay actions
        const queryResult = await connection.tooling.query(`SELECT Id FROM ApexExecutionOverlayAction WHERE ScopeId = '${userId}'`);
        if (queryResult.records.length === 0) {
            return true;
        }
        // Delete all records individually using Promise.all
        const deleteResults = await Promise.allSettled(queryResult.records.map(record => connection.tooling.sobject('ApexExecutionOverlayAction').delete(record.Id)));
        // Check if any deletes failed
        const failures = deleteResults.filter(result => result.status === 'rejected');
        if (failures.length > 0) {
            const errorMessage = messages_1.nls.localize('cannot_delete_existing_checkpoint');
            (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
            return false;
        }
        return true;
    }
    catch (error) {
        const errorMessage = `${messages_1.nls.localize('unable_to_query_for_existing_checkpoints')} : ${String(error)}`;
        (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
        return false;
    }
};
/** Creates an Apex Execution Overlay Action for a checkpoint node */
const executeCreateApexExecutionOverlayActionCommand = async (theNode) => {
    const connection = await getConnection();
    if (!connection) {
        return false;
    }
    try {
        const overlayAction = JSON.parse(theNode.createJSonStringForOverlayAction());
        const result = await connection.tooling.sobject('ApexExecutionOverlayAction').create(overlayAction);
        // result is a SaveResult when creating a single record
        const singleResult = Array.isArray(result) ? result[0] : result;
        if (singleResult.success && singleResult.id) {
            theNode.setActionCommandResultId(singleResult.id);
            return true;
        }
        const errorMessage = `Failed to create checkpoint. URI=${theNode.getCheckpointUri()}, Line=${theNode.getCheckpointLineNumber()}`;
        (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
        return false;
    }
    catch (error) {
        let errorMessage;
        try {
            const errorData = error;
            const errorArray = errorData.body ?? [];
            if (errorArray.length > 0 && errorArray[0].errorCode === debuggerConstants_1.FIELD_INTEGRITY_EXCEPTION) {
                errorMessage = messages_1.nls.localize('local_source_is_out_of_sync_with_the_server');
            }
            else if (errorArray.length > 0) {
                errorMessage = `${errorArray[0].message}. URI=${theNode.getCheckpointUri()}, Line=${theNode.getCheckpointLineNumber()}`;
            }
            else {
                errorMessage = `${String(error)}. URI=${theNode.getCheckpointUri()}, Line=${theNode.getCheckpointLineNumber()}`;
            }
        }
        catch {
            errorMessage = `${String(error)}. URI=${theNode.getCheckpointUri()}, Line=${theNode.getCheckpointLineNumber()}`;
        }
        (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
        return false;
    }
};
class CheckpointService {
    checkpoints = [];
    _onDidChangeTreeData = new vscode_1.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    fireTreeChangedEvent() {
        this._onDidChangeTreeData.fire(undefined);
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (!element) {
            return this.checkpoints;
        }
        return element.getChildren();
    }
    hasFiveOrLessActiveCheckpoints() {
        const numEnabledCheckpoints = getEnabledCheckpointCount(this);
        if (numEnabledCheckpoints > debuggerConstants_1.MAX_ALLOWED_CHECKPOINTS) {
            const errorMessage = messages_1.nls.localize('up_to_five_checkpoints', numEnabledCheckpoints);
            (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
        }
        return true;
    }
    hasOneOrMoreActiveCheckpoints() {
        const numEnabledCheckpoints = getEnabledCheckpointCount(this);
        if (numEnabledCheckpoints === 0) {
            const errorMessage = messages_1.nls.localize('no_enabled_checkpoints');
            (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Warning);
        }
        return true;
    }
    createCheckpointNode(breakpointIdInput, enabledInput, uriInput, sourceFileInput, checkpointOverlayAction) {
        const cpNode = new CheckpointNode(breakpointIdInput, enabledInput, uriInput, sourceFileInput, checkpointOverlayAction);
        this.checkpoints.push(cpNode);
        this.fireTreeChangedEvent();
        return cpNode;
    }
    returnCheckpointNodeIfAlreadyExists(breakpointIdInput) {
        return this.checkpoints.find(cp => cp.breakpointId === breakpointIdInput);
    }
    deleteCheckpointNodeIfExists(breakpointIdInput) {
        const cpNode = this.returnCheckpointNodeIfAlreadyExists(breakpointIdInput);
        if (cpNode) {
            const index = this.checkpoints.indexOf(cpNode, 0);
            if (index > -1) {
                this.checkpoints.splice(index, 1);
                this.fireTreeChangedEvent();
            }
        }
    }
}
exports.checkpointService = new CheckpointService();
class BaseNode extends vscode_1.TreeItem {
}
class CheckpointNode extends BaseNode {
    children = [];
    breakpointId;
    checkpointOverlayAction;
    uri;
    enabled;
    actionObjectId;
    constructor(breakpointIdInput, enabledInput, uriInput, sourceFileInput, checkpointOverlayActionInput) {
        super(`${sourceFileInput}:${checkpointOverlayActionInput.Line}`, vscode_1.TreeItemCollapsibleState.Expanded);
        this.uri = uriInput;
        this.breakpointId = breakpointIdInput;
        this.enabled = enabledInput;
        this.checkpointOverlayAction = checkpointOverlayActionInput;
        this.actionObjectId = undefined;
        // Create the items that the user is going to be able to control (Type, Script, Iteration)
        this.children.push(new CheckpointInfoActionScriptTypeNode(this.checkpointOverlayAction), new CheckpointInfoActionScriptNode(this.checkpointOverlayAction), new CheckpointInfoIterationNode(this.checkpointOverlayAction));
    }
    createJSonStringForOverlayAction() {
        return JSON.stringify(this.checkpointOverlayAction);
    }
    isCheckpointEnabled() {
        return this.enabled;
    }
    getCheckpointLineNumber() {
        return this.checkpointOverlayAction.Line;
    }
    getCheckpointTypeRef() {
        return this.checkpointOverlayAction.ExecutableEntityName;
    }
    setCheckpointTypeRef(typeRef) {
        this.checkpointOverlayAction.ExecutableEntityName = typeRef;
    }
    updateCheckpoint(enabledInput, uriInput, sourceFileInput, checkpointOverlayActionInput) {
        // At this point we've got no idea what really changed, update
        // everything.
        this.enabled = enabledInput;
        this.uri = uriInput;
        this.checkpointOverlayAction.Line = checkpointOverlayActionInput.Line;
        this.checkpointOverlayAction.IsDumpingHeap = checkpointOverlayActionInput.IsDumpingHeap;
        // Instead of just refreshing the node's overlay action, these functions
        // need to be called because some of the information is in their label
        // which needs to get updated
        this.updateActionScript(checkpointOverlayActionInput.ActionScript);
        this.updateActionScriptType(checkpointOverlayActionInput.ActionScriptType);
        this.updateIterations(checkpointOverlayActionInput.Iteration);
        this.label = `${sourceFileInput}:${checkpointOverlayActionInput.Line}`;
        exports.checkpointService.fireTreeChangedEvent();
    }
    updateActionScript(actionScriptInput) {
        for (const cpInfoNode of this.getChildren()) {
            if (cpInfoNode instanceof CheckpointInfoActionScriptNode) {
                return cpInfoNode.updateActionScript(actionScriptInput);
            }
        }
    }
    updateActionScriptType(actionScriptTypeInput) {
        for (const cpInfoNode of this.getChildren()) {
            if (cpInfoNode instanceof CheckpointInfoActionScriptTypeNode) {
                return cpInfoNode.updateActionScriptType(actionScriptTypeInput);
            }
        }
    }
    updateIterations(iterationInput) {
        for (const cpInfoNode of this.getChildren()) {
            if (cpInfoNode instanceof CheckpointInfoIterationNode) {
                return cpInfoNode.updateIterations(iterationInput);
            }
        }
    }
    getIteration() {
        return this.checkpointOverlayAction.Iteration;
    }
    getActionScript() {
        return this.checkpointOverlayAction.ActionScript;
    }
    getActionScriptType() {
        return this.checkpointOverlayAction.ActionScriptType;
    }
    getCheckpointUri() {
        return this.uri;
    }
    getChildren() {
        return this.children;
    }
    getActionCommandResultId() {
        return this.actionObjectId;
    }
    setActionCommandResultId(actionObjectId) {
        this.actionObjectId = actionObjectId;
    }
}
exports.CheckpointNode = CheckpointNode;
// Remove the tags when the nodes using the checkpointOverlayAction become editable.
class CheckpointInfoActionScriptNode extends BaseNode {
    checkpointOverlayAction;
    constructor(cpOverlayActionInput) {
        super(EDITABLE_FIELD_LABEL_ACTION_SCRIPT + cpOverlayActionInput.ActionScript);
        this.checkpointOverlayAction = cpOverlayActionInput;
    }
    updateActionScript(actionScriptInput) {
        this.checkpointOverlayAction.ActionScript = actionScriptInput;
        this.label = EDITABLE_FIELD_LABEL_ACTION_SCRIPT + actionScriptInput;
    }
    getChildren() {
        return [];
    }
}
class CheckpointInfoActionScriptTypeNode extends BaseNode {
    checkpointOverlayAction;
    constructor(cpOverlayActionInput) {
        super(EDITABLE_FIELD_LABEL_ACTION_SCRIPT_TYPE + cpOverlayActionInput.ActionScriptType);
        this.checkpointOverlayAction = cpOverlayActionInput;
    }
    updateActionScriptType(actionScriptTypeInput) {
        this.checkpointOverlayAction.ActionScriptType = actionScriptTypeInput;
        this.label = EDITABLE_FIELD_LABEL_ACTION_SCRIPT_TYPE + actionScriptTypeInput;
    }
    getChildren() {
        return [];
    }
}
class CheckpointInfoIterationNode extends BaseNode {
    checkpointOverlayAction;
    constructor(cpOverlayActionInput) {
        super(EDITABLE_FIELD_LABEL_ITERATIONS + cpOverlayActionInput.Iteration);
        this.checkpointOverlayAction = cpOverlayActionInput;
    }
    updateIterations(iterationInput) {
        this.checkpointOverlayAction.Iteration = iterationInput;
        this.label = EDITABLE_FIELD_LABEL_ITERATIONS + iterationInput;
    }
    getChildren() {
        return [];
    }
}
// The lock is necessary to prevent the user from deleting the underlying breakpoints
// associated with the checkpoints while checkpoints are being uploaded to the server.
const lock = Effect.runSync(Effect.makeSemaphore(1));
// This is the function registered for vscode.debug.onDidChangeBreakpoints. This
// particular event fires breakpoint events without an active debug session which
// allows us to manipulate checkpoints prior to the debug session.
const processBreakpointChangedForCheckpoints = (breakpointsChangedEvent) => {
    Effect.runSync(lock.withPermits(1)(Effect.sync(() => {
        breakpointsChangedEvent.removed
            .filter(isSourceBreakpoint)
            .filter(isCheckpoint)
            .map(bp => exports.checkpointService.deleteCheckpointNodeIfExists(bp.id));
    })));
    Effect.runSync(lock.withPermits(1)(Effect.sync(() => {
        const sourceBreakpoints = breakpointsChangedEvent.changed.filter(isSourceBreakpoint);
        sourceBreakpoints.filter(isCheckpoint).map(bp => {
            const checkpointOverlayAction = parseCheckpointInfoFromBreakpoint(bp);
            const uri = (0, salesforcedx_utils_vscode_1.code2ProtocolConverter)(bp.location.uri);
            const filename = uri.substring(uri.lastIndexOf('/') + 1);
            const theNode = exports.checkpointService.returnCheckpointNodeIfAlreadyExists(bp.id);
            if (theNode) {
                theNode.updateCheckpoint(bp.enabled, uri, filename, checkpointOverlayAction);
            }
            else {
                // else if the node didn't exist then create it
                exports.checkpointService.createCheckpointNode(bp.id, bp.enabled, uri, filename, checkpointOverlayAction);
            }
        });
        // The breakpoint is no longer a SourceBreakpoint or is no longer a checkpoint. Call to delete it if it exists
        sourceBreakpoints.filter(isNotCheckpoint).map(bp => exports.checkpointService.deleteCheckpointNodeIfExists(bp.id));
    })));
    Effect.runSync(lock.withPermits(1)(Effect.sync(() => {
        breakpointsChangedEvent.added
            .filter(isSourceBreakpoint)
            .filter(isCheckpoint)
            .map(bp => {
            const checkpointOverlayAction = parseCheckpointInfoFromBreakpoint(bp);
            const uri = (0, salesforcedx_utils_vscode_1.code2ProtocolConverter)(bp.location.uri);
            const filename = uri.substring(uri.lastIndexOf('/') + 1);
            exports.checkpointService.createCheckpointNode(bp.id, bp.enabled, uri, filename, checkpointOverlayAction);
        });
    })));
};
exports.processBreakpointChangedForCheckpoints = processBreakpointChangedForCheckpoints;
const parseCheckpointInfoFromBreakpoint = (breakpoint) => {
    // declare the overlayAction with defaults
    const checkpointOverlayAction = {
        ActionScript: '',
        ActionScriptType: 'None',
        ExecutableEntityName: undefined,
        IsDumpingHeap: true,
        Iteration: 1,
        Line: breakpoint.location.range.start.line + 1
    };
    // need to add 1 since the lines are 0 based
    // if the hit condition is a number then use it
    if (breakpoint.hitCondition) {
        if (/\d/.test(breakpoint.hitCondition)) {
            checkpointOverlayAction.Iteration = Number(breakpoint.hitCondition);
        }
    }
    // If the log message is defined and isn't empty then set the action script
    // based upon whether or not the string starts with SELECT
    const logMessage = breakpoint.logMessage;
    if (logMessage && logMessage.length > 0) {
        checkpointOverlayAction.ActionScriptType = logMessage.toLocaleLowerCase().startsWith('select') ? 'SOQL' : 'Apex';
        checkpointOverlayAction.ActionScript = logMessage;
    }
    return checkpointOverlayAction;
};
const setTypeRefsForEnabledCheckpoints = () => {
    let everythingSet = true;
    for (const cpNode of exports.checkpointService.getChildren()) {
        if (cpNode.isCheckpointEnabled()) {
            const checkpointUri = cpNode.getCheckpointUri();
            const checkpointLine = cpNode.getCheckpointLineNumber();
            if (!salesforcedx_apex_replay_debugger_1.breakpointUtil.canSetLineBreakpoint(checkpointUri, checkpointLine)) {
                const errorMessage = messages_1.nls.localize('checkpoints_can_only_be_on_valid_apex_source', checkpointUri, checkpointLine);
                (0, index_1.writeToDebuggerOutputWindow)(errorMessage, true, index_1.VSCodeWindowTypeEnum.Error);
                everythingSet = false;
            }
            const typeRef = salesforcedx_apex_replay_debugger_1.breakpointUtil.getTopLevelTyperefForUri(cpNode.getCheckpointUri());
            cpNode.setCheckpointTypeRef(typeRef);
        }
    }
    return everythingSet;
};
// The order of operations here should be to
// 1. Get the source/line information
// 2. Validate the existing checkpoint information
//    a. validate there are only 5 active checkpoints
//    b. validate that the active checkpoint information is correct
//    c. set the typeRef on each checkpoint (requires the source/line information)
// 3. Remove any existing checkpoints
// 4. Create the new checkpoints
let creatingCheckpoints = false;
/** Creates checkpoints in the org by uploading enabled checkpoint nodes */
const sfCreateCheckpoints = async () => {
    // In-spite of waiting for the lock, we still want subsequent calls to immediately return
    // from this if checkpoints are already being created instead of stacking them up.
    if (!creatingCheckpoints) {
        creatingCheckpoints = true;
    }
    else {
        return false;
    }
    let updateError = false;
    // The status message isn't changing, call to localize it once and use the localized string in the
    // progress report.
    const localizedProgressMessage = messages_1.nls.localize('sf_update_checkpoints_in_org');
    // Wrap everything in a try/finally to ensure creatingCheckpoints gets set to false
    try {
        // The lock is necessary here to prevent the user from deleting the underlying breakpoint
        // attached to the checkpoint while they're being uploaded into the org.
        await Effect.runPromise(lock.withPermits(1)(Effect.promise(async () => {
            (0, index_1.writeToDebuggerOutputWindow)(`${messages_1.nls.localize('long_command_start')} ${localizedProgressMessage}`);
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: localizedProgressMessage,
                cancellable: false
            }, async (progress, _token) => {
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_org_info')}`);
                progress.report({
                    increment: 0,
                    message: localizedProgressMessage
                });
                const connection = await getConnection();
                if (!connection) {
                    updateError = true;
                    return false;
                }
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_source_line_info')}`);
                progress.report({
                    increment: 20,
                    message: localizedProgressMessage
                });
                const sourceLineInfoRetrieved = await (0, index_1.retrieveLineBreakpointInfo)();
                // If we didn't get the source line information that'll be reported at that time, just return
                if (!sourceLineInfoRetrieved) {
                    updateError = true;
                    return false;
                }
                // There can be a max of five active checkpoints
                if (!exports.checkpointService.hasFiveOrLessActiveCheckpoints()) {
                    updateError = true;
                    return false;
                }
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_setting_typeref')}`);
                progress.report({
                    increment: 50,
                    message: localizedProgressMessage
                });
                // For the active checkpoints set the typeRefs using the source/line info
                if (!setTypeRefsForEnabledCheckpoints()) {
                    updateError = true;
                    return false;
                }
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_clearing_existing_checkpoints')}`);
                progress.report({
                    increment: 50,
                    message: localizedProgressMessage
                });
                // remove any existing checkpoints on the server
                const allRemoved = await clearExistingCheckpoints();
                if (!allRemoved) {
                    updateError = true;
                    return false;
                }
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_uploading_checkpoints')}`);
                progress.report({
                    increment: 70,
                    message: localizedProgressMessage
                });
                updateError = (await Promise.allSettled(exports.checkpointService.getChildren()
                    .filter(cpNode => cpNode.isCheckpointEnabled())
                    .map(cpNode => executeCreateApexExecutionOverlayActionCommand(cpNode)))).some(promise => promise.status === 'rejected');
                progress.report({
                    increment: 100,
                    message: localizedProgressMessage
                });
                (0, index_1.writeToDebuggerOutputWindow)(`${localizedProgressMessage}, ${messages_1.nls.localize('checkpoint_creation_status_processing_complete_success')}`);
            });
        })));
    }
    finally {
        (0, index_1.writeToDebuggerOutputWindow)(`${messages_1.nls.localize('long_command_end')} ${localizedProgressMessage}`);
        let errorMsg = '';
        if (updateError) {
            errorMsg = messages_1.nls.localize('checkpoint_upload_error_wrap_up_message', messages_1.nls.localize('sf_update_checkpoints_in_org'));
            (0, index_1.writeToDebuggerOutputWindow)(errorMsg, true, index_1.VSCodeWindowTypeEnum.Error);
        }
        // Send checkpoint event using shared telemetry service
        salesforcedx_utils_vscode_1.TelemetryService.getInstance().sendEventData('apexReplayDebugger.checkpoint', {
            errorMessage: errorMsg
        });
        creatingCheckpoints = false;
    }
    if (updateError) {
        return false;
    }
    return true;
};
exports.sfCreateCheckpoints = sfCreateCheckpoints;
// A couple of important notes about this command's processing
// 1. There is no way to invoke a breakpoint change through vscode.debug
//    there is only add/delete.
// 2. A changed breakpoint has to first be deleted and then re-added.
// 3. Add/Delete breakpoints will go through the processBreakpointChangedForCheckpoints
//    event that's registered. That'll take care of all the checkpoint specific processing.
// 4. When a breakpoint already exists and it is being converted to a checkpoint, only
//    the hitCondition (which is really the hit count) is kept. The other pieces of information
//    that may be on the checkpoint are the condition (which needs to get set to Checkpoint)
//    and the logMessage. The logMessage is scrapped since this ends up being taken over by
//    checkpoints for user input SOQL or Apex.
const sfToggleCheckpoint = () => {
    if (creatingCheckpoints) {
        (0, index_1.writeToDebuggerOutputWindow)(messages_1.nls.localize('checkpoint_upload_in_progress'), true, index_1.VSCodeWindowTypeEnum.Warning);
        return;
    }
    const bpAdd = [];
    const bpRemove = [];
    const uri = checkpointUtils.fetchActiveEditorUri();
    const lineNumber = checkpointUtils.fetchActiveSelectionLineNumber();
    if (uri && lineNumber !== undefined) {
        // While selection could be passed directly into the location instead of creating
        // a new range, it ends up creating a weird secondary icon on the line with the
        // breakpoint which is due to the start/end characters being non-zero.
        let hitCondition;
        const bp = fetchExistingBreakpointForUriAndLineNumber(uri, lineNumber);
        // There's already a breakpoint at this line
        if (bp) {
            // If the breakpoint is a checkpoint then remove it and return
            if (bp.condition?.toLowerCase().includes(debuggerConstants_1.CHECKPOINT)) {
                bpRemove.push(bp);
                return vscode.debug.removeBreakpoints(bpRemove);
            }
            else {
                // The only thing from the old breakpoint that is applicable to keep is the hitCondition
                // which maps to iterations. Squirrel away hitCondition, remove the breakpoint and let
                // processing go into the code to create a new breakpoint with the checkpoint condition
                hitCondition = bp.hitCondition;
                bpRemove.push(bp);
                vscode.debug.removeBreakpoints(bpRemove);
            }
        }
        // Create a new checkpoint/breakpoint from scratch.
        const range = new vscode.Range(lineNumber, 0, lineNumber, 0);
        const location = new vscode.Location(uri, range);
        const newBreakpoint = new vscode.SourceBreakpoint(location, true, debuggerConstants_1.CHECKPOINT, hitCondition);
        bpAdd.push(newBreakpoint);
        vscode.debug.addBreakpoints(bpAdd);
    }
};
exports.sfToggleCheckpoint = sfToggleCheckpoint;
// This methods was broken out of sfToggleCheckpoint for testing purposes.
const fetchActiveEditorUri = () => vscode.window.activeTextEditor?.document.uri;
// This methods was broken out of sfToggleCheckpoint for testing purposes.
const fetchActiveSelectionLineNumber = () => vscode.window.activeTextEditor?.selection?.start.line;
const fetchExistingBreakpointForUriAndLineNumber = (uriInput, lineInput) => vscode.debug.breakpoints.find(bp => bp instanceof vscode.SourceBreakpoint &&
    bp.location.uri.toString() === uriInput.toString() &&
    bp.location.range.start.line === lineInput);
const checkpointUtils = {
    fetchActiveEditorUri,
    fetchActiveSelectionLineNumber
};
const getEnabledCheckpointCount = (service) => service.getChildren().filter(cpNode => cpNode.isCheckpointEnabled()).length;
const isSourceBreakpoint = (breakpoint) => Boolean(breakpoint instanceof vscode.SourceBreakpoint);
const isCheckpoint = (breakpoint) => Boolean(breakpoint.condition?.toLowerCase().includes(debuggerConstants_1.CHECKPOINT));
const isNotCheckpoint = (breakpoint) => !isCheckpoint(breakpoint);
//# sourceMappingURL=checkpointService.js.map