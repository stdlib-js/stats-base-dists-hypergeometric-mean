// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(n){return r(n)===n&&n>=0}function t(r){return r!=r}var u=Number.POSITIVE_INFINITY;function a(r,a,e){return t(r)||t(a)||t(e)||!n(r)||!n(a)||!n(e)||r===u||a===u||a>r||e>r?NaN:e*(a/r)}export{a as default};
//# sourceMappingURL=mod.js.map
