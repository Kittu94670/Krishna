"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nls = void 0;
const vscode_i18n_1 = require("@salesforce/vscode-i18n");
const i18n_1 = require("./i18n");
const i18n_ja_1 = require("./i18n.ja");
exports.nls = (0, vscode_i18n_1.createNls)({ instanceName: 'salesforcedx-vscode-apex-replay-debugger', messages: i18n_1.messages, jaMessages: i18n_ja_1.messages });
//# sourceMappingURL=index.js.map