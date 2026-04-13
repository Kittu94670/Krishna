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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Formats a log message with timestamp and status indicator
 * Format: [MM-DD-YYYY HH:MM:SS.sss] [STATUS] message
 */
function formatLogMessage(level, message) {
    const timestamp = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
        hour12: false
    });
    const statusMap = {
        error: '[error]',
        warn: '[warn]',
        debug: '[debug]'
    };
    return `[${timestamp}] ${statusMap[level]} ${message}`;
}
/**
 * Logger utility for structured logging with timestamps and status indicators
 */
class Logger {
    channelService;
    constructor(channelService) {
        this.channelService = channelService;
    }
    /**
     * Log an error message with optional stack trace and API response
     * @param message - The error message to log
     * @param error - Optional SfError instance containing error details
     */
    error(message, error) {
        this.channelService.appendLine(formatLogMessage('error', message));
        if (error) {
            if (error.message && error.message !== message) {
                this.channelService.appendLine(formatLogMessage('error', `  Details: ${error.message}`));
            }
            // Try to extract API response data from SfError
            const errorAny = error;
            if (errorAny.data || errorAny.response || errorAny.body) {
                this.channelService.appendLine(formatLogMessage('error', '  API Response:'));
                try {
                    const responseData = errorAny.data || errorAny.response || errorAny.body;
                    const responseStr = typeof responseData === 'string' ? responseData : JSON.stringify(responseData, null, 2);
                    // Indent each line of the response
                    responseStr.split('\n').forEach(line => {
                        this.channelService.appendLine(formatLogMessage('error', `    ${line}`));
                    });
                }
                catch (e) {
                    this.channelService.appendLine(formatLogMessage('error', `    ${String(errorAny.data || errorAny.response || errorAny.body)}`));
                }
            }
            // Log status code if available
            if (errorAny.statusCode || errorAny.code) {
                this.channelService.appendLine(formatLogMessage('error', `  Status Code: ${errorAny.statusCode || errorAny.code}`));
            }
            if (error.stack) {
                // Indent stack trace for readability
                const stackLines = error.stack.split('\n').slice(1); // Skip first line (message)
                stackLines.forEach(line => {
                    this.channelService.appendLine(formatLogMessage('error', `  ${line.trim()}`));
                });
            }
        }
    }
    /**
     * Log a warning message
     */
    warn(message) {
        this.channelService.appendLine(formatLogMessage('warn', message));
    }
    /**
     * Log a debug message
     */
    debug(message) {
        this.channelService.appendLine(formatLogMessage('debug', message));
    }
    /**
     * Log a raw line without formatting (for backward compatibility with test output)
     */
    appendLine(message) {
        this.channelService.appendLine(message);
    }
    /**
     * Log additional error details as continuation of previous error message
     */
    errorDetail(message) {
        const indent = '\t'; // Single tab for clean indentation
        this.channelService.appendLine(`${indent}${message}`);
    }
    /**
     * Show the channel output
     */
    show() {
        this.channelService.showChannelOutput();
    }
    /**
     * Clear the channel
     */
    clear() {
        this.channelService.clear();
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map