"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVscodeCoreExtension = void 0;
const vscode = require("vscode");
/** makes sure the extension is active and returns the instance */
const getVscodeCoreExtension = async () => {
    const vscodeCoreExtension = vscode.extensions.getExtension('salesforce.salesforcedx-vscode-core');
    if (!vscodeCoreExtension) {
        throw new Error('Could not fetch a SalesforceVSCodeCoreApi instance');
    }
    // vscode could deactivate extensions, so just in case.
    if (!vscodeCoreExtension.isActive) {
        await vscodeCoreExtension.activate();
    }
    return vscodeCoreExtension;
};
exports.getVscodeCoreExtension = getVscodeCoreExtension;
//# sourceMappingURL=coreExtensionUtils.js.map