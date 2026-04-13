"use strict";
/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZeroBasedRange = void 0;
const vscode = require("vscode");
const getZeroBasedRange = (line, column) => {
    const pos = new vscode.Position(line > 0 ? line - 1 : 0, column > 0 ? column - 1 : 0);
    return new vscode.Range(pos, pos);
};
exports.getZeroBasedRange = getZeroBasedRange;
//# sourceMappingURL=range.js.map