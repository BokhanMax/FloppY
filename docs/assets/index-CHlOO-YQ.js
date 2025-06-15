(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const St={},vr=[],Ke=()=>{},Pm=()=>!1,Ji=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),il=e=>e.startsWith("onUpdate:"),ce=Object.assign,ol=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vm=Object.prototype.hasOwnProperty,At=(e,t)=>Vm.call(e,t),it=Array.isArray,Er=e=>Zi(e)==="[object Map]",If=e=>Zi(e)==="[object Set]",ht=e=>typeof e=="function",Mt=e=>typeof e=="string",Bn=e=>typeof e=="symbol",Pt=e=>e!==null&&typeof e=="object",Af=e=>(Pt(e)||ht(e))&&ht(e.then)&&ht(e.catch),bf=Object.prototype.toString,Zi=e=>bf.call(e),xm=e=>Zi(e).slice(8,-1),Rf=e=>Zi(e)==="[object Object]",al=e=>Mt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dm=/-(\w)/g,xe=to(e=>e.replace(Dm,(t,n)=>n?n.toUpperCase():"")),Nm=/\B([A-Z])/g,ir=to(e=>e.replace(Nm,"-$1").toLowerCase()),eo=to(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ho=to(e=>e?`on${eo(e)}`:""),bn=(e,t)=>!Object.is(e,t),zo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Sf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Om=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ru;const no=()=>ru||(ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Mt(r)?Fm(r):ll(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Mt(e)||Pt(e))return e}const km=/;(?![^(]*\))/g,Mm=/:([^]+)/,Lm=/\/\*[^]*?\*\//g;function Fm(e){const t={};return e.replace(Lm,"").split(km).forEach(n=>{if(n){const r=n.split(Mm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function cl(e){let t="";if(Mt(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=cl(e[n]);r&&(t+=r+" ")}else if(Pt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bm=sl(Um);function Cf(e){return!!e||e===""}const Pf=e=>!!(e&&e.__v_isRef===!0),yi=e=>Mt(e)?e:e==null?"":it(e)||Pt(e)&&(e.toString===bf||!ht(e.toString))?Pf(e)?yi(e.value):JSON.stringify(e,Vf,2):String(e),Vf=(e,t)=>Pf(t)?Vf(e,t.value):Er(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ko(r,i)+" =>"]=s,n),{})}:If(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ko(n))}:Bn(t)?Ko(t):Pt(t)&&!it(t)&&!Rf(t)?String(t):t,Ko=(e,t="")=>{var n;return Bn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class $m{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){this._on>0&&--this._on===0&&(_e=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jm(){return _e}let Rt;const Go=new WeakSet;class xf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&_e.active&&_e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),Of(this);const t=Rt,n=Le;Rt=this,Le=!0;try{return this.fn()}finally{kf(this),Rt=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fl(t);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ma(this)&&this.run()}get dirty(){return ma(this)}}let Df=0,fs,ds;function Nf(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function ul(){Df++}function hl(){if(--Df>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Of(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function kf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fl(r),qm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ma(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Mf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Mf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rs)||(e.globalVersion=Rs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ma(e))))return;e.flags|=2;const t=e.dep,n=Rt,r=Le;Rt=e,Le=!0;try{Of(e);const s=e.fn(e._value);(t.version===0||bn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Rt=n,Le=r,kf(e),e.flags&=-3}}function fl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const Lf=[];function on(){Lf.push(Le),Le=!1}function an(){const e=Lf.pop();Le=e===void 0?!0:e}function su(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Rt;Rt=void 0;try{t()}finally{Rt=n}}}let Rs=0;class Hm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Rt||!Le||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new Hm(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,Ff(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=r)}return n}trigger(t){this.version++,Rs++,this.notify(t)}notify(t){ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Ff(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ff(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const _a=new WeakMap,Jn=Symbol(""),ya=Symbol(""),Ss=Symbol("");function se(e,t,n){if(Le&&Rt){let r=_a.get(e);r||_a.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new dl),s.map=r,s.key=n),s.track()}}function nn(e,t,n,r,s,i){const a=_a.get(e);if(!a){Rs++;return}const l=c=>{c&&c.trigger()};if(ul(),t==="clear")a.forEach(l);else{const c=it(e),h=c&&al(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,g)=>{(g==="length"||g===Ss||!Bn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ss)),t){case"add":c?h&&l(a.get("length")):(l(a.get(Jn)),Er(e)&&l(a.get(ya)));break;case"delete":c||(l(a.get(Jn)),Er(e)&&l(a.get(ya)));break;case"set":Er(e)&&l(a.get(Jn));break}}hl()}function hr(e){const t=It(e);return t===e?t:(se(t,"iterate",Ss),Pe(e)?t:t.map(Yt))}function ro(e){return se(e=It(e),"iterate",Ss),e}const zm={__proto__:null,[Symbol.iterator](){return Wo(this,Symbol.iterator,Yt)},concat(...e){return hr(this).concat(...e.map(t=>it(t)?hr(t):t))},entries(){return Wo(this,"entries",e=>(e[1]=Yt(e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,n=>n.map(Yt),arguments)},find(e,t){return Ze(this,"find",e,t,Yt,arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,Yt,arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return Qo(this,"includes",e)},indexOf(...e){return Qo(this,"indexOf",e)},join(e){return hr(this).join(e)},lastIndexOf(...e){return Qo(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return ss(this,"pop")},push(...e){return ss(this,"push",e)},reduce(e,...t){return iu(this,"reduce",e,t)},reduceRight(e,...t){return iu(this,"reduceRight",e,t)},shift(){return ss(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return ss(this,"splice",e)},toReversed(){return hr(this).toReversed()},toSorted(e){return hr(this).toSorted(e)},toSpliced(...e){return hr(this).toSpliced(...e)},unshift(...e){return ss(this,"unshift",e)},values(){return Wo(this,"values",Yt)}};function Wo(e,t,n){const r=ro(e),s=r[t]();return r!==e&&!Pe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Km=Array.prototype;function Ze(e,t,n,r,s,i){const a=ro(e),l=a!==e&&!Pe(e),c=a[t];if(c!==Km[t]){const p=c.apply(e,i);return l?Yt(p):p}let h=n;a!==e&&(l?h=function(p,g){return n.call(this,Yt(p),g,e)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function iu(e,t,n,r){const s=ro(e);let i=n;return s!==e&&(Pe(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,Yt(l),c,e)}),s[t](i,...r)}function Qo(e,t,n){const r=It(e);se(r,"iterate",Ss);const s=r[t](...n);return(s===-1||s===!1)&&ml(n[0])?(n[0]=It(n[0]),r[t](...n)):s}function ss(e,t,n=[]){on(),ul();const r=It(e)[t].apply(e,n);return hl(),an(),r}const Gm=sl("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bn));function Wm(e){Bn(e)||(e=String(e));const t=It(this);return se(t,"has",e),t.hasOwnProperty(e)}class Bf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?s_:Hf:i?qf:jf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=zm[n]))return c;if(n==="hasOwnProperty")return Wm}const l=Reflect.get(t,n,le(t)?t:r);return(Bn(n)?Uf.has(n):Gm(n))||(s||se(t,"get",n),i)?l:le(l)?a&&al(n)?l:l.value:Pt(l)?s?Kf(l):so(l):l}}class $f extends Bf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=xn(i);if(!Pe(r)&&!xn(r)&&(i=It(i),r=It(r)),!it(t)&&le(i)&&!le(r))return c?!1:(i.value=r,!0)}const a=it(t)&&al(n)?Number(n)<t.length:At(t,n),l=Reflect.set(t,n,r,le(t)?t:s);return t===It(s)&&(a?bn(r,i)&&nn(t,"set",n,r):nn(t,"add",n,r)),l}deleteProperty(t,n){const r=At(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&nn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Bn(n)||!Uf.has(n))&&se(t,"has",n),r}ownKeys(t){return se(t,"iterate",it(t)?"length":Jn),Reflect.ownKeys(t)}}class Qm extends Bf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ym=new $f,Xm=new Qm,Jm=new $f(!0);const va=e=>e,li=e=>Reflect.getPrototypeOf(e);function Zm(e,t,n){return function(...r){const s=this.__v_raw,i=It(s),a=Er(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?va:t?xi:Yt;return!t&&se(i,"iterate",c?ya:Jn),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function ci(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function t_(e,t){const n={get(s){const i=this.__v_raw,a=It(i),l=It(s);e||(bn(s,l)&&se(a,"get",s),se(a,"get",l));const{has:c}=li(a),h=t?va:e?xi:Yt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&se(It(s),"iterate",Jn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=It(i),l=It(s);return e||(bn(s,l)&&se(a,"has",s),se(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=It(l),h=t?va:e?xi:Yt;return!e&&se(c,"iterate",Jn),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ce(n,e?{add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear")}:{add(s){!t&&!Pe(s)&&!xn(s)&&(s=It(s));const i=It(this);return li(i).has.call(i,s)||(i.add(s),nn(i,"add",s,s)),this},set(s,i){!t&&!Pe(i)&&!xn(i)&&(i=It(i));const a=It(this),{has:l,get:c}=li(a);let h=l.call(a,s);h||(s=It(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?bn(i,d)&&nn(a,"set",s,i):nn(a,"add",s,i),this},delete(s){const i=It(this),{has:a,get:l}=li(i);let c=a.call(i,s);c||(s=It(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&nn(i,"delete",s,void 0),h},clear(){const s=It(this),i=s.size!==0,a=s.clear();return i&&nn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zm(s,e,t)}),n}function pl(e,t){const n=t_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(At(n,s)&&s in r?n:r,s,i)}const e_={get:pl(!1,!1)},n_={get:pl(!1,!0)},r_={get:pl(!0,!1)};const jf=new WeakMap,qf=new WeakMap,Hf=new WeakMap,s_=new WeakMap;function i_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o_(e){return e.__v_skip||!Object.isExtensible(e)?0:i_(xm(e))}function so(e){return xn(e)?e:gl(e,!1,Ym,e_,jf)}function zf(e){return gl(e,!1,Jm,n_,qf)}function Kf(e){return gl(e,!0,Xm,r_,Hf)}function gl(e,t,n,r,s){if(!Pt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function Tr(e){return xn(e)?Tr(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Pe(e){return!!(e&&e.__v_isShallow)}function ml(e){return e?!!e.__v_raw:!1}function It(e){const t=e&&e.__v_raw;return t?It(t):e}function a_(e){return!At(e,"__v_skip")&&Object.isExtensible(e)&&Sf(e,"__v_skip",!0),e}const Yt=e=>Pt(e)?so(e):e,xi=e=>Pt(e)?Kf(e):e;function le(e){return e?e.__v_isRef===!0:!1}function vi(e){return Gf(e,!1)}function l_(e){return Gf(e,!0)}function Gf(e,t){return le(e)?e:new c_(e,t)}class c_{constructor(t,n){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:It(t),this._value=n?t:Yt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Pe(t)||xn(t);t=r?t:It(t),bn(t,n)&&(this._rawValue=t,this._value=r?t:Yt(t),this.dep.trigger())}}function Zn(e){return le(e)?e.value:e}const u_={get:(e,t,n)=>t==="__v_raw"?e:Zn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Wf(e){return Tr(e)?e:new Proxy(e,u_)}class h_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return Nf(this,!0),!0}get value(){const t=this.dep.track();return Mf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function f_(e,t,n=!1){let r,s;return ht(e)?r=e:(r=e.get,s=e.set),new h_(r,s,n)}const ui={},Di=new WeakMap;let Wn;function d_(e,t=!1,n=Wn){if(n){let r=Di.get(n);r||Di.set(n,r=[]),r.push(e)}}function p_(e,t,n=St){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=q=>s?q:Pe(q)||s===!1||s===0?wn(q,1):wn(q);let d,p,g,y,P=!1,x=!1;if(le(e)?(p=()=>e.value,P=Pe(e)):Tr(e)?(p=()=>h(e),P=!0):it(e)?(x=!0,P=e.some(q=>Tr(q)||Pe(q)),p=()=>e.map(q=>{if(le(q))return q.value;if(Tr(q))return h(q);if(ht(q))return c?c(q,2):q()})):ht(e)?t?p=c?()=>c(e,2):e:p=()=>{if(g){on();try{g()}finally{an()}}const q=Wn;Wn=d;try{return c?c(e,3,[y]):e(y)}finally{Wn=q}}:p=Ke,t&&s){const q=p,ct=s===!0?1/0:s;p=()=>wn(q(),ct)}const L=jm(),K=()=>{d.stop(),L&&L.active&&ol(L.effects,d)};if(i&&t){const q=t;t=(...ct)=>{q(...ct),K()}}let U=x?new Array(e.length).fill(ui):ui;const j=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(t){const ct=d.run();if(s||P||(x?ct.some((lt,I)=>bn(lt,U[I])):bn(ct,U))){g&&g();const lt=Wn;Wn=d;try{const I=[ct,U===ui?void 0:x&&U[0]===ui?[]:U,y];U=ct,c?c(t,3,I):t(...I)}finally{Wn=lt}}}else d.run()};return l&&l(j),d=new xf(p),d.scheduler=a?()=>a(j,!1):j,y=q=>d_(q,!1,d),g=d.onStop=()=>{const q=Di.get(d);if(q){if(c)c(q,4);else for(const ct of q)ct();Di.delete(d)}},t?r?j(!0):U=d.run():a?a(j.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function wn(e,t=1/0,n){if(t<=0||!Pt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,le(e))wn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)wn(e[r],t,n);else if(If(e)||Er(e))e.forEach(r=>{wn(r,t,n)});else if(Rf(e)){for(const r in e)wn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&wn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Us(e,t,n,r){try{return r?e(...r):e()}catch(s){io(s,t,n)}}function Qe(e,t,n,r){if(ht(e)){const s=Us(e,t,n,r);return s&&Af(s)&&s.catch(i=>{io(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Qe(e[i],t,n,r));return s}}function io(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){on(),Us(i,null,10,[e,c,h]),an();return}}g_(e,n,s,r,a)}function g_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const pe=[];let je=-1;const wr=[];let vn=null,dr=0;const Qf=Promise.resolve();let Ni=null;function Yf(e){const t=Ni||Qf;return e?t.then(this?e.bind(this):e):t}function m_(e){let t=je+1,n=pe.length;for(;t<n;){const r=t+n>>>1,s=pe[r],i=Cs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function _l(e){if(!(e.flags&1)){const t=Cs(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=Cs(n)?pe.push(e):pe.splice(m_(t),0,e),e.flags|=1,Xf()}}function Xf(){Ni||(Ni=Qf.then(Zf))}function __(e){it(e)?wr.push(...e):vn&&e.id===-1?vn.splice(dr+1,0,e):e.flags&1||(wr.push(e),e.flags|=1),Xf()}function ou(e,t,n=je+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Jf(e){if(wr.length){const t=[...new Set(wr)].sort((n,r)=>Cs(n)-Cs(r));if(wr.length=0,vn){vn.push(...t);return}for(vn=t,dr=0;dr<vn.length;dr++){const n=vn[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,dr=0}}const Cs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Zf(e){try{for(je=0;je<pe.length;je++){const t=pe[je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Us(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;je<pe.length;je++){const t=pe[je];t&&(t.flags&=-2)}je=-1,pe.length=0,Jf(),Ni=null,(pe.length||wr.length)&&Zf()}}let Me=null,td=null;function Oi(e){const t=Me;return Me=e,td=e&&e.type.__scopeId||null,t}function Rn(e,t=Me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&vu(-1);const i=Oi(t);let a;try{a=e(...s)}finally{Oi(i),r._d&&vu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(on(),Qe(c,n,8,[e.el,l,e,t]),an())}}const ed=Symbol("_vte"),y_=e=>e.__isTeleport,ps=e=>e&&(e.disabled||e.disabled===""),au=e=>e&&(e.defer||e.defer===""),lu=e=>typeof SVGElement<"u"&&e instanceof SVGElement,cu=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ea=(e,t)=>{const n=e&&e.to;return Mt(n)?t?t(n):null:n},nd={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,a,l,c,h){const{mc:d,pc:p,pbc:g,o:{insert:y,querySelector:P,createText:x,createComment:L}}=h,K=ps(t.props);let{shapeFlag:U,children:j,dynamicChildren:q}=t;if(e==null){const ct=t.el=x(""),lt=t.anchor=x("");y(ct,n,r),y(lt,n,r);const I=(E,A)=>{U&16&&(s&&s.isCE&&(s.ce._teleportTarget=E),d(j,E,A,s,i,a,l,c))},_=()=>{const E=t.target=Ea(t.props,P),A=rd(E,t,x,y);E&&(a!=="svg"&&lu(E)?a="svg":a!=="mathml"&&cu(E)&&(a="mathml"),K||(I(E,A),Ei(t,!1)))};K&&(I(n,lt),Ei(t,!0)),au(t.props)?(t.el.__isMounted=!1,de(()=>{_(),delete t.el.__isMounted},i)):_()}else{if(au(t.props)&&e.el.__isMounted===!1){de(()=>{nd.process(e,t,n,r,s,i,a,l,c,h)},i);return}t.el=e.el,t.targetStart=e.targetStart;const ct=t.anchor=e.anchor,lt=t.target=e.target,I=t.targetAnchor=e.targetAnchor,_=ps(e.props),E=_?n:lt,A=_?ct:I;if(a==="svg"||lu(lt)?a="svg":(a==="mathml"||cu(lt))&&(a="mathml"),q?(g(e.dynamicChildren,q,E,s,i,a,l),Tl(e,t,!0)):c||p(e,t,E,A,s,i,a,l,!1),K)_?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):hi(t,n,ct,h,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const b=t.target=Ea(t.props,P);b&&hi(t,b,null,h,0)}else _&&hi(t,lt,I,h,1);Ei(t,K)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:d,target:p,props:g}=e;if(p&&(s(h),s(d)),i&&s(c),a&16){const y=i||!ps(g);for(let P=0;P<l.length;P++){const x=l[P];r(x,t,n,y,!!x.dynamicChildren)}}},move:hi,hydrate:v_};function hi(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:h,props:d}=e,p=i===2;if(p&&r(a,t,n),(!p||ps(d))&&c&16)for(let g=0;g<h.length;g++)s(h[g],t,n,2);p&&r(l,t,n)}function v_(e,t,n,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:d}},p){const g=t.target=Ea(t.props,c);if(g){const y=ps(t.props),P=g._lpa||g.firstChild;if(t.shapeFlag&16)if(y)t.anchor=p(a(e),t,l(e),n,r,s,i),t.targetStart=P,t.targetAnchor=P&&a(P);else{t.anchor=a(e);let x=P;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")t.targetStart=x;else if(x.data==="teleport anchor"){t.targetAnchor=x,g._lpa=t.targetAnchor&&a(t.targetAnchor);break}}x=a(x)}t.targetAnchor||rd(g,t,d,h),p(P&&a(P),t,g,n,r,s,i)}Ei(t,y)}return t.anchor&&a(t.anchor)}const E_=nd;function Ei(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function rd(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[ed]=i,e&&(r(s,e),r(i,e)),i}function yl(e,t){e.shapeFlag&6&&e.component?(e.transition=t,yl(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function sd(e,t){return ht(e)?ce({name:e.name},t,{setup:e}):e}function id(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ki(e,t,n,r,s=!1){if(it(e)){e.forEach((P,x)=>ki(P,t&&(it(t)?t[x]:t),n,r,s));return}if(gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ki(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Il(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===St?l.refs={}:l.refs,p=l.setupState,g=It(p),y=p===St?()=>!1:P=>At(g,P);if(h!=null&&h!==c&&(Mt(h)?(d[h]=null,y(h)&&(p[h]=null)):le(h)&&(h.value=null)),ht(c))Us(c,l,12,[a,d]);else{const P=Mt(c),x=le(c);if(P||x){const L=()=>{if(e.f){const K=P?y(c)?p[c]:d[c]:c.value;s?it(K)&&ol(K,i):it(K)?K.includes(i)||K.push(i):P?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else P?(d[c]=a,y(c)&&(p[c]=a)):x&&(c.value=a,e.k&&(d[e.k]=a))};a?(L.id=-1,de(L,n)):L()}}}no().requestIdleCallback;no().cancelIdleCallback;const gs=e=>!!e.type.__asyncLoader,od=e=>e.type.__isKeepAlive;function T_(e,t){ad(e,"a",t)}function w_(e,t){ad(e,"da",t)}function ad(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(oo(t,r,n),n){let s=n.parent;for(;s&&s.parent;)od(s.parent.vnode)&&I_(r,t,n,s),s=s.parent}}function I_(e,t,n,r){const s=oo(t,e,r,!0);cd(()=>{ol(r[t],s)},n)}function oo(e,t,n=oe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{on();const l=Bs(n),c=Qe(t,n,e,a);return l(),an(),c});return r?s.unshift(i):s.push(i),i}}const hn=e=>(t,n=oe)=>{(!Vs||e==="sp")&&oo(e,(...r)=>t(...r),n)},A_=hn("bm"),ld=hn("m"),b_=hn("bu"),R_=hn("u"),S_=hn("bum"),cd=hn("um"),C_=hn("sp"),P_=hn("rtg"),V_=hn("rtc");function x_(e,t=oe){oo("ec",e,t)}const ud="components";function hd(e,t){return pd(ud,e,!0,t)||e}const fd=Symbol.for("v-ndc");function dd(e){return Mt(e)?pd(ud,e,!1)||e:e||fd}function pd(e,t,n=!0,r=!1){const s=Me||oe;if(s){const i=s.type;{const l=vy(i,!1);if(l&&(l===t||l===xe(t)||l===eo(xe(t))))return i}const a=uu(s[e]||i[e],t)||uu(s.appContext[e],t);return!a&&r?i:a}}function uu(e,t){return e&&(e[t]||e[xe(t)]||e[eo(xe(t))])}function D_(e,t,n,r){let s;const i=n,a=it(e);if(a||Mt(e)){const l=a&&Tr(e);let c=!1,h=!1;l&&(c=!Pe(e),h=xn(e),e=ro(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(c?h?xi(Yt(e[d])):Yt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Pt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const Ta=e=>e?Nd(e)?Il(e):Ta(e.parent):null,ms=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ta(e.parent),$root:e=>Ta(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>md(e),$forceUpdate:e=>e.f||(e.f=()=>{_l(e.update)}),$nextTick:e=>e.n||(e.n=Yf.bind(e.proxy)),$watch:e=>Z_.bind(e)}),Yo=(e,t)=>e!==St&&!e.__isScriptSetup&&At(e,t),N_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const y=a[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Yo(r,t))return a[t]=1,r[t];if(s!==St&&At(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&At(h,t))return a[t]=3,i[t];if(n!==St&&At(n,t))return a[t]=4,n[t];wa&&(a[t]=0)}}const d=ms[t];let p,g;if(d)return t==="$attrs"&&se(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==St&&At(n,t))return a[t]=4,n[t];if(g=c.config.globalProperties,At(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Yo(s,t)?(s[t]=n,!0):r!==St&&At(r,t)?(r[t]=n,!0):At(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==St&&At(e,a)||Yo(t,a)||(l=i[0])&&At(l,a)||At(r,a)||At(ms,a)||At(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:At(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function hu(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wa=!0;function O_(e){const t=md(e),n=e.proxy,r=e.ctx;wa=!1,t.beforeCreate&&fu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:P,activated:x,deactivated:L,beforeDestroy:K,beforeUnmount:U,destroyed:j,unmounted:q,render:ct,renderTracked:lt,renderTriggered:I,errorCaptured:_,serverPrefetch:E,expose:A,inheritAttrs:b,components:S,directives:w,filters:ue}=t;if(h&&k_(h,r,null),a)for(const pt in a){const dt=a[pt];ht(dt)&&(r[pt]=dt.bind(n))}if(s){const pt=s.call(n,n);Pt(pt)&&(e.data=so(pt))}if(wa=!0,i)for(const pt in i){const dt=i[pt],Ee=ht(dt)?dt.bind(n,n):ht(dt.get)?dt.get.bind(n,n):Ke,Ne=!ht(dt)&&ht(dt.set)?dt.set.bind(n):Ke,Re=ke({get:Ee,set:Ne});Object.defineProperty(r,pt,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Vt=>Re.value=Vt})}if(l)for(const pt in l)gd(l[pt],r,n,pt);if(c){const pt=ht(c)?c.call(n):c;Reflect.ownKeys(pt).forEach(dt=>{Ti(dt,pt[dt])})}d&&fu(d,e,"c");function Bt(pt,dt){it(dt)?dt.forEach(Ee=>pt(Ee.bind(n))):dt&&pt(dt.bind(n))}if(Bt(A_,p),Bt(ld,g),Bt(b_,y),Bt(R_,P),Bt(T_,x),Bt(w_,L),Bt(x_,_),Bt(V_,lt),Bt(P_,I),Bt(S_,U),Bt(cd,q),Bt(C_,E),it(A))if(A.length){const pt=e.exposed||(e.exposed={});A.forEach(dt=>{Object.defineProperty(pt,dt,{get:()=>n[dt],set:Ee=>n[dt]=Ee})})}else e.exposed||(e.exposed={});ct&&e.render===Ke&&(e.render=ct),b!=null&&(e.inheritAttrs=b),S&&(e.components=S),w&&(e.directives=w),E&&id(e)}function k_(e,t,n=Ke){it(e)&&(e=Ia(e));for(const r in e){const s=e[r];let i;Pt(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function fu(e,t,n){Qe(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gd(e,t,n,r){let s=r.includes(".")?Cd(n,r):()=>n[r];if(Mt(e)){const i=t[e];ht(i)&&wi(s,i)}else if(ht(e))wi(s,e.bind(n));else if(Pt(e))if(it(e))e.forEach(i=>gd(i,t,n,r));else{const i=ht(e.handler)?e.handler.bind(n):t[e.handler];ht(i)&&wi(s,i,e)}}function md(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Mi(c,h,a,!0)),Mi(c,t,a)),Pt(t)&&i.set(t,c),c}function Mi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Mi(e,i,n,!0),s&&s.forEach(a=>Mi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=M_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const M_={data:du,props:pu,emits:pu,methods:as,computed:as,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:as,directives:as,watch:F_,provide:du,inject:L_};function du(e,t){return t?e?function(){return ce(ht(e)?e.call(this,this):e,ht(t)?t.call(this,this):t)}:t:e}function L_(e,t){return as(Ia(e),Ia(t))}function Ia(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function as(e,t){return e?ce(Object.create(null),e,t):t}function pu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:ce(Object.create(null),hu(e),hu(t??{})):t}function F_(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function _d(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U_=0;function B_(e,t){return function(r,s=null){ht(r)||(r=ce({},r)),s!=null&&!Pt(s)&&(s=null);const i=_d(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:U_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ty,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ht(d.install)?(a.add(d),d.install(h,...p)):ht(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const y=h._ceVNode||kt(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(y,d,g),c=!0,h._container=d,d.__vue_app__=h,Il(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Qe(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Ir;Ir=h;try{return d()}finally{Ir=p}}};return h}}let Ir=null;function Ti(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function sn(e,t,n=!1){const r=oe||Me;if(r||Ir){let s=Ir?Ir._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ht(t)?t.call(r&&r.proxy):t}}const yd={},vd=()=>Object.create(yd),Ed=e=>Object.getPrototypeOf(e)===yd;function $_(e,t,n,r=!1){const s={},i=vd();e.propsDefaults=Object.create(null),Td(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:zf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function j_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=It(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ao(e.emitsOptions,g))continue;const y=t[g];if(c)if(At(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const P=xe(g);s[P]=Aa(c,l,P,y,e,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{Td(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!At(t,p)&&((d=ir(p))===p||!At(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Aa(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!At(t,p))&&(delete i[p],h=!0)}h&&nn(e.attrs,"set","")}function Td(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(hs(c))continue;const h=t[c];let d;s&&At(s,d=xe(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ao(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=It(n),h=l||St;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Aa(s,c,p,h[p],e,!At(h,p))}}return a}function Aa(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=At(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ht(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Bs(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ir(n))&&(r=!0))}return r}const q_=new WeakMap;function wd(e,t,n=!1){const r=n?q_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ht(e)){const d=p=>{c=!0;const[g,y]=wd(p,t,!0);ce(a,g),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Pt(e)&&r.set(e,vr),vr;if(it(i))for(let d=0;d<i.length;d++){const p=xe(i[d]);gu(p)&&(a[p]=St)}else if(i)for(const d in i){const p=xe(d);if(gu(p)){const g=i[d],y=a[p]=it(g)||ht(g)?{type:g}:ce({},g),P=y.type;let x=!1,L=!0;if(it(P))for(let K=0;K<P.length;++K){const U=P[K],j=ht(U)&&U.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(L=!1)}else x=ht(P)&&P.name==="Boolean";y[0]=x,y[1]=L,(x||At(y,"default"))&&l.push(p)}}const h=[a,l];return Pt(e)&&r.set(e,h),h}function gu(e){return e[0]!=="$"&&!hs(e)}const vl=e=>e[0]==="_"||e==="$stable",El=e=>it(e)?e.map(He):[He(e)],H_=(e,t,n)=>{if(t._n)return t;const r=Rn((...s)=>El(t(...s)),n);return r._c=!1,r},Id=(e,t,n)=>{const r=e._ctx;for(const s in e){if(vl(s))continue;const i=e[s];if(ht(i))t[s]=H_(s,i,r);else if(i!=null){const a=El(i);t[s]=()=>a}}},Ad=(e,t)=>{const n=El(t);e.slots.default=()=>n},bd=(e,t,n)=>{for(const r in t)(n||!vl(r))&&(e[r]=t[r])},z_=(e,t,n)=>{const r=e.slots=vd();if(e.vnode.shapeFlag&32){const s=t._;s?(bd(r,t,n),n&&Sf(r,"_",s,!0)):Id(t,r)}else t&&Ad(e,t)},K_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=St;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:bd(s,t,n):(i=!t.$stable,Id(t,s)),a=t}else t&&(Ad(e,t),a={default:1});if(i)for(const l in s)!vl(l)&&a[l]==null&&delete s[l]},de=oy;function G_(e){return W_(e)}function W_(e,t){const n=no();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=Ke,insertStaticContent:P}=e,x=(v,T,R,N=null,M=null,O=null,W=void 0,H=null,$=!!T.dynamicChildren)=>{if(v===T)return;v&&!is(v,T)&&(N=D(v),Vt(v,M,O,!0),v=null),T.patchFlag===-2&&($=!1,T.dynamicChildren=null);const{type:F,ref:et,shapeFlag:G}=T;switch(F){case lo:L(v,T,R,N);break;case Dn:K(v,T,R,N);break;case Ii:v==null&&U(T,R,N,W);break;case we:S(v,T,R,N,M,O,W,H,$);break;default:G&1?ct(v,T,R,N,M,O,W,H,$):G&6?w(v,T,R,N,M,O,W,H,$):(G&64||G&128)&&F.process(v,T,R,N,M,O,W,H,$,J)}et!=null&&M&&ki(et,v&&v.ref,O,T||v,!T)},L=(v,T,R,N)=>{if(v==null)r(T.el=l(T.children),R,N);else{const M=T.el=v.el;T.children!==v.children&&h(M,T.children)}},K=(v,T,R,N)=>{v==null?r(T.el=c(T.children||""),R,N):T.el=v.el},U=(v,T,R,N)=>{[v.el,v.anchor]=P(v.children,T,R,N,v.el,v.anchor)},j=({el:v,anchor:T},R,N)=>{let M;for(;v&&v!==T;)M=g(v),r(v,R,N),v=M;r(T,R,N)},q=({el:v,anchor:T})=>{let R;for(;v&&v!==T;)R=g(v),s(v),v=R;s(T)},ct=(v,T,R,N,M,O,W,H,$)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),v==null?lt(T,R,N,M,O,W,H,$):E(v,T,M,O,W,H,$)},lt=(v,T,R,N,M,O,W,H)=>{let $,F;const{props:et,shapeFlag:G,transition:tt,dirs:st}=v;if($=v.el=a(v.type,O,et&&et.is,et),G&8?d($,v.children):G&16&&_(v.children,$,null,N,M,Xo(v,O),W,H),st&&Kn(v,null,N,"created"),I($,v,v.scopeId,W,N),et){for(const ut in et)ut!=="value"&&!hs(ut)&&i($,ut,null,et[ut],O,N);"value"in et&&i($,"value",null,et.value,O),(F=et.onVnodeBeforeMount)&&$e(F,N,v)}st&&Kn(v,null,N,"beforeMount");const nt=Q_(M,tt);nt&&tt.beforeEnter($),r($,T,R),((F=et&&et.onVnodeMounted)||nt||st)&&de(()=>{F&&$e(F,N,v),nt&&tt.enter($),st&&Kn(v,null,N,"mounted")},M)},I=(v,T,R,N,M)=>{if(R&&y(v,R),N)for(let O=0;O<N.length;O++)y(v,N[O]);if(M){let O=M.subTree;if(T===O||Vd(O.type)&&(O.ssContent===T||O.ssFallback===T)){const W=M.vnode;I(v,W,W.scopeId,W.slotScopeIds,M.parent)}}},_=(v,T,R,N,M,O,W,H,$=0)=>{for(let F=$;F<v.length;F++){const et=v[F]=H?En(v[F]):He(v[F]);x(null,et,T,R,N,M,O,W,H)}},E=(v,T,R,N,M,O,W)=>{const H=T.el=v.el;let{patchFlag:$,dynamicChildren:F,dirs:et}=T;$|=v.patchFlag&16;const G=v.props||St,tt=T.props||St;let st;if(R&&Gn(R,!1),(st=tt.onVnodeBeforeUpdate)&&$e(st,R,T,v),et&&Kn(T,v,R,"beforeUpdate"),R&&Gn(R,!0),(G.innerHTML&&tt.innerHTML==null||G.textContent&&tt.textContent==null)&&d(H,""),F?A(v.dynamicChildren,F,H,R,N,Xo(T,M),O):W||dt(v,T,H,null,R,N,Xo(T,M),O,!1),$>0){if($&16)b(H,G,tt,R,M);else if($&2&&G.class!==tt.class&&i(H,"class",null,tt.class,M),$&4&&i(H,"style",G.style,tt.style,M),$&8){const nt=T.dynamicProps;for(let ut=0;ut<nt.length;ut++){const gt=nt[ut],Jt=G[gt],Kt=tt[gt];(Kt!==Jt||gt==="value")&&i(H,gt,Jt,Kt,M,R)}}$&1&&v.children!==T.children&&d(H,T.children)}else!W&&F==null&&b(H,G,tt,R,M);((st=tt.onVnodeUpdated)||et)&&de(()=>{st&&$e(st,R,T,v),et&&Kn(T,v,R,"updated")},N)},A=(v,T,R,N,M,O,W)=>{for(let H=0;H<T.length;H++){const $=v[H],F=T[H],et=$.el&&($.type===we||!is($,F)||$.shapeFlag&198)?p($.el):R;x($,F,et,null,N,M,O,W,!0)}},b=(v,T,R,N,M)=>{if(T!==R){if(T!==St)for(const O in T)!hs(O)&&!(O in R)&&i(v,O,T[O],null,M,N);for(const O in R){if(hs(O))continue;const W=R[O],H=T[O];W!==H&&O!=="value"&&i(v,O,H,W,M,N)}"value"in R&&i(v,"value",T.value,R.value,M)}},S=(v,T,R,N,M,O,W,H,$)=>{const F=T.el=v?v.el:l(""),et=T.anchor=v?v.anchor:l("");let{patchFlag:G,dynamicChildren:tt,slotScopeIds:st}=T;st&&(H=H?H.concat(st):st),v==null?(r(F,R,N),r(et,R,N),_(T.children||[],R,et,M,O,W,H,$)):G>0&&G&64&&tt&&v.dynamicChildren?(A(v.dynamicChildren,tt,R,M,O,W,H),(T.key!=null||M&&T===M.subTree)&&Tl(v,T,!0)):dt(v,T,R,et,M,O,W,H,$)},w=(v,T,R,N,M,O,W,H,$)=>{T.slotScopeIds=H,v==null?T.shapeFlag&512?M.ctx.activate(T,R,N,W,$):ue(T,R,N,M,O,W,$):be(v,T,$)},ue=(v,T,R,N,M,O,W)=>{const H=v.component=py(v,N,M);if(od(v)&&(H.ctx.renderer=J),gy(H,!1,W),H.asyncDep){if(M&&M.registerDep(H,Bt,W),!v.el){const $=H.subTree=kt(Dn);K(null,$,T,R)}}else Bt(H,v,T,R,M,O,W)},be=(v,T,R)=>{const N=T.component=v.component;if(sy(v,T,R))if(N.asyncDep&&!N.asyncResolved){pt(N,T,R);return}else N.next=T,N.update();else T.el=v.el,N.vnode=T},Bt=(v,T,R,N,M,O,W)=>{const H=()=>{if(v.isMounted){let{next:G,bu:tt,u:st,parent:nt,vnode:ut}=v;{const Zt=Rd(v);if(Zt){G&&(G.el=ut.el,pt(v,G,W)),Zt.asyncDep.then(()=>{v.isUnmounted||H()});return}}let gt=G,Jt;Gn(v,!1),G?(G.el=ut.el,pt(v,G,W)):G=ut,tt&&zo(tt),(Jt=G.props&&G.props.onVnodeBeforeUpdate)&&$e(Jt,nt,G,ut),Gn(v,!0);const Kt=_u(v),Se=v.subTree;v.subTree=Kt,x(Se,Kt,p(Se.el),D(Se),v,M,O),G.el=Kt.el,gt===null&&iy(v,Kt.el),st&&de(st,M),(Jt=G.props&&G.props.onVnodeUpdated)&&de(()=>$e(Jt,nt,G,ut),M)}else{let G;const{el:tt,props:st}=T,{bm:nt,m:ut,parent:gt,root:Jt,type:Kt}=v,Se=gs(T);Gn(v,!1),nt&&zo(nt),!Se&&(G=st&&st.onVnodeBeforeMount)&&$e(G,gt,T),Gn(v,!0);{Jt.ce&&Jt.ce._injectChildStyle(Kt);const Zt=v.subTree=_u(v);x(null,Zt,R,N,v,M,O),T.el=Zt.el}if(ut&&de(ut,M),!Se&&(G=st&&st.onVnodeMounted)){const Zt=T;de(()=>$e(G,gt,Zt),M)}(T.shapeFlag&256||gt&&gs(gt.vnode)&&gt.vnode.shapeFlag&256)&&v.a&&de(v.a,M),v.isMounted=!0,T=R=N=null}};v.scope.on();const $=v.effect=new xf(H);v.scope.off();const F=v.update=$.run.bind($),et=v.job=$.runIfDirty.bind($);et.i=v,et.id=v.uid,$.scheduler=()=>_l(et),Gn(v,!0),F()},pt=(v,T,R)=>{T.component=v;const N=v.vnode.props;v.vnode=T,v.next=null,j_(v,T.props,N,R),K_(v,T.children,R),on(),ou(v),an()},dt=(v,T,R,N,M,O,W,H,$=!1)=>{const F=v&&v.children,et=v?v.shapeFlag:0,G=T.children,{patchFlag:tt,shapeFlag:st}=T;if(tt>0){if(tt&128){Ne(F,G,R,N,M,O,W,H,$);return}else if(tt&256){Ee(F,G,R,N,M,O,W,H,$);return}}st&8?(et&16&&me(F,M,O),G!==F&&d(R,G)):et&16?st&16?Ne(F,G,R,N,M,O,W,H,$):me(F,M,O,!0):(et&8&&d(R,""),st&16&&_(G,R,N,M,O,W,H,$))},Ee=(v,T,R,N,M,O,W,H,$)=>{v=v||vr,T=T||vr;const F=v.length,et=T.length,G=Math.min(F,et);let tt;for(tt=0;tt<G;tt++){const st=T[tt]=$?En(T[tt]):He(T[tt]);x(v[tt],st,R,null,M,O,W,H,$)}F>et?me(v,M,O,!0,!1,G):_(T,R,N,M,O,W,H,$,G)},Ne=(v,T,R,N,M,O,W,H,$)=>{let F=0;const et=T.length;let G=v.length-1,tt=et-1;for(;F<=G&&F<=tt;){const st=v[F],nt=T[F]=$?En(T[F]):He(T[F]);if(is(st,nt))x(st,nt,R,null,M,O,W,H,$);else break;F++}for(;F<=G&&F<=tt;){const st=v[G],nt=T[tt]=$?En(T[tt]):He(T[tt]);if(is(st,nt))x(st,nt,R,null,M,O,W,H,$);else break;G--,tt--}if(F>G){if(F<=tt){const st=tt+1,nt=st<et?T[st].el:N;for(;F<=tt;)x(null,T[F]=$?En(T[F]):He(T[F]),R,nt,M,O,W,H,$),F++}}else if(F>tt)for(;F<=G;)Vt(v[F],M,O,!0),F++;else{const st=F,nt=F,ut=new Map;for(F=nt;F<=tt;F++){const Gt=T[F]=$?En(T[F]):He(T[F]);Gt.key!=null&&ut.set(Gt.key,F)}let gt,Jt=0;const Kt=tt-nt+1;let Se=!1,Zt=0;const pn=new Array(Kt);for(F=0;F<Kt;F++)pn[F]=0;for(F=st;F<=G;F++){const Gt=v[F];if(Jt>=Kt){Vt(Gt,M,O,!0);continue}let Ce;if(Gt.key!=null)Ce=ut.get(Gt.key);else for(gt=nt;gt<=tt;gt++)if(pn[gt-nt]===0&&is(Gt,T[gt])){Ce=gt;break}Ce===void 0?Vt(Gt,M,O,!0):(pn[Ce-nt]=F+1,Ce>=Zt?Zt=Ce:Se=!0,x(Gt,T[Ce],R,null,M,O,W,H,$),Jt++)}const zr=Se?Y_(pn):vr;for(gt=zr.length-1,F=Kt-1;F>=0;F--){const Gt=nt+F,Ce=T[Gt],Ks=Gt+1<et?T[Gt+1].el:N;pn[F]===0?x(null,Ce,R,Ks,M,O,W,H,$):Se&&(gt<0||F!==zr[gt]?Re(Ce,R,Ks,2):gt--)}}},Re=(v,T,R,N,M=null)=>{const{el:O,type:W,transition:H,children:$,shapeFlag:F}=v;if(F&6){Re(v.component.subTree,T,R,N);return}if(F&128){v.suspense.move(T,R,N);return}if(F&64){W.move(v,T,R,J);return}if(W===we){r(O,T,R);for(let G=0;G<$.length;G++)Re($[G],T,R,N);r(v.anchor,T,R);return}if(W===Ii){j(v,T,R);return}if(N!==2&&F&1&&H)if(N===0)H.beforeEnter(O),r(O,T,R),de(()=>H.enter(O),M);else{const{leave:G,delayLeave:tt,afterLeave:st}=H,nt=()=>{v.ctx.isUnmounted?s(O):r(O,T,R)},ut=()=>{G(O,()=>{nt(),st&&st()})};tt?tt(O,nt,ut):ut()}else r(O,T,R)},Vt=(v,T,R,N=!1,M=!1)=>{const{type:O,props:W,ref:H,children:$,dynamicChildren:F,shapeFlag:et,patchFlag:G,dirs:tt,cacheIndex:st}=v;if(G===-2&&(M=!1),H!=null&&(on(),ki(H,null,R,v,!0),an()),st!=null&&(T.renderCache[st]=void 0),et&256){T.ctx.deactivate(v);return}const nt=et&1&&tt,ut=!gs(v);let gt;if(ut&&(gt=W&&W.onVnodeBeforeUnmount)&&$e(gt,T,v),et&6)Be(v.component,R,N);else{if(et&128){v.suspense.unmount(R,N);return}nt&&Kn(v,null,T,"beforeUnmount"),et&64?v.type.remove(v,T,R,J,N):F&&!F.hasOnce&&(O!==we||G>0&&G&64)?me(F,T,R,!1,!0):(O===we&&G&384||!M&&et&16)&&me($,T,R),N&&xt(v)}(ut&&(gt=W&&W.onVnodeUnmounted)||nt)&&de(()=>{gt&&$e(gt,T,v),nt&&Kn(v,null,T,"unmounted")},R)},xt=v=>{const{type:T,el:R,anchor:N,transition:M}=v;if(T===we){dn(R,N);return}if(T===Ii){q(v);return}const O=()=>{s(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:W,delayLeave:H}=M,$=()=>W(R,O);H?H(v.el,O,$):$()}else O()},dn=(v,T)=>{let R;for(;v!==T;)R=g(v),s(v),v=R;s(T)},Be=(v,T,R)=>{const{bum:N,scope:M,job:O,subTree:W,um:H,m:$,a:F,parent:et,slots:{__:G}}=v;mu($),mu(F),N&&zo(N),et&&it(G)&&G.forEach(tt=>{et.renderCache[tt]=void 0}),M.stop(),O&&(O.flags|=8,Vt(W,v,T,R)),H&&de(H,T),de(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},me=(v,T,R,N=!1,M=!1,O=0)=>{for(let W=O;W<v.length;W++)Vt(v[W],T,R,N,M)},D=v=>{if(v.shapeFlag&6)return D(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),R=T&&T[ed];return R?g(R):T};let Y=!1;const Q=(v,T,R)=>{v==null?T._vnode&&Vt(T._vnode,null,null,!0):x(T._vnode||null,v,T,null,null,null,R),T._vnode=v,Y||(Y=!0,ou(),Jf(),Y=!1)},J={p:x,um:Vt,m:Re,r:xt,mt:ue,mc:_,pc:dt,pbc:A,n:D,o:e};return{render:Q,hydrate:void 0,createApp:B_(Q)}}function Xo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Q_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tl(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=En(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Tl(a,l)),l.type===lo&&(l.el=a.el),l.type===Dn&&!l.el&&(l.el=a.el)}}function Y_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Rd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rd(t)}function mu(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const X_=Symbol.for("v-scx"),J_=()=>sn(X_);function wi(e,t,n){return Sd(e,t,n)}function Sd(e,t,n=St){const{immediate:r,deep:s,flush:i,once:a}=n,l=ce({},n),c=t&&r||!t&&i!=="post";let h;if(Vs){if(i==="sync"){const y=J_();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Ke,y.resume=Ke,y.pause=Ke,y}}const d=oe;l.call=(y,P,x)=>Qe(y,d,P,x);let p=!1;i==="post"?l.scheduler=y=>{de(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():_l(y)}),l.augmentJob=y=>{t&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=p_(e,t,l);return Vs&&(h?h.push(g):c&&g()),g}function Z_(e,t,n){const r=this.proxy,s=Mt(e)?e.includes(".")?Cd(r,e):()=>r[e]:e.bind(r,r);let i;ht(t)?i=t:(i=t.handler,n=t);const a=Bs(this),l=Sd(s,i.bind(r),n);return a(),l}function Cd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ty=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xe(t)}Modifiers`]||e[`${ir(t)}Modifiers`];function ey(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||St;let s=n;const i=t.startsWith("update:"),a=i&&ty(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Mt(d)?d.trim():d)),a.number&&(s=n.map(Om)));let l,c=r[l=Ho(t)]||r[l=Ho(xe(t))];!c&&i&&(c=r[l=Ho(ir(t))]),c&&Qe(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Qe(h,e,6,s)}}function Pd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ht(e)){const c=h=>{const d=Pd(h,t,!0);d&&(l=!0,ce(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Pt(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):ce(a,i),Pt(e)&&r.set(e,a),a)}function ao(e,t){return!e||!Ji(t)?!1:(t=t.slice(2).replace(/Once$/,""),At(e,t[0].toLowerCase()+t.slice(1))||At(e,ir(t))||At(e,t))}function _u(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:y,ctx:P,inheritAttrs:x}=e,L=Oi(e);let K,U;try{if(n.shapeFlag&4){const q=s||r,ct=q;K=He(h.call(ct,q,d,p,y,g,P)),U=l}else{const q=t;K=He(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),U=t.props?l:ny(l)}}catch(q){_s.length=0,io(q,e,1),K=kt(Dn)}let j=K;if(U&&x!==!1){const q=Object.keys(U),{shapeFlag:ct}=j;q.length&&ct&7&&(i&&q.some(il)&&(U=ry(U,i)),j=Cr(j,U,!1,!0))}return n.dirs&&(j=Cr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&yl(j,n.transition),K=j,Oi(L),K}const ny=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ji(n))&&((t||(t={}))[n]=e[n]);return t},ry=(e,t)=>{const n={};for(const r in e)(!il(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function sy(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==r[g]&&!ao(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?yu(r,a,h):!0:!!a;return!1}function yu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ao(n,i))return!0}return!1}function iy({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Vd=e=>e.__isSuspense;function oy(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):__(e)}const we=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),_s=[];let Ie=null;function ge(e=!1){_s.push(Ie=e?null:[])}function ay(){_s.pop(),Ie=_s[_s.length-1]||null}let Ps=1;function vu(e,t=!1){Ps+=e,e<0&&Ie&&t&&(Ie.hasOnce=!0)}function xd(e){return e.dynamicChildren=Ps>0?Ie||vr:null,ay(),Ps>0&&Ie&&Ie.push(e),e}function rn(e,t,n,r,s,i){return xd(Lt(e,t,n,r,s,i,!0))}function Sr(e,t,n,r,s){return xd(kt(e,t,n,r,s,!0))}function Li(e){return e?e.__v_isVNode===!0:!1}function is(e,t){return e.type===t.type&&e.key===t.key}const Dd=({key:e})=>e??null,Ai=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Mt(e)||le(e)||ht(e)?{i:Me,r:e,k:t,f:!!n}:e:null);function Lt(e,t=null,n=null,r=0,s=null,i=e===we?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dd(t),ref:t&&Ai(t),scopeId:td,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Me};return l?(wl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Mt(n)?8:16),Ps>0&&!a&&Ie&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ie.push(c),c}const kt=ly;function ly(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===fd)&&(e=Dn),Li(e)){const l=Cr(e,t,!0);return n&&wl(l,n),Ps>0&&!i&&Ie&&(l.shapeFlag&6?Ie[Ie.indexOf(e)]=l:Ie.push(l)),l.patchFlag=-2,l}if(Ey(e)&&(e=e.__vccOpts),t){t=cy(t);let{class:l,style:c}=t;l&&!Mt(l)&&(t.class=cl(l)),Pt(c)&&(ml(c)&&!it(c)&&(c=ce({},c)),t.style=ll(c))}const a=Mt(e)?1:Vd(e)?128:y_(e)?64:Pt(e)?4:ht(e)?2:0;return Lt(e,t,n,r,s,a,i,!0)}function cy(e){return e?ml(e)||Ed(e)?ce({},e):e:null}function Cr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?hy(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Dd(h),ref:t&&t.ref?n&&i?it(i)?i.concat(Ai(t)):[i,Ai(t)]:Ai(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cr(e.ssContent),ssFallback:e.ssFallback&&Cr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&yl(d,c.clone(d)),d}function Sn(e=" ",t=0){return kt(lo,null,e,t)}function uy(e,t){const n=kt(Ii,null,e);return n.staticCount=t,n}function Jo(e="",t=!1){return t?(ge(),Sr(Dn,null,e)):kt(Dn,null,e)}function He(e){return e==null||typeof e=="boolean"?kt(Dn):it(e)?kt(we,null,e.slice()):Li(e)?En(e):kt(lo,null,String(e))}function En(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cr(e)}function wl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),wl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ed(t)?t._ctx=Me:s===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ht(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function hy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=cl([t.class,r.class]));else if(s==="style")t.style=ll([t.style,r.style]);else if(Ji(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function $e(e,t,n,r=null){Qe(e,t,7,[n,r])}const fy=_d();let dy=0;function py(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||fy,i={uid:dy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(r,s),emitsOptions:Pd(r,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:r.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ey.bind(null,i),e.ce&&e.ce(i),i}let oe=null,Fi,ba;{const e=no(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Fi=t("__VUE_INSTANCE_SETTERS__",n=>oe=n),ba=t("__VUE_SSR_SETTERS__",n=>Vs=n)}const Bs=e=>{const t=oe;return Fi(e),e.scope.on(),()=>{e.scope.off(),Fi(t)}},Eu=()=>{oe&&oe.scope.off(),Fi(null)};function Nd(e){return e.vnode.shapeFlag&4}let Vs=!1;function gy(e,t=!1,n=!1){t&&ba(t);const{props:r,children:s}=e.vnode,i=Nd(e);$_(e,r,i,t),z_(e,s,n||t);const a=i?my(e,t):void 0;return t&&ba(!1),a}function my(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,N_);const{setup:r}=n;if(r){on();const s=e.setupContext=r.length>1?yy(e):null,i=Bs(e),a=Us(r,e,0,[e.props,s]),l=Af(a);if(an(),i(),(l||e.sp)&&!gs(e)&&id(e),l){if(a.then(Eu,Eu),t)return a.then(c=>{Tu(e,c)}).catch(c=>{io(c,e,0)});e.asyncDep=a}else Tu(e,a)}else Od(e)}function Tu(e,t,n){ht(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pt(t)&&(e.setupState=Wf(t)),Od(e)}function Od(e,t,n){const r=e.type;e.render||(e.render=r.render||Ke);{const s=Bs(e);on();try{O_(e)}finally{an(),s()}}}const _y={get(e,t){return se(e,"get",""),e[t]}};function yy(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_y),slots:e.slots,emit:e.emit,expose:t}}function Il(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Wf(a_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ms)return ms[n](e)},has(t,n){return n in t||n in ms}})):e.proxy}function vy(e,t=!0){return ht(e)?e.displayName||e.name:e.name||t&&e.__name}function Ey(e){return ht(e)&&"__vccOpts"in e}const ke=(e,t)=>f_(e,t,Vs);function kd(e,t,n){const r=arguments.length;return r===2?Pt(t)&&!it(t)?Li(t)?kt(e,null,[t]):kt(e,t):kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),kt(e,t,n))}const Ty="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{Ra=wu.createPolicy("vue",{createHTML:e=>e})}catch{}const Md=Ra?e=>Ra.createHTML(e):e=>e,wy="http://www.w3.org/2000/svg",Iy="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,Iu=en&&en.createElement("template"),Ay={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?en.createElementNS(wy,e):t==="mathml"?en.createElementNS(Iy,e):n?en.createElement(e,{is:n}):en.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>en.createTextNode(e),createComment:e=>en.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>en.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Iu.innerHTML=Md(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Iu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},by=Symbol("_vtc");function Ry(e,t,n){const r=e[by];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Au=Symbol("_vod"),Sy=Symbol("_vsh"),Cy=Symbol(""),Py=/(^|;)\s*display\s*:/;function Vy(e,t,n){const r=e.style,s=Mt(n);let i=!1;if(n&&!s){if(t)if(Mt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&bi(r,l,"")}else for(const a in t)n[a]==null&&bi(r,a,"");for(const a in n)a==="display"&&(i=!0),bi(r,a,n[a])}else if(s){if(t!==n){const a=r[Cy];a&&(n+=";"+a),r.cssText=n,i=Py.test(n)}}else t&&e.removeAttribute("style");Au in e&&(e[Au]=i?r.display:"",e[Sy]&&(r.display="none"))}const bu=/\s*!important$/;function bi(e,t,n){if(it(n))n.forEach(r=>bi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xy(e,t);bu.test(n)?e.setProperty(ir(r),n.replace(bu,""),"important"):e[r]=n}}const Ru=["Webkit","Moz","ms"],Zo={};function xy(e,t){const n=Zo[t];if(n)return n;let r=xe(t);if(r!=="filter"&&r in e)return Zo[t]=r;r=eo(r);for(let s=0;s<Ru.length;s++){const i=Ru[s]+r;if(i in e)return Zo[t]=i}return t}const Su="http://www.w3.org/1999/xlink";function Cu(e,t,n,r,s,i=Bm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Su,t.slice(6,t.length)):e.setAttributeNS(Su,t,n):n==null||i&&!Cf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Bn(n)?String(n):n)}function Pu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Md(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Cf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Dy(e,t,n,r){e.addEventListener(t,n,r)}function Ny(e,t,n,r){e.removeEventListener(t,n,r)}const Vu=Symbol("_vei");function Oy(e,t,n,r,s=null){const i=e[Vu]||(e[Vu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=ky(t);if(r){const h=i[t]=Fy(r,s);Dy(e,l,h,c)}else a&&(Ny(e,l,a,c),i[t]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function ky(e){let t;if(xu.test(e)){t={};let r;for(;r=e.match(xu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ir(e.slice(2)),t]}let ta=0;const My=Promise.resolve(),Ly=()=>ta||(My.then(()=>ta=0),ta=Date.now());function Fy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qe(Uy(r,n.value),t,5,[r])};return n.value=e,n.attached=Ly(),n}function Uy(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Du=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,By=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Ry(e,r,a):t==="style"?Vy(e,n,r):Ji(t)?il(t)||Oy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$y(e,t,r,a))?(Pu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Cu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Mt(r))?Pu(e,xe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cu(e,t,r,a))};function $y(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Du(t)&&ht(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Du(t)&&Mt(n)?!1:t in e}const jy=ce({patchProp:By},Ay);let Nu;function qy(){return Nu||(Nu=G_(jy))}const Hy=(...e)=>{const t=qy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Ky(r);if(!s)return;const i=t._component;!ht(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,zy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function zy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ky(e){return Mt(e)?document.querySelector(e):e}function co(){return typeof window>"u"||typeof document>"u"}async function Gy(e,t){return new Promise((n,r)=>{if(co())return n();let s=document.head,i=document.createElement("script");if(i.async=!0,i.src=e,i.type=(t==null?void 0:t.type)??"text/javascript",t!=null&&t.defer&&(i.defer=!0),t!=null&&t.nonce&&i.setAttribute("nonce",t.nonce),t==null?void 0:t.preconnect){let a=document.createElement("link"),l=new URL(e);a.href=l.origin,a.rel="preconnect",s.appendChild(a)}s.appendChild(i),i.onload=()=>n(),i.onerror=a=>r(a)})}function Ou(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}function Ld(e,t){let n={...e};for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let s=t[r],i=e[r];Ou(s)&&Ou(i)?n[r]=Ld(i,s):n[r]=s}return n}function Wy(e){if(co())return;let t=new URL(window.location.href);t.search="";for(let[n,r]of Object.entries(e))t.searchParams.set(n,r);window.history.replaceState({},"",t.toString())}const Sa="utm_";function Qy(e){let t=new URL(e),n={},r=[],s={};t.searchParams.forEach((i,a)=>{a.includes(Sa)?(n[a.replace(Sa,"").replace("campaign","id")]=i,r.push(a)):s[a]=i});for(let i of r)t.searchParams.delete(i);return{utmParams:n,cleanQueryParams:s,cleanUrl:t.toString()}}function Yy(e){let t=RegExp(`[?&]${Sa}`);return!!e.match(t)}function Xy(e,t){let n=t.endsWith("/")?t:`${t}/`,r=e.startsWith("/")?e.substring(1):e;return`${n}${r}`}const Jy={resource:{url:"https://www.googletagmanager.com/gtag/js",inject:!0},dataLayerName:"dataLayer",gtagName:"gtag",groupName:"default",initMode:"auto"};let Ca={...Jy};function De(){return Ca}function Zy(e){Ca=Ld(Ca,e)}function Ve(...e){let{dataLayerName:t,gtagName:n}=De();co()||(window[t]=window[t]||[],window[n]=function(){window[t].push(arguments)},window[n](...e))}function Fd(e){let{tagId:t,additionalAccounts:n}=De();if(t&&(Ve("config",t,e),n))for(let r of n)Ve("config",r.tagId,e)}function Al(e,t){Ve("consent",e,t)}function Ud(e="default"){Al(e,{ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"granted"})}function Bd(e="default"){Al(e,{ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"denied"})}function tv(e){Fd({custom_map:e})}function uo(e,t){let{groupName:n,additionalAccounts:r}=De();t.send_to===void 0&&(r!=null&&r.length)&&(t.send_to=n),Ve("event",e,t)}function ev(e,t){uo(e,t)}function nv(e){uo("exception",e)}function $d(e){Ve("set","linker",e)}function ku(e,t){t?window[e]=t:delete window[e]}function jd(e,t){let{tagId:n,additionalAccounts:r}=De();if(!co()&&(ku(`ga-disable-${e??n}`,t),!(!(r!=null&&r.length)||e)))for(let s of r)ku(`ga-disable-${s.tagId}`,t)}function rv(e){jd(e,!0)}function sv(e){jd(e,void 0)}function qd(...e){Ve("set",...e)}function Hd(e){var r;let{pageTracker:t}=De(),n;if(typeof e=="string")n={page_path:e};else if("path"in e){let s=(t==null?void 0:t.router.options.history.base)??"",i=t!=null&&t.useRouteFullPath?e.fullPath:e.path;n={...e.name?{page_title:e.name.toString()}:{},page_path:t!=null&&t.useRouterBasePath?Xy(i,s):i}}else n=e;if(n.page_location===void 0&&(n.page_location=window.location.href),n.send_page_view===void 0&&(n.send_page_view=(t==null?void 0:t.sendPageView)??!0),n.page_path!=="/"&&((r=n.page_path)!=null&&r.endsWith("/"))&&(n.page_path=n.page_path.slice(0,-1)),Yy(n.page_location)){let{utmParams:s,cleanUrl:i,cleanQueryParams:a}=Qy(n.page_location);n.page_location=i,Wy(a),qd("campaign",s)}Ve("event","page_view",n)}function zd(e){let{appName:t}=De(),n={};typeof e=="string"?n.screen_name=e:"path"in e?n.screen_name=e.name??e.path:n=e,t&&(n==null?void 0:n.app_name)===void 0&&(n.app_name=t),Ve("event","screen_view",n)}function iv(e){uo("timing_complete",e)}function Mu(e={}){return{send_page_view:!1,anonymize_ip:!0,...e}}function ov(){var l,c;let{tagId:e,config:t,groupName:n,linker:r,additionalAccounts:s,hooks:i,consentMode:a}=De();if(e){if((l=i==null?void 0:i["config:init:before"])==null||l.call(i),a==="granted"?Ud():a==="denied"&&Bd(),r&&$d(r),Ve("js",new Date),Ve("config",e,Mu(t)),s)for(let h of s)Ve("config",h.tagId,Mu({groups:n,...h.config}));(c=i==null?void 0:i["config:init:after"])==null||c.call(i)}}function av(e){var n;let{pageTracker:t}=De();return t!=null&&t.exclude?typeof t.exclude=="function"?t.exclude(e):(n=t.exclude)==null?void 0:n.some(({name:r,path:s}={})=>r&&r===e.name||s&&s===e.path):!1}function Lu(e){var s,i;let{pageTracker:t,hooks:n}=De();if(av(e))return;(s=n==null?void 0:n["router:track:before"])==null||s.call(n,e);let r;if(t!=null&&t.template&&(r=typeof t.template=="function"?t.template(e):t.template),t==null?void 0:t.useScreenview){let a=r&&"screen_name"in r?r:e;zd(a)}else{let a=r&&"page_path"in r?r:e;Hd(a)}(i=n==null?void 0:n["router:track:after"])==null||i.call(n,e)}async function lv(){let{pageTracker:e}=De();if(!(e!=null&&e.router))return;let{router:t}=e;await t.isReady(),Lu(t.currentRoute.value),t.afterEach((n,r)=>{n.path!==r.path&&Lu(n)})}async function cv(){var i,a;let{resource:e,dataLayerName:t,tagId:n,pageTracker:r,hooks:s}=De();if(n&&(ov(),r!=null&&r.router&&lv(),e.inject))try{await Gy(`${e.url}?id=${n}&l=${t}`,{preconnect:e.preconnect,defer:e.defer,nonce:e.nonce}),(i=s==null?void 0:s["script:loaded"])==null||i.call(s)}catch(l){(a=s==null?void 0:s["script:error"])==null||a.call(s,l)}}function uv(){let{initMode:e}=De();e!=="manual"&&cv()}function hv(e){Zy(e),uv()}const fv={config:Fd,consent:Al,consentDeniedAll:Bd,consentGrantedAll:Ud,customMap:tv,ecommerce:ev,event:uo,exception:nv,linker:$d,optIn:sv,optOut:rv,pageview:Hd,screenview:zd,set:qd,time:iv,query:Ve};function dv(e){return hv(e),t=>{t.config.globalProperties.$gtag=fv}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof document<"u";function Kd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Kd(e.default)}const wt=Object.assign;function ea(e,t){const n={};for(const r in t){const s=t[r];n[r]=Fe(s)?s.map(e):e(s)}return n}const ys=()=>{},Fe=Array.isArray,Gd=/#/g,gv=/&/g,mv=/\//g,_v=/=/g,yv=/\?/g,Wd=/\+/g,vv=/%5B/g,Ev=/%5D/g,Qd=/%5E/g,Tv=/%60/g,Yd=/%7B/g,wv=/%7C/g,Xd=/%7D/g,Iv=/%20/g;function bl(e){return encodeURI(""+e).replace(wv,"|").replace(vv,"[").replace(Ev,"]")}function Av(e){return bl(e).replace(Yd,"{").replace(Xd,"}").replace(Qd,"^")}function Pa(e){return bl(e).replace(Wd,"%2B").replace(Iv,"+").replace(Gd,"%23").replace(gv,"%26").replace(Tv,"`").replace(Yd,"{").replace(Xd,"}").replace(Qd,"^")}function bv(e){return Pa(e).replace(_v,"%3D")}function Rv(e){return bl(e).replace(Gd,"%23").replace(yv,"%3F")}function Sv(e){return e==null?"":Rv(e).replace(mv,"%2F")}function xs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Cv=/\/$/,Pv=e=>e.replace(Cv,"");function na(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Nv(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:xs(a)}}function Vv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function xv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pr(t.matched[r],n.matched[s])&&Jd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Dv(e[n],t[n]))return!1;return!0}function Dv(e,t){return Fe(e)?Uu(e,t):Fe(t)?Uu(t,e):e===t}function Uu(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Nv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ds;(function(e){e.pop="pop",e.push="push"})(Ds||(Ds={}));var vs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vs||(vs={}));function Ov(e){if(!e)if(pr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pv(e)}const kv=/^[^#]+#/;function Mv(e,t){return e.replace(kv,"#")+t}function Lv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ho=()=>({left:window.scrollX,top:window.scrollY});function Fv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Lv(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Bu(e,t){return(history.state?history.state.position-t:-1)+e}const Va=new Map;function Uv(e,t){Va.set(e,t)}function Bv(e){const t=Va.get(e);return Va.delete(e),t}let $v=()=>location.protocol+"//"+location.host;function Zd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Fu(c,"")}return Fu(n,e)+r+s}function jv(e,t,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const y=Zd(e,location),P=n.value,x=t.value;let L=0;if(g){if(n.value=y,t.value=g,a&&a===P){a=null;return}L=x?g.position-x.position:0}else r(y);s.forEach(K=>{K(n.value,P,{delta:L,type:Ds.pop,direction:L?L>0?vs.forward:vs.back:vs.unknown})})};function c(){a=n.value}function h(g){s.push(g);const y=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(wt({},g.state,{scroll:ho()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function $u(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ho():null}}function qv(e){const{history:t,location:n}=window,r={value:Zd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:$v()+e+c;try{t[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function a(c,h){const d=wt({},t.state,$u(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=wt({},s.value,t.state,{forward:c,scroll:ho()});i(d.current,d,!0);const p=wt({},$u(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Hv(e){e=Ov(e);const t=qv(e),n=jv(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=wt({location:"",base:e,go:r,createHref:Mv.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function zv(e){return typeof e=="string"||e&&typeof e=="object"}function tp(e){return typeof e=="string"||typeof e=="symbol"}const ep=Symbol("");var ju;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ju||(ju={}));function Vr(e,t){return wt(new Error,{type:e,[ep]:!0},t)}function tn(e,t){return e instanceof Error&&ep in e&&(t==null||!!(e.type&t))}const qu="[^/]+?",Kv={sensitive:!1,strict:!1,start:!0,end:!0},Gv=/[.+*?^${}()[\]/\\]/g;function Wv(e,t){const n=wt({},Kv,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Gv,"\\$&"),y+=40;else if(g.type===1){const{value:P,repeatable:x,optional:L,regexp:K}=g;i.push({name:P,repeatable:x,optional:L});const U=K||qu;if(U!==qu){y+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${P}" (${U}): `+q.message)}}let j=x?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=L&&h.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),x&&(y+=-20),U===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",P=i[g-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(h){let d="",p=!1;for(const g of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:x,optional:L}=y,K=P in h?h[P]:"";if(Fe(K)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const U=Fe(K)?K.join("/"):K;if(!U)if(L)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=U}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Qv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function np(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Qv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Hu(r))return 1;if(Hu(s))return-1}return s.length-r.length}function Hu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Yv={type:0,value:""},Xv=/[a-zA-Z0-9_]/;function Jv(e){if(!e)return[[]];if(e==="/")return[[Yv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Xv.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Zv(e,t,n){const r=Wv(Jv(e.path),n),s=wt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function tE(e,t){const n=[],r=new Map;t=Wu({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,g,y){const P=!y,x=Ku(p);x.aliasOf=y&&y.record;const L=Wu(t,p),K=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ct of q)K.push(Ku(wt({},x,{components:y?y.record.components:x.components,path:ct,aliasOf:y?y.record:x})))}let U,j;for(const q of K){const{path:ct}=q;if(g&&ct[0]!=="/"){const lt=g.record.path,I=lt[lt.length-1]==="/"?"":"/";q.path=g.record.path+(ct&&I+ct)}if(U=Zv(q,g,L),y?y.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),P&&p.name&&!Gu(U)&&a(p.name)),rp(U)&&c(U),x.children){const lt=x.children;for(let I=0;I<lt.length;I++)i(lt[I],U,y&&y.children[I])}y=y||U}return j?()=>{a(j)}:ys}function a(p){if(tp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=rE(p,n);n.splice(g,0,p),p.record.name&&!Gu(p)&&r.set(p.record.name,p)}function h(p,g){let y,P={},x,L;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Vr(1,{location:p});L=y.record.name,P=wt(zu(g.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&zu(p.params,y.keys.map(j=>j.name))),x=y.stringify(P)}else if(p.path!=null)x=p.path,y=n.find(j=>j.re.test(x)),y&&(P=y.parse(x),L=y.record.name);else{if(y=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!y)throw Vr(1,{location:p,currentLocation:g});L=y.record.name,P=wt({},g.params,p.params),x=y.stringify(P)}const K=[];let U=y;for(;U;)K.unshift(U.record),U=U.parent;return{name:L,path:x,params:P,matched:K,meta:nE(K)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function zu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ku(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:eE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function eE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Gu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nE(e){return e.reduce((t,n)=>wt(t,n.meta),{})}function Wu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function rE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;np(e,t[i])<0?r=i:n=i+1}const s=sE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function sE(e){let t=e;for(;t=t.parent;)if(rp(t)&&np(e,t)===0)return t}function rp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function iE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wd," "),a=i.indexOf("="),l=xs(a<0?i:i.slice(0,a)),c=a<0?null:xs(i.slice(a+1));if(l in t){let h=t[l];Fe(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Qu(e){let t="";for(let n in e){const r=e[n];if(n=bv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&Pa(i)):[r&&Pa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function oE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const aE=Symbol(""),Yu=Symbol(""),Rl=Symbol(""),sp=Symbol(""),xa=Symbol("");function os(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Vr(4,{from:n,to:t})):g instanceof Error?c(g):zv(g)?c(Vr(2,{from:t,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ra(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Kd(c)){const d=(c.__vccOpts||c)[t];d&&i.push(Tn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=pv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const y=(p.__vccOpts||p)[t];return y&&Tn(y,n,r,a,l,s)()}))}}return i}function Xu(e){const t=sn(Rl),n=sn(sp),r=ke(()=>{const c=Zn(e.to);return t.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Pr.bind(null,d));if(g>-1)return g;const y=Ju(c[h-2]);return h>1&&Ju(d)===y&&p[p.length-1].path!==y?p.findIndex(Pr.bind(null,c[h-2])):g}),i=ke(()=>s.value>-1&&fE(n.params,r.value.params)),a=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Jd(n.params,r.value.params));function l(c={}){if(hE(c)){const h=t[Zn(e.replace)?"replace":"push"](Zn(e.to)).catch(ys);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function lE(e){return e.length===1?e[0]:e}const cE=sd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xu,setup(e,{slots:t}){const n=so(Xu(e)),{options:r}=sn(Rl),s=ke(()=>({[Zu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&lE(t.default(n));return e.custom?i:kd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uE=cE;function hE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function fE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ju(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Zu=(e,t,n)=>e??t??n,dE=sd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=sn(xa),s=ke(()=>e.route||r.value),i=sn(Yu,0),a=ke(()=>{let h=Zn(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=ke(()=>s.value.matched[a.value]);Ti(Yu,ke(()=>a.value+1)),Ti(aE,l),Ti(xa,s);const c=vi();return wi(()=>[c.value,l.value,e.name],([h,d,p],[g,y,P])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!Pr(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,g=p&&p.components[d];if(!g)return th(n.default,{Component:g,route:h});const y=p.props[d],P=y?y===!0?h.params:typeof y=="function"?y(h):y:null,L=kd(g,wt({},P,t,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return th(n.default,{Component:L,route:h})||L}}});function th(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ip=dE;function pE(e){const t=tE(e.routes,e),n=e.parseQuery||iE,r=e.stringifyQuery||Qu,s=e.history,i=os(),a=os(),l=os(),c=l_(yn);let h=yn;pr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ea.bind(null,D=>""+D),p=ea.bind(null,Sv),g=ea.bind(null,xs);function y(D,Y){let Q,J;return tp(D)?(Q=t.getRecordMatcher(D),J=Y):J=D,t.addRoute(J,Q)}function P(D){const Y=t.getRecordMatcher(D);Y&&t.removeRoute(Y)}function x(){return t.getRoutes().map(D=>D.record)}function L(D){return!!t.getRecordMatcher(D)}function K(D,Y){if(Y=wt({},Y||c.value),typeof D=="string"){const R=na(n,D,Y.path),N=t.resolve({path:R.path},Y),M=s.createHref(R.fullPath);return wt(R,N,{params:g(N.params),hash:xs(R.hash),redirectedFrom:void 0,href:M})}let Q;if(D.path!=null)Q=wt({},D,{path:na(n,D.path,Y.path).path});else{const R=wt({},D.params);for(const N in R)R[N]==null&&delete R[N];Q=wt({},D,{params:p(R)}),Y.params=p(Y.params)}const J=t.resolve(Q,Y),Et=D.hash||"";J.params=d(g(J.params));const v=Vv(r,wt({},D,{hash:Av(Et),path:J.path})),T=s.createHref(v);return wt({fullPath:v,hash:Et,query:r===Qu?oE(D.query):D.query||{}},J,{redirectedFrom:void 0,href:T})}function U(D){return typeof D=="string"?na(n,D,c.value.path):wt({},D)}function j(D,Y){if(h!==D)return Vr(8,{from:Y,to:D})}function q(D){return I(D)}function ct(D){return q(wt(U(D),{replace:!0}))}function lt(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let J=typeof Q=="function"?Q(D):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=U(J):{path:J},J.params={}),wt({query:D.query,hash:D.hash,params:J.path!=null?{}:D.params},J)}}function I(D,Y){const Q=h=K(D),J=c.value,Et=D.state,v=D.force,T=D.replace===!0,R=lt(Q);if(R)return I(wt(U(R),{state:typeof R=="object"?wt({},Et,R.state):Et,force:v,replace:T}),Y||Q);const N=Q;N.redirectedFrom=Y;let M;return!v&&xv(r,J,Q)&&(M=Vr(16,{to:N,from:J}),Re(J,J,!0,!1)),(M?Promise.resolve(M):A(N,J)).catch(O=>tn(O)?tn(O,2)?O:Ne(O):dt(O,N,J)).then(O=>{if(O){if(tn(O,2))return I(wt({replace:T},U(O.to),{state:typeof O.to=="object"?wt({},Et,O.to.state):Et,force:v}),Y||N)}else O=S(N,J,!0,T,Et);return b(N,J,O),O})}function _(D,Y){const Q=j(D,Y);return Q?Promise.reject(Q):Promise.resolve()}function E(D){const Y=dn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let Q;const[J,Et,v]=gE(D,Y);Q=ra(J.reverse(),"beforeRouteLeave",D,Y);for(const R of J)R.leaveGuards.forEach(N=>{Q.push(Tn(N,D,Y))});const T=_.bind(null,D,Y);return Q.push(T),me(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Tn(R,D,Y));return Q.push(T),me(Q)}).then(()=>{Q=ra(Et,"beforeRouteUpdate",D,Y);for(const R of Et)R.updateGuards.forEach(N=>{Q.push(Tn(N,D,Y))});return Q.push(T),me(Q)}).then(()=>{Q=[];for(const R of v)if(R.beforeEnter)if(Fe(R.beforeEnter))for(const N of R.beforeEnter)Q.push(Tn(N,D,Y));else Q.push(Tn(R.beforeEnter,D,Y));return Q.push(T),me(Q)}).then(()=>(D.matched.forEach(R=>R.enterCallbacks={}),Q=ra(v,"beforeRouteEnter",D,Y,E),Q.push(T),me(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Tn(R,D,Y));return Q.push(T),me(Q)}).catch(R=>tn(R,8)?R:Promise.reject(R))}function b(D,Y,Q){l.list().forEach(J=>E(()=>J(D,Y,Q)))}function S(D,Y,Q,J,Et){const v=j(D,Y);if(v)return v;const T=Y===yn,R=pr?history.state:{};Q&&(J||T?s.replace(D.fullPath,wt({scroll:T&&R&&R.scroll},Et)):s.push(D.fullPath,Et)),c.value=D,Re(D,Y,Q,T),Ne()}let w;function ue(){w||(w=s.listen((D,Y,Q)=>{if(!Be.listening)return;const J=K(D),Et=lt(J);if(Et){I(wt(Et,{replace:!0,force:!0}),J).catch(ys);return}h=J;const v=c.value;pr&&Uv(Bu(v.fullPath,Q.delta),ho()),A(J,v).catch(T=>tn(T,12)?T:tn(T,2)?(I(wt(U(T.to),{force:!0}),J).then(R=>{tn(R,20)&&!Q.delta&&Q.type===Ds.pop&&s.go(-1,!1)}).catch(ys),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),dt(T,J,v))).then(T=>{T=T||S(J,v,!1),T&&(Q.delta&&!tn(T,8)?s.go(-Q.delta,!1):Q.type===Ds.pop&&tn(T,20)&&s.go(-1,!1)),b(J,v,T)}).catch(ys)}))}let be=os(),Bt=os(),pt;function dt(D,Y,Q){Ne(D);const J=Bt.list();return J.length?J.forEach(Et=>Et(D,Y,Q)):console.error(D),Promise.reject(D)}function Ee(){return pt&&c.value!==yn?Promise.resolve():new Promise((D,Y)=>{be.add([D,Y])})}function Ne(D){return pt||(pt=!D,ue(),be.list().forEach(([Y,Q])=>D?Q(D):Y()),be.reset()),D}function Re(D,Y,Q,J){const{scrollBehavior:Et}=e;if(!pr||!Et)return Promise.resolve();const v=!Q&&Bv(Bu(D.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return Yf().then(()=>Et(D,Y,v)).then(T=>T&&Fv(T)).catch(T=>dt(T,D,Y))}const Vt=D=>s.go(D);let xt;const dn=new Set,Be={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:x,resolve:K,options:e,push:q,replace:ct,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Bt.add,isReady:Ee,install(D){const Y=this;D.component("RouterLink",uE),D.component("RouterView",ip),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Zn(c)}),pr&&!xt&&c.value===yn&&(xt=!0,q(s.location).catch(Et=>{}));const Q={};for(const Et in yn)Object.defineProperty(Q,Et,{get:()=>c.value[Et],enumerable:!0});D.provide(Rl,Y),D.provide(sp,zf(Q)),D.provide(xa,c);const J=D.unmount;dn.add(D),D.unmount=function(){dn.delete(D),dn.size<1&&(h=yn,w&&w(),w=null,c.value=yn,xt=!1,pt=!1),J()}}};function me(D){return D.reduce((Y,Q)=>Y.then(()=>E(Q)),Promise.resolve())}return Be}function gE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Pr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Pr(h,c))||s.push(c))}return[n,r,s]}const mE={class:"bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"},_E={class:"flex items-center mb-4"},yE={class:"text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4"},vE=["src","alt"],EE={class:"text-xl font-semibold text-green-dark"},TE={class:"text-green-600"},wE={class:"text-gray-600 mb-4"},IE={class:"flex flex-col sm:flex-row gap-2"},AE=["href"],bE=["href"],RE=["href"],SE={__name:"ProgramCard",props:{icon:{type:String},name:{type:String,required:!0},link64:{type:String},linkcommon:{type:String},link32:{type:String},description:{type:String},version:{type:String}},setup(e){const t=e;return(n,r)=>(ge(),rn("div",mE,[Lt("div",_E,[Lt("div",yE,[Lt("img",{src:e.icon,width:"48",height:"48",alt:e.name},null,8,vE)]),Lt("div",null,[Lt("h3",EE,yi(e.name),1),Lt("p",TE,yi(e.version),1)])]),Lt("p",wE,yi(e.description),1),Lt("div",IE,[e.link64?(ge(),rn("a",{key:0,href:t.link64,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x64 ",8,AE)):Jo("",!0),e.link32?(ge(),rn("a",{key:1,href:t.link32,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x32 ",8,bE)):Jo("",!0),e.linkcommon?(ge(),rn("a",{key:2,href:t.linkcommon,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x86-x64 ",8,RE)):Jo("",!0)])]))}},CE=()=>{};var eh={};/**
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
 */const op=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},PE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,y=h&63;c||(y=64,a||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(op(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):PE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new VE;const g=i<<2|l>>4;if(r.push(g),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class VE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xE=function(e){const t=op(e);return ap.encodeByteArray(t,!0)},Ui=function(e){return xE(e).replace(/\./g,"")},DE=function(e){try{return ap.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function NE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OE=()=>NE().__FIREBASE_DEFAULTS__,kE=()=>{if(typeof process>"u"||typeof eh>"u")return;const e=eh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ME=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&DE(e[1]);return t&&JSON.parse(t)},Sl=()=>{try{return CE()||OE()||kE()||ME()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},LE=e=>{var t,n;return(n=(t=Sl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},FE=e=>{const t=LE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},lp=()=>{var e;return(e=Sl())===null||e===void 0?void 0:e.config};/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Cl(e){return e.endsWith(".cloudworkstations.dev")}async function BE(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function $E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ui(JSON.stringify(n)),Ui(JSON.stringify(a)),""].join(".")}const Es={};function jE(){const e={prod:[],emulator:[]};for(const t of Object.keys(Es))Es[t]?e.emulator.push(t):e.prod.push(t);return e}function qE(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let nh=!1;function HE(e,t){if(typeof window>"u"||typeof document>"u"||!Cl(window.location.host)||Es[e]===t||Es[e]||nh)return;Es[e]=t;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=jE().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{nh=!0,a()},g}function d(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=qE(r),y=n("text"),P=document.getElementById(y)||document.createElement("span"),x=n("learnmore"),L=document.getElementById(x)||document.createElement("a"),K=n("preprendIcon"),U=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),d(L,x);const q=h();c(U,K),j.append(U,P,L,q),document.body.appendChild(j)}i?(P.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function zE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KE(){var e;const t=(e=Sl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function WE(){return!KE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cp(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function QE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const YE="FirebaseError";class $n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=YE,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?XE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new $n(s,l,r)}}function XE(e,t){return e.replace(JE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const JE=/\{\$([^}]+)}/g;function Ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(rh(i)&&rh(a)){if(!Ns(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rh(e){return e!==null&&typeof e=="object"}/**
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
 */const ZE=1e3,tT=2,eT=4*60*60*1e3,nT=.5;function sh(e,t=ZE,n=tT){const r=t*Math.pow(n,e),s=Math.round(nT*r*(Math.random()-.5)*2);return Math.min(eT,r+s)}/**
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
 */function xr(e){return e&&e._delegate?e._delegate:e}class ln{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class rT{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new UE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(iT(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sT(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(e){return e===Qn?void 0:e}function iT(e){return e.instantiationMode==="EAGER"}/**
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
 */class oT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rT(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _t;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_t||(_t={}));const aT={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},lT=_t.INFO,cT={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},uT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=cT[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=lT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const hT=(e,t)=>t.some(n=>e instanceof n);let ih,oh;function fT(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dT(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hp=new WeakMap,Da=new WeakMap,fp=new WeakMap,sa=new WeakMap,Vl=new WeakMap;function pT(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Cn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&hp.set(n,e)}).catch(()=>{}),Vl.set(t,e),t}function gT(e){if(Da.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Da.set(e,t)}let Na={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Da.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mT(e){Na=e(Na)}function _T(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ia(this),t,...n);return fp.set(r,t.sort?t.sort():[t]),Cn(r)}:dT().includes(e)?function(...t){return e.apply(ia(this),t),Cn(hp.get(this))}:function(...t){return Cn(e.apply(ia(this),t))}}function yT(e){return typeof e=="function"?_T(e):(e instanceof IDBTransaction&&gT(e),hT(e,fT())?new Proxy(e,Na):e)}function Cn(e){if(e instanceof IDBRequest)return pT(e);if(sa.has(e))return sa.get(e);const t=yT(e);return t!==e&&(sa.set(e,t),Vl.set(t,e)),t}const ia=e=>Vl.get(e);function dp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=Cn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Cn(a.result),c.oldVersion,c.newVersion,Cn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const vT=["get","getKey","getAll","getAllKeys","count"],ET=["put","add","delete","clear"],oa=new Map;function ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oa.get(t))return oa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ET.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return oa.set(t,i),i}mT(e=>({...e,get:(t,n,r)=>ah(t,n)||e.get(t,n,r),has:(t,n)=>!!ah(t,n)||e.has(t,n)}));/**
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
 */class TT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Oa="@firebase/app",lh="0.13.1";/**
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
 */const cn=new Pl("@firebase/app"),IT="@firebase/app-compat",AT="@firebase/analytics-compat",bT="@firebase/analytics",RT="@firebase/app-check-compat",ST="@firebase/app-check",CT="@firebase/auth",PT="@firebase/auth-compat",VT="@firebase/database",xT="@firebase/data-connect",DT="@firebase/database-compat",NT="@firebase/functions",OT="@firebase/functions-compat",kT="@firebase/installations",MT="@firebase/installations-compat",LT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",BT="@firebase/performance-compat",$T="@firebase/remote-config",jT="@firebase/remote-config-compat",qT="@firebase/storage",HT="@firebase/storage-compat",zT="@firebase/firestore",KT="@firebase/ai",GT="@firebase/firestore-compat",WT="firebase",QT="11.9.0";/**
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
 */const ka="[DEFAULT]",YT={[Oa]:"fire-core",[IT]:"fire-core-compat",[bT]:"fire-analytics",[AT]:"fire-analytics-compat",[ST]:"fire-app-check",[RT]:"fire-app-check-compat",[CT]:"fire-auth",[PT]:"fire-auth-compat",[VT]:"fire-rtdb",[xT]:"fire-data-connect",[DT]:"fire-rtdb-compat",[NT]:"fire-fn",[OT]:"fire-fn-compat",[kT]:"fire-iid",[MT]:"fire-iid-compat",[LT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[BT]:"fire-perf-compat",[$T]:"fire-rc",[jT]:"fire-rc-compat",[qT]:"fire-gcs",[HT]:"fire-gcs-compat",[zT]:"fire-fst",[GT]:"fire-fst-compat",[KT]:"fire-vertex","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const Bi=new Map,XT=new Map,Ma=new Map;function ch(e,t){try{e.container.addComponent(t)}catch(n){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nn(e){const t=e.name;if(Ma.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of Bi.values())ch(n,e);for(const n of XT.values())ch(n,e);return!0}function $s(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function JT(e){return e==null?!1:e.settings!==void 0}/**
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
 */const ZT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new fo("app","Firebase",ZT);/**
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
 */class tw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const ew=QT;function pp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=lp()),!n)throw Pn.create("no-options");const i=Bi.get(s);if(i){if(Ns(n,i.options)&&Ns(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const a=new oT(s);for(const c of Ma.values())a.addComponent(c);const l=new tw(n,r,a);return Bi.set(s,l),l}function gp(e=ka){const t=Bi.get(e);if(!t&&e===ka&&lp())return pp();if(!t)throw Pn.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let s=(r=YT[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}Nn(new ln(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const nw="firebase-heartbeat-database",rw=1,Os="firebase-heartbeat-store";let aa=null;function mp(){return aa||(aa=dp(nw,rw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Os)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),aa}async function sw(e){try{const n=(await mp()).transaction(Os),r=await n.objectStore(Os).get(_p(e));return await n.done,r}catch(t){if(t instanceof $n)cn.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});cn.warn(n.message)}}}async function uh(e,t){try{const r=(await mp()).transaction(Os,"readwrite");await r.objectStore(Os).put(t,_p(e)),await r.done}catch(n){if(n instanceof $n)cn.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function _p(e){return`${e.name}!${e.options.appId}`}/**
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
 */const iw=1024,ow=30;class aw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ow){const a=uw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hh(),{heartbeatsToSend:r,unsentEntries:s}=lw(this._heartbeatsCache.heartbeats),i=Ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cn.warn(n),""}}}function hh(){return new Date().toISOString().substring(0,10)}function lw(e,t=iw){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),fh(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fh(e){return Ui(JSON.stringify({version:2,heartbeats:e})).length}function uw(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function hw(e){Nn(new ln("platform-logger",t=>new TT(t),"PRIVATE")),Nn(new ln("heartbeat",t=>new aw(t),"PRIVATE")),Ge(Oa,lh,e),Ge(Oa,lh,"esm2017"),Ge("fire-js","")}hw("");var fw="firebase",dw="11.9.1";/**
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
 */Ge(fw,dw,"app");var dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,yp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(A,b,S){for(var w=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)w[ue-2]=arguments[ue];return _.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,E){E||(E=0);var A=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)A[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)A[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],b=I.g[2];var S=I.g[3],w=_+(S^E&(b^S))+A[0]+3614090360&4294967295;_=E+(w<<7&4294967295|w>>>25),w=S+(b^_&(E^b))+A[1]+3905402710&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(E^S&(_^E))+A[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=E+(_^b&(S^_))+A[3]+3250441966&4294967295,E=b+(w<<22&4294967295|w>>>10),w=_+(S^E&(b^S))+A[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(b^_&(E^b))+A[5]+1200080426&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(E^S&(_^E))+A[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=E+(_^b&(S^_))+A[7]+4249261313&4294967295,E=b+(w<<22&4294967295|w>>>10),w=_+(S^E&(b^S))+A[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(b^_&(E^b))+A[9]+2336552879&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(E^S&(_^E))+A[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=E+(_^b&(S^_))+A[11]+2304563134&4294967295,E=b+(w<<22&4294967295|w>>>10),w=_+(S^E&(b^S))+A[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(b^_&(E^b))+A[13]+4254626195&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(E^S&(_^E))+A[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=E+(_^b&(S^_))+A[15]+1236535329&4294967295,E=b+(w<<22&4294967295|w>>>10),w=_+(b^S&(E^b))+A[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^b&(_^E))+A[6]+3225465664&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^E&(S^_))+A[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(b^S))+A[0]+3921069994&4294967295,E=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(E^b))+A[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^b&(_^E))+A[10]+38016083&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^E&(S^_))+A[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(b^S))+A[4]+3889429448&4294967295,E=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(E^b))+A[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^b&(_^E))+A[14]+3275163606&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^E&(S^_))+A[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(b^S))+A[8]+1163531501&4294967295,E=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(E^b))+A[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^b&(_^E))+A[2]+4243563512&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^E&(S^_))+A[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(b^S))+A[12]+2368359562&4294967295,E=b+(w<<20&4294967295|w>>>12),w=_+(E^b^S)+A[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^b)+A[8]+2272392833&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^E)+A[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=E+(b^S^_)+A[14]+4259657740&4294967295,E=b+(w<<23&4294967295|w>>>9),w=_+(E^b^S)+A[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^b)+A[4]+1272893353&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^E)+A[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=E+(b^S^_)+A[10]+3200236656&4294967295,E=b+(w<<23&4294967295|w>>>9),w=_+(E^b^S)+A[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^b)+A[0]+3936430074&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^E)+A[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=E+(b^S^_)+A[6]+76029189&4294967295,E=b+(w<<23&4294967295|w>>>9),w=_+(E^b^S)+A[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^b)+A[12]+3873151461&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^E)+A[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=E+(b^S^_)+A[2]+3299628645&4294967295,E=b+(w<<23&4294967295|w>>>9),w=_+(b^(E|~S))+A[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~b))+A[7]+1126891415&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~E))+A[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=E+(S^(b|~_))+A[5]+4237533241&4294967295,E=b+(w<<21&4294967295|w>>>11),w=_+(b^(E|~S))+A[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~b))+A[3]+2399980690&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~E))+A[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=E+(S^(b|~_))+A[1]+2240044497&4294967295,E=b+(w<<21&4294967295|w>>>11),w=_+(b^(E|~S))+A[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~b))+A[15]+4264355552&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~E))+A[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=E+(S^(b|~_))+A[13]+1309151649&4294967295,E=b+(w<<21&4294967295|w>>>11),w=_+(b^(E|~S))+A[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~b))+A[11]+3174756917&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~E))+A[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=E+(S^(b|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,A=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=E;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<_;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var A=0;32>A;A+=8)I[E++]=this.g[_]>>>A&255;return I};function i(I,_){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function a(I,_){this.h=_;for(var E=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==_||(E[b]=S,A=!1)}this.g=E}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var _=[],E=1,A=0;I>=E;A++)_[A]=I/E|0,E*=4294967296;return new a(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return L(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),A=A.j(S).add(h(w))):(A=A.j(E),A=A.add(h(w)))}return A}var p=c(0),g=c(1),y=c(16777216);e=a.prototype,e.m=function(){if(x(this))return-L(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var A=this.i(E);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(x(this))return"-"+L(this).toString(I);for(var _=h(Math.pow(I,6)),E=this,A="";;){var b=q(E,_).g;E=K(E,b.j(_));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=b,P(E))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}e.l=function(I){return I=K(this,I),x(I)?-1:P(I)?0:1};function L(I){for(var _=I.g.length,E=[],A=0;A<_;A++)E[A]=~I.g[A];return new a(E,~I.h).add(g)}e.abs=function(){return x(this)?L(this):this},e.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],A=0,b=0;b<=_;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,S&=65535,w&=65535,E[b]=w<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function K(I,_){return I.add(L(_))}e.j=function(I){if(P(this)||P(I))return p;if(x(this))return x(I)?L(this).j(L(I)):L(L(this).j(I));if(x(I))return L(this.j(L(I)));if(0>this.l(y)&&0>I.l(y))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],A=0;A<2*_;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,w=this.i(A)&65535,ue=I.i(b)>>>16,be=I.i(b)&65535;E[2*A+2*b]+=w*be,U(E,2*A+2*b),E[2*A+2*b+1]+=S*be,U(E,2*A+2*b+1),E[2*A+2*b+1]+=w*ue,U(E,2*A+2*b+1),E[2*A+2*b+2]+=S*ue,U(E,2*A+2*b+2)}for(A=0;A<_;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=_;A<2*_;A++)E[A]=0;return new a(E,0)};function U(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function j(I,_){this.g=I,this.h=_}function q(I,_){if(P(_))throw Error("division by zero");if(P(I))return new j(p,p);if(x(I))return _=q(L(I),_),new j(L(_.g),L(_.h));if(x(_))return _=q(I,L(_)),new j(L(_.g),_.h);if(30<I.g.length){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,A=_;0>=A.l(I);)E=ct(E),A=ct(A);var b=lt(E,1),S=lt(A,1);for(A=lt(A,2),E=lt(E,2);!P(A);){var w=S.add(A);0>=w.l(I)&&(b=b.add(E),S=w),A=lt(A,1),E=lt(E,1)}return _=K(I,b.j(_)),new j(b,_)}for(b=p;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(E),w=S.j(_);x(w)||0<w.l(I);)E-=A,S=h(E),w=S.j(_);P(S)&&(S=g),b=b.add(S),I=K(I,w)}return new j(b,I)}e.A=function(I){return q(this,I).h},e.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)&I.i(A);return new a(E,this.h&I.h)},e.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)|I.i(A);return new a(E,this.h|I.h)},e.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)^I.i(A);return new a(E,this.h^I.h)};function ct(I){for(var _=I.g.length+1,E=[],A=0;A<_;A++)E[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(E,I.h)}function lt(I,_){var E=_>>5;_%=32;for(var A=I.g.length-E,b=[],S=0;S<A;S++)b[S]=0<_?I.i(S+E)>>>_|I.i(S+E+1)<<32-_:I.i(S+E);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Vn=a}).apply(typeof dh<"u"?dh:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vp,ls,Ep,Ri,La,Tp,wp,Ip;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in f))break t;f=f[C]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,C={next:function(){if(!m&&f<o.length){var V=f++;return{value:u(V,o[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,C,V){for(var z=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)z[bt-2]=arguments[bt];return u.prototype[C].apply(m,z)}}function x(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=o.length||0,V=m.length||0;o.length=C+V;for(let z=0;z<V;z++)o[C+z]=m[z]}else o.push(m)}}class K{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var ct=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function lt(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)o[f]=m[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Ee;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ue{constructor(){this.h=this.g=null}add(u,f){const m=be.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var be=new K(()=>new Bt,o=>o.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,dt=!1,Ee=new ue,Ne=()=>{const o=l.Promise.resolve(void 0);pt=()=>{o.then(Re)}};var Re=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){S(f)}var u=be;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}dt=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Be(o,u){if(xt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ct){t:{try{q(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:me[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Be.aa.h.call(this)}}P(Be,xt);var me={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,f,m,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Et(o){this.src=o,this.g={},this.h=0}Et.prototype.add=function(o,u,f,m,C){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var z=T(o,u,m,C);return-1<z?(u=o[z],f||(u.fa=!1)):(u=new Q(u,this.src,V,!!m,C),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var m=o.g[f],C=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(m,C,1),V&&(J(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function T(o,u,f,m){for(var C=0;C<o.length;++C){var V=o[C];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==m)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function M(o,u,f,m,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)M(o,u[V],f,m,C);return null}return f=st(f),o&&o[D]?o.K(u,f,h(m)?!!m.capture:!1,C):O(o,u,f,!1,m,C)}function O(o,u,f,m,C,V){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,bt=G(o);if(bt||(o[R]=bt=new Et(o)),f=bt.add(u,f,m,z,V),f.proxy)return f;if(m=W(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)dn||(C=z),C===void 0&&(C=!1),o.addEventListener(u.toString(),m,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=et;return o}function H(o,u,f,m,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)H(o,u[V],f,m,C);else m=h(m)?!!m.capture:!!m,f=st(f),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],f=T(V,f,m,C),-1<f&&(J(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,f,m,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])v(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(F(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=G(u))?(v(f,o),f.h==0&&(f.src=null,u[R]=null)):J(o)}}}function F(o){return o in N?N[o]:N[o]="on"+o}function et(o,u){if(o.da)o=!0;else{u=new Be(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&$(o),o=f.call(m,u)}return o}function G(o){return o=o[R],o instanceof Et?o:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function st(o){return typeof o=="function"?o:(o[tt]||(o[tt]=function(u){return o.handleEvent(u)}),o[tt])}function nt(){Vt.call(this),this.i=new Et(this),this.M=this,this.F=null}P(nt,Vt),nt.prototype[D]=!0,nt.prototype.removeEventListener=function(o,u,f,m){H(this,o,u,f,m)};function ut(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new xt(u,o);else if(u instanceof xt)u.target=u.target||o;else{var C=u;u=new xt(m,o),A(u,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var z=u.g=f[V];C=gt(z,m,!0,u)&&C}if(z=u.g=o,C=gt(z,m,!0,u)&&C,C=gt(z,m,!1,u)&&C,f)for(V=0;V<f.length;V++)z=u.g=f[V],C=gt(z,m,!1,u)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)J(f[m]);delete o.g[u],o.h--}}this.F=null},nt.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},nt.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function gt(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==f){var bt=z.listener,Wt=z.ha||z.src;z.fa&&v(o.i,z),C=bt.call(Wt,m)!==!1&&C}}return C&&!m.defaultPrevented}function Jt(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Kt(o){o.g=Jt(()=>{o.g=null,o.i&&(o.i=!1,Kt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Se extends Vt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Kt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(o){Vt.call(this),this.h=o,this.g={}}P(Zt,Vt);var pn=[];function zr(o){lt(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),zr(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gt=l.JSON.stringify,Ce=l.JSON.parse,Ks=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Po(){}Po.prototype.h=null;function fc(o){return o.h||(o.h=o.i())}function dc(){}var Kr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vo(){xt.call(this,"d")}P(Vo,xt);function xo(){xt.call(this,"c")}P(xo,xt);var jn={},pc=null;function Gs(){return pc=pc||new nt}jn.La="serverreachability";function gc(o){xt.call(this,jn.La,o)}P(gc,xt);function Gr(o){const u=Gs();ut(u,new gc(u))}jn.STAT_EVENT="statevent";function mc(o,u){xt.call(this,jn.STAT_EVENT,o),this.stat=u}P(mc,xt);function he(o){const u=Gs();ut(u,new mc(u,o))}jn.Ma="timingevent";function _c(o,u){xt.call(this,jn.Ma,o),this.size=u}P(_c,xt);function Wr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Qr(){this.g=!0}Qr.prototype.xa=function(){this.g=!1};function om(o,u,f,m,C,V){o.info(function(){if(o.g)if(V)for(var z="",bt=V.split("&"),Wt=0;Wt<bt.length;Wt++){var Tt=bt[Wt].split("=");if(1<Tt.length){var te=Tt[0];Tt=Tt[1];var ee=te.split("_");z=2<=ee.length&&ee[1]=="type"?z+(te+"="+Tt+"&"):z+(te+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+z})}function am(o,u,f,m,C,V,z){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+V+" "+z})}function ar(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+cm(o,f)+(m?" "+m:"")})}function lm(o,u){o.info(function(){return"TIMEOUT: "+u})}Qr.prototype.info=function(){};function cm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Gt(f)}catch{return u}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Do;function Qs(){}P(Qs,Po),Qs.prototype.g=function(){return new XMLHttpRequest},Qs.prototype.i=function(){return{}},Do=new Qs;function gn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vc}function vc(){this.i=null,this.g="",this.h=!1}var Ec={},No={};function Oo(o,u,f){o.L=1,o.v=Zs(Xe(u)),o.m=f,o.P=!0,Tc(o,null)}function Tc(o,u){o.F=Date.now(),Ys(o),o.A=Xe(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),kc(f.i,"t",m),o.C=0,f=o.j.J,o.h=new vc,o.g=Zc(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Se(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(pn[0]=C.toString()),C=pn);for(var V=0;V<C.length;V++){var z=M(f,C[V],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Gr(),om(o.i,o.u,o.A,o.l,o.R,o.m)}gn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Je(o)==3?u.j():this.Y(o)},gn.prototype.Y=function(o){try{if(o==this.g)t:{const ee=Je(this.g);var u=this.g.Ba();const ur=this.g.Z();if(!(3>ee)&&(ee!=3||this.g&&(this.h.h||this.g.oa()||jc(this.g)))){this.J||ee!=4||u==7||(u==8||0>=ur?Gr(3):Gr(2)),ko(this);var f=this.g.Z();this.X=f;e:if(wc(this)){var m=jc(this.g);o="";var C=m.length,V=Je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),Yr(this);var z="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(V&&u==C-1)});m.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,am(this.i,this.u,this.A,this.l,this.R,ee,f),this.o){if(this.T&&!this.K){e:{if(this.g){var bt,Wt=this.g;if((bt=Wt.g?Wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(bt)){var Tt=bt;break e}}Tt=null}if(f=Tt)ar(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mo(this,f);else{this.o=!1,this.s=3,he(12),qn(this),Yr(this);break t}}if(this.P){f=!0;let Oe;for(;!this.J&&this.C<z.length;)if(Oe=um(this,z),Oe==No){ee==4&&(this.s=4,he(14),f=!1),ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Ec){this.s=4,he(15),ar(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ar(this.i,this.l,Oe,null),Mo(this,Oe);if(wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||z.length!=0||this.h.h||(this.s=1,he(16),f=!1),this.o=this.o&&f,!f)ar(this.i,this.l,z,"[Invalid Chunked Response]"),qn(this),Yr(this);else if(0<z.length&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.ba&&!te.M&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),jo(te),te.M=!0,he(11))}}else ar(this.i,this.l,z,null),Mo(this,z);ee==4&&qn(this),this.o&&!this.J&&(ee==4?Qc(this.j,this):(this.o=!1,Ys(this)))}else Sm(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,he(12)):(this.s=0,he(13)),qn(this),Yr(this)}}}catch{}finally{}};function wc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function um(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?No:(f=Number(u.substring(f,m)),isNaN(f)?Ec:(m+=1,m+f>u.length?No:(u=u.slice(m,m+f),o.C=m+f,u)))}gn.prototype.cancel=function(){this.J=!0,qn(this)};function Ys(o){o.S=Date.now()+o.I,Ic(o,o.I)}function Ic(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wr(g(o.ba,o),u)}function ko(o){o.B&&(l.clearTimeout(o.B),o.B=null)}gn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lm(this.i,this.A),this.L!=2&&(Gr(),he(17)),qn(this),this.s=2,Yr(this)):Ic(this,this.S-o)};function Yr(o){o.j.G==0||o.J||Qc(o.j,o)}function qn(o){ko(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,zr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Mo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Lo(f.h,o))){if(!o.K&&Lo(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ii(f),ri(f);else break t;$o(f),he(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(g(f.Za,f),6e3));if(1>=Rc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else zn(f,11)}else if((o.K||f.g==o)&&ii(f),!U(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Tt=C[u];if(f.T=Tt[0],Tt=Tt[1],f.G==2)if(Tt[0]=="c"){f.K=Tt[1],f.ia=Tt[2];const te=Tt[3];te!=null&&(f.la=te,f.j.info("VER="+f.la));const ee=Tt[4];ee!=null&&(f.Aa=ee,f.j.info("SVER="+f.Aa));const ur=Tt[5];ur!=null&&typeof ur=="number"&&0<ur&&(m=1.5*ur,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Oe=o.g;if(Oe){const ai=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var V=m.h;V.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fo(V,V.h),V.h=null))}if(m.D){const qo=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(m.ya=qo,Ct(m.I,m.D,qo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=o;if(m.qa=Jc(m,m.J?m.ia:null,m.W),z.K){Sc(m.h,z);var bt=z,Wt=m.L;Wt&&(bt.I=Wt),bt.B&&(ko(bt),Ys(bt)),m.g=z}else Gc(m);0<f.i.length&&si(f)}else Tt[0]!="stop"&&Tt[0]!="close"||zn(f,7);else f.G==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?zn(f,7):Bo(f):Tt[0]!="noop"&&f.l&&f.l.ta(Tt),f.v=0)}}Gr(4)}catch{}}var hm=class{constructor(o,u){this.g=o,this.map=u}};function Ac(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rc(o){return o.h?1:o.g?o.g.size:0}function Lo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Fo(o,u){o.g?o.g.add(u):o.h=u}function Sc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ac.prototype.cancel=function(){if(this.i=Cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Cc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return x(o.i)}function fm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function dm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Pc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=dm(o),m=fm(o),C=m.length,V=0;V<C;V++)u.call(void 0,m[V],f&&f[V],o)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),C=null;if(0<=m){var V=o[f].substring(0,m);C=o[f].substring(m+1)}else V=o[f];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,Xs(this,o.j),this.o=o.o,this.g=o.g,Js(this,o.s),this.l=o.l;var u=o.i,f=new Zr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),xc(this,f),this.m=o.m}else o&&(u=String(o).match(Vc))?(this.h=!1,Xs(this,u[1]||"",!0),this.o=Xr(u[2]||""),this.g=Xr(u[3]||"",!0),Js(this,u[4]),this.l=Xr(u[5]||"",!0),xc(this,u[6]||"",!0),this.m=Xr(u[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Jr(u,Dc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Jr(u,Dc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Jr(f,f.charAt(0)=="/"?_m:mm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Jr(f,vm)),o.join("")};function Xe(o){return new Hn(o)}function Xs(o,u,f){o.j=f?Xr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Js(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function xc(o,u,f){u instanceof Zr?(o.i=u,Em(o.i,o.h)):(f||(u=Jr(u,ym)),o.i=new Zr(u,o.h))}function Ct(o,u,f){o.i.set(u,f)}function Zs(o){return Ct(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Xr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,gm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Dc=/[#\/\?@]/g,mm=/[#\?:]/g,_m=/[#\?]/g,ym=/[#\?@]/g,vm=/#/g;function Zr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function mn(o){o.g||(o.g=new Map,o.h=0,o.i&&pm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=Zr.prototype,e.add=function(o,u){mn(this),this.i=null,o=lr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Nc(o,u){mn(o),u=lr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Oc(o,u){return mn(o),u=lr(o,u),o.g.has(u)}e.forEach=function(o,u){mn(this),this.g.forEach(function(f,m){f.forEach(function(C){o.call(u,C,m,this)},this)},this)},e.na=function(){mn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=o[m];for(let V=0;V<C.length;V++)f.push(u[m])}return f},e.V=function(o){mn(this);let u=[];if(typeof o=="string")Oc(this,o)&&(u=u.concat(this.g.get(lr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return mn(this),this.i=null,o=lr(this,o),Oc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function kc(o,u,f){Nc(o,u),0<f.length&&(o.i=null,o.g.set(lr(o,u),x(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const V=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var C=V;z[m]!==""&&(C+="="+encodeURIComponent(String(z[m]))),o.push(C)}}return this.i=o.join("&")};function lr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Em(o,u){u&&!o.j&&(mn(o),o.i=null,o.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(Nc(this,m),kc(this,C,f))},o)),o.j=u}function Tm(o,u){const f=new Qr;if(l.Image){const m=new Image;m.onload=y(_n,f,"TestLoadImage: loaded",!0,u,m),m.onerror=y(_n,f,"TestLoadImage: error",!1,u,m),m.onabort=y(_n,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(_n,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function wm(o,u){const f=new Qr,m=new AbortController,C=setTimeout(()=>{m.abort(),_n(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(V=>{clearTimeout(C),V.ok?_n(f,"TestPingServer: ok",!0,u):_n(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),_n(f,"TestPingServer: error",!1,u)})}function _n(o,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Im(){this.g=new Ks}function Am(o,u,f){const m=f||"";try{Pc(o,function(C,V){let z=C;h(C)&&(z=Gt(C)),u.push(m+V+"="+encodeURIComponent(z))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function ti(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ti,Po),ti.prototype.g=function(){return new ei(this.l,this.j)},ti.prototype.i=function(o){return function(){return o}}({});function ei(o,u){nt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ei,nt),e=ei.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,es(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ts(this):es(this),this.readyState==3&&Mc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,ts(this))},e.Qa=function(o){this.g&&(this.response=o,ts(this))},e.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.v=null,es(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Lc(o){let u="";return lt(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Uo(o,u,f){t:{for(m in f){var m=!1;break t}m=!0}m||(f=Lc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ct(o,u,f))}function Ot(o){nt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ot,nt);var bm=/^https?$/i,Rm=["POST","PUT"];e=Ot.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Do.g(),this.v=this.o?fc(this.o):fc(Do),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Fc(this,V);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rm,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$c(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Fc(this,V)}};function Fc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Uc(o),ni(o)}function Uc(o){o.A||(o.A=!0,ut(o,"complete"),ut(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ut(this,"complete"),ut(this,"abort"),ni(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),Ot.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Bc(this):this.bb())},e.bb=function(){Bc(this)};function Bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Je(o)!=4||o.Z()!=2)){if(o.u&&Je(o)==4)Jt(o.Ea,0,o);else if(ut(o,"readystatechange"),Je(o)==4){o.h=!1;try{const z=o.Z();t:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var m;if(m=z===0){var C=String(o.D).match(Vc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!bm.test(C?C.toLowerCase():"")}f=m}if(f)ut(o,"complete"),ut(o,"success");else{o.m=6;try{var V=2<Je(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Uc(o)}}finally{ni(o)}}}}function ni(o,u){if(o.g){$c(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ut(o,"ready");try{f.onreadystatechange=m}catch{}}}function $c(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Je(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ce(u)}};function jc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(o){const u={};o=(o.g&&2<=Je(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var f=b(o[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[C]||[];u[C]=V,V.push(f)}I(u,function(m){return m.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function qc(o){this.Aa=0,this.i=[],this.j=new Qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ns("baseRetryDelayMs",5e3,o),this.cb=ns("retryDelaySeedMs",1e4,o),this.Wa=ns("forwardChannelMaxRetries",2,o),this.wa=ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ac(o&&o.concurrentRequestLimit),this.Da=new Im,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=qc.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,m){he(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Jc(this,null,this.W),si(this)};function Bo(o){if(Hc(o),o.G==3){var u=o.U++,f=Xe(o.I);if(Ct(f,"SID",o.K),Ct(f,"RID",u),Ct(f,"TYPE","terminate"),rs(o,f),u=new gn(o,o.j,u),u.L=2,u.v=Zs(Xe(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Zc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ys(u)}Xc(o)}function ri(o){o.g&&(jo(o),o.g.cancel(),o.g=null)}function Hc(o){ri(o),o.u&&(l.clearTimeout(o.u),o.u=null),ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function si(o){if(!bc(o.h)&&!o.s){o.s=!0;var u=o.Ga;pt||Ne(),dt||(pt(),dt=!0),Ee.add(u,o),o.B=0}}function Cm(o,u){return Rc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wr(g(o.Ga,o,u),Yc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new gn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=_(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Kc(this,C,u),f=Xe(this.I),Ct(f,"RID",o),Ct(f,"CVER",22),this.D&&Ct(f,"X-HTTP-Session-Id",this.D),rs(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(Lc(V)))+"&"+u:this.m&&Uo(f,this.m,V)),Fo(this.h,C),this.Ua&&Ct(f,"TYPE","init"),this.P?(Ct(f,"$req",u),Ct(f,"SID","null"),C.T=!0,Oo(C,f,null)):Oo(C,f,u),this.G=2}}else this.G==3&&(o?zc(this,o):this.i.length==0||bc(this.h)||zc(this))};function zc(o,u){var f;u?f=u.l:f=o.U++;const m=Xe(o.I);Ct(m,"SID",o.K),Ct(m,"RID",f),Ct(m,"AID",o.T),rs(o,m),o.m&&o.o&&Uo(m,o.m,o.o),f=new gn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Kc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fo(o.h,f),Oo(f,m,u)}function rs(o,u){o.H&&lt(o.H,function(f,m){Ct(u,m,f)}),o.l&&Pc({},function(f,m){Ct(u,m,f)})}function Kc(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;t:{var C=o.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=C[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let bt=!0;for(let Wt=0;Wt<f;Wt++){let Tt=C[Wt].g;const te=C[Wt].map;if(Tt-=V,0>Tt)V=Math.max(0,C[Wt].g-100),bt=!1;else try{Am(te,z,"req"+Tt+"_")}catch{m&&m(te)}}if(bt){m=z.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,m}function Gc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pt||Ne(),dt||(pt(),dt=!0),Ee.add(u,o),o.v=0}}function $o(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wr(g(o.Fa,o),Yc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wr(g(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,he(10),ri(this),Wc(this))};function jo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Wc(o){o.g=new gn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Xe(o.qa);Ct(u,"RID","rpc"),Ct(u,"SID",o.K),Ct(u,"AID",o.T),Ct(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ct(u,"TO",o.ja),Ct(u,"TYPE","xmlhttp"),rs(o,u),o.m&&o.o&&Uo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Zs(Xe(u)),f.m=null,f.P=!0,Tc(f,o)}e.Za=function(){this.C!=null&&(this.C=null,ri(this),$o(this),he(19))};function ii(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Qc(o,u){var f=null;if(o.g==u){ii(o),jo(o),o.g=null;var m=2}else if(Lo(o.h,u))f=u.D,Sc(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;m=Gs(),ut(m,new _c(m,f)),si(o)}else Gc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&Cm(o,u)||m==2&&$o(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:zn(o,5);break;case 4:zn(o,10);break;case 3:zn(o,6);break;default:zn(o,2)}}}function Yc(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function zn(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const C=!m;m=new Hn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xs(m,"https"),Zs(m),C?Tm(m.toString(),f):wm(m.toString(),f)}else he(2);o.G=0,o.l&&o.l.sa(u),Xc(o),Hc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function Xc(o){if(o.G=0,o.ka=[],o.l){const u=Cc(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Jc(o,u,f){var m=f instanceof Hn?Xe(f):new Hn(f);if(m.g!="")u&&(m.g=u+"."+m.g),Js(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new Hn(null);m&&Xs(V,m),u&&(V.g=u),C&&Js(V,C),f&&(V.l=f),m=V}return f=o.D,u=o.ya,f&&u&&Ct(m,f,u),Ct(m,"VER",o.la),rs(o,m),m}function Zc(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ot(new ti({eb:f})):new Ot(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function tu(){}e=tu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function oi(){}oi.prototype.g=function(o,u){return new Te(o,u)};function Te(o,u){nt.call(this),this.g=new qc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new cr(this)}P(Te,nt),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){Bo(this.g)},Te.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Gt(o),o=f);u.i.push(new hm(u.Ya++,o)),u.G==3&&si(u)},Te.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,Te.aa.N.call(this)};function eu(o){Vo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(eu,Vo);function nu(){xo.call(this),this.status=1}P(nu,xo);function cr(o){this.g=o}P(cr,tu),cr.prototype.ua=function(){ut(this.g,"a")},cr.prototype.ta=function(o){ut(this.g,new eu(o))},cr.prototype.sa=function(o){ut(this.g,new nu)},cr.prototype.ra=function(){ut(this.g,"b")},oi.prototype.createWebChannel=oi.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,Ip=function(){return new oi},wp=function(){return Gs()},Tp=jn,La={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,Ri=Ws,yc.COMPLETE="complete",Ep=yc,dc.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",nt.prototype.listen=nt.prototype.K,ls=dc,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha,vp=Ot}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const ph="@firebase/firestore",gh="4.7.17";/**
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
 */class re{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
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
 */let Br="11.9.0";/**
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
 */const nr=new Pl("@firebase/firestore");function gr(){return nr.logLevel}function X(e,...t){if(nr.logLevel<=_t.DEBUG){const n=t.map(xl);nr.debug(`Firestore (${Br}): ${e}`,...n)}}function un(e,...t){if(nr.logLevel<=_t.ERROR){const n=t.map(xl);nr.error(`Firestore (${Br}): ${e}`,...n)}}function Dr(e,...t){if(nr.logLevel<=_t.WARN){const n=t.map(xl);nr.warn(`Firestore (${Br}): ${e}`,...n)}}function xl(e){if(typeof e=="string")return e;try{/**
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
 */function at(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,Ap(e,r,n)}function Ap(e,t,n){let r=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw un(r),new Error(r)}function Nt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||Ap(t,s,r)}function yt(e,t){return e}/**
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
 */class bp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(re.UNAUTHENTICATED))}shutdown(){}}class gw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mw{constructor(t){this.t=t,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Nt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Nt(typeof r.accessToken=="string",31837,{l:r}),new bp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Nt(t===null||typeof t=="string",2055,{h:t}),new re(t)}}class _w{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yw{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new _w(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,JT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Nt(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Nt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new mh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ew(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Rp(){return new TextEncoder}/**
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
 */class Tw{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ew(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ft(e,t){return e<t?-1:e>t?1:0}function Fa(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return ft(r,s);{const i=Rp(),a=ww(i.encode(_h(e,n)),i.encode(_h(t,n)));return a!==0?a:ft(r,s)}}n+=r>65535?2:1}return ft(e.length,t.length)}function _h(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function ww(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ft(e[n],t[n]);return ft(e.length,t.length)}function Nr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const yh=-62135596800,vh=1e6;class zt{static now(){return zt.fromMillis(Date.now())}static fromDate(t){return zt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*vh);return new zt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<yh)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vh}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-yh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new zt(0,0))}static max(){return new ot(new zt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Eh="__name__";class qe{constructor(t,n,r){n===void 0?n=0:n>t.length&&at(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&at(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof qe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=qe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ft(t.length,n.length)}static compareSegments(t,n){const r=qe.isNumericId(t),s=qe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?qe.extractNumericId(t).compare(qe.extractNumericId(n)):Fa(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Vn.fromString(t.substring(4,t.length-2))}}class Dt extends qe{construct(t,n,r){return new Dt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Dt(n)}static emptyPath(){return new Dt([])}}const Iw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends qe{construct(t,n,r){return new ae(t,n,r)}static isValidIdentifier(t){return Iw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eh}static keyField(){return new ae([Eh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ae(n)}static emptyPath(){return new ae([])}}/**
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
 */class rt{constructor(t){this.path=t}static fromPath(t){return new rt(Dt.fromString(t))}static fromName(t){return new rt(Dt.fromString(t).popFirst(5))}static empty(){return new rt(Dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Dt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rt(new Dt(t.slice()))}}/**
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
 */const ks=-1;function Aw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new zt(n+1,0):new zt(n,r));return new On(s,rt.empty(),t)}function bw(e){return new On(e.readTime,e.key,ks)}class On{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new On(ot.min(),rt.empty(),ks)}static max(){return new On(ot.max(),rt.empty(),ks)}}function Rw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=rt.comparator(e.documentKey,t.documentKey),n!==0?n:ft(e.largestBatchId,t.largestBatchId))}/**
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
 */const Sw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function po(e){if(e.code!==B.FAILED_PRECONDITION||e.message!==Sw)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&at(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new k((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new k((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Pw(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $r(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class go{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}go.le=-1;/**
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
 */const Vw=-1;function mo(e){return e==null}function $i(e){return e===0&&1/e==-1/0}function xw(e){return typeof e=="number"&&Number.isInteger(e)&&!$i(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sp="";function Dw(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Th(t)),t=Nw(e.get(n),t);return Th(t)}function Nw(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Sp:n+="";break;default:n+=i}}return n}function Th(e){return e+Sp+""}/**
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
 */function wh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Cp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ut{constructor(t,n){this.comparator=t,this.root=n||Qt.EMPTY}insert(t,n){return new Ut(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(t){return new Ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new di(this.root,t,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new di(this.root,t,this.comparator,!0)}}class di{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Qt.RED,this.left=s??Qt.EMPTY,this.right=i??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Qt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Qt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw at(43730,{key:this.key,value:this.value});if(this.right.isRed())throw at(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw at(27949);return t+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw at(57766)}get value(){throw at(16141)}get color(){throw at(16727)}get left(){throw at(29726)}get right(){throw at(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Qt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(t){this.comparator=t,this.data=new Ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(t){return new Ih(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new qt(this.comparator);return n.data=t,n}}class Ih{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(t){this.fields=t,t.sort(ae.comparator)}static empty(){return new In([])}unionWith(t){let n=new qt(ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new In(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Nr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pp("Invalid base64 string: "+i):i}}(t);return new Xt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Xt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const Ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(e){if(Nt(!!e,39018),typeof e=="string"){let t=0;const n=Ow.exec(e);if(Nt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ft(e.seconds),nanos:Ft(e.nanos)}}function Ft(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mn(e){return typeof e=="string"?Xt.fromBase64String(e):Xt.fromUint8Array(e)}/**
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
 */const Vp="server_timestamp",xp="__type__",Dp="__previous_value__",Np="__local_write_time__";function Dl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[xp])===null||n===void 0?void 0:n.stringValue)===Vp}function _o(e){const t=e.mapValue.fields[Dp];return Dl(t)?_o(t):t}function Ms(e){const t=kn(e.mapValue.fields[Np].timestampValue);return new zt(t.seconds,t.nanos)}/**
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
 */class kw{constructor(t,n,r,s,i,a,l,c,h,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const ji="(default)";class Ls{constructor(t,n){this.projectId=t,this.database=n||ji}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database===ji}isEqual(t){return t instanceof Ls&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Op="__type__",Mw="__max__",pi={mapValue:{}},kp="__vector__",qi="value";function Ln(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Dl(e)?4:Fw(e)?9007199254740991:Lw(e)?10:11:at(28295,{value:e})}function Ye(e,t){if(e===t)return!0;const n=Ln(e);if(n!==Ln(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ms(e).isEqual(Ms(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=kn(s.timestampValue),l=kn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ft(s.geoPointValue.latitude)===Ft(i.geoPointValue.latitude)&&Ft(s.geoPointValue.longitude)===Ft(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ft(s.integerValue)===Ft(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ft(s.doubleValue),l=Ft(i.doubleValue);return a===l?$i(a)===$i(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Nr(e.arrayValue.values||[],t.arrayValue.values||[],Ye);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wh(a)!==wh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ye(a[c],l[c])))return!1;return!0}(e,t);default:return at(52216,{left:e})}}function Fs(e,t){return(e.values||[]).find(n=>Ye(n,t))!==void 0}function Or(e,t){if(e===t)return 0;const n=Ln(e),r=Ln(t);if(n!==r)return ft(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ft(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Ft(i.integerValue||i.doubleValue),c=Ft(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Ah(e.timestampValue,t.timestampValue);case 4:return Ah(Ms(e),Ms(t));case 5:return Fa(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Mn(i),c=Mn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ft(l[h],c[h]);if(d!==0)return d}return ft(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ft(Ft(i.latitude),Ft(a.latitude));return l!==0?l:ft(Ft(i.longitude),Ft(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return bh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},g=a.fields||{},y=(l=p[qi])===null||l===void 0?void 0:l.arrayValue,P=(c=g[qi])===null||c===void 0?void 0:c.arrayValue,x=ft(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:bh(y,P)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===pi.mapValue&&a===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Fa(c[p],d[p]);if(g!==0)return g;const y=Or(l[c[p]],h[d[p]]);if(y!==0)return y}return ft(c.length,d.length)}(e.mapValue,t.mapValue);default:throw at(23264,{Pe:n})}}function Ah(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ft(e,t);const n=kn(e),r=kn(t),s=ft(n.seconds,r.seconds);return s!==0?s:ft(n.nanos,r.nanos)}function bh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Or(n[s],r[s]);if(i)return i}return ft(n.length,r.length)}function kr(e){return Ua(e)}function Ua(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=kn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return rt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ua(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ua(n.fields[a])}`;return s+"}"}(e.mapValue):at(61005,{value:e})}function Si(e){switch(Ln(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_o(e);return t?16+Si(t):16;case 5:return 2*e.stringValue.length;case 6:return Mn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Si(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return jr(r.fields,(i,a)=>{s+=i.length+Si(a)}),s}(e.mapValue);default:throw at(13486,{value:e})}}function Rh(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ba(e){return!!e&&"integerValue"in e}function Nl(e){return!!e&&"arrayValue"in e}function Sh(e){return!!e&&"nullValue"in e}function Ch(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function la(e){return!!e&&"mapValue"in e}function Lw(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[Op])===null||n===void 0?void 0:n.stringValue)===kp}function Ts(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ts(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ts(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fw(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Mw}/**
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
 */class ze{constructor(t){this.value=t}static empty(){return new ze({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ts(n)}setAll(t){let n=ae.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ts(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ye(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){jr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ze(Ts(this.value))}}/**
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
 */class ie{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ie(t,0,ot.min(),ot.min(),ot.min(),ze.empty(),0)}static newFoundDocument(t,n,r,s){return new ie(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new ie(t,2,n,ot.min(),ot.min(),ze.empty(),0)}static newUnknownDocument(t,n){return new ie(t,3,n,ot.min(),ot.min(),ze.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ie&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hi{constructor(t,n){this.position=t,this.inclusive=n}}function Ph(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=rt.comparator(rt.fromName(a.referenceValue),n.key):r=Or(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ye(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class zi{constructor(t,n="asc"){this.field=t,this.dir=n}}function Uw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Mp{}class jt extends Mp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new $w(t,n,r):n==="array-contains"?new Hw(t,r):n==="in"?new zw(t,r):n==="not-in"?new Kw(t,r):n==="array-contains-any"?new Gw(t,r):new jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new jw(t,r):new qw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Or(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return at(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ue extends Mp{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Ue(t,n)}matches(t){return Lp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Lp(e){return e.op==="and"}function Fp(e){return Bw(e)&&Lp(e)}function Bw(e){for(const t of e.filters)if(t instanceof Ue)return!1;return!0}function $a(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+kr(e.value);if(Fp(e))return e.filters.map(t=>$a(t)).join(",");{const t=e.filters.map(n=>$a(n)).join(",");return`${e.op}(${t})`}}function Up(e,t){return e instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.field.isEqual(s.field)&&Ye(r.value,s.value)}(e,t):e instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Up(a,s.filters[l]),!0):!1}(e,t):void at(19439)}function Bp(e){return e instanceof jt?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(e):e instanceof Ue?function(n){return n.op.toString()+" {"+n.getFilters().map(Bp).join(" ,")+"}"}(e):"Filter"}class $w extends jt{constructor(t,n,r){super(t,n,r),this.key=rt.fromName(r.referenceValue)}matches(t){const n=rt.comparator(t.key,this.key);return this.matchesComparison(n)}}class jw extends jt{constructor(t,n){super(t,"in",n),this.keys=$p("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class qw extends jt{constructor(t,n){super(t,"not-in",n),this.keys=$p("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function $p(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>rt.fromName(r.referenceValue))}class Hw extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Nl(n)&&Fs(n.arrayValue,this.value)}}class zw extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class Kw extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Fs(this.value.arrayValue,n)}}class Gw extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Nl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
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
 */class Ww{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function xh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new Ww(e,t,n,r,s,i,a)}function Ol(e){const t=yt(e);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$a(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kr(r)).join(",")),t.Ie=n}return t.Ie}function kl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Uw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Up(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vh(e.startAt,t.startAt)&&Vh(e.endAt,t.endAt)}function ja(e){return rt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class js{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Qw(e,t,n,r,s,i,a,l){return new js(e,t,n,r,s,i,a,l)}function jp(e){return new js(e)}function Dh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qp(e){return e.collectionGroup!==null}function ws(e){const t=yt(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qt(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new zi(i,r))}),n.has(ae.keyField().canonicalString())||t.Ee.push(new zi(ae.keyField(),r))}return t.Ee}function We(e){const t=yt(e);return t.de||(t.de=Yw(t,ws(e))),t.de}function Yw(e,t){if(e.limitType==="F")return xh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const n=e.endAt?new Hi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Hi(e.startAt.position,e.startAt.inclusive):null;return xh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function qa(e,t){const n=e.filters.concat([t]);return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ha(e,t,n){return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yo(e,t){return kl(We(e),We(t))&&e.limitType===t.limitType}function Hp(e){return`${Ol(We(e))}|lt:${e.limitType}`}function mr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Bp(s)).join(", ")}]`),mo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>kr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>kr(s)).join(",")),`Target(${r})`}(We(e))}; limitType=${e.limitType})`}function vo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):rt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Ph(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ws(r),s)||r.endAt&&!function(a,l,c){const h=Ph(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ws(r),s))}(e,t)}function Xw(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function zp(e){return(t,n)=>{let r=!1;for(const s of ws(e)){const i=Jw(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jw(e,t,n){const r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Or(c,h):at(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return at(19790,{direction:e.dir})}}/**
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
 */class or{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){jr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Cp(this.inner)}size(){return this.innerSize}}/**
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
 */const Zw=new Ut(rt.comparator);function Fn(){return Zw}const Kp=new Ut(rt.comparator);function cs(...e){let t=Kp;for(const n of e)t=t.insert(n.key,n);return t}function tI(e){let t=Kp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Yn(){return Is()}function Gp(){return Is()}function Is(){return new or(e=>e.toString(),(e,t)=>e.isEqual(t))}const eI=new qt(rt.comparator);function vt(...e){let t=eI;for(const n of e)t=t.add(n);return t}const nI=new qt(ft);function rI(){return nI}/**
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
 */function Ml(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(t)?"-0":t}}function Wp(e){return{integerValue:""+e}}function sI(e,t){return xw(t)?Wp(t):Ml(e,t)}/**
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
 */class Eo{constructor(){this._=void 0}}function iI(e,t,n){return e instanceof za?function(s,i){const a={fields:{[xp]:{stringValue:Vp},[Np]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dl(i)&&(i=_o(i)),i&&(a.fields[Dp]=i),{mapValue:a}}(n,t):e instanceof Ki?Qp(e,t):e instanceof Gi?Yp(e,t):function(s,i){const a=aI(s,i),l=Nh(a)+Nh(s.Re);return Ba(a)&&Ba(s.Re)?Wp(l):Ml(s.serializer,l)}(e,t)}function oI(e,t,n){return e instanceof Ki?Qp(e,t):e instanceof Gi?Yp(e,t):n}function aI(e,t){return e instanceof Ka?function(r){return Ba(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class za extends Eo{}class Ki extends Eo{constructor(t){super(),this.elements=t}}function Qp(e,t){const n=Xp(t);for(const r of e.elements)n.some(s=>Ye(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends Eo{constructor(t){super(),this.elements=t}}function Yp(e,t){let n=Xp(t);for(const r of e.elements)n=n.filter(s=>!Ye(s,r));return{arrayValue:{values:n}}}class Ka extends Eo{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Nh(e){return Ft(e.integerValue||e.doubleValue)}function Xp(e){return Nl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function lI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Gi&&s instanceof Gi?Nr(r.elements,s.elements,Ye):r instanceof Ka&&s instanceof Ka?Ye(r.Re,s.Re):r instanceof za&&s instanceof za}(e.transform,t.transform)}class er{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new er}static exists(t){return new er(void 0,t)}static updateTime(t){return new er(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ci(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ll{}function Jp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new uI(e.key,er.none()):new Fl(e.key,e.data,er.none());{const n=e.data,r=ze.empty();let s=new qt(ae.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new To(e.key,r,new In(s.toArray()),er.none())}}function cI(e,t,n){e instanceof Fl?function(s,i,a){const l=s.value.clone(),c=kh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof To?function(s,i,a){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=kh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Zp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function As(e,t,n,r){return e instanceof Fl?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const h=i.value.clone(),d=Mh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof To?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const h=Mh(i.fieldTransforms,c,a),d=a.data;return d.setAll(Zp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Ci(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Oh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Nr(r,s,(i,a)=>lI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Fl extends Ll{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class To extends Ll{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function kh(e,t,n){const r=new Map;Nt(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,oI(a,l,n[s]))}return r}function Mh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,iI(i,a,t))}return r}class uI extends Ll{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&cI(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=As(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=As(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Gp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Jp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),vt())}isEqual(t){return this.batchId===t.batchId&&Nr(this.mutations,t.mutations,(n,r)=>Oh(n,r))&&Nr(this.baseMutations,t.baseMutations,(n,r)=>Oh(n,r))}}/**
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
 */class fI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class dI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var $t,mt;function tg(e){if(e===void 0)return un("GRPC error has no .code"),B.UNKNOWN;switch(e){case $t.OK:return B.OK;case $t.CANCELLED:return B.CANCELLED;case $t.UNKNOWN:return B.UNKNOWN;case $t.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case $t.INTERNAL:return B.INTERNAL;case $t.UNAVAILABLE:return B.UNAVAILABLE;case $t.UNAUTHENTICATED:return B.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case $t.NOT_FOUND:return B.NOT_FOUND;case $t.ALREADY_EXISTS:return B.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return B.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case $t.ABORTED:return B.ABORTED;case $t.OUT_OF_RANGE:return B.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return B.UNIMPLEMENTED;case $t.DATA_LOSS:return B.DATA_LOSS;default:return at(39323,{code:e})}}(mt=$t||($t={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const pI=new Vn([4294967295,4294967295],0);function Lh(e){const t=Rp().encode(e),n=new yp;return n.update(t),new Uint8Array(n.digest())}function Fh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Vn([n,r],0),new Vn([s,i],0)]}class Ul{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new us(`Invalid padding: ${n}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new us(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Vn.fromNumber(this.pe)}we(t,n,r){let s=t.add(n.multiply(Vn.fromNumber(r)));return s.compare(pI)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Lh(t),[r,s]=Fh(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ul(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const n=Lh(t),[r,s]=Fh(n);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,qs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new wo(ot.min(),s,new Ut(ft),Fn(),vt())}}class qs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new qs(r,n,vt(),vt(),vt())}}/**
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
 */class Pi{constructor(t,n,r,s){this.De=t,this.removedTargetIds=n,this.key=r,this.ve=s}}class eg{constructor(t,n){this.targetId=t,this.Ce=n}}class ng{constructor(t,n,r=Xt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Uh{constructor(){this.Fe=0,this.Me=Bh(),this.xe=Xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=vt(),n=vt(),r=vt();return this.Me.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:at(38017,{changeType:i})}}),new qs(this.xe,this.Oe,t,n,r)}Qe(){this.Ne=!1,this.Me=Bh()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Nt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class gI{constructor(t){this.ze=t,this.je=new Map,this.He=Fn(),this.Je=gi(),this.Ye=gi(),this.Ze=new Ut(ft)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const r=this.rt(n);switch(t.state){case 0:this.it(n)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(t.resumeToken));break;default:at(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(t){const n=t.targetId,r=t.Ce.count,s=this._t(n);if(s){const i=s.target;if(ja(i))if(r===0){const a=new rt(i.path);this.tt(n,a,ie.newNoDocument(a,ot.min()))}else Nt(r===1,20013,{expectedCount:r});else{const a=this.ut(n);if(a!==r){const l=this.ct(t),c=l?this.lt(l,t,a):1;if(c!==0){this.st(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Mn(r).toUint8Array()}catch(c){if(c instanceof Pp)return Dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ul(a,s,i)}catch(c){return Dr(c instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(t,n,r){return n.Ce.count===r-this.Tt(t,n.targetId)?0:2}Tt(t,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(t){const n=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&ja(l.target)){const c=new rt(l.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,ie.newNoDocument(c,t))}i.Le&&(n.set(a,i.qe()),i.Qe())}});let r=vt();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(t));const s=new wo(t,n,this.Ze,this.He,r);return this.He=Fn(),this.Je=gi(),this.Ye=gi(),this.Ze=new Ut(ft),s}et(t,n){if(!this.it(t))return;const r=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),r&&(this.He=this.He.insert(n,r))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Uh,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new qt(ft),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new qt(ft),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Uh),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function gi(){return new Ut(rt.comparator)}function Bh(){return new Ut(rt.comparator)}const mI={asc:"ASCENDING",desc:"DESCENDING"},_I={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yI={and:"AND",or:"OR"};class vI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ga(e,t){return e.useProto3Json||mo(t)?t:{value:t}}function Wa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ar(e){return Nt(!!e,49232),ot.fromTimestamp(function(n){const r=kn(n);return new zt(r.seconds,r.nanos)}(e))}function sg(e,t){return Qa(e,t).canonicalString()}function Qa(e,t){const n=function(s){return new Dt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function ig(e){const t=Dt.fromString(e);return Nt(ug(t),10190,{key:t.toString()}),t}function ca(e,t){const n=ig(t);if(n.get(1)!==e.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(ag(n))}function og(e,t){return sg(e.databaseId,t)}function EI(e){const t=ig(e);return t.length===4?Dt.emptyPath():ag(t)}function $h(e){return new Dt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ag(e){return Nt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function TI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:at(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Nt(d===void 0||typeof d=="string",58123),Xt.fromBase64String(d||"")):(Nt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Xt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?B.UNKNOWN:tg(h.code);return new Z(d,h.message||"")}(a);n=new ng(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ca(e,r.document.name),i=Ar(r.document.updateTime),a=r.document.createTime?Ar(r.document.createTime):ot.min(),l=new ze({mapValue:{fields:r.document.fields}}),c=ie.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Pi(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ca(e,r.document),i=r.readTime?Ar(r.readTime):ot.min(),a=ie.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Pi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ca(e,r.document),i=r.removedTargetIds||[];n=new Pi([],i,s,null)}else{if(!("filter"in t))return at(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new dI(s,i),l=r.targetId;n=new eg(l,a)}}return n}function wI(e,t){return{documents:[og(e,t.path)]}}function II(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=og(e,s);const i=function(h){if(h.length!==0)return cg(Ue.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:_r(g.field),direction:RI(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ga(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{gt:n,parent:s}}function AI(e){let t=EI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Nt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=lg(p);return g instanceof Ue&&Fp(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(P){return new zi(yr(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,mo(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new Hi(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,y=p.values||[];return new Hi(y,g)}(n.endAt)),Qw(t,s,a,i,l,"F",c,h)}function bI(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return at(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function lg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yr(n.unaryFilter.field);return jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(n.unaryFilter.field);return jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yr(n.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return at(61313);default:return at(60726)}}(e):e.fieldFilter!==void 0?function(n){return jt.create(yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return at(58110);default:return at(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ue.create(n.compositeFilter.filters.map(r=>lg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return at(1026)}}(n.compositeFilter.op))}(e):at(30097,{filter:e})}function RI(e){return mI[e]}function SI(e){return _I[e]}function CI(e){return yI[e]}function _r(e){return{fieldPath:e.canonicalString()}}function yr(e){return ae.fromServerFormat(e.fieldPath)}function cg(e){return e instanceof jt?function(n){if(n.op==="=="){if(Ch(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(Sh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ch(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(Sh(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:SI(n.op),value:n.value}}}(e):e instanceof Ue?function(n){const r=n.getFilters().map(s=>cg(s));return r.length===1?r[0]:{compositeFilter:{op:CI(n.op),filters:r}}}(e):at(54877,{filter:e})}function ug(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class An{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=Xt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new An(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class PI{constructor(t){this.wt=t}}function VI(e){const t=AI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ha(t,t.limit,"L"):t}/**
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
 */class xI{constructor(){this.Cn=new DI}addToCollectionParentIndex(t,n){return this.Cn.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(On.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(On.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class DI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new qt(Dt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new qt(Dt.comparator)).toArray()}}/**
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
 */const jh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hg=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(hg,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
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
 */const qh="LruGarbageCollector",NI=1048576;function Hh([e,t],[n,r]){const s=ft(e,n);return s===0?ft(t,r):s}class OI{constructor(t){this.Er=t,this.buffer=new qt(Hh),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){X(qh,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$r(n)?X(qh,"Ignoring IndexedDB error during garbage collection: ",n):await po(n)}await this.mr(3e5)})}}class MI{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return k.resolve(go.le);const r=new OI(n);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.gr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(jh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jh):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),gr()<=_t.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function LI(e,t){return new MI(e,t)}/**
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
 */class FI{constructor(){this.changes=new or(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ie.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class UI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class BI{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&As(r.mutation,s,In.empty(),zt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,vt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=vt()){const s=Yn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=cs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Yn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,vt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Fn();const a=Is(),l=function(){return Is()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof To)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),As(d.mutation,h,d.mutation.getFieldMask(),zt.now())):a.set(h.key,In.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new UI(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Is();let s=new Ut((a,l)=>a-l),i=vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||In.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||vt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Gp();d.forEach(g=>{if(!i.has(g)){const y=Jp(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return rt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):k.resolve(Yn());let l=ks,c=i;return a.next(h=>k.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,vt())).next(d=>({batchId:l,changes:tI(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new rt(n)).next(r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(t,i).next(l=>k.forEach(l,c=>{const h=function(p,g){return new js(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ie.newInvalidDocument(d)))});let l=cs();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&As(d.mutation,h,In.empty(),zt.now()),vo(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class $I{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return k.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ar(s.createTime)}}(n)),k.resolve()}getNamedQuery(t,n){return k.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(s){return{name:s.name,query:VI(s.bundledQuery),readTime:Ar(s.readTime)}}(n)),k.resolve()}}/**
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
 */class jI{constructor(){this.overlays=new Ut(rt.comparator),this.Qr=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Yn();return k.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const s=Yn(),i=n.length+1,a=new rt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ut((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Yn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return k.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fI(n,r));let i=this.Qr.get(n);i===void 0&&(i=vt(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class qI{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,k.resolve()}}/**
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
 */class Bl{constructor(){this.$r=new qt(Ht.Ur),this.Kr=new qt(Ht.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const r=new Ht(t,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.zr(new Ht(t,n))}jr(t,n){t.forEach(r=>this.removeReference(r,n))}Hr(t){const n=new rt(new Dt([])),r=new Ht(n,t),s=new Ht(n,t+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new rt(new Dt([])),r=new Ht(n,t),s=new Ht(n,t+1);let i=vt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Ht(t,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ht{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return rt.comparator(t.key,n.key)||ft(t.Zr,n.Zr)}static Wr(t,n){return ft(t.Zr,n.Zr)||rt.comparator(t.key,n.key)}}/**
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
 */class HI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new qt(Ht.Ur)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Ht(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,n){return k.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Vw:this.nr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ht(n,0),s=new Ht(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new qt(ft);return n.forEach(s=>{const i=new Ht(s,0),a=new Ht(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),k.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;rt.isDocumentKey(i)||(i=i.child(""));const a=new Ht(new rt(i),0);let l=new qt(ft);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},a),k.resolve(this.ni(l))}ni(t){const n=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Nt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return k.forEach(n.mutations,s=>{const i=new Ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,n){const r=new Ht(n,0),s=this.Xr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zI{constructor(t){this.ii=t,this.docs=function(){return new Ut(rt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():ie.newInvalidDocument(n))}getEntries(t,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ie.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Fn();const a=n.path,l=new rt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Rw(bw(d),r)<=0||(s.has(d.key)||vo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(t,n,r,s){at(9500)}si(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new KI(this)}getSize(t){return k.resolve(this.size)}}class KI extends FI{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class GI{constructor(t){this.persistence=t,this.oi=new or(n=>Ol(n),kl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this._i=0,this.ai=new Bl,this.targetCount=0,this.ui=Mr.cr()}forEachTarget(t,n){return this.oi.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),k.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Mr(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.Tr(n),k.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.oi.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.ai.Gr(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.ai.Yr(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.ai.containsKey(n))}}/**
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
 */class fg{constructor(t,n){this.ci={},this.overlays={},this.li=new go(0),this.hi=!1,this.hi=!0,this.Pi=new qI,this.referenceDelegate=t(this),this.Ti=new GI(this),this.indexManager=new xI,this.remoteDocumentCache=function(s){return new zI(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new PI(n),this.Ei=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new jI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ci[t.toKey()];return r||(r=new HI(n,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const s=new WI(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(t,n){return k.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,n)))}}class WI extends Cw{constructor(t){super(),this.currentSequenceNumber=t}}class $l{constructor(t){this.persistence=t,this.Vi=new Bl,this.mi=null}static fi(t){return new $l(t)}get gi(){if(this.mi)return this.mi;throw at(60996)}addReference(t,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),k.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.gi,r=>{const s=rt.fromPath(r);return this.pi(t,s).next(i=>{i||n.removeEntry(s,ot.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return k.or([()=>k.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Wi{constructor(t,n){this.persistence=t,this.yi=new or(r=>Dw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LI(this,n)}static fi(t,n){return new Wi(t,n)}di(){}Ai(t){return k.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}br(t){let n=0;return this.yr(t,r=>{n++}).next(()=>n)}yr(t,n){return k.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(i=>i?k.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ot.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),k.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.yi.set(r,t.currentSequenceNumber),k.resolve()}removeReference(t,n,r){return this.yi.set(r,t.currentSequenceNumber),k.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),k.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Si(t.data.value)),n}Dr(t,n,r){return k.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.yi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class QI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class YI{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return WE()?8:Pw(zE())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ws(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.bs(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new QI;return this.Ss(t,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(t,n,a,l.size)})}).next(()=>i.result)}Ds(t,n,r,s){return r.documentReadCount<this.gs?(gr()<=_t.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),k.resolve()):(gr()<=_t.DEBUG&&X("QueryEngine","Query:",mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(gr()<=_t.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,We(n))):k.resolve())}ws(t,n){if(Dh(n))return k.resolve(null);let r=We(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ha(n,null,"F"),r=We(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=vt(...i);return this.ys.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.vs(n,l);return this.Cs(n,h,a,c.readTime)?this.ws(t,Ha(n,null,"F")):this.Fs(t,h,n,c)}))})))}bs(t,n,r,s){return Dh(n)||s.isEqual(ot.min())?k.resolve(null):this.ys.getDocuments(t,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?k.resolve(null):(gr()<=_t.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(n)),this.Fs(t,a,n,Aw(s,ks)).next(l=>l))})}vs(t,n){let r=new qt(zp(t));return n.forEach((s,i)=>{vo(t,i)&&(r=r.add(i))}),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return gr()<=_t.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",mr(n)),this.ys.getDocumentsMatchingQuery(t,n,On.min(),r)}Fs(t,n,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ql="LocalStore",XI=3e8;class JI{constructor(t,n,r,s){this.persistence=t,this.Ms=n,this.serializer=s,this.xs=new Ut(ft),this.Os=new or(i=>Ol(i),kl),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new BI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function ZI(e,t,n,r){return new JI(e,t,n,r)}async function dg(e,t){const n=yt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=vt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:l}))})})}function pg(e){const t=yt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function t0(e,t){const n=yt(e),r=t.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];t.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?y=y.withResumeToken(Xt.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(x,L,K){return x.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=XI?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(g,y,d)&&l.push(n.Ti.updateTargetData(i,y))});let c=Fn(),h=vt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(e0(i,a,t.documentUpdates).next(d=>{c=d.qs,h=d.Qs})),!r.isEqual(ot.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.xs=s,i))}function e0(e,t,n){let r=vt(),s=vt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=Fn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ot.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):X(ql,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function n0(e,t){const n=yt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,t).next(i=>i?(s=i,k.resolve(s)):n.Ti.allocateTargetId(r).next(a=>(s=new An(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(t,r.targetId)),r})}async function Ya(e,t,n){const r=yt(e),s=r.xs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$r(a))throw a;X(ql,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function zh(e,t,n){const r=yt(e);let s=ot.min(),i=vt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=yt(c),g=p.Os.get(d);return g!==void 0?k.resolve(p.xs.get(g)):p.Ti.getTargetData(h,d)}(r,a,We(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:vt())).next(l=>(r0(r,Xw(t),l),{documents:l,$s:i})))}function r0(e,t,n){let r=e.Ns.get(t)||ot.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Ns.set(t,r)}class Kh{constructor(){this.activeTargetIds=rI()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class s0{constructor(){this.xo=new Kh,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,r){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Kh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class i0{No(t){}shutdown(){}}/**
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
 */const Gh="ConnectivityMonitor";class Wh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){X(Gh,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){X(Gh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mi=null;function Xa(){return mi===null?mi=function(){return 268435456+Math.round(2147483648*Math.random())}():mi++,"0x"+mi.toString(16)}/**
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
 */const ua="RestConnection",o0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class a0{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===ji?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,n,r,s,i){const a=Xa(),l=this.jo(t,n.toUriEncodedString());X(ua,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),d=Cl(h);return this.Jo(t,l,c,r,d).then(p=>(X(ua,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Dr(ua,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(t,n,r,s,i,a){return this.zo(t,n,r,s,i)}Ho(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}jo(t,n){const r=o0[t];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class l0{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const ne="WebChannelConnection";class c0 extends a0{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=Xa();return new Promise((l,c)=>{const h=new vp;h.setWithCredentials(!0),h.listenOnce(Ep.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ri.NO_ERROR:const p=h.getResponseJson();X(ne,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case Ri.TIMEOUT:X(ne,`RPC '${t}' ${a} timed out`),c(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const g=h.getStatus();if(X(ne,`RPC '${t}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const x=function(K){const U=K.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(P.status);c(new Z(x,P.message))}else c(new Z(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Z(B.UNAVAILABLE,"Connection failed."));break;default:at(9055,{h_:t,streamId:a,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{X(ne,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);X(ne,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}I_(t,n,r){const s=Xa(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ip(),l=wp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(ne,`Creating RPC '${t}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.E_(p);let g=!1,y=!1;const P=new l0({Zo:L=>{y?X(ne,`Not sending because RPC '${t}' stream ${s} is closed:`,L):(g||(X(ne,`Opening RPC '${t}' stream ${s} transport.`),p.open(),g=!0),X(ne,`RPC '${t}' stream ${s} sending:`,L),p.send(L))},Xo:()=>p.close()}),x=(L,K,U)=>{L.listen(K,j=>{try{U(j)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,ls.EventType.OPEN,()=>{y||(X(ne,`RPC '${t}' stream ${s} transport opened.`),P.__())}),x(p,ls.EventType.CLOSE,()=>{y||(y=!0,X(ne,`RPC '${t}' stream ${s} transport closed`),P.u_(),this.d_(p))}),x(p,ls.EventType.ERROR,L=>{y||(y=!0,Dr(ne,`RPC '${t}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),P.u_(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),x(p,ls.EventType.MESSAGE,L=>{var K;if(!y){const U=L.data[0];Nt(!!U,16349);const j=U,q=(j==null?void 0:j.error)||((K=j[0])===null||K===void 0?void 0:K.error);if(q){X(ne,`RPC '${t}' stream ${s} received error:`,q);const ct=q.status;let lt=function(E){const A=$t[E];if(A!==void 0)return tg(A)}(ct),I=q.message;lt===void 0&&(lt=B.INTERNAL,I="Unknown error status: "+ct+" with message "+q.message),y=!0,P.u_(new Z(lt,I)),p.close()}else X(ne,`RPC '${t}' stream ${s} received:`,U),P.c_(U)}}),x(l,Tp.STAT_EVENT,L=>{L.stat===La.PROXY?X(ne,`RPC '${t}' stream ${s} detected buffering proxy`):L.stat===La.NOPROXY&&X(ne,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function ha(){return typeof document<"u"?document:null}/**
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
 */function Io(e){return new vI(e,!0)}/**
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
 */class gg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.xi=t,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Qh="PersistentStream";class u0{constructor(t,n,r,s,i,a,l,c){this.xi=t,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new gg(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{t(()=>{const s=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,n){const r=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return X(Qh,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(X(Qh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h0 extends u0{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=TI(this.serializer,t),r=function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?Ar(a.readTime):ot.min()}(t);return this.listener.Y_(n,r)}Z_(t){const n={};n.database=$h(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=ja(c)?{documents:wI(i,c)}:{query:II(i,c).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=rg(i,a.resumeToken);const h=Ga(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=Wa(i,a.snapshotVersion.toTimestamp());const h=Ga(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=bI(this.serializer,t);r&&(n.labels=r),this.Q_(n)}X_(t){const n={};n.database=$h(this.serializer),n.removeTarget=t,this.Q_(n)}}/**
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
 */class f0{}class d0 extends f0{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(t,Qa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}Yo(t,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(t,Qa(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(B.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class p0{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(un(n),this.ua=!1):X("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Lr="RemoteStore";class g0{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(a=>{r.enqueueAndForget(async()=>{zs(this)&&(X(Lr,"Restarting streams for network reachability change."),await async function(c){const h=yt(c);h.da.add(4),await Hs(h),h.Va.set("Unknown"),h.da.delete(4),await Ao(h)}(this))})}),this.Va=new p0(r,s)}}async function Ao(e){if(zs(e))for(const t of e.Aa)await t(!0)}async function Hs(e){for(const t of e.Aa)await t(!1)}function mg(e,t){const n=yt(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Gl(n)?Kl(n):qr(n).N_()&&zl(n,t))}function Hl(e,t){const n=yt(e),r=qr(n);n.Ea.delete(t),r.N_()&&_g(n,t),n.Ea.size===0&&(r.N_()?r.k_():zs(n)&&n.Va.set("Unknown"))}function zl(e,t){if(e.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qr(e).Z_(t)}function _g(e,t){e.ma.Ke(t),qr(e).X_(t)}function Kl(e){e.ma=new gI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Ea.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),qr(e).start(),e.Va.ca()}function Gl(e){return zs(e)&&!qr(e).O_()&&e.Ea.size>0}function zs(e){return yt(e).da.size===0}function yg(e){e.ma=void 0}async function m0(e){e.Va.set("Online")}async function _0(e){e.Ea.forEach((t,n)=>{zl(e,t)})}async function y0(e,t){yg(e),Gl(e)?(e.Va.Pa(t),Kl(e)):e.Va.set("Unknown")}async function v0(e,t,n){if(e.Va.set("Online"),t instanceof ng&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.ma.removeTarget(l))}(e,t)}catch(r){X(Lr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Yh(e,r)}else if(t instanceof Pi?e.ma.Xe(t):t instanceof eg?e.ma.ot(t):e.ma.nt(t),!n.isEqual(ot.min()))try{const r=await pg(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.ma.It(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(h);d&&i.Ea.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(Xt.EMPTY_BYTE_STRING,d.snapshotVersion)),_g(i,c);const p=new An(d.target,c,h,d.sequenceNumber);zl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){X(Lr,"Failed to raise snapshot:",r),await Yh(e,r)}}async function Yh(e,t,n){if(!$r(t))throw t;e.da.add(1),await Hs(e),e.Va.set("Offline"),n||(n=()=>pg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X(Lr,"Retrying IndexedDB access"),await n(),e.da.delete(1),await Ao(e)})}async function Xh(e,t){const n=yt(e);n.asyncQueue.verifyOperationInProgress(),X(Lr,"RemoteStore received new credentials");const r=zs(n);n.da.add(3),await Hs(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await Ao(n)}async function E0(e,t){const n=yt(e);t?(n.da.delete(2),await Ao(n)):t||(n.da.add(2),await Hs(n),n.Va.set("Unknown"))}function qr(e){return e.fa||(e.fa=function(n,r,s){const i=yt(n);return i.oa(),new h0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{e_:m0.bind(null,e),n_:_0.bind(null,e),i_:y0.bind(null,e),Y_:v0.bind(null,e)}),e.Aa.push(async t=>{t?(e.fa.L_(),Gl(e)?Kl(e):e.Va.set("Unknown")):(await e.fa.stop(),yg(e))})),e.fa}/**
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
 */class Wl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Wl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(e,t){if(un("AsyncQueue",`${t}: ${e}`),$r(e))return new Z(B.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class br{static emptySet(t){return new br(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||rt.comparator(n.key,r.key):(n,r)=>rt.comparator(n.key,r.key),this.keyedMap=cs(),this.sortedSet=new Ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof br)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new br;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Jh{constructor(){this.pa=new Ut(rt.comparator)}track(t){const n=t.doc.key,r=this.pa.get(n);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(n,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(n):t.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):at(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,r)=>{t.push(r)}),t}}class Fr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Fr(t,n,br.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class T0{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class w0{constructor(){this.queries=Zh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=yt(n),i=s.queries;s.queries=Zh(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Zh(){return new or(e=>Hp(e),yo)}async function I0(e,t){const n=yt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Da()&&t.va()&&(r=2):(i=new T0,r=t.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=vg(a,`Initialization of query '${mr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.Fa(n.onlineState),i.ba&&t.Ma(i.ba)&&Ql(n)}async function A0(e,t){const n=yt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.va()?0:1:!i.Da()&&t.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function b0(e,t){const n=yt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Ma(s)&&(r=!0);a.ba=s}}r&&Ql(n)}function R0(e,t,n){const r=yt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function Ql(e){e.Ca.forEach(t=>{t.next()})}var Ja,tf;(tf=Ja||(Ja={})).xa="default",tf.Cache="cache";class S0{constructor(t,n,r){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=Fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ja.Cache}}/**
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
 */class Eg{constructor(t){this.key=t}}class Tg{constructor(t){this.key=t}}class C0{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=vt(),this.mutatedKeys=vt(),this.Za=zp(t),this.Xa=new br(this.Za)}get eu(){return this.Ha}tu(t,n){const r=n?n.nu:new Jh,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const g=s.get(d),y=vo(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let L=!1;g&&y?g.data.isEqual(y.data)?P!==x&&(r.track({type:3,doc:y}),L=!0):this.ru(g,y)||(r.track({type:2,doc:y}),L=!0,(c&&this.Za(y,c)>0||h&&this.Za(y,h)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),L=!0):g&&!y&&(r.track({type:1,doc:g}),L=!0,(c||h)&&(l=!0)),L&&(y?(a=a.add(y),i=x?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:a,nu:r,Cs:l,mutatedKeys:i}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((d,p)=>function(y,P){const x=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return at(20277,{Vt:L})}};return x(y)-x(P)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Ja;return this.Ja=c,a.length!==0||h?{snapshot:new Fr(this.query,t.Xa,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Jh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=vt(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return t.forEach(r=>{this.Ya.has(r)||n.push(new Tg(r))}),this.Ya.forEach(r=>{t.has(r)||n.push(new Eg(r))}),n}au(t){this.Ha=t.$s,this.Ya=vt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return Fr.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Yl="SyncEngine";class P0{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class V0{constructor(t){this.key=t,this.cu=!1}}class x0{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new or(l=>Hp(l),yo),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ut(rt.comparator),this.Eu=new Map,this.du=new Bl,this.Au={},this.Ru=new Map,this.Vu=Mr.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function D0(e,t,n=!0){const r=Rg(e);let s;const i=r.hu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await wg(r,t,n,!0),s}async function N0(e,t){const n=Rg(e);await wg(n,t,!0,!1)}async function wg(e,t,n,r){const s=await n0(e.localStore,We(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await O0(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&mg(e.remoteStore,s),l}async function O0(e,t,n,r,s){e.fu=(p,g,y)=>async function(x,L,K,U){let j=L.view.tu(K);j.Cs&&(j=await zh(x.localStore,L.query,!1).then(({documents:I})=>L.view.tu(I,j)));const q=U&&U.targetChanges.get(L.targetId),ct=U&&U.targetMismatches.get(L.targetId)!=null,lt=L.view.applyChanges(j,x.isPrimaryClient,q,ct);return nf(x,L.targetId,lt.ou),lt.snapshot}(e,p,g,y);const i=await zh(e.localStore,t,!0),a=new C0(t,i.$s),l=a.tu(i.documents),c=qs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);nf(e,n,h.ou);const d=new P0(t,n,a);return e.hu.set(t,d),e.Pu.has(n)?e.Pu.get(n).push(t):e.Pu.set(n,[t]),h.snapshot}async function k0(e,t,n){const r=yt(e),s=r.hu.get(t),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(a=>!yo(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ya(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hl(r.remoteStore,s.targetId),Za(r,s.targetId)}).catch(po)):(Za(r,s.targetId),await Ya(r.localStore,s.targetId,!0))}async function M0(e,t){const n=yt(e),r=n.hu.get(t),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hl(n.remoteStore,r.targetId))}async function Ig(e,t){const n=yt(e);try{const r=await t0(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Eu.get(i);a&&(Nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?Nt(a.cu,14607):s.removedDocuments.size>0&&(Nt(a.cu,42227),a.cu=!1))}),await bg(n,r,t)}catch(r){await po(r)}}function ef(e,t,n){const r=yt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,a)=>{const l=a.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=yt(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.Fa(l)&&(h=!0)}),h&&Ql(c)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function L0(e,t,n){const r=yt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Eu.get(t),i=s&&s.key;if(i){let a=new Ut(rt.comparator);a=a.insert(i,ie.newNoDocument(i,ot.min()));const l=vt().add(i),c=new wo(ot.min(),new Map,new Ut(ft),a,l);await Ig(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(t),Xl(r)}else await Ya(r.localStore,t,!1).then(()=>Za(r,t,n)).catch(po)}function Za(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Pu.get(t))e.hu.delete(r),n&&e.lu.gu(r,n);e.Pu.delete(t),e.isPrimaryClient&&e.du.Hr(t).forEach(r=>{e.du.containsKey(r)||Ag(e,r)})}function Ag(e,t){e.Tu.delete(t.path.canonicalString());const n=e.Iu.get(t);n!==null&&(Hl(e.remoteStore,n),e.Iu=e.Iu.remove(t),e.Eu.delete(n),Xl(e))}function nf(e,t,n){for(const r of n)r instanceof Eg?(e.du.addReference(r.key,t),F0(e,r)):r instanceof Tg?(X(Yl,"Document no longer in limbo: "+r.key),e.du.removeReference(r.key,t),e.du.containsKey(r.key)||Ag(e,r.key)):at(19791,{pu:r})}function F0(e,t){const n=t.key,r=n.path.canonicalString();e.Iu.get(n)||e.Tu.has(r)||(X(Yl,"New document in limbo: "+n),e.Tu.add(r),Xl(e))}function Xl(e){for(;e.Tu.size>0&&e.Iu.size<e.maxConcurrentLimboResolutions;){const t=e.Tu.values().next().value;e.Tu.delete(t);const n=new rt(Dt.fromString(t)),r=e.Vu.next();e.Eu.set(r,new V0(n)),e.Iu=e.Iu.insert(n,r),mg(e.remoteStore,new An(We(jp(n.path)),r,"TargetPurposeLimboResolution",go.le))}}async function bg(e,t,n){const r=yt(e),s=[],i=[],a=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{a.push(r.fu(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=jl.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(c,h){const d=yt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,g=>k.forEach(g.ds,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>k.forEach(g.As,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!$r(p))throw p;X(ql,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=d.xs.get(g),P=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(P);d.xs=d.xs.insert(g,x)}}}(r.localStore,i))}async function U0(e,t){const n=yt(e);if(!n.currentUser.isEqual(t)){X(Yl,"User change. New user:",t.toKey());const r=await dg(n.localStore,t);n.currentUser=t,function(i,a){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new Z(B.CANCELLED,a))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bg(n,r.ks)}}function B0(e,t){const n=yt(e),r=n.Eu.get(t);if(r&&r.cu)return vt().add(r.key);{let s=vt();const i=n.Pu.get(t);if(!i)return s;for(const a of i){const l=n.hu.get(a);s=s.unionWith(l.view.eu)}return s}}function Rg(e){const t=yt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ig.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=B0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=L0.bind(null,t),t.lu.Y_=b0.bind(null,t.eventManager),t.lu.gu=R0.bind(null,t.eventManager),t}class Qi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Io(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return ZI(this.persistence,new YI,t.initialUser,this.serializer)}Su(t){return new fg($l.fi,this.serializer)}bu(t){return new s0}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qi.provider={build:()=>new Qi};class $0 extends Qi{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Nt(this.persistence.referenceDelegate instanceof Wi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kI(r,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new fg(r=>Wi.fi(r,n),this.serializer)}}class tl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=U0.bind(null,this.syncEngine),await E0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new w0}()}createDatastore(t){const n=Io(t.databaseInfo.databaseId),r=function(i){return new c0(i)}(t.databaseInfo);return function(i,a,l,c){return new d0(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new g0(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>ef(this.syncEngine,n,0),function(){return Wh.C()?new Wh:new i0}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new x0(s,i,a,l,c,h);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=yt(s);X(Lr,"RemoteStore shutting down."),i.da.add(5),await Hs(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tl.provider={build:()=>new tl};/**
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
 */class j0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):un("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Un="FirestoreClient";class q0{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=re.UNAUTHENTICATED,this.clientId=Tw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(Un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(Un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function fa(e,t){e.asyncQueue.verifyOperationInProgress(),X(Un,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await dg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function rf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await H0(e);X(Un,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Xh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Xh(t.remoteStore,s)),e._onlineComponents=t}async function H0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X(Un,"Using user provided OfflineComponentProvider");try{await fa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Dr("Error using user provided cache. Falling back to memory cache: "+n),await fa(e,new Qi)}}else X(Un,"Using default OfflineComponentProvider"),await fa(e,new $0(void 0));return e._offlineComponents}async function z0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X(Un,"Using user provided OnlineComponentProvider"),await rf(e,e._uninitializedComponentsProvider._online)):(X(Un,"Using default OnlineComponentProvider"),await rf(e,new tl))),e._onlineComponents}async function K0(e){const t=await z0(e),n=t.eventManager;return n.onListen=D0.bind(null,t.syncEngine),n.onUnlisten=k0.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=N0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=M0.bind(null,t.syncEngine),n}function G0(e,t,n={}){const r=new tr;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new j0({next:g=>{d.xu(),a.enqueueAndForget(()=>A0(i,p)),g.fromCache&&c.source==="server"?h.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new S0(l,d,{includeMetadataChanges:!0,Qa:!0});return I0(i,p)}(await K0(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */const sf=new Map;function W0(e,t,n,r){if(t===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function of(e){if(rt.isDocumentKey(e))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function bo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":at(12329,{type:typeof e})}function el(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bo(e);throw new Z(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Cg="firestore.googleapis.com",af=!0;class lf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cg,this.ssl=af}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:af;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=hg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<NI)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}W0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jl{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pw;switch(r.type){case"firstParty":return new yw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sf.get(n);r&&(X("ComponentProvider","Removing Datastore"),sf.delete(n),r.terminate())}(this),Promise.resolve()}}function Q0(e,t,n,r={}){var s;e=el(e,Jl);const i=Cl(t),a=e._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),c=`${t}:${n}`;i&&(BE(`https://${c}`),HE("Firestore",!0)),a.host!==Cg&&a.host!==c&&Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Ns(h,l)&&(e._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=re.MOCK_USER;else{d=$E(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new re(g)}e._authCredentials=new gw(new bp(d,p))}}/**
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
 */class Hr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Hr(this.firestore,t,this._query)}}class fn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fn(this.firestore,t,this._key)}}class Rr extends Hr{constructor(t,n,r){super(t,n,jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fn(this.firestore,null,new rt(t))}withConverter(t){return new Rr(this.firestore,t,this._path)}}function Y0(e,t,...n){if(e=xr(e),e instanceof Jl){const r=Dt.fromString(t,...n);return of(r),new Rr(e,null,r)}{if(!(e instanceof fn||e instanceof Rr))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Dt.fromString(t,...n));return of(r),new Rr(e.firestore,null,r)}}/**
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
 */const cf="AsyncQueue";class uf{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new gg(this,"async_queue_retry"),this.rc=()=>{const r=ha();r&&X(cf,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const n=ha();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new tr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!$r(t))throw t;X(cf,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,un("INTERNAL UNHANDLED ERROR: ",hf(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(t,n,r){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const s=Wl.createAndSchedule(this,t,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&at(47125,{cc:hf(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function hf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Pg extends Jl{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new uf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new uf(t),this._firestoreClient=void 0,await t}}}function X0(e,t){const n=typeof e=="object"?e:gp(),r=typeof e=="string"?e:ji,s=$s(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=FE("firestore");i&&Q0(s,...i)}return s}function J0(e){if(e._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Z0(e),e._firestoreClient}function Z0(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,d){return new kw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Sg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new q0(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
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
 */class Ur{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ur(Xt.fromBase64String(t))}catch(n){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ur(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class xg{constructor(t){this._methodName=t}}/**
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
 */class Zl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}}/**
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
 */const tA=/^__.*__$/;function Dg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw at(40011,{Ic:e})}}class ec{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ec(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return nl(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(Dg(this.Ic)&&tA.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class eA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Io(t)}bc(t,n,r,s=!1){return new ec({Ic:t,methodName:n,wc:r,path:ae.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nA(e){const t=e._freezeSettings(),n=Io(e._databaseId);return new eA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rA(e,t,n,r=!1){return nc(n,e.bc(r?4:3,t))}function nc(e,t){if(Ng(e=xr(e)))return iA("Unsupported field value:",t,e),sA(e,t);if(e instanceof xg)return function(r,s){if(!Dg(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=nc(l,s.fc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=xr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=zt.fromDate(r);return{timestampValue:Wa(s.serializer,i)}}if(r instanceof zt){const i=new zt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wa(s.serializer,i)}}if(r instanceof Zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ur)return{bytesValue:rg(s.serializer,r._byteString)};if(r instanceof fn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tc)return function(a,l){return{mapValue:{fields:{[Op]:{stringValue:kp},[qi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.gc("VectorValues must only contain numeric values.");return Ml(l.serializer,h)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${bo(r)}`)}(e,t)}function sA(e,t){const n={};return Cp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jr(e,(r,s)=>{const i=nc(s,t.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ng(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof zt||e instanceof Zl||e instanceof Ur||e instanceof fn||e instanceof xg||e instanceof tc)}function iA(e,t,n){if(!Ng(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=bo(n);throw r==="an object"?t.gc(e+" a custom object"):t.gc(e+" "+r)}}const oA=new RegExp("[~\\*/\\[\\]]");function aA(e,t,n){if(t.search(oA)>=0)throw nl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vg(...t.split("."))._internalPath}catch{throw nl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nl(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Z(B.INVALID_ARGUMENT,l+e+c)}/**
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
 */class Og{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(rc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lA extends Og{data(){return super.data()}}function rc(e,t){return typeof t=="string"?aA(e,t):t instanceof Vg?t._internalPath:t._delegate._internalPath}/**
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
 */function cA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sc{}class uA extends sc{}function hA(e,t,...n){let r=[];t instanceof sc&&r.push(t),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof ic).length,l=i.filter(c=>c instanceof Ro).length;if(a>1||a>0&&l>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Ro extends uA{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Ro(t,n,r)}_apply(t){const n=this._parse(t);return kg(t._query,n),new Hr(t.firestore,t.converter,qa(t._query,n))}_parse(t){const n=nA(t.firestore);return function(i,a,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){df(p,d);const P=[];for(const x of p)P.push(ff(c,i,x));g={arrayValue:{values:P}}}else g=ff(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||df(p,d),g=rA(l,a,p,d==="in"||d==="not-in");return jt.create(h,d,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function c1(e,t,n){const r=t,s=rc("where",e);return Ro._create(s,r,n)}class ic extends sc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ic(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ue.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)kg(a,c),a=qa(a,c)}(t._query,n),new Hr(t.firestore,t.converter,qa(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ff(e,t,n){if(typeof(n=xr(n))=="string"){if(n==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qp(t)&&n.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Dt.fromString(n));if(!rt.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rh(e,new rt(r))}if(n instanceof fn)return Rh(e,n._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bo(n)}.`)}function df(e,t){if(!Array.isArray(e)||e.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kg(e,t){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class fA{convertValue(t,n="none"){switch(Ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Mn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw at(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return jr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[qi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ft(a.doubleValue));return new tc(i)}convertGeoPoint(t){return new Zl(Ft(t.latitude),Ft(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=_o(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ms(t));default:return null}}convertTimestamp(t){const n=kn(t);return new zt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Dt.fromString(t);Nt(ug(r),9688,{name:t});const s=new Ls(r.get(1),r.get(3)),i=new rt(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class _i{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dA extends Og{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(rc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vi extends dA{data(t={}){return super.data(t)}}class pA{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new _i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Vi(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:gA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gA(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return at(61501,{type:e})}}class mA extends fA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ur(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function _A(e){e=el(e,Hr);const t=el(e.firestore,Pg),n=J0(t),r=new mA(t);return cA(e._query),G0(n,e._query).then(s=>new pA(t,r,e,s))}(function(t,n=!0){(function(s){Br=s})(ew),Nn(new ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Pg(new mw(r.getProvider("auth-internal")),new vw(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ge(ph,gh,t),Ge(ph,gh,"esm2017")})();const Mg="@firebase/installations",oc="0.6.17";/**
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
 */const Lg=1e4,Fg=`w:${oc}`,Ug="FIS_v2",yA="https://firebaseinstallations.googleapis.com/v1",vA=60*60*1e3,EA="installations",TA="Installations";/**
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
 */const wA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rr=new fo(EA,TA,wA);function Bg(e){return e instanceof $n&&e.code.includes("request-failed")}/**
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
 */function $g({projectId:e}){return`${yA}/projects/${e}/installations`}function jg(e){return{token:e.token,requestStatus:2,expiresIn:AA(e.expiresIn),creationTime:Date.now()}}async function qg(e,t){const r=(await t.json()).error;return rr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function IA(e,{refreshToken:t}){const n=Hg(e);return n.append("Authorization",bA(t)),n}async function zg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function AA(e){return Number(e.replace("s","000"))}function bA(e){return`${Ug} ${e}`}/**
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
 */async function RA({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=$g(e),s=Hg(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Ug,appId:e.appId,sdkVersion:Fg},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await zg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:jg(h.authToken)}}else throw await qg("Create Installation",c)}/**
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
 */function SA(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const CA=/^[cdef][\w-]{21}$/,rl="";function PA(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=VA(e);return CA.test(n)?n:rl}catch{return rl}}function VA(e){return SA(e).substr(0,22)}/**
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
 */function So(e){return`${e.appName}!${e.appId}`}/**
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
 */const Gg=new Map;function Wg(e,t){const n=So(e);Qg(n,t),xA(n,t)}function Qg(e,t){const n=Gg.get(e);if(n)for(const r of n)r(t)}function xA(e,t){const n=DA();n&&n.postMessage({key:e,fid:t}),NA()}let Xn=null;function DA(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=e=>{Qg(e.data.key,e.data.fid)}),Xn}function NA(){Gg.size===0&&Xn&&(Xn.close(),Xn=null)}/**
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
 */const OA="firebase-installations-database",kA=1,sr="firebase-installations-store";let da=null;function ac(){return da||(da=dp(OA,kA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(sr)}}})),da}async function Yi(e,t){const n=So(e),s=(await ac()).transaction(sr,"readwrite"),i=s.objectStore(sr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Wg(e,t.fid),t}async function Yg(e){const t=So(e),r=(await ac()).transaction(sr,"readwrite");await r.objectStore(sr).delete(t),await r.done}async function Co(e,t){const n=So(e),s=(await ac()).transaction(sr,"readwrite"),i=s.objectStore(sr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Wg(e,l.fid),l}/**
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
 */async function lc(e){let t;const n=await Co(e.appConfig,r=>{const s=MA(r),i=LA(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===rl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function MA(e){const t=e||{fid:PA(),registrationStatus:0};return Xg(t)}function LA(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(rr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=FA(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:UA(e)}:{installationEntry:t}}async function FA(e,t){try{const n=await RA(e,t);return Yi(e.appConfig,n)}catch(n){throw Bg(n)&&n.customData.serverCode===409?await Yg(e.appConfig):await Yi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function UA(e){let t=await pf(e.appConfig);for(;t.registrationStatus===1;)await Kg(100),t=await pf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lc(e);return r||n}return t}function pf(e){return Co(e,t=>{if(!t)throw rr.create("installation-not-found");return Xg(t)})}function Xg(e){return BA(e)?{fid:e.fid,registrationStatus:0}:e}function BA(e){return e.registrationStatus===1&&e.registrationTime+Lg<Date.now()}/**
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
 */async function $A({appConfig:e,heartbeatServiceProvider:t},n){const r=jA(e,n),s=IA(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Fg,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await zg(()=>fetch(r,l));if(c.ok){const h=await c.json();return jg(h)}else throw await qg("Generate Auth Token",c)}function jA(e,{fid:t}){return`${$g(e)}/${t}/authTokens:generate`}/**
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
 */async function cc(e,t=!1){let n;const r=await Co(e.appConfig,i=>{if(!Jg(i))throw rr.create("not-registered");const a=i.authToken;if(!t&&zA(a))return i;if(a.requestStatus===1)return n=qA(e,t),i;{if(!navigator.onLine)throw rr.create("app-offline");const l=GA(i);return n=HA(e,l),l}});return n?await n:r.authToken}async function qA(e,t){let n=await gf(e.appConfig);for(;n.authToken.requestStatus===1;)await Kg(100),n=await gf(e.appConfig);const r=n.authToken;return r.requestStatus===0?cc(e,t):r}function gf(e){return Co(e,t=>{if(!Jg(t))throw rr.create("not-registered");const n=t.authToken;return WA(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function HA(e,t){try{const n=await $A(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Yi(e.appConfig,r),n}catch(n){if(Bg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Yi(e.appConfig,r)}throw n}}function Jg(e){return e!==void 0&&e.registrationStatus===2}function zA(e){return e.requestStatus===2&&!KA(e)}function KA(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+vA}function GA(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function WA(e){return e.requestStatus===1&&e.requestTime+Lg<Date.now()}/**
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
 */async function QA(e){const t=e,{installationEntry:n,registrationPromise:r}=await lc(t);return r?r.catch(console.error):cc(t).catch(console.error),n.fid}/**
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
 */async function YA(e,t=!1){const n=e;return await XA(n),(await cc(n,t)).token}async function XA(e){const{registrationPromise:t}=await lc(e);t&&await t}/**
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
 */function JA(e){if(!e||!e.options)throw pa("App Configuration");if(!e.name)throw pa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pa(e){return rr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Zg="installations",ZA="installations-internal",tb=e=>{const t=e.getProvider("app").getImmediate(),n=JA(t),r=$s(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eb=e=>{const t=e.getProvider("app").getImmediate(),n=$s(t,Zg).getImmediate();return{getId:()=>QA(n),getToken:s=>YA(n,s)}};function nb(){Nn(new ln(Zg,tb,"PUBLIC")),Nn(new ln(ZA,eb,"PRIVATE"))}nb();Ge(Mg,oc);Ge(Mg,oc,"esm2017");/**
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
 */const Xi="analytics",rb="firebase_id",sb="origin",ib=60*1e3,ob="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",uc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ab={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ae=new fo("analytics","Analytics",ab);/**
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
 */function lb(e){if(!e.startsWith(uc)){const t=Ae.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function tm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function cb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ub(e,t){const n=cb("firebase-js-sdk-policy",{createScriptURL:lb}),r=document.createElement("script"),s=`${uc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function hb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function fb(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await tm(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){ve.error(l)}e("config",s,i)}async function db(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await tm(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ve.error(i)}}function pb(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await db(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await fb(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){ve.error(l)}}return s}function gb(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=pb(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function mb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(uc)&&n.src.includes(e))return n;return null}/**
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
 */const _b=30,yb=1e3;class vb{constructor(t={},n=yb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const em=new vb;function Eb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Tb(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Eb(r)},i=ob.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function wb(e,t=em,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ae.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new bb;return setTimeout(async()=>{l.abort()},ib),nm({appId:r,apiKey:s,measurementId:i},a,l,t)}async function nm(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=em){var i;const{appId:a,measurementId:l}=e;try{await Ib(r,t)}catch(c){if(l)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Tb(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!Ab(h)){if(s.deleteThrottleMetadata(a),l)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?sh(n,s.intervalMillis,_b):sh(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),ve.debug(`Calling attemptFetch again in ${d} millis`),nm(e,p,r,s)}}function Ib(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ab(e){if(!(e instanceof $n)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class bb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Rb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function Sb(){if(cp())try{await up()}catch(e){return ve.warn(Ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cb(e,t,n,r,s,i,a){var l;const c=wb(e);c.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>ve.error(y)),t.push(c);const h=Sb().then(y=>{if(y)return r.getId()}),[d,p]=await Promise.all([c,h]);mb(i)||ub(i,d.measurementId),s("js",new Date);const g=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return g[sb]="firebase",g.update=!0,p!=null&&(g[rb]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class Pb{constructor(t){this.app=t}_delete(){return delete bs[this.app.options.appId],Promise.resolve()}}let bs={},mf=[];const _f={};let ga="dataLayer",Vb="gtag",yf,rm,vf=!1;function xb(){const e=[];if(GE()&&e.push("This is a browser extension environment."),QE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ae.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}function Db(e,t,n){xb();const r=e.options.appId;if(!r)throw Ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(bs[r]!=null)throw Ae.create("already-exists",{id:r});if(!vf){hb(ga);const{wrappedGtag:i,gtagCore:a}=gb(bs,mf,_f,ga,Vb);rm=i,yf=a,vf=!0}return bs[r]=Cb(e,mf,_f,t,yf,ga,n),new Pb(e)}function Nb(e=gp()){e=xr(e);const t=$s(e,Xi);return t.isInitialized()?t.getImmediate():Ob(e)}function Ob(e,t={}){const n=$s(e,Xi);if(n.isInitialized()){const s=n.getImmediate();if(Ns(t,n.getOptions()))return s;throw Ae.create("already-initialized")}return n.initialize({options:t})}function kb(e,t,n,r){e=xr(e),Rb(rm,bs[e.app.options.appId],t,n,r).catch(s=>ve.error(s))}const Ef="@firebase/analytics",Tf="0.10.16";function Mb(){Nn(new ln(Xi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Db(r,s,n)},"PUBLIC")),Nn(new ln("analytics-internal",e,"PRIVATE")),Ge(Ef,Tf),Ge(Ef,Tf,"esm2017");function e(t){try{const n=t.getProvider(Xi).getImmediate();return{logEvent:(r,s,i)=>kb(n,r,s,i)}}catch(n){throw Ae.create("interop-component-reg-failed",{reason:n})}}}Mb();const Lb={apiKey:"AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg",authDomain:"floppyppua.firebaseapp.com",projectId:"floppyppua",storageBucket:"floppyppua.firebasestorage.app",messagingSenderId:"632221136636",appId:"1:632221136636:web:0c906476f404df50dbc979",measurementId:"G-NJ8ZBYWWYH"},sm=pp(Lb);Nb(sm);const Fb=X0(sm),Ub={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Bb={__name:"NewestSoft",setup(e){const t=vi([]),n=vi(!0),r=vi(null),s=async()=>{n.value=!0,r.value=null;try{const i=hA(Y0(Fb,"programs")),a=await _A(i);t.value=a.docs.map(l=>({id:l.id,...l.data()}))}catch(i){console.error("Помилка при отриманні програм:",i),r.value=i}finally{n.value=!1}};return ld(()=>{s()}),(i,a)=>(ge(),rn(we,null,[a[0]||(a[0]=Lt("h2",{class:"xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark"},"Останні оновлення програм",-1)),Lt("div",Ub,[(ge(!0),rn(we,null,D_(t.value,l=>(ge(),Sr(SE,{key:l.id,name:l.name,description:l.description,icon:l.icon,version:l.version,link64:l.link64,link32:l.link32,linkcommon:l.linkcommon},null,8,["name","description","icon","version","link64","link32","linkcommon"]))),128))])],64))}},$b={__name:"HomePage",setup(e){return(t,n)=>(ge(),Sr(Bb))}},im=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},jb={},qb={class:"bg-green-50 shadow-md"},Hb={class:"container mx-auto px-4 py-4"},zb={class:"flex flex-col md:flex-row justify-between items-center"},Kb={class:"flex flex-wrap justify-center md:justify-end gap-6"};function Gb(e,t){const n=hd("RouterLink");return ge(),rn("header",qb,[Lt("div",Hb,[Lt("div",zb,[t[3]||(t[3]=uy('<a class="flex items-center mb-4 md:mb-0" href="/"><div class="text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="2" ry="2" fill="#90EE90" stroke="#7FDD7F" stroke-width="1"></rect><rect x="12" y="12" width="24" height="8" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"></rect><rect x="10" y="25" width="28" height="14" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"></rect><circle cx="24" cy="32" r="2.5" fill="#7FDD7F"></circle><rect x="38" y="18" width="2" height="6" fill="#7FDD7F"></rect><polygon points="38,6 42,6 42,10 38,10" fill="#7FDD7F"></polygon><line x1="14" y1="28" x2="34" y2="28" stroke="#C0C0C0" stroke-width="0.5"></line><line x1="14" y1="31" x2="30" y2="31" stroke="#C0C0C0" stroke-width="0.5"></line><line x1="14" y1="34" x2="32" y2="34" stroke="#C0C0C0" stroke-width="0.5"></line></svg></div><h1 class="xs:text-base 2xl:text-2xl font-bold text-green-dark">Floppy - безкоштовний софт</h1></a>',1)),Lt("nav",Kb,[kt(n,{to:"/internet",class:"text-green-dark hover:text-green-500 transition-colors"},{default:Rn(()=>t[0]||(t[0]=[Sn("Інтернет")])),_:1,__:[0]}),kt(n,{to:"/media",class:"text-green-dark hover:text-green-500 transition-colors"},{default:Rn(()=>t[1]||(t[1]=[Sn("Медіа")])),_:1,__:[1]}),kt(n,{to:"/files",class:"text-green-dark hover:text-green-500 transition-colors"},{default:Rn(()=>t[2]||(t[2]=[Sn("Файли")])),_:1,__:[2]})])])])])}const Wb=im(jb,[["render",Gb]]),Qb={},Yb={class:"bg-green-50 mt-12"},Xb={class:"container mx-auto px-4 py-8"},Jb={class:"text-center"};function Zb(e,t){const n=hd("RouterLink");return ge(),rn(we,null,[Lt("footer",Yb,[Lt("div",Xb,[Lt("div",Jb,[t[2]||(t[2]=Lt("p",{class:"text-gray-600 mb-4"}," © 2025 Floppy - скачати безкоштовний софт. Всі права на програми належать їхнім розробникам. ",-1)),kt(n,{to:"/contact",class:"text-green-600 hover:text-green-700 transition-colors mr-16"},{default:Rn(()=>t[0]||(t[0]=[Sn(" Зв'язатись з адміном ")])),_:1,__:[0]}),kt(n,{to:"/faq",class:"text-green-600 hover:text-green-700 transition-colors"},{default:Rn(()=>t[1]||(t[1]=[Sn(" FAQ ")])),_:1,__:[1]})])])]),(ge(),Sr(dd(e.script),null,{default:Rn(()=>t[3]||(t[3]=[Sn(` // Add smooth scrolling for navigation links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); }); // Add hover effects to software cards document.querySelectorAll('.bg-green-50').forEach(card => { card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-2px)'; this.style.transition = 'transform 0.2s ease'; }); card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; }); }); `)])),_:1,__:[3]}))],64)}const t1=im(Qb,[["render",Zb]]),e1={class:"bg-white text-gray-800"},n1={class:"container mx-auto px-4 py-8"},r1={__name:"Floppy",setup(e){return(t,n)=>(ge(),rn(we,null,[(ge(),Sr(E_,{to:"head"},[(ge(),Sr(dd("script"),{type:"application/ld+json"},{default:Rn(()=>n[0]||(n[0]=[Sn(' { "@context": "https://schema.org", "@type": "WebSite", "url": "https://floppy.pp.ua/", "name":"Floppy", "alternateName":"Floppy" } ')])),_:1,__:[0]}))])),Lt("body",e1,[kt(Wb),Lt("main",n1,[kt(Zn(ip))]),kt(t1)])],64))}},s1="modulepreload",i1=function(e){return"/"+e},wf={},fr=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(h=>{if(h=i1(h),h in wf)return;wf[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":s1,d||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((y,P)=>{g.addEventListener("load",y),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},o1=pE({history:Hv(),routes:[{path:"/",name:"home",component:$b},{path:"/blog",name:"blog",component:()=>fr(()=>import("./BlogPage-DVR1RL2f.js"),[])},{path:"/contact",name:"contact",component:()=>fr(()=>import("./ContactPage-BUbFHR6V.js"),[])},{path:"/faq",name:"faq",component:()=>fr(()=>import("./FAQPage-CrwtsAni.js"),[])},{path:"/internet",name:"internet",component:()=>fr(()=>import("./Internet-_nqci2F6.js"),[])},{path:"/media",name:"media",component:()=>fr(()=>import("./Media-EPcNqGye.js"),[])},{path:"/files",name:"files",component:()=>fr(()=>import("./Files-DDNM5SBK.js"),[])}]}),a1=dv({tagId:"G-LVRGKFB5Y6"}),hc=Hy(r1);hc.use(o1);hc.use(a1);hc.mount("#app");export{we as F,im as _,uy as a,Sr as b,rn as c,Sn as d,Lt as e,vi as f,ld as g,D_ as h,Y0 as i,Fb as j,c1 as k,_A as l,SE as m,ge as o,hA as q,dd as r,Rn as w};
