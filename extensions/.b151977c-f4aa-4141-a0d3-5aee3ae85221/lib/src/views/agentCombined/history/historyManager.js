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
exports.HistoryManager = void 0;
const utils_1 = require("@salesforce/agents/lib/utils");
const vscode = __importStar(require("vscode"));
const agentUtils_1 = require("../agent/agentUtils");
/**
 * Manages conversation and trace history
 */
class HistoryManager {
    state;
    messageSender;
    constructor(state, messageSender) {
        this.state = state;
        this.messageSender = messageSender;
    }
    /**
     * Load conversation history for an agent and send it to the webview
     */
    async loadAndSendConversationHistory(agentId, agentSource) {
        try {
            const transcriptEntries = await this.loadConversationHistoryData(agentId, agentSource);
            if (transcriptEntries.length > 0) {
                const historyMessages = this.convertTranscriptToMessages(transcriptEntries);
                if (historyMessages.length > 0) {
                    this.messageSender.sendConversationHistory(historyMessages);
                    await this.state.setConversationDataAvailable(true);
                    return true;
                }
            }
        }
        catch (err) {
            console.error('Could not load conversation history:', err);
        }
        await this.state.setConversationDataAvailable(false);
        return false;
    }
    /**
     * Converts transcript entries to message format, sorted chronologically
     */
    convertTranscriptToMessages(transcriptEntries) {
        return transcriptEntries
            .filter(entry => entry.text)
            .map(entry => ({
            id: `${entry.timestamp}-${entry.sessionId}`,
            type: entry.role === 'user' ? 'user' : 'agent',
            content: entry.text || '',
            timestamp: new Date(entry.timestamp).getTime()
        }))
            .sort((a, b) => a.timestamp - b.timestamp);
    }
    /**
     * Extracts the start time from a trace's UserInputStep for sorting
     */
    getTraceStartTime(trace) {
        try {
            const traceObj = trace;
            if (traceObj?.plan && Array.isArray(traceObj.plan)) {
                const userInputStep = traceObj.plan.find(step => step.type === 'UserInputStep');
                if (userInputStep?.startExecutionTime) {
                    return userInputStep.startExecutionTime;
                }
            }
        }
        catch (error) {
            // Fall through to default
        }
        return undefined;
    }
    /**
     * Extracts user message from trace data
     */
    extractUserMessageFromTrace(trace) {
        try {
            // Trace structure: { plan: Array<{ type: string, message?: string, ... }> }
            const traceObj = trace;
            if (traceObj?.plan && Array.isArray(traceObj.plan)) {
                // Find the first UserInputStep which contains the user message
                const userInputStep = traceObj.plan.find(step => step.type === 'UserInputStep' || step.stepType === 'UserInputStep');
                if (userInputStep?.message) {
                    return userInputStep.message;
                }
            }
        }
        catch (error) {
            console.error('Error extracting user message from trace:', error);
        }
        return undefined;
    }
    /**
     * Load trace history for an agent and send it to the webview
     */
    async loadAndSendTraceHistory(agentId, agentSource) {
        try {
            const entries = await this.loadTraceHistoryData(agentId, agentSource);
            // Send trace history to populate the history list
            this.messageSender.sendTraceHistory(agentId, entries);
            // Send current or latest trace data
            if (entries.length > 0) {
                const currentEntry = this.state.currentPlanId
                    ? entries.find(entry => entry.planId === this.state.currentPlanId)
                    : undefined;
                const entryToSend = currentEntry || entries[entries.length - 1];
                this.messageSender.sendTraceData(entryToSend.trace);
            }
        }
        catch (error) {
            console.error('Could not load trace history:', error);
            this.messageSender.sendTraceHistory(agentId, []);
        }
    }
    /**
     * Opens a trace JSON entry in the editor
     * Creates a virtual document instead of saving to disk
     */
    async openTraceJsonEntry(entryData) {
        if (!entryData || typeof entryData !== 'object' || !entryData.trace) {
            vscode.window.showErrorMessage('Unable to open trace JSON: Missing trace details.');
            return;
        }
        try {
            // Create a virtual document URI instead of saving to disk
            const traceJson = JSON.stringify(entryData.trace, null, 2);
            const uri = vscode.Uri.parse(`untitled:${entryData.planId || 'trace'}.json`);
            const document = await vscode.workspace.openTextDocument(uri);
            const edit = new vscode.WorkspaceEdit();
            edit.insert(uri, new vscode.Position(0, 0), traceJson);
            await vscode.workspace.applyEdit(edit);
            await vscode.window.showTextDocument(document, { preview: true });
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Unable to open trace JSON: ${errorMessage}`);
            console.error('Unable to open trace JSON:', error);
        }
    }
    /**
     * Shows history or placeholder for an agent
     * Uses atomic setConversation message to avoid visual blink
     */
    async showHistoryOrPlaceholder(agentId, agentSource) {
        try {
            // Load both histories in parallel
            const [traceEntries, transcriptEntries] = await Promise.all([
                this.loadTraceHistoryData(agentId, agentSource),
                this.loadConversationHistoryData(agentId, agentSource)
            ]);
            // Send trace history
            this.messageSender.sendTraceHistory(agentId, traceEntries);
            // Convert and send conversation history
            const historyMessages = this.convertTranscriptToMessages(transcriptEntries);
            const hasHistory = historyMessages.length > 0;
            await this.state.setConversationDataAvailable(hasHistory);
            this.messageSender.sendSetConversation(historyMessages, !hasHistory);
            // Send current or latest trace data
            if (traceEntries.length > 0) {
                const currentEntry = this.state.currentPlanId
                    ? traceEntries.find(entry => entry.planId === this.state.currentPlanId)
                    : undefined;
                const entryToSend = currentEntry || traceEntries[traceEntries.length - 1];
                this.messageSender.sendTraceData(entryToSend.trace);
            }
        }
        catch (err) {
            console.error('Error loading history:', err);
            await this.state.setConversationDataAvailable(false);
            this.messageSender.sendSetConversation([], true);
        }
    }
    /**
     * Loads trace history data without sending to webview
     */
    async loadTraceHistoryData(agentId, agentSource) {
        try {
            let history;
            let sessionId;
            // Use agent instance if available AND the session belongs to the requested agent
            // This prevents loading wrong history when switching agents while a session is active
            if (this.state.agentInstance && this.state.sessionId && this.state.sessionAgentId === agentId) {
                history = await this.state.agentInstance.getHistoryFromDisc(this.state.sessionId);
                sessionId = this.state.sessionId;
            }
            else {
                // Use getAllHistory from library when no active session or session belongs to different agent
                const agentStorageKey = (0, agentUtils_1.getAgentStorageKey)(agentId, agentSource);
                history = await (0, utils_1.getAllHistory)(agentStorageKey, undefined);
                // When using getAllHistory with undefined sessionId, we get all sessions
                // Extract sessionId from the most recent trace if available
                if (history.traces && history.traces.length > 0) {
                    const mostRecentTrace = history.traces[history.traces.length - 1];
                    sessionId = mostRecentTrace.sessionId;
                }
            }
            // Sort traces by startExecutionTime from UserInputStep (oldest first)
            const sortedTraces = [...(history.traces || [])].sort((a, b) => {
                const timeA = this.getTraceStartTime(a) ?? Infinity;
                const timeB = this.getTraceStartTime(b) ?? Infinity;
                return timeA - timeB;
            });
            const agentStorageKey = (0, agentUtils_1.getAgentStorageKey)(agentId, agentSource);
            const entries = sortedTraces.map((trace, index) => {
                const planId = trace.planId || `plan-${index}`;
                const traceSessionId = trace.sessionId || sessionId || 'unknown';
                const userMessage = this.extractUserMessageFromTrace(trace);
                const startTime = this.getTraceStartTime(trace);
                const timestamp = startTime ? new Date(startTime).toISOString() : new Date().toISOString();
                return {
                    storageKey: agentStorageKey,
                    agentId: agentId,
                    sessionId: traceSessionId,
                    planId: planId,
                    userMessage: userMessage,
                    timestamp,
                    trace: trace
                };
            });
            return entries;
        }
        catch (error) {
            // NoSessionFound is expected for new agents with no previous sessions - don't log as error
            const isExpectedError = error instanceof Error && (error.name === 'NoSessionFound' || error.message.includes('No sessions found'));
            if (!isExpectedError) {
                console.error('Could not load trace history:', error);
            }
            return [];
        }
    }
    /**
     * Loads conversation history data without sending to webview
     */
    async loadConversationHistoryData(agentId, agentSource) {
        try {
            let transcriptEntries;
            // Try to use agent instance if available AND the session belongs to the requested agent
            // This prevents loading wrong history when switching agents while a session is active
            if (this.state.agentInstance && this.state.sessionId && this.state.sessionAgentId === agentId) {
                const history = await this.state.agentInstance.getHistoryFromDisc(this.state.sessionId);
                transcriptEntries = history.transcript || [];
            }
            else {
                // Use getAllHistory from library when no active session or session belongs to different agent
                const agentStorageKey = (0, agentUtils_1.getAgentStorageKey)(agentId, agentSource);
                const history = await (0, utils_1.getAllHistory)(agentStorageKey, undefined);
                transcriptEntries = history.transcript || [];
            }
            return transcriptEntries || [];
        }
        catch (err) {
            // NoSessionFound is expected for new agents with no previous sessions - don't log as error
            const isExpectedError = err instanceof Error && (err.name === 'NoSessionFound' || err.message.includes('No sessions found'));
            if (!isExpectedError) {
                console.error('Could not load conversation history:', err);
            }
            return [];
        }
    }
}
exports.HistoryManager = HistoryManager;
//# sourceMappingURL=historyManager.js.map