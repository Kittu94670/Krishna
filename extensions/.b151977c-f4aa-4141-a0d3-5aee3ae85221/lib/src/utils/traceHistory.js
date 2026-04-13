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
exports.writeTraceEntryToFile = exports.readTraceHistoryEntries = void 0;
const path = __importStar(require("path"));
const fs_1 = require("fs");
const core_1 = require("@salesforce/core");
const TRACE_EXPORT_DIR = 'traces';
const resolveProjectLocalSfdx = async () => {
    try {
        const project = await core_1.SfProject.resolve();
        return path.join(project.getPath(), '.sfdx');
    }
    catch {
        return path.join(process.cwd(), '.sfdx');
    }
};
const ensureTraceExportDir = async (agentStorageKey) => {
    const base = await resolveProjectLocalSfdx();
    const dir = path.join(base, 'agents', agentStorageKey, TRACE_EXPORT_DIR);
    await fs_1.promises.mkdir(dir, { recursive: true });
    return dir;
};
const sanitizeForFilename = (value) => value
    .replace(/[^a-z0-9-_]+/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'trace';
/**
 * Reads all trace files from all sessions for an agent
 * Uses the library's session format: ~/.sfdx/agents/{agentId}/sessions/{sessionId}/traces/{planId}.json
 */
const readTraceHistoryEntries = async (agentStorageKey) => {
    if (!agentStorageKey) {
        console.warn('Agent storage key is empty, returning empty trace history');
        return [];
    }
    try {
        const base = await resolveProjectLocalSfdx();
        const agentDir = path.join(base, 'agents', agentStorageKey, 'sessions');
        // Check if sessions directory exists
        try {
            await fs_1.promises.access(agentDir);
        }
        catch {
            return [];
        }
        const entries = [];
        const sessionDirs = await fs_1.promises.readdir(agentDir, { withFileTypes: true });
        // Read all sessions
        for (const sessionDir of sessionDirs) {
            if (!sessionDir.isDirectory()) {
                continue;
            }
            const sessionId = sessionDir.name;
            const tracesDir = path.join(agentDir, sessionId, 'traces');
            // Check if traces directory exists
            try {
                await fs_1.promises.access(tracesDir);
            }
            catch {
                continue;
            }
            // Read all trace files in this session
            const traceFiles = await fs_1.promises.readdir(tracesDir);
            for (const traceFile of traceFiles) {
                if (!traceFile.endsWith('.json')) {
                    continue;
                }
                try {
                    const planId = path.basename(traceFile, '.json');
                    const tracePath = path.join(tracesDir, traceFile);
                    const traceContent = await fs_1.promises.readFile(tracePath, 'utf8');
                    const trace = JSON.parse(traceContent);
                    // Try to read metadata for timestamp
                    let timestamp = new Date().toISOString();
                    try {
                        const metadataPath = path.join(agentDir, sessionId, 'metadata.json');
                        const metadataContent = await fs_1.promises.readFile(metadataPath, 'utf8');
                        const metadata = JSON.parse(metadataContent);
                        timestamp = metadata.startTime || timestamp;
                    }
                    catch {
                        // Use file modification time as fallback
                        const stats = await fs_1.promises.stat(tracePath);
                        timestamp = stats.mtime.toISOString();
                    }
                    entries.push({
                        storageKey: agentStorageKey,
                        agentId: agentStorageKey,
                        sessionId,
                        planId,
                        timestamp,
                        trace
                    });
                }
                catch (error) {
                    console.error(`Error reading trace file ${traceFile}:`, error);
                }
            }
        }
        // Sort by timestamp (newest first)
        entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        return entries;
    }
    catch (error) {
        if (error.code !== 'ENOENT') {
            console.error('Could not read trace history:', error);
        }
        return [];
    }
};
exports.readTraceHistoryEntries = readTraceHistoryEntries;
/**
 * Writes a trace entry to a JSON file for viewing/export
 * This is a utility function for opening trace files in the editor
 */
const writeTraceEntryToFile = async (entry) => {
    const { storageKey, planId, sessionId, trace } = entry;
    if (!storageKey || storageKey.trim() === '') {
        throw new Error('Trace entry is missing storage information.');
    }
    const exportDir = await ensureTraceExportDir(storageKey);
    const safeSessionId = sanitizeForFilename(sessionId || 'session');
    const safePlanId = sanitizeForFilename(planId || 'trace');
    const fileName = `${safeSessionId}-${safePlanId}.json`;
    const filePath = path.join(exportDir, fileName);
    await fs_1.promises.writeFile(filePath, JSON.stringify(trace ?? {}, null, 2), 'utf8');
    return filePath;
};
exports.writeTraceEntryToFile = writeTraceEntryToFile;
//# sourceMappingURL=traceHistory.js.map