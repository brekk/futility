(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.FUTILITY={})})(this,function(a){'use strict';function d(){for(var e=arguments,a=arguments.length,b=Array(a),c=0;c<a;++c)b[c]=e[c];return h(b)}function b(a,b){return b={exports:{}},a(b,b.exports),b.exports}var c=Math.floor,e=Math.round,g='\uD83C\uDF5B',h=function(a){return function(b){for(var c=a[0],d=a.slice(1),e=c(b),f=0;f<d.length;f++)e=d[f](e);return e}},i=function(c,d){return function(e,f,a){return c.call(d,e,f,a)}},j=function(g,a,b){var c,d=g.length,e=void 0===b?a:i(a,b);for(c=0;c<d;c++)if(e(g[c],c,g))return!0;return!1},k=function(i){var k=function(b){return b===g};return function b(){for(var a=arguments,c=arguments.length,l=Array(c),d=0;d<c;++d)l[d]=a[d];var e=j(l,k)?function(b){for(var a=b.length;!k(b[a]);)a--;return a}(l):l.length;return e>=i.length?i.apply(this,l):function(){for(var c=arguments,a=arguments.length,d=Array(a),e=0;e<a;++e)d[e]=c[e];return b.apply(this,l.map(function(b){return k(b)&&d[0]?d.shift():b}).concat(d))}}},l=k(function(e,a){var f=Array.from(a);return f.length?f.map(function(a,b){return e.includes(b)?f[e[b]]:a}):f}),m=k(function(e,a){var b=l(e),c=k(a);return function(){var d=b(Array.from(arguments));return c.apply(null,d)}}),n=k(function(c,a){return a&&c&&a[c]}),o=Object.keys,p=o,q=n('length'),r=d(p,q),u=function(b){return'object'==typeof b?r(b):q(b)},v=k(function(d,a,b){return b[d](a)}),x=v('filter'),y=k(function(c,a){return c.includes(a)}),z=k(function(c,a){return x(y(c),p(a))}),A=k(function(c,a){return d(z(c),u)(a)}),B=function(c,a){return A(c,a)>=Object.keys(c).length},C=k(function(e,a){return function b(c){return Object.keys(c).filter(function(a){return e.includes(a)}).length===e.length?a(c):function(d){return b(Object.assign({},c,d))}}}),D=function(a){return c(Math.random()*a)},E=k(function(a,b){return D(b)+a}),F=Object.freeze({floor:D,floorMin:E}),f=k(function(a,b){var c=a,d=[];if('function'!=typeof b||'number'!=typeof c)return d;for(;0<c;)c--,d.push(b());return d}),G=Object.keys,H=k(function(a,b){if(b&&b[0]&&b.length){var c=D(b.length),d=b[c];return a?[d]:d}var e=G(b),f=D(e.length),g=e[f],h=b[g];return a?(i={},i[g]=h,i):h;var i}),I=H(!1),J=H(!0),K=k(function(a,b){return f(a,function(){return J(b)})}),L=Object.freeze({take:H,pick:I,grab:J,allot:K}),t='undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window,M=b(function(a,c){(function(d,a){a(c)})(t,function(M){function a(d,f,c,e){if(d!==c.length)throw new Error(f+' expects total args ('+c.length+') to equal the given arity ('+d+')');return H(d,f,c,e)}var N=function(g){return function(a){for(var b=g[0],c=g.slice(1),d=b(a),e=0;e<c.length;e++)d=c[e](d);return d}},O=function(b,c){return function(d,e,f){return b.call(c,d,e,f)}},g=function(f,g,a){var b,c=f.length,d=void 0===a?g:O(g,a);for(b=0;b<c;b++)if(d(f[b],b,f))return!0;return!1},e=function(f){var h=function(a){return'\uD83C\uDF5B'===a};return function i(){for(var b=arguments,a=arguments.length,j=Array(a),c=0;c<a;++c)j[c]=b[c];var d=g(j,h)?function(c){for(var b=c.length;!h(c[b]);)b--;return b}(j):j.length;return d>=f.length?f.apply(this,j):function(){for(var b=arguments,c=arguments.length,a=Array(c),d=0;d<c;++d)a[d]=b[d];return i.apply(this,j.map(function(c){return h(c)&&a[0]?a.shift():c}).concat(a))}}},c=e(function(b,c){return c&&b&&c[b]}),d=Object.keys,f=c('length'),h=function(){for(var d=arguments,e=arguments.length,a=Array(e),b=0;b<e;++b)a[b]=d[b];return N(a)}(d,f),i=e(function(c,d,a){return a[c](d)}),j=i('filter'),k=function(c,a){return a[c]()},l=e(k),o=function(d,b,c){return c[d](b)},P=e(o),p=function(e,c,d,a){return a[e](c,d)},Q=e(p),r=function(f,d,e,a,b){return b[f](d,e,a)},R=e(r),t=function(g,e,f,a,b,c){return c[g](e,f,a,b)},S=e(t),v=function(h,f,g,a,b,c,d){return d[h](f,g,a,b,c)},T=e(v),x=function(i,g,h,a,b,c,d,e){return e[i](g,h,a,b,c,d)},U=e(x),z=function(j,h,i,a,b,c,d,e,f){return f[j](h,i,a,b,c,d,e)},V=e(z),B=function(k,i,j,a,b,c,d,e,f,g){return g[k](i,j,a,b,c,d,e,f)},W=e(B),D=function(l,j,k,a,b,c,d,e,f,g,h){return h[l](j,k,a,b,c,d,e,f,g)},X=e(D),F=function(m,k,l,a,b,c,d,e,f,g,h,i){return i[m](k,l,a,b,c,d,e,f,g,h)},Y=e(F),H=function(f,a,b,c){var d=[a].concat(b,[c]);return[l,P,Q,R,S,T,U,V,W,X,Y][f].apply(null,d)},Z=e(H),J=e(a),K={e0:k,e1:o,e2:p,e3:r,e4:t,e5:v,e6:x,e7:z,e8:B,e9:D,e10:F,eD:a,eN:H};M.raw=K,M.custom=function(d){return Object.keys(K).map(function(a){return b={},b[a]=d(K[a]),b;var b}).reduce(function(b,c){return Object.assign({},b,c)},{})},M.e0=l,M.e1=P,M.e2=Q,M.e3=R,M.e4=S,M.e5=T,M.e6=U,M.e7=V,M.e8=W,M.e9=X,M.e10=Y,M.eN=Z,M.eD=J,Object.defineProperty(M,'__esModule',{value:!0})})});(function(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,'default')?a['default']:a})(M);var N=M.e0,O=M.e1,P=M.e2,Q=M.e3,R=M.e4,S=M.e5,T=M.e6,U=M.e7,V=M.e8,W=M.e9,X=M.e10,Y=M.eD,Z=M.eN,$=M.custom,_=function(d,e){return function(f,a,b){return d.call(e,f,a,b)}},aa=function(a,b,c){var d,e=a.length,f=[],g=c===void 0?b:_(b,c);for(d=0;d<e;d++)g(a[d],d,a)&&f.push(a[d]);return f},ba=function(a,b,c){var d,e,f=Object.keys(a),g=f.length,h={},i=c===void 0?b:_(b,c);for(d=0;d<g;d++)e=f[d],i(a[e],e,a)&&(h[e]=a[e]);return h},ca=k(function(a,b){return!!b[a]}),da=Array.isArray,ea=k(function(a,b){return ca(a,b)&&!da(b)}),fa=k(function(a,b,c,d){return ea(a,d)?O(a,c,d):b(d,c)}),ga=k(function(a,b,c,d,e){return ea(a,e)?P(a,c,d,e):b(e,c,d)}),ha=fa('filter',function(a,b,c){return a instanceof Array?aa(a,b,c):ba(a,b,c)}),ia=O('join'),ja=O('concat'),ka=k(function(a,b){var c=Array.from(b);return c.sort(a),c}),la=k(function(a,b){return ha(function(b){return!a.includes(b)},b)}),ma=k(function(c,a){var b=la(c,a),d=la(a,c);return b.length>d.length?b:d}),na=k(function(a,b){return-1<b?b:a-Math.abs(b)}),oa=k(function(a,b,c){var d=na(c.length,a),e=[].concat(c);return e[d]=b(e[d]),e}),pa=oa(0),qa=oa(-1),ra=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],sa=k(function(a,b){return d(K(b),ia(''))(a)}),ta=Object.freeze({wordSource:sa,word:function(a){return void 0===a&&(a=5),sa(ra,a)}}),w=Object.freeze({shuffle:function(a){for(var b=[].concat(a),d=b.length;0<d--;){var e=c(Math.random()*d+1),f=b[e],g=b[d];b[e]=g,b[d]=f}return b}}),s=k(function(c,d,b){return c(b,d)?b:d}),ua=function(c){return k(function(d,a){return c(a,d)})},va=P('fork'),wa=function(a,b,c){var d,e=a.length,f=Array(e),g=c===void 0?b:_(b,c);for(d=0;d<e;d++)f[d]=g(a[d],d,a);return f},xa=function(a,b,c){var d,e,f=Object.keys(a),g=f.length,h={},i=c===void 0?b:_(b,c);for(d=0;d<g;d++)e=f[d],h[e]=i(a[e],e,a);return h},ya=function(a,b,c){return a instanceof Array?wa(a,b,c):xa(a,b,c)},za=k(function(a,b){return b&&!Array.isArray(b)&&b.map?b.map(a):ya(b,a)}),Aa=k(function(a,b){return a===typeof b}),Ba=Aa('boolean'),Ca=Aa('number'),Da=Aa('function'),Ea=Aa('string'),Fa=function(a){return null==a},Ga=Aa('object'),Ha=Array.isArray,Ia=function(e,f){return function(g,a,b,c){return e.call(f,g,a,b,c)}},Ja=function(a,b,c,d){var e,f,g=a.length,h=d===void 0?b:Ia(b,d);for(void 0===c?(e=1,f=a[0]):(e=0,f=c);e<g;e++)f=h(f,a[e],e,a);return f},Ka=function(a,b,c,d){var e,f,g,h=Object.keys(a),i=h.length,j=d===void 0?b:Ia(b,d);for(void 0===c?(e=1,g=a[h[0]]):(e=0,g=c);e<i;e++)f=h[e],g=j(g,a[f],f,a);return g},La=ga('reduce',function(a,b,c,d){return a instanceof Array?Ja(a,b,c,d):Ka(a,b,c,d)}),Ma=k(function(a,b){return b&&b.ap&&Da(b.ap)?b.ap(a):Da(b)?function(c){return a(c)(b(c))}:La(function(a,c){return a.concat(za(c,b))},[],a)}),Na=P('fold'),Oa=b(function(a){var b=function(b){return b.reduce(function(a,b){return a.concat(b)})};a.exports=function(c,a){return a?b(c.map(a)):b(c)}}),Pa=fa('chain',Oa),Qa=k(function(c,a){return c===a}),Ra=k(function(c,a){return a+c}),Sa=k(function(c,a){return a-c}),Ta=k(function(c,a){return a*c}),Ua=k(function(c,a){return a/c}),Va=k(function(c,a){return Math.pow(a,c)}),Wa=function(a){return!a},Xa=k(function(b,c){return d(b(c),Wa)}),Ya=k(function(c,e,a){return d(c(e,a),Wa)}),Za=k(function(e,f,a,b){return d(e(f,a,b),Wa)}),$a=k(function(a,b){return ha(function(b){return!a(b)},b)}),_a=N('trim'),ab=O('charAt'),bb=O('codePointAt'),cb=O('match'),db=O('repeat'),eb=O('search'),fb=O('split'),gb=P('endsWith'),hb=k(function(a,b){return gb(a,b.length,b)}),ib=P('indexOf'),jb=k(function(a,b){return ib(a,0,b)}),kb=P('lastIndexOf'),lb=k(function(a,b){return kb(a,Infinity,b)}),mb=P('padEnd'),nb=P('padStart'),ob=P('replace'),pb=P('startsWith'),qb=k(function(a,b){return pb(a,0,b)}),rb=P('substr'),sb=k(function(c,d,b){return c?b:d}),tb=k(function(a,b,c,d){return a(d)?c(d):b(d)}),ub=k(function(c,d){for(var e=[],f=c<d,g=f?[c,d]:[d+1,c+1],h=g[0],a=g[1],b=h;b<a;b++)e.push(b);return f?e:e.reverse()}),vb=Object.keys,wb=Object.freeze,xb=Object.assign,yb=vb,zb=xb,Ab=k(function(c,a){return zb({},c,a)}),Bb=function(a){return d(yb,za(function(b){return[b,a[b]]}))(a)},Cb=Bb,Db=La(function(a,b){var c=b[0],d=b[1];return Ab(a,(e={},e[c]=d,e));var e},{}),Eb=k(function(a,b,c){return d(Cb,a(b))(c)}),Fb=k(function(a,b,c){return d(Eb(a,b),Db)(c)}),Gb=Fb(za),Hb=k(function(a,b){return Gb(function(b){var c=b[0],d=b[1];return[a(c),d]},b)}),Ib=k(function(a,b,c){return La(function(b,c){return b[c]||a},c,b)}),Jb=Ib(null),Kb=k(function(a,b,c){return Ib(a,[b],c)}),Lb=Kb(null),Mb=k(function(a,b,c){return d(Jb(b),a,Boolean)(c)}),Nb=k(function(a,b,c){return Mb(Qa(a),b,c)}),Ob=k(function(a,b,c){return d(Lb([b]),a,Boolean)(c)}),Pb=k(function(a,b,c){return Mb(Qa(a),[b],c)}),Qb=Lb('length'),Rb=d(yb,Qb),Sb=Object.keys,Tb=k(function(a,b,c){var e=ua(a);return tb(Array.isArray,e(b),d(Sb,e(function(a){return b(c[a],a)})),c)}),Ub=Tb(function(a,b,c){var d,e=a.length,f=c===void 0?b:_(b,c);for(d=0;d<e;d++)if(f(a[d],d,a))return!0;return!1}),Vb=Tb(function(a,b,c){var d,e=a.length,f=c===void 0?b:_(b,c);for(d=0;d<e;d++)if(!f(a[d],d,a))return!1;return!0}),Wb=Object.assign(function(a){return void 0===a&&(a=1),e(Math.random()*a)},F,L,ta,w);a.version='3.5.1',a.random=Wb,a.pipe=d,a.compose=function(){for(var e=arguments,a=arguments.length,b=Array(a),c=a-1;-1<c;--c)b[c]=e[c];return h(b)},a.$=g,a.PLACEHOLDER=g,a.curryify=function(i){if('function'!=typeof i)throw new TypeError('Expected to be given a function to test placeholders!');return function(a){if('function'!=typeof a)throw new TypeError('Expected to be given a function to curry!');return function k(){for(var b=arguments,c=arguments.length,l=Array(c),d=0;d<c;++d)l[d]=b[d];var e=j(l,i)?function(a){for(var b=a.length;!i(a[b]);)b--;return b}(l):l.length;return e>=a.length?a.apply(this,l):function(){for(var a=arguments,b=arguments.length,c=Array(b),d=0;d<b;++d)c[d]=a[d];return k.apply(this,l.map(function(a){return i(a)&&c[0]?c.shift():a}).concat(c))}}}},a.curry=k,a.curryObjectK=C,a.curryObjectN=function(e,a){return function b(c){return c&&Object.keys(c).length>=e?a(c):function(d){return b(Object.assign({},c,d))}}},a.curryObjectKN=function(e,f){var b=e.k,c=e.n;return function d(a){return B(b,a)||Object.keys(a).length>=c?f(a):function(c){return d(Object.assign({},a,c))}}},a.remap=m,a.remapArray=l,a.K=function(b){return function(){return b}},a.I=function(b){return b},a.concat=ja,a.join=ia,a.sort=ka,a.symmetricDifference=ma,a.difference=la,a.alterIndex=oa,a.alterFirstIndex=pa,a.alterLastIndex=qa,a.relativeIndex=na,a.choice=s,a.filter=ha,a.flip=ua,a.fork=va,a.iterate=f,a.map=za,a.ap=Ma,a.fold=Na,a.chain=Pa,a.flatMap=Pa,a.equals=Qa,a.equal=Qa,a.round=e,a.add=Ra,a.subtract=Sa,a.divide=Ua,a.multiply=Ta,a.pow=Va,a.invert=Wa,a.not=function(a){return d(a,Wa)},a.not1=Xa,a.not2=Ya,a.not3=Za,a.reduce=La,a.reject=$a,a.charAt=ab,a.codePointAt=bb,a.endsWith=hb,a.indexOf=jb,a.lastIndexOf=lb,a.match=cb,a.padEnd=mb,a.padStart=nb,a.repeat=db,a.replace=ob,a.search=eb,a.split=fb,a.startsWith=qb,a.substr=rb,a.trim=_a,a.ternary=sb,a.triplet=tb,a.range=ub,a.keys=yb,a.assign=zb,a.freeze=wb,a.merge=Ab,a.entries=Bb,a.fromPairs=Db,a.toPairs=Cb,a.mapTuple=Gb,a.mapTuples=Gb,a.mapKeys=Hb,a.pairwise=Eb,a.pairwiseObject=Fb,a.path=Jb,a.pathOr=Ib,a.prop=Lb,a.propOr=Kb,a.pathEq=Nb,a.pathIs=Mb,a.propIs=Ob,a.propEq=Pb,a.isTypeof=Aa,a.isBoolean=Ba,a.isNumber=Ca,a.isFunction=Da,a.isString=Ea,a.isObject=Ga,a.isNil=Fa,a.isArray=Ha,a.isDistinctObject=function(a){return!Fa(a)&&Ga(a)&&!Ha(a)},a.length=function(a){return'object'==typeof a?Rb(a):Qb(a)},a.which=Tb,a.some=Ub,a.every=Vb,Object.defineProperty(a,'__esModule',{value:!0})});
