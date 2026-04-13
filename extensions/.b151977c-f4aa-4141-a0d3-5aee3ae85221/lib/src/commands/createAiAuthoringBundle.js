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
exports.registerCreateAiAuthoringBundleCommand = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const YAML = __importStar(require("yaml"));
const commands_1 = require("../enums/commands");
const agents_1 = require("@salesforce/agents");
const coreExtensionService_1 = require("../services/coreExtensionService");
const core_1 = require("@salesforce/core");
const logger_1 = require("../utils/logger");
const node_fs_1 = require("node:fs");
/**
 * Shows a QuickPick with optional back button support
 * Returns the selected item, 'back' if back was pressed, or undefined if cancelled
 */
async function showQuickPickWithBack(items, options) {
    return new Promise(resolve => {
        const quickPick = vscode.window.createQuickPick();
        quickPick.items = items;
        quickPick.title = options.title;
        quickPick.placeholder = options.placeholder;
        if (options.showBack) {
            quickPick.buttons = [vscode.QuickInputButtons.Back];
        }
        quickPick.onDidTriggerButton(button => {
            if (button === vscode.QuickInputButtons.Back) {
                quickPick.hide();
                resolve('back');
            }
        });
        quickPick.onDidAccept(() => {
            const selection = quickPick.selectedItems[0];
            quickPick.hide();
            resolve(selection);
        });
        quickPick.onDidHide(() => {
            quickPick.dispose();
            resolve(undefined);
        });
        quickPick.show();
    });
}
/**
 * Shows an InputBox with optional back button support
 * Returns the input value, 'back' if back was pressed, or undefined if cancelled
 */
