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
exports.AgentInitializer = void 0;
const path = __importStar(require("path"));
const fs_1 = require("fs");
const agents_1 = require("@salesforce/agents");
const core_1 = require("@salesforce/core");
/**
 * Handles agent initialization logic
 */
class AgentInitializer {
    state;
    constructor(state) {
        this.state = state;
    }
    /**
     * Initializes a script agent
     */
    async initializeScriptAgent(filePath, conn, project, _isLiveMode, isActive, onCompiling, onSimulationStarting) {
        // Set up lifecycle event listeners for compilation progress
        const lifecycle = core_1.Lifecycle.getInstance();
        lifecycle.removeAllListeners?.('agents:compiling');
        lifecycle.removeAllListeners?.('agents:simulation-starting');
        // Listen for compilation events
        if (onCompiling) {
            lifecycle.on('agents:compiling', async (data) => {
                if (!isActive()) {
                    return;
                }
                onCompiling(data);
            });
        }
        // Listen for simulation starting event
        if (onSimulationStarting) {
            lifecycle.on('agents:simulation-starting', async (data) => {
                if (!isActive()) {
                    return;
                }
                onSimulationStarting(data);
            });
        }
        // Create agent instance
        // filePath might be either:
        // 1. A file path to a .agent file
        // 2. A directory path - in which case we need to find the .agent file
        // 3. A path with a "local:" prefix (from Agent.listPreviewable) - strip the prefix
        // 4. Just the name of the authoring bundle (aabName)
        let aabDirectory;
        // Strip "local:" prefix if present (agents library may return paths with this prefix)
        const normalizedPath = filePath.startsWith('local:') ? filePath.substring(6) : filePath;
        try {
            // Check if filePath is a directory
            const stats = await fs_1.promises.stat(normalizedPath);
            if (stats.isDirectory()) {
                // It's already a directory, verify it contains a .agent file
                const files = await fs_1.promises.readdir(normalizedPath);
                const agentFile = files.find(f => f.endsWith('.agent'));
                if (!agentFile) {
                    throw new Error(`Directory ${normalizedPath} does not contain a .agent file`);
                }
                aabDirectory = path.resolve(normalizedPath);
            }
            else if (normalizedPath.endsWith('.agent')) {
                // It's a .agent file, the bundle directory is the parent directory
                aabDirectory = path.resolve(path.dirname(normalizedPath));
                // Verify the directory contains the .agent file
                const files = await fs_1.promises.readdir(aabDirectory);
                const agentFile = files.find(f => f.endsWith('.agent'));
                if (!agentFile) {
                    throw new Error(`Directory ${aabDirectory} does not contain a .agent file`);
                }
            }
            else {
                // It's a file path, use findAuthoringBundle to get the directory
                const authoringBundle = (0, agents_1.findAuthoringBundle)(project.getPath(), normalizedPath);
                if (!authoringBundle) {
                    throw new Error(`Could not find authoring bundle for file: ${normalizedPath}`);
                }
                aabDirectory = path.resolve(authoringBundle);
            }
        }
        catch (error) {
            // If stat fails, it might be just a name (aabName), not a path
            // Check if it's a .agent file path
            if (normalizedPath.endsWith('.agent')) {
                aabDirectory = path.resolve(path.dirname(normalizedPath));
            }
            else {
                // Try findAuthoringBundle as fallback
                const authoringBundle = (0, agents_1.findAuthoringBundle)(project.getPath(), normalizedPath);
                if (!authoringBundle) {
                    // If findAuthoringBundle fails, assume it's just a name (aabName)
                    // Extract just the name from the path if it contains path separators
                    const aabName = normalizedPath.includes(path.sep) ? path.basename(normalizedPath) : normalizedPath;
                    const agent = await agents_1.Agent.init({
                        connection: conn,
                        aabName,
                        project: project
                    });
                    this.state.agentInstance = agent;
                    return agent;
                }
                aabDirectory = path.resolve(authoringBundle);
            }
        }
        // Extract just the name (basename) from the directory path
        const aabName = path.basename(aabDirectory);
        const agent = await agents_1.Agent.init({
            connection: conn,
            aabName,
            project: project
        });
        agent.preview.setMockMode(_isLiveMode ? 'Live Test' : 'Mock');
        this.state.agentInstance = agent;
        return agent;
    }
    /**
     * Initializes a published agent
     */
    async initializePublishedAgent(agentId, conn, project) {
        const agent = await agents_1.Agent.init({
            connection: conn,
            project: project,
            apiNameOrId: agentId
        });
        this.state.agentInstance = agent;
        return agent;
    }
}
exports.AgentInitializer = AgentInitializer;
//# sourceMappingURL=agentInitializer.js.map