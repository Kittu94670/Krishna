"use strict";
/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockHeadlessUI = mockHeadlessUI;
exports.mockSingleInputBox = mockSingleInputBox;
exports.mockSingleQuickPick = mockSingleQuickPick;
/**
 * Headless UI Helpers for NUTs (Non-Unit Tests)
 *
 * These helpers automatically mock VS Code UI interactions to make tests
 * headless CI/CD friendly. All NUTs should use these helpers to avoid
 * requiring user interaction.
 */
const vscode = __importStar(require("vscode"));
/**
 * Mock VS Code UI functions for headless testing
 * Automatically handles showInputBox, showQuickPick, and other UI interactions
 *
 * @param options Configuration for mocked UI responses
 * @returns Object with restore function and call counters
 */
function mockHeadlessUI(options = {}) {
    const { inputBoxResponses = [], quickPickResponses = [], informationMessageResponse = true, errorMessageResponse = true } = options;
    // Store original functions
    const originalShowInputBox = vscode.window.showInputBox;
    const originalShowQuickPick = vscode.window.showQuickPick;
    const originalCreateInputBox = vscode.window.createInputBox;
    const originalCreateQuickPick = vscode.window.createQuickPick;
    const originalShowInformationMessage = vscode.window.showInformationMessage;
    const originalShowErrorMessage = vscode.window.showErrorMessage;
    const originalShowWarningMessage = vscode.window.showWarningMessage;
    const originalWithProgress = vscode.window.withProgress;
    let inputBoxCallCount = 0;
    let quickPickCallCount = 0;
    let informationMessageCallCount = 0;
    let errorMessageCallCount = 0;
    const progressReports = [];
    const progressTitles = [];
    // Mock showInputBox
    vscode.window.showInputBox = async (options) => {
        inputBoxCallCount++;
        const responseIndex = inputBoxCallCount - 1;
        if (responseIndex < inputBoxResponses.length) {
            const response = inputBoxResponses[responseIndex];
            console.log(`[Headless UI] showInputBox call #${inputBoxCallCount}: "${options?.prompt || 'no prompt'}" -> returning "${response}"`);
            return response;
        }
        console.warn(`[Headless UI] showInputBox call #${inputBoxCallCount}: No response configured, returning undefined`);
        return undefined;
    };
    // Mock showQuickPick
    vscode.window.showQuickPick = async (items, options) => {
        quickPickCallCount++;
        const responseIndex = quickPickCallCount - 1;
        // Resolve items if it's a Thenable
        const resolvedItems = items instanceof Promise ? await items : items;
        if (responseIndex < quickPickResponses.length) {
            const response = quickPickResponses[responseIndex];
            console.log(`[Headless UI] showQuickPick call #${quickPickCallCount}: "${options?.title || 'no title'}" -> returning "${response}"`);
            if (response === undefined) {
                return undefined;
            }
            // If response is a string, try to find it in the items
            if (Array.isArray(resolvedItems)) {
                if (resolvedItems.includes(response)) {
                    return response;
                }
                // If exact match not found, return first item or the response string
                return resolvedItems[0] || response;
            }
            return response;
        }
        // Default: return first item if available
        if (Array.isArray(resolvedItems) && resolvedItems.length > 0) {
            console.log(`[Headless UI] showQuickPick call #${quickPickCallCount}: No response configured, returning first item "${resolvedItems[0]}"`);
            return resolvedItems[0];
        }
        console.warn(`[Headless UI] showQuickPick call #${quickPickCallCount}: No response configured and no items available`);
        return undefined;
    };
    // Mock createInputBox (for wizard-style input boxes)
    vscode.window.createInputBox = () => {
        let onDidAcceptCallback;
        let onDidHideCallback;
        let onDidChangeValueCallback;
        const mockInputBox = {
            title: '',
            prompt: '',
            placeholder: '',
            value: '',
            validationMessage: undefined,
            buttons: [],
            onDidAccept: (callback) => {
                onDidAcceptCallback = callback;
                return { dispose: () => { } };
            },
            onDidHide: (callback) => {
                onDidHideCallback = callback;
                return { dispose: () => { } };
            },
            onDidTriggerButton: () => ({ dispose: () => { } }),
            onDidChangeValue: (callback) => {
                onDidChangeValueCallback = callback;
                return { dispose: () => { } };
            },
            show: () => {
                inputBoxCallCount++;
                const responseIndex = inputBoxCallCount - 1;
                // Use setImmediate for better compatibility with VS Code extension host
                setImmediate(() => {
                    if (responseIndex < inputBoxResponses.length) {
                        const response = inputBoxResponses[responseIndex];
                        console.log(`[Headless UI] createInputBox call #${inputBoxCallCount}: returning "${response}"`);
                        mockInputBox.value = response;
                        if (onDidChangeValueCallback) {
                            onDidChangeValueCallback(response);
                        }
                        if (onDidAcceptCallback) {
                            onDidAcceptCallback();
                        }
                    }
                    else {
                        console.warn(`[Headless UI] createInputBox call #${inputBoxCallCount}: No response configured, hiding`);
                        if (onDidHideCallback) {
                            onDidHideCallback();
                        }
                    }
                });
            },
            hide: () => { },
            dispose: () => { }
        };
        return mockInputBox;
    };
    // Mock createQuickPick (for wizard-style quick picks)
    vscode.window.createQuickPick = () => {
        let onDidAcceptCallback;
        let onDidHideCallback;
        const mockQuickPick = {
            title: '',
            placeholder: '',
            items: [],
            selectedItems: [],
            buttons: [],
            onDidAccept: (callback) => {
                onDidAcceptCallback = callback;
                return { dispose: () => { } };
            },
            onDidHide: (callback) => {
                onDidHideCallback = callback;
                return { dispose: () => { } };
            },
            onDidTriggerButton: () => ({ dispose: () => { } }),
            show: () => {
                quickPickCallCount++;
                const responseIndex = quickPickCallCount - 1;
                // Use setImmediate for better compatibility with VS Code extension host
                setImmediate(() => {
                    if (responseIndex < quickPickResponses.length) {
                        const response = quickPickResponses[responseIndex];
                        console.log(`[Headless UI] createQuickPick call #${quickPickCallCount}: returning "${response}"`);
                        if (response === undefined) {
                            if (onDidHideCallback) {
                                onDidHideCallback();
                            }
                            return;
                        }
                        // Find matching item by label
                        const matchingItem = mockQuickPick.items.find(item => item.label === response);
                        if (matchingItem) {
                            mockQuickPick.selectedItems = [matchingItem];
                        }
                        else if (mockQuickPick.items.length > 0) {
                            // Default to first item if no match
                            mockQuickPick.selectedItems = [mockQuickPick.items[0]];
                        }
                        if (onDidAcceptCallback) {
                            onDidAcceptCallback();
                        }
                    }
                    else {
                        // Default: select first item if available
                        if (mockQuickPick.items.length > 0) {
                            console.log(`[Headless UI] createQuickPick call #${quickPickCallCount}: No response, selecting first item "${mockQuickPick.items[0].label}"`);
                            mockQuickPick.selectedItems = [mockQuickPick.items[0]];
                            if (onDidAcceptCallback) {
                                onDidAcceptCallback();
                            }
                        }
                        else {
                            console.warn(`[Headless UI] createQuickPick call #${quickPickCallCount}: No response and no items`);
                            if (onDidHideCallback) {
                                onDidHideCallback();
                            }
                        }
                    }
                });
            },
            hide: () => { },
            dispose: () => { }
        };
        return mockQuickPick;
    };
    // Mock showInformationMessage (auto-accept)
    vscode.window.showInformationMessage = async (message, ...items) => {
        informationMessageCallCount++;
        console.log(`[Headless UI] showInformationMessage: "${message}"`);
        return informationMessageResponse && items.length > 0 ? items[0] : undefined;
    };
    // Mock showErrorMessage (auto-dismiss)
    vscode.window.showErrorMessage = async (message, ...items) => {
        errorMessageCallCount++;
        console.log(`[Headless UI] showErrorMessage: "${message}"`);
        return errorMessageResponse && items.length > 0 ? items[0] : undefined;
    };
    // Mock showWarningMessage (auto-dismiss)
    vscode.window.showWarningMessage = async (message, ...items) => {
        console.log(`[Headless UI] showWarningMessage: "${message}"`);
        return items.length > 0 ? items[0] : undefined;
    };
    // Mock withProgress to track progress messages
    vscode.window.withProgress = async (options, task) => {
        progressTitles.push(options.title || '');
        const mockProgress = {
            report: (value) => {
                progressReports.push({ message: value.message, increment: value.increment });
            }
        };
        return task(mockProgress);
    };
    // Restore function
    const restore = () => {
        vscode.window.showInputBox = originalShowInputBox;
        vscode.window.showQuickPick = originalShowQuickPick;
        vscode.window.createInputBox = originalCreateInputBox;
        vscode.window.createQuickPick = originalCreateQuickPick;
        vscode.window.showInformationMessage = originalShowInformationMessage;
        vscode.window.showErrorMessage = originalShowErrorMessage;
        vscode.window.showWarningMessage = originalShowWarningMessage;
        vscode.window.withProgress = originalWithProgress;
        console.log('[Headless UI] Restored original UI functions');
    };
    return {
        restore,
        inputBoxCalls: () => inputBoxCallCount,
        quickPickCalls: () => quickPickCallCount,
        informationMessageCalls: () => informationMessageCallCount,
        errorMessageCalls: () => errorMessageCallCount,
        progressReports: () => [...progressReports],
        progressTitles: () => [...progressTitles]
    };
}
/**
 * Helper to create a simple mock for a single input box call
 */
function mockSingleInputBox(response) {
    return mockHeadlessUI({ inputBoxResponses: [response] });
}
/**
 * Helper to create a simple mock for a single quick pick call
 */
function mockSingleQuickPick(response) {
    return mockHeadlessUI({ quickPickResponses: [response] });
}
//# sourceMappingURL=headlessUiHelpers.js.map