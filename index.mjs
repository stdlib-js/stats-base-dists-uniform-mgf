// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,s,r){var i;return e(t)||e(s)||e(r)||s>=r?NaN:0===t?1:(i=n(t*r)-n(t*s),i/=t*(r-s))}function i(t,r){return e(t)||e(r)||t>=r?s(NaN):function(s){var i;if(e(s))return NaN;if(0===s)return 1;return i=n(s*r)-n(s*t),i/=s*(r-t)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
