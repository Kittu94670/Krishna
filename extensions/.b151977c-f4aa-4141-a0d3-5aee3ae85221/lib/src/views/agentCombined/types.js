"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStartCancelledError = void 0;
/**
 * Custom error for session start cancellation
 */
class SessionStartCancelledError extends Error {
    constructor() {
        super('Agent session start was cancelled');
        this.name = 'SessionStartCancelledError';
    }
}
exports.SessionStartCancelledError = SessionStartCancelledError;
//# sourceMappingURL=types.js.map