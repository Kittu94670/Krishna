"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchApexReplayDebuggerWithCurrentFile = void 0;
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const effect_ext_utils_1 = require("@salesforce/effect-ext-utils");
const salesforcedx_utils_1 = require("@salesforce/salesforcedx-utils");
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const node_path_1 = require("node:path");
const vscode = require("vscode");
const messages_1 = require("../messages");
const anonApexDebug_1 = require("./anonApexDebug");
const launchApexReplayDebuggerWithCurrentFile = async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        void salesforcedx_utils_vscode_1.notificationService.showErrorMessage(messages_1.nls.localize('unable_to_locate_editor'));
        return;
    }
    const sourceUri = editor.document.uri;
    if (!sourceUri) {
        void salesforcedx_utils_vscode_1.notificationService.showErrorMessage(messages_1.nls.localize('unable_to_locate_document'));
        return;
    }
    if (isLogFile(sourceUri)) {
        await launchReplayDebuggerLogFile(sourceUri);
        return;
    }
    if (isAnonymousApexFile(sourceUri)) {
        await launchAnonymousApexReplayDebugger();
        return;
    }
    const apexTestClassName = getApexTestClassName(editor.document);
    if (apexTestClassName) {
        await launchApexReplayDebugger(apexTestClassName);
        return;
    }
    void salesforcedx_utils_vscode_1.notificationService.showErrorMessage(messages_1.nls.localize('launch_apex_replay_debugger_unsupported_file'));
};
exports.launchApexReplayDebuggerWithCurrentFile = launchApexReplayDebuggerWithCurrentFile;
const isLogFile = (sourceUri) => (0, salesforcedx_utils_vscode_1.fileExtensionsMatch)(sourceUri, 'log');
const isAnonymousApexFile = (sourceUri) => (0, salesforcedx_utils_vscode_1.fileExtensionsMatch)(sourceUri, 'apex');
const launchReplayDebuggerLogFile = async (sourceUri) => {
    await vscode.commands.executeCommand('sf.launch.replay.debugger.logfile', {
        fsPath: sourceUri.fsPath
    });
};
const IS_TEST_REG_EXP = /@isTest/i;
const getApexTestClassName = (document) => document.uri.fsPath.endsWith('.cls') && IS_TEST_REG_EXP.test(document.getText())
    ? (0, node_path_1.basename)(document.uri.fsPath, '.cls')
    : undefined;
const launchAnonymousApexReplayDebugger = async () => {
    const commandlet = new salesforcedx_utils_vscode_1.SfCommandlet(effect_ext_utils_1.sfProjectPreconditionChecker, new salesforcedx_utils_vscode_1.EmptyParametersGatherer(), new AnonApexLaunchReplayDebuggerExecutor());
    await commandlet.run();
};
const launchApexReplayDebugger = async (apexTestClassName) => {
    await vscode.commands.executeCommand('sf.test.view.debugTests', {
        name: apexTestClassName
    });
};
class AnonApexLaunchReplayDebuggerExecutor extends salesforcedx_utils_vscode_1.SfCommandletExecutor {
    build() {
        return new salesforcedx_utils_1.CommandBuilder(messages_1.nls.localize('launch_apex_replay_debugger_with_selected_file'))
            .withLogName('launch_apex_replay_debugger_with_selected_file')
            .build();
    }
    async execute() {
        await (0, anonApexDebug_1.anonApexDebug)();
    }
}
//# sourceMappingURL=launchApexReplayDebuggerWithCurrentFile.js.map