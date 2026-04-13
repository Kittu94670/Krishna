"use strict";
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveTestCodeCoverage = void 0;
const vscode = require("vscode");
const APEX_TESTING_CONFIGURATION_NAME = 'salesforcedx-vscode-apex-testing';
const retrieveTestCodeCoverage = () => vscode.workspace.getConfiguration(APEX_TESTING_CONFIGURATION_NAME).get('retrieve-test-code-coverage', false);
exports.retrieveTestCodeCoverage = retrieveTestCodeCoverage;
//# sourceMappingURL=settings.js.map