"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(f,n){
var t=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/constants-float64-pinf/dist');function o(e,r,i){return a(e)||a(r)||a(i)?NaN:!t(e)||!t(r)||!t(i)||e===u||r===u||r>e||i>e?NaN:i*(r/e)}n.exports=o
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
