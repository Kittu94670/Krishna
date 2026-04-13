"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebviewMessageSender = void 0;
/**
 * Handles all outgoing messages to the webview
 */
class WebviewMessageSender {
    state;
    webviewView;
    constructor(state) {
        this.state = state;
    }
    setWebview(webviewView) {
        this.webviewView = webviewView;
    }
    postMessage(command, data) {
        if (!this.webviewView) {
            return;
        }
        this.webviewView.webview.postMessage({ command, data });
    }
    // Session messages
    sendSessionStarting(message) {
        this.postMessage('sessionStarting', { message: message || 'Starting session...' });
    }
    sendSessionStarted(welcomeMessage) {
        this.postMessage('sessionStarted', welcomeMessage);
    }
    sendSessionEnded() {
        this.postMessage('sessionEnded', {});
    }
    // Compilation messages
    sendCompilationStarting(message) {
        this.postMessage('compilationStarting', { message: message || 'Compiling agent...' });
    }
    sendCompilationError(message) {
        this.postMessage('compilationError', { message });
    }
    sendSimulationStarting(message) {
        this.postMessage('simulationStarting', { message });
    }
    // Chat messages
    sendMessageStarting() {
        this.postMessage('messageStarting', { message: 'Sending message...' });
    }
    sendMessageSent(content) {
        this.postMessage('messageSent', { content });
    }
    // Agent selection
    sendSelectAgent(agentId, forceRestart, agentSource) {
        this.postMessage('selectAgent', { agentId, forceRestart, agentSource });
    }
    sendAvailableAgents(agents, selectedAgentId) {
        this.postMessage('availableAgents', {
            agents,
            selectedAgentId: selectedAgentId || this.state.currentAgentId
        });
    }
    // Agent version info
    sendAgentVersionInfo(agentId, activeVersion) {
        this.postMessage('agentVersionInfo', { agentId, activeVersion });
    }
    // History messages
    sendConversationHistory(messages) {
        this.postMessage('conversationHistory', { messages });
    }
    sendSetConversation(messages, showPlaceholder) {
        this.postMessage('setConversation', { messages, showPlaceholder });
    }
    sendTraceHistory(agentId, entries) {
        this.postMessage('traceHistory', { agentId, entries });
    }
    sendTraceData(trace) {
        this.postMessage('traceData', trace);
    }
    sendNoHistoryFound(agentId) {
        this.postMessage('noHistoryFound', { agentId });
    }
    // Error messages
    async sendError(message, details) {
        const sanitizedMessage = this.stripHtmlTags(message);
        const sanitizedDetails = details ? this.stripHtmlTags(details) : undefined;
        this.postMessage('error', { message: sanitizedMessage, details: sanitizedDetails });
    }
    sendDebugLogError(message) {
        this.postMessage('debugLogError', { message });
    }
    // Configuration messages
    sendConfiguration(section, value) {
        this.postMessage('configuration', { section, value });
    }
    // Live mode messages
    sendLiveMode(isLiveMode) {
        this.postMessage('setLiveMode', { isLiveMode });
    }
    // Utility messages
    sendClearMessages() {
        this.postMessage('clearMessages');
    }
    sendRefreshAgents() {
        this.postMessage('refreshAgents');
    }
    // Theme colors for syntax highlighting
    sendThemeTokenColors(colors) {
        this.postMessage('themeTokenColors', colors);
    }
    // Helper method to strip HTML tags
    stripHtmlTags(text) {
        return text
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }
}
exports.WebviewMessageSender = WebviewMessageSender;
//# sourceMappingURL=webviewMessageSender.js.map