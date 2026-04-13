"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonApexDebug = void 0;
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const effect_ext_utils_1 = require("@salesforce/effect-ext-utils");
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const Effect = require("effect/Effect");
const path = require("node:path");
const vscode = require("vscode");
const vscode_uri_1 = require("vscode-uri");
const channels_1 = require("../channels");
const messages_1 = require("../messages");
const extensionProvider_1 = require("../services/extensionProvider");
const getLogFilePath = () => {
    const outputDir = salesforcedx_utils_vscode_1.projectPaths.debugLogsFolder();
    const now = new Date();
    const localDateFormatted = (0, salesforcedx_utils_vscode_1.getYYYYMMddHHmmssDateFormat)(now);
    return path.join(outputDir, `${localDateFormatted}.log`);
};
const saveLogFile = async (logFilePath, logs) => {
    if (!logFilePath || !logs)
        return false;
    await (0, salesforcedx_utils_vscode_1.createDirectory)(path.dirname(logFilePath));
    await (0, salesforcedx_utils_vscode_1.writeFile)(logFilePath, logs);
    return true;
};
const launchReplayDebugger = async (logs) => {
    const logFilePath = getLogFilePath();
    if (!logFilePath || !logs || !(await saveLogFile(logFilePath, logs)))
        return false;
    await vscode.commands.executeCommand('sf.launch.replay.debugger.logfile.path', logFilePath);
    return true;
};
class AnonApexGatherer {
    gather() {
        if ((0, salesforcedx_utils_vscode_1.hasRootWorkspace)()) {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return Promise.resolve({ type: 'CANCEL' });
            }
            const document = editor.document;
            if (!editor.selection.isEmpty || document.isUntitled || document.isDirty) {
                return Promise.resolve({
                    type: 'CONTINUE',
                    data: {
                        apexCode: !editor.selection.isEmpty ? document.getText(editor.selection) : document.getText(),
                        selection: !editor.selection.isEmpty
                            ? new vscode.Range(editor.selection.start, editor.selection.end)
                            : undefined
                    }
                });
            }
            return Promise.resolve({
                type: 'CONTINUE',
                data: { fileName: document.uri.fsPath }
            });
        }
        return Promise.resolve({ type: 'CANCEL' });
    }
}
class AnonApexLibraryDebugExecutor extends salesforcedx_utils_vscode_1.LibraryCommandletExecutor {
    constructor() {
        super(messages_1.nls.localize('apex_execute_text'), 'apex_execute_library', channels_1.OUTPUT_CHANNEL);
    }
    async run(response) {
        const { apexCode, fileName: apexFilePath, selection } = response.data;
        const code = apexCode ?? (apexFilePath ? await (0, salesforcedx_utils_vscode_1.readFile)(apexFilePath) : undefined);
        if (!code) {
            return false;
        }
        let execResult;
        try {
            execResult = await Effect.runPromise(Effect.gen(function* () {
                const api = yield* (yield* effect_ext_utils_1.ExtensionProviderService).getServicesApi;
                const { result, logBody } = yield* api.services.ExecuteAnonymousService.executeAndRetrieveLog(code);
                const documentUri = apexFilePath
                    ? vscode_uri_1.URI.file(apexFilePath)
                    : vscode_uri_1.URI.parse(vscode.window.activeTextEditor.document.uri.toString());
                yield* api.services.ExecuteAnonymousService.reportExecResult(result, documentUri, selection?.start.line);
                return { result, logBody };
            }).pipe(Effect.provide(extensionProvider_1.AllServicesLayer)));
        }
        catch (error) {
            void vscode.window.showErrorMessage(messages_1.nls.localize('apex_execute_debug_failed', String(error)));
            return false;
        }
        if (!execResult?.result) {
            return false;
        }
        return await launchReplayDebugger(execResult.logBody ?? undefined);
    }
}
const anonApexDebug = async () => {
    const commandlet = new salesforcedx_utils_vscode_1.SfCommandlet(effect_ext_utils_1.sfProjectPreconditionChecker, new AnonApexGatherer(), new AnonApexLibraryDebugExecutor());
    await commandlet.run();
};
exports.anonApexDebug = anonApexDebug;
//# sourceMappingURL=anonApexDebug.js.map