"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
const agents_1 = require("@salesforce/agents");
const core_1 = require("@salesforce/core");
const os_1 = require("os");
const coreExtensionService_1 = require("../../../services/coreExtensionService");
const logger_1 = require("../../../utils/logger");
const sessionStartGuards_1 = require("./sessionStartGuards");
const types_1 = require("../types");
const agentUtils_1 = require("../agent/agentUtils");
const core_2 = require("@salesforce/core");
/**
 * Manages agent session lifecycle (start, end, restart)
 */
class SessionManager {
    state;
    messageSender;
    agentInitializer;
    historyManager;
    logger;
    constructor(state, messageSender, agentInitializer, historyManager) {
        this.state = state;
        this.messageSender = messageSender;
        this.agentInitializer = agentInitializer;
        this.historyManager = historyManager;
        this.logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
    }
    /**
     * Starts a preview session for an agent
     */
    async startSession(agentId, agentSource, isLiveMode, webviewView) {
        if (!webviewView) {
            throw new Error('Webview is not ready. Please ensure the view is visible.');
        }
        const sessionStartId = this.state.beginSessionStart();
        const { ensureActive, isActive } = (0, sessionStartGuards_1.createSessionStartGuards)(this.state, sessionStartId);
        try {
            await this.state.setSessionStarting(true);
            ensureActive();
            // Clear any previous error messages
            this.messageSender.sendClearMessages();
            this.messageSender.sendSessionStarting();
            // Reset planId when starting a new session
            this.state.currentPlanId = undefined;
            // Get connection and project
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            ensureActive();
            // Update currentAgentId
            this.state.currentAgentId = agentId;
            const project = core_2.SfProject.getInstance();
            this.state.pendingStartAgentId = agentId;
            this.state.pendingStartAgentSource = agentSource;
            // Initialize agent based on source
            if (agentSource === agents_1.AgentSource.SCRIPT) {
                await this.initializeScriptAgent(agentId, conn, project, isLiveMode, isActive, ensureActive);
            }
            else {
                await this.initializePublishedAgent(agentId, conn, project, ensureActive);
            }
            if (!this.state.agentInstance) {
                throw new Error('Failed to initialize agent instance.');
            }
            // Start the session
            const session = await this.state.agentInstance.preview.start();
            ensureActive();
            this.state.sessionId = session.sessionId;
            this.state.sessionAgentId = agentId;
            this.logSessionStarted(isLiveMode);
            // Load history
            await this.historyManager.loadAndSendTraceHistory(agentId, agentSource);
            await this.state.setSessionActive(true);
            ensureActive();
            await this.state.setSessionStarting(false);
            ensureActive();
            // Send session started message
            const agentMessage = session.messages.find((msg) => msg.type === 'Inform');
            this.messageSender.sendSessionStarted(agentMessage?.message);
            this.state.pendingStartAgentId = undefined;
            this.state.pendingStartAgentSource = undefined;
            await this.state.setConversationDataAvailable(true);
        }
        catch (err) {
            if (err instanceof types_1.SessionStartCancelledError || !isActive()) {
                return;
            }
            // Handle compilation errors
            if (this.state.currentAgentSource === agents_1.AgentSource.SCRIPT &&
                err instanceof core_1.SfError &&
                err.message.includes('error compiling')) {
                const sfError = err;
                const detailedError = this.logCompilationError(sfError);
                this.messageSender.sendCompilationError(detailedError);
                await this.state.setSessionStarting(false);
                await this.state.setResetAgentViewAvailable(true);
                await this.state.setSessionErrorState(true);
                return;
            }
            const sfError = core_1.SfError.wrap(err);
            this.logger.error('Error starting session', sfError);
            throw sfError;
        }
    }
    /**
     * Ends the current agent session
     */
    async endSession(restoreViewCallback) {
        this.state.cancelPendingSessionStart();
        const sessionWasStarting = this.state.isSessionStarting;
        // Optimistic update: immediately update VS Code context so view/title icons change
        // This matches the webview's optimistic update for button state
        await this.state.setSessionActive(false);
        await this.state.setSessionStarting(false);
        const agentName = this.state.currentAgentName;
        const sessionId = this.state.sessionId;
        if (this.state.agentInstance && this.state.sessionId) {
            // Restore connection before clearing agent references
            try {
                await this.state.agentInstance.restoreConnection();
            }
            catch (error) {
                console.warn('Error restoring connection:', error);
            }
            this.state.clearSessionState();
            this.messageSender.sendSessionEnded();
        }
        else if (sessionWasStarting) {
            this.messageSender.sendSessionEnded();
        }
        this.logger.debug(`Simulation ended. AgentName: ${agentName}, SessionId: ${sessionId}`);
        if (sessionWasStarting && restoreViewCallback) {
            await restoreViewCallback();
        }
    }
    /**
     * Restarts the agent session without recompilation
     */
    async restartSession() {
        if (!this.state.agentInstance || !this.state.sessionId) {
            return;
        }
        try {
            const message = this.state.isLiveMode ? 'Restarting live test...' : 'Restarting...';
            await this.beginRestart(message);
            // Start a new session directly - the SDK handles ending the previous session internally
            const session = await this.state.agentInstance.preview.start();
            this.state.sessionId = session.sessionId;
            await this.completeRestart(session, 'Agent session restarted.');
        }
        catch (error) {
            await this.handleRestartError(error, 'restart');
        }
    }
    /**
     * Recompiles and restarts the agent session (full restart with compilation)
     */
    async recompileAndRestartSession() {
        const agentId = this.state.currentAgentId;
        const agentSource = this.state.currentAgentSource;
        const isLiveMode = this.state.isLiveMode;
        if (!agentId || !agentSource) {
            return;
        }
        const sessionStartId = this.state.beginSessionStart();
        const { ensureActive, isActive } = (0, sessionStartGuards_1.createSessionStartGuards)(this.state, sessionStartId);
        try {
            await this.beginRestart('Recompiling and restarting...');
            // End current session and clear agent instance (to trigger recompilation)
            if (this.state.agentInstance && this.state.sessionId) {
                const isAgentSimulate = agentSource === agents_1.AgentSource.SCRIPT;
                if (isAgentSimulate) {
                    await this.state.agentInstance.preview.end();
                }
                else {
                    await this.state.agentInstance.preview.end('UserRequest');
                }
                try {
                    await this.state.agentInstance.restoreConnection();
                }
                catch (error) {
                    console.warn('Error restoring connection:', error);
                }
            }
            // Clear session state including agent instance (forces recompilation)
            this.state.clearSessionState();
            ensureActive();
            // Get connection and project for re-initialization
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            ensureActive();
            this.state.currentAgentId = agentId;
            const project = core_2.SfProject.getInstance();
            this.state.pendingStartAgentId = agentId;
            this.state.pendingStartAgentSource = agentSource;
            // Re-initialize agent (this triggers compilation for script agents)
            if (agentSource === agents_1.AgentSource.SCRIPT) {
                await this.initializeScriptAgent(agentId, conn, project, isLiveMode, isActive, ensureActive);
            }
            else {
                await this.initializePublishedAgent(agentId, conn, project, ensureActive);
            }
            if (!this.state.agentInstance) {
                throw new Error('Failed to initialize agent instance.');
            }
            // Start the session
            const session = await this.state.agentInstance.preview.start();
            ensureActive();
            this.state.sessionId = session.sessionId;
            this.state.sessionAgentId = agentId;
            this.logSessionStarted(isLiveMode);
            await this.completeRestart(session, 'Agent session recompiled and restarted.', ensureActive);
            this.state.pendingStartAgentId = undefined;
            this.state.pendingStartAgentSource = undefined;
        }
        catch (error) {
            if (error instanceof types_1.SessionStartCancelledError || !isActive()) {
                return;
            }
            // Handle compilation errors specifically
            if (this.state.currentAgentSource === agents_1.AgentSource.SCRIPT &&
                error instanceof core_1.SfError &&
                error.message.includes('Failed to compile agent script')) {
                const sfError = error;
                const detailedError = this.logCompilationError(sfError);
                this.messageSender.sendCompilationError(detailedError);
                await this.state.setSessionStarting(false);
                await this.state.setResetAgentViewAvailable(true);
                await this.state.setSessionErrorState(true);
                return;
            }
            await this.handleRestartError(error, 'recompile and restart');
        }
    }
    /**
     * Common setup for restart operations - immediate UI feedback
     */
    async beginRestart(message) {
        await this.state.setSessionActive(false);
        await this.state.setSessionStarting(true);
        this.messageSender.sendClearMessages();
        this.messageSender.sendSessionStarting(message);
        // Clear conversation state
        this.state.currentPlanId = undefined;
        this.state.currentUserMessage = undefined;
        await this.state.setConversationDataAvailable(false);
    }
    /**
     * Common completion for restart operations
     */
    async completeRestart(session, logMessage, ensureActive) {
        if (this.state.currentAgentId && this.state.currentAgentSource) {
            await this.historyManager.loadAndSendTraceHistory(this.state.currentAgentId, this.state.currentAgentSource);
        }
        await this.state.setSessionActive(true);
        ensureActive?.();
        await this.state.setSessionStarting(false);
        ensureActive?.();
        const agentMessage = session.messages.find((msg) => msg.type === 'Inform');
        this.messageSender.sendSessionStarted(agentMessage?.message);
        await this.state.setConversationDataAvailable(true);
        this.logger.debug(logMessage);
    }
    /**
     * Logs session start information with agent details
     */
    logSessionStarted(isLiveMode) {
        const isLive = isLiveMode ?? false;
        this.logger.debug((isLive ? 'Live test session started' : 'Simulation session started') +
            ` for agent ${this.state.currentAgentName}. SessionId: ${this.state.sessionId}`);
    }
    /**
     * Logs compilation error details for script agents
     */
    logCompilationError(sfError) {
        this.logger.error('Failed to compile agent script', sfError);
        this.logger.errorDetail(sfError.name);
        return `Failed to compile agent script${os_1.EOL}${sfError.name}`;
    }
    /**
     * Common error handling for restart operations
     */
    async handleRestartError(error, action) {
        await this.state.setSessionActive(false);
        await this.state.setSessionStarting(false);
        const errorMessage = error instanceof Error ? error.message : String(error);
        this.logger.debug(`Failed to ${action} session: ${errorMessage}`);
        await this.messageSender.sendError(`Failed to ${action}: ${errorMessage}`);
        await this.state.setResetAgentViewAvailable(true);
        await this.state.setSessionErrorState(true);
    }
    /**
     * Initializes a script agent
     */
    async initializeScriptAgent(agentId, conn, project, isLiveMode, isActive, ensureActive) {
        const filePath = agentId;
        if (!filePath) {
            throw new Error('No file path found for script agent.');
        }
        const determinedLiveMode = isLiveMode ?? false;
        await this.state.setLiveMode(determinedLiveMode);
        ensureActive();
        // Initialize agent with lifecycle listeners
        await this.agentInitializer.initializeScriptAgent(filePath, conn, project, determinedLiveMode, isActive, (data) => {
            if (data.error) {
                this.messageSender.sendCompilationError(data.error);
            }
            else {
                this.logger.debug('Compilation endpoint called');
                this.messageSender.sendCompilationStarting(data.message);
            }
        }, (data) => {
            const modeMessage = determinedLiveMode ? 'Starting live test...' : 'Starting simulation...';
            this.messageSender.sendSimulationStarting(data.message || modeMessage);
        });
        this.state.currentAgentName = this.state.agentInstance?.name;
        this.state.currentAgentId = agentId;
        // Enable debug mode if set
        if (this.state.isApexDebuggingEnabled && this.state.agentInstance) {
            this.state.agentInstance.preview.setApexDebugging(this.state.isApexDebuggingEnabled);
        }
    }
    /**
     * Initializes a published agent
     */
    async initializePublishedAgent(agentId, conn, project, ensureActive) {
        // Validate agent ID format - only validate if it looks like a Bot ID
        // This prevents errors when a script agent name is incorrectly passed here
        if (agentId.startsWith('0X') && (agentId.length === 15 || agentId.length === 18)) {
            (0, agentUtils_1.validatePublishedAgentId)(agentId);
        }
        else {
            // If it doesn't look like a Bot ID, this is likely a misrouted script agent
            // Throw a more helpful error
            throw new Error(`Invalid agent ID for published agent. Expected a Bot ID (starting with "0X"), but got: ${agentId}. This may be a script agent.`);
        }
        // Published agents are always in live mode
        await this.state.setLiveMode(true);
        ensureActive();
        // Initialize agent
        await this.agentInitializer.initializePublishedAgent(agentId, conn, project);
        this.state.currentAgentName = this.state.agentInstance?.name;
        this.state.currentAgentId = agentId;
        // Enable debug mode if set
        if (this.state.isApexDebuggingEnabled && this.state.agentInstance) {
            this.state.agentInstance.preview.setApexDebugging(this.state.isApexDebuggingEnabled);
        }
    }
}
exports.SessionManager = SessionManager;
//# sourceMappingURL=sessionManager.js.map