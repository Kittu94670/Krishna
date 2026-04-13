"use strict";
/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureTraceFlagsForCurrentUser = void 0;
const effect_ext_utils_1 = require("@salesforce/effect-ext-utils");
const Effect = require("effect/Effect");
const extensionProvider_1 = require("./extensionProvider");
/** Promise bridge for imperative code. Ensures trace flags exist for the current target org user. */
const ensureTraceFlagsForCurrentUser = () => Effect.runPromise(Effect.gen(function* () {
    const api = yield* (yield* effect_ext_utils_1.ExtensionProviderService).getServicesApi;
    const traceFlagService = yield* api.services.TraceFlagService;
    const userId = yield* traceFlagService.getUserId();
    yield* traceFlagService.ensureTraceFlag(userId);
    return true;
}).pipe(Effect.catchAll(() => Effect.succeed(false)), Effect.provide(extensionProvider_1.AllServicesLayer)));
exports.ensureTraceFlagsForCurrentUser = ensureTraceFlagsForCurrentUser;
//# sourceMappingURL=ensureTraceFlags.js.map