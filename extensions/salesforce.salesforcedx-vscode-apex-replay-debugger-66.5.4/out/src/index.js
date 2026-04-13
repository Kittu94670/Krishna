"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.writeToDebuggerOutputWindow = exports.retrieveLineBreakpointInfo = exports.activate = exports.getDebuggerType = exports.updateLastOpened = exports.VSCodeWindowTypeEnum = void 0;
const salesforcedx_apex_replay_debugger_1 = require("@salesforce/salesforcedx-apex-replay-debugger");
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const path = require("node:path");
const vscode = require("vscode");
const getDialogStartingPath_1 = require("./activation/getDialogStartingPath");
const debugConfigurationProvider_1 = require("./adapter/debugConfigurationProvider");
const checkpointService_1 = require("./breakpoints/checkpointService");
const channels_1 = require("./channels");
const anonApexDebug_1 = require("./commands/anonApexDebug");
const launchApexReplayDebuggerWithCurrentFile_1 = require("./commands/launchApexReplayDebuggerWithCurrentFile");
const launchFromLogFile_1 = require("./commands/launchFromLogFile");
const quickLaunch_1 = require("./commands/quickLaunch");
const debuggerConstants_1 = require("./debuggerConstants");
const messages_1 = require("./messages");
const extensionProvider_1 = require("./services/extensionProvider");
let extContext;
var VSCodeWindowTypeEnum;
(function (VSCodeWindowTypeEnum) {
    VSCodeWindowTypeEnum[VSCodeWindowTypeEnum["Error"] = 1] = "Error";
    VSCodeWindowTypeEnum[VSCodeWindowTypeEnum["Informational"] = 2] = "Informational";
    VSCodeWindowTypeEnum[VSCodeWindowTypeEnum["Warning"] = 3] = "Warning";
})(VSCodeWindowTypeEnum || (exports.VSCodeWindowTypeEnum = VSCodeWindowTypeEnum = {}));
const salesforceCoreExtension = vscode.extensions.getExtension('salesforce.salesforcedx-vscode-core');
if (!salesforceCoreExtension) {
    throw new Error('Salesforce Core Extension not initialized');
}
const salesforceApexExtension = vscode.extensions.getExtension('salesforce.salesforcedx-vscode-apex');
if (!salesforceApexExtension) {
    throw new Error('Salesforce Apex Extension not initialized');
}
const registerCommands = async () => {
    const dialogStartingPathUri = await (0, getDialogStartingPath_1.getDialogStartingPath)(extContext);
    const promptForLogCmd = vscode.commands.registerCommand('extension.replay-debugger.getLogFileName', async () => {
        const fileUris = await vscode.window.showOpenDialog({
            canSelectFiles: true,
            canSelectFolders: false,
            canSelectMany: false,
            defaultUri: dialogStartingPathUri
        });
        if (fileUris?.length === 1) {
            (0, exports.updateLastOpened)(extContext, fileUris[0].fsPath);
            return fileUris[0].fsPath;
        }
    });
    const launchFromLogFileCmd = vscode.commands.registerCommand('sf.launch.replay.debugger.logfile', async (editorUri) => {
        const resolved = editorUri ?? vscode.window.activeTextEditor?.document.uri;
        if (resolved) {
            (0, exports.updateLastOpened)(extContext, resolved.fsPath);
        }
        await (0, launchFromLogFile_1.launchFromLogFile)(resolved?.fsPath);
    });
    const launchFromLogFilePathCmd = vscode.commands.registerCommand('sf.launch.replay.debugger.logfile.path', async (logFilePath) => {
        if (logFilePath) {
            await (0, launchFromLogFile_1.launchFromLogFile)(logFilePath, true);
        }
    });
    const launchFromLastLogFileCmd = vscode.commands.registerCommand('sf.launch.replay.debugger.last.logfile', async () => {
        const lastOpenedLog = extContext.workspaceState.get(debuggerConstants_1.LAST_OPENED_LOG_KEY);
        await (0, launchFromLogFile_1.launchFromLogFile)(lastOpenedLog);
    });
    const sfCreateCheckpointsCmd = vscode.commands.registerCommand('sf.create.checkpoints', checkpointService_1.sfCreateCheckpoints);
    const sfToggleCheckpointCmd = vscode.commands.registerCommand('sf.toggle.checkpoint', checkpointService_1.sfToggleCheckpoint);
    const anonApexDebugDelegateCmd = vscode.commands.registerCommand('sf.anon.apex.debug.delegate', anonApexDebug_1.anonApexDebug);
    const anonApexDebugDocumentCmd = vscode.commands.registerCommand('sf.apex.debug.document', anonApexDebug_1.anonApexDebug);
    const launchApexReplayDebuggerWithCurrentFileCmd = vscode.commands.registerCommand('sf.launch.apex.replay.debugger.with.current.file', launchApexReplayDebuggerWithCurrentFile_1.launchApexReplayDebuggerWithCurrentFile);
    return vscode.Disposable.from(promptForLogCmd, launchFromLogFileCmd, launchFromLogFilePathCmd, launchFromLastLogFileCmd, sfCreateCheckpointsCmd, sfToggleCheckpointCmd, anonApexDebugDelegateCmd, anonApexDebugDocumentCmd, launchApexReplayDebuggerWithCurrentFileCmd);
};
const updateLastOpened = (extensionContext, logPath) => {
    extensionContext.workspaceState.update(debuggerConstants_1.LAST_OPENED_LOG_KEY, logPath);
    extensionContext.workspaceState.update(debuggerConstants_1.LAST_OPENED_LOG_FOLDER_KEY, path.dirname(logPath));
};
exports.updateLastOpened = updateLastOpened;
const getDebuggerType = async (session) => {
    let type = session.type;
    if (type === debuggerConstants_1.LIVESHARE_DEBUGGER_TYPE) {
        type = await session.customRequest(debuggerConstants_1.LIVESHARE_DEBUG_TYPE_REQUEST);
    }
    return type;
};
exports.getDebuggerType = getDebuggerType;
const registerDebugHandlers = () => {
    const customEventHandler = vscode.debug.onDidReceiveDebugSessionCustomEvent(async (event) => {
        if (event?.session) {
            const type = await (0, exports.getDebuggerType)(event.session);
            if (type !== debuggerConstants_1.DEBUGGER_TYPE) {
                return;
            }
            if (event.event === salesforcedx_apex_replay_debugger_1.SEND_METRIC_LAUNCH_EVENT && event.body) {
                const metricLaunchArgs = event.body;
                salesforcedx_utils_vscode_1.TelemetryService.getInstance().sendEventData('apexReplayDebugger.launch', {
                    logSize: metricLaunchArgs.logSize.toString(),
                    errorSubject: metricLaunchArgs.error.subject
                });
            }
            else if (event.event === salesforcedx_apex_replay_debugger_1.SEND_METRIC_ERROR_EVENT && event.body) {
                const metricErrorArgs = event.body;
                salesforcedx_utils_vscode_1.TelemetryService.getInstance().sendEventData('apexReplayDebugger.error', {
                    subject: metricErrorArgs.subject,
                    callstack: metricErrorArgs.callstack
                });
            }
            else if (event.event === salesforcedx_apex_replay_debugger_1.SEND_METRIC_GENERAL_EVENT && event.body) {
                const metricGeneralArgs = event.body;
                salesforcedx_utils_vscode_1.TelemetryService.getInstance().sendEventData('apexReplayDebugger.general', {
                    subject: metricGeneralArgs.subject,
                    type: metricGeneralArgs.type,
                    qty: metricGeneralArgs.qty?.toString() ?? 'undefined'
                });
            }
        }
    });
    return vscode.Disposable.from(customEventHandler);
};
const activate = async (extensionContext) => {
    extContext = extensionContext;
    (0, extensionProvider_1.setAllServicesLayer)((0, extensionProvider_1.buildAllServicesLayer)(extensionContext));
    const commands = await registerCommands();
    const debugHandlers = registerDebugHandlers();
    const debugConfigProvider = vscode.debug.registerDebugConfigurationProvider('apex-replay', new debugConfigurationProvider_1.DebugConfigurationProvider());
    const checkpointsView = vscode.window.registerTreeDataProvider('sf.view.checkpoint', checkpointService_1.checkpointService);
    const breakpointsSub = vscode.debug.onDidChangeBreakpoints(checkpointService_1.processBreakpointChangedForCheckpoints);
    // Activate Salesforce Core and Apex Extensions
    if (!salesforceCoreExtension.isActive) {
        await salesforceCoreExtension.activate();
    }
    if (!salesforceApexExtension.isActive) {
        await salesforceApexExtension.activate();
    }
    // Workspace Context
    await salesforceCoreExtension.exports.services.WorkspaceContext.getInstance().initialize(extensionContext);
    // Debug Tests command
    const debugTests = vscode.commands.registerCommand('sf.test.view.debugTests', async (test) => {
        await (0, quickLaunch_1.setupAndDebugTests)(test.name);
    });
    // Debug Single Test command
    const debugTest = vscode.commands.registerCommand('sf.test.view.debugSingleTest', async (test) => {
        const [method, className, namespace] = test.name.split('.').toReversed();
        await (0, quickLaunch_1.setupAndDebugTests)(namespace ? `${namespace}.${className}` : className, method);
    });
    extensionContext.subscriptions.push(commands, debugHandlers, debugConfigProvider, checkpointsView, breakpointsSub, debugTests, debugTest);
    // Telemetry
    const telemetryService = salesforcedx_utils_vscode_1.TelemetryService.getInstance();
    await telemetryService.initializeService(extensionContext);
    const activationTracker = new salesforcedx_utils_vscode_1.ActivationTracker(extensionContext, telemetryService);
    await activationTracker.markActivationStop();
};
exports.activate = activate;
const retrieveLineBreakpointInfo = async () => {
    if (!salesforceApexExtension.isActive) {
        await salesforceApexExtension.activate();
    }
    if (salesforceApexExtension) {
        let expired = false;
        let i = 0;
        while (!salesforceApexExtension.exports.languageClientManager.getStatus().isReady() && !expired) {
            if (salesforceApexExtension.exports.languageClientManager.getStatus().failedToInitialize()) {
                throw Error(salesforceApexExtension.exports.languageClientManager.getStatus().getStatusMessage());
            }
            await imposeSlightDelay(100);
            if (i >= 30) {
                expired = true;
            }
            i++;
        }
        if (expired) {
            const errorMessage = messages_1.nls.localize('language_client_not_ready');
            (0, exports.writeToDebuggerOutputWindow)(errorMessage, true, VSCodeWindowTypeEnum.Error);
            return false;
        }
        else {
            const lineBpInfo = await salesforceApexExtension.exports.getLineBreakpointInfo();
            if (lineBpInfo?.length) {
                console.log(messages_1.nls.localize('line_breakpoint_information_success'));
                salesforcedx_apex_replay_debugger_1.breakpointUtil.createMappingsFromLineBreakpointInfo(lineBpInfo);
                return true;
            }
            else {
                const errorMessage = messages_1.nls.localize('no_line_breakpoint_information_for_current_project');
                (0, exports.writeToDebuggerOutputWindow)(errorMessage, true, VSCodeWindowTypeEnum.Error);
                return true;
            }
        }
    }
    else {
        const errorMessage = messages_1.nls.localize('session_language_server_error_text');
        (0, exports.writeToDebuggerOutputWindow)(errorMessage, true, VSCodeWindowTypeEnum.Error);
        return false;
    }
};
exports.retrieveLineBreakpointInfo = retrieveLineBreakpointInfo;
const imposeSlightDelay = (ms = 0) => new Promise(r => setTimeout(r, ms));
const writeToDebuggerOutputWindow = (output, showVSCodeWindow, vsCodeWindowType) => {
    channels_1.channelService.appendLine(output);
    channels_1.channelService.showChannelOutput();
    if (showVSCodeWindow && vsCodeWindowType) {
        switch (vsCodeWindowType) {
            case VSCodeWindowTypeEnum.Error: {
                vscode.window.showErrorMessage(output);
                break;
            }
            case VSCodeWindowTypeEnum.Informational: {
                vscode.window.showInformationMessage(output);
                break;
            }
            case VSCodeWindowTypeEnum.Warning: {
                vscode.window.showWarningMessage(output);
                break;
            }
        }
    }
};
exports.writeToDebuggerOutputWindow = writeToDebuggerOutputWindow;
const deactivate = () => {
    console.log('Apex Replay Debugger Extension Deactivated');
    // Send deactivation event using shared service
    salesforcedx_utils_vscode_1.TelemetryService.getInstance().sendExtensionDeactivationEvent();
};
exports.deactivate = deactivate;
//# sourceMappingURL=index.js.map