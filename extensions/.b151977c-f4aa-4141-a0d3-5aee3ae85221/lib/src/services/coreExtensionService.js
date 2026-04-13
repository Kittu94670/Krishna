"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreExtensionService = exports.WORKSPACE_CONTEXT_NOT_FOUND = exports.CORE_EXTENSION_NOT_FOUND = exports.TELEMETRY_SERVICE_NOT_FOUND = exports.CHANNEL_SERVICE_NOT_FOUND = exports.NOT_INITIALIZED_ERROR = void 0;
/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const semver_1 = require("semver");
const vscode_1 = require("vscode");
const core_1 = require("@salesforce/core");
const coloredChannelService_1 = require("../utils/coloredChannelService");
const CORE_EXTENSION_ID = 'salesforce.salesforcedx-vscode-core';
exports.NOT_INITIALIZED_ERROR = 'CoreExtensionService not initialized';
exports.CHANNEL_SERVICE_NOT_FOUND = 'ChannelService not found';
exports.TELEMETRY_SERVICE_NOT_FOUND = 'TelemetryService not found';
exports.CORE_EXTENSION_NOT_FOUND = 'Core extension not found';
exports.WORKSPACE_CONTEXT_NOT_FOUND = 'Workspace Context not found';
class CoreExtensionService {
    static initialized = false;
    static channelService;
    static testChannelService;
    static telemetryService;
    static workspaceContext;
    static get isInitialized() {
        return CoreExtensionService.initialized;
    }
    static async loadDependencies(context) {
        if (!CoreExtensionService.initialized) {
            try {
                const coreExtensionApi = CoreExtensionService.validateCoreExtension();
                CoreExtensionService.initializeChannelService(coreExtensionApi?.services.ChannelService);
                CoreExtensionService.initializeTelemetryService(coreExtensionApi?.services.TelemetryService, context);
                CoreExtensionService.initializeWorkspaceContext(coreExtensionApi?.services.WorkspaceContext);
                CoreExtensionService.initialized = true;
            }
            catch (error) {
                console.warn('[CoreExtensionService] Failed to initialize core extension dependencies:', error);
                // Initialize fallback services so extension can still function
                CoreExtensionService.channelService = new coloredChannelService_1.ColoredChannelService('Agentforce DX');
                CoreExtensionService.testChannelService = new coloredChannelService_1.ColoredChannelService('Agentforce DX Tests');
                // Leave telemetryService and workspaceContext undefined - commands will handle gracefully
            }
        }
    }
    static initializeWorkspaceContext(workspaceContext) {
        if (!workspaceContext) {
            throw new Error(exports.WORKSPACE_CONTEXT_NOT_FOUND);
        }
        CoreExtensionService.workspaceContext = workspaceContext.getInstance(false);
    }
    static getCoreExtensionVersion() {
        const coreExtension = vscode_1.extensions.getExtension(CORE_EXTENSION_ID);
        if (!coreExtension) {
            throw new Error(exports.CORE_EXTENSION_NOT_FOUND);
        }
        return coreExtension.packageJSON.version;
    }
    static validateCoreExtension() {
        const coreExtension = vscode_1.extensions.getExtension(CORE_EXTENSION_ID);
        if (!coreExtension) {
            throw new Error(exports.CORE_EXTENSION_NOT_FOUND);
        }
        const coreExtensionVersion = CoreExtensionService.getCoreExtensionVersion();
        if (!CoreExtensionService.isAboveMinimumRequiredVersion('60.13.0', coreExtensionVersion)) {
            throw new Error("It looks you're running an older version of the Salesforce CLI Integration VS Code Extension. Update the Salesforce Extension Pack and try again.");
        }
        return coreExtension.exports;
    }
    static initializeChannelService(channelService) {
        if (!channelService) {
            throw new Error(exports.CHANNEL_SERVICE_NOT_FOUND);
        }
        // Initialize extension channel for general extension logging with syntax highlighting
        CoreExtensionService.channelService = new coloredChannelService_1.ColoredChannelService('Agentforce DX');
        // Initialize test channel for agent test output (keep original for test output formatting)
        CoreExtensionService.testChannelService = channelService.getInstance('Agentforce DX Tests');
    }
    static initializeTelemetryService(telemetryService, context) {
        if (!telemetryService) {
            throw new Error(exports.TELEMETRY_SERVICE_NOT_FOUND);
        }
        const { aiKey, name, version } = context.extension.packageJSON;
        // Use "AgentforceDX" as the extension name for telemetry
        const extensionName = 'AgentforceDX';
        CoreExtensionService.telemetryService = telemetryService.getInstance(extensionName);
        void CoreExtensionService.telemetryService.initializeService(context, extensionName, aiKey, version);
    }
    static isAboveMinimumRequiredVersion(minRequiredVersion, actualVersion) {
        // Check to see if version is in the expected MAJOR.MINOR.PATCH format
        if (!(0, semver_1.valid)(actualVersion)) {
            void vscode_1.window.showWarningMessage(`Invalid version format found for the Core Extension ${actualVersion} < ${minRequiredVersion}`);
        }
        return (0, semver_1.satisfies)(actualVersion, '>=' + minRequiredVersion);
    }
    static getChannelService() {
        // Return channel service even if not fully initialized - we have a fallback
        if (CoreExtensionService.channelService) {
            return CoreExtensionService.channelService;
        }
        throw new Error(exports.NOT_INITIALIZED_ERROR);
    }
    static getTestChannelService() {
        // Return test channel service even if not fully initialized - we have a fallback
        if (CoreExtensionService.testChannelService) {
            return CoreExtensionService.testChannelService;
        }
        throw new Error(exports.NOT_INITIALIZED_ERROR);
    }
    static async getDefaultConnection() {
        if (CoreExtensionService.initialized) {
            return await CoreExtensionService.workspaceContext.getConnection();
        }
        // Fallback: create connection directly when core extension is not available
        try {
            const configAggregator = await core_1.ConfigAggregator.create();
            const targetOrg = configAggregator.getPropertyValue('target-org');
            if (!targetOrg) {
                throw new Error('No default org configured. Set a default org with: sf config set target-org=<username>');
            }
            const org = await core_1.Org.create({ aliasOrUsername: targetOrg });
            return org.getConnection();
        }
        catch (error) {
            throw new Error(`${exports.NOT_INITIALIZED_ERROR}: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    static getTelemetryService() {
        // Return telemetry service if available, undefined otherwise
        // Commands should check for undefined and skip telemetry calls
        return CoreExtensionService.telemetryService;
    }
    static getOnOrgChangeEvent() {
        if (CoreExtensionService.initialized) {
            return CoreExtensionService.workspaceContext.onOrgChange;
        }
        throw new Error(exports.NOT_INITIALIZED_ERROR);
    }
}
exports.CoreExtensionService = CoreExtensionService;
//# sourceMappingURL=coreExtensionService.js.map