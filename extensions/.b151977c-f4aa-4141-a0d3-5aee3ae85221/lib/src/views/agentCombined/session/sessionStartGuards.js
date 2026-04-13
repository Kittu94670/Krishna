"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionStartGuards = createSessionStartGuards;
const types_1 = require("../types");
/**
 * Creates session start guards for cancellation detection
 */
function createSessionStartGuards(state, startId) {
    return {
        ensureActive: () => {
            if (state.sessionStartOperationId !== startId) {
                throw new types_1.SessionStartCancelledError();
            }
        },
        isActive: () => {
            return state.sessionStartOperationId === startId;
        }
    };
}
//# sourceMappingURL=sessionStartGuards.js.map