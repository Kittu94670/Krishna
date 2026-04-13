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
exports.validatePublishedAgentId = validatePublishedAgentId;
exports.getAgentStorageKey = getAgentStorageKey;
exports.getAgentSource = getAgentSource;
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
const agents_1 = require("@salesforce/agents");
const core_1 = require("@salesforce/core");
const coreExtensionService_1 = require("../../../services/coreExtensionService");
/**
 * Validates that an agent ID is a valid Salesforce Bot ID format
 */
function validatePublishedAgentId(agentId) {
    if (!agentId.startsWith('0X') || (agentId.length !== 15 && agentId.length !== 18)) {
        throw new Error(`The Bot ID provided must begin with "0X" and be either 15 or 18 characters. Found: ${agentId}`);
    }
}
/**
 * Gets the storage key for an agent based on its source
 */
function getAgentStorageKey(agentId, agentSource) {
    if (!agentId) {
        throw new Error('Agent ID is required to generate storage key');
    }
    if (agentSource === agents_1.AgentSource.SCRIPT) {
        // For script agents, agentId is the file path or aabName
        // Extract the directory name from the path if it's a path, otherwise use as-is
        const basename = agentId.includes(path.sep) ? path.basename(agentId) : agentId;
        if (!basename) {
            throw new Error(`Invalid agent path: ${agentId}`);
        }
        return basename;
    }
    // For org agents, agentId is the Bot ID
    return agentId;
}
/**
 * Determines the agent source type based on the agent ID
 */
async function getAgentSource(agentId, agents) {
    let agentList = agents;
    if (!agentList) {
        try {
            const conn = await coreExtensionService_1.CoreExtensionService.getDefaultConnection();
            const project = core_1.SfProject.getInstance();
            agentList = await agents_1.Agent.listPreviewable(conn, project);
        }
        catch (err) {
            console.error('Error loading agents for source lookup:', err);
            // If agentId looks like a file path, default to SCRIPT; otherwise PUBLISHED
            if (agentId.includes(path.sep) || agentId.endsWith('.agent')) {
                return agents_1.AgentSource.SCRIPT;
            }
            return agents_1.AgentSource.PUBLISHED;
        }
    }
    // First, try exact match by ID
    const agent = agentList.find(a => a.id === agentId);
    if (agent) {
        return agent.source;
    }
    // Check if agentId matches an agent's aabName (for script agents)
    const agentByAabName = agentList.find(a => a.aabName === agentId);
    if (agentByAabName) {
        return agentByAabName.source;
    }
    // Check if agentId matches an agent name in the list
    const agentByName = agentList.find(a => a.name === agentId || path.basename(a.id || '') === agentId);
    if (agentByName) {
        return agentByName.source;
    }
    // If not found, check if agentId is a file path that exists
    // Strip "local:" prefix if present
    const normalizedAgentId = agentId.startsWith('local:') ? agentId.substring(6) : agentId;
    if (normalizedAgentId.includes(path.sep) || normalizedAgentId.endsWith('.agent')) {
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(normalizedAgentId));
            return agents_1.AgentSource.SCRIPT;
        }
        catch {
            // File doesn't exist, but still looks like a path - treat as script
            return agents_1.AgentSource.SCRIPT;
        }
    }
    // Check if it's a valid Bot ID format
    if (agentId.startsWith('0X') && (agentId.length === 15 || agentId.length === 18)) {
        return agents_1.AgentSource.PUBLISHED;
    }
    // Default to SCRIPT for unknown formats
    return agents_1.AgentSource.SCRIPT;
}
//# sourceMappingURL=agentUtils.js.map