async function showInputBoxWithBack(options) {
    return new Promise(resolve => {
        const inputBox = vscode.window.createInputBox();
        inputBox.title = options.title;
        inputBox.prompt = options.prompt;
        inputBox.placeholder = options.placeholder;
        inputBox.value = options.value ?? '';
        if (options.showBack) {
            inputBox.buttons = [vscode.QuickInputButtons.Back];
        }
        if (options.validateInput) {
            inputBox.onDidChangeValue(value => {
                inputBox.validationMessage = options.validateInput(value) ?? undefined;
            });
        }
        inputBox.onDidTriggerButton(button => {
            if (button === vscode.QuickInputButtons.Back) {
                inputBox.hide();
                resolve('back');
            }
        });
        inputBox.onDidAccept(() => {
            if (options.validateInput) {
                const error = options.validateInput(inputBox.value);
                if (error) {
                    inputBox.validationMessage = error;
                    return;
                }
            }
            const value = inputBox.value;
            inputBox.hide();
            resolve(value);
        });
        inputBox.onDidHide(() => {
            inputBox.dispose();
            resolve(undefined);
        });
        inputBox.show();
    });
}
const registerCreateAiAuthoringBundleCommand = () => {
    return vscode.commands.registerCommand(commands_1.Commands.createAiAuthoringBundle, async (uri) => {
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const logger = new logger_1.Logger(coreExtensionService_1.CoreExtensionService.getChannelService());
        const commandName = commands_1.Commands.createAiAuthoringBundle;
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        // Clear previous output
        logger.clear();
        try {
            // Get the project root
            const project = core_1.SfProject.getInstance();
            const projectRoot = project.getPath();
            // Determine the target directory
            // Agent.createAuthoringBundle appends 'aiAuthoringBundles' to outputDir,
            // so we need to pass the parent directory (main/default) not the full path
            let targetDir;
            if (uri?.fsPath) {
                // If uri points to aiAuthoringBundles, go up one level
                if (uri.fsPath.endsWith('aiAuthoringBundles')) {
                    targetDir = path.dirname(uri.fsPath);
                }
                else {
                    targetDir = uri.fsPath;
                }
            }
            else {
                // Default to the proper metadata directory structure (main/default, not including aiAuthoringBundles)
                const defaultPackagePath = project.getDefaultPackage().fullPath;
                targetDir = path.join(defaultPackagePath, 'main', 'default');
            }
            // Create the aiAuthoringBundles directory if it doesn't exist
            const aiAuthoringBundlesDir = path.join(targetDir, 'aiAuthoringBundles');
            try {
                await vscode.workspace.fs.createDirectory(vscode.Uri.file(aiAuthoringBundlesDir));
            }
            catch (error) {
                // Directory might already exist, which is fine
            }
            // Look for spec files in the specs directory (at project root)
            const specsDir = path.join(projectRoot, 'specs');
            let specFiles = [];
            try {
                const specDirUri = vscode.Uri.file(specsDir);
                const files = await vscode.workspace.fs.readDirectory(specDirUri);
                specFiles = files
                    .filter(([fileName, type]) => type === vscode.FileType.File &&
                    (fileName.endsWith('.yaml') || fileName.endsWith('.yml')) &&
                    !fileName.includes('-testSpec'))
                    .map(([fileName]) => fileName);
            }
            catch (error) {
                logger.warn(`No agent spec directory found at ${specsDir}.`);
            }
            const specTypeItems = [
                {
                    label: 'Default template (Recommended)',
                    description: 'Start with a ready-to-use Agent Script template.',
                    isCustom: false
                },
                ...(specFiles.length > 0
                    ? [
                        {
                            label: 'From an agent spec YAML file (Advanced)',
                            description: 'Generate an Agent Script file from an existing agent spec YAML file.',
                            isCustom: true
                        }
                    ]
                    : [])
            ];
            // Multi-step wizard with back navigation
            let step = 1;
            let name;
            let apiName;
            let selectedType;
            let spec;
            while (step > 0) {
                if (step === 1) {
                    // Step 1: Select template type
                    const result = await showQuickPickWithBack(specTypeItems, {
                        title: 'Create Agent',
                        placeholder: 'Select an agent template',
                        showBack: false
                    });
                    if (result === undefined) {
                        return; // User cancelled
                    }
                    selectedType = result;
                    if (selectedType.isCustom) {
                        step = 2;
                    }
                    else {
                        spec = undefined;
                        step = 3; // Skip to name input
                    }
                }
                else if (step === 2) {
                    // Step 2: Select spec file (only if "From YAML spec" was selected)
                    const specFileItems = specFiles.map(file => ({ label: file }));
                    const result = await showQuickPickWithBack(specFileItems, {
                        title: 'Create Agent',
                        placeholder: 'Select the agent spec YAML file',
                        showBack: true
                    });
                    if (result === 'back') {
                        step = 1;
                        continue;
                    }
                    if (result === undefined) {
                        return; // User cancelled
                    }
                    spec = path.join(specsDir, result.label);
                    step = 3;
                }
                else if (step === 3) {
                    // Step 3: Enter name
                    const result = await showInputBoxWithBack({
                        title: 'Create Agent',
                        prompt: 'Enter the agent name',
                        placeholder: 'Agent name',
                        value: name,
                        showBack: true,
                        validateInput: value => {
                            if (!value) {
                                return 'Agent name is required.';
                            }
                            if (value.trim().length === 0) {
                                return "Agent name can't be empty.";
                            }
                            return null;
                        }
                    });
                    if (result === 'back') {
                        step = selectedType?.isCustom ? 2 : 1;
                        continue;
                    }
                    if (result === undefined) {
                        return; // User cancelled
                    }
                    name = result;
                    step = 4;
                }
                else if (step === 4) {
                    // Fetch existing agent API names for duplicate validation
                    let existingAgentNames = new Set();
                    try {
                        const entries = await vscode.workspace.fs.readDirectory(vscode.Uri.file(aiAuthoringBundlesDir));
                        existingAgentNames = new Set(entries
                            .filter(([, type]) => type === vscode.FileType.Directory)
                            .map(([dirName]) => dirName.toLowerCase()));
                    }
                    catch {
                        // Directory may not exist yet, which is fine — no duplicates possible
                    }
                    // Step 4: Enter API name
                    const generatedApiName = (0, core_1.generateApiName)(name);
                    const result = await showInputBoxWithBack({
                        title: 'Create Agent',
                        prompt: 'Enter the agent API name',
                        placeholder: 'API name',
                        value: apiName ?? generatedApiName,
                        showBack: true,
                        validateInput: value => {
                            if (value === '') {
                                if (/^[A-Za-z][A-Za-z0-9_]*[A-Za-z0-9]+$/.test(generatedApiName)) {
                                    if (existingAgentNames.has(generatedApiName.toLowerCase())) {
                                        return 'An agent with this API name already exists.';
                                    }
                                    return null; // Empty accepted, uses default
                                }
                                return 'Invalid generated API name. Please enter a valid API name.';
                            }
                            if (value.length > 80) {
                                return 'API name cannot be over 80 characters.';
                            }
                            if (!/^[A-Za-z][A-Za-z0-9_]*[A-Za-z0-9]+$/.test(value)) {
                                return 'Invalid API name.';
                            }
                            if (existingAgentNames.has(value.toLowerCase())) {
                                return 'An agent with this API name already exists.';
                            }
                            return null;
                        }
                    });
                    if (result === 'back') {
                        step = 3;
                        continue;
                    }
                    if (result === undefined) {
                        return; // User cancelled
                    }
                    apiName = result || generatedApiName;
                    break; // Done with wizard
                }
            }
            if (!name || !apiName) {
                return;
            }
            // Show progress
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: `Generate Agent: ${apiName}`,
                cancellable: false
            }, async (progress) => {
                progress.report({ message: 'Creating structure', increment: 50 });
                await new Promise(resolve => setTimeout(resolve, 300));
                progress.report({ message: 'Generating script file' });
                await agents_1.ScriptAgent.createAuthoringBundle({
                    project,
                    agentSpec: {
                        ...(spec ? YAML.parse((0, node_fs_1.readFileSync)(spec, 'utf8')) : {}),
                        ...{ name, developerName: apiName, role: `${name} description` }
                    },
                    bundleApiName: apiName,
                    outputDir: targetDir
                });
                progress.report({ message: 'Created successfully', increment: 100 });
                // Open the agent file
                // Agent.createAuthoringBundle creates the file at outputDir/aiAuthoringBundles/bundleApiName/bundleApiName.agent
                const agentFilePath = path.join(targetDir, 'aiAuthoringBundles', apiName, `${apiName}.agent`);
                const doc = await vscode.workspace.openTextDocument(agentFilePath);
                await vscode.window.showTextDocument(doc);
                // Refresh agent list and auto-select the newly created agent
                await vscode.commands.executeCommand('sf.agent.combined.view.refreshAgents', apiName);
                vscode.window.showInformationMessage(`Agent "${name}" was generated successfully.`);
            });
        }
        catch (error) {
            const sfError = core_1.SfError.wrap(error);
            const errorMessage = `Failed to generate agent: ${sfError.message}`;
            logger.error(errorMessage, sfError);
            vscode.window.showErrorMessage(errorMessage);
            telemetryService?.sendException('createAiAuthoringBundle_failed', errorMessage);
        }
    });
};
exports.registerCreateAiAuthoringBundleCommand = registerCreateAiAuthoringBundleCommand;
//# sourceMappingURL=createAiAuthoringBundle.js.map