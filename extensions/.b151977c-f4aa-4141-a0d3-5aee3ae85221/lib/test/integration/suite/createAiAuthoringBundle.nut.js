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
/**
 * Integration test for creating an AI authoring bundle
 * This test verifies that the createAiAuthoringBundle command can generate a bundle locally
 */
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const helpers_1 = require("./helpers");
const headlessUiHelpers_1 = require("./headlessUiHelpers");
suite('Create AI Authoring Bundle Integration Test', () => {
    let testWorkspacePath;
    let specsDir;
    let specFilePath;
    let expectedBundleDir;
    suiteSetup(async function () {
        this.timeout(120000); // Increased timeout for extension activation and authentication
        testWorkspacePath = path.resolve(__dirname, '../../fixtures/test-workspace');
        // Wait for extension activation and authenticate once for the entire suite
        await (0, helpers_1.waitForExtensionActivation)(60000);
        await (0, helpers_1.authenticateDevHub)();
        const forceAppDir = path.join(testWorkspacePath, 'force-app');
        if (!fs.existsSync(forceAppDir)) {
            fs.mkdirSync(forceAppDir, { recursive: true });
        }
        specsDir = path.join(testWorkspacePath, 'specs');
        if (!fs.existsSync(specsDir)) {
            fs.mkdirSync(specsDir, { recursive: true });
        }
        const specContent = `name: WillieTestAgent
description: A test agent for integration testing
instructions: You are a helpful test assistant.
tools: []`;
        specFilePath = path.join(specsDir, 'test-agent-spec.yaml');
        fs.writeFileSync(specFilePath, specContent, 'utf8');
    });
    suiteTeardown(async function () {
        const aiAuthoringBundlesDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles');
        if (fs.existsSync(aiAuthoringBundlesDir)) {
            const entries = fs.readdirSync(aiAuthoringBundlesDir);
            for (const entry of entries) {
                const entryPath = path.join(aiAuthoringBundlesDir, entry);
                try {
                    const stat = fs.statSync(entryPath);
                    if (stat.isDirectory() || stat.isFile()) {
                        fs.rmSync(entryPath, { recursive: true, force: true });
                    }
                }
                catch (error) {
                    // Ignore cleanup errors
                }
            }
        }
    });
    async function executeAndVerifyBundle(bundleName, targetUri) {
        const aiAuthoringBundlesDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles');
        const expectedBundleDir = path.join(aiAuthoringBundlesDir, bundleName);
        const expectedAgentFile = path.join(expectedBundleDir, `${bundleName}.agent`);
        if (fs.existsSync(expectedBundleDir)) {
            fs.rmSync(expectedBundleDir, { recursive: true, force: true });
        }
        // Wizard flow: 1) template type selection, 2) spec file selection, 3) name input, 4) API name input
        const mockedUI = (0, headlessUiHelpers_1.mockHeadlessUI)({
            quickPickResponses: ['From an agent spec YAML file (Advanced)', 'test-agent-spec.yaml'],
            inputBoxResponses: [bundleName, bundleName]
        });
        try {
            if (targetUri) {
                await vscode.commands.executeCommand('salesforcedx-vscode-agents.createAiAuthoringBundle', targetUri);
            }
            else {
                await vscode.commands.executeCommand('salesforcedx-vscode-agents.createAiAuthoringBundle');
            }
            await new Promise(resolve => setTimeout(resolve, 10000));
            assert.ok(fs.existsSync(expectedBundleDir), `Expected bundle directory not found: ${expectedBundleDir}`);
            assert.ok(fs.existsSync(expectedAgentFile), `Expected agent file not found: ${expectedAgentFile}`);
            const agentFileContent = fs.readFileSync(expectedAgentFile, 'utf8');
            assert.ok(agentFileContent.length > 0, 'Agent file should have content');
            // Bundle name may appear as agent_label, developer_name, or elsewhere depending on spec/library
            assert.ok(agentFileContent.includes(bundleName), `Agent file should reference the bundle name "${bundleName}"`);
        }
        finally {
            mockedUI.restore();
        }
    }
    test('Should create AI authoring bundle via context menu (right-click on aiAuthoringBundles folder)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.createAiAuthoringBundle', 15000);
        assert.ok(fs.existsSync(specFilePath), 'Spec file should exist');
        const aiAuthoringBundlesDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles');
        const targetUri = vscode.Uri.file(aiAuthoringBundlesDir);
        await executeAndVerifyBundle('contextmenu', targetUri);
    });
    test('Should create AI authoring bundle via command palette (without URI, uses default path)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.createAiAuthoringBundle', 15000);
        assert.ok(fs.existsSync(specFilePath), 'Spec file should exist');
        await executeAndVerifyBundle('commandpalette');
    });
    test('Should create AI authoring bundle via command palette with explicit title', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.createAiAuthoringBundle', 15000);
        assert.ok(fs.existsSync(specFilePath), 'Spec file should exist');
        await executeAndVerifyBundle('commandpalettetitle');
    });
    test('Should create AI authoring bundle with Default Template (no custom spec)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.createAiAuthoringBundle', 15000);
        const bundleName = 'defaultconfig';
        const aiAuthoringBundlesDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles');
        const expectedBundleDir = path.join(aiAuthoringBundlesDir, bundleName);
        const expectedAgentFile = path.join(expectedBundleDir, `${bundleName}.agent`);
        if (fs.existsSync(expectedBundleDir)) {
            fs.rmSync(expectedBundleDir, { recursive: true, force: true });
        }
        // Select "Default template (Recommended)" (first quick pick item) by passing its label
        const mockedUI = (0, headlessUiHelpers_1.mockHeadlessUI)({
            quickPickResponses: ['Default template (Recommended)'],
            inputBoxResponses: [bundleName, bundleName]
        });
        try {
            await vscode.commands.executeCommand('salesforcedx-vscode-agents.createAiAuthoringBundle');
            await new Promise(resolve => setTimeout(resolve, 10000));
            assert.ok(fs.existsSync(expectedBundleDir), `Expected bundle directory not found: ${expectedBundleDir}`);
            assert.ok(fs.existsSync(expectedAgentFile), `Expected agent file not found: ${expectedAgentFile}`);
            const agentFileContent = fs.readFileSync(expectedAgentFile, 'utf8');
            assert.ok(agentFileContent.length > 0, 'Agent file should have content');
            assert.ok(agentFileContent.includes(bundleName), `Agent file should reference the bundle name "${bundleName}"`);
        }
        finally {
            mockedUI.restore();
        }
    });
});
//# sourceMappingURL=createAiAuthoringBundle.nut.js.map