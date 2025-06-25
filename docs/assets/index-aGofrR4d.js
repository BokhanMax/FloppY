(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const St={},vr=[],Ge=()=>{},Sm=()=>!1,Yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),sl=e=>e.startsWith("onUpdate:"),ue=Object.assign,il=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cm=Object.prototype.hasOwnProperty,At=(e,t)=>Cm.call(e,t),it=Array.isArray,Er=e=>Xi(e)==="[object Map]",Ef=e=>Xi(e)==="[object Set]",ct=e=>typeof e=="function",Ft=e=>typeof e=="string",Bn=e=>typeof e=="symbol",xt=e=>e!==null&&typeof e=="object",wf=e=>(xt(e)||ct(e))&&ct(e.then)&&ct(e.catch),Tf=Object.prototype.toString,Xi=e=>Tf.call(e),Pm=e=>Xi(e).slice(8,-1),If=e=>Xi(e)==="[object Object]",ol=e=>Ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ds=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xm=/-(\w)/g,De=Ji(e=>e.replace(xm,(t,n)=>n?n.toUpperCase():"")),Vm=/\B([A-Z])/g,ir=Ji(e=>e.replace(Vm,"-$1").toLowerCase()),Zi=Ji(e=>e.charAt(0).toUpperCase()+e.slice(1)),qo=Ji(e=>e?`on${Zi(e)}`:""),Sn=(e,t)=>!Object.is(e,t),Ho=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ga=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Dm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ru;const to=()=>ru||(ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function al(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ft(r)?Mm(r):al(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ft(e)||xt(e))return e}const Nm=/;(?![^(]*\))/g,km=/:([^]+)/,Om=/\/\*[^]*?\*\//g;function Mm(e){const t={};return e.replace(Om,"").split(Nm).forEach(n=>{if(n){const r=n.split(km);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ll(e){let t="";if(Ft(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=ll(e[n]);r&&(t+=r+" ")}else if(xt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=rl(Lm);function Af(e){return!!e||e===""}const bf=e=>!!(e&&e.__v_isRef===!0),ps=e=>Ft(e)?e:e==null?"":it(e)||xt(e)&&(e.toString===Tf||!ct(e.toString))?bf(e)?ps(e.value):JSON.stringify(e,Rf,2):String(e),Rf=(e,t)=>bf(t)?Rf(e,t.value):Er(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[zo(r,i)+" =>"]=s,n),{})}:Ef(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zo(n))}:Bn(t)?zo(t):xt(t)&&!it(t)&&!If(t)?String(t):t,zo=(e,t="")=>{var n;return Bn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Um{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){this._on>0&&--this._on===0&&(_e=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bm(){return _e}let Rt;const Ko=new WeakSet;class Sf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&_e.active&&_e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),xf(this);const t=Rt,n=Fe;Rt=this,Fe=!0;try{return this.fn()}finally{Vf(this),Rt=t,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)hl(t);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ma(this)&&this.run()}get dirty(){return ma(this)}}let Cf=0,gs,ms;function Pf(e,t=!1){if(e.flags|=8,t){e.next=ms,ms=e;return}e.next=gs,gs=e}function cl(){Cf++}function ul(){if(--Cf>0)return;if(ms){let t=ms;for(ms=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;gs;){let t=gs;for(gs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function xf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hl(r),$m(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ma(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Df(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Df(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ps)||(e.globalVersion=Ps,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ma(e))))return;e.flags|=2;const t=e.dep,n=Rt,r=Fe;Rt=e,Fe=!0;try{xf(e);const s=e.fn(e._value);(t.version===0||Sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Rt=n,Fe=r,Vf(e),e.flags&=-3}}function hl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $m(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Fe=!0;const Nf=[];function ln(){Nf.push(Fe),Fe=!1}function cn(){const e=Nf.pop();Fe=e===void 0?!0:e}function su(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Rt;Rt=void 0;try{t()}finally{Rt=n}}}let Ps=0;class jm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Rt||!Fe||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new jm(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,kf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=r)}return n}trigger(t){this.version++,Ps++,this.notify(t)}notify(t){cl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ul()}}}function kf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)kf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const _a=new WeakMap,Jn=Symbol(""),ya=Symbol(""),xs=Symbol("");function ie(e,t,n){if(Fe&&Rt){let r=_a.get(e);r||_a.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new fl),s.map=r,s.key=n),s.track()}}function rn(e,t,n,r,s,i){const a=_a.get(e);if(!a){Ps++;return}const l=c=>{c&&c.trigger()};if(cl(),t==="clear")a.forEach(l);else{const c=it(e),h=c&&ol(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===xs||!Bn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(xs)),t){case"add":c?h&&l(a.get("length")):(l(a.get(Jn)),Er(e)&&l(a.get(ya)));break;case"delete":c||(l(a.get(Jn)),Er(e)&&l(a.get(ya)));break;case"set":Er(e)&&l(a.get(Jn));break}}ul()}function fr(e){const t=It(e);return t===e?t:(ie(t,"iterate",xs),xe(e)?t:t.map(Jt))}function eo(e){return ie(e=It(e),"iterate",xs),e}const qm={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,Jt)},concat(...e){return fr(this).concat(...e.map(t=>it(t)?fr(t):t))},entries(){return Go(this,"entries",e=>(e[1]=Jt(e[1]),e))},every(e,t){return tn(this,"every",e,t,void 0,arguments)},filter(e,t){return tn(this,"filter",e,t,n=>n.map(Jt),arguments)},find(e,t){return tn(this,"find",e,t,Jt,arguments)},findIndex(e,t){return tn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tn(this,"findLast",e,t,Jt,arguments)},findLastIndex(e,t){return tn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Wo(this,"includes",e)},indexOf(...e){return Wo(this,"indexOf",e)},join(e){return fr(this).join(e)},lastIndexOf(...e){return Wo(this,"lastIndexOf",e)},map(e,t){return tn(this,"map",e,t,void 0,arguments)},pop(){return is(this,"pop")},push(...e){return is(this,"push",e)},reduce(e,...t){return iu(this,"reduce",e,t)},reduceRight(e,...t){return iu(this,"reduceRight",e,t)},shift(){return is(this,"shift")},some(e,t){return tn(this,"some",e,t,void 0,arguments)},splice(...e){return is(this,"splice",e)},toReversed(){return fr(this).toReversed()},toSorted(e){return fr(this).toSorted(e)},toSpliced(...e){return fr(this).toSpliced(...e)},unshift(...e){return is(this,"unshift",e)},values(){return Go(this,"values",Jt)}};function Go(e,t,n){const r=eo(e),s=r[t]();return r!==e&&!xe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Hm=Array.prototype;function tn(e,t,n,r,s,i){const a=eo(e),l=a!==e&&!xe(e),c=a[t];if(c!==Hm[t]){const p=c.apply(e,i);return l?Jt(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,Jt(p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function iu(e,t,n,r){const s=eo(e);let i=n;return s!==e&&(xe(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,Jt(l),c,e)}),s[t](i,...r)}function Wo(e,t,n){const r=It(e);ie(r,"iterate",xs);const s=r[t](...n);return(s===-1||s===!1)&&gl(n[0])?(n[0]=It(n[0]),r[t](...n)):s}function is(e,t,n=[]){ln(),cl();const r=It(e)[t].apply(e,n);return ul(),cn(),r}const zm=rl("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bn));function Km(e){Bn(e)||(e=String(e));const t=It(this);return ie(t,"has",e),t.hasOwnProperty(e)}class Mf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?n_:Bf:i?Uf:Ff).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=qm[n]))return c;if(n==="hasOwnProperty")return Km}const l=Reflect.get(t,n,ce(t)?t:r);return(Bn(n)?Of.has(n):zm(n))||(s||ie(t,"get",n),i)?l:ce(l)?a&&ol(n)?l:l.value:xt(l)?s?jf(l):no(l):l}}class Lf extends Mf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Vn(i);if(!xe(r)&&!Vn(r)&&(i=It(i),r=It(r)),!it(t)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const a=it(t)&&ol(n)?Number(n)<t.length:At(t,n),l=Reflect.set(t,n,r,ce(t)?t:s);return t===It(s)&&(a?Sn(r,i)&&rn(t,"set",n,r):rn(t,"add",n,r)),l}deleteProperty(t,n){const r=At(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&rn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Bn(n)||!Of.has(n))&&ie(t,"has",n),r}ownKeys(t){return ie(t,"iterate",it(t)?"length":Jn),Reflect.ownKeys(t)}}class Gm extends Mf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wm=new Lf,Qm=new Gm,Ym=new Lf(!0);const va=e=>e,hi=e=>Reflect.getPrototypeOf(e);function Xm(e,t,n){return function(...r){const s=this.__v_raw,i=It(s),a=Er(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?va:t?Vi:Jt;return!t&&ie(i,"iterate",c?ya:Jn),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function fi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jm(e,t){const n={get(s){const i=this.__v_raw,a=It(i),l=It(s);e||(Sn(s,l)&&ie(a,"get",s),ie(a,"get",l));const{has:c}=hi(a),h=t?va:e?Vi:Jt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ie(It(s),"iterate",Jn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=It(i),l=It(s);return e||(Sn(s,l)&&ie(a,"has",s),ie(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=It(l),h=t?va:e?Vi:Jt;return!e&&ie(c,"iterate",Jn),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ue(n,e?{add:fi("add"),set:fi("set"),delete:fi("delete"),clear:fi("clear")}:{add(s){!t&&!xe(s)&&!Vn(s)&&(s=It(s));const i=It(this);return hi(i).has.call(i,s)||(i.add(s),rn(i,"add",s,s)),this},set(s,i){!t&&!xe(i)&&!Vn(i)&&(i=It(i));const a=It(this),{has:l,get:c}=hi(a);let h=l.call(a,s);h||(s=It(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Sn(i,d)&&rn(a,"set",s,i):rn(a,"add",s,i),this},delete(s){const i=It(this),{has:a,get:l}=hi(i);let c=a.call(i,s);c||(s=It(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&rn(i,"delete",s,void 0),h},clear(){const s=It(this),i=s.size!==0,a=s.clear();return i&&rn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Xm(s,e,t)}),n}function dl(e,t){const n=Jm(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(At(n,s)&&s in r?n:r,s,i)}const Zm={get:dl(!1,!1)},t_={get:dl(!1,!0)},e_={get:dl(!0,!1)};const Ff=new WeakMap,Uf=new WeakMap,Bf=new WeakMap,n_=new WeakMap;function r_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function s_(e){return e.__v_skip||!Object.isExtensible(e)?0:r_(Pm(e))}function no(e){return Vn(e)?e:pl(e,!1,Wm,Zm,Ff)}function $f(e){return pl(e,!1,Ym,t_,Uf)}function jf(e){return pl(e,!0,Qm,e_,Bf)}function pl(e,t,n,r,s){if(!xt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function wr(e){return Vn(e)?wr(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function xe(e){return!!(e&&e.__v_isShallow)}function gl(e){return e?!!e.__v_raw:!1}function It(e){const t=e&&e.__v_raw;return t?It(t):e}function i_(e){return!At(e,"__v_skip")&&Object.isExtensible(e)&&ga(e,"__v_skip",!0),e}const Jt=e=>xt(e)?no(e):e,Vi=e=>xt(e)?jf(e):e;function ce(e){return e?e.__v_isRef===!0:!1}function Zn(e){return qf(e,!1)}function o_(e){return qf(e,!0)}function qf(e,t){return ce(e)?e:new a_(e,t)}class a_{constructor(t,n){this.dep=new fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:It(t),this._value=n?t:Jt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||xe(t)||Vn(t);t=r?t:It(t),Sn(t,n)&&(this._rawValue=t,this._value=r?t:Jt(t),this.dep.trigger())}}function Tr(e){return ce(e)?e.value:e}const l_={get:(e,t,n)=>t==="__v_raw"?e:Tr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Hf(e){return wr(e)?e:new Proxy(e,l_)}class c_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return Pf(this,!0),!0}get value(){const t=this.dep.track();return Df(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function u_(e,t,n=!1){let r,s;return ct(e)?r=e:(r=e.get,s=e.set),new c_(r,s,n)}const di={},Di=new WeakMap;let Wn;function h_(e,t=!1,n=Wn){if(n){let r=Di.get(n);r||Di.set(n,r=[]),r.push(e)}}function f_(e,t,n=St){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=z=>s?z:xe(z)||s===!1||s===0?An(z,1):An(z);let d,p,m,v,x=!1,k=!1;if(ce(e)?(p=()=>e.value,x=xe(e)):wr(e)?(p=()=>h(e),x=!0):it(e)?(k=!0,x=e.some(z=>wr(z)||xe(z)),p=()=>e.map(z=>{if(ce(z))return z.value;if(wr(z))return h(z);if(ct(z))return c?c(z,2):z()})):ct(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){ln();try{m()}finally{cn()}}const z=Wn;Wn=d;try{return c?c(e,3,[v]):e(v)}finally{Wn=z}}:p=Ge,t&&s){const z=p,ht=s===!0?1/0:s;p=()=>An(z(),ht)}const L=Bm(),W=()=>{d.stop(),L&&L.active&&il(L.effects,d)};if(i&&t){const z=t;t=(...ht)=>{z(...ht),W()}}let U=k?new Array(e.length).fill(di):di;const H=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const ht=d.run();if(s||x||(k?ht.some((dt,I)=>Sn(dt,U[I])):Sn(ht,U))){m&&m();const dt=Wn;Wn=d;try{const I=[ht,U===di?void 0:k&&U[0]===di?[]:U,v];U=ht,c?c(t,3,I):t(...I)}finally{Wn=dt}}}else d.run()};return l&&l(H),d=new Sf(p),d.scheduler=a?()=>a(H,!1):H,v=z=>h_(z,!1,d),m=d.onStop=()=>{const z=Di.get(d);if(z){if(c)c(z,4);else for(const ht of z)ht();Di.delete(d)}},t?r?H(!0):U=d.run():a?a(H.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function An(e,t=1/0,n){if(t<=0||!xt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ce(e))An(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)An(e[r],t,n);else if(Ef(e)||Er(e))e.forEach(r=>{An(r,t,n)});else if(If(e)){for(const r in e)An(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&An(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qs(e,t,n,r){try{return r?e(...r):e()}catch(s){ro(s,t,n)}}function Ye(e,t,n,r){if(ct(e)){const s=qs(e,t,n,r);return s&&wf(s)&&s.catch(i=>{ro(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ye(e[i],t,n,r));return s}}function ro(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){ln(),qs(i,null,10,[e,c,h]),cn();return}}d_(e,n,s,r,a)}function d_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const pe=[];let qe=-1;const Ir=[];let wn=null,dr=0;const zf=Promise.resolve();let Ni=null;function Kf(e){const t=Ni||zf;return e?t.then(this?e.bind(this):e):t}function p_(e){let t=qe+1,n=pe.length;for(;t<n;){const r=t+n>>>1,s=pe[r],i=Vs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ml(e){if(!(e.flags&1)){const t=Vs(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=Vs(n)?pe.push(e):pe.splice(p_(t),0,e),e.flags|=1,Gf()}}function Gf(){Ni||(Ni=zf.then(Qf))}function g_(e){it(e)?Ir.push(...e):wn&&e.id===-1?wn.splice(dr+1,0,e):e.flags&1||(Ir.push(e),e.flags|=1),Gf()}function ou(e,t,n=qe+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wf(e){if(Ir.length){const t=[...new Set(Ir)].sort((n,r)=>Vs(n)-Vs(r));if(Ir.length=0,wn){wn.push(...t);return}for(wn=t,dr=0;dr<wn.length;dr++){const n=wn[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wn=null,dr=0}}const Vs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Qf(e){try{for(qe=0;qe<pe.length;qe++){const t=pe[qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qe<pe.length;qe++){const t=pe[qe];t&&(t.flags&=-2)}qe=-1,pe.length=0,Wf(),Ni=null,(pe.length||Ir.length)&&Qf()}}let Le=null,Yf=null;function ki(e){const t=Le;return Le=e,Yf=e&&e.type.__scopeId||null,t}function sn(e,t=Le,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&mu(-1);const i=ki(t);let a;try{a=e(...s)}finally{ki(i),r._d&&mu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(ln(),Ye(c,n,8,[e.el,l,e,t]),cn())}}const m_=Symbol("_vte"),__=e=>e.__isTeleport;function _l(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_l(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Xf(e,t){return ct(e)?ue({name:e.name},t,{setup:e}):e}function Jf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _s(e,t,n,r,s=!1){if(it(e)){e.forEach((x,k)=>_s(x,t&&(it(t)?t[k]:t),n,r,s));return}if(ys(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_s(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Il(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===St?l.refs={}:l.refs,p=l.setupState,m=It(p),v=p===St?()=>!1:x=>At(m,x);if(h!=null&&h!==c&&(Ft(h)?(d[h]=null,v(h)&&(p[h]=null)):ce(h)&&(h.value=null)),ct(c))qs(c,l,12,[a,d]);else{const x=Ft(c),k=ce(c);if(x||k){const L=()=>{if(e.f){const W=x?v(c)?p[c]:d[c]:c.value;s?it(W)&&il(W,i):it(W)?W.includes(i)||W.push(i):x?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else x?(d[c]=a,v(c)&&(p[c]=a)):k&&(c.value=a,e.k&&(d[e.k]=a))};a?(L.id=-1,Te(L,n)):L()}}}to().requestIdleCallback;to().cancelIdleCallback;const ys=e=>!!e.type.__asyncLoader,Zf=e=>e.type.__isKeepAlive;function y_(e,t){td(e,"a",t)}function v_(e,t){td(e,"da",t)}function td(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(so(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Zf(s.parent.vnode)&&E_(r,t,n,s),s=s.parent}}function E_(e,t,n,r){const s=so(t,e,r,!0);ed(()=>{il(r[t],s)},n)}function so(e,t,n=ae,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{ln();const l=Hs(n),c=Ye(t,n,e,a);return l(),cn(),c});return r?s.unshift(i):s.push(i),i}}const dn=e=>(t,n=ae)=>{(!Ns||e==="sp")&&so(e,(...r)=>t(...r),n)},w_=dn("bm"),yl=dn("m"),T_=dn("bu"),I_=dn("u"),A_=dn("bum"),ed=dn("um"),b_=dn("sp"),R_=dn("rtg"),S_=dn("rtc");function C_(e,t=ae){so("ec",e,t)}const nd="components";function vl(e,t){return sd(nd,e,!0,t)||e}const rd=Symbol.for("v-ndc");function P_(e){return Ft(e)?sd(nd,e,!1)||e:e||rd}function sd(e,t,n=!0,r=!1){const s=Le||ae;if(s){const i=s.type;{const l=my(i,!1);if(l&&(l===t||l===De(t)||l===Zi(De(t))))return i}const a=au(s[e]||i[e],t)||au(s.appContext[e],t);return!a&&r?i:a}}function au(e,t){return e&&(e[t]||e[De(t)]||e[Zi(De(t))])}function id(e,t,n,r){let s;const i=n,a=it(e);if(a||Ft(e)){const l=a&&wr(e);let c=!1,h=!1;l&&(c=!xe(e),h=Vn(e),e=eo(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(c?h?Vi(Jt(e[d])):Jt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(xt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const Ea=e=>e?bd(e)?Il(e):Ea(e.parent):null,vs=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ea(e.parent),$root:e=>Ea(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ad(e),$forceUpdate:e=>e.f||(e.f=()=>{ml(e.update)}),$nextTick:e=>e.n||(e.n=Kf.bind(e.proxy)),$watch:e=>Y_.bind(e)}),Qo=(e,t)=>e!==St&&!e.__isScriptSetup&&At(e,t),x_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Qo(r,t))return a[t]=1,r[t];if(s!==St&&At(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&At(h,t))return a[t]=3,i[t];if(n!==St&&At(n,t))return a[t]=4,n[t];wa&&(a[t]=0)}}const d=vs[t];let p,m;if(d)return t==="$attrs"&&ie(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==St&&At(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,At(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Qo(s,t)?(s[t]=n,!0):r!==St&&At(r,t)?(r[t]=n,!0):At(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==St&&At(e,a)||Qo(t,a)||(l=i[0])&&At(l,a)||At(r,a)||At(vs,a)||At(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:At(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function lu(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wa=!0;function V_(e){const t=ad(e),n=e.proxy,r=e.ctx;wa=!1,t.beforeCreate&&cu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:x,activated:k,deactivated:L,beforeDestroy:W,beforeUnmount:U,destroyed:H,unmounted:z,render:ht,renderTracked:dt,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:S,directives:w,filters:he}=t;if(h&&D_(h,r,null),a)for(const pt in a){const ft=a[pt];ct(ft)&&(r[pt]=ft.bind(n))}if(s){const pt=s.call(n,n);xt(pt)&&(e.data=no(pt))}if(wa=!0,i)for(const pt in i){const ft=i[pt],Ee=ct(ft)?ft.bind(n,n):ct(ft.get)?ft.get.bind(n,n):Ge,ke=!ct(ft)&&ct(ft.set)?ft.set.bind(n):Ge,Re=Me({get:Ee,set:ke});Object.defineProperty(r,pt,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Vt=>Re.value=Vt})}if(l)for(const pt in l)od(l[pt],r,n,pt);if(c){const pt=ct(c)?c.call(n):c;Reflect.ownKeys(pt).forEach(ft=>{wi(ft,pt[ft])})}d&&cu(d,e,"c");function Bt(pt,ft){it(ft)?ft.forEach(Ee=>pt(Ee.bind(n))):ft&&pt(ft.bind(n))}if(Bt(w_,p),Bt(yl,m),Bt(T_,v),Bt(I_,x),Bt(y_,k),Bt(v_,L),Bt(C_,y),Bt(S_,dt),Bt(R_,I),Bt(A_,U),Bt(ed,z),Bt(b_,T),it(A))if(A.length){const pt=e.exposed||(e.exposed={});A.forEach(ft=>{Object.defineProperty(pt,ft,{get:()=>n[ft],set:Ee=>n[ft]=Ee})})}else e.exposed||(e.exposed={});ht&&e.render===Ge&&(e.render=ht),b!=null&&(e.inheritAttrs=b),S&&(e.components=S),w&&(e.directives=w),T&&Jf(e)}function D_(e,t,n=Ge){it(e)&&(e=Ta(e));for(const r in e){const s=e[r];let i;xt(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function cu(e,t,n){Ye(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function od(e,t,n,r){let s=r.includes(".")?Ed(n,r):()=>n[r];if(Ft(e)){const i=t[e];ct(i)&&Ti(s,i)}else if(ct(e))Ti(s,e.bind(n));else if(xt(e))if(it(e))e.forEach(i=>od(i,t,n,r));else{const i=ct(e.handler)?e.handler.bind(n):t[e.handler];ct(i)&&Ti(s,i,e)}}function ad(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Oi(c,h,a,!0)),Oi(c,t,a)),xt(t)&&i.set(t,c),c}function Oi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Oi(e,i,n,!0),s&&s.forEach(a=>Oi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=N_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const N_={data:uu,props:hu,emits:hu,methods:cs,computed:cs,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:cs,directives:cs,watch:O_,provide:uu,inject:k_};function uu(e,t){return t?e?function(){return ue(ct(e)?e.call(this,this):e,ct(t)?t.call(this,this):t)}:t:e}function k_(e,t){return cs(Ta(e),Ta(t))}function Ta(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function cs(e,t){return e?ue(Object.create(null),e,t):t}function hu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:ue(Object.create(null),lu(e),lu(t??{})):t}function O_(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function ld(){return{app:null,config:{isNativeTag:Sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M_=0;function L_(e,t){return function(r,s=null){ct(r)||(r=ue({},r)),s!=null&&!xt(s)&&(s=null);const i=ld(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:M_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ct(d.install)?(a.add(d),d.install(h,...p)):ct(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||kt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(v,d,m),c=!0,h._container=d,d.__vue_app__=h,Il(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Ye(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Ar;Ar=h;try{return d()}finally{Ar=p}}};return h}}let Ar=null;function wi(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function an(e,t,n=!1){const r=ae||Le;if(r||Ar){let s=Ar?Ar._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ct(t)?t.call(r&&r.proxy):t}}const cd={},ud=()=>Object.create(cd),hd=e=>Object.getPrototypeOf(e)===cd;function F_(e,t,n,r=!1){const s={},i=ud();e.propsDefaults=Object.create(null),fd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:$f(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function U_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=It(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(io(e.emitsOptions,m))continue;const v=t[m];if(c)if(At(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const x=De(m);s[x]=Ia(c,l,x,v,e,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{fd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!At(t,p)&&((d=ir(p))===p||!At(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ia(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!At(t,p))&&(delete i[p],h=!0)}h&&rn(e.attrs,"set","")}function fd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ds(c))continue;const h=t[c];let d;s&&At(s,d=De(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:io(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=It(n),h=l||St;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ia(s,c,p,h[p],e,!At(h,p))}}return a}function Ia(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=At(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ct(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Hs(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ir(n))&&(r=!0))}return r}const B_=new WeakMap;function dd(e,t,n=!1){const r=n?B_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ct(e)){const d=p=>{c=!0;const[m,v]=dd(p,t,!0);ue(a,m),v&&l.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return xt(e)&&r.set(e,vr),vr;if(it(i))for(let d=0;d<i.length;d++){const p=De(i[d]);fu(p)&&(a[p]=St)}else if(i)for(const d in i){const p=De(d);if(fu(p)){const m=i[d],v=a[p]=it(m)||ct(m)?{type:m}:ue({},m),x=v.type;let k=!1,L=!0;if(it(x))for(let W=0;W<x.length;++W){const U=x[W],H=ct(U)&&U.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(L=!1)}else k=ct(x)&&x.name==="Boolean";v[0]=k,v[1]=L,(k||At(v,"default"))&&l.push(p)}}const h=[a,l];return xt(e)&&r.set(e,h),h}function fu(e){return e[0]!=="$"&&!ds(e)}const El=e=>e[0]==="_"||e==="$stable",wl=e=>it(e)?e.map(ze):[ze(e)],$_=(e,t,n)=>{if(t._n)return t;const r=sn((...s)=>wl(t(...s)),n);return r._c=!1,r},pd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(El(s))continue;const i=e[s];if(ct(i))t[s]=$_(s,i,r);else if(i!=null){const a=wl(i);t[s]=()=>a}}},gd=(e,t)=>{const n=wl(t);e.slots.default=()=>n},md=(e,t,n)=>{for(const r in t)(n||!El(r))&&(e[r]=t[r])},j_=(e,t,n)=>{const r=e.slots=ud();if(e.vnode.shapeFlag&32){const s=t.__;s&&ga(r,"__",s,!0);const i=t._;i?(md(r,t,n),n&&ga(r,"_",i,!0)):pd(t,r)}else t&&gd(e,t)},q_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=St;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:md(s,t,n):(i=!t.$stable,pd(t,s)),a=t}else t&&(gd(e,t),a={default:1});if(i)for(const l in s)!El(l)&&a[l]==null&&delete s[l]},Te=ry;function H_(e){return z_(e)}function z_(e,t){const n=to();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Ge,insertStaticContent:x}=e,k=(_,E,R,D=null,M=null,N=null,G=void 0,j=null,$=!!E.dynamicChildren)=>{if(_===E)return;_&&!os(_,E)&&(D=V(_),Vt(_,M,N,!0),_=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:F,ref:et,shapeFlag:K}=E;switch(F){case oo:L(_,E,R,D);break;case Dn:W(_,E,R,D);break;case Ii:_==null&&U(E,R,D,G);break;case ge:S(_,E,R,D,M,N,G,j,$);break;default:K&1?ht(_,E,R,D,M,N,G,j,$):K&6?w(_,E,R,D,M,N,G,j,$):(K&64||K&128)&&F.process(_,E,R,D,M,N,G,j,$,J)}et!=null&&M?_s(et,_&&_.ref,N,E||_,!E):et==null&&_&&_.ref!=null&&_s(_.ref,null,N,_,!0)},L=(_,E,R,D)=>{if(_==null)r(E.el=l(E.children),R,D);else{const M=E.el=_.el;E.children!==_.children&&h(M,E.children)}},W=(_,E,R,D)=>{_==null?r(E.el=c(E.children||""),R,D):E.el=_.el},U=(_,E,R,D)=>{[_.el,_.anchor]=x(_.children,E,R,D,_.el,_.anchor)},H=({el:_,anchor:E},R,D)=>{let M;for(;_&&_!==E;)M=m(_),r(_,R,D),_=M;r(E,R,D)},z=({el:_,anchor:E})=>{let R;for(;_&&_!==E;)R=m(_),s(_),_=R;s(E)},ht=(_,E,R,D,M,N,G,j,$)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),_==null?dt(E,R,D,M,N,G,j,$):T(_,E,M,N,G,j,$)},dt=(_,E,R,D,M,N,G,j)=>{let $,F;const{props:et,shapeFlag:K,transition:tt,dirs:st}=_;if($=_.el=a(_.type,N,et&&et.is,et),K&8?d($,_.children):K&16&&y(_.children,$,null,D,M,Yo(_,N),G,j),st&&Kn(_,null,D,"created"),I($,_,_.scopeId,G,D),et){for(const lt in et)lt!=="value"&&!ds(lt)&&i($,lt,null,et[lt],N,D);"value"in et&&i($,"value",null,et.value,N),(F=et.onVnodeBeforeMount)&&je(F,D,_)}st&&Kn(_,null,D,"beforeMount");const nt=K_(M,tt);nt&&tt.beforeEnter($),r($,E,R),((F=et&&et.onVnodeMounted)||nt||st)&&Te(()=>{F&&je(F,D,_),nt&&tt.enter($),st&&Kn(_,null,D,"mounted")},M)},I=(_,E,R,D,M)=>{if(R&&v(_,R),D)for(let N=0;N<D.length;N++)v(_,D[N]);if(M){let N=M.subTree;if(E===N||Td(N.type)&&(N.ssContent===E||N.ssFallback===E)){const G=M.vnode;I(_,G,G.scopeId,G.slotScopeIds,M.parent)}}},y=(_,E,R,D,M,N,G,j,$=0)=>{for(let F=$;F<_.length;F++){const et=_[F]=j?Tn(_[F]):ze(_[F]);k(null,et,E,R,D,M,N,G,j)}},T=(_,E,R,D,M,N,G)=>{const j=E.el=_.el;let{patchFlag:$,dynamicChildren:F,dirs:et}=E;$|=_.patchFlag&16;const K=_.props||St,tt=E.props||St;let st;if(R&&Gn(R,!1),(st=tt.onVnodeBeforeUpdate)&&je(st,R,E,_),et&&Kn(E,_,R,"beforeUpdate"),R&&Gn(R,!0),(K.innerHTML&&tt.innerHTML==null||K.textContent&&tt.textContent==null)&&d(j,""),F?A(_.dynamicChildren,F,j,R,D,Yo(E,M),N):G||ft(_,E,j,null,R,D,Yo(E,M),N,!1),$>0){if($&16)b(j,K,tt,R,M);else if($&2&&K.class!==tt.class&&i(j,"class",null,tt.class,M),$&4&&i(j,"style",K.style,tt.style,M),$&8){const nt=E.dynamicProps;for(let lt=0;lt<nt.length;lt++){const gt=nt[lt],Gt=K[gt],Wt=tt[gt];(Wt!==Gt||gt==="value")&&i(j,gt,Gt,Wt,M,R)}}$&1&&_.children!==E.children&&d(j,E.children)}else!G&&F==null&&b(j,K,tt,R,M);((st=tt.onVnodeUpdated)||et)&&Te(()=>{st&&je(st,R,E,_),et&&Kn(E,_,R,"updated")},D)},A=(_,E,R,D,M,N,G)=>{for(let j=0;j<E.length;j++){const $=_[j],F=E[j],et=$.el&&($.type===ge||!os($,F)||$.shapeFlag&198)?p($.el):R;k($,F,et,null,D,M,N,G,!0)}},b=(_,E,R,D,M)=>{if(E!==R){if(E!==St)for(const N in E)!ds(N)&&!(N in R)&&i(_,N,E[N],null,M,D);for(const N in R){if(ds(N))continue;const G=R[N],j=E[N];G!==j&&N!=="value"&&i(_,N,j,G,M,D)}"value"in R&&i(_,"value",E.value,R.value,M)}},S=(_,E,R,D,M,N,G,j,$)=>{const F=E.el=_?_.el:l(""),et=E.anchor=_?_.anchor:l("");let{patchFlag:K,dynamicChildren:tt,slotScopeIds:st}=E;st&&(j=j?j.concat(st):st),_==null?(r(F,R,D),r(et,R,D),y(E.children||[],R,et,M,N,G,j,$)):K>0&&K&64&&tt&&_.dynamicChildren?(A(_.dynamicChildren,tt,R,M,N,G,j),(E.key!=null||M&&E===M.subTree)&&_d(_,E,!0)):ft(_,E,R,et,M,N,G,j,$)},w=(_,E,R,D,M,N,G,j,$)=>{E.slotScopeIds=j,_==null?E.shapeFlag&512?M.ctx.activate(E,R,D,G,$):he(E,R,D,M,N,G,$):be(_,E,$)},he=(_,E,R,D,M,N,G)=>{const j=_.component=hy(_,D,M);if(Zf(_)&&(j.ctx.renderer=J),fy(j,!1,G),j.asyncDep){if(M&&M.registerDep(j,Bt,G),!_.el){const $=j.subTree=kt(Dn);W(null,$,E,R)}}else Bt(j,_,E,R,M,N,G)},be=(_,E,R)=>{const D=E.component=_.component;if(ey(_,E,R))if(D.asyncDep&&!D.asyncResolved){pt(D,E,R);return}else D.next=E,D.update();else E.el=_.el,D.vnode=E},Bt=(_,E,R,D,M,N,G)=>{const j=()=>{if(_.isMounted){let{next:K,bu:tt,u:st,parent:nt,vnode:lt}=_;{const te=yd(_);if(te){K&&(K.el=lt.el,pt(_,K,G)),te.asyncDep.then(()=>{_.isUnmounted||j()});return}}let gt=K,Gt;Gn(_,!1),K?(K.el=lt.el,pt(_,K,G)):K=lt,tt&&Ho(tt),(Gt=K.props&&K.props.onVnodeBeforeUpdate)&&je(Gt,nt,K,lt),Gn(_,!0);const Wt=pu(_),Se=_.subTree;_.subTree=Wt,k(Se,Wt,p(Se.el),V(Se),_,M,N),K.el=Wt.el,gt===null&&ny(_,Wt.el),st&&Te(st,M),(Gt=K.props&&K.props.onVnodeUpdated)&&Te(()=>je(Gt,nt,K,lt),M)}else{let K;const{el:tt,props:st}=E,{bm:nt,m:lt,parent:gt,root:Gt,type:Wt}=_,Se=ys(E);Gn(_,!1),nt&&Ho(nt),!Se&&(K=st&&st.onVnodeBeforeMount)&&je(K,gt,E),Gn(_,!0);{Gt.ce&&Gt.ce._def.shadowRoot!==!1&&Gt.ce._injectChildStyle(Wt);const te=_.subTree=pu(_);k(null,te,R,D,_,M,N),E.el=te.el}if(lt&&Te(lt,M),!Se&&(K=st&&st.onVnodeMounted)){const te=E;Te(()=>je(K,gt,te),M)}(E.shapeFlag&256||gt&&ys(gt.vnode)&&gt.vnode.shapeFlag&256)&&_.a&&Te(_.a,M),_.isMounted=!0,E=R=D=null}};_.scope.on();const $=_.effect=new Sf(j);_.scope.off();const F=_.update=$.run.bind($),et=_.job=$.runIfDirty.bind($);et.i=_,et.id=_.uid,$.scheduler=()=>ml(et),Gn(_,!0),F()},pt=(_,E,R)=>{E.component=_;const D=_.vnode.props;_.vnode=E,_.next=null,U_(_,E.props,D,R),q_(_,E.children,R),ln(),ou(_),cn()},ft=(_,E,R,D,M,N,G,j,$=!1)=>{const F=_&&_.children,et=_?_.shapeFlag:0,K=E.children,{patchFlag:tt,shapeFlag:st}=E;if(tt>0){if(tt&128){ke(F,K,R,D,M,N,G,j,$);return}else if(tt&256){Ee(F,K,R,D,M,N,G,j,$);return}}st&8?(et&16&&me(F,M,N),K!==F&&d(R,K)):et&16?st&16?ke(F,K,R,D,M,N,G,j,$):me(F,M,N,!0):(et&8&&d(R,""),st&16&&y(K,R,D,M,N,G,j,$))},Ee=(_,E,R,D,M,N,G,j,$)=>{_=_||vr,E=E||vr;const F=_.length,et=E.length,K=Math.min(F,et);let tt;for(tt=0;tt<K;tt++){const st=E[tt]=$?Tn(E[tt]):ze(E[tt]);k(_[tt],st,R,null,M,N,G,j,$)}F>et?me(_,M,N,!0,!1,K):y(E,R,D,M,N,G,j,$,K)},ke=(_,E,R,D,M,N,G,j,$)=>{let F=0;const et=E.length;let K=_.length-1,tt=et-1;for(;F<=K&&F<=tt;){const st=_[F],nt=E[F]=$?Tn(E[F]):ze(E[F]);if(os(st,nt))k(st,nt,R,null,M,N,G,j,$);else break;F++}for(;F<=K&&F<=tt;){const st=_[K],nt=E[tt]=$?Tn(E[tt]):ze(E[tt]);if(os(st,nt))k(st,nt,R,null,M,N,G,j,$);else break;K--,tt--}if(F>K){if(F<=tt){const st=tt+1,nt=st<et?E[st].el:D;for(;F<=tt;)k(null,E[F]=$?Tn(E[F]):ze(E[F]),R,nt,M,N,G,j,$),F++}}else if(F>tt)for(;F<=K;)Vt(_[F],M,N,!0),F++;else{const st=F,nt=F,lt=new Map;for(F=nt;F<=tt;F++){const Qt=E[F]=$?Tn(E[F]):ze(E[F]);Qt.key!=null&&lt.set(Qt.key,F)}let gt,Gt=0;const Wt=tt-nt+1;let Se=!1,te=0;const mn=new Array(Wt);for(F=0;F<Wt;F++)mn[F]=0;for(F=st;F<=K;F++){const Qt=_[F];if(Gt>=Wt){Vt(Qt,M,N,!0);continue}let Ce;if(Qt.key!=null)Ce=lt.get(Qt.key);else for(gt=nt;gt<=tt;gt++)if(mn[gt-nt]===0&&os(Qt,E[gt])){Ce=gt;break}Ce===void 0?Vt(Qt,M,N,!0):(mn[Ce-nt]=F+1,Ce>=te?te=Ce:Se=!0,k(Qt,E[Ce],R,null,M,N,G,j,$),Gt++)}const Kr=Se?G_(mn):vr;for(gt=Kr.length-1,F=Wt-1;F>=0;F--){const Qt=nt+F,Ce=E[Qt],Qs=Qt+1<et?E[Qt+1].el:D;mn[F]===0?k(null,Ce,R,Qs,M,N,G,j,$):Se&&(gt<0||F!==Kr[gt]?Re(Ce,R,Qs,2):gt--)}}},Re=(_,E,R,D,M=null)=>{const{el:N,type:G,transition:j,children:$,shapeFlag:F}=_;if(F&6){Re(_.component.subTree,E,R,D);return}if(F&128){_.suspense.move(E,R,D);return}if(F&64){G.move(_,E,R,J);return}if(G===ge){r(N,E,R);for(let K=0;K<$.length;K++)Re($[K],E,R,D);r(_.anchor,E,R);return}if(G===Ii){H(_,E,R);return}if(D!==2&&F&1&&j)if(D===0)j.beforeEnter(N),r(N,E,R),Te(()=>j.enter(N),M);else{const{leave:K,delayLeave:tt,afterLeave:st}=j,nt=()=>{_.ctx.isUnmounted?s(N):r(N,E,R)},lt=()=>{K(N,()=>{nt(),st&&st()})};tt?tt(N,nt,lt):lt()}else r(N,E,R)},Vt=(_,E,R,D=!1,M=!1)=>{const{type:N,props:G,ref:j,children:$,dynamicChildren:F,shapeFlag:et,patchFlag:K,dirs:tt,cacheIndex:st}=_;if(K===-2&&(M=!1),j!=null&&(ln(),_s(j,null,R,_,!0),cn()),st!=null&&(E.renderCache[st]=void 0),et&256){E.ctx.deactivate(_);return}const nt=et&1&&tt,lt=!ys(_);let gt;if(lt&&(gt=G&&G.onVnodeBeforeUnmount)&&je(gt,E,_),et&6)$e(_.component,R,D);else{if(et&128){_.suspense.unmount(R,D);return}nt&&Kn(_,null,E,"beforeUnmount"),et&64?_.type.remove(_,E,R,J,D):F&&!F.hasOnce&&(N!==ge||K>0&&K&64)?me(F,E,R,!1,!0):(N===ge&&K&384||!M&&et&16)&&me($,E,R),D&&Dt(_)}(lt&&(gt=G&&G.onVnodeUnmounted)||nt)&&Te(()=>{gt&&je(gt,E,_),nt&&Kn(_,null,E,"unmounted")},R)},Dt=_=>{const{type:E,el:R,anchor:D,transition:M}=_;if(E===ge){gn(R,D);return}if(E===Ii){z(_);return}const N=()=>{s(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:j}=M,$=()=>G(R,N);j?j(_.el,N,$):$()}else N()},gn=(_,E)=>{let R;for(;_!==E;)R=m(_),s(_),_=R;s(E)},$e=(_,E,R)=>{const{bum:D,scope:M,job:N,subTree:G,um:j,m:$,a:F,parent:et,slots:{__:K}}=_;du($),du(F),D&&Ho(D),et&&it(K)&&K.forEach(tt=>{et.renderCache[tt]=void 0}),M.stop(),N&&(N.flags|=8,Vt(G,_,E,R)),j&&Te(j,E),Te(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},me=(_,E,R,D=!1,M=!1,N=0)=>{for(let G=N;G<_.length;G++)Vt(_[G],E,R,D,M)},V=_=>{if(_.shapeFlag&6)return V(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=m(_.anchor||_.el),R=E&&E[m_];return R?m(R):E};let Y=!1;const Q=(_,E,R)=>{_==null?E._vnode&&Vt(E._vnode,null,null,!0):k(E._vnode||null,_,E,null,null,null,R),E._vnode=_,Y||(Y=!0,ou(),Wf(),Y=!1)},J={p:k,um:Vt,m:Re,r:Dt,mt:he,mc:y,pc:ft,pbc:A,n:V,o:e};return{render:Q,hydrate:void 0,createApp:L_(Q)}}function Yo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function K_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _d(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Tn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&_d(a,l)),l.type===oo&&(l.el=a.el),l.type===Dn&&!l.el&&(l.el=a.el)}}function G_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function yd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yd(t)}function du(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const W_=Symbol.for("v-scx"),Q_=()=>an(W_);function Ti(e,t,n){return vd(e,t,n)}function vd(e,t,n=St){const{immediate:r,deep:s,flush:i,once:a}=n,l=ue({},n),c=t&&r||!t&&i!=="post";let h;if(Ns){if(i==="sync"){const v=Q_();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Ge,v.resume=Ge,v.pause=Ge,v}}const d=ae;l.call=(v,x,k)=>Ye(v,d,x,k);let p=!1;i==="post"?l.scheduler=v=>{Te(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,x)=>{x?v():ml(v)}),l.augmentJob=v=>{t&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=f_(e,t,l);return Ns&&(h?h.push(m):c&&m()),m}function Y_(e,t,n){const r=this.proxy,s=Ft(e)?e.includes(".")?Ed(r,e):()=>r[e]:e.bind(r,r);let i;ct(t)?i=t:(i=t.handler,n=t);const a=Hs(this),l=vd(s,i.bind(r),n);return a(),l}function Ed(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const X_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${ir(t)}Modifiers`];function J_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||St;let s=n;const i=t.startsWith("update:"),a=i&&X_(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ft(d)?d.trim():d)),a.number&&(s=n.map(Dm)));let l,c=r[l=qo(t)]||r[l=qo(De(t))];!c&&i&&(c=r[l=qo(ir(t))]),c&&Ye(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ye(h,e,6,s)}}function wd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ct(e)){const c=h=>{const d=wd(h,t,!0);d&&(l=!0,ue(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(xt(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):ue(a,i),xt(e)&&r.set(e,a),a)}function io(e,t){return!e||!Yi(t)?!1:(t=t.slice(2).replace(/Once$/,""),At(e,t[0].toLowerCase()+t.slice(1))||At(e,ir(t))||At(e,t))}function pu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:x,inheritAttrs:k}=e,L=ki(e);let W,U;try{if(n.shapeFlag&4){const z=s||r,ht=z;W=ze(h.call(ht,z,d,p,v,m,x)),U=l}else{const z=t;W=ze(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),U=t.props?l:Z_(l)}}catch(z){Es.length=0,ro(z,e,1),W=kt(Dn)}let H=W;if(U&&k!==!1){const z=Object.keys(U),{shapeFlag:ht}=H;z.length&&ht&7&&(i&&z.some(sl)&&(U=ty(U,i)),H=Cr(H,U,!1,!0))}return n.dirs&&(H=Cr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&_l(H,n.transition),W=H,ki(L),W}const Z_=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yi(n))&&((t||(t={}))[n]=e[n]);return t},ty=(e,t)=>{const n={};for(const r in e)(!sl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ey(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!io(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?gu(r,a,h):!0:!!a;return!1}function gu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!io(n,i))return!0}return!1}function ny({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Td=e=>e.__isSuspense;function ry(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):g_(e)}const ge=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),Es=[];let Ie=null;function zt(e=!1){Es.push(Ie=e?null:[])}function sy(){Es.pop(),Ie=Es[Es.length-1]||null}let Ds=1;function mu(e,t=!1){Ds+=e,e<0&&Ie&&t&&(Ie.hasOnce=!0)}function Id(e){return e.dynamicChildren=Ds>0?Ie||vr:null,sy(),Ds>0&&Ie&&Ie.push(e),e}function Pe(e,t,n,r,s,i){return Id(Pt(e,t,n,r,s,i,!0))}function Br(e,t,n,r,s){return Id(kt(e,t,n,r,s,!0))}function Mi(e){return e?e.__v_isVNode===!0:!1}function os(e,t){return e.type===t.type&&e.key===t.key}const Ad=({key:e})=>e??null,Ai=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ft(e)||ce(e)||ct(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function Pt(e,t=null,n=null,r=0,s=null,i=e===ge?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ad(t),ref:t&&Ai(t),scopeId:Yf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return l?(Tl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ft(n)?8:16),Ds>0&&!a&&Ie&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ie.push(c),c}const kt=iy;function iy(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===rd)&&(e=Dn),Mi(e)){const l=Cr(e,t,!0);return n&&Tl(l,n),Ds>0&&!i&&Ie&&(l.shapeFlag&6?Ie[Ie.indexOf(e)]=l:Ie.push(l)),l.patchFlag=-2,l}if(_y(e)&&(e=e.__vccOpts),t){t=oy(t);let{class:l,style:c}=t;l&&!Ft(l)&&(t.class=ll(l)),xt(c)&&(gl(c)&&!it(c)&&(c=ue({},c)),t.style=al(c))}const a=Ft(e)?1:Td(e)?128:__(e)?64:xt(e)?4:ct(e)?2:0;return Pt(e,t,n,r,s,a,i,!0)}function oy(e){return e?gl(e)||hd(e)?ue({},e):e:null}function Cr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?ly(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Ad(h),ref:t&&t.ref?n&&i?it(i)?i.concat(Ai(t)):[i,Ai(t)]:Ai(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cr(e.ssContent),ssFallback:e.ssFallback&&Cr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&_l(d,c.clone(d)),d}function on(e=" ",t=0){return kt(oo,null,e,t)}function ay(e,t){const n=kt(Ii,null,e);return n.staticCount=t,n}function pi(e="",t=!1){return t?(zt(),Br(Dn,null,e)):kt(Dn,null,e)}function ze(e){return e==null||typeof e=="boolean"?kt(Dn):it(e)?kt(ge,null,e.slice()):Mi(e)?Tn(e):kt(oo,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cr(e)}function Tl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Tl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!hd(t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ct(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function ly(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ll([t.class,r.class]));else if(s==="style")t.style=al([t.style,r.style]);else if(Yi(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function je(e,t,n,r=null){Ye(e,t,7,[n,r])}const cy=ld();let uy=0;function hy(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||cy,i={uid:uy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dd(r,s),emitsOptions:wd(r,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:r.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=J_.bind(null,i),e.ce&&e.ce(i),i}let ae=null,Li,Aa;{const e=to(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Li=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),Aa=t("__VUE_SSR_SETTERS__",n=>Ns=n)}const Hs=e=>{const t=ae;return Li(e),e.scope.on(),()=>{e.scope.off(),Li(t)}},_u=()=>{ae&&ae.scope.off(),Li(null)};function bd(e){return e.vnode.shapeFlag&4}let Ns=!1;function fy(e,t=!1,n=!1){t&&Aa(t);const{props:r,children:s}=e.vnode,i=bd(e);F_(e,r,i,t),j_(e,s,n||t);const a=i?dy(e,t):void 0;return t&&Aa(!1),a}function dy(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,x_);const{setup:r}=n;if(r){ln();const s=e.setupContext=r.length>1?gy(e):null,i=Hs(e),a=qs(r,e,0,[e.props,s]),l=wf(a);if(cn(),i(),(l||e.sp)&&!ys(e)&&Jf(e),l){if(a.then(_u,_u),t)return a.then(c=>{yu(e,c)}).catch(c=>{ro(c,e,0)});e.asyncDep=a}else yu(e,a)}else Rd(e)}function yu(e,t,n){ct(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xt(t)&&(e.setupState=Hf(t)),Rd(e)}function Rd(e,t,n){const r=e.type;e.render||(e.render=r.render||Ge);{const s=Hs(e);ln();try{V_(e)}finally{cn(),s()}}}const py={get(e,t){return ie(e,"get",""),e[t]}};function gy(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,py),slots:e.slots,emit:e.emit,expose:t}}function Il(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hf(i_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vs)return vs[n](e)},has(t,n){return n in t||n in vs}})):e.proxy}function my(e,t=!0){return ct(e)?e.displayName||e.name:e.name||t&&e.__name}function _y(e){return ct(e)&&"__vccOpts"in e}const Me=(e,t)=>u_(e,t,Ns);function Sd(e,t,n){const r=arguments.length;return r===2?xt(t)&&!it(t)?Mi(t)?kt(e,null,[t]):kt(e,t):kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mi(n)&&(n=[n]),kt(e,t,n))}const yy="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const vu=typeof window<"u"&&window.trustedTypes;if(vu)try{ba=vu.createPolicy("vue",{createHTML:e=>e})}catch{}const Cd=ba?e=>ba.createHTML(e):e=>e,vy="http://www.w3.org/2000/svg",Ey="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,Eu=nn&&nn.createElement("template"),wy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?nn.createElementNS(vy,e):t==="mathml"?nn.createElementNS(Ey,e):n?nn.createElement(e,{is:n}):nn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>nn.createTextNode(e),createComment:e=>nn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Eu.innerHTML=Cd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Eu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ty=Symbol("_vtc");function Iy(e,t,n){const r=e[Ty];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const wu=Symbol("_vod"),Ay=Symbol("_vsh"),by=Symbol(""),Ry=/(^|;)\s*display\s*:/;function Sy(e,t,n){const r=e.style,s=Ft(n);let i=!1;if(n&&!s){if(t)if(Ft(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&bi(r,l,"")}else for(const a in t)n[a]==null&&bi(r,a,"");for(const a in n)a==="display"&&(i=!0),bi(r,a,n[a])}else if(s){if(t!==n){const a=r[by];a&&(n+=";"+a),r.cssText=n,i=Ry.test(n)}}else t&&e.removeAttribute("style");wu in e&&(e[wu]=i?r.display:"",e[Ay]&&(r.display="none"))}const Tu=/\s*!important$/;function bi(e,t,n){if(it(n))n.forEach(r=>bi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cy(e,t);Tu.test(n)?e.setProperty(ir(r),n.replace(Tu,""),"important"):e[r]=n}}const Iu=["Webkit","Moz","ms"],Xo={};function Cy(e,t){const n=Xo[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return Xo[t]=r;r=Zi(r);for(let s=0;s<Iu.length;s++){const i=Iu[s]+r;if(i in e)return Xo[t]=i}return t}const Au="http://www.w3.org/1999/xlink";function bu(e,t,n,r,s,i=Fm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Au,t.slice(6,t.length)):e.setAttributeNS(Au,t,n):n==null||i&&!Af(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Bn(n)?String(n):n)}function Ru(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Cd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Af(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Py(e,t,n,r){e.addEventListener(t,n,r)}function xy(e,t,n,r){e.removeEventListener(t,n,r)}const Su=Symbol("_vei");function Vy(e,t,n,r,s=null){const i=e[Su]||(e[Su]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Dy(t);if(r){const h=i[t]=Oy(r,s);Py(e,l,h,c)}else a&&(xy(e,l,a,c),i[t]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function Dy(e){let t;if(Cu.test(e)){t={};let r;for(;r=e.match(Cu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ir(e.slice(2)),t]}let Jo=0;const Ny=Promise.resolve(),ky=()=>Jo||(Ny.then(()=>Jo=0),Jo=Date.now());function Oy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ye(My(r,n.value),t,5,[r])};return n.value=e,n.attached=ky(),n}function My(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Pu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ly=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Iy(e,r,a):t==="style"?Sy(e,n,r):Yi(t)?sl(t)||Vy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fy(e,t,r,a))?(Ru(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ft(r))?Ru(e,De(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bu(e,t,r,a))};function Fy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Pu(t)&&ct(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pu(t)&&Ft(n)?!1:t in e}const Uy=ue({patchProp:Ly},wy);let xu;function By(){return xu||(xu=H_(Uy))}const $y=(...e)=>{const t=By().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=qy(r);if(!s)return;const i=t._component;!ct(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,jy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function jy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qy(e){return Ft(e)?document.querySelector(e):e}function ao(){return typeof window>"u"||typeof document>"u"}async function Hy(e,t){return new Promise((n,r)=>{if(ao())return n();let s=document.head,i=document.createElement("script");if(i.async=!0,i.src=e,i.type=(t==null?void 0:t.type)??"text/javascript",t!=null&&t.defer&&(i.defer=!0),t!=null&&t.nonce&&i.setAttribute("nonce",t.nonce),t==null?void 0:t.preconnect){let a=document.createElement("link"),l=new URL(e);a.href=l.origin,a.rel="preconnect",s.appendChild(a)}s.appendChild(i),i.onload=()=>n(),i.onerror=a=>r(a)})}function Vu(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}function Pd(e,t){let n={...e};for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let s=t[r],i=e[r];Vu(s)&&Vu(i)?n[r]=Pd(i,s):n[r]=s}return n}function zy(e){if(ao())return;let t=new URL(window.location.href);t.search="";for(let[n,r]of Object.entries(e))t.searchParams.set(n,r);window.history.replaceState({},"",t.toString())}const Ra="utm_";function Ky(e){let t=new URL(e),n={},r=[],s={};t.searchParams.forEach((i,a)=>{a.includes(Ra)?(n[a.replace(Ra,"").replace("campaign","id")]=i,r.push(a)):s[a]=i});for(let i of r)t.searchParams.delete(i);return{utmParams:n,cleanQueryParams:s,cleanUrl:t.toString()}}function Gy(e){let t=RegExp(`[?&]${Ra}`);return!!e.match(t)}function Wy(e,t){let n=t.endsWith("/")?t:`${t}/`,r=e.startsWith("/")?e.substring(1):e;return`${n}${r}`}const Qy={resource:{url:"https://www.googletagmanager.com/gtag/js",inject:!0},dataLayerName:"dataLayer",gtagName:"gtag",groupName:"default",initMode:"auto"};let Sa={...Qy};function Ne(){return Sa}function Yy(e){Sa=Pd(Sa,e)}function Ve(...e){let{dataLayerName:t,gtagName:n}=Ne();ao()||(window[t]=window[t]||[],window[n]=function(){window[t].push(arguments)},window[n](...e))}function xd(e){let{tagId:t,additionalAccounts:n}=Ne();if(t&&(Ve("config",t,e),n))for(let r of n)Ve("config",r.tagId,e)}function Al(e,t){Ve("consent",e,t)}function Vd(e="default"){Al(e,{ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"granted"})}function Dd(e="default"){Al(e,{ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"denied"})}function Xy(e){xd({custom_map:e})}function lo(e,t){let{groupName:n,additionalAccounts:r}=Ne();t.send_to===void 0&&(r!=null&&r.length)&&(t.send_to=n),Ve("event",e,t)}function Jy(e,t){lo(e,t)}function Zy(e){lo("exception",e)}function Nd(e){Ve("set","linker",e)}function Du(e,t){t?window[e]=t:delete window[e]}function kd(e,t){let{tagId:n,additionalAccounts:r}=Ne();if(!ao()&&(Du(`ga-disable-${e??n}`,t),!(!(r!=null&&r.length)||e)))for(let s of r)Du(`ga-disable-${s.tagId}`,t)}function tv(e){kd(e,!0)}function ev(e){kd(e,void 0)}function Od(...e){Ve("set",...e)}function Md(e){var r;let{pageTracker:t}=Ne(),n;if(typeof e=="string")n={page_path:e};else if("path"in e){let s=(t==null?void 0:t.router.options.history.base)??"",i=t!=null&&t.useRouteFullPath?e.fullPath:e.path;n={...e.name?{page_title:e.name.toString()}:{},page_path:t!=null&&t.useRouterBasePath?Wy(i,s):i}}else n=e;if(n.page_location===void 0&&(n.page_location=window.location.href),n.send_page_view===void 0&&(n.send_page_view=(t==null?void 0:t.sendPageView)??!0),n.page_path!=="/"&&((r=n.page_path)!=null&&r.endsWith("/"))&&(n.page_path=n.page_path.slice(0,-1)),Gy(n.page_location)){let{utmParams:s,cleanUrl:i,cleanQueryParams:a}=Ky(n.page_location);n.page_location=i,zy(a),Od("campaign",s)}Ve("event","page_view",n)}function Ld(e){let{appName:t}=Ne(),n={};typeof e=="string"?n.screen_name=e:"path"in e?n.screen_name=e.name??e.path:n=e,t&&(n==null?void 0:n.app_name)===void 0&&(n.app_name=t),Ve("event","screen_view",n)}function nv(e){lo("timing_complete",e)}function Nu(e={}){return{send_page_view:!1,anonymize_ip:!0,...e}}function rv(){var l,c;let{tagId:e,config:t,groupName:n,linker:r,additionalAccounts:s,hooks:i,consentMode:a}=Ne();if(e){if((l=i==null?void 0:i["config:init:before"])==null||l.call(i),a==="granted"?Vd():a==="denied"&&Dd(),r&&Nd(r),Ve("js",new Date),Ve("config",e,Nu(t)),s)for(let h of s)Ve("config",h.tagId,Nu({groups:n,...h.config}));(c=i==null?void 0:i["config:init:after"])==null||c.call(i)}}function sv(e){var n;let{pageTracker:t}=Ne();return t!=null&&t.exclude?typeof t.exclude=="function"?t.exclude(e):(n=t.exclude)==null?void 0:n.some(({name:r,path:s}={})=>r&&r===e.name||s&&s===e.path):!1}function ku(e){var s,i;let{pageTracker:t,hooks:n}=Ne();if(sv(e))return;(s=n==null?void 0:n["router:track:before"])==null||s.call(n,e);let r;if(t!=null&&t.template&&(r=typeof t.template=="function"?t.template(e):t.template),t==null?void 0:t.useScreenview){let a=r&&"screen_name"in r?r:e;Ld(a)}else{let a=r&&"page_path"in r?r:e;Md(a)}(i=n==null?void 0:n["router:track:after"])==null||i.call(n,e)}async function iv(){let{pageTracker:e}=Ne();if(!(e!=null&&e.router))return;let{router:t}=e;await t.isReady(),ku(t.currentRoute.value),t.afterEach((n,r)=>{n.path!==r.path&&ku(n)})}async function ov(){var i,a;let{resource:e,dataLayerName:t,tagId:n,pageTracker:r,hooks:s}=Ne();if(n&&(rv(),r!=null&&r.router&&iv(),e.inject))try{await Hy(`${e.url}?id=${n}&l=${t}`,{preconnect:e.preconnect,defer:e.defer,nonce:e.nonce}),(i=s==null?void 0:s["script:loaded"])==null||i.call(s)}catch(l){(a=s==null?void 0:s["script:error"])==null||a.call(s,l)}}function av(){let{initMode:e}=Ne();e!=="manual"&&ov()}function lv(e){Yy(e),av()}const cv={config:xd,consent:Al,consentDeniedAll:Dd,consentGrantedAll:Vd,customMap:Xy,ecommerce:Jy,event:lo,exception:Zy,linker:Nd,optIn:ev,optOut:tv,pageview:Md,screenview:Ld,set:Od,time:nv,query:Ve};function uv(e){return lv(e),t=>{t.config.globalProperties.$gtag=cv}}const Fd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},hv={},fv={class:"bg-green-50 shadow-md"},dv={class:"container mx-auto px-4 py-4"},pv={class:"flex flex-col md:flex-row justify-between items-center"},gv={class:"flex flex-wrap justify-center md:justify-end gap-6"};function mv(e,t){const n=vl("RouterLink");return zt(),Pe("header",fv,[Pt("div",dv,[Pt("div",pv,[t[5]||(t[5]=ay('<a class="flex items-center mb-4 md:mb-0" href="/"><div class="text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="2" ry="2" fill="#90EE90" stroke="#7FDD7F" stroke-width="1"></rect><rect x="12" y="12" width="24" height="8" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"></rect><rect x="10" y="25" width="28" height="14" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"></rect><circle cx="24" cy="32" r="2.5" fill="#7FDD7F"></circle><rect x="38" y="18" width="2" height="6" fill="#7FDD7F"></rect><polygon points="38,6 42,6 42,10 38,10" fill="#7FDD7F"></polygon><line x1="14" y1="28" x2="34" y2="28" stroke="#C0C0C0" stroke-width="0.5"></line><line x1="14" y1="31" x2="30" y2="31" stroke="#C0C0C0" stroke-width="0.5"></line><line x1="14" y1="34" x2="32" y2="34" stroke="#C0C0C0" stroke-width="0.5"></line></svg></div><h1 class="xs:text-base 2xl:text-2xl font-bold text-green-dark">Floppy - безкоштовний софт</h1></a>',1)),Pt("nav",gv,[kt(n,{to:"/internet",class:"text-green-dark hover:text-green-500 transition-colors"},{default:sn(()=>t[0]||(t[0]=[on("Інтернет")])),_:1,__:[0]}),kt(n,{to:"/media",class:"text-green-dark hover:text-green-500 transition-colors"},{default:sn(()=>t[1]||(t[1]=[on("Медіа")])),_:1,__:[1]}),kt(n,{to:"/files",class:"text-green-dark hover:text-green-500 transition-colors"},{default:sn(()=>t[2]||(t[2]=[on("Файли")])),_:1,__:[2]}),kt(n,{to:"/system",class:"text-green-dark hover:text-green-500 transition-colors"},{default:sn(()=>t[3]||(t[3]=[on("Система")])),_:1,__:[3]}),kt(n,{to:"/development",class:"text-green-dark hover:text-green-500 transition-colors"},{default:sn(()=>t[4]||(t[4]=[on("Розробка")])),_:1,__:[4]})])])])])}const _v=Fd(hv,[["render",mv]]),yv={},vv={class:"bg-green-50 mt-12"},Ev={class:"container mx-auto px-4 py-8"},wv={class:"text-center"};function Tv(e,t){const n=vl("RouterLink");return zt(),Pe(ge,null,[Pt("footer",vv,[Pt("div",Ev,[Pt("div",wv,[t[2]||(t[2]=Pt("p",{class:"text-gray-600 mb-4"}," © 2025 Floppy - скачати безкоштовний софт. Всі права на програми належать їхнім розробникам. ",-1)),kt(n,{to:"/contact",class:"text-green-600 hover:text-green-700 transition-colors mr-16"},{default:sn(()=>t[0]||(t[0]=[on(" Зв'язатись з адміном ")])),_:1,__:[0]}),kt(n,{to:"/faq",class:"text-green-600 hover:text-green-700 transition-colors"},{default:sn(()=>t[1]||(t[1]=[on(" FAQ ")])),_:1,__:[1]})])])]),(zt(),Br(P_(e.script),null,{default:sn(()=>t[3]||(t[3]=[on(` // Add smooth scrolling for navigation links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); }); // Add hover effects to software cards document.querySelectorAll('.bg-green-50').forEach(card => { card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-2px)'; this.style.transition = 'transform 0.2s ease'; }); card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; }); }); `)])),_:1,__:[3]}))],64)}const Iv=Fd(yv,[["render",Tv]]),Av={class:"container mx-auto px-4 py-8"},bv={__name:"Floppy",setup(e){return(t,n)=>{const r=vl("router-view");return zt(),Pe(ge,null,[kt(_v),Pt("main",Av,[(zt(),Br(r,{key:t.$route.fullPath}))]),kt(Iv)],64)}}},Rv="modulepreload",Sv=function(e){return"/"+e},Ou={},Zo=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(h=>{if(h=Sv(h),h in Ou)return;Ou[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Rv,d||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((v,x)=>{m.addEventListener("load",v),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof document<"u";function Ud(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ud(e.default)}const Tt=Object.assign;function ta(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ue(s)?s.map(e):e(s)}return n}const ws=()=>{},Ue=Array.isArray,Bd=/#/g,Pv=/&/g,xv=/\//g,Vv=/=/g,Dv=/\?/g,$d=/\+/g,Nv=/%5B/g,kv=/%5D/g,jd=/%5E/g,Ov=/%60/g,qd=/%7B/g,Mv=/%7C/g,Hd=/%7D/g,Lv=/%20/g;function bl(e){return encodeURI(""+e).replace(Mv,"|").replace(Nv,"[").replace(kv,"]")}function Fv(e){return bl(e).replace(qd,"{").replace(Hd,"}").replace(jd,"^")}function Ca(e){return bl(e).replace($d,"%2B").replace(Lv,"+").replace(Bd,"%23").replace(Pv,"%26").replace(Ov,"`").replace(qd,"{").replace(Hd,"}").replace(jd,"^")}function Uv(e){return Ca(e).replace(Vv,"%3D")}function Bv(e){return bl(e).replace(Bd,"%23").replace(Dv,"%3F")}function $v(e){return e==null?"":Bv(e).replace(xv,"%2F")}function ks(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const jv=/\/$/,qv=e=>e.replace(jv,"");function ea(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Gv(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ks(a)}}function Hv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Mu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pr(t.matched[r],n.matched[s])&&zd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kv(e[n],t[n]))return!1;return!0}function Kv(e,t){return Ue(e)?Lu(e,t):Ue(t)?Lu(t,e):e===t}function Lu(e,t){return Ue(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Gv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Os;(function(e){e.pop="pop",e.push="push"})(Os||(Os={}));var Ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ts||(Ts={}));function Wv(e){if(!e)if(pr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qv(e)}const Qv=/^[^#]+#/;function Yv(e,t){return e.replace(Qv,"#")+t}function Xv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const co=()=>({left:window.scrollX,top:window.scrollY});function Jv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Xv(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fu(e,t){return(history.state?history.state.position-t:-1)+e}const Pa=new Map;function Zv(e,t){Pa.set(e,t)}function tE(e){const t=Pa.get(e);return Pa.delete(e),t}let eE=()=>location.protocol+"//"+location.host;function Kd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Mu(c,"")}return Mu(n,e)+r+s}function nE(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const v=Kd(e,location),x=n.value,k=t.value;let L=0;if(m){if(n.value=v,t.value=m,a&&a===x){a=null;return}L=k?m.position-k.position:0}else r(v);s.forEach(W=>{W(n.value,x,{delta:L,type:Os.pop,direction:L?L>0?Ts.forward:Ts.back:Ts.unknown})})};function c(){a=n.value}function h(m){s.push(m);const v=()=>{const x=s.indexOf(m);x>-1&&s.splice(x,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(Tt({},m.state,{scroll:co()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Uu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?co():null}}function rE(e){const{history:t,location:n}=window,r={value:Kd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:eE()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function a(c,h){const d=Tt({},t.state,Uu(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Tt({},s.value,t.state,{forward:c,scroll:co()});i(d.current,d,!0);const p=Tt({},Uu(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function sE(e){e=Wv(e);const t=rE(e),n=nE(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Tt({location:"",base:e,go:r,createHref:Yv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function iE(e){return typeof e=="string"||e&&typeof e=="object"}function Gd(e){return typeof e=="string"||typeof e=="symbol"}const Wd=Symbol("");var Bu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Bu||(Bu={}));function xr(e,t){return Tt(new Error,{type:e,[Wd]:!0},t)}function en(e,t){return e instanceof Error&&Wd in e&&(t==null||!!(e.type&t))}const $u="[^/]+?",oE={sensitive:!1,strict:!1,start:!0,end:!0},aE=/[.+*?^${}()[\]/\\]/g;function lE(e,t){const n=Tt({},oE,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(aE,"\\$&"),v+=40;else if(m.type===1){const{value:x,repeatable:k,optional:L,regexp:W}=m;i.push({name:x,repeatable:k,optional:L});const U=W||$u;if(U!==$u){v+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${x}" (${U}): `+z.message)}}let H=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(H=L&&h.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),s+=H,v+=20,L&&(v+=-8),k&&(v+=-20),U===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",x=i[m-1];p[x.name]=v&&x.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:x,repeatable:k,optional:L}=v,W=x in h?h[x]:"";if(Ue(W)&&!k)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const U=Ue(W)?W.join("/"):W;if(!U)if(L)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=U}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function cE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Qd(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=cE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ju(r))return 1;if(ju(s))return-1}return s.length-r.length}function ju(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uE={type:0,value:""},hE=/[a-zA-Z0-9_]/;function fE(e){if(!e)return[[]];if(e==="/")return[[uE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:hE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function dE(e,t,n){const r=lE(fE(e.path),n),s=Tt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pE(e,t){const n=[],r=new Map;t=Ku({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,m,v){const x=!v,k=Hu(p);k.aliasOf=v&&v.record;const L=Ku(t,p),W=[k];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ht of z)W.push(Hu(Tt({},k,{components:v?v.record.components:k.components,path:ht,aliasOf:v?v.record:k})))}let U,H;for(const z of W){const{path:ht}=z;if(m&&ht[0]!=="/"){const dt=m.record.path,I=dt[dt.length-1]==="/"?"":"/";z.path=m.record.path+(ht&&I+ht)}if(U=dE(z,m,L),v?v.alias.push(U):(H=H||U,H!==U&&H.alias.push(U),x&&p.name&&!zu(U)&&a(p.name)),Yd(U)&&c(U),k.children){const dt=k.children;for(let I=0;I<dt.length;I++)i(dt[I],U,v&&v.children[I])}v=v||U}return H?()=>{a(H)}:ws}function a(p){if(Gd(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=_E(p,n);n.splice(m,0,p),p.record.name&&!zu(p)&&r.set(p.record.name,p)}function h(p,m){let v,x={},k,L;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw xr(1,{location:p});L=v.record.name,x=Tt(qu(m.params,v.keys.filter(H=>!H.optional).concat(v.parent?v.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&qu(p.params,v.keys.map(H=>H.name))),k=v.stringify(x)}else if(p.path!=null)k=p.path,v=n.find(H=>H.re.test(k)),v&&(x=v.parse(k),L=v.record.name);else{if(v=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!v)throw xr(1,{location:p,currentLocation:m});L=v.record.name,x=Tt({},m.params,p.params),k=v.stringify(x)}const W=[];let U=v;for(;U;)W.unshift(U.record),U=U.parent;return{name:L,path:k,params:x,matched:W,meta:mE(W)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function qu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Hu(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function zu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mE(e){return e.reduce((t,n)=>Tt(t,n.meta),{})}function Ku(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function _E(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Qd(e,t[i])<0?r=i:n=i+1}const s=yE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function yE(e){let t=e;for(;t=t.parent;)if(Yd(t)&&Qd(e,t)===0)return t}function Yd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function vE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($d," "),a=i.indexOf("="),l=ks(a<0?i:i.slice(0,a)),c=a<0?null:ks(i.slice(a+1));if(l in t){let h=t[l];Ue(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Gu(e){let t="";for(let n in e){const r=e[n];if(n=Uv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&Ca(i)):[r&&Ca(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function EE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const wE=Symbol(""),Wu=Symbol(""),Rl=Symbol(""),Xd=Symbol(""),xa=Symbol("");function as(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function In(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(xr(4,{from:n,to:t})):m instanceof Error?c(m):iE(m)?c(xr(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function na(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Ud(c)){const d=(c.__vccOpts||c)[t];d&&i.push(In(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Cv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const v=(p.__vccOpts||p)[t];return v&&In(v,n,r,a,l,s)()}))}}return i}function Qu(e){const t=an(Rl),n=an(Xd),r=Me(()=>{const c=Tr(e.to);return t.resolve(c)}),s=Me(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Pr.bind(null,d));if(m>-1)return m;const v=Yu(c[h-2]);return h>1&&Yu(d)===v&&p[p.length-1].path!==v?p.findIndex(Pr.bind(null,c[h-2])):m}),i=Me(()=>s.value>-1&&RE(n.params,r.value.params)),a=Me(()=>s.value>-1&&s.value===n.matched.length-1&&zd(n.params,r.value.params));function l(c={}){if(bE(c)){const h=t[Tr(e.replace)?"replace":"push"](Tr(e.to)).catch(ws);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function TE(e){return e.length===1?e[0]:e}const IE=Xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qu,setup(e,{slots:t}){const n=no(Qu(e)),{options:r}=an(Rl),s=Me(()=>({[Xu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&TE(t.default(n));return e.custom?i:Sd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),AE=IE;function bE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function RE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Yu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xu=(e,t,n)=>e??t??n,SE=Xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=an(xa),s=Me(()=>e.route||r.value),i=an(Wu,0),a=Me(()=>{let h=Tr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Me(()=>s.value.matched[a.value]);wi(Wu,Me(()=>a.value+1)),wi(wE,l),wi(xa,s);const c=Zn();return Ti(()=>[c.value,l.value,e.name],([h,d,p],[m,v,x])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!Pr(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return Ju(n.default,{Component:m,route:h});const v=p.props[d],x=v?v===!0?h.params:typeof v=="function"?v(h):v:null,L=Sd(m,Tt({},x,t,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ju(n.default,{Component:L,route:h})||L}}});function Ju(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const CE=SE;function PE(e){const t=pE(e.routes,e),n=e.parseQuery||vE,r=e.stringifyQuery||Gu,s=e.history,i=as(),a=as(),l=as(),c=o_(En);let h=En;pr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ta.bind(null,V=>""+V),p=ta.bind(null,$v),m=ta.bind(null,ks);function v(V,Y){let Q,J;return Gd(V)?(Q=t.getRecordMatcher(V),J=Y):J=V,t.addRoute(J,Q)}function x(V){const Y=t.getRecordMatcher(V);Y&&t.removeRoute(Y)}function k(){return t.getRoutes().map(V=>V.record)}function L(V){return!!t.getRecordMatcher(V)}function W(V,Y){if(Y=Tt({},Y||c.value),typeof V=="string"){const R=ea(n,V,Y.path),D=t.resolve({path:R.path},Y),M=s.createHref(R.fullPath);return Tt(R,D,{params:m(D.params),hash:ks(R.hash),redirectedFrom:void 0,href:M})}let Q;if(V.path!=null)Q=Tt({},V,{path:ea(n,V.path,Y.path).path});else{const R=Tt({},V.params);for(const D in R)R[D]==null&&delete R[D];Q=Tt({},V,{params:p(R)}),Y.params=p(Y.params)}const J=t.resolve(Q,Y),Et=V.hash||"";J.params=d(m(J.params));const _=Hv(r,Tt({},V,{hash:Fv(Et),path:J.path})),E=s.createHref(_);return Tt({fullPath:_,hash:Et,query:r===Gu?EE(V.query):V.query||{}},J,{redirectedFrom:void 0,href:E})}function U(V){return typeof V=="string"?ea(n,V,c.value.path):Tt({},V)}function H(V,Y){if(h!==V)return xr(8,{from:Y,to:V})}function z(V){return I(V)}function ht(V){return z(Tt(U(V),{replace:!0}))}function dt(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let J=typeof Q=="function"?Q(V):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=U(J):{path:J},J.params={}),Tt({query:V.query,hash:V.hash,params:J.path!=null?{}:V.params},J)}}function I(V,Y){const Q=h=W(V),J=c.value,Et=V.state,_=V.force,E=V.replace===!0,R=dt(Q);if(R)return I(Tt(U(R),{state:typeof R=="object"?Tt({},Et,R.state):Et,force:_,replace:E}),Y||Q);const D=Q;D.redirectedFrom=Y;let M;return!_&&zv(r,J,Q)&&(M=xr(16,{to:D,from:J}),Re(J,J,!0,!1)),(M?Promise.resolve(M):A(D,J)).catch(N=>en(N)?en(N,2)?N:ke(N):ft(N,D,J)).then(N=>{if(N){if(en(N,2))return I(Tt({replace:E},U(N.to),{state:typeof N.to=="object"?Tt({},Et,N.to.state):Et,force:_}),Y||D)}else N=S(D,J,!0,E,Et);return b(D,J,N),N})}function y(V,Y){const Q=H(V,Y);return Q?Promise.reject(Q):Promise.resolve()}function T(V){const Y=gn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let Q;const[J,Et,_]=xE(V,Y);Q=na(J.reverse(),"beforeRouteLeave",V,Y);for(const R of J)R.leaveGuards.forEach(D=>{Q.push(In(D,V,Y))});const E=y.bind(null,V,Y);return Q.push(E),me(Q).then(()=>{Q=[];for(const R of i.list())Q.push(In(R,V,Y));return Q.push(E),me(Q)}).then(()=>{Q=na(Et,"beforeRouteUpdate",V,Y);for(const R of Et)R.updateGuards.forEach(D=>{Q.push(In(D,V,Y))});return Q.push(E),me(Q)}).then(()=>{Q=[];for(const R of _)if(R.beforeEnter)if(Ue(R.beforeEnter))for(const D of R.beforeEnter)Q.push(In(D,V,Y));else Q.push(In(R.beforeEnter,V,Y));return Q.push(E),me(Q)}).then(()=>(V.matched.forEach(R=>R.enterCallbacks={}),Q=na(_,"beforeRouteEnter",V,Y,T),Q.push(E),me(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(In(R,V,Y));return Q.push(E),me(Q)}).catch(R=>en(R,8)?R:Promise.reject(R))}function b(V,Y,Q){l.list().forEach(J=>T(()=>J(V,Y,Q)))}function S(V,Y,Q,J,Et){const _=H(V,Y);if(_)return _;const E=Y===En,R=pr?history.state:{};Q&&(J||E?s.replace(V.fullPath,Tt({scroll:E&&R&&R.scroll},Et)):s.push(V.fullPath,Et)),c.value=V,Re(V,Y,Q,E),ke()}let w;function he(){w||(w=s.listen((V,Y,Q)=>{if(!$e.listening)return;const J=W(V),Et=dt(J);if(Et){I(Tt(Et,{replace:!0,force:!0}),J).catch(ws);return}h=J;const _=c.value;pr&&Zv(Fu(_.fullPath,Q.delta),co()),A(J,_).catch(E=>en(E,12)?E:en(E,2)?(I(Tt(U(E.to),{force:!0}),J).then(R=>{en(R,20)&&!Q.delta&&Q.type===Os.pop&&s.go(-1,!1)}).catch(ws),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ft(E,J,_))).then(E=>{E=E||S(J,_,!1),E&&(Q.delta&&!en(E,8)?s.go(-Q.delta,!1):Q.type===Os.pop&&en(E,20)&&s.go(-1,!1)),b(J,_,E)}).catch(ws)}))}let be=as(),Bt=as(),pt;function ft(V,Y,Q){ke(V);const J=Bt.list();return J.length?J.forEach(Et=>Et(V,Y,Q)):console.error(V),Promise.reject(V)}function Ee(){return pt&&c.value!==En?Promise.resolve():new Promise((V,Y)=>{be.add([V,Y])})}function ke(V){return pt||(pt=!V,he(),be.list().forEach(([Y,Q])=>V?Q(V):Y()),be.reset()),V}function Re(V,Y,Q,J){const{scrollBehavior:Et}=e;if(!pr||!Et)return Promise.resolve();const _=!Q&&tE(Fu(V.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return Kf().then(()=>Et(V,Y,_)).then(E=>E&&Jv(E)).catch(E=>ft(E,V,Y))}const Vt=V=>s.go(V);let Dt;const gn=new Set,$e={currentRoute:c,listening:!0,addRoute:v,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:k,resolve:W,options:e,push:z,replace:ht,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Bt.add,isReady:Ee,install(V){const Y=this;V.component("RouterLink",AE),V.component("RouterView",CE),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Tr(c)}),pr&&!Dt&&c.value===En&&(Dt=!0,z(s.location).catch(Et=>{}));const Q={};for(const Et in En)Object.defineProperty(Q,Et,{get:()=>c.value[Et],enumerable:!0});V.provide(Rl,Y),V.provide(Xd,$f(Q)),V.provide(xa,c);const J=V.unmount;gn.add(V),V.unmount=function(){gn.delete(V),gn.size<1&&(h=En,w&&w(),w=null,c.value=En,Dt=!1,pt=!1),J()}}};function me(V){return V.reduce((Y,Q)=>Y.then(()=>T(Q)),Promise.resolve())}return $e}function xE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Pr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Pr(h,c))||s.push(c))}return[n,r,s]}const VE={class:"bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"},DE={class:"flex items-center place-content-between mb-4"},NE={class:"flex"},kE={class:"text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4"},OE=["src","alt"],ME={class:"flex"},LE={class:"flex flex-col"},FE={class:"text-xl font-semibold text-green-dark"},UE={class:"text-green-600"},BE={class:"flex self-start"},$E=["href"],jE={class:"text-gray-600 mb-4"},qE={class:"flex flex-col sm:flex-row gap-2"},HE=["href"],zE=["href"],KE=["href"],Jd={__name:"ProgramCard",props:{icon:{type:String},name:{type:String,required:!0},link64:{type:String},linkcommon:{type:String},link32:{type:String},description:{type:String},version:{type:String},website:{type:String}},setup(e){const t=e;return(n,r)=>(zt(),Pe("div",VE,[Pt("div",DE,[Pt("div",NE,[Pt("div",kE,[Pt("img",{src:e.icon,width:"48",height:"48",alt:e.name},null,8,OE)]),Pt("div",ME,[Pt("div",LE,[Pt("h3",FE,ps(e.name),1),Pt("p",UE,ps(e.version),1)])])]),Pt("div",BE,[e.website?(zt(),Pe("a",{key:0,href:t.website,class:"text-gray-600 text-xs",target:"_blank"}," Веб-сайт ",8,$E)):pi("",!0)])]),Pt("p",jE,ps(e.description),1),Pt("div",qE,[e.link64?(zt(),Pe("a",{key:0,href:t.link64,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x64 ",8,HE)):pi("",!0),e.link32?(zt(),Pe("a",{key:1,href:t.link32,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x32 ",8,zE)):pi("",!0),e.linkcommon?(zt(),Pe("a",{key:2,href:t.linkcommon,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x86-x64 ",8,KE)):pi("",!0)])]))}},GE=()=>{};var Zu={};/**
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
 */const Zd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},WE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,a||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):WE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new QE;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class QE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(e){const t=Zd(e);return tp.encodeByteArray(t,!0)},Fi=function(e){return YE(e).replace(/\./g,"")},XE=function(e){try{return tp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function JE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZE=()=>JE().__FIREBASE_DEFAULTS__,tw=()=>{if(typeof process>"u"||typeof Zu>"u")return;const e=Zu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ew=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&XE(e[1]);return t&&JSON.parse(t)},Sl=()=>{try{return GE()||ZE()||tw()||ew()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},nw=e=>{var t,n;return(n=(t=Sl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rw=e=>{const t=nw(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ep=()=>{var e;return(e=Sl())===null||e===void 0?void 0:e.config};/**
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
 */class sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Cl(e){return e.endsWith(".cloudworkstations.dev")}async function iw(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function ow(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Fi(JSON.stringify(n)),Fi(JSON.stringify(a)),""].join(".")}const Is={};function aw(){const e={prod:[],emulator:[]};for(const t of Object.keys(Is))Is[t]?e.emulator.push(t):e.prod.push(t);return e}function lw(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let th=!1;function cw(e,t){if(typeof window>"u"||typeof document>"u"||!Cl(window.location.host)||Is[e]===t||Is[e]||th)return;Is[e]=t;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=aw().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{th=!0,a()},m}function d(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=lw(r),v=n("text"),x=document.getElementById(v)||document.createElement("span"),k=n("learnmore"),L=document.getElementById(k)||document.createElement("a"),W=n("preprendIcon"),U=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;l(H),d(L,k);const z=h();c(U,W),H.append(U,x,L,z),document.body.appendChild(H)}i?(x.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function uw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hw(){var e;const t=(e=Sl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function dw(){return!hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function pw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gw="FirebaseError";class $n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=gw,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?mw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new $n(s,l,r)}}function mw(e,t){return e.replace(_w,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const _w=/\{\$([^}]+)}/g;function Ms(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(eh(i)&&eh(a)){if(!Ms(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eh(e){return e!==null&&typeof e=="object"}/**
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
 */const yw=1e3,vw=2,Ew=4*60*60*1e3,ww=.5;function nh(e,t=yw,n=vw){const r=t*Math.pow(n,e),s=Math.round(ww*r*(Math.random()-.5)*2);return Math.min(Ew,r+s)}/**
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
 */function Vr(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class Tw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Aw(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iw(e){return e===Qn?void 0:e}function Aw(e){return e.instantiationMode==="EAGER"}/**
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
 */class bw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _t;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_t||(_t={}));const Rw={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},Sw=_t.INFO,Cw={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},Pw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Cw[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=Sw,this._logHandler=Pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const xw=(e,t)=>t.some(n=>e instanceof n);let rh,sh;function Vw(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,Va=new WeakMap,ip=new WeakMap,ra=new WeakMap,xl=new WeakMap;function Nw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Cn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&sp.set(n,e)}).catch(()=>{}),xl.set(t,e),t}function kw(e){if(Va.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Va.set(e,t)}let Da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Va.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ip.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ow(e){Da=e(Da)}function Mw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(sa(this),t,...n);return ip.set(r,t.sort?t.sort():[t]),Cn(r)}:Dw().includes(e)?function(...t){return e.apply(sa(this),t),Cn(sp.get(this))}:function(...t){return Cn(e.apply(sa(this),t))}}function Lw(e){return typeof e=="function"?Mw(e):(e instanceof IDBTransaction&&kw(e),xw(e,Vw())?new Proxy(e,Da):e)}function Cn(e){if(e instanceof IDBRequest)return Nw(e);if(ra.has(e))return ra.get(e);const t=Lw(e);return t!==e&&(ra.set(e,t),xl.set(t,e)),t}const sa=e=>xl.get(e);function op(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=Cn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Cn(a.result),c.oldVersion,c.newVersion,Cn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],ia=new Map;function ih(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ia.get(t))return ia.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ia.set(t,i),i}Ow(e=>({...e,get:(t,n,r)=>ih(t,n)||e.get(t,n,r),has:(t,n)=>!!ih(t,n)||e.has(t,n)}));/**
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
 */class Bw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($w(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $w(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Na="@firebase/app",oh="0.13.1";/**
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
 */const hn=new Pl("@firebase/app"),jw="@firebase/app-compat",qw="@firebase/analytics-compat",Hw="@firebase/analytics",zw="@firebase/app-check-compat",Kw="@firebase/app-check",Gw="@firebase/auth",Ww="@firebase/auth-compat",Qw="@firebase/database",Yw="@firebase/data-connect",Xw="@firebase/database-compat",Jw="@firebase/functions",Zw="@firebase/functions-compat",tT="@firebase/installations",eT="@firebase/installations-compat",nT="@firebase/messaging",rT="@firebase/messaging-compat",sT="@firebase/performance",iT="@firebase/performance-compat",oT="@firebase/remote-config",aT="@firebase/remote-config-compat",lT="@firebase/storage",cT="@firebase/storage-compat",uT="@firebase/firestore",hT="@firebase/ai",fT="@firebase/firestore-compat",dT="firebase",pT="11.9.0";/**
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
 */const ka="[DEFAULT]",gT={[Na]:"fire-core",[jw]:"fire-core-compat",[Hw]:"fire-analytics",[qw]:"fire-analytics-compat",[Kw]:"fire-app-check",[zw]:"fire-app-check-compat",[Gw]:"fire-auth",[Ww]:"fire-auth-compat",[Qw]:"fire-rtdb",[Yw]:"fire-data-connect",[Xw]:"fire-rtdb-compat",[Jw]:"fire-fn",[Zw]:"fire-fn-compat",[tT]:"fire-iid",[eT]:"fire-iid-compat",[nT]:"fire-fcm",[rT]:"fire-fcm-compat",[sT]:"fire-perf",[iT]:"fire-perf-compat",[oT]:"fire-rc",[aT]:"fire-rc-compat",[lT]:"fire-gcs",[cT]:"fire-gcs-compat",[uT]:"fire-fst",[fT]:"fire-fst-compat",[hT]:"fire-vertex","fire-js":"fire-js",[dT]:"fire-js-all"};/**
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
 */const Ui=new Map,mT=new Map,Oa=new Map;function ah(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nn(e){const t=e.name;if(Oa.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;Oa.set(t,e);for(const n of Ui.values())ah(n,e);for(const n of mT.values())ah(n,e);return!0}function zs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _T(e){return e==null?!1:e.settings!==void 0}/**
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
 */const yT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new uo("app","Firebase",yT);/**
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
 */class vT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const ET=pT;function ap(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=ep()),!n)throw Pn.create("no-options");const i=Ui.get(s);if(i){if(Ms(n,i.options)&&Ms(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const a=new bw(s);for(const c of Oa.values())a.addComponent(c);const l=new vT(n,r,a);return Ui.set(s,l),l}function lp(e=ka){const t=Ui.get(e);if(!t&&e===ka&&ep())return ap();if(!t)throw Pn.create("no-app",{appName:e});return t}function We(e,t,n){var r;let s=(r=gT[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(l.join(" "));return}Nn(new un(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const wT="firebase-heartbeat-database",TT=1,Ls="firebase-heartbeat-store";let oa=null;function cp(){return oa||(oa=op(wT,TT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ls)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),oa}async function IT(e){try{const n=(await cp()).transaction(Ls),r=await n.objectStore(Ls).get(up(e));return await n.done,r}catch(t){if(t instanceof $n)hn.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});hn.warn(n.message)}}}async function lh(e,t){try{const r=(await cp()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(t,up(e)),await r.done}catch(n){if(n instanceof $n)hn.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function up(e){return`${e.name}!${e.options.appId}`}/**
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
 */const AT=1024,bT=30;class RT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ch();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bT){const a=PT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ch(),{heartbeatsToSend:r,unsentEntries:s}=ST(this._heartbeatsCache.heartbeats),i=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hn.warn(n),""}}}function ch(){return new Date().toISOString().substring(0,10)}function ST(e,t=AT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),uh(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function uh(e){return Fi(JSON.stringify({version:2,heartbeats:e})).length}function PT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function xT(e){Nn(new un("platform-logger",t=>new Bw(t),"PRIVATE")),Nn(new un("heartbeat",t=>new RT(t),"PRIVATE")),We(Na,oh,e),We(Na,oh,"esm2017"),We("fire-js","")}xT("");var VT="firebase",DT="11.9.1";/**
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
 */We(VT,DT,"app");var hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,hp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,S){for(var w=Array(arguments.length-2),he=2;he<arguments.length;he++)w[he-2]=arguments[he];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var S=I.g[3],w=y+(S^T&(b^S))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[3]+3250441966&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[7]+4249261313&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[11]+2304563134&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[15]+1236535329&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(b^S&(T^b))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[0]+3921069994&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[4]+3889429448&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[8]+1163531501&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[12]+2368359562&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(T^b^S)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[14]+4259657740&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[10]+3200236656&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[6]+76029189&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[2]+3299628645&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(b^(T|~S))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[5]+4237533241&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[1]+2240044497&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[13]+1309151649&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=T;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==y||(T[b]=S,A=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new a(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return L(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(w))):(A=A.j(T),A=A.add(h(w)))}return A}var p=c(0),m=c(1),v=c(16777216);e=a.prototype,e.m=function(){if(k(this))return-L(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(k(this))return"-"+L(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var b=z(T,y).g;T=W(T,b.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,x(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}e.l=function(I){return I=W(this,I),k(I)?-1:x(I)?0:1};function L(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new a(T,~I.h).add(m)}e.abs=function(){return k(this)?L(this):this},e.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,S&=65535,w&=65535,T[b]=w<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function W(I,y){return I.add(L(y))}e.j=function(I){if(x(this)||x(I))return p;if(k(this))return k(I)?L(this).j(L(I)):L(L(this).j(I));if(k(I))return L(this.j(L(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,w=this.i(A)&65535,he=I.i(b)>>>16,be=I.i(b)&65535;T[2*A+2*b]+=w*be,U(T,2*A+2*b),T[2*A+2*b+1]+=S*be,U(T,2*A+2*b+1),T[2*A+2*b+1]+=w*he,U(T,2*A+2*b+1),T[2*A+2*b+2]+=S*he,U(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function U(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function H(I,y){this.g=I,this.h=y}function z(I,y){if(x(y))throw Error("division by zero");if(x(I))return new H(p,p);if(k(I))return y=z(L(I),y),new H(L(y.g),L(y.h));if(k(y))return y=z(I,L(y)),new H(L(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(I);)T=ht(T),A=ht(A);var b=dt(T,1),S=dt(A,1);for(A=dt(A,2),T=dt(T,2);!x(A);){var w=S.add(A);0>=w.l(I)&&(b=b.add(T),S=w),A=dt(A,1),T=dt(T,1)}return y=W(I,b.j(y)),new H(b,y)}for(b=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),w=S.j(y);k(w)||0<w.l(I);)T-=A,S=h(T),w=S.j(y);x(S)&&(S=m),b=b.add(S),I=W(I,w)}return new H(b,I)}e.A=function(I){return z(this,I).h},e.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},e.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},e.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function ht(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function dt(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,b=[],S=0;S<A;S++)b[S]=0<y?I.i(S+T)>>>y|I.i(S+T+1)<<32-y:I.i(S+T);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,xn=a}).apply(typeof hh<"u"?hh:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fp,us,dp,Ri,Ma,pp,gp,mp;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function x(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var q=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)q[bt-2]=arguments[bt];return u.prototype[C].apply(g,q)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let q=0;q<P;q++)o[C+q]=g[q]}else o.push(g)}}class W{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ht=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function dt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<T.length;P++)f=T[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Ee;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class he{constructor(){this.h=this.g=null}add(u,f){const g=be.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var be=new W(()=>new Bt,o=>o.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,ft=!1,Ee=new he,ke=()=>{const o=l.Promise.resolve(void 0);pt=()=>{o.then(Re)}};var Re=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){S(f)}var u=be;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ft=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function $e(o,u){if(Dt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ht){t:{try{z(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:me[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$e.aa.h.call(this)}}x($e,Dt);var me={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Et(o){this.src=o,this.g={},this.h=0}Et.prototype.add=function(o,u,f,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var q=E(o,u,g,C);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new Q(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function _(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(J(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function M(o,u,f,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(o,u[P],f,g,C);return null}return f=st(f),o&&o[V]?o.K(u,f,h(g)?!!g.capture:!1,C):N(o,u,f,!1,g,C)}function N(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,bt=K(o);if(bt||(o[R]=bt=new Et(o)),f=bt.add(u,f,g,q,P),f.proxy)return f;if(g=G(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)gn||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return u.call(o.src,o.listener,f)}const u=et;return o}function j(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],f,g,C);else g=h(g)?!!g.capture:!!g,f=st(f),o&&o[V]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=E(P,f,g,C),-1<f&&(J(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,g,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[V])_(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=K(u))?(_(f,o),f.h==0&&(f.src=null,u[R]=null)):J(o)}}}function F(o){return o in D?D[o]:D[o]="on"+o}function et(o,u){if(o.da)o=!0;else{u=new $e(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function K(o){return o=o[R],o instanceof Et?o:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function st(o){return typeof o=="function"?o:(o[tt]||(o[tt]=function(u){return o.handleEvent(u)}),o[tt])}function nt(){Vt.call(this),this.i=new Et(this),this.M=this,this.F=null}x(nt,Vt),nt.prototype[V]=!0,nt.prototype.removeEventListener=function(o,u,f,g){j(this,o,u,f,g)};function lt(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Dt(u,o);else if(u instanceof Dt)u.target=u.target||o;else{var C=u;u=new Dt(g,o),A(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var q=u.g=f[P];C=gt(q,g,!0,u)&&C}if(q=u.g=o,C=gt(q,g,!0,u)&&C,C=gt(q,g,!1,u)&&C,f)for(P=0;P<f.length;P++)q=u.g=f[P],C=gt(q,g,!1,u)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)J(f[g]);delete o.g[u],o.h--}}this.F=null},nt.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},nt.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function gt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==f){var bt=q.listener,Yt=q.ha||q.src;q.fa&&_(o.i,q),C=bt.call(Yt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Gt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Wt(o){o.g=Gt(()=>{o.g=null,o.i&&(o.i=!1,Wt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Se extends Vt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(o){Vt.call(this),this.h=o,this.g={}}x(te,Vt);var mn=[];function Kr(o){dt(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}te.prototype.N=function(){te.aa.N.call(this),Kr(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=l.JSON.stringify,Ce=l.JSON.parse,Qs=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Co(){}Co.prototype.h=null;function fc(o){return o.h||(o.h=o.i())}function dc(){}var Gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Po(){Dt.call(this,"d")}x(Po,Dt);function xo(){Dt.call(this,"c")}x(xo,Dt);var jn={},pc=null;function Ys(){return pc=pc||new nt}jn.La="serverreachability";function gc(o){Dt.call(this,jn.La,o)}x(gc,Dt);function Wr(o){const u=Ys();lt(u,new gc(u))}jn.STAT_EVENT="statevent";function mc(o,u){Dt.call(this,jn.STAT_EVENT,o),this.stat=u}x(mc,Dt);function fe(o){const u=Ys();lt(u,new mc(u,o))}jn.Ma="timingevent";function _c(o,u){Dt.call(this,jn.Ma,o),this.size=u}x(_c,Dt);function Qr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Yr(){this.g=!0}Yr.prototype.xa=function(){this.g=!1};function sm(o,u,f,g,C,P){o.info(function(){if(o.g)if(P)for(var q="",bt=P.split("&"),Yt=0;Yt<bt.length;Yt++){var wt=bt[Yt].split("=");if(1<wt.length){var ee=wt[0];wt=wt[1];var ne=ee.split("_");q=2<=ne.length&&ne[1]=="type"?q+(ee+"="+wt+"&"):q+(ee+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+q})}function im(o,u,f,g,C,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+q})}function lr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+am(o,f)+(g?" "+g:"")})}function om(o,u){o.info(function(){return"TIMEOUT: "+u})}Yr.prototype.info=function(){};function am(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return Qt(f)}catch{return u}}var Xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vo;function Js(){}x(Js,Co),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},Vo=new Js;function _n(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vc}function vc(){this.i=null,this.g="",this.h=!1}var Ec={},Do={};function No(o,u,f){o.L=1,o.v=ni(Je(u)),o.m=f,o.P=!0,wc(o,null)}function wc(o,u){o.F=Date.now(),Zs(o),o.A=Je(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Oc(f.i,"t",g),o.C=0,f=o.j.J,o.h=new vc,o.g=Zc(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Se(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(mn[0]=C.toString()),C=mn);for(var P=0;P<C.length;P++){var q=M(f,C[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Wr(),sm(o.i,o.u,o.A,o.l,o.R,o.m)}_n.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ze(o)==3?u.j():this.Y(o)},_n.prototype.Y=function(o){try{if(o==this.g)t:{const ne=Ze(this.g);var u=this.g.Ba();const hr=this.g.Z();if(!(3>ne)&&(ne!=3||this.g&&(this.h.h||this.g.oa()||jc(this.g)))){this.J||ne!=4||u==7||(u==8||0>=hr?Wr(3):Wr(2)),ko(this);var f=this.g.Z();this.X=f;e:if(Tc(this)){var g=jc(this.g);o="";var C=g.length,P=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),Xr(this);var q="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,im(this.i,this.u,this.A,this.l,this.R,ne,f),this.o){if(this.T&&!this.K){e:{if(this.g){var bt,Yt=this.g;if((bt=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(bt)){var wt=bt;break e}}wt=null}if(f=wt)lr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,f);else{this.o=!1,this.s=3,fe(12),qn(this),Xr(this);break t}}if(this.P){f=!0;let Oe;for(;!this.J&&this.C<q.length;)if(Oe=lm(this,q),Oe==Do){ne==4&&(this.s=4,fe(14),f=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Ec){this.s=4,fe(15),lr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else lr(this.i,this.l,Oe,null),Oo(this,Oe);if(Tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||q.length!=0||this.h.h||(this.s=1,fe(16),f=!1),this.o=this.o&&f,!f)lr(this.i,this.l,q,"[Invalid Chunked Response]"),qn(this),Xr(this);else if(0<q.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),$o(ee),ee.M=!0,fe(11))}}else lr(this.i,this.l,q,null),Oo(this,q);ne==4&&qn(this),this.o&&!this.J&&(ne==4?Qc(this.j,this):(this.o=!1,Zs(this)))}else bm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,fe(12)):(this.s=0,fe(13)),qn(this),Xr(this)}}}catch{}finally{}};function Tc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function lm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Do:(f=Number(u.substring(f,g)),isNaN(f)?Ec:(g+=1,g+f>u.length?Do:(u=u.slice(g,g+f),o.C=g+f,u)))}_n.prototype.cancel=function(){this.J=!0,qn(this)};function Zs(o){o.S=Date.now()+o.I,Ic(o,o.I)}function Ic(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qr(m(o.ba,o),u)}function ko(o){o.B&&(l.clearTimeout(o.B),o.B=null)}_n.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(om(this.i,this.A),this.L!=2&&(Wr(),fe(17)),qn(this),this.s=2,Xr(this)):Ic(this,this.S-o)};function Xr(o){o.j.G==0||o.J||Qc(o.j,o)}function qn(o){ko(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Kr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Oo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Mo(f.h,o))){if(!o.K&&Mo(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)li(f),oi(f);else break t;Bo(f),fe(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Qr(m(f.Za,f),6e3));if(1>=Rc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else zn(f,11)}else if((o.K||f.g==o)&&li(f),!U(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let wt=C[u];if(f.T=wt[0],wt=wt[1],f.G==2)if(wt[0]=="c"){f.K=wt[1],f.ia=wt[2];const ee=wt[3];ee!=null&&(f.la=ee,f.j.info("VER="+f.la));const ne=wt[4];ne!=null&&(f.Aa=ne,f.j.info("SVER="+f.Aa));const hr=wt[5];hr!=null&&typeof hr=="number"&&0<hr&&(g=1.5*hr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Oe=o.g;if(Oe){const ui=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var P=g.h;P.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Lo(P,P.h),P.h=null))}if(g.D){const jo=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(g.ya=jo,Ct(g.I,g.D,jo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=o;if(g.qa=Jc(g,g.J?g.ia:null,g.W),q.K){Sc(g.h,q);var bt=q,Yt=g.L;Yt&&(bt.I=Yt),bt.B&&(ko(bt),Zs(bt)),g.g=q}else Gc(g);0<f.i.length&&ai(f)}else wt[0]!="stop"&&wt[0]!="close"||zn(f,7);else f.G==3&&(wt[0]=="stop"||wt[0]=="close"?wt[0]=="stop"?zn(f,7):Uo(f):wt[0]!="noop"&&f.l&&f.l.ta(wt),f.v=0)}}Wr(4)}catch{}}var cm=class{constructor(o,u){this.g=o,this.map=u}};function Ac(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rc(o){return o.h?1:o.g?o.g.size:0}function Mo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Lo(o,u){o.g?o.g.add(u):o.h=u}function Sc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ac.prototype.cancel=function(){if(this.i=Cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Cc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function um(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function hm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Pc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=hm(o),g=um(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],f&&f[P],o)}var xc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var P=o[f].substring(0,g);C=o[f].substring(g+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,ti(this,o.j),this.o=o.o,this.g=o.g,ei(this,o.s),this.l=o.l;var u=o.i,f=new ts;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Vc(this,f),this.m=o.m}else o&&(u=String(o).match(xc))?(this.h=!1,ti(this,u[1]||"",!0),this.o=Jr(u[2]||""),this.g=Jr(u[3]||"",!0),ei(this,u[4]),this.l=Jr(u[5]||"",!0),Vc(this,u[6]||"",!0),this.m=Jr(u[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Zr(u,Dc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Zr(u,Dc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Zr(f,f.charAt(0)=="/"?gm:pm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Zr(f,_m)),o.join("")};function Je(o){return new Hn(o)}function ti(o,u,f){o.j=f?Jr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ei(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Vc(o,u,f){u instanceof ts?(o.i=u,ym(o.i,o.h)):(f||(u=Zr(u,mm)),o.i=new ts(u,o.h))}function Ct(o,u,f){o.i.set(u,f)}function ni(o){return Ct(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,dm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Dc=/[#\/\?@]/g,pm=/[#\?:]/g,gm=/[#\?]/g,mm=/[#\?@]/g,_m=/#/g;function ts(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function yn(o){o.g||(o.g=new Map,o.h=0,o.i&&fm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=ts.prototype,e.add=function(o,u){yn(this),this.i=null,o=cr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Nc(o,u){yn(o),u=cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function kc(o,u){return yn(o),u=cr(o,u),o.g.has(u)}e.forEach=function(o,u){yn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},e.na=function(){yn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)f.push(u[g])}return f},e.V=function(o){yn(this);let u=[];if(typeof o=="string")kc(this,o)&&(u=u.concat(this.g.get(cr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return yn(this),this.i=null,o=cr(this,o),kc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Oc(o,u,f){Nc(o,u),0<f.length&&(o.i=null,o.g.set(cr(o,u),k(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var C=P;q[g]!==""&&(C+="="+encodeURIComponent(String(q[g]))),o.push(C)}}return this.i=o.join("&")};function cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function ym(o,u){u&&!o.j&&(yn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Nc(this,g),Oc(this,C,f))},o)),o.j=u}function vm(o,u){const f=new Yr;if(l.Image){const g=new Image;g.onload=v(vn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(vn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(vn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(vn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Em(o,u){const f=new Yr,g=new AbortController,C=setTimeout(()=>{g.abort(),vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?vn(f,"TestPingServer: ok",!0,u):vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),vn(f,"TestPingServer: error",!1,u)})}function vn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function wm(){this.g=new Qs}function Tm(o,u,f){const g=f||"";try{Pc(o,function(C,P){let q=C;h(C)&&(q=Qt(C)),u.push(g+P+"="+encodeURIComponent(q))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function ri(o){this.l=o.Ub||null,this.j=o.eb||!1}x(ri,Co),ri.prototype.g=function(){return new si(this.l,this.j)},ri.prototype.i=function(o){return function(){return o}}({});function si(o,u){nt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(si,nt),e=si.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ns(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?es(this):ns(this),this.readyState==3&&Mc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,es(this))},e.Qa=function(o){this.g&&(this.response=o,es(this))},e.ga=function(){this.g&&es(this)};function es(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ns(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Lc(o){let u="";return dt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Fo(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=Lc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ct(o,u,f))}function Mt(o){nt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Mt,nt);var Im=/^https?$/i,Am=["POST","PUT"];e=Mt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vo.g(),this.v=this.o?fc(this.o):fc(Vo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Fc(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Am,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$c(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Fc(this,P)}};function Fc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Uc(o),ii(o)}function Uc(o){o.A||(o.A=!0,lt(o,"complete"),lt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,lt(this,"complete"),lt(this,"abort"),ii(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),Mt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Bc(this):this.bb())},e.bb=function(){Bc(this)};function Bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ze(o)!=4||o.Z()!=2)){if(o.u&&Ze(o)==4)Gt(o.Ea,0,o);else if(lt(o,"readystatechange"),Ze(o)==4){o.h=!1;try{const q=o.Z();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var C=String(o.D).match(xc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Im.test(C?C.toLowerCase():"")}f=g}if(f)lt(o,"complete"),lt(o,"success");else{o.m=6;try{var P=2<Ze(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Uc(o)}}finally{ii(o)}}}}function ii(o,u){if(o.g){$c(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||lt(o,"ready");try{f.onreadystatechange=g}catch{}}}function $c(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ze(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ce(u)}};function jc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const u={};o=(o.g&&2<=Ze(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}I(u,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function qc(o){this.Aa=0,this.i=[],this.j=new Yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,o),this.cb=rs("retryDelaySeedMs",1e4,o),this.Wa=rs("forwardChannelMaxRetries",2,o),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ac(o&&o.concurrentRequestLimit),this.Da=new wm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=qc.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,g){fe(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Jc(this,null,this.W),ai(this)};function Uo(o){if(Hc(o),o.G==3){var u=o.U++,f=Je(o.I);if(Ct(f,"SID",o.K),Ct(f,"RID",u),Ct(f,"TYPE","terminate"),ss(o,f),u=new _n(o,o.j,u),u.L=2,u.v=ni(Je(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Zc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zs(u)}Xc(o)}function oi(o){o.g&&($o(o),o.g.cancel(),o.g=null)}function Hc(o){oi(o),o.u&&(l.clearTimeout(o.u),o.u=null),li(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ai(o){if(!bc(o.h)&&!o.s){o.s=!0;var u=o.Ga;pt||ke(),ft||(pt(),ft=!0),Ee.add(u,o),o.B=0}}function Rm(o,u){return Rc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qr(m(o.Ga,o,u),Yc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new _n(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Kc(this,C,u),f=Je(this.I),Ct(f,"RID",o),Ct(f,"CVER",22),this.D&&Ct(f,"X-HTTP-Session-Id",this.D),ss(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Lc(P)))+"&"+u:this.m&&Fo(f,this.m,P)),Lo(this.h,C),this.Ua&&Ct(f,"TYPE","init"),this.P?(Ct(f,"$req",u),Ct(f,"SID","null"),C.T=!0,No(C,f,null)):No(C,f,u),this.G=2}}else this.G==3&&(o?zc(this,o):this.i.length==0||bc(this.h)||zc(this))};function zc(o,u){var f;u?f=u.l:f=o.U++;const g=Je(o.I);Ct(g,"SID",o.K),Ct(g,"RID",f),Ct(g,"AID",o.T),ss(o,g),o.m&&o.o&&Fo(g,o.m,o.o),f=new _n(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Kc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Lo(o.h,f),No(f,g,u)}function ss(o,u){o.H&&dt(o.H,function(f,g){Ct(u,g,f)}),o.l&&Pc({},function(f,g){Ct(u,g,f)})}function Kc(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;t:{var C=o.i;let P=-1;for(;;){const q=["count="+f];P==-1?0<f?(P=C[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let bt=!0;for(let Yt=0;Yt<f;Yt++){let wt=C[Yt].g;const ee=C[Yt].map;if(wt-=P,0>wt)P=Math.max(0,C[Yt].g-100),bt=!1;else try{Tm(ee,q,"req"+wt+"_")}catch{g&&g(ee)}}if(bt){g=q.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,g}function Gc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pt||ke(),ft||(pt(),ft=!0),Ee.add(u,o),o.v=0}}function Bo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qr(m(o.Fa,o),Yc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qr(m(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fe(10),oi(this),Wc(this))};function $o(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Wc(o){o.g=new _n(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Je(o.qa);Ct(u,"RID","rpc"),Ct(u,"SID",o.K),Ct(u,"AID",o.T),Ct(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ct(u,"TO",o.ja),Ct(u,"TYPE","xmlhttp"),ss(o,u),o.m&&o.o&&Fo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ni(Je(u)),f.m=null,f.P=!0,wc(f,o)}e.Za=function(){this.C!=null&&(this.C=null,oi(this),Bo(this),fe(19))};function li(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Qc(o,u){var f=null;if(o.g==u){li(o),$o(o),o.g=null;var g=2}else if(Mo(o.h,u))f=u.D,Sc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Ys(),lt(g,new _c(g,f)),ai(o)}else Gc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Rm(o,u)||g==2&&Bo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:zn(o,5);break;case 4:zn(o,10);break;case 3:zn(o,6);break;default:zn(o,2)}}}function Yc(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function zn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new Hn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ti(g,"https"),ni(g),C?vm(g.toString(),f):Em(g.toString(),f)}else fe(2);o.G=0,o.l&&o.l.sa(u),Xc(o),Hc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function Xc(o){if(o.G=0,o.ka=[],o.l){const u=Cc(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Jc(o,u,f){var g=f instanceof Hn?Je(f):new Hn(f);if(g.g!="")u&&(g.g=u+"."+g.g),ei(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Hn(null);g&&ti(P,g),u&&(P.g=u),C&&ei(P,C),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Ct(g,f,u),Ct(g,"VER",o.la),ss(o,g),g}function Zc(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Mt(new ri({eb:f})):new Mt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function tu(){}e=tu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ci(){}ci.prototype.g=function(o,u){return new we(o,u)};function we(o,u){nt.call(this),this.g=new qc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ur(this)}x(we,nt),we.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},we.prototype.close=function(){Uo(this.g)},we.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qt(o),o=f);u.i.push(new cm(u.Ya++,o)),u.G==3&&ai(u)},we.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,we.aa.N.call(this)};function eu(o){Po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(eu,Po);function nu(){xo.call(this),this.status=1}x(nu,xo);function ur(o){this.g=o}x(ur,tu),ur.prototype.ua=function(){lt(this.g,"a")},ur.prototype.ta=function(o){lt(this.g,new eu(o))},ur.prototype.sa=function(o){lt(this.g,new nu)},ur.prototype.ra=function(){lt(this.g,"b")},ci.prototype.createWebChannel=ci.prototype.g,we.prototype.send=we.prototype.o,we.prototype.open=we.prototype.m,we.prototype.close=we.prototype.close,mp=function(){return new ci},gp=function(){return Ys()},pp=jn,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,Ri=Xs,yc.COMPLETE="complete",dp=yc,dc.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",nt.prototype.listen=nt.prototype.K,us=dc,Mt.prototype.listenOnce=Mt.prototype.L,Mt.prototype.getLastError=Mt.prototype.Ka,Mt.prototype.getLastErrorCode=Mt.prototype.Ba,Mt.prototype.getStatus=Mt.prototype.Z,Mt.prototype.getResponseJson=Mt.prototype.Oa,Mt.prototype.getResponseText=Mt.prototype.oa,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Ha,fp=Mt}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});const fh="@firebase/firestore",dh="4.7.17";/**
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
 */let $r="11.9.0";/**
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
 */const nr=new Pl("@firebase/firestore");function gr(){return nr.logLevel}function X(e,...t){if(nr.logLevel<=_t.DEBUG){const n=t.map(Vl);nr.debug(`Firestore (${$r}): ${e}`,...n)}}function fn(e,...t){if(nr.logLevel<=_t.ERROR){const n=t.map(Vl);nr.error(`Firestore (${$r}): ${e}`,...n)}}function Dr(e,...t){if(nr.logLevel<=_t.WARN){const n=t.map(Vl);nr.warn(`Firestore (${$r}): ${e}`,...n)}}function Vl(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function at(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,_p(e,r,n)}function _p(e,t,n){let r=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw fn(r),new Error(r)}function Ot(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||_p(t,s,r)}function yt(e,t){return e}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends $n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class yp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class NT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class kT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OT{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ot(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ot(typeof r.accessToken=="string",31837,{l:r}),new yp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ot(t===null||typeof t=="string",2055,{h:t}),new se(t)}}class MT{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LT{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new MT(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FT{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_T(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ot(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ph(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ot(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ph(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function vp(){return new TextEncoder}/**
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
 */class BT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function La(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return ut(r,s);{const i=vp(),a=$T(i.encode(gh(e,n)),i.encode(gh(t,n)));return a!==0?a:ut(r,s)}}n+=r>65535?2:1}return ut(e.length,t.length)}function gh(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function $T(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ut(e[n],t[n]);return ut(e.length,t.length)}function Nr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const mh=-62135596800,_h=1e6;class Kt{static now(){return Kt.fromMillis(Date.now())}static fromDate(t){return Kt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*_h);return new Kt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<mh)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_h}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-mh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new Kt(0,0))}static max(){return new ot(new Kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yh="__name__";class He{constructor(t,n,r){n===void 0?n=0:n>t.length&&at(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&at(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=He.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ut(t.length,n.length)}static compareSegments(t,n){const r=He.isNumericId(t),s=He.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?He.extractNumericId(t).compare(He.extractNumericId(n)):La(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return xn.fromString(t.substring(4,t.length-2))}}class Nt extends He{construct(t,n,r){return new Nt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Nt(n)}static emptyPath(){return new Nt([])}}const jT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends He{construct(t,n,r){return new le(t,n,r)}static isValidIdentifier(t){return jT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yh}static keyField(){return new le([yh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new le(n)}static emptyPath(){return new le([])}}/**
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
 */class rt{constructor(t){this.path=t}static fromPath(t){return new rt(Nt.fromString(t))}static fromName(t){return new rt(Nt.fromString(t).popFirst(5))}static empty(){return new rt(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Nt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rt(new Nt(t.slice()))}}/**
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
 */const Fs=-1;function qT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new Kt(n+1,0):new Kt(n,r));return new kn(s,rt.empty(),t)}function HT(e){return new kn(e.readTime,e.key,Fs)}class kn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new kn(ot.min(),rt.empty(),Fs)}static max(){return new kn(ot.max(),rt.empty(),Fs)}}function zT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=rt.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
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
 */const KT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ho(e){if(e.code!==B.FAILED_PRECONDITION||e.message!==KT)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&at(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):O.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):O.reject(n)}static resolve(t){return new O((n,r)=>{n(t)})}static reject(t){return new O((n,r)=>{r(t)})}static waitFor(t){return new O((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=O.resolve(!1);for(const r of t)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new O((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new O((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function WT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class fo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}fo.le=-1;/**
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
 */const QT=-1;function po(e){return e==null}function Bi(e){return e===0&&1/e==-1/0}function YT(e){return typeof e=="number"&&Number.isInteger(e)&&!Bi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ep="";function XT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=vh(t)),t=JT(e.get(n),t);return vh(t)}function JT(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Ep:n+="";break;default:n+=i}}return n}function vh(e){return e+Ep+""}/**
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
 */function Eh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ut{constructor(t,n){this.comparator=t,this.root=n||Xt.EMPTY}insert(t,n){return new Ut(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(t){return new Ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mi(this.root,t,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mi(this.root,t,this.comparator,!0)}}class mi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Xt.RED,this.left=s??Xt.EMPTY,this.right=i??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Xt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw at(43730,{key:this.key,value:this.value});if(this.right.isRed())throw at(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw at(27949);return t+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw at(57766)}get value(){throw at(16141)}get color(){throw at(16727)}get left(){throw at(29726)}get right(){throw at(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Xt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(t){this.comparator=t,this.data=new Ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wh(this.data.getIterator())}getIteratorFrom(t){return new wh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new qt(this.comparator);return n.data=t,n}}class wh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(t){this.fields=t,t.sort(le.comparator)}static empty(){return new bn([])}unionWith(t){let n=new qt(le.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new bn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Nr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tp("Invalid base64 string: "+i):i}}(t);return new Zt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Zt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const ZT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(e){if(Ot(!!e,39018),typeof e=="string"){let t=0;const n=ZT.exec(e);if(Ot(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Lt(e.seconds),nanos:Lt(e.nanos)}}function Lt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mn(e){return typeof e=="string"?Zt.fromBase64String(e):Zt.fromUint8Array(e)}/**
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
 */const Ip="server_timestamp",Ap="__type__",bp="__previous_value__",Rp="__local_write_time__";function Dl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ap])===null||n===void 0?void 0:n.stringValue)===Ip}function go(e){const t=e.mapValue.fields[bp];return Dl(t)?go(t):t}function Us(e){const t=On(e.mapValue.fields[Rp].timestampValue);return new Kt(t.seconds,t.nanos)}/**
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
 */class tI{constructor(t,n,r,s,i,a,l,c,h,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const $i="(default)";class Bs{constructor(t,n){this.projectId=t,this.database=n||$i}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===$i}isEqual(t){return t instanceof Bs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Sp="__type__",eI="__max__",_i={mapValue:{}},Cp="__vector__",ji="value";function Ln(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Dl(e)?4:rI(e)?9007199254740991:nI(e)?10:11:at(28295,{value:e})}function Xe(e,t){if(e===t)return!0;const n=Ln(e);if(n!==Ln(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Us(e).isEqual(Us(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=On(s.timestampValue),l=On(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Lt(s.geoPointValue.latitude)===Lt(i.geoPointValue.latitude)&&Lt(s.geoPointValue.longitude)===Lt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Lt(s.integerValue)===Lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Lt(s.doubleValue),l=Lt(i.doubleValue);return a===l?Bi(a)===Bi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Nr(e.arrayValue.values||[],t.arrayValue.values||[],Xe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Eh(a)!==Eh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Xe(a[c],l[c])))return!1;return!0}(e,t);default:return at(52216,{left:e})}}function $s(e,t){return(e.values||[]).find(n=>Xe(n,t))!==void 0}function kr(e,t){if(e===t)return 0;const n=Ln(e),r=Ln(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Lt(i.integerValue||i.doubleValue),c=Lt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Th(e.timestampValue,t.timestampValue);case 4:return Th(Us(e),Us(t));case 5:return La(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Mn(i),c=Mn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ut(l[h],c[h]);if(d!==0)return d}return ut(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ut(Lt(i.latitude),Lt(a.latitude));return l!==0?l:ut(Lt(i.longitude),Lt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ih(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},v=(l=p[ji])===null||l===void 0?void 0:l.arrayValue,x=(c=m[ji])===null||c===void 0?void 0:c.arrayValue,k=ut(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Ih(v,x)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===_i.mapValue&&a===_i.mapValue)return 0;if(i===_i.mapValue)return 1;if(a===_i.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=La(c[p],d[p]);if(m!==0)return m;const v=kr(l[c[p]],h[d[p]]);if(v!==0)return v}return ut(c.length,d.length)}(e.mapValue,t.mapValue);default:throw at(23264,{Pe:n})}}function Th(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=On(e),r=On(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function Ih(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=kr(n[s],r[s]);if(i)return i}return ut(n.length,r.length)}function Or(e){return Fa(e)}function Fa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return rt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fa(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Fa(n.fields[a])}`;return s+"}"}(e.mapValue):at(61005,{value:e})}function Si(e){switch(Ln(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=go(e);return t?16+Si(t):16;case 5:return 2*e.stringValue.length;case 6:return Mn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Si(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return qr(r.fields,(i,a)=>{s+=i.length+Si(a)}),s}(e.mapValue);default:throw at(13486,{value:e})}}function Ah(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ua(e){return!!e&&"integerValue"in e}function Nl(e){return!!e&&"arrayValue"in e}function bh(e){return!!e&&"nullValue"in e}function Rh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function aa(e){return!!e&&"mapValue"in e}function nI(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[Sp])===null||n===void 0?void 0:n.stringValue)===Cp}function As(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=As(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=As(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rI(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eI}/**
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
 */class Ke{constructor(t){this.value=t}static empty(){return new Ke({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=As(n)}setAll(t){let n=le.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=As(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Xe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){qr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ke(As(this.value))}}/**
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
 */class oe{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new oe(t,0,ot.min(),ot.min(),ot.min(),Ke.empty(),0)}static newFoundDocument(t,n,r,s){return new oe(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new oe(t,2,n,ot.min(),ot.min(),Ke.empty(),0)}static newUnknownDocument(t,n){return new oe(t,3,n,ot.min(),ot.min(),Ke.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qi{constructor(t,n){this.position=t,this.inclusive=n}}function Sh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=rt.comparator(rt.fromName(a.referenceValue),n.key):r=kr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ch(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class js{constructor(t,n="asc"){this.field=t,this.dir=n}}function sI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Pp{}class jt extends Pp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new oI(t,n,r):n==="array-contains"?new cI(t,r):n==="in"?new uI(t,r):n==="not-in"?new hI(t,r):n==="array-contains-any"?new fI(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new aI(t,r):new lI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(kr(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return at(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Pp{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Be(t,n)}matches(t){return xp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function xp(e){return e.op==="and"}function Vp(e){return iI(e)&&xp(e)}function iI(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function Ba(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+Or(e.value);if(Vp(e))return e.filters.map(t=>Ba(t)).join(",");{const t=e.filters.map(n=>Ba(n)).join(",");return`${e.op}(${t})`}}function Dp(e,t){return e instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.field.isEqual(s.field)&&Xe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Dp(a,s.filters[l]),!0):!1}(e,t):void at(19439)}function Np(e){return e instanceof jt?function(n){return`${n.field.canonicalString()} ${n.op} ${Or(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(Np).join(" ,")+"}"}(e):"Filter"}class oI extends jt{constructor(t,n,r){super(t,n,r),this.key=rt.fromName(r.referenceValue)}matches(t){const n=rt.comparator(t.key,this.key);return this.matchesComparison(n)}}class aI extends jt{constructor(t,n){super(t,"in",n),this.keys=kp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class lI extends jt{constructor(t,n){super(t,"not-in",n),this.keys=kp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function kp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>rt.fromName(r.referenceValue))}class cI extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Nl(n)&&$s(n.arrayValue,this.value)}}class uI extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&$s(this.value.arrayValue,n)}}class hI extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$s(this.value.arrayValue,n)}}class fI extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Nl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$s(this.value.arrayValue,r))}}/**
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
 */class dI{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function Ph(e,t=null,n=[],r=[],s=null,i=null,a=null){return new dI(e,t,n,r,s,i,a)}function kl(e){const t=yt(e);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ba(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),po(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Or(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Or(r)).join(",")),t.Ie=n}return t.Ie}function Ol(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!sI(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Dp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ch(e.startAt,t.startAt)&&Ch(e.endAt,t.endAt)}function $a(e){return rt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Hr{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function pI(e,t,n,r,s,i,a,l){return new Hr(e,t,n,r,s,i,a,l)}function Op(e){return new Hr(e)}function xh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Mp(e){return e.collectionGroup!==null}function bs(e){const t=yt(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qt(le.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new js(i,r))}),n.has(le.keyField().canonicalString())||t.Ee.push(new js(le.keyField(),r))}return t.Ee}function Qe(e){const t=yt(e);return t.de||(t.de=gI(t,bs(e))),t.de}function gI(e,t){if(e.limitType==="F")return Ph(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new js(s.field,i)});const n=e.endAt?new qi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qi(e.startAt.position,e.startAt.inclusive):null;return Ph(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ja(e,t){const n=e.filters.concat([t]);return new Hr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function qa(e,t,n){return new Hr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mo(e,t){return Ol(Qe(e),Qe(t))&&e.limitType===t.limitType}function Lp(e){return`${kl(Qe(e))}|lt:${e.limitType}`}function mr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Np(s)).join(", ")}]`),po(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Or(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Or(s)).join(",")),`Target(${r})`}(Qe(e))}; limitType=${e.limitType})`}function _o(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):rt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Sh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,bs(r),s)||r.endAt&&!function(a,l,c){const h=Sh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,bs(r),s))}(e,t)}function mI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fp(e){return(t,n)=>{let r=!1;for(const s of bs(e)){const i=_I(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _I(e,t,n){const r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?kr(c,h):at(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return at(19790,{direction:e.dir})}}/**
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
 */class or{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return wp(this.inner)}size(){return this.innerSize}}/**
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
 */const yI=new Ut(rt.comparator);function Fn(){return yI}const Up=new Ut(rt.comparator);function hs(...e){let t=Up;for(const n of e)t=t.insert(n.key,n);return t}function vI(e){let t=Up;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Yn(){return Rs()}function Bp(){return Rs()}function Rs(){return new or(e=>e.toString(),(e,t)=>e.isEqual(t))}const EI=new qt(rt.comparator);function vt(...e){let t=EI;for(const n of e)t=t.add(n);return t}const wI=new qt(ut);function TI(){return wI}/**
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
 */function Ml(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(t)?"-0":t}}function $p(e){return{integerValue:""+e}}function II(e,t){return YT(t)?$p(t):Ml(e,t)}/**
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
 */class yo{constructor(){this._=void 0}}function AI(e,t,n){return e instanceof Ha?function(s,i){const a={fields:{[Ap]:{stringValue:Ip},[Rp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dl(i)&&(i=go(i)),i&&(a.fields[bp]=i),{mapValue:a}}(n,t):e instanceof Hi?jp(e,t):e instanceof zi?qp(e,t):function(s,i){const a=RI(s,i),l=Vh(a)+Vh(s.Re);return Ua(a)&&Ua(s.Re)?$p(l):Ml(s.serializer,l)}(e,t)}function bI(e,t,n){return e instanceof Hi?jp(e,t):e instanceof zi?qp(e,t):n}function RI(e,t){return e instanceof za?function(r){return Ua(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ha extends yo{}class Hi extends yo{constructor(t){super(),this.elements=t}}function jp(e,t){const n=Hp(t);for(const r of e.elements)n.some(s=>Xe(s,r))||n.push(r);return{arrayValue:{values:n}}}class zi extends yo{constructor(t){super(),this.elements=t}}function qp(e,t){let n=Hp(t);for(const r of e.elements)n=n.filter(s=>!Xe(s,r));return{arrayValue:{values:n}}}class za extends yo{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Vh(e){return Lt(e.integerValue||e.doubleValue)}function Hp(e){return Nl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function SI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Hi&&s instanceof Hi||r instanceof zi&&s instanceof zi?Nr(r.elements,s.elements,Xe):r instanceof za&&s instanceof za?Xe(r.Re,s.Re):r instanceof Ha&&s instanceof Ha}(e.transform,t.transform)}class er{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new er}static exists(t){return new er(void 0,t)}static updateTime(t){return new er(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ci(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ll{}function zp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new PI(e.key,er.none()):new Fl(e.key,e.data,er.none());{const n=e.data,r=Ke.empty();let s=new qt(le.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new vo(e.key,r,new bn(s.toArray()),er.none())}}function CI(e,t,n){e instanceof Fl?function(s,i,a){const l=s.value.clone(),c=Nh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof vo?function(s,i,a){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Nh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Kp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ss(e,t,n,r){return e instanceof Fl?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const h=i.value.clone(),d=kh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof vo?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const h=kh(i.fieldTransforms,c,a),d=a.data;return d.setAll(Kp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Ci(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Dh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Nr(r,s,(i,a)=>SI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Fl extends Ll{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vo extends Ll{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Nh(e,t,n){const r=new Map;Ot(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,bI(a,l,n[s]))}return r}function kh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,AI(i,a,t))}return r}class PI extends Ll{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&CI(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ss(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ss(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Bp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=zp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),vt())}isEqual(t){return this.batchId===t.batchId&&Nr(this.mutations,t.mutations,(n,r)=>Dh(n,r))&&Nr(this.baseMutations,t.baseMutations,(n,r)=>Dh(n,r))}}/**
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
 */class VI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class DI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var $t,mt;function Gp(e){if(e===void 0)return fn("GRPC error has no .code"),B.UNKNOWN;switch(e){case $t.OK:return B.OK;case $t.CANCELLED:return B.CANCELLED;case $t.UNKNOWN:return B.UNKNOWN;case $t.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case $t.INTERNAL:return B.INTERNAL;case $t.UNAVAILABLE:return B.UNAVAILABLE;case $t.UNAUTHENTICATED:return B.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case $t.NOT_FOUND:return B.NOT_FOUND;case $t.ALREADY_EXISTS:return B.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return B.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case $t.ABORTED:return B.ABORTED;case $t.OUT_OF_RANGE:return B.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return B.UNIMPLEMENTED;case $t.DATA_LOSS:return B.DATA_LOSS;default:return at(39323,{code:e})}}(mt=$t||($t={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const NI=new xn([4294967295,4294967295],0);function Oh(e){const t=vp().encode(e),n=new hp;return n.update(t),new Uint8Array(n.digest())}function Mh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new xn([n,r],0),new xn([s,i],0)]}class Ul{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=xn.fromNumber(this.pe)}we(t,n,r){let s=t.add(n.multiply(xn.fromNumber(r)));return s.compare(NI)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Oh(t),[r,s]=Mh(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ul(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const n=Oh(t),[r,s]=Mh(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ks.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Eo(ot.min(),s,new Ut(ut),Fn(),vt())}}class Ks{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ks(r,n,vt(),vt(),vt())}}/**
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
 */class Pi{constructor(t,n,r,s){this.De=t,this.removedTargetIds=n,this.key=r,this.ve=s}}class Wp{constructor(t,n){this.targetId=t,this.Ce=n}}class Qp{constructor(t,n,r=Zt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lh{constructor(){this.Fe=0,this.Me=Fh(),this.xe=Zt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=vt(),n=vt(),r=vt();return this.Me.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:at(38017,{changeType:i})}}),new Ks(this.xe,this.Oe,t,n,r)}Qe(){this.Ne=!1,this.Me=Fh()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ot(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class kI{constructor(t){this.ze=t,this.je=new Map,this.He=Fn(),this.Je=yi(),this.Ye=yi(),this.Ze=new Ut(ut)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const r=this.rt(n);switch(t.state){case 0:this.it(n)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(t.resumeToken));break;default:at(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(t){const n=t.targetId,r=t.Ce.count,s=this._t(n);if(s){const i=s.target;if($a(i))if(r===0){const a=new rt(i.path);this.tt(n,a,oe.newNoDocument(a,ot.min()))}else Ot(r===1,20013,{expectedCount:r});else{const a=this.ut(n);if(a!==r){const l=this.ct(t),c=l?this.lt(l,t,a):1;if(c!==0){this.st(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Mn(r).toUint8Array()}catch(c){if(c instanceof Tp)return Dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ul(a,s,i)}catch(c){return Dr(c instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(t,n,r){return n.Ce.count===r-this.Tt(t,n.targetId)?0:2}Tt(t,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(t){const n=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&$a(l.target)){const c=new rt(l.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,oe.newNoDocument(c,t))}i.Le&&(n.set(a,i.qe()),i.Qe())}});let r=vt();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(t));const s=new Eo(t,n,this.Ze,this.He,r);return this.He=Fn(),this.Je=yi(),this.Ye=yi(),this.Ze=new Ut(ut),s}et(t,n){if(!this.it(t))return;const r=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),r&&(this.He=this.He.insert(n,r))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Lh,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new qt(ut),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new qt(ut),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Lh),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function yi(){return new Ut(rt.comparator)}function Fh(){return new Ut(rt.comparator)}const OI={asc:"ASCENDING",desc:"DESCENDING"},MI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LI={and:"AND",or:"OR"};class FI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ka(e,t){return e.useProto3Json||po(t)?t:{value:t}}function Ga(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function br(e){return Ot(!!e,49232),ot.fromTimestamp(function(n){const r=On(n);return new Kt(r.seconds,r.nanos)}(e))}function Xp(e,t){return Wa(e,t).canonicalString()}function Wa(e,t){const n=function(s){return new Nt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Jp(e){const t=Nt.fromString(e);return Ot(rg(t),10190,{key:t.toString()}),t}function la(e,t){const n=Jp(t);if(n.get(1)!==e.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(tg(n))}function Zp(e,t){return Xp(e.databaseId,t)}function UI(e){const t=Jp(e);return t.length===4?Nt.emptyPath():tg(t)}function Uh(e){return new Nt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tg(e){return Ot(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function BI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:at(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ot(d===void 0||typeof d=="string",58123),Zt.fromBase64String(d||"")):(Ot(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Zt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?B.UNKNOWN:Gp(h.code);return new Z(d,h.message||"")}(a);n=new Qp(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=la(e,r.document.name),i=br(r.document.updateTime),a=r.document.createTime?br(r.document.createTime):ot.min(),l=new Ke({mapValue:{fields:r.document.fields}}),c=oe.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Pi(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=la(e,r.document),i=r.readTime?br(r.readTime):ot.min(),a=oe.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Pi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=la(e,r.document),i=r.removedTargetIds||[];n=new Pi([],i,s,null)}else{if(!("filter"in t))return at(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new DI(s,i),l=r.targetId;n=new Wp(l,a)}}return n}function $I(e,t){return{documents:[Zp(e,t.path)]}}function jI(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zp(e,s);const i=function(h){if(h.length!==0)return ng(Be.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:_r(m.field),direction:zI(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ka(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{gt:n,parent:s}}function qI(e){let t=UI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ot(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=eg(p);return m instanceof Be&&Vp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(x){return new js(yr(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,po(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new qi(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new qi(v,m)}(n.endAt)),pI(t,s,a,i,l,"F",c,h)}function HI(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return at(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function eg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yr(n.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(n.unaryFilter.field);return jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yr(n.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return at(61313);default:return at(60726)}}(e):e.fieldFilter!==void 0?function(n){return jt.create(yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return at(58110);default:return at(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>eg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return at(1026)}}(n.compositeFilter.op))}(e):at(30097,{filter:e})}function zI(e){return OI[e]}function KI(e){return MI[e]}function GI(e){return LI[e]}function _r(e){return{fieldPath:e.canonicalString()}}function yr(e){return le.fromServerFormat(e.fieldPath)}function ng(e){return e instanceof jt?function(n){if(n.op==="=="){if(Rh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(bh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(bh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:KI(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>ng(s));return r.length===1?r[0]:{compositeFilter:{op:GI(n.op),filters:r}}}(e):at(54877,{filter:e})}function rg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Rn{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=Zt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class WI{constructor(t){this.wt=t}}function QI(e){const t=qI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qa(t,t.limit,"L"):t}/**
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
 */class YI{constructor(){this.Cn=new XI}addToCollectionParentIndex(t,n){return this.Cn.add(n),O.resolve()}getCollectionParents(t,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return O.resolve()}deleteFieldIndex(t,n){return O.resolve()}deleteAllFieldIndexes(t){return O.resolve()}createTargetIndexes(t,n){return O.resolve()}getDocumentsMatchingTarget(t,n){return O.resolve(null)}getIndexType(t,n){return O.resolve(0)}getFieldIndexes(t,n){return O.resolve([])}getNextCollectionGroupToUpdate(t){return O.resolve(null)}getMinOffset(t,n){return O.resolve(kn.min())}getMinOffsetFromCollectionGroup(t,n){return O.resolve(kn.min())}updateCollectionGroup(t,n,r){return O.resolve()}updateIndexEntries(t,n){return O.resolve()}}class XI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new qt(Nt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new qt(Nt.comparator)).toArray()}}/**
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
 */const Bh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sg=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(sg,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
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
 */class Mr{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Mr(0)}static lr(){return new Mr(-1)}}/**
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
 */const $h="LruGarbageCollector",JI=1048576;function jh([e,t],[n,r]){const s=ut(e,n);return s===0?ut(t,r):s}class ZI{constructor(t){this.Er=t,this.buffer=new qt(jh),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class t0{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){X($h,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jr(n)?X($h,"Ignoring IndexedDB error during garbage collection: ",n):await ho(n)}await this.mr(3e5)})}}class e0{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return O.resolve(fo.le);const r=new ZI(n);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.gr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Bh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bh):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),gr()<=_t.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function n0(e,t){return new e0(e,t)}/**
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
 */class r0{constructor(){this.changes=new or(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class s0{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class i0{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ss(r.mutation,s,bn.empty(),Kt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,vt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=vt()){const s=Yn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=hs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Yn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,vt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Fn();const a=Rs(),l=function(){return Rs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof vo)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ss(d.mutation,h,d.mutation.getFieldMask(),Kt.now())):a.set(h.key,bn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new s0(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Rs();let s=new Ut((a,l)=>a-l),i=vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||bn.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||vt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Bp();d.forEach(m=>{if(!i.has(m)){const v=zp(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return rt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Mp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):O.resolve(Yn());let l=Fs,c=i;return a.next(h=>O.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,vt())).next(d=>({batchId:l,changes:vI(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new rt(n)).next(r=>{let s=hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=hs();return this.indexManager.getCollectionParents(t,i).next(l=>O.forEach(l,c=>{const h=function(p,m){return new Hr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,oe.newInvalidDocument(d)))});let l=hs();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ss(d.mutation,h,bn.empty(),Kt.now()),_o(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class o0{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return O.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:br(s.createTime)}}(n)),O.resolve()}getNamedQuery(t,n){return O.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(s){return{name:s.name,query:QI(s.bundledQuery),readTime:br(s.readTime)}}(n)),O.resolve()}}/**
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
 */class a0{constructor(){this.overlays=new Ut(rt.comparator),this.Qr=new Map}getOverlay(t,n){return O.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Yn();return O.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),O.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),O.resolve()}getOverlaysForCollection(t,n,r){const s=Yn(),i=n.length+1,a=new rt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ut((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Yn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return O.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new VI(n,r));let i=this.Qr.get(n);i===void 0&&(i=vt(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class l0{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(t){return O.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Bl{constructor(){this.$r=new qt(Ht.Ur),this.Kr=new qt(Ht.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const r=new Ht(t,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.zr(new Ht(t,n))}jr(t,n){t.forEach(r=>this.removeReference(r,n))}Hr(t){const n=new rt(new Nt([])),r=new Ht(n,t),s=new Ht(n,t+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new rt(new Nt([])),r=new Ht(n,t),s=new Ht(n,t+1);let i=vt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Ht(t,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ht{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return rt.comparator(t.key,n.key)||ut(t.Zr,n.Zr)}static Wr(t,n){return ut(t.Zr,n.Zr)||rt.comparator(t.key,n.key)}}/**
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
 */class c0{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new qt(Ht.Ur)}checkEmpty(t){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Ht(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(t,n){return O.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?QT:this.nr-1)}getAllMutationBatches(t){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ht(n,0),s=new Ht(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new qt(ut);return n.forEach(s=>{const i=new Ht(s,0),a=new Ht(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),O.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;rt.isDocumentKey(i)||(i=i.child(""));const a=new Ht(new rt(i),0);let l=new qt(ut);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},a),O.resolve(this.ni(l))}ni(t){const n=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Ot(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return O.forEach(n.mutations,s=>{const i=new Ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,n){const r=new Ht(n,0),s=this.Xr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,O.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class u0{constructor(t){this.ii=t,this.docs=function(){return new Ut(rt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(n))}getEntries(t,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():oe.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Fn();const a=n.path,l=new rt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||zT(HT(d),r)<=0||(s.has(d.key)||_o(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(t,n,r,s){at(9500)}si(t,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new h0(this)}getSize(t){return O.resolve(this.size)}}class h0 extends r0{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),O.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class f0{constructor(t){this.persistence=t,this.oi=new or(n=>kl(n),Ol),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this._i=0,this.ai=new Bl,this.targetCount=0,this.ui=Mr.cr()}forEachTarget(t,n){return this.oi.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(t){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return O.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),O.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Mr(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,O.resolve()}updateTargetData(t,n){return this.Tr(n),O.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(t){return O.resolve(this.targetCount)}getTargetData(t,n){const r=this.oi.get(n)||null;return O.resolve(r)}addMatchingKeys(t,n,r){return this.ai.Gr(n,r),O.resolve()}removeMatchingKeys(t,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),O.resolve()}getMatchingKeysForTargetId(t,n){const r=this.ai.Yr(n);return O.resolve(r)}containsKey(t,n){return O.resolve(this.ai.containsKey(n))}}/**
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
 */class ig{constructor(t,n){this.ci={},this.overlays={},this.li=new fo(0),this.hi=!1,this.hi=!0,this.Pi=new l0,this.referenceDelegate=t(this),this.Ti=new f0(this),this.indexManager=new YI,this.remoteDocumentCache=function(s){return new u0(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new WI(n),this.Ei=new o0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new a0,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ci[t.toKey()];return r||(r=new c0(n,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const s=new d0(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(t,n){return O.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,n)))}}class d0 extends GT{constructor(t){super(),this.currentSequenceNumber=t}}class $l{constructor(t){this.persistence=t,this.Vi=new Bl,this.mi=null}static fi(t){return new $l(t)}get gi(){if(this.mi)return this.mi;throw at(60996)}addReference(t,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),O.resolve()}removeReference(t,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),O.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.gi,r=>{const s=rt.fromPath(r);return this.pi(t,s).next(i=>{i||n.removeEntry(s,ot.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return O.or([()=>O.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Ki{constructor(t,n){this.persistence=t,this.yi=new or(r=>XT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=n0(this,n)}static fi(t,n){return new Ki(t,n)}di(){}Ai(t){return O.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}br(t){let n=0;return this.yr(t,r=>{n++}).next(()=>n)}yr(t,n){return O.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ot.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),O.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.yi.set(r,t.currentSequenceNumber),O.resolve()}removeReference(t,n,r){return this.yi.set(r,t.currentSequenceNumber),O.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),O.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Si(t.data.value)),n}Dr(t,n,r){return O.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.yi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class jl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ds=r,this.As=s}static Rs(t,n){let r=vt(),s=vt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jl(t,n.fromCache,r,s)}}/**
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
 */class p0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class g0{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return dw()?8:WT(uw())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ws(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.bs(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new p0;return this.Ss(t,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(t,n,a,l.size)})}).next(()=>i.result)}Ds(t,n,r,s){return r.documentReadCount<this.gs?(gr()<=_t.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),O.resolve()):(gr()<=_t.DEBUG&&X("QueryEngine","Query:",mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(gr()<=_t.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qe(n))):O.resolve())}ws(t,n){if(xh(n))return O.resolve(null);let r=Qe(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qa(n,null,"F"),r=Qe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=vt(...i);return this.ys.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.vs(n,l);return this.Cs(n,h,a,c.readTime)?this.ws(t,qa(n,null,"F")):this.Fs(t,h,n,c)}))})))}bs(t,n,r,s){return xh(n)||s.isEqual(ot.min())?O.resolve(null):this.ys.getDocuments(t,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?O.resolve(null):(gr()<=_t.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(n)),this.Fs(t,a,n,qT(s,Fs)).next(l=>l))})}vs(t,n){let r=new qt(Fp(t));return n.forEach((s,i)=>{_o(t,i)&&(r=r.add(i))}),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return gr()<=_t.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",mr(n)),this.ys.getDocumentsMatchingQuery(t,n,kn.min(),r)}Fs(t,n,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ql="LocalStore",m0=3e8;class _0{constructor(t,n,r,s){this.persistence=t,this.Ms=n,this.serializer=s,this.xs=new Ut(ut),this.Os=new or(i=>kl(i),Ol),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new i0(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function y0(e,t,n,r){return new _0(e,t,n,r)}async function og(e,t){const n=yt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=vt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:l}))})})}function ag(e){const t=yt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function v0(e,t){const n=yt(e),r=t.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(Zt.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(k,L,W){return k.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=m0?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,v,d)&&l.push(n.Ti.updateTargetData(i,v))});let c=Fn(),h=vt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(E0(i,a,t.documentUpdates).next(d=>{c=d.qs,h=d.Qs})),!r.isEqual(ot.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.xs=s,i))}function E0(e,t,n){let r=vt(),s=vt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=Fn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ot.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):X(ql,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function w0(e,t){const n=yt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,t).next(i=>i?(s=i,O.resolve(s)):n.Ti.allocateTargetId(r).next(a=>(s=new Rn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(t,r.targetId)),r})}async function Qa(e,t,n){const r=yt(e),s=r.xs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jr(a))throw a;X(ql,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function qh(e,t,n){const r=yt(e);let s=ot.min(),i=vt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=yt(c),m=p.Os.get(d);return m!==void 0?O.resolve(p.xs.get(m)):p.Ti.getTargetData(h,d)}(r,a,Qe(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:vt())).next(l=>(T0(r,mI(t),l),{documents:l,$s:i})))}function T0(e,t,n){let r=e.Ns.get(t)||ot.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Ns.set(t,r)}class Hh{constructor(){this.activeTargetIds=TI()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class I0{constructor(){this.xo=new Hh,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,r){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Hh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class A0{No(t){}shutdown(){}}/**
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
 */const zh="ConnectivityMonitor";class Kh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){X(zh,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){X(zh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vi=null;function Ya(){return vi===null?vi=function(){return 268435456+Math.round(2147483648*Math.random())}():vi++,"0x"+vi.toString(16)}/**
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
 */const ca="RestConnection",b0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class R0{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===$i?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,n,r,s,i){const a=Ya(),l=this.jo(t,n.toUriEncodedString());X(ca,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),d=Cl(h);return this.Jo(t,l,c,r,d).then(p=>(X(ca,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Dr(ca,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(t,n,r,s,i,a){return this.zo(t,n,r,s,i)}Ho(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$r}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}jo(t,n){const r=b0[t];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class S0{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const re="WebChannelConnection";class C0 extends R0{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=Ya();return new Promise((l,c)=>{const h=new fp;h.setWithCredentials(!0),h.listenOnce(dp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ri.NO_ERROR:const p=h.getResponseJson();X(re,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case Ri.TIMEOUT:X(re,`RPC '${t}' ${a} timed out`),c(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const m=h.getStatus();if(X(re,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const x=v==null?void 0:v.error;if(x&&x.status&&x.message){const k=function(W){const U=W.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(x.status);c(new Z(k,x.message))}else c(new Z(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Z(B.UNAVAILABLE,"Connection failed."));break;default:at(9055,{h_:t,streamId:a,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{X(re,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);X(re,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}I_(t,n,r){const s=Ya(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=mp(),l=gp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(re,`Creating RPC '${t}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.E_(p);let m=!1,v=!1;const x=new S0({Zo:L=>{v?X(re,`Not sending because RPC '${t}' stream ${s} is closed:`,L):(m||(X(re,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),X(re,`RPC '${t}' stream ${s} sending:`,L),p.send(L))},Xo:()=>p.close()}),k=(L,W,U)=>{L.listen(W,H=>{try{U(H)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,us.EventType.OPEN,()=>{v||(X(re,`RPC '${t}' stream ${s} transport opened.`),x.__())}),k(p,us.EventType.CLOSE,()=>{v||(v=!0,X(re,`RPC '${t}' stream ${s} transport closed`),x.u_(),this.d_(p))}),k(p,us.EventType.ERROR,L=>{v||(v=!0,Dr(re,`RPC '${t}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),x.u_(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),k(p,us.EventType.MESSAGE,L=>{var W;if(!v){const U=L.data[0];Ot(!!U,16349);const H=U,z=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(z){X(re,`RPC '${t}' stream ${s} received error:`,z);const ht=z.status;let dt=function(T){const A=$t[T];if(A!==void 0)return Gp(A)}(ht),I=z.message;dt===void 0&&(dt=B.INTERNAL,I="Unknown error status: "+ht+" with message "+z.message),v=!0,x.u_(new Z(dt,I)),p.close()}else X(re,`RPC '${t}' stream ${s} received:`,U),x.c_(U)}}),k(l,pp.STAT_EVENT,L=>{L.stat===Ma.PROXY?X(re,`RPC '${t}' stream ${s} detected buffering proxy`):L.stat===Ma.NOPROXY&&X(re,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.a_()},0),x}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function ua(){return typeof document<"u"?document:null}/**
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
 */function wo(e){return new FI(e,!0)}/**
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
 */class lg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.xi=t,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Gh="PersistentStream";class P0{constructor(t,n,r,s,i,a,l,c){this.xi=t,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new lg(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{t(()=>{const s=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,n){const r=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return X(Gh,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(X(Gh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x0 extends P0{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=BI(this.serializer,t),r=function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?br(a.readTime):ot.min()}(t);return this.listener.Y_(n,r)}Z_(t){const n={};n.database=Uh(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=$a(c)?{documents:$I(i,c)}:{query:jI(i,c).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yp(i,a.resumeToken);const h=Ka(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=Ga(i,a.snapshotVersion.toTimestamp());const h=Ka(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=HI(this.serializer,t);r&&(n.labels=r),this.Q_(n)}X_(t){const n={};n.database=Uh(this.serializer),n.removeTarget=t,this.Q_(n)}}/**
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
 */class V0{}class D0 extends V0{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(t,Wa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}Yo(t,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(t,Wa(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(B.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class N0{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(fn(n),this.ua=!1):X("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Lr="RemoteStore";class k0{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(a=>{r.enqueueAndForget(async()=>{Ws(this)&&(X(Lr,"Restarting streams for network reachability change."),await async function(c){const h=yt(c);h.da.add(4),await Gs(h),h.Va.set("Unknown"),h.da.delete(4),await To(h)}(this))})}),this.Va=new N0(r,s)}}async function To(e){if(Ws(e))for(const t of e.Aa)await t(!0)}async function Gs(e){for(const t of e.Aa)await t(!1)}function cg(e,t){const n=yt(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Gl(n)?Kl(n):zr(n).N_()&&zl(n,t))}function Hl(e,t){const n=yt(e),r=zr(n);n.Ea.delete(t),r.N_()&&ug(n,t),n.Ea.size===0&&(r.N_()?r.k_():Ws(n)&&n.Va.set("Unknown"))}function zl(e,t){if(e.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}zr(e).Z_(t)}function ug(e,t){e.ma.Ke(t),zr(e).X_(t)}function Kl(e){e.ma=new kI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Ea.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),zr(e).start(),e.Va.ca()}function Gl(e){return Ws(e)&&!zr(e).O_()&&e.Ea.size>0}function Ws(e){return yt(e).da.size===0}function hg(e){e.ma=void 0}async function O0(e){e.Va.set("Online")}async function M0(e){e.Ea.forEach((t,n)=>{zl(e,t)})}async function L0(e,t){hg(e),Gl(e)?(e.Va.Pa(t),Kl(e)):e.Va.set("Unknown")}async function F0(e,t,n){if(e.Va.set("Online"),t instanceof Qp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(e,t)}catch(r){X(Lr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Wh(e,r)}else if(t instanceof Pi?e.ma.Xe(t):t instanceof Wp?e.ma.ot(t):e.ma.nt(t),!n.isEqual(ot.min()))try{const r=await ag(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.ma.It(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(h);d&&i.Ea.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(Zt.EMPTY_BYTE_STRING,d.snapshotVersion)),ug(i,c);const p=new Rn(d.target,c,h,d.sequenceNumber);zl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){X(Lr,"Failed to raise snapshot:",r),await Wh(e,r)}}async function Wh(e,t,n){if(!jr(t))throw t;e.da.add(1),await Gs(e),e.Va.set("Offline"),n||(n=()=>ag(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X(Lr,"Retrying IndexedDB access"),await n(),e.da.delete(1),await To(e)})}async function Qh(e,t){const n=yt(e);n.asyncQueue.verifyOperationInProgress(),X(Lr,"RemoteStore received new credentials");const r=Ws(n);n.da.add(3),await Gs(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await To(n)}async function U0(e,t){const n=yt(e);t?(n.da.delete(2),await To(n)):t||(n.da.add(2),await Gs(n),n.Va.set("Unknown"))}function zr(e){return e.fa||(e.fa=function(n,r,s){const i=yt(n);return i.oa(),new x0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{e_:O0.bind(null,e),n_:M0.bind(null,e),i_:L0.bind(null,e),Y_:F0.bind(null,e)}),e.Aa.push(async t=>{t?(e.fa.L_(),Gl(e)?Kl(e):e.Va.set("Unknown")):(await e.fa.stop(),hg(e))})),e.fa}/**
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
 */class Wl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Wl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fg(e,t){if(fn("AsyncQueue",`${t}: ${e}`),jr(e))return new Z(B.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Rr{static emptySet(t){return new Rr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||rt.comparator(n.key,r.key):(n,r)=>rt.comparator(n.key,r.key),this.keyedMap=hs(),this.sortedSet=new Ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Yh{constructor(){this.pa=new Ut(rt.comparator)}track(t){const n=t.doc.key,r=this.pa.get(n);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(n,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(n):t.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):at(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,r)=>{t.push(r)}),t}}class Fr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Fr(t,n,Rr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class B0{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class $0{constructor(){this.queries=Xh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=yt(n),i=s.queries;s.queries=Xh(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Xh(){return new or(e=>Lp(e),mo)}async function j0(e,t){const n=yt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Da()&&t.va()&&(r=2):(i=new B0,r=t.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=fg(a,`Initialization of query '${mr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.Fa(n.onlineState),i.ba&&t.Ma(i.ba)&&Ql(n)}async function q0(e,t){const n=yt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.va()?0:1:!i.Da()&&t.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function H0(e,t){const n=yt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&Ql(n)}function z0(e,t,n){const r=yt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function Ql(e){e.Ca.forEach(t=>{t.next()})}var Xa,Jh;(Jh=Xa||(Xa={})).xa="default",Jh.Cache="cache";class K0{constructor(t,n,r){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=Fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Xa.Cache}}/**
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
 */class dg{constructor(t){this.key=t}}class pg{constructor(t){this.key=t}}class G0{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=vt(),this.mutatedKeys=vt(),this.Za=Fp(t),this.Xa=new Rr(this.Za)}get eu(){return this.Ha}tu(t,n){const r=n?n.nu:new Yh,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),v=_o(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let L=!1;m&&v?m.data.isEqual(v.data)?x!==k&&(r.track({type:3,doc:v}),L=!0):this.ru(m,v)||(r.track({type:2,doc:v}),L=!0,(c&&this.Za(v,c)>0||h&&this.Za(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),L=!0):m&&!v&&(r.track({type:1,doc:m}),L=!0,(c||h)&&(l=!0)),L&&(v?(a=a.add(v),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:a,nu:r,Cs:l,mutatedKeys:i}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((d,p)=>function(v,x){const k=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return at(20277,{Vt:L})}};return k(v)-k(x)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Ja;return this.Ja=c,a.length!==0||h?{snapshot:new Fr(this.query,t.Xa,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Yh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=vt(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return t.forEach(r=>{this.Ya.has(r)||n.push(new pg(r))}),this.Ya.forEach(r=>{t.has(r)||n.push(new dg(r))}),n}au(t){this.Ha=t.$s,this.Ya=vt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return Fr.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Yl="SyncEngine";class W0{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Q0{constructor(t){this.key=t,this.cu=!1}}class Y0{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new or(l=>Lp(l),mo),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ut(rt.comparator),this.Eu=new Map,this.du=new Bl,this.Au={},this.Ru=new Map,this.Vu=Mr.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function X0(e,t,n=!0){const r=vg(e);let s;const i=r.hu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await gg(r,t,n,!0),s}async function J0(e,t){const n=vg(e);await gg(n,t,!0,!1)}async function gg(e,t,n,r){const s=await w0(e.localStore,Qe(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Z0(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&cg(e.remoteStore,s),l}async function Z0(e,t,n,r,s){e.fu=(p,m,v)=>async function(k,L,W,U){let H=L.view.tu(W);H.Cs&&(H=await qh(k.localStore,L.query,!1).then(({documents:I})=>L.view.tu(I,H)));const z=U&&U.targetChanges.get(L.targetId),ht=U&&U.targetMismatches.get(L.targetId)!=null,dt=L.view.applyChanges(H,k.isPrimaryClient,z,ht);return tf(k,L.targetId,dt.ou),dt.snapshot}(e,p,m,v);const i=await qh(e.localStore,t,!0),a=new G0(t,i.$s),l=a.tu(i.documents),c=Ks.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);tf(e,n,h.ou);const d=new W0(t,n,a);return e.hu.set(t,d),e.Pu.has(n)?e.Pu.get(n).push(t):e.Pu.set(n,[t]),h.snapshot}async function tA(e,t,n){const r=yt(e),s=r.hu.get(t),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(a=>!mo(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hl(r.remoteStore,s.targetId),Ja(r,s.targetId)}).catch(ho)):(Ja(r,s.targetId),await Qa(r.localStore,s.targetId,!0))}async function eA(e,t){const n=yt(e),r=n.hu.get(t),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hl(n.remoteStore,r.targetId))}async function mg(e,t){const n=yt(e);try{const r=await v0(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Eu.get(i);a&&(Ot(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?Ot(a.cu,14607):s.removedDocuments.size>0&&(Ot(a.cu,42227),a.cu=!1))}),await yg(n,r,t)}catch(r){await ho(r)}}function Zh(e,t,n){const r=yt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,a)=>{const l=a.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=yt(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Sa)m.Fa(l)&&(h=!0)}),h&&Ql(c)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function nA(e,t,n){const r=yt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Eu.get(t),i=s&&s.key;if(i){let a=new Ut(rt.comparator);a=a.insert(i,oe.newNoDocument(i,ot.min()));const l=vt().add(i),c=new Eo(ot.min(),new Map,new Ut(ut),a,l);await mg(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(t),Xl(r)}else await Qa(r.localStore,t,!1).then(()=>Ja(r,t,n)).catch(ho)}function Ja(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Pu.get(t))e.hu.delete(r),n&&e.lu.gu(r,n);e.Pu.delete(t),e.isPrimaryClient&&e.du.Hr(t).forEach(r=>{e.du.containsKey(r)||_g(e,r)})}function _g(e,t){e.Tu.delete(t.path.canonicalString());const n=e.Iu.get(t);n!==null&&(Hl(e.remoteStore,n),e.Iu=e.Iu.remove(t),e.Eu.delete(n),Xl(e))}function tf(e,t,n){for(const r of n)r instanceof dg?(e.du.addReference(r.key,t),rA(e,r)):r instanceof pg?(X(Yl,"Document no longer in limbo: "+r.key),e.du.removeReference(r.key,t),e.du.containsKey(r.key)||_g(e,r.key)):at(19791,{pu:r})}function rA(e,t){const n=t.key,r=n.path.canonicalString();e.Iu.get(n)||e.Tu.has(r)||(X(Yl,"New document in limbo: "+n),e.Tu.add(r),Xl(e))}function Xl(e){for(;e.Tu.size>0&&e.Iu.size<e.maxConcurrentLimboResolutions;){const t=e.Tu.values().next().value;e.Tu.delete(t);const n=new rt(Nt.fromString(t)),r=e.Vu.next();e.Eu.set(r,new Q0(n)),e.Iu=e.Iu.insert(n,r),cg(e.remoteStore,new Rn(Qe(Op(n.path)),r,"TargetPurposeLimboResolution",fo.le))}}async function yg(e,t,n){const r=yt(e),s=[],i=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{a.push(r.fu(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=jl.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(c,h){const d=yt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,m=>O.forEach(m.ds,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>O.forEach(m.As,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!jr(p))throw p;X(ql,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.xs.get(m),x=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(x);d.xs=d.xs.insert(m,k)}}}(r.localStore,i))}async function sA(e,t){const n=yt(e);if(!n.currentUser.isEqual(t)){X(Yl,"User change. New user:",t.toKey());const r=await og(n.localStore,t);n.currentUser=t,function(i,a){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new Z(B.CANCELLED,a))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yg(n,r.ks)}}function iA(e,t){const n=yt(e),r=n.Eu.get(t);if(r&&r.cu)return vt().add(r.key);{let s=vt();const i=n.Pu.get(t);if(!i)return s;for(const a of i){const l=n.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function vg(e){const t=yt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=mg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nA.bind(null,t),t.lu.Y_=H0.bind(null,t.eventManager),t.lu.gu=z0.bind(null,t.eventManager),t}class Gi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wo(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return y0(this.persistence,new g0,t.initialUser,this.serializer)}Su(t){return new ig($l.fi,this.serializer)}bu(t){return new I0}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gi.provider={build:()=>new Gi};class oA extends Gi{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Ot(this.persistence.referenceDelegate instanceof Ki,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new t0(r,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new ig(r=>Ki.fi(r,n),this.serializer)}}class Za{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sA.bind(null,this.syncEngine),await U0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $0}()}createDatastore(t){const n=wo(t.databaseInfo.databaseId),r=function(i){return new C0(i)}(t.databaseInfo);return function(i,a,l,c){return new D0(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new k0(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Zh(this.syncEngine,n,0),function(){return Kh.C()?new Kh:new A0}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new Y0(s,i,a,l,c,h);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=yt(s);X(Lr,"RemoteStore shutting down."),i.da.add(5),await Gs(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Za.provider={build:()=>new Za};/**
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
 */class aA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):fn("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Un="FirestoreClient";class lA{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=BT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(Un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(Un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=fg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ha(e,t){e.asyncQueue.verifyOperationInProgress(),X(Un,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await og(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ef(e,t){e.asyncQueue.verifyOperationInProgress();const n=await cA(e);X(Un,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Qh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Qh(t.remoteStore,s)),e._onlineComponents=t}async function cA(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X(Un,"Using user provided OfflineComponentProvider");try{await ha(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Dr("Error using user provided cache. Falling back to memory cache: "+n),await ha(e,new Gi)}}else X(Un,"Using default OfflineComponentProvider"),await ha(e,new oA(void 0));return e._offlineComponents}async function uA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X(Un,"Using user provided OnlineComponentProvider"),await ef(e,e._uninitializedComponentsProvider._online)):(X(Un,"Using default OnlineComponentProvider"),await ef(e,new Za))),e._onlineComponents}async function hA(e){const t=await uA(e),n=t.eventManager;return n.onListen=X0.bind(null,t.syncEngine),n.onUnlisten=tA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=J0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=eA.bind(null,t.syncEngine),n}function fA(e,t,n={}){const r=new tr;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new aA({next:m=>{d.xu(),a.enqueueAndForget(()=>q0(i,p)),m.fromCache&&c.source==="server"?h.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new K0(l,d,{includeMetadataChanges:!0,Qa:!0});return j0(i,p)}(await hA(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Eg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const nf=new Map;function dA(e,t,n,r){if(t===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rf(e){if(rt.isDocumentKey(e))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Io(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":at(12329,{type:typeof e})}function tl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Io(e);throw new Z(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const wg="firestore.googleapis.com",sf=!0;class of{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wg,this.ssl=sf}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:sf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<JI)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jl{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NT;switch(r.type){case"firstParty":return new LT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nf.get(n);r&&(X("ComponentProvider","Removing Datastore"),nf.delete(n),r.terminate())}(this),Promise.resolve()}}function pA(e,t,n,r={}){var s;e=tl(e,Jl);const i=Cl(t),a=e._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),c=`${t}:${n}`;i&&(iw(`https://${c}`),cw("Firestore",!0)),a.host!==wg&&a.host!==c&&Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Ms(h,l)&&(e._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=se.MOCK_USER;else{d=ow(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new se(m)}e._authCredentials=new kT(new yp(d,p))}}/**
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
 */class ar{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ar(this.firestore,t,this._query)}}class pn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pn(this.firestore,t,this._key)}}class Sr extends ar{constructor(t,n,r){super(t,n,Op(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pn(this.firestore,null,new rt(t))}withConverter(t){return new Sr(this.firestore,t,this._path)}}function Tg(e,t,...n){if(e=Vr(e),e instanceof Jl){const r=Nt.fromString(t,...n);return rf(r),new Sr(e,null,r)}{if(!(e instanceof pn||e instanceof Sr))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Nt.fromString(t,...n));return rf(r),new Sr(e.firestore,null,r)}}/**
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
 */const af="AsyncQueue";class lf{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new lg(this,"async_queue_retry"),this.rc=()=>{const r=ua();r&&X(af,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const n=ua();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new tr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!jr(t))throw t;X(af,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,fn("INTERNAL UNHANDLED ERROR: ",cf(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(t,n,r){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const s=Wl.createAndSchedule(this,t,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&at(47125,{cc:cf(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function cf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Ig extends Jl{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new lf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lf(t),this._firestoreClient=void 0,await t}}}function gA(e,t){const n=typeof e=="object"?e:lp(),r=typeof e=="string"?e:$i,s=zs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rw("firestore");i&&pA(s,...i)}return s}function mA(e){if(e._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||_A(e),e._firestoreClient}function _A(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,d){return new tI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Eg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new lA(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
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
 */class Ur{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ur(Zt.fromBase64String(t))}catch(n){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ur(Zt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ag{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class bg{constructor(t){this._methodName=t}}/**
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
 */class Zl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}/**
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
 */class tc{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const yA=/^__.*__$/;function Rg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw at(40011,{Ic:e})}}class ec{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ec(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return el(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(Rg(this.Ic)&&yA.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class vA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||wo(t)}bc(t,n,r,s=!1){return new ec({Ic:t,methodName:n,wc:r,path:le.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function EA(e){const t=e._freezeSettings(),n=wo(e._databaseId);return new vA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wA(e,t,n,r=!1){return nc(n,e.bc(r?4:3,t))}function nc(e,t){if(Sg(e=Vr(e)))return IA("Unsupported field value:",t,e),TA(e,t);if(e instanceof bg)return function(r,s){if(!Rg(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=nc(l,s.fc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Vr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Kt.fromDate(r);return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Kt){const i=new Kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ur)return{bytesValue:Yp(s.serializer,r._byteString)};if(r instanceof pn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tc)return function(a,l){return{mapValue:{fields:{[Sp]:{stringValue:Cp},[ji]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.gc("VectorValues must only contain numeric values.");return Ml(l.serializer,h)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Io(r)}`)}(e,t)}function TA(e,t){const n={};return wp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qr(e,(r,s)=>{const i=nc(s,t.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Sg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Kt||e instanceof Zl||e instanceof Ur||e instanceof pn||e instanceof bg||e instanceof tc)}function IA(e,t,n){if(!Sg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Io(n);throw r==="an object"?t.gc(e+" a custom object"):t.gc(e+" "+r)}}const AA=new RegExp("[~\\*/\\[\\]]");function bA(e,t,n){if(t.search(AA)>=0)throw el(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ag(...t.split("."))._internalPath}catch{throw el(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function el(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Z(B.INVALID_ARGUMENT,l+e+c)}/**
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
 */class Cg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ao("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RA extends Cg{data(){return super.data()}}function Ao(e,t){return typeof t=="string"?bA(e,t):t instanceof Ag?t._internalPath:t._delegate._internalPath}/**
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
 */function SA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rc{}class Pg extends rc{}function xg(e,t,...n){let r=[];t instanceof rc&&r.push(t),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof sc).length,l=i.filter(c=>c instanceof bo).length;if(a>1||a>0&&l>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class bo extends Pg{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new bo(t,n,r)}_apply(t){const n=this._parse(t);return Vg(t._query,n),new ar(t.firestore,t.converter,ja(t._query,n))}_parse(t){const n=EA(t.firestore);return function(i,a,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hf(p,d);const x=[];for(const k of p)x.push(uf(c,i,k));m={arrayValue:{values:x}}}else m=uf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hf(p,d),m=wA(l,a,p,d==="in"||d==="not-in");return jt.create(h,d,m)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function CA(e,t,n){const r=t,s=Ao("where",e);return bo._create(s,r,n)}class sc extends rc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new sc(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Be.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Vg(a,c),a=ja(a,c)}(t._query,n),new ar(t.firestore,t.converter,ja(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ic extends Pg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new ic(t,n)}_apply(t){const n=function(s,i,a){if(s.startAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new js(i,a)}(t._query,this._field,this._direction);return new ar(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Hr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function PA(e,t="asc"){const n=t,r=Ao("orderBy",e);return ic._create(r,n)}function uf(e,t,n){if(typeof(n=Vr(n))=="string"){if(n==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mp(t)&&n.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Nt.fromString(n));if(!rt.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ah(e,new rt(r))}if(n instanceof pn)return Ah(e,n._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(n)}.`)}function hf(e,t){if(!Array.isArray(e)||e.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vg(e,t){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class xA{convertValue(t,n="none"){switch(Ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Mn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw at(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return qr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[ji].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Lt(a.doubleValue));return new tc(i)}convertGeoPoint(t){return new Zl(Lt(t.latitude),Lt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=go(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Us(t));default:return null}}convertTimestamp(t){const n=On(t);return new Kt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Nt.fromString(t);Ot(rg(r),9688,{name:t});const s=new Bs(r.get(1),r.get(3)),i=new rt(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ei{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class VA extends Cg{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new xi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ao("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xi extends VA{data(t={}){return super.data(t)}}class DA{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new xi(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new xi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ei(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new xi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ei(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:NA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NA(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return at(61501,{type:e})}}class kA extends xA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ur(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new pn(this.firestore,null,n)}}function Dg(e){e=tl(e,ar);const t=tl(e.firestore,Ig),n=mA(t),r=new kA(t);return SA(e._query),fA(n,e._query).then(s=>new DA(t,r,e,s))}(function(t,n=!0){(function(s){$r=s})(ET),Nn(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ig(new OT(r.getProvider("auth-internal")),new FT(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),We(fh,dh,t),We(fh,dh,"esm2017")})();const Ng="@firebase/installations",oc="0.6.17";/**
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
 */const kg=1e4,Og=`w:${oc}`,Mg="FIS_v2",OA="https://firebaseinstallations.googleapis.com/v1",MA=60*60*1e3,LA="installations",FA="Installations";/**
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
 */const UA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rr=new uo(LA,FA,UA);function Lg(e){return e instanceof $n&&e.code.includes("request-failed")}/**
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
 */function Fg({projectId:e}){return`${OA}/projects/${e}/installations`}function Ug(e){return{token:e.token,requestStatus:2,expiresIn:$A(e.expiresIn),creationTime:Date.now()}}async function Bg(e,t){const r=(await t.json()).error;return rr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $g({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function BA(e,{refreshToken:t}){const n=$g(e);return n.append("Authorization",jA(t)),n}async function jg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $A(e){return Number(e.replace("s","000"))}function jA(e){return`${Mg} ${e}`}/**
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
 */async function qA({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fg(e),s=$g(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Mg,appId:e.appId,sdkVersion:Og},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await jg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Ug(h.authToken)}}else throw await Bg("Create Installation",c)}/**
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
 */function qg(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function HA(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zA=/^[cdef][\w-]{21}$/,nl="";function KA(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=GA(e);return zA.test(n)?n:nl}catch{return nl}}function GA(e){return HA(e).substr(0,22)}/**
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
 */function Ro(e){return`${e.appName}!${e.appId}`}/**
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
 */const Hg=new Map;function zg(e,t){const n=Ro(e);Kg(n,t),WA(n,t)}function Kg(e,t){const n=Hg.get(e);if(n)for(const r of n)r(t)}function WA(e,t){const n=QA();n&&n.postMessage({key:e,fid:t}),YA()}let Xn=null;function QA(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=e=>{Kg(e.data.key,e.data.fid)}),Xn}function YA(){Hg.size===0&&Xn&&(Xn.close(),Xn=null)}/**
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
 */const XA="firebase-installations-database",JA=1,sr="firebase-installations-store";let fa=null;function ac(){return fa||(fa=op(XA,JA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(sr)}}})),fa}async function Wi(e,t){const n=Ro(e),s=(await ac()).transaction(sr,"readwrite"),i=s.objectStore(sr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&zg(e,t.fid),t}async function Gg(e){const t=Ro(e),r=(await ac()).transaction(sr,"readwrite");await r.objectStore(sr).delete(t),await r.done}async function So(e,t){const n=Ro(e),s=(await ac()).transaction(sr,"readwrite"),i=s.objectStore(sr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&zg(e,l.fid),l}/**
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
 */async function lc(e){let t;const n=await So(e.appConfig,r=>{const s=ZA(r),i=tb(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===nl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ZA(e){const t=e||{fid:KA(),registrationStatus:0};return Wg(t)}function tb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(rr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=eb(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:nb(e)}:{installationEntry:t}}async function eb(e,t){try{const n=await qA(e,t);return Wi(e.appConfig,n)}catch(n){throw Lg(n)&&n.customData.serverCode===409?await Gg(e.appConfig):await Wi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function nb(e){let t=await ff(e.appConfig);for(;t.registrationStatus===1;)await qg(100),t=await ff(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lc(e);return r||n}return t}function ff(e){return So(e,t=>{if(!t)throw rr.create("installation-not-found");return Wg(t)})}function Wg(e){return rb(e)?{fid:e.fid,registrationStatus:0}:e}function rb(e){return e.registrationStatus===1&&e.registrationTime+kg<Date.now()}/**
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
 */async function sb({appConfig:e,heartbeatServiceProvider:t},n){const r=ib(e,n),s=BA(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Og,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await jg(()=>fetch(r,l));if(c.ok){const h=await c.json();return Ug(h)}else throw await Bg("Generate Auth Token",c)}function ib(e,{fid:t}){return`${Fg(e)}/${t}/authTokens:generate`}/**
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
 */async function cc(e,t=!1){let n;const r=await So(e.appConfig,i=>{if(!Qg(i))throw rr.create("not-registered");const a=i.authToken;if(!t&&lb(a))return i;if(a.requestStatus===1)return n=ob(e,t),i;{if(!navigator.onLine)throw rr.create("app-offline");const l=ub(i);return n=ab(e,l),l}});return n?await n:r.authToken}async function ob(e,t){let n=await df(e.appConfig);for(;n.authToken.requestStatus===1;)await qg(100),n=await df(e.appConfig);const r=n.authToken;return r.requestStatus===0?cc(e,t):r}function df(e){return So(e,t=>{if(!Qg(t))throw rr.create("not-registered");const n=t.authToken;return hb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ab(e,t){try{const n=await sb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Wi(e.appConfig,r),n}catch(n){if(Lg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Wi(e.appConfig,r)}throw n}}function Qg(e){return e!==void 0&&e.registrationStatus===2}function lb(e){return e.requestStatus===2&&!cb(e)}function cb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+MA}function ub(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function hb(e){return e.requestStatus===1&&e.requestTime+kg<Date.now()}/**
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
 */async function fb(e){const t=e,{installationEntry:n,registrationPromise:r}=await lc(t);return r?r.catch(console.error):cc(t).catch(console.error),n.fid}/**
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
 */async function db(e,t=!1){const n=e;return await pb(n),(await cc(n,t)).token}async function pb(e){const{registrationPromise:t}=await lc(e);t&&await t}/**
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
 */function gb(e){if(!e||!e.options)throw da("App Configuration");if(!e.name)throw da("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw da(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function da(e){return rr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Yg="installations",mb="installations-internal",_b=e=>{const t=e.getProvider("app").getImmediate(),n=gb(t),r=zs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yb=e=>{const t=e.getProvider("app").getImmediate(),n=zs(t,Yg).getImmediate();return{getId:()=>fb(n),getToken:s=>db(n,s)}};function vb(){Nn(new un(Yg,_b,"PUBLIC")),Nn(new un(mb,yb,"PRIVATE"))}vb();We(Ng,oc);We(Ng,oc,"esm2017");/**
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
 */const Qi="analytics",Eb="firebase_id",wb="origin",Tb=60*1e3,Ib="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",uc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ve=new Pl("@firebase/analytics");/**
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
 */const Ab={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ae=new uo("analytics","Analytics",Ab);/**
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
 */function bb(e){if(!e.startsWith(uc)){const t=Ae.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function Xg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Sb(e,t){const n=Rb("firebase-js-sdk-policy",{createScriptURL:bb}),r=document.createElement("script"),s=`${uc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Cb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Pb(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await Xg(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){ve.error(l)}e("config",s,i)}async function xb(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Xg(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ve.error(i)}}function Vb(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await xb(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await Pb(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){ve.error(l)}}return s}function Db(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Vb(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Nb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(uc)&&n.src.includes(e))return n;return null}/**
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
 */const kb=30,Ob=1e3;class Mb{constructor(t={},n=Ob){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Jg=new Mb;function Lb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Fb(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Lb(r)},i=Ib.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Ub(e,t=Jg,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ae.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jb;return setTimeout(async()=>{l.abort()},Tb),Zg({appId:r,apiKey:s,measurementId:i},a,l,t)}async function Zg(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Jg){var i;const{appId:a,measurementId:l}=e;try{await Bb(r,t)}catch(c){if(l)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Fb(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!$b(h)){if(s.deleteThrottleMetadata(a),l)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?nh(n,s.intervalMillis,kb):nh(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),ve.debug(`Calling attemptFetch again in ${d} millis`),Zg(e,p,r,s)}}function Bb(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $b(e){if(!(e instanceof $n)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class jb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function qb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function Hb(){if(np())try{await rp()}catch(e){return ve.warn(Ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zb(e,t,n,r,s,i,a){var l;const c=Ub(e);c.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>ve.error(v)),t.push(c);const h=Hb().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([c,h]);Nb(i)||Sb(i,d.measurementId),s("js",new Date);const m=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return m[wb]="firebase",m.update=!0,p!=null&&(m[Eb]=p),s("config",d.measurementId,m),d.measurementId}/**
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
 */class Kb{constructor(t){this.app=t}_delete(){return delete Cs[this.app.options.appId],Promise.resolve()}}let Cs={},pf=[];const gf={};let pa="dataLayer",Gb="gtag",mf,tm,_f=!1;function Wb(){const e=[];if(fw()&&e.push("This is a browser extension environment."),pw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ae.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}function Qb(e,t,n){Wb();const r=e.options.appId;if(!r)throw Ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(Cs[r]!=null)throw Ae.create("already-exists",{id:r});if(!_f){Cb(pa);const{wrappedGtag:i,gtagCore:a}=Db(Cs,pf,gf,pa,Gb);tm=i,mf=a,_f=!0}return Cs[r]=zb(e,pf,gf,t,mf,pa,n),new Kb(e)}function Yb(e=lp()){e=Vr(e);const t=zs(e,Qi);return t.isInitialized()?t.getImmediate():Xb(e)}function Xb(e,t={}){const n=zs(e,Qi);if(n.isInitialized()){const s=n.getImmediate();if(Ms(t,n.getOptions()))return s;throw Ae.create("already-initialized")}return n.initialize({options:t})}function Jb(e,t,n,r){e=Vr(e),qb(tm,Cs[e.app.options.appId],t,n,r).catch(s=>ve.error(s))}const yf="@firebase/analytics",vf="0.10.16";function Zb(){Nn(new un(Qi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Qb(r,s,n)},"PUBLIC")),Nn(new un("analytics-internal",e,"PRIVATE")),We(yf,vf),We(yf,vf,"esm2017");function e(t){try{const n=t.getProvider(Qi).getImmediate();return{logEvent:(r,s,i)=>Jb(n,r,s,i)}}catch(n){throw Ae.create("interop-component-reg-failed",{reason:n})}}}Zb();const t1={apiKey:"AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg",authDomain:"floppyppua.firebaseapp.com",projectId:"floppyppua",storageBucket:"floppyppua.firebasestorage.app",messagingSenderId:"632221136636",appId:"1:632221136636:web:0c906476f404df50dbc979",measurementId:"G-NJ8ZBYWWYH"},em=ap(t1);Yb(em);const nm=gA(em),e1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},n1={__name:"NewestSoft",setup(e){const t=Zn([]),n=Zn(!0),r=Zn(null),s=async()=>{n.value=!0,r.value=null;try{const i=xg(Tg(nm,"programs"),PA("createdAt","desc")),a=await Dg(i);t.value=a.docs.map(l=>({id:l.id,...l.data()}))}catch(i){console.error("Помилка при отриманні програм:",i),r.value=i}finally{n.value=!1}};return yl(()=>{s()}),(i,a)=>(zt(),Pe(ge,null,[a[0]||(a[0]=Pt("h2",{class:"xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark"},"Останні оновлення програм",-1)),Pt("div",e1,[(zt(!0),Pe(ge,null,id(t.value,l=>(zt(),Br(Jd,{key:l.id,name:l.name,description:l.description,icon:l.icon,version:l.version,link64:l.link64,link32:l.link32,linkcommon:l.linkcommon,website:l.website},null,8,["name","description","icon","version","link64","link32","linkcommon","website"]))),128))])],64))}},r1={__name:"HomePage",setup(e){return(t,n)=>(zt(),Br(n1))}},s1={class:"xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark"},i1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},o1={methods:{reRender(){this.$forceUpdate()}}},ls=Object.assign(o1,{__name:"Category",props:{cat:{type:String},title:{type:String}},setup(e){const t=e,n=Zn([]),r=Zn(!0),s=Zn(null),i=async a=>{r.value=!0,s.value=null;try{const l=xg(Tg(nm,"programs"),CA("category","==",a)),c=await Dg(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}catch(l){console.error("Помилка при отриманні програм:",l),s.value=l}finally{r.value=!1}};return yl(()=>{i(t.cat)}),(a,l)=>(zt(),Pe(ge,null,[Pt("h2",s1,ps(e.title),1),Pt("div",i1,[(zt(!0),Pe(ge,null,id(n.value,c=>(zt(),Br(Jd,{key:c.id,name:c.name,description:c.description,icon:c.icon,version:c.version,link64:c.link64,link32:c.link32,linkcommon:c.linkcommon,website:c.website},null,8,["name","description","icon","version","link64","link32","linkcommon","website"]))),128))])],64))}}),rm=PE({history:sE(),routes:[{path:"/",name:"home",component:r1,meta:{title:""}},{path:"/blog",name:"blog",component:()=>Zo(()=>import("./BlogPage-CkTEsPfc.js"),[]),meta:{title:"Блог про програми, систему тощо - Скачати безкоштовний софт | Floppy"}},{path:"/contact",name:"contact",component:()=>Zo(()=>import("./ContactPage-DlOLuwaa.js"),[]),meta:{title:"Контакти - Скачати безкоштовний софт | Floppy"}},{path:"/faq",name:"faq",component:()=>Zo(()=>import("./FAQPage-DL6b1YOQ.js"),[]),meta:{title:"Часті питання - Скачати безкоштовний софт | Floppy"}},{path:"/internet",name:"internet",component:ls,props:{cat:"internet",title:"Програми для Інтернету"},meta:{title:"Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy"}},{path:"/system",name:"system",component:ls,props:{cat:"system",title:"Системні утиліти"},meta:{title:"Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy"}},{path:"/media",name:"media",component:ls,props:{cat:"media",title:"Програми для медіа"},meta:{title:"Програми для аудіо, відео - Скачати безкоштовний софт | Floppy"}},{path:"/files",name:"files",component:ls,props:{cat:"files",title:"Робота з файлами"},meta:{title:"Робота з файлами - Скачати безкоштовний софт | Floppy"}},{path:"/development",name:"development",component:ls,props:{cat:"dev",title:"Розробка, програмування"},meta:{title:"Розробка, програмування - Скачати безкоштовний софт | Floppy"}}]});rm.beforeEach((e,t,n)=>{document.title=e.meta.title||"Скачати безкоштовний софт | Floppy",n()});const a1=uv({tagId:"G-LVRGKFB5Y6"}),hc=$y(bv);hc.use(rm);hc.use(a1);hc.mount("#app");export{ge as F,Fd as _,ay as a,Br as b,Pe as c,on as d,Pt as e,zt as o,P_ as r,sn as w};
