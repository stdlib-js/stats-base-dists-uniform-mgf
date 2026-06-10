"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(F,c){
var t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist');function x(e,r,i){var n;return t(e)||t(r)||t(i)||r>=i?NaN:e===0?1:(n=s(e*i)-s(e*r),n/=e*(i-r),n)}c.exports=x
});var N=f(function(O,q){
var y=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist');function m(e,r){if(a(e)||a(r)||e>=r)return y(NaN);return i;function i(n){var u;return a(n)?NaN:n===0?1:(u=v(n*r)-v(n*e),u/=n*(r-e),u)}}q.exports=m
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),d=N();g(p,"factory",d);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
