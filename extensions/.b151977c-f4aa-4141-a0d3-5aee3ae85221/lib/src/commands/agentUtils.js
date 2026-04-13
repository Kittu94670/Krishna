"use strict";
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
exports.getConnectionAndProject = getConnectionAndProject;
exports.getPublishedAgents = getPublishedAgents;
exports.getAgentNameFromPath = getAgentNameFromPath;
exports.getAgentNameFromFile = getAgentNameFromFile;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const core_1 = require("@salesforce/core");
const agents_1 = require("@salesforce/agents");
const UNSUPPORTED_AGENTS = ['Copilot_for_Salesforce'];
async function getConnectionAndProject() {
    const configAggregator = await core_1.ConfigAggregator.create();
    const org = await core_1.Org.create({
        aliasOrUsername: configAggregator.getPropertyValue('target-org') ?? 'undefined'
    });
    return { conn: org.getConnection(), project: core_1.SfProject.getInstance() };
}
async function getPublishedAgents(conn) {
    const agents = await agents_1.Agent.listRemote(conn);
    return agents
        .filter(a => !a.IsDeleted && !UNSUPPORTED_AGENTS.includes(a.DeveloperName))
        .map(a => ({
        name: a.DeveloperName,
        id: a.Id,
        isActivated: a.BotVersions.records.some(v => v.Status === 'Active' && !v.IsDeleted)
    }));
}
/**
 * Gets the agent name from a directory path or file path.
 * Handles both file selections and directory selections.
 */
async function getAgentNameFromPath(targetPath) {
    const stat = await vscode.workspace.fs.stat(vscode.Uri.file(targetPath));
    if (stat.type === vscode.FileType.Directory) {
        // If it's a directory, look for a .bot-meta.xml file in it
        return getAgentNameFromDirectory(targetPath);
    }
    else {
        // If it's a file, use the existing logic
        const fileName = path.basename(targetPath);
        return getAgentNameFromFile(fileName, targetPath);
    }
}
/**
 * Extracts the agent name from a directory by looking for a .bot-meta.xml file.
 */
async function getAgentNameFromDirectory(directoryPath) {
    try {
        const dirUri = vscode.Uri.file(directoryPath);
        const files = await vscode.workspace.fs.readDirectory(dirUri);
        // Find the .bot-meta.xml file
        const botMetaFile = files.find(([name, type]) => type === vscode.FileType.File && name.endsWith('.bot-meta.xml'));
        if (botMetaFile) {
            // Extract bot name from the .bot-meta.xml filename
            return botMetaFile[0].replace('.bot-meta.xml', '');
        }
        // Fallback: use the directory name (assuming it's the bot name)
        return path.basename(directoryPath);
    }
    catch (error) {
        console.warn('Failed to read directory for bot metadata, falling back to directory name:', error);
        return path.basename(directoryPath);
    }
}
/**
 * Extracts the agent name from the given file or directory.
 * For .bot-meta.xml files, returns the filename without extension.
 * For .botVersion-meta.xml files, looks for a .bot-meta.xml file in the same directory
 * and returns that filename without extension.
 * For directories, looks for a .bot-meta.xml file in the directory.
 */
async function getAgentNameFromFile(fileName, filePath) {
    // For bot metadata files, extract agent name from filename
    if (fileName.endsWith('.bot-meta.xml')) {
        return fileName.replace('.bot-meta.xml', '');
    }
    // For genAiPlannerBundle files, extract agent name from filename
    if (fileName.endsWith('.genAiPlannerBundle')) {
        // Remove the .genAiPlannerBundle extension
        let agentName = fileName.replace('.genAiPlannerBundle', '');
        // Remove version suffix (e.g., _v1, _v2, etc.)
        agentName = agentName.replace(/_v\d+$/, '');
        return agentName;
    }
    // For bot version metadata files, find the corresponding .bot-meta.xml file in the same directory
    if (fileName.endsWith('.botVersion-meta.xml')) {
        try {
            const directory = path.dirname(filePath);
            const dirUri = vscode.Uri.file(directory);
            // Read all files in the directory
            const files = await vscode.workspace.fs.readDirectory(dirUri);
            // Find the .bot-meta.xml file
            const botMetaFile = files.find(([name, type]) => type === vscode.FileType.File && name.endsWith('.bot-meta.xml'));
            if (botMetaFile) {
                // Extract bot name from the .bot-meta.xml filename
                return botMetaFile[0].replace('.bot-meta.xml', '');
            }
            // Fallback: try to infer from the file path structure
            // Bot version files are typically in: force-app/main/default/botVersions/{botName}/{versionName}.botVersion-meta.xml
            const pathParts = filePath.split(path.sep);
            const botVersionIndex = pathParts.findIndex(part => part === 'botVersions');
            if (botVersionIndex >= 0 && botVersionIndex < pathParts.length - 2) {
                return pathParts[botVersionIndex + 1]; // The bot name is the directory after 'botVersions'
            }
            // Last fallback: use the version name (original behavior)
            return fileName.replace('.botVersion-meta.xml', '');
        }
        catch (error) {
            console.warn('Failed to find bot metadata file in directory, falling back to filename:', error);
            return fileName.replace('.botVersion-meta.xml', '');
        }
    }
    return fileName;
}
//# sourceMappingURL=agentUtils.js.map