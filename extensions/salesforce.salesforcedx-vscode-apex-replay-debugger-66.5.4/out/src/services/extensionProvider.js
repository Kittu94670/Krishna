"use strict";
/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAllServicesLayer = exports.AllServicesLayer = exports.buildAllServicesLayer = void 0;
const effect_ext_utils_1 = require("@salesforce/effect-ext-utils");
const Effect = require("effect/Effect");
const Layer = require("effect/Layer");
const Schema = require("effect/Schema");
const ExtensionProviderServiceLive = Layer.effect(effect_ext_utils_1.ExtensionProviderService, Effect.sync(() => ({ getServicesApi: effect_ext_utils_1.getServicesApi })));
const buildAllServicesLayer = (context) => Layer.unwrapEffect(Effect.gen(function* () {
    const extensionProvider = yield* effect_ext_utils_1.ExtensionProviderService;
    const api = yield* extensionProvider.getServicesApi;
    const emptyPjson = {};
    const pjson = yield* Schema.decodeUnknown(effect_ext_utils_1.ExtensionPackageJsonSchema)(context.extension.packageJSON).pipe(Effect.catchAll(() => Effect.succeed(emptyPjson)));
    const channelLayer = api.services.ChannelServiceLayer(pjson.displayName ?? 'Apex Replay Debugger');
    const errorHandlerWithChannel = Layer.provide(api.services.ErrorHandlerService.Default, channelLayer);
    return Layer.mergeAll(Layer.succeedContext(api.services.prebuiltServicesDependencies), ExtensionProviderServiceLive, api.services.ExtensionContextServiceLayer(context), api.services.SdkLayerFor(context), channelLayer, errorHandlerWithChannel);
}).pipe(Effect.provide(ExtensionProviderServiceLive)));
exports.buildAllServicesLayer = buildAllServicesLayer;
var allServicesLayerRef_1 = require("./allServicesLayerRef");
Object.defineProperty(exports, "AllServicesLayer", { enumerable: true, get: function () { return allServicesLayerRef_1.AllServicesLayer; } });
Object.defineProperty(exports, "setAllServicesLayer", { enumerable: true, get: function () { return allServicesLayerRef_1.setAllServicesLayer; } });
//# sourceMappingURL=extensionProvider.js.map