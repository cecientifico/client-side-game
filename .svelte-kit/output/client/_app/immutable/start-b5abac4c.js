import{S as Ye,i as Xe,s as Ze,a as Qe,e as F,c as xe,b as H,g as de,t as J,d as he,f as G,h as K,j as et,o as Re,k as tt,l as nt,m as rt,n as Ee,p as B,q as at,r as ot,u as st,v as X,w as Z,x as Ae,y as Q,z as x,A as Ce}from"./chunks/index-023448eb.js";import{g as Fe,f as Je,s as M,a as Oe,b as it,i as lt}from"./chunks/singletons-2acc78c9.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const s of ut){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function mt(r){return r.replace(/\/$/,"")+ht}function _t(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(s)}return me(r,e)};const pe=new Map;function gt(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${_t(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),g=d.getAttribute("data-ttl");return g&&pe.set(e,{body:n,init:f,ttl:1e3*Number(g)}),Promise.resolve(new Response(n,f))}return me(r,t)}function yt(r,e){const t=pe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);pe.delete(r)}return me(r,e)}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],t=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Et(r).map((n,f,g)=>{const u=decodeURIComponent(n),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(m)return e.push(m[1]),t.push(m[2]),s.push(!1),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(u);if(y)return e.push(y[1]),t.push(y[2]),s.push(!0),"(?:/([^/]+))?";const O=f===g.length-1;return u?"/"+u.split(/\[(.+?)\](?!\])/).map((U,D)=>{if(D%2){const q=wt.exec(U);if(!q)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,z,oe,ee,se]=q;return e.push(ee),t.push(se),s.push(!!z),oe?"(.*?)":z?"([^/]*)?":"([^/]+?)"}return O&&U.includes(".")&&(o=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:t,optional:s}}function vt(r){return!/^\([^)]+\)$/.test(r)}function Et(r){return r.slice(1).split("/").filter(vt)}function kt(r,{names:e,types:t,optional:s},o){const d={};for(let n=0;n<e.length;n+=1){const f=e[n],g=t[n];let u=r[n+1];if(u||!s[n]){if(g){const m=o[g];if(!m)throw new Error(`Missing "${g}" param matcher`);if(!m(u))return}d[f]=u!=null?u:""}}return d}function Rt(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([f,[g,u,m]])=>{const{pattern:y,names:O,types:T,optional:W}=bt(f),U={id:f,exec:D=>{const q=y.exec(D);if(q)return kt(q,{names:O,types:T,optional:W},s)},errors:[1,...m||[]].map(D=>r[D]),layouts:[0,...u||[]].map(n),leaf:d(g)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function d(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function Ot(r){let e,t,s;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),t=F()},l(n){e&&Ae(e.$$.fragment,n),t=F()},m(n,f){e&&Q(e,n,f),H(n,t,f),s=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&2&&(g.form=n[1]),o!==(o=n[0][0])){if(e){de();const u=e;J(u.$$.fragment,1,0,()=>{x(u,1)}),he()}o?(e=X(o,d(n)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function St(r){let e,t,s;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[It]},$$scope:{ctx:n}}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),t=F()},l(n){e&&Ae(e.$$.fragment,n),t=F()},m(n,f){e&&Q(e,n,f),H(n,t,f),s=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&523&&(g.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){de();const u=e;J(u.$$.fragment,1,0,()=>{x(u,1)}),he()}o?(e=X(o,d(n)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function It(r){let e,t,s;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=X(o,d(r))),{c(){e&&Z(e.$$.fragment),t=F()},l(n){e&&Ae(e.$$.fragment,n),t=F()},m(n,f){e&&Q(e,n,f),H(n,t,f),s=!0},p(n,f){const g={};if(f&8&&(g.data=n[3]),f&2&&(g.form=n[1]),o!==(o=n[0][1])){if(e){de();const u=e;J(u.$$.fragment,1,0,()=>{x(u,1)}),he()}o?(e=X(o,d(n)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(s){e=nt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(K),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,o){H(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Ke(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&K(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(t){e=ot(t,r[6])},m(t,s){H(t,e,s)},p(t,s){s&64&&st(e,t[6])},d(t){t&&K(e)}}}function Lt(r){let e,t,s,o,d;const n=[St,Ot],f=[];function g(m,y){return m[0][1]?0:1}e=g(r),t=f[e]=n[e](r);let u=r[4]&&Ge(r);return{c(){t.c(),s=Qe(),u&&u.c(),o=F()},l(m){t.l(m),s=xe(m),u&&u.l(m),o=F()},m(m,y){f[e].m(m,y),H(m,s,y),u&&u.m(m,y),H(m,o,y),d=!0},p(m,[y]){let O=e;e=g(m),e===O?f[e].p(m,y):(de(),J(f[O],1,1,()=>{f[O]=null}),he(),t=f[e],t?t.p(m,y):(t=f[e]=n[e](m),t.c()),G(t,1),t.m(s.parentNode,s)),m[4]?u?u.p(m,y):(u=Ge(m),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},i(m){d||(G(t),d=!0)},o(m){J(t),d=!1},d(m){f[e].d(m),m&&K(s),u&&u.d(m),m&&K(o)}}}function At(r,e,t){let{stores:s}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:g=null}=e;et(s.page.notify);let u=!1,m=!1,y=null;return Re(()=>{const O=s.page.subscribe(()=>{u&&(t(5,m=!0),t(6,y=document.title||"untitled page"))});return t(4,u=!0),O}),r.$$set=O=>{"stores"in O&&t(7,s=O.stores),"page"in O&&t(8,o=O.page),"components"in O&&t(0,d=O.components),"form"in O&&t(1,n=O.form),"data_0"in O&&t(2,f=O.data_0),"data_1"in O&&t(3,g=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[d,n,f,g,u,m,y,s,o]}class $t extends Ye{constructor(e){super(),Xe(this,e,At,Lt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Pt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),jt=function(r,e){return new URL(r,e).href},ze={},V=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(d=>{if(d=jt(d,s),d in ze)return;ze[d]=!0;const n=d.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!s)for(let m=o.length-1;m>=0;m--){const y=o[m];if(y.href===d&&(!n||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":Pt,n||(u.as="script",u.crossOrigin=""),u.href=d,document.head.appendChild(u),n)return new Promise((m,y)=>{u.addEventListener("load",m),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Nt={},_e=[()=>V(()=>import("./chunks/0-1940ec58.js"),["./chunks/0-1940ec58.js","./components/pages/_layout.svelte-6f7d9930.js","./chunks/index-023448eb.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/stores-27d4083a.js","./chunks/index-0bb4da3b-16c29612.js","./chunks/index-b16cc909.js","./assets/_layout-2216e676.css"],import.meta.url),()=>V(()=>import("./chunks/1-977d1499.js"),["./chunks/1-977d1499.js","./components/error.svelte-1210f1ae.js","./chunks/index-023448eb.js","./chunks/singletons-2acc78c9.js"],import.meta.url),()=>V(()=>import("./chunks/2-08c86e78.js"),["./chunks/2-08c86e78.js","./components/pages/_page.svelte-e89c9970.js","./chunks/index-023448eb.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/index-0bb4da3b-16c29612.js","./chunks/axios-fadae37e.js","./chunks/stores-27d4083a.js","./chunks/Cloud-f6a0d783.js","./assets/Cloud-7e8dfa7c.css","./assets/_page-dd2bf0c9.css"],import.meta.url),()=>V(()=>import("./chunks/3-6d584339.js"),["./chunks/3-6d584339.js","./components/pages/adventure/_page.svelte-bf4f8c26.js","./chunks/index-023448eb.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/stores-27d4083a.js","./chunks/index-0bb4da3b-16c29612.js","./chunks/axios-fadae37e.js","./chunks/Overlay-6691ab73.js","./chunks/index-b16cc909.js","./assets/Overlay-b788fb2d.css","./chunks/Cloud-f6a0d783.js","./assets/Cloud-7e8dfa7c.css","./assets/_page-0ca6b6a6.css"],import.meta.url),()=>V(()=>import("./chunks/4-919060e1.js"),["./chunks/4-919060e1.js","./components/pages/adventure/pre-game/_page.svelte-951bba2c.js","./chunks/index-023448eb.js","./chunks/stores-27d4083a.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/Cloud-f6a0d783.js","./assets/Cloud-7e8dfa7c.css","./chunks/Music-0e0264ce.js","./assets/Music-40aecf28.css","./assets/_page-bb4fb2d9.css"],import.meta.url),()=>V(()=>import("./chunks/5-99abb111.js"),["./chunks/5-99abb111.js","./components/pages/arcade/_page.svelte-afebd1c2.js","./chunks/index-023448eb.js","./chunks/Music-0e0264ce.js","./chunks/stores-27d4083a.js","./assets/Music-40aecf28.css","./chunks/axios-fadae37e.js","./chunks/index-0bb4da3b-16c29612.js","./assets/_page-6bd00740.css"],import.meta.url),()=>V(()=>import("./chunks/6-cb7f5ef4.js"),["./chunks/6-cb7f5ef4.js","./components/pages/casually/_page.svelte-5008315e.js","./chunks/index-023448eb.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/index-0bb4da3b-16c29612.js","./chunks/stores-27d4083a.js","./chunks/Overlay-6691ab73.js","./chunks/index-b16cc909.js","./assets/Overlay-b788fb2d.css","./chunks/axios-fadae37e.js","./assets/_page-e9327337.css"],import.meta.url),()=>V(()=>import("./chunks/7-d16984df.js"),["./chunks/7-d16984df.js","./components/pages/casually/pre-game/_page.svelte-4dc3400e.js","./chunks/index-023448eb.js","./chunks/stores-27d4083a.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/Cloud-f6a0d783.js","./assets/Cloud-7e8dfa7c.css","./chunks/Music-0e0264ce.js","./assets/Music-40aecf28.css","./assets/_page-a72d2d7c.css"],import.meta.url),()=>V(()=>import("./chunks/8-fd9c848f.js"),["./chunks/8-fd9c848f.js","./components/pages/login/_page.svelte-608bf8f6.js","./chunks/index-023448eb.js","./chunks/navigation-09c71f38.js","./chunks/singletons-2acc78c9.js","./chunks/stores-27d4083a.js","./chunks/axios-fadae37e.js","./chunks/index-0bb4da3b-16c29612.js","./assets/_page-ee6be005.css"],import.meta.url),()=>V(()=>import("./chunks/9-4d7071b0.js"),["./chunks/9-4d7071b0.js","./components/pages/ranking/_page.svelte-f071f304.js","./chunks/index-023448eb.js","./chunks/axios-fadae37e.js","./chunks/index-0bb4da3b-16c29612.js","./chunks/stores-27d4083a.js","./assets/_page-0c51613a.css"],import.meta.url)],Tt=[],Ut={"/":[2],"/adventure":[3],"/adventure/pre-game":[4],"/arcade":[5],"/casually":[6],"/casually/pre-game":[7],"/login":[8],"/ranking":[9]},Dt={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}async function Vt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Bt=-1,qt=-2,Ct=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){return zt(JSON.parse(r))}function zt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function s(o,d=!1){if(o===Bt)return;if(o===Ct)return NaN;if(o===Ft)return 1/0;if(o===Jt)return-1/0;if(o===Gt)return-0;if(d)throw new Error("Invalid input");if(o in t)return t[o];const n=e[o];if(!n||typeof n!="object")t[o]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[o]=new Date(n[1]);break;case"Set":const g=new Set;t[o]=g;for(let y=1;y<n.length;y+=1)g.add(s(n[y]));break;case"Map":const u=new Map;t[o]=u;for(let y=1;y<n.length;y+=2)u.set(s(n[y]),s(n[y+1]));break;case"RegExp":t[o]=new RegExp(n[1],n[2]);break;case"Object":t[o]=Object(n[1]);break;case"BigInt":t[o]=BigInt(n[1]);break;case"null":const m=Object.create(null);t[o]=m;for(let y=1;y<n.length;y+=2)m[n[y]]=s(n[y+1]);break}else{const f=new Array(n.length);t[o]=f;for(let g=0;g<n.length;g+=1){const u=n[g];u!==qt&&(f[g]=s(u))}}else{const f={};t[o]=f;for(const g in n){const u=n[g];f[g]=s(u)}}return t[o]}return s(0)}const We="sveltekit:scroll",C="sveltekit:index",ce=Rt(_e,Tt,Ut,Nt),Ie=_e[0],Le=_e[1];Ie();Le();let ae={};try{ae=JSON.parse(sessionStorage[We])}catch{}function ke(r){ae[r]=Oe()}function Mt({target:r,base:e,trailing_slash:t}){var Ve;const s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,g=!1,u=!0,m=!1,y=!1,O,T=(Ve=history.state)==null?void 0:Ve[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const W=ae[T];W&&(history.scrollRestoration="manual",scrollTo(W.x,W.y));let U=!1,D,q,z;async function oe(){z=z||Promise.resolve(),await z,z=null;const a=new URL(location.href),c=we(a,!0);o=null,await $e(c,a,[])}async function ee(a,{noscroll:c=!1,replaceState:p=!1,keepfocus:i=!1,state:l={},invalidateAll:h=!1},_,E){return typeof a=="string"&&(a=new URL(a,Fe(document))),be({url:a,scroll:c?Oe():null,keepfocus:i,redirect_chain:_,details:{state:l,replaceState:p},nav_token:E,accepted:()=>{h&&(y=!0)},blocked:()=>{},type:"goto"})}async function se(a){const c=we(a,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:c.id,promise:Ne(c)},o.promise}async function $e(a,c,p,i,l={},h){var E,k;q=l;let _=a&&await Ne(a);if(_||(_=await De(c,null,re(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(a==null?void 0:a.url)||c,q!==l)return!1;if(_.type==="redirect")if(p.length>10||p.includes(c.pathname))_=await ie({status:500,error:re(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return ee(new URL(_.location,c).href,{},[...p,c.pathname],l),!1;else((k=(E=_.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await M.updated.check()&&await le(c);if(s.length=0,y=!1,m=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[C]=T+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(o=null,g){n=_.state,_.props.page&&(_.props.page.url=c);const b=ue();O.$set(_.props),b()}else Pe(_);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const S=document.body,L=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var A;(A=getSelection())==null||A.removeAllRanges()}),L!==null?S.setAttribute("tabindex",L):S.removeAttribute("tabindex")}if(await Ce(),u){const S=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ce();u=!0,_.props.page&&(D=_.props.page),h&&h(),m=!1}function Pe(a){var l,h;n=a.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),D=a.props.page;const p=ue();O=new $t({target:r,props:{...a.props,stores:M},hydrate:!0}),p();const i={from:null,to:fe("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(_=>_(i)),g=!0}async function te({url:a,params:c,branch:p,status:i,error:l,route:h,form:_}){var L;const E=p.filter(Boolean),k={type:"loaded",state:{url:a,params:c,branch:p,error:l,route:h},props:{components:E.map(A=>A.node.component)}};_!==void 0&&(k.props.form=_);let b={},v=!D;for(let A=0;A<E.length;A+=1){const j=E[A];b={...b,...j.data},(v||!n.branch.some(N=>N===j))&&(k.props[`data_${A}`]=b,v=v||Object.keys((L=j.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==l||_!==void 0||v){k.props.page={error:l,params:c,routeId:h&&h.id,status:i,url:a,form:_,data:v?b:D.data};const A=(j,N)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${N}`)}})};A("origin","origin"),A("path","pathname"),A("query","searchParams")}return k}async function ge({loader:a,parent:c,url:p,params:i,routeId:l,server_data_node:h}){var b,v,S,L,A;let _=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let j=function(...I){for(const w of I){const{href:R}=new URL(w,p);E.dependencies.add(R)}};const N={routeId:l,params:new Proxy(i,{get:(I,w)=>(E.params.add(w),I[w])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:pt(p,()=>{E.url=!0}),async fetch(I,w){let R;I instanceof Request?(R=I.url,w={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...w}):R=I;const P=new URL(R,p).href;return j(P),g?yt(P,w):gt(R,P,w)},setHeaders:()=>{},depends:j,parent(){return E.parent=!0,c()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(S=await k.shared.load.call(null,N))!=null?S:null,_=_?await Vt(_):null}return{node:k,loader:a,server:h,shared:(L=k.shared)!=null&&L.load?{type:"data",data:_,uses:E}:null,data:(A=_!=null?_:h==null?void 0:h.data)!=null?A:null}}function je(a,c,p,i){if(y)return!0;if(!p)return!1;if(p.parent&&c||p.url&&a)return!0;for(const l of p.params)if(i[l]!==n.params[l])return!0;for(const l of p.dependencies)if(s.some(h=>h(new URL(l))))return!0;return!1}function ye(a,c){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&c!=null?c:null}async function Ne({id:a,invalidating:c,url:p,params:i,route:l}){var I;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:_,leaf:E}=l,k=[..._,E];h.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,S=k.reduce((w,R,P)=>{var ne;const $=n.branch[P],Y=!!(R!=null&&R[0])&&(($==null?void 0:$.loader)!==R[1]||je(v,w.some(Boolean),(ne=$.server)==null?void 0:ne.uses,i));return w.push(Y),w},[]);if(S.some(Boolean)){try{b=await He(p,S)}catch(w){return ie({status:500,error:re(w,{url:p,params:i,routeId:l.id}),url:p,routeId:l.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let A=!1;const j=k.map(async(w,R)=>{var ne;if(!w)return;const P=n.branch[R],$=L==null?void 0:L[R];if((!$||$.type==="skip")&&w[1]===(P==null?void 0:P.loader)&&!je(v,A,(ne=P.shared)==null?void 0:ne.uses,i))return P;if(A=!0,($==null?void 0:$.type)==="error")throw $;return ge({loader:w[1],url:p,params:i,routeId:l.id,parent:async()=>{var qe;const Be={};for(let ve=0;ve<R;ve+=1)Object.assign(Be,(qe=await j[ve])==null?void 0:qe.data);return Be},server_data_node:ye($===void 0&&w[0]?{type:"skip"}:$!=null?$:null,P==null?void 0:P.server)})});for(const w of j)w.catch(()=>{});const N=[];for(let w=0;w<k.length;w+=1)if(k[w])try{N.push(await j[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let P=500,$;L!=null&&L.includes(R)?(P=(I=R.status)!=null?I:P,$=R.error):R instanceof Se?(P=R.status,$=R.body):$=re(R,{params:i,url:p,routeId:l.id});const Y=await Te(w,N,h);return Y?await te({url:p,params:i,branch:N.slice(0,Y.idx).concat(Y.node),status:P,error:$,route:l}):await De(p,l.id,$,P)}else N.push(void 0);return await te({url:p,params:i,branch:N,status:200,error:null,route:l,form:c?void 0:null})}async function Te(a,c,p){for(;a--;)if(p[a]){let i=a;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:c,url:p,routeId:i}){var b;const l={},h=await Ie();let _=null;if(h.server)try{const v=await He(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await le(p)}const E=await ge({loader:Ie,url:p,params:l,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ye(_)}),k={node:await Le(),loader:Le,shared:null,server:null,data:null};return await te({url:p,params:l,branch:[E,k],status:a,error:c,route:null})}function we(a,c){if(Ue(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ce){const l=i.exec(p);if(l){const h=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:c,route:i,params:ft(l),url:h}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function be({url:a,scroll:c,keepfocus:p,redirect_chain:i,details:l,type:h,delta:_,nav_token:E,accepted:k,blocked:b}){var j,N,I,w;let v=!1;const S=we(a,!1),L={from:fe("from",{params:n.params,routeId:(N=(j=n.route)==null?void 0:j.id)!=null?N:null,url:n.url}),to:fe("to",{params:(I=S==null?void 0:S.params)!=null?I:null,routeId:(w=S==null?void 0:S.route.id)!=null?w:null,url:a}),type:h};_!==void 0&&(L.delta=_);const A={...L,cancel:()=>{v=!0}};if(d.before_navigate.forEach(R=>R(A)),v){b();return}ke(T),k(),g&&M.navigating.set(L),await $e(S,a,i,{scroll:c,keepfocus:p,details:l},E,()=>{d.after_navigate.forEach(R=>R(L)),M.navigating.set(null)})}async function De(a,c,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ie({status:i,error:p,url:a,routeId:c}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(d.after_navigate.push(a),()=>{const c=d.after_navigate.indexOf(a);d.after_navigate.splice(c,1)}))},before_navigate:a=>{Re(()=>(d.before_navigate.push(a),()=>{const c=d.before_navigate.indexOf(a);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(m||!g)&&(u=!1)},goto:(a,c={})=>ee(a,c,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:c}=new URL(a,location.href);s.push(p=>p.href===c)}return oe()},invalidateAll:()=>(y=!0,oe()),prefetch:async a=>{const c=new URL(a,Fe(document));await se(c)},prefetch_routes:async a=>{const p=(a?ce.filter(i=>a.some(l=>i.exec(l))):ce).map(i=>Promise.all([...i.layouts,i.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const c=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const l=await Te(n.branch.length,p,i.errors);if(l){const h=await te({url:c,params:n.params,branch:p.slice(0,l.idx).concat(l.node),status:500,error:a.error,route:i});n=h.state;const _=ue();O.$set(h.props),_()}}else if(a.type==="redirect")ee(a.location,{invalidateAll:!0},[]);else{const c={form:a.data,page:{...D,form:a.data,status:a.status}},p=ue();O.$set(c),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,E;let l=!1;const h={from:fe("from",{params:n.params,routeId:(E=(_=n.route)==null?void 0:_.id)!=null?E:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(k=>k(h)),l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(T);try{sessionStorage[We]=JSON.stringify(ae)}catch{}}});const a=i=>{const{url:l,options:h}=Je(i);if(l&&h.prefetch){if(Ue(l))return;se(l)}};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=i.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:l,url:h,options:_}=Je(i);if(!l||!h)return;const E=l instanceof SVGAElement;if(!E&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||_.reload||(E?l.target.baseVal:l.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){U=!0,ke(T),n.url=h,M.page.set({...D,url:h}),M.page.notify();return}be({url:h,scroll:_.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===T)return;const l=i.state[C]-T;be({url:new URL(location.href),scroll:ae[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=i.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:c,node_ids:p,params:i,routeId:l,data:h,form:_})=>{var b;f=!0;const E=new URL(location.href);let k;try{const v=p.map(async(S,L)=>{const A=h[L];return ge({loader:_e[S],url:E,params:i,routeId:l,parent:async()=>{const j={};for(let N=0;N<L;N+=1)Object.assign(j,(await v[N]).data);return j},server_data_node:ye(A)})});k=await te({url:E,params:i,branch:await Promise.all(v),status:a,error:c,form:_,route:(b=ce.find(S=>S.id===l))!=null?b:null})}catch(v){if(v instanceof Me){await le(new URL(v.location,location.href));return}k=await ie({status:v instanceof Se?v.status:500,error:re(v,{url:E,params:i,routeId:l}),url:E,routeId:l})}Pe(k)}}}async function He(r,e){const t=new URL(r);t.pathname=mt(r.pathname);const s=await me(t.href,{headers:{"x-sveltekit-invalidated":e.map(d=>d?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return Kt(o)}function re(r,e){var t;return r instanceof Se?r.body:(t=Dt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ht=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const t of Ht)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ue(){return()=>{}}async function Xt({env:r,hydrate:e,paths:t,target:s,trailing_slash:o}){it(t);const d=Mt({target:s,base:t.base,trailing_slash:o});lt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Xt as start};