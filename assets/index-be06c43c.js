var Sf=Object.defineProperty;var wf=(n,e,t)=>e in n?Sf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ir=(n,e,t)=>(wf(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Qo(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function ea(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?Cf(i):ea(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(n))return n;if(Qe(n))return n}}const Ef=/;(?![^(]*\))/g,Tf=/:([^]+)/,Af=/\/\*.*?\*\//gs;function Cf(n){const e={};return n.replace(Af,"").split(Ef).forEach(t=>{if(t){const i=t.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ta(n){let e="";if(ft(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ta(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rf=Qo(Lf);function Uc(n){return!!n||n===""}const Ze={},Li=[],$t=()=>{},Pf=()=>!1,Df=/^on[^a-z]/,ys=n=>Df.test(n),na=n=>n.startsWith("onUpdate:"),St=Object.assign,ia=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},If=Object.prototype.hasOwnProperty,ke=(n,e)=>If.call(n,e),Fe=Array.isArray,cr=n=>bs(n)==="[object Map]",Ff=n=>bs(n)==="[object Set]",Oe=n=>typeof n=="function",ft=n=>typeof n=="string",ra=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",zc=n=>Qe(n)&&Oe(n.then)&&Oe(n.catch),Nf=Object.prototype.toString,bs=n=>Nf.call(n),Of=n=>bs(n).slice(8,-1),Uf=n=>bs(n)==="[object Object]",sa=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,as=Qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ss=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zf=/-(\w)/g,Fi=Ss(n=>n.replace(zf,(e,t)=>t?t.toUpperCase():"")),Bf=/\B([A-Z])/g,Wi=Ss(n=>n.replace(Bf,"-$1").toLowerCase()),Bc=Ss(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bs=Ss(n=>n?`on${Bc(n)}`:""),pr=(n,e)=>!Object.is(n,e),Gs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ms=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Gc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Da;const Gf=()=>Da||(Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Jt;class kf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Jt;try{return Jt=this,e()}finally{Jt=t}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Vf(n,e=Jt){e&&e.active&&e.effects.push(n)}const oa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},kc=n=>(n.w&Fn)>0,Vc=n=>(n.n&Fn)>0,Hf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Fn},Wf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];kc(r)&&!Vc(r)?r.delete(n):e[t++]=r,r.w&=~Fn,r.n&=~Fn}e.length=t}},Ro=new WeakMap;let or=0,Fn=1;const Po=30;let Wt;const Qn=Symbol(""),Do=Symbol("");class aa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Vf(this,i)}run(){if(!this.active)return this.fn();let e=Wt,t=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,Pn=!0,Fn=1<<++or,or<=Po?Hf(this):Ia(this),this.fn()}finally{or<=Po&&Wf(this),Fn=1<<--or,Wt=this.parent,Pn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Ia(this),this.onStop&&this.onStop(),this.active=!1)}}function Ia(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Pn=!0;const Hc=[];function qi(){Hc.push(Pn),Pn=!1}function Xi(){const n=Hc.pop();Pn=n===void 0?!0:n}function Ot(n,e,t){if(Pn&&Wt){let i=Ro.get(n);i||Ro.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=oa()),Wc(r)}}function Wc(n,e){let t=!1;or<=Po?Vc(n)||(n.n|=Fn,t=!kc(n)):t=!n.has(Wt),t&&(n.add(Wt),Wt.deps.push(n))}function Mn(n,e,t,i,r,s){const a=Ro.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(n)){const l=Gc(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(n)?sa(t)&&o.push(a.get("length")):(o.push(a.get(Qn)),cr(n)&&o.push(a.get(Do)));break;case"delete":Fe(n)||(o.push(a.get(Qn)),cr(n)&&o.push(a.get(Do)));break;case"set":cr(n)&&o.push(a.get(Qn));break}if(o.length===1)o[0]&&Io(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Io(oa(l))}}function Io(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&Fa(i);for(const i of t)i.computed||Fa(i)}function Fa(n,e){(n!==Wt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const qf=Qo("__proto__,__v_isRef,__isVue"),qc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ra)),Xf=la(),jf=la(!1,!0),$f=la(!0),Na=Yf();function Yf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,a=this.length;s<a;s++)Ot(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qi();const i=We(this)[e].apply(this,t);return Xi(),i}}),n}function la(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?fh:Kc:e?Yc:$c).get(i))return i;const a=Fe(i);if(!n&&a&&ke(Na,r))return Reflect.get(Na,r,s);const o=Reflect.get(i,r,s);return(ra(r)?qc.has(r):qf(r))||(n||Ot(i,"get",r),e)?o:gt(o)?a&&sa(r)?o:o.value:Qe(o)?n?Zc(o):Tr(o):o}}const Kf=Xc(),Zf=Xc(!0);function Xc(n=!1){return function(t,i,r,s){let a=t[i];if(Ni(a)&&gt(a)&&!gt(r))return!1;if(!n&&(!gs(r)&&!Ni(r)&&(a=We(a),r=We(r)),!Fe(t)&&gt(a)&&!gt(r)))return a.value=r,!0;const o=Fe(t)&&sa(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,r,s);return t===We(s)&&(o?pr(r,a)&&Mn(t,"set",i,r):Mn(t,"add",i,r)),l}}function Jf(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Mn(n,"delete",e,void 0),i}function Qf(n,e){const t=Reflect.has(n,e);return(!ra(e)||!qc.has(e))&&Ot(n,"has",e),t}function eh(n){return Ot(n,"iterate",Fe(n)?"length":Qn),Reflect.ownKeys(n)}const jc={get:Xf,set:Kf,deleteProperty:Jf,has:Qf,ownKeys:eh},th={get:$f,set(n,e){return!0},deleteProperty(n,e){return!0}},nh=St({},jc,{get:jf,set:Zf}),ca=n=>n,ws=n=>Reflect.getPrototypeOf(n);function Fr(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(e!==s&&Ot(r,"get",e),Ot(r,"get",s));const{has:a}=ws(r),o=i?ca:t?ha:mr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Nr(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(n!==r&&Ot(i,"has",n),Ot(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Or(n,e=!1){return n=n.__v_raw,!e&&Ot(We(n),"iterate",Qn),Reflect.get(n,"size",n)}function Oa(n){n=We(n);const e=We(this);return ws(e).has.call(e,n)||(e.add(n),Mn(e,"add",n,n)),this}function Ua(n,e){e=We(e);const t=We(this),{has:i,get:r}=ws(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?pr(e,a)&&Mn(t,"set",n,e):Mn(t,"add",n,e),this}function za(n){const e=We(this),{has:t,get:i}=ws(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Mn(e,"delete",n,void 0),s}function Ba(){const n=We(this),e=n.size!==0,t=n.clear();return e&&Mn(n,"clear",void 0,void 0),t}function Ur(n,e){return function(i,r){const s=this,a=s.__v_raw,o=We(a),l=e?ca:n?ha:mr;return!n&&Ot(o,"iterate",Qn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function zr(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),a=cr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ca:e?ha:mr;return!e&&Ot(s,"iterate",l?Do:Qn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bn(n){return function(...e){return n==="delete"?!1:this}}function ih(){const n={get(s){return Fr(this,s)},get size(){return Or(this)},has:Nr,add:Oa,set:Ua,delete:za,clear:Ba,forEach:Ur(!1,!1)},e={get(s){return Fr(this,s,!1,!0)},get size(){return Or(this)},has:Nr,add:Oa,set:Ua,delete:za,clear:Ba,forEach:Ur(!1,!0)},t={get(s){return Fr(this,s,!0)},get size(){return Or(this,!0)},has(s){return Nr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ur(!0,!1)},i={get(s){return Fr(this,s,!0,!0)},get size(){return Or(this,!0)},has(s){return Nr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zr(s,!1,!1),t[s]=zr(s,!0,!1),e[s]=zr(s,!1,!0),i[s]=zr(s,!0,!0)}),[n,t,e,i]}const[rh,sh,oh,ah]=ih();function ua(n,e){const t=e?n?ah:oh:n?sh:rh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ke(t,r)&&r in i?t:i,r,s)}const lh={get:ua(!1,!1)},ch={get:ua(!1,!0)},uh={get:ua(!0,!1)},$c=new WeakMap,Yc=new WeakMap,Kc=new WeakMap,fh=new WeakMap;function hh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dh(n){return n.__v_skip||!Object.isExtensible(n)?0:hh(Of(n))}function Tr(n){return Ni(n)?n:fa(n,!1,jc,lh,$c)}function ph(n){return fa(n,!1,nh,ch,Yc)}function Zc(n){return fa(n,!0,th,uh,Kc)}function fa(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=dh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ri(n){return Ni(n)?Ri(n.__v_raw):!!(n&&n.__v_isReactive)}function Ni(n){return!!(n&&n.__v_isReadonly)}function gs(n){return!!(n&&n.__v_isShallow)}function Jc(n){return Ri(n)||Ni(n)}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function Qc(n){return ms(n,"__v_skip",!0),n}const mr=n=>Qe(n)?Tr(n):n,ha=n=>Qe(n)?Zc(n):n;function eu(n){Pn&&Wt&&(n=We(n),Wc(n.dep||(n.dep=oa())))}function tu(n,e){n=We(n),n.dep&&Io(n.dep)}function gt(n){return!!(n&&n.__v_isRef===!0)}function mh(n){return nu(n,!1)}function gh(n){return nu(n,!0)}function nu(n,e){return gt(n)?n:new _h(n,e)}class _h{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:mr(e)}get value(){return eu(this),this._value}set value(e){const t=this.__v_isShallow||gs(e)||Ni(e);e=t?e:We(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mr(e),tu(this))}}function ei(n){return gt(n)?n.value:n}const xh={get:(n,e,t)=>ei(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function iu(n){return Ri(n)?n:new Proxy(n,xh)}var ru;class vh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ru]=!1,this._dirty=!0,this.effect=new aa(e,()=>{this._dirty||(this._dirty=!0,tu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return eu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ru="__v_isReadonly";function Mh(n,e,t=!1){let i,r;const s=Oe(n);return s?(i=n,r=$t):(i=n.get,r=n.set),new vh(i,r,s||!r,t)}function Dn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Es(s,e,t)}return r}function Yt(n,e,t,i){if(Oe(n)){const s=Dn(n,e,t,i);return s&&zc(s)&&s.catch(a=>{Es(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Yt(n[s],e,t,i));return r}function Es(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[n,a,o]);return}}yh(n,t,r,i)}function yh(n,e,t,i=!0){console.error(n)}let gr=!1,Fo=!1;const pt=[];let nn=0;const Pi=[];let pn=null,$n=0;const su=Promise.resolve();let da=null;function ou(n){const e=da||su;return n?e.then(this?n.bind(this):n):e}function bh(n){let e=nn+1,t=pt.length;for(;e<t;){const i=e+t>>>1;_r(pt[i])<n?e=i+1:t=i}return e}function pa(n){(!pt.length||!pt.includes(n,gr&&n.allowRecurse?nn+1:nn))&&(n.id==null?pt.push(n):pt.splice(bh(n.id),0,n),au())}function au(){!gr&&!Fo&&(Fo=!0,da=su.then(cu))}function Sh(n){const e=pt.indexOf(n);e>nn&&pt.splice(e,1)}function wh(n){Fe(n)?Pi.push(...n):(!pn||!pn.includes(n,n.allowRecurse?$n+1:$n))&&Pi.push(n),au()}function Ga(n,e=gr?nn+1:0){for(;e<pt.length;e++){const t=pt[e];t&&t.pre&&(pt.splice(e,1),e--,t())}}function lu(n){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((t,i)=>_r(t)-_r(i)),$n=0;$n<pn.length;$n++)pn[$n]();pn=null,$n=0}}const _r=n=>n.id==null?1/0:n.id,Eh=(n,e)=>{const t=_r(n)-_r(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function cu(n){Fo=!1,gr=!0,pt.sort(Eh);const e=$t;try{for(nn=0;nn<pt.length;nn++){const t=pt[nn];t&&t.active!==!1&&Dn(t,null,14)}}finally{nn=0,pt.length=0,lu(),gr=!1,da=null,(pt.length||Pi.length)&&cu()}}function Th(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Ze;h&&(r=t.map(m=>ft(m)?m.trim():m)),f&&(r=t.map(Gc))}let o,l=i[o=Bs(e)]||i[o=Bs(Fi(e))];!l&&s&&(l=i[o=Bs(Wi(e))]),l&&Yt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Yt(c,n,6,r)}}function uu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Oe(n)){const l=c=>{const u=uu(c,e,!0);u&&(o=!0,St(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):St(a,s),Qe(n)&&i.set(n,a),a)}function Ts(n,e){return!n||!ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,Wi(e))||ke(n,e))}let rn=null,fu=null;function _s(n){const e=rn;return rn=n,fu=n&&n.type.__scopeId||null,e}function Ah(n,e=rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&$a(-1);const s=_s(e);let a;try{a=n(...r)}finally{_s(s),i._d&&$a(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ks(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:x,inheritAttrs:p}=n;let d,_;const w=_s(n);try{if(t.shapeFlag&4){const A=r||i;d=en(u.call(A,A,f,s,m,h,x)),_=l}else{const A=e;d=en(A.length>1?A(s,{attrs:l,slots:o,emit:c}):A(s,null)),_=e.props?l:Ch(l)}}catch(A){fr.length=0,Es(A,n,1),d=Et(xr)}let v=d;if(_&&p!==!1){const A=Object.keys(_),{shapeFlag:E}=v;A.length&&E&7&&(a&&A.some(na)&&(_=Lh(_,a)),v=Oi(v,_))}return t.dirs&&(v=Oi(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),d=v,_s(w),d}const Ch=n=>{let e;for(const t in n)(t==="class"||t==="style"||ys(t))&&((e||(e={}))[t]=n[t]);return e},Lh=(n,e)=>{const t={};for(const i in n)(!na(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Rh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ka(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Ts(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ka(i,a,c):!0:!!a;return!1}function ka(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ts(t,s))return!0}return!1}function Ph({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Dh=n=>n.__isSuspense;function Ih(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):wh(n)}function ls(n,e){if(mt){let t=mt.provides;const i=mt.parent&&mt.parent.provides;i===t&&(t=mt.provides=Object.create(i)),t[n]=e}}function xn(n,e,t=!1){const i=mt||rn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i.proxy):e}}const Br={};function cs(n,e,t){return hu(n,e,t)}function hu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){const o=mt;let l,c=!1,u=!1;if(gt(n)?(l=()=>n.value,c=gs(n)):Ri(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(v=>Ri(v)||gs(v)),l=()=>n.map(v=>{if(gt(v))return v.value;if(Ri(v))return Ai(v);if(Oe(v))return Dn(v,o,2)})):Oe(n)?e?l=()=>Dn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Yt(n,o,3,[h])}:l=$t,e&&i){const v=l;l=()=>Ai(v())}let f,h=v=>{f=_.onStop=()=>{Dn(v,o,4)}},m;if(Mr)if(h=$t,e?t&&Yt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const v=Ad();m=v.__watcherHandles||(v.__watcherHandles=[])}else return $t;let x=u?new Array(n.length).fill(Br):Br;const p=()=>{if(_.active)if(e){const v=_.run();(i||c||(u?v.some((A,E)=>pr(A,x[E])):pr(v,x)))&&(f&&f(),Yt(e,o,3,[v,x===Br?void 0:u&&x[0]===Br?[]:x,h]),x=v)}else _.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>wt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),d=()=>pa(p));const _=new aa(l,d);e?t?p():x=_.run():r==="post"?wt(_.run.bind(_),o&&o.suspense):_.run();const w=()=>{_.stop(),o&&o.scope&&ia(o.scope.effects,_)};return m&&m.push(w),w}function Fh(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?du(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const a=mt;Ui(this);const o=hu(r,s.bind(i),t);return a?Ui(a):ti(),o}function du(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ai(n,e){if(!Qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),gt(n))Ai(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)Ai(n[t],e);else if(Ff(n)||cr(n))n.forEach(t=>{Ai(t,e)});else if(Uf(n))for(const t in n)Ai(n[t],e);return n}function Ar(n){return Oe(n)?{setup:n,name:n.name}:n}const us=n=>!!n.type.__asyncLoader,pu=n=>n.type.__isKeepAlive;function Nh(n,e){mu(n,"a",e)}function Oh(n,e){mu(n,"da",e)}function mu(n,e,t=mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(As(e,i,t),t){let r=t.parent;for(;r&&r.parent;)pu(r.parent.vnode)&&Uh(i,e,t,r),r=r.parent}}function Uh(n,e,t,i){const r=As(e,n,i,!0);gu(()=>{ia(i[e],r)},t)}function As(n,e,t=mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;qi(),Ui(t);const o=Yt(e,t,n,a);return ti(),Xi(),o});return i?r.unshift(s):r.push(s),s}}const yn=n=>(e,t=mt)=>(!Mr||n==="sp")&&As(n,(...i)=>e(...i),t),zh=yn("bm"),Bh=yn("m"),Gh=yn("bu"),kh=yn("u"),Vh=yn("bum"),gu=yn("um"),Hh=yn("sp"),Wh=yn("rtg"),qh=yn("rtc");function Xh(n,e=mt){As("ec",n,e)}function Gn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(qi(),Yt(l,t,8,[n.el,o,n,e]),Xi())}}const jh=Symbol(),No=n=>n?Cu(n)?va(n)||n.proxy:No(n.parent):null,ur=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>No(n.parent),$root:n=>No(n.root),$emit:n=>n.emit,$options:n=>ma(n),$forceUpdate:n=>n.f||(n.f=()=>pa(n.update)),$nextTick:n=>n.n||(n.n=ou.bind(n.proxy)),$watch:n=>Fh.bind(n)}),Vs=(n,e)=>n!==Ze&&!n.__isScriptSetup&&ke(n,e),$h={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vs(i,e))return a[e]=1,i[e];if(r!==Ze&&ke(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ke(c,e))return a[e]=3,s[e];if(t!==Ze&&ke(t,e))return a[e]=4,t[e];Oo&&(a[e]=0)}}const u=ur[e];let f,h;if(u)return e==="$attrs"&&Ot(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&ke(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vs(r,e)?(r[e]=t,!0):i!==Ze&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&ke(n,a)||Vs(e,a)||(o=s[0])&&ke(o,a)||ke(i,a)||ke(ur,a)||ke(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Oo=!0;function Yh(n){const e=ma(n),t=n.proxy,i=n.ctx;Oo=!1,e.beforeCreate&&Va(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:v,unmounted:A,render:E,renderTracked:D,renderTriggered:O,errorCaptured:b,serverPrefetch:C,expose:U,inheritAttrs:oe,components:ae,directives:B,filters:F}=e;if(c&&Kh(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const ee in a){const H=a[ee];Oe(H)&&(i[ee]=H.bind(t))}if(r){const ee=r.call(t,t);Qe(ee)&&(n.data=Tr(ee))}if(Oo=!0,s)for(const ee in s){const H=s[ee],ce=Oe(H)?H.bind(t,t):Oe(H.get)?H.get.bind(t,t):$t,fe=!Oe(H)&&Oe(H.set)?H.set.bind(t):$t,ye=Gt({get:ce,set:fe});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ye.value,set:k=>ye.value=k})}if(o)for(const ee in o)_u(o[ee],i,t,ee);if(l){const ee=Oe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(H=>{ls(H,ee[H])})}u&&Va(u,n,"c");function ie(ee,H){Fe(H)?H.forEach(ce=>ee(ce.bind(t))):H&&ee(H.bind(t))}if(ie(zh,f),ie(Bh,h),ie(Gh,m),ie(kh,x),ie(Nh,p),ie(Oh,d),ie(Xh,b),ie(qh,D),ie(Wh,O),ie(Vh,w),ie(gu,A),ie(Hh,C),Fe(U))if(U.length){const ee=n.exposed||(n.exposed={});U.forEach(H=>{Object.defineProperty(ee,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else n.exposed||(n.exposed={});E&&n.render===$t&&(n.render=E),oe!=null&&(n.inheritAttrs=oe),ae&&(n.components=ae),B&&(n.directives=B)}function Kh(n,e,t=$t,i=!1){Fe(n)&&(n=Uo(n));for(const r in n){const s=n[r];let a;Qe(s)?"default"in s?a=xn(s.from||r,s.default,!0):a=xn(s.from||r):a=xn(s),gt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Va(n,e,t){Yt(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _u(n,e,t,i){const r=i.includes(".")?du(t,i):()=>t[i];if(ft(n)){const s=e[n];Oe(s)&&cs(r,s)}else if(Oe(n))cs(r,n.bind(t));else if(Qe(n))if(Fe(n))n.forEach(s=>_u(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&cs(r,s,n)}}function ma(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>xs(l,c,a,!0)),xs(l,e,a)),Qe(e)&&s.set(e,l),l}function xs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&xs(n,s,t,!0),r&&r.forEach(a=>xs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Zh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Zh={data:Ha,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:qn,directives:qn,watch:Qh,provide:Ha,inject:Jh};function Ha(n,e){return e?n?function(){return St(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function Jh(n,e){return qn(Uo(n),Uo(e))}function Uo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function qn(n,e){return n?St(St(Object.create(null),n),e):e}function Qh(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Mt(n[i],e[i]);return t}function ed(n,e,t,i=!1){const r={},s={};ms(s,Ls,1),n.propsDefaults=Object.create(null),xu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ph(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function td(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=We(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ts(n.emitsOptions,h))continue;const m=e[h];if(l)if(ke(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Fi(h);r[x]=zo(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{xu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ke(e,f)&&((u=Wi(f))===f||!ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=zo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ke(e,f))&&(delete s[f],c=!0)}c&&Mn(n,"set","$attrs")}function xu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&ke(r,u=Fi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ts(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=We(t),c=o||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=zo(r,l,f,c[f],n,!ke(c,f))}}return a}function zo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Ui(r),i=c[t]=l.call(null,e),ti())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}function vu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[h,m]=vu(f,e,!0);St(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Qe(n)&&i.set(n,Li),Li;if(Fe(s))for(let u=0;u<s.length;u++){const f=Fi(s[u]);Wa(f)&&(a[f]=Ze)}else if(s)for(const u in s){const f=Fi(u);if(Wa(f)){const h=s[u],m=a[f]=Fe(h)||Oe(h)?{type:h}:Object.assign({},h);if(m){const x=ja(Boolean,m.type),p=ja(String,m.type);m[0]=x>-1,m[1]=p<0||x<p,(x>-1||ke(m,"default"))&&o.push(f)}}}const c=[a,o];return Qe(n)&&i.set(n,c),c}function Wa(n){return n[0]!=="$"}function qa(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Xa(n,e){return qa(n)===qa(e)}function ja(n,e){return Fe(e)?e.findIndex(t=>Xa(t,n)):Oe(e)&&Xa(e,n)?0:-1}const Mu=n=>n[0]==="_"||n==="$stable",ga=n=>Fe(n)?n.map(en):[en(n)],nd=(n,e,t)=>{if(e._n)return e;const i=Ah((...r)=>ga(e(...r)),t);return i._c=!1,i},yu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Mu(r))continue;const s=n[r];if(Oe(s))e[r]=nd(r,s,i);else if(s!=null){const a=ga(s);e[r]=()=>a}}},bu=(n,e)=>{const t=ga(e);n.slots.default=()=>t},id=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=We(e),ms(e,"_",t)):yu(e,n.slots={})}else n.slots={},e&&bu(n,e);ms(n.slots,Ls,1)},rd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(St(r,e),!t&&o===1&&delete r._):(s=!e.$stable,yu(e,r)),a=e}else e&&(bu(n,e),a={default:1});if(s)for(const o in r)!Mu(o)&&!(o in a)&&delete r[o]};function Su(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sd=0;function od(n,e){return function(i,r=null){Oe(i)||(i=Object.assign({},i)),r!=null&&!Qe(r)&&(r=null);const s=Su(),a=new Set;let o=!1;const l=s.app={_uid:sd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Cd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Oe(c.install)?(a.add(c),c.install(l,...u)):Oe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Et(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,va(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Bo(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,m)=>Bo(h,e&&(Fe(e)?e[m]:e),t,i,r));return}if(us(i)&&!r)return;const s=i.shapeFlag&4?va(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,ke(f,c)&&(f[c]=null)):gt(c)&&(c.value=null)),Oe(l))Dn(l,o,12,[a,u]);else{const h=ft(l),m=gt(l);if(h||m){const x=()=>{if(n.f){const p=h?ke(f,l)?f[l]:u[l]:l.value;r?Fe(p)&&ia(p,s):Fe(p)?p.includes(s)||p.push(s):h?(u[l]=[s],ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,ke(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,wt(x,t)):x()}}}const wt=Ih;function ad(n){return ld(n)}function ld(n,e){const t=Gf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=$t,insertStaticContent:x}=n,p=(y,T,V,q=null,Y=null,le=null,he=!1,te=null,_e=!!T.dynamicChildren)=>{if(y===T)return;y&&!Ki(y,T)&&(q=J(y),k(y,Y,le,!0),y=null),T.patchFlag===-2&&(_e=!1,T.dynamicChildren=null);const{type:se,ref:M,shapeFlag:g}=T;switch(se){case Cs:d(y,T,V,q);break;case xr:_(y,T,V,q);break;case fs:y==null&&w(T,V,q,he);break;case mn:ae(y,T,V,q,Y,le,he,te,_e);break;default:g&1?E(y,T,V,q,Y,le,he,te,_e):g&6?B(y,T,V,q,Y,le,he,te,_e):(g&64||g&128)&&se.process(y,T,V,q,Y,le,he,te,_e,ge)}M!=null&&Y&&Bo(M,y&&y.ref,le,T||y,!T)},d=(y,T,V,q)=>{if(y==null)i(T.el=o(T.children),V,q);else{const Y=T.el=y.el;T.children!==y.children&&c(Y,T.children)}},_=(y,T,V,q)=>{y==null?i(T.el=l(T.children||""),V,q):T.el=y.el},w=(y,T,V,q)=>{[y.el,y.anchor]=x(y.children,T,V,q,y.el,y.anchor)},v=({el:y,anchor:T},V,q)=>{let Y;for(;y&&y!==T;)Y=h(y),i(y,V,q),y=Y;i(T,V,q)},A=({el:y,anchor:T})=>{let V;for(;y&&y!==T;)V=h(y),r(y),y=V;r(T)},E=(y,T,V,q,Y,le,he,te,_e)=>{he=he||T.type==="svg",y==null?D(T,V,q,Y,le,he,te,_e):C(y,T,Y,le,he,te,_e)},D=(y,T,V,q,Y,le,he,te)=>{let _e,se;const{type:M,props:g,shapeFlag:I,transition:W,dirs:K}=y;if(_e=y.el=a(y.type,le,g&&g.is,g),I&8?u(_e,y.children):I&16&&b(y.children,_e,null,q,Y,le&&M!=="foreignObject",he,te),K&&Gn(y,null,q,"created"),g){for(const Me in g)Me!=="value"&&!as(Me)&&s(_e,Me,null,g[Me],le,y.children,q,Y,L);"value"in g&&s(_e,"value",null,g.value),(se=g.onVnodeBeforeMount)&&Zt(se,q,y)}O(_e,y,y.scopeId,he,q),K&&Gn(y,null,q,"beforeMount");const ue=(!Y||Y&&!Y.pendingBranch)&&W&&!W.persisted;ue&&W.beforeEnter(_e),i(_e,T,V),((se=g&&g.onVnodeMounted)||ue||K)&&wt(()=>{se&&Zt(se,q,y),ue&&W.enter(_e),K&&Gn(y,null,q,"mounted")},Y)},O=(y,T,V,q,Y)=>{if(V&&m(y,V),q)for(let le=0;le<q.length;le++)m(y,q[le]);if(Y){let le=Y.subTree;if(T===le){const he=Y.vnode;O(y,he,he.scopeId,he.slotScopeIds,Y.parent)}}},b=(y,T,V,q,Y,le,he,te,_e=0)=>{for(let se=_e;se<y.length;se++){const M=y[se]=te?Cn(y[se]):en(y[se]);p(null,M,T,V,q,Y,le,he,te)}},C=(y,T,V,q,Y,le,he)=>{const te=T.el=y.el;let{patchFlag:_e,dynamicChildren:se,dirs:M}=T;_e|=y.patchFlag&16;const g=y.props||Ze,I=T.props||Ze;let W;V&&kn(V,!1),(W=I.onVnodeBeforeUpdate)&&Zt(W,V,T,y),M&&Gn(T,y,V,"beforeUpdate"),V&&kn(V,!0);const K=Y&&T.type!=="foreignObject";if(se?U(y.dynamicChildren,se,te,V,q,K,le):he||H(y,T,te,null,V,q,K,le,!1),_e>0){if(_e&16)oe(te,T,g,I,V,q,Y);else if(_e&2&&g.class!==I.class&&s(te,"class",null,I.class,Y),_e&4&&s(te,"style",g.style,I.style,Y),_e&8){const ue=T.dynamicProps;for(let Me=0;Me<ue.length;Me++){const me=ue[Me],X=g[me],Te=I[me];(Te!==X||me==="value")&&s(te,me,X,Te,Y,y.children,V,q,L)}}_e&1&&y.children!==T.children&&u(te,T.children)}else!he&&se==null&&oe(te,T,g,I,V,q,Y);((W=I.onVnodeUpdated)||M)&&wt(()=>{W&&Zt(W,V,T,y),M&&Gn(T,y,V,"updated")},q)},U=(y,T,V,q,Y,le,he)=>{for(let te=0;te<T.length;te++){const _e=y[te],se=T[te],M=_e.el&&(_e.type===mn||!Ki(_e,se)||_e.shapeFlag&70)?f(_e.el):V;p(_e,se,M,null,q,Y,le,he,!0)}},oe=(y,T,V,q,Y,le,he)=>{if(V!==q){if(V!==Ze)for(const te in V)!as(te)&&!(te in q)&&s(y,te,V[te],null,he,T.children,Y,le,L);for(const te in q){if(as(te))continue;const _e=q[te],se=V[te];_e!==se&&te!=="value"&&s(y,te,se,_e,he,T.children,Y,le,L)}"value"in q&&s(y,"value",V.value,q.value)}},ae=(y,T,V,q,Y,le,he,te,_e)=>{const se=T.el=y?y.el:o(""),M=T.anchor=y?y.anchor:o("");let{patchFlag:g,dynamicChildren:I,slotScopeIds:W}=T;W&&(te=te?te.concat(W):W),y==null?(i(se,V,q),i(M,V,q),b(T.children,V,M,Y,le,he,te,_e)):g>0&&g&64&&I&&y.dynamicChildren?(U(y.dynamicChildren,I,V,Y,le,he,te),(T.key!=null||Y&&T===Y.subTree)&&wu(y,T,!0)):H(y,T,V,M,Y,le,he,te,_e)},B=(y,T,V,q,Y,le,he,te,_e)=>{T.slotScopeIds=te,y==null?T.shapeFlag&512?Y.ctx.activate(T,V,q,he,_e):F(T,V,q,Y,le,he,_e):Q(y,T,_e)},F=(y,T,V,q,Y,le,he)=>{const te=y.component=Md(y,q,Y);if(pu(y)&&(te.ctx.renderer=ge),yd(te),te.asyncDep){if(Y&&Y.registerDep(te,ie),!y.el){const _e=te.subTree=Et(xr);_(null,_e,T,V)}return}ie(te,y,T,V,Y,le,he)},Q=(y,T,V)=>{const q=T.component=y.component;if(Rh(y,T,V))if(q.asyncDep&&!q.asyncResolved){ee(q,T,V);return}else q.next=T,Sh(q.update),q.update();else T.el=y.el,q.vnode=T},ie=(y,T,V,q,Y,le,he)=>{const te=()=>{if(y.isMounted){let{next:M,bu:g,u:I,parent:W,vnode:K}=y,ue=M,Me;kn(y,!1),M?(M.el=K.el,ee(y,M,he)):M=K,g&&Gs(g),(Me=M.props&&M.props.onVnodeBeforeUpdate)&&Zt(Me,W,M,K),kn(y,!0);const me=ks(y),X=y.subTree;y.subTree=me,p(X,me,f(X.el),J(X),y,Y,le),M.el=me.el,ue===null&&Ph(y,me.el),I&&wt(I,Y),(Me=M.props&&M.props.onVnodeUpdated)&&wt(()=>Zt(Me,W,M,K),Y)}else{let M;const{el:g,props:I}=T,{bm:W,m:K,parent:ue}=y,Me=us(T);if(kn(y,!1),W&&Gs(W),!Me&&(M=I&&I.onVnodeBeforeMount)&&Zt(M,ue,T),kn(y,!0),g&&we){const me=()=>{y.subTree=ks(y),we(g,y.subTree,y,Y,null)};Me?T.type.__asyncLoader().then(()=>!y.isUnmounted&&me()):me()}else{const me=y.subTree=ks(y);p(null,me,V,q,y,Y,le),T.el=me.el}if(K&&wt(K,Y),!Me&&(M=I&&I.onVnodeMounted)){const me=T;wt(()=>Zt(M,ue,me),Y)}(T.shapeFlag&256||ue&&us(ue.vnode)&&ue.vnode.shapeFlag&256)&&y.a&&wt(y.a,Y),y.isMounted=!0,T=V=q=null}},_e=y.effect=new aa(te,()=>pa(se),y.scope),se=y.update=()=>_e.run();se.id=y.uid,kn(y,!0),se()},ee=(y,T,V)=>{T.component=y;const q=y.vnode.props;y.vnode=T,y.next=null,td(y,T.props,q,V),rd(y,T.children,V),qi(),Ga(),Xi()},H=(y,T,V,q,Y,le,he,te,_e=!1)=>{const se=y&&y.children,M=y?y.shapeFlag:0,g=T.children,{patchFlag:I,shapeFlag:W}=T;if(I>0){if(I&128){fe(se,g,V,q,Y,le,he,te,_e);return}else if(I&256){ce(se,g,V,q,Y,le,he,te,_e);return}}W&8?(M&16&&L(se,Y,le),g!==se&&u(V,g)):M&16?W&16?fe(se,g,V,q,Y,le,he,te,_e):L(se,Y,le,!0):(M&8&&u(V,""),W&16&&b(g,V,q,Y,le,he,te,_e))},ce=(y,T,V,q,Y,le,he,te,_e)=>{y=y||Li,T=T||Li;const se=y.length,M=T.length,g=Math.min(se,M);let I;for(I=0;I<g;I++){const W=T[I]=_e?Cn(T[I]):en(T[I]);p(y[I],W,V,null,Y,le,he,te,_e)}se>M?L(y,Y,le,!0,!1,g):b(T,V,q,Y,le,he,te,_e,g)},fe=(y,T,V,q,Y,le,he,te,_e)=>{let se=0;const M=T.length;let g=y.length-1,I=M-1;for(;se<=g&&se<=I;){const W=y[se],K=T[se]=_e?Cn(T[se]):en(T[se]);if(Ki(W,K))p(W,K,V,null,Y,le,he,te,_e);else break;se++}for(;se<=g&&se<=I;){const W=y[g],K=T[I]=_e?Cn(T[I]):en(T[I]);if(Ki(W,K))p(W,K,V,null,Y,le,he,te,_e);else break;g--,I--}if(se>g){if(se<=I){const W=I+1,K=W<M?T[W].el:q;for(;se<=I;)p(null,T[se]=_e?Cn(T[se]):en(T[se]),V,K,Y,le,he,te,_e),se++}}else if(se>I)for(;se<=g;)k(y[se],Y,le,!0),se++;else{const W=se,K=se,ue=new Map;for(se=K;se<=I;se++){const be=T[se]=_e?Cn(T[se]):en(T[se]);be.key!=null&&ue.set(be.key,se)}let Me,me=0;const X=I-K+1;let Te=!1,Re=0;const Ee=new Array(X);for(se=0;se<X;se++)Ee[se]=0;for(se=W;se<=g;se++){const be=y[se];if(me>=X){k(be,Y,le,!0);continue}let Pe;if(be.key!=null)Pe=ue.get(be.key);else for(Me=K;Me<=I;Me++)if(Ee[Me-K]===0&&Ki(be,T[Me])){Pe=Me;break}Pe===void 0?k(be,Y,le,!0):(Ee[Pe-K]=se+1,Pe>=Re?Re=Pe:Te=!0,p(be,T[Pe],V,null,Y,le,he,te,_e),me++)}const Ce=Te?cd(Ee):Li;for(Me=Ce.length-1,se=X-1;se>=0;se--){const be=K+se,Pe=T[be],je=be+1<M?T[be+1].el:q;Ee[se]===0?p(null,Pe,V,je,Y,le,he,te,_e):Te&&(Me<0||se!==Ce[Me]?ye(Pe,V,je,2):Me--)}}},ye=(y,T,V,q,Y=null)=>{const{el:le,type:he,transition:te,children:_e,shapeFlag:se}=y;if(se&6){ye(y.component.subTree,T,V,q);return}if(se&128){y.suspense.move(T,V,q);return}if(se&64){he.move(y,T,V,ge);return}if(he===mn){i(le,T,V);for(let g=0;g<_e.length;g++)ye(_e[g],T,V,q);i(y.anchor,T,V);return}if(he===fs){v(y,T,V);return}if(q!==2&&se&1&&te)if(q===0)te.beforeEnter(le),i(le,T,V),wt(()=>te.enter(le),Y);else{const{leave:g,delayLeave:I,afterLeave:W}=te,K=()=>i(le,T,V),ue=()=>{g(le,()=>{K(),W&&W()})};I?I(le,K,ue):ue()}else i(le,T,V)},k=(y,T,V,q=!1,Y=!1)=>{const{type:le,props:he,ref:te,children:_e,dynamicChildren:se,shapeFlag:M,patchFlag:g,dirs:I}=y;if(te!=null&&Bo(te,null,V,y,!0),M&256){T.ctx.deactivate(y);return}const W=M&1&&I,K=!us(y);let ue;if(K&&(ue=he&&he.onVnodeBeforeUnmount)&&Zt(ue,T,y),M&6)P(y.component,V,q);else{if(M&128){y.suspense.unmount(V,q);return}W&&Gn(y,null,T,"beforeUnmount"),M&64?y.type.remove(y,T,V,Y,ge,q):se&&(le!==mn||g>0&&g&64)?L(se,T,V,!1,!0):(le===mn&&g&384||!Y&&M&16)&&L(_e,T,V),q&&ne(y)}(K&&(ue=he&&he.onVnodeUnmounted)||W)&&wt(()=>{ue&&Zt(ue,T,y),W&&Gn(y,null,T,"unmounted")},V)},ne=y=>{const{type:T,el:V,anchor:q,transition:Y}=y;if(T===mn){xe(V,q);return}if(T===fs){A(y);return}const le=()=>{r(V),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:he,delayLeave:te}=Y,_e=()=>he(V,le);te?te(y.el,le,_e):_e()}else le()},xe=(y,T)=>{let V;for(;y!==T;)V=h(y),r(y),y=V;r(T)},P=(y,T,V)=>{const{bum:q,scope:Y,update:le,subTree:he,um:te}=y;q&&Gs(q),Y.stop(),le&&(le.active=!1,k(he,y,T,V)),te&&wt(te,T),wt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},L=(y,T,V,q=!1,Y=!1,le=0)=>{for(let he=le;he<y.length;he++)k(y[he],T,V,q,Y)},J=y=>y.shapeFlag&6?J(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),re=(y,T,V)=>{y==null?T._vnode&&k(T._vnode,null,null,!0):p(T._vnode||null,y,T,null,null,null,V),Ga(),lu(),T._vnode=y},ge={p,um:k,m:ye,r:ne,mt:F,mc:b,pc:H,pbc:U,n:J,o:n};let pe,we;return e&&([pe,we]=e(ge)),{render:re,hydrate:pe,createApp:od(re,pe)}}function kn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function wu(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Cn(r[s]),o.el=a.el),t||wu(a,o)),o.type===Cs&&(o.el=a.el)}}function cd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const ud=n=>n.__isTeleport,mn=Symbol(void 0),Cs=Symbol(void 0),xr=Symbol(void 0),fs=Symbol(void 0),fr=[];let jt=null;function _a(n=!1){fr.push(jt=n?null:[])}function fd(){fr.pop(),jt=fr[fr.length-1]||null}let vr=1;function $a(n){vr+=n}function Eu(n){return n.dynamicChildren=vr>0?jt||Li:null,fd(),vr>0&&jt&&jt.push(n),n}function Tu(n,e,t,i,r,s){return Eu(vs(n,e,t,i,r,s,!0))}function hd(n,e,t,i,r){return Eu(Et(n,e,t,i,r,!0))}function Go(n){return n?n.__v_isVNode===!0:!1}function Ki(n,e){return n.type===e.type&&n.key===e.key}const Ls="__vInternal",Au=({key:n})=>n??null,hs=({ref:n,ref_key:e,ref_for:t})=>n!=null?ft(n)||gt(n)||Oe(n)?{i:rn,r:n,k:e,f:!!t}:n:null;function vs(n,e=null,t=null,i=0,r=null,s=n===mn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Au(e),ref:e&&hs(e),scopeId:fu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return o?(xa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),vr>0&&!a&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const Et=dd;function dd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===jh)&&(n=xr),Go(n)){const o=Oi(n,e,!0);return t&&xa(o,t),vr>0&&!s&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag|=-2,o}if(Ed(n)&&(n=n.__vccOpts),e){e=pd(e);let{class:o,style:l}=e;o&&!ft(o)&&(e.class=ta(o)),Qe(l)&&(Jc(l)&&!Fe(l)&&(l=St({},l)),e.style=ea(l))}const a=ft(n)?1:Dh(n)?128:ud(n)?64:Qe(n)?4:Oe(n)?2:0;return vs(n,e,t,i,r,a,s,!0)}function pd(n){return n?Jc(n)||Ls in n?St({},n):n:null}function Oi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?_d(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Au(o),ref:e&&e.ref?t&&r?Fe(r)?r.concat(hs(e)):[r,hs(e)]:hs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Oi(n.ssContent),ssFallback:n.ssFallback&&Oi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function md(n=" ",e=0){return Et(Cs,null,n,e)}function gd(n,e){const t=Et(fs,null,n);return t.staticCount=e,t}function en(n){return n==null||typeof n=="boolean"?Et(xr):Fe(n)?Et(mn,null,n.slice()):typeof n=="object"?Cn(n):Et(Cs,null,String(n))}function Cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Oi(n)}function xa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ls in e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),i&64?(t=16,e=[md(e)]):t=8);n.children=e,n.shapeFlag|=t}function _d(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ta([e.class,i.class]));else if(r==="style")e.style=ea([e.style,i.style]);else if(ys(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Zt(n,e,t,i=null){Yt(n,e,7,[t,i])}const xd=Su();let vd=0;function Md(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||xd,s={uid:vd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vu(i,r),emitsOptions:uu(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Th.bind(null,s),n.ce&&n.ce(s),s}let mt=null;const Ui=n=>{mt=n,n.scope.on()},ti=()=>{mt&&mt.scope.off(),mt=null};function Cu(n){return n.vnode.shapeFlag&4}let Mr=!1;function yd(n,e=!1){Mr=e;const{props:t,children:i}=n.vnode,r=Cu(n);ed(n,t,r,e),id(n,i);const s=r?bd(n,e):void 0;return Mr=!1,s}function bd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Qc(new Proxy(n.ctx,$h));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?wd(n):null;Ui(n),qi();const s=Dn(i,n,0,[n.props,r]);if(Xi(),ti(),zc(s)){if(s.then(ti,ti),e)return s.then(a=>{Ya(n,a,e)}).catch(a=>{Es(a,n,0)});n.asyncDep=s}else Ya(n,s,e)}else Lu(n,e)}function Ya(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=iu(e)),Lu(n,t)}let Ka;function Lu(n,e,t){const i=n.type;if(!n.render){if(!e&&Ka&&!i.render){const r=i.template||ma(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:o},a),l);i.render=Ka(r,c)}}n.render=i.render||$t}Ui(n),qi(),Yh(n),Xi(),ti()}function Sd(n){return new Proxy(n.attrs,{get(e,t){return Ot(n,"get","$attrs"),e[t]}})}function wd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Sd(n))},slots:n.slots,emit:n.emit,expose:e}}function va(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(iu(Qc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}}))}function Ed(n){return Oe(n)&&"__vccOpts"in n}const Gt=(n,e)=>Mh(n,e,Mr);function Ru(n,e,t){const i=arguments.length;return i===2?Qe(e)&&!Fe(e)?Go(e)?Et(n,null,[e]):Et(n,e):Et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Go(t)&&(t=[t]),Et(n,e,t))}const Td=Symbol(""),Ad=()=>xn(Td),Cd="3.2.45",Ld="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,Za=Yn&&Yn.createElement("template"),Rd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Yn.createElementNS(Ld,n):Yn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Za.innerHTML=i?`<svg>${n}</svg>`:n;const o=Za.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Pd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Dd(n,e,t){const i=n.style,r=ft(t);if(t&&!r){for(const s in t)ko(i,s,t[s]);if(e&&!ft(e))for(const s in e)t[s]==null&&ko(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ja=/\s*!important$/;function ko(n,e,t){if(Fe(t))t.forEach(i=>ko(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Id(n,e);Ja.test(t)?n.setProperty(Wi(i),t.replace(Ja,""),"important"):n[i]=t}}const Qa=["Webkit","Moz","ms"],Hs={};function Id(n,e){const t=Hs[e];if(t)return t;let i=Fi(e);if(i!=="filter"&&i in n)return Hs[e]=i;i=Bc(i);for(let r=0;r<Qa.length;r++){const s=Qa[r]+i;if(s in n)return Hs[e]=s}return e}const el="http://www.w3.org/1999/xlink";function Fd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(el,e.slice(6,e.length)):n.setAttributeNS(el,e,t);else{const s=Rf(e);t==null||s&&!Uc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Nd(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Uc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Od(n,e,t,i){n.addEventListener(e,t,i)}function Ud(n,e,t,i){n.removeEventListener(e,t,i)}function zd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Bd(e);if(i){const c=s[e]=Vd(i,r);Od(n,o,c,l)}else a&&(Ud(n,o,a,l),s[e]=void 0)}}const tl=/(?:Once|Passive|Capture)$/;function Bd(n){let e;if(tl.test(n)){e={};let i;for(;i=n.match(tl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Ws=0;const Gd=Promise.resolve(),kd=()=>Ws||(Gd.then(()=>Ws=0),Ws=Date.now());function Vd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Yt(Hd(i,t.value),e,5,[i])};return t.value=n,t.attached=kd(),t}function Hd(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nl=/^on[a-z]/,Wd=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Pd(n,i,r):e==="style"?Dd(n,t,i):ys(e)?na(e)||zd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qd(n,e,i,r))?Nd(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Fd(n,e,i,r))};function qd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&nl.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||nl.test(e)&&ft(t)?!1:e in n}const Xd=St({patchProp:Wd},Rd);let il;function jd(){return il||(il=ad(Xd))}const $d=(...n)=>{const e=jd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Yd(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Yd(n){return ft(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ei=typeof window<"u";function Kd(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function qs(n,e){const t={};for(const i in e){const r=e[i];t[i]=Kt(r)?r.map(n):n(r)}return t}const hr=()=>{},Kt=Array.isArray,Zd=/\/$/,Jd=n=>n.replace(Zd,"");function Xs(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=np(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Qd(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function rl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ep(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&zi(e.matched[i],t.matched[r])&&Pu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function zi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Pu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!tp(n[t],e[t]))return!1;return!0}function tp(n,e){return Kt(n)?sl(n,e):Kt(e)?sl(e,n):n===e}function sl(n,e){return Kt(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function np(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var yr;(function(n){n.pop="pop",n.push="push"})(yr||(yr={}));var dr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(dr||(dr={}));function ip(n){if(!n)if(Ei){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Jd(n)}const rp=/^[^#]+#/;function sp(n,e){return n.replace(rp,"#")+e}function op(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ap(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=op(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ol(n,e){return(history.state?history.state.position-e:-1)+n}const Vo=new Map;function lp(n,e){Vo.set(n,e)}function cp(n){const e=Vo.get(n);return Vo.delete(n),e}let up=()=>location.protocol+"//"+location.host;function Du(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),rl(l,"")}return rl(t,n)+i+r}function fp(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Du(n,location),x=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===x){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,x,{delta:d,type:yr.pop,direction:d?d>0?dr.forward:dr.back:dr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const x=r.indexOf(h);x>-1&&r.splice(x,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Xe({},h.state,{scroll:Rs()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function al(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Rs():null}}function hp(n){const{history:e,location:t}=window,i={value:Du(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:up()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Xe({},e.state,al(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Xe({},r.value,e.state,{forward:l,scroll:Rs()});s(u.current,u,!0);const f=Xe({},al(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function dp(n){n=ip(n);const e=hp(n),t=fp(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Xe({location:"",base:n,go:i,createHref:sp.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pp(n){return typeof n=="string"||n&&typeof n=="object"}function Iu(n){return typeof n=="string"||typeof n=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fu=Symbol("");var ll;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ll||(ll={}));function Bi(n,e){return Xe(new Error,{type:n,[Fu]:!0},e)}function ln(n,e){return n instanceof Error&&Fu in n&&(e==null||!!(n.type&e))}const cl="[^/]+?",mp={sensitive:!1,strict:!1,start:!0,end:!0},gp=/[.+*?^${}()[\]/\\]/g;function _p(n,e){const t=Xe({},mp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(gp,"\\$&"),m+=40;else if(h.type===1){const{value:x,repeatable:p,optional:d,regexp:_}=h;s.push({name:x,repeatable:p,optional:d});const w=_||cl;if(w!==cl){m+=10;try{new RegExp(`(${w})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${x}" (${w}): `+A.message)}}let v=p?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(v=d&&c.length<2?`(?:/${v})`:"/"+v),d&&(v+="?"),r+=v,m+=20,d&&(m+=-8),p&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",x=s[h-1];f[x.name]=m&&x.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:x,repeatable:p,optional:d}=m,_=x in c?c[x]:"";if(Kt(_)&&!p)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const w=Kt(_)?_.join("/"):_;if(!w)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=w}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function xp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=xp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(ul(i))return 1;if(ul(r))return-1}return r.length-i.length}function ul(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Mp={type:0,value:""},yp=/[a-zA-Z0-9_]/;function bp(n){if(!n)return[[]];if(n==="/")return[[Mp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:yp.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Sp(n,e,t){const i=_p(bp(n.path),t),r=Xe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function wp(n,e){const t=[],i=new Map;e=dl({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,x=Ep(u);x.aliasOf=h&&h.record;const p=dl(e,u),d=[x];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of v)d.push(Xe({},x,{components:h?h.record.components:x.components,path:A,aliasOf:h?h.record:x}))}let _,w;for(const v of d){const{path:A}=v;if(f&&A[0]!=="/"){const E=f.record.path,D=E[E.length-1]==="/"?"":"/";v.path=f.record.path+(A&&D+A)}if(_=Sp(v,f,p),h?h.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),m&&u.name&&!hl(_)&&a(u.name)),x.children){const E=x.children;for(let D=0;D<E.length;D++)s(E[D],_,h&&h.children[D])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return w?()=>{a(w)}:hr}function a(u){if(Iu(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&vp(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Nu(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!hl(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},x,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Bi(1,{location:u});p=h.record.name,m=Xe(fl(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&fl(u.params,h.keys.map(w=>w.name))),x=h.stringify(m)}else if("path"in u)x=u.path,h=t.find(w=>w.re.test(x)),h&&(m=h.parse(x),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw Bi(1,{location:u,currentLocation:f});p=h.record.name,m=Xe({},f.params,u.params),x=h.stringify(m)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:p,path:x,params:m,matched:d,meta:Ap(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function fl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ep(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Tp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Tp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function hl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ap(n){return n.reduce((e,t)=>Xe(e,t.meta),{})}function dl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Nu(n,e){return e.children.some(t=>t===n||Nu(n,t))}const Ou=/#/g,Cp=/&/g,Lp=/\//g,Rp=/=/g,Pp=/\?/g,Uu=/\+/g,Dp=/%5B/g,Ip=/%5D/g,zu=/%5E/g,Fp=/%60/g,Bu=/%7B/g,Np=/%7C/g,Gu=/%7D/g,Op=/%20/g;function Ma(n){return encodeURI(""+n).replace(Np,"|").replace(Dp,"[").replace(Ip,"]")}function Up(n){return Ma(n).replace(Bu,"{").replace(Gu,"}").replace(zu,"^")}function Ho(n){return Ma(n).replace(Uu,"%2B").replace(Op,"+").replace(Ou,"%23").replace(Cp,"%26").replace(Fp,"`").replace(Bu,"{").replace(Gu,"}").replace(zu,"^")}function zp(n){return Ho(n).replace(Rp,"%3D")}function Bp(n){return Ma(n).replace(Ou,"%23").replace(Pp,"%3F")}function Gp(n){return n==null?"":Bp(n).replace(Lp,"%2F")}function Ms(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function kp(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Uu," "),a=s.indexOf("="),o=Ms(a<0?s:s.slice(0,a)),l=a<0?null:Ms(s.slice(a+1));if(o in e){let c=e[o];Kt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function pl(n){let e="";for(let t in n){const i=n[t];if(t=zp(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kt(i)?i.map(s=>s&&Ho(s)):[i&&Ho(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Vp(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Kt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Hp=Symbol(""),ml=Symbol(""),ya=Symbol(""),ku=Symbol(""),Wo=Symbol("");function Zi(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Ln(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Bi(4,{from:t,to:e})):f instanceof Error?o(f):pp(f)?o(Bi(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function js(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Wp(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Ln(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Kd(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Ln(h,t,i,s,a)()}))}}return r}function Wp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function gl(n){const e=xn(ya),t=xn(ku),i=Gt(()=>e.resolve(ei(n.to))),r=Gt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(zi.bind(null,u));if(h>-1)return h;const m=_l(l[c-2]);return c>1&&_l(u)===m&&f[f.length-1].path!==m?f.findIndex(zi.bind(null,l[c-2])):h}),s=Gt(()=>r.value>-1&&$p(t.params,i.value.params)),a=Gt(()=>r.value>-1&&r.value===t.matched.length-1&&Pu(t.params,i.value.params));function o(l={}){return jp(l)?e[ei(n.replace)?"replace":"push"](ei(n.to)).catch(hr):Promise.resolve()}return{route:i,href:Gt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const qp=Ar({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gl,setup(n,{slots:e}){const t=Tr(gl(n)),{options:i}=xn(ya),r=Gt(()=>({[xl(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[xl(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Ru("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Xp=qp;function jp(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $p(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Kt(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function _l(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xl=(n,e,t)=>n??e??t,Yp=Ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=xn(Wo),r=Gt(()=>n.route||i.value),s=xn(ml,0),a=Gt(()=>{let c=ei(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Gt(()=>r.value.matched[a.value]);ls(ml,Gt(()=>a.value+1)),ls(Hp,o),ls(Wo,r);const l=mh();return cs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,x])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!zi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return vl(t.default,{Component:h,route:c});const m=f.props[u],x=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Ru(h,Xe({},x,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return vl(t.default,{Component:d,route:c})||d}}});function vl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Vu=Yp;function Kp(n){const e=wp(n.routes,n),t=n.parseQuery||kp,i=n.stringifyQuery||pl,r=n.history,s=Zi(),a=Zi(),o=Zi(),l=gh(Sn);let c=Sn;Ei&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qs.bind(null,P=>""+P),f=qs.bind(null,Gp),h=qs.bind(null,Ms);function m(P,L){let J,re;return Iu(P)?(J=e.getRecordMatcher(P),re=L):re=P,e.addRoute(re,J)}function x(P){const L=e.getRecordMatcher(P);L&&e.removeRoute(L)}function p(){return e.getRoutes().map(P=>P.record)}function d(P){return!!e.getRecordMatcher(P)}function _(P,L){if(L=Xe({},L||l.value),typeof P=="string"){const y=Xs(t,P,L.path),T=e.resolve({path:y.path},L),V=r.createHref(y.fullPath);return Xe(y,T,{params:h(T.params),hash:Ms(y.hash),redirectedFrom:void 0,href:V})}let J;if("path"in P)J=Xe({},P,{path:Xs(t,P.path,L.path).path});else{const y=Xe({},P.params);for(const T in y)y[T]==null&&delete y[T];J=Xe({},P,{params:f(P.params)}),L.params=f(L.params)}const re=e.resolve(J,L),ge=P.hash||"";re.params=u(h(re.params));const pe=Qd(i,Xe({},P,{hash:Up(ge),path:re.path})),we=r.createHref(pe);return Xe({fullPath:pe,hash:ge,query:i===pl?Vp(P.query):P.query||{}},re,{redirectedFrom:void 0,href:we})}function w(P){return typeof P=="string"?Xs(t,P,l.value.path):Xe({},P)}function v(P,L){if(c!==P)return Bi(8,{from:L,to:P})}function A(P){return O(P)}function E(P){return A(Xe(w(P),{replace:!0}))}function D(P){const L=P.matched[P.matched.length-1];if(L&&L.redirect){const{redirect:J}=L;let re=typeof J=="function"?J(P):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=w(re):{path:re},re.params={}),Xe({query:P.query,hash:P.hash,params:"path"in re?{}:P.params},re)}}function O(P,L){const J=c=_(P),re=l.value,ge=P.state,pe=P.force,we=P.replace===!0,y=D(J);if(y)return O(Xe(w(y),{state:typeof y=="object"?Xe({},ge,y.state):ge,force:pe,replace:we}),L||J);const T=J;T.redirectedFrom=L;let V;return!pe&&ep(i,re,J)&&(V=Bi(16,{to:T,from:re}),fe(re,re,!0,!1)),(V?Promise.resolve(V):C(T,re)).catch(q=>ln(q)?ln(q,2)?q:ce(q):ee(q,T,re)).then(q=>{if(q){if(ln(q,2))return O(Xe({replace:we},w(q.to),{state:typeof q.to=="object"?Xe({},ge,q.to.state):ge,force:pe}),L||T)}else q=oe(T,re,!0,we,ge);return U(T,re,q),q})}function b(P,L){const J=v(P,L);return J?Promise.reject(J):Promise.resolve()}function C(P,L){let J;const[re,ge,pe]=Zp(P,L);J=js(re.reverse(),"beforeRouteLeave",P,L);for(const y of re)y.leaveGuards.forEach(T=>{J.push(Ln(T,P,L))});const we=b.bind(null,P,L);return J.push(we),ui(J).then(()=>{J=[];for(const y of s.list())J.push(Ln(y,P,L));return J.push(we),ui(J)}).then(()=>{J=js(ge,"beforeRouteUpdate",P,L);for(const y of ge)y.updateGuards.forEach(T=>{J.push(Ln(T,P,L))});return J.push(we),ui(J)}).then(()=>{J=[];for(const y of P.matched)if(y.beforeEnter&&!L.matched.includes(y))if(Kt(y.beforeEnter))for(const T of y.beforeEnter)J.push(Ln(T,P,L));else J.push(Ln(y.beforeEnter,P,L));return J.push(we),ui(J)}).then(()=>(P.matched.forEach(y=>y.enterCallbacks={}),J=js(pe,"beforeRouteEnter",P,L),J.push(we),ui(J))).then(()=>{J=[];for(const y of a.list())J.push(Ln(y,P,L));return J.push(we),ui(J)}).catch(y=>ln(y,8)?y:Promise.reject(y))}function U(P,L,J){for(const re of o.list())re(P,L,J)}function oe(P,L,J,re,ge){const pe=v(P,L);if(pe)return pe;const we=L===Sn,y=Ei?history.state:{};J&&(re||we?r.replace(P.fullPath,Xe({scroll:we&&y&&y.scroll},ge)):r.push(P.fullPath,ge)),l.value=P,fe(P,L,J,we),ce()}let ae;function B(){ae||(ae=r.listen((P,L,J)=>{if(!xe.listening)return;const re=_(P),ge=D(re);if(ge){O(Xe(ge,{replace:!0}),re).catch(hr);return}c=re;const pe=l.value;Ei&&lp(ol(pe.fullPath,J.delta),Rs()),C(re,pe).catch(we=>ln(we,12)?we:ln(we,2)?(O(we.to,re).then(y=>{ln(y,20)&&!J.delta&&J.type===yr.pop&&r.go(-1,!1)}).catch(hr),Promise.reject()):(J.delta&&r.go(-J.delta,!1),ee(we,re,pe))).then(we=>{we=we||oe(re,pe,!1),we&&(J.delta&&!ln(we,8)?r.go(-J.delta,!1):J.type===yr.pop&&ln(we,20)&&r.go(-1,!1)),U(re,pe,we)}).catch(hr)}))}let F=Zi(),Q=Zi(),ie;function ee(P,L,J){ce(P);const re=Q.list();return re.length?re.forEach(ge=>ge(P,L,J)):console.error(P),Promise.reject(P)}function H(){return ie&&l.value!==Sn?Promise.resolve():new Promise((P,L)=>{F.add([P,L])})}function ce(P){return ie||(ie=!P,B(),F.list().forEach(([L,J])=>P?J(P):L()),F.reset()),P}function fe(P,L,J,re){const{scrollBehavior:ge}=n;if(!Ei||!ge)return Promise.resolve();const pe=!J&&cp(ol(P.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return ou().then(()=>ge(P,L,pe)).then(we=>we&&ap(we)).catch(we=>ee(we,P,L))}const ye=P=>r.go(P);let k;const ne=new Set,xe={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,hasRoute:d,getRoutes:p,resolve:_,options:n,push:A,replace:E,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:H,install(P){const L=this;P.component("RouterLink",Xp),P.component("RouterView",Vu),P.config.globalProperties.$router=L,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>ei(l)}),Ei&&!k&&l.value===Sn&&(k=!0,A(r.location).catch(ge=>{}));const J={};for(const ge in Sn)J[ge]=Gt(()=>l.value[ge]);P.provide(ya,L),P.provide(ku,Tr(J)),P.provide(Wo,l);const re=P.unmount;ne.add(P),P.unmount=function(){ne.delete(P),ne.size<1&&(c=Sn,ae&&ae(),ae=null,l.value=Sn,k=!1,ie=!1),re()}}};return xe}function ui(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Zp(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>zi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>zi(c,l))||r.push(l))}return[t,i,r]}const Jp=Ar({__name:"App",setup(n){return(e,t)=>(_a(),hd(ei(Vu)))}});const ba=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Qp=ba(Jp,[["__scopeId","data-v-6e330c89"]]),em="/zzemalStudio/assets/testImage-35f92506.jpeg",tm="/zzemalStudio/assets/testImage2-8b002cdd.jpeg",nm="/zzemalStudio/assets/testImage3-291b447e.jpeg",im="/zzemalStudio/assets/testImage4-8f728239.jpeg";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="149",rm=0,Ml=1,sm=2,Hu=1,om=2,ar=3,Nn=0,Nt=1,Rn=2,In=0,Di=1,yl=2,bl=3,Sl=4,am=5,Ti=100,lm=101,cm=102,wl=103,El=104,um=200,fm=201,hm=202,dm=203,Wu=204,qu=205,pm=206,mm=207,gm=208,_m=209,xm=210,vm=0,Mm=1,ym=2,qo=3,bm=4,Sm=5,wm=6,Em=7,wa=0,Tm=1,Am=2,vn=0,Cm=1,Lm=2,Rm=3,Pm=4,Dm=5,Xu=300,Gi=301,ki=302,Xo=303,jo=304,Ps=306,$o=1e3,qt=1001,Yo=1002,bt=1003,Tl=1004,$s=1005,Bt=1006,Im=1007,br=1008,si=1009,Fm=1010,Nm=1011,ju=1012,Om=1013,Zn=1014,Jn=1015,Sr=1016,Um=1017,zm=1018,Ii=1020,Bm=1021,Xt=1023,Gm=1024,km=1025,ni=1026,Vi=1027,Vm=1028,Hm=1029,Wm=1030,qm=1031,Xm=1033,Ys=33776,Ks=33777,Zs=33778,Js=33779,Al=35840,Cl=35841,Ll=35842,Rl=35843,jm=36196,Pl=37492,Dl=37496,Il=37808,Fl=37809,Nl=37810,Ol=37811,Ul=37812,zl=37813,Bl=37814,Gl=37815,kl=37816,Vl=37817,Hl=37818,Wl=37819,ql=37820,Xl=37821,Qs=36492,$m=36283,jl=36284,$l=36285,Yl=36286,oi=3e3,Ye=3001,Ym=3200,Km=3201,$u=0,Zm=1,Qt="srgb",wr="srgb-linear",eo=7680,Jm=519,Kl=35044,Zl="300 es",Ko=1035;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Jl=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Qm(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Ql(n){return(n&n-1)===0&&n!==0}function Zo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],_=r[6],w=r[1],v=r[4],A=r[7],E=r[2],D=r[5],O=r[8];return s[0]=a*p+o*w+l*E,s[3]=a*d+o*v+l*D,s[6]=a*_+o*A+l*O,s[1]=c*p+u*w+f*E,s[4]=c*d+u*v+f*D,s[7]=c*_+u*A+f*O,s[2]=h*p+m*w+x*E,s[5]=h*d+m*v+x*D,s[8]=h*_+m*A+x*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Ft;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ro={[Qt]:{[wr]:ii},[wr]:{[Qt]:ds}},vt={legacyMode:!0,get workingColorSpace(){return wr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ro[e]&&ro[e][t]!==void 0){const i=ro[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},kt={h:0,s:0,l:0},kr={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=Qm(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qt){const i=Ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return vt.fromWorkingColorSpace(Vr(this,rt),e),Dt(rt.r*255,0,255)<<16^Dt(rt.g*255,0,255)<<8^Dt(rt.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Vr(this,rt),t);const i=rt.r,r=rt.g,s=rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Vr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Qt){return vt.fromWorkingColorSpace(Vr(this,rt),e),e!==Qt?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=i,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(kr);const i=no(kt.h,kr.h,t),r=no(kt.s,kr.s,t),s=no(kt.l,kr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=Ku;let fi;class Zu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=Er("canvas")),fi.width=e.width,fi.height=e.height;const i=fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ju{constructor(e=null){this.isSource=!0,this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eg=0;class Tt extends ji{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=qt,r=qt,s=Bt,a=br,o=Xt,l=si,c=Tt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Cr(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Xu;Tt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,A=(m+1)/2,E=(_+1)/2,D=(u+h)/4,O=(f+p)/4,b=(x+d)/4;return v>A&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=D/i,s=O/i):A>E?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=D/r,s=b/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=O/s,r=b/s),this.set(i,r,s,t),this}let w=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(f-p)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends ji{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Tt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ju(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qu extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tg extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==x){let d=1-o;const _=l*h+c*m+u*x+f*p,w=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const E=Math.sqrt(v),D=Math.atan2(E,_*w);d=Math.sin(d*D)/E,o=Math.sin(o*D)/E}const A=o*w;if(l=l*d+h*A,c=c*d+m*A,u=u*d+x*A,f=f*d+p*A,d===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new z,ec=new Lr;class Rr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Vn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox),lo.applyMatrix4(e.matrixWorld),this.union(lo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Hr.subVectors(this.max,Ji),hi.subVectors(e.a,Ji),di.subVectors(e.b,Ji),pi.subVectors(e.c,Ji),wn.subVectors(di,hi),En.subVectors(pi,di),Hn.subVectors(hi,pi);let t=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,En.z,0,-En.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Hn.y,Hn.x,0];return!co(t,hi,di,pi,Hr)||(t=[1,0,0,0,1,0,0,0,1],!co(t,hi,di,pi,Hr))?!1:(Wr.crossVectors(wn,En),t=[Wr.x,Wr.y,Wr.z],co(t,hi,di,pi,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new z,new z,new z,new z,new z,new z,new z,new z],Vn=new z,lo=new Rr,hi=new z,di=new z,pi=new z,wn=new z,En=new z,Hn=new z,Ji=new z,Hr=new z,Wr=new z,Wn=new z;function co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wn.fromArray(n,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ng=new Rr,Qi=new z,uo=new z;class Ea{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(uo)),this.expandByPoint(Qi.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new z,fo=new z,qr=new z,Tn=new z,ho=new z,Xr=new z,po=new z;class ig{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Tn.dot(this.direction),l=-Tn.dot(qr),c=Tn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(qr).multiplyScalar(h).add(fo),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),Xr.subVectors(i,e),po.crossVectors(ho,Xr);let a=this.direction.dot(po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(Xr.crossVectors(Tn,Xr));if(l<0)return null;const c=o*this.direction.dot(ho.cross(Tn));if(c<0||l+c>a)return null;const u=-o*Tn.dot(po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=x,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,sg)}lookAt(e,t,i){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),An.crossVectors(i,Rt),An.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),An.crossVectors(i,Rt)),An.normalize(),jr.crossVectors(Rt,An),r[0]=An.x,r[4]=jr.x,r[8]=Rt.x,r[1]=An.y,r[5]=jr.y,r[9]=Rt.y,r[2]=An.z,r[6]=jr.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],_=i[14],w=i[3],v=i[7],A=i[11],E=i[15],D=r[0],O=r[4],b=r[8],C=r[12],U=r[1],oe=r[5],ae=r[9],B=r[13],F=r[2],Q=r[6],ie=r[10],ee=r[14],H=r[3],ce=r[7],fe=r[11],ye=r[15];return s[0]=a*D+o*U+l*F+c*H,s[4]=a*O+o*oe+l*Q+c*ce,s[8]=a*b+o*ae+l*ie+c*fe,s[12]=a*C+o*B+l*ee+c*ye,s[1]=u*D+f*U+h*F+m*H,s[5]=u*O+f*oe+h*Q+m*ce,s[9]=u*b+f*ae+h*ie+m*fe,s[13]=u*C+f*B+h*ee+m*ye,s[2]=x*D+p*U+d*F+_*H,s[6]=x*O+p*oe+d*Q+_*ce,s[10]=x*b+p*ae+d*ie+_*fe,s[14]=x*C+p*B+d*ee+_*ye,s[3]=w*D+v*U+A*F+E*H,s[7]=w*O+v*oe+A*Q+E*ce,s[11]=w*b+v*ae+A*ie+E*fe,s[15]=w*C+v*B+A*ee+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],_=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],_=e[15],w=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,v=x*h*c-u*d*c-x*l*m+a*d*m+u*l*_-a*h*_,A=u*p*c-x*f*c+x*o*m-a*p*m-u*o*_+a*f*_,E=x*f*l-u*p*l-x*o*h+a*p*h+u*o*d-a*f*d,D=t*w+i*v+r*A+s*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=w*O,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*O,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*O,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*O,e[4]=v*O,e[5]=(u*d*s-x*h*s+x*r*m-t*d*m-u*r*_+t*h*_)*O,e[6]=(x*l*s-a*d*s-x*r*c+t*d*c+a*r*_-t*l*_)*O,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*O,e[8]=A*O,e[9]=(x*f*s-u*p*s-x*i*m+t*p*m+u*i*_-t*f*_)*O,e[10]=(a*p*s-x*o*s+x*i*c-t*p*c-a*i*_+t*o*_)*O,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*O,e[12]=E*O,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*O,e[14]=(x*o*r-a*p*r-x*i*l+t*p*l+a*i*d-t*o*d)*O,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,p=a*u,d=a*f,_=o*f,w=l*c,v=l*u,A=l*f,E=i.x,D=i.y,O=i.z;return r[0]=(1-(p+_))*E,r[1]=(m+A)*E,r[2]=(x-v)*E,r[3]=0,r[4]=(m-A)*D,r[5]=(1-(h+_))*D,r[6]=(d+w)*D,r[7]=0,r[8]=(x+v)*O,r[9]=(d-w)*O,r[10]=(1-(h+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,u=1/a,f=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new z,Vt=new it,rg=new z(0,0,0),sg=new z(1,1,1),An=new z,jr=new z,Rt=new z,tc=new it,nc=new Lr;class Ds{constructor(e=0,t=0,i=0,r=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let og=0;const ic=new z,gi=new Lr,fn=new it,$r=new z,er=new z,ag=new z,lg=new Lr,rc=new z(1,0,0),sc=new z(0,1,0),oc=new z(0,0,1),cg={type:"added"},ac={type:"removed"};class _t extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new z,t=new Ds,i=new Lr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ft}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(er,$r,this.up):fn.lookAt($r,er,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new z(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new z,hn=new z,mo=new z,dn=new z,_i=new z,xi=new z,lc=new z,go=new z,_o=new z,xo=new z;class gn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ht.subVectors(r,t),hn.subVectors(i,t),mo.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(hn),l=Ht.dot(mo),c=hn.dot(hn),u=hn.dot(mo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l}static isFrontFacing(e,t,i,r){return Ht.subVectors(i,t),hn.subVectors(e,t),Ht.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ht.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,i),xi.subVectors(s,i),go.subVectors(e,i);const l=_i.dot(go),c=xi.dot(go);if(l<=0&&c<=0)return t.copy(i);_o.subVectors(e,r);const u=_i.dot(_o),f=xi.dot(_o);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_i,a);xo.subVectors(e,s);const m=_i.dot(xo),x=xi.dot(xo);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(xi,o);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return lc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(lc,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(_i,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ug=0;class Pr extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Di,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wu,this.blendDst=qu,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tf extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new z,Yr=new qe;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nf extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rf extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fg=0;const zt=new it,vo=new _t,vi=new z,Pt=new Rr,tr=new Rr,ut=new z;class ci extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?rf:nf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Pt.min,tr.min),Pt.expandByPoint(ut),ut.addVectors(Pt.max,tr.max),Pt.expandByPoint(ut)):(Pt.expandByPoint(tr.min),Pt.expandByPoint(tr.max))}Pt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),ut.add(vi)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<o;U++)c[U]=new z,u[U]=new z;const f=new z,h=new z,m=new z,x=new qe,p=new qe,d=new qe,_=new z,w=new z;function v(U,oe,ae){f.fromArray(r,U*3),h.fromArray(r,oe*3),m.fromArray(r,ae*3),x.fromArray(a,U*2),p.fromArray(a,oe*2),d.fromArray(a,ae*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const B=1/(p.x*d.y-d.x*p.y);isFinite(B)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),w.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),c[U].add(_),c[oe].add(_),c[ae].add(_),u[U].add(w),u[oe].add(w),u[ae].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let U=0,oe=A.length;U<oe;++U){const ae=A[U],B=ae.start,F=ae.count;for(let Q=B,ie=B+F;Q<ie;Q+=3)v(i[Q+0],i[Q+1],i[Q+2])}const E=new z,D=new z,O=new z,b=new z;function C(U){O.fromArray(s,U*3),b.copy(O);const oe=c[U];E.copy(oe),E.sub(O.multiplyScalar(O.dot(oe))).normalize(),D.crossVectors(b,oe);const B=D.dot(u[U])<0?-1:1;l[U*4]=E.x,l[U*4+1]=E.y,l[U*4+2]=E.z,l[U*4+3]=B}for(let U=0,oe=A.length;U<oe;++U){const ae=A[U],B=ae.start,F=ae.count;for(let Q=B,ie=B+F;Q<ie;Q+=3)C(i[Q+0]),C(i[Q+1]),C(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[x++]=c[m++]}return new sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new it,Mi=new ig,Mo=new Ea,nr=new z,ir=new z,rr=new z,yo=new z,Kr=new z,Zr=new qe,Jr=new qe,Qr=new qe,bo=new z,es=new z;class _n extends _t{constructor(e=new ci,t=new tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(yo.fromBufferAttribute(f,e),a?Kr.addScaledVector(yo,u):Kr.addScaledVector(yo.sub(t),u))}t.add(Kr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),e.ray.intersectsSphere(Mo)===!1)||(cc.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(cc),i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],_=Math.max(p.start,h.start),w=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,A=w;v<A;v+=3){const E=o.getX(v),D=o.getX(v+1),O=o.getX(v+2);a=ts(this,d,e,Mi,c,u,E,D,O),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const _=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);a=ts(this,r,e,Mi,c,u,_,w,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],_=Math.max(p.start,h.start),w=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,A=w;v<A;v+=3){const E=v,D=v+1,O=v+2;a=ts(this,d,e,Mi,c,u,E,D,O),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const _=p,w=p+1,v=p+2;a=ts(this,r,e,Mi,c,u,_,w,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function hg(n,e,t,i,r,s,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nn,o),l===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,nr),n.getVertexPosition(o,ir),n.getVertexPosition(l,rr);const c=hg(n,e,t,i,nr,ir,rr,bo);if(c){r&&(Zr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,l),c.uv=gn.getUV(bo,nr,ir,rr,Zr,Jr,Qr,new qe)),s&&(Zr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,o),Qr.fromBufferAttribute(s,l),c.uv2=gn.getUV(bo,nr,ir,rr,Zr,Jr,Qr,new qe));const u={a,b:o,c:l,normal:new z,materialIndex:0};gn.getNormal(nr,ir,rr,u.normal),c.face=u}return c}class Dr extends ci{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function x(p,d,_,w,v,A,E,D,O,b,C){const U=A/O,oe=E/b,ae=A/2,B=E/2,F=D/2,Q=O+1,ie=b+1;let ee=0,H=0;const ce=new z;for(let fe=0;fe<ie;fe++){const ye=fe*oe-B;for(let k=0;k<Q;k++){const ne=k*U-ae;ce[p]=ne*w,ce[d]=ye*v,ce[_]=F,c.push(ce.x,ce.y,ce.z),ce[p]=0,ce[d]=0,ce[_]=D>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(k/O),f.push(1-fe/b),ee+=1}}for(let fe=0;fe<b;fe++)for(let ye=0;ye<O;ye++){const k=h+ye+Q*fe,ne=h+ye+Q*(fe+1),xe=h+(ye+1)+Q*(fe+1),P=h+(ye+1)+Q*fe;l.push(k,ne,P),l.push(ne,xe,P),H+=6}o.addGroup(m,H,C),m+=H,h+=ee}}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}function dg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sf(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?Qt:wr}const pg={clone:Hi,merge:yt};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class of extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends of{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,bi=1;class _g extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new It(yi,bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new It(yi,bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new It(yi,bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new It(yi,bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new It(yi,bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new It(yi,bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class af extends Tt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new af(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dr(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:In});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===br&&(t.minFilter=Bt),new _g(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const So=new z,vg=new z,Mg=new Ft;class Xn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=So.subVectors(i,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(So),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mg.getNormalMatrix(e),r=this.coplanarPoint(So).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ea,ns=new z;class Ta{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],_=i[13],w=i[14],v=i[15];return t[0].setComponents(o-r,f-l,p-h,v-d).normalize(),t[1].setComponents(o+r,f+l,p+h,v+d).normalize(),t[2].setComponents(o+s,f+c,p+m,v+_).normalize(),t[3].setComponents(o-s,f-c,p-m,v-_).normalize(),t[4].setComponents(o-a,f-u,p-x,v-w).normalize(),t[5].setComponents(o+a,f+u,p+x,v+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Is extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],p=[],d=[];for(let _=0;_<u;_++){const w=_*h-a;for(let v=0;v<c;v++){const A=v*f-s;x.push(A,-w,0),p.push(0,0,1),d.push(v/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<o;w++){const v=w+c*_,A=w+c*(_+1),E=w+1+c*(_+1),D=w+1+c*_;m.push(v,A,D),m.push(A,E,D)}this.setIndex(m),this.setAttribute("position",new ri(x,3)),this.setAttribute("normal",new ri(p,3)),this.setAttribute("uv",new ri(d,2))}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg="vec3 transformed = vec3( position );",Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kg=`#define PI 3.141592653589793
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
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
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
#endif`,f_=`#if defined( USE_ENVMAP )
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
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
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
#endif`,__=`struct PhysicalMaterial {
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
}`,x_=`
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
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
#endif`,F_=`#ifdef USE_MORPHTARGETS
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
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,O_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,p0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,m0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,g0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,x0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,j0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Ie={alphamap_fragment:bg,alphamap_pars_fragment:Sg,alphatest_fragment:wg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:Ag,begin_vertex:Cg,beginnormal_vertex:Lg,bsdfs:Rg,iridescence_fragment:Pg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Og,color_fragment:Ug,color_pars_fragment:zg,color_pars_vertex:Bg,color_vertex:Gg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:qg,emissivemap_fragment:Xg,emissivemap_pars_fragment:jg,encodings_fragment:$g,encodings_pars_fragment:Yg,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:f_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:r_,gradientmap_pars_fragment:s_,lightmap_fragment:o_,lightmap_pars_fragment:a_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:u_,lights_toon_fragment:h_,lights_toon_pars_fragment:d_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:__,lights_fragment_begin:x_,lights_fragment_maps:v_,lights_fragment_end:M_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:w_,map_fragment:E_,map_pars_fragment:T_,map_particle_fragment:A_,map_particle_pars_fragment:C_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:R_,morphcolor_vertex:P_,morphnormal_vertex:D_,morphtarget_pars_vertex:I_,morphtarget_vertex:F_,normal_fragment_begin:N_,normal_fragment_maps:O_,normal_pars_fragment:U_,normal_pars_vertex:z_,normal_vertex:B_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:W_,output_fragment:q_,packing:X_,premultiplied_alpha_fragment:j_,project_vertex:$_,dithering_fragment:Y_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:r0,skinning_vertex:s0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:u0,transmission_fragment:f0,transmission_pars_fragment:h0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,uv2_pars_fragment:g0,uv2_pars_vertex:_0,uv2_vertex:x0,worldpos_vertex:v0,background_vert:M0,background_frag:y0,backgroundCube_vert:b0,backgroundCube_frag:S0,cube_vert:w0,cube_frag:E0,depth_vert:T0,depth_frag:A0,distanceRGBA_vert:C0,distanceRGBA_frag:L0,equirect_vert:R0,equirect_frag:P0,linedashed_vert:D0,linedashed_frag:I0,meshbasic_vert:F0,meshbasic_frag:N0,meshlambert_vert:O0,meshlambert_frag:U0,meshmatcap_vert:z0,meshmatcap_frag:B0,meshnormal_vert:G0,meshnormal_frag:k0,meshphong_vert:V0,meshphong_frag:H0,meshphysical_vert:W0,meshphysical_frag:q0,meshtoon_vert:X0,meshtoon_frag:j0,points_vert:$0,points_frag:Y0,shadow_vert:K0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:Q0},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},tn={basic:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:yt([ve.points,ve.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:yt([ve.common,ve.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:yt([ve.sprite,ve.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:yt([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:yt([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};tn.physical={uniforms:yt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const is={r:0,b:0,g:0};function ex(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(d,_){let w=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const A=n.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(v=null),v===null?p(o,l):v&&v.isColor&&(p(v,1),w=!0),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ps)?(u===void 0&&(u=new _n(new Dr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Hi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,O,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Ye,(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _n(new Is(2,2),new li({name:"BackgroundMaterial",uniforms:Hi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,_){d.getRGB(is,sf(n)),i.buffers.color.setClear(is.r,is.g,is.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(d,_=1){o.set(d),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:x}}function tx(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(F,Q,ie,ee,H){let ce=!1;if(a){const fe=p(ee,ie,Q);c!==fe&&(c=fe,m(c.object)),ce=_(F,ee,ie,H),ce&&w(F,ee,ie,H)}else{const fe=Q.wireframe===!0;(c.geometry!==ee.id||c.program!==ie.id||c.wireframe!==fe)&&(c.geometry=ee.id,c.program=ie.id,c.wireframe=fe,ce=!0)}H!==null&&t.update(H,34963),(ce||u)&&(u=!1,b(F,Q,ie,ee),H!==null&&n.bindBuffer(34963,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,Q,ie){const ee=ie.wireframe===!0;let H=o[F.id];H===void 0&&(H={},o[F.id]=H);let ce=H[Q.id];ce===void 0&&(ce={},H[Q.id]=ce);let fe=ce[ee];return fe===void 0&&(fe=d(h()),ce[ee]=fe),fe}function d(F){const Q=[],ie=[],ee=[];for(let H=0;H<r;H++)Q[H]=0,ie[H]=0,ee[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ie,attributeDivisors:ee,object:F,attributes:{},index:null}}function _(F,Q,ie,ee){const H=c.attributes,ce=Q.attributes;let fe=0;const ye=ie.getAttributes();for(const k in ye)if(ye[k].location>=0){const xe=H[k];let P=ce[k];if(P===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(P=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(P=F.instanceColor)),xe===void 0||xe.attribute!==P||P&&xe.data!==P.data)return!0;fe++}return c.attributesNum!==fe||c.index!==ee}function w(F,Q,ie,ee){const H={},ce=Q.attributes;let fe=0;const ye=ie.getAttributes();for(const k in ye)if(ye[k].location>=0){let xe=ce[k];xe===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(xe=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(xe=F.instanceColor));const P={};P.attribute=xe,xe&&xe.data&&(P.data=xe.data),H[k]=P,fe++}c.attributes=H,c.attributesNum=fe,c.index=ee}function v(){const F=c.newAttributes;for(let Q=0,ie=F.length;Q<ie;Q++)F[Q]=0}function A(F){E(F,0)}function E(F,Q){const ie=c.newAttributes,ee=c.enabledAttributes,H=c.attributeDivisors;ie[F]=1,ee[F]===0&&(n.enableVertexAttribArray(F),ee[F]=1),H[F]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Q),H[F]=Q)}function D(){const F=c.newAttributes,Q=c.enabledAttributes;for(let ie=0,ee=Q.length;ie<ee;ie++)Q[ie]!==F[ie]&&(n.disableVertexAttribArray(ie),Q[ie]=0)}function O(F,Q,ie,ee,H,ce){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(F,Q,ie,H,ce):n.vertexAttribPointer(F,Q,ie,ee,H,ce)}function b(F,Q,ie,ee){if(i.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=ee.attributes,ce=ie.getAttributes(),fe=Q.defaultAttributeValues;for(const ye in ce){const k=ce[ye];if(k.location>=0){let ne=H[ye];if(ne===void 0&&(ye==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),ye==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){const xe=ne.normalized,P=ne.itemSize,L=t.get(ne);if(L===void 0)continue;const J=L.buffer,re=L.type,ge=L.bytesPerElement;if(ne.isInterleavedBufferAttribute){const pe=ne.data,we=pe.stride,y=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let T=0;T<k.locationSize;T++)E(k.location+T,pe.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let T=0;T<k.locationSize;T++)A(k.location+T);n.bindBuffer(34962,J);for(let T=0;T<k.locationSize;T++)O(k.location+T,P/k.locationSize,re,xe,we*ge,(y+P/k.locationSize*T)*ge)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<k.locationSize;pe++)E(k.location+pe,ne.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<k.locationSize;pe++)A(k.location+pe);n.bindBuffer(34962,J);for(let pe=0;pe<k.locationSize;pe++)O(k.location+pe,P/k.locationSize,re,xe,P*ge,P/k.locationSize*pe*ge)}}else if(fe!==void 0){const xe=fe[ye];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(k.location,xe);break;case 3:n.vertexAttrib3fv(k.location,xe);break;case 4:n.vertexAttrib4fv(k.location,xe);break;default:n.vertexAttrib1fv(k.location,xe)}}}}D()}function C(){ae();for(const F in o){const Q=o[F];for(const ie in Q){const ee=Q[ie];for(const H in ee)x(ee[H].object),delete ee[H];delete Q[ie]}delete o[F]}}function U(F){if(o[F.id]===void 0)return;const Q=o[F.id];for(const ie in Q){const ee=Q[ie];for(const H in ee)x(ee[H].object),delete ee[H];delete Q[ie]}delete o[F.id]}function oe(F){for(const Q in o){const ie=o[Q];if(ie[F.id]===void 0)continue;const ee=ie[F.id];for(const H in ee)x(ee[H].object),delete ee[H];delete ie[F.id]}}function ae(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:oe,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function nx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function ix(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),v=h>0,A=a||e.has("OES_texture_float"),E=v&&A,D=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:E,maxSamples:D}}function rx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const w=s?0:i,v=w*4;let A=_.clippingState||null;l.value=A,A=u(x,h,v,m);for(let E=0;E!==v;++E)A[E]=t[E];_.clippingState=A,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const _=m+p*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let v=0,A=m;v!==p;++v,A+=4)a.copy(f[v]).applyMatrix4(w,o),a.normal.toArray(d,A),d[A+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function sx(n){let e=new WeakMap;function t(a,o){return o===Xo?a.mapping=Gi:o===jo&&(a.mapping=ki),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Xo||o===jo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cf extends of{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,uc=[.125,.215,.35,.446,.526,.582],Kn=20,wo=new cf,fc=new $e;let Eo=null;const jn=(1+Math.sqrt(5))/2,wi=1/jn,hc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,jn,wi),new z(0,jn,-wi),new z(wi,0,jn),new z(-wi,0,jn),new z(jn,wi,0),new z(-jn,wi,0)];class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Sr,format:Xt,encoding:oi,depthBuffer:!1},r=pc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(s)),this._blurMaterial=ax(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,i,r){const o=new It(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fc),u.toneMapping=vn,u.autoClear=!1;const m=new tf({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),x=new _n(new Dr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(fc),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):w===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const v=this._cubeSize;rs(r,w*v,_>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(r-1)%hc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):Kn;d>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const _=[];let w=0;for(let O=0;O<Kn;++O){const b=O/p,C=Math.exp(-b*b/2);_.push(C),O===0?w+=C:O<d&&(w+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/w;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const A=this._sizeLods[r],E=3*A*(r>v-Ci?r-v+Ci:0),D=4*(this._cubeSize-A);rs(t,E,D,3*A,2*A),l.setRenderTarget(t),l.render(f,wo)}}function ox(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ci?l=uc[a-n+Ci-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,_=1,w=new Float32Array(p*x*m),v=new Float32Array(d*x*m),A=new Float32Array(_*x*m);for(let D=0;D<m;D++){const O=D%3*2/3-1,b=D>2?0:-1,C=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];w.set(C,p*x*D),v.set(h,d*x*D);const U=[D,D,D,D,D,D];A.set(U,_*x*D)}const E=new ci;E.setAttribute("position",new sn(w,p)),E.setAttribute("uv",new sn(v,d)),E.setAttribute("faceIndex",new sn(A,_)),e.push(E),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pc(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ax(n,e,t){const i=new Float32Array(Kn),r=new z(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function mc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function gc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function lx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xo||l===jo,u=l===Gi||l===ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new dc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new dc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ux(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let v=0,A=w.length;v<A;v+=3){const E=w[v+0],D=w[v+1],O=w[v+2];h.push(E,D,D,O,O,E)}}else{const w=x.array;p=x.version;for(let v=0,A=w.length/3-1;v<A;v+=3){const E=v+0,D=v+1,O=v+2;h.push(E,D,D,O,O,E)}}const d=new(Yu(h)?rf:nf)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function hx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dx(n,e){return n[0]-e[0]}function px(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let ie=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};var x=ie;_!==void 0&&_.texture.dispose();const A=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let U=0;A===!0&&(U=1),E===!0&&(U=2),D===!0&&(U=3);let oe=u.attributes.position.count*U,ae=1;oe>e.maxTextureSize&&(ae=Math.ceil(oe/e.maxTextureSize),oe=e.maxTextureSize);const B=new Float32Array(oe*ae*4*d),F=new Qu(B,oe,ae,d);F.type=Jn,F.needsUpdate=!0;const Q=U*4;for(let ee=0;ee<d;ee++){const H=O[ee],ce=b[ee],fe=C[ee],ye=oe*ae*4*ee;for(let k=0;k<H.count;k++){const ne=k*Q;A===!0&&(a.fromBufferAttribute(H,k),B[ye+ne+0]=a.x,B[ye+ne+1]=a.y,B[ye+ne+2]=a.z,B[ye+ne+3]=0),E===!0&&(a.fromBufferAttribute(ce,k),B[ye+ne+4]=a.x,B[ye+ne+5]=a.y,B[ye+ne+6]=a.z,B[ye+ne+7]=0),D===!0&&(a.fromBufferAttribute(fe,k),B[ye+ne+8]=a.x,B[ye+ne+9]=a.y,B[ye+ne+10]=a.z,B[ye+ne+11]=fe.itemSize===4?a.w:1)}}_={count:d,texture:F,size:new qe(oe,ae)},s.set(u,_),u.addEventListener("dispose",ie)}let w=0;for(let A=0;A<m.length;A++)w+=m[A];const v=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let E=0;E<p;E++)d[E]=[E,0];i[u.id]=d}for(let E=0;E<p;E++){const D=d[E];D[0]=E,D[1]=m[E]}d.sort(px);for(let E=0;E<8;E++)E<p&&d[E][1]?(o[E][0]=d[E][0],o[E][1]=d[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(dx);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const D=o[E],O=D[0],b=D[1];O!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+E)!==_[O]&&u.setAttribute("morphTarget"+E,_[O]),w&&u.getAttribute("morphNormal"+E)!==w[O]&&u.setAttribute("morphNormal"+E,w[O]),r[E]=b,v+=b):(_&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),w&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const A=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function gx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const uf=new Tt,ff=new Qu,hf=new tg,df=new af,_c=[],xc=[],vc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;yc.set(i),n.uniformMatrix2fv(this.addr,!1,yc),ot(t,i)}}function bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),ot(t,i)}}function Sx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;vc.set(i),n.uniformMatrix4fv(this.addr,!1,vc),ot(t,i)}}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function Cx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function Dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||uf,r)}function Ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hf,r)}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||df,r)}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ff,r)}function Ox(n){switch(n){case 5126:return _x;case 35664:return xx;case 35665:return vx;case 35666:return Mx;case 35674:return yx;case 35675:return bx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Lx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ux(n,e){n.uniform1fv(this.addr,e)}function zx(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function Bx(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function Gx(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function kx(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vx(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hx(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wx(n,e){n.uniform1iv(this.addr,e)}function qx(n,e){n.uniform2iv(this.addr,e)}function Xx(n,e){n.uniform3iv(this.addr,e)}function jx(n,e){n.uniform4iv(this.addr,e)}function $x(n,e){n.uniform1uiv(this.addr,e)}function Yx(n,e){n.uniform2uiv(this.addr,e)}function Kx(n,e){n.uniform3uiv(this.addr,e)}function Zx(n,e){n.uniform4uiv(this.addr,e)}function Jx(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||uf,s[a])}function Qx(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hf,s[a])}function ev(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||df,s[a])}function tv(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ff,s[a])}function nv(n){switch(n){case 5126:return Ux;case 35664:return zx;case 35665:return Bx;case 35666:return Gx;case 35674:return kx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return qx;case 35668:case 35672:return Xx;case 35669:case 35673:return jx;case 5125:return $x;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ox(t.type)}}class rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=nv(t.type)}}class sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function ov(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const s=To.exec(i),a=To.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bc(t,c===void 0?new iv(o,n,e):new rv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new sv(o),bc(t,f)),t=f}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ov(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let av=0;function lv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function cv(n){switch(n){case oi:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function wc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lv(n.getShaderSource(e),a)}else return r}function uv(n,e){const t=cv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fv(n,e){let t;switch(e){case Cm:t="Linear";break;case Lm:t="Reinhard";break;case Rm:t="OptimizedCineon";break;case Pm:t="ACESFilmic";break;case Dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function dv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function lr(n){return n!==""}function Ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(n){return n.replace(mv,gv)}function gv(n,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jo(t)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(_v,xv)}function xv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===om?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function Mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case ki:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function bv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wa:e="ENVMAP_BLENDING_MULTIPLY";break;case Tm:e="ENVMAP_BLENDING_MIX";break;case Am:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vv(t),c=Mv(t),u=yv(t),f=bv(t),h=Sv(t),m=t.isWebGL2?"":hv(t),x=dv(s),p=r.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(lr).join(`
`),d.length>0&&(d+=`
`),_=[m,x].filter(lr).join(`
`),_.length>0&&(_+=`
`)):(d=[Cc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),_=[m,Cc(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==vn?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,uv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Jo(a),a=Ec(a,t),a=Tc(a,t),o=Jo(o),o=Ec(o,t),o=Tc(o,t),a=Ac(a),o=Ac(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=w+d+a,A=w+_+o,E=Sc(r,35633,v),D=Sc(r,35632,A);if(r.attachShader(p,E),r.attachShader(p,D),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(E).trim(),oe=r.getShaderInfoLog(D).trim();let ae=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){ae=!1;const F=wc(r,E,"vertex"),Q=wc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+F+`
`+Q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(U===""||oe==="")&&(B=!1);B&&(this.diagnostics={runnable:ae,programLog:C,vertexShader:{log:U,prefix:d},fragmentShader:{log:oe,prefix:_}})}r.deleteShader(E),r.deleteShader(D);let O;this.getUniforms=function(){return O===void 0&&(O=new ps(r,p)),O};let b;return this.getAttributes=function(){return b===void 0&&(b=pv(r,p)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=D,this}let Ev=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Av(e),t.set(e,i)),i}}class Av{constructor(e){this.id=Ev++,this.code=e,this.usedTimes=0}}function Cv(n,e,t,i,r,s,a){const o=new ef,l=new Tv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,C,U,oe,ae){const B=oe.fog,F=ae.geometry,Q=b.isMeshStandardMaterial?oe.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),ee=ie&&ie.mapping===Ps?ie.image.height:null,H=x[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=ce!==void 0?ce.length:0;let ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let k,ne,xe,P;if(H){const we=tn[H];k=we.vertexShader,ne=we.fragmentShader}else k=b.vertexShader,ne=b.fragmentShader,l.update(b),xe=l.getVertexShaderID(b),P=l.getFragmentShaderID(b);const L=n.getRenderTarget(),J=b.alphaTest>0,re=b.clearcoat>0,ge=b.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:b.type,vertexShader:k,fragmentShader:ne,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:P,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:h,outputEncoding:L===null?n.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:oi,map:!!b.map,matcap:!!b.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:ee,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Zm,tangentSpaceNormalMap:b.normalMapType===$u,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Ye,clearcoat:re,clearcoatMap:re&&!!b.clearcoatMap,clearcoatRoughnessMap:re&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!b.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!b.iridescenceMap,iridescenceThicknessMap:ge&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Di,alphaMap:!!b.alphaMap,alphaTest:J,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!F.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!B,useFog:b.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:vn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===Nt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)C.push(U),C.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(_(C,b),w(C,b),C.push(n.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function _(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function w(b,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),b.push(o.mask)}function v(b){const C=x[b.type];let U;if(C){const oe=tn[C];U=pg.clone(oe.uniforms)}else U=b.uniforms;return U}function A(b,C){let U;for(let oe=0,ae=c.length;oe<ae;oe++){const B=c[oe];if(B.cacheKey===C){U=B,++U.usedTimes;break}}return U===void 0&&(U=new wv(n,C,b,s),c.push(U)),U}function E(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function D(b){l.remove(b)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:D,programs:c,dispose:O}}function Lv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,x,p,d){const _=a(f,h,m,x,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,x,p,d){const _=a(f,h,m,x,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Rv),i.length>1&&i.sort(h||Lc),r.length>1&&r.sort(h||Lc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Pv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Rc,n.set(i,[a])):r>=s.length?(a=new Rc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fv=0;function Nv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ov(n,e){const t=new Dv,i=Iv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new it,o=new it;function l(u,f){let h=0,m=0,x=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let p=0,d=0,_=0,w=0,v=0,A=0,E=0,D=0,O=0,b=0;u.sort(Nv);const C=f!==!0?Math.PI:1;for(let oe=0,ae=u.length;oe<ae;oe++){const B=u[oe],F=B.color,Q=B.intensity,ie=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=F.r*Q*C,m+=F.g*Q*C,x+=F.b*Q*C;else if(B.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(B.sh.coefficients[H],Q);else if(B.isDirectionalLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const ce=B.shadow,fe=i.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,r.directionalShadow[p]=fe,r.directionalShadowMap[p]=ee,r.directionalShadowMatrix[p]=B.shadow.matrix,A++}r.directional[p]=H,p++}else if(B.isSpotLight){const H=t.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(F).multiplyScalar(Q*C),H.distance=ie,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,r.spot[_]=H;const ce=B.shadow;if(B.map&&(r.spotLightMap[O]=B.map,O++,ce.updateMatrices(B),B.castShadow&&b++),r.spotLightMatrix[_]=ce.matrix,B.castShadow){const fe=i.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,r.spotShadow[_]=fe,r.spotShadowMap[_]=ee,D++}_++}else if(B.isRectAreaLight){const H=t.get(B);H.color.copy(F).multiplyScalar(Q),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),r.rectArea[w]=H,w++}else if(B.isPointLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*C),H.distance=B.distance,H.decay=B.decay,B.castShadow){const ce=B.shadow,fe=i.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,fe.shadowCameraNear=ce.camera.near,fe.shadowCameraFar=ce.camera.far,r.pointShadow[d]=fe,r.pointShadowMap[d]=ee,r.pointShadowMatrix[d]=B.shadow.matrix,E++}r.point[d]=H,d++}else if(B.isHemisphereLight){const H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(Q*C),H.groundColor.copy(B.groundColor).multiplyScalar(Q*C),r.hemi[v]=H,v++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const U=r.hash;(U.directionalLength!==p||U.pointLength!==d||U.spotLength!==_||U.rectAreaLength!==w||U.hemiLength!==v||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==D||U.numSpotMaps!==O)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=w,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=D+O-b,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=b,U.directionalLength=p,U.pointLength=d,U.spotLength=_,U.rectAreaLength=w,U.hemiLength=v,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=D,U.numSpotMaps=O,r.version=Fv++)}function c(u,f){let h=0,m=0,x=0,p=0,d=0;const _=f.matrixWorldInverse;for(let w=0,v=u.length;w<v;w++){const A=u[w];if(A.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),h++}else if(A.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),x++}else if(A.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),o.identity(),a.copy(A.matrixWorld),a.premultiply(_),o.extractRotation(a),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(A.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){const E=r.hemi[d];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Pc(n,e){const t=new Ov(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Uv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Pc(n,e),t.set(s,[l])):a>=o.length?(l=new Pc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zv extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bv extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`;function Vv(n,e,t){let i=new Ta;const r=new qe,s=new qe,a=new Je,o=new zv({depthPacking:Km}),l=new Bv,c={},u=t.maxTextureSize,f={[Nn]:Nt,[Nt]:Nn,[Rn]:Rn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Gv,fragmentShader:kv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new ci;x.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _n(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu,this.render=function(A,E,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const O=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(In),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let oe=0,ae=A.length;oe<ae;oe++){const B=A[oe],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();if(r.multiply(Q),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y)),F.map===null){const ee=this.type!==ar?{minFilter:bt,magFilter:bt}:{};F.map=new ai(r.x,r.y,ee),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ie=F.getViewportCount();for(let ee=0;ee<ie;ee++){const H=F.getViewport(ee);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),U.viewport(a),F.updateMatrices(B,ee),i=F.getFrustum(),v(E,D,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===ar&&_(F,D),F.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(O,b,C)};function _(A,E){const D=e.update(p);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,D,h,p,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,D,m,p,null)}function w(A,E,D,O,b,C){let U=null;const oe=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(oe!==void 0)U=oe;else if(U=D.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ae=U.uuid,B=E.uuid;let F=c[ae];F===void 0&&(F={},c[ae]=F);let Q=F[B];Q===void 0&&(Q=U.clone(),F[B]=Q),U=Q}return U.visible=E.visible,U.wireframe=E.wireframe,C===ar?U.side=E.shadowSide!==null?E.shadowSide:E.side:U.side=E.shadowSide!==null?E.shadowSide:f[E.side],U.alphaMap=E.alphaMap,U.alphaTest=E.alphaTest,U.map=E.map,U.clipShadows=E.clipShadows,U.clippingPlanes=E.clippingPlanes,U.clipIntersection=E.clipIntersection,U.displacementMap=E.displacementMap,U.displacementScale=E.displacementScale,U.displacementBias=E.displacementBias,U.wireframeLinewidth=E.wireframeLinewidth,U.linewidth=E.linewidth,D.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(D.matrixWorld),U.nearDistance=O,U.farDistance=b),U}function v(A,E,D,O,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ar)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const oe=e.update(A),ae=A.material;if(Array.isArray(ae)){const B=oe.groups;for(let F=0,Q=B.length;F<Q;F++){const ie=B[F],ee=ae[ie.materialIndex];if(ee&&ee.visible){const H=w(A,ee,O,D.near,D.far,b);n.renderBufferDirect(D,null,oe,H,A,ie)}}}else if(ae.visible){const B=w(A,ae,O,D.near,D.far,b);n.renderBufferDirect(D,null,oe,B,A,null)}}const U=A.children;for(let oe=0,ae=U.length;oe<ae;oe++)v(U[oe],E,D,O,b)}}function Hv(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const j=new Je;let de=null;const Se=new Je(0,0,0,0);return{setMask:function(Ae){de!==Ae&&!R&&(n.colorMask(Ae,Ae,Ae,Ae),de=Ae)},setLocked:function(Ae){R=Ae},setClear:function(Ae,He,lt,ht,On){On===!0&&(Ae*=ht,He*=ht,lt*=ht),j.set(Ae,He,lt,ht),Se.equals(j)===!1&&(n.clearColor(Ae,He,lt,ht),Se.copy(j))},reset:function(){R=!1,de=null,Se.set(-1,0,0,0)}}}function s(){let R=!1,j=null,de=null,Se=null;return{setTest:function(Ae){Ae?J(2929):re(2929)},setMask:function(Ae){j!==Ae&&!R&&(n.depthMask(Ae),j=Ae)},setFunc:function(Ae){if(de!==Ae){switch(Ae){case vm:n.depthFunc(512);break;case Mm:n.depthFunc(519);break;case ym:n.depthFunc(513);break;case qo:n.depthFunc(515);break;case bm:n.depthFunc(514);break;case Sm:n.depthFunc(518);break;case wm:n.depthFunc(516);break;case Em:n.depthFunc(517);break;default:n.depthFunc(515)}de=Ae}},setLocked:function(Ae){R=Ae},setClear:function(Ae){Se!==Ae&&(n.clearDepth(Ae),Se=Ae)},reset:function(){R=!1,j=null,de=null,Se=null}}}function a(){let R=!1,j=null,de=null,Se=null,Ae=null,He=null,lt=null,ht=null,On=null;return{setTest:function(Ke){R||(Ke?J(2960):re(2960))},setMask:function(Ke){j!==Ke&&!R&&(n.stencilMask(Ke),j=Ke)},setFunc:function(Ke,on,Ut){(de!==Ke||Se!==on||Ae!==Ut)&&(n.stencilFunc(Ke,on,Ut),de=Ke,Se=on,Ae=Ut)},setOp:function(Ke,on,Ut){(He!==Ke||lt!==on||ht!==Ut)&&(n.stencilOp(Ke,on,Ut),He=Ke,lt=on,ht=Ut)},setLocked:function(Ke){R=Ke},setClear:function(Ke){On!==Ke&&(n.clearStencil(Ke),On=Ke)},reset:function(){R=!1,j=null,de=null,Se=null,Ae=null,He=null,lt=null,ht=null,On=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,_=!1,w=null,v=null,A=null,E=null,D=null,O=null,b=null,C=!1,U=null,oe=null,ae=null,B=null,F=null;const Q=n.getParameter(35661);let ie=!1,ee=0;const H=n.getParameter(7938);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),ie=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ie=ee>=2);let ce=null,fe={};const ye=n.getParameter(3088),k=n.getParameter(2978),ne=new Je().fromArray(ye),xe=new Je().fromArray(k);function P(R,j,de){const Se=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(R,Ae),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let He=0;He<de;He++)n.texImage2D(j+He,0,6408,1,1,0,6408,5121,Se);return Ae}const L={};L[3553]=P(3553,3553,1),L[34067]=P(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),J(2929),l.setFunc(qo),Y(!1),le(Ml),J(2884),V(In);function J(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function re(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function ge(R,j){return m[R]!==j?(n.bindFramebuffer(R,j),m[R]=j,i&&(R===36009&&(m[36160]=j),R===36160&&(m[36009]=j)),!0):!1}function pe(R,j){let de=p,Se=!1;if(R)if(de=x.get(j),de===void 0&&(de=[],x.set(j,de)),R.isWebGLMultipleRenderTargets){const Ae=R.texture;if(de.length!==Ae.length||de[0]!==36064){for(let He=0,lt=Ae.length;He<lt;He++)de[He]=36064+He;de.length=Ae.length,Se=!0}}else de[0]!==36064&&(de[0]=36064,Se=!0);else de[0]!==1029&&(de[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function we(R){return d!==R?(n.useProgram(R),d=R,!0):!1}const y={[Ti]:32774,[lm]:32778,[cm]:32779};if(i)y[wl]=32775,y[El]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(y[wl]=R.MIN_EXT,y[El]=R.MAX_EXT)}const T={[um]:0,[fm]:1,[hm]:768,[Wu]:770,[xm]:776,[gm]:774,[pm]:772,[dm]:769,[qu]:771,[_m]:775,[mm]:773};function V(R,j,de,Se,Ae,He,lt,ht){if(R===In){_===!0&&(re(3042),_=!1);return}if(_===!1&&(J(3042),_=!0),R!==am){if(R!==w||ht!==C){if((v!==Ti||D!==Ti)&&(n.blendEquation(32774),v=Ti,D=Ti),ht)switch(R){case Di:n.blendFuncSeparate(1,771,1,771);break;case yl:n.blendFunc(1,1);break;case bl:n.blendFuncSeparate(0,769,0,1);break;case Sl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Di:n.blendFuncSeparate(770,771,1,771);break;case yl:n.blendFunc(770,1);break;case bl:n.blendFuncSeparate(0,769,0,1);break;case Sl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,E=null,O=null,b=null,w=R,C=ht}return}Ae=Ae||j,He=He||de,lt=lt||Se,(j!==v||Ae!==D)&&(n.blendEquationSeparate(y[j],y[Ae]),v=j,D=Ae),(de!==A||Se!==E||He!==O||lt!==b)&&(n.blendFuncSeparate(T[de],T[Se],T[He],T[lt]),A=de,E=Se,O=He,b=lt),w=R,C=!1}function q(R,j){R.side===Rn?re(2884):J(2884);let de=R.side===Nt;j&&(de=!de),Y(de),R.blending===Di&&R.transparent===!1?V(In):V(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Se=R.stencilWrite;c.setTest(Se),Se&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),te(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?J(32926):re(32926)}function Y(R){U!==R&&(R?n.frontFace(2304):n.frontFace(2305),U=R)}function le(R){R!==rm?(J(2884),R!==oe&&(R===Ml?n.cullFace(1029):R===sm?n.cullFace(1028):n.cullFace(1032))):re(2884),oe=R}function he(R){R!==ae&&(ie&&n.lineWidth(R),ae=R)}function te(R,j,de){R?(J(32823),(B!==j||F!==de)&&(n.polygonOffset(j,de),B=j,F=de)):re(32823)}function _e(R){R?J(3089):re(3089)}function se(R){R===void 0&&(R=33984+Q-1),ce!==R&&(n.activeTexture(R),ce=R)}function M(R,j,de){de===void 0&&(ce===null?de=33984+Q-1:de=ce);let Se=fe[de];Se===void 0&&(Se={type:void 0,texture:void 0},fe[de]=Se),(Se.type!==R||Se.texture!==j)&&(ce!==de&&(n.activeTexture(de),ce=de),n.bindTexture(R,j||L[R]),Se.type=R,Se.texture=j)}function g(){const R=fe[ce];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){ne.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ne.copy(R))}function be(R){xe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function Pe(R,j){let de=f.get(j);de===void 0&&(de=new WeakMap,f.set(j,de));let Se=de.get(R);Se===void 0&&(Se=n.getUniformBlockIndex(j,R.name),de.set(R,Se))}function je(R,j){const Se=f.get(j).get(R);u.get(j)!==Se&&(n.uniformBlockBinding(j,Se,R.__bindingPointIndex),u.set(j,Se))}function at(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,fe={},m={},x=new WeakMap,p=[],d=null,_=!1,w=null,v=null,A=null,E=null,D=null,O=null,b=null,C=!1,U=null,oe=null,ae=null,B=null,F=null,ne.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:J,disable:re,bindFramebuffer:ge,drawBuffers:pe,useProgram:we,setBlending:V,setMaterial:q,setFlipSided:Y,setCullFace:le,setLineWidth:he,setPolygonOffset:te,setScissorTest:_e,activeTexture:se,bindTexture:M,unbindTexture:g,compressedTexImage2D:I,compressedTexImage3D:W,texImage2D:Re,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:je,texStorage2D:X,texStorage3D:Te,texSubImage2D:K,texSubImage3D:ue,compressedTexSubImage2D:Me,compressedTexSubImage3D:me,scissor:Ce,viewport:be,reset:at}}function Wv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,g){return _?new OffscreenCanvas(M,g):Er("canvas")}function v(M,g,I,W){let K=1;if((M.width>W||M.height>W)&&(K=W/Math.max(M.width,M.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ue=g?Zo:Math.floor,Me=ue(K*M.width),me=ue(K*M.height);p===void 0&&(p=w(Me,me));const X=I?w(Me,me):p;return X.width=Me,X.height=me,X.getContext("2d").drawImage(M,0,0,Me,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Me+"x"+me+")."),X}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function A(M){return Ql(M.width)&&Ql(M.height)}function E(M){return o?!1:M.wrapS!==qt||M.wrapT!==qt||M.minFilter!==bt&&M.minFilter!==Bt}function D(M,g){return M.generateMipmaps&&g&&M.minFilter!==bt&&M.minFilter!==Bt}function O(M){n.generateMipmap(M)}function b(M,g,I,W,K=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ue=g;return g===6403&&(I===5126&&(ue=33326),I===5131&&(ue=33325),I===5121&&(ue=33321)),g===33319&&(I===5126&&(ue=33328),I===5131&&(ue=33327),I===5121&&(ue=33323)),g===6408&&(I===5126&&(ue=34836),I===5131&&(ue=34842),I===5121&&(ue=W===Ye&&K===!1?35907:32856),I===32819&&(ue=32854),I===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function C(M,g,I){return D(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==bt&&M.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function U(M){return M===bt||M===Tl||M===$s?9728:9729}function oe(M){const g=M.target;g.removeEventListener("dispose",oe),B(g),g.isVideoTexture&&x.delete(g)}function ae(M){const g=M.target;g.removeEventListener("dispose",ae),Q(g)}function B(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,W=d.get(I);if(W){const K=W[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(M),Object.keys(W).length===0&&d.delete(I)}i.remove(M)}function F(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const I=M.source,W=d.get(I);delete W[g.__cacheKey],a.memory.textures--}function Q(M){const g=M.texture,I=i.get(M),W=i.get(g);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(I.__webglFramebuffer[K]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let K=0;K<I.__webglColorRenderbuffer.length;K++)I.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[K]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,ue=g.length;K<ue;K++){const Me=i.get(g[K]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(M)}let ie=0;function ee(){ie=0}function H(){const M=ie;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ie+=1,M}function ce(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function fe(M,g){const I=i.get(M);if(M.isVideoTexture&&_e(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,M,g);return}}t.bindTexture(3553,I.__webglTexture,33984+g)}function ye(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){re(I,M,g);return}t.bindTexture(35866,I.__webglTexture,33984+g)}function k(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){re(I,M,g);return}t.bindTexture(32879,I.__webglTexture,33984+g)}function ne(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){ge(I,M,g);return}t.bindTexture(34067,I.__webglTexture,33984+g)}const xe={[$o]:10497,[qt]:33071,[Yo]:33648},P={[bt]:9728,[Tl]:9984,[$s]:9986,[Bt]:9729,[Im]:9985,[br]:9987};function L(M,g,I){if(I?(n.texParameteri(M,10242,xe[g.wrapS]),n.texParameteri(M,10243,xe[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,xe[g.wrapR]),n.texParameteri(M,10240,P[g.magFilter]),n.texParameteri(M,10241,P[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==qt||g.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,U(g.magFilter)),n.texParameteri(M,10241,U(g.minFilter)),g.minFilter!==bt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===bt||g.minFilter!==$s&&g.minFilter!==br||g.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function J(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",oe));const W=g.source;let K=d.get(W);K===void 0&&(K={},d.set(W,K));const ue=ce(g);if(ue!==M.__cacheKey){K[ue]===void 0&&(K[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[ue].usedTimes++;const Me=K[M.__cacheKey];Me!==void 0&&(K[M.__cacheKey].usedTimes--,Me.usedTimes===0&&F(g)),M.__cacheKey=ue,M.__webglTexture=K[ue].texture}return I}function re(M,g,I){let W=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=35866),g.isData3DTexture&&(W=32879);const K=J(M,g),ue=g.source;t.bindTexture(W,M.__webglTexture,33984+I);const Me=i.get(ue);if(ue.version!==Me.__version||K===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const me=E(g)&&A(g.image)===!1;let X=v(g.image,me,!1,u);X=se(g,X);const Te=A(X)||o,Re=s.convert(g.format,g.encoding);let Ee=s.convert(g.type),Ce=b(g.internalFormat,Re,Ee,g.encoding,g.isVideoTexture);L(W,g,Te);let be;const Pe=g.mipmaps,je=o&&g.isVideoTexture!==!0,at=Me.__version===void 0||K===!0,R=C(g,X,Te);if(g.isDepthTexture)Ce=6402,o?g.type===Jn?Ce=36012:g.type===Zn?Ce=33190:g.type===Ii?Ce=35056:Ce=33189:g.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ni&&Ce===6402&&g.type!==ju&&g.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Zn,Ee=s.convert(g.type)),g.format===Vi&&Ce===6402&&(Ce=34041,g.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ii,Ee=s.convert(g.type))),at&&(je?t.texStorage2D(3553,1,Ce,X.width,X.height):t.texImage2D(3553,0,Ce,X.width,X.height,0,Re,Ee,null));else if(g.isDataTexture)if(Pe.length>0&&Te){je&&at&&t.texStorage2D(3553,R,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)be=Pe[j],je?t.texSubImage2D(3553,j,0,0,be.width,be.height,Re,Ee,be.data):t.texImage2D(3553,j,Ce,be.width,be.height,0,Re,Ee,be.data);g.generateMipmaps=!1}else je?(at&&t.texStorage2D(3553,R,Ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Re,Ee,X.data)):t.texImage2D(3553,0,Ce,X.width,X.height,0,Re,Ee,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&at&&t.texStorage3D(35866,R,Ce,Pe[0].width,Pe[0].height,X.depth);for(let j=0,de=Pe.length;j<de;j++)be=Pe[j],g.format!==Xt?Re!==null?je?t.compressedTexSubImage3D(35866,j,0,0,0,be.width,be.height,X.depth,Re,be.data,0,0):t.compressedTexImage3D(35866,j,Ce,be.width,be.height,X.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,j,0,0,0,be.width,be.height,X.depth,Re,Ee,be.data):t.texImage3D(35866,j,Ce,be.width,be.height,X.depth,0,Re,Ee,be.data)}else{je&&at&&t.texStorage2D(3553,R,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)be=Pe[j],g.format!==Xt?Re!==null?je?t.compressedTexSubImage2D(3553,j,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(3553,j,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,j,0,0,be.width,be.height,Re,Ee,be.data):t.texImage2D(3553,j,Ce,be.width,be.height,0,Re,Ee,be.data)}else if(g.isDataArrayTexture)je?(at&&t.texStorage3D(35866,R,Ce,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Re,Ee,X.data)):t.texImage3D(35866,0,Ce,X.width,X.height,X.depth,0,Re,Ee,X.data);else if(g.isData3DTexture)je?(at&&t.texStorage3D(32879,R,Ce,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Re,Ee,X.data)):t.texImage3D(32879,0,Ce,X.width,X.height,X.depth,0,Re,Ee,X.data);else if(g.isFramebufferTexture){if(at)if(je)t.texStorage2D(3553,R,Ce,X.width,X.height);else{let j=X.width,de=X.height;for(let Se=0;Se<R;Se++)t.texImage2D(3553,Se,Ce,j,de,0,Re,Ee,null),j>>=1,de>>=1}}else if(Pe.length>0&&Te){je&&at&&t.texStorage2D(3553,R,Ce,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)be=Pe[j],je?t.texSubImage2D(3553,j,0,0,Re,Ee,be):t.texImage2D(3553,j,Ce,Re,Ee,be);g.generateMipmaps=!1}else je?(at&&t.texStorage2D(3553,R,Ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,Re,Ee,X)):t.texImage2D(3553,0,Ce,Re,Ee,X);D(g,Te)&&O(W),Me.__version=ue.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,I){if(g.image.length!==6)return;const W=J(M,g),K=g.source;t.bindTexture(34067,M.__webglTexture,33984+I);const ue=i.get(K);if(K.version!==ue.__version||W===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!Me&&!me?X[j]=v(g.image[j],!1,!0,c):X[j]=me?g.image[j].image:g.image[j],X[j]=se(g,X[j]);const Te=X[0],Re=A(Te)||o,Ee=s.convert(g.format,g.encoding),Ce=s.convert(g.type),be=b(g.internalFormat,Ee,Ce,g.encoding),Pe=o&&g.isVideoTexture!==!0,je=ue.__version===void 0||W===!0;let at=C(g,Te,Re);L(34067,g,Re);let R;if(Me){Pe&&je&&t.texStorage2D(34067,at,be,Te.width,Te.height);for(let j=0;j<6;j++){R=X[j].mipmaps;for(let de=0;de<R.length;de++){const Se=R[de];g.format!==Xt?Ee!==null?Pe?t.compressedTexSubImage2D(34069+j,de,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(34069+j,de,be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+j,de,0,0,Se.width,Se.height,Ee,Ce,Se.data):t.texImage2D(34069+j,de,be,Se.width,Se.height,0,Ee,Ce,Se.data)}}}else{R=g.mipmaps,Pe&&je&&(R.length>0&&at++,t.texStorage2D(34067,at,be,X[0].width,X[0].height));for(let j=0;j<6;j++)if(me){Pe?t.texSubImage2D(34069+j,0,0,0,X[j].width,X[j].height,Ee,Ce,X[j].data):t.texImage2D(34069+j,0,be,X[j].width,X[j].height,0,Ee,Ce,X[j].data);for(let de=0;de<R.length;de++){const Ae=R[de].image[j].image;Pe?t.texSubImage2D(34069+j,de+1,0,0,Ae.width,Ae.height,Ee,Ce,Ae.data):t.texImage2D(34069+j,de+1,be,Ae.width,Ae.height,0,Ee,Ce,Ae.data)}}else{Pe?t.texSubImage2D(34069+j,0,0,0,Ee,Ce,X[j]):t.texImage2D(34069+j,0,be,Ee,Ce,X[j]);for(let de=0;de<R.length;de++){const Se=R[de];Pe?t.texSubImage2D(34069+j,de+1,0,0,Ee,Ce,Se.image[j]):t.texImage2D(34069+j,de+1,be,Ee,Ce,Se.image[j])}}}D(g,Re)&&O(34067),ue.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function pe(M,g,I,W,K){const ue=s.convert(I.format,I.encoding),Me=s.convert(I.type),me=b(I.internalFormat,ue,Me,I.encoding);i.get(g).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,me,g.width,g.height,g.depth,0,ue,Me,null):t.texImage2D(K,0,me,g.width,g.height,0,ue,Me,null)),t.bindFramebuffer(36160,M),te(g)?h.framebufferTexture2DMultisampleEXT(36160,W,K,i.get(I).__webglTexture,0,he(g)):(K===3553||K>=34069&&K<=34074)&&n.framebufferTexture2D(36160,W,K,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(M,g,I){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let W=33189;if(I||te(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===Jn?W=36012:K.type===Zn&&(W=33190));const ue=he(g);te(g)?h.renderbufferStorageMultisampleEXT(36161,ue,W,g.width,g.height):n.renderbufferStorageMultisample(36161,ue,W,g.width,g.height)}else n.renderbufferStorage(36161,W,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const W=he(g);I&&te(g)===!1?n.renderbufferStorageMultisample(36161,W,35056,g.width,g.height):te(g)?h.renderbufferStorageMultisampleEXT(36161,W,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const W=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<W.length;K++){const ue=W[K],Me=s.convert(ue.format,ue.encoding),me=s.convert(ue.type),X=b(ue.internalFormat,Me,me,ue.encoding),Te=he(g);I&&te(g)===!1?n.renderbufferStorageMultisample(36161,Te,X,g.width,g.height):te(g)?h.renderbufferStorageMultisampleEXT(36161,Te,X,g.width,g.height):n.renderbufferStorage(36161,X,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function y(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),fe(g.depthTexture,0);const W=i.get(g.depthTexture).__webglTexture,K=he(g);if(g.depthTexture.format===ni)te(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,K):n.framebufferTexture2D(36160,36096,3553,W,0);else if(g.depthTexture.format===Vi)te(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,K):n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function T(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");y(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]=n.createRenderbuffer(),we(g.__webglDepthbuffer[W],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),we(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function V(M,g,I){const W=i.get(M);g!==void 0&&pe(W.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&T(M)}function q(M){const g=M.texture,I=i.get(M),W=i.get(g);M.addEventListener("dispose",ae),M.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,ue=M.isWebGLMultipleRenderTargets===!0,Me=A(M)||o;if(K){I.__webglFramebuffer=[];for(let me=0;me<6;me++)I.__webglFramebuffer[me]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const me=M.texture;for(let X=0,Te=me.length;X<Te;X++){const Re=i.get(me[X]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&te(M)===!1){const me=ue?g:[g];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let X=0;X<me.length;X++){const Te=me[X];I.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer[X]);const Re=s.convert(Te.format,Te.encoding),Ee=s.convert(Te.type),Ce=b(Te.internalFormat,Re,Ee,Te.encoding,M.isXRRenderTarget===!0),be=he(M);n.renderbufferStorageMultisample(36161,be,Ce,M.width,M.height),n.framebufferRenderbuffer(36160,36064+X,36161,I.__webglColorRenderbuffer[X])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),we(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,W.__webglTexture),L(34067,g,Me);for(let me=0;me<6;me++)pe(I.__webglFramebuffer[me],M,g,36064,34069+me);D(g,Me)&&O(34067),t.unbindTexture()}else if(ue){const me=M.texture;for(let X=0,Te=me.length;X<Te;X++){const Re=me[X],Ee=i.get(Re);t.bindTexture(3553,Ee.__webglTexture),L(3553,Re,Me),pe(I.__webglFramebuffer,M,Re,36064+X,3553),D(Re,Me)&&O(3553)}t.unbindTexture()}else{let me=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?me=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,W.__webglTexture),L(me,g,Me),pe(I.__webglFramebuffer,M,g,36064,me),D(g,Me)&&O(me),t.unbindTexture()}M.depthBuffer&&T(M)}function Y(M){const g=A(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let W=0,K=I.length;W<K;W++){const ue=I[W];if(D(ue,g)){const Me=M.isWebGLCubeRenderTarget?34067:3553,me=i.get(ue).__webglTexture;t.bindTexture(Me,me),O(Me),t.unbindTexture()}}}function le(M){if(o&&M.samples>0&&te(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,W=M.height;let K=16384;const ue=[],Me=M.stencilBuffer?33306:36096,me=i.get(M),X=M.isWebGLMultipleRenderTargets===!0;if(X)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){ue.push(36064+Te),M.depthBuffer&&ue.push(Me);const Re=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Re===!1&&(M.depthBuffer&&(K|=256),M.stencilBuffer&&(K|=1024)),X&&n.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Te]),Re===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),X){const Ee=i.get(g[Te]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,K,9728),m&&n.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,me.__webglColorRenderbuffer[Te]);const Re=i.get(g[Te]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,Re,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function he(M){return Math.min(f,M.samples)}function te(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function _e(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function se(M,g){const I=M.encoding,W=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ko||I!==oi&&(I===Ye?o===!1?e.has("EXT_sRGB")===!0&&W===Xt?(M.format=Ko,M.minFilter=Bt,M.generateMipmaps=!1):g=Zu.sRGBToLinear(g):(W!==Xt||K!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),g}this.allocateTextureUnit=H,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=ye,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=V,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=te}function qv(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===si)return 5121;if(s===Um)return 32819;if(s===zm)return 32820;if(s===Fm)return 5120;if(s===Nm)return 5122;if(s===ju)return 5123;if(s===Om)return 5124;if(s===Zn)return 5125;if(s===Jn)return 5126;if(s===Sr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bm)return 6406;if(s===Xt)return 6408;if(s===Gm)return 6409;if(s===km)return 6410;if(s===ni)return 6402;if(s===Vi)return 34041;if(s===Ko)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vm)return 6403;if(s===Hm)return 36244;if(s===Wm)return 33319;if(s===qm)return 33320;if(s===Xm)return 36249;if(s===Ys||s===Ks||s===Zs||s===Js)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ys)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ys)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Cl||s===Ll||s===Rl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Al)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ll)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pl||s===Dl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Pl)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Dl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Fl||s===Nl||s===Ol||s===Ul||s===zl||s===Bl||s===Gl||s===kl||s===Vl||s===Hl||s===Wl||s===ql||s===Xl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Il)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ol)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ul)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ql)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qs)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===$m||s===jl||s===$l||s===Yl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Qs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Xv extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ss extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jv={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),_=this._getHandJoint(c,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $v extends Tt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ni&&(i=Zn),i===void 0&&u===Vi&&(i=Ii),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class Yv extends ji{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const p=t.getContextAttributes();let d=null,_=null;const w=[],v=[],A=new Set,E=new Map,D=new It;D.layers.enable(1),D.viewport=new Je;const O=new It;O.layers.enable(2),O.viewport=new Je;const b=[D,O],C=new Xv;C.layers.enable(1),C.layers.enable(2);let U=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=w[k];return ne===void 0&&(ne=new Ao,w[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=w[k];return ne===void 0&&(ne=new Ao,w[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=w[k];return ne===void 0&&(ne=new Ao,w[k]=ne),ne.getHandSpace()};function ae(k){const ne=v.indexOf(k.inputSource);if(ne===-1)return;const xe=w[ne];xe!==void 0&&xe.dispatchEvent({type:k.type,data:k.inputSource})}function B(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let k=0;k<w.length;k++){const ne=v[k];ne!==null&&(v[k]=null,w[k].disconnect(ne))}U=null,oe=null,e.setRenderTarget(d),m=null,h=null,f=null,r=null,_=null,ye.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),_=new ai(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:si,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ne=null,xe=null,P=null;p.depth&&(P=p.stencil?35056:33190,ne=p.stencil?Vi:ni,xe=p.stencil?Ii:Zn);const L={colorFormat:32856,depthFormat:P,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(L),r.updateRenderState({layers:[h]}),_=new ai(h.textureWidth,h.textureHeight,{format:Xt,type:si,depthTexture:new $v(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const J=e.properties.get(_);J.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(k){for(let ne=0;ne<k.removed.length;ne++){const xe=k.removed[ne],P=v.indexOf(xe);P>=0&&(v[P]=null,w[P].disconnect(xe))}for(let ne=0;ne<k.added.length;ne++){const xe=k.added[ne];let P=v.indexOf(xe);if(P===-1){for(let J=0;J<w.length;J++)if(J>=v.length){v.push(xe),P=J;break}else if(v[J]===null){v[J]=xe,P=J;break}if(P===-1)break}const L=w[P];L&&L.connect(xe)}}const Q=new z,ie=new z;function ee(k,ne,xe){Q.setFromMatrixPosition(ne.matrixWorld),ie.setFromMatrixPosition(xe.matrixWorld);const P=Q.distanceTo(ie),L=ne.projectionMatrix.elements,J=xe.projectionMatrix.elements,re=L[14]/(L[10]-1),ge=L[14]/(L[10]+1),pe=(L[9]+1)/L[5],we=(L[9]-1)/L[5],y=(L[8]-1)/L[0],T=(J[8]+1)/J[0],V=re*y,q=re*T,Y=P/(-y+T),le=Y*-y;ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(le),k.translateZ(Y),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const he=re+Y,te=ge+Y,_e=V-le,se=q+(P-le),M=pe*ge/te*he,g=we*ge/te*he;k.projectionMatrix.makePerspective(_e,se,M,g,he,te)}function H(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;C.near=O.near=D.near=k.near,C.far=O.far=D.far=k.far,(U!==C.near||oe!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,oe=C.far);const ne=k.parent,xe=C.cameras;H(C,ne);for(let L=0;L<xe.length;L++)H(xe[L],ne);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),k.matrix.copy(C.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const P=k.children;for(let L=0,J=P.length;L<J;L++)P[L].updateMatrixWorld(!0);xe.length===2?ee(C,D,O):C.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return A};let ce=null;function fe(k,ne){if(u=ne.getViewerPose(c||a),x=ne,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let P=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,P=!0);for(let L=0;L<xe.length;L++){const J=xe[L];let re=null;if(m!==null)re=m.getViewport(J);else{const pe=f.getViewSubImage(h,J);re=pe.viewport,L===0&&(e.setRenderTargetTextures(_,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(_))}let ge=b[L];ge===void 0&&(ge=new It,ge.layers.enable(L),ge.viewport=new Je,b[L]=ge),ge.matrix.fromArray(J.transform.matrix),ge.projectionMatrix.fromArray(J.projectionMatrix),ge.viewport.set(re.x,re.y,re.width,re.height),L===0&&C.matrix.copy(ge.matrix),P===!0&&C.cameras.push(ge)}}for(let xe=0;xe<w.length;xe++){const P=v[xe],L=w[xe];P!==null&&L!==void 0&&L.update(P,ne,c||a)}if(ce&&ce(k,ne),ne.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let xe=null;for(const P of A)ne.detectedPlanes.has(P)||(xe===null&&(xe=[]),xe.push(P));if(xe!==null)for(const P of xe)A.delete(P),E.delete(P),i.dispatchEvent({type:"planeremoved",data:P});for(const P of ne.detectedPlanes)if(!A.has(P))A.add(P),E.set(P,ne.lastChangedTime),i.dispatchEvent({type:"planeadded",data:P});else{const L=E.get(P);P.lastChangedTime>L&&(E.set(P,P.lastChangedTime),i.dispatchEvent({type:"planechanged",data:P}))}}x=null}const ye=new lf;ye.setAnimationLoop(fe),this.setAnimationLoop=function(k){ce=k},this.dispose=function(){}}}function Kv(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,sf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,w,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Nt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Nt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const A=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*A}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=w*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Nt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Zv(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(w,v){const A=v.program;i.uniformBlockBinding(w,A)}function c(w,v){let A=r[w.id];A===void 0&&(x(w),A=u(w),r[w.id]=A,w.addEventListener("dispose",d));const E=v.program;i.updateUBOMapping(w,E);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const v=f();w.__bindingPointIndex=v;const A=n.createBuffer(),E=w.__size,D=w.usage;return n.bindBuffer(35345,A),n.bufferData(35345,E,D),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,A),A}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const v=r[w.id],A=w.uniforms,E=w.__cache;n.bindBuffer(35345,v);for(let D=0,O=A.length;D<O;D++){const b=A[D];if(m(b,D,E)===!0){const C=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let oe=0;for(let ae=0;ae<U.length;ae++){const B=U[ae],F=p(B);typeof B=="number"?(b.__data[0]=B,n.bufferSubData(35345,C+oe,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=B.elements[0],b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=B.elements[0],b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=B.elements[0]):(B.toArray(b.__data,oe),oe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,b.__data)}}n.bindBuffer(35345,null)}function m(w,v,A){const E=w.value;if(A[v]===void 0){if(typeof E=="number")A[v]=E;else{const D=Array.isArray(E)?E:[E],O=[];for(let b=0;b<D.length;b++)O.push(D[b].clone());A[v]=O}return!0}else if(typeof E=="number"){if(A[v]!==E)return A[v]=E,!0}else{const D=Array.isArray(A[v])?A[v]:[A[v]],O=Array.isArray(E)?E:[E];for(let b=0;b<D.length;b++){const C=D[b];if(C.equals(O[b])===!1)return C.copy(O[b]),!0}}return!1}function x(w){const v=w.uniforms;let A=0;const E=16;let D=0;for(let O=0,b=v.length;O<b;O++){const C=v[O],U={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let ae=0,B=oe.length;ae<B;ae++){const F=oe[ae],Q=p(F);U.boundary+=Q.boundary,U.storage+=Q.storage}if(C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,O>0){D=A%E;const ae=E-D;D!==0&&ae-U.boundary<0&&(A+=E-D,C.__offset=A)}A+=U.storage}return D=A%E,D>0&&(A+=E-D),w.__size=A,w.__cache={},this}function p(w){const v={boundary:0,storage:0};return typeof w=="number"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function d(w){const v=w.target;v.removeEventListener("dispose",d);const A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function Jv(){const n=Er("canvas");return n.style.display="block",n}function pf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Jv(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oi,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const p=this;let d=!1,_=0,w=0,v=null,A=-1,E=null;const D=new Je,O=new Je;let b=null,C=e.width,U=e.height,oe=1,ae=null,B=null;const F=new Je(0,0,C,U),Q=new Je(0,0,C,U);let ie=!1;const ee=new Ta;let H=!1,ce=!1,fe=null;const ye=new it,k=new qe,ne=new z,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function P(){return v===null?oe:1}let L=t;function J(S,G){for(let $=0;$<S.length;$++){const N=S[$],Z=e.getContext(N,G);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),L=J(G,S),L===null)throw J(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let re,ge,pe,we,y,T,V,q,Y,le,he,te,_e,se,M,g,I,W,K,ue,Me,me,X,Te;function Re(){re=new cx(L),ge=new ix(L,re,n),re.init(ge),me=new qv(L,re,ge),pe=new Hv(L,re,ge),we=new hx,y=new Lv,T=new Wv(L,re,pe,y,ge,me,we),V=new sx(p),q=new lx(p),Y=new yg(L,ge),X=new tx(L,re,Y,ge),le=new ux(L,Y,we,X),he=new gx(L,le,Y,we),K=new mx(L,ge,T),g=new rx(y),te=new Cv(p,V,q,re,ge,X,g),_e=new Kv(p,y),se=new Pv,M=new Uv(re,ge),W=new ex(p,V,q,pe,he,u,a),I=new Vv(p,he,ge),Te=new Zv(L,we,ge,pe),ue=new nx(L,re,we,ge),Me=new fx(L,re,we,ge),we.programs=te.programs,p.capabilities=ge,p.extensions=re,p.properties=y,p.renderLists=se,p.shadowMap=I,p.state=pe,p.info=we}Re();const Ee=new Yv(p,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(C,U,!1))},this.getSize=function(S){return S.set(C,U)},this.setSize=function(S,G,$){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,U=G,e.width=Math.floor(S*oe),e.height=Math.floor(G*oe),$!==!1&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(C*oe,U*oe).floor()},this.setDrawingBufferSize=function(S,G,$){C=S,U=G,oe=$,e.width=Math.floor(S*$),e.height=Math.floor(G*$),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,G,$,N){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,G,$,N),pe.viewport(D.copy(F).multiplyScalar(oe).floor())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,G,$,N){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,G,$,N),pe.scissor(O.copy(Q).multiplyScalar(oe).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){pe.setScissorTest(ie=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){B=S},this.getClearColor=function(S){return S.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(S=!0,G=!0,$=!0){let N=0;S&&(N|=16384),G&&(N|=256),$&&(N|=1024),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),se.dispose(),M.dispose(),y.dispose(),V.dispose(),q.dispose(),he.dispose(),X.dispose(),Te.dispose(),te.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Se),Ee.removeEventListener("sessionend",Ae),fe&&(fe.dispose(),fe=null),He.stop()};function Ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=we.autoReset,G=I.enabled,$=I.autoUpdate,N=I.needsUpdate,Z=I.type;Re(),we.autoReset=S,I.enabled=G,I.autoUpdate=$,I.needsUpdate=N,I.type=Z}function Pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function je(S){const G=S.target;G.removeEventListener("dispose",je),at(G)}function at(S){R(S),y.remove(S)}function R(S){const G=y.get(S).programs;G!==void 0&&(G.forEach(function($){te.releaseProgram($)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,$,N,Z,Le){G===null&&(G=xe);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=vf(S,G,$,N,Z);pe.setMaterial(N,De);let Ue=$.index,Ve=1;N.wireframe===!0&&(Ue=le.getWireframeAttribute($),Ve=2);const ze=$.drawRange,Be=$.attributes.position;let et=ze.start*Ve,At=(ze.start+ze.count)*Ve;Le!==null&&(et=Math.max(et,Le.start*Ve),At=Math.min(At,(Le.start+Le.count)*Ve)),Ue!==null?(et=Math.max(et,0),At=Math.min(At,Ue.count)):Be!=null&&(et=Math.max(et,0),At=Math.min(At,Be.count));const an=At-et;if(an<0||an===1/0)return;X.setup(Z,N,Ne,$,Ue);let Un,tt=ue;if(Ue!==null&&(Un=Y.get(Ue),tt=Me,tt.setIndex(Un)),Z.isMesh)N.wireframe===!0?(pe.setLineWidth(N.wireframeLinewidth*P()),tt.setMode(1)):tt.setMode(4);else if(Z.isLine){let Ge=N.linewidth;Ge===void 0&&(Ge=1),pe.setLineWidth(Ge*P()),Z.isLineSegments?tt.setMode(1):Z.isLineLoop?tt.setMode(2):tt.setMode(3)}else Z.isPoints?tt.setMode(0):Z.isSprite&&tt.setMode(4);if(Z.isInstancedMesh)tt.renderInstances(et,an,Z.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ns=Math.min($.instanceCount,Ge);tt.renderInstances(et,an,Ns)}else tt.render(et,an)},this.compile=function(S,G){function $(N,Z,Le){N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,Ut(N,Z,Le),N.side=Nn,N.needsUpdate=!0,Ut(N,Z,Le),N.side=Rn):Ut(N,Z,Le)}h=M.get(S),h.init(),x.push(h),S.traverseVisible(function(N){N.isLight&&N.layers.test(G.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(p.physicallyCorrectLights),S.traverse(function(N){const Z=N.material;if(Z)if(Array.isArray(Z))for(let Le=0;Le<Z.length;Le++){const De=Z[Le];$(De,S,N)}else $(Z,S,N)}),x.pop(),h=null};let j=null;function de(S){j&&j(S)}function Se(){He.stop()}function Ae(){He.start()}const He=new lf;He.setAnimationLoop(de),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(S){j=S,Ee.setAnimationLoop(S),S===null?He.stop():He.start()},Ee.addEventListener("sessionstart",Se),Ee.addEventListener("sessionend",Ae),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(G),G=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,G,v),h=M.get(S,x.length),h.init(),x.push(h),ye.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,H=g.init(this.clippingPlanes,ce),f=se.get(S,m.length),f.init(),m.push(f),lt(S,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ae,B),H===!0&&g.beginShadows();const $=h.state.shadowsArray;if(I.render($,S,G),H===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(f,S),h.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const N=G.cameras;for(let Z=0,Le=N.length;Z<Le;Z++){const De=N[Z];ht(f,S,De,De.viewport)}}else ht(f,S,G);v!==null&&(T.updateMultisampleRenderTarget(v),T.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(p,S,G),X.resetDefaultState(),A=-1,E=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function lt(S,G,$,N){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){N&&ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);const De=he.update(S),Ne=S.material;Ne.visible&&f.push(S,De,Ne,$,ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==we.render.frame&&(S.skeleton.update(),S.skeleton.frame=we.render.frame),!S.frustumCulled||ee.intersectsObject(S))){N&&ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);const De=he.update(S),Ne=S.material;if(Array.isArray(Ne)){const Ue=De.groups;for(let Ve=0,ze=Ue.length;Ve<ze;Ve++){const Be=Ue[Ve],et=Ne[Be.materialIndex];et&&et.visible&&f.push(S,De,et,$,ne.z,Be)}}else Ne.visible&&f.push(S,De,Ne,$,ne.z,null)}}const Le=S.children;for(let De=0,Ne=Le.length;De<Ne;De++)lt(Le[De],G,$,N)}function ht(S,G,$,N){const Z=S.opaque,Le=S.transmissive,De=S.transparent;h.setupLightsView($),H===!0&&g.setGlobalState(p.clippingPlanes,$),Le.length>0&&On(Z,G,$),N&&pe.viewport(D.copy(N)),Z.length>0&&Ke(Z,G,$),Le.length>0&&Ke(Le,G,$),De.length>0&&Ke(De,G,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function On(S,G,$){const N=ge.isWebGL2;fe===null&&(fe=new ai(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Sr:si,minFilter:br,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(k),N?fe.setSize(k.x,k.y):fe.setSize(Zo(k.x),Zo(k.y));const Z=p.getRenderTarget();p.setRenderTarget(fe),p.clear();const Le=p.toneMapping;p.toneMapping=vn,Ke(S,G,$),p.toneMapping=Le,T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe),p.setRenderTarget(Z)}function Ke(S,G,$){const N=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Le=S.length;Z<Le;Z++){const De=S[Z],Ne=De.object,Ue=De.geometry,Ve=N===null?De.material:N,ze=De.group;Ne.layers.test($.layers)&&on(Ne,G,$,Ue,Ve,ze)}}function on(S,G,$,N,Z,Le){S.onBeforeRender(p,G,$,N,Z,Le),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(p,G,$,N,S,Le),Z.transparent===!0&&Z.side===Rn&&Z.forceSinglePass===!1?(Z.side=Nt,Z.needsUpdate=!0,p.renderBufferDirect($,G,N,Z,S,Le),Z.side=Nn,Z.needsUpdate=!0,p.renderBufferDirect($,G,N,Z,S,Le),Z.side=Rn):p.renderBufferDirect($,G,N,Z,S,Le),S.onAfterRender(p,G,$,N,Z,Le)}function Ut(S,G,$){G.isScene!==!0&&(G=xe);const N=y.get(S),Z=h.state.lights,Le=h.state.shadowsArray,De=Z.state.version,Ne=te.getParameters(S,Z.state,Le,G,$),Ue=te.getProgramCacheKey(Ne);let Ve=N.programs;N.environment=S.isMeshStandardMaterial?G.environment:null,N.fog=G.fog,N.envMap=(S.isMeshStandardMaterial?q:V).get(S.envMap||N.environment),Ve===void 0&&(S.addEventListener("dispose",je),Ve=new Map,N.programs=Ve);let ze=Ve.get(Ue);if(ze!==void 0){if(N.currentProgram===ze&&N.lightsStateVersion===De)return La(S,Ne),ze}else Ne.uniforms=te.getUniforms(S),S.onBuild($,Ne,p),S.onBeforeCompile(Ne,p),ze=te.acquireProgram(Ne,Ue),Ve.set(Ue,ze),N.uniforms=Ne.uniforms;const Be=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=g.uniform),La(S,Ne),N.needsLights=yf(S),N.lightsStateVersion=De,N.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix);const et=ze.getUniforms(),At=ps.seqWithValue(et.seq,Be);return N.currentProgram=ze,N.uniformsList=At,ze}function La(S,G){const $=y.get(S);$.outputEncoding=G.outputEncoding,$.instancing=G.instancing,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function vf(S,G,$,N,Z){G.isScene!==!0&&(G=xe),T.resetTextureUnits();const Le=G.fog,De=N.isMeshStandardMaterial?G.environment:null,Ne=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:oi,Ue=(N.isMeshStandardMaterial?q:V).get(N.envMap||De),Ve=N.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!N.normalMap&&!!$.attributes.tangent,Be=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,At=!!$.morphAttributes.color,an=N.toneMapped?p.toneMapping:vn,Un=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tt=Un!==void 0?Un.length:0,Ge=y.get(N),Ns=h.state.lights;if(H===!0&&(ce===!0||S!==E)){const Ct=S===E&&N.id===A;g.setState(N,S,Ct)}let ct=!1;N.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ns.state.version||Ge.outputEncoding!==Ne||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||N.fog===!0&&Ge.fog!==Le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==g.numPlanes||Ge.numIntersection!==g.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==ze||Ge.morphTargets!==Be||Ge.morphNormals!==et||Ge.morphColors!==At||Ge.toneMapping!==an||ge.isWebGL2===!0&&Ge.morphTargetsCount!==tt)&&(ct=!0):(ct=!0,Ge.__version=N.version);let zn=Ge.currentProgram;ct===!0&&(zn=Ut(N,G,Z));let Ra=!1,Yi=!1,Os=!1;const xt=zn.getUniforms(),Bn=Ge.uniforms;if(pe.useProgram(zn.program)&&(Ra=!0,Yi=!0,Os=!0),N.id!==A&&(A=N.id,Yi=!0),Ra||E!==S){if(xt.setValue(L,"projectionMatrix",S.projectionMatrix),ge.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),E!==S&&(E=S,Yi=!0,Os=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ct=xt.map.cameraPosition;Ct!==void 0&&Ct.setValue(L,ne.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Z.isSkinnedMesh)&&xt.setValue(L,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){xt.setOptional(L,Z,"bindMatrix"),xt.setOptional(L,Z,"bindMatrixInverse");const Ct=Z.skeleton;Ct&&(ge.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),xt.setValue(L,"boneTexture",Ct.boneTexture,T),xt.setValue(L,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=$.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&ge.isWebGL2===!0)&&K.update(Z,$,N,zn),(Yi||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,xt.setValue(L,"receiveShadow",Z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Bn.envMap.value=Ue,Bn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Yi&&(xt.setValue(L,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Mf(Bn,Os),Le&&N.fog===!0&&_e.refreshFogUniforms(Bn,Le),_e.refreshMaterialUniforms(Bn,N,oe,U,fe),ps.upload(L,Ge.uniformsList,Bn,T)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ps.upload(L,Ge.uniformsList,Bn,T),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xt.setValue(L,"center",Z.center),xt.setValue(L,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(L,"normalMatrix",Z.normalMatrix),xt.setValue(L,"modelMatrix",Z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ct=N.uniformsGroups;for(let zs=0,bf=Ct.length;zs<bf;zs++)if(ge.isWebGL2){const Pa=Ct[zs];Te.update(Pa,zn),Te.bind(Pa,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Mf(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function yf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,G,$){y.get(S.texture).__webglTexture=G,y.get(S.depthTexture).__webglTexture=$;const N=y.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=$===void 0,N.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const $=y.get(S);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,$=0){v=S,_=G,w=$;let N=!0,Z=null,Le=!1,De=!1;if(S){const Ue=y.get(S);Ue.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),N=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ue.__hasExternalTextures&&T.rebindTextures(S,y.get(S.texture).__webglTexture,y.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const ze=y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=ze[G],Le=!0):ge.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?Z=y.get(S).__webglMultisampledFramebuffer:Z=ze,D.copy(S.viewport),O.copy(S.scissor),b=S.scissorTest}else D.copy(F).multiplyScalar(oe).floor(),O.copy(Q).multiplyScalar(oe).floor(),b=ie;if(pe.bindFramebuffer(36160,Z)&&ge.drawBuffers&&N&&pe.drawBuffers(S,Z),pe.viewport(D),pe.scissor(O),pe.setScissorTest(b),Le){const Ue=y.get(S.texture);L.framebufferTexture2D(36160,36064,34069+G,Ue.__webglTexture,$)}else if(De){const Ue=y.get(S.texture),Ve=G||0;L.framebufferTextureLayer(36160,36064,Ue.__webglTexture,$||0,Ve)}A=-1},this.readRenderTargetPixels=function(S,G,$,N,Z,Le,De){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){pe.bindFramebuffer(36160,Ne);try{const Ue=S.texture,Ve=Ue.format,ze=Ue.type;if(Ve!==Xt&&me.convert(Ve)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Sr&&(re.has("EXT_color_buffer_half_float")||ge.isWebGL2&&re.has("EXT_color_buffer_float"));if(ze!==si&&me.convert(ze)!==L.getParameter(35738)&&!(ze===Jn&&(ge.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-N&&$>=0&&$<=S.height-Z&&L.readPixels(G,$,N,Z,me.convert(Ve),me.convert(ze),Le)}finally{const Ue=v!==null?y.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(S,G,$=0){const N=Math.pow(2,-$),Z=Math.floor(G.image.width*N),Le=Math.floor(G.image.height*N);T.setTexture2D(G,0),L.copyTexSubImage2D(3553,$,0,0,S.x,S.y,Z,Le),pe.unbindTexture()},this.copyTextureToTexture=function(S,G,$,N=0){const Z=G.image.width,Le=G.image.height,De=me.convert($.format),Ne=me.convert($.type);T.setTexture2D($,0),L.pixelStorei(37440,$.flipY),L.pixelStorei(37441,$.premultiplyAlpha),L.pixelStorei(3317,$.unpackAlignment),G.isDataTexture?L.texSubImage2D(3553,N,S.x,S.y,Z,Le,De,Ne,G.image.data):G.isCompressedTexture?L.compressedTexSubImage2D(3553,N,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):L.texSubImage2D(3553,N,S.x,S.y,De,Ne,G.image),N===0&&$.generateMipmaps&&L.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,G,$,N,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=S.max.x-S.min.x+1,De=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Ue=me.convert(N.format),Ve=me.convert(N.type);let ze;if(N.isData3DTexture)T.setTexture3D(N,0),ze=32879;else if(N.isDataArrayTexture)T.setTexture2DArray(N,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,N.flipY),L.pixelStorei(37441,N.premultiplyAlpha),L.pixelStorei(3317,N.unpackAlignment);const Be=L.getParameter(3314),et=L.getParameter(32878),At=L.getParameter(3316),an=L.getParameter(3315),Un=L.getParameter(32877),tt=$.isCompressedTexture?$.mipmaps[0]:$.image;L.pixelStorei(3314,tt.width),L.pixelStorei(32878,tt.height),L.pixelStorei(3316,S.min.x),L.pixelStorei(3315,S.min.y),L.pixelStorei(32877,S.min.z),$.isDataTexture||$.isData3DTexture?L.texSubImage3D(ze,Z,G.x,G.y,G.z,Le,De,Ne,Ue,Ve,tt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,Z,G.x,G.y,G.z,Le,De,Ne,Ue,tt.data)):L.texSubImage3D(ze,Z,G.x,G.y,G.z,Le,De,Ne,Ue,Ve,tt),L.pixelStorei(3314,Be),L.pixelStorei(32878,et),L.pixelStorei(3316,At),L.pixelStorei(3315,an),L.pixelStorei(32877,Un),Z===0&&N.generateMipmaps&&L.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){_=0,w=0,v=null,pe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Qv extends pf{}Qv.prototype.isWebGL1Renderer=!0;class Ca{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Ca(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class eM extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tM extends Pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$u,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class nM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const iM=new nM;class mf{constructor(e){this.manager=e!==void 0?e:iM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class rM extends mf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Dc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Er("img");function l(){u(),Dc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class sM extends mf{constructor(e){super(e)}load(e,t,i,r){const s=new Tt,a=new rM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class gf extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Co=new it,Ic=new z,Fc=new z;class _f{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nc=new it,sr=new z,Lo=new z;class oM extends _f{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),Lo.copy(i.position),Lo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lo),i.updateMatrixWorld(),r.makeTranslation(-sr.x,-sr.y,-sr.z),Nc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class os extends gf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new oM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aM extends _f{constructor(){super(new cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends gf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const cM="/zzemalStudio/assets/smoke-73431558.png";class Oc{constructor(e,t,i){Ir(this,"canvas");Ir(this,"lightColor");Ir(this,"materialColor");this.canvas=e,this.lightColor=t||3482389,this.materialColor=i||6632719;const r=new eM,s=new It(75,window.innerWidth/window.innerHeight,.1,1e3),a=new pf({canvas:e,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1});a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight*1.15),s.position.setZ(480),s.position.setY(200),s.position.setX(0),a.shadowMap.enabled=!0,a.render(r,s),new os(this.lightColor,5,15).position.set(4.4,6.8,.2);let l=new lM(6717183,1.5);l.position.set(0,0,2);let c=new os(13395456,50,450,1.7);c.position.set(100,100,100);let u=new os(14177406,50,450,1.7);u.position.set(100,200,150);let f=new os(3569580,50,450,1.7);f.position.set(200,100,50),r.add(l,c,u,f),r.fog=new Ca(0,.001),a.setClearColor(r.fog.color);const h=[];new sM().load(cM,function(p){let d=new Is(500,500),_=new tM({map:p,transparent:!0});for(let w=0;w<30;w++){const v=new _n(d,_);v.position.set(Math.random()*800-400,10,Math.random()*400),v.rotation.x=0,v.rotation.z=Math.random()*2*Math.PI,v.material.opacity=.55,h.push(v),r.add(v)}});function x(){requestAnimationFrame(x);for(let p=0;p<h.length;p++){const d=h[p];d.rotation.z-=.001}a.render(r,s)}x()}}const uM=Ar({data(){return{load:!1}},mounted(){new Oc(document.querySelector(".experience-canvas"))},methods:{changeLightColor(n=9423267){if(this.load)return;this.load=!0;let e=document.querySelector(".experience"),t=document.querySelector(".experience-canvas");e==null||e.classList.add("fadeOutAndIn"),setTimeout(()=>{new Oc(t,n)},250),setTimeout(()=>{e==null||e.classList.remove("fadeOutAndIn"),this.load=!1},500)}}});const fM={class:"three__canvas"},hM=vs("div",{class:"experience"},[vs("canvas",{class:"experience-canvas"})],-1),dM=[hM];function pM(n,e,t,i,r,s){return _a(),Tu("section",fM,dM)}const mM=ba(uM,[["render",pM]]),gM=gd('<div class="center" data-v-e4c855a2><h1 data-v-e4c855a2>S T U D I O _ D A R L Y</h1><p data-v-e4c855a2>2023. 02 OPEN</p></div><div class="test" data-v-e4c855a2><h2 data-v-e4c855a2>느낌 보기 위한 사진</h2><img src="'+em+'" data-v-e4c855a2></div><div class="test" data-v-e4c855a2><h2 data-v-e4c855a2>느낌 보기 위한 사진2</h2><img src="'+tm+'" data-v-e4c855a2></div><div class="test" data-v-e4c855a2><h2 data-v-e4c855a2>느낌 보기 위한 사진3</h2><img src="'+nm+'" data-v-e4c855a2></div><div class="test" style="padding-bottom:40px;" data-v-e4c855a2><h2 data-v-e4c855a2>느낌 보기 위한 사진4</h2><img src="'+im+'" data-v-e4c855a2></div>',5),_M=Ar({__name:"HomeView",setup(n){return(e,t)=>(_a(),Tu("main",null,[Et(mM),gM]))}});const xM=ba(_M,[["__scopeId","data-v-e4c855a2"]]),vM=Kp({history:dp("/zzemalStudio/"),routes:[{path:"/",name:"home",component:xM}]});const xf=$d(Qp);xf.use(vM);xf.mount("#app");