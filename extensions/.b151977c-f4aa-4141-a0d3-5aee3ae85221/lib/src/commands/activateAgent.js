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
exports.registerActivateAgentCommand = void 0;
exports.buildVersionPickerItems = buildVersionPickerItems;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const commands_1 = require("../enums/commands");
const core_1 = require("@salesforce/core");
const agents_1 = require("@salesforce/agents");
const coreExtensionService_1 = require("../services/coreExtensionService");
const agentUtils_1 = require("./agentUtils");
const logger_1 = require("../utils/logger");
function buildVersionPickerItems(versions, options) {
    const items = versions
        .sort((a, b) => b.VersionNumber - a.VersionNumber)
        .map(v => ({
        label: `Version ${v.VersionNumber}`,
        description: v.Status === 'Active' ? '(Active)' : '',
        action: 'activate',
        versionNumber: v.VersionNumber
    }));
    if (options?.includeDeactivate === true) {
        items.push({ label: '', kind: vscode.QuickPickItemKind.Separator, action: 'deactivate' }, { label: 'Deactivate', action: 'deactivate' });
    }
    return items;
}
async function activateWithProgress(agent, agentName, agentId, versionNumber, logger) {
    logger.debug(`Activating agent ${agentName} v${versionNumber}...`);
    await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Activate Agent: ${agentName} v${versionNumber}`,
        cancellable: false
    }, async () => {
        const result = await agent.activate(versionNumber);
        vscode.window.showInformationMessage(`Agent "${agentName}" v${result.VersionNumber} activated.`);
        // Refresh the panel's agent list and select the activated agent
        void vscode.commands.executeCommand('sf.agent.combined.view.refreshAgents', agentId);
    });
}
const registerActivateAgentCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.activateAgent, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.activateAgent;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        try {
            const { conn, project } = await (0, agentUtils_1.getConnectionAndProject)();
            let agentName;
            let apiNameOrId;
            if (!uri) {
                // Command palette - show only deactivated agents
                const agents = await (0, agentUtils_1.getPublishedAgents)(conn);
                const deactivated = agents.filter(a => !a.isActivated);
                if (deactivated.length === 0) {
                    vscode.window.showInformationMessage('No deactivated agents found in the org.');
                    return;
                }
                const picked = await vscode.window.showQuickPick(deactivated.map(a => ({
                    label: a.name,
                    agentId: a.id
                })), { placeHolder: 'Select an agent to activate' });
                if (!picked) {
                    return;
                }
                agentName = picked.label;
                apiNameOrId = picked.agentId;
            }
            else {
                // Context menu - validate the file/directory
                const targetPath = uri.fsPath;
                const stat = await vscode.workspace.fs.stat(vscode.Uri.file(targetPath));
                const fileName = path.basename(targetPath);
                if (stat.type === vscode.FileType.File) {
                    if (!fileName.endsWith('.bot-meta.xml') &&
                        !fileName.endsWith('.botVersion-meta.xml') &&
                        !fileName.endsWith('.genAiPlannerBundle')) {
                        vscode.window.showErrorMessage('You can use this command on only bot, botVersion, or genAiPlannerBundle metadata files.');
                        return;
                    }
                }
                else if (stat.type === vscode.FileType.Directory) {
                    if (!targetPath.includes('bots') &&
                        !targetPath.includes('botVersions') &&
                        !targetPath.includes('genAiPlannerBundles')) {
                        vscode.window.showErrorMessage('You can use this command on only directories that contain bot, botVersion, or genAiPlannerBundle metadata files.');
                        return;
                    }
                }
                else {
                    vscode.window.showErrorMessage('Invalid file or directory selection.');
                    return;
                }
                agentName = await (0, agentUtils_1.getAgentNameFromPath)(targetPath);
                apiNameOrId = agentName;
            }
            logger.clear();
            const agent = await agents_1.Agent.init({
                connection: conn,
                project: project,
                apiNameOrId
            });
            const botMetadata = await agent.getBotMetadata();
            const agentId = botMetadata.Id;
            const versions = botMetadata.BotVersions.records.filter((v) => !v.IsDeleted);
            if (versions.length === 0) {
                vscode.window.showErrorMessage(`No versions found for agent "${agentName}".`);
                return;
            }
            const picked = await vscode.window.showQuickPick(buildVersionPickerItems(versions, { includeDeactivate: !!uri }), { placeHolder: `Select a version to activate for "${agentName}"` });
            if (!picked) {
                return;
            }
            if (picked.action === 'deactivate') {
                const confirmation = await vscode.window.showWarningMessage(`Are you sure you want to deactivate agent "${agentName}"?`, { modal: true }, 'Deactivate');
                if (confirmation !== 'Deactivate') {
                    return;
                }
                logger.debug(`Deactivating agent ${agentName}...`);
                await vscode.window.withProgress({
                    location: vscode.ProgressLocation.Notification,
                    title: `Deactivate Agent: ${agentName}`,
                    cancellable: false
                }, async () => {
                    await agent.deactivate();
                    vscode.window.showInformationMessage(`Agent "${agentName}" was deactivated.`);
                    void vscode.commands.executeCommand('sf.agent.combined.view.refreshAgents');
                });
            }
            else {
                await activateWithProgress(agent, agentName, agentId, picked.versionNumber, logger);
            }
        }
        catch (error) {
            const sfError = core_1.SfError.wrap(error);
            const errorMessage = `Failed to activate agent: ${sfError.message}`;
            logger.error(errorMessage, sfError);
            vscode.window.showErrorMessage(errorMessage);
            telemetryService?.sendException('agent_activation_failed', errorMessage);
        }
    });
};
exports.registerActivateAgentCommand = registerActivateAgentCommand;
//# sourceMappingURL=activateAgent.js.map