"use strict";
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
exports.activate = activate;
exports.getAgentCombinedViewProviderInstance = getAgentCombinedViewProviderInstance;
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
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const commands = __importStar(require("./commands"));
const commands_1 = require("./enums/commands");
const coreExtensionService_1 = require("./services/coreExtensionService");
const agentCombinedViewProvider_1 = require("./views/agentCombinedViewProvider");
const agents_1 = require("@salesforce/agents");
const testOutlineProvider_1 = require("./views/testOutlineProvider");
const testRunner_1 = require("./views/testRunner");
const toggleGeneratedData_1 = require("./commands/toggleGeneratedData");
const validateAgent_1 = require("./commands/validateAgent");
// Export the provider instance for testing purposes
let agentCombinedViewProviderInstance;
// This method is called when your extension is activated
async function activate(context) {
    const extensionHRStart = process.hrtime();
    try {
        let telemetryService;
        // Load dependencies in the background to avoid blocking activation
        coreExtensionService_1.CoreExtensionService.loadDependencies(context)
            .then(() => {
            telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        })
            .catch((err) => console.error('Error loading core dependencies:', err));
        // Note: CLI validation has been removed from activation to avoid false positives
        // during startup. Commands will fail with appropriate error messages if the
        // sf CLI or agent plugin is not installed.
        // Initialize diagnostic collection for agent validation
        (0, validateAgent_1.initializeDiagnosticCollection)(context);
        // Initialize and watch SF_SKIP_RETRIEVE setting
        const updateSkipRetrieveEnv = () => {
            const config = vscode.workspace.getConfiguration('salesforce.agentforceDX');
            process.env.SF_SKIP_RETRIEVE = config.get('skipRetrieve', false) ? 'true' : 'false';
        };
        // Set initial value
        updateSkipRetrieveEnv();
        // Register commands before initializing `testRunner`
        const disposables = [];
        disposables.push(commands.registerOpenAgentInOrgCommand());
        disposables.push(commands.registerActivateAgentCommand());
        disposables.push(commands.registerDeactivateAgentCommand());
        disposables.push(commands.registerValidateAgentCommand());
        disposables.push(commands.registerPreviewAgentCommand());
        disposables.push(commands.registerPublishAgentCommand());
        disposables.push(commands.registerCreateAiAuthoringBundleCommand());
        context.subscriptions.push(await registerTestView());
        const agentCombinedViewDisposable = registerAgentCombinedView(context);
        context.subscriptions.push(agentCombinedViewDisposable);
        // Update the test view without blocking activation
        setTimeout(() => {
            void (0, testOutlineProvider_1.getTestOutlineProvider)().refresh();
        }, 0);
        telemetryService?.sendExtensionActivationEvent(extensionHRStart);
        context.subscriptions.push(...disposables);
    }
    catch (err) {
        throw new Error(`Failed to initialize: ${err.message}`);
    }
}
// Export function to get the provider instance for testing
function getAgentCombinedViewProviderInstance() {
    return agentCombinedViewProviderInstance || agentCombinedViewProvider_1.AgentCombinedViewProvider.getInstance();
}
const registerTestView = async () => {
    const testOutlineProvider = (0, testOutlineProvider_1.getTestOutlineProvider)();
    const testViewItems = [];
    const testProvider = vscode.window.registerTreeDataProvider('sf.agent.test.view', testOutlineProvider);
    testViewItems.push(testProvider);
    const testRunner = new testRunner_1.AgentTestRunner(testOutlineProvider);
    testViewItems.push(vscode.commands.registerCommand(commands_1.Commands.goToTestResults, (test) => {
        testRunner.displayTestDetails(test);
    }));
    testViewItems.push(vscode.commands.registerCommand(commands_1.Commands.runTest, (test) => {
        void testRunner.runAgentTest(test);
    }));
    testViewItems.push(vscode.commands.registerCommand(commands_1.Commands.refreshTestView, () => testOutlineProvider.refresh()));
    testViewItems.push(vscode.commands.registerCommand(commands_1.Commands.collapseAll, () => testOutlineProvider.collapseAll()));
    // Initialize generated data context based on current setting
    const updateGeneratedDataContext = async () => {
        const generatedDataConfig = vscode.workspace.getConfiguration('salesforce.agentforceDX');
        const showGeneratedData = generatedDataConfig.get('showGeneratedData', false);
        await vscode.commands.executeCommand('setContext', 'agentforceDX:showGeneratedData', showGeneratedData);
    };
    // Listen for configuration changes
    testViewItems.push(vscode.workspace.onDidChangeConfiguration(async (e) => {
        if (e.affectsConfiguration('salesforce.agentforceDX.showGeneratedData')) {
            await updateGeneratedDataContext();
        }
    }));
    // Set initial context
    await updateGeneratedDataContext();
    // Register commands to toggle generated data visibility
    testViewItems.push(vscode.commands.registerCommand('sf.agent.test.view.toggleGeneratedData.on', async () => {
        await (0, toggleGeneratedData_1.toggleGeneratedDataOff)(); // Switch to off when clicking the "on" icon
    }), vscode.commands.registerCommand('sf.agent.test.view.toggleGeneratedData.off', async () => {
        await (0, toggleGeneratedData_1.toggleGeneratedDataOn)(); // Switch to on when clicking the "off" icon
    }));
    // Register focus test view alias command
    testViewItems.push(vscode.commands.registerCommand('sf.agent.focusTestView', async () => {
        await vscode.commands.executeCommand('sf.agent.test.view.focus');
    }));
    return vscode.Disposable.from(...testViewItems);
};
const registerAgentCombinedView = (context) => {
    // Register webview to be disposed on extension deactivation
    const provider = new agentCombinedViewProvider_1.AgentCombinedViewProvider(context);
    // Store the provider instance for testing purposes
    agentCombinedViewProviderInstance = provider;
    const disposables = [];
    // Register the webview provider
    disposables.push(vscode.window.registerWebviewViewProvider(agentCombinedViewProvider_1.AgentCombinedViewProvider.viewType, provider, {
        webviewOptions: { retainContextWhenHidden: true }
    }));
    // Listen for org changes and reset the agent view when org changes
    // This is done asynchronously since CoreExtensionService loads in the background
    coreExtensionService_1.CoreExtensionService.loadDependencies(context)
        .then(() => {
        const onOrgChange = coreExtensionService_1.CoreExtensionService.getOnOrgChangeEvent();
        disposables.push(onOrgChange(async (event) => {
            const channelService = coreExtensionService_1.CoreExtensionService.getChannelService();
            channelService.appendLine(`Org changed to: ${event.alias || event.username || 'unknown'}`);
            channelService.appendLine('Resetting agent preview...');
            // Reset the agent view and reload the agent list for the new org
            await provider.refreshAvailableAgents();
        }));
    })
        .catch((err) => {
        console.error('Could not set up org change listener:', err.message);
    });
    // Shared function for selecting and running an agent
    const selectAndRunAgent = async () => {
        const channelService = coreExtensionService_1.CoreExtensionService.getChannelService();
        try {
            const availableAgents = await provider.getAgentsForCommandPalette();
            const scriptAgents = availableAgents.filter(agent => agent.source === agents_1.AgentSource.SCRIPT).sort((a, b) => (a.developerName ?? a.aabName ?? '').localeCompare(b.developerName ?? b.aabName ?? ''));
            const publishedAgents = availableAgents.filter(agent => agent.source === agents_1.AgentSource.PUBLISHED).sort((a, b) => (a.developerName ?? a.aabName ?? '').localeCompare(b.developerName ?? b.aabName ?? ''));
            const allAgents = [];
            if (scriptAgents.length > 0) {
                allAgents.push({ label: 'Agent Script', kind: vscode.QuickPickItemKind.Separator });
                allAgents.push(...scriptAgents.map(agent => ({
                    label: (agent.developerName ?? agent.aabName),
                    description: agent.id ? path.basename(agent.id) : undefined,
                    // For script agents, use aabName to match what the webview expects
                    id: agent.aabName || agent.id,
                    source: agent.source
                })));
            }
            if (publishedAgents.length > 0) {
                allAgents.push({ label: 'Published', kind: vscode.QuickPickItemKind.Separator });
                allAgents.push(...publishedAgents.map(agent => ({
                    label: (agent.developerName ?? agent.aabName),
                    id: agent.id,
                    source: agent.source
                })));
            }
            if (allAgents.length === 0) {
                vscode.window.showErrorMessage('No agents found.');
                channelService.appendLine('No agents found.');
                return;
            }
            const selectedAgent = await vscode.window.showQuickPick(allAgents, {
                placeHolder: 'Select an agent to run'
            });
            if (selectedAgent && selectedAgent.id) {
                // Store the preference so the dropdown adopts the selection if the webview refreshes
                provider.setAgentId(selectedAgent.id);
                // Reveal the Agentforce DX panel
                await vscode.commands.executeCommand('sf.agent.combined.view.focus');
                const postSelectionMessage = () => {
                    if (provider.webviewView?.webview) {
                        // Send the selectAgent message with agentSource to avoid expensive re-fetch
                        provider.webviewView.webview.postMessage({
                            command: 'selectAgent',
                            data: { agentId: selectedAgent.id, agentSource: selectedAgent.source }
                        });
                    }
                };
                // If the webview already exists, update it immediately; otherwise try shortly after focus
                if (provider.webviewView?.webview) {
                    await postSelectionMessage();
                }
                else {
                    setTimeout(() => postSelectionMessage(), 300);
                }
            }
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to list agents: ${errorMessage}`);
            channelService.appendLine(`Failed to list agents: ${errorMessage}`);
        }
    };
    // Register toolbar commands
    disposables.push(vscode.commands.registerCommand('sf.agent.selectAndRun', selectAndRunAgent));
    // Register start agent alias command
    disposables.push(vscode.commands.registerCommand('sf.agent.startAgent', async () => {
        const currentAgentId = provider.getCurrentAgentId();
        if (currentAgentId) {
            // If agent is already selected, start it
            provider.selectAndStartAgent(currentAgentId);
        }
        else {
            // If no agent selected, show picker and then start the selected agent
            const channelService = coreExtensionService_1.CoreExtensionService.getChannelService();
            try {
                const availableAgents = await provider.getAgentsForCommandPalette();
                const scriptAgents = availableAgents.filter(agent => agent.source === agents_1.AgentSource.SCRIPT);
                const publishedAgents = availableAgents.filter(agent => agent.source === agents_1.AgentSource.PUBLISHED);
                const allAgents = [];
                if (scriptAgents.length > 0) {
                    allAgents.push({ label: 'Agent Script', kind: vscode.QuickPickItemKind.Separator });
                    allAgents.push(...scriptAgents.map(agent => ({
                        label: agent.name,
                        description: agent.id ? path.basename(agent.id) : undefined,
                        // For script agents, use aabName to match what the webview expects
                        id: agent.aabName || agent.id,
                        source: agent.source
                    })));
                }
                if (publishedAgents.length > 0) {
                    allAgents.push({ label: 'Published', kind: vscode.QuickPickItemKind.Separator });
                    allAgents.push(...publishedAgents.map(agent => ({
                        label: agent.name,
                        id: agent.id,
                        source: agent.source
                    })));
                }
                if (allAgents.length === 0) {
                    vscode.window.showErrorMessage('No agents found.');
                    channelService.appendLine('No agents found.');
                    return;
                }
                const selectedAgent = await vscode.window.showQuickPick(allAgents, {
                    placeHolder: 'Select an agent to start'
                });
                if (selectedAgent && selectedAgent.id) {
                    // Store the preference so the dropdown adopts the selection if the webview refreshes
                    provider.setAgentId(selectedAgent.id);
                    // Reveal the Agentforce DX panel
                    await vscode.commands.executeCommand('sf.agent.combined.view.focus');
                    // Start the selected agent
                    provider.selectAndStartAgent(selectedAgent.id);
                }
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                vscode.window.showErrorMessage(`Failed to list agents: ${errorMessage}`);
                channelService.appendLine(`Failed to list agents: ${errorMessage}`);
            }
        }
    }));
    // Register focus view alias command
    disposables.push(vscode.commands.registerCommand('sf.agent.focusView', async () => {
        await vscode.commands.executeCommand('sf.agent.combined.view.focus');
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.stop', async () => {
        await provider.endSession();
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.exportConversation', async () => {
        try {
            await provider.exportConversation();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Unable to export conversation: ${errorMessage}`);
        }
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.restart', async () => {
        // Lightweight restart - restart session without recompiling
        const currentAgentId = provider.getCurrentAgentId();
        if (!currentAgentId) {
            vscode.window.showErrorMessage('No agent selected to restart.');
            return;
        }
        // Restart the session without recompilation (reuses existing agentPreview instance)
        await provider.restartWithoutCompilation();
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.recompileAndRestart', async () => {
        // Full restart with recompilation - end session and start fresh
        const currentAgentId = provider.getCurrentAgentId();
        if (!currentAgentId) {
            vscode.window.showErrorMessage('No agent selected to restart.');
            return;
        }
        // Recompile and restart in a single motion (handles UI feedback internally)
        await provider.recompileAndRestart();
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.refreshAgents', async (selectAgentId) => {
        await provider.refreshAvailableAgents(selectAgentId);
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.resetAgentView', async () => {
        const currentAgentId = provider.getCurrentAgentId();
        if (!currentAgentId) {
            vscode.window.showErrorMessage('Agentforce DX: Select an agent to reset.');
            return;
        }
        try {
            await provider.resetCurrentAgentView();
            vscode.window.showInformationMessage('Agent preview reset.');
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Unable to reset agent view: ${errorMessage}`);
        }
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.debug', async () => {
        await provider.toggleDebugMode();
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.debugStop', async () => {
        await provider.toggleDebugMode();
    }));
    disposables.push(vscode.commands.registerCommand('sf.agent.combined.view.activateVersion', async () => {
        try {
            await provider.activateVersion();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to activate version: ${errorMessage}`);
        }
    }));
    return vscode.Disposable.from(...disposables);
};
//# sourceMappingURL=extension.js.map