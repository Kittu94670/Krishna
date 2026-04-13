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
 * Integration test for validating agent script files
 * This test verifies that the validateAgent command can validate .agent files
 */
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const helpers_1 = require("./helpers");
const headlessUiHelpers_1 = require("./headlessUiHelpers");
suite('Validate Agent Integration Test', () => {
    let testWorkspacePath;
    let validAgentFile;
    let invalidAgentFile;
    suiteSetup(async function () {
        this.timeout(120000); // Increased timeout for extension activation and authentication
        testWorkspacePath = path.resolve(__dirname, '../../fixtures/test-workspace');
        // Wait for extension activation and authenticate once for the entire suite
        await (0, helpers_1.waitForExtensionActivation)(60000);
        await (0, helpers_1.authenticateDevHub)();
        // Create a valid .agent file for testing
        const validAgentContent = `system:
    instructions: "You are an AI Agent."
    messages:
        welcome: "Hi, I'm an AI assistant. How can I help you?"
        error: "Sorry, it looks like something has gone wrong."

config:
  developer_name: "validateagent"
  default_agent_user: "pronto_sales_assistant.kasr8shhuuvg@orgfarm.salesforce.com"
  agent_label: "Validate Agent"
  description: "This agent assists Coral Cloud employees by answering questions related to staff training, work schedules, and company policies. It also helps guests by politely handling complaints and other escalations. It DOES NOT provide information about local events, weather, or other information, nor does it provide help or information related to guest experiences at the resort."
variables:
    EndUserId: linked string
        source: @MessagingSession.MessagingEndUserId
        description: "This variable may also be referred to as MessagingEndUser Id"
    RoutableId: linked string
        source: @MessagingSession.Id
        description: "This variable may also be referred to as MessagingSession Id"
    ContactId: linked string
        source: @MessagingEndUser.ContactId
        description: "This variable may also be referred to as MessagingEndUser ContactId"
    EndUserLanguage: linked string
        source: @MessagingSession.EndUserLanguage
        description: "This variable may also be referred to as MessagingSession EndUserLanguage"
    VerifiedCustomerId: mutable string
          description: "This variable may also be referred to as VerifiedCustomerId"

language:
    default_locale: "en_US"
    additional_locales: ""
    all_additional_locales: False

connection messaging:
    escalation_message: "One moment while I connect you to the next available service representative."
    outbound_route_type: "OmniChannelFlow"
    outbound_route_name: "agent_support_flow"
    adaptive_response_allowed: True

start_agent topic_selector:
    label: "Topic Selector"
    description: "Welcome the user and determine the appropriate topic based on user input"

    reasoning:
        instructions: ->
            | Select the tool that best matches the user's message and conversation history. If it's unclear, make your best guess.
        actions:
            go_to_escalation: @utils.transition to @topic.escalation

topic escalation:
    label: "Escalation"
    description: "Handles requests from users who want to transfer or escalate their conversation to a live human agent."

    reasoning:
        instructions: ->
            | If a user explicitly asks to transfer to a live agent, escalate the conversation.
              If escalation to a live agent fails for any reason, acknowledge the issue and ask the user whether they would like to log a support case instead.
        actions:
            escalate_to_human: @utils.escalate
                description: "Call this tool to escalate to a human agent."
`;
        const validAgentDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles', 'validateagent');
        if (!fs.existsSync(validAgentDir)) {
            fs.mkdirSync(validAgentDir, { recursive: true });
        }
        validAgentFile = path.join(validAgentDir, 'validateagent.agent');
        fs.writeFileSync(validAgentFile, validAgentContent, 'utf8');
        // Create the bundle-meta.xml file required for the agent bundle
        const bundleMetaXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<AiAuthoringBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <bundleType>AGENT</bundleType>
</AiAuthoringBundle>
`;
        const bundleMetaXmlFile = path.join(validAgentDir, 'validateagent.bundle-meta.xml');
        fs.writeFileSync(bundleMetaXmlFile, bundleMetaXmlContent, 'utf8');
        // Create an invalid .agent file for testing error cases
        const invalidAgentContent = `system:
    instructions: "You are an AI Agent."
    messages:
        welcome: "Hi, I'm an AI assistant. How can I help you?"
        error: "Sorry, it looks like something has gone wrong."

config:
  developer_name: "invalidagent"
  default_agent_user: "pronto_sales_assistant.kasr8shhuuvg@orgfarm.salesforce.com"
  agent_label: "Invalid Agent"
  description: "This agent has invalid configuration for testing error cases."
variables:
    EndUserId: linked string
        source: @MessagingSession.MessagingEndUserId
        description: "This variable may also be referred to as MessagingEndUser Id"
    RoutableId: linked string
        source: @MessagingSession.Id
        description: "This variable may also be referred to as MessagingSession Id"
    ContactId: linked string
        source: @MessagingEndUser.ContactId
        description: "This variable may also be referred to as MessagingEndUser ContactId"
    EndUserLanguage: linked string
        source: @MessagingSession.EndUserLanguage
        description: "This variable may also be referred to as MessagingSession EndUserLanguage"
    VerifiedCustomerId: mutable string
          description: "This variable may also be referred to as VerifiedCustomerId"

language:
    default_locale: "en_US"
    additional_locales: ""
    all_additional_locales: False

connection messaging:
    escalation_message: "One moment while I connect you to the next available service representative."
    outbound_route_type: "OmniChannelFlow"
    outbound_route_name: "agent_support_flow"
    adaptive_response_allowed: True

start_agent topic_selector:
    label: "Topic Selector"
    description: "Welcome the user and determine the appropriate topic based on user input"

    reasoning:
        instructions: ->
            | Select the tool that best matches the user's message and conversation history. If it's unclear, make your best guess.
        actions:
            go_to_escalation: @utils.transition to @topic.escalation`;
        const invalidAgentDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles', 'invalidagent');
        if (!fs.existsSync(invalidAgentDir)) {
            fs.mkdirSync(invalidAgentDir, { recursive: true });
        }
        invalidAgentFile = path.join(invalidAgentDir, 'invalidagent.agent');
        fs.writeFileSync(invalidAgentFile, invalidAgentContent, 'utf8');
        // Create the bundle-meta.xml file required for the agent bundle
        const invalidBundleMetaXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<AiAuthoringBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <bundleType>AGENT</bundleType>
</AiAuthoringBundle>
`;
        const invalidBundleMetaXmlFile = path.join(invalidAgentDir, 'invalidagent.bundle-meta.xml');
        fs.writeFileSync(invalidBundleMetaXmlFile, invalidBundleMetaXmlContent, 'utf8');
    });
    suiteTeardown(async function () {
        // Clean up test artifacts
        const aiAuthoringBundlesDir = path.join(testWorkspacePath, 'force-app', 'main', 'default', 'aiAuthoringBundles');
        if (fs.existsSync(aiAuthoringBundlesDir)) {
            const entries = fs.readdirSync(aiAuthoringBundlesDir);
            for (const entry of entries) {
                const entryPath = path.join(aiAuthoringBundlesDir, entry);
                try {
                    const stat = fs.statSync(entryPath);
                    if (stat.isDirectory() && (entry === 'validateagent' || entry === 'invalidagent')) {
                        fs.rmSync(entryPath, { recursive: true, force: true });
                    }
                }
                catch (error) {
                    // Ignore cleanup errors
                }
            }
        }
    });
    async function executeAndVerifyValidation(agentFile, shouldSucceed, targetUri) {
        const mockedUI = (0, headlessUiHelpers_1.mockHeadlessUI)({});
        try {
            if (!targetUri) {
                const doc = await vscode.workspace.openTextDocument(agentFile);
                await vscode.window.showTextDocument(doc);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            if (targetUri) {
                await vscode.commands.executeCommand('salesforcedx-vscode-agents.validateAgent', targetUri);
            }
            else {
                await vscode.commands.executeCommand('salesforcedx-vscode-agents.validateAgent');
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
            // Verify progress messages
            const progressTitles = mockedUI.progressTitles();
            const progressReports = mockedUI.progressReports();
            assert.ok(progressTitles.length > 0, 'Progress should have been shown');
            assert.ok(progressTitles.some(title => title.includes('Validate Agent')), 'Progress title should include "Validate Agent"');
            if (shouldSucceed) {
                assert.ok(progressReports.some(report => report.message?.includes('successful')), 'Progress should show success message');
            }
            else {
                assert.ok(progressReports.some(report => report.message?.includes('Failed') || report.message?.includes('error')), 'Progress should show failure message');
            }
            // Verify diagnostics match Problems panel
            const allDiagnostics = vscode.languages.getDiagnostics();
            const fileUri = vscode.Uri.file(agentFile);
            const fileDiagnostics = allDiagnostics.find(([uri]) => uri.fsPath === fileUri.fsPath)?.[1] || [];
            // Filter to only Agent Validation diagnostics (ignore YAML, TypeScript, etc.)
            const agentValidationDiagnostics = fileDiagnostics.filter(diagnostic => diagnostic.source === 'Agent Validation');
            if (shouldSucceed) {
                assert.strictEqual(agentValidationDiagnostics.length, 0, 'Valid agent file should have no Agent Validation diagnostics');
            }
            else {
                assert.ok(agentValidationDiagnostics.length > 0, 'Invalid agent file should have Agent Validation diagnostics');
                // Verify diagnostics have correct properties
                agentValidationDiagnostics.forEach((diagnostic, index) => {
                    assert.ok(diagnostic.message, `Diagnostic ${index} should have a message`);
                    assert.strictEqual(diagnostic.severity, vscode.DiagnosticSeverity.Error, `Diagnostic ${index} should be an error`);
                    assert.strictEqual(diagnostic.source, 'Agent Validation', `Diagnostic ${index} should have source "Agent Validation"`);
                    assert.ok(diagnostic.code, `Diagnostic ${index} should have an error code`);
                });
            }
        }
        finally {
            mockedUI.restore();
        }
    }
    test('Should validate agent file via editor context menu (right-click in editor)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(validAgentFile), 'Valid agent file should exist');
        const doc = await vscode.workspace.openTextDocument(validAgentFile);
        await vscode.window.showTextDocument(doc);
        await new Promise(resolve => setTimeout(resolve, 500));
        const targetUri = vscode.Uri.file(validAgentFile);
        await executeAndVerifyValidation(validAgentFile, true, targetUri);
    });
    test('Should validate agent file via explorer context menu (right-click in file explorer)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(validAgentFile), 'Valid agent file should exist');
        const targetUri = vscode.Uri.file(validAgentFile);
        await executeAndVerifyValidation(validAgentFile, true, targetUri);
    });
    test('Should validate agent file via command palette (with active .agent file)', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(validAgentFile), 'Valid agent file should exist');
        await executeAndVerifyValidation(validAgentFile, true);
    });
    test('Should validate agent file via command palette with explicit title', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(validAgentFile), 'Valid agent file should exist');
        const doc = await vscode.workspace.openTextDocument(validAgentFile);
        await vscode.window.showTextDocument(doc);
        await new Promise(resolve => setTimeout(resolve, 500));
        await executeAndVerifyValidation(validAgentFile, true);
    });
    test('Should show validation errors for invalid agent file via context menu', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(invalidAgentFile), 'Invalid agent file should exist');
        const targetUri = vscode.Uri.file(invalidAgentFile);
        await executeAndVerifyValidation(invalidAgentFile, false, targetUri);
    });
    test('Should show validation errors for invalid agent file via command palette', async function () {
        this.timeout(120000);
        await (0, helpers_1.waitForCommand)('salesforcedx-vscode-agents.validateAgent', 15000);
        assert.ok(fs.existsSync(invalidAgentFile), 'Invalid agent file should exist');
        const doc = await vscode.workspace.openTextDocument(invalidAgentFile);
        await vscode.window.showTextDocument(doc);
        await new Promise(resolve => setTimeout(resolve, 500));
        await executeAndVerifyValidation(invalidAgentFile, false);
    });
});
//# sourceMappingURL=validateAgent.nut.js.map