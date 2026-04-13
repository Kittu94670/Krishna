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
exports.registerPublishAgentCommand = void 0;
const vscode = __importStar(require("vscode"));
const commands_1 = require("../enums/commands");
const core_1 = require("@salesforce/core");
const agents_1 = require("@salesforce/agents");
const coreExtensionService_1 = require("../services/coreExtensionService");
const core_2 = require("@salesforce/core");
const path = __importStar(require("path"));
const os_1 = require("os");
const logger_1 = require("../utils/logger");
const registerPublishAgentCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.publishAgent, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.publishAgent;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        // Get the file path from the context menu
        const filePath = uri?.fsPath || vscode.window.activeTextEditor?.document.fileName;
        if (!filePath) {
            vscode.window.showErrorMessage('No .agent file selected.');
            return;
        }
        // Validate that this is a .agent file
        if (!filePath.endsWith('.agent')) {
            vscode.window.showErrorMessage('You can use this command on only .agent files.');
            return;
        }
        try {
            const project = core_1.SfProject.getInstance();
            const fileName = path.basename(filePath, '.agent');
            // Clear previous output
            logger.clear();
            // Log SF_SKIP_RETRIEVE setting value
            logger.debug(`SF_SKIP_RETRIEVE = ${process.env.SF_SKIP_RETRIEVE ?? 'false'}`);
            logger.debug(`Publishing agent ${fileName}...`);
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: `Publish: ${fileName}`,
                cancellable: false
            }, async (progress) => {
                try {
                    // Get connection to the org
                    const connection = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
                    // Initialize agent instance using Agent.init()
                    progress.report({ message: 'Initializing', increment: 0 });
                    // Extract just the name (basename) from the directory containing the .agent file
                    const aabDirectory = path.resolve(path.dirname(filePath));
                    const aabName = path.basename(aabDirectory);
                    const agent = await agents_1.Agent.init({
                        connection,
                        project,
                        aabName
                    });
                    // Step 1: Validate the agent first
                    progress.report({ message: 'Validating', increment: 20 });
                    const validateResponse = await agent.compile();
                    // Check if validation failed
                    if (validateResponse.status === 'failure' && validateResponse.errors) {
                        const errorMessages = validateResponse.errors
                            .map((error) => `[${error.errorType}] Line ${error.lineStart}:${error.colStart} - ${error.description}`)
                            .join(os_1.EOL);
                        logger.error(`Agent validation failed with ${validateResponse.errors.length} error(s)`);
                        errorMessages.split(os_1.EOL).forEach((errorLine, index) => {
                            if (errorLine.trim()) {
                                logger.errorDetail(`${index + 1}. ${errorLine}`);
                            }
                        });
                        progress.report({ message: `Validation failed with ${validateResponse.errors.length} error(s)` });
                        vscode.window.showErrorMessage(`Agent validation failed with ${validateResponse.errors.length} error(s). See the Problems panel for details.`);
                        return;
                    }
                    // Step 2: Publish the agent
                    progress.report({ message: 'Publishing', increment: 50 });
                    const lifecycle = core_1.Lifecycle.getInstance();
                    // Register event listeners
                    lifecycle.on('scopedPreRetrieve', async () => {
                        progress.report({ message: 'Retrieving metadata', increment: 70 });
                        logger.debug('Retrieving metadata from org...');
                    });
                    lifecycle.on('scopedPostRetrieve', async () => {
                        progress.report({ message: 'Metadata retrieved', increment: 90 });
                        logger.debug('Metadata retrieved successfully.');
                    });
                    try {
                        await agent.publish(vscode.workspace
                            .getConfiguration('salesforce.agentforceDX')
                            .get('skipRetrieve', false));
                    }
                    finally {
                        // Clean up event listeners
                        lifecycle.removeAllListeners('scopedPreRetrieve');
                        lifecycle.removeAllListeners('scopedPostRetrieve');
                    }
                    progress.report({ message: 'Published successfully', increment: 100 });
                    vscode.window.showInformationMessage(`Agent "${fileName}" was published successfully.`);
                }
                catch (publishError) {
                    const sfError = core_2.SfError.wrap(publishError);
                    logger.error('Agent publish failed', sfError);
                    progress.report({ message: 'Publish failed' });
                    vscode.window.showErrorMessage(`Failed to publish agent: ${sfError.message}`);
                    telemetryService?.sendException('agent_publish_failed', sfError.message);
                }
            });
        }
        catch (error) {
            const sfError = core_2.SfError.wrap(error);
            const errorMessage = `Failed to publish agent: ${sfError.message}`;
            logger.error(errorMessage, sfError);
            vscode.window.showErrorMessage(errorMessage);
            telemetryService?.sendException('agent_publish_failed', errorMessage);
        }
    });
};
exports.registerPublishAgentCommand = registerPublishAgentCommand;
//# sourceMappingURL=publishAgent.js.map