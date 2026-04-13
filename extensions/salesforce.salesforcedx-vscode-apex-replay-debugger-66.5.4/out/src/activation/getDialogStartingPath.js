"use strict";
/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDialogStartingPath = void 0;
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const vscode_uri_1 = require("vscode-uri");
const debuggerConstants_1 = require("../debuggerConstants");
const getDialogStartingPath = async (extContext) => {
    if (salesforcedx_utils_vscode_1.workspaceUtils.hasRootWorkspace()) {
        // If the user has already selected a document through getLogFileName then
        // use that path if it still exists.
        const pathToLastOpenedLogFolder = getLastOpenedLogFolder(extContext);
        if (pathToLastOpenedLogFolder && (await (0, salesforcedx_utils_vscode_1.fileOrFolderExists)(pathToLastOpenedLogFolder))) {
            const lastOpenedLogFolderUri = getUriFor(pathToLastOpenedLogFolder);
            return lastOpenedLogFolderUri;
        }
        // If lastOpenedLogFolder isn't defined or doesn't exist then use the
        // same directory that the SFDX download logs command would download to
        // if it exists.
        const pathToWorkspaceLogsFolder = salesforcedx_utils_vscode_1.projectPaths.debugLogsFolder();
        if (await (0, salesforcedx_utils_vscode_1.fileOrFolderExists)(pathToWorkspaceLogsFolder)) {
            const workspaceLogsFolderUri = getUriFor(pathToWorkspaceLogsFolder);
            return workspaceLogsFolderUri;
        }
        // If all else fails, fallback to the .sfdx directory in the workspace
        const pathToStateFolder = salesforcedx_utils_vscode_1.projectPaths.stateFolder();
        const stateFolderUri = getUriFor(pathToStateFolder);
        return stateFolderUri;
    }
};
exports.getDialogStartingPath = getDialogStartingPath;
const getLastOpenedLogFolder = (extContext) => {
    const pathToLastOpenedLogFolder = extContext.workspaceState.get(debuggerConstants_1.LAST_OPENED_LOG_FOLDER_KEY);
    return pathToLastOpenedLogFolder;
};
const getUriFor = (path) => vscode_uri_1.URI.file(path);
//# sourceMappingURL=getDialogStartingPath.js.map