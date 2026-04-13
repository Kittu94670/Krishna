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
exports.AgentCombinedViewProvider = void 0;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const agents_1 = require("@salesforce/agents");
const utils_1 = require("@salesforce/agents/lib/utils");
const core_1 = require("@salesforce/core");
const coreExtensionService_1 = require("../services/coreExtensionService");
const state_1 = require("./agentCombined/state");
const handlers_1 = require("./agentCombined/handlers");
const session_1 = require("./agentCombined/session");
const agent_1 = require("./agentCombined/agent");
const history_1 = require("./agentCombined/history");
const debugging_1 = require("./agentCombined/debugging");
const themeColors_1 = require("../utils/themeColors");
const activateAgent_1 = require("../commands/activateAgent");
/**
 * Main orchestrator for the Agent Combined View Provider
 * Delegates to focused modules for specific functionality
 */
class AgentCombinedViewProvider {
    context;
    static viewType = 'sf.agent.combined.view';
    webviewView;
    static instance;
    // Core managers
    state;
    messageSender;
    sessionManager;
    historyManager;
    apexDebugManager;
    agentInitializer;
    messageHandlers;
    constructor(context) {
        this.context = context;
        AgentCombinedViewProvider.instance = this;
        // Initialize state
        this.state = new state_1.AgentViewState(context);
        // Initialize message sender
        this.messageSender = new handlers_1.WebviewMessageSender(this.state);
        // Initialize managers
        this.agentInitializer = new agent_1.AgentInitializer(this.state);
        this.historyManager = new history_1.HistoryManager(this.state, this.messageSender);
        this.apexDebugManager = new debugging_1.ApexDebugManager(this.messageSender);
        // Initialize session manager (depends on other managers)
        this.sessionManager = new session_1.SessionManager(this.state, this.messageSender, this.agentInitializer, this.historyManager);
        // Initialize context states
        void this.state.setResetAgentViewAvailable(false);
        void this.state.setSessionErrorState(false);
        void this.state.setConversationDataAvailable(false);
    }
    static getInstance() {
        return AgentCombinedViewProvider.instance;
    }
    /**
     * Main entry point - sets up webview and message handling
     */
    resolveWebviewView(webviewView, _context, _token) {
        this.webviewView = webviewView;
        this.messageSender.setWebview(webviewView);
        // Configure webview
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [vscode.Uri.joinPath(this.context.extensionUri, 'webview', 'dist')]
        };
        // Set up message handlers
        this.messageHandlers = new handlers_1.WebviewMessageHandlers(this.state, this.messageSender, this.sessionManager, this.historyManager, this.apexDebugManager, this.context, webviewView);
        // Main entry point - clean and simple
        this.handleEventsFromWebview();
        // Set HTML content
        webviewView.webview.html = this.getHtmlForWebview();
        // Send editor theme token colors for syntax highlighting
        this.sendThemeColors();
        if (vscode.window.onDidChangeActiveColorTheme) {
            this.context.subscriptions.push(vscode.window.onDidChangeActiveColorTheme(() => {
                // Small delay to ensure workbench.colorTheme config reflects the new theme
                setTimeout(() => this.sendThemeColors(), 100);
            }));
        }
    }
    sendThemeColors() {
        this.messageSender.sendThemeTokenColors((0, themeColors_1.getJsonTokenColors)());
    }
    /**
     * Sets up event handling from webview
     */
    handleEventsFromWebview() {
        if (!this.webviewView || !this.messageHandlers) {
            return;
        }
        this.webviewView.webview.onDidReceiveMessage(async (message) => {
            try {
                await this.messageHandlers.handleMessage(message);
            }
            catch (err) {
                try {
                    await this.messageHandlers.handleError(err);
                }
                catch (handlerErr) {
                    // If even error handling fails, log it to prevent silent failures
                    console.error('Critical error in message handling:', handlerErr);
                }
            }
        });
    }
    /**
     * Generates HTML for the webview
     */
    getHtmlForWebview() {
        const htmlPath = path.join(this.context.extensionPath, 'webview', 'dist', 'index.html');
        let html = fs.readFileSync(htmlPath, 'utf8');
        const vscodeScript = `
      <script>
        const vscode = acquireVsCodeApi();
        window.vscode = vscode;
        window.AgentSource = ${JSON.stringify({
            SCRIPT: agents_1.AgentSource.SCRIPT,
            PUBLISHED: agents_1.AgentSource.PUBLISHED
        })};
      </script>
    `;
        html = html.replace('</head>', `${vscodeScript}</head>`);
        return html;
    }
    // ============================================================================
    // Public API Methods - delegate to appropriate managers
    // ============================================================================
    /**
     * Toggles debug mode on/off
     */
    async toggleDebugMode() {
        const newDebugMode = !this.state.isApexDebuggingEnabled;
        await this.state.setDebugMode(newDebugMode);
        if (this.state.agentInstance) {
            this.state.agentInstance.preview.setApexDebugging(newDebugMode);
        }
        const statusMessage = newDebugMode ? 'Debug mode activated.' : 'Debug mode deactivated.';
        vscode.window.showInformationMessage(statusMessage);
    }
    /**
     * Gets the currently selected agent ID
     */
    getCurrentAgentId() {
        return this.state.currentAgentId;
    }
    /**
     * Gets the currently selected agent source
     */
    getCurrentAgentSource() {
        return this.state.currentAgentSource;
    }
    /**
     * Selects an agent and starts a session
     */
    selectAndStartAgent(agentId) {
        if (this.webviewView) {
            this.messageSender.sendSelectAgent(agentId, true);
        }
    }
    /**
     * Ends the current agent session
     */
    async endSession() {
        await this.sessionManager.endSession(async () => {
            const agentId = this.state.pendingStartAgentId ?? this.state.currentAgentId;
            if (agentId) {
                const agentSource = this.state.pendingStartAgentSource ?? (await (0, agent_1.getAgentSource)(agentId));
                await this.historyManager.showHistoryOrPlaceholder(agentId, agentSource);
            }
        });
    }
    /**
     * Restarts the agent session without recompilation
     */
    async restartWithoutCompilation() {
        await this.sessionManager.restartSession();
    }
    /**
     * Recompiles and restarts the agent session (full restart with compilation)
     */
    async recompileAndRestart() {
        await this.sessionManager.recompileAndRestartSession();
    }
    /**
     * Sets the agent ID
     */
    setAgentId(agentId) {
        this.state.currentAgentId = agentId;
    }
    /**
     * Starts a preview session for an agent
     */
    async startPreviewSession(agentId, agentSource, isLiveMode) {
        if (!this.webviewView) {
            throw new Error('Webview is not ready. Please ensure the view is visible.');
        }
        await this.sessionManager.startSession(agentId, agentSource, isLiveMode, this.webviewView);
    }
    /**
     * Refreshes the available agents list
     * @param selectAgentId Optional agent ID to auto-select after refresh
     */
    async refreshAvailableAgents(selectAgentId) {
        // Force re-read of sfdx-project.json so new packageDirectories are picked up
        core_1.SfProject.clearInstances();
        // Clear state and update UI immediately (optimistic update)
        this.state.currentAgentId = undefined;
        // Set pending select agent ID if provided (will be used when agents are loaded)
        this.state.pendingSelectAgentId = selectAgentId;
        if (this.webviewView) {
            this.state.currentAgentName = undefined;
            await this.state.setAgentSelected(false);
            await this.state.setSessionActive(false);
            await this.state.setSessionStarting(false);
            await this.state.setResetAgentViewAvailable(false);
            this.state.pendingStartAgentId = undefined;
            this.state.pendingStartAgentSource = undefined;
            this.messageSender.sendSelectAgent('', false);
            this.messageSender.sendClearMessages();
            this.messageSender.sendNoHistoryFound('refresh-placeholder');
            this.messageSender.sendRefreshAgents();
        }
        // End session in background (non-blocking) - restoreConnection can be slow
        void this.endSession();
    }
    /**
     * Gets agents for command palette
     */
    async getAgentsForCommandPalette() {
        try {
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            const project = core_1.SfProject.getInstance();
            return await agents_1.Agent.listPreviewable(conn, project);
        }
        catch (error) {
            console.error('Error getting agents for command palette:', error);
            return [];
        }
    }
    /**
     * Resets the current agent view
     */
    async resetCurrentAgentView() {
        if (!this.webviewView) {
            throw new Error('Agent view is not ready to reset.');
        }
        if (!this.state.currentAgentId) {
            throw new Error('No agent selected to reset.');
        }
        // Optimistic update: clear UI and update context immediately
        this.messageSender.sendClearMessages();
        await this.state.setResetAgentViewAvailable(false);
        await this.state.setSessionErrorState(false);
        // Load history in background (non-blocking)
        // Use stored agentSource to avoid slow getAgentSource call
        const agentId = this.state.currentAgentId;
        const agentSource = this.state.currentAgentSource ?? (await (0, agent_1.getAgentSource)(agentId));
        void this.historyManager.showHistoryOrPlaceholder(agentId, agentSource);
    }
    /**
     * Re-fetches and sends the active version info for the currently selected agent.
     * Used to sync the panel after an external activation (e.g. context menu).
     */
    refreshActiveVersion() {
        const agentId = this.state.currentAgentId;
        if (!agentId || !this.messageHandlers) {
            return;
        }
        this.messageHandlers.fetchAndSendActiveVersion(agentId).catch(err => {
            console.error('Error refreshing active version:', err);
        });
    }
    /**
     * Shows a QuickPick to select and activate a version for the current published agent
     */
    async activateVersion() {
        const agentId = this.state.currentAgentId;
        if (!agentId) {
            vscode.window.showErrorMessage('No agent selected.');
            return;
        }
        // Use cached versions from the agent list load for instant picker
        const cachedVersions = this.state.agentVersionsCache.get(agentId);
        if (!cachedVersions || cachedVersions.length === 0) {
            vscode.window.showErrorMessage('No versions found for this agent.');
            return;
        }
        const versionItems = (0, activateAgent_1.buildVersionPickerItems)(cachedVersions, { includeDeactivate: true });
        const picked = await vscode.window.showQuickPick(versionItems, {
            placeHolder: 'Select a version to activate'
        });
        if (!picked) {
            return;
        }
        if (picked.action === 'deactivate') {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: 'Deactivating agent...',
                cancellable: false
            }, async () => {
                const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
                const project = core_1.SfProject.getInstance();
                const agent = await agents_1.Agent.init({ connection: conn, project, apiNameOrId: agentId });
                await agent.deactivate();
                // Update cache
                const versions = this.state.agentVersionsCache.get(agentId);
                if (versions) {
                    for (const v of versions) {
                        v.Status = 'Inactive';
                    }
                }
                this.state.currentAgentActiveVersion = undefined;
                this.state.pendingSelectAgentId = agentId;
                this.messageSender.sendAgentVersionInfo(agentId, undefined);
                this.messageSender.sendRefreshAgents();
                vscode.window.showInformationMessage('Agent deactivated.');
            });
            return;
        }
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Activating version ${picked.versionNumber}...`,
            cancellable: false
        }, async () => {
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            const project = core_1.SfProject.getInstance();
            const agent = await agents_1.Agent.init({ connection: conn, project, apiNameOrId: agentId });
            const result = await agent.activate(picked.versionNumber);
            const activatedVersion = result.VersionNumber;
            // Update cache to reflect the new active version
            const versions = this.state.agentVersionsCache.get(agentId);
            if (versions) {
                for (const v of versions) {
                    v.Status = v.VersionNumber === activatedVersion ? 'Active' : 'Inactive';
                }
            }
            this.state.currentAgentActiveVersion = activatedVersion;
            this.messageSender.sendAgentVersionInfo(agentId, activatedVersion);
            this.messageSender.sendRefreshAgents();
            vscode.window.showInformationMessage(`Version ${activatedVersion} activated.`);
        });
    }
    /**
     * Saves the current conversation session, always prompting for a location.
     * The folder picker defaults to the previously selected directory.
     */
    async exportConversation() {
        await this.doExportConversation();
    }
    async doExportConversation() {
        const agentId = this.state.currentAgentId;
        const agentSource = this.state.currentAgentSource;
        if (!agentId || !agentSource) {
            vscode.window.showWarningMessage('No agent selected to save session.');
            return;
        }
        const savedDir = this.state.getExportDirectory();
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        const defaultUri = savedDir
            ? vscode.Uri.file(savedDir)
            : workspaceFolder?.uri;
        const selectedFolder = await vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            openLabel: 'Save Chat History',
            title: 'Select folder to save chat history',
            defaultUri
        });
        if (!selectedFolder || selectedFolder.length === 0) {
            return; // User cancelled
        }
        const targetDirectory = selectedFolder[0].fsPath;
        await this.state.setExportDirectory(targetDirectory);
        try {
            // If there's an active session, use the library's saveSession method
            if (this.state.isSessionActive && this.state.agentInstance) {
                await this.state.agentInstance.preview.saveSession(targetDirectory);
                vscode.window.showInformationMessage(`Conversation session saved to ${targetDirectory}.`);
                return;
            }
            // No active session - save from loaded history by copying the session directory
            const agentStorageKey = (0, agent_1.getAgentStorageKey)(agentId, agentSource);
            // Get history to find the session ID (getAllHistory finds the most recent session when sessionId is undefined)
            const history = await (0, utils_1.getAllHistory)(agentStorageKey, undefined);
            if (!history.metadata?.sessionId) {
                vscode.window.showWarningMessage('No conversation history found to save.');
                return;
            }
            const sessionId = history.metadata.sessionId;
            // Get the source directory path where the session is stored
            const sourceDir = await (0, utils_1.getHistoryDir)(agentStorageKey, sessionId);
            // Create destination directory matching the library's format: {outputDir}/{agentId}/session_{sessionId}/
            const destDir = path.join(targetDirectory, agentStorageKey, `session_${sessionId}`);
            await fs.promises.mkdir(destDir, { recursive: true });
            // Copy the entire session directory
            await fs.promises.cp(sourceDir, destDir, { recursive: true });
            vscode.window.showInformationMessage(`Conversation session saved to ${destDir}.`);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to save conversation: ${errorMessage}`);
        }
    }
}
exports.AgentCombinedViewProvider = AgentCombinedViewProvider;
//# sourceMappingURL=agentCombinedViewProvider.js.map