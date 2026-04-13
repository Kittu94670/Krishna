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
exports.AgentViewState = void 0;
const vscode = __importStar(require("vscode"));
const agents_1 = require("@salesforce/agents");
/**
 * Manages all state for the Agent Combined View Provider
 */
class AgentViewState {
    context;
    // Agent instance state
    _agentInstance;
    _sessionId = '';
    _sessionAgentId; // Tracks which agent the current session belongs to
    _currentAgentName;
    _currentAgentId;
    _currentAgentSource;
    _currentPlanId;
    _currentUserMessage;
    // Session state
    _isSessionActive = false;
    _isSessionStarting = false;
    _sessionStartOperationId = 0;
    _pendingStartAgentId;
    _pendingStartAgentSource;
    _pendingSelectAgentId;
    // Version state
    _currentAgentActiveVersion;
    _agentVersionsCache = new Map();
    // Mode state
    _isApexDebuggingEnabled = false;
    _isLiveMode = false;
    // Storage keys
    static LIVE_MODE_KEY = 'agentforceDX.lastLiveMode';
    static DEBUG_MODE_KEY = 'agentforceDX.lastDebugMode';
    static EXPORT_DIR_KEY = 'agentforceDX.lastExportDirectory';
    constructor(context) {
        this.context = context;
        // Load persisted state
        this._isLiveMode = this.context.globalState.get(AgentViewState.LIVE_MODE_KEY, false);
        this._isApexDebuggingEnabled = this.context.globalState.get(AgentViewState.DEBUG_MODE_KEY, false);
        // Set initial context
        void vscode.commands.executeCommand('setContext', 'agentforceDX:debugMode', this._isApexDebuggingEnabled);
        void vscode.commands.executeCommand('setContext', 'agentforceDX:isScriptAgent', false);
    }
    // Getters
    get agentInstance() {
        return this._agentInstance;
    }
    get sessionId() {
        return this._sessionId;
    }
    get sessionAgentId() {
        return this._sessionAgentId;
    }
    get currentAgentName() {
        return this._currentAgentName;
    }
    get currentAgentId() {
        return this._currentAgentId;
    }
    get currentAgentSource() {
        return this._currentAgentSource;
    }
    get currentPlanId() {
        return this._currentPlanId;
    }
    get currentUserMessage() {
        return this._currentUserMessage;
    }
    get isSessionActive() {
        return this._isSessionActive;
    }
    get isSessionStarting() {
        return this._isSessionStarting;
    }
    get sessionStartOperationId() {
        return this._sessionStartOperationId;
    }
    get pendingStartAgentId() {
        return this._pendingStartAgentId;
    }
    get pendingStartAgentSource() {
        return this._pendingStartAgentSource;
    }
    get pendingSelectAgentId() {
        return this._pendingSelectAgentId;
    }
    get currentAgentActiveVersion() {
        return this._currentAgentActiveVersion;
    }
    get agentVersionsCache() {
        return this._agentVersionsCache;
    }
    get isApexDebuggingEnabled() {
        return this._isApexDebuggingEnabled;
    }
    get isLiveMode() {
        return this._isLiveMode;
    }
    // Setters
    set agentInstance(value) {
        this._agentInstance = value;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    set sessionAgentId(value) {
        this._sessionAgentId = value;
    }
    set currentAgentName(value) {
        this._currentAgentName = value;
    }
    set currentAgentId(value) {
        this._currentAgentId = value;
    }
    set currentAgentSource(value) {
        this._currentAgentSource = value;
        // Update context for script agent detection (used for restart menu visibility)
        void this.setIsScriptAgent(value === agents_1.AgentSource.SCRIPT);
    }
    set currentPlanId(value) {
        this._currentPlanId = value;
    }
    set currentUserMessage(value) {
        this._currentUserMessage = value;
    }
    set pendingStartAgentId(value) {
        this._pendingStartAgentId = value;
    }
    set pendingStartAgentSource(value) {
        this._pendingStartAgentSource = value;
    }
    set currentAgentActiveVersion(value) {
        this._currentAgentActiveVersion = value;
    }
    set pendingSelectAgentId(value) {
        this._pendingSelectAgentId = value;
    }
    // State update methods
    async setSessionActive(active) {
        this._isSessionActive = active;
        await vscode.commands.executeCommand('setContext', 'agentforceDX:sessionActive', active);
    }
    async setSessionStarting(starting) {
        this._isSessionStarting = starting;
        await vscode.commands.executeCommand('setContext', 'agentforceDX:sessionStarting', starting);
    }
    beginSessionStart() {
        return ++this._sessionStartOperationId;
    }
    isSessionStartActive(startId) {
        return this._sessionStartOperationId === startId;
    }
    cancelPendingSessionStart() {
        this._sessionStartOperationId += 1;
    }
    async setAgentSelected(selected) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:agentSelected', selected);
        if (!selected) {
            this._currentAgentActiveVersion = undefined;
            await this.setResetAgentViewAvailable(false);
            await this.setSessionErrorState(false);
            await this.setConversationDataAvailable(false);
            await this.setIsScriptAgent(false);
        }
    }
    async setDebugMode(enabled) {
        this._isApexDebuggingEnabled = enabled;
        await vscode.commands.executeCommand('setContext', 'agentforceDX:debugMode', enabled);
        await this.context.globalState.update(AgentViewState.DEBUG_MODE_KEY, enabled);
    }
    async setLiveMode(isLive) {
        this._isLiveMode = isLive;
        await vscode.commands.executeCommand('setContext', 'agentforceDX:isLiveMode', isLive);
        await this.context.globalState.update(AgentViewState.LIVE_MODE_KEY, isLive);
    }
    async setResetAgentViewAvailable(available) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:canResetAgentView', available);
    }
    async setSessionErrorState(hasError) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:sessionError', hasError);
    }
    async setConversationDataAvailable(available) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:hasConversationData', available);
    }
    async setIsScriptAgent(isScript) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:isScriptAgent', isScript);
    }
    async setHasAgents(hasAgents) {
        await vscode.commands.executeCommand('setContext', 'agentforceDX:hasAgents', hasAgents);
    }
    getExportDirectory() {
        return this.context.workspaceState.get(AgentViewState.EXPORT_DIR_KEY);
    }
    async setExportDirectory(directory) {
        await this.context.workspaceState.update(AgentViewState.EXPORT_DIR_KEY, directory);
    }
    // Clear session state
    clearSessionState() {
        this._agentInstance = undefined;
        this._sessionId = Date.now().toString();
        this._sessionAgentId = undefined;
        this._currentAgentName = undefined;
        this._currentAgentActiveVersion = undefined;
        this._currentPlanId = undefined;
        this._currentUserMessage = undefined;
        this._pendingStartAgentId = undefined;
        this._pendingStartAgentSource = undefined;
        this._pendingSelectAgentId = undefined;
    }
}
exports.AgentViewState = AgentViewState;
//# sourceMappingURL=agentViewState.js.map