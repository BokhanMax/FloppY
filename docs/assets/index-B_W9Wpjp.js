(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ct={},Sr=[],Xe=()=>{},xm=()=>!1,no=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),dl=e=>e.startsWith("onUpdate:"),he=Object.assign,pl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vm=Object.prototype.hasOwnProperty,bt=(e,t)=>Vm.call(e,t),it=Array.isArray,Cr=e=>ro(e)==="[object Map]",Cf=e=>ro(e)==="[object Set]",ct=e=>typeof e=="function",Ut=e=>typeof e=="string",Hn=e=>typeof e=="symbol",Dt=e=>e!==null&&typeof e=="object",Pf=e=>(Dt(e)||ct(e))&&ct(e.then)&&ct(e.catch),xf=Object.prototype.toString,ro=e=>xf.call(e),Dm=e=>ro(e).slice(8,-1),Vf=e=>ro(e)==="[object Object]",gl=e=>Ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vs=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nm=/-(\w)/g,ke=so(e=>e.replace(Nm,(t,n)=>n?n.toUpperCase():"")),Om=/\B([A-Z])/g,ur=so(e=>e.replace(Om,"-$1").toLowerCase()),io=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xo=so(e=>e?`on${io(e)}`:""),Vn=(e,t)=>!Object.is(e,t),Jo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Aa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},km=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let au;const oo=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ml(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ut(r)?Um(r):ml(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ut(e)||Dt(e))return e}const Mm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Fm=/\/\*[^]*?\*\//g;function Um(e){const t={};return e.replace(Fm,"").split(Mm).forEach(n=>{if(n){const r=n.split(Lm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ao(e){let t="";if(Ut(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=ao(e[n]);r&&(t+=r+" ")}else if(Dt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$m=fl(Bm);function Df(e){return!!e||e===""}const Nf=e=>!!(e&&e.__v_isRef===!0),tr=e=>Ut(e)?e:e==null?"":it(e)||Dt(e)&&(e.toString===xf||!ct(e.toString))?Nf(e)?tr(e.value):JSON.stringify(e,Of,2):String(e),Of=(e,t)=>Nf(t)?Of(e,t.value):Cr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Zo(r,i)+" =>"]=s,n),{})}:Cf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zo(n))}:Hn(t)?Zo(t):Dt(t)&&!it(t)&&!Vf(t)?String(t):t,Zo=(e,t="")=>{var n;return Hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ye;class jm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){++this._on===1&&(this.prevScope=ye,ye=this)}off(){this._on>0&&--this._on===0&&(ye=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qm(){return ye}let St;const ta=new WeakSet;class kf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ye&&ye.active&&ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ta.has(this)&&(ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lu(this),Ff(this);const t=St,n=je;St=this,je=!0;try{return this.fn()}finally{Uf(this),St=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)vl(t);this.deps=this.depsTail=void 0,lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let Mf=0,Es,ws;function Lf(e,t=!1){if(e.flags|=8,t){e.next=ws,ws=e;return}e.next=Es,Es=e}function _l(){Mf++}function yl(){if(--Mf>0)return;if(ws){let t=ws;for(ws=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Es;){let t=Es;for(Es=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ff(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Uf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),vl(r),Hm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ba(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Os)||(e.globalVersion=Os,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ba(e))))return;e.flags|=2;const t=e.dep,n=St,r=je;St=e,je=!0;try{Ff(e);const s=e.fn(e._value);(t.version===0||Vn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{St=n,je=r,Uf(e),e.flags&=-3}}function vl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)vl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const $f=[];function dn(){$f.push(je),je=!1}function pn(){const e=$f.pop();je=e===void 0?!0:e}function lu(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=St;St=void 0;try{t()}finally{St=n}}}let Os=0;class zm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class El{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!St||!je||St===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==St)n=this.activeLink=new zm(St,this),St.deps?(n.prevDep=St.depsTail,St.depsTail.nextDep=n,St.depsTail=n):St.deps=St.depsTail=n,jf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=St.depsTail,n.nextDep=void 0,St.depsTail.nextDep=n,St.depsTail=n,St.deps===n&&(St.deps=r)}return n}trigger(t){this.version++,Os++,this.notify(t)}notify(t){_l();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yl()}}}function jf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)jf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ra=new WeakMap,rr=Symbol(""),Sa=Symbol(""),ks=Symbol("");function oe(e,t,n){if(je&&St){let r=Ra.get(e);r||Ra.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new El),s.map=r,s.key=n),s.track()}}function hn(e,t,n,r,s,i){const a=Ra.get(e);if(!a){Os++;return}const l=c=>{c&&c.trigger()};if(_l(),t==="clear")a.forEach(l);else{const c=it(e),h=c&&gl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===ks||!Hn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ks)),t){case"add":c?h&&l(a.get("length")):(l(a.get(rr)),Cr(e)&&l(a.get(Sa)));break;case"delete":c||(l(a.get(rr)),Cr(e)&&l(a.get(Sa)));break;case"set":Cr(e)&&l(a.get(rr));break}}yl()}function yr(e){const t=At(e);return t===e?t:(oe(t,"iterate",ks),Ne(e)?t:t.map(Jt))}function lo(e){return oe(e=At(e),"iterate",ks),e}const Gm={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,Jt)},concat(...e){return yr(this).concat(...e.map(t=>it(t)?yr(t):t))},entries(){return ea(this,"entries",e=>(e[1]=Jt(e[1]),e))},every(e,t){return an(this,"every",e,t,void 0,arguments)},filter(e,t){return an(this,"filter",e,t,n=>n.map(Jt),arguments)},find(e,t){return an(this,"find",e,t,Jt,arguments)},findIndex(e,t){return an(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return an(this,"findLast",e,t,Jt,arguments)},findLastIndex(e,t){return an(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return an(this,"forEach",e,t,void 0,arguments)},includes(...e){return na(this,"includes",e)},indexOf(...e){return na(this,"indexOf",e)},join(e){return yr(this).join(e)},lastIndexOf(...e){return na(this,"lastIndexOf",e)},map(e,t){return an(this,"map",e,t,void 0,arguments)},pop(){return fs(this,"pop")},push(...e){return fs(this,"push",e)},reduce(e,...t){return cu(this,"reduce",e,t)},reduceRight(e,...t){return cu(this,"reduceRight",e,t)},shift(){return fs(this,"shift")},some(e,t){return an(this,"some",e,t,void 0,arguments)},splice(...e){return fs(this,"splice",e)},toReversed(){return yr(this).toReversed()},toSorted(e){return yr(this).toSorted(e)},toSpliced(...e){return yr(this).toSpliced(...e)},unshift(...e){return fs(this,"unshift",e)},values(){return ea(this,"values",Jt)}};function ea(e,t,n){const r=lo(e),s=r[t]();return r!==e&&!Ne(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Km=Array.prototype;function an(e,t,n,r,s,i){const a=lo(e),l=a!==e&&!Ne(e),c=a[t];if(c!==Km[t]){const p=c.apply(e,i);return l?Jt(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,Jt(p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function cu(e,t,n,r){const s=lo(e);let i=n;return s!==e&&(Ne(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,Jt(l),c,e)}),s[t](i,...r)}function na(e,t,n){const r=At(e);oe(r,"iterate",ks);const s=r[t](...n);return(s===-1||s===!1)&&Il(n[0])?(n[0]=At(n[0]),r[t](...n)):s}function fs(e,t,n=[]){dn(),_l();const r=At(e)[t].apply(e,n);return yl(),pn(),r}const Wm=fl("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Hn));function Qm(e){Hn(e)||(e=String(e));const t=At(this);return oe(t,"has",e),t.hasOwnProperty(e)}class Hf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?i_:Wf:i?Kf:Gf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=Gm[n]))return c;if(n==="hasOwnProperty")return Qm}const l=Reflect.get(t,n,ue(t)?t:r);return(Hn(n)?qf.has(n):Wm(n))||(s||oe(t,"get",n),i)?l:ue(l)?a&&gl(n)?l:l.value:Dt(l)?s?Yf(l):co(l):l}}class zf extends Hf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=kn(i);if(!Ne(r)&&!kn(r)&&(i=At(i),r=At(r)),!it(t)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const a=it(t)&&gl(n)?Number(n)<t.length:bt(t,n),l=Reflect.set(t,n,r,ue(t)?t:s);return t===At(s)&&(a?Vn(r,i)&&hn(t,"set",n,r):hn(t,"add",n,r)),l}deleteProperty(t,n){const r=bt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&hn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Hn(n)||!qf.has(n))&&oe(t,"has",n),r}ownKeys(t){return oe(t,"iterate",it(t)?"length":rr),Reflect.ownKeys(t)}}class Ym extends Hf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xm=new zf,Jm=new Ym,Zm=new zf(!0);const Ca=e=>e,_i=e=>Reflect.getPrototypeOf(e);function t_(e,t,n){return function(...r){const s=this.__v_raw,i=At(s),a=Cr(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?Ca:t?Li:Jt;return!t&&oe(i,"iterate",c?Sa:rr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function yi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function e_(e,t){const n={get(s){const i=this.__v_raw,a=At(i),l=At(s);e||(Vn(s,l)&&oe(a,"get",s),oe(a,"get",l));const{has:c}=_i(a),h=t?Ca:e?Li:Jt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&oe(At(s),"iterate",rr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=At(i),l=At(s);return e||(Vn(s,l)&&oe(a,"has",s),oe(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=At(l),h=t?Ca:e?Li:Jt;return!e&&oe(c,"iterate",rr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return he(n,e?{add:yi("add"),set:yi("set"),delete:yi("delete"),clear:yi("clear")}:{add(s){!t&&!Ne(s)&&!kn(s)&&(s=At(s));const i=At(this);return _i(i).has.call(i,s)||(i.add(s),hn(i,"add",s,s)),this},set(s,i){!t&&!Ne(i)&&!kn(i)&&(i=At(i));const a=At(this),{has:l,get:c}=_i(a);let h=l.call(a,s);h||(s=At(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Vn(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=At(this),{has:a,get:l}=_i(i);let c=a.call(i,s);c||(s=At(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&hn(i,"delete",s,void 0),h},clear(){const s=At(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=t_(s,e,t)}),n}function wl(e,t){const n=e_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(bt(n,s)&&s in r?n:r,s,i)}const n_={get:wl(!1,!1)},r_={get:wl(!1,!0)},s_={get:wl(!0,!1)};const Gf=new WeakMap,Kf=new WeakMap,Wf=new WeakMap,i_=new WeakMap;function o_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(e){return e.__v_skip||!Object.isExtensible(e)?0:o_(Dm(e))}function co(e){return kn(e)?e:Tl(e,!1,Xm,n_,Gf)}function Qf(e){return Tl(e,!1,Zm,r_,Kf)}function Yf(e){return Tl(e,!0,Jm,s_,Wf)}function Tl(e,t,n,r,s){if(!Dt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function Pr(e){return kn(e)?Pr(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function Ne(e){return!!(e&&e.__v_isShallow)}function Il(e){return e?!!e.__v_raw:!1}function At(e){const t=e&&e.__v_raw;return t?At(t):e}function l_(e){return!bt(e,"__v_skip")&&Object.isExtensible(e)&&Aa(e,"__v_skip",!0),e}const Jt=e=>Dt(e)?co(e):e,Li=e=>Dt(e)?Yf(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function Ri(e){return Xf(e,!1)}function c_(e){return Xf(e,!0)}function Xf(e,t){return ue(e)?e:new u_(e,t)}class u_{constructor(t,n){this.dep=new El,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:At(t),this._value=n?t:Jt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ne(t)||kn(t);t=r?t:At(t),Vn(t,n)&&(this._rawValue=t,this._value=r?t:Jt(t),this.dep.trigger())}}function sr(e){return ue(e)?e.value:e}const h_={get:(e,t,n)=>t==="__v_raw"?e:sr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Jf(e){return Pr(e)?e:new Proxy(e,h_)}class f_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new El(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Lf(this,!0),!0}get value(){const t=this.dep.track();return Bf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function d_(e,t,n=!1){let r,s;return ct(e)?r=e:(r=e.get,s=e.set),new f_(r,s,n)}const vi={},Fi=new WeakMap;let Jn;function p_(e,t=!1,n=Jn){if(n){let r=Fi.get(n);r||Fi.set(n,r=[]),r.push(e)}}function g_(e,t,n=Ct){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=K=>s?K:Ne(K)||s===!1||s===0?Cn(K,1):Cn(K);let d,p,m,w,x=!1,k=!1;if(ue(e)?(p=()=>e.value,x=Ne(e)):Pr(e)?(p=()=>h(e),x=!0):it(e)?(k=!0,x=e.some(K=>Pr(K)||Ne(K)),p=()=>e.map(K=>{if(ue(K))return K.value;if(Pr(K))return h(K);if(ct(K))return c?c(K,2):K()})):ct(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){dn();try{m()}finally{pn()}}const K=Jn;Jn=d;try{return c?c(e,3,[w]):e(w)}finally{Jn=K}}:p=Xe,t&&s){const K=p,ut=s===!0?1/0:s;p=()=>Cn(K(),ut)}const L=qm(),G=()=>{d.stop(),L&&L.active&&pl(L.effects,d)};if(i&&t){const K=t;t=(...ut)=>{K(...ut),G()}}let B=k?new Array(e.length).fill(vi):vi;const j=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(t){const ut=d.run();if(s||x||(k?ut.some((dt,I)=>Vn(dt,B[I])):Vn(ut,B))){m&&m();const dt=Jn;Jn=d;try{const I=[ut,B===vi?void 0:k&&B[0]===vi?[]:B,w];B=ut,c?c(t,3,I):t(...I)}finally{Jn=dt}}}else d.run()};return l&&l(j),d=new kf(p),d.scheduler=a?()=>a(j,!1):j,w=K=>p_(K,!1,d),m=d.onStop=()=>{const K=Fi.get(d);if(K){if(c)c(K,4);else for(const ut of K)ut();Fi.delete(d)}},t?r?j(!0):B=d.run():a?a(j.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function Cn(e,t=1/0,n){if(t<=0||!Dt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ue(e))Cn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)Cn(e[r],t,n);else if(Cf(e)||Cr(e))e.forEach(r=>{Cn(r,t,n)});else if(Vf(e)){for(const r in e)Cn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Cn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ws(e,t,n,r){try{return r?e(...r):e()}catch(s){uo(s,t,n)}}function nn(e,t,n,r){if(ct(e)){const s=Ws(e,t,n,r);return s&&Pf(s)&&s.catch(i=>{uo(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(nn(e[i],t,n,r));return s}}function uo(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ct;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){dn(),Ws(i,null,10,[e,c,h]),pn();return}}m_(e,n,s,r,a)}function m_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ge=[];let Ke=-1;const xr=[];let bn=null,wr=0;const Zf=Promise.resolve();let Ui=null;function td(e){const t=Ui||Zf;return e?t.then(this?e.bind(this):e):t}function __(e){let t=Ke+1,n=ge.length;for(;t<n;){const r=t+n>>>1,s=ge[r],i=Ms(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Al(e){if(!(e.flags&1)){const t=Ms(e),n=ge[ge.length-1];!n||!(e.flags&2)&&t>=Ms(n)?ge.push(e):ge.splice(__(t),0,e),e.flags|=1,ed()}}function ed(){Ui||(Ui=Zf.then(rd))}function y_(e){it(e)?xr.push(...e):bn&&e.id===-1?bn.splice(wr+1,0,e):e.flags&1||(xr.push(e),e.flags|=1),ed()}function uu(e,t,n=Ke+1){for(;n<ge.length;n++){const r=ge[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nd(e){if(xr.length){const t=[...new Set(xr)].sort((n,r)=>Ms(n)-Ms(r));if(xr.length=0,bn){bn.push(...t);return}for(bn=t,wr=0;wr<bn.length;wr++){const n=bn[wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,wr=0}}const Ms=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rd(e){try{for(Ke=0;Ke<ge.length;Ke++){const t=ge[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<ge.length;Ke++){const t=ge[Ke];t&&(t.flags&=-2)}Ke=-1,ge.length=0,nd(),Ui=null,(ge.length||xr.length)&&rd()}}let $e=null,sd=null;function Bi(e){const t=$e;return $e=e,sd=e&&e.type.__scopeId||null,t}function un(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Eu(-1);const i=Bi(t);let a;try{a=e(...s)}finally{Bi(i),r._d&&Eu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(dn(),nn(c,n,8,[e.el,l,e,t]),pn())}}const v_=Symbol("_vte"),E_=e=>e.__isTeleport;function bl(e,t){e.shapeFlag&6&&e.component?(e.transition=t,bl(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function id(e,t){return ct(e)?he({name:e.name},t,{setup:e}):e}function od(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ts(e,t,n,r,s=!1){if(it(e)){e.forEach((x,k)=>Ts(x,t&&(it(t)?t[k]:t),n,r,s));return}if(Is(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ts(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?xl(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===Ct?l.refs={}:l.refs,p=l.setupState,m=At(p),w=p===Ct?()=>!1:x=>bt(m,x);if(h!=null&&h!==c&&(Ut(h)?(d[h]=null,w(h)&&(p[h]=null)):ue(h)&&(h.value=null)),ct(c))Ws(c,l,12,[a,d]);else{const x=Ut(c),k=ue(c);if(x||k){const L=()=>{if(e.f){const G=x?w(c)?p[c]:d[c]:c.value;s?it(G)&&pl(G,i):it(G)?G.includes(i)||G.push(i):x?(d[c]=[i],w(c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else x?(d[c]=a,w(c)&&(p[c]=a)):k&&(c.value=a,e.k&&(d[e.k]=a))};a?(L.id=-1,Ie(L,n)):L()}}}oo().requestIdleCallback;oo().cancelIdleCallback;const Is=e=>!!e.type.__asyncLoader,ad=e=>e.type.__isKeepAlive;function w_(e,t){ld(e,"a",t)}function T_(e,t){ld(e,"da",t)}function ld(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ho(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ad(s.parent.vnode)&&I_(r,t,n,s),s=s.parent}}function I_(e,t,n,r){const s=ho(t,e,r,!0);ud(()=>{pl(r[t],s)},n)}function ho(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{dn();const l=Qs(n),c=nn(t,n,e,a);return l(),pn(),c});return r?s.unshift(i):s.push(i),i}}const yn=e=>(t,n=le)=>{(!Fs||e==="sp")&&ho(e,(...r)=>t(...r),n)},A_=yn("bm"),cd=yn("m"),b_=yn("bu"),R_=yn("u"),S_=yn("bum"),ud=yn("um"),C_=yn("sp"),P_=yn("rtg"),x_=yn("rtc");function V_(e,t=le){ho("ec",e,t)}const hd="components";function Rl(e,t){return fd(hd,e,!0,t)||e}const D_=Symbol.for("v-ndc");function N_(e){return Ut(e)&&fd(hd,e,!1)||e}function fd(e,t,n=!0,r=!1){const s=$e||le;if(s){const i=s.type;{const l=wy(i,!1);if(l&&(l===t||l===ke(t)||l===io(ke(t))))return i}const a=hu(s[e]||i[e],t)||hu(s.appContext[e],t);return!a&&r?i:a}}function hu(e,t){return e&&(e[t]||e[ke(t)]||e[io(ke(t))])}function O_(e,t,n,r){let s;const i=n,a=it(e);if(a||Ut(e)){const l=a&&Pr(e);let c=!1,h=!1;l&&(c=!Ne(e),h=kn(e),e=lo(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(c?h?Li(Jt(e[d])):Jt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Dt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const Pa=e=>e?Dd(e)?xl(e):Pa(e.parent):null,As=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pa(e.parent),$root:e=>Pa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pd(e),$forceUpdate:e=>e.f||(e.f=()=>{Al(e.update)}),$nextTick:e=>e.n||(e.n=td.bind(e.proxy)),$watch:e=>ey.bind(e)}),ra=(e,t)=>e!==Ct&&!e.__isScriptSetup&&bt(e,t),k_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const w=a[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ra(r,t))return a[t]=1,r[t];if(s!==Ct&&bt(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&bt(h,t))return a[t]=3,i[t];if(n!==Ct&&bt(n,t))return a[t]=4,n[t];xa&&(a[t]=0)}}const d=As[t];let p,m;if(d)return t==="$attrs"&&oe(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Ct&&bt(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,bt(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ra(s,t)?(s[t]=n,!0):r!==Ct&&bt(r,t)?(r[t]=n,!0):bt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Ct&&bt(e,a)||ra(t,a)||(l=i[0])&&bt(l,a)||bt(r,a)||bt(As,a)||bt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:bt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fu(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xa=!0;function M_(e){const t=pd(e),n=e.proxy,r=e.ctx;xa=!1,t.beforeCreate&&du(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:w,updated:x,activated:k,deactivated:L,beforeDestroy:G,beforeUnmount:B,destroyed:j,unmounted:K,render:ut,renderTracked:dt,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:S,directives:E,filters:fe}=t;if(h&&L_(h,r,null),a)for(const pt in a){const ht=a[pt];ct(ht)&&(r[pt]=ht.bind(n))}if(s){const pt=s.call(n,n);Dt(pt)&&(e.data=co(pt))}if(xa=!0,i)for(const pt in i){const ht=i[pt],we=ct(ht)?ht.bind(n,n):ct(ht.get)?ht.get.bind(n,n):Xe,Le=!ct(ht)&&ct(ht.set)?ht.set.bind(n):Xe,Se=Be({get:we,set:Le});Object.defineProperty(r,pt,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Nt=>Se.value=Nt})}if(l)for(const pt in l)dd(l[pt],r,n,pt);if(c){const pt=ct(c)?c.call(n):c;Reflect.ownKeys(pt).forEach(ht=>{Si(ht,pt[ht])})}d&&du(d,e,"c");function $t(pt,ht){it(ht)?ht.forEach(we=>pt(we.bind(n))):ht&&pt(ht.bind(n))}if($t(A_,p),$t(cd,m),$t(b_,w),$t(R_,x),$t(w_,k),$t(T_,L),$t(V_,y),$t(x_,dt),$t(P_,I),$t(S_,B),$t(ud,K),$t(C_,T),it(A))if(A.length){const pt=e.exposed||(e.exposed={});A.forEach(ht=>{Object.defineProperty(pt,ht,{get:()=>n[ht],set:we=>n[ht]=we,enumerable:!0})})}else e.exposed||(e.exposed={});ut&&e.render===Xe&&(e.render=ut),b!=null&&(e.inheritAttrs=b),S&&(e.components=S),E&&(e.directives=E),T&&od(e)}function L_(e,t,n=Xe){it(e)&&(e=Va(e));for(const r in e){const s=e[r];let i;Dt(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function du(e,t,n){nn(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function dd(e,t,n,r){let s=r.includes(".")?Sd(n,r):()=>n[r];if(Ut(e)){const i=t[e];ct(i)&&Ci(s,i)}else if(ct(e))Ci(s,e.bind(n));else if(Dt(e))if(it(e))e.forEach(i=>dd(i,t,n,r));else{const i=ct(e.handler)?e.handler.bind(n):t[e.handler];ct(i)&&Ci(s,i,e)}}function pd(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>$i(c,h,a,!0)),$i(c,t,a)),Dt(t)&&i.set(t,c),c}function $i(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&$i(e,i,n,!0),s&&s.forEach(a=>$i(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=F_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const F_={data:pu,props:gu,emits:gu,methods:gs,computed:gs,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:gs,directives:gs,watch:B_,provide:pu,inject:U_};function pu(e,t){return t?e?function(){return he(ct(e)?e.call(this,this):e,ct(t)?t.call(this,this):t)}:t:e}function U_(e,t){return gs(Va(e),Va(t))}function Va(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function gs(e,t){return e?he(Object.create(null),e,t):t}function gu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:he(Object.create(null),fu(e),fu(t??{})):t}function B_(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function gd(){return{app:null,config:{isNativeTag:xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $_=0;function j_(e,t){return function(r,s=null){ct(r)||(r=he({},r)),s!=null&&!Dt(s)&&(s=null);const i=gd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:$_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ct(d.install)?(a.add(d),d.install(h,...p)):ct(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const w=h._ceVNode||kt(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(w,d,m),c=!0,h._container=d,d.__vue_app__=h,xl(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nn(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Vr;Vr=h;try{return d()}finally{Vr=p}}};return h}}let Vr=null;function Si(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function fn(e,t,n=!1){const r=my();if(r||Vr){let s=Vr?Vr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ct(t)?t.call(r&&r.proxy):t}}const md={},_d=()=>Object.create(md),yd=e=>Object.getPrototypeOf(e)===md;function q_(e,t,n,r=!1){const s={},i=_d();e.propsDefaults=Object.create(null),vd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Qf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function H_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=At(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(fo(e.emitsOptions,m))continue;const w=t[m];if(c)if(bt(i,m))w!==i[m]&&(i[m]=w,h=!0);else{const x=ke(m);s[x]=Da(c,l,x,w,e,!1)}else w!==i[m]&&(i[m]=w,h=!0)}}}else{vd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!bt(t,p)&&((d=ur(p))===p||!bt(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Da(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!bt(t,p))&&(delete i[p],h=!0)}h&&hn(e.attrs,"set","")}function vd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(vs(c))continue;const h=t[c];let d;s&&bt(s,d=ke(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:fo(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=At(n),h=l||Ct;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Da(s,c,p,h[p],e,!bt(h,p))}}return a}function Da(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=bt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ct(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Qs(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ur(n))&&(r=!0))}return r}const z_=new WeakMap;function Ed(e,t,n=!1){const r=n?z_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ct(e)){const d=p=>{c=!0;const[m,w]=Ed(p,t,!0);he(a,m),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Dt(e)&&r.set(e,Sr),Sr;if(it(i))for(let d=0;d<i.length;d++){const p=ke(i[d]);mu(p)&&(a[p]=Ct)}else if(i)for(const d in i){const p=ke(d);if(mu(p)){const m=i[d],w=a[p]=it(m)||ct(m)?{type:m}:he({},m),x=w.type;let k=!1,L=!0;if(it(x))for(let G=0;G<x.length;++G){const B=x[G],j=ct(B)&&B.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(L=!1)}else k=ct(x)&&x.name==="Boolean";w[0]=k,w[1]=L,(k||bt(w,"default"))&&l.push(p)}}const h=[a,l];return Dt(e)&&r.set(e,h),h}function mu(e){return e[0]!=="$"&&!vs(e)}const Sl=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",Cl=e=>it(e)?e.map(Qe):[Qe(e)],G_=(e,t,n)=>{if(t._n)return t;const r=un((...s)=>Cl(t(...s)),n);return r._c=!1,r},wd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Sl(s))continue;const i=e[s];if(ct(i))t[s]=G_(s,i,r);else if(i!=null){const a=Cl(i);t[s]=()=>a}}},Td=(e,t)=>{const n=Cl(t);e.slots.default=()=>n},Id=(e,t,n)=>{for(const r in t)(n||!Sl(r))&&(e[r]=t[r])},K_=(e,t,n)=>{const r=e.slots=_d();if(e.vnode.shapeFlag&32){const s=t.__;s&&Aa(r,"__",s,!0);const i=t._;i?(Id(r,t,n),n&&Aa(r,"_",i,!0)):wd(t,r)}else t&&Td(e,t)},W_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Ct;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Id(s,t,n):(i=!t.$stable,wd(t,s)),a=t}else t&&(Td(e,t),a={default:1});if(i)for(const l in s)!Sl(l)&&a[l]==null&&delete s[l]},Ie=ly;function Q_(e){return Y_(e)}function Y_(e,t){const n=oo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:w=Xe,insertStaticContent:x}=e,k=(_,v,R,D=null,M=null,N=null,W=void 0,q=null,$=!!v.dynamicChildren)=>{if(_===v)return;_&&!ds(_,v)&&(D=V(_),Nt(_,M,N,!0),_=null),v.patchFlag===-2&&($=!1,v.dynamicChildren=null);const{type:F,ref:et,shapeFlag:z}=v;switch(F){case po:L(_,v,R,D);break;case Mn:G(_,v,R,D);break;case Pi:_==null&&B(v,R,D,W);break;case Ue:S(_,v,R,D,M,N,W,q,$);break;default:z&1?ut(_,v,R,D,M,N,W,q,$):z&6?E(_,v,R,D,M,N,W,q,$):(z&64||z&128)&&F.process(_,v,R,D,M,N,W,q,$,Z)}et!=null&&M?Ts(et,_&&_.ref,N,v||_,!v):et==null&&_&&_.ref!=null&&Ts(_.ref,null,N,_,!0)},L=(_,v,R,D)=>{if(_==null)r(v.el=l(v.children),R,D);else{const M=v.el=_.el;v.children!==_.children&&h(M,v.children)}},G=(_,v,R,D)=>{_==null?r(v.el=c(v.children||""),R,D):v.el=_.el},B=(_,v,R,D)=>{[_.el,_.anchor]=x(_.children,v,R,D,_.el,_.anchor)},j=({el:_,anchor:v},R,D)=>{let M;for(;_&&_!==v;)M=m(_),r(_,R,D),_=M;r(v,R,D)},K=({el:_,anchor:v})=>{let R;for(;_&&_!==v;)R=m(_),s(_),_=R;s(v)},ut=(_,v,R,D,M,N,W,q,$)=>{v.type==="svg"?W="svg":v.type==="math"&&(W="mathml"),_==null?dt(v,R,D,M,N,W,q,$):T(_,v,M,N,W,q,$)},dt=(_,v,R,D,M,N,W,q)=>{let $,F;const{props:et,shapeFlag:z,transition:tt,dirs:st}=_;if($=_.el=a(_.type,N,et&&et.is,et),z&8?d($,_.children):z&16&&y(_.children,$,null,D,M,sa(_,N),W,q),st&&Yn(_,null,D,"created"),I($,_,_.scopeId,W,D),et){for(const lt in et)lt!=="value"&&!vs(lt)&&i($,lt,null,et[lt],N,D);"value"in et&&i($,"value",null,et.value,N),(F=et.onVnodeBeforeMount)&&Ge(F,D,_)}st&&Yn(_,null,D,"beforeMount");const nt=X_(M,tt);nt&&tt.beforeEnter($),r($,v,R),((F=et&&et.onVnodeMounted)||nt||st)&&Ie(()=>{F&&Ge(F,D,_),nt&&tt.enter($),st&&Yn(_,null,D,"mounted")},M)},I=(_,v,R,D,M)=>{if(R&&w(_,R),D)for(let N=0;N<D.length;N++)w(_,D[N]);if(M){let N=M.subTree;if(v===N||Pd(N.type)&&(N.ssContent===v||N.ssFallback===v)){const W=M.vnode;I(_,W,W.scopeId,W.slotScopeIds,M.parent)}}},y=(_,v,R,D,M,N,W,q,$=0)=>{for(let F=$;F<_.length;F++){const et=_[F]=q?Rn(_[F]):Qe(_[F]);k(null,et,v,R,D,M,N,W,q)}},T=(_,v,R,D,M,N,W)=>{const q=v.el=_.el;let{patchFlag:$,dynamicChildren:F,dirs:et}=v;$|=_.patchFlag&16;const z=_.props||Ct,tt=v.props||Ct;let st;if(R&&Xn(R,!1),(st=tt.onVnodeBeforeUpdate)&&Ge(st,R,v,_),et&&Yn(v,_,R,"beforeUpdate"),R&&Xn(R,!0),(z.innerHTML&&tt.innerHTML==null||z.textContent&&tt.textContent==null)&&d(q,""),F?A(_.dynamicChildren,F,q,R,D,sa(v,M),N):W||ht(_,v,q,null,R,D,sa(v,M),N,!1),$>0){if($&16)b(q,z,tt,R,M);else if($&2&&z.class!==tt.class&&i(q,"class",null,tt.class,M),$&4&&i(q,"style",z.style,tt.style,M),$&8){const nt=v.dynamicProps;for(let lt=0;lt<nt.length;lt++){const gt=nt[lt],Kt=z[gt],Wt=tt[gt];(Wt!==Kt||gt==="value")&&i(q,gt,Kt,Wt,M,R)}}$&1&&_.children!==v.children&&d(q,v.children)}else!W&&F==null&&b(q,z,tt,R,M);((st=tt.onVnodeUpdated)||et)&&Ie(()=>{st&&Ge(st,R,v,_),et&&Yn(v,_,R,"updated")},D)},A=(_,v,R,D,M,N,W)=>{for(let q=0;q<v.length;q++){const $=_[q],F=v[q],et=$.el&&($.type===Ue||!ds($,F)||$.shapeFlag&198)?p($.el):R;k($,F,et,null,D,M,N,W,!0)}},b=(_,v,R,D,M)=>{if(v!==R){if(v!==Ct)for(const N in v)!vs(N)&&!(N in R)&&i(_,N,v[N],null,M,D);for(const N in R){if(vs(N))continue;const W=R[N],q=v[N];W!==q&&N!=="value"&&i(_,N,q,W,M,D)}"value"in R&&i(_,"value",v.value,R.value,M)}},S=(_,v,R,D,M,N,W,q,$)=>{const F=v.el=_?_.el:l(""),et=v.anchor=_?_.anchor:l("");let{patchFlag:z,dynamicChildren:tt,slotScopeIds:st}=v;st&&(q=q?q.concat(st):st),_==null?(r(F,R,D),r(et,R,D),y(v.children||[],R,et,M,N,W,q,$)):z>0&&z&64&&tt&&_.dynamicChildren?(A(_.dynamicChildren,tt,R,M,N,W,q),(v.key!=null||M&&v===M.subTree)&&Ad(_,v,!0)):ht(_,v,R,et,M,N,W,q,$)},E=(_,v,R,D,M,N,W,q,$)=>{v.slotScopeIds=q,_==null?v.shapeFlag&512?M.ctx.activate(v,R,D,W,$):fe(v,R,D,M,N,W,$):Re(_,v,$)},fe=(_,v,R,D,M,N,W)=>{const q=_.component=gy(_,D,M);if(ad(_)&&(q.ctx.renderer=Z),_y(q,!1,W),q.asyncDep){if(M&&M.registerDep(q,$t,W),!_.el){const $=q.subTree=kt(Mn);G(null,$,v,R),_.placeholder=$.el}}else $t(q,_,v,R,M,N,W)},Re=(_,v,R)=>{const D=v.component=_.component;if(oy(_,v,R))if(D.asyncDep&&!D.asyncResolved){pt(D,v,R);return}else D.next=v,D.update();else v.el=_.el,D.vnode=v},$t=(_,v,R,D,M,N,W)=>{const q=()=>{if(_.isMounted){let{next:z,bu:tt,u:st,parent:nt,vnode:lt}=_;{const te=bd(_);if(te){z&&(z.el=lt.el,pt(_,z,W)),te.asyncDep.then(()=>{_.isUnmounted||q()});return}}let gt=z,Kt;Xn(_,!1),z?(z.el=lt.el,pt(_,z,W)):z=lt,tt&&Jo(tt),(Kt=z.props&&z.props.onVnodeBeforeUpdate)&&Ge(Kt,nt,z,lt),Xn(_,!0);const Wt=yu(_),Ce=_.subTree;_.subTree=Wt,k(Ce,Wt,p(Ce.el),V(Ce),_,M,N),z.el=Wt.el,gt===null&&ay(_,Wt.el),st&&Ie(st,M),(Kt=z.props&&z.props.onVnodeUpdated)&&Ie(()=>Ge(Kt,nt,z,lt),M)}else{let z;const{el:tt,props:st}=v,{bm:nt,m:lt,parent:gt,root:Kt,type:Wt}=_,Ce=Is(v);Xn(_,!1),nt&&Jo(nt),!Ce&&(z=st&&st.onVnodeBeforeMount)&&Ge(z,gt,v),Xn(_,!0);{Kt.ce&&Kt.ce._def.shadowRoot!==!1&&Kt.ce._injectChildStyle(Wt);const te=_.subTree=yu(_);k(null,te,R,D,_,M,N),v.el=te.el}if(lt&&Ie(lt,M),!Ce&&(z=st&&st.onVnodeMounted)){const te=v;Ie(()=>Ge(z,gt,te),M)}(v.shapeFlag&256||gt&&Is(gt.vnode)&&gt.vnode.shapeFlag&256)&&_.a&&Ie(_.a,M),_.isMounted=!0,v=R=D=null}};_.scope.on();const $=_.effect=new kf(q);_.scope.off();const F=_.update=$.run.bind($),et=_.job=$.runIfDirty.bind($);et.i=_,et.id=_.uid,$.scheduler=()=>Al(et),Xn(_,!0),F()},pt=(_,v,R)=>{v.component=_;const D=_.vnode.props;_.vnode=v,_.next=null,H_(_,v.props,D,R),W_(_,v.children,R),dn(),uu(_),pn()},ht=(_,v,R,D,M,N,W,q,$=!1)=>{const F=_&&_.children,et=_?_.shapeFlag:0,z=v.children,{patchFlag:tt,shapeFlag:st}=v;if(tt>0){if(tt&128){Le(F,z,R,D,M,N,W,q,$);return}else if(tt&256){we(F,z,R,D,M,N,W,q,$);return}}st&8?(et&16&&_e(F,M,N),z!==F&&d(R,z)):et&16?st&16?Le(F,z,R,D,M,N,W,q,$):_e(F,M,N,!0):(et&8&&d(R,""),st&16&&y(z,R,D,M,N,W,q,$))},we=(_,v,R,D,M,N,W,q,$)=>{_=_||Sr,v=v||Sr;const F=_.length,et=v.length,z=Math.min(F,et);let tt;for(tt=0;tt<z;tt++){const st=v[tt]=$?Rn(v[tt]):Qe(v[tt]);k(_[tt],st,R,null,M,N,W,q,$)}F>et?_e(_,M,N,!0,!1,z):y(v,R,D,M,N,W,q,$,z)},Le=(_,v,R,D,M,N,W,q,$)=>{let F=0;const et=v.length;let z=_.length-1,tt=et-1;for(;F<=z&&F<=tt;){const st=_[F],nt=v[F]=$?Rn(v[F]):Qe(v[F]);if(ds(st,nt))k(st,nt,R,null,M,N,W,q,$);else break;F++}for(;F<=z&&F<=tt;){const st=_[z],nt=v[tt]=$?Rn(v[tt]):Qe(v[tt]);if(ds(st,nt))k(st,nt,R,null,M,N,W,q,$);else break;z--,tt--}if(F>z){if(F<=tt){const st=tt+1,nt=st<et?v[st].el:D;for(;F<=tt;)k(null,v[F]=$?Rn(v[F]):Qe(v[F]),R,nt,M,N,W,q,$),F++}}else if(F>tt)for(;F<=z;)Nt(_[F],M,N,!0),F++;else{const st=F,nt=F,lt=new Map;for(F=nt;F<=tt;F++){const Qt=v[F]=$?Rn(v[F]):Qe(v[F]);Qt.key!=null&&lt.set(Qt.key,F)}let gt,Kt=0;const Wt=tt-nt+1;let Ce=!1,te=0;const En=new Array(Wt);for(F=0;F<Wt;F++)En[F]=0;for(F=st;F<=z;F++){const Qt=_[F];if(Kt>=Wt){Nt(Qt,M,N,!0);continue}let Pe;if(Qt.key!=null)Pe=lt.get(Qt.key);else for(gt=nt;gt<=tt;gt++)if(En[gt-nt]===0&&ds(Qt,v[gt])){Pe=gt;break}Pe===void 0?Nt(Qt,M,N,!0):(En[Pe-nt]=F+1,Pe>=te?te=Pe:Ce=!0,k(Qt,v[Pe],R,null,M,N,W,q,$),Kt++)}const Zr=Ce?J_(En):Sr;for(gt=Zr.length-1,F=Wt-1;F>=0;F--){const Qt=nt+F,Pe=v[Qt],ei=v[Qt+1],dr=Qt+1<et?ei.el||ei.placeholder:D;En[F]===0?k(null,Pe,R,dr,M,N,W,q,$):Ce&&(gt<0||F!==Zr[gt]?Se(Pe,R,dr,2):gt--)}}},Se=(_,v,R,D,M=null)=>{const{el:N,type:W,transition:q,children:$,shapeFlag:F}=_;if(F&6){Se(_.component.subTree,v,R,D);return}if(F&128){_.suspense.move(v,R,D);return}if(F&64){W.move(_,v,R,Z);return}if(W===Ue){r(N,v,R);for(let z=0;z<$.length;z++)Se($[z],v,R,D);r(_.anchor,v,R);return}if(W===Pi){j(_,v,R);return}if(D!==2&&F&1&&q)if(D===0)q.beforeEnter(N),r(N,v,R),Ie(()=>q.enter(N),M);else{const{leave:z,delayLeave:tt,afterLeave:st}=q,nt=()=>{_.ctx.isUnmounted?s(N):r(N,v,R)},lt=()=>{z(N,()=>{nt(),st&&st()})};tt?tt(N,nt,lt):lt()}else r(N,v,R)},Nt=(_,v,R,D=!1,M=!1)=>{const{type:N,props:W,ref:q,children:$,dynamicChildren:F,shapeFlag:et,patchFlag:z,dirs:tt,cacheIndex:st}=_;if(z===-2&&(M=!1),q!=null&&(dn(),Ts(q,null,R,_,!0),pn()),st!=null&&(v.renderCache[st]=void 0),et&256){v.ctx.deactivate(_);return}const nt=et&1&&tt,lt=!Is(_);let gt;if(lt&&(gt=W&&W.onVnodeBeforeUnmount)&&Ge(gt,v,_),et&6)ze(_.component,R,D);else{if(et&128){_.suspense.unmount(R,D);return}nt&&Yn(_,null,v,"beforeUnmount"),et&64?_.type.remove(_,v,R,Z,D):F&&!F.hasOnce&&(N!==Ue||z>0&&z&64)?_e(F,v,R,!1,!0):(N===Ue&&z&384||!M&&et&16)&&_e($,v,R),D&&Ot(_)}(lt&&(gt=W&&W.onVnodeUnmounted)||nt)&&Ie(()=>{gt&&Ge(gt,v,_),nt&&Yn(_,null,v,"unmounted")},R)},Ot=_=>{const{type:v,el:R,anchor:D,transition:M}=_;if(v===Ue){vn(R,D);return}if(v===Pi){K(_);return}const N=()=>{s(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:W,delayLeave:q}=M,$=()=>W(R,N);q?q(_.el,N,$):$()}else N()},vn=(_,v)=>{let R;for(;_!==v;)R=m(_),s(_),_=R;s(v)},ze=(_,v,R)=>{const{bum:D,scope:M,job:N,subTree:W,um:q,m:$,a:F,parent:et,slots:{__:z}}=_;_u($),_u(F),D&&Jo(D),et&&it(z)&&z.forEach(tt=>{et.renderCache[tt]=void 0}),M.stop(),N&&(N.flags|=8,Nt(W,_,v,R)),q&&Ie(q,v),Ie(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},_e=(_,v,R,D=!1,M=!1,N=0)=>{for(let W=N;W<_.length;W++)Nt(_[W],v,R,D,M)},V=_=>{if(_.shapeFlag&6)return V(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=m(_.anchor||_.el),R=v&&v[v_];return R?m(R):v};let Y=!1;const Q=(_,v,R)=>{_==null?v._vnode&&Nt(v._vnode,null,null,!0):k(v._vnode||null,_,v,null,null,null,R),v._vnode=_,Y||(Y=!0,uu(),nd(),Y=!1)},Z={p:k,um:Nt,m:Se,r:Ot,mt:fe,mc:y,pc:ht,pbc:A,n:V,o:e};return{render:Q,hydrate:void 0,createApp:j_(Q)}}function sa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function X_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ad(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Rn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ad(a,l)),l.type===po&&(l.el=a.el),l.type===Mn&&!l.el&&(l.el=a.el)}}function J_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function bd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bd(t)}function _u(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Z_=Symbol.for("v-scx"),ty=()=>fn(Z_);function Ci(e,t,n){return Rd(e,t,n)}function Rd(e,t,n=Ct){const{immediate:r,deep:s,flush:i,once:a}=n,l=he({},n),c=t&&r||!t&&i!=="post";let h;if(Fs){if(i==="sync"){const w=ty();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Xe,w.resume=Xe,w.pause=Xe,w}}const d=le;l.call=(w,x,k)=>nn(w,d,x,k);let p=!1;i==="post"?l.scheduler=w=>{Ie(w,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,x)=>{x?w():Al(w)}),l.augmentJob=w=>{t&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const m=g_(e,t,l);return Fs&&(h?h.push(m):c&&m()),m}function ey(e,t,n){const r=this.proxy,s=Ut(e)?e.includes(".")?Sd(r,e):()=>r[e]:e.bind(r,r);let i;ct(t)?i=t:(i=t.handler,n=t);const a=Qs(this),l=Rd(s,i.bind(r),n);return a(),l}function Sd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ny=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${ur(t)}Modifiers`];function ry(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ct;let s=n;const i=t.startsWith("update:"),a=i&&ny(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ut(d)?d.trim():d)),a.number&&(s=n.map(km)));let l,c=r[l=Xo(t)]||r[l=Xo(ke(t))];!c&&i&&(c=r[l=Xo(ur(t))]),c&&nn(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,nn(h,e,6,s)}}function Cd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ct(e)){const c=h=>{const d=Cd(h,t,!0);d&&(l=!0,he(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Dt(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):he(a,i),Dt(e)&&r.set(e,a),a)}function fo(e,t){return!e||!no(t)?!1:(t=t.slice(2).replace(/Once$/,""),bt(e,t[0].toLowerCase()+t.slice(1))||bt(e,ur(t))||bt(e,t))}function yu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:w,ctx:x,inheritAttrs:k}=e,L=Bi(e);let G,B;try{if(n.shapeFlag&4){const K=s||r,ut=K;G=Qe(h.call(ut,K,d,p,w,m,x)),B=l}else{const K=t;G=Qe(K.length>1?K(p,{attrs:l,slots:a,emit:c}):K(p,null)),B=t.props?l:sy(l)}}catch(K){bs.length=0,uo(K,e,1),G=kt(Mn)}let j=G;if(B&&k!==!1){const K=Object.keys(B),{shapeFlag:ut}=j;K.length&&ut&7&&(i&&K.some(dl)&&(B=iy(B,i)),j=Lr(j,B,!1,!0))}return n.dirs&&(j=Lr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&bl(j,n.transition),G=j,Bi(L),G}const sy=e=>{let t;for(const n in e)(n==="class"||n==="style"||no(n))&&((t||(t={}))[n]=e[n]);return t},iy=(e,t)=>{const n={};for(const r in e)(!dl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function oy(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!fo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?vu(r,a,h):!0:!!a;return!1}function vu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!fo(n,i))return!0}return!1}function ay({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pd=e=>e.__isSuspense;function ly(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):y_(e)}const Ue=Symbol.for("v-fgt"),po=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Pi=Symbol.for("v-stc"),bs=[];let Ae=null;function ie(e=!1){bs.push(Ae=e?null:[])}function cy(){bs.pop(),Ae=bs[bs.length-1]||null}let Ls=1;function Eu(e,t=!1){Ls+=e,e<0&&Ae&&t&&(Ae.hasOnce=!0)}function xd(e){return e.dynamicChildren=Ls>0?Ae||Sr:null,cy(),Ls>0&&Ae&&Ae.push(e),e}function xe(e,t,n,r,s,i){return xd(vt(e,t,n,r,s,i,!0))}function go(e,t,n,r,s){return xd(kt(e,t,n,r,s,!0))}function ji(e){return e?e.__v_isVNode===!0:!1}function ds(e,t){return e.type===t.type&&e.key===t.key}const Vd=({key:e})=>e??null,xi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ut(e)||ue(e)||ct(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function vt(e,t=null,n=null,r=0,s=null,i=e===Ue?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vd(t),ref:t&&xi(t),scopeId:sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return l?(Pl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ut(n)?8:16),Ls>0&&!a&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const kt=uy;function uy(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===D_)&&(e=Mn),ji(e)){const l=Lr(e,t,!0);return n&&Pl(l,n),Ls>0&&!i&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(e)]=l:Ae.push(l)),l.patchFlag=-2,l}if(Ty(e)&&(e=e.__vccOpts),t){t=hy(t);let{class:l,style:c}=t;l&&!Ut(l)&&(t.class=ao(l)),Dt(c)&&(Il(c)&&!it(c)&&(c=he({},c)),t.style=ml(c))}const a=Ut(e)?1:Pd(e)?128:E_(e)?64:Dt(e)?4:ct(e)?2:0;return vt(e,t,n,r,s,a,i,!0)}function hy(e){return e?Il(e)||yd(e)?he({},e):e:null}function Lr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?fy(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Vd(h),ref:t&&t.ref?n&&i?it(i)?i.concat(xi(t)):[i,xi(t)]:xi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lr(e.ssContent),ssFallback:e.ssFallback&&Lr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&bl(d,c.clone(d)),d}function Ve(e=" ",t=0){return kt(po,null,e,t)}function d1(e,t){const n=kt(Pi,null,e);return n.staticCount=t,n}function vr(e="",t=!1){return t?(ie(),go(Mn,null,e)):kt(Mn,null,e)}function Qe(e){return e==null||typeof e=="boolean"?kt(Mn):it(e)?kt(Ue,null,e.slice()):ji(e)?Rn(e):kt(po,null,String(e))}function Rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lr(e)}function Pl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Pl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!yd(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ct(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[Ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function fy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ao([t.class,r.class]));else if(s==="style")t.style=ml([t.style,r.style]);else if(no(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ge(e,t,n,r=null){nn(e,t,7,[n,r])}const dy=gd();let py=0;function gy(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||dy,i={uid:py++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(r,s),emitsOptions:Cd(r,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:r.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ry.bind(null,i),e.ce&&e.ce(i),i}let le=null;const my=()=>le||$e;let qi,Na;{const e=oo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};qi=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Na=t("__VUE_SSR_SETTERS__",n=>Fs=n)}const Qs=e=>{const t=le;return qi(e),e.scope.on(),()=>{e.scope.off(),qi(t)}},wu=()=>{le&&le.scope.off(),qi(null)};function Dd(e){return e.vnode.shapeFlag&4}let Fs=!1;function _y(e,t=!1,n=!1){t&&Na(t);const{props:r,children:s}=e.vnode,i=Dd(e);q_(e,r,i,t),K_(e,s,n||t);const a=i?yy(e,t):void 0;return t&&Na(!1),a}function yy(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,k_);const{setup:r}=n;if(r){dn();const s=e.setupContext=r.length>1?Ey(e):null,i=Qs(e),a=Ws(r,e,0,[e.props,s]),l=Pf(a);if(pn(),i(),(l||e.sp)&&!Is(e)&&od(e),l){if(a.then(wu,wu),t)return a.then(c=>{Tu(e,c)}).catch(c=>{uo(c,e,0)});e.asyncDep=a}else Tu(e,a)}else Nd(e)}function Tu(e,t,n){ct(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Dt(t)&&(e.setupState=Jf(t)),Nd(e)}function Nd(e,t,n){const r=e.type;e.render||(e.render=r.render||Xe);{const s=Qs(e);dn();try{M_(e)}finally{pn(),s()}}}const vy={get(e,t){return oe(e,"get",""),e[t]}};function Ey(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vy),slots:e.slots,emit:e.emit,expose:t}}function xl(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Jf(l_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in As)return As[n](e)},has(t,n){return n in t||n in As}})):e.proxy}function wy(e,t=!0){return ct(e)?e.displayName||e.name:e.name||t&&e.__name}function Ty(e){return ct(e)&&"__vccOpts"in e}const Be=(e,t)=>d_(e,t,Fs);function Od(e,t,n){const r=arguments.length;return r===2?Dt(t)&&!it(t)?ji(t)?kt(e,null,[t]):kt(e,t):kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ji(n)&&(n=[n]),kt(e,t,n))}const Iy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oa;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{Oa=Iu.createPolicy("vue",{createHTML:e=>e})}catch{}const kd=Oa?e=>Oa.createHTML(e):e=>e,Ay="http://www.w3.org/2000/svg",by="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,Au=cn&&cn.createElement("template"),Ry={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?cn.createElementNS(Ay,e):t==="mathml"?cn.createElementNS(by,e):n?cn.createElement(e,{is:n}):cn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>cn.createTextNode(e),createComment:e=>cn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Au.innerHTML=kd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Au.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sy=Symbol("_vtc");function Cy(e,t,n){const r=e[Sy];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bu=Symbol("_vod"),Py=Symbol("_vsh"),xy=Symbol(""),Vy=/(^|;)\s*display\s*:/;function Dy(e,t,n){const r=e.style,s=Ut(n);let i=!1;if(n&&!s){if(t)if(Ut(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Vi(r,l,"")}else for(const a in t)n[a]==null&&Vi(r,a,"");for(const a in n)a==="display"&&(i=!0),Vi(r,a,n[a])}else if(s){if(t!==n){const a=r[xy];a&&(n+=";"+a),r.cssText=n,i=Vy.test(n)}}else t&&e.removeAttribute("style");bu in e&&(e[bu]=i?r.display:"",e[Py]&&(r.display="none"))}const Ru=/\s*!important$/;function Vi(e,t,n){if(it(n))n.forEach(r=>Vi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ny(e,t);Ru.test(n)?e.setProperty(ur(r),n.replace(Ru,""),"important"):e[r]=n}}const Su=["Webkit","Moz","ms"],ia={};function Ny(e,t){const n=ia[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return ia[t]=r;r=io(r);for(let s=0;s<Su.length;s++){const i=Su[s]+r;if(i in e)return ia[t]=i}return t}const Cu="http://www.w3.org/1999/xlink";function Pu(e,t,n,r,s,i=$m(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Cu,t.slice(6,t.length)):e.setAttributeNS(Cu,t,n):n==null||i&&!Df(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Hn(n)?String(n):n)}function xu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?kd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Df(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Oy(e,t,n,r){e.addEventListener(t,n,r)}function ky(e,t,n,r){e.removeEventListener(t,n,r)}const Vu=Symbol("_vei");function My(e,t,n,r,s=null){const i=e[Vu]||(e[Vu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Ly(t);if(r){const h=i[t]=By(r,s);Oy(e,l,h,c)}else a&&(ky(e,l,a,c),i[t]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function Ly(e){let t;if(Du.test(e)){t={};let r;for(;r=e.match(Du);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ur(e.slice(2)),t]}let oa=0;const Fy=Promise.resolve(),Uy=()=>oa||(Fy.then(()=>oa=0),oa=Date.now());function By(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn($y(r,n.value),t,5,[r])};return n.value=e,n.attached=Uy(),n}function $y(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Nu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jy=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Cy(e,r,a):t==="style"?Dy(e,n,r):no(t)?dl(t)||My(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qy(e,t,r,a))?(xu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ut(r))?xu(e,ke(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pu(e,t,r,a))};function qy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Nu(t)&&ct(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nu(t)&&Ut(n)?!1:t in e}const Hy=he({patchProp:jy},Ry);let Ou;function zy(){return Ou||(Ou=Q_(Hy))}const Gy=(...e)=>{const t=zy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Wy(r);if(!s)return;const i=t._component;!ct(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ky(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Ky(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Wy(e){return Ut(e)?document.querySelector(e):e}function mo(){return typeof window>"u"||typeof document>"u"}async function Qy(e,t){return new Promise((n,r)=>{if(mo())return n();let s=document.head,i=document.createElement("script");if(i.async=!0,i.src=e,i.type=t?.type??"text/javascript",t?.defer&&(i.defer=!0),t?.nonce&&i.setAttribute("nonce",t.nonce),t?.preconnect){let a=document.createElement("link"),l=new URL(e);a.href=l.origin,a.rel="preconnect",s.appendChild(a)}s.appendChild(i),i.onload=()=>n(),i.onerror=a=>r(a)})}function ku(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}function Md(e,t){let n={...e};for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let s=t[r],i=e[r];ku(s)&&ku(i)?n[r]=Md(i,s):n[r]=s}return n}function Yy(e){if(mo())return;let t=new URL(window.location.href);t.search="";for(let[n,r]of Object.entries(e))t.searchParams.set(n,r);window.history.replaceState({},"",t.toString())}const ka="utm_";function Xy(e){let t=new URL(e),n={},r=[],s={};t.searchParams.forEach((i,a)=>{a.includes(ka)?(n[a.replace(ka,"").replace("campaign","id")]=i,r.push(a)):s[a]=i});for(let i of r)t.searchParams.delete(i);return{utmParams:n,cleanQueryParams:s,cleanUrl:t.toString()}}function Jy(e){let t=RegExp(`[?&]${ka}`);return!!e.match(t)}function Zy(e,t){let n=t.endsWith("/")?t:`${t}/`,r=e.startsWith("/")?e.substring(1):e;return`${n}${r}`}const tv={resource:{url:"https://www.googletagmanager.com/gtag/js",inject:!0},dataLayerName:"dataLayer",gtagName:"gtag",groupName:"default",initMode:"auto"};let Ma={...tv};function Me(){return Ma}function ev(e){Ma=Md(Ma,e)}function Oe(...e){let{dataLayerName:t,gtagName:n}=Me();mo()||(window[t]=window[t]||[],window[n]=function(){window[t].push(arguments)},window[n](...e))}function Ld(e){let{tagId:t,additionalAccounts:n}=Me();if(t&&(Oe("config",t,e),n))for(let r of n)Oe("config",r.tagId,e)}function Vl(e,t){Oe("consent",e,t)}function Fd(e="default"){Vl(e,{ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"granted"})}function Ud(e="default"){Vl(e,{ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"denied"})}function nv(e){Ld({custom_map:e})}function _o(e,t){let{groupName:n,additionalAccounts:r}=Me();t.send_to===void 0&&r?.length&&(t.send_to=n),Oe("event",e,t)}function rv(e,t){_o(e,t)}function sv(e){_o("exception",e)}function Bd(e){Oe("set","linker",e)}function Mu(e,t){t?window[e]=t:delete window[e]}function $d(e,t){let{tagId:n,additionalAccounts:r}=Me();if(!mo()&&(Mu(`ga-disable-${e??n}`,t),!(!r?.length||e)))for(let s of r)Mu(`ga-disable-${s.tagId}`,t)}function iv(e){$d(e,!0)}function ov(e){$d(e,void 0)}function jd(...e){Oe("set",...e)}function qd(e){let{pageTracker:t}=Me(),n;if(typeof e=="string")n={page_path:e};else if("path"in e){let r=t?.router.options.history.base??"",s=t?.useRouteFullPath?e.fullPath:e.path;n={...e.name?{page_title:e.name.toString()}:{},page_path:t?.useRouterBasePath?Zy(s,r):s}}else n=e;if(n.page_location===void 0&&(n.page_location=window.location.href),n.send_page_view===void 0&&(n.send_page_view=t?.sendPageView??!0),n.page_path!=="/"&&n.page_path?.endsWith("/")&&(n.page_path=n.page_path.slice(0,-1)),Jy(n.page_location)){let{utmParams:r,cleanUrl:s,cleanQueryParams:i}=Xy(n.page_location);n.page_location=s,Yy(i),jd("campaign",r)}Oe("event","page_view",n)}function Hd(e){let{appName:t}=Me(),n={};typeof e=="string"?n.screen_name=e:"path"in e?n.screen_name=e.name??e.path:n=e,t&&n?.app_name===void 0&&(n.app_name=t),Oe("event","screen_view",n)}function av(e){_o("timing_complete",e)}function Lu(e={}){return{send_page_view:!1,anonymize_ip:!0,...e}}function lv(){let{tagId:e,config:t,groupName:n,linker:r,additionalAccounts:s,hooks:i,consentMode:a}=Me();if(e){if(i?.["config:init:before"]?.(),a==="granted"?Fd():a==="denied"&&Ud(),r&&Bd(r),Oe("js",new Date),Oe("config",e,Lu(t)),s)for(let l of s)Oe("config",l.tagId,Lu({groups:n,...l.config}));i?.["config:init:after"]?.()}}function cv(e){let{pageTracker:t}=Me();return t?.exclude?typeof t.exclude=="function"?t.exclude(e):t.exclude?.some(({name:n,path:r}={})=>n&&n===e.name||r&&r===e.path):!1}function Fu(e){let{pageTracker:t,hooks:n}=Me();if(cv(e))return;n?.["router:track:before"]?.(e);let r;if(t?.template&&(r=typeof t.template=="function"?t.template(e):t.template),t?.useScreenview){let s=r&&"screen_name"in r?r:e;Hd(s)}else{let s=r&&"page_path"in r?r:e;qd(s)}n?.["router:track:after"]?.(e)}async function uv(){let{pageTracker:e}=Me();if(!e?.router)return;let{router:t}=e;await t.isReady(),Fu(t.currentRoute.value),t.afterEach((n,r)=>{n.path!==r.path&&Fu(n)})}async function hv(){let{resource:e,dataLayerName:t,tagId:n,pageTracker:r,hooks:s}=Me();if(n&&(lv(),r?.router&&uv(),e.inject))try{await Qy(`${e.url}?id=${n}&l=${t}`,{preconnect:e.preconnect,defer:e.defer,nonce:e.nonce}),s?.["script:loaded"]?.()}catch(i){s?.["script:error"]?.(i)}}function fv(){let{initMode:e}=Me();e!=="manual"&&hv()}function dv(e){ev(e),fv()}const pv={config:Ld,consent:Vl,consentDeniedAll:Ud,consentGrantedAll:Fd,customMap:nv,ecommerce:rv,event:_o,exception:sv,linker:Bd,optIn:ov,optOut:iv,pageview:qd,screenview:Hd,set:jd,time:av,query:Oe};function gv(e){return dv(e),t=>{t.config.globalProperties.$gtag=pv}}const mv="/favicon.svg",zd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},_v={},yv={class:"bg-green-50 shadow-md"},vv={class:"container mx-auto px-4 py-4"},Ev={class:"flex flex-col md:flex-row justify-between items-center"},wv={class:"flex flex-wrap justify-center md:justify-end gap-6"};function Tv(e,t){const n=Rl("RouterLink");return ie(),xe("header",yv,[vt("div",vv,[vt("div",Ev,[t[5]||(t[5]=vt("a",{class:"flex items-center mb-4 md:mb-0",href:"/"},[vt("div",{class:"text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3"},[vt("img",{src:mv,alt:"FloppY",width:"48",height:"48"})]),vt("h1",{class:"xs:text-base 2xl:text-2xl font-bold text-green-dark"}," Скачати безкоштовний софт ")],-1)),vt("nav",wv,[kt(n,{to:"/internet",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[0]||(t[0]=[Ve("Інтернет",-1)])),_:1,__:[0]}),kt(n,{to:"/media",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[1]||(t[1]=[Ve("Медіа",-1)])),_:1,__:[1]}),kt(n,{to:"/files",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[2]||(t[2]=[Ve("Файли",-1)])),_:1,__:[2]}),kt(n,{to:"/system",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[3]||(t[3]=[Ve("Система",-1)])),_:1,__:[3]}),kt(n,{to:"/development",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[4]||(t[4]=[Ve("Розробка",-1)])),_:1,__:[4]})])])]),(ie(),go(N_("script"),null,{default:un(()=>t[6]||(t[6]=[Ve(` // Add smooth scrolling for navigation links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); }); // Add hover effects to software cards document.querySelectorAll('.bg-green-50').forEach(card => { card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-2px)'; this.style.transition = 'transform 0.2s ease'; }); card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; }); }); `,-1)])),_:1,__:[6]}))])}const Iv=zd(_v,[["render",Tv]]),Av={},bv={class:"bg-green-50 mt-12"},Rv={class:"container mx-auto px-4 py-8"},Sv={class:"text-center"};function Cv(e,t){const n=Rl("RouterLink");return ie(),xe("footer",bv,[vt("div",Rv,[vt("div",Sv,[t[2]||(t[2]=vt("p",{class:"text-gray-600 mb-4"},[Ve(" © 2025 "),vt("b",null,[vt("a",{href:"/"},"Floppy")]),Ve(" - скачати безкоштовний софт. Український каталог безкоштовних програм."),vt("br"),Ve(" Всі права на програми належать їхнім розробникам. ")],-1)),kt(n,{to:"/contact",class:"text-green-600 hover:text-green-700 transition-colors mr-16"},{default:un(()=>t[0]||(t[0]=[Ve(" Зв'язатись з адміном ",-1)])),_:1,__:[0]}),kt(n,{to:"/faq",class:"text-green-600 hover:text-green-700 transition-colors"},{default:un(()=>t[1]||(t[1]=[Ve(" FAQ ",-1)])),_:1,__:[1]})])])])}const Pv=zd(Av,[["render",Cv]]),xv={class:"container mx-auto px-4 py-8"},Vv={__name:"Floppy",setup(e){return(t,n)=>{const r=Rl("router-view");return ie(),xe(Ue,null,[kt(Iv),vt("main",xv,[(ie(),go(r,{key:t.$route.fullPath}))]),kt(Pv)],64)}}},Dv="modulepreload",Nv=function(e){return"/"+e},Uu={},aa=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(n.map(h=>{if(h=Nv(h),h in Uu)return;Uu[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Dv,d||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((w,x)=>{m.addEventListener("load",w),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Tr=typeof document<"u";function Gd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ov(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gd(e.default)}const It=Object.assign;function la(e,t){const n={};for(const r in t){const s=t[r];n[r]=qe(s)?s.map(e):e(s)}return n}const Rs=()=>{},qe=Array.isArray,Kd=/#/g,kv=/&/g,Mv=/\//g,Lv=/=/g,Fv=/\?/g,Wd=/\+/g,Uv=/%5B/g,Bv=/%5D/g,Qd=/%5E/g,$v=/%60/g,Yd=/%7B/g,jv=/%7C/g,Xd=/%7D/g,qv=/%20/g;function Dl(e){return encodeURI(""+e).replace(jv,"|").replace(Uv,"[").replace(Bv,"]")}function Hv(e){return Dl(e).replace(Yd,"{").replace(Xd,"}").replace(Qd,"^")}function La(e){return Dl(e).replace(Wd,"%2B").replace(qv,"+").replace(Kd,"%23").replace(kv,"%26").replace($v,"`").replace(Yd,"{").replace(Xd,"}").replace(Qd,"^")}function zv(e){return La(e).replace(Lv,"%3D")}function Gv(e){return Dl(e).replace(Kd,"%23").replace(Fv,"%3F")}function Kv(e){return e==null?"":Gv(e).replace(Mv,"%2F")}function Us(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Wv=/\/$/,Qv=e=>e.replace(Wv,"");function ca(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Zv(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Us(a)}}function Yv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Bu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Xv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fr(t.matched[r],n.matched[s])&&Jd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jv(e[n],t[n]))return!1;return!0}function Jv(e,t){return qe(e)?$u(e,t):qe(t)?$u(t,e):e===t}function $u(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bs;(function(e){e.pop="pop",e.push="push"})(Bs||(Bs={}));var Ss;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ss||(Ss={}));function tE(e){if(!e)if(Tr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qv(e)}const eE=/^[^#]+#/;function nE(e,t){return e.replace(eE,"#")+t}function rE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const yo=()=>({left:window.scrollX,top:window.scrollY});function sE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=rE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ju(e,t){return(history.state?history.state.position-t:-1)+e}const Fa=new Map;function iE(e,t){Fa.set(e,t)}function oE(e){const t=Fa.get(e);return Fa.delete(e),t}let aE=()=>location.protocol+"//"+location.host;function Zd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Bu(c,"")}return Bu(n,e)+r+s}function lE(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const w=Zd(e,location),x=n.value,k=t.value;let L=0;if(m){if(n.value=w,t.value=m,a&&a===x){a=null;return}L=k?m.position-k.position:0}else r(w);s.forEach(G=>{G(n.value,x,{delta:L,type:Bs.pop,direction:L?L>0?Ss.forward:Ss.back:Ss.unknown})})};function c(){a=n.value}function h(m){s.push(m);const w=()=>{const x=s.indexOf(m);x>-1&&s.splice(x,1)};return i.push(w),w}function d(){const{history:m}=window;m.state&&m.replaceState(It({},m.state,{scroll:yo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function qu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?yo():null}}function cE(e){const{history:t,location:n}=window,r={value:Zd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:aE()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(w){console.error(w),n[d?"replace":"assign"](m)}}function a(c,h){const d=It({},t.state,qu(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=It({},s.value,t.state,{forward:c,scroll:yo()});i(d.current,d,!0);const p=It({},qu(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function uE(e){e=tE(e);const t=cE(e),n=lE(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=It({location:"",base:e,go:r,createHref:nE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function hE(e){return typeof e=="string"||e&&typeof e=="object"}function tp(e){return typeof e=="string"||typeof e=="symbol"}const ep=Symbol("");var Hu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hu||(Hu={}));function Ur(e,t){return It(new Error,{type:e,[ep]:!0},t)}function ln(e,t){return e instanceof Error&&ep in e&&(t==null||!!(e.type&t))}const zu="[^/]+?",fE={sensitive:!1,strict:!1,start:!0,end:!0},dE=/[.+*?^${}()[\]/\\]/g;function pE(e,t){const n=It({},fE,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let w=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(dE,"\\$&"),w+=40;else if(m.type===1){const{value:x,repeatable:k,optional:L,regexp:G}=m;i.push({name:x,repeatable:k,optional:L});const B=G||zu;if(B!==zu){w+=10;try{new RegExp(`(${B})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+K.message)}}let j=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(j=L&&h.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,w+=20,L&&(w+=-8),k&&(w+=-20),B===".*"&&(w+=-50)}d.push(w)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const w=d[m]||"",x=i[m-1];p[x.name]=w&&x.repeatable?w.split("/"):w}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const w of m)if(w.type===0)d+=w.value;else if(w.type===1){const{value:x,repeatable:k,optional:L}=w,G=x in h?h[x]:"";if(qe(G)&&!k)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=qe(G)?G.join("/"):G;if(!B)if(L)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=B}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function gE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function np(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=gE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Gu(r))return 1;if(Gu(s))return-1}return s.length-r.length}function Gu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mE={type:0,value:""},_E=/[a-zA-Z0-9_]/;function yE(e){if(!e)return[[]];if(e==="/")return[[mE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:_E.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function vE(e,t,n){const r=pE(yE(e.path),n),s=It(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function EE(e,t){const n=[],r=new Map;t=Yu({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,m,w){const x=!w,k=Wu(p);k.aliasOf=w&&w.record;const L=Yu(t,p),G=[k];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const ut of K)G.push(Wu(It({},k,{components:w?w.record.components:k.components,path:ut,aliasOf:w?w.record:k})))}let B,j;for(const K of G){const{path:ut}=K;if(m&&ut[0]!=="/"){const dt=m.record.path,I=dt[dt.length-1]==="/"?"":"/";K.path=m.record.path+(ut&&I+ut)}if(B=vE(K,m,L),w?w.alias.push(B):(j=j||B,j!==B&&j.alias.push(B),x&&p.name&&!Qu(B)&&a(p.name)),rp(B)&&c(B),k.children){const dt=k.children;for(let I=0;I<dt.length;I++)i(dt[I],B,w&&w.children[I])}w=w||B}return j?()=>{a(j)}:Rs}function a(p){if(tp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=IE(p,n);n.splice(m,0,p),p.record.name&&!Qu(p)&&r.set(p.record.name,p)}function h(p,m){let w,x={},k,L;if("name"in p&&p.name){if(w=r.get(p.name),!w)throw Ur(1,{location:p});L=w.record.name,x=It(Ku(m.params,w.keys.filter(j=>!j.optional).concat(w.parent?w.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Ku(p.params,w.keys.map(j=>j.name))),k=w.stringify(x)}else if(p.path!=null)k=p.path,w=n.find(j=>j.re.test(k)),w&&(x=w.parse(k),L=w.record.name);else{if(w=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!w)throw Ur(1,{location:p,currentLocation:m});L=w.record.name,x=It({},m.params,p.params),k=w.stringify(x)}const G=[];let B=w;for(;B;)G.unshift(B.record),B=B.parent;return{name:L,path:k,params:x,matched:G,meta:TE(G)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Ku(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wu(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:wE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function TE(e){return e.reduce((t,n)=>It(t,n.meta),{})}function Yu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function IE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;np(e,t[i])<0?r=i:n=i+1}const s=AE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function AE(e){let t=e;for(;t=t.parent;)if(rp(t)&&np(e,t)===0)return t}function rp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function bE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wd," "),a=i.indexOf("="),l=Us(a<0?i:i.slice(0,a)),c=a<0?null:Us(i.slice(a+1));if(l in t){let h=t[l];qe(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Xu(e){let t="";for(let n in e){const r=e[n];if(n=zv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&La(i)):[r&&La(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function RE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const SE=Symbol(""),Ju=Symbol(""),Nl=Symbol(""),sp=Symbol(""),Ua=Symbol("");function ps(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Sn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Ur(4,{from:n,to:t})):m instanceof Error?c(m):hE(m)?c(Ur(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function ua(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Gd(c)){const d=(c.__vccOpts||c)[t];d&&i.push(Sn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Ov(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const w=(p.__vccOpts||p)[t];return w&&Sn(w,n,r,a,l,s)()}))}}return i}function Zu(e){const t=fn(Nl),n=fn(sp),r=Be(()=>{const c=sr(e.to);return t.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Fr.bind(null,d));if(m>-1)return m;const w=th(c[h-2]);return h>1&&th(d)===w&&p[p.length-1].path!==w?p.findIndex(Fr.bind(null,c[h-2])):m}),i=Be(()=>s.value>-1&&DE(n.params,r.value.params)),a=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Jd(n.params,r.value.params));function l(c={}){if(VE(c)){const h=t[sr(e.replace)?"replace":"push"](sr(e.to)).catch(Rs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function CE(e){return e.length===1?e[0]:e}const PE=id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zu,setup(e,{slots:t}){const n=co(Zu(e)),{options:r}=fn(Nl),s=Be(()=>({[eh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&CE(t.default(n));return e.custom?i:Od("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xE=PE;function VE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function DE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function th(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const eh=(e,t,n)=>e??t??n,NE=id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=fn(Ua),s=Be(()=>e.route||r.value),i=fn(Ju,0),a=Be(()=>{let h=sr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Be(()=>s.value.matched[a.value]);Si(Ju,Be(()=>a.value+1)),Si(SE,l),Si(Ua,s);const c=Ri();return Ci(()=>[c.value,l.value,e.name],([h,d,p],[m,w,x])=>{d&&(d.instances[p]=h,w&&w!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=w.leaveGuards),d.updateGuards.size||(d.updateGuards=w.updateGuards))),h&&d&&(!w||!Fr(d,w)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return nh(n.default,{Component:m,route:h});const w=p.props[d],x=w?w===!0?h.params:typeof w=="function"?w(h):w:null,L=Od(m,It({},x,t,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return nh(n.default,{Component:L,route:h})||L}}});function nh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const OE=NE;function kE(e){const t=EE(e.routes,e),n=e.parseQuery||bE,r=e.stringifyQuery||Xu,s=e.history,i=ps(),a=ps(),l=ps(),c=c_(An);let h=An;Tr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=la.bind(null,V=>""+V),p=la.bind(null,Kv),m=la.bind(null,Us);function w(V,Y){let Q,Z;return tp(V)?(Q=t.getRecordMatcher(V),Z=Y):Z=V,t.addRoute(Z,Q)}function x(V){const Y=t.getRecordMatcher(V);Y&&t.removeRoute(Y)}function k(){return t.getRoutes().map(V=>V.record)}function L(V){return!!t.getRecordMatcher(V)}function G(V,Y){if(Y=It({},Y||c.value),typeof V=="string"){const R=ca(n,V,Y.path),D=t.resolve({path:R.path},Y),M=s.createHref(R.fullPath);return It(R,D,{params:m(D.params),hash:Us(R.hash),redirectedFrom:void 0,href:M})}let Q;if(V.path!=null)Q=It({},V,{path:ca(n,V.path,Y.path).path});else{const R=It({},V.params);for(const D in R)R[D]==null&&delete R[D];Q=It({},V,{params:p(R)}),Y.params=p(Y.params)}const Z=t.resolve(Q,Y),wt=V.hash||"";Z.params=d(m(Z.params));const _=Yv(r,It({},V,{hash:Hv(wt),path:Z.path})),v=s.createHref(_);return It({fullPath:_,hash:wt,query:r===Xu?RE(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:v})}function B(V){return typeof V=="string"?ca(n,V,c.value.path):It({},V)}function j(V,Y){if(h!==V)return Ur(8,{from:Y,to:V})}function K(V){return I(V)}function ut(V){return K(It(B(V),{replace:!0}))}function dt(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(V):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),It({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function I(V,Y){const Q=h=G(V),Z=c.value,wt=V.state,_=V.force,v=V.replace===!0,R=dt(Q);if(R)return I(It(B(R),{state:typeof R=="object"?It({},wt,R.state):wt,force:_,replace:v}),Y||Q);const D=Q;D.redirectedFrom=Y;let M;return!_&&Xv(r,Z,Q)&&(M=Ur(16,{to:D,from:Z}),Se(Z,Z,!0,!1)),(M?Promise.resolve(M):A(D,Z)).catch(N=>ln(N)?ln(N,2)?N:Le(N):ht(N,D,Z)).then(N=>{if(N){if(ln(N,2))return I(It({replace:v},B(N.to),{state:typeof N.to=="object"?It({},wt,N.to.state):wt,force:_}),Y||D)}else N=S(D,Z,!0,v,wt);return b(D,Z,N),N})}function y(V,Y){const Q=j(V,Y);return Q?Promise.reject(Q):Promise.resolve()}function T(V){const Y=vn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let Q;const[Z,wt,_]=ME(V,Y);Q=ua(Z.reverse(),"beforeRouteLeave",V,Y);for(const R of Z)R.leaveGuards.forEach(D=>{Q.push(Sn(D,V,Y))});const v=y.bind(null,V,Y);return Q.push(v),_e(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Sn(R,V,Y));return Q.push(v),_e(Q)}).then(()=>{Q=ua(wt,"beforeRouteUpdate",V,Y);for(const R of wt)R.updateGuards.forEach(D=>{Q.push(Sn(D,V,Y))});return Q.push(v),_e(Q)}).then(()=>{Q=[];for(const R of _)if(R.beforeEnter)if(qe(R.beforeEnter))for(const D of R.beforeEnter)Q.push(Sn(D,V,Y));else Q.push(Sn(R.beforeEnter,V,Y));return Q.push(v),_e(Q)}).then(()=>(V.matched.forEach(R=>R.enterCallbacks={}),Q=ua(_,"beforeRouteEnter",V,Y,T),Q.push(v),_e(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Sn(R,V,Y));return Q.push(v),_e(Q)}).catch(R=>ln(R,8)?R:Promise.reject(R))}function b(V,Y,Q){l.list().forEach(Z=>T(()=>Z(V,Y,Q)))}function S(V,Y,Q,Z,wt){const _=j(V,Y);if(_)return _;const v=Y===An,R=Tr?history.state:{};Q&&(Z||v?s.replace(V.fullPath,It({scroll:v&&R&&R.scroll},wt)):s.push(V.fullPath,wt)),c.value=V,Se(V,Y,Q,v),Le()}let E;function fe(){E||(E=s.listen((V,Y,Q)=>{if(!ze.listening)return;const Z=G(V),wt=dt(Z);if(wt){I(It(wt,{replace:!0,force:!0}),Z).catch(Rs);return}h=Z;const _=c.value;Tr&&iE(ju(_.fullPath,Q.delta),yo()),A(Z,_).catch(v=>ln(v,12)?v:ln(v,2)?(I(It(B(v.to),{force:!0}),Z).then(R=>{ln(R,20)&&!Q.delta&&Q.type===Bs.pop&&s.go(-1,!1)}).catch(Rs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ht(v,Z,_))).then(v=>{v=v||S(Z,_,!1),v&&(Q.delta&&!ln(v,8)?s.go(-Q.delta,!1):Q.type===Bs.pop&&ln(v,20)&&s.go(-1,!1)),b(Z,_,v)}).catch(Rs)}))}let Re=ps(),$t=ps(),pt;function ht(V,Y,Q){Le(V);const Z=$t.list();return Z.length?Z.forEach(wt=>wt(V,Y,Q)):console.error(V),Promise.reject(V)}function we(){return pt&&c.value!==An?Promise.resolve():new Promise((V,Y)=>{Re.add([V,Y])})}function Le(V){return pt||(pt=!V,fe(),Re.list().forEach(([Y,Q])=>V?Q(V):Y()),Re.reset()),V}function Se(V,Y,Q,Z){const{scrollBehavior:wt}=e;if(!Tr||!wt)return Promise.resolve();const _=!Q&&oE(ju(V.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return td().then(()=>wt(V,Y,_)).then(v=>v&&sE(v)).catch(v=>ht(v,V,Y))}const Nt=V=>s.go(V);let Ot;const vn=new Set,ze={currentRoute:c,listening:!0,addRoute:w,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:k,resolve:G,options:e,push:K,replace:ut,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$t.add,isReady:we,install(V){const Y=this;V.component("RouterLink",xE),V.component("RouterView",OE),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>sr(c)}),Tr&&!Ot&&c.value===An&&(Ot=!0,K(s.location).catch(wt=>{}));const Q={};for(const wt in An)Object.defineProperty(Q,wt,{get:()=>c.value[wt],enumerable:!0});V.provide(Nl,Y),V.provide(sp,Qf(Q)),V.provide(Ua,c);const Z=V.unmount;vn.add(V),V.unmount=function(){vn.delete(V),vn.size<1&&(h=An,E&&E(),E=null,c.value=An,Ot=!1,pt=!1),Z()}}};function _e(V){return V.reduce((Y,Q)=>Y.then(()=>T(Q)),Promise.resolve())}return ze}function ME(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Fr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Fr(h,c))||s.push(c))}return[n,r,s]}const LE=()=>{};var rh={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ip=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},FE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ip(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):FE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new UE;const m=i<<2|l>>4;if(r.push(m),h!==64){const w=l<<4&240|h>>2;if(r.push(w),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class UE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(e){const t=ip(e);return op.encodeByteArray(t,!0)},Hi=function(e){return BE(e).replace(/\./g,"")},$E=function(e){try{return op.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const qE=()=>jE().__FIREBASE_DEFAULTS__,HE=()=>{if(typeof process>"u"||typeof rh>"u")return;const e=rh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$E(e[1]);return t&&JSON.parse(t)},Ol=()=>{try{return LE()||qE()||HE()||zE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},GE=e=>Ol()?.emulatorHosts?.[e],KE=e=>{const t=GE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ap=()=>Ol()?.config;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function kl(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function QE(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function YE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Hi(JSON.stringify(n)),Hi(JSON.stringify(a)),""].join(".")}const Cs={};function XE(){const e={prod:[],emulator:[]};for(const t of Object.keys(Cs))Cs[t]?e.emulator.push(t):e.prod.push(t);return e}function JE(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let sh=!1;function ZE(e,t){if(typeof window>"u"||typeof document>"u"||!kl(window.location.host)||Cs[e]===t||Cs[e]||sh)return;Cs[e]=t;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=XE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{sh=!0,a()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=JE(r),w=n("text"),x=document.getElementById(w)||document.createElement("span"),k=n("learnmore"),L=document.getElementById(k)||document.createElement("a"),G=n("preprendIcon"),B=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),d(L,k);const K=h();c(B,G),j.append(B,x,L,K),document.body.appendChild(j)}i?(x.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function tw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ew(){const e=Ol()?.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function rw(){return!ew()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lp(){try{return typeof indexedDB=="object"}catch{return!1}}function cp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function sw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const iw="FirebaseError";class zn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=iw,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?ow(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new zn(s,l,r)}}function ow(e,t){return e.replace(aw,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const aw=/\{\$([^}]+)}/g;function $s(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(ih(i)&&ih(a)){if(!$s(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ih(e){return e!==null&&typeof e=="object"}/**
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
 */const lw=1e3,cw=2,uw=14400*1e3,hw=.5;function oh(e,t=lw,n=cw){const r=t*Math.pow(n,e),s=Math.round(hw*r*(Math.random()-.5)*2);return Math.min(uw,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Br(e){return e&&e._delegate?e._delegate:e}class gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class fw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new WE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pw(t))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zn){return this.instances.has(t)}getOptions(t=Zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zn){return this.component?this.component.multipleInstances?t:Zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(e){return e===Zn?void 0:e}function pw(e){return e.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var _t;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_t||(_t={}));const mw={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},_w=_t.INFO,yw={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},vw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=yw[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ml{constructor(t){this.name=t,this._logLevel=_w,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const Ew=(e,t)=>t.some(n=>e instanceof n);let ah,lh;function ww(){return ah||(ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tw(){return lh||(lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,Ba=new WeakMap,hp=new WeakMap,ha=new WeakMap,Ll=new WeakMap;function Iw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Dn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&up.set(n,e)}).catch(()=>{}),Ll.set(t,e),t}function Aw(e){if(Ba.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ba.set(e,t)}let $a={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ba.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bw(e){$a=e($a)}function Rw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fa(this),t,...n);return hp.set(r,t.sort?t.sort():[t]),Dn(r)}:Tw().includes(e)?function(...t){return e.apply(fa(this),t),Dn(up.get(this))}:function(...t){return Dn(e.apply(fa(this),t))}}function Sw(e){return typeof e=="function"?Rw(e):(e instanceof IDBTransaction&&Aw(e),Ew(e,ww())?new Proxy(e,$a):e)}function Dn(e){if(e instanceof IDBRequest)return Iw(e);if(ha.has(e))return ha.get(e);const t=Sw(e);return t!==e&&(ha.set(e,t),Ll.set(t,e)),t}const fa=e=>Ll.get(e);function fp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=Dn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Dn(a.result),c.oldVersion,c.newVersion,Dn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Cw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],da=new Map;function ch(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(da.get(t))return da.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return da.set(t,i),i}bw(e=>({...e,get:(t,n,r)=>ch(t,n)||e.get(t,n,r),has:(t,n)=>!!ch(t,n)||e.has(t,n)}));/**
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
 */class xw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(e){return e.getComponent()?.type==="VERSION"}const ja="@firebase/app",uh="0.14.1";/**
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
 */const mn=new Ml("@firebase/app"),Dw="@firebase/app-compat",Nw="@firebase/analytics-compat",Ow="@firebase/analytics",kw="@firebase/app-check-compat",Mw="@firebase/app-check",Lw="@firebase/auth",Fw="@firebase/auth-compat",Uw="@firebase/database",Bw="@firebase/data-connect",$w="@firebase/database-compat",jw="@firebase/functions",qw="@firebase/functions-compat",Hw="@firebase/installations",zw="@firebase/installations-compat",Gw="@firebase/messaging",Kw="@firebase/messaging-compat",Ww="@firebase/performance",Qw="@firebase/performance-compat",Yw="@firebase/remote-config",Xw="@firebase/remote-config-compat",Jw="@firebase/storage",Zw="@firebase/storage-compat",tT="@firebase/firestore",eT="@firebase/ai",nT="@firebase/firestore-compat",rT="firebase",sT="12.1.0";/**
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
 */const qa="[DEFAULT]",iT={[ja]:"fire-core",[Dw]:"fire-core-compat",[Ow]:"fire-analytics",[Nw]:"fire-analytics-compat",[Mw]:"fire-app-check",[kw]:"fire-app-check-compat",[Lw]:"fire-auth",[Fw]:"fire-auth-compat",[Uw]:"fire-rtdb",[Bw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[jw]:"fire-fn",[qw]:"fire-fn-compat",[Hw]:"fire-iid",[zw]:"fire-iid-compat",[Gw]:"fire-fcm",[Kw]:"fire-fcm-compat",[Ww]:"fire-perf",[Qw]:"fire-perf-compat",[Yw]:"fire-rc",[Xw]:"fire-rc-compat",[Jw]:"fire-gcs",[Zw]:"fire-gcs-compat",[tT]:"fire-fst",[nT]:"fire-fst-compat",[eT]:"fire-vertex","fire-js":"fire-js",[rT]:"fire-js-all"};/**
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
 */const zi=new Map,oT=new Map,Ha=new Map;function hh(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ln(e){const t=e.name;if(Ha.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;Ha.set(t,e);for(const n of zi.values())hh(n,e);for(const n of oT.values())hh(n,e);return!0}function Ys(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function aT(e){return e==null?!1:e.settings!==void 0}/**
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
 */const lT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new vo("app","Firebase",lT);/**
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
 */class cT{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const uT=sT;function dp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:qa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(n||(n=ap()),!n)throw Nn.create("no-options");const i=zi.get(s);if(i){if($s(n,i.options)&&$s(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new gw(s);for(const c of Ha.values())a.addComponent(c);const l=new cT(n,r,a);return zi.set(s,l),l}function pp(e=qa){const t=zi.get(e);if(!t&&e===qa&&ap())return dp();if(!t)throw Nn.create("no-app",{appName:e});return t}function Je(e,t,n){let r=iT[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Ln(new gn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const hT="firebase-heartbeat-database",fT=1,js="firebase-heartbeat-store";let pa=null;function gp(){return pa||(pa=fp(hT,fT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nn.create("idb-open",{originalErrorMessage:e.message})})),pa}async function dT(e){try{const n=(await gp()).transaction(js),r=await n.objectStore(js).get(mp(e));return await n.done,r}catch(t){if(t instanceof zn)mn.warn(t.message);else{const n=Nn.create("idb-get",{originalErrorMessage:t?.message});mn.warn(n.message)}}}async function fh(e,t){try{const r=(await gp()).transaction(js,"readwrite");await r.objectStore(js).put(t,mp(e)),await r.done}catch(n){if(n instanceof zn)mn.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n?.message});mn.warn(r.message)}}}function mp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pT=1024,gT=30;class mT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>gT){const s=vT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){mn.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dh(),{heartbeatsToSend:n,unsentEntries:r}=_T(this._heartbeatsCache.heartbeats),s=Hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return mn.warn(t),""}}}function dh(){return new Date().toISOString().substring(0,10)}function _T(e,t=pT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ph(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ph(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lp()?cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return fh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return fh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ph(e){return Hi(JSON.stringify({version:2,heartbeats:e})).length}function vT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function ET(e){Ln(new gn("platform-logger",t=>new xw(t),"PRIVATE")),Ln(new gn("heartbeat",t=>new mT(t),"PRIVATE")),Je(ja,uh,e),Je(ja,uh,"esm2020"),Je("fire-js","")}ET("");var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,_p;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,S){for(var E=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)E[fe-2]=arguments[fe];return y.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var S=I.g[3],E=y+(S^T&(b^S))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=S+(b^y&(T^b))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(T^S&(y^T))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(y^b&(S^y))+A[3]+3250441966&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(S^T&(b^S))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(b^y&(T^b))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(T^S&(y^T))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(y^b&(S^y))+A[7]+4249261313&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(S^T&(b^S))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(b^y&(T^b))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(T^S&(y^T))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(y^b&(S^y))+A[11]+2304563134&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(S^T&(b^S))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(b^y&(T^b))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=b+(T^S&(y^T))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(y^b&(S^y))+A[15]+1236535329&4294967295,T=b+(E<<22&4294967295|E>>>10),E=y+(b^S&(T^b))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(y^T))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(S^y))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(b^S))+A[0]+3921069994&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(T^b))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(y^T))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(S^y))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(b^S))+A[4]+3889429448&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(T^b))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(y^T))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(S^y))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(b^S))+A[8]+1163531501&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(b^S&(T^b))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(y^T))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=b+(y^T&(S^y))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(b^S))+A[12]+2368359562&4294967295,T=b+(E<<20&4294967295|E>>>12),E=y+(T^b^S)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^b)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^T)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^y)+A[14]+4259657740&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^S)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^b)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^T)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^y)+A[10]+3200236656&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^S)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^b)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^T)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^y)+A[6]+76029189&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(T^b^S)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^b)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=b+(S^y^T)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^y)+A[2]+3299628645&4294967295,T=b+(E<<23&4294967295|E>>>9),E=y+(b^(T|~S))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~b))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~T))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~y))+A[5]+4237533241&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~S))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~b))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~T))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~y))+A[1]+2240044497&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~S))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~b))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~T))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~y))+A[13]+1309151649&4294967295,T=b+(E<<21&4294967295|E>>>11),E=y+(b^(T|~S))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~b))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=b+(y^(S|~T))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=T;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==y||(T[b]=S,A=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new a(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return L(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=c(0),m=c(1),w=c(16777216);e=a.prototype,e.m=function(){if(k(this))return-L(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(k(this))return"-"+L(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var b=K(T,y).g;T=G(T,b.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,x(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}e.l=function(I){return I=G(this,I),k(I)?-1:x(I)?0:1};function L(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new a(T,~I.h).add(m)}e.abs=function(){return k(this)?L(this):this},e.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,T[b]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function G(I,y){return I.add(L(y))}e.j=function(I){if(x(this)||x(I))return p;if(k(this))return k(I)?L(this).j(L(I)):L(L(this).j(I));if(k(I))return L(this.j(L(I)));if(0>this.l(w)&&0>I.l(w))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,fe=I.i(b)>>>16,Re=I.i(b)&65535;T[2*A+2*b]+=E*Re,B(T,2*A+2*b),T[2*A+2*b+1]+=S*Re,B(T,2*A+2*b+1),T[2*A+2*b+1]+=E*fe,B(T,2*A+2*b+1),T[2*A+2*b+2]+=S*fe,B(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function B(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function j(I,y){this.g=I,this.h=y}function K(I,y){if(x(y))throw Error("division by zero");if(x(I))return new j(p,p);if(k(I))return y=K(L(I),y),new j(L(y.g),L(y.h));if(k(y))return y=K(I,L(y)),new j(L(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(I);)T=ut(T),A=ut(A);var b=dt(T,1),S=dt(A,1);for(A=dt(A,2),T=dt(T,2);!x(A);){var E=S.add(A);0>=E.l(I)&&(b=b.add(T),S=E),A=dt(A,1),T=dt(T,1)}return y=G(I,b.j(y)),new j(b,y)}for(b=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),E=S.j(y);k(E)||0<E.l(I);)T-=A,S=h(T),E=S.j(y);x(S)&&(S=m),b=b.add(S),I=G(I,E)}return new j(b,I)}e.A=function(I){return K(this,I).h},e.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},e.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},e.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function ut(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function dt(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,b=[],S=0;S<A;S++)b[S]=0<y?I.i(S+T)>>>y|I.i(S+T+1)<<32-y:I.i(S+T);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_p=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,On=a}).apply(typeof gh<"u"?gh:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yp,ms,vp,Di,za,Ep,wp,Tp;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function x(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var H=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)H[Rt-2]=arguments[Rt];return u.prototype[C].apply(g,H)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let H=0;H<P;H++)o[C+H]=g[H]}else o.push(g)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ut=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function dt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<T.length;P++)f=T[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=we;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class fe{constructor(){this.h=this.g=null}add(u,f){const g=Re.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Re=new G(()=>new $t,o=>o.reset());class $t{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,ht=!1,we=new fe,Le=()=>{const o=l.Promise.resolve(void 0);pt=()=>{o.then(Se)}};var Se=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Re;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ht=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ot(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var vn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o})();function ze(o,u){if(Ot.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ut){t:{try{K(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_e[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ze.aa.h.call(this)}}x(ze,Ot);var _e={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wt(o){this.src=o,this.g={},this.h=0}wt.prototype.add=function(o,u,f,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var H=v(o,u,g,C);return-1<H?(u=o[H],f||(u.fa=!1)):(u=new Q(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function _(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Z(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function v(o,u,f,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function M(o,u,f,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(o,u[P],f,g,C);return null}return f=st(f),o&&o[V]?o.K(u,f,h(g)?!!g.capture:!1,C):N(o,u,f,!1,g,C)}function N(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");var H=h(C)?!!C.capture:!!C,Rt=z(o);if(Rt||(o[R]=Rt=new wt(o)),f=Rt.add(u,f,g,H,P),f.proxy)return f;if(g=W(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)vn||(C=H),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=et;return o}function q(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)q(o,u[P],f,g,C);else g=h(g)?!!g.capture:!!g,f=st(f),o&&o[V]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=v(P,f,g,C),-1<f&&(Z(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=z(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,f,g,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[V])_(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=z(u))?(_(f,o),f.h==0&&(f.src=null,u[R]=null)):Z(o)}}}function F(o){return o in D?D[o]:D[o]="on"+o}function et(o,u){if(o.da)o=!0;else{u=new ze(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function z(o){return o=o[R],o instanceof wt?o:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function st(o){return typeof o=="function"?o:(o[tt]||(o[tt]=function(u){return o.handleEvent(u)}),o[tt])}function nt(){Nt.call(this),this.i=new wt(this),this.M=this,this.F=null}x(nt,Nt),nt.prototype[V]=!0,nt.prototype.removeEventListener=function(o,u,f,g){q(this,o,u,f,g)};function lt(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ot(u,o);else if(u instanceof Ot)u.target=u.target||o;else{var C=u;u=new Ot(g,o),A(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var H=u.g=f[P];C=gt(H,g,!0,u)&&C}if(H=u.g=o,C=gt(H,g,!0,u)&&C,C=gt(H,g,!1,u)&&C,f)for(P=0;P<f.length;P++)H=u.g=f[P],C=gt(H,g,!1,u)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Z(f[g]);delete o.g[u],o.h--}}this.F=null},nt.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},nt.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function gt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var H=u[P];if(H&&!H.da&&H.capture==f){var Rt=H.listener,Yt=H.ha||H.src;H.fa&&_(o.i,H),C=Rt.call(Yt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Kt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Wt(o){o.g=Kt(()=>{o.g=null,o.i&&(o.i=!1,Wt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ce extends Nt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(o){Nt.call(this),this.h=o,this.g={}}x(te,Nt);var En=[];function Zr(o){dt(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}te.prototype.N=function(){te.aa.N.call(this),Zr(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=l.JSON.stringify,Pe=l.JSON.parse,ei=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function dr(){}dr.prototype.h=null;function mc(o){return o.h||(o.h=o.i())}function _c(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lo(){Ot.call(this,"d")}x(Lo,Ot);function Fo(){Ot.call(this,"c")}x(Fo,Ot);var Gn={},yc=null;function ni(){return yc=yc||new nt}Gn.La="serverreachability";function vc(o){Ot.call(this,Gn.La,o)}x(vc,Ot);function es(o){const u=ni();lt(u,new vc(u))}Gn.STAT_EVENT="statevent";function Ec(o,u){Ot.call(this,Gn.STAT_EVENT,o),this.stat=u}x(Ec,Ot);function de(o){const u=ni();lt(u,new Ec(u,o))}Gn.Ma="timingevent";function wc(o,u){Ot.call(this,Gn.Ma,o),this.size=u}x(wc,Ot);function ns(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function am(o,u,f,g,C,P){o.info(function(){if(o.g)if(P)for(var H="",Rt=P.split("&"),Yt=0;Yt<Rt.length;Yt++){var Tt=Rt[Yt].split("=");if(1<Tt.length){var ee=Tt[0];Tt=Tt[1];var ne=ee.split("_");H=2<=ne.length&&ne[1]=="type"?H+(ee+"="+Tt+"&"):H+(ee+"=redacted&")}}else H=null;else H=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+H})}function lm(o,u,f,g,C,P,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+H})}function pr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+um(o,f)+(g?" "+g:"")})}function cm(o,u){o.info(function(){return"TIMEOUT: "+u})}rs.prototype.info=function(){};function um(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var H=1;H<C.length;H++)C[H]=""}}}}return Qt(f)}catch{return u}}var ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uo;function si(){}x(si,dr),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},Uo=new si;function wn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var Ac={},Bo={};function $o(o,u,f){o.L=1,o.v=li(sn(u)),o.m=f,o.P=!0,bc(o,null)}function bc(o,u){o.F=Date.now(),ii(o),o.A=sn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Uc(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Ic,o.g=ru(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ce(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(En[0]=C.toString()),C=En);for(var P=0;P<C.length;P++){var H=M(f,C[P],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),es(),am(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)t:{const ne=on(this.g);var u=this.g.Ba();const _r=this.g.Z();if(!(3>ne)&&(ne!=3||this.g&&(this.h.h||this.g.oa()||Gc(this.g)))){this.J||ne!=4||u==7||(u==8||0>=_r?es(3):es(2)),jo(this);var f=this.g.Z();this.X=f;e:if(Rc(this)){var g=Gc(this.g);o="";var C=g.length,P=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),ss(this);var H="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,lm(this.i,this.u,this.A,this.l,this.R,ne,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Rt,Yt=this.g;if((Rt=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Rt)){var Tt=Rt;break e}}Tt=null}if(f=Tt)pr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qo(this,f);else{this.o=!1,this.s=3,de(12),Kn(this),ss(this);break t}}if(this.P){f=!0;let Fe;for(;!this.J&&this.C<H.length;)if(Fe=hm(this,H),Fe==Bo){ne==4&&(this.s=4,de(14),f=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Ac){this.s=4,de(15),pr(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else pr(this.i,this.l,Fe,null),qo(this,Fe);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||H.length!=0||this.h.h||(this.s=1,de(16),f=!1),this.o=this.o&&f,!f)pr(this.i,this.l,H,"[Invalid Chunked Response]"),Kn(this),ss(this);else if(0<H.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Qo(ee),ee.M=!0,de(11))}}else pr(this.i,this.l,H,null),qo(this,H);ne==4&&Kn(this),this.o&&!this.J&&(ne==4?Zc(this.j,this):(this.o=!1,ii(this)))}else Cm(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,de(12)):(this.s=0,de(13)),Kn(this),ss(this)}}}catch{}finally{}};function Rc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function hm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Bo:(f=Number(u.substring(f,g)),isNaN(f)?Ac:(g+=1,g+f>u.length?Bo:(u=u.slice(g,g+f),o.C=g+f,u)))}wn.prototype.cancel=function(){this.J=!0,Kn(this)};function ii(o){o.S=Date.now()+o.I,Sc(o,o.I)}function Sc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ns(m(o.ba,o),u)}function jo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cm(this.i,this.A),this.L!=2&&(es(),de(17)),Kn(this),this.s=2,ss(this)):Sc(this,this.S-o)};function ss(o){o.j.G==0||o.J||Zc(o.j,o)}function Kn(o){jo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Zr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function qo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ho(f.h,o))){if(!o.K&&Ho(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)pi(f),fi(f);else break t;Wo(f),de(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ns(m(f.Za,f),6e3));if(1>=xc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Qn(f,11)}else if((o.K||f.g==o)&&pi(f),!B(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Tt=C[u];if(f.T=Tt[0],Tt=Tt[1],f.G==2)if(Tt[0]=="c"){f.K=Tt[1],f.ia=Tt[2];const ee=Tt[3];ee!=null&&(f.la=ee,f.j.info("VER="+f.la));const ne=Tt[4];ne!=null&&(f.Aa=ne,f.j.info("SVER="+f.Aa));const _r=Tt[5];_r!=null&&typeof _r=="number"&&0<_r&&(g=1.5*_r,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fe=o.g;if(Fe){const mi=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mi){var P=g.h;P.g||mi.indexOf("spdy")==-1&&mi.indexOf("quic")==-1&&mi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(zo(P,P.h),P.h=null))}if(g.D){const Yo=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(g.ya=Yo,Pt(g.I,g.D,Yo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=o;if(g.qa=nu(g,g.J?g.ia:null,g.W),H.K){Vc(g.h,H);var Rt=H,Yt=g.L;Yt&&(Rt.I=Yt),Rt.B&&(jo(Rt),ii(Rt)),g.g=H}else Xc(g);0<f.i.length&&di(f)}else Tt[0]!="stop"&&Tt[0]!="close"||Qn(f,7);else f.G==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Qn(f,7):Ko(f):Tt[0]!="noop"&&f.l&&f.l.ta(Tt),f.v=0)}}es(4)}catch{}}var fm=class{constructor(o,u){this.g=o,this.map=u}};function Cc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xc(o){return o.h?1:o.g?o.g.size:0}function Ho(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function zo(o,u){o.g?o.g.add(u):o.h=u}function Vc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function dm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function pm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Nc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=pm(o),g=dm(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],f&&f[P],o)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var P=o[f].substring(0,g);C=o[f].substring(g+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wn){this.h=o.h,oi(this,o.j),this.o=o.o,this.g=o.g,ai(this,o.s),this.l=o.l;var u=o.i,f=new as;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),kc(this,f),this.m=o.m}else o&&(u=String(o).match(Oc))?(this.h=!1,oi(this,u[1]||"",!0),this.o=is(u[2]||""),this.g=is(u[3]||"",!0),ai(this,u[4]),this.l=is(u[5]||"",!0),kc(this,u[6]||"",!0),this.m=is(u[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Wn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(os(u,Mc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(os(u,Mc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(os(f,f.charAt(0)=="/"?ym:_m,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",os(f,Em)),o.join("")};function sn(o){return new Wn(o)}function oi(o,u,f){o.j=f?is(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ai(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function kc(o,u,f){u instanceof as?(o.i=u,wm(o.i,o.h)):(f||(u=os(u,vm)),o.i=new as(u,o.h))}function Pt(o,u,f){o.i.set(u,f)}function li(o){return Pt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function is(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function os(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,mm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mc=/[#\/\?@]/g,_m=/[#\?:]/g,ym=/[#\?]/g,vm=/[#\?@]/g,Em=/#/g;function as(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&gm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=as.prototype,e.add=function(o,u){Tn(this),this.i=null,o=gr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Lc(o,u){Tn(o),u=gr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Fc(o,u){return Tn(o),u=gr(o,u),o.g.has(u)}e.forEach=function(o,u){Tn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},e.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)f.push(u[g])}return f},e.V=function(o){Tn(this);let u=[];if(typeof o=="string")Fc(this,o)&&(u=u.concat(this.g.get(gr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return Tn(this),this.i=null,o=gr(this,o),Fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Uc(o,u,f){Lc(o,u),0<f.length&&(o.i=null,o.g.set(gr(o,u),k(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var C=P;H[g]!==""&&(C+="="+encodeURIComponent(String(H[g]))),o.push(C)}}return this.i=o.join("&")};function gr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function wm(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Lc(this,g),Uc(this,C,f))},o)),o.j=u}function Tm(o,u){const f=new rs;if(l.Image){const g=new Image;g.onload=w(In,f,"TestLoadImage: loaded",!0,u,g),g.onerror=w(In,f,"TestLoadImage: error",!1,u,g),g.onabort=w(In,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(In,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Im(o,u){const f=new rs,g=new AbortController,C=setTimeout(()=>{g.abort(),In(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?In(f,"TestPingServer: ok",!0,u):In(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),In(f,"TestPingServer: error",!1,u)})}function In(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Am(){this.g=new ei}function bm(o,u,f){const g=f||"";try{Nc(o,function(C,P){let H=C;h(C)&&(H=Qt(C)),u.push(g+P+"="+encodeURIComponent(H))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function ci(o){this.l=o.Ub||null,this.j=o.eb||!1}x(ci,dr),ci.prototype.g=function(){return new ui(this.l,this.j)},ci.prototype.i=(function(o){return function(){return o}})({});function ui(o,u){nt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ui,nt),e=ui.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,cs(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ls(this):cs(this),this.readyState==3&&Bc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,ls(this))},e.Qa=function(o){this.g&&(this.response=o,ls(this))},e.ga=function(){this.g&&ls(this)};function ls(o){o.readyState=4,o.l=null,o.j=null,o.v=null,cs(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $c(o){let u="";return dt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Go(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=$c(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pt(o,u,f))}function Lt(o){nt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Lt,nt);var Rm=/^https?$/i,Sm=["POST","PUT"];e=Lt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uo.g(),this.v=this.o?mc(this.o):mc(Uo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){jc(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sm,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,H]of f)this.g.setRequestHeader(P,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){jc(this,P)}};function jc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qc(o),hi(o)}function qc(o){o.A||(o.A=!0,lt(o,"complete"),lt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,lt(this,"complete"),lt(this,"abort"),hi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Hc(this):this.bb())},e.bb=function(){Hc(this)};function Hc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)Kt(o.Ea,0,o);else if(lt(o,"readystatechange"),on(o)==4){o.h=!1;try{const H=o.Z();t:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=H===0){var C=String(o.D).match(Oc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Rm.test(C?C.toLowerCase():"")}f=g}if(f)lt(o,"complete"),lt(o,"success");else{o.m=6;try{var P=2<on(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",qc(o)}}finally{hi(o)}}}}function hi(o,u){if(o.g){zc(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||lt(o,"ready");try{f.onreadystatechange=g}catch{}}}function zc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pe(u)}};function Gc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cm(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}I(u,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Kc(o){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,o),this.cb=us("retryDelaySeedMs",1e4,o),this.Wa=us("forwardChannelMaxRetries",2,o),this.wa=us("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cc(o&&o.concurrentRequestLimit),this.Da=new Am,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Kc.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,g){de(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=nu(this,null,this.W),di(this)};function Ko(o){if(Wc(o),o.G==3){var u=o.U++,f=sn(o.I);if(Pt(f,"SID",o.K),Pt(f,"RID",u),Pt(f,"TYPE","terminate"),hs(o,f),u=new wn(o,o.j,u),u.L=2,u.v=li(sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=ru(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ii(u)}eu(o)}function fi(o){o.g&&(Qo(o),o.g.cancel(),o.g=null)}function Wc(o){fi(o),o.u&&(l.clearTimeout(o.u),o.u=null),pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function di(o){if(!Pc(o.h)&&!o.s){o.s=!0;var u=o.Ga;pt||Le(),ht||(pt(),ht=!0),we.add(u,o),o.B=0}}function Pm(o,u){return xc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ns(m(o.Ga,o,u),tu(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new wn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Yc(this,C,u),f=sn(this.I),Pt(f,"RID",o),Pt(f,"CVER",22),this.D&&Pt(f,"X-HTTP-Session-Id",this.D),hs(this,f),P&&(this.O?u="headers="+encodeURIComponent(String($c(P)))+"&"+u:this.m&&Go(f,this.m,P)),zo(this.h,C),this.Ua&&Pt(f,"TYPE","init"),this.P?(Pt(f,"$req",u),Pt(f,"SID","null"),C.T=!0,$o(C,f,null)):$o(C,f,u),this.G=2}}else this.G==3&&(o?Qc(this,o):this.i.length==0||Pc(this.h)||Qc(this))};function Qc(o,u){var f;u?f=u.l:f=o.U++;const g=sn(o.I);Pt(g,"SID",o.K),Pt(g,"RID",f),Pt(g,"AID",o.T),hs(o,g),o.m&&o.o&&Go(g,o.m,o.o),f=new wn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Yc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zo(o.h,f),$o(f,g,u)}function hs(o,u){o.H&&dt(o.H,function(f,g){Pt(u,g,f)}),o.l&&Nc({},function(f,g){Pt(u,g,f)})}function Yc(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;t:{var C=o.i;let P=-1;for(;;){const H=["count="+f];P==-1?0<f?(P=C[0].g,H.push("ofs="+P)):P=0:H.push("ofs="+P);let Rt=!0;for(let Yt=0;Yt<f;Yt++){let Tt=C[Yt].g;const ee=C[Yt].map;if(Tt-=P,0>Tt)P=Math.max(0,C[Yt].g-100),Rt=!1;else try{bm(ee,H,"req"+Tt+"_")}catch{g&&g(ee)}}if(Rt){g=H.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,g}function Xc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pt||Le(),ht||(pt(),ht=!0),we.add(u,o),o.v=0}}function Wo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ns(m(o.Fa,o),tu(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ns(m(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,de(10),fi(this),Jc(this))};function Qo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Jc(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);Pt(u,"RID","rpc"),Pt(u,"SID",o.K),Pt(u,"AID",o.T),Pt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pt(u,"TO",o.ja),Pt(u,"TYPE","xmlhttp"),hs(o,u),o.m&&o.o&&Go(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=li(sn(u)),f.m=null,f.P=!0,bc(f,o)}e.Za=function(){this.C!=null&&(this.C=null,fi(this),Wo(this),de(19))};function pi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Zc(o,u){var f=null;if(o.g==u){pi(o),Qo(o),o.g=null;var g=2}else if(Ho(o.h,u))f=u.D,Vc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=ni(),lt(g,new wc(g,f)),di(o)}else Xc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Pm(o,u)||g==2&&Wo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:Qn(o,5);break;case 4:Qn(o,10);break;case 3:Qn(o,6);break;default:Qn(o,2)}}}function tu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Qn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new Wn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oi(g,"https"),li(g),C?Tm(g.toString(),f):Im(g.toString(),f)}else de(2);o.G=0,o.l&&o.l.sa(u),eu(o),Wc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function eu(o){if(o.G=0,o.ka=[],o.l){const u=Dc(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function nu(o,u,f){var g=f instanceof Wn?sn(f):new Wn(f);if(g.g!="")u&&(g.g=u+"."+g.g),ai(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Wn(null);g&&oi(P,g),u&&(P.g=u),C&&ai(P,C),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Pt(g,f,u),Pt(g,"VER",o.la),hs(o,g),g}function ru(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Lt(new ci({eb:f})):new Lt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}e=su.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function gi(){}gi.prototype.g=function(o,u){return new Te(o,u)};function Te(o,u){nt.call(this),this.g=new Kc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new mr(this)}x(Te,nt),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){Ko(this.g)},Te.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qt(o),o=f);u.i.push(new fm(u.Ya++,o)),u.G==3&&di(u)},Te.prototype.N=function(){this.g.l=null,delete this.j,Ko(this.g),delete this.g,Te.aa.N.call(this)};function iu(o){Lo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(iu,Lo);function ou(){Fo.call(this),this.status=1}x(ou,Fo);function mr(o){this.g=o}x(mr,su),mr.prototype.ua=function(){lt(this.g,"a")},mr.prototype.ta=function(o){lt(this.g,new iu(o))},mr.prototype.sa=function(o){lt(this.g,new ou)},mr.prototype.ra=function(){lt(this.g,"b")},gi.prototype.createWebChannel=gi.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,Tp=function(){return new gi},wp=function(){return ni()},Ep=Gn,za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Di=ri,Tc.COMPLETE="complete",vp=Tc,_c.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",nt.prototype.listen=nt.prototype.K,ms=_c,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,yp=Lt}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});const mh="@firebase/firestore",_h="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class se{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Wr="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ar=new Ml("@firebase/firestore");function Ir(){return ar.logLevel}function X(e,...t){if(ar.logLevel<=_t.DEBUG){const n=t.map(Fl);ar.debug(`Firestore (${Wr}): ${e}`,...n)}}function _n(e,...t){if(ar.logLevel<=_t.ERROR){const n=t.map(Fl);ar.error(`Firestore (${Wr}): ${e}`,...n)}}function $r(e,...t){if(ar.logLevel<=_t.WARN){const n=t.map(Fl);ar.warn(`Firestore (${Wr}): ${e}`,...n)}}function Fl(e){if(typeof e=="string")return e;try{/**
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
*/return(function(n){return JSON.stringify(n)})(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function at(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,Ip(e,r,n)}function Ip(e,t,n){let r=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _n(r),new Error(r)}function Mt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||Ip(t,s,r)}function yt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends zn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ir{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ap{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(se.UNAUTHENTICATED)))}shutdown(){}}class TT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class IT{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Mt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}}),0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Mt(typeof r.accessToken=="string",31837,{l:r}),new Ap(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Mt(t===null||typeof t=="string",2055,{h:t}),new se(t)}}class AT{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bT{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new AT(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RT{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,aT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Mt(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Mt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ST(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ST(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ft(e,t){return e<t?-1:e>t?1:0}function Ga(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return ga(s)===ga(i)?ft(s,i):ga(s)?1:-1}return ft(e.length,t.length)}const CT=55296,PT=57343;function ga(e){const t=e.charCodeAt(0);return t>=CT&&t<=PT}function jr(e,t,n){return e.length===t.length&&e.every(((r,s)=>n(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vh="__name__";class We{constructor(t,n,r){n===void 0?n=0:n>t.length&&at(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&at(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=We.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ft(t.length,n.length)}static compareSegments(t,n){const r=We.isNumericId(t),s=We.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(t).compare(We.extractNumericId(n)):Ga(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return On.fromString(t.substring(4,t.length-2))}}class Vt extends We{construct(t,n,r){return new Vt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new J(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Vt(n)}static emptyPath(){return new Vt([])}}const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends We{construct(t,n,r){return new ce(t,n,r)}static isValidIdentifier(t){return xT.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vh}static keyField(){return new ce([vh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new J(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ce(n)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rt{constructor(t){this.path=t}static fromPath(t){return new rt(Vt.fromString(t))}static fromName(t){return new rt(Vt.fromString(t).popFirst(5))}static empty(){return new rt(Vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rt(new Vt(t.slice()))}}function VT(e,t,n,r){if(t===!0&&r===!0)throw new J(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Eh(e){if(rt.isDocumentKey(e))throw new J(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Rp(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Eo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":at(12329,{type:typeof e})}function Ka(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new J(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eo(e);throw new J(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ht(e,t){const n={typeString:e};return t&&(n.value=t),n}function Xs(e,t){if(!Rp(e))throw new J(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wh=-62135596800,Th=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(t){return xt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Th);return new xt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<wh)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Th}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Xs(t,xt._jsonSchema))return new xt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-wh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:Ht("string",xt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new xt(0,0))}static max(){return new ot(new xt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const qs=-1;function DT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new xt(n+1,0):new xt(n,r));return new Fn(s,rt.empty(),t)}function NT(e){return new Fn(e.readTime,e.key,qs)}class Fn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Fn(ot.min(),rt.empty(),qs)}static max(){return new Fn(ot.max(),rt.empty(),qs)}}function OT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=rt.comparator(e.documentKey,t.documentKey),n!==0?n:ft(e.largestBatchId,t.largestBatchId))}/**
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
 */const kT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function wo(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==kT)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class O{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&at(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new O(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):O.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):O.reject(n)}static resolve(t){return new O(((n,r)=>{n(t)}))}static reject(t){return new O(((n,r)=>{r(t)}))}static waitFor(t){return new O(((n,r)=>{let s=0,i=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(t){let n=O.resolve(!1);for(const r of t)n=n.next((s=>s?O.resolve(s):r()));return n}static forEach(t,n){const r=[];return t.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(t,n){return new O(((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(t,n){return new O(((r,s)=>{const i=()=>{t()===!0?n().next((()=>{i()}),s):r()};i()}))}}function LT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class To{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}To.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const FT=-1;function Io(e){return e==null}function Gi(e){return e===0&&1/e==-1/0}function UT(e){return typeof e=="number"&&Number.isInteger(e)&&!Gi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Sp="";function BT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ih(t)),t=$T(e.get(n),t);return Ih(t)}function $T(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Sp:n+="";break;default:n+=i}}return n}function Ih(e){return e+Sp+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ah(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Yr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Cp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bt{constructor(t,n){this.comparator=t,this.root=n||Xt.EMPTY}insert(t,n){return new Bt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wi(this.root,t,this.comparator,!1)}getReverseIterator(){return new wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wi(this.root,t,this.comparator,!0)}}class wi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Xt.RED,this.left=s??Xt.EMPTY,this.right=i??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Xt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw at(43730,{key:this.key,value:this.value});if(this.right.isRed())throw at(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw at(27949);return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw at(57766)}get value(){throw at(16141)}get color(){throw at(16727)}get left(){throw at(29726)}get right(){throw at(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Xt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zt{constructor(t){this.comparator=t,this.data=new Bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(t){return new bh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new zt(this.comparator);return n.data=t,n}}class bh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(t){this.fields=t,t.sort(ce.comparator)}static empty(){return new Pn([])}unionWith(t){let n=new zt(ce.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Pn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return jr(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Pp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pp("Invalid base64 string: "+i):i}})(t);return new Zt(n)}static fromUint8Array(t){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Zt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const jT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(e){if(Mt(!!e,39018),typeof e=="string"){let t=0;const n=jT.exec(e);if(Mt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ft(e.seconds),nanos:Ft(e.nanos)}}function Ft(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bn(e){return typeof e=="string"?Zt.fromBase64String(e):Zt.fromUint8Array(e)}/**
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
 */const xp="server_timestamp",Vp="__type__",Dp="__previous_value__",Np="__local_write_time__";function Ul(e){return(e?.mapValue?.fields||{})[Vp]?.stringValue===xp}function Ao(e){const t=e.mapValue.fields[Dp];return Ul(t)?Ao(t):t}function Hs(e){const t=Un(e.mapValue.fields[Np].timestampValue);return new xt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qT{constructor(t,n,r,s,i,a,l,c,h,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Ki="(default)";class zs{constructor(t,n){this.projectId=t,this.database=n||Ki}static empty(){return new zs("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(t){return t instanceof zs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Op="__type__",HT="__max__",Ti={mapValue:{}},kp="__vector__",Wi="value";function $n(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ul(e)?4:GT(e)?9007199254740991:zT(e)?10:11:at(28295,{value:e})}function rn(e,t){if(e===t)return!0;const n=$n(e);if(n!==$n(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hs(e).isEqual(Hs(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Un(s.timestampValue),l=Un(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(s,i){return Ft(s.geoPointValue.latitude)===Ft(i.geoPointValue.latitude)&&Ft(s.geoPointValue.longitude)===Ft(i.geoPointValue.longitude)})(e,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ft(s.integerValue)===Ft(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ft(s.doubleValue),l=Ft(i.doubleValue);return a===l?Gi(a)===Gi(l):isNaN(a)&&isNaN(l)}return!1})(e,t);case 9:return jr(e.arrayValue.values||[],t.arrayValue.values||[],rn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ah(a)!==Ah(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0})(e,t);default:return at(52216,{left:e})}}function Gs(e,t){return(e.values||[]).find((n=>rn(n,t)))!==void 0}function qr(e,t){if(e===t)return 0;const n=$n(e),r=$n(t);if(n!==r)return ft(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ft(e.booleanValue,t.booleanValue);case 2:return(function(i,a){const l=Ft(i.integerValue||i.doubleValue),c=Ft(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(e,t);case 3:return Rh(e.timestampValue,t.timestampValue);case 4:return Rh(Hs(e),Hs(t));case 5:return Ga(e.stringValue,t.stringValue);case 6:return(function(i,a){const l=Bn(i),c=Bn(a);return l.compareTo(c)})(e.bytesValue,t.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ft(l[h],c[h]);if(d!==0)return d}return ft(l.length,c.length)})(e.referenceValue,t.referenceValue);case 8:return(function(i,a){const l=ft(Ft(i.latitude),Ft(a.latitude));return l!==0?l:ft(Ft(i.longitude),Ft(a.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Sh(e.arrayValue,t.arrayValue);case 10:return(function(i,a){const l=i.fields||{},c=a.fields||{},h=l[Wi]?.arrayValue,d=c[Wi]?.arrayValue,p=ft(h?.values?.length||0,d?.values?.length||0);return p!==0?p:Sh(h,d)})(e.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Ti.mapValue&&a===Ti.mapValue)return 0;if(i===Ti.mapValue)return 1;if(a===Ti.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ga(c[p],d[p]);if(m!==0)return m;const w=qr(l[c[p]],h[d[p]]);if(w!==0)return w}return ft(c.length,d.length)})(e.mapValue,t.mapValue);default:throw at(23264,{he:n})}}function Rh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ft(e,t);const n=Un(e),r=Un(t),s=ft(n.seconds,r.seconds);return s!==0?s:ft(n.nanos,r.nanos)}function Sh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qr(n[s],r[s]);if(i)return i}return ft(n.length,r.length)}function Hr(e){return Wa(e)}function Wa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(n){const r=Un(n);return`time(${r.seconds},${r.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(n){return Bn(n).toBase64()})(e.bytesValue):"referenceValue"in e?(function(n){return rt.fromName(n).toString()})(e.referenceValue):"geoPointValue"in e?(function(n){return`geo(${n.latitude},${n.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wa(i);return r+"]"})(e.arrayValue):"mapValue"in e?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wa(n.fields[a])}`;return s+"}"})(e.mapValue):at(61005,{value:e})}function Ni(e){switch($n(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ao(e);return t?16+Ni(t):16;case 5:return 2*e.stringValue.length;case 6:return Bn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ni(i)),0)})(e.arrayValue);case 10:case 11:return(function(r){let s=0;return Yr(r.fields,((i,a)=>{s+=i.length+Ni(a)})),s})(e.mapValue);default:throw at(13486,{value:e})}}function Ch(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qa(e){return!!e&&"integerValue"in e}function Bl(e){return!!e&&"arrayValue"in e}function Ph(e){return!!e&&"nullValue"in e}function xh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ma(e){return!!e&&"mapValue"in e}function zT(e){return(e?.mapValue?.fields||{})[Op]?.stringValue===kp}function Ps(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Yr(e.mapValue.fields,((n,r)=>t.mapValue.fields[n]=Ps(r))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ps(e.arrayValue.values[n]);return t}return{...e}}function GT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===HT}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ye{constructor(t){this.value=t}static empty(){return new Ye({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ma(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ps(n)}setAll(t){let n=ce.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ps(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ma(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Yr(n,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ye(Ps(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ae{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ae(t,0,ot.min(),ot.min(),ot.min(),Ye.empty(),0)}static newFoundDocument(t,n,r,s){return new ae(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new ae(t,2,n,ot.min(),ot.min(),Ye.empty(),0)}static newUnknownDocument(t,n){return new ae(t,3,n,ot.min(),ot.min(),Ye.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qi{constructor(t,n){this.position=t,this.inclusive=n}}function Vh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=rt.comparator(rt.fromName(a.referenceValue),n.key):r=qr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ks{constructor(t,n="asc"){this.field=t,this.dir=n}}function KT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Mp{}class qt extends Mp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new QT(t,n,r):n==="array-contains"?new JT(t,r):n==="in"?new ZT(t,r):n==="not-in"?new tI(t,r):n==="array-contains-any"?new eI(t,r):new qt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new YT(t,r):new XT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qr(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(qr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return at(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends Mp{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new He(t,n)}matches(t){return Lp(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lp(e){return e.op==="and"}function Fp(e){return WT(e)&&Lp(e)}function WT(e){for(const t of e.filters)if(t instanceof He)return!1;return!0}function Ya(e){if(e instanceof qt)return e.field.canonicalString()+e.op.toString()+Hr(e.value);if(Fp(e))return e.filters.map((t=>Ya(t))).join(",");{const t=e.filters.map((n=>Ya(n))).join(",");return`${e.op}(${t})`}}function Up(e,t){return e instanceof qt?(function(r,s){return s instanceof qt&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)})(e,t):e instanceof He?(function(r,s){return s instanceof He&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Up(a,s.filters[l])),!0):!1})(e,t):void at(19439)}function Bp(e){return e instanceof qt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Hr(n.value)}`})(e):e instanceof He?(function(n){return n.op.toString()+" {"+n.getFilters().map(Bp).join(" ,")+"}"})(e):"Filter"}class QT extends qt{constructor(t,n,r){super(t,n,r),this.key=rt.fromName(r.referenceValue)}matches(t){const n=rt.comparator(t.key,this.key);return this.matchesComparison(n)}}class YT extends qt{constructor(t,n){super(t,"in",n),this.keys=$p("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class XT extends qt{constructor(t,n){super(t,"not-in",n),this.keys=$p("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function $p(e,t){return(t.arrayValue?.values||[]).map((n=>rt.fromName(n.referenceValue)))}class JT extends qt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bl(n)&&Gs(n.arrayValue,this.value)}}class ZT extends qt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class tI extends qt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Gs(this.value.arrayValue,n)}}class eI extends qt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Gs(this.value.arrayValue,r)))}}/**
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
 */class nI{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Nh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new nI(e,t,n,r,s,i,a)}function $l(e){const t=yt(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>Ya(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Io(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>Hr(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>Hr(r))).join(",")),t.Te=n}return t.Te}function jl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!KT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Up(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Dh(e.startAt,t.startAt)&&Dh(e.endAt,t.endAt)}function Xa(e){return rt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xr{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rI(e,t,n,r,s,i,a,l){return new Xr(e,t,n,r,s,i,a,l)}function jp(e){return new Xr(e)}function Oh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qp(e){return e.collectionGroup!==null}function xs(e){const t=yt(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new zt(ce.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(t).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ks(i,r))})),n.has(ce.keyField().canonicalString())||t.Ie.push(new Ks(ce.keyField(),r))}return t.Ie}function Ze(e){const t=yt(e);return t.Ee||(t.Ee=sI(t,xs(e))),t.Ee}function sI(e,t){if(e.limitType==="F")return Nh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ks(s.field,i)}));const n=e.endAt?new Qi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qi(e.startAt.position,e.startAt.inclusive):null;return Nh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ja(e,t){const n=e.filters.concat([t]);return new Xr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Za(e,t,n){return new Xr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bo(e,t){return jl(Ze(e),Ze(t))&&e.limitType===t.limitType}function Hp(e){return`${$l(Ze(e))}|lt:${e.limitType}`}function Ar(e){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Bp(s))).join(", ")}]`),Io(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Hr(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Hr(s))).join(",")),`Target(${r})`})(Ze(e))}; limitType=${e.limitType})`}function Ro(e,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):rt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(e,t)&&(function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(e,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(e,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=Vh(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,xs(r),s)||r.endAt&&!(function(a,l,c){const h=Vh(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,xs(r),s))})(e,t)}function iI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function zp(e){return(t,n)=>{let r=!1;for(const s of xs(e)){const i=oI(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oI(e,t,n){const r=e.field.isKeyField()?rt.comparator(t.key,n.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?qr(c,h):at(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return at(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Yr(this.inner,((n,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const aI=new Bt(rt.comparator);function jn(){return aI}const Gp=new Bt(rt.comparator);function _s(...e){let t=Gp;for(const n of e)t=t.insert(n.key,n);return t}function lI(e){let t=Gp;return e.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function er(){return Vs()}function Kp(){return Vs()}function Vs(){return new hr((e=>e.toString()),((e,t)=>e.isEqual(t)))}const cI=new zt(rt.comparator);function Et(...e){let t=cI;for(const n of e)t=t.add(n);return t}const uI=new zt(ft);function hI(){return uI}/**
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
 */function ql(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(t)?"-0":t}}function Wp(e){return{integerValue:""+e}}function fI(e,t){return UT(t)?Wp(t):ql(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class So{constructor(){this._=void 0}}function dI(e,t,n){return e instanceof tl?(function(s,i){const a={fields:{[Vp]:{stringValue:xp},[Np]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ul(i)&&(i=Ao(i)),i&&(a.fields[Dp]=i),{mapValue:a}})(n,t):e instanceof Yi?Qp(e,t):e instanceof Xi?Yp(e,t):(function(s,i){const a=gI(s,i),l=kh(a)+kh(s.Ae);return Qa(a)&&Qa(s.Ae)?Wp(l):ql(s.serializer,l)})(e,t)}function pI(e,t,n){return e instanceof Yi?Qp(e,t):e instanceof Xi?Yp(e,t):n}function gI(e,t){return e instanceof el?(function(r){return Qa(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class tl extends So{}class Yi extends So{constructor(t){super(),this.elements=t}}function Qp(e,t){const n=Xp(t);for(const r of e.elements)n.some((s=>rn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Xi extends So{constructor(t){super(),this.elements=t}}function Yp(e,t){let n=Xp(t);for(const r of e.elements)n=n.filter((s=>!rn(s,r)));return{arrayValue:{values:n}}}class el extends So{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function kh(e){return Ft(e.integerValue||e.doubleValue)}function Xp(e){return Bl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function mI(e,t){return e.field.isEqual(t.field)&&(function(r,s){return r instanceof Yi&&s instanceof Yi||r instanceof Xi&&s instanceof Xi?jr(r.elements,s.elements,rn):r instanceof el&&s instanceof el?rn(r.Ae,s.Ae):r instanceof tl&&s instanceof tl})(e.transform,t.transform)}class or{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new or}static exists(t){return new or(void 0,t)}static updateTime(t){return new or(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hl{}function Jp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new yI(e.key,or.none()):new zl(e.key,e.data,or.none());{const n=e.data,r=Ye.empty();let s=new zt(ce.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Co(e.key,r,new Pn(s.toArray()),or.none())}}function _I(e,t,n){e instanceof zl?(function(s,i,a){const l=s.value.clone(),c=Lh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(e,t,n):e instanceof Co?(function(s,i,a){if(!Oi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Lh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Zp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(e,t,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,n)}function Ds(e,t,n,r){return e instanceof zl?(function(i,a,l,c){if(!Oi(i.precondition,a))return l;const h=i.value.clone(),d=Fh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(e,t,n,r):e instanceof Co?(function(i,a,l,c){if(!Oi(i.precondition,a))return l;const h=Fh(i.fieldTransforms,c,a),d=a.data;return d.setAll(Zp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(e,t,n,r):(function(i,a,l){return Oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(e,t,n)}function Mh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jr(r,s,((i,a)=>mI(i,a)))})(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class zl extends Hl{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Co extends Hl{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Lh(e,t,n){const r=new Map;Mt(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,pI(a,l,n[s]))}return r}function Fh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,dI(i,a,t))}return r}class yI extends Hl{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&_I(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ds(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ds(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Kp();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Jp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ot.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Et())}isEqual(t){return this.batchId===t.batchId&&jr(this.mutations,t.mutations,((n,r)=>Mh(n,r)))&&jr(this.baseMutations,t.baseMutations,((n,r)=>Mh(n,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class EI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var jt,mt;function tg(e){if(e===void 0)return _n("GRPC error has no .code"),U.UNKNOWN;switch(e){case jt.OK:return U.OK;case jt.CANCELLED:return U.CANCELLED;case jt.UNKNOWN:return U.UNKNOWN;case jt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case jt.INTERNAL:return U.INTERNAL;case jt.UNAVAILABLE:return U.UNAVAILABLE;case jt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case jt.NOT_FOUND:return U.NOT_FOUND;case jt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case jt.ABORTED:return U.ABORTED;case jt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case jt.DATA_LOSS:return U.DATA_LOSS;default:return at(39323,{code:e})}}(mt=jt||(jt={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function TI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const II=new On([4294967295,4294967295],0);function Uh(e){const t=TI().encode(e),n=new _p;return n.update(t),new Uint8Array(n.digest())}function Bh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new On([n,r],0),new On([s,i],0)]}class Gl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ys(`Invalid padding: ${n}`);if(r<0)throw new ys(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ys(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ys(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=On.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(On.fromNumber(r)));return s.compare(II)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Uh(t),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Gl(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const n=Uh(t),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Po{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Js.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Po(ot.min(),s,new Bt(ft),jn(),Et())}}class Js{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Js(r,n,Et(),Et(),Et())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ki{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class eg{constructor(t,n){this.targetId=t,this.Ce=n}}class ng{constructor(t,n,r=Zt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $h{constructor(){this.ve=0,this.Fe=jh(),this.Me=Zt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Et(),n=Et(),r=Et();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:at(38017,{changeType:i})}})),new Js(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=jh()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Mt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class AI{constructor(t){this.Ge=t,this.ze=new Map,this.je=jn(),this.Je=Ii(),this.He=Ii(),this.Ye=new Bt(ft)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:at(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Xa(i))if(r===0){const a=new rt(i.path);this.et(n,a,ae.newNoDocument(a,ot.min()))}else Mt(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(t),c=l?this.ct(l,t,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Bn(r).toUint8Array()}catch(c){if(c instanceof Pp)return $r("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Gl(a,s,i)}catch(c){return $r(c instanceof ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(t){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Xa(l.target)){const c=new rt(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,ae.newNoDocument(c,t))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=Et();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new Po(t,n,this.Ye,this.je,r);return this.je=jn(),this.Je=Ii(),this.He=Ii(),this.Ye=new Bt(ft),s}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new $h,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new zt(ft),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new zt(ft),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new $h),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Ii(){return new Bt(rt.comparator)}function jh(){return new Bt(rt.comparator)}const bI={asc:"ASCENDING",desc:"DESCENDING"},RI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SI={and:"AND",or:"OR"};class CI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function nl(e,t){return e.useProto3Json||Io(t)?t:{value:t}}function rl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Dr(e){return Mt(!!e,49232),ot.fromTimestamp((function(n){const r=Un(n);return new xt(r.seconds,r.nanos)})(e))}function sg(e,t){return sl(e,t).canonicalString()}function sl(e,t){const n=(function(s){return new Vt(["projects",s.projectId,"databases",s.database])})(e).child("documents");return t===void 0?n:n.child(t)}function ig(e){const t=Vt.fromString(e);return Mt(ug(t),10190,{key:t.toString()}),t}function _a(e,t){const n=ig(t);if(n.get(1)!==e.databaseId.projectId)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(ag(n))}function og(e,t){return sg(e.databaseId,t)}function PI(e){const t=ig(e);return t.length===4?Vt.emptyPath():ag(t)}function qh(e){return new Vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ag(e){return Mt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function xI(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:at(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Mt(d===void 0||typeof d=="string",58123),Zt.fromBase64String(d||"")):(Mt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Zt.fromUint8Array(d||new Uint8Array))})(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?U.UNKNOWN:tg(h.code);return new J(d,h.message||"")})(a);n=new ng(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=_a(e,r.document.name),i=Dr(r.document.updateTime),a=r.document.createTime?Dr(r.document.createTime):ot.min(),l=new Ye({mapValue:{fields:r.document.fields}}),c=ae.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ki(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=_a(e,r.document),i=r.readTime?Dr(r.readTime):ot.min(),a=ae.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ki([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=_a(e,r.document),i=r.removedTargetIds||[];n=new ki([],i,s,null)}else{if(!("filter"in t))return at(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new wI(s,i),l=r.targetId;n=new eg(l,a)}}return n}function VI(e,t){return{documents:[og(e,t.path)]}}function DI(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=og(e,s);const i=(function(h){if(h.length!==0)return cg(He.create(h,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(m){return{field:br(m.field),direction:kI(m.dir)}})(d)))})(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=nl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{ft:n,parent:s}}function NI(e){let t=PI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Mt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const m=lg(p);return m instanceof He&&Fp(m)?m.getFilters():[m]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((m=>(function(x){return new Ks(Rr(x.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Io(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new Qi(w,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,w=p.values||[];return new Qi(w,m)})(n.endAt)),rI(t,s,a,i,l,"F",c,h)}function OI(e,t){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return at(28987,{purpose:s})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function lg(e){return e.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rr(n.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rr(n.unaryFilter.field);return qt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rr(n.unaryFilter.field);return qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rr(n.unaryFilter.field);return qt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return at(61313);default:return at(60726)}})(e):e.fieldFilter!==void 0?(function(n){return qt.create(Rr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return at(58110);default:return at(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(e):e.compositeFilter!==void 0?(function(n){return He.create(n.compositeFilter.filters.map((r=>lg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return at(1026)}})(n.compositeFilter.op))})(e):at(30097,{filter:e})}function kI(e){return bI[e]}function MI(e){return RI[e]}function LI(e){return SI[e]}function br(e){return{fieldPath:e.canonicalString()}}function Rr(e){return ce.fromServerFormat(e.fieldPath)}function cg(e){return e instanceof qt?(function(n){if(n.op==="=="){if(xh(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NAN"}};if(Ph(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xh(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NAN"}};if(Ph(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(n.field),op:MI(n.op),value:n.value}}})(e):e instanceof He?(function(n){const r=n.getFilters().map((s=>cg(s)));return r.length===1?r[0]:{compositeFilter:{op:LI(n.op),filters:r}}})(e):at(54877,{filter:e})}function ug(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xn{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=Zt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new xn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class FI{constructor(t){this.yt=t}}function UI(e){const t=NI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Za(t,t.limit,"L"):t}/**
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
 */class BI{constructor(){this.Cn=new $I}addToCollectionParentIndex(t,n){return this.Cn.add(n),O.resolve()}getCollectionParents(t,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return O.resolve()}deleteFieldIndex(t,n){return O.resolve()}deleteAllFieldIndexes(t){return O.resolve()}createTargetIndexes(t,n){return O.resolve()}getDocumentsMatchingTarget(t,n){return O.resolve(null)}getIndexType(t,n){return O.resolve(0)}getFieldIndexes(t,n){return O.resolve([])}getNextCollectionGroupToUpdate(t){return O.resolve(null)}getMinOffset(t,n){return O.resolve(Fn.min())}getMinOffsetFromCollectionGroup(t,n){return O.resolve(Fn.min())}updateCollectionGroup(t,n,r){return O.resolve()}updateIndexEntries(t,n){return O.resolve()}}class $I{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new zt(Vt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new zt(Vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hg=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(hg,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new zr(0)}static cr(){return new zr(-1)}}/**
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
 */const zh="LruGarbageCollector",jI=1048576;function Gh([e,t],[n,r]){const s=ft(e,n);return s===0?ft(t,r):s}class qI{constructor(t){this.Ir=t,this.buffer=new zt(Gh),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){X(zh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qr(n)?X(zh,"Ignoring IndexedDB error during garbage collection: ",n):await wo(n)}await this.Vr(3e5)}))}}class zI{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return O.resolve(To.ce);const r=new qI(n);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Hh)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hh):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(t,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r)))).next((p=>(h=Date.now(),Ir()<=_t.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function GI(e,t){return new zI(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class KI{constructor(){this.changes=new hr((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class WI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QI{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,n)))).next((s=>(r!==null&&Ds(r.mutation,s,Pn.empty(),xt.now()),s)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,Et()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=Et()){const s=er();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,r).next((i=>{let a=_s();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(t,n){const r=er();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,Et())))}populateOverlays(t,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(t,n,r,s){let i=jn();const a=Vs(),l=(function(){return Vs()})();return n.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Co)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ds(d.mutation,h,d.mutation.getFieldMask(),xt.now())):a.set(h.key,Pn.empty())})),this.recalculateAndSaveOverlays(t,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>l.set(h,new WI(d,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(t,n){const r=Vs();let s=new Bt(((a,l)=>a-l)),i=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Pn.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Et()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Kp();d.forEach((m=>{if(!i.has(m)){const w=Jp(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return O.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,s){return(function(a){return rt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):O.resolve(er());let l=qs,c=i;return a.next((h=>O.forEach(h,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(t,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(t,h,i))).next((()=>this.computeViews(t,c,h,Et()))).next((d=>({batchId:l,changes:lI(d)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new rt(n)).next((r=>{let s=_s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=_s();return this.indexManager.getCollectionParents(t,i).next((l=>O.forEach(l,(c=>{const h=(function(p,m){return new Xr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next((d=>{d.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ae.newInvalidDocument(d)))}));let l=_s();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&Ds(d.mutation,h,Pn.empty(),xt.now()),Ro(n,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class YI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Dr(s.createTime)}})(n)),O.resolve()}getNamedQuery(t,n){return O.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:UI(s.bundledQuery),readTime:Dr(s.readTime)}})(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class XI{constructor(){this.overlays=new Bt(rt.comparator),this.qr=new Map}getOverlay(t,n){return O.resolve(this.overlays.get(n))}getOverlays(t,n){const r=er();return O.forEach(n,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((s,i)=>{this.St(t,n,i)})),O.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(t,n,r){const s=er(),i=n.length+1,a=new rt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Bt(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=er(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return O.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new EI(n,r));let i=this.qr.get(n);i===void 0&&(i=Et(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class JI{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(t){return O.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kl{constructor(){this.Qr=new zt(Gt.$r),this.Ur=new zt(Gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new Gt(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Gr(new Gt(t,n))}zr(t,n){t.forEach((r=>this.removeReference(r,n)))}jr(t){const n=new rt(new Vt([])),r=new Gt(n,t),s=new Gt(n,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new rt(new Vt([])),r=new Gt(n,t),s=new Gt(n,t+1);let i=Et();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const n=new Gt(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Gt{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return rt.comparator(t.key,n.key)||ft(t.Yr,n.Yr)}static Kr(t,n){return ft(t.Yr,n.Yr)||rt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ZI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new zt(Gt.$r)}checkEmpty(t){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Gt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(t,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?FT:this.tr-1)}getAllMutationBatches(t){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Gt(n,0),s=new Gt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new zt(ft);return n.forEach((s=>{const i=new Gt(s,0),a=new Gt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;rt.isDocumentKey(i)||(i=i.child(""));const a=new Gt(new rt(i),0);let l=new zt(ft);return this.Zr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)}),a),O.resolve(this.ti(l))}ti(t){const n=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(t,n){Mt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,(s=>{const i=new Gt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,n){const r=new Gt(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,O.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tA{constructor(t){this.ri=t,this.docs=(function(){return new Bt(rt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(t,n){let r=jn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ae.newInvalidDocument(s))})),O.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=jn();const a=n.path,l=new rt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||OT(NT(d),r)<=0||(s.has(d.key)||Ro(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(t,n,r,s){at(9500)}ii(t,n){return O.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new eA(this)}getSize(t){return O.resolve(this.size)}}class eA extends KI{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),O.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nA{constructor(t){this.persistence=t,this.si=new hr((n=>$l(n)),jl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.oi=0,this._i=new Kl,this.targetCount=0,this.ai=zr.ur()}forEachTarget(t,n){return this.si.forEach(((r,s)=>n(s))),O.resolve()}getLastRemoteSnapshotVersion(t){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return O.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new zr(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(t,n){return this.Pr(n),O.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),O.waitFor(i).next((()=>s))}getTargetCount(t){return O.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),O.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(t,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fg{constructor(t,n){this.ui={},this.overlays={},this.ci=new To(0),this.li=!1,this.li=!0,this.hi=new JI,this.referenceDelegate=t(this),this.Pi=new nA(this),this.indexManager=new BI,this.remoteDocumentCache=(function(s){return new tA(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new FI(n),this.Ii=new YI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new XI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new ZI(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const s=new rA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,n){return O.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,n))))}}class rA extends MT{constructor(t){super(),this.currentSequenceNumber=t}}class Wl{constructor(t){this.persistence=t,this.Ri=new Kl,this.Vi=null}static mi(t){return new Wl(t)}get fi(){if(this.Vi)return this.Vi;throw at(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,(r=>{const s=rt.fromPath(r);return this.gi(t,s).next((i=>{i||n.removeEntry(s,ot.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Ji{constructor(t,n){this.persistence=t,this.pi=new hr((r=>BT(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=GI(this,n)}static mi(t,n){return new Ji(t,n)}Ei(){}di(t){return O.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((s=>r+s))))}wr(t){let n=0;return this.pr(t,(r=>{n++})).next((()=>n))}pr(t,n){return O.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?O.resolve():n(s)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,n).next((l=>{l||(r++,i.removeEntry(a,ot.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),O.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),O.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),O.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),O.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ni(t.data.value)),n}br(t,n,r){return O.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ql{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=s}static As(t,n){let r=Et(),s=Et();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ql(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class sA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class iA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rw()?8:LT(tw())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ys(t,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new sA;return this.Ss(t,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(t,n,a,l.size)}))})).next((()=>i.result))}bs(t,n,r,s){return r.documentReadCount<this.fs?(Ir()<=_t.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ar(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Ir()<=_t.DEBUG&&X("QueryEngine","Query:",Ar(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ir()<=_t.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ar(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ze(n))):O.resolve())}ys(t,n){if(Oh(n))return O.resolve(null);let r=Ze(n);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Za(n,null,"F"),r=Ze(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=Et(...i);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(t,Za(n,null,"F")):this.vs(t,h,n,c)}))))})))))}ws(t,n,r,s){return Oh(n)||s.isEqual(ot.min())?O.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?O.resolve(null):(Ir()<=_t.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ar(n)),this.vs(t,a,n,DT(s,qs)).next((l=>l)))}))}Ds(t,n){let r=new zt(zp(t));return n.forEach(((s,i)=>{Ro(t,i)&&(r=r.add(i))})),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return Ir()<=_t.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ar(n)),this.ps.getDocumentsMatchingQuery(t,n,Fn.min(),r)}vs(t,n,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Yl="LocalStore",oA=3e8;class aA{constructor(t,n,r,s){this.persistence=t,this.Fs=n,this.serializer=s,this.Ms=new Bt(ft),this.xs=new hr((i=>$l(i)),jl),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new QI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function lA(e,t,n,r){return new aA(e,t,n,r)}async function dg(e,t){const n=yt(e);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=Et();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function pg(e){const t=yt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function cA(e,t){const n=yt(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];t.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?w=w.withResumeToken(Zt.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),(function(k,L,G){return k.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=oA?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(m,w,d)&&l.push(n.Pi.updateTargetData(i,w))}));let c=jn(),h=Et();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(uA(i,a,t.documentUpdates).next((d=>{c=d.ks,h=d.qs}))),!r.isEqual(ot.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return O.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function uA(e,t,n){let r=Et(),s=Et();return n.forEach((i=>r=r.add(i))),t.getEntries(e,r).next((i=>{let a=jn();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ot.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):X(Yl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{ks:a,qs:s}}))}function hA(e,t){const n=yt(e);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,t).next((i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new xn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r}))}async function il(e,t,n){const r=yt(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Qr(a))throw a;X(Yl,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Kh(e,t,n){const r=yt(e);let s=ot.min(),i=Et();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const p=yt(c),m=p.xs.get(d);return m!==void 0?O.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)})(r,a,Ze(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:Et()))).next((l=>(fA(r,iI(t),l),{documents:l,Qs:i})))))}function fA(e,t,n){let r=e.Os.get(t)||ot.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),e.Os.set(t,r)}class Wh{constructor(){this.activeTargetIds=hI()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dA{constructor(){this.Mo=new Wh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Wh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class pA{Oo(t){}shutdown(){}}/**
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
 */const Qh="ConnectivityMonitor";class Yh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Qh,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){X(Qh,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ai=null;function ol(){return Ai===null?Ai=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ai++,"0x"+Ai.toString(16)}/**
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
 */const ya="RestConnection",gA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mA{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,n,r,s,i){const a=ol(),l=this.zo(t,n.toUriEncodedString());X(ya,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),d=kl(h);return this.Jo(t,l,c,r,d).then((p=>(X(ya,`Received RPC '${t}' ${a}: `,p),p)),(p=>{throw $r(ya,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(t,n,r,s,i,a){return this.Go(t,n,r,s,i)}jo(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,n){const r=gA[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _A{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const re="WebChannelConnection";class yA extends mA{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=ol();return new Promise(((l,c)=>{const h=new yp;h.setWithCredentials(!0),h.listenOnce(vp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Di.NO_ERROR:const p=h.getResponseJson();X(re,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case Di.TIMEOUT:X(re,`RPC '${t}' ${a} timed out`),c(new J(U.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const m=h.getStatus();if(X(re,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w?.error;if(x&&x.status&&x.message){const k=(function(G){const B=G.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(B)>=0?B:U.UNKNOWN})(x.status);c(new J(k,x.message))}else c(new J(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new J(U.UNAVAILABLE,"Connection failed."));break;default:at(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(re,`RPC '${t}' ${a} completed.`)}}));const d=JSON.stringify(s);X(re,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}T_(t,n,r){const s=ol(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tp(),l=wp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(re,`Creating RPC '${t}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.I_(p);let m=!1,w=!1;const x=new _A({Yo:L=>{w?X(re,`Not sending because RPC '${t}' stream ${s} is closed:`,L):(m||(X(re,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),X(re,`RPC '${t}' stream ${s} sending:`,L),p.send(L))},Zo:()=>p.close()}),k=(L,G,B)=>{L.listen(G,(j=>{try{B(j)}catch(K){setTimeout((()=>{throw K}),0)}}))};return k(p,ms.EventType.OPEN,(()=>{w||(X(re,`RPC '${t}' stream ${s} transport opened.`),x.o_())})),k(p,ms.EventType.CLOSE,(()=>{w||(w=!0,X(re,`RPC '${t}' stream ${s} transport closed`),x.a_(),this.E_(p))})),k(p,ms.EventType.ERROR,(L=>{w||(w=!0,$r(re,`RPC '${t}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),x.a_(new J(U.UNAVAILABLE,"The operation could not be completed")))})),k(p,ms.EventType.MESSAGE,(L=>{if(!w){const G=L.data[0];Mt(!!G,16349);const B=G,j=B?.error||B[0]?.error;if(j){X(re,`RPC '${t}' stream ${s} received error:`,j);const K=j.status;let ut=(function(y){const T=jt[y];if(T!==void 0)return tg(T)})(K),dt=j.message;ut===void 0&&(ut=U.INTERNAL,dt="Unknown error status: "+K+" with message "+j.message),w=!0,x.a_(new J(ut,dt)),p.close()}else X(re,`RPC '${t}' stream ${s} received:`,G),x.u_(G)}})),k(l,Ep.STAT_EVENT,(L=>{L.stat===za.PROXY?X(re,`RPC '${t}' stream ${s} detected buffering proxy`):L.stat===za.NOPROXY&&X(re,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{x.__()}),0),x}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function va(){return typeof document<"u"?document:null}/**
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
 */function xo(e){return new CI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xh="PersistentStream";class vA{constructor(t,n,r,s,i,a,l,c){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gg(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{t((()=>{const s=new J(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return X(Xh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(X(Xh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class EA extends vA{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=xI(this.serializer,t),r=(function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?Dr(a.readTime):ot.min()})(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=qh(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=Xa(c)?{documents:VI(i,c)}:{query:DI(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=rg(i,a.resumeToken);const h=nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=rl(i,a.snapshotVersion.toTimestamp());const h=nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,t);const r=OI(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=qh(this.serializer),n.removeTarget=t,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wA{}class TA extends wA{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,sl(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(U.UNKNOWN,i.toString())}))}Ho(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,sl(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(U.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class IA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_n(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Gr="RemoteStore";class AA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{ti(this)&&(X(Gr,"Restarting streams for network reachability change."),await(async function(c){const h=yt(c);h.Ea.add(4),await Zs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Vo(h)})(this))}))})),this.Ra=new IA(r,s)}}async function Vo(e){if(ti(e))for(const t of e.da)await t(!0)}async function Zs(e){for(const t of e.da)await t(!1)}function mg(e,t){const n=yt(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),tc(n)?Zl(n):Jr(n).O_()&&Jl(n,t))}function Xl(e,t){const n=yt(e),r=Jr(n);n.Ia.delete(t),r.O_()&&_g(n,t),n.Ia.size===0&&(r.O_()?r.L_():ti(n)&&n.Ra.set("Unknown"))}function Jl(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Jr(e).Y_(t)}function _g(e,t){e.Va.Ue(t),Jr(e).Z_(t)}function Zl(e){e.Va=new AI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Jr(e).start(),e.Ra.ua()}function tc(e){return ti(e)&&!Jr(e).x_()&&e.Ia.size>0}function ti(e){return yt(e).Ea.size===0}function yg(e){e.Va=void 0}async function bA(e){e.Ra.set("Online")}async function RA(e){e.Ia.forEach(((t,n)=>{Jl(e,t)}))}async function SA(e,t){yg(e),tc(e)?(e.Ra.ha(t),Zl(e)):e.Ra.set("Unknown")}async function CA(e,t,n){if(e.Ra.set("Online"),t instanceof ng&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(e,t)}catch(r){X(Gr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jh(e,r)}else if(t instanceof ki?e.Va.Ze(t):t instanceof eg?e.Va.st(t):e.Va.tt(t),!n.isEqual(ot.min()))try{const r=await pg(e.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(Zt.EMPTY_BYTE_STRING,d.snapshotVersion)),_g(i,c);const p=new xn(d.target,c,h,d.sequenceNumber);Jl(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(e,n)}catch(r){X(Gr,"Failed to raise snapshot:",r),await Jh(e,r)}}async function Jh(e,t,n){if(!Qr(t))throw t;e.Ea.add(1),await Zs(e),e.Ra.set("Offline"),n||(n=()=>pg(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{X(Gr,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await Vo(e)}))}async function Zh(e,t){const n=yt(e);n.asyncQueue.verifyOperationInProgress(),X(Gr,"RemoteStore received new credentials");const r=ti(n);n.Ea.add(3),await Zs(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Vo(n)}async function PA(e,t){const n=yt(e);t?(n.Ea.delete(2),await Vo(n)):t||(n.Ea.add(2),await Zs(n),n.Ra.set("Unknown"))}function Jr(e){return e.ma||(e.ma=(function(n,r,s){const i=yt(n);return i.sa(),new EA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:bA.bind(null,e),t_:RA.bind(null,e),r_:SA.bind(null,e),H_:CA.bind(null,e)}),e.da.push((async t=>{t?(e.ma.B_(),tc(e)?Zl(e):e.Ra.set("Unknown")):(await e.ma.stop(),yg(e))}))),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ec{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new ec(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(e,t){if(_n("AsyncQueue",`${t}: ${e}`),Qr(e))return new J(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nr{static emptySet(t){return new Nr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||rt.comparator(n.key,r.key):(n,r)=>rt.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new Bt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Nr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tf{constructor(){this.ga=new Bt(rt.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):at(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class Kr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new Kr(t,n,Nr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class VA{constructor(){this.queries=ef(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=yt(n),i=s.queries;s.queries=ef(),i.forEach(((a,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new J(U.ABORTED,"Firestore shutting down"))}}function ef(){return new hr((e=>Hp(e)),bo)}async function DA(e,t){const n=yt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new xA,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=vg(a,`Initialization of query '${Ar(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&nc(n)}async function NA(e,t){const n=yt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OA(e,t){const n=yt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&nc(n)}function kA(e,t,n){const r=yt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function nc(e){e.Ca.forEach((t=>{t.next()}))}var al,nf;(nf=al||(al={})).Ma="default",nf.Cache="cache";class MA{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Kr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Kr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==al.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Eg{constructor(t){this.key=t}}class wg{constructor(t){this.key=t}}class LA{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Et(),this.mutatedKeys=Et(),this.eu=zp(t),this.tu=new Nr(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new tf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,p)=>{const m=s.get(d),w=Ro(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let L=!1;m&&w?m.data.isEqual(w.data)?x!==k&&(r.track({type:3,doc:w}),L=!0):this.su(m,w)||(r.track({type:2,doc:w}),L=!0,(c&&this.eu(w,c)>0||h&&this.eu(w,h)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),L=!0):m&&!w&&(r.track({type:1,doc:m}),L=!0,(c||h)&&(l=!0)),L&&(w?(a=a.add(w),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((d,p)=>(function(w,x){const k=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return at(20277,{Rt:L})}};return k(w)-k(x)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new Kr(this.query,t.tu,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Et(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return t.forEach((r=>{this.Xa.has(r)||n.push(new wg(r))})),this.Xa.forEach((r=>{t.has(r)||n.push(new Eg(r))})),n}cu(t){this.Ya=t.Qs,this.Xa=Et();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Kr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rc="SyncEngine";class FA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class UA{constructor(t){this.key=t,this.hu=!1}}class BA{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new hr((l=>Hp(l)),bo),this.Iu=new Map,this.Eu=new Set,this.du=new Bt(rt.comparator),this.Au=new Map,this.Ru=new Kl,this.Vu={},this.mu=new Map,this.fu=zr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $A(e,t,n=!0){const r=Rg(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Tg(r,t,n,!0),s}async function jA(e,t){const n=Rg(e);await Tg(n,t,!0,!1)}async function Tg(e,t,n,r){const s=await hA(e.localStore,Ze(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qA(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&mg(e.remoteStore,s),l}async function qA(e,t,n,r,s){e.pu=(p,m,w)=>(async function(k,L,G,B){let j=L.view.ru(G);j.Cs&&(j=await Kh(k.localStore,L.query,!1).then((({documents:I})=>L.view.ru(I,j))));const K=B&&B.targetChanges.get(L.targetId),ut=B&&B.targetMismatches.get(L.targetId)!=null,dt=L.view.applyChanges(j,k.isPrimaryClient,K,ut);return sf(k,L.targetId,dt.au),dt.snapshot})(e,p,m,w);const i=await Kh(e.localStore,t,!0),a=new LA(t,i.Qs),l=a.ru(i.documents),c=Js.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);sf(e,n,h.au);const d=new FA(t,n,a);return e.Tu.set(t,d),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),h.snapshot}async function HA(e,t,n){const r=yt(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!bo(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await il(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xl(r.remoteStore,s.targetId),ll(r,s.targetId)})).catch(wo)):(ll(r,s.targetId),await il(r.localStore,s.targetId,!0))}async function zA(e,t){const n=yt(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xl(n.remoteStore,r.targetId))}async function Ig(e,t){const n=yt(e);try{const r=await cA(n.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(Mt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Mt(a.hu,14607):s.removedDocuments.size>0&&(Mt(a.hu,42227),a.hu=!1))})),await bg(n,r,t)}catch(r){await wo(r)}}function rf(e,t,n){const r=yt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=yt(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)})),h&&nc(c)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function GA(e,t,n){const r=yt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new Bt(rt.comparator);a=a.insert(i,ae.newNoDocument(i,ot.min()));const l=Et().add(i),c=new Po(ot.min(),new Map,new Bt(ft),a,l);await Ig(r,c),r.du=r.du.remove(i),r.Au.delete(t),sc(r)}else await il(r.localStore,t,!1).then((()=>ll(r,t,n))).catch(wo)}function ll(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach((r=>{e.Ru.containsKey(r)||Ag(e,r)}))}function Ag(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Xl(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),sc(e))}function sf(e,t,n){for(const r of n)r instanceof Eg?(e.Ru.addReference(r.key,t),KA(e,r)):r instanceof wg?(X(rc,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Ag(e,r.key)):at(19791,{wu:r})}function KA(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(X(rc,"New document in limbo: "+n),e.Eu.add(r),sc(e))}function sc(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new rt(Vt.fromString(t)),r=e.fu.next();e.Au.set(r,new UA(n)),e.du=e.du.insert(n,r),mg(e.remoteStore,new xn(Ze(jp(n.path)),r,"TargetPurposeLimboResolution",To.ce))}}async function bg(e,t,n){const r=yt(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{a.push(r.pu(c,t,n).then((h=>{if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Ql.As(c.targetId,h);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(c,h){const d=yt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>O.forEach(h,(m=>O.forEach(m.Es,(w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>O.forEach(m.ds,(w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!Qr(p))throw p;X(Yl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=d.Ms.get(m),x=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(m,k)}}})(r.localStore,i))}async function WA(e,t){const n=yt(e);if(!n.currentUser.isEqual(t)){X(rc,"User change. New user:",t.toKey());const r=await dg(n.localStore,t);n.currentUser=t,(function(i,a){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new J(U.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bg(n,r.Ls)}}function QA(e,t){const n=yt(e),r=n.Au.get(t);if(r&&r.hu)return Et().add(r.key);{let s=Et();const i=n.Iu.get(t);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Rg(e){const t=yt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ig.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=QA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=GA.bind(null,t),t.Pu.H_=OA.bind(null,t.eventManager),t.Pu.yu=kA.bind(null,t.eventManager),t}class Zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return lA(this.persistence,new iA,t.initialUser,this.serializer)}Cu(t){return new fg(Wl.mi,this.serializer)}Du(t){return new dA}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zi.provider={build:()=>new Zi};class YA extends Zi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Mt(this.persistence.referenceDelegate instanceof Ji,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HI(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new fg((r=>Ji.mi(r,n)),this.serializer)}}class cl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WA.bind(null,this.syncEngine),await PA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new VA})()}createDatastore(t){const n=xo(t.databaseInfo.databaseId),r=(function(i){return new yA(i)})(t.databaseInfo);return(function(i,a,l,c){return new TA(i,a,l,c)})(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,s,i,a,l){return new AA(r,s,i,a,l)})(this.localStore,this.datastore,t.asyncQueue,(n=>rf(this.syncEngine,n,0)),(function(){return Yh.v()?new Yh:new pA})())}createSyncEngine(t,n){return(function(s,i,a,l,c,h,d){const p=new BA(s,i,a,l,c,h);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=yt(n);X(Gr,"RemoteStore shutting down."),r.Ea.add(5),await Zs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cl.provider={build:()=>new cl};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class XA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):_n("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const qn="FirestoreClient";class JA{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{X(qn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(X(qn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ea(e,t){e.asyncQueue.verifyOperationInProgress(),X(qn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async s=>{r.isEqual(s)||(await dg(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function of(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ZA(e);X(qn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((r=>Zh(t.remoteStore,r))),e.setAppCheckTokenChangeListener(((r,s)=>Zh(t.remoteStore,s))),e._onlineComponents=t}async function ZA(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X(qn,"Using user provided OfflineComponentProvider");try{await Ea(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await Ea(e,new Zi)}}else X(qn,"Using default OfflineComponentProvider"),await Ea(e,new YA(void 0));return e._offlineComponents}async function t0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X(qn,"Using user provided OnlineComponentProvider"),await of(e,e._uninitializedComponentsProvider._online)):(X(qn,"Using default OnlineComponentProvider"),await of(e,new cl))),e._onlineComponents}async function e0(e){const t=await t0(e),n=t.eventManager;return n.onListen=$A.bind(null,t.syncEngine),n.onUnlisten=HA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=jA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=zA.bind(null,t.syncEngine),n}function n0(e,t,n={}){const r=new ir;return e.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const d=new XA({next:m=>{d.Nu(),a.enqueueAndForget((()=>NA(i,p))),m.fromCache&&c.source==="server"?h.reject(new J(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new MA(l,d,{includeMetadataChanges:!0,qa:!0});return DA(i,p)})(await e0(e),e.asyncQueue,t,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Sg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const af=new Map;/**
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
 */const Cg="firestore.googleapis.com",lf=!0;class cf{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new J(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cg,this.ssl=lf}else this.host=t.host,this.ssl=t.ssl??lf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=hg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jI)throw new J(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}VT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sg(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ic{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new J(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wT;switch(r.type){case"firstParty":return new bT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=af.get(n);r&&(X("ComponentProvider","Removing Datastore"),af.delete(n),r.terminate())})(this),Promise.resolve()}}function r0(e,t,n,r={}){e=Ka(e,ic);const s=kl(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&(QE(`https://${l}`),ZE("Firestore",!0)),i.host!==Cg&&i.host!==l&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!$s(c,a)&&(e._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=se.MOCK_USER;else{h=YE(r.mockUserToken,e._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new se(p)}e._authCredentials=new TT(new Ap(h,d))}}/**
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
 */class fr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class me{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new me(this.firestore,t,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Xs(n,me._jsonSchema))return new me(t,r||null,new rt(Vt.fromString(n.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Ht("string",me._jsonSchemaVersion),referencePath:Ht("string")};class Or extends fr{constructor(t,n,r){super(t,n,jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new me(this.firestore,null,new rt(t))}withConverter(t){return new Or(this.firestore,t,this._path)}}function uf(e,t,...n){if(e=Br(e),e instanceof ic){const r=Vt.fromString(t,...n);return Eh(r),new Or(e,null,r)}{if(!(e instanceof me||e instanceof Or))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Vt.fromString(t,...n));return Eh(r),new Or(e.firestore,null,r)}}/**
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
 */const hf="AsyncQueue";class ff{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gg(this,"async_queue_retry"),this._c=()=>{const r=va();r&&X(hf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=va();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=va();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Qr(t))throw t;X(hf,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,_n("INTERNAL UNHANDLED ERROR: ",df(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=ec.createAndSchedule(this,t,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&at(47125,{Pc:df(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function df(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Pg extends ic{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new ff,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ff(t),this._firestoreClient=void 0,await t}}}function s0(e,t){const n=typeof e=="object"?e:pp(),r=typeof e=="string"?e:Ki,s=Ys(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KE("firestore");i&&r0(s,...i)}return s}function i0(e){if(e._terminated)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||o0(e),e._firestoreClient}function o0(e){const t=e._freezeSettings(),n=(function(s,i,a,l){return new qT(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Sg(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new JA(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(e._componentsProvider))}/**
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
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(Zt.fromBase64String(t))}catch(n){throw new J(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new De(Zt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Xs(t,De._jsonSchema))return De.fromBase64String(t.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:Ht("string",De._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class xg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new J(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Vg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new J(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new J(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tn._jsonSchemaVersion}}static fromJSON(t){if(Xs(t,tn._jsonSchema))return new tn(t.latitude,t.longitude)}}tn._jsonSchemaVersion="firestore/geoPoint/1.0",tn._jsonSchema={type:Ht("string",tn._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class en{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Xs(t,en._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new en(t.vectorValues);throw new J(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:Ht("string",en._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const a0=/^__.*__$/;function Dg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw at(40011,{Ac:e})}}class oc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new oc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ul(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Dg(this.Ac)&&a0.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class l0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||xo(t)}Cc(t,n,r,s=!1){return new oc({Ac:t,methodName:n,Dc:r,path:ce.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function c0(e){const t=e._freezeSettings(),n=xo(e._databaseId);return new l0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function u0(e,t,n,r=!1){return ac(n,e.Cc(r?4:3,t))}function ac(e,t){if(Ng(e=Br(e)))return f0("Unsupported field value:",t,e),h0(e,t);if(e instanceof Vg)return(function(r,s){if(!Dg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=ac(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(e,t)}return(function(r,s){if((r=Br(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xt.fromDate(r);return{timestampValue:rl(s.serializer,i)}}if(r instanceof xt){const i=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rl(s.serializer,i)}}if(r instanceof tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:rg(s.serializer,r._byteString)};if(r instanceof me){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return(function(a,l){return{mapValue:{fields:{[Op]:{stringValue:kp},[Wi]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return ql(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Eo(r)}`)})(e,t)}function h0(e,t){const n={};return Cp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yr(e,((r,s)=>{const i=ac(s,t.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Ng(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof xt||e instanceof tn||e instanceof De||e instanceof me||e instanceof Vg||e instanceof en)}function f0(e,t,n){if(!Ng(n)||!Rp(n)){const r=Eo(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}const d0=new RegExp("[~\\*/\\[\\]]");function p0(e,t,n){if(t.search(d0)>=0)throw ul(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xg(...t.split("."))._internalPath}catch{throw ul(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ul(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new J(U.INVALID_ARGUMENT,l+e+c)}/**
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
 */class Og{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new g0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Do("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class g0 extends Og{data(){return super.data()}}function Do(e,t){return typeof t=="string"?p0(e,t):t instanceof xg?t._internalPath:t._delegate._internalPath}/**
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
 */function m0(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new J(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}class kg extends lc{}function pf(e,t,...n){let r=[];t instanceof lc&&r.push(t),r=r.concat(n),(function(i){const a=i.filter((c=>c instanceof cc)).length,l=i.filter((c=>c instanceof No)).length;if(a>1||a>0&&l>0)throw new J(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)e=s._apply(e);return e}class No extends kg{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new No(t,n,r)}_apply(t){const n=this._parse(t);return Mg(t._query,n),new fr(t.firestore,t.converter,Ja(t._query,n))}_parse(t){const n=c0(t.firestore);return(function(i,a,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){_f(p,d);const x=[];for(const k of p)x.push(mf(c,i,k));m={arrayValue:{values:x}}}else m=mf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||_f(p,d),m=u0(l,a,p,d==="in"||d==="not-in");return qt.create(h,d,m)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function _0(e,t,n){const r=t,s=Do("where",e);return No._create(s,r,n)}class cc extends lc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new cc(t,n)}_parse(t){const n=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:He.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Mg(a,c),a=Ja(a,c)})(t._query,n),new fr(t.firestore,t.converter,Ja(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uc extends kg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new uc(t,n)}_apply(t){const n=(function(s,i,a){if(s.startAt!==null)throw new J(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ks(i,a)})(t._query,this._field,this._direction);return new fr(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Xr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,n))}}function gf(e,t="asc"){const n=t,r=Do("orderBy",e);return uc._create(r,n)}function mf(e,t,n){if(typeof(n=Br(n))=="string"){if(n==="")throw new J(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qp(t)&&n.indexOf("/")!==-1)throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Vt.fromString(n));if(!rt.isDocumentKey(r))throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ch(e,new rt(r))}if(n instanceof me)return Ch(e,n._key);throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eo(n)}.`)}function _f(e,t){if(!Array.isArray(e)||e.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Mg(e,t){const n=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(e.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class y0{convertValue(t,n="none"){switch($n(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw at(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Yr(t,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(t){const n=t.fields?.[Wi].arrayValue?.values?.map((r=>Ft(r.doubleValue)));return new en(n)}convertGeoPoint(t){return new tn(Ft(t.latitude),Ft(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ao(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hs(t));default:return null}}convertTimestamp(t){const n=Un(t);return new xt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Vt.fromString(t);Mt(ug(r),9688,{name:t});const s=new zs(r.get(1),r.get(3)),i=new rt(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class bi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kr extends Og{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Do("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",kr._jsonSchema={type:Ht("string",kr._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Mi extends kr{data(t={}){return super.data(t)}}class Mr{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new bi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new Mi(this._firestore,this._userDataWriter,r.key,r,new bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new Mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:v0(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Mr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=bp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function v0(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return at(61501,{type:e})}}Mr._jsonSchemaVersion="firestore/querySnapshot/1.0",Mr._jsonSchema={type:Ht("string",Mr._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class E0 extends y0{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new me(this.firestore,null,n)}}function yf(e){e=Ka(e,fr);const t=Ka(e.firestore,Pg),n=i0(t),r=new E0(t);return m0(e._query),n0(n,e._query).then((s=>new Mr(t,r,e,s)))}(function(t,n=!0){(function(s){Wr=s})(uT),Ln(new gn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Pg(new IT(r.getProvider("auth-internal")),new RT(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zs(h.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Je(mh,_h,t),Je(mh,_h,"esm2020")})();const w0=["id"],T0={class:"flex items-center place-content-between mb-4"},I0={class:"flex"},A0={class:"text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 hover:scale-[1.3] duration-500 ease-in-out"},b0=["src","alt","title"],R0={class:"flex"},S0={class:"flex flex-col"},C0={class:"text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark"},P0={class:"text-green-600 lg:text-sm"},x0={class:"flex self-start flex-col items-end"},V0={class:"text-green-400 md:text-xs lg:text-[8px] xl:text-xs mb-1"},D0=["href"],N0={key:1,class:"text-red-500 text-xs mt-1"},O0={class:"text-gray-600 mb-4 md:text-sm"},k0={class:"flex flex-col sm:flex-row gap-2"},M0=["href"],L0=["href"],F0=["href"],U0=["href"],B0={__name:"ProgramCard",props:{id:{type:String},name:{type:String,required:!0},description:{type:String},createdAt:{type:xt},version:{type:String},website:{type:String},icon:{type:String},link32:{type:String},link64:{type:String},linkcommon:{type:String},linkupdate:{type:String},textupdate:{type:String},ispaid:{type:Boolean,default:!1}},setup(e){const t=e,n=t.createdAt.toDate().toLocaleDateString();return(r,s)=>(ie(),xe("div",{class:"bg-green-50 rounded-lg shadow-md 2xl:p-5 lg:p-3 xs:p-3 hover:shadow-lg transition-shadow",id:t.id},[vt("div",T0,[vt("div",I0,[vt("div",A0,[vt("img",{src:"icons/"+t.name.replace(/\s+/g,"")+"Icon.png",width:"48",height:"48",alt:e.name,title:"Скачати "+t.name+" безкоштовно по прямому посиланню"},null,8,b0)]),vt("div",R0,[vt("div",S0,[vt("h1",C0,tr(e.name),1),vt("p",P0,tr(e.version),1)])])]),vt("div",x0,[vt("span",V0,tr(sr(n)),1),e.website?(ie(),xe("a",{key:0,href:t.website,class:"text-gray-600 md:text-xs lg:text-[8px] xl:text-xs",target:"_blank"}," 🌐 Сайт ",8,D0)):vr("",!0),e.ispaid?(ie(),xe("span",N0,s[0]||(s[0]=[vt("svg",{width:"12px",height:"12px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[vt("path",{d:"M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21",stroke:"#e35a5d","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),vt("title",null,"Ця програма є Shareware, будь ласка, підтримайте розробника")],-1)]))):vr("",!0)])]),vt("p",O0,tr(e.description),1),vt("div",k0,[e.link64?(ie(),xe("a",{key:0,href:t.link64,class:"bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px]",target:"_blank"}," Завантажити x64 ",8,M0)):vr("",!0),e.link32?(ie(),xe("a",{key:1,href:t.link32,class:"bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px]",target:"_blank"}," Завантажити x32 ",8,L0)):vr("",!0),e.linkcommon?(ie(),xe("a",{key:2,href:t.linkcommon,class:"bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px]",target:"_blank"}," Завантажити x86-x64 ",8,F0)):vr("",!0),e.linkupdate?(ie(),xe("a",{key:3,href:t.linkupdate,class:"bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px]",target:"_blank"},tr(e.textupdate),9,U0)):vr("",!0)])],8,w0))}};var $0="firebase",j0="12.1.0";/**
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
 */Je($0,j0,"app");const Lg="@firebase/installations",hc="0.6.19";/**
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
 */const Fg=1e4,Ug=`w:${hc}`,Bg="FIS_v2",q0="https://firebaseinstallations.googleapis.com/v1",H0=3600*1e3,z0="installations",G0="Installations";/**
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
 */const K0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},lr=new vo(z0,G0,K0);function $g(e){return e instanceof zn&&e.code.includes("request-failed")}/**
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
 */function jg({projectId:e}){return`${q0}/projects/${e}/installations`}function qg(e){return{token:e.token,requestStatus:2,expiresIn:Q0(e.expiresIn),creationTime:Date.now()}}async function Hg(e,t){const r=(await t.json()).error;return lr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function W0(e,{refreshToken:t}){const n=zg(e);return n.append("Authorization",Y0(t)),n}async function Gg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Q0(e){return Number(e.replace("s","000"))}function Y0(e){return`${Bg} ${e}`}/**
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
 */async function X0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=jg(e),s=zg(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Bg,appId:e.appId,sdkVersion:Ug},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Gg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:qg(h.authToken)}}else throw await Hg("Create Installation",c)}/**
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
 */function Kg(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function J0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Z0=/^[cdef][\w-]{21}$/,hl="";function tb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=eb(e);return Z0.test(n)?n:hl}catch{return hl}}function eb(e){return J0(e).substr(0,22)}/**
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
 */function Oo(e){return`${e.appName}!${e.appId}`}/**
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
 */const Wg=new Map;function Qg(e,t){const n=Oo(e);Yg(n,t),nb(n,t)}function Yg(e,t){const n=Wg.get(e);if(n)for(const r of n)r(t)}function nb(e,t){const n=rb();n&&n.postMessage({key:e,fid:t}),sb()}let nr=null;function rb(){return!nr&&"BroadcastChannel"in self&&(nr=new BroadcastChannel("[Firebase] FID Change"),nr.onmessage=e=>{Yg(e.data.key,e.data.fid)}),nr}function sb(){Wg.size===0&&nr&&(nr.close(),nr=null)}/**
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
 */const ib="firebase-installations-database",ob=1,cr="firebase-installations-store";let wa=null;function fc(){return wa||(wa=fp(ib,ob,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}})),wa}async function to(e,t){const n=Oo(e),s=(await fc()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Qg(e,t.fid),t}async function Xg(e){const t=Oo(e),r=(await fc()).transaction(cr,"readwrite");await r.objectStore(cr).delete(t),await r.done}async function ko(e,t){const n=Oo(e),s=(await fc()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Qg(e,l.fid),l}/**
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
 */async function dc(e){let t;const n=await ko(e.appConfig,r=>{const s=ab(r),i=lb(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===hl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ab(e){const t=e||{fid:tb(),registrationStatus:0};return Jg(t)}function lb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(lr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=cb(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ub(e)}:{installationEntry:t}}async function cb(e,t){try{const n=await X0(e,t);return to(e.appConfig,n)}catch(n){throw $g(n)&&n.customData.serverCode===409?await Xg(e.appConfig):await to(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ub(e){let t=await vf(e.appConfig);for(;t.registrationStatus===1;)await Kg(100),t=await vf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dc(e);return r||n}return t}function vf(e){return ko(e,t=>{if(!t)throw lr.create("installation-not-found");return Jg(t)})}function Jg(e){return hb(e)?{fid:e.fid,registrationStatus:0}:e}function hb(e){return e.registrationStatus===1&&e.registrationTime+Fg<Date.now()}/**
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
 */async function fb({appConfig:e,heartbeatServiceProvider:t},n){const r=db(e,n),s=W0(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Ug,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Gg(()=>fetch(r,l));if(c.ok){const h=await c.json();return qg(h)}else throw await Hg("Generate Auth Token",c)}function db(e,{fid:t}){return`${jg(e)}/${t}/authTokens:generate`}/**
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
 */async function pc(e,t=!1){let n;const r=await ko(e.appConfig,i=>{if(!Zg(i))throw lr.create("not-registered");const a=i.authToken;if(!t&&mb(a))return i;if(a.requestStatus===1)return n=pb(e,t),i;{if(!navigator.onLine)throw lr.create("app-offline");const l=yb(i);return n=gb(e,l),l}});return n?await n:r.authToken}async function pb(e,t){let n=await Ef(e.appConfig);for(;n.authToken.requestStatus===1;)await Kg(100),n=await Ef(e.appConfig);const r=n.authToken;return r.requestStatus===0?pc(e,t):r}function Ef(e){return ko(e,t=>{if(!Zg(t))throw lr.create("not-registered");const n=t.authToken;return vb(n)?{...t,authToken:{requestStatus:0}}:t})}async function gb(e,t){try{const n=await fb(e,t),r={...t,authToken:n};return await to(e.appConfig,r),n}catch(n){if($g(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xg(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await to(e.appConfig,r)}throw n}}function Zg(e){return e!==void 0&&e.registrationStatus===2}function mb(e){return e.requestStatus===2&&!_b(e)}function _b(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+H0}function yb(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function vb(e){return e.requestStatus===1&&e.requestTime+Fg<Date.now()}/**
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
 */async function Eb(e){const t=e,{installationEntry:n,registrationPromise:r}=await dc(t);return r?r.catch(console.error):pc(t).catch(console.error),n.fid}/**
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
 */async function wb(e,t=!1){const n=e;return await Tb(n),(await pc(n,t)).token}async function Tb(e){const{registrationPromise:t}=await dc(e);t&&await t}/**
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
 */function Ib(e){if(!e||!e.options)throw Ta("App Configuration");if(!e.name)throw Ta("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ta(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ta(e){return lr.create("missing-app-config-values",{valueName:e})}/**
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
 */const tm="installations",Ab="installations-internal",bb=e=>{const t=e.getProvider("app").getImmediate(),n=Ib(t),r=Ys(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Rb=e=>{const t=e.getProvider("app").getImmediate(),n=Ys(t,tm).getImmediate();return{getId:()=>Eb(n),getToken:s=>wb(n,s)}};function Sb(){Ln(new gn(tm,bb,"PUBLIC")),Ln(new gn(Ab,Rb,"PRIVATE"))}Sb();Je(Lg,hc);Je(Lg,hc,"esm2020");/**
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
 */const eo="analytics",Cb="firebase_id",Pb="origin",xb=60*1e3,Vb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ee=new Ml("@firebase/analytics");/**
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
 */const Db={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},be=new vo("analytics","Analytics",Db);/**
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
 */function Nb(e){if(!e.startsWith(gc)){const t=be.create("invalid-gtag-resource",{gtagURL:e});return Ee.warn(t.message),""}return e}function em(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ob(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function kb(e,t){const n=Ob("firebase-js-sdk-policy",{createScriptURL:Nb}),r=document.createElement("script"),s=`${gc}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Mb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Lb(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await em(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){Ee.error(l)}e("config",s,i)}async function Fb(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await em(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ee.error(i)}}function Ub(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await Fb(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await Lb(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){Ee.error(l)}}return s}function Bb(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Ub(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function $b(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(gc)&&n.src.includes(e))return n;return null}/**
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
 */const jb=30,qb=1e3;class Hb{constructor(t={},n=qb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const nm=new Hb;function zb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Gb(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:zb(n)},s=Vb.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const l=await i.json();l.error?.message&&(a=l.error.message)}catch{}throw be.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function Kb(e,t=nm,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw be.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Yb;return setTimeout(async()=>{l.abort()},xb),rm({appId:r,apiKey:s,measurementId:i},a,l,t)}async function rm(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=nm){const{appId:i,measurementId:a}=e;try{await Wb(r,t)}catch(l){if(a)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:a};throw l}try{const l=await Gb(e);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!Qb(c)){if(s.deleteThrottleMetadata(i),a)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:a};throw l}const h=Number(c?.customData?.httpStatus)===503?oh(n,s.intervalMillis,jb):oh(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(i,d),Ee.debug(`Calling attemptFetch again in ${h} millis`),rm(e,d,r,s)}}function Wb(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qb(e){if(!(e instanceof zn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Yb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Xb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a={...r,send_to:i};e("event",n,a)}}/**
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
 */async function Jb(){if(lp())try{await cp()}catch(e){return Ee.warn(be.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Ee.warn(be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zb(e,t,n,r,s,i,a){const l=Kb(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ee.error(m)),t.push(l);const c=Jb().then(m=>{if(m)return r.getId()}),[h,d]=await Promise.all([l,c]);$b(i)||kb(i,h.measurementId),s("js",new Date);const p=a?.config??{};return p[Pb]="firebase",p.update=!0,d!=null&&(p[Cb]=d),s("config",h.measurementId,p),h.measurementId}/**
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
 */class t1{constructor(t){this.app=t}_delete(){return delete Ns[this.app.options.appId],Promise.resolve()}}let Ns={},wf=[];const Tf={};let Ia="dataLayer",e1="gtag",If,sm,Af=!1;function n1(){const e=[];if(nw()&&e.push("This is a browser extension environment."),sw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=be.create("invalid-analytics-context",{errorInfo:t});Ee.warn(n.message)}}function r1(e,t,n){n1();const r=e.options.appId;if(!r)throw be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw be.create("no-api-key");if(Ns[r]!=null)throw be.create("already-exists",{id:r});if(!Af){Mb(Ia);const{wrappedGtag:i,gtagCore:a}=Bb(Ns,wf,Tf,Ia,e1);sm=i,If=a,Af=!0}return Ns[r]=Zb(e,wf,Tf,t,If,Ia,n),new t1(e)}function s1(e=pp()){e=Br(e);const t=Ys(e,eo);return t.isInitialized()?t.getImmediate():i1(e)}function i1(e,t={}){const n=Ys(e,eo);if(n.isInitialized()){const s=n.getImmediate();if($s(t,n.getOptions()))return s;throw be.create("already-initialized")}return n.initialize({options:t})}function o1(e,t,n,r){e=Br(e),Xb(sm,Ns[e.app.options.appId],t,n,r).catch(s=>Ee.error(s))}const bf="@firebase/analytics",Rf="0.10.18";function a1(){Ln(new gn(eo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return r1(r,s,n)},"PUBLIC")),Ln(new gn("analytics-internal",e,"PRIVATE")),Je(bf,Rf),Je(bf,Rf,"esm2020");function e(t){try{const n=t.getProvider(eo).getImmediate();return{logEvent:(r,s,i)=>o1(n,r,s,i)}}catch(n){throw be.create("interop-component-reg-failed",{reason:n})}}}a1();const l1={apiKey:"AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg",authDomain:"floppyppua.firebaseapp.com",projectId:"floppyppua",storageBucket:"floppyppua.firebasestorage.app",messagingSenderId:"632221136636",appId:"1:632221136636:web:0c906476f404df50dbc979",measurementId:"G-NJ8ZBYWWYH"},im=dp(l1);s1(im);const Sf=s0(im),c1={class:"xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark"},u1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},h1={methods:{reRender(){this.$forceUpdate()}}},Er=Object.assign(h1,{__name:"Category",props:{cat:{type:String},title:{type:String}},setup(e){const t=e,n=Ri([]),r=Ri(!0),s=Ri(null),i=async a=>{r.value=!0,s.value=null;try{if(t.cat=="newest"){const l=pf(uf(Sf,"programs"),gf("createdAt","desc")),c=await yf(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}else{const l=pf(uf(Sf,"programs"),_0("category","==",a),gf("name","asc")),c=await yf(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}}catch(l){console.error("Помилка при отриманні програм:",l),s.value=l}finally{r.value=!1}};return cd(()=>{i(t.cat)}),(a,l)=>(ie(),xe("div",{class:ao("wrapper_"+t.cat)},[vt("h2",c1,tr(e.title),1),vt("div",u1,[(ie(!0),xe(Ue,null,O_(n.value,c=>(ie(),go(B0,{key:c.id,id:c.id,name:c.name,description:c.description,createdAt:c.createdAt,icon:c.icon,version:c.version,link64:c.link64,link32:c.link32,linkcommon:c.linkcommon,linkupdate:c.linkupdate,textupdate:c.textupdate,website:c.website,ispaid:c.ispaid},null,8,["id","name","description","createdAt","icon","version","link64","link32","linkcommon","linkupdate","textupdate","website","ispaid"]))),128))])],2))}}),om=kE({history:uE(),routes:[{path:"/blog",name:"blog",component:()=>aa(()=>import("./BlogPage-CJOlbjZS.js"),[]),meta:{title:"Блог про програми, систему тощо - Скачати безкоштовний софт | Floppy"}},{path:"/contact",name:"contact",component:()=>aa(()=>import("./ContactPage-Lrdm_4L6.js"),[]),meta:{title:"Контакти - Скачати безкоштовний софт | Floppy"}},{path:"/faq",name:"faq",component:()=>aa(()=>import("./FAQPage-BEHto9b7.js"),[]),meta:{title:"Часті питання - Скачати безкоштовний софт | Floppy"}},{path:"/",name:"newest",component:Er,props:{cat:"newest",title:"Останні оновлення програм"},meta:{title:""}},{path:"/internet",name:"internet",component:Er,props:{cat:"internet",title:"Програми для Інтернету"},meta:{title:"Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy"}},{path:"/system",name:"system",component:Er,props:{cat:"system",title:"Системні утиліти"},meta:{title:"Програми для системи - Скачати безкоштовний софт | Floppy"}},{path:"/media",name:"media",component:Er,props:{cat:"media",title:"Програми для медіа"},meta:{title:"Програми для аудіо, відео - Скачати безкоштовний софт | Floppy"}},{path:"/files",name:"files",component:Er,props:{cat:"files",title:"Робота з файлами"},meta:{title:"Робота з файлами - Скачати безкоштовний софт | Floppy"}},{path:"/development",name:"development",component:Er,props:{cat:"dev",title:"Розробка, програмування"},meta:{title:"Розробка, програмування - Скачати безкоштовний софт | Floppy"}}]});om.beforeEach((e,t,n)=>{document.title=e.meta.title||"Скачати безкоштовний софт | Floppy",n()});const f1=gv({tagId:"G-LVRGKFB5Y6"}),Mo=Gy(Vv);Mo.use(om);Mo.use(f1);Mo.use(PrimeVue,{theme:{preset:Aura,options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}}});Mo.mount("#app");export{Ue as F,zd as _,d1 as a,go as b,xe as c,Ve as d,vt as e,ie as o,N_ as r,un as w};
