!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self).FUTILITY=e()}(this,(function(){"use strict";function memoizeWith(n){return function memoize(e){const t={};return function memoized(){const r=Array.from(arguments),o=n(r);return o&&t[o]||(t[o]=e.apply(null,r)),t[o]}}}function ofConstructor(n){return function ofConstructorsAndMagic(e){return e&&e.constructor===n||e instanceof n}}function mash(n,e){return Object.assign({},n,e)}function defaultMemoizer(n){let[e,t]=n;return e.concat(t).map(n=>"symbol"==typeof n?function symbolToString(n){return""+n.toString()}(n):n).join("-")}function makeTypechecker(n,e=defaultMemoizer){return memoizeWith(e)((function rawMakeTypeChecker(e,t){if(!Array.isArray(e)||!Array.isArray(e))throw new TypeError("makeTypechecker needs two valid lists of types to run");const r=e[e.length-1],o=e.slice(0,e.length-1);return o.slice(0,t.length).map((function typeCheckParam(e,r){const o=n(t[r]),i=v(o,e);return{idx:r,raw:Object.freeze({value:t[r]}),actual:o,expected:e,success:i}})).reduce((function typeCheckOutcomes(n,e){const t=e.success?"valid":"invalid",r=mash(n,{[t]:n[t].concat([e]),rawParams:n.rawParams.concat([e])});return mash(r,{failures:n.failures||r.invalid.length>0})}),{rawParams:[],invalid:[],valid:[],signature:e.join(" -> "),params:o,returnType:r,given:t})}))}function isUnmatched(n){return n===N}function system(n){let e=n&&n.constructor&&n.constructor.name||"Global",t=typeof n;return n||("undefined"===t||"object"===t?t="nil":e="Boolean"),`${e}${w}${t}`}function checkParamsWith(n){return function checkParams(e,t){return!makeTypechecker(n)(e,t).failures}}function checkReturnWith(n){return function checkReturn(e){return function checkReturnTypeValidoutcomeAB(t,r){const o=n(e),i=makeTypechecker(n)(t,r).returnType;return v(i,o)}}}function makeAliases(n){return n.temper(n,{I:n.identity,K:n.constant,PLACEHOLDER:n.$,__:n.$,always:n.constant,entries:n.toPairs,every:n.all,fromEntries:n.fromPairs,merge:n.mash,mergeAll:n.smash,mergeRight:n.jam,sideEffect2:n.binarySideEffect,some:n.any})}function length(n){return n&&"object"==typeof n?Object.keys(n).length:n.length}function makeIterable(n){const e=Array.isArray(n);if(!e&&!(n&&"object"==typeof n))throw new TypeError("Expected iterable initial value to be either an array or an object.");const t=length(n),r=e?Array(t):{},o=!e&&Object.keys(n);return{length:t,iterate:function iterate(t){const r=e?t:o[t];return{key:r,value:n[r]}},init:r,isArray:e}}function extendDerived(n){return n.pipe(n.toPairs,n.reduce((function extendFUtility(n,[e,t]){const r=t(n);return n.mash(n,e.includes("__")?r:{[e]:r})}),n))(M)}function extendBinary(n){const e={gt:tn,gte:rn,lt:cn,lte:un,and:H,equals:X,or:ln,subtract:dn,add:W,divide:K,multiply:sn,all:J,any:G,filter:Z,forEach:nn,includes:en,apply:B,ap:Y,concat:V,map:an,join:on,cond:Q,nth:fn,range:pn,sort:yn,split:mn,toJSON:hn};return n.temper(n,e)}function extendTernary(n){const e={both:bn,either:gn,reduce:En,slice:kn};return n.temper(n,e)}function extendQuaternary(n){const e={ifElse:Tn};return n.temper(n,e)}function toString(n,e=[]){return function functionToString(){return`curry(${n.name||"fn"})${e.length>0?`(${e.join(",")})`:""}`}}function hmError(n,e,t){return`Given ${n}( ${e&&e.join(", ")} ) but expected ${n}( ${t.map(n=>Array.isArray(n)?n.join("|"):n).slice(0,e.length).join(", ")} )`}function DEFAULT_PLACEHOLDER_TEST(n){return n===An}function fabricate(n){const{test:e=DEFAULT_PLACEHOLDER_TEST}=n,t=function defineFunctionWithParameterTest(n){return function funcfunc({ts:e=system,n:t,hm:r,check:o}){if(o){if("function"!=typeof e)throw new TypeError("Expected typeSystem to be a function.");if(!r||!Array.isArray(r))throw new TypeError("Expected hm to be an array of strings.")}return function currified(i){function curried(){function saucy(){const e=Array.from(arguments);return curried.apply(this,u(n,e))}const n=Array.from(arguments),s=r&&Array.isArray(r)?r.length-1:t&&"number"==typeof t?t:i.length,f=a(n)?c(n):n.length;if(saucy.toString=toString(i,n),f>=s){const t=i.apply(this,n);if(o){const o=makeTypechecker(e)(r,n);if(!checkParamsWith(e)(r,n)){const{rawParams:n,params:e}=o;throw new TypeError(hmError(i.name,n.map(n=>n.actual),e.map(g)))}if(!checkReturnWith(e)(t)(r,n)){const{returnType:n}=o;throw new TypeError(`Expected ${i.name} to return ${g(n)} but got ${system(t)}.`)}}return t}return saucy}const c=function testCurryGaps(n){return function testCurryCapsByTaste(e){return e.reduce((function doesCurryTasteGood(e,t){return n(t)?e:e+1}),0)}}(n),u=function makeParamMerger(n){return function compareParams(e,t){return e.map((function testGaps(e){return n(e)&&t[0]?t.shift():e})).concat(t)}}(n),a=function some(n){return function someInList(e){return e.some(n)}}(n);return curried.toString=toString(i),curried}}}(e),r=t(mash(n,{n:!1,check:!1})),o=r((function _curryN(e,r){return t(mash(n,{n:e,check:!1}))(r)}));return{def:t,curry:r,curryN:o}}function custom(e){return U.pipe(fabricate,(function basicDefinitions({def:e,curry:t,curryN:r}){const o=function makeSideEffectsFromEnv(n){const e=n((function _sideEffect(n,e){return n(e),e})),t=n((function _binarySideEffect(n,e,t){return n(e,t),t})),r=t(console.log);return{sideEffect:e,binarySideEffect:t,trace:r,inspect:n((function _inspect(n,e,t,r){return n(t,e(r)),r}))}}(t),i=function autoCurryUsing(n){return function autoCurry(e){return Object.keys(e).map((function wrapCurry(t){const r=e[t];return[t,"function"==typeof r&&r.length?n(r.length,r):r]})).reduce((n,[e,t])=>Object.assign({},n,{[e]:t}),{})}}(r),c=U.smash(i(U),o,{memoizeWith:memoizeWith,def:e,curry:t,curryN:r,C:n,$:n.$,is:ofConstructor,isArray:y,isBoolean:l,isFunction:f,isNumber:s,isRawObject:m,isString:a,isSymbol:p,isUndefined:u,isUnmatched:isUnmatched});return c.pipe(extendBinary,i,extendTernary,i,extendQuaternary,i,extendDerived,makeAliases)(c)}))(e)}const n=Object.freeze({$:"@@FUTILITY::constant.magic",UNMATCHED:"@@FUTILITY::constant.unmatched",b:"\b",f:"\f",n:"\n",t:"\t",r:"\r",q:"'",qq:'"',s:"\\",__of__:"∋",UNION_TYPE_DELIMITER:"|"}),[e,t,r,o,i,c]=[String,Number,Function,Boolean,Symbol,Object].map(ofConstructor),u=function ofType(n){return function compareTypeofs(e){return typeof e===n}}("undefined"),a=e,s=t,f=r,l=o,p=i,m=c,y=Array.isArray,d=Object.freeze({string:"String∋string",number:"Number∋number",boolean:"Boolean∋boolean",function:"Function∋function",object:"Object∋object",undefined:"Global∋nil",symbol:"Symbol∋symbol",nil:"Global∋nil"}),{UNION_TYPE_DELIMITER:h,__of__:b}=n,g=function unionArchetype(n){return function arch(e){if(e&&e.indexOf&&e.indexOf(h)>-1&&n)return e.split(h).map(n=>unionArchetype(!1)(n));const t=d[e];return t||(e[0].toUpperCase()===e[0]?`${e}${b}object`:e)}}(!0),E=mash,k=memoizeWith((function basicMemo(n){return n}))((function unionType(n){return n.split("|")})),{__of__:A}=n,O=memoizeWith(n=>n)(n=>{const e=n.indexOf(A);return e>-1?n.slice(0,e):n}),{__of__:_}=n,j=memoizeWith(n=>n)(n=>{const e=n.indexOf(_);return e>-1?n.slice(e+1):n}),v=memoizeWith(n=>n)((function _compareTypes(n,e){const[t,r]=[n,e].map(k);return 0===t.map(n=>r.map(e=>"any"===n||"any"===e||n===e||O(n)===O(e)||j(n)===j(e))).reduce((n,e)=>n.concat(0===e.filter(n=>!n).length),[]).filter(n=>!n).length})),{UNMATCHED:N}=n,{__of__:w}=n,I=Array.isArray,P=Object.keys,x=Object.freeze,C=Math.round;const S=function temper(n,e){return Object.freeze(Object.assign({},n,e))},U=S(Object.freeze({__proto__:null,isArray:I,keys:P,freeze:x,round:C}),{F:function F(){return!0},T:function T(){return!0},box:function box(n){return[n]},call:function call(n){return n[0].apply(null,n.slice(1))},complement:function complement(n){return function subtleComplement(){const e=Array.from(arguments);return!n.apply(null,e)}},constant:function constant(n){return function forever(){return n}},first:function first(n){return n[0]},fromPairs:function fromPairs(n){return n.reduce((function pairing(n,[e,t]){return Object.assign({},n,{[e]:t})}),{})},identity:function identity(n){return n},jam:function jam(n,e){return Object.assign({},e,n)},last:function last(n){return n[n.length-1]},length:length,smash:function smash(n){const e=Array.from(arguments);return!Array.isArray(n)&&e.length&&(n=e),n.reduce((n,e)=>Object.assign({},n,e))},mash:E,not:function not(n){return!n},pipe:function pipe(){const n=Array.from(arguments),e=n.filter(n=>"function"!=typeof n);if(0!==e.length)throw new TypeError("Expected to receive functions as arguments, but received: "+e.map((n,e)=>`[${e}] = ${n}`).join(" ; "));return function piped(e){const t=n.length;let r=0,o=e;for(;r<t;){o=(0,n[r])(o),r+=1}return o}},smooth:function smooth(n){return n.filter(Boolean)},temper:S,toLower:function toLower(n){return n.toLowerCase()},toPairs:function toPairs(n){return Object.keys(n).map((function enpair(e){return[e,n[e]]}))},toUpper:function toUpper(n){return n.toUpperCase()}}),D=2,$=2,L=3,z=2,q=2,R=2,M={j2:function makeJ2({toJSON:n}){return n(2)},addIndex:function makeAddIndex({curryN:n}){return function addIndex(e){return n(e.length,(function indexAddedIter(){let n=0;const t=Array.prototype.slice.call(arguments,0),[r]=t,o=t[t.length-1];return t[0]=function indexAdded(){const e=r.apply(this,[].concat(arguments).concat([n,o]));return n+=1,e},e.apply(this,t)}))}},bind:function makeBind({curryN:n}){return n(2,(function bind(e,t){function bound(){return e.apply(t,arguments)}return e.length>1?n(e.length,bound):bound}))},flip:function makeFlip({curryN:n}){return function flip(e){return n(2,(function flipped(n,t){return e(t,n)}))}},when:function makeWhen({ifElse:n,identity:e,$:t}){return n(t,t,e)},flatten:function makeFlatten({isArray:n,forEach:e}){return function flatten(t){let r=0;const o=makeIterable(t);let i=[];for(;r<o.length;){let{value:t}=o.iterate(r);n(t)?(t=flatten(t),e(n=>i.push(n),t)):i.push(t),r+=1}return i}},chain:function makeChain({curryN:n,map:e,pipe:t,reduce:r,concat:o}){return n(D,(function chain(n,i){return i&&"function"==typeof i.chain?i.chain(n):"function"==typeof i?e=>n(i(e),e):t(e(n),r(o,[]))(i)}))},reject:function makeReject({curryN:n,filter:e,complement:t}){return n(z,(function reject(n,r){return e(t(n),r)}))},uniq:function makeUniq({reduce:n}){return n((function unique(n,e){return n.includes(e)?n:n.concat(e)}),[])},isObject:function makeIsObject({both:n,isRawObject:e}){return function isObject(t){return n(e,Boolean)(t)}},union:function makeUnion({uniq:n,curryN:e,pipe:t,concat:r}){return e(R,(function union(e,o){return t(r(o),n)(e)}))},difference:function makeDifference({curryN:n,filter:e,includes:t,complement:r}){return n($,(function difference(n,o){return e(r(t(o)),n)}))},symmetricDifference:function makeSymmetricDifference({curryN:n}){return n(q,(function symmetricDifference(n,e){const t=makeIterable(n),r=makeIterable(e),o=[];let i=0;for(;i<t.length;){const{value:n}=t.iterate(i);e.includes(n)||o.push(n),i+=1}let c=0;for(;c<r.length;){const{value:e}=r.iterate(c);n.includes(e)||o.push(e),c+=1}return o}))},__predicatesPass:function makePredicatesPass({curryN:n,pipe:e,map:t,flip:r,any:o,all:i,smooth:c,length:u,gt:a}){function predFor(o){return n(2,(function predPass(n,i){return e(t(r(o)(i)),c,u,a(0))(n)}))}return{anyPass:predFor(o),allPass:predFor(i)}},pathOr:function makePathOr({curryN:n,reduce:e}){return n(L,(function pathOr(n,t,r){return e((function walkPathOr(e,t){return e&&e[t]||n}),r,t)}))},__derived:function makePathOrDerivatives({equals:e,is:t,curryN:r,pipe:o,pathOr:i}){function deriveFromAccessor(i){return{accIs:r(3,(function pathIsOfConstructor(e,r,c){return o(i(n.UNMATCHED,r),t(e))(c)})),unsafe:i(null),eq:r(3,(function equivalence(t,r,c){return o(i(n.UNMATCHED,t),e(r))(c)})),satisfies:r(3,(function satisfaction(e,t,r){return o(i(n.UNMATCHED,t),e,Boolean)(r)}))}}const{unsafe:c,eq:u,satisfies:a,accIs:s}=deriveFromAccessor(i),f=r(3,(function _propOr(n,e,t){return i(n,[e],t)})),{unsafe:l,eq:p,satisfies:m,accIs:y}=deriveFromAccessor(f);return{path:c,pathEq:u,pathSatisfies:a,pathIs:s,propOr:f,prop:l,propEq:p,propSatisfies:m,propIs:y}}},W=function add(n,e){return e+n},B=function apply(n,e){return n.apply(null,e)},H=function and(n,e){return n&&e},G=function any(n,e){let t=0,r=!1;const o=length(e);for(;t<o&&!r;)n(e[t])&&(r=!0),t+=1;return r},J=function all(n,e){let t=0;const r=makeIterable(e);let o=!0;for(;t<r.length&&o;){const{value:e}=r.iterate(t);n(e)||(o=!1),t+=1}return o},Y=function ap(n,e){if(f(n)&&f(e))return function sCombinator(t){return n(t,e(t))};if(!y(n)||!y(e))throw new TypeError("Expected to receive an array of functions and an array of values.");if(!n.length||n.filter(f).length!==n.length)throw new TypeError("Expected to receive an array of functions to apply.");return n.reduce((function apReduce(n,t){return n.concat(e.map(t))}),[])},V=function concat(n,e){return n.concat(e)},Q=function cond(n,e){let t,r=0,o=!1;const i=length(n);for(;r<i&&!o;){const[i,c]=n[r];i(e)&&(o=!0,t=c(e)),r+=1}return t},K=function divide(n,e){return e/n},X=function equals(n,e){return n===e},Z=function filter(n,e){let t=0;const r=makeIterable(e),{length:o,isArray:i}=r,c=i?[]:{};for(;t<o;){const{key:e,value:o}=r.iterate(t);n(o)&&(i?c.push(o):c[e]=o),t+=1}return c},nn=function forEach(n,e){let t=0;const r=makeIterable(e),{length:o}=r;for(;t<o;){const{value:e}=r.iterate(t);n(e),t+=1}},en=function includes(n,e){return n.includes(e)},tn=function greaterThan(n,e){return e>n},rn=function greaterThanOrEqualTo(n,e){return e>=n},on=function join(n,e){return e.join(n)},cn=function lessThan(n,e){return e<n},un=function lessThanOrEqualTo(n,e){return e<=n},an=function map(n,e){let t=0;const r=makeIterable(e),{length:o,init:i}=r,c=i;for(;t<o;){const{key:e,value:o}=r.iterate(t);c[e]=n(o),t+=1}return c},sn=function multiply(n,e){return e*n},fn=function nth(n,e){return n<0&&e.length+n?e[e.length+n]:e[n]},ln=function or(n,e){return n||e},pn=function range(n,e){const t=[],r=e<n;for(let o=n;r?o>=e:o<=e;r?o--:o++)t.push(o);return t},mn=function split(n,e){return e.split(n)},yn=function sort(n,e){return[].concat(e).sort(n)},dn=function subtract(n,e){return e-n},hn=function toJSON(n,e){return JSON.stringify(e,null,n)},bn=function both(n,e,t){return n(t)&&e(t)},gn=function either(n,e,t){return n(t)||e(t)},En=function reduce(n,e,t){const r=makeIterable(t);let o=0;const{length:i}=r;let c=e;for(;o<i;){const{value:e}=r.iterate(o);c=n(c,e),o+=1}return c},kn=function slice(n,e,t){return t.slice(n,e)},Tn=function ifElse(n,e,t,r){return n(r)?e(r):t(r)},{$:An}=n;fabricate(DEFAULT_PLACEHOLDER_TEST);const On=custom({ts:system,check:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.NODE_ENV&&"production"!==process.env.NODE_ENV});return On.temper(On,{custom:custom,version:"4.0.0"})}));
