var qf=Object.defineProperty;var Xf=(n,e,t)=>e in n?qf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Hr=(n,e,t)=>(Xf(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ga(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function _a(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Kf(i):_a(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(tt(n))return n}}const jf=/;(?![^(]*\))/g,$f=/:([^]+)/,Yf=/\/\*.*?\*\//gs;function Kf(n){const e={};return n.replace(Yf,"").split(jf).forEach(t=>{if(t){const i=t.split($f);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fn(n){let e="";if(dt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Fn(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=ga(Zf);function ru(n){return!!n||n===""}const Ke={},Ni=[],Zt=()=>{},Qf=()=>!1,eh=/^on[^a-z]/,Fs=n=>eh.test(n),xa=n=>n.startsWith("onUpdate:"),Et=Object.assign,va=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},th=Object.prototype.hasOwnProperty,Ge=(n,e)=>th.call(n,e),Ie=Array.isArray,xr=n=>Ns(n)==="[object Map]",nh=n=>Ns(n)==="[object Set]",Fe=n=>typeof n=="function",dt=n=>typeof n=="string",Ma=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",su=n=>tt(n)&&Fe(n.then)&&Fe(n.catch),ih=Object.prototype.toString,Ns=n=>ih.call(n),rh=n=>Ns(n).slice(8,-1),sh=n=>Ns(n)==="[object Object]",ya=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xs=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Os=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},oh=/-(\w)/g,cn=Os(n=>n.replace(oh,(e,t)=>t?t.toUpperCase():"")),ah=/\B([A-Z])/g,Yi=Os(n=>n.replace(ah,"-$1").toLowerCase()),Us=Os(n=>n.charAt(0).toUpperCase()+n.slice(1)),to=Os(n=>n?`on${Us(n)}`:""),wr=(n,e)=>!Object.is(n,e),vs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Cs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ls=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $a;const lh=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tn;class ch{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function uh(n,e=tn){e&&e.active&&e.effects.push(n)}const ba=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ou=n=>(n.w&zn)>0,au=n=>(n.n&zn)>0,fh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=zn},hh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ou(r)&&!au(r)?r.delete(n):e[t++]=r,r.w&=~zn,r.n&=~zn}e.length=t}},Xo=new WeakMap;let mr=0,zn=1;const jo=30;let jt;const ri=Symbol(""),$o=Symbol("");class Sa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,uh(this,i)}run(){if(!this.active)return this.fn();let e=jt,t=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Nn=!0,zn=1<<++mr,mr<=jo?fh(this):Ya(this),this.fn()}finally{mr<=jo&&hh(this),zn=1<<--mr,jt=this.parent,Nn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Nn=!0;const lu=[];function Ki(){lu.push(Nn),Nn=!1}function Zi(){const n=lu.pop();Nn=n===void 0?!0:n}function Ut(n,e,t){if(Nn&&jt){let i=Xo.get(n);i||Xo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=ba()),cu(r)}}function cu(n,e){let t=!1;mr<=jo?au(n)||(n.n|=zn,t=!ou(n)):t=!n.has(jt),t&&(n.add(jt),jt.deps.push(n))}function Sn(n,e,t,i,r,s){const a=Xo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ie(n)){const l=Ls(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ie(n)?ya(t)&&o.push(a.get("length")):(o.push(a.get(ri)),xr(n)&&o.push(a.get($o)));break;case"delete":Ie(n)||(o.push(a.get(ri)),xr(n)&&o.push(a.get($o)));break;case"set":xr(n)&&o.push(a.get(ri));break}if(o.length===1)o[0]&&Yo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Yo(ba(l))}}function Yo(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&Ka(i);for(const i of t)i.computed||Ka(i)}function Ka(n,e){(n!==jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const dh=ga("__proto__,__v_isRef,__isVue"),uu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ma)),ph=wa(),mh=wa(!1,!0),gh=wa(!0),Za=_h();function _h(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,a=this.length;s<a;s++)Ut(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ki();const i=We(this)[e].apply(this,t);return Zi(),i}}),n}function wa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Ih:mu:e?pu:du).get(i))return i;const a=Ie(i);if(!n&&a&&Ge(Za,r))return Reflect.get(Za,r,s);const o=Reflect.get(i,r,s);return(Ma(r)?uu.has(r):dh(r))||(n||Ut(i,"get",r),e)?o:mt(o)?a&&ya(r)?o:o.value:tt(o)?n?gu(o):Or(o):o}}const xh=fu(),vh=fu(!0);function fu(n=!1){return function(t,i,r,s){let a=t[i];if(ki(a)&&mt(a)&&!mt(r))return!1;if(!n&&(!Rs(r)&&!ki(r)&&(a=We(a),r=We(r)),!Ie(t)&&mt(a)&&!mt(r)))return a.value=r,!0;const o=Ie(t)&&ya(i)?Number(i)<t.length:Ge(t,i),l=Reflect.set(t,i,r,s);return t===We(s)&&(o?wr(r,a)&&Sn(t,"set",i,r):Sn(t,"add",i,r)),l}}function Mh(n,e){const t=Ge(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Sn(n,"delete",e,void 0),i}function yh(n,e){const t=Reflect.has(n,e);return(!Ma(e)||!uu.has(e))&&Ut(n,"has",e),t}function bh(n){return Ut(n,"iterate",Ie(n)?"length":ri),Reflect.ownKeys(n)}const hu={get:ph,set:xh,deleteProperty:Mh,has:yh,ownKeys:bh},Sh={get:gh,set(n,e){return!0},deleteProperty(n,e){return!0}},wh=Et({},hu,{get:mh,set:vh}),Ea=n=>n,zs=n=>Reflect.getPrototypeOf(n);function Wr(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(e!==s&&Ut(r,"get",e),Ut(r,"get",s));const{has:a}=zs(r),o=i?Ea:t?Ca:Er;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function qr(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(n!==r&&Ut(i,"has",n),Ut(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Xr(n,e=!1){return n=n.__v_raw,!e&&Ut(We(n),"iterate",ri),Reflect.get(n,"size",n)}function Ja(n){n=We(n);const e=We(this);return zs(e).has.call(e,n)||(e.add(n),Sn(e,"add",n,n)),this}function Qa(n,e){e=We(e);const t=We(this),{has:i,get:r}=zs(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?wr(e,a)&&Sn(t,"set",n,e):Sn(t,"add",n,e),this}function el(n){const e=We(this),{has:t,get:i}=zs(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Sn(e,"delete",n,void 0),s}function tl(){const n=We(this),e=n.size!==0,t=n.clear();return e&&Sn(n,"clear",void 0,void 0),t}function jr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=We(a),l=e?Ea:n?Ca:Er;return!n&&Ut(o,"iterate",ri),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function $r(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),a=xr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ea:e?Ca:Er;return!e&&Ut(s,"iterate",l?$o:ri),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function En(n){return function(...e){return n==="delete"?!1:this}}function Eh(){const n={get(s){return Wr(this,s)},get size(){return Xr(this)},has:qr,add:Ja,set:Qa,delete:el,clear:tl,forEach:jr(!1,!1)},e={get(s){return Wr(this,s,!1,!0)},get size(){return Xr(this)},has:qr,add:Ja,set:Qa,delete:el,clear:tl,forEach:jr(!1,!0)},t={get(s){return Wr(this,s,!0)},get size(){return Xr(this,!0)},has(s){return qr.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:jr(!0,!1)},i={get(s){return Wr(this,s,!0,!0)},get size(){return Xr(this,!0)},has(s){return qr.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$r(s,!1,!1),t[s]=$r(s,!0,!1),e[s]=$r(s,!1,!0),i[s]=$r(s,!0,!0)}),[n,t,e,i]}const[Th,Ah,Ch,Lh]=Eh();function Ta(n,e){const t=e?n?Lh:Ch:n?Ah:Th;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ge(t,r)&&r in i?t:i,r,s)}const Rh={get:Ta(!1,!1)},Ph={get:Ta(!1,!0)},Dh={get:Ta(!0,!1)},du=new WeakMap,pu=new WeakMap,mu=new WeakMap,Ih=new WeakMap;function Fh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(n){return n.__v_skip||!Object.isExtensible(n)?0:Fh(rh(n))}function Or(n){return ki(n)?n:Aa(n,!1,hu,Rh,du)}function Oh(n){return Aa(n,!1,wh,Ph,pu)}function gu(n){return Aa(n,!0,Sh,Dh,mu)}function Aa(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Nh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Oi(n){return ki(n)?Oi(n.__v_raw):!!(n&&n.__v_isReactive)}function ki(n){return!!(n&&n.__v_isReadonly)}function Rs(n){return!!(n&&n.__v_isShallow)}function _u(n){return Oi(n)||ki(n)}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function xu(n){return Cs(n,"__v_skip",!0),n}const Er=n=>tt(n)?Or(n):n,Ca=n=>tt(n)?gu(n):n;function vu(n){Nn&&jt&&(n=We(n),cu(n.dep||(n.dep=ba())))}function Mu(n,e){n=We(n),n.dep&&Yo(n.dep)}function mt(n){return!!(n&&n.__v_isRef===!0)}function yu(n){return bu(n,!1)}function Uh(n){return bu(n,!0)}function bu(n,e){return mt(n)?n:new zh(n,e)}class zh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:Er(e)}get value(){return vu(this),this._value}set value(e){const t=this.__v_isShallow||Rs(e)||ki(e);e=t?e:We(e),wr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Er(e),Mu(this))}}function Vt(n){return mt(n)?n.value:n}const Bh={get:(n,e,t)=>Vt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return mt(r)&&!mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Su(n){return Oi(n)?n:new Proxy(n,Bh)}function hy(n){const e=Ie(n)?new Array(n.length):{};for(const t in n)e[t]=Gh(n,t);return e}class kh{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Gh(n,e,t){const i=n[e];return mt(i)?i:new kh(n,e,t)}var wu;class Vh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[wu]=!1,this._dirty=!0,this.effect=new Sa(e,()=>{this._dirty||(this._dirty=!0,Mu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return vu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}wu="__v_isReadonly";function Hh(n,e,t=!1){let i,r;const s=Fe(n);return s?(i=n,r=Zt):(i=n.get,r=n.set),new Vh(i,r,s||!r,t)}function On(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Bs(s,e,t)}return r}function Jt(n,e,t,i){if(Fe(n)){const s=On(n,e,t,i);return s&&su(s)&&s.catch(a=>{Bs(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jt(n[s],e,t,i));return r}function Bs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[n,a,o]);return}}Wh(n,t,r,i)}function Wh(n,e,t,i=!0){console.error(n)}let Tr=!1,Ko=!1;const xt=[];let an=0;const Ui=[];let xn=null,Jn=0;const Eu=Promise.resolve();let La=null;function Tu(n){const e=La||Eu;return n?e.then(this?n.bind(this):n):e}function qh(n){let e=an+1,t=xt.length;for(;e<t;){const i=e+t>>>1;Ar(xt[i])<n?e=i+1:t=i}return e}function Ra(n){(!xt.length||!xt.includes(n,Tr&&n.allowRecurse?an+1:an))&&(n.id==null?xt.push(n):xt.splice(qh(n.id),0,n),Au())}function Au(){!Tr&&!Ko&&(Ko=!0,La=Eu.then(Lu))}function Xh(n){const e=xt.indexOf(n);e>an&&xt.splice(e,1)}function jh(n){Ie(n)?Ui.push(...n):(!xn||!xn.includes(n,n.allowRecurse?Jn+1:Jn))&&Ui.push(n),Au()}function nl(n,e=Tr?an+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function Cu(n){if(Ui.length){const e=[...new Set(Ui)];if(Ui.length=0,xn){xn.push(...e);return}for(xn=e,xn.sort((t,i)=>Ar(t)-Ar(i)),Jn=0;Jn<xn.length;Jn++)xn[Jn]();xn=null,Jn=0}}const Ar=n=>n.id==null?1/0:n.id,$h=(n,e)=>{const t=Ar(n)-Ar(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Lu(n){Ko=!1,Tr=!0,xt.sort($h);const e=Zt;try{for(an=0;an<xt.length;an++){const t=xt[an];t&&t.active!==!1&&On(t,null,14)}}finally{an=0,xt.length=0,Cu(),Tr=!1,La=null,(xt.length||Ui.length)&&Lu()}}function Yh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Ke;h&&(r=t.map(m=>dt(m)?m.trim():m)),f&&(r=t.map(Ls))}let o,l=i[o=to(e)]||i[o=to(cn(e))];!l&&s&&(l=i[o=to(Yi(e))]),l&&Jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Jt(c,n,6,r)}}function Ru(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=c=>{const u=Ru(c,e,!0);u&&(o=!0,Et(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):Et(a,s),tt(n)&&i.set(n,a),a)}function ks(n,e){return!n||!Fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,Yi(e))||Ge(n,e))}let Ht=null,Gs=null;function Ps(n){const e=Ht;return Ht=n,Gs=n&&n.type.__scopeId||null,e}function Pa(n){Gs=n}function Da(){Gs=null}function Di(n,e=Ht,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&hl(-1);const s=Ps(e);let a;try{a=n(...r)}finally{Ps(s),i._d&&hl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function no(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:d}=n;let p,x;const E=Ps(n);try{if(t.shapeFlag&4){const S=r||i;p=sn(u.call(S,S,f,s,m,h,_)),x=l}else{const S=e;p=sn(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),x=e.props?l:Kh(l)}}catch(S){yr.length=0,Bs(S,n,1),p=et(Cr)}let v=p;if(x&&d!==!1){const S=Object.keys(x),{shapeFlag:C}=v;S.length&&C&7&&(a&&S.some(xa)&&(x=Zh(x,a)),v=Gi(v,x))}return t.dirs&&(v=Gi(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,Ps(E),p}const Kh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fs(t))&&((e||(e={}))[t]=n[t]);return e},Zh=(n,e)=>{const t={};for(const i in n)(!xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?il(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ks(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?il(i,a,c):!0:!!a;return!1}function il(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ks(t,s))return!0}return!1}function Qh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const ed=n=>n.__isSuspense;function td(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):jh(n)}function Ms(n,e){if(pt){let t=pt.provides;const i=pt.parent&&pt.parent.provides;i===t&&(t=pt.provides=Object.create(i)),t[n]=e}}function yn(n,e,t=!1){const i=pt||Ht;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i.proxy):e}}const Yr={};function ys(n,e,t){return Pu(n,e,t)}function Pu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ke){const o=pt;let l,c=!1,u=!1;if(mt(n)?(l=()=>n.value,c=Rs(n)):Oi(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(v=>Oi(v)||Rs(v)),l=()=>n.map(v=>{if(mt(v))return v.value;if(Oi(v))return ti(v);if(Fe(v))return On(v,o,2)})):Fe(n)?e?l=()=>On(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Jt(n,o,3,[h])}:l=Zt,e&&i){const v=l;l=()=>ti(v())}let f,h=v=>{f=x.onStop=()=>{On(v,o,4)}},m;if(Rr)if(h=Zt,e?t&&Jt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const v=Jd();m=v.__watcherHandles||(v.__watcherHandles=[])}else return Zt;let _=u?new Array(n.length).fill(Yr):Yr;const d=()=>{if(x.active)if(e){const v=x.run();(i||c||(u?v.some((S,C)=>wr(S,_[C])):wr(v,_)))&&(f&&f(),Jt(e,o,3,[v,_===Yr?void 0:u&&_[0]===Yr?[]:_,h]),_=v)}else x.run()};d.allowRecurse=!!e;let p;r==="sync"?p=d:r==="post"?p=()=>Tt(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),p=()=>Ra(d));const x=new Sa(l,p);e?t?d():_=x.run():r==="post"?Tt(x.run.bind(x),o&&o.suspense):x.run();const E=()=>{x.stop(),o&&o.scope&&va(o.scope.effects,x)};return m&&m.push(E),E}function nd(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Du(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=pt;Vi(this);const o=Pu(r,s.bind(i),t);return a?Vi(a):si(),o}function Du(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function ti(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),mt(n))ti(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)ti(n[t],e);else if(nh(n)||xr(n))n.forEach(t=>{ti(t,e)});else if(sh(n))for(const t in n)ti(n[t],e);return n}function Ji(n){return Fe(n)?{setup:n,name:n.name}:n}const bs=n=>!!n.type.__asyncLoader,Iu=n=>n.type.__isKeepAlive;function id(n,e){Fu(n,"a",e)}function rd(n,e){Fu(n,"da",e)}function Fu(n,e,t=pt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Vs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Iu(r.parent.vnode)&&sd(i,e,t,r),r=r.parent}}function sd(n,e,t,i){const r=Vs(e,n,i,!0);Nu(()=>{va(i[e],r)},t)}function Vs(n,e,t=pt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Ki(),Vi(t);const o=Jt(e,t,n,a);return si(),Zi(),o});return i?r.unshift(s):r.push(s),s}}const wn=n=>(e,t=pt)=>(!Rr||n==="sp")&&Vs(n,(...i)=>e(...i),t),od=wn("bm"),ad=wn("m"),ld=wn("bu"),cd=wn("u"),ud=wn("bum"),Nu=wn("um"),fd=wn("sp"),hd=wn("rtg"),dd=wn("rtc");function pd(n,e=pt){Vs("ec",n,e)}function md(n,e){const t=Ht;if(t===null)return n;const i=qs(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=Ke]=e[s];a&&(Fe(a)&&(a={mounted:a,updated:a}),a.deep&&ti(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Wn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ki(),Jt(l,t,8,[n.el,o,n,e]),Zi())}}const Ou="components";function dy(n,e){return _d(Ou,n,!0,e)||n}const gd=Symbol();function _d(n,e,t=!0,i=!1){const r=Ht||pt;if(r){const s=r.type;if(n===Ou){const o=Yd(s,!1);if(o&&(o===e||o===cn(e)||o===Us(cn(e))))return s}const a=rl(r[n]||s[n],e)||rl(r.appContext[n],e);return!a&&i?s:a}}function rl(n,e){return n&&(n[e]||n[cn(e)]||n[Us(cn(e))])}const Zo=n=>n?ju(n)?qs(n)||n.proxy:Zo(n.parent):null,vr=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zo(n.parent),$root:n=>Zo(n.root),$emit:n=>n.emit,$options:n=>Ia(n),$forceUpdate:n=>n.f||(n.f=()=>Ra(n.update)),$nextTick:n=>n.n||(n.n=Tu.bind(n.proxy)),$watch:n=>nd.bind(n)}),io=(n,e)=>n!==Ke&&!n.__isScriptSetup&&Ge(n,e),xd={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(io(i,e))return a[e]=1,i[e];if(r!==Ke&&Ge(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ge(c,e))return a[e]=3,s[e];if(t!==Ke&&Ge(t,e))return a[e]=4,t[e];Jo&&(a[e]=0)}}const u=vr[e];let f,h;if(u)return e==="$attrs"&&Ut(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ke&&Ge(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return io(r,e)?(r[e]=t,!0):i!==Ke&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ke&&Ge(n,a)||io(e,a)||(o=s[0])&&Ge(o,a)||Ge(i,a)||Ge(vr,a)||Ge(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Jo=!0;function vd(n){const e=Ia(n),t=n.proxy,i=n.ctx;Jo=!1,e.beforeCreate&&sl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:d,deactivated:p,beforeDestroy:x,beforeUnmount:E,destroyed:v,unmounted:S,render:C,renderTracked:R,renderTriggered:F,errorCaptured:b,serverPrefetch:A,expose:N,inheritAttrs:ie,components:oe,directives:V,filters:U}=e;if(c&&Md(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const ne in a){const H=a[ne];Fe(H)&&(i[ne]=H.bind(t))}if(r){const ne=r.call(t,t);tt(ne)&&(n.data=Or(ne))}if(Jo=!0,s)for(const ne in s){const H=s[ne],ce=Fe(H)?H.bind(t,t):Fe(H.get)?H.get.bind(t,t):Zt,ae=!Fe(H)&&Fe(H.set)?H.set.bind(t):Zt,we=Gt({get:ce,set:ae});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>we.value,set:z=>we.value=z})}if(o)for(const ne in o)Uu(o[ne],i,t,ne);if(l){const ne=Fe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(H=>{Ms(H,ne[H])})}u&&sl(u,n,"c");function te(ne,H){Ie(H)?H.forEach(ce=>ne(ce.bind(t))):H&&ne(H.bind(t))}if(te(od,f),te(ad,h),te(ld,m),te(cd,_),te(id,d),te(rd,p),te(pd,b),te(dd,R),te(hd,F),te(ud,E),te(Nu,S),te(fd,A),Ie(N))if(N.length){const ne=n.exposed||(n.exposed={});N.forEach(H=>{Object.defineProperty(ne,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else n.exposed||(n.exposed={});C&&n.render===Zt&&(n.render=C),ie!=null&&(n.inheritAttrs=ie),oe&&(n.components=oe),V&&(n.directives=V)}function Md(n,e,t=Zt,i=!1){Ie(n)&&(n=Qo(n));for(const r in n){const s=n[r];let a;tt(s)?"default"in s?a=yn(s.from||r,s.default,!0):a=yn(s.from||r):a=yn(s),mt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function sl(n,e,t){Jt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uu(n,e,t,i){const r=i.includes(".")?Du(t,i):()=>t[i];if(dt(n)){const s=e[n];Fe(s)&&ys(r,s)}else if(Fe(n))ys(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>Uu(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&ys(r,s,n)}}function Ia(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,a,!0)),Ds(l,e,a)),tt(e)&&s.set(e,l),l}function Ds(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ds(n,s,t,!0),r&&r.forEach(a=>Ds(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=yd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const yd={data:ol,props:Yn,emits:Yn,methods:Yn,computed:Yn,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Yn,directives:Yn,watch:Sd,provide:ol,inject:bd};function ol(n,e){return e?n?function(){return Et(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function bd(n,e){return Yn(Qo(n),Qo(e))}function Qo(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Yn(n,e){return n?Et(Et(Object.create(null),n),e):e}function Sd(n,e){if(!n)return e;if(!e)return n;const t=Et(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function wd(n,e,t,i=!1){const r={},s={};Cs(s,Ws,1),n.propsDefaults=Object.create(null),zu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Oh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ed(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=We(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ks(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ge(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=cn(h);r[_]=ea(l,o,_,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{zu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ge(e,f)&&((u=Yi(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ea(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ge(e,f))&&(delete s[f],c=!0)}c&&Sn(n,"set","$attrs")}function zu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&Ge(r,u=cn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ks(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=We(t),c=o||Ke;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ea(r,l,f,c[f],n,!Ge(c,f))}}return a}function ea(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ge(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Vi(r),i=c[t]=l.call(null,e),si())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Yi(t))&&(i=!0))}return i}function Bu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const u=f=>{l=!0;const[h,m]=Bu(f,e,!0);Et(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Ni),Ni;if(Ie(s))for(let u=0;u<s.length;u++){const f=cn(s[u]);al(f)&&(a[f]=Ke)}else if(s)for(const u in s){const f=cn(u);if(al(f)){const h=s[u],m=a[f]=Ie(h)||Fe(h)?{type:h}:Object.assign({},h);if(m){const _=ul(Boolean,m.type),d=ul(String,m.type);m[0]=_>-1,m[1]=d<0||_<d,(_>-1||Ge(m,"default"))&&o.push(f)}}}const c=[a,o];return tt(n)&&i.set(n,c),c}function al(n){return n[0]!=="$"}function ll(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function cl(n,e){return ll(n)===ll(e)}function ul(n,e){return Ie(e)?e.findIndex(t=>cl(t,n)):Fe(e)&&cl(e,n)?0:-1}const ku=n=>n[0]==="_"||n==="$stable",Fa=n=>Ie(n)?n.map(sn):[sn(n)],Td=(n,e,t)=>{if(e._n)return e;const i=Di((...r)=>Fa(e(...r)),t);return i._c=!1,i},Gu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ku(r))continue;const s=n[r];if(Fe(s))e[r]=Td(r,s,i);else if(s!=null){const a=Fa(s);e[r]=()=>a}}},Vu=(n,e)=>{const t=Fa(e);n.slots.default=()=>t},Ad=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=We(e),Cs(e,"_",t)):Gu(e,n.slots={})}else n.slots={},e&&Vu(n,e);Cs(n.slots,Ws,1)},Cd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ke;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Et(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Gu(e,r)),a=e}else e&&(Vu(n,e),a={default:1});if(s)for(const o in r)!ku(o)&&!(o in a)&&delete r[o]};function Hu(){return{app:null,config:{isNativeTag:Qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Rd(n,e){return function(i,r=null){Fe(i)||(i=Object.assign({},i)),r!=null&&!tt(r)&&(r=null);const s=Hu(),a=new Set;let o=!1;const l=s.app={_uid:Ld++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Qd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(l,...u)):Fe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=et(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,qs(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ta(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,m)=>ta(h,e&&(Ie(e)?e[m]:e),t,i,r));return}if(bs(i)&&!r)return;const s=i.shapeFlag&4?qs(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ke?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):mt(c)&&(c.value=null)),Fe(l))On(l,o,12,[a,u]);else{const h=dt(l),m=mt(l);if(h||m){const _=()=>{if(n.f){const d=h?Ge(f,l)?f[l]:u[l]:l.value;r?Ie(d)&&va(d,s):Ie(d)?d.includes(s)||d.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ge(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,Tt(_,t)):_()}}}const Tt=td;function Pd(n){return Dd(n)}function Dd(n,e){const t=lh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Zt,insertStaticContent:_}=n,d=(y,T,G,q=null,Y=null,ue=null,he=!1,ee=null,_e=!!T.dynamicChildren)=>{if(y===T)return;y&&!rr(y,T)&&(q=Q(y),z(y,Y,ue,!0),y=null),T.patchFlag===-2&&(_e=!1,T.dynamicChildren=null);const{type:se,ref:M,shapeFlag:g}=T;switch(se){case Hs:p(y,T,G,q);break;case Cr:x(y,T,G,q);break;case Ss:y==null&&E(T,G,q,he);break;case rn:oe(y,T,G,q,Y,ue,he,ee,_e);break;default:g&1?C(y,T,G,q,Y,ue,he,ee,_e):g&6?V(y,T,G,q,Y,ue,he,ee,_e):(g&64||g&128)&&se.process(y,T,G,q,Y,ue,he,ee,_e,ge)}M!=null&&Y&&ta(M,y&&y.ref,ue,T||y,!T)},p=(y,T,G,q)=>{if(y==null)i(T.el=o(T.children),G,q);else{const Y=T.el=y.el;T.children!==y.children&&c(Y,T.children)}},x=(y,T,G,q)=>{y==null?i(T.el=l(T.children||""),G,q):T.el=y.el},E=(y,T,G,q)=>{[y.el,y.anchor]=_(y.children,T,G,q,y.el,y.anchor)},v=({el:y,anchor:T},G,q)=>{let Y;for(;y&&y!==T;)Y=h(y),i(y,G,q),y=Y;i(T,G,q)},S=({el:y,anchor:T})=>{let G;for(;y&&y!==T;)G=h(y),r(y),y=G;r(T)},C=(y,T,G,q,Y,ue,he,ee,_e)=>{he=he||T.type==="svg",y==null?R(T,G,q,Y,ue,he,ee,_e):A(y,T,Y,ue,he,ee,_e)},R=(y,T,G,q,Y,ue,he,ee)=>{let _e,se;const{type:M,props:g,shapeFlag:I,transition:W,dirs:K}=y;if(_e=y.el=a(y.type,ue,g&&g.is,g),I&8?u(_e,y.children):I&16&&b(y.children,_e,null,q,Y,ue&&M!=="foreignObject",he,ee),K&&Wn(y,null,q,"created"),g){for(const Me in g)Me!=="value"&&!xs(Me)&&s(_e,Me,null,g[Me],ue,y.children,q,Y,L);"value"in g&&s(_e,"value",null,g.value),(se=g.onVnodeBeforeMount)&&en(se,q,y)}F(_e,y,y.scopeId,he,q),K&&Wn(y,null,q,"beforeMount");const fe=(!Y||Y&&!Y.pendingBranch)&&W&&!W.persisted;fe&&W.beforeEnter(_e),i(_e,T,G),((se=g&&g.onVnodeMounted)||fe||K)&&Tt(()=>{se&&en(se,q,y),fe&&W.enter(_e),K&&Wn(y,null,q,"mounted")},Y)},F=(y,T,G,q,Y)=>{if(G&&m(y,G),q)for(let ue=0;ue<q.length;ue++)m(y,q[ue]);if(Y){let ue=Y.subTree;if(T===ue){const he=Y.vnode;F(y,he,he.scopeId,he.slotScopeIds,Y.parent)}}},b=(y,T,G,q,Y,ue,he,ee,_e=0)=>{for(let se=_e;se<y.length;se++){const M=y[se]=ee?Pn(y[se]):sn(y[se]);d(null,M,T,G,q,Y,ue,he,ee)}},A=(y,T,G,q,Y,ue,he)=>{const ee=T.el=y.el;let{patchFlag:_e,dynamicChildren:se,dirs:M}=T;_e|=y.patchFlag&16;const g=y.props||Ke,I=T.props||Ke;let W;G&&qn(G,!1),(W=I.onVnodeBeforeUpdate)&&en(W,G,T,y),M&&Wn(T,y,G,"beforeUpdate"),G&&qn(G,!0);const K=Y&&T.type!=="foreignObject";if(se?N(y.dynamicChildren,se,ee,G,q,K,ue):he||H(y,T,ee,null,G,q,K,ue,!1),_e>0){if(_e&16)ie(ee,T,g,I,G,q,Y);else if(_e&2&&g.class!==I.class&&s(ee,"class",null,I.class,Y),_e&4&&s(ee,"style",g.style,I.style,Y),_e&8){const fe=T.dynamicProps;for(let Me=0;Me<fe.length;Me++){const me=fe[Me],X=g[me],Te=I[me];(Te!==X||me==="value")&&s(ee,me,X,Te,Y,y.children,G,q,L)}}_e&1&&y.children!==T.children&&u(ee,T.children)}else!he&&se==null&&ie(ee,T,g,I,G,q,Y);((W=I.onVnodeUpdated)||M)&&Tt(()=>{W&&en(W,G,T,y),M&&Wn(T,y,G,"updated")},q)},N=(y,T,G,q,Y,ue,he)=>{for(let ee=0;ee<T.length;ee++){const _e=y[ee],se=T[ee],M=_e.el&&(_e.type===rn||!rr(_e,se)||_e.shapeFlag&70)?f(_e.el):G;d(_e,se,M,null,q,Y,ue,he,!0)}},ie=(y,T,G,q,Y,ue,he)=>{if(G!==q){if(G!==Ke)for(const ee in G)!xs(ee)&&!(ee in q)&&s(y,ee,G[ee],null,he,T.children,Y,ue,L);for(const ee in q){if(xs(ee))continue;const _e=q[ee],se=G[ee];_e!==se&&ee!=="value"&&s(y,ee,se,_e,he,T.children,Y,ue,L)}"value"in q&&s(y,"value",G.value,q.value)}},oe=(y,T,G,q,Y,ue,he,ee,_e)=>{const se=T.el=y?y.el:o(""),M=T.anchor=y?y.anchor:o("");let{patchFlag:g,dynamicChildren:I,slotScopeIds:W}=T;W&&(ee=ee?ee.concat(W):W),y==null?(i(se,G,q),i(M,G,q),b(T.children,G,M,Y,ue,he,ee,_e)):g>0&&g&64&&I&&y.dynamicChildren?(N(y.dynamicChildren,I,G,Y,ue,he,ee),(T.key!=null||Y&&T===Y.subTree)&&Na(y,T,!0)):H(y,T,G,M,Y,ue,he,ee,_e)},V=(y,T,G,q,Y,ue,he,ee,_e)=>{T.slotScopeIds=ee,y==null?T.shapeFlag&512?Y.ctx.activate(T,G,q,he,_e):U(T,G,q,Y,ue,he,_e):J(y,T,_e)},U=(y,T,G,q,Y,ue,he)=>{const ee=y.component=Wd(y,q,Y);if(Iu(y)&&(ee.ctx.renderer=ge),qd(ee),ee.asyncDep){if(Y&&Y.registerDep(ee,te),!y.el){const _e=ee.subTree=et(Cr);x(null,_e,T,G)}return}te(ee,y,T,G,Y,ue,he)},J=(y,T,G)=>{const q=T.component=y.component;if(Jh(y,T,G))if(q.asyncDep&&!q.asyncResolved){ne(q,T,G);return}else q.next=T,Xh(q.update),q.update();else T.el=y.el,q.vnode=T},te=(y,T,G,q,Y,ue,he)=>{const ee=()=>{if(y.isMounted){let{next:M,bu:g,u:I,parent:W,vnode:K}=y,fe=M,Me;qn(y,!1),M?(M.el=K.el,ne(y,M,he)):M=K,g&&vs(g),(Me=M.props&&M.props.onVnodeBeforeUpdate)&&en(Me,W,M,K),qn(y,!0);const me=no(y),X=y.subTree;y.subTree=me,d(X,me,f(X.el),Q(X),y,Y,ue),M.el=me.el,fe===null&&Qh(y,me.el),I&&Tt(I,Y),(Me=M.props&&M.props.onVnodeUpdated)&&Tt(()=>en(Me,W,M,K),Y)}else{let M;const{el:g,props:I}=T,{bm:W,m:K,parent:fe}=y,Me=bs(T);if(qn(y,!1),W&&vs(W),!Me&&(M=I&&I.onVnodeBeforeMount)&&en(M,fe,T),qn(y,!0),g&&Se){const me=()=>{y.subTree=no(y),Se(g,y.subTree,y,Y,null)};Me?T.type.__asyncLoader().then(()=>!y.isUnmounted&&me()):me()}else{const me=y.subTree=no(y);d(null,me,G,q,y,Y,ue),T.el=me.el}if(K&&Tt(K,Y),!Me&&(M=I&&I.onVnodeMounted)){const me=T;Tt(()=>en(M,fe,me),Y)}(T.shapeFlag&256||fe&&bs(fe.vnode)&&fe.vnode.shapeFlag&256)&&y.a&&Tt(y.a,Y),y.isMounted=!0,T=G=q=null}},_e=y.effect=new Sa(ee,()=>Ra(se),y.scope),se=y.update=()=>_e.run();se.id=y.uid,qn(y,!0),se()},ne=(y,T,G)=>{T.component=y;const q=y.vnode.props;y.vnode=T,y.next=null,Ed(y,T.props,q,G),Cd(y,T.children,G),Ki(),nl(),Zi()},H=(y,T,G,q,Y,ue,he,ee,_e=!1)=>{const se=y&&y.children,M=y?y.shapeFlag:0,g=T.children,{patchFlag:I,shapeFlag:W}=T;if(I>0){if(I&128){ae(se,g,G,q,Y,ue,he,ee,_e);return}else if(I&256){ce(se,g,G,q,Y,ue,he,ee,_e);return}}W&8?(M&16&&L(se,Y,ue),g!==se&&u(G,g)):M&16?W&16?ae(se,g,G,q,Y,ue,he,ee,_e):L(se,Y,ue,!0):(M&8&&u(G,""),W&16&&b(g,G,q,Y,ue,he,ee,_e))},ce=(y,T,G,q,Y,ue,he,ee,_e)=>{y=y||Ni,T=T||Ni;const se=y.length,M=T.length,g=Math.min(se,M);let I;for(I=0;I<g;I++){const W=T[I]=_e?Pn(T[I]):sn(T[I]);d(y[I],W,G,null,Y,ue,he,ee,_e)}se>M?L(y,Y,ue,!0,!1,g):b(T,G,q,Y,ue,he,ee,_e,g)},ae=(y,T,G,q,Y,ue,he,ee,_e)=>{let se=0;const M=T.length;let g=y.length-1,I=M-1;for(;se<=g&&se<=I;){const W=y[se],K=T[se]=_e?Pn(T[se]):sn(T[se]);if(rr(W,K))d(W,K,G,null,Y,ue,he,ee,_e);else break;se++}for(;se<=g&&se<=I;){const W=y[g],K=T[I]=_e?Pn(T[I]):sn(T[I]);if(rr(W,K))d(W,K,G,null,Y,ue,he,ee,_e);else break;g--,I--}if(se>g){if(se<=I){const W=I+1,K=W<M?T[W].el:q;for(;se<=I;)d(null,T[se]=_e?Pn(T[se]):sn(T[se]),G,K,Y,ue,he,ee,_e),se++}}else if(se>I)for(;se<=g;)z(y[se],Y,ue,!0),se++;else{const W=se,K=se,fe=new Map;for(se=K;se<=I;se++){const ye=T[se]=_e?Pn(T[se]):sn(T[se]);ye.key!=null&&fe.set(ye.key,se)}let Me,me=0;const X=I-K+1;let Te=!1,Re=0;const Ee=new Array(X);for(se=0;se<X;se++)Ee[se]=0;for(se=W;se<=g;se++){const ye=y[se];if(me>=X){z(ye,Y,ue,!0);continue}let Pe;if(ye.key!=null)Pe=fe.get(ye.key);else for(Me=K;Me<=I;Me++)if(Ee[Me-K]===0&&rr(ye,T[Me])){Pe=Me;break}Pe===void 0?z(ye,Y,ue,!0):(Ee[Pe-K]=se+1,Pe>=Re?Re=Pe:Te=!0,d(ye,T[Pe],G,null,Y,ue,he,ee,_e),me++)}const Ce=Te?Id(Ee):Ni;for(Me=Ce.length-1,se=X-1;se>=0;se--){const ye=K+se,Pe=T[ye],je=ye+1<M?T[ye+1].el:q;Ee[se]===0?d(null,Pe,G,je,Y,ue,he,ee,_e):Te&&(Me<0||se!==Ce[Me]?we(Pe,G,je,2):Me--)}}},we=(y,T,G,q,Y=null)=>{const{el:ue,type:he,transition:ee,children:_e,shapeFlag:se}=y;if(se&6){we(y.component.subTree,T,G,q);return}if(se&128){y.suspense.move(T,G,q);return}if(se&64){he.move(y,T,G,ge);return}if(he===rn){i(ue,T,G);for(let g=0;g<_e.length;g++)we(_e[g],T,G,q);i(y.anchor,T,G);return}if(he===Ss){v(y,T,G);return}if(q!==2&&se&1&&ee)if(q===0)ee.beforeEnter(ue),i(ue,T,G),Tt(()=>ee.enter(ue),Y);else{const{leave:g,delayLeave:I,afterLeave:W}=ee,K=()=>i(ue,T,G),fe=()=>{g(ue,()=>{K(),W&&W()})};I?I(ue,K,fe):fe()}else i(ue,T,G)},z=(y,T,G,q=!1,Y=!1)=>{const{type:ue,props:he,ref:ee,children:_e,dynamicChildren:se,shapeFlag:M,patchFlag:g,dirs:I}=y;if(ee!=null&&ta(ee,null,G,y,!0),M&256){T.ctx.deactivate(y);return}const W=M&1&&I,K=!bs(y);let fe;if(K&&(fe=he&&he.onVnodeBeforeUnmount)&&en(fe,T,y),M&6)D(y.component,G,q);else{if(M&128){y.suspense.unmount(G,q);return}W&&Wn(y,null,T,"beforeUnmount"),M&64?y.type.remove(y,T,G,Y,ge,q):se&&(ue!==rn||g>0&&g&64)?L(se,T,G,!1,!0):(ue===rn&&g&384||!Y&&M&16)&&L(_e,T,G),q&&le(y)}(K&&(fe=he&&he.onVnodeUnmounted)||W)&&Tt(()=>{fe&&en(fe,T,y),W&&Wn(y,null,T,"unmounted")},G)},le=y=>{const{type:T,el:G,anchor:q,transition:Y}=y;if(T===rn){xe(G,q);return}if(T===Ss){S(y);return}const ue=()=>{r(G),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:he,delayLeave:ee}=Y,_e=()=>he(G,ue);ee?ee(y.el,ue,_e):_e()}else ue()},xe=(y,T)=>{let G;for(;y!==T;)G=h(y),r(y),y=G;r(T)},D=(y,T,G)=>{const{bum:q,scope:Y,update:ue,subTree:he,um:ee}=y;q&&vs(q),Y.stop(),ue&&(ue.active=!1,z(he,y,T,G)),ee&&Tt(ee,T),Tt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},L=(y,T,G,q=!1,Y=!1,ue=0)=>{for(let he=ue;he<y.length;he++)z(y[he],T,G,q,Y)},Q=y=>y.shapeFlag&6?Q(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),re=(y,T,G)=>{y==null?T._vnode&&z(T._vnode,null,null,!0):d(T._vnode||null,y,T,null,null,null,G),nl(),Cu(),T._vnode=y},ge={p:d,um:z,m:we,r:le,mt:U,mc:b,pc:H,pbc:N,n:Q,o:n};let pe,Se;return e&&([pe,Se]=e(ge)),{render:re,hydrate:pe,createApp:Rd(re,pe)}}function qn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Na(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Pn(r[s]),o.el=a.el),t||Na(a,o)),o.type===Hs&&(o.el=a.el)}}function Id(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Fd=n=>n.__isTeleport,Mr=n=>n&&(n.disabled||n.disabled===""),fl=n=>typeof SVGElement<"u"&&n instanceof SVGElement,na=(n,e)=>{const t=n&&n.to;return dt(t)?e?e(t):null:t},Nd={__isTeleport:!0,process(n,e,t,i,r,s,a,o,l,c){const{mc:u,pc:f,pbc:h,o:{insert:m,querySelector:_,createText:d,createComment:p}}=c,x=Mr(e.props);let{shapeFlag:E,children:v,dynamicChildren:S}=e;if(n==null){const C=e.el=d(""),R=e.anchor=d("");m(C,t,i),m(R,t,i);const F=e.target=na(e.props,_),b=e.targetAnchor=d("");F&&(m(b,F),a=a||fl(F));const A=(N,ie)=>{E&16&&u(v,N,ie,r,s,a,o,l)};x?A(t,R):F&&A(F,b)}else{e.el=n.el;const C=e.anchor=n.anchor,R=e.target=n.target,F=e.targetAnchor=n.targetAnchor,b=Mr(n.props),A=b?t:R,N=b?C:F;if(a=a||fl(R),S?(h(n.dynamicChildren,S,A,r,s,a,o),Na(n,e,!0)):l||f(n,e,A,N,r,s,a,o,!1),x)b||Kr(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const ie=e.target=na(e.props,_);ie&&Kr(e,ie,null,c,0)}else b&&Kr(e,R,F,c,1)}Wu(e)},remove(n,e,t,i,{um:r,o:{remove:s}},a){const{shapeFlag:o,children:l,anchor:c,targetAnchor:u,target:f,props:h}=n;if(f&&s(u),(a||!Mr(h))&&(s(c),o&16))for(let m=0;m<l.length;m++){const _=l[m];r(_,e,t,!0,!!_.dynamicChildren)}},move:Kr,hydrate:Od};function Kr(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(a,e,t),(!f||Mr(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,t,2);f&&i(o,e,t)}function Od(n,e,t,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l}},c){const u=e.target=na(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Mr(e.props))e.anchor=c(a(n),e,o(n),t,i,r,s),e.targetAnchor=f;else{e.anchor=a(n);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&a(e.targetAnchor);break}c(f,e,u,t,i,r,s)}Wu(e)}return e.anchor&&a(e.anchor)}const py=Nd;function Wu(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const rn=Symbol(void 0),Hs=Symbol(void 0),Cr=Symbol(void 0),Ss=Symbol(void 0),yr=[];let Kt=null;function Qi(n=!1){yr.push(Kt=n?null:[])}function Ud(){yr.pop(),Kt=yr[yr.length-1]||null}let Lr=1;function hl(n){Lr+=n}function zd(n){return n.dynamicChildren=Lr>0?Kt||Ni:null,Ud(),Lr>0&&Kt&&Kt.push(n),n}function er(n,e,t,i,r,s){return zd(Qe(n,e,t,i,r,s,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function rr(n,e){return n.type===e.type&&n.key===e.key}const Ws="__vInternal",qu=({key:n})=>n??null,ws=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||mt(n)||Fe(n)?{i:Ht,r:n,k:e,f:!!t}:n:null;function Qe(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qu(e),ref:e&&ws(e),scopeId:Gs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return o?(Oa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Lr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const et=Bd;function Bd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gd)&&(n=Cr),ia(n)){const o=Gi(n,e,!0);return t&&Oa(o,t),Lr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag|=-2,o}if(Kd(n)&&(n=n.__vccOpts),e){e=kd(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=Fn(o)),tt(l)&&(_u(l)&&!Ie(l)&&(l=Et({},l)),e.style=_a(l))}const a=dt(n)?1:ed(n)?128:Fd(n)?64:tt(n)?4:Fe(n)?2:0;return Qe(n,e,t,i,r,a,s,!0)}function kd(n){return n?_u(n)||Ws in n?Et({},n):n:null}function Gi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Gd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&qu(o),ref:e&&e.ref?t&&r?Ie(r)?r.concat(ws(e)):[r,ws(e)]:ws(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gi(n.ssContent),ssFallback:n.ssFallback&&Gi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function Es(n=" ",e=0){return et(Hs,null,n,e)}function Xu(n,e){const t=et(Ss,null,n);return t.staticCount=e,t}function sn(n){return n==null||typeof n=="boolean"?et(Cr):Ie(n)?et(rn,null,n.slice()):typeof n=="object"?Pn(n):et(Hs,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Gi(n)}function Oa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ws in e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),i&64?(t=16,e=[Es(e)]):t=8);n.children=e,n.shapeFlag|=t}function Gd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Fn([e.class,i.class]));else if(r==="style")e.style=_a([e.style,i.style]);else if(Fs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function en(n,e,t,i=null){Jt(n,e,7,[t,i])}const Vd=Hu();let Hd=0;function Wd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Vd,s={uid:Hd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bu(i,r),emitsOptions:Ru(i,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:i.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Yh.bind(null,s),n.ce&&n.ce(s),s}let pt=null;const Vi=n=>{pt=n,n.scope.on()},si=()=>{pt&&pt.scope.off(),pt=null};function ju(n){return n.vnode.shapeFlag&4}let Rr=!1;function qd(n,e=!1){Rr=e;const{props:t,children:i}=n.vnode,r=ju(n);wd(n,t,r,e),Ad(n,i);const s=r?Xd(n,e):void 0;return Rr=!1,s}function Xd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=xu(new Proxy(n.ctx,xd));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?$d(n):null;Vi(n),Ki();const s=On(i,n,0,[n.props,r]);if(Zi(),si(),su(s)){if(s.then(si,si),e)return s.then(a=>{dl(n,a,e)}).catch(a=>{Bs(a,n,0)});n.asyncDep=s}else dl(n,s,e)}else $u(n,e)}function dl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Su(e)),$u(n,t)}let pl;function $u(n,e,t){const i=n.type;if(!n.render){if(!e&&pl&&!i.render){const r=i.template||Ia(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Et(Et({isCustomElement:s,delimiters:o},a),l);i.render=pl(r,c)}}n.render=i.render||Zt}Vi(n),Ki(),vd(n),Zi(),si()}function jd(n){return new Proxy(n.attrs,{get(e,t){return Ut(n,"get","$attrs"),e[t]}})}function $d(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=jd(n))},slots:n.slots,emit:n.emit,expose:e}}function qs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Su(xu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vr)return vr[t](n)},has(e,t){return t in e||t in vr}}))}function Yd(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function Kd(n){return Fe(n)&&"__vccOpts"in n}const Gt=(n,e)=>Hh(n,e,Rr);function Yu(n,e,t){const i=arguments.length;return i===2?tt(e)&&!Ie(e)?ia(e)?et(n,null,[e]):et(n,e):et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ia(t)&&(t=[t]),et(n,e,t))}const Zd=Symbol(""),Jd=()=>yn(Zd),Qd="3.2.45",ep="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,ml=Qn&&Qn.createElement("template"),tp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Qn.createElementNS(ep,n):Qn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qn.createTextNode(n),createComment:n=>Qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ml.innerHTML=i?`<svg>${n}</svg>`:n;const o=ml.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function np(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function ip(n,e,t){const i=n.style,r=dt(t);if(t&&!r){for(const s in t)ra(i,s,t[s]);if(e&&!dt(e))for(const s in e)t[s]==null&&ra(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const gl=/\s*!important$/;function ra(n,e,t){if(Ie(t))t.forEach(i=>ra(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rp(n,e);gl.test(t)?n.setProperty(Yi(i),t.replace(gl,""),"important"):n[i]=t}}const _l=["Webkit","Moz","ms"],ro={};function rp(n,e){const t=ro[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return ro[e]=i;i=Us(i);for(let r=0;r<_l.length;r++){const s=_l[r]+i;if(s in n)return ro[e]=s}return e}const xl="http://www.w3.org/1999/xlink";function sp(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(xl,e.slice(6,e.length)):n.setAttributeNS(xl,e,t);else{const s=Jf(e);t==null||s&&!ru(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function op(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=ru(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Li(n,e,t,i){n.addEventListener(e,t,i)}function ap(n,e,t,i){n.removeEventListener(e,t,i)}function lp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=cp(e);if(i){const c=s[e]=hp(i,r);Li(n,o,c,l)}else a&&(ap(n,o,a,l),s[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function cp(n){let e;if(vl.test(n)){e={};let i;for(;i=n.match(vl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Yi(n.slice(2)),e]}let so=0;const up=Promise.resolve(),fp=()=>so||(up.then(()=>so=0),so=Date.now());function hp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jt(dp(i,t.value),e,5,[i])};return t.value=n,t.attached=fp(),t}function dp(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ml=/^on[a-z]/,pp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?np(n,i,r):e==="style"?ip(n,t,i):Fs(e)?xa(e)||lp(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mp(n,e,i,r))?op(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sp(n,e,i,r))};function mp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Ml.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Ml.test(e)&&dt(t)?!1:e in n}const yl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>vs(e,t):e};function gp(n){n.target.composing=!0}function bl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const my={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=yl(r);const s=i||r.props&&r.props.type==="number";Li(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=Ls(o)),n._assign(o)}),t&&Li(n,"change",()=>{n.value=n.value.trim()}),e||(Li(n,"compositionstart",gp),Li(n,"compositionend",bl),Li(n,"change",bl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=yl(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&Ls(n.value)===e))return;const a=e??"";n.value!==a&&(n.value=a)}},_p={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):sr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),sr(n,!0),i.enter(n)):i.leave(n,()=>{sr(n,!1)}):sr(n,e))},beforeUnmount(n,{value:e}){sr(n,e)}};function sr(n,e){n.style.display=e?n._vod:"none"}const xp=Et({patchProp:pp},tp);let Sl;function vp(){return Sl||(Sl=Pd(xp))}const Mp=(...n)=>{const e=vp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function yp(n){return dt(n)?document.querySelector(n):n}const Ku="/zzemalStudio/assets/darlyIcon-22d123f4.png";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ri=typeof window<"u";function bp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function oo(n,e){const t={};for(const i in e){const r=e[i];t[i]=Qt(r)?r.map(n):n(r)}return t}const br=()=>{},Qt=Array.isArray,Sp=/\/$/,wp=n=>n.replace(Sp,"");function ao(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Cp(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Ep(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function wl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Tp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Hi(e.matched[i],t.matched[r])&&Zu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Hi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Zu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ap(n[t],e[t]))return!1;return!0}function Ap(n,e){return Qt(n)?El(n,e):Qt(e)?El(e,n):n===e}function El(n,e){return Qt(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Cp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Pr;(function(n){n.pop="pop",n.push="push"})(Pr||(Pr={}));var Sr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Sr||(Sr={}));function Lp(n){if(!n)if(Ri){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),wp(n)}const Rp=/^[^#]+#/;function Pp(n,e){return n.replace(Rp,"#")+e}function Dp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Xs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ip(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Dp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tl(n,e){return(history.state?history.state.position-e:-1)+n}const sa=new Map;function Fp(n,e){sa.set(n,e)}function Np(n){const e=sa.get(n);return sa.delete(n),e}let Op=()=>location.protocol+"//"+location.host;function Ju(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),wl(l,"")}return wl(t,n)+i+r}function Up(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Ju(n,location),_=t.value,d=e.value;let p=0;if(h){if(t.value=m,e.value=h,a&&a===_){a=null;return}p=d?h.position-d.position:0}else i(m);r.forEach(x=>{x(t.value,_,{delta:p,type:Pr.pop,direction:p?p>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Xe({},h.state,{scroll:Xs()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Al(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Xs():null}}function zp(n){const{history:e,location:t}=window,i={value:Ju(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Op()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Xe({},e.state,Al(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Xe({},r.value,e.state,{forward:l,scroll:Xs()});s(u.current,u,!0);const f=Xe({},Al(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Bp(n){n=Lp(n);const e=zp(n),t=Up(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Xe({location:"",base:n,go:i,createHref:Pp.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function kp(n){return typeof n=="string"||n&&typeof n=="object"}function Qu(n){return typeof n=="string"||typeof n=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ef=Symbol("");var Cl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Cl||(Cl={}));function Wi(n,e){return Xe(new Error,{type:n,[ef]:!0},e)}function hn(n,e){return n instanceof Error&&ef in n&&(e==null||!!(n.type&e))}const Ll="[^/]+?",Gp={sensitive:!1,strict:!1,start:!0,end:!0},Vp=/[.+*?^${}()[\]/\\]/g;function Hp(n,e){const t=Xe({},Gp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Vp,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:d,optional:p,regexp:x}=h;s.push({name:_,repeatable:d,optional:p});const E=x||Ll;if(E!==Ll){m+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+S.message)}}let v=d?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(v=p&&c.length<2?`(?:/${v})`:"/"+v),p&&(v+="?"),r+=v,m+=20,p&&(m+=-8),d&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=s[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:d,optional:p}=m,x=_ in c?c[_]:"";if(Qt(x)&&!d)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=Qt(x)?x.join("/"):x;if(!E)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Wp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Wp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Rl(i))return 1;if(Rl(r))return-1}return r.length-i.length}function Rl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Xp={type:0,value:""},jp=/[a-zA-Z0-9_]/;function $p(n){if(!n)return[[]];if(n==="/")return[[Xp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:jp.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Yp(n,e,t){const i=Hp($p(n.path),t),r=Xe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Kp(n,e){const t=[],i=new Map;e=Il({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,_=Zp(u);_.aliasOf=h&&h.record;const d=Il(e,u),p=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)p.push(Xe({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let x,E;for(const v of p){const{path:S}=v;if(f&&S[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";v.path=f.record.path+(S&&R+S)}if(x=Yp(v,f,d),h?h.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),m&&u.name&&!Dl(x)&&a(u.name)),_.children){const C=_.children;for(let R=0;R<C.length;R++)s(C[R],x,h&&h.children[R])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return E?()=>{a(E)}:br}function a(u){if(Qu(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&qp(u,t[f])>=0&&(u.record.path!==t[f].record.path||!tf(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Dl(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},_,d;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Wi(1,{location:u});d=h.record.name,m=Xe(Pl(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Pl(u.params,h.keys.map(E=>E.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=t.find(E=>E.re.test(_)),h&&(m=h.parse(_),d=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw Wi(1,{location:u,currentLocation:f});d=h.record.name,m=Xe({},f.params,u.params),_=h.stringify(m)}const p=[];let x=h;for(;x;)p.unshift(x.record),x=x.parent;return{name:d,path:_,params:m,matched:p,meta:Qp(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function Pl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Zp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Jp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Jp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Dl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qp(n){return n.reduce((e,t)=>Xe(e,t.meta),{})}function Il(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function tf(n,e){return e.children.some(t=>t===n||tf(n,t))}const nf=/#/g,em=/&/g,tm=/\//g,nm=/=/g,im=/\?/g,rf=/\+/g,rm=/%5B/g,sm=/%5D/g,sf=/%5E/g,om=/%60/g,of=/%7B/g,am=/%7C/g,af=/%7D/g,lm=/%20/g;function Ua(n){return encodeURI(""+n).replace(am,"|").replace(rm,"[").replace(sm,"]")}function cm(n){return Ua(n).replace(of,"{").replace(af,"}").replace(sf,"^")}function oa(n){return Ua(n).replace(rf,"%2B").replace(lm,"+").replace(nf,"%23").replace(em,"%26").replace(om,"`").replace(of,"{").replace(af,"}").replace(sf,"^")}function um(n){return oa(n).replace(nm,"%3D")}function fm(n){return Ua(n).replace(nf,"%23").replace(im,"%3F")}function hm(n){return n==null?"":fm(n).replace(tm,"%2F")}function Is(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function dm(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(rf," "),a=s.indexOf("="),o=Is(a<0?s:s.slice(0,a)),l=a<0?null:Is(s.slice(a+1));if(o in e){let c=e[o];Qt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Fl(n){let e="";for(let t in n){const i=n[t];if(t=um(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Qt(i)?i.map(s=>s&&oa(s)):[i&&oa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function pm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Qt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mm=Symbol(""),Nl=Symbol(""),za=Symbol(""),lf=Symbol(""),aa=Symbol("");function or(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Dn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Wi(4,{from:t,to:e})):f instanceof Error?o(f):kp(f)?o(Wi(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function lo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(gm(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Dn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=bp(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Dn(h,t,i,s,a)()}))}}return r}function gm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ol(n){const e=yn(za),t=yn(lf),i=Gt(()=>e.resolve(Vt(n.to))),r=Gt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hi.bind(null,u));if(h>-1)return h;const m=Ul(l[c-2]);return c>1&&Ul(u)===m&&f[f.length-1].path!==m?f.findIndex(Hi.bind(null,l[c-2])):h}),s=Gt(()=>r.value>-1&&vm(t.params,i.value.params)),a=Gt(()=>r.value>-1&&r.value===t.matched.length-1&&Zu(t.params,i.value.params));function o(l={}){return xm(l)?e[Vt(n.replace)?"replace":"push"](Vt(n.to)).catch(br):Promise.resolve()}return{route:i,href:Gt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const _m=Ji({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ol,setup(n,{slots:e}){const t=Or(Ol(n)),{options:i}=yn(za),r=Gt(()=>({[zl(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[zl(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Yu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Ii=_m;function xm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vm(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Qt(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Ul(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const zl=(n,e,t)=>n??e??t,Mm=Ji({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=yn(aa),r=Gt(()=>n.route||i.value),s=yn(Nl,0),a=Gt(()=>{let c=Vt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Gt(()=>r.value.matched[a.value]);Ms(Nl,Gt(()=>a.value+1)),Ms(mm,o),Ms(aa,r);const l=yu();return ys(()=>[l.value,o.value,n.name],([c,u,f],[h,m,_])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Hi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Bl(t.default,{Component:h,route:c});const m=f.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=Yu(h,Xe({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Bl(t.default,{Component:p,route:c})||p}}});function Bl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cf=Mm;function ym(n){const e=Kp(n.routes,n),t=n.parseQuery||dm,i=n.stringifyQuery||Fl,r=n.history,s=or(),a=or(),o=or(),l=Uh(Tn);let c=Tn;Ri&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oo.bind(null,D=>""+D),f=oo.bind(null,hm),h=oo.bind(null,Is);function m(D,L){let Q,re;return Qu(D)?(Q=e.getRecordMatcher(D),re=L):re=D,e.addRoute(re,Q)}function _(D){const L=e.getRecordMatcher(D);L&&e.removeRoute(L)}function d(){return e.getRoutes().map(D=>D.record)}function p(D){return!!e.getRecordMatcher(D)}function x(D,L){if(L=Xe({},L||l.value),typeof D=="string"){const y=ao(t,D,L.path),T=e.resolve({path:y.path},L),G=r.createHref(y.fullPath);return Xe(y,T,{params:h(T.params),hash:Is(y.hash),redirectedFrom:void 0,href:G})}let Q;if("path"in D)Q=Xe({},D,{path:ao(t,D.path,L.path).path});else{const y=Xe({},D.params);for(const T in y)y[T]==null&&delete y[T];Q=Xe({},D,{params:f(D.params)}),L.params=f(L.params)}const re=e.resolve(Q,L),ge=D.hash||"";re.params=u(h(re.params));const pe=Ep(i,Xe({},D,{hash:cm(ge),path:re.path})),Se=r.createHref(pe);return Xe({fullPath:pe,hash:ge,query:i===Fl?pm(D.query):D.query||{}},re,{redirectedFrom:void 0,href:Se})}function E(D){return typeof D=="string"?ao(t,D,l.value.path):Xe({},D)}function v(D,L){if(c!==D)return Wi(8,{from:L,to:D})}function S(D){return F(D)}function C(D){return S(Xe(E(D),{replace:!0}))}function R(D){const L=D.matched[D.matched.length-1];if(L&&L.redirect){const{redirect:Q}=L;let re=typeof Q=="function"?Q(D):Q;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=E(re):{path:re},re.params={}),Xe({query:D.query,hash:D.hash,params:"path"in re?{}:D.params},re)}}function F(D,L){const Q=c=x(D),re=l.value,ge=D.state,pe=D.force,Se=D.replace===!0,y=R(Q);if(y)return F(Xe(E(y),{state:typeof y=="object"?Xe({},ge,y.state):ge,force:pe,replace:Se}),L||Q);const T=Q;T.redirectedFrom=L;let G;return!pe&&Tp(i,re,Q)&&(G=Wi(16,{to:T,from:re}),ae(re,re,!0,!1)),(G?Promise.resolve(G):A(T,re)).catch(q=>hn(q)?hn(q,2)?q:ce(q):ne(q,T,re)).then(q=>{if(q){if(hn(q,2))return F(Xe({replace:Se},E(q.to),{state:typeof q.to=="object"?Xe({},ge,q.to.state):ge,force:pe}),L||T)}else q=ie(T,re,!0,Se,ge);return N(T,re,q),q})}function b(D,L){const Q=v(D,L);return Q?Promise.reject(Q):Promise.resolve()}function A(D,L){let Q;const[re,ge,pe]=bm(D,L);Q=lo(re.reverse(),"beforeRouteLeave",D,L);for(const y of re)y.leaveGuards.forEach(T=>{Q.push(Dn(T,D,L))});const Se=b.bind(null,D,L);return Q.push(Se),pi(Q).then(()=>{Q=[];for(const y of s.list())Q.push(Dn(y,D,L));return Q.push(Se),pi(Q)}).then(()=>{Q=lo(ge,"beforeRouteUpdate",D,L);for(const y of ge)y.updateGuards.forEach(T=>{Q.push(Dn(T,D,L))});return Q.push(Se),pi(Q)}).then(()=>{Q=[];for(const y of D.matched)if(y.beforeEnter&&!L.matched.includes(y))if(Qt(y.beforeEnter))for(const T of y.beforeEnter)Q.push(Dn(T,D,L));else Q.push(Dn(y.beforeEnter,D,L));return Q.push(Se),pi(Q)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),Q=lo(pe,"beforeRouteEnter",D,L),Q.push(Se),pi(Q))).then(()=>{Q=[];for(const y of a.list())Q.push(Dn(y,D,L));return Q.push(Se),pi(Q)}).catch(y=>hn(y,8)?y:Promise.reject(y))}function N(D,L,Q){for(const re of o.list())re(D,L,Q)}function ie(D,L,Q,re,ge){const pe=v(D,L);if(pe)return pe;const Se=L===Tn,y=Ri?history.state:{};Q&&(re||Se?r.replace(D.fullPath,Xe({scroll:Se&&y&&y.scroll},ge)):r.push(D.fullPath,ge)),l.value=D,ae(D,L,Q,Se),ce()}let oe;function V(){oe||(oe=r.listen((D,L,Q)=>{if(!xe.listening)return;const re=x(D),ge=R(re);if(ge){F(Xe(ge,{replace:!0}),re).catch(br);return}c=re;const pe=l.value;Ri&&Fp(Tl(pe.fullPath,Q.delta),Xs()),A(re,pe).catch(Se=>hn(Se,12)?Se:hn(Se,2)?(F(Se.to,re).then(y=>{hn(y,20)&&!Q.delta&&Q.type===Pr.pop&&r.go(-1,!1)}).catch(br),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),ne(Se,re,pe))).then(Se=>{Se=Se||ie(re,pe,!1),Se&&(Q.delta&&!hn(Se,8)?r.go(-Q.delta,!1):Q.type===Pr.pop&&hn(Se,20)&&r.go(-1,!1)),N(re,pe,Se)}).catch(br)}))}let U=or(),J=or(),te;function ne(D,L,Q){ce(D);const re=J.list();return re.length?re.forEach(ge=>ge(D,L,Q)):console.error(D),Promise.reject(D)}function H(){return te&&l.value!==Tn?Promise.resolve():new Promise((D,L)=>{U.add([D,L])})}function ce(D){return te||(te=!D,V(),U.list().forEach(([L,Q])=>D?Q(D):L()),U.reset()),D}function ae(D,L,Q,re){const{scrollBehavior:ge}=n;if(!Ri||!ge)return Promise.resolve();const pe=!Q&&Np(Tl(D.fullPath,0))||(re||!Q)&&history.state&&history.state.scroll||null;return Tu().then(()=>ge(D,L,pe)).then(Se=>Se&&Ip(Se)).catch(Se=>ne(Se,D,L))}const we=D=>r.go(D);let z;const le=new Set,xe={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:p,getRoutes:d,resolve:x,options:n,push:S,replace:C,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:J.add,isReady:H,install(D){const L=this;D.component("RouterLink",Ii),D.component("RouterView",cf),D.config.globalProperties.$router=L,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(l)}),Ri&&!z&&l.value===Tn&&(z=!0,S(r.location).catch(ge=>{}));const Q={};for(const ge in Tn)Q[ge]=Gt(()=>l.value[ge]);D.provide(za,L),D.provide(lf,Or(Q)),D.provide(aa,l);const re=D.unmount;le.add(D),D.unmount=function(){le.delete(D),le.size<1&&(c=Tn,oe&&oe(),oe=null,l.value=Tn,z=!1,te=!1),re()}}};return xe}function pi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function bm(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Hi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Hi(c,l))||r.push(l))}return[t,i,r]}const Sm={id:"Group1"},wm=Ji({__name:"HamburgurIcon",props:{showMenu:Boolean},emits:["toggleMenu"],setup(n,{emit:e}){const t=()=>{e("toggleMenu")};return(i,r)=>(Qi(),er("svg",{width:"22",height:"17",viewBox:"0 0 22 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:t,class:"hamburgurIcon"},[Qe("g",Sm,[Qe("line",{id:"Line2",x1:"1.5",y1:"8.5",x2:"20.5",y2:"8.5",stroke:"white","stroke-width":"3","stroke-linecap":"round",class:Fn([{changed1:n.showMenu}])},null,2),Qe("line",{id:"Line3",x1:"1.5",y1:"15.5",x2:"20.5",y2:"15.5",stroke:"white","stroke-width":"3","stroke-linecap":"round",class:Fn([{changed2:n.showMenu}])},null,2),Qe("line",{id:"Line1",x1:"1.59091",y1:"1.5",x2:"20.4091",y2:"1.5",stroke:"white","stroke-width":"3","stroke-linecap":"round",class:Fn([{changed3:n.showMenu}])},null,2)])]))}});const uf="/zzemalStudio/assets/instaIcon-6c493286.png",ff="/zzemalStudio/assets/kakaoChIcon-19990394.png",Em=n=>(Pa("data-v-a6a1be8d"),n=n(),Da(),n),Tm=Em(()=>Qe("img",{src:Ku,class:"darlyIcon"},null,-1)),Am=Xu('<li class="nav__li--last" data-v-a6a1be8d><a href="https://www.instagram.com/studio.darly/" target="_blank" data-v-a6a1be8d><img src="'+uf+'" class="IconSize" data-v-a6a1be8d><span data-v-a6a1be8d> DARLY</span></a><br data-v-a6a1be8d><a href="https://pf.kakao.com/_yxngWxj" target="_blank" data-v-a6a1be8d><img src="'+ff+'" class="IconSize" data-v-a6a1be8d> 카카오채널(1:1문의) </a></li>',1),Cm=Ji({__name:"MenuLayer",props:{showMenu:Boolean},emits:["toggleMenu"],setup(n,{emit:e}){const t=()=>{e("toggleMenu")};return(i,r)=>(Qi(),er(rn,null,[Qe("ul",{class:Fn(["nav__ul",{active:n.showMenu}])},[Qe("li",null,[et(Vt(Ii),{to:"/",onClick:t},{default:Di(()=>[Tm]),_:1})]),Qe("li",null,[et(Vt(Ii),{to:"/reserve",onClick:t},{default:Di(()=>[Es("예약 안내")]),_:1})]),Qe("li",null,[et(Vt(Ii),{to:"/reserveWrite",onClick:t},{default:Di(()=>[Es("예약 신청")]),_:1})]),Qe("li",null,[et(Vt(Ii),{to:"/location",onClick:t},{default:Di(()=>[Es("오시는길")]),_:1})]),Am],2),Qe("div",{class:Fn(["nav__background",{active:n.showMenu}])},null,2)],64))}});const Ur=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Lm=Ur(Cm,[["__scopeId","data-v-a6a1be8d"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="149",Rm=0,kl=1,Pm=2,hf=1,Dm=2,gr=3,Bn=0,Ot=1,In=2,Un=0,zi=1,Gl=2,Vl=3,Hl=4,Im=5,Pi=100,Fm=101,Nm=102,Wl=103,ql=104,Om=200,Um=201,zm=202,Bm=203,df=204,pf=205,km=206,Gm=207,Vm=208,Hm=209,Wm=210,qm=0,Xm=1,jm=2,la=3,$m=4,Ym=5,Km=6,Zm=7,ka=0,Jm=1,Qm=2,bn=0,eg=1,tg=2,ng=3,ig=4,rg=5,mf=300,qi=301,Xi=302,ca=303,ua=304,js=306,fa=1e3,$t=1001,ha=1002,wt=1003,Xl=1004,co=1005,kt=1006,sg=1007,Dr=1008,ci=1009,og=1010,ag=1011,gf=1012,lg=1013,ni=1014,ii=1015,Ir=1016,cg=1017,ug=1018,Bi=1020,fg=1021,Yt=1023,hg=1024,dg=1025,oi=1026,ji=1027,pg=1028,mg=1029,gg=1030,_g=1031,xg=1033,uo=33776,fo=33777,ho=33778,po=33779,jl=35840,$l=35841,Yl=35842,Kl=35843,vg=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,fc=37820,hc=37821,mo=36492,Mg=36283,dc=36284,pc=36285,mc=36286,ui=3e3,Ye=3001,yg=3200,bg=3201,_f=0,Sg=1,nn="srgb",Fr="srgb-linear",go=7680,wg=519,gc=35044,_c="300 es",da=1035;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,xc=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Eg(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function vc(n){return(n&n-1)===0&&n!==0}function pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],d=r[0],p=r[3],x=r[6],E=r[1],v=r[4],S=r[7],C=r[2],R=r[5],F=r[8];return s[0]=a*d+o*E+l*C,s[3]=a*p+o*v+l*R,s[6]=a*x+o*S+l*F,s[1]=c*d+u*E+f*C,s[4]=c*p+u*v+f*R,s[7]=c*x+u*S+f*F,s[2]=h*d+m*E+_*C,s[5]=h*p+m*v+_*R,s[8]=h*x+m*S+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=f*d,e[1]=(r*c-u*i)*d,e[2]=(o*i-r*a)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-o*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(a*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Nt;function xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Mo={[nn]:{[Fr]:ai},[Fr]:{[nn]:Ts}},yt={legacyMode:!0,get workingColorSpace(){return Fr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Mo[e]&&Mo[e][t]!==void 0){const i=Mo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},Wt={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Qr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=Eg(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=yo(a,s,e+1/3),this.g=yo(a,s,e),this.b=yo(a,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=nn){const i=vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return yt.fromWorkingColorSpace(Qr(this,ot),e),It(ot.r*255,0,255)<<16^It(ot.g*255,0,255)<<8^It(ot.b*255,0,255)<<0}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Qr(this,ot),t);const i=ot.r,r=ot.g,s=ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Qr(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=nn){return yt.fromWorkingColorSpace(Qr(this,ot),e),e!==nn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Jr);const i=xo(Wt.h,Jr.h,t),r=xo(Wt.s,Jr.s,t),s=xo(Wt.l,Jr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=vf;let mi;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Nr("canvas")),mi.width=e.width,mi.height=e.height;const i=mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yf{constructor(e=null){this.isSource=!0,this.uuid=zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bo(r[a].image)):s.push(bo(r[a]))}else s=bo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tg=0;class At extends tr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=$t,r=$t,s=kt,a=Dr,o=Yt,l=ci,c=At.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=zr(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=mf;At.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],d=l[2],p=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,C=(x+1)/2,R=(u+h)/4,F=(f+d)/4,b=(_+p)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=F/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=F/s,r=b/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-d)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends tr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new At(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bf extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==_){let p=1-o;const x=l*h+c*m+u*_+f*d,E=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,x*E);p=Math.sin(p*R)/C,o=Math.sin(o*R)/C}const S=o*E;if(l=l*p+h*S,c=c*p+m*S,u=u*p+_*S,f=f*p+d*S,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new B,Mc=new Br;class kr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Xn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox),wo.applyMatrix4(e.matrixWorld),this.union(wo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),es.subVectors(this.max,ar),gi.subVectors(e.a,ar),_i.subVectors(e.b,ar),xi.subVectors(e.c,ar),An.subVectors(_i,gi),Cn.subVectors(xi,_i),jn.subVectors(gi,xi);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-jn.z,jn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,jn.z,0,-jn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-jn.y,jn.x,0];return!Eo(t,gi,_i,xi,es)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,gi,_i,xi,es))?!1:(ts.crossVectors(An,Cn),t=[ts.x,ts.y,ts.z],Eo(t,gi,_i,xi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new B,new B,new B,new B,new B,new B,new B,new B],Xn=new B,wo=new kr,gi=new B,_i=new B,xi=new B,An=new B,Cn=new B,jn=new B,ar=new B,es=new B,ts=new B,$n=new B;function Eo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$n.fromArray(n,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=i.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Cg=new kr,lr=new B,To=new B;class Ga{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(To)),this.expandByPoint(lr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new B,Ao=new B,ns=new B,Ln=new B,Co=new B,is=new B,Lo=new B;class Lg{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.direction).multiplyScalar(t).add(this.origin),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ao.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Ao);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=Ln.dot(this.direction),l=-Ln.dot(ns),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ns).multiplyScalar(h).add(Ao),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),is.subVectors(i,e),Lo.crossVectors(Co,is);let a=this.direction.dot(Lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(Ln,is));if(l<0)return null;const c=o*this.direction.dot(Co.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(Lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=m,x[7]=_,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,d=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-d*c,t[9]=-o*l,t[2]=d-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h+d*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=d+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h-d*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=d-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,d=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=d-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Pg)}lookAt(e,t,i){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Rn.crossVectors(i,Pt),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Rn.crossVectors(i,Pt)),Rn.normalize(),rs.crossVectors(Pt,Rn),r[0]=Rn.x,r[4]=rs.x,r[8]=Pt.x,r[1]=Rn.y,r[5]=rs.y,r[9]=Pt.y,r[2]=Rn.z,r[6]=rs.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],d=i[6],p=i[10],x=i[14],E=i[3],v=i[7],S=i[11],C=i[15],R=r[0],F=r[4],b=r[8],A=r[12],N=r[1],ie=r[5],oe=r[9],V=r[13],U=r[2],J=r[6],te=r[10],ne=r[14],H=r[3],ce=r[7],ae=r[11],we=r[15];return s[0]=a*R+o*N+l*U+c*H,s[4]=a*F+o*ie+l*J+c*ce,s[8]=a*b+o*oe+l*te+c*ae,s[12]=a*A+o*V+l*ne+c*we,s[1]=u*R+f*N+h*U+m*H,s[5]=u*F+f*ie+h*J+m*ce,s[9]=u*b+f*oe+h*te+m*ae,s[13]=u*A+f*V+h*ne+m*we,s[2]=_*R+d*N+p*U+x*H,s[6]=_*F+d*ie+p*J+x*ce,s[10]=_*b+d*oe+p*te+x*ae,s[14]=_*A+d*V+p*ne+x*we,s[3]=E*R+v*N+S*U+C*H,s[7]=E*F+v*ie+S*J+C*ce,s[11]=E*b+v*oe+S*te+C*ae,s[15]=E*A+v*V+S*ne+C*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],d=e[7],p=e[11],x=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+d*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+x*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],d=e[13],p=e[14],x=e[15],E=f*p*c-d*h*c+d*l*m-o*p*m-f*l*x+o*h*x,v=_*h*c-u*p*c-_*l*m+a*p*m+u*l*x-a*h*x,S=u*d*c-_*f*c+_*o*m-a*d*m-u*o*x+a*f*x,C=_*f*l-u*d*l-_*o*h+a*d*h+u*o*p-a*f*p,R=t*E+i*v+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=E*F,e[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*x-i*h*x)*F,e[2]=(o*p*s-d*l*s+d*r*c-i*p*c-o*r*x+i*l*x)*F,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*F,e[4]=v*F,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*x+t*h*x)*F,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*x-t*l*x)*F,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*F,e[8]=S*F,e[9]=(_*f*s-u*d*s-_*i*m+t*d*m+u*i*x-t*f*x)*F,e[10]=(a*d*s-_*o*s+_*i*c-t*d*c-a*i*x+t*o*x)*F,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*F,e[12]=C*F,e[13]=(u*d*r-_*f*r+_*i*h-t*d*h-u*i*p+t*f*p)*F,e[14]=(_*o*r-a*d*r-_*i*l+t*d*l+a*i*p-t*o*p)*F,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,d=a*u,p=a*f,x=o*f,E=l*c,v=l*u,S=l*f,C=i.x,R=i.y,F=i.z;return r[0]=(1-(d+x))*C,r[1]=(m+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+x))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(_+v)*F,r[9]=(p-E)*F,r[10]=(1-(h+d))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/a,f=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vi=new B,qt=new st,Rg=new B(0,0,0),Pg=new B(1,1,1),Rn=new B,rs=new B,Pt=new B,yc=new st,bc=new Br;class $s{constructor(e=0,t=0,i=0,r=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dg=0;const Sc=new B,Mi=new Br,mn=new st,ss=new B,cr=new B,Ig=new B,Fg=new Br,wc=new B(1,0,0),Ec=new B(0,1,0),Tc=new B(0,0,1),Ng={type:"added"},Ac={type:"removed"};class vt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new B,t=new $s,i=new Br,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Nt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ss.copy(e):ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(cr,ss,this.up):mn.lookAt(ss,cr,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(mn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new B(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new B,gn=new B,Ro=new B,_n=new B,yi=new B,bi=new B,Cc=new B,Po=new B,Do=new B,Io=new B;class vn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),gn.subVectors(i,t),Ro.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(gn),l=Xt.dot(Ro),c=gn.dot(gn),u=gn.dot(Ro),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_n),l.set(0,0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),gn.subVectors(e,t),Xt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Xt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return vn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;yi.subVectors(r,i),bi.subVectors(s,i),Po.subVectors(e,i);const l=yi.dot(Po),c=bi.dot(Po);if(l<=0&&c<=0)return t.copy(i);Do.subVectors(e,r);const u=yi.dot(Do),f=bi.dot(Do);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(yi,a);Io.subVectors(e,s);const m=yi.dot(Io),_=bi.dot(Io);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(bi,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Cc.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(Cc,o);const x=1/(p+d+h);return a=d*x,o=h*x,t.copy(i).addScaledVector(yi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Og=0;class Gr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=zi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=df,this.blendDst=pf,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wf extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new B,os=new qe;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ef extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tf extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ug=0;const Bt=new st,Fo=new vt,Si=new B,Dt=new kr,ur=new kr,ht=new B;class di extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?Tf:Ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Dt.min,ur.min),Dt.expandByPoint(ht),ht.addVectors(Dt.max,ur.max),Dt.expandByPoint(ht)):(Dt.expandByPoint(ur.min),Dt.expandByPoint(ur.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),ht.add(Si)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new B,u[N]=new B;const f=new B,h=new B,m=new B,_=new qe,d=new qe,p=new qe,x=new B,E=new B;function v(N,ie,oe){f.fromArray(r,N*3),h.fromArray(r,ie*3),m.fromArray(r,oe*3),_.fromArray(a,N*2),d.fromArray(a,ie*2),p.fromArray(a,oe*2),h.sub(f),m.sub(f),d.sub(_),p.sub(_);const V=1/(d.x*p.y-p.x*d.y);isFinite(V)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(V),E.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(V),c[N].add(x),c[ie].add(x),c[oe].add(x),u[N].add(E),u[ie].add(E),u[oe].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let N=0,ie=S.length;N<ie;++N){const oe=S[N],V=oe.start,U=oe.count;for(let J=V,te=V+U;J<te;J+=3)v(i[J+0],i[J+1],i[J+2])}const C=new B,R=new B,F=new B,b=new B;function A(N){F.fromArray(s,N*3),b.copy(F);const ie=c[N];C.copy(ie),C.sub(F.multiplyScalar(F.dot(ie))).normalize(),R.crossVectors(b,ie);const V=R.dot(u[N])<0?-1:1;l[N*4]=C.x,l[N*4+1]=C.y,l[N*4+2]=C.z,l[N*4+3]=V}for(let N=0,ie=S.length;N<ie;++N){const oe=S[N],V=oe.start,U=oe.count;for(let J=V,te=V+U;J<te;J+=3)A(i[J+0]),A(i[J+1]),A(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let x=0;x<u;x++)h[_++]=c[m++]}return new ln(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new st,wi=new Lg,No=new Ga,fr=new B,hr=new B,dr=new B,Oo=new B,as=new B,ls=new qe,cs=new qe,us=new qe,Uo=new B,fs=new B;class Mn extends vt{constructor(e=new di,t=new wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Oo.fromBufferAttribute(f,e),a?as.addScaledVector(Oo,u):as.addScaledVector(Oo.sub(t),u))}t.add(as)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),e.ray.intersectsSphere(No)===!1)||(Lc.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Lc),i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=r[d.materialIndex],x=Math.max(d.start,h.start),E=Math.min(o.count,Math.min(d.start+d.count,h.start+h.count));for(let v=x,S=E;v<S;v+=3){const C=o.getX(v),R=o.getX(v+1),F=o.getX(v+2);a=hs(this,p,e,wi,c,u,C,R,F),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const x=o.getX(d),E=o.getX(d+1),v=o.getX(d+2);a=hs(this,r,e,wi,c,u,x,E,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=r[d.materialIndex],x=Math.max(d.start,h.start),E=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=x,S=E;v<S;v+=3){const C=v,R=v+1,F=v+2;a=hs(this,p,e,wi,c,u,C,R,F),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const x=d,E=d+1,v=d+2;a=hs(this,r,e,wi,c,u,x,E,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function zg(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function hs(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,fr),n.getVertexPosition(o,hr),n.getVertexPosition(l,dr);const c=zg(n,e,t,i,fr,hr,dr,Uo);if(c){r&&(ls.fromBufferAttribute(r,a),cs.fromBufferAttribute(r,o),us.fromBufferAttribute(r,l),c.uv=vn.getUV(Uo,fr,hr,dr,ls,cs,us,new qe)),s&&(ls.fromBufferAttribute(s,a),cs.fromBufferAttribute(s,o),us.fromBufferAttribute(s,l),c.uv2=vn.getUV(Uo,fr,hr,dr,ls,cs,us,new qe));const u={a,b:o,c:l,normal:new B,materialIndex:0};vn.getNormal(fr,hr,dr,u.normal),c.face=u}return c}class Vr extends di{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function _(d,p,x,E,v,S,C,R,F,b,A){const N=S/F,ie=C/b,oe=S/2,V=C/2,U=R/2,J=F+1,te=b+1;let ne=0,H=0;const ce=new B;for(let ae=0;ae<te;ae++){const we=ae*ie-V;for(let z=0;z<J;z++){const le=z*N-oe;ce[d]=le*E,ce[p]=we*v,ce[x]=U,c.push(ce.x,ce.y,ce.z),ce[d]=0,ce[p]=0,ce[x]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(z/F),f.push(1-ae/b),ne+=1}}for(let ae=0;ae<b;ae++)for(let we=0;we<F;we++){const z=h+we+J*ae,le=h+we+J*(ae+1),xe=h+(we+1)+J*(ae+1),D=h+(we+1)+J*ae;l.push(z,le,D),l.push(le,xe,D),H+=6}o.addGroup(m,H,A),m+=H,h+=ne}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const r in i)e[r]=i[r]}return e}function Bg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Af(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?nn:Fr}const kg={clone:$i,merge:St};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cf extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Cf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class Hg extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ft(Ei,Ti,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ft(Ei,Ti,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ft(Ei,Ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ft(Ei,Ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ft(Ei,Ti,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ft(Ei,Ti,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Lf extends At{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wg extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Un});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===Dr&&(t.minFilter=kt),new Hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const zo=new B,qg=new B,Xg=new Nt;class Kn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zo.subVectors(i,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xg.getNormalMatrix(e),r=this.coplanarPoint(zo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ga,ds=new B;class Va{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],_=i[10],d=i[11],p=i[12],x=i[13],E=i[14],v=i[15];return t[0].setComponents(o-r,f-l,d-h,v-p).normalize(),t[1].setComponents(o+r,f+l,d+h,v+p).normalize(),t[2].setComponents(o+s,f+c,d+m,v+x).normalize(),t[3].setComponents(o-s,f-c,d-m,v-x).normalize(),t[4].setComponents(o-a,f-u,d-_,v-E).normalize(),t[5].setComponents(o+a,f+u,d+_,v+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ys extends di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],d=[],p=[];for(let x=0;x<u;x++){const E=x*h-a;for(let v=0;v<c;v++){const S=v*f-s;_.push(S,-E,0),d.push(0,0,1),p.push(v/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<o;E++){const v=E+c*x,S=E+c*(x+1),C=E+1+c*(x+1),R=E+1+c*x;m.push(v,S,R),m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new li(_,3)),this.setAttribute("normal",new li(d,3)),this.setAttribute("uv",new li(p,2))}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var $g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_="vec3 transformed = vec3( position );",t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,l0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,B0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,k0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,G0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,V0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,H0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,W0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:$g,alphamap_pars_fragment:Yg,alphatest_fragment:Kg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:f_,color_vertex:h_,common:d_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:x_,emissivemap_pars_fragment:v_,encodings_fragment:M_,encodings_pars_fragment:y_,envmap_fragment:b_,envmap_common_pars_fragment:S_,envmap_pars_fragment:w_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:T_,fog_vertex:A_,fog_pars_vertex:C_,fog_fragment:L_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_fragment:D_,lightmap_pars_fragment:I_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:N_,lights_pars_begin:O_,lights_toon_fragment:z_,lights_toon_pars_fragment:B_,lights_phong_fragment:k_,lights_phong_pars_fragment:G_,lights_physical_fragment:V_,lights_physical_pars_fragment:H_,lights_fragment_begin:W_,lights_fragment_maps:q_,lights_fragment_end:X_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:K_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphcolor_vertex:i0,morphnormal_vertex:r0,morphtarget_pars_vertex:s0,morphtarget_vertex:o0,normal_fragment_begin:a0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,output_fragment:_0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:y0,dithering_pars_fragment:b0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:L0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:D0,specularmap_fragment:I0,specularmap_pars_fragment:F0,tonemapping_fragment:N0,tonemapping_pars_fragment:O0,transmission_fragment:U0,transmission_pars_fragment:z0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:G0,uv2_pars_fragment:V0,uv2_pars_vertex:H0,uv2_vertex:W0,worldpos_vertex:q0,background_vert:X0,background_frag:j0,backgroundCube_vert:$0,backgroundCube_frag:Y0,cube_vert:K0,cube_frag:Z0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:rx,linedashed_frag:sx,meshbasic_vert:ox,meshbasic_frag:ax,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:hx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:_x,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:Mx,points_frag:yx,shadow_vert:bx,shadow_frag:Sx,sprite_vert:wx,sprite_frag:Ex},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},on={basic:{uniforms:St([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:St([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:St([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:St([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:St([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:St([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:St([ve.points,ve.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:St([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:St([ve.common,ve.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:St([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:St([ve.sprite,ve.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:St([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:St([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};on.physical={uniforms:St([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ps={r:0,b:0,g:0};function Tx(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,x){let E=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));const S=n.xr,C=S.getSession&&S.getSession();C&&C.environmentBlendMode==="additive"&&(v=null),v===null?d(o,l):v&&v.isColor&&(d(v,1),E=!0),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===js)?(u===void 0&&(u=new Mn(new Vr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:$i(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,F,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==Ye,(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new Ys(2,2),new hi({name:"BackgroundMaterial",uniforms:$i(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=v.encoding!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,x){p.getRGB(ps,Af(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:_}}function Ax(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(U,J,te,ne,H){let ce=!1;if(a){const ae=d(ne,te,J);c!==ae&&(c=ae,m(c.object)),ce=x(U,ne,te,H),ce&&E(U,ne,te,H)}else{const ae=J.wireframe===!0;(c.geometry!==ne.id||c.program!==te.id||c.wireframe!==ae)&&(c.geometry=ne.id,c.program=te.id,c.wireframe=ae,ce=!0)}H!==null&&t.update(H,34963),(ce||u)&&(u=!1,b(U,J,te,ne),H!==null&&n.bindBuffer(34963,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function d(U,J,te){const ne=te.wireframe===!0;let H=o[U.id];H===void 0&&(H={},o[U.id]=H);let ce=H[J.id];ce===void 0&&(ce={},H[J.id]=ce);let ae=ce[ne];return ae===void 0&&(ae=p(h()),ce[ne]=ae),ae}function p(U){const J=[],te=[],ne=[];for(let H=0;H<r;H++)J[H]=0,te[H]=0,ne[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:te,attributeDivisors:ne,object:U,attributes:{},index:null}}function x(U,J,te,ne){const H=c.attributes,ce=J.attributes;let ae=0;const we=te.getAttributes();for(const z in we)if(we[z].location>=0){const xe=H[z];let D=ce[z];if(D===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(D=U.instanceColor)),xe===void 0||xe.attribute!==D||D&&xe.data!==D.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ne}function E(U,J,te,ne){const H={},ce=J.attributes;let ae=0;const we=te.getAttributes();for(const z in we)if(we[z].location>=0){let xe=ce[z];xe===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor));const D={};D.attribute=xe,xe&&xe.data&&(D.data=xe.data),H[z]=D,ae++}c.attributes=H,c.attributesNum=ae,c.index=ne}function v(){const U=c.newAttributes;for(let J=0,te=U.length;J<te;J++)U[J]=0}function S(U){C(U,0)}function C(U,J){const te=c.newAttributes,ne=c.enabledAttributes,H=c.attributeDivisors;te[U]=1,ne[U]===0&&(n.enableVertexAttribArray(U),ne[U]=1),H[U]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,J),H[U]=J)}function R(){const U=c.newAttributes,J=c.enabledAttributes;for(let te=0,ne=J.length;te<ne;te++)J[te]!==U[te]&&(n.disableVertexAttribArray(te),J[te]=0)}function F(U,J,te,ne,H,ce){i.isWebGL2===!0&&(te===5124||te===5125)?n.vertexAttribIPointer(U,J,te,H,ce):n.vertexAttribPointer(U,J,te,ne,H,ce)}function b(U,J,te,ne){if(i.isWebGL2===!1&&(U.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=ne.attributes,ce=te.getAttributes(),ae=J.defaultAttributeValues;for(const we in ce){const z=ce[we];if(z.location>=0){let le=H[we];if(le===void 0&&(we==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),we==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){const xe=le.normalized,D=le.itemSize,L=t.get(le);if(L===void 0)continue;const Q=L.buffer,re=L.type,ge=L.bytesPerElement;if(le.isInterleavedBufferAttribute){const pe=le.data,Se=pe.stride,y=le.offset;if(pe.isInstancedInterleavedBuffer){for(let T=0;T<z.locationSize;T++)C(z.location+T,pe.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let T=0;T<z.locationSize;T++)S(z.location+T);n.bindBuffer(34962,Q);for(let T=0;T<z.locationSize;T++)F(z.location+T,D/z.locationSize,re,xe,Se*ge,(y+D/z.locationSize*T)*ge)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)C(z.location+pe,le.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<z.locationSize;pe++)S(z.location+pe);n.bindBuffer(34962,Q);for(let pe=0;pe<z.locationSize;pe++)F(z.location+pe,D/z.locationSize,re,xe,D*ge,D/z.locationSize*pe*ge)}}else if(ae!==void 0){const xe=ae[we];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(z.location,xe);break;case 3:n.vertexAttrib3fv(z.location,xe);break;case 4:n.vertexAttrib4fv(z.location,xe);break;default:n.vertexAttrib1fv(z.location,xe)}}}}R()}function A(){oe();for(const U in o){const J=o[U];for(const te in J){const ne=J[te];for(const H in ne)_(ne[H].object),delete ne[H];delete J[te]}delete o[U]}}function N(U){if(o[U.id]===void 0)return;const J=o[U.id];for(const te in J){const ne=J[te];for(const H in ne)_(ne[H].object),delete ne[H];delete J[te]}delete o[U.id]}function ie(U){for(const J in o){const te=o[J];if(te[U.id]===void 0)continue;const ne=te[U.id];for(const H in ne)_(ne[H].object),delete ne[H];delete te[U.id]}}function oe(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:N,releaseStatesOfProgram:ie,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function Cx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Lx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),x=n.getParameter(36348),E=n.getParameter(36349),v=h>0,S=a||e.has("OES_texture_float"),C=v&&S,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:R}}function Rx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Kn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,x=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,v=E*4;let S=x.clippingState||null;l.value=S,S=u(_,h,v,m);for(let C=0;C!==v;++C)S[C]=t[C];x.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const x=m+d*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<x)&&(p=new Float32Array(x));for(let v=0,S=m;v!==d;++v,S+=4)a.copy(f[v]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Px(n){let e=new WeakMap;function t(a,o){return o===ca?a.mapping=qi:o===ua&&(a.mapping=Xi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ca||o===ua)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pf extends Cf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Rc=[.125,.215,.35,.446,.526,.582],ei=20,Bo=new Pf,Pc=new $e;let ko=null;const Zn=(1+Math.sqrt(5))/2,Ci=1/Zn,Dc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Zn,Ci),new B(0,Zn,-Ci),new B(Ci,0,Zn),new B(-Ci,0,Zn),new B(Zn,Ci,0),new B(-Zn,Ci,0)];class Ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ko=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko),e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ir,format:Yt,encoding:ui,depthBuffer:!1},r=Fc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dx(s)),this._blurMaterial=Ix(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,r){const o=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Pc),u.toneMapping=bn,u.autoClear=!1;const m=new wf({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new Mn(new Vr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Pc),d=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):E===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const v=this._cubeSize;ms(r,E*v,x>2?v:0,v,v),u.setRenderTarget(r),d&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(r-1)%Dc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):ei;p>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const x=[];let E=0;for(let F=0;F<ei;++F){const b=F/d,A=Math.exp(-b*b/2);x.push(A),F===0?E+=A:F<p&&(E+=2*A)}for(let F=0;F<x.length;F++)x[F]=x[F]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Fi?r-v+Fi:0),R=4*(this._cubeSize-S);ms(t,C,R,3*S,2*S),l.setRenderTarget(t),l.render(f,Bo)}}function Dx(n){const e=[],t=[],i=[];let r=n;const s=n-Fi+1+Rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Fi?l=Rc[a-n+Fi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,d=3,p=2,x=1,E=new Float32Array(d*_*m),v=new Float32Array(p*_*m),S=new Float32Array(x*_*m);for(let R=0;R<m;R++){const F=R%3*2/3-1,b=R>2?0:-1,A=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];E.set(A,d*_*R),v.set(h,p*_*R);const N=[R,R,R,R,R,R];S.set(N,x*_*R)}const C=new di;C.setAttribute("position",new ln(E,d)),C.setAttribute("uv",new ln(v,p)),C.setAttribute("faceIndex",new ln(S,x)),e.push(C),r>Fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fc(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ix(n,e,t){const i=new Float32Array(ei),r=new B(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Nc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ua,u=l===qi||l===Xi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ic(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ic(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Nx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ox(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let d=0;if(m!==null){const E=m.array;d=m.version;for(let v=0,S=E.length;v<S;v+=3){const C=E[v+0],R=E[v+1],F=E[v+2];h.push(C,R,R,F,F,C)}}else{const E=_.array;d=_.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const C=v+0,R=v+1,F=v+2;h.push(C,R,R,F,F,C)}}const p=new(xf(h)?Tf:Ef)(h,1);p.version=d;const x=s.get(f);x&&e.remove(x),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ux(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function zx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bx(n,e){return n[0]-e[0]}function kx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==d){let J=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",J)};p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let A=0;v===!0&&(A=1),S===!0&&(A=2),C===!0&&(A=3);let N=u.attributes.position.count*A,ie=1;N>e.maxTextureSize&&(ie=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const oe=new Float32Array(N*ie*4*d),V=new bf(oe,N,ie,d);V.type=ii,V.needsUpdate=!0;const U=A*4;for(let te=0;te<d;te++){const ne=R[te],H=F[te],ce=b[te],ae=N*ie*4*te;for(let we=0;we<ne.count;we++){const z=we*U;v===!0&&(a.fromBufferAttribute(ne,we),oe[ae+z+0]=a.x,oe[ae+z+1]=a.y,oe[ae+z+2]=a.z,oe[ae+z+3]=0),S===!0&&(a.fromBufferAttribute(H,we),oe[ae+z+4]=a.x,oe[ae+z+5]=a.y,oe[ae+z+6]=a.z,oe[ae+z+7]=0),C===!0&&(a.fromBufferAttribute(ce,we),oe[ae+z+8]=a.x,oe[ae+z+9]=a.y,oe[ae+z+10]=a.z,oe[ae+z+11]=ce.itemSize===4?a.w:1)}}p={count:d,texture:V,size:new qe(N,ie)},s.set(u,p),u.addEventListener("dispose",J)}let x=0;for(let v=0;v<m.length;v++)x+=m[v];const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==_){d=[];for(let S=0;S<_;S++)d[S]=[S,0];i[u.id]=d}for(let S=0;S<_;S++){const C=d[S];C[0]=S,C[1]=m[S]}d.sort(kx);for(let S=0;S<8;S++)S<_&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Bx);const p=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const C=o[S],R=C[0],F=C[1];R!==Number.MAX_SAFE_INTEGER&&F?(p&&u.getAttribute("morphTarget"+S)!==p[R]&&u.setAttribute("morphTarget"+S,p[R]),x&&u.getAttribute("morphNormal"+S)!==x[R]&&u.setAttribute("morphNormal"+S,x[R]),r[S]=F,E+=F):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Vx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Df=new At,If=new bf,Ff=new Ag,Nf=new Lf,Uc=[],zc=[],Bc=new Float32Array(16),kc=new Float32Array(9),Gc=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ks(n,e){let t=zc[e];t===void 0&&(t=new Int32Array(e),zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function jx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Gc.set(i),n.uniformMatrix2fv(this.addr,!1,Gc),lt(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;kc.set(i),n.uniformMatrix3fv(this.addr,!1,kc),lt(t,i)}}function Yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Bc.set(i),n.uniformMatrix4fv(this.addr,!1,Bc),lt(t,i)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Df,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ff,r)}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function lv(n){switch(n){case 5126:return Hx;case 35664:return Wx;case 35665:return qx;case 35666:return Xx;case 35674:return jx;case 35675:return $x;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}function cv(n,e){n.uniform1fv(this.addr,e)}function uv(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function fv(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function hv(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function dv(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pv(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mv(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gv(n,e){n.uniform1iv(this.addr,e)}function _v(n,e){n.uniform2iv(this.addr,e)}function xv(n,e){n.uniform3iv(this.addr,e)}function vv(n,e){n.uniform4iv(this.addr,e)}function Mv(n,e){n.uniform1uiv(this.addr,e)}function yv(n,e){n.uniform2uiv(this.addr,e)}function bv(n,e){n.uniform3uiv(this.addr,e)}function Sv(n,e){n.uniform4uiv(this.addr,e)}function wv(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Df,s[a])}function Ev(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ff,s[a])}function Tv(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nf,s[a])}function Av(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||If,s[a])}function Cv(n){switch(n){case 5126:return cv;case 35664:return uv;case 35665:return fv;case 35666:return hv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return Mv;case 36294:return yv;case 36295:return bv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lv(t.type)}}class Rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Cv(t.type)}}class Pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Vc(n,e){n.seq.push(e),n.map[e.id]=e}function Dv(n,e,t){const i=n.name,r=i.length;for(Go.lastIndex=0;;){const s=Go.exec(i),a=Go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vc(t,c===void 0?new Lv(o,n,e):new Rv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Pv(o),Vc(t,f)),t=f}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Dv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Iv=0;function Fv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Nv(n){switch(n){case ui:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Wc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fv(n.getShaderSource(e),a)}else return r}function Ov(n,e){const t=Nv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uv(n,e){let t;switch(e){case eg:t="Linear";break;case tg:t="Reinhard";break;case ng:t="OptimizedCineon";break;case ig:t="ACESFilmic";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Bv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _r(n){return n!==""}function qc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(n){return n.replace(Gv,Vv)}function Vv(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ma(t)}const Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(n){return n.replace(Hv,Wv)}function Wv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gr&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Xi:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function $v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case Jm:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qv(t),c=Xv(t),u=jv(t),f=$v(t),h=Yv(t),m=t.isWebGL2?"":zv(t),_=Bv(s),d=r.createProgram();let p,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(_r).join(`
`),p.length>0&&(p+=`
`),x=[m,_].filter(_r).join(`
`),x.length>0&&(x+=`
`)):(p=[$c(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),x=[m,$c(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==bn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Ov("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=ma(a),a=qc(a,t),a=Xc(a,t),o=ma(o),o=qc(o,t),o=Xc(o,t),a=jc(a),o=jc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=E+p+a,S=E+x+o,C=Hc(r,35633,v),R=Hc(r,35632,S);if(r.attachShader(d,C),r.attachShader(d,R),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(d).trim(),N=r.getShaderInfoLog(C).trim(),ie=r.getShaderInfoLog(R).trim();let oe=!0,V=!0;if(r.getProgramParameter(d,35714)===!1){oe=!1;const U=Wc(r,C,"vertex"),J=Wc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+A+`
`+U+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(N===""||ie==="")&&(V=!1);V&&(this.diagnostics={runnable:oe,programLog:A,vertexShader:{log:N,prefix:p},fragmentShader:{log:ie,prefix:x}})}r.deleteShader(C),r.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new As(r,d)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=kv(r,d)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=R,this}let Zv=0;class Jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qv(e),t.set(e,i)),i}}class Qv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function eM(n,e,t,i,r,s,a){const o=new Sf,l=new Jv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,A,N,ie,oe){const V=ie.fog,U=oe.geometry,J=b.isMeshStandardMaterial?ie.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),ne=te&&te.mapping===js?te.image.height:null,H=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ce=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ae=ce!==void 0?ce.length:0;let we=0;U.morphAttributes.position!==void 0&&(we=1),U.morphAttributes.normal!==void 0&&(we=2),U.morphAttributes.color!==void 0&&(we=3);let z,le,xe,D;if(H){const Se=on[H];z=Se.vertexShader,le=Se.fragmentShader}else z=b.vertexShader,le=b.fragmentShader,l.update(b),xe=l.getVertexShaderID(b),D=l.getFragmentShaderID(b);const L=n.getRenderTarget(),Q=b.alphaTest>0,re=b.clearcoat>0,ge=b.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:b.type,vertexShader:z,fragmentShader:le,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:D,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:L===null?n.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:ui,map:!!b.map,matcap:!!b.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:ne,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Sg,tangentSpaceNormalMap:b.normalMapType===_f,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Ye,clearcoat:re,clearcoatMap:re&&!!b.clearcoatMap,clearcoatRoughnessMap:re&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!b.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!b.iridescenceMap,iridescenceThicknessMap:ge&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===zi,alphaMap:!!b.alphaMap,alphaTest:Q,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!U.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!V,useFog:b.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:bn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===Ot,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)A.push(N),A.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(A,b),E(A,b),A.push(n.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function E(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),b.push(o.mask)}function v(b){const A=_[b.type];let N;if(A){const ie=on[A];N=kg.clone(ie.uniforms)}else N=b.uniforms;return N}function S(b,A){let N;for(let ie=0,oe=c.length;ie<oe;ie++){const V=c[ie];if(V.cacheKey===A){N=V,++N.usedTimes;break}}return N===void 0&&(N=new Kv(n,A,b,s),c.push(N)),N}function C(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:F}}function tM(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,d,p){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},n[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=d,x.group=p),e++,x}function o(f,h,m,_,d,p){const x=a(f,h,m,_,d,p);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function l(f,h,m,_,d,p){const x=a(f,h,m,_,d,p);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function c(f,h){t.length>1&&t.sort(f||nM),i.length>1&&i.sort(h||Yc),r.length>1&&r.sort(h||Yc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function iM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Kc,n.set(i,[a])):r>=s.length?(a=new Kc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lM(n,e){const t=new rM,i=sM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new st,o=new st;function l(u,f){let h=0,m=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let d=0,p=0,x=0,E=0,v=0,S=0,C=0,R=0,F=0,b=0;u.sort(aM);const A=f!==!0?Math.PI:1;for(let ie=0,oe=u.length;ie<oe;ie++){const V=u[ie],U=V.color,J=V.intensity,te=V.distance,ne=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=U.r*J*A,m+=U.g*J*A,_+=U.b*J*A;else if(V.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(V.sh.coefficients[H],J);else if(V.isDirectionalLight){const H=t.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity*A),V.castShadow){const ce=V.shadow,ae=i.get(V);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.directionalShadow[d]=ae,r.directionalShadowMap[d]=ne,r.directionalShadowMatrix[d]=V.shadow.matrix,S++}r.directional[d]=H,d++}else if(V.isSpotLight){const H=t.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(U).multiplyScalar(J*A),H.distance=te,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,r.spot[x]=H;const ce=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,ce.updateMatrices(V),V.castShadow&&b++),r.spotLightMatrix[x]=ce.matrix,V.castShadow){const ae=i.get(V);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.spotShadow[x]=ae,r.spotShadowMap[x]=ne,R++}x++}else if(V.isRectAreaLight){const H=t.get(V);H.color.copy(U).multiplyScalar(J),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),r.rectArea[E]=H,E++}else if(V.isPointLight){const H=t.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity*A),H.distance=V.distance,H.decay=V.decay,V.castShadow){const ce=V.shadow,ae=i.get(V);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,ae.shadowCameraNear=ce.camera.near,ae.shadowCameraFar=ce.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=V.shadow.matrix,C++}r.point[p]=H,p++}else if(V.isHemisphereLight){const H=t.get(V);H.skyColor.copy(V.color).multiplyScalar(J*A),H.groundColor.copy(V.groundColor).multiplyScalar(J*A),r.hemi[v]=H,v++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const N=r.hash;(N.directionalLength!==d||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==v||N.numDirectionalShadows!==S||N.numPointShadows!==C||N.numSpotShadows!==R||N.numSpotMaps!==F)&&(r.directional.length=d,r.spot.length=x,r.rectArea.length=E,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+F-b,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=b,N.directionalLength=d,N.pointLength=p,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=v,N.numDirectionalShadows=S,N.numPointShadows=C,N.numSpotShadows=R,N.numSpotMaps=F,r.version=oM++)}function c(u,f){let h=0,m=0,_=0,d=0,p=0;const x=f.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const S=u[E];if(S.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),h++}else if(S.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),_++}else if(S.isRectAreaLight){const C=r.rectArea[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),o.identity(),a.copy(S.matrixWorld),a.premultiply(x),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),d++}else if(S.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:r}}function Zc(n,e){const t=new lM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Zc(n,e),t.set(s,[l])):a>=o.length?(l=new Zc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class uM extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fM extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pM(n,e,t){let i=new Va;const r=new qe,s=new qe,a=new Je,o=new uM({depthPacking:bg}),l=new fM,c={},u=t.maxTextureSize,f={[Bn]:Ot,[Ot]:Bn,[In]:In},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:hM,fragmentShader:dM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Mn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf,this.render=function(S,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const F=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Un),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let ie=0,oe=S.length;ie<oe;ie++){const V=S[ie],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const J=U.getFrameExtents();if(r.multiply(J),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,U.mapSize.y=s.y)),U.map===null){const ne=this.type!==gr?{minFilter:wt,magFilter:wt}:{};U.map=new fi(r.x,r.y,ne),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const te=U.getViewportCount();for(let ne=0;ne<te;ne++){const H=U.getViewport(ne);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),N.viewport(a),U.updateMatrices(V,ne),i=U.getFrustum(),v(C,R,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===gr&&x(U,R),U.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(F,b,A)};function x(S,C){const R=e.update(d);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fi(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(C,null,R,h,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(C,null,R,m,d,null)}function E(S,C,R,F,b,A){let N=null;const ie=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(ie!==void 0)N=ie;else if(N=R.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const oe=N.uuid,V=C.uuid;let U=c[oe];U===void 0&&(U={},c[oe]=U);let J=U[V];J===void 0&&(J=N.clone(),U[V]=J),N=J}return N.visible=C.visible,N.wireframe=C.wireframe,A===gr?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=F,N.farDistance=b),N}function v(S,C,R,F,b){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===gr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const ie=e.update(S),oe=S.material;if(Array.isArray(oe)){const V=ie.groups;for(let U=0,J=V.length;U<J;U++){const te=V[U],ne=oe[te.materialIndex];if(ne&&ne.visible){const H=E(S,ne,F,R.near,R.far,b);n.renderBufferDirect(R,null,ie,H,S,te)}}}else if(oe.visible){const V=E(S,oe,F,R.near,R.far,b);n.renderBufferDirect(R,null,ie,V,S,null)}}const N=S.children;for(let ie=0,oe=N.length;ie<oe;ie++)v(N[ie],C,R,F,b)}}function mM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const j=new Je;let de=null;const be=new Je(0,0,0,0);return{setMask:function(Ae){de!==Ae&&!P&&(n.colorMask(Ae,Ae,Ae,Ae),de=Ae)},setLocked:function(Ae){P=Ae},setClear:function(Ae,He,ut,gt,kn){kn===!0&&(Ae*=gt,He*=gt,ut*=gt),j.set(Ae,He,ut,gt),be.equals(j)===!1&&(n.clearColor(Ae,He,ut,gt),be.copy(j))},reset:function(){P=!1,de=null,be.set(-1,0,0,0)}}}function s(){let P=!1,j=null,de=null,be=null;return{setTest:function(Ae){Ae?Q(2929):re(2929)},setMask:function(Ae){j!==Ae&&!P&&(n.depthMask(Ae),j=Ae)},setFunc:function(Ae){if(de!==Ae){switch(Ae){case qm:n.depthFunc(512);break;case Xm:n.depthFunc(519);break;case jm:n.depthFunc(513);break;case la:n.depthFunc(515);break;case $m:n.depthFunc(514);break;case Ym:n.depthFunc(518);break;case Km:n.depthFunc(516);break;case Zm:n.depthFunc(517);break;default:n.depthFunc(515)}de=Ae}},setLocked:function(Ae){P=Ae},setClear:function(Ae){be!==Ae&&(n.clearDepth(Ae),be=Ae)},reset:function(){P=!1,j=null,de=null,be=null}}}function a(){let P=!1,j=null,de=null,be=null,Ae=null,He=null,ut=null,gt=null,kn=null;return{setTest:function(Ze){P||(Ze?Q(2960):re(2960))},setMask:function(Ze){j!==Ze&&!P&&(n.stencilMask(Ze),j=Ze)},setFunc:function(Ze,un,zt){(de!==Ze||be!==un||Ae!==zt)&&(n.stencilFunc(Ze,un,zt),de=Ze,be=un,Ae=zt)},setOp:function(Ze,un,zt){(He!==Ze||ut!==un||gt!==zt)&&(n.stencilOp(Ze,un,zt),He=Ze,ut=un,gt=zt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){kn!==Ze&&(n.clearStencil(Ze),kn=Ze)},reset:function(){P=!1,j=null,de=null,be=null,Ae=null,He=null,ut=null,gt=null,kn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,d=[],p=null,x=!1,E=null,v=null,S=null,C=null,R=null,F=null,b=null,A=!1,N=null,ie=null,oe=null,V=null,U=null;const J=n.getParameter(35661);let te=!1,ne=0;const H=n.getParameter(7938);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),te=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),te=ne>=2);let ce=null,ae={};const we=n.getParameter(3088),z=n.getParameter(2978),le=new Je().fromArray(we),xe=new Je().fromArray(z);function D(P,j,de){const be=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(P,Ae),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let He=0;He<de;He++)n.texImage2D(j+He,0,6408,1,1,0,6408,5121,be);return Ae}const L={};L[3553]=D(3553,3553,1),L[34067]=D(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(la),Y(!1),ue(kl),Q(2884),G(Un);function Q(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function re(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function ge(P,j){return m[P]!==j?(n.bindFramebuffer(P,j),m[P]=j,i&&(P===36009&&(m[36160]=j),P===36160&&(m[36009]=j)),!0):!1}function pe(P,j){let de=d,be=!1;if(P)if(de=_.get(j),de===void 0&&(de=[],_.set(j,de)),P.isWebGLMultipleRenderTargets){const Ae=P.texture;if(de.length!==Ae.length||de[0]!==36064){for(let He=0,ut=Ae.length;He<ut;He++)de[He]=36064+He;de.length=Ae.length,be=!0}}else de[0]!==36064&&(de[0]=36064,be=!0);else de[0]!==1029&&(de[0]=1029,be=!0);be&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Se(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const y={[Pi]:32774,[Fm]:32778,[Nm]:32779};if(i)y[Wl]=32775,y[ql]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(y[Wl]=P.MIN_EXT,y[ql]=P.MAX_EXT)}const T={[Om]:0,[Um]:1,[zm]:768,[df]:770,[Wm]:776,[Vm]:774,[km]:772,[Bm]:769,[pf]:771,[Hm]:775,[Gm]:773};function G(P,j,de,be,Ae,He,ut,gt){if(P===Un){x===!0&&(re(3042),x=!1);return}if(x===!1&&(Q(3042),x=!0),P!==Im){if(P!==E||gt!==A){if((v!==Pi||R!==Pi)&&(n.blendEquation(32774),v=Pi,R=Pi),gt)switch(P){case zi:n.blendFuncSeparate(1,771,1,771);break;case Gl:n.blendFunc(1,1);break;case Vl:n.blendFuncSeparate(0,769,0,1);break;case Hl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:n.blendFuncSeparate(770,771,1,771);break;case Gl:n.blendFunc(770,1);break;case Vl:n.blendFuncSeparate(0,769,0,1);break;case Hl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,F=null,b=null,E=P,A=gt}return}Ae=Ae||j,He=He||de,ut=ut||be,(j!==v||Ae!==R)&&(n.blendEquationSeparate(y[j],y[Ae]),v=j,R=Ae),(de!==S||be!==C||He!==F||ut!==b)&&(n.blendFuncSeparate(T[de],T[be],T[He],T[ut]),S=de,C=be,F=He,b=ut),E=P,A=!1}function q(P,j){P.side===In?re(2884):Q(2884);let de=P.side===Ot;j&&(de=!de),Y(de),P.blending===zi&&P.transparent===!1?G(Un):G(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(32926):re(32926)}function Y(P){N!==P&&(P?n.frontFace(2304):n.frontFace(2305),N=P)}function ue(P){P!==Rm?(Q(2884),P!==ie&&(P===kl?n.cullFace(1029):P===Pm?n.cullFace(1028):n.cullFace(1032))):re(2884),ie=P}function he(P){P!==oe&&(te&&n.lineWidth(P),oe=P)}function ee(P,j,de){P?(Q(32823),(V!==j||U!==de)&&(n.polygonOffset(j,de),V=j,U=de)):re(32823)}function _e(P){P?Q(3089):re(3089)}function se(P){P===void 0&&(P=33984+J-1),ce!==P&&(n.activeTexture(P),ce=P)}function M(P,j,de){de===void 0&&(ce===null?de=33984+J-1:de=ce);let be=ae[de];be===void 0&&(be={type:void 0,texture:void 0},ae[de]=be),(be.type!==P||be.texture!==j)&&(ce!==de&&(n.activeTexture(de),ce=de),n.bindTexture(P,j||L[P]),be.type=P,be.texture=j)}function g(){const P=ae[ce];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(P){le.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function ye(P){xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),xe.copy(P))}function Pe(P,j){let de=f.get(j);de===void 0&&(de=new WeakMap,f.set(j,de));let be=de.get(P);be===void 0&&(be=n.getUniformBlockIndex(j,P.name),de.set(P,be))}function je(P,j){const be=f.get(j).get(P);u.get(j)!==be&&(n.uniformBlockBinding(j,be,P.__bindingPointIndex),u.set(j,be))}function ct(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ae={},m={},_=new WeakMap,d=[],p=null,x=!1,E=null,v=null,S=null,C=null,R=null,F=null,b=null,A=!1,N=null,ie=null,oe=null,V=null,U=null,le.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:re,bindFramebuffer:ge,drawBuffers:pe,useProgram:Se,setBlending:G,setMaterial:q,setFlipSided:Y,setCullFace:ue,setLineWidth:he,setPolygonOffset:ee,setScissorTest:_e,activeTexture:se,bindTexture:M,unbindTexture:g,compressedTexImage2D:I,compressedTexImage3D:W,texImage2D:Re,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:je,texStorage2D:X,texStorage3D:Te,texSubImage2D:K,texSubImage3D:fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:me,scissor:Ce,viewport:ye,reset:ct}}function gM(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,g){return x?new OffscreenCanvas(M,g):Nr("canvas")}function v(M,g,I,W){let K=1;if((M.width>W||M.height>W)&&(K=W/Math.max(M.width,M.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const fe=g?pa:Math.floor,Me=fe(K*M.width),me=fe(K*M.height);d===void 0&&(d=E(Me,me));const X=I?E(Me,me):d;return X.width=Me,X.height=me,X.getContext("2d").drawImage(M,0,0,Me,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Me+"x"+me+")."),X}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return vc(M.width)&&vc(M.height)}function C(M){return o?!1:M.wrapS!==$t||M.wrapT!==$t||M.minFilter!==wt&&M.minFilter!==kt}function R(M,g){return M.generateMipmaps&&g&&M.minFilter!==wt&&M.minFilter!==kt}function F(M){n.generateMipmap(M)}function b(M,g,I,W,K=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let fe=g;return g===6403&&(I===5126&&(fe=33326),I===5131&&(fe=33325),I===5121&&(fe=33321)),g===33319&&(I===5126&&(fe=33328),I===5131&&(fe=33327),I===5121&&(fe=33323)),g===6408&&(I===5126&&(fe=34836),I===5131&&(fe=34842),I===5121&&(fe=W===Ye&&K===!1?35907:32856),I===32819&&(fe=32854),I===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function A(M,g,I){return R(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function N(M){return M===wt||M===Xl||M===co?9728:9729}function ie(M){const g=M.target;g.removeEventListener("dispose",ie),V(g),g.isVideoTexture&&_.delete(g)}function oe(M){const g=M.target;g.removeEventListener("dispose",oe),J(g)}function V(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,W=p.get(I);if(W){const K=W[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(M),Object.keys(W).length===0&&p.delete(I)}i.remove(M)}function U(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const I=M.source,W=p.get(I);delete W[g.__cacheKey],a.memory.textures--}function J(M){const g=M.texture,I=i.get(M),W=i.get(g);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(I.__webglFramebuffer[K]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let K=0;K<I.__webglColorRenderbuffer.length;K++)I.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[K]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,fe=g.length;K<fe;K++){const Me=i.get(g[K]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(M)}let te=0;function ne(){te=0}function H(){const M=te;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),te+=1,M}function ce(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function ae(M,g){const I=i.get(M);if(M.isVideoTexture&&_e(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,M,g);return}}t.bindTexture(3553,I.__webglTexture,33984+g)}function we(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){re(I,M,g);return}t.bindTexture(35866,I.__webglTexture,33984+g)}function z(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){re(I,M,g);return}t.bindTexture(32879,I.__webglTexture,33984+g)}function le(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ge(I,M,g);return}t.bindTexture(34067,I.__webglTexture,33984+g)}const xe={[fa]:10497,[$t]:33071,[ha]:33648},D={[wt]:9728,[Xl]:9984,[co]:9986,[kt]:9729,[sg]:9985,[Dr]:9987};function L(M,g,I){if(I?(n.texParameteri(M,10242,xe[g.wrapS]),n.texParameteri(M,10243,xe[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,xe[g.wrapR]),n.texParameteri(M,10240,D[g.magFilter]),n.texParameteri(M,10241,D[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==$t||g.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,N(g.magFilter)),n.texParameteri(M,10241,N(g.minFilter)),g.minFilter!==wt&&g.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===wt||g.minFilter!==co&&g.minFilter!==Dr||g.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Q(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",ie));const W=g.source;let K=p.get(W);K===void 0&&(K={},p.set(W,K));const fe=ce(g);if(fe!==M.__cacheKey){K[fe]===void 0&&(K[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[fe].usedTimes++;const Me=K[M.__cacheKey];Me!==void 0&&(K[M.__cacheKey].usedTimes--,Me.usedTimes===0&&U(g)),M.__cacheKey=fe,M.__webglTexture=K[fe].texture}return I}function re(M,g,I){let W=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=35866),g.isData3DTexture&&(W=32879);const K=Q(M,g),fe=g.source;t.bindTexture(W,M.__webglTexture,33984+I);const Me=i.get(fe);if(fe.version!==Me.__version||K===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const me=C(g)&&S(g.image)===!1;let X=v(g.image,me,!1,u);X=se(g,X);const Te=S(X)||o,Re=s.convert(g.format,g.encoding);let Ee=s.convert(g.type),Ce=b(g.internalFormat,Re,Ee,g.encoding,g.isVideoTexture);L(W,g,Te);let ye;const Pe=g.mipmaps,je=o&&g.isVideoTexture!==!0,ct=Me.__version===void 0||K===!0,P=A(g,X,Te);if(g.isDepthTexture)Ce=6402,o?g.type===ii?Ce=36012:g.type===ni?Ce=33190:g.type===Bi?Ce=35056:Ce=33189:g.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===oi&&Ce===6402&&g.type!==gf&&g.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ni,Ee=s.convert(g.type)),g.format===ji&&Ce===6402&&(Ce=34041,g.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Bi,Ee=s.convert(g.type))),ct&&(je?t.texStorage2D(3553,1,Ce,X.width,X.height):t.texImage2D(3553,0,Ce,X.width,X.height,0,Re,Ee,null));else if(g.isDataTexture)if(Pe.length>0&&Te){je&&ct&&t.texStorage2D(3553,P,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)ye=Pe[j],je?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,Re,Ee,ye.data):t.texImage2D(3553,j,Ce,ye.width,ye.height,0,Re,Ee,ye.data);g.generateMipmaps=!1}else je?(ct&&t.texStorage2D(3553,P,Ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Re,Ee,X.data)):t.texImage2D(3553,0,Ce,X.width,X.height,0,Re,Ee,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&ct&&t.texStorage3D(35866,P,Ce,Pe[0].width,Pe[0].height,X.depth);for(let j=0,de=Pe.length;j<de;j++)ye=Pe[j],g.format!==Yt?Re!==null?je?t.compressedTexSubImage3D(35866,j,0,0,0,ye.width,ye.height,X.depth,Re,ye.data,0,0):t.compressedTexImage3D(35866,j,Ce,ye.width,ye.height,X.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,j,0,0,0,ye.width,ye.height,X.depth,Re,Ee,ye.data):t.texImage3D(35866,j,Ce,ye.width,ye.height,X.depth,0,Re,Ee,ye.data)}else{je&&ct&&t.texStorage2D(3553,P,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)ye=Pe[j],g.format!==Yt?Re!==null?je?t.compressedTexSubImage2D(3553,j,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(3553,j,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,Re,Ee,ye.data):t.texImage2D(3553,j,Ce,ye.width,ye.height,0,Re,Ee,ye.data)}else if(g.isDataArrayTexture)je?(ct&&t.texStorage3D(35866,P,Ce,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Re,Ee,X.data)):t.texImage3D(35866,0,Ce,X.width,X.height,X.depth,0,Re,Ee,X.data);else if(g.isData3DTexture)je?(ct&&t.texStorage3D(32879,P,Ce,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Re,Ee,X.data)):t.texImage3D(32879,0,Ce,X.width,X.height,X.depth,0,Re,Ee,X.data);else if(g.isFramebufferTexture){if(ct)if(je)t.texStorage2D(3553,P,Ce,X.width,X.height);else{let j=X.width,de=X.height;for(let be=0;be<P;be++)t.texImage2D(3553,be,Ce,j,de,0,Re,Ee,null),j>>=1,de>>=1}}else if(Pe.length>0&&Te){je&&ct&&t.texStorage2D(3553,P,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)ye=Pe[j],je?t.texSubImage2D(3553,j,0,0,Re,Ee,ye):t.texImage2D(3553,j,Ce,Re,Ee,ye);g.generateMipmaps=!1}else je?(ct&&t.texStorage2D(3553,P,Ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,Re,Ee,X)):t.texImage2D(3553,0,Ce,Re,Ee,X);R(g,Te)&&F(W),Me.__version=fe.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,I){if(g.image.length!==6)return;const W=Q(M,g),K=g.source;t.bindTexture(34067,M.__webglTexture,33984+I);const fe=i.get(K);if(K.version!==fe.__version||W===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!Me&&!me?X[j]=v(g.image[j],!1,!0,c):X[j]=me?g.image[j].image:g.image[j],X[j]=se(g,X[j]);const Te=X[0],Re=S(Te)||o,Ee=s.convert(g.format,g.encoding),Ce=s.convert(g.type),ye=b(g.internalFormat,Ee,Ce,g.encoding),Pe=o&&g.isVideoTexture!==!0,je=fe.__version===void 0||W===!0;let ct=A(g,Te,Re);L(34067,g,Re);let P;if(Me){Pe&&je&&t.texStorage2D(34067,ct,ye,Te.width,Te.height);for(let j=0;j<6;j++){P=X[j].mipmaps;for(let de=0;de<P.length;de++){const be=P[de];g.format!==Yt?Ee!==null?Pe?t.compressedTexSubImage2D(34069+j,de,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(34069+j,de,ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+j,de,0,0,be.width,be.height,Ee,Ce,be.data):t.texImage2D(34069+j,de,ye,be.width,be.height,0,Ee,Ce,be.data)}}}else{P=g.mipmaps,Pe&&je&&(P.length>0&&ct++,t.texStorage2D(34067,ct,ye,X[0].width,X[0].height));for(let j=0;j<6;j++)if(me){Pe?t.texSubImage2D(34069+j,0,0,0,X[j].width,X[j].height,Ee,Ce,X[j].data):t.texImage2D(34069+j,0,ye,X[j].width,X[j].height,0,Ee,Ce,X[j].data);for(let de=0;de<P.length;de++){const Ae=P[de].image[j].image;Pe?t.texSubImage2D(34069+j,de+1,0,0,Ae.width,Ae.height,Ee,Ce,Ae.data):t.texImage2D(34069+j,de+1,ye,Ae.width,Ae.height,0,Ee,Ce,Ae.data)}}else{Pe?t.texSubImage2D(34069+j,0,0,0,Ee,Ce,X[j]):t.texImage2D(34069+j,0,ye,Ee,Ce,X[j]);for(let de=0;de<P.length;de++){const be=P[de];Pe?t.texSubImage2D(34069+j,de+1,0,0,Ee,Ce,be.image[j]):t.texImage2D(34069+j,de+1,ye,Ee,Ce,be.image[j])}}}R(g,Re)&&F(34067),fe.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function pe(M,g,I,W,K){const fe=s.convert(I.format,I.encoding),Me=s.convert(I.type),me=b(I.internalFormat,fe,Me,I.encoding);i.get(g).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,me,g.width,g.height,g.depth,0,fe,Me,null):t.texImage2D(K,0,me,g.width,g.height,0,fe,Me,null)),t.bindFramebuffer(36160,M),ee(g)?h.framebufferTexture2DMultisampleEXT(36160,W,K,i.get(I).__webglTexture,0,he(g)):(K===3553||K>=34069&&K<=34074)&&n.framebufferTexture2D(36160,W,K,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(M,g,I){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let W=33189;if(I||ee(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===ii?W=36012:K.type===ni&&(W=33190));const fe=he(g);ee(g)?h.renderbufferStorageMultisampleEXT(36161,fe,W,g.width,g.height):n.renderbufferStorageMultisample(36161,fe,W,g.width,g.height)}else n.renderbufferStorage(36161,W,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const W=he(g);I&&ee(g)===!1?n.renderbufferStorageMultisample(36161,W,35056,g.width,g.height):ee(g)?h.renderbufferStorageMultisampleEXT(36161,W,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const W=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<W.length;K++){const fe=W[K],Me=s.convert(fe.format,fe.encoding),me=s.convert(fe.type),X=b(fe.internalFormat,Me,me,fe.encoding),Te=he(g);I&&ee(g)===!1?n.renderbufferStorageMultisample(36161,Te,X,g.width,g.height):ee(g)?h.renderbufferStorageMultisampleEXT(36161,Te,X,g.width,g.height):n.renderbufferStorage(36161,X,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function y(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const W=i.get(g.depthTexture).__webglTexture,K=he(g);if(g.depthTexture.format===oi)ee(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,K):n.framebufferTexture2D(36160,36096,3553,W,0);else if(g.depthTexture.format===ji)ee(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,K):n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function T(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");y(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]=n.createRenderbuffer(),Se(g.__webglDepthbuffer[W],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Se(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function G(M,g,I){const W=i.get(M);g!==void 0&&pe(W.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&T(M)}function q(M){const g=M.texture,I=i.get(M),W=i.get(g);M.addEventListener("dispose",oe),M.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,fe=M.isWebGLMultipleRenderTargets===!0,Me=S(M)||o;if(K){I.__webglFramebuffer=[];for(let me=0;me<6;me++)I.__webglFramebuffer[me]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const me=M.texture;for(let X=0,Te=me.length;X<Te;X++){const Re=i.get(me[X]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ee(M)===!1){const me=fe?g:[g];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let X=0;X<me.length;X++){const Te=me[X];I.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer[X]);const Re=s.convert(Te.format,Te.encoding),Ee=s.convert(Te.type),Ce=b(Te.internalFormat,Re,Ee,Te.encoding,M.isXRRenderTarget===!0),ye=he(M);n.renderbufferStorageMultisample(36161,ye,Ce,M.width,M.height),n.framebufferRenderbuffer(36160,36064+X,36161,I.__webglColorRenderbuffer[X])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,W.__webglTexture),L(34067,g,Me);for(let me=0;me<6;me++)pe(I.__webglFramebuffer[me],M,g,36064,34069+me);R(g,Me)&&F(34067),t.unbindTexture()}else if(fe){const me=M.texture;for(let X=0,Te=me.length;X<Te;X++){const Re=me[X],Ee=i.get(Re);t.bindTexture(3553,Ee.__webglTexture),L(3553,Re,Me),pe(I.__webglFramebuffer,M,Re,36064+X,3553),R(Re,Me)&&F(3553)}t.unbindTexture()}else{let me=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?me=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,W.__webglTexture),L(me,g,Me),pe(I.__webglFramebuffer,M,g,36064,me),R(g,Me)&&F(me),t.unbindTexture()}M.depthBuffer&&T(M)}function Y(M){const g=S(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let W=0,K=I.length;W<K;W++){const fe=I[W];if(R(fe,g)){const Me=M.isWebGLCubeRenderTarget?34067:3553,me=i.get(fe).__webglTexture;t.bindTexture(Me,me),F(Me),t.unbindTexture()}}}function ue(M){if(o&&M.samples>0&&ee(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,W=M.height;let K=16384;const fe=[],Me=M.stencilBuffer?33306:36096,me=i.get(M),X=M.isWebGLMultipleRenderTargets===!0;if(X)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){fe.push(36064+Te),M.depthBuffer&&fe.push(Me);const Re=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Re===!1&&(M.depthBuffer&&(K|=256),M.stencilBuffer&&(K|=1024)),X&&n.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Te]),Re===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),X){const Ee=i.get(g[Te]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,K,9728),m&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,me.__webglColorRenderbuffer[Te]);const Re=i.get(g[Te]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,Re,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function he(M){return Math.min(f,M.samples)}function ee(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function _e(M){const g=a.render.frame;_.get(M)!==g&&(_.set(M,g),M.update())}function se(M,g){const I=M.encoding,W=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===da||I!==ui&&(I===Ye?o===!1?e.has("EXT_sRGB")===!0&&W===Yt?(M.format=da,M.minFilter=kt,M.generateMipmaps=!1):g=Mf.sRGBToLinear(g):(W!==Yt||K!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),g}this.allocateTextureUnit=H,this.resetTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=we,this.setTexture3D=z,this.setTextureCube=le,this.rebindTextures=G,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ee}function _M(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ci)return 5121;if(s===cg)return 32819;if(s===ug)return 32820;if(s===og)return 5120;if(s===ag)return 5122;if(s===gf)return 5123;if(s===lg)return 5124;if(s===ni)return 5125;if(s===ii)return 5126;if(s===Ir)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===fg)return 6406;if(s===Yt)return 6408;if(s===hg)return 6409;if(s===dg)return 6410;if(s===oi)return 6402;if(s===ji)return 34041;if(s===da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===pg)return 6403;if(s===mg)return 36244;if(s===gg)return 33319;if(s===_g)return 33320;if(s===xg)return 36249;if(s===uo||s===fo||s===ho||s===po)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jl||s===$l||s===Yl||s===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zl)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===hc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ql)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===mo)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Mg||s===dc||s===pc||s===mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===dc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xM extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vM={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),x=this._getHandJoint(c,d);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class MM extends At{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===oi&&(i=ni),i===void 0&&u===ji&&(i=Bi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class yM extends tr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const d=t.getContextAttributes();let p=null,x=null;const E=[],v=[],S=new Set,C=new Map,R=new Ft;R.layers.enable(1),R.viewport=new Je;const F=new Ft;F.layers.enable(2),F.viewport=new Je;const b=[R,F],A=new xM;A.layers.enable(1),A.layers.enable(2);let N=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let le=E[z];return le===void 0&&(le=new Vo,E[z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(z){let le=E[z];return le===void 0&&(le=new Vo,E[z]=le),le.getGripSpace()},this.getHand=function(z){let le=E[z];return le===void 0&&(le=new Vo,E[z]=le),le.getHandSpace()};function oe(z){const le=v.indexOf(z.inputSource);if(le===-1)return;const xe=E[le];xe!==void 0&&xe.dispatchEvent({type:z.type,data:z.inputSource})}function V(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",U);for(let z=0;z<E.length;z++){const le=v[z];le!==null&&(v[z]=null,E[z].disconnect(le))}N=null,ie=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,x=null,we.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",V),r.addEventListener("inputsourceschange",U),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),x=new fi(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:ci,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,xe=null,D=null;d.depth&&(D=d.stencil?35056:33190,le=d.stencil?ji:oi,xe=d.stencil?Bi:ni);const L={colorFormat:32856,depthFormat:D,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(L),r.updateRenderState({layers:[h]}),x=new fi(h.textureWidth,h.textureHeight,{format:Yt,type:ci,depthTexture:new MM(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const Q=e.properties.get(x);Q.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(z){for(let le=0;le<z.removed.length;le++){const xe=z.removed[le],D=v.indexOf(xe);D>=0&&(v[D]=null,E[D].disconnect(xe))}for(let le=0;le<z.added.length;le++){const xe=z.added[le];let D=v.indexOf(xe);if(D===-1){for(let Q=0;Q<E.length;Q++)if(Q>=v.length){v.push(xe),D=Q;break}else if(v[Q]===null){v[Q]=xe,D=Q;break}if(D===-1)break}const L=E[D];L&&L.connect(xe)}}const J=new B,te=new B;function ne(z,le,xe){J.setFromMatrixPosition(le.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const D=J.distanceTo(te),L=le.projectionMatrix.elements,Q=xe.projectionMatrix.elements,re=L[14]/(L[10]-1),ge=L[14]/(L[10]+1),pe=(L[9]+1)/L[5],Se=(L[9]-1)/L[5],y=(L[8]-1)/L[0],T=(Q[8]+1)/Q[0],G=re*y,q=re*T,Y=D/(-y+T),ue=Y*-y;le.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ue),z.translateZ(Y),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const he=re+Y,ee=ge+Y,_e=G-ue,se=q+(D-ue),M=pe*ge/ee*he,g=Se*ge/ee*he;z.projectionMatrix.makePerspective(_e,se,M,g,he,ee)}function H(z,le){le===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(le.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;A.near=F.near=R.near=z.near,A.far=F.far=R.far=z.far,(N!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,ie=A.far);const le=z.parent,xe=A.cameras;H(A,le);for(let L=0;L<xe.length;L++)H(xe[L],le);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const D=z.children;for(let L=0,Q=D.length;L<Q;L++)D[L].updateMatrixWorld(!0);xe.length===2?ne(A,R,F):A.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return S};let ce=null;function ae(z,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let D=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,D=!0);for(let L=0;L<xe.length;L++){const Q=xe[L];let re=null;if(m!==null)re=m.getViewport(Q);else{const pe=f.getViewSubImage(h,Q);re=pe.viewport,L===0&&(e.setRenderTargetTextures(x,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(x))}let ge=b[L];ge===void 0&&(ge=new Ft,ge.layers.enable(L),ge.viewport=new Je,b[L]=ge),ge.matrix.fromArray(Q.transform.matrix),ge.projectionMatrix.fromArray(Q.projectionMatrix),ge.viewport.set(re.x,re.y,re.width,re.height),L===0&&A.matrix.copy(ge.matrix),D===!0&&A.cameras.push(ge)}}for(let xe=0;xe<E.length;xe++){const D=v[xe],L=E[xe];D!==null&&L!==void 0&&L.update(D,le,c||a)}if(ce&&ce(z,le),le.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let xe=null;for(const D of S)le.detectedPlanes.has(D)||(xe===null&&(xe=[]),xe.push(D));if(xe!==null)for(const D of xe)S.delete(D),C.delete(D),i.dispatchEvent({type:"planeremoved",data:D});for(const D of le.detectedPlanes)if(!S.has(D))S.add(D),C.set(D,le.lastChangedTime),i.dispatchEvent({type:"planeadded",data:D});else{const L=C.get(D);D.lastChangedTime>L&&(C.set(D,D.lastChangedTime),i.dispatchEvent({type:"planechanged",data:D}))}}_=null}const we=new Rf;we.setAnimationLoop(ae),this.setAnimationLoop=function(z){ce=z},this.dispose=function(){}}}function bM(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,Af(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,x,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,x,E):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ot&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ot&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let E;p.map?E=p.map:p.specularMap?E=p.specularMap:p.displacementMap?E=p.displacementMap:p.normalMap?E=p.normalMap:p.bumpMap?E=p.bumpMap:p.roughnessMap?E=p.roughnessMap:p.metalnessMap?E=p.metalnessMap:p.alphaMap?E=p.alphaMap:p.emissiveMap?E=p.emissiveMap:p.clearcoatMap?E=p.clearcoatMap:p.clearcoatNormalMap?E=p.clearcoatNormalMap:p.clearcoatRoughnessMap?E=p.clearcoatRoughnessMap:p.iridescenceMap?E=p.iridescenceMap:p.iridescenceThicknessMap?E=p.iridescenceThicknessMap:p.specularIntensityMap?E=p.specularIntensityMap:p.specularColorMap?E=p.specularColorMap:p.transmissionMap?E=p.transmissionMap:p.thicknessMap?E=p.thicknessMap:p.sheenColorMap?E=p.sheenColorMap:p.sheenRoughnessMap&&(E=p.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,x,E){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=E*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ot&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function SM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(E,v){const S=v.program;i.uniformBlockBinding(E,S)}function c(E,v){let S=r[E.id];S===void 0&&(_(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(E,C);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function u(E){const v=f();E.__bindingPointIndex=v;const S=n.createBuffer(),C=E.__size,R=E.usage;return n.bindBuffer(35345,S),n.bufferData(35345,C,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const v=r[E.id],S=E.uniforms,C=E.__cache;n.bindBuffer(35345,v);for(let R=0,F=S.length;R<F;R++){const b=S[R];if(m(b,R,C)===!0){const A=b.__offset,N=Array.isArray(b.value)?b.value:[b.value];let ie=0;for(let oe=0;oe<N.length;oe++){const V=N[oe],U=d(V);typeof V=="number"?(b.__data[0]=V,n.bufferSubData(35345,A+ie,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=V.elements[0],b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=V.elements[0],b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=V.elements[0]):(V.toArray(b.__data,ie),ie+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,A,b.__data)}}n.bindBuffer(35345,null)}function m(E,v,S){const C=E.value;if(S[v]===void 0){if(typeof C=="number")S[v]=C;else{const R=Array.isArray(C)?C:[C],F=[];for(let b=0;b<R.length;b++)F.push(R[b].clone());S[v]=F}return!0}else if(typeof C=="number"){if(S[v]!==C)return S[v]=C,!0}else{const R=Array.isArray(S[v])?S[v]:[S[v]],F=Array.isArray(C)?C:[C];for(let b=0;b<R.length;b++){const A=R[b];if(A.equals(F[b])===!1)return A.copy(F[b]),!0}}return!1}function _(E){const v=E.uniforms;let S=0;const C=16;let R=0;for(let F=0,b=v.length;F<b;F++){const A=v[F],N={boundary:0,storage:0},ie=Array.isArray(A.value)?A.value:[A.value];for(let oe=0,V=ie.length;oe<V;oe++){const U=ie[oe],J=d(U);N.boundary+=J.boundary,N.storage+=J.storage}if(A.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,F>0){R=S%C;const oe=C-R;R!==0&&oe-N.boundary<0&&(S+=C-R,A.__offset=S)}S+=N.storage}return R=S%C,R>0&&(S+=C-R),E.__size=S,E.__cache={},this}function d(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function x(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}function wM(){const n=Nr("canvas");return n.style.display="block",n}function Of(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:wM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const d=this;let p=!1,x=0,E=0,v=null,S=-1,C=null;const R=new Je,F=new Je;let b=null,A=e.width,N=e.height,ie=1,oe=null,V=null;const U=new Je(0,0,A,N),J=new Je(0,0,A,N);let te=!1;const ne=new Va;let H=!1,ce=!1,ae=null;const we=new st,z=new qe,le=new B,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function D(){return v===null?ie:1}let L=t;function Q(w,k){for(let $=0;$<w.length;$++){const O=w[$],Z=e.getContext(O,k);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),L=Q(k,w),L===null)throw Q(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,ge,pe,Se,y,T,G,q,Y,ue,he,ee,_e,se,M,g,I,W,K,fe,Me,me,X,Te;function Re(){re=new Nx(L),ge=new Lx(L,re,n),re.init(ge),me=new _M(L,re,ge),pe=new mM(L,re,ge),Se=new zx,y=new tM,T=new gM(L,re,pe,y,ge,me,Se),G=new Px(d),q=new Fx(d),Y=new jg(L,ge),X=new Ax(L,re,Y,ge),ue=new Ox(L,Y,Se,X),he=new Vx(L,ue,Y,Se),K=new Gx(L,ge,T),g=new Rx(y),ee=new eM(d,G,q,re,ge,X,g),_e=new bM(d,y),se=new iM,M=new cM(re,ge),W=new Tx(d,G,q,pe,he,u,a),I=new pM(d,he,ge),Te=new SM(L,Se,ge,pe),fe=new Cx(L,re,Se,ge),Me=new Ux(L,re,Se,ge),Se.programs=ee.programs,d.capabilities=ge,d.extensions=re,d.properties=y,d.renderLists=se,d.shadowMap=I,d.state=pe,d.info=Se}Re();const Ee=new yM(d,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(A,N,!1))},this.getSize=function(w){return w.set(A,N)},this.setSize=function(w,k,$){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=w,N=k,e.width=Math.floor(w*ie),e.height=Math.floor(k*ie),$!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(A*ie,N*ie).floor()},this.setDrawingBufferSize=function(w,k,$){A=w,N=k,ie=$,e.width=Math.floor(w*$),e.height=Math.floor(k*$),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,k,$,O){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,k,$,O),pe.viewport(R.copy(U).multiplyScalar(ie).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,$,O){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,$,O),pe.scissor(F.copy(J).multiplyScalar(ie).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){pe.setScissorTest(te=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(w=!0,k=!0,$=!0){let O=0;w&&(O|=16384),k&&(O|=256),$&&(O|=1024),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),se.dispose(),M.dispose(),y.dispose(),G.dispose(),q.dispose(),he.dispose(),X.dispose(),Te.dispose(),ee.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",be),Ee.removeEventListener("sessionend",Ae),ae&&(ae.dispose(),ae=null),He.stop()};function Ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Se.autoReset,k=I.enabled,$=I.autoUpdate,O=I.needsUpdate,Z=I.type;Re(),Se.autoReset=w,I.enabled=k,I.autoUpdate=$,I.needsUpdate=O,I.type=Z}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){const k=w.target;k.removeEventListener("dispose",je),ct(k)}function ct(w){P(w),y.remove(w)}function P(w){const k=y.get(w).programs;k!==void 0&&(k.forEach(function($){ee.releaseProgram($)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,$,O,Z,Le){k===null&&(k=xe);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=Gf(w,k,$,O,Z);pe.setMaterial(O,De);let Ue=$.index,Ve=1;O.wireframe===!0&&(Ue=ue.getWireframeAttribute($),Ve=2);const ze=$.drawRange,Be=$.attributes.position;let nt=ze.start*Ve,Ct=(ze.start+ze.count)*Ve;Le!==null&&(nt=Math.max(nt,Le.start*Ve),Ct=Math.min(Ct,(Le.start+Le.count)*Ve)),Ue!==null?(nt=Math.max(nt,0),Ct=Math.min(Ct,Ue.count)):Be!=null&&(nt=Math.max(nt,0),Ct=Math.min(Ct,Be.count));const fn=Ct-nt;if(fn<0||fn===1/0)return;X.setup(Z,O,Oe,$,Ue);let Gn,it=fe;if(Ue!==null&&(Gn=Y.get(Ue),it=Me,it.setIndex(Gn)),Z.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*D()),it.setMode(1)):it.setMode(4);else if(Z.isLine){let ke=O.linewidth;ke===void 0&&(ke=1),pe.setLineWidth(ke*D()),Z.isLineSegments?it.setMode(1):Z.isLineLoop?it.setMode(2):it.setMode(3)}else Z.isPoints?it.setMode(0):Z.isSprite&&it.setMode(4);if(Z.isInstancedMesh)it.renderInstances(nt,fn,Z.count);else if($.isInstancedBufferGeometry){const ke=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Zs=Math.min($.instanceCount,ke);it.renderInstances(nt,fn,Zs)}else it.render(nt,fn)},this.compile=function(w,k){function $(O,Z,Le){O.transparent===!0&&O.side===In&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,zt(O,Z,Le),O.side=Bn,O.needsUpdate=!0,zt(O,Z,Le),O.side=In):zt(O,Z,Le)}h=M.get(w),h.init(),_.push(h),w.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(d.physicallyCorrectLights),w.traverse(function(O){const Z=O.material;if(Z)if(Array.isArray(Z))for(let Le=0;Le<Z.length;Le++){const De=Z[Le];$(De,w,O)}else $(Z,w,O)}),_.pop(),h=null};let j=null;function de(w){j&&j(w)}function be(){He.stop()}function Ae(){He.start()}const He=new Rf;He.setAnimationLoop(de),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(w){j=w,Ee.setAnimationLoop(w),w===null?He.stop():He.start()},Ee.addEventListener("sessionstart",be),Ee.addEventListener("sessionend",Ae),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(k),k=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,k,v),h=M.get(w,_.length),h.init(),_.push(h),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(we),ce=this.localClippingEnabled,H=g.init(this.clippingPlanes,ce),f=se.get(w,m.length),f.init(),m.push(f),ut(w,k,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(oe,V),H===!0&&g.beginShadows();const $=h.state.shadowsArray;if(I.render($,w,k),H===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(f,w),h.setupLights(d.physicallyCorrectLights),k.isArrayCamera){const O=k.cameras;for(let Z=0,Le=O.length;Z<Le;Z++){const De=O[Z];gt(f,w,De,De.viewport)}}else gt(f,w,k);v!==null&&(T.updateMultisampleRenderTarget(v),T.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(d,w,k),X.resetDefaultState(),S=-1,C=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ut(w,k,$,O){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){O&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const De=he.update(w),Oe=w.material;Oe.visible&&f.push(w,De,Oe,$,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Se.render.frame&&(w.skeleton.update(),w.skeleton.frame=Se.render.frame),!w.frustumCulled||ne.intersectsObject(w))){O&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const De=he.update(w),Oe=w.material;if(Array.isArray(Oe)){const Ue=De.groups;for(let Ve=0,ze=Ue.length;Ve<ze;Ve++){const Be=Ue[Ve],nt=Oe[Be.materialIndex];nt&&nt.visible&&f.push(w,De,nt,$,le.z,Be)}}else Oe.visible&&f.push(w,De,Oe,$,le.z,null)}}const Le=w.children;for(let De=0,Oe=Le.length;De<Oe;De++)ut(Le[De],k,$,O)}function gt(w,k,$,O){const Z=w.opaque,Le=w.transmissive,De=w.transparent;h.setupLightsView($),H===!0&&g.setGlobalState(d.clippingPlanes,$),Le.length>0&&kn(Z,k,$),O&&pe.viewport(R.copy(O)),Z.length>0&&Ze(Z,k,$),Le.length>0&&Ze(Le,k,$),De.length>0&&Ze(De,k,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function kn(w,k,$){const O=ge.isWebGL2;ae===null&&(ae=new fi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Ir:ci,minFilter:Dr,samples:O&&s===!0?4:0})),d.getDrawingBufferSize(z),O?ae.setSize(z.x,z.y):ae.setSize(pa(z.x),pa(z.y));const Z=d.getRenderTarget();d.setRenderTarget(ae),d.clear();const Le=d.toneMapping;d.toneMapping=bn,Ze(w,k,$),d.toneMapping=Le,T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae),d.setRenderTarget(Z)}function Ze(w,k,$){const O=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Le=w.length;Z<Le;Z++){const De=w[Z],Oe=De.object,Ue=De.geometry,Ve=O===null?De.material:O,ze=De.group;Oe.layers.test($.layers)&&un(Oe,k,$,Ue,Ve,ze)}}function un(w,k,$,O,Z,Le){w.onBeforeRender(d,k,$,O,Z,Le),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(d,k,$,O,w,Le),Z.transparent===!0&&Z.side===In&&Z.forceSinglePass===!1?(Z.side=Ot,Z.needsUpdate=!0,d.renderBufferDirect($,k,O,Z,w,Le),Z.side=Bn,Z.needsUpdate=!0,d.renderBufferDirect($,k,O,Z,w,Le),Z.side=In):d.renderBufferDirect($,k,O,Z,w,Le),w.onAfterRender(d,k,$,O,Z,Le)}function zt(w,k,$){k.isScene!==!0&&(k=xe);const O=y.get(w),Z=h.state.lights,Le=h.state.shadowsArray,De=Z.state.version,Oe=ee.getParameters(w,Z.state,Le,k,$),Ue=ee.getProgramCacheKey(Oe);let Ve=O.programs;O.environment=w.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(w.isMeshStandardMaterial?q:G).get(w.envMap||O.environment),Ve===void 0&&(w.addEventListener("dispose",je),Ve=new Map,O.programs=Ve);let ze=Ve.get(Ue);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===De)return qa(w,Oe),ze}else Oe.uniforms=ee.getUniforms(w),w.onBuild($,Oe,d),w.onBeforeCompile(Oe,d),ze=ee.acquireProgram(Oe,Ue),Ve.set(Ue,ze),O.uniforms=Oe.uniforms;const Be=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=g.uniform),qa(w,Oe),O.needsLights=Hf(w),O.lightsStateVersion=De,O.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix);const nt=ze.getUniforms(),Ct=As.seqWithValue(nt.seq,Be);return O.currentProgram=ze,O.uniformsList=Ct,ze}function qa(w,k){const $=y.get(w);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Gf(w,k,$,O,Z){k.isScene!==!0&&(k=xe),T.resetTextureUnits();const Le=k.fog,De=O.isMeshStandardMaterial?k.environment:null,Oe=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ui,Ue=(O.isMeshStandardMaterial?q:G).get(O.envMap||De),Ve=O.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!O.normalMap&&!!$.attributes.tangent,Be=!!$.morphAttributes.position,nt=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color,fn=O.toneMapped?d.toneMapping:bn,Gn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=Gn!==void 0?Gn.length:0,ke=y.get(O),Zs=h.state.lights;if(H===!0&&(ce===!0||w!==C)){const Lt=w===C&&O.id===S;g.setState(O,w,Lt)}let ft=!1;O.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Zs.state.version||ke.outputEncoding!==Oe||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ue||O.fog===!0&&ke.fog!==Le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==g.numPlanes||ke.numIntersection!==g.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==ze||ke.morphTargets!==Be||ke.morphNormals!==nt||ke.morphColors!==Ct||ke.toneMapping!==fn||ge.isWebGL2===!0&&ke.morphTargetsCount!==it)&&(ft=!0):(ft=!0,ke.__version=O.version);let Vn=ke.currentProgram;ft===!0&&(Vn=zt(O,k,Z));let Xa=!1,ir=!1,Js=!1;const Mt=Vn.getUniforms(),Hn=ke.uniforms;if(pe.useProgram(Vn.program)&&(Xa=!0,ir=!0,Js=!0),O.id!==S&&(S=O.id,ir=!0),Xa||C!==w){if(Mt.setValue(L,"projectionMatrix",w.projectionMatrix),ge.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),C!==w&&(C=w,ir=!0,Js=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Lt=Mt.map.cameraPosition;Lt!==void 0&&Lt.setValue(L,le.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Z.isSkinnedMesh)&&Mt.setValue(L,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){Mt.setOptional(L,Z,"bindMatrix"),Mt.setOptional(L,Z,"bindMatrixInverse");const Lt=Z.skeleton;Lt&&(ge.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),Mt.setValue(L,"boneTexture",Lt.boneTexture,T),Mt.setValue(L,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qs=$.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&ge.isWebGL2===!0)&&K.update(Z,$,O,Vn),(ir||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Mt.setValue(L,"receiveShadow",Z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Hn.envMap.value=Ue,Hn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ir&&(Mt.setValue(L,"toneMappingExposure",d.toneMappingExposure),ke.needsLights&&Vf(Hn,Js),Le&&O.fog===!0&&_e.refreshFogUniforms(Hn,Le),_e.refreshMaterialUniforms(Hn,O,ie,N,ae),As.upload(L,ke.uniformsList,Hn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(As.upload(L,ke.uniformsList,Hn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Mt.setValue(L,"center",Z.center),Mt.setValue(L,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(L,"normalMatrix",Z.normalMatrix),Mt.setValue(L,"modelMatrix",Z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Lt=O.uniformsGroups;for(let eo=0,Wf=Lt.length;eo<Wf;eo++)if(ge.isWebGL2){const ja=Lt[eo];Te.update(ja,Vn),Te.bind(ja,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Vf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Hf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,k,$){y.get(w.texture).__webglTexture=k,y.get(w.depthTexture).__webglTexture=$;const O=y.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=$===void 0,O.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const $=y.get(w);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,$=0){v=w,x=k,E=$;let O=!0,Z=null,Le=!1,De=!1;if(w){const Ue=y.get(w);Ue.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),O=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(w):Ue.__hasExternalTextures&&T.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const ze=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=ze[k],Le=!0):ge.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?Z=y.get(w).__webglMultisampledFramebuffer:Z=ze,R.copy(w.viewport),F.copy(w.scissor),b=w.scissorTest}else R.copy(U).multiplyScalar(ie).floor(),F.copy(J).multiplyScalar(ie).floor(),b=te;if(pe.bindFramebuffer(36160,Z)&&ge.drawBuffers&&O&&pe.drawBuffers(w,Z),pe.viewport(R),pe.scissor(F),pe.setScissorTest(b),Le){const Ue=y.get(w.texture);L.framebufferTexture2D(36160,36064,34069+k,Ue.__webglTexture,$)}else if(De){const Ue=y.get(w.texture),Ve=k||0;L.framebufferTextureLayer(36160,36064,Ue.__webglTexture,$||0,Ve)}S=-1},this.readRenderTargetPixels=function(w,k,$,O,Z,Le,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){pe.bindFramebuffer(36160,Oe);try{const Ue=w.texture,Ve=Ue.format,ze=Ue.type;if(Ve!==Yt&&me.convert(Ve)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Ir&&(re.has("EXT_color_buffer_half_float")||ge.isWebGL2&&re.has("EXT_color_buffer_float"));if(ze!==ci&&me.convert(ze)!==L.getParameter(35738)&&!(ze===ii&&(ge.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-O&&$>=0&&$<=w.height-Z&&L.readPixels(k,$,O,Z,me.convert(Ve),me.convert(ze),Le)}finally{const Ue=v!==null?y.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(w,k,$=0){const O=Math.pow(2,-$),Z=Math.floor(k.image.width*O),Le=Math.floor(k.image.height*O);T.setTexture2D(k,0),L.copyTexSubImage2D(3553,$,0,0,w.x,w.y,Z,Le),pe.unbindTexture()},this.copyTextureToTexture=function(w,k,$,O=0){const Z=k.image.width,Le=k.image.height,De=me.convert($.format),Oe=me.convert($.type);T.setTexture2D($,0),L.pixelStorei(37440,$.flipY),L.pixelStorei(37441,$.premultiplyAlpha),L.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?L.texSubImage2D(3553,O,w.x,w.y,Z,Le,De,Oe,k.image.data):k.isCompressedTexture?L.compressedTexSubImage2D(3553,O,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):L.texSubImage2D(3553,O,w.x,w.y,De,Oe,k.image),O===0&&$.generateMipmaps&&L.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,$,O,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,Ue=me.convert(O.format),Ve=me.convert(O.type);let ze;if(O.isData3DTexture)T.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)T.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,O.flipY),L.pixelStorei(37441,O.premultiplyAlpha),L.pixelStorei(3317,O.unpackAlignment);const Be=L.getParameter(3314),nt=L.getParameter(32878),Ct=L.getParameter(3316),fn=L.getParameter(3315),Gn=L.getParameter(32877),it=$.isCompressedTexture?$.mipmaps[0]:$.image;L.pixelStorei(3314,it.width),L.pixelStorei(32878,it.height),L.pixelStorei(3316,w.min.x),L.pixelStorei(3315,w.min.y),L.pixelStorei(32877,w.min.z),$.isDataTexture||$.isData3DTexture?L.texSubImage3D(ze,Z,k.x,k.y,k.z,Le,De,Oe,Ue,Ve,it.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,Z,k.x,k.y,k.z,Le,De,Oe,Ue,it.data)):L.texSubImage3D(ze,Z,k.x,k.y,k.z,Le,De,Oe,Ue,Ve,it),L.pixelStorei(3314,Be),L.pixelStorei(32878,nt),L.pixelStorei(3316,Ct),L.pixelStorei(3315,fn),L.pixelStorei(32877,Gn),Z===0&&O.generateMipmaps&&L.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){x=0,E=0,v=null,pe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class EM extends Of{}EM.prototype.isWebGL1Renderer=!0;class Wa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Wa(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class TM extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class AM extends Gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const LM=new CM;class Uf{constructor(e){this.manager=e!==void 0?e:LM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class RM extends Uf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Jc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Nr("img");function l(){u(),Jc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class PM extends Uf{constructor(e){super(e)}load(e,t,i,r){const s=new At,a=new RM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class zf extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ho=new st,Qc=new B,eu=new B;class Bf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tu=new st,pr=new B,Wo=new B;class DM extends Bf{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),i.position.copy(pr),Wo.copy(i.position),Wo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wo),i.updateMatrixWorld(),r.makeTranslation(-pr.x,-pr.y,-pr.z),tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}class _s extends zf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new DM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IM extends Bf{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FM extends zf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new IM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const NM="/zzemalStudio/assets/smoke-73431558.png";class nu{constructor(e,t,i){Hr(this,"canvas");Hr(this,"lightColor");Hr(this,"materialColor");this.canvas=e,this.lightColor=t||3482389,this.materialColor=i||6632719;const r=new TM,s=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Of({canvas:e,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1});a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight*1.2),s.position.setZ(480),s.position.setY(200),s.position.setX(0),a.shadowMap.enabled=!0,a.render(r,s),new _s(this.lightColor,5,15).position.set(4.4,6.8,.2);let l=new FM(6717183,1.5);l.position.set(0,0,2);let c=new _s(13395456,50,450,1.7);c.position.set(100,100,100);let u=new _s(14177406,50,450,1.7);u.position.set(100,200,150);let f=new _s(3569580,50,450,1.7);f.position.set(200,100,50),r.add(l,c,u,f),r.fog=new Wa(0,.001),a.setClearColor(r.fog.color);const h=[];new PM().load(NM,function(d){let p=new Ys(500,500),x=new AM({map:d,transparent:!0});for(let E=0;E<30;E++){const v=new Mn(p,x);v.position.set(Math.random()*800-400,10,Math.random()*400),v.rotation.x=0,v.rotation.z=Math.random()*2*Math.PI,v.material.opacity=.55,h.push(v),r.add(v)}});function _(){requestAnimationFrame(_);for(let d=0;d<h.length;d++){const p=h[d];p.rotation.z-=.001}a.render(r,s)}_()}}const OM=Ji({data(){return{load:!1}},mounted(){new nu(document.querySelector(".experience-canvas"))},methods:{changeLightColor(n=9423267){if(this.load)return;this.load=!0;let e=document.querySelector(".experience"),t=document.querySelector(".experience-canvas");e==null||e.classList.add("fadeOutAndIn"),setTimeout(()=>{new nu(t,n)},250),setTimeout(()=>{e==null||e.classList.remove("fadeOutAndIn"),this.load=!1},500)}}});const UM={class:"three__canvas"},zM=Qe("div",{class:"experience"},[Qe("canvas",{class:"experience-canvas"})],-1),BM=[zM];function kM(n,e,t,i,r,s){return Qi(),er("section",UM,BM)}const GM=Ur(OM,[["render",kM]]);const VM={},HM={class:"footer__wrap"},WM=Xu('<div class="footer__list"><h4>스튜디오 달리</h4><ul><li>24시간 예약가능</li><li>상담 및 문의 시간 10:00 ~ 19:00</li></ul></div><div class="footer__list"><h4>주소</h4><ul><li>서울시 강서구 양천구 184-8 지하 1층 B101호</li></ul></div><div class="footer__list"><h4>문의</h4><ul><li>0507-1335-9835</li><li><a href="https://www.instagram.com/studio.darly/" target="_blank" class="footer__icon"><img src="'+uf+'" class="IconSize"></a><a href="https://pf.kakao.com/_yxngWxj" target="_blank" class="footer__icon"><img src="'+ff+'" class="IconSize"></a></li></ul></div><div class="footer__list"><h4>계좌안내</h4><ul><li>예금주 : 방민규</li><li>우리은행 1002-229-545508</li></ul></div>',4),qM=[WM];function XM(n,e){return Qi(),er("div",HM,qM)}const jM=Ur(VM,[["render",XM]]),$M=n=>(Pa("data-v-939970f3"),n=n(),Da(),n),YM={class:"content__wrap"},KM={class:"header__wrap"},ZM=$M(()=>Qe("img",{src:Ku,class:"darlyIcon"},null,-1)),JM={class:"nav__wrap"},QM={class:"mainContents"},ey=Ji({__name:"App",setup(n){const e=yu(!1),t=()=>{e.value=!e.value,e.value==!0&&window.innerWidth<500?document.querySelector("body").classList.add("bodyNoScroll"):document.querySelector("body").classList.remove("bodyNoScroll")};return(i,r)=>(Qi(),er("div",YM,[Qe("header",null,[Qe("div",KM,[et(Vt(Ii),{to:"/"},{default:Di(()=>[ZM]),_:1}),et(wm,{class:"hamburgurIcon",showMenu:e.value,onToggleMenu:t},null,8,["showMenu"])])]),Qe("nav",JM,[md(et(Lm,{showMenu:e.value,onToggleMenu:t},null,8,["showMenu"]),[[_p,e.value]])]),Qe("main",QM,[et(Vt(cf))]),et(jM),et(GM)]))}});const ty=Ur(ey,[["__scopeId","data-v-939970f3"]]),ny="modulepreload",iy=function(n){return"/zzemalStudio/"+n},iu={},qo=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=iy(s),s in iu)return;iu[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":ny,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};const ry={},sy=n=>(Pa("data-v-9425820e"),n=n(),Da(),n),oy=sy(()=>Qe("div",{class:"center"},[Qe("h1",null,"S T U D I O _ D A R L Y"),Qe("p",null,"2023. 02 OPEN")],-1)),ay=[oy];function ly(n,e){return Qi(),er("main",null,ay)}const cy=Ur(ry,[["render",ly],["__scopeId","data-v-9425820e"]]),uy=ym({history:Bp("/zzemalStudio/"),routes:[{path:"/",name:"home",component:cy},{path:"/reserve",name:"reserve",component:()=>qo(()=>import("./ReserveView-cb11ca0e.js"),["assets/ReserveView-cb11ca0e.js","assets/ReserveView-0ded2f02.css"])},{path:"/reserveWrite",name:"reserveWrite",component:()=>qo(()=>import("./ReserveWriteView-667db5f3.js"),["assets/ReserveWriteView-667db5f3.js","assets/sweetalert2.all-742031dd.js","assets/ReserveWriteView-1dd72aa7.css"])},{path:"/location",name:"location",component:()=>qo(()=>import("./LocationView-5a1e5f7c.js"),["assets/LocationView-5a1e5f7c.js","assets/sweetalert2.all-742031dd.js","assets/LocationView-a04de8aa.css"])}]});const kf=Mp(ty);kf.use(uy);kf.mount("#app");export{rn as F,py as T,Ur as _,Qe as a,et as b,er as c,Xu as d,Es as e,Ji as f,Or as g,Yu as h,md as i,mt as j,ad as k,Qi as o,dy as r,hy as t,Vt as u,my as v,Di as w};
