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
exports.registerValidateAgentCommand = void 0;
exports.initializeDiagnosticCollection = initializeDiagnosticCollection;
const vscode = __importStar(require("vscode"));
const commands_1 = require("../enums/commands");
const agents_1 = require("@salesforce/agents");
const coreExtensionService_1 = require("../services/coreExtensionService");
const core_1 = require("@salesforce/core");
const path = __importStar(require("path"));
const logger_1 = require("../utils/logger");
// Diagnostic collection for agent validation errors
let diagnosticCollection;
function initializeDiagnosticCollection(context) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('agentValidation');
    context.subscriptions.push(diagnosticCollection);
}
const registerValidateAgentCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.validateAgent, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.validateAgent;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        // Get the file path from the context menu
        const filePath = uri?.fsPath || vscode.window.activeTextEditor?.document.fileName;
        if (!filePath) {
            vscode.window.showErrorMessage('No .agent file selected.');
            telemetryService?.sendException('validateAgent_failed', 'No .agent file selected.');
            return;
        }
        // Strip "local:" prefix if present (agents library may return paths with this prefix)
        const normalizedFilePath = filePath.startsWith('local:') ? filePath.substring(6) : filePath;
        const fileUri = vscode.Uri.file(normalizedFilePath);
        const fileContents = Buffer.from(await vscode.workspace.fs.readFile(fileUri)).toString();
        // Clear previous output
        logger.clear();
        // Show progress notification with spinner
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Validate Agent',
            cancellable: false
        }, async (progress) => {
            progress.report({ message: 'Validating' });
            let agent = undefined;
            try {
                const connection = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
                const project = core_1.SfProject.getInstance();
                // Initialize agent instance using Agent.init()
                // Extract just the name (basename) from the directory containing the .agent file
                const aabDirectory = path.resolve(path.dirname(normalizedFilePath));
                const aabName = path.basename(aabDirectory);
                agent = await agents_1.Agent.init({
                    connection,
                    project,
                    aabName
                });
                // Validate the agent
                const response = await agent.compile();
                // Type guard to check if response has errors (compilation failure)
                if (response.status === 'failure' && response.errors) {
                    // Parse and display compilation errors in Problems panel
                    const diagnostics = response.errors.map((error) => {
                        const range = new vscode.Range(new vscode.Position(Math.max(0, error.lineStart - 1), Math.max(0, error.colStart - 1)), new vscode.Position(Math.max(0, error.lineEnd - 1), Math.max(0, error.colEnd - 1)));
                        const diagnostic = new vscode.Diagnostic(range, error.description, vscode.DiagnosticSeverity.Error);
                        diagnostic.source = 'Agent Validation';
                        diagnostic.code = error.errorType;
                        return diagnostic;
                    });
                    diagnosticCollection.set(fileUri, diagnostics);
                    // Also show in output channel
                    logger.error(`Agent validation failed with ${response.errors.length} error(s)`);
                    response.errors.forEach((error, index) => {
                        logger.errorDetail(`${index + 1}. [${error.errorType}] Line ${error.lineStart}:${error.colStart}`);
                        logger.errorDetail(`   ${error.description}`);
                    });
                    // Update progress message to show failure
                    progress.report({ message: `Validation failed with ${response.errors.length} error(s)` });
                    // Wait a moment so user can see the failure message
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    // Automatically focus on the Problems panel to show errors
                    await vscode.commands.executeCommand('workbench.action.problems.focus');
                }
                else {
                    // Compilation successful
                    diagnosticCollection.clear();
                    // Update progress message to show success
                    progress.report({ message: 'Validation successful', increment: 100 });
                    // Keep the success message visible for a moment
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }
            catch (compileError) {
                const sfError = core_1.SfError.wrap(compileError);
                // Clear diagnostics for unexpected errors
                diagnosticCollection.clear();
                // Show error details in output
                logger.error('Agent validation failed', sfError);
                // Update progress to show error
                progress.report({ message: 'Validation failed' });
                await new Promise(resolve => setTimeout(resolve, 2000));
                // Show error message for unexpected errors
                vscode.window.showErrorMessage(`Agent validation failed: ${sfError.message}`);
                telemetryService?.sendException('validateAgent_failed', sfError.message);
            }
        });
    });
};
exports.registerValidateAgentCommand = registerValidateAgentCommand;
//# sourceMappingURL=validateAgent.js.map