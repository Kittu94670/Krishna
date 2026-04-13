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
exports.registerPreviewAgentCommand = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const commands_1 = require("../enums/commands");
const coreExtensionService_1 = require("../services/coreExtensionService");
const core_1 = require("@salesforce/core");
const agentCombinedViewProvider_1 = require("../views/agentCombinedViewProvider");
const agents_1 = require("@salesforce/agents");
const logger_1 = require("../utils/logger");
const registerPreviewAgentCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.previewAgent, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.previewAgent;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        // Get the file path from the context menu
        const filePath = uri?.fsPath || vscode.window.activeTextEditor?.document.fileName;
        if (!filePath) {
            vscode.window.showErrorMessage('No .agent file selected.');
            return;
        }
        // Clear previous output
        logger.clear();
        try {
            // Open the Agent Preview panel
            const provider = agentCombinedViewProvider_1.AgentCombinedViewProvider.getInstance();
            if (!provider) {
                vscode.window.showErrorMessage('Failed to get Agent Preview provider.');
                telemetryService?.sendException('previewAgent_failed', 'Failed to get Agent Preview provider.');
                return;
            }
            // For script agents, the dropdown uses aabName (bundle name) as the agent ID,
            // not the file path. Extract the aabName from the file path.
            // The aabName is the parent directory of the .agent file.
            const aabName = path.basename(path.dirname(filePath));
            // Determine agent source and find the matching agent ID for the dropdown
            // We need to match the ID format that handleGetAvailableAgents uses
            let agentId = aabName; // Default to aabName for script agents
            let agentSource = agents_1.AgentSource.SCRIPT;
            try {
                const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
                const project = core_1.SfProject.getInstance();
                const allAgents = await agents_1.Agent.listPreviewable(conn, project);
                // Find the matching agent - for script agents, match by aabName
                const agent = allAgents.find(a => a.aabName === aabName || a.id === aabName);
                if (agent) {
                    // Use the same ID format as handleGetAvailableAgents: agent.id || agent.aabName
                    agentId = agent.id || agent.aabName || aabName;
                    agentSource = agent.source;
                }
            }
            catch (err) {
                // If we can't fetch agents, continue with aabName as the ID
                console.warn('Could not fetch agents list, using aabName as agent ID:', err);
            }
            // Set the agent ID early so it's available when the webview requests available agents
            // This ensures the agent is pre-selected even if the webview mounts before we post selectAgent
            provider.setAgentId(agentId);
            // Open the Agentforce DX view
            await vscode.commands.executeCommand('workbench.view.extension.agentforce-dx');
            await vscode.commands.executeCommand('setContext', 'sf:project_opened', true);
            // Focus the panel to ensure it's visible
            if (provider.webviewView) {
                provider.webviewView.show?.(false);
            }
            // Wait for webview to be ready
            let webviewReady = false;
            const webviewTimeout = 10000; // 10 seconds timeout
            const webviewStartTime = Date.now();
            while (Date.now() - webviewStartTime < webviewTimeout) {
                if (provider.webviewView?.webview) {
                    const html = provider.webviewView.webview.html || '';
                    if (html.length > 0) {
                        webviewReady = true;
                        break;
                    }
                }
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            if (!webviewReady) {
                vscode.window.showWarningMessage('Webview is taking longer than expected to load. Please try again.');
                return;
            }
            // Send selectAgent message to update the webview UI
            // This is a backup in case the webview loaded before getAvailableAgents responded
            // The user will click play to start the preview session
            if (provider.webviewView?.webview) {
                provider.webviewView.webview.postMessage({
                    command: 'selectAgent',
                    data: { agentId: agentId, agentSource: agentSource }
                });
            }
        }
        catch (e) {
            const sfError = core_1.SfError.wrap(e);
            logger.error('Error previewing the .agent file', sfError);
            telemetryService?.sendException('previewAgent_failed', sfError.message);
        }
    });
};
exports.registerPreviewAgentCommand = registerPreviewAgentCommand;
//# sourceMappingURL=previewAgent.js.map