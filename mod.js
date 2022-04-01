// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n&&n>=0};var t=function(r){return r!=r},a=Number.POSITIVE_INFINITY,u=n,e=t,o=a;var f=function(r,n,t){return e(r)||e(n)||e(t)||!u(r)||!u(n)||!u(t)||r===o||n===o||n>r||t>r?NaN:t*(n/r)};export{f as default};
//# sourceMappingURL=mod.js.map
