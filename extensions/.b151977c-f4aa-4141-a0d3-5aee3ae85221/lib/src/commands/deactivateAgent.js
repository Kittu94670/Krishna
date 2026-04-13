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
exports.registerDeactivateAgentCommand = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const commands_1 = require("../enums/commands");
const core_1 = require("@salesforce/core");
const agents_1 = require("@salesforce/agents");
const coreExtensionService_1 = require("../services/coreExtensionService");
const agentUtils_1 = require("./agentUtils");
const logger_1 = require("../utils/logger");
const registerDeactivateAgentCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.deactivateAgent, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.deactivateAgent;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        try {
            const { conn, project } = await (0, agentUtils_1.getConnectionAndProject)();
            let agentName;
            let apiNameOrId;
            if (!uri) {
                // Command palette - show activated agents
                const agents = await (0, agentUtils_1.getPublishedAgents)(conn);
                const activated = agents.filter(a => a.isActivated);
                if (activated.length === 0) {
                    const msg = agents.length === 0
                        ? 'No published agents found in the org.'
                        : 'No published agents are currently active.';
                    vscode.window.showInformationMessage(msg);
                    return;
                }
                const picked = await vscode.window.showQuickPick(activated.map(a => ({ label: a.name, agentId: a.id })), { placeHolder: 'Select an active agent to deactivate' });
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
            const confirmation = await vscode.window.showWarningMessage(`Are you sure you want to deactivate agent "${agentName}"?`, { modal: true }, 'Deactivate');
            if (confirmation !== 'Deactivate') {
                return;
            }
            logger.clear();
            logger.debug(`Deactivating agent ${agentName}...`);
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: `Deactivate Agent: ${agentName}`,
                cancellable: false
            }, async () => {
                const agent = await agents_1.Agent.init({
                    connection: conn,
                    project: project,
                    apiNameOrId
                });
                await agent.deactivate();
                vscode.window.showInformationMessage(`Agent "${agentName}" was deactivated successfully.`);
                // Refresh the panel's agent list to reflect the new deactivation state
                void vscode.commands.executeCommand('sf.agent.combined.view.refreshAgents');
            });
        }
        catch (error) {
            const sfError = core_1.SfError.wrap(error);
            const errorMessage = `Failed to deactivate agent: ${sfError.message}`;
            logger.error(errorMessage, sfError);
            vscode.window.showErrorMessage(errorMessage);
            telemetryService?.sendException('agent_deactivation_failed', errorMessage);
        }
    });
};
exports.registerDeactivateAgentCommand = registerDeactivateAgentCommand;
//# sourceMappingURL=deactivateAgent.js.map