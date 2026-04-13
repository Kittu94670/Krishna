"use strict";
/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAllServicesLayer = exports.AllServicesLayer = void 0;
const setAllServicesLayer = (layer) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- deliberate narrowing: any→never for errors prevents type poisoning through Effect.provide
    exports.AllServicesLayer = layer;
};
exports.setAllServicesLayer = setAllServicesLayer;
//# sourceMappingURL=allServicesLayerRef.js.map