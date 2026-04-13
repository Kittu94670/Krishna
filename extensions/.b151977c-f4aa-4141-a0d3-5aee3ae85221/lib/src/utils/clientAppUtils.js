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
exports.getAvailableClientApps = getAvailableClientApps;
exports.createConnectionWithClientApp = createConnectionWithClientApp;
/**
 * Utilities for handling client app authentication and connection setup
 */
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const core_1 = require("@salesforce/core");
/**
 * Reads the auth file and extracts available client apps
 */
async function getAvailableClientApps() {
    try {
        // Get the default target org username, creating a fresh instance each time
        const configAggregator = await core_1.ConfigAggregator.create();
        // Force a fresh read of the config value
        await configAggregator.reload();
        const targetOrgAliasOrUsername = configAggregator.getPropertyValue('target-org');
        if (!targetOrgAliasOrUsername) {
            return {
                type: 'none',
                clientApps: [],
                error: 'No default target org configured. Set your default target org using either the "SFDX: Set a Default Org" VS Code command or the "sf config set target-org <username>" CLI command.'
            };
        }
        // Resolve alias to actual username so we read the correct auth file
        const org = await core_1.Org.create({ aliasOrUsername: targetOrgAliasOrUsername });
        const resolvedUsername = org.getUsername();
        if (!resolvedUsername) {
            return {
                type: 'none',
                clientApps: [],
                error: `Couldn't resolve the username for this target org value: ${targetOrgAliasOrUsername}`
            };
        }
        // Read the authentication file
        const homeDir = os.homedir();
        const authFilePath = path.join(homeDir, '.sfdx', `${resolvedUsername}.json`);
        if (!fs.existsSync(authFilePath)) {
            return {
                type: 'none',
                clientApps: [],
                username: resolvedUsername,
                error: `Authentication file not found for username: ${resolvedUsername}. Authorize an org using the "sf org login jwt" CLI command.`
            };
        }
        const fileContent = fs.readFileSync(authFilePath, 'utf8');
        const authData = JSON.parse(fileContent);
        // Extract client apps from the object structure
        const clientApps = [];
        if (authData.clientApps && typeof authData.clientApps === 'object' && !Array.isArray(authData.clientApps)) {
            for (const [appName, appData] of Object.entries(authData.clientApps)) {
                const app = appData;
                if (app && app.clientId) {
                    clientApps.push({
                        name: appName,
                        clientId: app.clientId
                    });
                }
            }
        }
        if (clientApps.length === 0) {
            return {
                type: 'none',
                clientApps: [],
                username: authData.username || resolvedUsername
            };
        }
        else if (clientApps.length === 1) {
            return {
                type: 'single',
                clientApps,
                username: authData.username || resolvedUsername
            };
        }
        else {
            return {
                type: 'multiple',
                clientApps,
                username: authData.username || resolvedUsername
            };
        }
    }
    catch (error) {
        console.error('Error reading client apps:', error);
        return {
            type: 'none',
            clientApps: [],
            error: `Error reading authentication file: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
    }
}
/**
 * Creates a connection with the specified client app
 */
async function createConnectionWithClientApp(clientAppName) {
    // Get the default target org username, creating a fresh instance each time
    const configAggregator = await core_1.ConfigAggregator.create();
    // Force a fresh read of the config value
    await configAggregator.reload();
    const targetOrgAliasOrUsername = configAggregator.getPropertyValue('target-org');
    if (!targetOrgAliasOrUsername) {
        throw new Error('No default target org configured');
    }
    // Resolve alias to username to ensure consistent auth lookup
    const org = await core_1.Org.create({ aliasOrUsername: targetOrgAliasOrUsername });
    const resolvedUsername = org.getUsername();
    if (!resolvedUsername) {
        throw new Error(`Could not resolve username for target org value: ${targetOrgAliasOrUsername}`);
    }
    // Create AuthInfo and Connection with the client app
    const authInfo = await core_1.AuthInfo.create({
        username: resolvedUsername
    });
    const conn = await core_1.Connection.create({
        authInfo,
        clientApp: clientAppName
    });
    return conn;
}
//# sourceMappingURL=clientAppUtils.js.map