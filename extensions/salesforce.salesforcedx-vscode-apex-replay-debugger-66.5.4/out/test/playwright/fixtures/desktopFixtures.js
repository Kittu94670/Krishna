"use strict";
/*
 * Copyright (c) 2026, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.desktopTest = void 0;
const playwright_vscode_ext_1 = require("@salesforce/playwright-vscode-ext");
exports.desktopTest = (0, playwright_vscode_ext_1.createDesktopTest)({
    fixturesDir: __dirname,
    orgAlias: playwright_vscode_ext_1.MINIMAL_ORG_ALIAS,
    additionalExtensionDirs: [
        'salesforcedx-vscode-core',
        'salesforcedx-vscode-apex',
        'salesforcedx-vscode-apex-log',
        'salesforcedx-vscode-apex-testing',
        'salesforcedx-vscode-metadata'
    ],
    disableOtherExtensions: false,
    userSettings: {
        'github.gitAuthentication': false,
        'git.terminalAuthentication': false,
        'git.autofetch': false,
        'salesforcedx-vscode-core.useMetadataExtensionCommands': true
    }
});
//# sourceMappingURL=desktopFixtures.js.map