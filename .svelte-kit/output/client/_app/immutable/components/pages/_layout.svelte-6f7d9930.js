import{S as Qt,i as te,s as ee,e as mt,b as at,f as $,g as ne,t as rt,d as ae,h as d,k,C as y,a as P,q as Fe,l as C,m as h,D as w,c as G,r as Re,n as r,E as p,F as De,G as Lt,w as Oe,x as Me,y as $e,z as Pe,o as Ge,H as Le,I as Ne,J as qe,K as je}from"../../chunks/index-023448eb.js";import{g as Ue}from"../../chunks/navigation-09c71f38.js";import{i as Be,m as nt,l as Nt,f as Ve}from"../../chunks/stores-27d4083a.js";import{r as ct,_ as yt,C as wt,E as re,a as vt,F as ie,o as ze,L as He,g as se,i as Ke,b as We,d as Ye,c as qt,e as Je,v as Xe,f as Ze,h as Qe,j as tn,k as en}from"../../chunks/index-0bb4da3b-16c29612.js";import{f as jt}from"../../chunks/index-b16cc909.js";var nn="firebase",an="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(nn,an,"app");const oe="@firebase/installations",Ot="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=1e4,le=`w:${Ot}`,ue="FIS_v2",rn="https://firebaseinstallations.googleapis.com/v1",sn=60*60*1e3,on="installations",cn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},z=new re(on,cn,ln);function fe(t){return t instanceof ie&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de({projectId:t}){return`${rn}/projects/${t}/installations`}function pe(t){return{token:t.token,requestStatus:2,expiresIn:fn(t.expiresIn),creationTime:Date.now()}}async function he(t,e){const a=(await e.json()).error;return z.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ge({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function un(t,{refreshToken:e}){const n=ge(t);return n.append("Authorization",dn(e)),n}async function me(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fn(t){return Number(t.replace("s","000"))}function dn(t){return`${ue} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=de(t),i=ge(t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const o={fid:n,authVersion:ue,appId:t.appId,sdkVersion:le},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await me(()=>fetch(a,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:pe(f.authToken)}}else throw await he("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=/^[cdef][\w-]{21}$/,Dt="";function mn(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yn(t);return gn.test(n)?n:Dt}catch{return Dt}}function yn(t){return hn(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Map;function Ie(t,e){const n=bt(t);_e(n,e),wn(n,e)}function _e(t,e){const n=we.get(t);if(!!n)for(const a of n)a(e)}function wn(t,e){const n=In();n&&n.postMessage({key:t,fid:e}),_n()}let V=null;function In(){return!V&&"BroadcastChannel"in self&&(V=new BroadcastChannel("[Firebase] FID Change"),V.onmessage=t=>{_e(t.data.key,t.data.fid)}),V}function _n(){we.size===0&&V&&(V.close(),V=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="firebase-installations-database",bn=1,H="firebase-installations-store";let Ct=null;function Mt(){return Ct||(Ct=ze(vn,bn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(H)}}})),Ct}async function It(t,e){const n=bt(t),i=(await Mt()).transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ie(t,e.fid),e}async function ve(t){const e=bt(t),a=(await Mt()).transaction(H,"readwrite");await a.objectStore(H).delete(e),await a.done}async function Et(t,e){const n=bt(t),i=(await Mt()).transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Ie(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t){let e;const n=await Et(t.appConfig,a=>{const i=En(a),s=Tn(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function En(t){const e=t||{fid:mn(),registrationStatus:0};return be(e)}function Tn(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(z.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=An(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Sn(t)}:{installationEntry:e}}async function An(t,e){try{const n=await pn(t,e);return It(t.appConfig,n)}catch(n){throw fe(n)&&n.customData.serverCode===409?await ve(t.appConfig):await It(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Sn(t){let e=await Ut(t.appConfig);for(;e.registrationStatus===1;)await ye(100),e=await Ut(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await $t(t);return a||n}return e}function Ut(t){return Et(t,e=>{if(!e)throw z.create("installation-not-found");return be(e)})}function be(t){return xn(t)?{fid:t.fid,registrationStatus:0}:t}function xn(t){return t.registrationStatus===1&&t.registrationTime+ce<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn({appConfig:t,heartbeatServiceProvider:e},n){const a=Cn(t,n),i=un(t,n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const o={installation:{sdkVersion:le,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await me(()=>fetch(a,l));if(u.ok){const f=await u.json();return pe(f)}else throw await he("Generate Auth Token",u)}function Cn(t,{fid:e}){return`${de(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e=!1){let n;const a=await Et(t.appConfig,s=>{if(!Ee(s))throw z.create("not-registered");const o=s.authToken;if(!e&&Dn(o))return s;if(o.requestStatus===1)return n=Fn(t,e),s;{if(!navigator.onLine)throw z.create("app-offline");const l=Mn(s);return n=Rn(t,l),l}});return n?await n:a.authToken}async function Fn(t,e){let n=await Bt(t.appConfig);for(;n.authToken.requestStatus===1;)await ye(100),n=await Bt(t.appConfig);const a=n.authToken;return a.requestStatus===0?Pt(t,e):a}function Bt(t){return Et(t,e=>{if(!Ee(e))throw z.create("not-registered");const n=e.authToken;return $n(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Rn(t,e){try{const n=await kn(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await It(t.appConfig,a),n}catch(n){if(fe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ve(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await It(t.appConfig,a)}throw n}}function Ee(t){return t!==void 0&&t.registrationStatus===2}function Dn(t){return t.requestStatus===2&&!On(t)}function On(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sn}function Mn(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $n(t){return t.requestStatus===1&&t.requestTime+ce<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t){const e=t,{installationEntry:n,registrationPromise:a}=await $t(e);return a?a.catch(console.error):Pt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e=!1){const n=t;return await Ln(n),(await Pt(n,e)).token}async function Ln(t){const{registrationPromise:e}=await $t(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){if(!t||!t.options)throw Ft("App Configuration");if(!t.name)throw Ft("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ft(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ft(t){return z.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="installations",qn="installations-internal",jn=t=>{const e=t.getProvider("app").getImmediate(),n=Nn(e),a=vt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Un=t=>{const e=t.getProvider("app").getImmediate(),n=vt(e,Te).getImmediate();return{getId:()=>Pn(n),getToken:i=>Gn(n,i)}};function Bn(){yt(new wt(Te,jn,"PUBLIC")),yt(new wt(qn,Un,"PRIVATE"))}Bn();ct(oe,Ot);ct(oe,Ot,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="analytics",Vn="firebase_id",zn="origin",Hn=60*1e3,Kn="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ae="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new He("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Wn(t,e){const n=document.createElement("script");n.src=`${Ae}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Yn(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Jn(t,e,n,a,i,s){const o=a[i];try{if(o)await e[o];else{const u=(await Se(n)).find(f=>f.measurementId===i);u&&await e[u.appId]}}catch(l){A.error(l)}t("config",i,s)}async function Xn(t,e,n,a,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Se(n);for(const u of o){const f=l.find(m=>m.measurementId===u),c=f&&e[f.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",a,i||{})}catch(s){A.error(s)}}function Zn(t,e,n,a){async function i(s,o,l){try{s==="event"?await Xn(t,e,n,o,l):s==="config"?await Jn(t,e,n,a,o,l):s==="consent"?t("consent","update",l):t("set",o)}catch(u){A.error(u)}}return i}function Qn(t,e,n,a,i){let s=function(...o){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Zn(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ta(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ae)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},S=new re("analytics","Analytics",ea);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=30,aa=1e3;class ra{constructor(e={},n=aa){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xe=new ra;function ia(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sa(t){var e;const{appId:n,apiKey:a}=t,i={method:"GET",headers:ia(a)},s=Kn.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw S.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function oa(t,e=xe,n){const{appId:a,apiKey:i,measurementId:s}=t.options;if(!a)throw S.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw S.create("no-api-key")}const o=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ua;return setTimeout(async()=>{l.abort()},n!==void 0?n:Hn),ke({appId:a,apiKey:i,measurementId:s},o,l,e)}async function ke(t,{throttleEndTimeMillis:e,backoffCount:n},a,i=xe){var s,o;const{appId:l,measurementId:u}=t;try{await ca(a,e)}catch(f){if(u)return A.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${(s=f)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:u};throw f}try{const f=await sa(t);return i.deleteThrottleMetadata(l),f}catch(f){const c=f;if(!la(c)){if(i.deleteThrottleMetadata(l),u)return A.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:u};throw f}const m=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?qt(n,i.intervalMillis,na):qt(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(l,g),A.debug(`Calling attemptFetch again in ${m} millis`),ke(t,g,a,i)}}function ca(t,e){return new Promise((n,a)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),a(S.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function la(t){if(!(t instanceof ie)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ua{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fa(t,e,n,a,i){if(i&&i.global){t("event",n,a);return}else{const s=await e,o=Object.assign(Object.assign({},a),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(){var t;if(Je())try{await Xe()}catch(e){return A.warn(S.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return A.warn(S.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pa(t,e,n,a,i,s,o){var l;const u=oa(t);u.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&A.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>A.error(I)),e.push(u);const f=da().then(I=>{if(I)return a.getId()}),[c,m]=await Promise.all([u,f]);ta(s)||Wn(s,c.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[zn]="firebase",g.update=!0,m!=null&&(g[Vn]=m),i("config",c.measurementId,g),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.app=e}_delete(){return delete ot[this.app.options.appId],Promise.resolve()}}let ot={},Vt=[];const zt={};let Rt="dataLayer",ga="gtag",Ht,Ce,Kt=!1;function ma(){const t=[];if(Ke()&&t.push("This is a browser extension environment."),Ze()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=S.create("invalid-analytics-context",{errorInfo:e});A.warn(n.message)}}function ya(t,e,n){ma();const a=t.options.appId;if(!a)throw S.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)A.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S.create("no-api-key");if(ot[a]!=null)throw S.create("already-exists",{id:a});if(!Kt){Yn(Rt);const{wrappedGtag:s,gtagCore:o}=Qn(ot,Vt,zt,Rt,ga);Ce=s,Ht=o,Kt=!0}return ot[a]=pa(t,Vt,zt,e,Ht,Rt,n),new ha(t)}function wa(t=We()){t=se(t);const e=vt(t,_t);return e.isInitialized()?e.getImmediate():Ia(t)}function Ia(t,e={}){const n=vt(t,_t);if(n.isInitialized()){const i=n.getImmediate();if(Ye(e,n.getOptions()))return i;throw S.create("already-initialized")}return n.initialize({options:e})}function _a(t,e,n,a){t=se(t),fa(Ce,ot[t.app.options.appId],e,n,a).catch(i=>A.error(i))}const Wt="@firebase/analytics",Yt="0.8.4";function va(){yt(new wt(_t,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ya(a,i,n)},"PUBLIC")),yt(new wt("analytics-internal",t,"PRIVATE")),ct(Wt,Yt),ct(Wt,Yt,"esm2017");function t(e){try{const n=e.getProvider(_t).getImmediate();return{logEvent:(a,i,s)=>_a(n,a,i,s)}}catch(n){throw S.create("interop-component-reg-failed",{reason:n})}}}va();function Jt(t){let e,n,a,i,s,o,l,u,f,c,m,g,I,_,K,x,F,R,D,v,it,W,Y,b,J,L,N,E,X,q,j,T,Z,U,B,Tt,Q,At,O,lt;return{c(){e=k("main"),n=k("div"),a=y("svg"),i=y("rect"),s=y("rect"),o=y("defs"),l=y("linearGradient"),u=y("stop"),f=y("stop"),c=y("linearGradient"),m=y("stop"),g=y("stop"),I=P(),_=y("svg"),K=y("path"),x=y("rect"),F=y("rect"),R=y("rect"),D=y("defs"),v=y("linearGradient"),it=y("stop"),W=y("stop"),Y=y("stop"),b=y("linearGradient"),J=y("stop"),L=y("stop"),N=y("stop"),E=y("linearGradient"),X=y("stop"),q=y("stop"),j=y("stop"),T=y("linearGradient"),Z=y("stop"),U=y("stop"),B=y("stop"),Tt=P(),Q=k("h3"),At=Fe("Carregando..."),this.h()},l(M){e=C(M,"MAIN",{class:!0});var ut=h(e);n=C(ut,"DIV",{class:!0});var tt=h(n);a=w(tt,"svg",{xmlns:!0,width:!0,height:!0,class:!0,viewBox:!0,fill:!0});var ft=h(a);i=w(ft,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),h(i).forEach(d),s=w(ft,"rect",{y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),h(s).forEach(d),o=w(ft,"defs",{});var St=h(o);l=w(St,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var xt=h(l);u=w(xt,"stop",{"stop-color":!0}),h(u).forEach(d),f=w(xt,"stop",{offset:!0,"stop-color":!0}),h(f).forEach(d),xt.forEach(d),c=w(St,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var kt=h(c);m=w(kt,"stop",{"stop-color":!0}),h(m).forEach(d),g=w(kt,"stop",{offset:!0,"stop-color":!0}),h(g).forEach(d),kt.forEach(d),St.forEach(d),ft.forEach(d),I=G(tt),_=w(tt,"svg",{xmlns:!0,width:!0,height:!0,class:!0,viewBox:!0,fill:!0});var et=h(_);K=w(et,"path",{d:!0,fill:!0}),h(K).forEach(d),x=w(et,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),h(x).forEach(d),F=w(et,"rect",{width:!0,height:!0,rx:!0,transform:!0,fill:!0}),h(F).forEach(d),R=w(et,"rect",{width:!0,height:!0,rx:!0,transform:!0,fill:!0}),h(R).forEach(d),D=w(et,"defs",{});var st=h(D);v=w(st,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var dt=h(v);it=w(dt,"stop",{"stop-color":!0}),h(it).forEach(d),W=w(dt,"stop",{offset:!0,"stop-color":!0}),h(W).forEach(d),Y=w(dt,"stop",{offset:!0,"stop-color":!0}),h(Y).forEach(d),dt.forEach(d),b=w(st,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var pt=h(b);J=w(pt,"stop",{"stop-color":!0,"stop-opacity":!0}),h(J).forEach(d),L=w(pt,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(L).forEach(d),N=w(pt,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(N).forEach(d),pt.forEach(d),E=w(st,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ht=h(E);X=w(ht,"stop",{"stop-color":!0,"stop-opacity":!0}),h(X).forEach(d),q=w(ht,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(q).forEach(d),j=w(ht,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(j).forEach(d),ht.forEach(d),T=w(st,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var gt=h(T);Z=w(gt,"stop",{"stop-color":!0,"stop-opacity":!0}),h(Z).forEach(d),U=w(gt,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(U).forEach(d),B=w(gt,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),h(B).forEach(d),gt.forEach(d),st.forEach(d),et.forEach(d),Tt=G(tt),Q=C(tt,"H3",{class:!0});var Gt=h(Q);At=Re(Gt,"Carregando..."),Gt.forEach(d),tt.forEach(d),ut.forEach(d),this.h()},h(){r(i,"x","37.5356"),r(i,"y","10.9951"),r(i,"width","52"),r(i,"height","17"),r(i,"rx","8.5"),r(i,"transform","rotate(-12.2071 37.5356 10.9951)"),r(i,"fill","url(#paint0_linear_175_70)"),r(s,"y","31.3931"),r(s,"width","142"),r(s,"height","17"),r(s,"rx","8.5"),r(s,"transform","rotate(-12.2071 0 31.3931)"),r(s,"fill","url(#paint1_linear_175_70)"),r(u,"stop-color","#CECECE"),r(f,"offset","1"),r(f,"stop-color","#7F7F7F"),r(l,"id","paint0_linear_175_70"),r(l,"x1","63.5356"),r(l,"y1","10.9951"),r(l,"x2","63.5356"),r(l,"y2","27.9951"),r(l,"gradientUnits","userSpaceOnUse"),r(m,"stop-color","#AFB3B0"),r(g,"offset","1"),r(g,"stop-color","#747474"),r(c,"id","paint1_linear_175_70"),r(c,"x1","71"),r(c,"y1","31.3931"),r(c,"x2","71"),r(c,"y2","48.3931"),r(c,"gradientUnits","userSpaceOnUse"),r(a,"xmlns","http://www.w3.org/2000/svg"),r(a,"width","143"),r(a,"height","49"),r(a,"class","svg-1 svelte-1cuvroy"),r(a,"viewBox","0 0 143 49"),r(a,"fill","none"),r(K,"d","M1.98347 14.7343C0.933672 6.93585 6.99842 0 14.8673 0H120.085C127.971 0 134.04 6.96343 132.964 14.7749L115.047 144.775C114.16 151.208 108.663 156 102.169 156H32.3673C25.8579 156 20.3519 151.186 19.4835 144.734L1.98347 14.7343Z"),r(K,"fill","url(#paint0_linear_178_79)"),r(x,"x","16"),r(x,"y","21.3774"),r(x,"width","17.3686"),r(x,"height","95.1972"),r(x,"rx","8.68429"),r(x,"transform","rotate(-7.86739 16 21.3774)"),r(x,"fill","url(#paint1_linear_178_79)"),r(F,"width","17.3686"),r(F,"height","115.82"),r(F,"rx","8.68429"),r(F,"transform","matrix(-0.990588 -0.136881 -0.136881 0.990588 120.236 21.3774)"),r(F,"fill","url(#paint2_linear_178_79)"),r(R,"width","17.3686"),r(R,"height","95.1972"),r(R,"rx","8.68429"),r(R,"transform","matrix(0.99934 -0.036312 -0.036312 -0.99934 60.7339 112.481)"),r(R,"fill","url(#paint3_linear_178_79)"),r(it,"stop-color","#AFB3B0"),r(W,"offset","0.826394"),r(W,"stop-color","#878787"),r(Y,"offset","1"),r(Y,"stop-color","#747474"),r(v,"id","paint0_linear_178_79"),r(v,"x1","50.5"),r(v,"y1","1.40324e-06"),r(v,"x2","102"),r(v,"y2","151.5"),r(v,"gradientUnits","userSpaceOnUse"),r(J,"stop-color","#747474"),r(J,"stop-opacity","0.29"),r(L,"offset","0.50868"),r(L,"stop-color","#7F7F7F"),r(L,"stop-opacity","0.17"),r(N,"offset","1"),r(N,"stop-color","#747474"),r(N,"stop-opacity","0.33"),r(b,"id","paint1_linear_178_79"),r(b,"x1","24.6843"),r(b,"y1","21.3774"),r(b,"x2","24.2136"),r(b,"y2","115.355"),r(b,"gradientUnits","userSpaceOnUse"),r(X,"stop-color","#747474"),r(X,"stop-opacity","0.29"),r(q,"offset","0.50868"),r(q,"stop-color","#7F7F7F"),r(q,"stop-opacity","0.17"),r(j,"offset","1"),r(j,"stop-color","#747474"),r(j,"stop-opacity","0.33"),r(E,"id","paint2_linear_178_79"),r(E,"x1","8.68429"),r(E,"y1","0"),r(E,"x2","7.9876"),r(E,"y2","114.334"),r(E,"gradientUnits","userSpaceOnUse"),r(Z,"stop-color","#747474"),r(Z,"stop-opacity","0.29"),r(U,"offset","0.50868"),r(U,"stop-color","#7F7F7F"),r(U,"stop-opacity","0.17"),r(B,"offset","1"),r(B,"stop-color","#747474"),r(B,"stop-opacity","0.33"),r(T,"id","paint3_linear_178_79"),r(T,"x1","8.68429"),r(T,"y1","0"),r(T,"x2","8.21361"),r(T,"y2","93.9774"),r(T,"gradientUnits","userSpaceOnUse"),r(_,"xmlns","http://www.w3.org/2000/svg"),r(_,"width","135"),r(_,"height","156"),r(_,"class","svg2 svelte-1cuvroy"),r(_,"viewBox","0 0 135 156"),r(_,"fill","none"),r(Q,"class","svelte-1cuvroy"),r(n,"class","card svelte-1cuvroy"),r(e,"class","page svelte-1cuvroy")},m(M,ut){at(M,e,ut),p(e,n),p(n,a),p(a,i),p(a,s),p(a,o),p(o,l),p(l,u),p(l,f),p(o,c),p(c,m),p(c,g),p(n,I),p(n,_),p(_,K),p(_,x),p(_,F),p(_,R),p(_,D),p(D,v),p(v,it),p(v,W),p(v,Y),p(D,b),p(b,J),p(b,L),p(b,N),p(D,E),p(E,X),p(E,q),p(E,j),p(D,T),p(T,Z),p(T,U),p(T,B),p(n,Tt),p(n,Q),p(Q,At),lt=!0},i(M){lt||(De(()=>{O||(O=Lt(e,jt,{duration:200},!0)),O.run(1)}),lt=!0)},o(M){O||(O=Lt(e,jt,{duration:200},!1)),O.run(0),lt=!1},d(M){M&&d(e),M&&O&&O.end()}}}function ba(t){let e,n,a=t[0]&&Jt();return{c(){a&&a.c(),e=mt()},l(i){a&&a.l(i),e=mt()},m(i,s){a&&a.m(i,s),at(i,e,s),n=!0},p(i,[s]){i[0]?a?s&1&&$(a,1):(a=Jt(),a.c(),$(a,1),a.m(e.parentNode,e)):a&&(ne(),rt(a,1,1,()=>{a=null}),ae())},i(i){n||($(a),n=!0)},o(i){rt(a),n=!1},d(i){a&&a.d(i),i&&d(e)}}}function Ea(t,e,n){let{isLoading:a=!1}=e;return t.$$set=i=>{"isLoading"in i&&n(0,a=i.isLoading)},[a]}class Ta extends Qt{constructor(e){super(),te(this,e,Ea,ba,ee,{isLoading:0})}}function Xt(t){let e,n,a,i,s,o,l,u;return{c(){e=k("div"),n=k("div"),a=P(),i=k("div"),s=P(),o=k("div"),l=P(),u=k("div"),this.h()},l(f){e=C(f,"DIV",{class:!0});var c=h(e);n=C(c,"DIV",{class:!0}),h(n).forEach(d),a=G(c),i=C(c,"DIV",{class:!0}),h(i).forEach(d),s=G(c),o=C(c,"DIV",{class:!0}),h(o).forEach(d),l=G(c),u=C(c,"DIV",{class:!0}),h(u).forEach(d),c.forEach(d),this.h()},h(){r(n,"class","ball ball-ne"),r(i,"class","ball ball-nw"),r(o,"class","ball ball-sw"),r(u,"class","ball ball-se"),r(e,"class","loading-animation")},m(f,c){at(f,e,c),p(e,n),p(e,a),p(e,i),p(e,s),p(e,o),p(e,l),p(e,u)},d(f){f&&d(e)}}}function Zt(t){let e;const n=t[3].default,a=Le(n,t,t[2],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),e=!0},p(i,s){a&&a.p&&(!e||s&4)&&Ne(a,n,i,i[2],e?je(n,i[2],s,null):qe(i[2]),null)},i(i){e||($(a,i),e=!0)},o(i){rt(a,i),e=!1},d(i){a&&a.d(i)}}}function Aa(t){let e,n,a,i,s,o,l,u,f,c=t[1]&&Xt();o=new Ta({props:{isLoading:t[0]}});let m=!t[0]&&Zt(t);return{c(){e=k("main"),n=k("div"),c&&c.c(),a=P(),i=k("audio"),s=P(),Oe(o.$$.fragment),l=P(),m&&m.c(),u=mt(),this.h()},l(g){e=C(g,"MAIN",{});var I=h(e);n=C(I,"DIV",{class:!0});var _=h(n);c&&c.l(_),_.forEach(d),a=G(I),i=C(I,"AUDIO",{class:!0}),h(i).forEach(d),s=G(I),Me(o.$$.fragment,I),I.forEach(d),l=G(g),m&&m.l(g),u=mt(),this.h()},h(){r(n,"class","load-audio svelte-n9f1pe"),r(i,"class","sound-background")},m(g,I){at(g,e,I),p(e,n),c&&c.m(n,null),p(e,a),p(e,i),p(e,s),$e(o,e,null),at(g,l,I),m&&m.m(g,I),at(g,u,I),f=!0},p(g,[I]){g[1]?c||(c=Xt(),c.c(),c.m(n,null)):c&&(c.d(1),c=null);const _={};I&1&&(_.isLoading=g[0]),o.$set(_),g[0]?m&&(ne(),rt(m,1,1,()=>{m=null}),ae()):m?(m.p(g,I),I&1&&$(m,1)):(m=Zt(g),m.c(),$(m,1),m.m(u.parentNode,u))},i(g){f||($(o.$$.fragment,g),$(m),f=!0)},o(g){rt(o.$$.fragment,g),rt(m),f=!1},d(g){g&&d(e),c&&c.d(),Pe(o),g&&d(l),m&&m.d(g),g&&d(u)}}}function Sa(t,e,n){let{$$slots:a={},$$scope:i}=e,s=!0;const o=Qe(Ve),l=tn();let u=!1;return Ge(async()=>{Be.subscribe(async f=>{const c=document.querySelector("audio.sound-background");f?(nt.index=Math.round(Math.random()*9),c.src=nt.musics[nt.index],c.load(),n(1,u=!0),await c.play(),n(1,u=!1),c.onended=async()=>{nt.index=Math.round(Math.random()*9),c.src=nt.musics[nt.index],c.load(),n(1,u=!0),await c.play(),n(1,u=!1)}):c.pause()}),Nt.update(()=>!1),wa(o),en(l,f=>{f||Ue("/login")})}),t.$$set=f=>{"$$scope"in f&&n(2,i=f.$$scope)},Nt.subscribe(f=>{n(0,s=f)}),[s,u,i,a]}class Da extends Qt{constructor(e){super(),te(this,e,Sa,Aa,ee,{})}}export{Da as default};
