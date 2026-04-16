(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56043,e=>{"use strict";let t=(0,e.i(69547).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",0,t],56043)},13584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},1085,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={AppRouterContext:function(){return i},GlobalLayoutRouterContext:function(){return l},LayoutRouterContext:function(){return s},MissingSlotContext:function(){return u},TemplateContext:function(){return c}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(41705)._(e.r(91788)),i=o.default.createContext(null),s=o.default.createContext(null),l=o.default.createContext(null),c=o.default.createContext(null),u=o.default.createContext(new Set)},31430,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return a}});class n extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new n}delete(){throw new n}set(){throw new n}sort(){throw new n}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},70008,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={NavigationPromisesContext:function(){return u},PathParamsContext:function(){return c},PathnameContext:function(){return l},ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},SearchParamsContext:function(){return s},createDevToolsInstrumentedPromise:function(){return f}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(91788),i=e.r(31430),s=(0,o.createContext)(null),l=(0,o.createContext)(null),c=(0,o.createContext)(null),u=(0,o.createContext)(null);function f(e,t){let r=Promise.resolve(t);return r.status="fulfilled",r.value=t,r.displayName=`${e} (SSR)`,r}},14760,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=o}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===o}},91622,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={HTTPAccessErrorStatus:function(){return o},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return s},getAccessFallbackErrorTypeByStatus:function(){return u},getAccessFallbackHTTPStatus:function(){return c},isHTTPAccessFallbackError:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},i=new Set(Object.values(o)),s="NEXT_HTTP_ERROR_FALLBACK";function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r]=e.digest.split(";");return t===s&&i.has(Number(r))}function c(e){return Number(e.digest.split(";")[1])}function u(e){switch(e){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},40184,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RedirectStatusCode",{enumerable:!0,get:function(){return a}});var n,a=((n={})[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1939,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={REDIRECT_ERROR_CODE:function(){return i},isRedirectError:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(40184),i="NEXT_REDIRECT";function s(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,n]=t,a=t.slice(2,-2).join(";"),s=Number(t.at(-2));return r===i&&("replace"===n||"push"===n)&&"string"==typeof a&&!isNaN(s)&&s in o.RedirectStatusCode}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68934,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isNextRouterError",{enumerable:!0,get:function(){return o}});let n=e.r(91622),a=e.r(1939);function o(e){return(0,a.isRedirectError)(e)||(0,n.isHTTPAccessFallbackError)(e)}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},69547,e=>{"use strict";var t=e.i(91788);let r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},n=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:c,...u},f)=>(0,t.createElement)("svg",{ref:f,...a,width:r,height:r,stroke:e,strokeWidth:i?24*Number(o)/Number(r):o,className:n("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]]));e.s(["default",0,(e,a)=>{let i=(0,t.forwardRef)(({className:i,...s},l)=>(0,t.createElement)(o,{ref:l,iconNode:a,className:n(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...s}));return i.displayName=r(e),i}],69547)},89129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return y},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,y=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},20955,(e,t,r)=>{var n={229:function(e){var t,r,n,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var l=[],c=!1,u=-1;function f(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}},i=!0;try{n[e](r,r.exports,o),i=!1}finally{i&&delete a[e]}return r.exports}o.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=o(229)},50461,(e,t,r)=>{"use strict";var n,a;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(a=e.g.process)?void 0:a.env)?e.g.process:e.r(20955)},8481,(e,t,r)=>{"use strict";var n=Symbol.for("react.transitional.element");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return{$$typeof:n,type:e,key:a,ref:void 0!==(t=r.ref)?t:null,props:r}}r.Fragment=Symbol.for("react.fragment"),r.jsx=a,r.jsxs=a},91398,(e,t,r)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,r)=>{"use strict";var n=e.i(50461),a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),y=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function x(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var j=_.prototype=new x;j.constructor=_,b(j,w.prototype),j.isPureReactComponent=!0;var C=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function R(e,t,r){var n=r.ref;return{$$typeof:a,type:e,key:t,ref:void 0!==n?n:null,props:r}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function L(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function k(e,t,r){if(null==e)return e;var n=[],i=0;return!function e(t,r,n,i,s){var l,c,u,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var d=!1;if(null===t)d=!0;else switch(f){case"bigint":case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case a:case o:d=!0;break;case m:return e((d=t._init)(t._payload),r,n,i,s)}}if(d)return s=s(t),d=""===i?"."+L(t,0):i,C(s)?(n="",null!=d&&(n=d.replace(O,"$&/")+"/"),e(s,r,n,"",function(e){return e})):null!=s&&(S(s)&&(l=s,c=n+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+d,s=R(l.type,c,l.props)),r.push(s)),1;d=0;var p=""===i?".":i+":";if(C(t))for(var h=0;h<t.length;h++)f=p+L(i=t[h],h),d+=e(i,r,n,f,s);else if("function"==typeof(h=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=y&&u[y]||u["@@iterator"])?u:null))for(t=h.call(t),h=0;!(i=t.next()).done;)f=p+L(i=i.value,h++),d+=e(i,r,n,f,s);else if("object"===f){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(P,P):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),r,n,i,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return d}(e,n,"","",function(e){return t.call(r,e,i++)}),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof n.default&&"function"==typeof n.default.emit)return void n.default.emit("uncaughtException",e);console.error(e)};r.Activity=h,r.Children={map:k,forEach:function(e,t,r){k(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=w,r.Fragment=i,r.Profiler=l,r.PureComponent=_,r.StrictMode=s,r.Suspense=d,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,r.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},r.cache=function(e){return function(){return e.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=b({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)E.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&("ref"!==o||void 0!==t.ref)&&(n[o]=t[o]);var o=arguments.length-2;if(1===o)n.children=r;else if(1<o){for(var i=Array(o),s=0;s<o;s++)i[s]=arguments[s+2];n.children=i}return R(e.type,a,n)},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},r.createElement=function(e,t,r){var n,a={},o=null;if(null!=t)for(n in void 0!==t.key&&(o=""+t.key),t)E.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return R(e,o,a)},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:A}},r.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=T.T,r={};T.T=r;try{var n=e(),a=T.S;null!==a&&a(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(P,N)}catch(e){N(e)}finally{null!==t&&null!==r.types&&(t.types=r.types),T.T=t}},r.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},r.use=function(e){return T.H.use(e)},r.useActionState=function(e,t,r){return T.H.useActionState(e,t,r)},r.useCallback=function(e,t){return T.H.useCallback(e,t)},r.useContext=function(e){return T.H.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},r.useEffect=function(e,t){return T.H.useEffect(e,t)},r.useEffectEvent=function(e){return T.H.useEffectEvent(e)},r.useId=function(){return T.H.useId()},r.useImperativeHandle=function(e,t,r){return T.H.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},r.useMemo=function(e,t){return T.H.useMemo(e,t)},r.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},r.useReducer=function(e,t,r){return T.H.useReducer(e,t,r)},r.useRef=function(e){return T.H.useRef(e)},r.useState=function(e){return T.H.useState(e)},r.useSyncExternalStore=function(e,t,r){return T.H.useSyncExternalStore(e,t,r)},r.useTransition=function(){return T.H.useTransition()},r.version="19.2.5"},91788,(e,t,r)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},52456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}},71914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return l}});let n=e.r(91788),a=e.r(99604),o="function"==typeof IntersectionObserver,i=new Map,s=[];function l({rootRef:e,rootMargin:t,disabled:r}){let c=r||!o,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||u)return;let r=d.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:a,elements:o}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let a=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},s.push(r),i.set(r,t),t}(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(r,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,a.requestIdleCallback)(()=>f(!0));return()=>(0,a.cancelIdleCallback)(e)}},[c,t,e,u,d.current]),[p,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(70090),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(91788);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=o(e,n)),t&&(a.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},39149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return C},useLinkStatus:function(){return j}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(52456),i=e.r(91398),s=o._(e.r(91788)),l=e.r(60472),c=e.r(71112),u=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),m=e.r(71914),h=e.r(54471),y=e.r(44113),g=e.r(63230);e.r(48735);let b=new Set;function v(e,t,r,n){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(a))return;b.add(a)}e.prefetch(t,r,n).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let x=s.default.forwardRef(function(e,t){let r,n,{href:a,as:o,children:u,prefetch:b=null,passHref:x,replace:_,shallow:j,scroll:C,locale:P,onClick:T,onNavigate:E,onMouseEnter:R,onTouchStart:S,legacyBehavior:O=!1,transitionTypes:L,...k}=e;r=u,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let A=s.default.useContext(p.RouterContext),N=!1!==b,{href:M,as:I}=s.default.useMemo(()=>{if(!A){let e=w(a);return{href:e,as:o?w(o):e}}let[e,t]=(0,l.resolveHref)(A,a,!0);return{href:e,as:o?(0,l.resolveHref)(A,o):t||e}},[A,a,o]),D=s.default.useRef(M),F=s.default.useRef(I);O&&(n=s.default.Children.only(r));let H=O?n&&"object"==typeof n&&n.ref:t,[$,U,K]=(0,m.useIntersection)({rootMargin:"200px"}),W=s.default.useCallback(e=>{(F.current!==I||D.current!==M)&&(K(),F.current=I,D.current=M),$(e)},[I,M,K,$]),q=(0,g.useMergedRef)(W,H);s.default.useEffect(()=>{!A||U&&N&&v(A,M,I,{locale:P})},[I,M,U,P,N,A?.locale,A]);let B={ref:q,onClick(e){O||"function"!=typeof T||T(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!A||e.defaultPrevented||function(e,t,r,n,a,o,i,s,l){let u,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(r)){a&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let e=i??!0;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[a?"replace":"push"](n||r,{scroll:e})})()}}(e,A,M,I,_,j,C,P,E)},onMouseEnter(e){O||"function"!=typeof R||R(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&v(A,M,I,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){O||"function"!=typeof S||S(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&v(A,M,I,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)(I))B.href=I;else if(!O||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:A?.locale;B.href=A?.isLocaleDomain&&(0,h.getDomainLocale)(I,e,A?.locales,A?.domainLocales)||(0,y.addBasePath)((0,d.addLocale)(I,e,A?.defaultLocale))}return O?s.default.cloneElement(n,B):(0,i.jsx)("a",{...k,...B,children:r})}),_=(0,s.createContext)({pending:!1}),j=()=>(0,s.useContext)(_),C=x;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41158,(e,t,r)=>{t.exports=e.r(39149)},51836,e=>{"use strict";let t=(0,e.i(69547).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",0,t],51836)},67531,e=>{"use strict";var t=e.i(91398),r=e.i(98311),n=e.i(56043),a=e.i(51836);let o=(0,e.i(69547).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var i=e.i(41158),s=e.i(17837);let l={1:{id:1,title:{ar:"أهم حقوق المتهم أمام النيابة العامة",en:"Rights of the Accused Before Public Prosecution"},category:{ar:"قانون جنائي",en:"Criminal Law"},date:"2024-03-15",image:"/10.jpg",readTime:{ar:"5 دقائق",en:"5 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`يتمتع المتهم أمام النيابة العامة بمجموعة من الحقوق الأساسية التي تكفلها القوانين المصرية والمواثيق الدولية. من أهم هذه الحقوق:

1. حق الصمت والدفاع: يحق للمتهم عدم الإدلاء بأي اعترافات ويحق له التمثيل القانوني أثناء التحقيق.

2. حق الاستئناف: للمتهم الحق في الاستئناف قرارات النيابة العامة والطعن فيها أمام المحكمة.

3. حق الاطلاع على الأدلة: يجب أن يكون المتهم على علم بالأدلة والمستندات المقدمة ضده.

4. حق الحصول على نسخة من الاتهام: يجب تسليم المتهم نسخة من الاتهام الموجه إليه.

5. حق الحماية من التعذيب والمعاملة السيئة: لا يجوز تعريض المتهم للتعذيب أو المعاملة المهينة.

من المهم جداً معرفة هذه الحقوق والتمسك بها أثناء أي إجراء قانوني. ننصحك باستشارة محامٍ متخصص في القانون الجنائي للحصول على أفضل الحماية القانونية.`,en:`The accused has a number of fundamental rights before the Public Prosecution that are guaranteed by Egyptian laws and international treaties. Key rights include:

1. Right to silence and defense: The accused has the right not to make any confessions and the right to legal representation during investigation.

2. Right to appeal: The accused has the right to appeal decisions of the Public Prosecution and challenge them before the court.

3. Right to access evidence: The accused must be aware of the evidence and documents presented against them.

4. Right to receive a copy of the charge: The accused must receive a copy of the charges against them.

5. Right to protection from torture and ill-treatment: The accused cannot be subjected to torture or degrading treatment.

It is very important to know these rights and maintain them during any legal proceeding. We recommend consulting a lawyer specializing in criminal law for the best legal protection.`}},2:{id:2,title:{ar:"كيفية صياغة عقد تجاري يحمي مصالحك",en:"How to Draft a Commercial Contract"},category:{ar:"قانون تجاري",en:"Commercial Law"},date:"2024-03-10",image:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",readTime:{ar:"7 دقائق",en:"7 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`صياغة عقد تجاري قوي وقانوني هي خطوة أساسية لحماية مصالحك التجارية. إليك الخطوات الأساسية:

1. تحديد الأطراف والبيانات: يجب أن يحتوي العقد على بيانات واضحة لجميع الأطراف المعنية.

2. تحديد الالتزامات: كل طرف يجب أن يعرف بالضبط ما هي التزاماته وحقوقه.

3. تحديد المقابل: يجب أن يكون السعر والشروط المالية واضحة تماماً.

4. شروط السداد: حدد واضحة لكيفية ومتى سيتم السداد.

5. شروط فك التعاقد: يجب أن تغطي العقد حالات إنهاء العقد والعواقب.

6. القانون الواجب التطبيق: حدد أي قانون سيحكم العقد في حالة النزاع.

نحن ننصح بشدة باستشارة محامٍ متخصص قبل توقيع أي عقد تجاري مهم.`,en:`Drafting a strong and legally compliant commercial contract is a critical step to protect your business interests. Here are the basic steps:

1. Identifying parties and information: The contract must contain clear information about all parties involved.

2. Determining obligations: Each party must know exactly what their obligations and rights are.

3. Determining the consideration: The price and financial terms must be absolutely clear.

4. Payment terms: Set clear terms for how and when payment will be made.

5. Contract termination clauses: The contract must cover cases of contract termination and consequences.

6. Applicable law: Specify which law will govern the contract in case of dispute.

We strongly recommend consulting a specialized lawyer before signing any important commercial contract.`}},3:{id:3,title:{ar:"إجراءات الطلاق في القانون المصري",en:"Divorce Procedures in Egyptian Law"},category:{ar:"قانون الأسرة",en:"Family Law"},date:"2024-03-05",image:"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&q=80&w=800",readTime:{ar:"8 دقائق",en:"8 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`الطلاق هو أحد الموضوعات الحساسة في القانون الأسري. يتم تنظيمه بموجب القانون المصري رقم 1 لسنة 2000. إليك الإجراءات الأساسية:

1. طلب رفع الدعوى: يقدم الطالب طلباً للمحكمة المختصة لرفع دعوى الطلاق.

2. محاولة الصلح: تحاول المحكمة الصلح بين الزوجين قبل نظر الدعوى.

3. سماع البينات: تستمع المحكمة إلى أدلة الطرفين وشهاداتهما.

4. صدور الحكم: تصدر المحكمة قرارها بالموافقة أو الرفض.

5. المراجعة والاستئناف: يحق لأي طرف الطعن في الحكم أمام محكمة الاستئناف.

6. مسائل الحضانة والنفقة: يتم تحديد الترتيبات المالية والحضانة في الحكم.

من المهم جداً الحصول على استشارة قانونية متخصصة في قانون الأسرة لحماية حقوقك.`,en:`Divorce is one of the sensitive topics in family law. It is regulated under Egyptian Law No. 1 of 2000. Here are the basic procedures:

1. Filing a petition: The applicant files a petition with the competent court to file a divorce case.

2. Reconciliation attempt: The court attempts reconciliation between the spouses before hearing the case.

3. Hearing evidence: The court listens to the evidence and testimony of both parties.

4. Issuance of judgment: The court issues its decision to approve or reject the case.

5. Review and appeal: Either party has the right to appeal the judgment before the Court of Appeal.

6. Custody and maintenance issues: Financial arrangements and custody are determined in the judgment.

It is very important to obtain specialized legal advice in family law to protect your rights.`}},4:{id:4,title:{ar:"الأحكام الجنائية والطعن فيها",en:"Criminal Judgments and Appeals"},category:{ar:"قانون جنائي",en:"Criminal Law"},date:"2024-03-20",image:"/12.jpg",readTime:{ar:"6 دقائق",en:"6 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`الحكم الجنائي هو القرار الذي تصدره المحكمة بشأن قضية جنائية. يحق للمحكوم عليه الطعن في الحكم من خلال عدة طرق قانونية.

أنواع الأحكام الجنائية:
1. الإدانة: الحكم على المتهم بعقوبة معينة.
2. البراءة: إعلان براءة المتهم من التهمة.
3. الحفظ: عدم متابعة الدعوى.

طرق الطعن:
1. الاستئناف: يقدم أمام محكمة الاستئناف.
2. المراجعة: في حالات استثنائية معينة.
3. الطعن الإداري: لحماية الحقوق الدستورية.

من المهم فهم حقوقك في الطعن وتقديم طعنك في الوقت المحدد قانوناً.`,en:`A criminal judgment is a decision issued by the court regarding a criminal case. The convicted person has the right to appeal the judgment through several legal methods.

Types of criminal judgments:
1. Conviction: Sentencing the defendant to a specific sentence.
2. Acquittal: Declaration of the defendant's innocence.
3. Dismissal: Non-prosecution of the case.

Methods of appeal:
1. Appeal: Submitted to the Court of Appeal.
2. Revision: In certain exceptional cases.
3. Administrative challenge: To protect constitutional rights.

It is important to understand your rights to appeal and to submit your appeal within the time limit set by law.`}},5:{id:5,title:{ar:"الجرائم الإلكترونية وعقوباتها",en:"Cybercrime and Penalties"},category:{ar:"قانون جنائي",en:"Criminal Law"},date:"2024-03-18",image:"/13.png",readTime:{ar:"7 دقائق",en:"7 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`الجرائم الإلكترونية هي الجرائم التي ترتكب عبر الإنترنت أو باستخدام الحاسبات الآلية. تنظمها قوانين خاصة لحماية الأفراد والمجتمع.

أنواع الجرائم الإلكترونية:
1. القرصنة والاختراق غير المصرح.
2. السرقة عبر الإنترنت والاحتيال الإلكتروني.
3. نشر محتوى مسيء أو إباحي.
4. هجمات DDoS والبرامج الخبيثة.
5. تزوير الهويات والتماس البيانات الشخصية.

العقوبات:
- الحبس من 6 أشهر إلى عدة سنوات.
- غرامات مالية تصل إلى آلاف الجنيهات.
- مراقبة إلكترونية.

ننصح بالحذر من هذه الجرائم والالتزام بالسلوك الأخلاقي عند استخدام الإنترنت.`,en:`Cybercrime refers to crimes committed over the Internet or using computers. They are regulated by special laws to protect individuals and society.

Types of cybercrimes:
1. Hacking and unauthorized access.
2. Online theft and fraud.
3. Publishing offensive or explicit content.
4. DDoS attacks and malware.
5. Identity theft and data harvesting.

Penalties:
- Imprisonment from 6 months to several years.
- Fines up to thousands of pounds.
- Electronic surveillance.

We recommend being careful about these crimes and adhering to ethical conduct when using the Internet.`}},6:{id:6,title:{ar:"حقوق المستهلك في العقود التجارية",en:"Consumer Rights in Commercial Contracts"},category:{ar:"قانون تجاري",en:"Commercial Law"},date:"2024-03-12",image:"/15.jpg",readTime:{ar:"7 دقائق",en:"7 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`المستهلك له مجموعة من الحقوق التي تحميه في التعاملات التجارية والعقود المختلفة.

أهم حقوق المستهلك:
1. حق الحصول على معلومات صحيحة: يجب أن تكون جميع المعلومات عن السلعة واضحة.
2. حق الأمان: يجب أن تكون السلعة آمنة وخالية من العيوب.
3. حق الاختيار: للمستهلك الحق في اختيار السلعة والمرة والسعر.
4. حق الحماية من الإعلان المضلل.
5. حق الاسترجاع والاستبدال: في حالة العيوب أو عدم الرضا.
6. حق التعويض: في حالة تعرضه للضرر.

الحماية القانونية:
- قانون حماية المستهلك المصري.
- جهات تابعة للدولة لحل النزاعات.

من المهم معرفة حقوقك وعدم التنازل عنها.`,en:`The consumer has a set of rights that protect him in commercial transactions and various contracts.

Consumer rights:
1. Right to accurate information: All information about goods must be clear.
2. Right to safety: Goods must be safe and free from defects.
3. Right to choice: The consumer has the right to choose goods, time and price.
4. Right to protection from misleading advertising.
5. Right to return and exchange: In case of defects or dissatisfaction.
6. Right to compensation: If harmed.

Legal protection:
- Egyptian Consumer Protection Law.
- State bodies to resolve disputes.

It is important to know your rights and not give them up.`}},7:{id:7,title:{ar:"الضمانات والشروط في البيع والشراء",en:"Warranties and Terms in Sales"},category:{ar:"قانون تجاري",en:"Commercial Law"},date:"2024-03-08",image:"/14.jpg",readTime:{ar:"6 دقائق",en:"6 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`الضمانات والشروط في عقود البيع والشراء تحمي كلا الطرفين وتوضح التزاماتهما.

أنواع الضمانات:
1. ضمان الملكية: البائع يضمن أن السلعة ملكه الصحيح.
2. ضمان الخلو من العيوب: السلعة خالية من العيوب الخفية.
3. ضمان الصلاحية للاستعمال: السلعة صالحة للغرض المطلوب.
4. ضمان الكمية والنوعية: السلعة بالكم والنوع المتفق عليه.

الشروط الهامة:
1. معلومات السلع بشكل واضح.
2. الأسعار والشروط المالية.
3. مدة الضمان والصيانة.
4. شروط الاسترجاع والاستبدال.
5. المسؤوليات والالتزامات.

من المهم قراءة جميع الشروط والضمانات قبل التوقيع على العقد.`,en:`Warranties and conditions in sales and purchase contracts protect both parties and clarify their obligations.

Types of warranties:
1. Warranty of title: The seller warrants that the goods are his rightful property.
2. Warranty of freedom from defects: The goods are free from hidden defects.
3. Warranty of fitness for use: The goods are fit for the intended purpose.
4. Warranty of quantity and quality: The goods are of the agreed quantity and quality.

Important conditions:
1. Clear information about goods.
2. Prices and financial terms.
3. Duration of warranty and maintenance.
4. Return and exchange conditions.
5. Responsibilities and obligations.

It is important to read all conditions and warranties before signing the contract.`}},8:{id:8,title:{ar:"حضانة الأطفال وحقوق الوالدين",en:"Child Custody and Parental Rights"},category:{ar:"قانون الأسرة",en:"Family Law"},date:"2024-03-14",image:"/17.jpg",readTime:{ar:"8 دقائق",en:"8 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`حضانة الأطفال هي قضية حساسة في القانون الأسري وتنظمها قوانين خاصة لحماية مصلحة الطفل.

معايير الحضانة:
1. مصلحة الطفل الفضلى: هي الأساس في كل قرار.
2. القدرة على الرعاية والتربية: الحاضن يجب أن يكون قادراً على رعاية الطفل.
3. الصفات الأخلاقية: الحاضن يجب أن يتمتع بسلوك حسن.
4. الاستقرار المادي: توفير الاحتياجات الأساسية.

حقوق الوالدين:
1. حق الزيارة: للوالد الغير حاضن الحق في زيارة الطفل.
2. حق النفقة: الالتزام بأعباء مالية لرعاية الطفل.
3. حق الخصومة: الحق في المطالبة بتعديل قرار الحضانة.

الترتيبات العملية:
1. تحديد مواعيد الزيارة.
2. تحديد مقدار النفقة.
3. تقسيم المسؤوليات بين الوالدين.

من المهم وضع اتفاقيات واضحة لحماية مصلحة الطفل.`,en:`Guardianship of children is a sensitive issue in family law and is regulated by special laws to protect the child's best interests.

Custody standards:
1. Child's best interest: It is the basis for every decision.
2. Ability to care and educate: The guardian must be able to care for the child.
3. Moral qualities: The guardian must have good conduct.
4. Financial stability: Provision of basic needs.

Parental rights:
1. Right to visit: The non-custodial parent has the right to visit the child.
2. Right to maintenance: Financial obligation to care for the child.
3. Right to claim: The right to request a modification to the custody order.

Practical arrangements:
1. Determining visit schedules.
2. Determining maintenance amounts.
3. Dividing responsibilities between parents.

It is important to establish clear agreements to protect the child's best interests.`}},9:{id:9,title:{ar:"الميراث والوصية في الشريعة الإسلامية",en:"Inheritance and Wills in Islamic Law"},category:{ar:"قانون الأسرة",en:"Family Law"},date:"2024-03-11",image:"/18.jpg",readTime:{ar:"9 دقائق",en:"9 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`الميراث والوصية مسائل مهمة في القانون الأسري تنظمها الشريعة الإسلامية والقوانين المصرية.

نظام الوراثة:
1. الوريث: هو من له حق في التركة بموجب الشرع والقانون.
2. التركة: أموال وممتلكات المتوفى.
3. أنصباء الوراثة: توزيع محددة لكل وارث حسب درجة القرابة.

أنواع الورثة:
1. الورثة من الذكور: الأب والابن والأخ.
2. الورثة من الإناث: الأم والابنة والأخت.
3. ذوو الأرحام: الأقارب من جهة الأم.

الوصية:
1. تعريفها: هبة موهوبة بصيغة تنفذ بعد وفاة الموصي.
2. شروطها: يجب أن تكون في حدود الثلث ولا تضر بحقوق الورثة.
3. صيغتها: يجب أن تكون بصيغة صحيحة وشهود.

من المهم التعامل مع هذه المسائل بعناية واستشارة محام متخصص.`,en:`Inheritance and wills are important issues in family law that are regulated by Islamic law and Egyptian laws.

Inheritance system:
1. Heir: One who has a right in the inheritance by virtue of law.
2. Estate: The property and possessions of the deceased.
3. Shares of inheritance: Distribution specific to each heir according to degree of relationship.

Types of heirs:
1. Male heirs: Father, son, and brother.
2. Female heirs: Mother, daughter, and sister.
3. Distant relatives: Relatives through the mother.

Wills:
1. Definition: A gift given by the testator executed after his death.
2. Conditions: Must be limited to one-third and not harm the rights of heirs.
3. Form: Must be in correct form with witnesses.

It is important to deal with these matters carefully and consult with a specialized lawyer.`}},10:{id:10,title:{ar:"حقوق الموظف وواجباته",en:"Employee Rights and Duties"},category:{ar:"قانون العمل",en:"Labor Law"},date:"2024-03-09",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",readTime:{ar:"7 دقائق",en:"7 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`العامل له حقوق وعليه واجبات تنظمها قوانين العمل المصري لضمان حماية العامل وحقوقه.

حقوق الموظف:
1. الراتب والأجر المنصف.
2. ساعات عمل محددة لا تزيد عن 8 ساعات يومياً.
3. إجازات سنوية.
4. مكافآت والعلاوات.
5. التأمين الاجتماعي والصحي.
6. بيئة عمل آمنة وصحية.

واجبات الموظف:
1. الالتزام بساعات العمل المحددة.
2. تنفيذ العمل بكفاءة واخلاص.
3. احترام لوائح المؤسسة.
4. الحفاظ على سرية الشركة.
5. الاحترام المتبادل مع الزملاء والإدارة.

الحماية القانونية:
- قانون العمل المصري رقم 12 لسنة 2003.
- حماية من الفصل التعسفي.
- المساواة في الحقوق والراتب.

من المهم معرفة حقوقك والدفاع عنها.`,en:`An employee has rights and duties that are regulated by Egyptian labor laws to ensure employee protection and rights.

Employee rights:
1. Fair salary and wages.
2. Specified working hours not exceeding 8 hours per day.
3. Paid annual leave.
4. Bonuses and allowances.
5. Social and health insurance.
6. Safe and healthy working environment.

Employee duties:
1. Compliance with specified working hours.
2. Perform work with efficiency and dedication.
3. Respect for institutional regulations.
4. Maintain company confidentiality.
5. Mutual respect with colleagues and management.

Legal protection:
- Egyptian Labor Law No. 12 of 2003.
- Protection from wrongful termination.
- Equality in rights and salaries.

It is important to know your rights and defend them.`}},11:{id:11,title:{ar:"الإنهاء والاستقالة من العمل",en:"Termination and Resignation"},category:{ar:"قانون العمل",en:"Labor Law"},date:"2024-03-07",image:"/19.jpg",readTime:{ar:"6 دقائق",en:"6 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`إنهاء العقد واستقالة الموظف هي عمليات قانونية تخضع لنصوص قانون العمل المصري.

أنواع الإنهاء:
1. الفصل من قبل المؤسسة: لأسباب تأديبية أو اقتصادية.
2. الاستقالة: قرار من الموظف بترك العمل.
3. الفصل التعسفي: فصل بدون سبب قانوني.

قواعد الإنهاء:
1. إشعار مسبق: عادة 30 يوماً قبل الإنهاء.
2. تحويل المستحقات: دفع ما يستحقه الموظف.
3. شهادة العمل: تقديم شهادة رسمية.
4. تسوية الحسابات: حساب جميع المستحقات المالية.

حقوق الموظف عند الإنهاء:
1. الراتب والعلاوات المستحقة.
2. مكافأة نهاية الخدمة.
3. تعويض عن البطالة (في حالات معينة).
4. إعادة النظر في قرار الفصل أمام المحاكم.

من المهم معرفة حقوقك وعدم قبول أي إجراء تعسفي.`,en:`Contract termination and employee resignation are legal processes governed by the Egyptian Labor Law.

Types of termination:
1. Termination by the institution: For disciplinary or economic reasons.
2. Resignation: Employee's decision to leave work.
3. Wrongful termination: Dismissal without legal grounds.

Termination rules:
1. Prior notice: Usually 30 days before termination.
2. Transfer of benefits: Payment of due employee compensation.
3. Work certificate: Provision of official certificate.
4. Settlement of accounts: Calculation of all financial benefits.

Employee rights upon termination:
1. Due salary and allowances.
2. End of service bonus.
3. Unemployment compensation (in certain cases).
4. Review of dismissal decision before courts.

It is important to know your rights and not accept any arbitrary action.`}},12:{id:12,title:{ar:"التأمين الاجتماعي والمعاشات",en:"Social Insurance and Pensions"},category:{ar:"قانون العمل",en:"Labor Law"},date:"2024-03-06",image:"/20.png",readTime:{ar:"7 دقائق",en:"7 min"},author:{ar:"مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية",en:"Kamal Abu Ali Law Firm for Legal Services and Consultations"},content:{ar:`التأمين الاجتماعي والمعاشات هي من أهم فوائد العمل وتوفر حماية مالية للموظف وأسرته.

أنواع التأمين الاجتماعي:
1. تأمين الشيخوخة: معاش عند بلوغ سن التقاعد.
2. تأمين الإنهاء والفصل: معاش في حالة فقدان العمل.
3. تأمين العجز: معاش في حالة عدم القدرة على العمل.
4. تأمين الأسرة: حماية للعائلة بعد وفاة المؤمن عليه.

حساب المعاش:
1. متوسط الراتب: يحسب على أساس آخر سنوات العمل.
2. سنوات الخدمة: عدد سنوات العمل لدى الدولة أو المؤسسة.
3. نسبة الاستحقاق: نسبة الراتب الذي يستحقه المتقاعد.

الفوائد الإضافية:
1. الرعاية الصحية.
2. المساعدات النقدية.
3. المساعدات الاجتماعية.

من المهم فهم نظام التأمين الاجتماعي والحصول على أقصى استفادة منه.`,en:`Social insurance and pensions are among the most important employment benefits and provide financial protection for employees and their families.

Types of social insurance:
1. Old-age insurance: Pension upon reaching retirement age.
2. Unemployment insurance: Pension in case of job loss.
3. Disability insurance: Pension in case of inability to work.
4. Family insurance: Protection for family after death of insured.

Pension calculation:
1. Average salary: Calculated based on last years of employment.
2. Years of service: Number of years of work with government or institution.
3. Entitlement rate: Percentage of salary the retiree is entitled to.

Additional benefits:
1. Health care.
2. Cash assistance.
3. Social assistance.

It is important to understand the social insurance system and get the most benefit from it.`}}};e.s(["default",0,function({lang:e}){let c=(0,s.useParams)(),u=c?.articleId,f=Array.isArray(u)?u[0]:u,d=f?l[f]:null;return d?(0,t.jsxs)("div",{className:"pt-32 pb-20",children:[(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-6 mb-8",children:(0,t.jsxs)(i.default,{href:"/articles",className:"text-accent font-bold inline-flex items-center gap-2 hover:gap-4 transition-all",children:[(0,t.jsx)(a.ChevronLeft,{className:"w-5 h-5"}),"ar"===e?"العودة للمقالات":"Back to Articles"]})}),(0,t.jsx)("section",{className:"section-padding",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"rounded-3xl overflow-hidden shadow-xl mb-12 h-96",children:(0,t.jsx)("img",{src:d.image,alt:d.title[e],className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),(0,t.jsxs)(r.motion.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},className:"mb-8",children:[(0,t.jsx)("div",{className:"inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4",children:d.category[e]}),(0,t.jsx)("h1",{className:"text-4xl font-bold text-primary mb-6 leading-tight",children:d.title[e]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-6 text-gray-600 pb-6 border-b border-gray-200",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(o,{className:"w-5 h-5 text-accent"}),(0,t.jsx)("span",{children:new Date(d.date).toLocaleDateString("ar"===e?"ar-EG":"en-US")})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.Clock,{className:"w-5 h-5 text-accent"}),(0,t.jsx)("span",{children:d.readTime[e]})]}),(0,t.jsx)("div",{children:d.author[e]})]})]}),(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"prose prose-lg max-w-none",children:(0,t.jsx)("div",{className:"text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8",children:d.content[e]})}),(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-12 p-8 bg-accent/10 rounded-3xl border-2 border-accent/20",children:[(0,t.jsx)("h3",{className:"text-2xl font-bold text-primary mb-4",children:"ar"===e?"هل تحتاج إلى استشارة قانونية؟":"Need Legal Advice?"}),(0,t.jsx)("p",{className:"text-gray-600 mb-6",children:"ar"===e?"فريقنا من المحامين المتخصصين جاهزون لمساعدتك. تواصل معنا اليوم.":"Our team of specialized lawyers is ready to help you. Contact us today."}),(0,t.jsx)(i.default,{href:"/contact",className:"inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all",children:"ar"===e?"اطلب استشارة":"Request Consultation"})]}),(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-16",children:[(0,t.jsx)("h3",{className:"text-2xl font-bold text-primary mb-6",children:"ar"===e?"مقالات ذات صلة":"Related Articles"}),(0,t.jsxs)(i.default,{href:"/articles",className:"inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all",children:["ar"===e?"عرض جميع المقالات":"View All Articles",(0,t.jsx)(a.ChevronLeft,{className:"w-5 h-5"})]})]})]})})]}):(0,t.jsxs)("div",{className:"pt-32 pb-20 text-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-primary",children:"ar"===e?"المقال غير موجود":"Article not found"}),(0,t.jsx)(i.default,{href:"/articles",className:"text-accent mt-4 inline-block",children:"ar"===e?"العودة للمقالات":"Back to Articles"})]})}],67531)},43496,(e,t,r)=>{let n="/ArticleDetail";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(67531)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/14zd3t1gygqk7.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);