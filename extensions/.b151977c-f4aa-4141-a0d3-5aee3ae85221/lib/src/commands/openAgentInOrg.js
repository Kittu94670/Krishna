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
exports.registerOpenAgentInOrgCommand = void 0;
const vscode = __importStar(require("vscode"));
const commands_1 = require("../enums/commands");
const core_1 = require("@salesforce/core");
const agents_1 = require("@salesforce/agents");
const cross_spawn_1 = require("cross-spawn");
const coreExtensionService_1 = require("../services/coreExtensionService");
const agentUtils_1 = require("./agentUtils");
const logger_1 = require("../utils/logger");
const registerOpenAgentInOrgCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.openAgentInOrg, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.openAgentInOrg;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        let agentName;
        // If called from context menu with a file/directory, use that to determine the agent
        if (uri?.fsPath) {
            try {
                agentName = await (0, agentUtils_1.getAgentNameFromPath)(uri.fsPath);
            }
            catch (error) {
                console.warn('Failed to get agent name from path, falling back to picker:', error);
            }
        }
        // If no agent name from context, prompt user to select
        if (!agentName) {
            const project = core_1.SfProject.getInstance();
            const agents = await agents_1.Agent.list(project);
            if (agents.length === 0) {
                vscode.window.showErrorMessage(`Couldn't find any agents in the current DX project.`);
                logger.error("Couldn't find any agents in the current DX project.");
                logger.debug('Suggestion: Retrieve your agent metadata to your DX project with the "project retrieve start" CLI command.');
                return;
            }
            // we need to prompt the user which agent to open
            agentName = await vscode.window.showQuickPick(agents, { placeHolder: 'Agent name (type to search)' });
            if (!agentName) {
                telemetryService?.sendException('no_agent_selected', 'No Agent selected');
                return;
            }
        }
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Open Agent in Org',
            cancellable: true
        }, async (progress) => {
            progress.report({ message: `Opening ${agentName}` });
            try {
                const result = (0, cross_spawn_1.sync)('sf', ['org', 'open', 'agent', '--api-name', agentName]);
                if (result.status !== 0) {
                    const errorOutput = result.stderr.toString();
                    vscode.window.showErrorMessage(`Unable to open agent: ${errorOutput}`);
                    telemetryService?.sendException('sf_command_failed', `stderr: ${errorOutput}`);
                }
                else {
                    vscode.window.showInformationMessage('Agent was opened successfully in the default org.');
                }
            }
            catch (error) {
                // Handle cases where the sf CLI command itself fails to execute (not installed, not in PATH, etc.)
                const errorMessage = error instanceof Error ? error.message : String(error);
                logger.error(`Failed to execute sf CLI: ${errorMessage}`);
                vscode.window.showErrorMessage(`Failed to execute sf CLI: try running this command directly in a terminal: "sf org open agent --api-name ${agentName}"`);
                telemetryService?.sendException('sf_command_execution_failed', errorMessage);
            }
        });
    });
};
exports.registerOpenAgentInOrgCommand = registerOpenAgentInOrgCommand;
//# sourceMappingURL=openAgentInOrg.js.map