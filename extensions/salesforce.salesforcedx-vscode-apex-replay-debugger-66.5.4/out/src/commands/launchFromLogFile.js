"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchFromLogFile = void 0;
const vscode = require("vscode");
const debugConfigurationProvider_1 = require("../adapter/debugConfigurationProvider");
const launchFromLogFile = async (logFile, stopOnEntry = true) => {
    if (!vscode.debug.activeDebugSession && vscode.workspace.workspaceFolders?.[0]) {
        // Get the debug configuration with the log file path directly
        const config = debugConfigurationProvider_1.DebugConfigurationProvider.getConfig(logFile, stopOnEntry);
        // Start the debug session
        await vscode.debug.startDebugging(vscode.workspace.workspaceFolders[0], config);
    }
};
exports.launchFromLogFile = launchFromLogFile;
//# sourceMappingURL=launchFromLogFile.js.map