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
exports.WebviewMessageHandlers = void 0;
const vscode = __importStar(require("vscode"));
const agents_1 = require("@salesforce/agents");
const core_1 = require("@salesforce/core");
const coreExtensionService_1 = require("../../../services/coreExtensionService");
const logger_1 = require("../../../utils/logger");
const agent_1 = require("../agent");
/**
 * Handles all incoming messages from the webview
 */
class WebviewMessageHandlers {
    state;
    messageSender;
    sessionManager;
    historyManager;
    apexDebugManager;
    context;
    webviewView;
    logger;
    constructor(state, messageSender, sessionManager, historyManager, apexDebugManager, context, webviewView) {
        this.state = state;
        this.messageSender = messageSender;
        this.sessionManager = sessionManager;
        this.historyManager = historyManager;
        this.apexDebugManager = apexDebugManager;
        this.context = context;
        this.webviewView = webviewView;
        this.logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
    }
    /**
     * Routes webview messages to the appropriate handler method
     */
    async handleMessage(message) {
        const command = message.command || message.type;
        if (!command) {
            console.warn('Received message without command or type:', message);
            return;
        }
        const commandHandlers = {
            startSession: async (msg) => await this.handleStartSession(msg),
            setApexDebugging: async (msg) => await this.handleSetApexDebugging(msg),
            sendChatMessage: async (msg) => await this.handleSendChatMessage(msg),
            endSession: async () => await this.handleEndSession(),
            loadAgentHistory: async (msg) => await this.handleLoadAgentHistory(msg),
            getAvailableAgents: async () => await this.handleGetAvailableAgents(),
            getTraceData: async () => await this.handleGetTraceData(),
            openTraceJson: async (msg) => await this.handleOpenTraceJson(msg),
            getConfiguration: async (msg) => await this.handleGetConfiguration(msg),
            executeCommand: async (msg) => await this.handleExecuteCommand(msg),
            setSelectedAgentId: async (msg) => await this.handleSetSelectedAgentId(msg),
            setLiveMode: async (msg) => await this.handleSetLiveMode(msg),
            getInitialLiveMode: async () => await this.handleGetInitialLiveMode(),
            // Test-specific commands for integration tests
            clearMessages: async () => {
                // Clear messages in the webview - no-op on extension side
                this.messageSender.sendClearMessages();
            },
            testTraceDataReceived: async () => {
                // Test command - no-op
            },
            testTraceHistoryReceived: async () => {
                // Test command - no-op
            }
        };
        const handler = commandHandlers[command];
        if (handler) {
            await handler(message);
        }
        else {
            console.warn(`Unknown webview command: ${command}`);
        }
    }
    /**
     * Handles errors from webview message processing
     */
    async handleError(err) {
        console.error('AgentCombinedViewProvider Error:', err);
        const sfError = core_1.SfError.wrap(err);
        const originalErrorMessage = sfError.message;
        this.logger.error('AgentCombinedViewProvider error', sfError);
        this.state.pendingStartAgentId = undefined;
        this.state.pendingStartAgentSource = undefined;
        if (this.state.agentInstance || this.state.isSessionActive) {
            this.state.clearSessionState();
            await this.state.setSessionActive(false);
            await this.state.setSessionStarting(false);
        }
        // Check for specific agent deactivation error
        if (originalErrorMessage.includes('404') &&
            originalErrorMessage.includes('NOT_FOUND') &&
            originalErrorMessage.includes('No valid version available')) {
            await this.messageSender.sendError('This agent is currently deactivated, so you can\'t converse with it.  Activate the agent using either the "AFDX: Activate Agent" VS Code command or your org\'s Agentforce UI.', originalErrorMessage);
        }
        else if (originalErrorMessage.includes('NOT_FOUND') && originalErrorMessage.includes('404')) {
            await this.messageSender.sendError("The selected agent couldn't be found. Either it's been deleted or you don't have access to it.", originalErrorMessage);
        }
        else if (originalErrorMessage.includes('403') || originalErrorMessage.includes('FORBIDDEN')) {
            await this.messageSender.sendError("You don't have permission to use this agent. Consult your Salesforce administrator.", originalErrorMessage);
        }
        else {
            // For unknown errors, show generic message with technical details
            await this.messageSender.sendError('Something went wrong. Please try again.', originalErrorMessage);
        }
        await this.state.setResetAgentViewAvailable(true);
        await this.state.setSessionErrorState(true);
    }
    async handleStartSession(message) {
        const data = message.data;
        const agentId = data?.agentId || this.state.currentAgentId;
        if (!agentId || typeof agentId !== 'string') {
            throw new Error(`Invalid agent ID: ${agentId}. Expected a string.`);
        }
        // Determine agent source - prefer passed value, then state, then fetch
        let agentSource = data?.agentSource ?? this.state.currentAgentSource;
        if (!agentSource) {
            agentSource = await (0, agent_1.getAgentSource)(agentId);
        }
        this.state.currentAgentSource = agentSource;
        const isLiveMode = data?.isLiveMode ?? false;
        await this.sessionManager.startSession(agentId, agentSource, isLiveMode, this.webviewView);
    }
    async handleSetApexDebugging(message) {
        const enabled = message.data;
        await this.state.setDebugMode(enabled ?? false);
        if (this.state.agentInstance) {
            this.state.agentInstance.preview.setApexDebugging(this.state.isApexDebuggingEnabled);
        }
    }
    async handleSendChatMessage(message) {
        if (!this.state.agentInstance || !this.state.sessionId) {
            throw new Error('Session has not been started.');
        }
        this.messageSender.sendMessageStarting();
        const data = message.data;
        const userMessage = data?.message;
        if (!userMessage || typeof userMessage !== 'string') {
            throw new Error('Invalid message: expected a string.');
        }
        this.logger.debug(`Sending message to agent preview. AgentName: ${this.state.currentAgentName}, SessionId: ${this.state.sessionId}`);
        const response = await this.state.agentInstance.preview.send(userMessage);
        const lastMessage = response.messages?.at(-1);
        this.state.currentPlanId = lastMessage?.planId;
        this.state.currentUserMessage = userMessage;
        this.messageSender.sendMessageSent(lastMessage?.message);
        this.logger.debug(`Received response from agent preview. AgentName: ${this.state.currentAgentName}, SessionId: ${this.state.sessionId}, PlanId: ${this.state.currentPlanId}`);
        // Load and send trace data after sending message
        if (this.state.currentAgentId && this.state.currentAgentSource) {
            const loadTraceWithRetry = async (retries = 5, delay = 200) => {
                for (let i = 0; i < retries; i++) {
                    try {
                        // Use agent instance method to get history
                        if (this.state.agentInstance && this.state.sessionId) {
                            await this.historyManager.loadAndSendTraceHistory(this.state.currentAgentId, this.state.currentAgentSource);
                            return;
                        }
                        if (i < retries - 1) {
                            await new Promise(resolve => setTimeout(resolve, delay));
                        }
                    }
                    catch (err) {
                        console.error(`Error loading trace after message (attempt ${i + 1}):`, err);
                        if (i < retries - 1) {
                            await new Promise(resolve => setTimeout(resolve, delay));
                        }
                    }
                }
            };
            loadTraceWithRetry().catch(err => {
                console.error('Error in trace loading retry:', err);
            });
        }
        // Handle Apex debug log
        if (this.state.isApexDebuggingEnabled && response.apexDebugLog) {
            await this.apexDebugManager.handleApexDebugLog(response.apexDebugLog, this.context);
        }
        else if (this.state.isApexDebuggingEnabled && !response.apexDebugLog) {
            vscode.window.showInformationMessage('Debug mode is enabled but no Apex was executed.');
        }
    }
    async handleEndSession() {
        await this.sessionManager.endSession(async () => {
            const agentId = this.state.pendingStartAgentId ?? this.state.currentAgentId;
            if (agentId) {
                const agentSource = this.state.pendingStartAgentSource ?? (await (0, agent_1.getAgentSource)(agentId));
                await this.historyManager.showHistoryOrPlaceholder(agentId, agentSource);
            }
        });
    }
    async handleLoadAgentHistory(message) {
        const data = message.data;
        const agentId = data?.agentId;
        if (agentId && typeof agentId === 'string') {
            // Use passed agentSource if available to avoid expensive listPreviewable call
            const agentSource = data?.agentSource ?? (await (0, agent_1.getAgentSource)(agentId));
            await this.historyManager.showHistoryOrPlaceholder(agentId, agentSource);
        }
    }
    async handleGetAvailableAgents() {
        try {
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            const project = core_1.SfProject.getInstance();
            const allAgents = await agents_1.Agent.listPreviewable(conn, project);
            // Map agents - script agents use aabName as id, published agents use id
            const mappedAgents = allAgents
                .filter(agent => agent.id || agent.aabName) // Must have either id (published) or aabName (script)
                .map(agent => {
                const agentId = agent.id || agent.aabName;
                if (!agentId) {
                    throw new Error(`Agent ${agent.name} is missing both id and aabName`);
                }
                return {
                    name: (agent.developerName ?? agent.aabName),
                    id: agentId,
                    type: agent.source
                };
            });
            // Fetch versions for all published agents in parallel and cache them
            const publishedAgents = mappedAgents.filter(a => a.type === agents_1.AgentSource.PUBLISHED);
            const versionMap = new Map();
            this.state.agentVersionsCache.clear();
            if (publishedAgents.length > 0) {
                const versionResults = await Promise.allSettled(publishedAgents.map(async (a) => {
                    const agent = await agents_1.Agent.init({ connection: conn, project, apiNameOrId: a.id });
                    const meta = await agent.getBotMetadata();
                    const versions = meta.BotVersions.records
                        .filter((v) => !v.IsDeleted)
                        .map((v) => ({
                        VersionNumber: v.VersionNumber,
                        Status: v.Status
                    }));
                    const active = versions.find((v) => v.Status === 'Active');
                    return { id: a.id, versions, activeVersion: active?.VersionNumber };
                }));
                for (const result of versionResults) {
                    if (result.status === 'fulfilled') {
                        this.state.agentVersionsCache.set(result.value.id, result.value.versions);
                        if (result.value.activeVersion !== undefined) {
                            versionMap.set(result.value.id, result.value.activeVersion);
                        }
                    }
                }
            }
            const agentsWithVersions = mappedAgents.map(a => ({
                ...a,
                activeVersion: versionMap.get(a.id)
            }));
            // Use pendingSelectAgentId if available (e.g., after creating a new agent), otherwise currentAgentId
            const selectAgentId = this.state.pendingSelectAgentId || this.state.currentAgentId;
            this.messageSender.sendAvailableAgents(agentsWithVersions, selectAgentId);
            // Update context for command visibility
            await this.state.setHasAgents(mappedAgents.length > 0);
            // Clear the pending/current agent IDs after use
            this.state.pendingSelectAgentId = undefined;
            if (this.state.currentAgentId) {
                this.state.currentAgentId = undefined;
            }
        }
        catch (err) {
            console.error('Error getting available agents from org:', err);
            this.state.pendingSelectAgentId = undefined;
            this.messageSender.sendAvailableAgents([], undefined);
            await this.state.setHasAgents(false);
        }
    }
    async handleGetTraceData() {
        try {
            if (this.state.currentAgentId && this.state.currentAgentSource) {
                await this.historyManager.loadAndSendTraceHistory(this.state.currentAgentId, this.state.currentAgentSource);
                return;
            }
            // If no agent is selected, send empty trace data
            const emptyTraceData = { plan: [], planId: '', sessionId: '' };
            this.messageSender.sendTraceData(emptyTraceData);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            await this.messageSender.sendError(errorMessage);
        }
    }
    async handleOpenTraceJson(message) {
        const data = message.data;
        await this.historyManager.openTraceJsonEntry(data?.entry);
    }
    async handleGetConfiguration(message) {
        const config = vscode.workspace.getConfiguration();
        const data = message.data;
        const section = data?.section;
        if (section) {
            const value = config.get(section);
            this.messageSender.sendConfiguration(section, value);
        }
    }
    async handleExecuteCommand(message) {
        const data = message.data;
        const commandId = data?.commandId;
        if (commandId && typeof commandId === 'string') {
            await vscode.commands.executeCommand(commandId);
        }
    }
    async handleSetSelectedAgentId(message) {
        const data = message.data;
        const agentId = data?.agentId;
        if (agentId && typeof agentId === 'string' && agentId !== '') {
            this.state.currentAgentId = agentId;
            // Use passed agentSource if available to avoid expensive listPreviewable call
            this.state.currentAgentSource = data?.agentSource ?? (await (0, agent_1.getAgentSource)(agentId));
            await this.state.setAgentSelected(true);
            await this.state.setResetAgentViewAvailable(false);
            await this.state.setSessionErrorState(false);
            // Load history atomically with agent selection to avoid download button delay
            await this.historyManager.showHistoryOrPlaceholder(agentId, this.state.currentAgentSource);
        }
        else {
            this.state.currentAgentId = undefined;
            this.state.currentAgentSource = undefined;
            this.state.currentAgentActiveVersion = undefined;
            await this.state.setAgentSelected(false);
            await this.state.setConversationDataAvailable(false);
        }
    }
    async handleSetLiveMode(message) {
        const data = message.data;
        const isLiveMode = data?.isLiveMode;
        if (typeof isLiveMode === 'boolean') {
            await this.state.setLiveMode(isLiveMode);
        }
    }
    async handleGetInitialLiveMode() {
        this.messageSender.sendLiveMode(this.state.isLiveMode);
    }
    async fetchAndSendActiveVersion(agentId) {
        const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
        const project = core_1.SfProject.getInstance();
        const agent = await agents_1.Agent.init({ connection: conn, project, apiNameOrId: agentId });
        const botMetadata = await agent.getBotMetadata();
        const activeRecord = botMetadata.BotVersions.records.find((v) => v.Status === 'Active' && !v.IsDeleted);
        const activeVersion = activeRecord?.VersionNumber;
        this.state.currentAgentActiveVersion = activeVersion;
        this.messageSender.sendAgentVersionInfo(agentId, activeVersion);
    }
}
exports.WebviewMessageHandlers = WebviewMessageHandlers;
//# sourceMappingURL=webviewMessageHandlers.js.map