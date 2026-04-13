"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelService = exports.OUTPUT_CHANNEL = void 0;
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const vscode = require("vscode");
const messages_1 = require("../messages");
exports.OUTPUT_CHANNEL = vscode.window.createOutputChannel(messages_1.nls.localize('channel_name'));
exports.channelService = new salesforcedx_utils_vscode_1.ChannelService(exports.OUTPUT_CHANNEL);
//# sourceMappingURL=index.js.map