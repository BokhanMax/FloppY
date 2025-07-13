(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ul(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ct={},Rr=[],Je=()=>{},xm=()=>!1,eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hl=e=>e.startsWith("onUpdate:"),ue=Object.assign,fl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Dm=Object.prototype.hasOwnProperty,bt=(e,t)=>Dm.call(e,t),it=Array.isArray,Sr=e=>no(e)==="[object Map]",Cf=e=>no(e)==="[object Set]",ut=e=>typeof e=="function",Ut=e=>typeof e=="string",zn=e=>typeof e=="symbol",Dt=e=>e!==null&&typeof e=="object",Pf=e=>(Dt(e)||ut(e))&&ut(e.then)&&ut(e.catch),Vf=Object.prototype.toString,no=e=>Vf.call(e),Om=e=>no(e).slice(8,-1),xf=e=>no(e)==="[object Object]",dl=e=>Ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ys=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ro=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nm=/-(\w)/g,ke=ro(e=>e.replace(Nm,(t,n)=>n?n.toUpperCase():"")),km=/\B([A-Z])/g,ur=ro(e=>e.replace(km,"-$1").toLowerCase()),so=ro(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yo=ro(e=>e?`on${so(e)}`:""),xn=(e,t)=>!Object.is(e,t),Jo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ta=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Mm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ou;const io=()=>ou||(ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ut(r)?Bm(r):pl(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ut(e)||Dt(e))return e}const Fm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Um=/\/\*[^]*?\*\//g;function Bm(e){const t={};return e.replace(Um,"").split(Fm).forEach(n=>{if(n){const r=n.split(Lm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function oo(e){let t="";if(Ut(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=oo(e[n]);r&&(t+=r+" ")}else if(Dt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $m="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jm=ul($m);function Df(e){return!!e||e===""}const Of=e=>!!(e&&e.__v_isRef===!0),br=e=>Ut(e)?e:e==null?"":it(e)||Dt(e)&&(e.toString===Vf||!ut(e.toString))?Of(e)?br(e.value):JSON.stringify(e,Nf,2):String(e),Nf=(e,t)=>Of(t)?Nf(e,t.value):Sr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Xo(r,i)+" =>"]=s,n),{})}:Cf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Xo(n))}:zn(t)?Xo(t):Dt(t)&&!it(t)&&!xf(t)?String(t):t,Xo=(e,t="")=>{var n;return zn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ye;class qm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){++this._on===1&&(this.prevScope=ye,ye=this)}off(){this._on>0&&--this._on===0&&(ye=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hm(){return ye}let St;const Zo=new WeakSet;class kf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ye&&ye.active&&ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zo.has(this)&&(Zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ff(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,au(this),Lf(this);const t=St,n=je;St=this,je=!0;try{return this.fn()}finally{Uf(this),St=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_l(t);this.deps=this.depsTail=void 0,au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ia(this)&&this.run()}get dirty(){return Ia(this)}}let Mf=0,vs,Es;function Ff(e,t=!1){if(e.flags|=8,t){e.next=Es,Es=e;return}e.next=vs,vs=e}function gl(){Mf++}function ml(){if(--Mf>0)return;if(Es){let t=Es;for(Es=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;vs;){let t=vs;for(vs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Lf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Uf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_l(r),zm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ia(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Os)||(e.globalVersion=Os,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ia(e))))return;e.flags|=2;const t=e.dep,n=St,r=je;St=e,je=!0;try{Lf(e);const s=e.fn(e._value);(t.version===0||xn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{St=n,je=r,Uf(e),e.flags&=-3}}function _l(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_l(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function zm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const $f=[];function dn(){$f.push(je),je=!1}function pn(){const e=$f.pop();je=e===void 0?!0:e}function au(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=St;St=void 0;try{t()}finally{St=n}}}let Os=0;class Gm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!St||!je||St===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==St)n=this.activeLink=new Gm(St,this),St.deps?(n.prevDep=St.depsTail,St.depsTail.nextDep=n,St.depsTail=n):St.deps=St.depsTail=n,jf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=St.depsTail,n.nextDep=void 0,St.depsTail.nextDep=n,St.depsTail=n,St.deps===n&&(St.deps=r)}return n}trigger(t){this.version++,Os++,this.notify(t)}notify(t){gl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ml()}}}function jf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)jf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Aa=new WeakMap,rr=Symbol(""),ba=Symbol(""),Ns=Symbol("");function ie(e,t,n){if(je&&St){let r=Aa.get(e);r||Aa.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new yl),s.map=r,s.key=n),s.track()}}function hn(e,t,n,r,s,i){const a=Aa.get(e);if(!a){Os++;return}const l=c=>{c&&c.trigger()};if(gl(),t==="clear")a.forEach(l);else{const c=it(e),h=c&&dl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ns||!zn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ns)),t){case"add":c?h&&l(a.get("length")):(l(a.get(rr)),Sr(e)&&l(a.get(ba)));break;case"delete":c||(l(a.get(rr)),Sr(e)&&l(a.get(ba)));break;case"set":Sr(e)&&l(a.get(rr));break}}ml()}function _r(e){const t=At(e);return t===e?t:(ie(t,"iterate",Ns),Oe(e)?t:t.map(Xt))}function ao(e){return ie(e=At(e),"iterate",Ns),e}const Km={__proto__:null,[Symbol.iterator](){return ta(this,Symbol.iterator,Xt)},concat(...e){return _r(this).concat(...e.map(t=>it(t)?_r(t):t))},entries(){return ta(this,"entries",e=>(e[1]=Xt(e[1]),e))},every(e,t){return an(this,"every",e,t,void 0,arguments)},filter(e,t){return an(this,"filter",e,t,n=>n.map(Xt),arguments)},find(e,t){return an(this,"find",e,t,Xt,arguments)},findIndex(e,t){return an(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return an(this,"findLast",e,t,Xt,arguments)},findLastIndex(e,t){return an(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return an(this,"forEach",e,t,void 0,arguments)},includes(...e){return ea(this,"includes",e)},indexOf(...e){return ea(this,"indexOf",e)},join(e){return _r(this).join(e)},lastIndexOf(...e){return ea(this,"lastIndexOf",e)},map(e,t){return an(this,"map",e,t,void 0,arguments)},pop(){return us(this,"pop")},push(...e){return us(this,"push",e)},reduce(e,...t){return lu(this,"reduce",e,t)},reduceRight(e,...t){return lu(this,"reduceRight",e,t)},shift(){return us(this,"shift")},some(e,t){return an(this,"some",e,t,void 0,arguments)},splice(...e){return us(this,"splice",e)},toReversed(){return _r(this).toReversed()},toSorted(e){return _r(this).toSorted(e)},toSpliced(...e){return _r(this).toSpliced(...e)},unshift(...e){return us(this,"unshift",e)},values(){return ta(this,"values",Xt)}};function ta(e,t,n){const r=ao(e),s=r[t]();return r!==e&&!Oe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Wm=Array.prototype;function an(e,t,n,r,s,i){const a=ao(e),l=a!==e&&!Oe(e),c=a[t];if(c!==Wm[t]){const p=c.apply(e,i);return l?Xt(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,Xt(p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function lu(e,t,n,r){const s=ao(e);let i=n;return s!==e&&(Oe(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,Xt(l),c,e)}),s[t](i,...r)}function ea(e,t,n){const r=At(e);ie(r,"iterate",Ns);const s=r[t](...n);return(s===-1||s===!1)&&wl(n[0])?(n[0]=At(n[0]),r[t](...n)):s}function us(e,t,n=[]){dn(),gl();const r=At(e)[t].apply(e,n);return ml(),pn(),r}const Qm=ul("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zn));function Ym(e){zn(e)||(e=String(e));const t=At(this);return ie(t,"has",e),t.hasOwnProperty(e)}class Hf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?o_:Wf:i?Kf:Gf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=Km[n]))return c;if(n==="hasOwnProperty")return Ym}const l=Reflect.get(t,n,ce(t)?t:r);return(zn(n)?qf.has(n):Qm(n))||(s||ie(t,"get",n),i)?l:ce(l)?a&&dl(n)?l:l.value:Dt(l)?s?Yf(l):lo(l):l}}class zf extends Hf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=kn(i);if(!Oe(r)&&!kn(r)&&(i=At(i),r=At(r)),!it(t)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const a=it(t)&&dl(n)?Number(n)<t.length:bt(t,n),l=Reflect.set(t,n,r,ce(t)?t:s);return t===At(s)&&(a?xn(r,i)&&hn(t,"set",n,r):hn(t,"add",n,r)),l}deleteProperty(t,n){const r=bt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&hn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!zn(n)||!qf.has(n))&&ie(t,"has",n),r}ownKeys(t){return ie(t,"iterate",it(t)?"length":rr),Reflect.ownKeys(t)}}class Jm extends Hf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xm=new zf,Zm=new Jm,t_=new zf(!0);const Ra=e=>e,mi=e=>Reflect.getPrototypeOf(e);function e_(e,t,n){return function(...r){const s=this.__v_raw,i=At(s),a=Sr(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?Ra:t?Mi:Xt;return!t&&ie(i,"iterate",c?ba:rr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function _i(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function n_(e,t){const n={get(s){const i=this.__v_raw,a=At(i),l=At(s);e||(xn(s,l)&&ie(a,"get",s),ie(a,"get",l));const{has:c}=mi(a),h=t?Ra:e?Mi:Xt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ie(At(s),"iterate",rr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=At(i),l=At(s);return e||(xn(s,l)&&ie(a,"has",s),ie(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=At(l),h=t?Ra:e?Mi:Xt;return!e&&ie(c,"iterate",rr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ue(n,e?{add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear")}:{add(s){!t&&!Oe(s)&&!kn(s)&&(s=At(s));const i=At(this);return mi(i).has.call(i,s)||(i.add(s),hn(i,"add",s,s)),this},set(s,i){!t&&!Oe(i)&&!kn(i)&&(i=At(i));const a=At(this),{has:l,get:c}=mi(a);let h=l.call(a,s);h||(s=At(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?xn(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=At(this),{has:a,get:l}=mi(i);let c=a.call(i,s);c||(s=At(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&hn(i,"delete",s,void 0),h},clear(){const s=At(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=e_(s,e,t)}),n}function vl(e,t){const n=n_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(bt(n,s)&&s in r?n:r,s,i)}const r_={get:vl(!1,!1)},s_={get:vl(!1,!0)},i_={get:vl(!0,!1)};const Gf=new WeakMap,Kf=new WeakMap,Wf=new WeakMap,o_=new WeakMap;function a_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function l_(e){return e.__v_skip||!Object.isExtensible(e)?0:a_(Om(e))}function lo(e){return kn(e)?e:El(e,!1,Xm,r_,Gf)}function Qf(e){return El(e,!1,t_,s_,Kf)}function Yf(e){return El(e,!0,Zm,i_,Wf)}function El(e,t,n,r,s){if(!Dt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=l_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function Cr(e){return kn(e)?Cr(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function Oe(e){return!!(e&&e.__v_isShallow)}function wl(e){return e?!!e.__v_raw:!1}function At(e){const t=e&&e.__v_raw;return t?At(t):e}function c_(e){return!bt(e,"__v_skip")&&Object.isExtensible(e)&&Ta(e,"__v_skip",!0),e}const Xt=e=>Dt(e)?lo(e):e,Mi=e=>Dt(e)?Yf(e):e;function ce(e){return e?e.__v_isRef===!0:!1}function bi(e){return Jf(e,!1)}function u_(e){return Jf(e,!0)}function Jf(e,t){return ce(e)?e:new h_(e,t)}class h_{constructor(t,n){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:At(t),this._value=n?t:Xt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Oe(t)||kn(t);t=r?t:At(t),xn(t,n)&&(this._rawValue=t,this._value=r?t:Xt(t),this.dep.trigger())}}function sr(e){return ce(e)?e.value:e}const f_={get:(e,t,n)=>t==="__v_raw"?e:sr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Xf(e){return Cr(e)?e:new Proxy(e,f_)}class d_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Ff(this,!0),!0}get value(){const t=this.dep.track();return Bf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function p_(e,t,n=!1){let r,s;return ut(e)?r=e:(r=e.get,s=e.set),new d_(r,s,n)}const yi={},Fi=new WeakMap;let Zn;function g_(e,t=!1,n=Zn){if(n){let r=Fi.get(n);r||Fi.set(n,r=[]),r.push(e)}}function m_(e,t,n=Ct){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=z=>s?z:Oe(z)||s===!1||s===0?Cn(z,1):Cn(z);let d,p,m,v,V=!1,N=!1;if(ce(e)?(p=()=>e.value,V=Oe(e)):Cr(e)?(p=()=>h(e),V=!0):it(e)?(N=!0,V=e.some(z=>Cr(z)||Oe(z)),p=()=>e.map(z=>{if(ce(z))return z.value;if(Cr(z))return h(z);if(ut(z))return c?c(z,2):z()})):ut(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){dn();try{m()}finally{pn()}}const z=Zn;Zn=d;try{return c?c(e,3,[v]):e(v)}finally{Zn=z}}:p=Je,t&&s){const z=p,ft=s===!0?1/0:s;p=()=>Cn(z(),ft)}const F=Hm(),W=()=>{d.stop(),F&&F.active&&fl(F.effects,d)};if(i&&t){const z=t;t=(...ft)=>{z(...ft),W()}}let B=N?new Array(e.length).fill(yi):yi;const H=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const ft=d.run();if(s||V||(N?ft.some((pt,I)=>xn(pt,B[I])):xn(ft,B))){m&&m();const pt=Zn;Zn=d;try{const I=[ft,B===yi?void 0:N&&B[0]===yi?[]:B,v];B=ft,c?c(t,3,I):t(...I)}finally{Zn=pt}}}else d.run()};return l&&l(H),d=new kf(p),d.scheduler=a?()=>a(H,!1):H,v=z=>g_(z,!1,d),m=d.onStop=()=>{const z=Fi.get(d);if(z){if(c)c(z,4);else for(const ft of z)ft();Fi.delete(d)}},t?r?H(!0):B=d.run():a?a(H.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function Cn(e,t=1/0,n){if(t<=0||!Dt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ce(e))Cn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)Cn(e[r],t,n);else if(Cf(e)||Sr(e))e.forEach(r=>{Cn(r,t,n)});else if(xf(e)){for(const r in e)Cn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Cn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(e,t,n,r){try{return r?e(...r):e()}catch(s){co(s,t,n)}}function nn(e,t,n,r){if(ut(e)){const s=Ks(e,t,n,r);return s&&Pf(s)&&s.catch(i=>{co(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(nn(e[i],t,n,r));return s}}function co(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ct;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){dn(),Ks(i,null,10,[e,c,h]),pn();return}}__(e,n,s,r,a)}function __(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const pe=[];let Ke=-1;const Pr=[];let bn=null,vr=0;const Zf=Promise.resolve();let Li=null;function td(e){const t=Li||Zf;return e?t.then(this?e.bind(this):e):t}function y_(e){let t=Ke+1,n=pe.length;for(;t<n;){const r=t+n>>>1,s=pe[r],i=ks(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Tl(e){if(!(e.flags&1)){const t=ks(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=ks(n)?pe.push(e):pe.splice(y_(t),0,e),e.flags|=1,ed()}}function ed(){Li||(Li=Zf.then(rd))}function v_(e){it(e)?Pr.push(...e):bn&&e.id===-1?bn.splice(vr+1,0,e):e.flags&1||(Pr.push(e),e.flags|=1),ed()}function cu(e,t,n=Ke+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nd(e){if(Pr.length){const t=[...new Set(Pr)].sort((n,r)=>ks(n)-ks(r));if(Pr.length=0,bn){bn.push(...t);return}for(bn=t,vr=0;vr<bn.length;vr++){const n=bn[vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,vr=0}}const ks=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rd(e){try{for(Ke=0;Ke<pe.length;Ke++){const t=pe[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ks(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<pe.length;Ke++){const t=pe[Ke];t&&(t.flags&=-2)}Ke=-1,pe.length=0,nd(),Li=null,(pe.length||Pr.length)&&rd()}}let $e=null,sd=null;function Ui(e){const t=$e;return $e=e,sd=e&&e.type.__scopeId||null,t}function un(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&vu(-1);const i=Ui(t);let a;try{a=e(...s)}finally{Ui(i),r._d&&vu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(dn(),nn(c,n,8,[e.el,l,e,t]),pn())}}const E_=Symbol("_vte"),w_=e=>e.__isTeleport;function Il(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Il(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function id(e,t){return ut(e)?ue({name:e.name},t,{setup:e}):e}function od(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ws(e,t,n,r,s=!1){if(it(e)){e.forEach((V,N)=>ws(V,t&&(it(t)?t[N]:t),n,r,s));return}if(Ts(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ws(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Cl(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===Ct?l.refs={}:l.refs,p=l.setupState,m=At(p),v=p===Ct?()=>!1:V=>bt(m,V);if(h!=null&&h!==c&&(Ut(h)?(d[h]=null,v(h)&&(p[h]=null)):ce(h)&&(h.value=null)),ut(c))Ks(c,l,12,[a,d]);else{const V=Ut(c),N=ce(c);if(V||N){const F=()=>{if(e.f){const W=V?v(c)?p[c]:d[c]:c.value;s?it(W)&&fl(W,i):it(W)?W.includes(i)||W.push(i):V?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else V?(d[c]=a,v(c)&&(p[c]=a)):N&&(c.value=a,e.k&&(d[e.k]=a))};a?(F.id=-1,Ie(F,n)):F()}}}io().requestIdleCallback;io().cancelIdleCallback;const Ts=e=>!!e.type.__asyncLoader,ad=e=>e.type.__isKeepAlive;function T_(e,t){ld(e,"a",t)}function I_(e,t){ld(e,"da",t)}function ld(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(uo(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ad(s.parent.vnode)&&A_(r,t,n,s),s=s.parent}}function A_(e,t,n,r){const s=uo(t,e,r,!0);ud(()=>{fl(r[t],s)},n)}function uo(e,t,n=ae,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{dn();const l=Ws(n),c=nn(t,n,e,a);return l(),pn(),c});return r?s.unshift(i):s.push(i),i}}const yn=e=>(t,n=ae)=>{(!Fs||e==="sp")&&uo(e,(...r)=>t(...r),n)},b_=yn("bm"),cd=yn("m"),R_=yn("bu"),S_=yn("u"),C_=yn("bum"),ud=yn("um"),P_=yn("sp"),V_=yn("rtg"),x_=yn("rtc");function D_(e,t=ae){uo("ec",e,t)}const hd="components";function Al(e,t){return fd(hd,e,!0,t)||e}const O_=Symbol.for("v-ndc");function N_(e){return Ut(e)&&fd(hd,e,!1)||e}function fd(e,t,n=!0,r=!1){const s=$e||ae;if(s){const i=s.type;{const l=wy(i,!1);if(l&&(l===t||l===ke(t)||l===so(ke(t))))return i}const a=uu(s[e]||i[e],t)||uu(s.appContext[e],t);return!a&&r?i:a}}function uu(e,t){return e&&(e[t]||e[ke(t)]||e[so(ke(t))])}function k_(e,t,n,r){let s;const i=n,a=it(e);if(a||Ut(e)){const l=a&&Cr(e);let c=!1,h=!1;l&&(c=!Oe(e),h=kn(e),e=ao(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(c?h?Mi(Xt(e[d])):Xt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Dt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const Sa=e=>e?Dd(e)?Cl(e):Sa(e.parent):null,Is=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sa(e.parent),$root:e=>Sa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pd(e),$forceUpdate:e=>e.f||(e.f=()=>{Tl(e.update)}),$nextTick:e=>e.n||(e.n=td.bind(e.proxy)),$watch:e=>ny.bind(e)}),na=(e,t)=>e!==Ct&&!e.__isScriptSetup&&bt(e,t),M_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(na(r,t))return a[t]=1,r[t];if(s!==Ct&&bt(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&bt(h,t))return a[t]=3,i[t];if(n!==Ct&&bt(n,t))return a[t]=4,n[t];Ca&&(a[t]=0)}}const d=Is[t];let p,m;if(d)return t==="$attrs"&&ie(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Ct&&bt(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,bt(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return na(s,t)?(s[t]=n,!0):r!==Ct&&bt(r,t)?(r[t]=n,!0):bt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Ct&&bt(e,a)||na(t,a)||(l=i[0])&&bt(l,a)||bt(r,a)||bt(Is,a)||bt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:bt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function hu(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ca=!0;function F_(e){const t=pd(e),n=e.proxy,r=e.ctx;Ca=!1,t.beforeCreate&&fu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:V,activated:N,deactivated:F,beforeDestroy:W,beforeUnmount:B,destroyed:H,unmounted:z,render:ft,renderTracked:pt,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:S,directives:w,filters:he}=t;if(h&&L_(h,r,null),a)for(const gt in a){const dt=a[gt];ut(dt)&&(r[gt]=dt.bind(n))}if(s){const gt=s.call(n,n);Dt(gt)&&(e.data=lo(gt))}if(Ca=!0,i)for(const gt in i){const dt=i[gt],we=ut(dt)?dt.bind(n,n):ut(dt.get)?dt.get.bind(n,n):Je,Fe=!ut(dt)&&ut(dt.set)?dt.set.bind(n):Je,Se=Be({get:we,set:Fe});Object.defineProperty(r,gt,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ot=>Se.value=Ot})}if(l)for(const gt in l)dd(l[gt],r,n,gt);if(c){const gt=ut(c)?c.call(n):c;Reflect.ownKeys(gt).forEach(dt=>{Ri(dt,gt[dt])})}d&&fu(d,e,"c");function $t(gt,dt){it(dt)?dt.forEach(we=>gt(we.bind(n))):dt&&gt(dt.bind(n))}if($t(b_,p),$t(cd,m),$t(R_,v),$t(S_,V),$t(T_,N),$t(I_,F),$t(D_,y),$t(x_,pt),$t(V_,I),$t(C_,B),$t(ud,z),$t(P_,T),it(A))if(A.length){const gt=e.exposed||(e.exposed={});A.forEach(dt=>{Object.defineProperty(gt,dt,{get:()=>n[dt],set:we=>n[dt]=we})})}else e.exposed||(e.exposed={});ft&&e.render===Je&&(e.render=ft),b!=null&&(e.inheritAttrs=b),S&&(e.components=S),w&&(e.directives=w),T&&od(e)}function L_(e,t,n=Je){it(e)&&(e=Pa(e));for(const r in e){const s=e[r];let i;Dt(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function fu(e,t,n){nn(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function dd(e,t,n,r){let s=r.includes(".")?Sd(n,r):()=>n[r];if(Ut(e)){const i=t[e];ut(i)&&Si(s,i)}else if(ut(e))Si(s,e.bind(n));else if(Dt(e))if(it(e))e.forEach(i=>dd(i,t,n,r));else{const i=ut(e.handler)?e.handler.bind(n):t[e.handler];ut(i)&&Si(s,i,e)}}function pd(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Bi(c,h,a,!0)),Bi(c,t,a)),Dt(t)&&i.set(t,c),c}function Bi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Bi(e,i,n,!0),s&&s.forEach(a=>Bi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=U_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const U_={data:du,props:pu,emits:pu,methods:ps,computed:ps,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ps,directives:ps,watch:$_,provide:du,inject:B_};function du(e,t){return t?e?function(){return ue(ut(e)?e.call(this,this):e,ut(t)?t.call(this,this):t)}:t:e}function B_(e,t){return ps(Pa(e),Pa(t))}function Pa(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function ps(e,t){return e?ue(Object.create(null),e,t):t}function pu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:ue(Object.create(null),hu(e),hu(t??{})):t}function $_(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function gd(){return{app:null,config:{isNativeTag:xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j_=0;function q_(e,t){return function(r,s=null){ut(r)||(r=ue({},r)),s!=null&&!Dt(s)&&(s=null);const i=gd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:j_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ut(d.install)?(a.add(d),d.install(h,...p)):ut(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||kt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(v,d,m),c=!0,h._container=d,d.__vue_app__=h,Cl(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nn(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Vr;Vr=h;try{return d()}finally{Vr=p}}};return h}}let Vr=null;function Ri(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function fn(e,t,n=!1){const r=ae||$e;if(r||Vr){let s=Vr?Vr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ut(t)?t.call(r&&r.proxy):t}}const md={},_d=()=>Object.create(md),yd=e=>Object.getPrototypeOf(e)===md;function H_(e,t,n,r=!1){const s={},i=_d();e.propsDefaults=Object.create(null),vd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Qf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function z_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=At(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ho(e.emitsOptions,m))continue;const v=t[m];if(c)if(bt(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const V=ke(m);s[V]=Va(c,l,V,v,e,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{vd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!bt(t,p)&&((d=ur(p))===p||!bt(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Va(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!bt(t,p))&&(delete i[p],h=!0)}h&&hn(e.attrs,"set","")}function vd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ys(c))continue;const h=t[c];let d;s&&bt(s,d=ke(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ho(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=At(n),h=l||Ct;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Va(s,c,p,h[p],e,!bt(h,p))}}return a}function Va(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=bt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ut(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ws(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ur(n))&&(r=!0))}return r}const G_=new WeakMap;function Ed(e,t,n=!1){const r=n?G_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ut(e)){const d=p=>{c=!0;const[m,v]=Ed(p,t,!0);ue(a,m),v&&l.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Dt(e)&&r.set(e,Rr),Rr;if(it(i))for(let d=0;d<i.length;d++){const p=ke(i[d]);gu(p)&&(a[p]=Ct)}else if(i)for(const d in i){const p=ke(d);if(gu(p)){const m=i[d],v=a[p]=it(m)||ut(m)?{type:m}:ue({},m),V=v.type;let N=!1,F=!0;if(it(V))for(let W=0;W<V.length;++W){const B=V[W],H=ut(B)&&B.name;if(H==="Boolean"){N=!0;break}else H==="String"&&(F=!1)}else N=ut(V)&&V.name==="Boolean";v[0]=N,v[1]=F,(N||bt(v,"default"))&&l.push(p)}}const h=[a,l];return Dt(e)&&r.set(e,h),h}function gu(e){return e[0]!=="$"&&!ys(e)}const bl=e=>e[0]==="_"||e==="$stable",Rl=e=>it(e)?e.map(Qe):[Qe(e)],K_=(e,t,n)=>{if(t._n)return t;const r=un((...s)=>Rl(t(...s)),n);return r._c=!1,r},wd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(bl(s))continue;const i=e[s];if(ut(i))t[s]=K_(s,i,r);else if(i!=null){const a=Rl(i);t[s]=()=>a}}},Td=(e,t)=>{const n=Rl(t);e.slots.default=()=>n},Id=(e,t,n)=>{for(const r in t)(n||!bl(r))&&(e[r]=t[r])},W_=(e,t,n)=>{const r=e.slots=_d();if(e.vnode.shapeFlag&32){const s=t.__;s&&Ta(r,"__",s,!0);const i=t._;i?(Id(r,t,n),n&&Ta(r,"_",i,!0)):wd(t,r)}else t&&Td(e,t)},Q_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Ct;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Id(s,t,n):(i=!t.$stable,wd(t,s)),a=t}else t&&(Td(e,t),a={default:1});if(i)for(const l in s)!bl(l)&&a[l]==null&&delete s[l]},Ie=cy;function Y_(e){return J_(e)}function J_(e,t){const n=io();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Je,insertStaticContent:V}=e,N=(_,E,R,D=null,M=null,O=null,K=void 0,j=null,$=!!E.dynamicChildren)=>{if(_===E)return;_&&!hs(_,E)&&(D=x(_),Ot(_,M,O,!0),_=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:L,ref:et,shapeFlag:G}=E;switch(L){case fo:F(_,E,R,D);break;case Mn:W(_,E,R,D);break;case Ci:_==null&&B(E,R,D,K);break;case Ve:S(_,E,R,D,M,O,K,j,$);break;default:G&1?ft(_,E,R,D,M,O,K,j,$):G&6?w(_,E,R,D,M,O,K,j,$):(G&64||G&128)&&L.process(_,E,R,D,M,O,K,j,$,Z)}et!=null&&M?ws(et,_&&_.ref,O,E||_,!E):et==null&&_&&_.ref!=null&&ws(_.ref,null,O,_,!0)},F=(_,E,R,D)=>{if(_==null)r(E.el=l(E.children),R,D);else{const M=E.el=_.el;E.children!==_.children&&h(M,E.children)}},W=(_,E,R,D)=>{_==null?r(E.el=c(E.children||""),R,D):E.el=_.el},B=(_,E,R,D)=>{[_.el,_.anchor]=V(_.children,E,R,D,_.el,_.anchor)},H=({el:_,anchor:E},R,D)=>{let M;for(;_&&_!==E;)M=m(_),r(_,R,D),_=M;r(E,R,D)},z=({el:_,anchor:E})=>{let R;for(;_&&_!==E;)R=m(_),s(_),_=R;s(E)},ft=(_,E,R,D,M,O,K,j,$)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),_==null?pt(E,R,D,M,O,K,j,$):T(_,E,M,O,K,j,$)},pt=(_,E,R,D,M,O,K,j)=>{let $,L;const{props:et,shapeFlag:G,transition:tt,dirs:st}=_;if($=_.el=a(_.type,O,et&&et.is,et),G&8?d($,_.children):G&16&&y(_.children,$,null,D,M,ra(_,O),K,j),st&&Jn(_,null,D,"created"),I($,_,_.scopeId,K,D),et){for(const lt in et)lt!=="value"&&!ys(lt)&&i($,lt,null,et[lt],O,D);"value"in et&&i($,"value",null,et.value,O),(L=et.onVnodeBeforeMount)&&Ge(L,D,_)}st&&Jn(_,null,D,"beforeMount");const nt=X_(M,tt);nt&&tt.beforeEnter($),r($,E,R),((L=et&&et.onVnodeMounted)||nt||st)&&Ie(()=>{L&&Ge(L,D,_),nt&&tt.enter($),st&&Jn(_,null,D,"mounted")},M)},I=(_,E,R,D,M)=>{if(R&&v(_,R),D)for(let O=0;O<D.length;O++)v(_,D[O]);if(M){let O=M.subTree;if(E===O||Pd(O.type)&&(O.ssContent===E||O.ssFallback===E)){const K=M.vnode;I(_,K,K.scopeId,K.slotScopeIds,M.parent)}}},y=(_,E,R,D,M,O,K,j,$=0)=>{for(let L=$;L<_.length;L++){const et=_[L]=j?Rn(_[L]):Qe(_[L]);N(null,et,E,R,D,M,O,K,j)}},T=(_,E,R,D,M,O,K)=>{const j=E.el=_.el;let{patchFlag:$,dynamicChildren:L,dirs:et}=E;$|=_.patchFlag&16;const G=_.props||Ct,tt=E.props||Ct;let st;if(R&&Xn(R,!1),(st=tt.onVnodeBeforeUpdate)&&Ge(st,R,E,_),et&&Jn(E,_,R,"beforeUpdate"),R&&Xn(R,!0),(G.innerHTML&&tt.innerHTML==null||G.textContent&&tt.textContent==null)&&d(j,""),L?A(_.dynamicChildren,L,j,R,D,ra(E,M),O):K||dt(_,E,j,null,R,D,ra(E,M),O,!1),$>0){if($&16)b(j,G,tt,R,M);else if($&2&&G.class!==tt.class&&i(j,"class",null,tt.class,M),$&4&&i(j,"style",G.style,tt.style,M),$&8){const nt=E.dynamicProps;for(let lt=0;lt<nt.length;lt++){const mt=nt[lt],Kt=G[mt],Wt=tt[mt];(Wt!==Kt||mt==="value")&&i(j,mt,Kt,Wt,M,R)}}$&1&&_.children!==E.children&&d(j,E.children)}else!K&&L==null&&b(j,G,tt,R,M);((st=tt.onVnodeUpdated)||et)&&Ie(()=>{st&&Ge(st,R,E,_),et&&Jn(E,_,R,"updated")},D)},A=(_,E,R,D,M,O,K)=>{for(let j=0;j<E.length;j++){const $=_[j],L=E[j],et=$.el&&($.type===Ve||!hs($,L)||$.shapeFlag&198)?p($.el):R;N($,L,et,null,D,M,O,K,!0)}},b=(_,E,R,D,M)=>{if(E!==R){if(E!==Ct)for(const O in E)!ys(O)&&!(O in R)&&i(_,O,E[O],null,M,D);for(const O in R){if(ys(O))continue;const K=R[O],j=E[O];K!==j&&O!=="value"&&i(_,O,j,K,M,D)}"value"in R&&i(_,"value",E.value,R.value,M)}},S=(_,E,R,D,M,O,K,j,$)=>{const L=E.el=_?_.el:l(""),et=E.anchor=_?_.anchor:l("");let{patchFlag:G,dynamicChildren:tt,slotScopeIds:st}=E;st&&(j=j?j.concat(st):st),_==null?(r(L,R,D),r(et,R,D),y(E.children||[],R,et,M,O,K,j,$)):G>0&&G&64&&tt&&_.dynamicChildren?(A(_.dynamicChildren,tt,R,M,O,K,j),(E.key!=null||M&&E===M.subTree)&&Ad(_,E,!0)):dt(_,E,R,et,M,O,K,j,$)},w=(_,E,R,D,M,O,K,j,$)=>{E.slotScopeIds=j,_==null?E.shapeFlag&512?M.ctx.activate(E,R,D,K,$):he(E,R,D,M,O,K,$):Re(_,E,$)},he=(_,E,R,D,M,O,K)=>{const j=_.component=my(_,D,M);if(ad(_)&&(j.ctx.renderer=Z),_y(j,!1,K),j.asyncDep){if(M&&M.registerDep(j,$t,K),!_.el){const $=j.subTree=kt(Mn);W(null,$,E,R)}}else $t(j,_,E,R,M,O,K)},Re=(_,E,R)=>{const D=E.component=_.component;if(ay(_,E,R))if(D.asyncDep&&!D.asyncResolved){gt(D,E,R);return}else D.next=E,D.update();else E.el=_.el,D.vnode=E},$t=(_,E,R,D,M,O,K)=>{const j=()=>{if(_.isMounted){let{next:G,bu:tt,u:st,parent:nt,vnode:lt}=_;{const te=bd(_);if(te){G&&(G.el=lt.el,gt(_,G,K)),te.asyncDep.then(()=>{_.isUnmounted||j()});return}}let mt=G,Kt;Xn(_,!1),G?(G.el=lt.el,gt(_,G,K)):G=lt,tt&&Jo(tt),(Kt=G.props&&G.props.onVnodeBeforeUpdate)&&Ge(Kt,nt,G,lt),Xn(_,!0);const Wt=_u(_),Ce=_.subTree;_.subTree=Wt,N(Ce,Wt,p(Ce.el),x(Ce),_,M,O),G.el=Wt.el,mt===null&&ly(_,Wt.el),st&&Ie(st,M),(Kt=G.props&&G.props.onVnodeUpdated)&&Ie(()=>Ge(Kt,nt,G,lt),M)}else{let G;const{el:tt,props:st}=E,{bm:nt,m:lt,parent:mt,root:Kt,type:Wt}=_,Ce=Ts(E);Xn(_,!1),nt&&Jo(nt),!Ce&&(G=st&&st.onVnodeBeforeMount)&&Ge(G,mt,E),Xn(_,!0);{Kt.ce&&Kt.ce._def.shadowRoot!==!1&&Kt.ce._injectChildStyle(Wt);const te=_.subTree=_u(_);N(null,te,R,D,_,M,O),E.el=te.el}if(lt&&Ie(lt,M),!Ce&&(G=st&&st.onVnodeMounted)){const te=E;Ie(()=>Ge(G,mt,te),M)}(E.shapeFlag&256||mt&&Ts(mt.vnode)&&mt.vnode.shapeFlag&256)&&_.a&&Ie(_.a,M),_.isMounted=!0,E=R=D=null}};_.scope.on();const $=_.effect=new kf(j);_.scope.off();const L=_.update=$.run.bind($),et=_.job=$.runIfDirty.bind($);et.i=_,et.id=_.uid,$.scheduler=()=>Tl(et),Xn(_,!0),L()},gt=(_,E,R)=>{E.component=_;const D=_.vnode.props;_.vnode=E,_.next=null,z_(_,E.props,D,R),Q_(_,E.children,R),dn(),cu(_),pn()},dt=(_,E,R,D,M,O,K,j,$=!1)=>{const L=_&&_.children,et=_?_.shapeFlag:0,G=E.children,{patchFlag:tt,shapeFlag:st}=E;if(tt>0){if(tt&128){Fe(L,G,R,D,M,O,K,j,$);return}else if(tt&256){we(L,G,R,D,M,O,K,j,$);return}}st&8?(et&16&&_e(L,M,O),G!==L&&d(R,G)):et&16?st&16?Fe(L,G,R,D,M,O,K,j,$):_e(L,M,O,!0):(et&8&&d(R,""),st&16&&y(G,R,D,M,O,K,j,$))},we=(_,E,R,D,M,O,K,j,$)=>{_=_||Rr,E=E||Rr;const L=_.length,et=E.length,G=Math.min(L,et);let tt;for(tt=0;tt<G;tt++){const st=E[tt]=$?Rn(E[tt]):Qe(E[tt]);N(_[tt],st,R,null,M,O,K,j,$)}L>et?_e(_,M,O,!0,!1,G):y(E,R,D,M,O,K,j,$,G)},Fe=(_,E,R,D,M,O,K,j,$)=>{let L=0;const et=E.length;let G=_.length-1,tt=et-1;for(;L<=G&&L<=tt;){const st=_[L],nt=E[L]=$?Rn(E[L]):Qe(E[L]);if(hs(st,nt))N(st,nt,R,null,M,O,K,j,$);else break;L++}for(;L<=G&&L<=tt;){const st=_[G],nt=E[tt]=$?Rn(E[tt]):Qe(E[tt]);if(hs(st,nt))N(st,nt,R,null,M,O,K,j,$);else break;G--,tt--}if(L>G){if(L<=tt){const st=tt+1,nt=st<et?E[st].el:D;for(;L<=tt;)N(null,E[L]=$?Rn(E[L]):Qe(E[L]),R,nt,M,O,K,j,$),L++}}else if(L>tt)for(;L<=G;)Ot(_[L],M,O,!0),L++;else{const st=L,nt=L,lt=new Map;for(L=nt;L<=tt;L++){const Qt=E[L]=$?Rn(E[L]):Qe(E[L]);Qt.key!=null&&lt.set(Qt.key,L)}let mt,Kt=0;const Wt=tt-nt+1;let Ce=!1,te=0;const En=new Array(Wt);for(L=0;L<Wt;L++)En[L]=0;for(L=st;L<=G;L++){const Qt=_[L];if(Kt>=Wt){Ot(Qt,M,O,!0);continue}let Pe;if(Qt.key!=null)Pe=lt.get(Qt.key);else for(mt=nt;mt<=tt;mt++)if(En[mt-nt]===0&&hs(Qt,E[mt])){Pe=mt;break}Pe===void 0?Ot(Qt,M,O,!0):(En[Pe-nt]=L+1,Pe>=te?te=Pe:Ce=!0,N(Qt,E[Pe],R,null,M,O,K,j,$),Kt++)}const Jr=Ce?Z_(En):Rr;for(mt=Jr.length-1,L=Wt-1;L>=0;L--){const Qt=nt+L,Pe=E[Qt],ti=Qt+1<et?E[Qt+1].el:D;En[L]===0?N(null,Pe,R,ti,M,O,K,j,$):Ce&&(mt<0||L!==Jr[mt]?Se(Pe,R,ti,2):mt--)}}},Se=(_,E,R,D,M=null)=>{const{el:O,type:K,transition:j,children:$,shapeFlag:L}=_;if(L&6){Se(_.component.subTree,E,R,D);return}if(L&128){_.suspense.move(E,R,D);return}if(L&64){K.move(_,E,R,Z);return}if(K===Ve){r(O,E,R);for(let G=0;G<$.length;G++)Se($[G],E,R,D);r(_.anchor,E,R);return}if(K===Ci){H(_,E,R);return}if(D!==2&&L&1&&j)if(D===0)j.beforeEnter(O),r(O,E,R),Ie(()=>j.enter(O),M);else{const{leave:G,delayLeave:tt,afterLeave:st}=j,nt=()=>{_.ctx.isUnmounted?s(O):r(O,E,R)},lt=()=>{G(O,()=>{nt(),st&&st()})};tt?tt(O,nt,lt):lt()}else r(O,E,R)},Ot=(_,E,R,D=!1,M=!1)=>{const{type:O,props:K,ref:j,children:$,dynamicChildren:L,shapeFlag:et,patchFlag:G,dirs:tt,cacheIndex:st}=_;if(G===-2&&(M=!1),j!=null&&(dn(),ws(j,null,R,_,!0),pn()),st!=null&&(E.renderCache[st]=void 0),et&256){E.ctx.deactivate(_);return}const nt=et&1&&tt,lt=!Ts(_);let mt;if(lt&&(mt=K&&K.onVnodeBeforeUnmount)&&Ge(mt,E,_),et&6)ze(_.component,R,D);else{if(et&128){_.suspense.unmount(R,D);return}nt&&Jn(_,null,E,"beforeUnmount"),et&64?_.type.remove(_,E,R,Z,D):L&&!L.hasOnce&&(O!==Ve||G>0&&G&64)?_e(L,E,R,!1,!0):(O===Ve&&G&384||!M&&et&16)&&_e($,E,R),D&&Nt(_)}(lt&&(mt=K&&K.onVnodeUnmounted)||nt)&&Ie(()=>{mt&&Ge(mt,E,_),nt&&Jn(_,null,E,"unmounted")},R)},Nt=_=>{const{type:E,el:R,anchor:D,transition:M}=_;if(E===Ve){vn(R,D);return}if(E===Ci){z(_);return}const O=()=>{s(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:j}=M,$=()=>K(R,O);j?j(_.el,O,$):$()}else O()},vn=(_,E)=>{let R;for(;_!==E;)R=m(_),s(_),_=R;s(E)},ze=(_,E,R)=>{const{bum:D,scope:M,job:O,subTree:K,um:j,m:$,a:L,parent:et,slots:{__:G}}=_;mu($),mu(L),D&&Jo(D),et&&it(G)&&G.forEach(tt=>{et.renderCache[tt]=void 0}),M.stop(),O&&(O.flags|=8,Ot(K,_,E,R)),j&&Ie(j,E),Ie(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},_e=(_,E,R,D=!1,M=!1,O=0)=>{for(let K=O;K<_.length;K++)Ot(_[K],E,R,D,M)},x=_=>{if(_.shapeFlag&6)return x(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=m(_.anchor||_.el),R=E&&E[E_];return R?m(R):E};let Y=!1;const Q=(_,E,R)=>{_==null?E._vnode&&Ot(E._vnode,null,null,!0):N(E._vnode||null,_,E,null,null,null,R),E._vnode=_,Y||(Y=!0,cu(),nd(),Y=!1)},Z={p:N,um:Ot,m:Se,r:Nt,mt:he,mc:y,pc:dt,pbc:A,n:x,o:e};return{render:Q,hydrate:void 0,createApp:q_(Q)}}function ra({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function X_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ad(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Rn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ad(a,l)),l.type===fo&&(l.el=a.el),l.type===Mn&&!l.el&&(l.el=a.el)}}function Z_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function bd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bd(t)}function mu(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ty=Symbol.for("v-scx"),ey=()=>fn(ty);function Si(e,t,n){return Rd(e,t,n)}function Rd(e,t,n=Ct){const{immediate:r,deep:s,flush:i,once:a}=n,l=ue({},n),c=t&&r||!t&&i!=="post";let h;if(Fs){if(i==="sync"){const v=ey();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Je,v.resume=Je,v.pause=Je,v}}const d=ae;l.call=(v,V,N)=>nn(v,d,V,N);let p=!1;i==="post"?l.scheduler=v=>{Ie(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,V)=>{V?v():Tl(v)}),l.augmentJob=v=>{t&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=m_(e,t,l);return Fs&&(h?h.push(m):c&&m()),m}function ny(e,t,n){const r=this.proxy,s=Ut(e)?e.includes(".")?Sd(r,e):()=>r[e]:e.bind(r,r);let i;ut(t)?i=t:(i=t.handler,n=t);const a=Ws(this),l=Rd(s,i.bind(r),n);return a(),l}function Sd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ry=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${ur(t)}Modifiers`];function sy(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ct;let s=n;const i=t.startsWith("update:"),a=i&&ry(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ut(d)?d.trim():d)),a.number&&(s=n.map(Mm)));let l,c=r[l=Yo(t)]||r[l=Yo(ke(t))];!c&&i&&(c=r[l=Yo(ur(t))]),c&&nn(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,nn(h,e,6,s)}}function Cd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ut(e)){const c=h=>{const d=Cd(h,t,!0);d&&(l=!0,ue(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Dt(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):ue(a,i),Dt(e)&&r.set(e,a),a)}function ho(e,t){return!e||!eo(t)?!1:(t=t.slice(2).replace(/Once$/,""),bt(e,t[0].toLowerCase()+t.slice(1))||bt(e,ur(t))||bt(e,t))}function _u(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:V,inheritAttrs:N}=e,F=Ui(e);let W,B;try{if(n.shapeFlag&4){const z=s||r,ft=z;W=Qe(h.call(ft,z,d,p,v,m,V)),B=l}else{const z=t;W=Qe(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),B=t.props?l:iy(l)}}catch(z){As.length=0,co(z,e,1),W=kt(Mn)}let H=W;if(B&&N!==!1){const z=Object.keys(B),{shapeFlag:ft}=H;z.length&&ft&7&&(i&&z.some(hl)&&(B=oy(B,i)),H=Mr(H,B,!1,!0))}return n.dirs&&(H=Mr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Il(H,n.transition),W=H,Ui(F),W}const iy=e=>{let t;for(const n in e)(n==="class"||n==="style"||eo(n))&&((t||(t={}))[n]=e[n]);return t},oy=(e,t)=>{const n={};for(const r in e)(!hl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ay(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!ho(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?yu(r,a,h):!0:!!a;return!1}function yu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ho(n,i))return!0}return!1}function ly({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pd=e=>e.__isSuspense;function cy(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):v_(e)}const Ve=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Ci=Symbol.for("v-stc"),As=[];let Ae=null;function ge(e=!1){As.push(Ae=e?null:[])}function uy(){As.pop(),Ae=As[As.length-1]||null}let Ms=1;function vu(e,t=!1){Ms+=e,e<0&&Ae&&t&&(Ae.hasOnce=!0)}function Vd(e){return e.dynamicChildren=Ms>0?Ae||Rr:null,uy(),Ms>0&&Ae&&Ae.push(e),e}function Ue(e,t,n,r,s,i){return Vd(ct(e,t,n,r,s,i,!0))}function po(e,t,n,r,s){return Vd(kt(e,t,n,r,s,!0))}function $i(e){return e?e.__v_isVNode===!0:!1}function hs(e,t){return e.type===t.type&&e.key===t.key}const xd=({key:e})=>e??null,Pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ut(e)||ce(e)||ut(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function ct(e,t=null,n=null,r=0,s=null,i=e===Ve?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xd(t),ref:t&&Pi(t),scopeId:sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return l?(Sl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ut(n)?8:16),Ms>0&&!a&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const kt=hy;function hy(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===O_)&&(e=Mn),$i(e)){const l=Mr(e,t,!0);return n&&Sl(l,n),Ms>0&&!i&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(e)]=l:Ae.push(l)),l.patchFlag=-2,l}if(Ty(e)&&(e=e.__vccOpts),t){t=fy(t);let{class:l,style:c}=t;l&&!Ut(l)&&(t.class=oo(l)),Dt(c)&&(wl(c)&&!it(c)&&(c=ue({},c)),t.style=pl(c))}const a=Ut(e)?1:Pd(e)?128:w_(e)?64:Dt(e)?4:ut(e)?2:0;return ct(e,t,n,r,s,a,i,!0)}function fy(e){return e?wl(e)||yd(e)?ue({},e):e:null}function Mr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?dy(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&xd(h),ref:t&&t.ref?n&&i?it(i)?i.concat(Pi(t)):[i,Pi(t)]:Pi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mr(e.ssContent),ssFallback:e.ssFallback&&Mr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Il(d,c.clone(d)),d}function xe(e=" ",t=0){return kt(fo,null,e,t)}function c1(e,t){const n=kt(Ci,null,e);return n.staticCount=t,n}function fs(e="",t=!1){return t?(ge(),po(Mn,null,e)):kt(Mn,null,e)}function Qe(e){return e==null||typeof e=="boolean"?kt(Mn):it(e)?kt(Ve,null,e.slice()):$i(e)?Rn(e):kt(fo,null,String(e))}function Rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mr(e)}function Sl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Sl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!yd(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ut(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function dy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=oo([t.class,r.class]));else if(s==="style")t.style=pl([t.style,r.style]);else if(eo(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ge(e,t,n,r=null){nn(e,t,7,[n,r])}const py=gd();let gy=0;function my(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||py,i={uid:gy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(r,s),emitsOptions:Cd(r,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:r.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sy.bind(null,i),e.ce&&e.ce(i),i}let ae=null,ji,xa;{const e=io(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ji=t("__VUE_INSTANCE_SETTERS__",n=>ae=n),xa=t("__VUE_SSR_SETTERS__",n=>Fs=n)}const Ws=e=>{const t=ae;return ji(e),e.scope.on(),()=>{e.scope.off(),ji(t)}},Eu=()=>{ae&&ae.scope.off(),ji(null)};function Dd(e){return e.vnode.shapeFlag&4}let Fs=!1;function _y(e,t=!1,n=!1){t&&xa(t);const{props:r,children:s}=e.vnode,i=Dd(e);H_(e,r,i,t),W_(e,s,n||t);const a=i?yy(e,t):void 0;return t&&xa(!1),a}function yy(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,M_);const{setup:r}=n;if(r){dn();const s=e.setupContext=r.length>1?Ey(e):null,i=Ws(e),a=Ks(r,e,0,[e.props,s]),l=Pf(a);if(pn(),i(),(l||e.sp)&&!Ts(e)&&od(e),l){if(a.then(Eu,Eu),t)return a.then(c=>{wu(e,c)}).catch(c=>{co(c,e,0)});e.asyncDep=a}else wu(e,a)}else Od(e)}function wu(e,t,n){ut(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Dt(t)&&(e.setupState=Xf(t)),Od(e)}function Od(e,t,n){const r=e.type;e.render||(e.render=r.render||Je);{const s=Ws(e);dn();try{F_(e)}finally{pn(),s()}}}const vy={get(e,t){return ie(e,"get",""),e[t]}};function Ey(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vy),slots:e.slots,emit:e.emit,expose:t}}function Cl(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xf(c_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Is)return Is[n](e)},has(t,n){return n in t||n in Is}})):e.proxy}function wy(e,t=!0){return ut(e)?e.displayName||e.name:e.name||t&&e.__name}function Ty(e){return ut(e)&&"__vccOpts"in e}const Be=(e,t)=>p_(e,t,Fs);function Nd(e,t,n){const r=arguments.length;return r===2?Dt(t)&&!it(t)?$i(t)?kt(e,null,[t]):kt(e,t):kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$i(n)&&(n=[n]),kt(e,t,n))}const Iy="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Da;const Tu=typeof window<"u"&&window.trustedTypes;if(Tu)try{Da=Tu.createPolicy("vue",{createHTML:e=>e})}catch{}const kd=Da?e=>Da.createHTML(e):e=>e,Ay="http://www.w3.org/2000/svg",by="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,Iu=cn&&cn.createElement("template"),Ry={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?cn.createElementNS(Ay,e):t==="mathml"?cn.createElementNS(by,e):n?cn.createElement(e,{is:n}):cn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>cn.createTextNode(e),createComment:e=>cn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Iu.innerHTML=kd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Iu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sy=Symbol("_vtc");function Cy(e,t,n){const r=e[Sy];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Au=Symbol("_vod"),Py=Symbol("_vsh"),Vy=Symbol(""),xy=/(^|;)\s*display\s*:/;function Dy(e,t,n){const r=e.style,s=Ut(n);let i=!1;if(n&&!s){if(t)if(Ut(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Vi(r,l,"")}else for(const a in t)n[a]==null&&Vi(r,a,"");for(const a in n)a==="display"&&(i=!0),Vi(r,a,n[a])}else if(s){if(t!==n){const a=r[Vy];a&&(n+=";"+a),r.cssText=n,i=xy.test(n)}}else t&&e.removeAttribute("style");Au in e&&(e[Au]=i?r.display:"",e[Py]&&(r.display="none"))}const bu=/\s*!important$/;function Vi(e,t,n){if(it(n))n.forEach(r=>Vi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Oy(e,t);bu.test(n)?e.setProperty(ur(r),n.replace(bu,""),"important"):e[r]=n}}const Ru=["Webkit","Moz","ms"],sa={};function Oy(e,t){const n=sa[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return sa[t]=r;r=so(r);for(let s=0;s<Ru.length;s++){const i=Ru[s]+r;if(i in e)return sa[t]=i}return t}const Su="http://www.w3.org/1999/xlink";function Cu(e,t,n,r,s,i=jm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Su,t.slice(6,t.length)):e.setAttributeNS(Su,t,n):n==null||i&&!Df(n)?e.removeAttribute(t):e.setAttribute(t,i?"":zn(n)?String(n):n)}function Pu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?kd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Df(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Ny(e,t,n,r){e.addEventListener(t,n,r)}function ky(e,t,n,r){e.removeEventListener(t,n,r)}const Vu=Symbol("_vei");function My(e,t,n,r,s=null){const i=e[Vu]||(e[Vu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Fy(t);if(r){const h=i[t]=By(r,s);Ny(e,l,h,c)}else a&&(ky(e,l,a,c),i[t]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function Fy(e){let t;if(xu.test(e)){t={};let r;for(;r=e.match(xu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ur(e.slice(2)),t]}let ia=0;const Ly=Promise.resolve(),Uy=()=>ia||(Ly.then(()=>ia=0),ia=Date.now());function By(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn($y(r,n.value),t,5,[r])};return n.value=e,n.attached=Uy(),n}function $y(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Du=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jy=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Cy(e,r,a):t==="style"?Dy(e,n,r):eo(t)?hl(t)||My(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qy(e,t,r,a))?(Pu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Cu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ut(r))?Pu(e,ke(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cu(e,t,r,a))};function qy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Du(t)&&ut(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Du(t)&&Ut(n)?!1:t in e}const Hy=ue({patchProp:jy},Ry);let Ou;function zy(){return Ou||(Ou=Y_(Hy))}const Gy=(...e)=>{const t=zy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Wy(r);if(!s)return;const i=t._component;!ut(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ky(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Ky(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Wy(e){return Ut(e)?document.querySelector(e):e}function go(){return typeof window>"u"||typeof document>"u"}async function Qy(e,t){return new Promise((n,r)=>{if(go())return n();let s=document.head,i=document.createElement("script");if(i.async=!0,i.src=e,i.type=(t==null?void 0:t.type)??"text/javascript",t!=null&&t.defer&&(i.defer=!0),t!=null&&t.nonce&&i.setAttribute("nonce",t.nonce),t==null?void 0:t.preconnect){let a=document.createElement("link"),l=new URL(e);a.href=l.origin,a.rel="preconnect",s.appendChild(a)}s.appendChild(i),i.onload=()=>n(),i.onerror=a=>r(a)})}function Nu(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}function Md(e,t){let n={...e};for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let s=t[r],i=e[r];Nu(s)&&Nu(i)?n[r]=Md(i,s):n[r]=s}return n}function Yy(e){if(go())return;let t=new URL(window.location.href);t.search="";for(let[n,r]of Object.entries(e))t.searchParams.set(n,r);window.history.replaceState({},"",t.toString())}const Oa="utm_";function Jy(e){let t=new URL(e),n={},r=[],s={};t.searchParams.forEach((i,a)=>{a.includes(Oa)?(n[a.replace(Oa,"").replace("campaign","id")]=i,r.push(a)):s[a]=i});for(let i of r)t.searchParams.delete(i);return{utmParams:n,cleanQueryParams:s,cleanUrl:t.toString()}}function Xy(e){let t=RegExp(`[?&]${Oa}`);return!!e.match(t)}function Zy(e,t){let n=t.endsWith("/")?t:`${t}/`,r=e.startsWith("/")?e.substring(1):e;return`${n}${r}`}const tv={resource:{url:"https://www.googletagmanager.com/gtag/js",inject:!0},dataLayerName:"dataLayer",gtagName:"gtag",groupName:"default",initMode:"auto"};let Na={...tv};function Me(){return Na}function ev(e){Na=Md(Na,e)}function Ne(...e){let{dataLayerName:t,gtagName:n}=Me();go()||(window[t]=window[t]||[],window[n]=function(){window[t].push(arguments)},window[n](...e))}function Fd(e){let{tagId:t,additionalAccounts:n}=Me();if(t&&(Ne("config",t,e),n))for(let r of n)Ne("config",r.tagId,e)}function Pl(e,t){Ne("consent",e,t)}function Ld(e="default"){Pl(e,{ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"granted"})}function Ud(e="default"){Pl(e,{ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"denied"})}function nv(e){Fd({custom_map:e})}function mo(e,t){let{groupName:n,additionalAccounts:r}=Me();t.send_to===void 0&&(r!=null&&r.length)&&(t.send_to=n),Ne("event",e,t)}function rv(e,t){mo(e,t)}function sv(e){mo("exception",e)}function Bd(e){Ne("set","linker",e)}function ku(e,t){t?window[e]=t:delete window[e]}function $d(e,t){let{tagId:n,additionalAccounts:r}=Me();if(!go()&&(ku(`ga-disable-${e??n}`,t),!(!(r!=null&&r.length)||e)))for(let s of r)ku(`ga-disable-${s.tagId}`,t)}function iv(e){$d(e,!0)}function ov(e){$d(e,void 0)}function jd(...e){Ne("set",...e)}function qd(e){var r;let{pageTracker:t}=Me(),n;if(typeof e=="string")n={page_path:e};else if("path"in e){let s=(t==null?void 0:t.router.options.history.base)??"",i=t!=null&&t.useRouteFullPath?e.fullPath:e.path;n={...e.name?{page_title:e.name.toString()}:{},page_path:t!=null&&t.useRouterBasePath?Zy(i,s):i}}else n=e;if(n.page_location===void 0&&(n.page_location=window.location.href),n.send_page_view===void 0&&(n.send_page_view=(t==null?void 0:t.sendPageView)??!0),n.page_path!=="/"&&((r=n.page_path)!=null&&r.endsWith("/"))&&(n.page_path=n.page_path.slice(0,-1)),Xy(n.page_location)){let{utmParams:s,cleanUrl:i,cleanQueryParams:a}=Jy(n.page_location);n.page_location=i,Yy(a),jd("campaign",s)}Ne("event","page_view",n)}function Hd(e){let{appName:t}=Me(),n={};typeof e=="string"?n.screen_name=e:"path"in e?n.screen_name=e.name??e.path:n=e,t&&(n==null?void 0:n.app_name)===void 0&&(n.app_name=t),Ne("event","screen_view",n)}function av(e){mo("timing_complete",e)}function Mu(e={}){return{send_page_view:!1,anonymize_ip:!0,...e}}function lv(){var l,c;let{tagId:e,config:t,groupName:n,linker:r,additionalAccounts:s,hooks:i,consentMode:a}=Me();if(e){if((l=i==null?void 0:i["config:init:before"])==null||l.call(i),a==="granted"?Ld():a==="denied"&&Ud(),r&&Bd(r),Ne("js",new Date),Ne("config",e,Mu(t)),s)for(let h of s)Ne("config",h.tagId,Mu({groups:n,...h.config}));(c=i==null?void 0:i["config:init:after"])==null||c.call(i)}}function cv(e){var n;let{pageTracker:t}=Me();return t!=null&&t.exclude?typeof t.exclude=="function"?t.exclude(e):(n=t.exclude)==null?void 0:n.some(({name:r,path:s}={})=>r&&r===e.name||s&&s===e.path):!1}function Fu(e){var s,i;let{pageTracker:t,hooks:n}=Me();if(cv(e))return;(s=n==null?void 0:n["router:track:before"])==null||s.call(n,e);let r;if(t!=null&&t.template&&(r=typeof t.template=="function"?t.template(e):t.template),t==null?void 0:t.useScreenview){let a=r&&"screen_name"in r?r:e;Hd(a)}else{let a=r&&"page_path"in r?r:e;qd(a)}(i=n==null?void 0:n["router:track:after"])==null||i.call(n,e)}async function uv(){let{pageTracker:e}=Me();if(!(e!=null&&e.router))return;let{router:t}=e;await t.isReady(),Fu(t.currentRoute.value),t.afterEach((n,r)=>{n.path!==r.path&&Fu(n)})}async function hv(){var i,a;let{resource:e,dataLayerName:t,tagId:n,pageTracker:r,hooks:s}=Me();if(n&&(lv(),r!=null&&r.router&&uv(),e.inject))try{await Qy(`${e.url}?id=${n}&l=${t}`,{preconnect:e.preconnect,defer:e.defer,nonce:e.nonce}),(i=s==null?void 0:s["script:loaded"])==null||i.call(s)}catch(l){(a=s==null?void 0:s["script:error"])==null||a.call(s,l)}}function fv(){let{initMode:e}=Me();e!=="manual"&&hv()}function dv(e){ev(e),fv()}const pv={config:Fd,consent:Pl,consentDeniedAll:Ud,consentGrantedAll:Ld,customMap:nv,ecommerce:rv,event:mo,exception:sv,linker:Bd,optIn:ov,optOut:iv,pageview:qd,screenview:Hd,set:jd,time:av,query:Ne};function gv(e){return dv(e),t=>{t.config.globalProperties.$gtag=pv}}const zd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},mv={},_v={class:"bg-green-50 shadow-md"},yv={class:"container mx-auto px-4 py-4"},vv={class:"flex flex-col md:flex-row justify-between items-center"},Ev={class:"flex flex-wrap justify-center md:justify-end gap-6"};function wv(e,t){const n=Al("RouterLink");return ge(),Ue(Ve,null,[ct("header",_v,[ct("div",yv,[ct("div",vv,[t[5]||(t[5]=ct("a",{class:"flex items-center mb-4 md:mb-0",href:"/"},[ct("div",{class:"text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3"},[ct("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",role:"img"},[ct("title",null,"Floppy"),ct("desc",null,"український каталог безкоштовних програм"),ct("rect",{x:"6",y:"6",width:"36",height:"36",rx:"2",ry:"2",fill:"#90EE90",stroke:"#7FDD7F","stroke-width":"1"}),ct("rect",{x:"12",y:"12",width:"24",height:"8",rx:"1",ry:"1",fill:"#FFFFFF",stroke:"#E0E0E0","stroke-width":"0.5"}),ct("rect",{x:"10",y:"25",width:"28",height:"14",rx:"1",ry:"1",fill:"#FFFFFF",stroke:"#E0E0E0","stroke-width":"0.5"}),ct("circle",{cx:"24",cy:"32",r:"2.5",fill:"#7FDD7F"}),ct("rect",{x:"38",y:"18",width:"2",height:"6",fill:"#7FDD7F"}),ct("polygon",{points:"38,6 42,6 42,10 38,10",fill:"#7FDD7F"}),ct("line",{x1:"14",y1:"28",x2:"34",y2:"28",stroke:"#C0C0C0","stroke-width":"0.5"}),ct("line",{x1:"14",y1:"31",x2:"30",y2:"31",stroke:"#C0C0C0","stroke-width":"0.5"}),ct("line",{x1:"14",y1:"34",x2:"32",y2:"34",stroke:"#C0C0C0","stroke-width":"0.5"})])]),ct("h1",{class:"xs:text-base 2xl:text-2xl font-bold text-green-dark"}," Floppy - безкоштовний софт ")],-1)),ct("nav",Ev,[kt(n,{to:"/internet",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[0]||(t[0]=[xe("Інтернет")])),_:1,__:[0]}),kt(n,{to:"/media",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[1]||(t[1]=[xe("Медіа")])),_:1,__:[1]}),kt(n,{to:"/files",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[2]||(t[2]=[xe("Файли")])),_:1,__:[2]}),kt(n,{to:"/system",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[3]||(t[3]=[xe("Система")])),_:1,__:[3]}),kt(n,{to:"/development",class:"text-green-dark hover:text-green-500 transition-colors"},{default:un(()=>t[4]||(t[4]=[xe("Розробка")])),_:1,__:[4]})])])])]),(ge(),po(N_("script"),null,{default:un(()=>t[6]||(t[6]=[xe(` // Add smooth scrolling for navigation links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); }); // Add hover effects to software cards document.querySelectorAll('.bg-green-50').forEach(card => { card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-2px)'; this.style.transition = 'transform 0.2s ease'; }); card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; }); }); `)])),_:1,__:[6]}))],64)}const Tv=zd(mv,[["render",wv]]),Iv={},Av={class:"bg-green-50 mt-12"},bv={class:"container mx-auto px-4 py-8"},Rv={class:"text-center"};function Sv(e,t){const n=Al("RouterLink");return ge(),Ue("footer",Av,[ct("div",bv,[ct("div",Rv,[t[2]||(t[2]=ct("p",{class:"text-gray-600 mb-4"},[xe(" © 2025 "),ct("b",null,[ct("a",{href:"/"},"Floppy")]),xe(" - скачати безкоштовний софт. Український каталог безкоштовних програм."),ct("br"),xe(" Всі права на програми належать їхнім розробникам. ")],-1)),kt(n,{to:"/contact",class:"text-green-600 hover:text-green-700 transition-colors mr-16"},{default:un(()=>t[0]||(t[0]=[xe(" Зв'язатись з адміном ")])),_:1,__:[0]}),kt(n,{to:"/faq",class:"text-green-600 hover:text-green-700 transition-colors"},{default:un(()=>t[1]||(t[1]=[xe(" FAQ ")])),_:1,__:[1]})])])])}const Cv=zd(Iv,[["render",Sv]]),Pv={class:"container mx-auto px-4 py-8"},Vv={__name:"Floppy",setup(e){return(t,n)=>{const r=Al("router-view");return ge(),Ue(Ve,null,[kt(Tv),ct("main",Pv,[(ge(),po(r,{key:t.$route.fullPath}))]),kt(Cv)],64)}}},xv="modulepreload",Dv=function(e){return"/"+e},Lu={},oa=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(h=>{if(h=Dv(h),h in Lu)return;Lu[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":xv,d||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((v,V)=>{m.addEventListener("load",v),m.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof document<"u";function Gd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ov(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gd(e.default)}const It=Object.assign;function aa(e,t){const n={};for(const r in t){const s=t[r];n[r]=qe(s)?s.map(e):e(s)}return n}const bs=()=>{},qe=Array.isArray,Kd=/#/g,Nv=/&/g,kv=/\//g,Mv=/=/g,Fv=/\?/g,Wd=/\+/g,Lv=/%5B/g,Uv=/%5D/g,Qd=/%5E/g,Bv=/%60/g,Yd=/%7B/g,$v=/%7C/g,Jd=/%7D/g,jv=/%20/g;function Vl(e){return encodeURI(""+e).replace($v,"|").replace(Lv,"[").replace(Uv,"]")}function qv(e){return Vl(e).replace(Yd,"{").replace(Jd,"}").replace(Qd,"^")}function ka(e){return Vl(e).replace(Wd,"%2B").replace(jv,"+").replace(Kd,"%23").replace(Nv,"%26").replace(Bv,"`").replace(Yd,"{").replace(Jd,"}").replace(Qd,"^")}function Hv(e){return ka(e).replace(Mv,"%3D")}function zv(e){return Vl(e).replace(Kd,"%23").replace(Fv,"%3F")}function Gv(e){return e==null?"":zv(e).replace(kv,"%2F")}function Ls(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Kv=/\/$/,Wv=e=>e.replace(Kv,"");function la(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Xv(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ls(a)}}function Qv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Uu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yv(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fr(t.matched[r],n.matched[s])&&Xd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jv(e[n],t[n]))return!1;return!0}function Jv(e,t){return qe(e)?Bu(e,t):qe(t)?Bu(t,e):e===t}function Bu(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var Rs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rs||(Rs={}));function Zv(e){if(!e)if(Er){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wv(e)}const tE=/^[^#]+#/;function eE(e,t){return e.replace(tE,"#")+t}function nE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const _o=()=>({left:window.scrollX,top:window.scrollY});function rE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=nE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $u(e,t){return(history.state?history.state.position-t:-1)+e}const Ma=new Map;function sE(e,t){Ma.set(e,t)}function iE(e){const t=Ma.get(e);return Ma.delete(e),t}let oE=()=>location.protocol+"//"+location.host;function Zd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Uu(c,"")}return Uu(n,e)+r+s}function aE(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const v=Zd(e,location),V=n.value,N=t.value;let F=0;if(m){if(n.value=v,t.value=m,a&&a===V){a=null;return}F=N?m.position-N.position:0}else r(v);s.forEach(W=>{W(n.value,V,{delta:F,type:Us.pop,direction:F?F>0?Rs.forward:Rs.back:Rs.unknown})})};function c(){a=n.value}function h(m){s.push(m);const v=()=>{const V=s.indexOf(m);V>-1&&s.splice(V,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(It({},m.state,{scroll:_o()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function ju(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?_o():null}}function lE(e){const{history:t,location:n}=window,r={value:Zd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:oE()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function a(c,h){const d=It({},t.state,ju(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=It({},s.value,t.state,{forward:c,scroll:_o()});i(d.current,d,!0);const p=It({},ju(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function cE(e){e=Zv(e);const t=lE(e),n=aE(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=It({location:"",base:e,go:r,createHref:eE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function uE(e){return typeof e=="string"||e&&typeof e=="object"}function tp(e){return typeof e=="string"||typeof e=="symbol"}const ep=Symbol("");var qu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qu||(qu={}));function Lr(e,t){return It(new Error,{type:e,[ep]:!0},t)}function ln(e,t){return e instanceof Error&&ep in e&&(t==null||!!(e.type&t))}const Hu="[^/]+?",hE={sensitive:!1,strict:!1,start:!0,end:!0},fE=/[.+*?^${}()[\]/\\]/g;function dE(e,t){const n=It({},hE,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(fE,"\\$&"),v+=40;else if(m.type===1){const{value:V,repeatable:N,optional:F,regexp:W}=m;i.push({name:V,repeatable:N,optional:F});const B=W||Hu;if(B!==Hu){v+=10;try{new RegExp(`(${B})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${V}" (${B}): `+z.message)}}let H=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=F&&h.length<2?`(?:/${H})`:"/"+H),F&&(H+="?"),s+=H,v+=20,F&&(v+=-8),N&&(v+=-20),B===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",V=i[m-1];p[V.name]=v&&V.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:V,repeatable:N,optional:F}=v,W=V in h?h[V]:"";if(qe(W)&&!N)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const B=qe(W)?W.join("/"):W;if(!B)if(F)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${V}"`);d+=B}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function pE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function np(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=pE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zu(r))return 1;if(zu(s))return-1}return s.length-r.length}function zu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gE={type:0,value:""},mE=/[a-zA-Z0-9_]/;function _E(e){if(!e)return[[]];if(e==="/")return[[gE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:mE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function yE(e,t,n){const r=dE(_E(e.path),n),s=It(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function vE(e,t){const n=[],r=new Map;t=Qu({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,m,v){const V=!v,N=Ku(p);N.aliasOf=v&&v.record;const F=Qu(t,p),W=[N];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ft of z)W.push(Ku(It({},N,{components:v?v.record.components:N.components,path:ft,aliasOf:v?v.record:N})))}let B,H;for(const z of W){const{path:ft}=z;if(m&&ft[0]!=="/"){const pt=m.record.path,I=pt[pt.length-1]==="/"?"":"/";z.path=m.record.path+(ft&&I+ft)}if(B=yE(z,m,F),v?v.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),V&&p.name&&!Wu(B)&&a(p.name)),rp(B)&&c(B),N.children){const pt=N.children;for(let I=0;I<pt.length;I++)i(pt[I],B,v&&v.children[I])}v=v||B}return H?()=>{a(H)}:bs}function a(p){if(tp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=TE(p,n);n.splice(m,0,p),p.record.name&&!Wu(p)&&r.set(p.record.name,p)}function h(p,m){let v,V={},N,F;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Lr(1,{location:p});F=v.record.name,V=It(Gu(m.params,v.keys.filter(H=>!H.optional).concat(v.parent?v.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Gu(p.params,v.keys.map(H=>H.name))),N=v.stringify(V)}else if(p.path!=null)N=p.path,v=n.find(H=>H.re.test(N)),v&&(V=v.parse(N),F=v.record.name);else{if(v=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!v)throw Lr(1,{location:p,currentLocation:m});F=v.record.name,V=It({},m.params,p.params),N=v.stringify(V)}const W=[];let B=v;for(;B;)W.unshift(B.record),B=B.parent;return{name:F,path:N,params:V,matched:W,meta:wE(W)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Gu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ku(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:EE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function EE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Wu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function wE(e){return e.reduce((t,n)=>It(t,n.meta),{})}function Qu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function TE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;np(e,t[i])<0?r=i:n=i+1}const s=IE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function IE(e){let t=e;for(;t=t.parent;)if(rp(t)&&np(e,t)===0)return t}function rp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function AE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wd," "),a=i.indexOf("="),l=Ls(a<0?i:i.slice(0,a)),c=a<0?null:Ls(i.slice(a+1));if(l in t){let h=t[l];qe(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Yu(e){let t="";for(let n in e){const r=e[n];if(n=Hv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&ka(i)):[r&&ka(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function bE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const RE=Symbol(""),Ju=Symbol(""),xl=Symbol(""),sp=Symbol(""),Fa=Symbol("");function ds(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Sn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Lr(4,{from:n,to:t})):m instanceof Error?c(m):uE(m)?c(Lr(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function ca(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Gd(c)){const d=(c.__vccOpts||c)[t];d&&i.push(Sn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Ov(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const v=(p.__vccOpts||p)[t];return v&&Sn(v,n,r,a,l,s)()}))}}return i}function Xu(e){const t=fn(xl),n=fn(sp),r=Be(()=>{const c=sr(e.to);return t.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Fr.bind(null,d));if(m>-1)return m;const v=Zu(c[h-2]);return h>1&&Zu(d)===v&&p[p.length-1].path!==v?p.findIndex(Fr.bind(null,c[h-2])):m}),i=Be(()=>s.value>-1&&xE(n.params,r.value.params)),a=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Xd(n.params,r.value.params));function l(c={}){if(VE(c)){const h=t[sr(e.replace)?"replace":"push"](sr(e.to)).catch(bs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function SE(e){return e.length===1?e[0]:e}const CE=id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xu,setup(e,{slots:t}){const n=lo(Xu(e)),{options:r}=fn(xl),s=Be(()=>({[th(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[th(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&SE(t.default(n));return e.custom?i:Nd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),PE=CE;function VE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Zu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const th=(e,t,n)=>e??t??n,DE=id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=fn(Fa),s=Be(()=>e.route||r.value),i=fn(Ju,0),a=Be(()=>{let h=sr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Be(()=>s.value.matched[a.value]);Ri(Ju,Be(()=>a.value+1)),Ri(RE,l),Ri(Fa,s);const c=bi();return Si(()=>[c.value,l.value,e.name],([h,d,p],[m,v,V])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!Fr(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return eh(n.default,{Component:m,route:h});const v=p.props[d],V=v?v===!0?h.params:typeof v=="function"?v(h):v:null,F=Nd(m,It({},V,t,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return eh(n.default,{Component:F,route:h})||F}}});function eh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const OE=DE;function NE(e){const t=vE(e.routes,e),n=e.parseQuery||AE,r=e.stringifyQuery||Yu,s=e.history,i=ds(),a=ds(),l=ds(),c=u_(An);let h=An;Er&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=aa.bind(null,x=>""+x),p=aa.bind(null,Gv),m=aa.bind(null,Ls);function v(x,Y){let Q,Z;return tp(x)?(Q=t.getRecordMatcher(x),Z=Y):Z=x,t.addRoute(Z,Q)}function V(x){const Y=t.getRecordMatcher(x);Y&&t.removeRoute(Y)}function N(){return t.getRoutes().map(x=>x.record)}function F(x){return!!t.getRecordMatcher(x)}function W(x,Y){if(Y=It({},Y||c.value),typeof x=="string"){const R=la(n,x,Y.path),D=t.resolve({path:R.path},Y),M=s.createHref(R.fullPath);return It(R,D,{params:m(D.params),hash:Ls(R.hash),redirectedFrom:void 0,href:M})}let Q;if(x.path!=null)Q=It({},x,{path:la(n,x.path,Y.path).path});else{const R=It({},x.params);for(const D in R)R[D]==null&&delete R[D];Q=It({},x,{params:p(R)}),Y.params=p(Y.params)}const Z=t.resolve(Q,Y),wt=x.hash||"";Z.params=d(m(Z.params));const _=Qv(r,It({},x,{hash:qv(wt),path:Z.path})),E=s.createHref(_);return It({fullPath:_,hash:wt,query:r===Yu?bE(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:E})}function B(x){return typeof x=="string"?la(n,x,c.value.path):It({},x)}function H(x,Y){if(h!==x)return Lr(8,{from:Y,to:x})}function z(x){return I(x)}function ft(x){return z(It(B(x),{replace:!0}))}function pt(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(x):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),It({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function I(x,Y){const Q=h=W(x),Z=c.value,wt=x.state,_=x.force,E=x.replace===!0,R=pt(Q);if(R)return I(It(B(R),{state:typeof R=="object"?It({},wt,R.state):wt,force:_,replace:E}),Y||Q);const D=Q;D.redirectedFrom=Y;let M;return!_&&Yv(r,Z,Q)&&(M=Lr(16,{to:D,from:Z}),Se(Z,Z,!0,!1)),(M?Promise.resolve(M):A(D,Z)).catch(O=>ln(O)?ln(O,2)?O:Fe(O):dt(O,D,Z)).then(O=>{if(O){if(ln(O,2))return I(It({replace:E},B(O.to),{state:typeof O.to=="object"?It({},wt,O.to.state):wt,force:_}),Y||D)}else O=S(D,Z,!0,E,wt);return b(D,Z,O),O})}function y(x,Y){const Q=H(x,Y);return Q?Promise.reject(Q):Promise.resolve()}function T(x){const Y=vn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function A(x,Y){let Q;const[Z,wt,_]=kE(x,Y);Q=ca(Z.reverse(),"beforeRouteLeave",x,Y);for(const R of Z)R.leaveGuards.forEach(D=>{Q.push(Sn(D,x,Y))});const E=y.bind(null,x,Y);return Q.push(E),_e(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Sn(R,x,Y));return Q.push(E),_e(Q)}).then(()=>{Q=ca(wt,"beforeRouteUpdate",x,Y);for(const R of wt)R.updateGuards.forEach(D=>{Q.push(Sn(D,x,Y))});return Q.push(E),_e(Q)}).then(()=>{Q=[];for(const R of _)if(R.beforeEnter)if(qe(R.beforeEnter))for(const D of R.beforeEnter)Q.push(Sn(D,x,Y));else Q.push(Sn(R.beforeEnter,x,Y));return Q.push(E),_e(Q)}).then(()=>(x.matched.forEach(R=>R.enterCallbacks={}),Q=ca(_,"beforeRouteEnter",x,Y,T),Q.push(E),_e(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Sn(R,x,Y));return Q.push(E),_e(Q)}).catch(R=>ln(R,8)?R:Promise.reject(R))}function b(x,Y,Q){l.list().forEach(Z=>T(()=>Z(x,Y,Q)))}function S(x,Y,Q,Z,wt){const _=H(x,Y);if(_)return _;const E=Y===An,R=Er?history.state:{};Q&&(Z||E?s.replace(x.fullPath,It({scroll:E&&R&&R.scroll},wt)):s.push(x.fullPath,wt)),c.value=x,Se(x,Y,Q,E),Fe()}let w;function he(){w||(w=s.listen((x,Y,Q)=>{if(!ze.listening)return;const Z=W(x),wt=pt(Z);if(wt){I(It(wt,{replace:!0,force:!0}),Z).catch(bs);return}h=Z;const _=c.value;Er&&sE($u(_.fullPath,Q.delta),_o()),A(Z,_).catch(E=>ln(E,12)?E:ln(E,2)?(I(It(B(E.to),{force:!0}),Z).then(R=>{ln(R,20)&&!Q.delta&&Q.type===Us.pop&&s.go(-1,!1)}).catch(bs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),dt(E,Z,_))).then(E=>{E=E||S(Z,_,!1),E&&(Q.delta&&!ln(E,8)?s.go(-Q.delta,!1):Q.type===Us.pop&&ln(E,20)&&s.go(-1,!1)),b(Z,_,E)}).catch(bs)}))}let Re=ds(),$t=ds(),gt;function dt(x,Y,Q){Fe(x);const Z=$t.list();return Z.length?Z.forEach(wt=>wt(x,Y,Q)):console.error(x),Promise.reject(x)}function we(){return gt&&c.value!==An?Promise.resolve():new Promise((x,Y)=>{Re.add([x,Y])})}function Fe(x){return gt||(gt=!x,he(),Re.list().forEach(([Y,Q])=>x?Q(x):Y()),Re.reset()),x}function Se(x,Y,Q,Z){const{scrollBehavior:wt}=e;if(!Er||!wt)return Promise.resolve();const _=!Q&&iE($u(x.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return td().then(()=>wt(x,Y,_)).then(E=>E&&rE(E)).catch(E=>dt(E,x,Y))}const Ot=x=>s.go(x);let Nt;const vn=new Set,ze={currentRoute:c,listening:!0,addRoute:v,removeRoute:V,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:N,resolve:W,options:e,push:z,replace:ft,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$t.add,isReady:we,install(x){const Y=this;x.component("RouterLink",PE),x.component("RouterView",OE),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>sr(c)}),Er&&!Nt&&c.value===An&&(Nt=!0,z(s.location).catch(wt=>{}));const Q={};for(const wt in An)Object.defineProperty(Q,wt,{get:()=>c.value[wt],enumerable:!0});x.provide(xl,Y),x.provide(sp,Qf(Q)),x.provide(Fa,c);const Z=x.unmount;vn.add(x),x.unmount=function(){vn.delete(x),vn.size<1&&(h=An,w&&w(),w=null,c.value=An,Nt=!1,gt=!1),Z()}}};function _e(x){return x.reduce((Y,Q)=>Y.then(()=>T(Q)),Promise.resolve())}return ze}function kE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Fr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Fr(h,c))||s.push(c))}return[n,r,s]}const ME=["id"],FE={class:"flex items-center place-content-between mb-4"},LE={class:"flex"},UE={class:"text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4"},BE=["src","alt","title"],$E={class:"flex"},jE={class:"flex flex-col"},qE={class:"text-xl font-semibold text-green-dark"},HE={class:"text-green-600"},zE={class:"flex self-start flex-col items-end"},GE={class:"text-green-400 text-[9px] mb-1"},KE=["href"],WE={class:"text-gray-600 mb-4"},QE={class:"flex flex-col sm:flex-row gap-2"},YE=["href"],JE=["href"],XE=["href"],ZE=["href"],tw={__name:"ProgramCard",props:{id:{type:String},name:{type:String,required:!0},description:{type:String},createdAt:{type:String},version:{type:String},website:{type:String},icon:{type:String},link32:{type:String},link64:{type:String},linkcommon:{type:String},linkupdate:{type:String}},setup(e){const t=e,n=t.createdAt.toDate().toLocaleDateString();return(r,s)=>(ge(),Ue("div",{class:"bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",id:t.id},[ct("div",FE,[ct("div",LE,[ct("div",UE,[ct("img",{src:"icons/"+t.name.replace(/\s+/g,"")+"Icon.png",width:"48",height:"48",alt:e.name,title:"Скачати "+t.name+" безкоштовно по прямому посиланню"},null,8,BE)]),ct("div",$E,[ct("div",jE,[ct("h3",qE,br(e.name),1),ct("p",HE,br(e.version),1)])])]),ct("div",zE,[ct("span",GE," Оновлено: "+br(sr(n)),1),e.website?(ge(),Ue("a",{key:0,href:t.website,class:"text-gray-600 text-xs",target:"_blank"}," 🌐 Веб-сайт ",8,KE)):fs("",!0)])]),ct("p",WE,br(e.description),1),ct("div",QE,[e.link64?(ge(),Ue("a",{key:0,href:t.link64,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x64 ",8,YE)):fs("",!0),e.link32?(ge(),Ue("a",{key:1,href:t.link32,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x32 ",8,JE)):fs("",!0),e.linkcommon?(ge(),Ue("a",{key:2,href:t.linkcommon,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Завантажити x86-x64 ",8,XE)):fs("",!0),e.linkupdate?(ge(),Ue("a",{key:3,href:t.linkupdate,class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center"}," Апдейт ",8,ZE)):fs("",!0)])],8,ME))}},ew=()=>{};var nh={};/**
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
 */const ip=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},nw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,a||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ip(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):nw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new rw;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sw=function(e){const t=ip(e);return op.encodeByteArray(t,!0)},qi=function(e){return sw(e).replace(/\./g,"")},iw=function(e){try{return op.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ow(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aw=()=>ow().__FIREBASE_DEFAULTS__,lw=()=>{if(typeof process>"u"||typeof nh>"u")return;const e=nh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&iw(e[1]);return t&&JSON.parse(t)},Dl=()=>{try{return ew()||aw()||lw()||cw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},uw=e=>{var t,n;return(n=(t=Dl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hw=e=>{const t=uw(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ap=()=>{var e;return(e=Dl())===null||e===void 0?void 0:e.config};/**
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
 */class fw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ol(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dw(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function pw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[qi(JSON.stringify(n)),qi(JSON.stringify(a)),""].join(".")}const Ss={};function gw(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ss))Ss[t]?e.emulator.push(t):e.prod.push(t);return e}function mw(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let rh=!1;function _w(e,t){if(typeof window>"u"||typeof document>"u"||!Ol(window.location.host)||Ss[e]===t||Ss[e]||rh)return;Ss[e]=t;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=gw().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{rh=!0,a()},m}function d(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=mw(r),v=n("text"),V=document.getElementById(v)||document.createElement("span"),N=n("learnmore"),F=document.getElementById(N)||document.createElement("a"),W=n("preprendIcon"),B=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;l(H),d(F,N);const z=h();c(B,W),H.append(B,V,F,z),document.body.appendChild(H)}i?(V.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function yw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){var e;const t=(e=Dl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ew(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ww(){return!vw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lp(){try{return typeof indexedDB=="object"}catch{return!1}}function cp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Tw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Iw="FirebaseError";class Gn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Iw,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Aw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Gn(s,l,r)}}function Aw(e,t){return e.replace(bw,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function Bs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(sh(i)&&sh(a)){if(!Bs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sh(e){return e!==null&&typeof e=="object"}/**
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
 */const Rw=1e3,Sw=2,Cw=4*60*60*1e3,Pw=.5;function ih(e,t=Rw,n=Sw){const r=t*Math.pow(n,e),s=Math.round(Pw*r*(Math.random()-.5)*2);return Math.min(Cw,r+s)}/**
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
 */function Ur(e){return e&&e._delegate?e._delegate:e}class gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class Vw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dw(t))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tr){return this.instances.has(t)}getOptions(t=tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tr){return this.component?this.component.multipleInstances?t:tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(e){return e===tr?void 0:e}function Dw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ow{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(yt||(yt={}));const Nw={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},kw=yt.INFO,Mw={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},Fw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Mw[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nl{constructor(t){this.name=t,this._logLevel=kw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in yt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...t),this._logHandler(this,yt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...t),this._logHandler(this,yt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...t),this._logHandler(this,yt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...t),this._logHandler(this,yt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...t),this._logHandler(this,yt.ERROR,...t)}}const Lw=(e,t)=>t.some(n=>e instanceof n);let oh,ah;function Uw(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,La=new WeakMap,hp=new WeakMap,ua=new WeakMap,kl=new WeakMap;function $w(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Dn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&up.set(n,e)}).catch(()=>{}),kl.set(t,e),t}function jw(e){if(La.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});La.set(e,t)}let Ua={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return La.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qw(e){Ua=e(Ua)}function Hw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ha(this),t,...n);return hp.set(r,t.sort?t.sort():[t]),Dn(r)}:Bw().includes(e)?function(...t){return e.apply(ha(this),t),Dn(up.get(this))}:function(...t){return Dn(e.apply(ha(this),t))}}function zw(e){return typeof e=="function"?Hw(e):(e instanceof IDBTransaction&&jw(e),Lw(e,Uw())?new Proxy(e,Ua):e)}function Dn(e){if(e instanceof IDBRequest)return $w(e);if(ua.has(e))return ua.get(e);const t=zw(e);return t!==e&&(ua.set(e,t),kl.set(t,e)),t}const ha=e=>kl.get(e);function fp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=Dn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Dn(a.result),c.oldVersion,c.newVersion,Dn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Gw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],fa=new Map;function lh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fa.get(t))return fa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return fa.set(t,i),i}qw(e=>({...e,get:(t,n,r)=>lh(t,n)||e.get(t,n,r),has:(t,n)=>!!lh(t,n)||e.has(t,n)}));/**
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
 */class Ww{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ba="@firebase/app",ch="0.13.2";/**
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
 */const mn=new Nl("@firebase/app"),Yw="@firebase/app-compat",Jw="@firebase/analytics-compat",Xw="@firebase/analytics",Zw="@firebase/app-check-compat",tT="@firebase/app-check",eT="@firebase/auth",nT="@firebase/auth-compat",rT="@firebase/database",sT="@firebase/data-connect",iT="@firebase/database-compat",oT="@firebase/functions",aT="@firebase/functions-compat",lT="@firebase/installations",cT="@firebase/installations-compat",uT="@firebase/messaging",hT="@firebase/messaging-compat",fT="@firebase/performance",dT="@firebase/performance-compat",pT="@firebase/remote-config",gT="@firebase/remote-config-compat",mT="@firebase/storage",_T="@firebase/storage-compat",yT="@firebase/firestore",vT="@firebase/ai",ET="@firebase/firestore-compat",wT="firebase",TT="11.10.0";/**
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
 */const $a="[DEFAULT]",IT={[Ba]:"fire-core",[Yw]:"fire-core-compat",[Xw]:"fire-analytics",[Jw]:"fire-analytics-compat",[tT]:"fire-app-check",[Zw]:"fire-app-check-compat",[eT]:"fire-auth",[nT]:"fire-auth-compat",[rT]:"fire-rtdb",[sT]:"fire-data-connect",[iT]:"fire-rtdb-compat",[oT]:"fire-fn",[aT]:"fire-fn-compat",[lT]:"fire-iid",[cT]:"fire-iid-compat",[uT]:"fire-fcm",[hT]:"fire-fcm-compat",[fT]:"fire-perf",[dT]:"fire-perf-compat",[pT]:"fire-rc",[gT]:"fire-rc-compat",[mT]:"fire-gcs",[_T]:"fire-gcs-compat",[yT]:"fire-fst",[ET]:"fire-fst-compat",[vT]:"fire-vertex","fire-js":"fire-js",[wT]:"fire-js-all"};/**
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
 */const Hi=new Map,AT=new Map,ja=new Map;function uh(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fn(e){const t=e.name;if(ja.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;ja.set(t,e);for(const n of Hi.values())uh(n,e);for(const n of AT.values())uh(n,e);return!0}function Qs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function bT(e){return e==null?!1:e.settings!==void 0}/**
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
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new yo("app","Firebase",RT);/**
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
 */class ST{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const CT=TT;function dp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:$a,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(n||(n=ap()),!n)throw On.create("no-options");const i=Hi.get(s);if(i){if(Bs(n,i.options)&&Bs(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const a=new Ow(s);for(const c of ja.values())a.addComponent(c);const l=new ST(n,r,a);return Hi.set(s,l),l}function pp(e=$a){const t=Hi.get(e);if(!t&&e===$a&&ap())return dp();if(!t)throw On.create("no-app",{appName:e});return t}function Xe(e,t,n){var r;let s=(r=IT[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}Fn(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const PT="firebase-heartbeat-database",VT=1,$s="firebase-heartbeat-store";let da=null;function gp(){return da||(da=fp(PT,VT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($s)}catch(n){console.warn(n)}}}}).catch(e=>{throw On.create("idb-open",{originalErrorMessage:e.message})})),da}async function xT(e){try{const n=(await gp()).transaction($s),r=await n.objectStore($s).get(mp(e));return await n.done,r}catch(t){if(t instanceof Gn)mn.warn(t.message);else{const n=On.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(n.message)}}}async function hh(e,t){try{const r=(await gp()).transaction($s,"readwrite");await r.objectStore($s).put(t,mp(e)),await r.done}catch(n){if(n instanceof Gn)mn.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function mp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const DT=1024,OT=30;class NT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OT){const a=FT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fh(),{heartbeatsToSend:r,unsentEntries:s}=kT(this._heartbeatsCache.heartbeats),i=qi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function fh(){return new Date().toISOString().substring(0,10)}function kT(e,t=DT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),dh(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lp()?cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function dh(e){return qi(JSON.stringify({version:2,heartbeats:e})).length}function FT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function LT(e){Fn(new gn("platform-logger",t=>new Ww(t),"PRIVATE")),Fn(new gn("heartbeat",t=>new NT(t),"PRIVATE")),Xe(Ba,ch,e),Xe(Ba,ch,"esm2017"),Xe("fire-js","")}LT("");var UT="firebase",BT="11.10.0";/**
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
 */Xe(UT,BT,"app");var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,_p;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,S){for(var w=Array(arguments.length-2),he=2;he<arguments.length;he++)w[he-2]=arguments[he];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var S=I.g[3],w=y+(S^T&(b^S))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[3]+3250441966&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[7]+4249261313&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[11]+2304563134&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(S^T&(b^S))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=S+(b^y&(T^b))+A[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=b+(T^S&(y^T))+A[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=T+(y^b&(S^y))+A[15]+1236535329&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(b^S&(T^b))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[0]+3921069994&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[4]+3889429448&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[8]+1163531501&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^S&(T^b))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=S+(T^b&(y^T))+A[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(S^y))+A[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=T+(S^y&(b^S))+A[12]+2368359562&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(T^b^S)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[14]+4259657740&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[10]+3200236656&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[6]+76029189&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^S)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=S+(y^T^b)+A[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=b+(S^y^T)+A[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=T+(b^S^y)+A[2]+3299628645&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(b^(T|~S))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[5]+4237533241&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[1]+2240044497&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[13]+1309151649&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~S))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=S+(T^(y|~b))+A[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=b+(y^(S|~T))+A[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=T+(S^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=T;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function i(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==y||(T[b]=S,A=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return F(h(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new a(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return F(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(w))):(A=A.j(T),A=A.add(h(w)))}return A}var p=c(0),m=c(1),v=c(16777216);e=a.prototype,e.m=function(){if(N(this))return-F(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(N(this))return"-"+F(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,A="";;){var b=z(T,y).g;T=W(T,b.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,V(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}e.l=function(I){return I=W(this,I),N(I)?-1:V(I)?0:1};function F(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new a(T,~I.h).add(m)}e.abs=function(){return N(this)?F(this):this},e.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,S&=65535,w&=65535,T[b]=w<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function W(I,y){return I.add(F(y))}e.j=function(I){if(V(this)||V(I))return p;if(N(this))return N(I)?F(this).j(F(I)):F(F(this).j(I));if(N(I))return F(this.j(F(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,w=this.i(A)&65535,he=I.i(b)>>>16,Re=I.i(b)&65535;T[2*A+2*b]+=w*Re,B(T,2*A+2*b),T[2*A+2*b+1]+=S*Re,B(T,2*A+2*b+1),T[2*A+2*b+1]+=w*he,B(T,2*A+2*b+1),T[2*A+2*b+2]+=S*he,B(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function B(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function H(I,y){this.g=I,this.h=y}function z(I,y){if(V(y))throw Error("division by zero");if(V(I))return new H(p,p);if(N(I))return y=z(F(I),y),new H(F(y.g),F(y.h));if(N(y))return y=z(I,F(y)),new H(F(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(I);)T=ft(T),A=ft(A);var b=pt(T,1),S=pt(A,1);for(A=pt(A,2),T=pt(T,2);!V(A);){var w=S.add(A);0>=w.l(I)&&(b=b.add(T),S=w),A=pt(A,1),T=pt(T,1)}return y=W(I,b.j(y)),new H(b,y)}for(b=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),w=S.j(y);N(w)||0<w.l(I);)T-=A,S=h(T),w=S.j(y);V(S)&&(S=m),b=b.add(S),I=W(I,w)}return new H(b,I)}e.A=function(I){return z(this,I).h},e.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},e.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},e.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function ft(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function pt(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,b=[],S=0;S<A;S++)b[S]=0<y?I.i(S+T)>>>y|I.i(S+T+1)<<32-y:I.i(S+T);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_p=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Nn=a}).apply(typeof ph<"u"?ph:typeof self<"u"?self:typeof window<"u"?window:{});var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yp,gs,vp,xi,qa,Ep,wp,Tp;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof vi=="object"&&vi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var q=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)q[Rt-2]=arguments[Rt];return u.prototype[C].apply(g,q)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let q=0;q<P;q++)o[C+q]=g[q]}else o.push(g)}}class W{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ft=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function pt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<T.length;P++)f=T[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function w(){var o=we;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class he{constructor(){this.h=this.g=null}add(u,f){const g=Re.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Re=new W(()=>new $t,o=>o.reset());class $t{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,dt=!1,we=new he,Fe=()=>{const o=l.Promise.resolve(void 0);gt=()=>{o.then(Se)}};var Se=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){S(f)}var u=Re;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}dt=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Nt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function ze(o,u){if(Nt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ft){t:{try{z(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_e[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ze.aa.h.call(this)}}V(ze,Nt);var _e={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wt(o){this.src=o,this.g={},this.h=0}wt.prototype.add=function(o,u,f,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var q=E(o,u,g,C);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new Q(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function _(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Z(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function M(o,u,f,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(o,u[P],f,g,C);return null}return f=st(f),o&&o[x]?o.K(u,f,h(g)?!!g.capture:!1,C):O(o,u,f,!1,g,C)}function O(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,Rt=G(o);if(Rt||(o[R]=Rt=new wt(o)),f=Rt.add(u,f,g,q,P),f.proxy)return f;if(g=K(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)vn||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(L(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function o(f){return u.call(o.src,o.listener,f)}const u=et;return o}function j(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],f,g,C);else g=h(g)?!!g.capture:!!g,f=st(f),o&&o[x]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=E(P,f,g,C),-1<f&&(Z(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,g,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[x])_(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(L(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=G(u))?(_(f,o),f.h==0&&(f.src=null,u[R]=null)):Z(o)}}}function L(o){return o in D?D[o]:D[o]="on"+o}function et(o,u){if(o.da)o=!0;else{u=new ze(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function G(o){return o=o[R],o instanceof wt?o:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function st(o){return typeof o=="function"?o:(o[tt]||(o[tt]=function(u){return o.handleEvent(u)}),o[tt])}function nt(){Ot.call(this),this.i=new wt(this),this.M=this,this.F=null}V(nt,Ot),nt.prototype[x]=!0,nt.prototype.removeEventListener=function(o,u,f,g){j(this,o,u,f,g)};function lt(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Nt(u,o);else if(u instanceof Nt)u.target=u.target||o;else{var C=u;u=new Nt(g,o),A(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var q=u.g=f[P];C=mt(q,g,!0,u)&&C}if(q=u.g=o,C=mt(q,g,!0,u)&&C,C=mt(q,g,!1,u)&&C,f)for(P=0;P<f.length;P++)q=u.g=f[P],C=mt(q,g,!1,u)&&C}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Z(f[g]);delete o.g[u],o.h--}}this.F=null},nt.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},nt.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function mt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==f){var Rt=q.listener,Yt=q.ha||q.src;q.fa&&_(o.i,q),C=Rt.call(Yt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Kt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Wt(o){o.g=Kt(()=>{o.g=null,o.i&&(o.i=!1,Wt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ce extends Ot{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(o){Ot.call(this),this.h=o,this.g={}}V(te,Ot);var En=[];function Jr(o){pt(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}te.prototype.N=function(){te.aa.N.call(this),Jr(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=l.JSON.stringify,Pe=l.JSON.parse,ti=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ko(){}ko.prototype.h=null;function gc(o){return o.h||(o.h=o.i())}function mc(){}var Xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mo(){Nt.call(this,"d")}V(Mo,Nt);function Fo(){Nt.call(this,"c")}V(Fo,Nt);var Kn={},_c=null;function ei(){return _c=_c||new nt}Kn.La="serverreachability";function yc(o){Nt.call(this,Kn.La,o)}V(yc,Nt);function Zr(o){const u=ei();lt(u,new yc(u))}Kn.STAT_EVENT="statevent";function vc(o,u){Nt.call(this,Kn.STAT_EVENT,o),this.stat=u}V(vc,Nt);function fe(o){const u=ei();lt(u,new vc(u,o))}Kn.Ma="timingevent";function Ec(o,u){Nt.call(this,Kn.Ma,o),this.size=u}V(Ec,Nt);function ts(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function lm(o,u,f,g,C,P){o.info(function(){if(o.g)if(P)for(var q="",Rt=P.split("&"),Yt=0;Yt<Rt.length;Yt++){var Tt=Rt[Yt].split("=");if(1<Tt.length){var ee=Tt[0];Tt=Tt[1];var ne=ee.split("_");q=2<=ne.length&&ne[1]=="type"?q+(ee+"="+Tt+"&"):q+(ee+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+q})}function cm(o,u,f,g,C,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+q})}function dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+hm(o,f)+(g?" "+g:"")})}function um(o,u){o.info(function(){return"TIMEOUT: "+u})}es.prototype.info=function(){};function hm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return Qt(f)}catch{return u}}var ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lo;function ri(){}V(ri,ko),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},Lo=new ri;function wn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var Ic={},Uo={};function Bo(o,u,f){o.L=1,o.v=ai(sn(u)),o.m=f,o.P=!0,Ac(o,null)}function Ac(o,u){o.F=Date.now(),si(o),o.A=sn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Lc(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Tc,o.g=nu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ce(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(En[0]=C.toString()),C=En);for(var P=0;P<C.length;P++){var q=M(f,C[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zr(),lm(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)t:{const ne=on(this.g);var u=this.g.Ba();const mr=this.g.Z();if(!(3>ne)&&(ne!=3||this.g&&(this.h.h||this.g.oa()||zc(this.g)))){this.J||ne!=4||u==7||(u==8||0>=mr?Zr(3):Zr(2)),$o(this);var f=this.g.Z();this.X=f;e:if(bc(this)){var g=zc(this.g);o="";var C=g.length,P=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),ns(this);var q="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,cm(this.i,this.u,this.A,this.l,this.R,ne,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Rt,Yt=this.g;if((Rt=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Rt)){var Tt=Rt;break e}}Tt=null}if(f=Tt)dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,f);else{this.o=!1,this.s=3,fe(12),Wn(this),ns(this);break t}}if(this.P){f=!0;let Le;for(;!this.J&&this.C<q.length;)if(Le=fm(this,q),Le==Uo){ne==4&&(this.s=4,fe(14),f=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Ic){this.s=4,fe(15),dr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else dr(this.i,this.l,Le,null),jo(this,Le);if(bc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||q.length!=0||this.h.h||(this.s=1,fe(16),f=!1),this.o=this.o&&f,!f)dr(this.i,this.l,q,"[Invalid Chunked Response]"),Wn(this),ns(this);else if(0<q.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Wo(ee),ee.M=!0,fe(11))}}else dr(this.i,this.l,q,null),jo(this,q);ne==4&&Wn(this),this.o&&!this.J&&(ne==4?Xc(this.j,this):(this.o=!1,si(this)))}else Pm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,fe(12)):(this.s=0,fe(13)),Wn(this),ns(this)}}}catch{}finally{}};function bc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function fm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Uo:(f=Number(u.substring(f,g)),isNaN(f)?Ic:(g+=1,g+f>u.length?Uo:(u=u.slice(g,g+f),o.C=g+f,u)))}wn.prototype.cancel=function(){this.J=!0,Wn(this)};function si(o){o.S=Date.now()+o.I,Rc(o,o.I)}function Rc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ts(m(o.ba,o),u)}function $o(o){o.B&&(l.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(um(this.i,this.A),this.L!=2&&(Zr(),fe(17)),Wn(this),this.s=2,ns(this)):Rc(this,this.S-o)};function ns(o){o.j.G==0||o.J||Xc(o.j,o)}function Wn(o){$o(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Jr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function jo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||qo(f.h,o))){if(!o.K&&qo(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)di(f),hi(f);else break t;Ko(f),fe(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ts(m(f.Za,f),6e3));if(1>=Pc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yn(f,11)}else if((o.K||f.g==o)&&di(f),!B(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Tt=C[u];if(f.T=Tt[0],Tt=Tt[1],f.G==2)if(Tt[0]=="c"){f.K=Tt[1],f.ia=Tt[2];const ee=Tt[3];ee!=null&&(f.la=ee,f.j.info("VER="+f.la));const ne=Tt[4];ne!=null&&(f.Aa=ne,f.j.info("SVER="+f.Aa));const mr=Tt[5];mr!=null&&typeof mr=="number"&&0<mr&&(g=1.5*mr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Le=o.g;if(Le){const gi=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var P=g.h;P.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ho(P,P.h),P.h=null))}if(g.D){const Qo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(g.ya=Qo,Pt(g.I,g.D,Qo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=o;if(g.qa=eu(g,g.J?g.ia:null,g.W),q.K){Vc(g.h,q);var Rt=q,Yt=g.L;Yt&&(Rt.I=Yt),Rt.B&&($o(Rt),si(Rt)),g.g=q}else Yc(g);0<f.i.length&&fi(f)}else Tt[0]!="stop"&&Tt[0]!="close"||Yn(f,7);else f.G==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Yn(f,7):Go(f):Tt[0]!="noop"&&f.l&&f.l.ta(Tt),f.v=0)}}Zr(4)}catch{}}var dm=class{constructor(o,u){this.g=o,this.map=u}};function Sc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pc(o){return o.h?1:o.g?o.g.size:0}function qo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ho(o,u){o.g?o.g.add(u):o.h=u}function Vc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Sc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function pm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function gm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Dc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=gm(o),g=pm(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],f&&f[P],o)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var P=o[f].substring(0,g);C=o[f].substring(g+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Qn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qn){this.h=o.h,ii(this,o.j),this.o=o.o,this.g=o.g,oi(this,o.s),this.l=o.l;var u=o.i,f=new is;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Nc(this,f),this.m=o.m}else o&&(u=String(o).match(Oc))?(this.h=!1,ii(this,u[1]||"",!0),this.o=rs(u[2]||""),this.g=rs(u[3]||"",!0),oi(this,u[4]),this.l=rs(u[5]||"",!0),Nc(this,u[6]||"",!0),this.m=rs(u[7]||"")):(this.h=!1,this.i=new is(null,this.h))}Qn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ss(u,kc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ss(u,kc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ss(f,f.charAt(0)=="/"?vm:ym,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ss(f,wm)),o.join("")};function sn(o){return new Qn(o)}function ii(o,u,f){o.j=f?rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function oi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Nc(o,u,f){u instanceof is?(o.i=u,Tm(o.i,o.h)):(f||(u=ss(u,Em)),o.i=new is(u,o.h))}function Pt(o,u,f){o.i.set(u,f)}function ai(o){return Pt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,_m),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _m(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kc=/[#\/\?@]/g,ym=/[#\?:]/g,vm=/[#\?]/g,Em=/[#\?@]/g,wm=/#/g;function is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&mm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=is.prototype,e.add=function(o,u){Tn(this),this.i=null,o=pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Mc(o,u){Tn(o),u=pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Fc(o,u){return Tn(o),u=pr(o,u),o.g.has(u)}e.forEach=function(o,u){Tn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},e.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)f.push(u[g])}return f},e.V=function(o){Tn(this);let u=[];if(typeof o=="string")Fc(this,o)&&(u=u.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return Tn(this),this.i=null,o=pr(this,o),Fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Lc(o,u,f){Mc(o,u),0<f.length&&(o.i=null,o.g.set(pr(o,u),N(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var C=P;q[g]!==""&&(C+="="+encodeURIComponent(String(q[g]))),o.push(C)}}return this.i=o.join("&")};function pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Tm(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Mc(this,g),Lc(this,C,f))},o)),o.j=u}function Im(o,u){const f=new es;if(l.Image){const g=new Image;g.onload=v(In,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(In,f,"TestLoadImage: error",!1,u,g),g.onabort=v(In,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(In,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Am(o,u){const f=new es,g=new AbortController,C=setTimeout(()=>{g.abort(),In(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?In(f,"TestPingServer: ok",!0,u):In(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),In(f,"TestPingServer: error",!1,u)})}function In(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function bm(){this.g=new ti}function Rm(o,u,f){const g=f||"";try{Dc(o,function(C,P){let q=C;h(C)&&(q=Qt(C)),u.push(g+P+"="+encodeURIComponent(q))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}V(li,ko),li.prototype.g=function(){return new ci(this.l,this.j)},li.prototype.i=function(o){return function(){return o}}({});function ci(o,u){nt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ci,nt),e=ci.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,as(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?os(this):as(this),this.readyState==3&&Uc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,os(this))},e.Qa=function(o){this.g&&(this.response=o,os(this))},e.ga=function(){this.g&&os(this)};function os(o){o.readyState=4,o.l=null,o.j=null,o.v=null,as(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function as(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bc(o){let u="";return pt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function zo(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=Bc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pt(o,u,f))}function Ft(o){nt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ft,nt);var Sm=/^https?$/i,Cm=["POST","PUT"];e=Ft.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?gc(this.o):gc(Lo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){$c(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cm,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){$c(this,P)}};function $c(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,jc(o),ui(o)}function jc(o){o.A||(o.A=!0,lt(o,"complete"),lt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,lt(this,"complete"),lt(this,"abort"),ui(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ui(this,!0)),Ft.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?qc(this):this.bb())},e.bb=function(){qc(this)};function qc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)Kt(o.Ea,0,o);else if(lt(o,"readystatechange"),on(o)==4){o.h=!1;try{const q=o.Z();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var C=String(o.D).match(Oc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Sm.test(C?C.toLowerCase():"")}f=g}if(f)lt(o,"complete"),lt(o,"success");else{o.m=6;try{var P=2<on(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",jc(o)}}finally{ui(o)}}}}function ui(o,u){if(o.g){Hc(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||lt(o,"ready");try{f.onreadystatechange=g}catch{}}}function Hc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pe(u)}};function zc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Pm(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}I(u,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Gc(o){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,o),this.cb=ls("retryDelaySeedMs",1e4,o),this.Wa=ls("forwardChannelMaxRetries",2,o),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Sc(o&&o.concurrentRequestLimit),this.Da=new bm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Gc.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,g){fe(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=eu(this,null,this.W),fi(this)};function Go(o){if(Kc(o),o.G==3){var u=o.U++,f=sn(o.I);if(Pt(f,"SID",o.K),Pt(f,"RID",u),Pt(f,"TYPE","terminate"),cs(o,f),u=new wn(o,o.j,u),u.L=2,u.v=ai(sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=nu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),si(u)}tu(o)}function hi(o){o.g&&(Wo(o),o.g.cancel(),o.g=null)}function Kc(o){hi(o),o.u&&(l.clearTimeout(o.u),o.u=null),di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function fi(o){if(!Cc(o.h)&&!o.s){o.s=!0;var u=o.Ga;gt||Fe(),dt||(gt(),dt=!0),we.add(u,o),o.B=0}}function Vm(o,u){return Pc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ts(m(o.Ga,o,u),Zc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new wn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Qc(this,C,u),f=sn(this.I),Pt(f,"RID",o),Pt(f,"CVER",22),this.D&&Pt(f,"X-HTTP-Session-Id",this.D),cs(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Bc(P)))+"&"+u:this.m&&zo(f,this.m,P)),Ho(this.h,C),this.Ua&&Pt(f,"TYPE","init"),this.P?(Pt(f,"$req",u),Pt(f,"SID","null"),C.T=!0,Bo(C,f,null)):Bo(C,f,u),this.G=2}}else this.G==3&&(o?Wc(this,o):this.i.length==0||Cc(this.h)||Wc(this))};function Wc(o,u){var f;u?f=u.l:f=o.U++;const g=sn(o.I);Pt(g,"SID",o.K),Pt(g,"RID",f),Pt(g,"AID",o.T),cs(o,g),o.m&&o.o&&zo(g,o.m,o.o),f=new wn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Qc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ho(o.h,f),Bo(f,g,u)}function cs(o,u){o.H&&pt(o.H,function(f,g){Pt(u,g,f)}),o.l&&Dc({},function(f,g){Pt(u,g,f)})}function Qc(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;t:{var C=o.i;let P=-1;for(;;){const q=["count="+f];P==-1?0<f?(P=C[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let Rt=!0;for(let Yt=0;Yt<f;Yt++){let Tt=C[Yt].g;const ee=C[Yt].map;if(Tt-=P,0>Tt)P=Math.max(0,C[Yt].g-100),Rt=!1;else try{Rm(ee,q,"req"+Tt+"_")}catch{g&&g(ee)}}if(Rt){g=q.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,g}function Yc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;gt||Fe(),dt||(gt(),dt=!0),we.add(u,o),o.v=0}}function Ko(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ts(m(o.Fa,o),Zc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ts(m(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fe(10),hi(this),Jc(this))};function Wo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Jc(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);Pt(u,"RID","rpc"),Pt(u,"SID",o.K),Pt(u,"AID",o.T),Pt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pt(u,"TO",o.ja),Pt(u,"TYPE","xmlhttp"),cs(o,u),o.m&&o.o&&zo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ai(sn(u)),f.m=null,f.P=!0,Ac(f,o)}e.Za=function(){this.C!=null&&(this.C=null,hi(this),Ko(this),fe(19))};function di(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xc(o,u){var f=null;if(o.g==u){di(o),Wo(o),o.g=null;var g=2}else if(qo(o.h,u))f=u.D,Vc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=ei(),lt(g,new Ec(g,f)),fi(o)}else Yc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Vm(o,u)||g==2&&Ko(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:Yn(o,5);break;case 4:Yn(o,10);break;case 3:Yn(o,6);break;default:Yn(o,2)}}}function Zc(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Yn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new Qn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ii(g,"https"),ai(g),C?Im(g.toString(),f):Am(g.toString(),f)}else fe(2);o.G=0,o.l&&o.l.sa(u),tu(o),Kc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function tu(o){if(o.G=0,o.ka=[],o.l){const u=xc(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function eu(o,u,f){var g=f instanceof Qn?sn(f):new Qn(f);if(g.g!="")u&&(g.g=u+"."+g.g),oi(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Qn(null);g&&ii(P,g),u&&(P.g=u),C&&oi(P,C),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Pt(g,f,u),Pt(g,"VER",o.la),cs(o,g),g}function nu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ft(new li({eb:f})):new Ft(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}e=ru.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function pi(){}pi.prototype.g=function(o,u){return new Te(o,u)};function Te(o,u){nt.call(this),this.g=new Gc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new gr(this)}V(Te,nt),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){Go(this.g)},Te.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qt(o),o=f);u.i.push(new dm(u.Ya++,o)),u.G==3&&fi(u)},Te.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,Te.aa.N.call(this)};function su(o){Mo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(su,Mo);function iu(){Fo.call(this),this.status=1}V(iu,Fo);function gr(o){this.g=o}V(gr,ru),gr.prototype.ua=function(){lt(this.g,"a")},gr.prototype.ta=function(o){lt(this.g,new su(o))},gr.prototype.sa=function(o){lt(this.g,new iu)},gr.prototype.ra=function(){lt(this.g,"b")},pi.prototype.createWebChannel=pi.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,Tp=function(){return new pi},wp=function(){return ei()},Ep=Kn,qa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,xi=ni,wc.COMPLETE="complete",vp=wc,mc.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",nt.prototype.listen=nt.prototype.K,gs=mc,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,yp=Ft}).apply(typeof vi<"u"?vi:typeof self<"u"?self:typeof window<"u"?window:{});const gh="@firebase/firestore",mh="4.8.0";/**
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
 */let Gr="11.10.0";/**
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
 */const ar=new Nl("@firebase/firestore");function wr(){return ar.logLevel}function J(e,...t){if(ar.logLevel<=yt.DEBUG){const n=t.map(Ml);ar.debug(`Firestore (${Gr}): ${e}`,...n)}}function _n(e,...t){if(ar.logLevel<=yt.ERROR){const n=t.map(Ml);ar.error(`Firestore (${Gr}): ${e}`,...n)}}function Ln(e,...t){if(ar.logLevel<=yt.WARN){const n=t.map(Ml);ar.warn(`Firestore (${Gr}): ${e}`,...n)}}function Ml(e){if(typeof e=="string")return e;try{/**
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
 */function at(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,Ip(e,r,n)}function Ip(e,t,n){let r=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _n(r),new Error(r)}function Mt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||Ip(t,s,r)}function vt(e,t){return e}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Gn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ir{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ap{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class jT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qT{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Mt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Mt(typeof r.accessToken=="string",31837,{l:r}),new Ap(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Mt(t===null||typeof t=="string",2055,{h:t}),new se(t)}}class HT{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zT{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new HT(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _h{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GT{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Mt(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _h(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Mt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _h(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function bp(){return new TextEncoder}/**
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
 */class Rp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=KT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ht(e,t){return e<t?-1:e>t?1:0}function Ha(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return ht(r,s);{const i=bp(),a=WT(i.encode(yh(e,n)),i.encode(yh(t,n)));return a!==0?a:ht(r,s)}}n+=r>65535?2:1}return ht(e.length,t.length)}function yh(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function WT(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ht(e[n],t[n]);return ht(e.length,t.length)}function Br(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const vh="__name__";class We{constructor(t,n,r){n===void 0?n=0:n>t.length&&at(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&at(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=We.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ht(t.length,n.length)}static compareSegments(t,n){const r=We.isNumericId(t),s=We.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(t).compare(We.extractNumericId(n)):Ha(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Nn.fromString(t.substring(4,t.length-2))}}class Vt extends We{construct(t,n,r){return new Vt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Vt(n)}static emptyPath(){return new Vt([])}}const QT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends We{construct(t,n,r){return new le(t,n,r)}static isValidIdentifier(t){return QT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vh}static keyField(){return new le([vh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new le(n)}static emptyPath(){return new le([])}}/**
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
 */class rt{constructor(t){this.path=t}static fromPath(t){return new rt(Vt.fromString(t))}static fromName(t){return new rt(Vt.fromString(t).popFirst(5))}static empty(){return new rt(Vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rt(new Vt(t.slice()))}}function YT(e,t,n,r){if(t===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Eh(e){if(rt.isDocumentKey(e))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sp(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function vo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":at(12329,{type:typeof e})}function za(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vo(e);throw new X(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Ht(e,t){const n={typeString:e};return t&&(n.value=t),n}function Ys(e,t){if(!Sp(e))throw new X(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const wh=-62135596800,Th=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(t){return xt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Th);return new xt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<wh)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Th}_compareTo(t){return this.seconds===t.seconds?ht(this.nanoseconds,t.nanoseconds):ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ys(t,xt._jsonSchema))return new xt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-wh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:Ht("string",xt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */const js=-1;function JT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new xt(n+1,0):new xt(n,r));return new Un(s,rt.empty(),t)}function XT(e){return new Un(e.readTime,e.key,js)}class Un{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(ot.min(),rt.empty(),js)}static max(){return new Un(ot.max(),rt.empty(),js)}}function ZT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=rt.comparator(e.documentKey,t.documentKey),n!==0?n:ht(e.largestBatchId,t.largestBatchId))}/**
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
 */const tI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Eo(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==tI)throw e;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&at(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new k((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new k((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function nI(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Kr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class wo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}wo.ue=-1;/**
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
 */const rI=-1;function To(e){return e==null}function zi(e){return e===0&&1/e==-1/0}function sI(e){return typeof e=="number"&&Number.isInteger(e)&&!zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Cp="";function iI(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ih(t)),t=oI(e.get(n),t);return Ih(t)}function oI(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Cp:n+="";break;default:n+=i}}return n}function Ih(e){return e+Cp+""}/**
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
 */function Ah(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Wr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Pp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Bt{constructor(t,n){this.comparator=t,this.root=n||Jt.EMPTY}insert(t,n){return new Bt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(t){return new Bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Jt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Jt.RED,this.left=s??Jt.EMPTY,this.right=i??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Jt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw at(43730,{key:this.key,value:this.value});if(this.right.isRed())throw at(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw at(27949);return t+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw at(57766)}get value(){throw at(16141)}get color(){throw at(16727)}get left(){throw at(29726)}get right(){throw at(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Jt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class zt{constructor(t){this.comparator=t,this.data=new Bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(t){return new bh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new zt(this.comparator);return n.data=t,n}}class bh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(t){this.fields=t,t.sort(le.comparator)}static empty(){return new Pn([])}unionWith(t){let n=new zt(le.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Pn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Br(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Vp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vp("Invalid base64 string: "+i):i}}(t);return new Zt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Zt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const aI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(e){if(Mt(!!e,39018),typeof e=="string"){let t=0;const n=aI.exec(e);if(Mt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Lt(e.seconds),nanos:Lt(e.nanos)}}function Lt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $n(e){return typeof e=="string"?Zt.fromBase64String(e):Zt.fromUint8Array(e)}/**
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
 */const xp="server_timestamp",Dp="__type__",Op="__previous_value__",Np="__local_write_time__";function Fl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[Dp])===null||n===void 0?void 0:n.stringValue)===xp}function Io(e){const t=e.mapValue.fields[Op];return Fl(t)?Io(t):t}function qs(e){const t=Bn(e.mapValue.fields[Np].timestampValue);return new xt(t.seconds,t.nanos)}/**
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
 */class lI{constructor(t,n,r,s,i,a,l,c,h,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Gi="(default)";class Hs{constructor(t,n){this.projectId=t,this.database=n||Gi}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===Gi}isEqual(t){return t instanceof Hs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const kp="__type__",cI="__max__",wi={mapValue:{}},Mp="__vector__",Ki="value";function jn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Fl(e)?4:hI(e)?9007199254740991:uI(e)?10:11:at(28295,{value:e})}function rn(e,t){if(e===t)return!0;const n=jn(e);if(n!==jn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qs(e).isEqual(qs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bn(s.timestampValue),l=Bn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return $n(s.bytesValue).isEqual($n(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Lt(s.geoPointValue.latitude)===Lt(i.geoPointValue.latitude)&&Lt(s.geoPointValue.longitude)===Lt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Lt(s.integerValue)===Lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Lt(s.doubleValue),l=Lt(i.doubleValue);return a===l?zi(a)===zi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Br(e.arrayValue.values||[],t.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ah(a)!==Ah(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0}(e,t);default:return at(52216,{left:e})}}function zs(e,t){return(e.values||[]).find(n=>rn(n,t))!==void 0}function $r(e,t){if(e===t)return 0;const n=jn(e),r=jn(t);if(n!==r)return ht(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ht(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Lt(i.integerValue||i.doubleValue),c=Lt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Rh(e.timestampValue,t.timestampValue);case 4:return Rh(qs(e),qs(t));case 5:return Ha(e.stringValue,t.stringValue);case 6:return function(i,a){const l=$n(i),c=$n(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ht(l[h],c[h]);if(d!==0)return d}return ht(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ht(Lt(i.latitude),Lt(a.latitude));return l!==0?l:ht(Lt(i.longitude),Lt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Sh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},v=(l=p[Ki])===null||l===void 0?void 0:l.arrayValue,V=(c=m[Ki])===null||c===void 0?void 0:c.arrayValue,N=ht(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Sh(v,V)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===wi.mapValue&&a===wi.mapValue)return 0;if(i===wi.mapValue)return 1;if(a===wi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ha(c[p],d[p]);if(m!==0)return m;const v=$r(l[c[p]],h[d[p]]);if(v!==0)return v}return ht(c.length,d.length)}(e.mapValue,t.mapValue);default:throw at(23264,{le:n})}}function Rh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ht(e,t);const n=Bn(e),r=Bn(t),s=ht(n.seconds,r.seconds);return s!==0?s:ht(n.nanos,r.nanos)}function Sh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$r(n[s],r[s]);if(i)return i}return ht(n.length,r.length)}function jr(e){return Ga(e)}function Ga(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Bn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return $n(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return rt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ga(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ga(n.fields[a])}`;return s+"}"}(e.mapValue):at(61005,{value:e})}function Di(e){switch(jn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Io(e);return t?16+Di(t):16;case 5:return 2*e.stringValue.length;case 6:return $n(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Di(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Wr(r.fields,(i,a)=>{s+=i.length+Di(a)}),s}(e.mapValue);default:throw at(13486,{value:e})}}function Ch(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ka(e){return!!e&&"integerValue"in e}function Ll(e){return!!e&&"arrayValue"in e}function Ph(e){return!!e&&"nullValue"in e}function Vh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pa(e){return!!e&&"mapValue"in e}function uI(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[kp])===null||n===void 0?void 0:n.stringValue)===Mp}function Cs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Wr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Cs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function hI(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===cI}/**
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
 */class Ye{constructor(t){this.value=t}static empty(){return new Ye({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!pa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cs(n)}setAll(t){let n=le.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Cs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Wr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ye(Cs(this.value))}}/**
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
 */class oe{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new oe(t,0,ot.min(),ot.min(),ot.min(),Ye.empty(),0)}static newFoundDocument(t,n,r,s){return new oe(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new oe(t,2,n,ot.min(),ot.min(),Ye.empty(),0)}static newUnknownDocument(t,n){return new oe(t,3,n,ot.min(),ot.min(),Ye.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wi{constructor(t,n){this.position=t,this.inclusive=n}}function xh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=rt.comparator(rt.fromName(a.referenceValue),n.key):r=$r(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Gs{constructor(t,n="asc"){this.field=t,this.dir=n}}function fI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Fp{}class qt extends Fp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new pI(t,n,r):n==="array-contains"?new _I(t,r):n==="in"?new yI(t,r):n==="not-in"?new vI(t,r):n==="array-contains-any"?new EI(t,r):new qt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new gI(t,r):new mI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($r(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.matchesComparison($r(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return at(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends Fp{constructor(t,n){super(),this.filters=t,this.op=n,this.he=null}static create(t,n){return new He(t,n)}matches(t){return Lp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Lp(e){return e.op==="and"}function Up(e){return dI(e)&&Lp(e)}function dI(e){for(const t of e.filters)if(t instanceof He)return!1;return!0}function Wa(e){if(e instanceof qt)return e.field.canonicalString()+e.op.toString()+jr(e.value);if(Up(e))return e.filters.map(t=>Wa(t)).join(",");{const t=e.filters.map(n=>Wa(n)).join(",");return`${e.op}(${t})`}}function Bp(e,t){return e instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(e,t):e instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Bp(a,s.filters[l]),!0):!1}(e,t):void at(19439)}function $p(e){return e instanceof qt?function(n){return`${n.field.canonicalString()} ${n.op} ${jr(n.value)}`}(e):e instanceof He?function(n){return n.op.toString()+" {"+n.getFilters().map($p).join(" ,")+"}"}(e):"Filter"}class pI extends qt{constructor(t,n,r){super(t,n,r),this.key=rt.fromName(r.referenceValue)}matches(t){const n=rt.comparator(t.key,this.key);return this.matchesComparison(n)}}class gI extends qt{constructor(t,n){super(t,"in",n),this.keys=jp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class mI extends qt{constructor(t,n){super(t,"not-in",n),this.keys=jp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function jp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>rt.fromName(r.referenceValue))}class _I extends qt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ll(n)&&zs(n.arrayValue,this.value)}}class yI extends qt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&zs(this.value.arrayValue,n)}}class vI extends qt{constructor(t,n){super(t,"not-in",n)}matches(t){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zs(this.value.arrayValue,n)}}class EI extends qt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zs(this.value.arrayValue,r))}}/**
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
 */class wI{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function Oh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new wI(e,t,n,r,s,i,a)}function Ul(e){const t=vt(e);if(t.Pe===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Wa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),To(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>jr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>jr(r)).join(",")),t.Pe=n}return t.Pe}function Bl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fI(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Dh(e.startAt,t.startAt)&&Dh(e.endAt,t.endAt)}function Qa(e){return rt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Qr{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function TI(e,t,n,r,s,i,a,l){return new Qr(e,t,n,r,s,i,a,l)}function qp(e){return new Qr(e)}function Nh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Hp(e){return e.collectionGroup!==null}function Ps(e){const t=vt(e);if(t.Te===null){t.Te=[];const n=new Set;for(const i of t.explicitOrderBy)t.Te.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new zt(le.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Te.push(new Gs(i,r))}),n.has(le.keyField().canonicalString())||t.Te.push(new Gs(le.keyField(),r))}return t.Te}function Ze(e){const t=vt(e);return t.Ie||(t.Ie=II(t,Ps(e))),t.Ie}function II(e,t){if(e.limitType==="F")return Oh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gs(s.field,i)});const n=e.endAt?new Wi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Wi(e.startAt.position,e.startAt.inclusive):null;return Oh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ya(e,t){const n=e.filters.concat([t]);return new Qr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ja(e,t,n){return new Qr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ao(e,t){return Bl(Ze(e),Ze(t))&&e.limitType===t.limitType}function zp(e){return`${Ul(Ze(e))}|lt:${e.limitType}`}function Tr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$p(s)).join(", ")}]`),To(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>jr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>jr(s)).join(",")),`Target(${r})`}(Ze(e))}; limitType=${e.limitType})`}function bo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):rt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=xh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ps(r),s)||r.endAt&&!function(a,l,c){const h=xh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ps(r),s))}(e,t)}function AI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Gp(e){return(t,n)=>{let r=!1;for(const s of Ps(e)){const i=bI(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bI(e,t,n){const r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?$r(c,h):at(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return at(19790,{direction:e.dir})}}/**
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
 */class hr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Wr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Pp(this.inner)}size(){return this.innerSize}}/**
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
 */const RI=new Bt(rt.comparator);function qn(){return RI}const Kp=new Bt(rt.comparator);function ms(...e){let t=Kp;for(const n of e)t=t.insert(n.key,n);return t}function SI(e){let t=Kp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function er(){return Vs()}function Wp(){return Vs()}function Vs(){return new hr(e=>e.toString(),(e,t)=>e.isEqual(t))}const CI=new zt(rt.comparator);function Et(...e){let t=CI;for(const n of e)t=t.add(n);return t}const PI=new zt(ht);function VI(){return PI}/**
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
 */function $l(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function Qp(e){return{integerValue:""+e}}function xI(e,t){return sI(t)?Qp(t):$l(e,t)}/**
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
 */class Ro{constructor(){this._=void 0}}function DI(e,t,n){return e instanceof Xa?function(s,i){const a={fields:{[Dp]:{stringValue:xp},[Np]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fl(i)&&(i=Io(i)),i&&(a.fields[Op]=i),{mapValue:a}}(n,t):e instanceof Qi?Yp(e,t):e instanceof Yi?Jp(e,t):function(s,i){const a=NI(s,i),l=kh(a)+kh(s.Ee);return Ka(a)&&Ka(s.Ee)?Qp(l):$l(s.serializer,l)}(e,t)}function OI(e,t,n){return e instanceof Qi?Yp(e,t):e instanceof Yi?Jp(e,t):n}function NI(e,t){return e instanceof Za?function(r){return Ka(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Xa extends Ro{}class Qi extends Ro{constructor(t){super(),this.elements=t}}function Yp(e,t){const n=Xp(t);for(const r of e.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yi extends Ro{constructor(t){super(),this.elements=t}}function Jp(e,t){let n=Xp(t);for(const r of e.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class Za extends Ro{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function kh(e){return Lt(e.integerValue||e.doubleValue)}function Xp(e){return Ll(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function kI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Qi&&s instanceof Qi||r instanceof Yi&&s instanceof Yi?Br(r.elements,s.elements,rn):r instanceof Za&&s instanceof Za?rn(r.Ee,s.Ee):r instanceof Xa&&s instanceof Xa}(e.transform,t.transform)}class or{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new or}static exists(t){return new or(void 0,t)}static updateTime(t){return new or(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class jl{}function Zp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new FI(e.key,or.none()):new ql(e.key,e.data,or.none());{const n=e.data,r=Ye.empty();let s=new zt(le.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new So(e.key,r,new Pn(s.toArray()),or.none())}}function MI(e,t,n){e instanceof ql?function(s,i,a){const l=s.value.clone(),c=Fh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof So?function(s,i,a){if(!Oi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Fh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(tg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function xs(e,t,n,r){return e instanceof ql?function(i,a,l,c){if(!Oi(i.precondition,a))return l;const h=i.value.clone(),d=Lh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof So?function(i,a,l,c){if(!Oi(i.precondition,a))return l;const h=Lh(i.fieldTransforms,c,a),d=a.data;return d.setAll(tg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Mh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Br(r,s,(i,a)=>kI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ql extends jl{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class So extends jl{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Fh(e,t,n){const r=new Map;Mt(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,OI(a,l,n[s]))}return r}function Lh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,DI(i,a,t))}return r}class FI extends jl{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&MI(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=xs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=xs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Wp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Zp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Et())}isEqual(t){return this.batchId===t.batchId&&Br(this.mutations,t.mutations,(n,r)=>Mh(n,r))&&Br(this.baseMutations,t.baseMutations,(n,r)=>Mh(n,r))}}/**
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
 */class UI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class BI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var jt,_t;function eg(e){if(e===void 0)return _n("GRPC error has no .code"),U.UNKNOWN;switch(e){case jt.OK:return U.OK;case jt.CANCELLED:return U.CANCELLED;case jt.UNKNOWN:return U.UNKNOWN;case jt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case jt.INTERNAL:return U.INTERNAL;case jt.UNAVAILABLE:return U.UNAVAILABLE;case jt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case jt.NOT_FOUND:return U.NOT_FOUND;case jt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case jt.ABORTED:return U.ABORTED;case jt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case jt.DATA_LOSS:return U.DATA_LOSS;default:return at(39323,{code:e})}}(_t=jt||(jt={}))[_t.OK=0]="OK",_t[_t.CANCELLED=1]="CANCELLED",_t[_t.UNKNOWN=2]="UNKNOWN",_t[_t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_t[_t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_t[_t.NOT_FOUND=5]="NOT_FOUND",_t[_t.ALREADY_EXISTS=6]="ALREADY_EXISTS",_t[_t.PERMISSION_DENIED=7]="PERMISSION_DENIED",_t[_t.UNAUTHENTICATED=16]="UNAUTHENTICATED",_t[_t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_t[_t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_t[_t.ABORTED=10]="ABORTED",_t[_t.OUT_OF_RANGE=11]="OUT_OF_RANGE",_t[_t.UNIMPLEMENTED=12]="UNIMPLEMENTED",_t[_t.INTERNAL=13]="INTERNAL",_t[_t.UNAVAILABLE=14]="UNAVAILABLE",_t[_t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $I=new Nn([4294967295,4294967295],0);function Uh(e){const t=bp().encode(e),n=new _p;return n.update(t),new Uint8Array(n.digest())}function Bh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Nn([n,r],0),new Nn([s,i],0)]}class Hl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _s(`Invalid padding: ${n}`);if(r<0)throw new _s(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new _s(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new _s(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*t.length-n,this.ge=Nn.fromNumber(this.fe)}pe(t,n,r){let s=t.add(n.multiply(Nn.fromNumber(r)));return s.compare($I)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const n=Uh(t),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Hl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.fe===0)return;const n=Uh(t),[r,s]=Bh(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Co{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Js.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Co(ot.min(),s,new Bt(ht),qn(),Et())}}class Js{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Js(r,n,Et(),Et(),Et())}}/**
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
 */class Ni{constructor(t,n,r,s){this.Se=t,this.removedTargetIds=n,this.key=r,this.be=s}}class ng{constructor(t,n){this.targetId=t,this.De=n}}class rg{constructor(t,n,r=Zt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $h{constructor(){this.ve=0,this.Ce=jh(),this.Fe=Zt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=Et(),n=Et(),r=Et();return this.Ce.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:at(38017,{changeType:i})}}),new Js(this.Fe,this.Me,t,n,r)}ke(){this.xe=!1,this.Ce=jh()}qe(t,n){this.xe=!0,this.Ce=this.Ce.insert(t,n)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,Mt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class jI{constructor(t){this.We=t,this.Ge=new Map,this.ze=qn(),this.je=Ti(),this.Je=Ti(),this.He=new Bt(ht)}Ye(t){for(const n of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(n,t.be):this.Xe(n,t.key,t.be);for(const n of t.removedTargetIds)this.Xe(n,t.key,t.be)}et(t){this.forEachTarget(t,n=>{const r=this.tt(n);switch(t.state){case 0:this.nt(n)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(t.resumeToken));break;default:at(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(t){const n=t.targetId,r=t.De.count,s=this.st(n);if(s){const i=s.target;if(Qa(i))if(r===0){const a=new rt(i.path);this.Xe(n,a,oe.newNoDocument(a,ot.min()))}else Mt(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const l=this._t(t),c=l?this.ut(l,t,a):1;if(c!==0){this.rt(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(t){const n=t.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=$n(r).toUint8Array()}catch(c){if(c instanceof Vp)return Ln("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Hl(a,s,i)}catch(c){return Ln(c instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(t,n,r){return n.De.count===r-this.ht(t,n.targetId)?0:2}ht(t,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(t){const n=new Map;this.Ge.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&Qa(l.target)){const c=new rt(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,oe.newNoDocument(c,t))}i.Ne&&(n.set(a,i.Le()),i.ke())}});let r=Et();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(t));const s=new Co(t,n,this.He,this.ze,r);return this.ze=qn(),this.je=Ti(),this.Je=Ti(),this.He=new Bt(ht),s}Ze(t,n){if(!this.nt(t))return;const r=this.It(t,n.key)?2:0;this.tt(t).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(t)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(t))}Xe(t,n,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(t)),this.Je=this.Je.insert(n,this.dt(n).add(t)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const n=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let n=this.Ge.get(t);return n||(n=new $h,this.Ge.set(t,n)),n}dt(t){let n=this.Je.get(t);return n||(n=new zt(ht),this.Je=this.Je.insert(t,n)),n}Tt(t){let n=this.je.get(t);return n||(n=new zt(ht),this.je=this.je.insert(t,n)),n}nt(t){const n=this.st(t)!==null;return n||J("WatchChangeAggregator","Detected inactive target",t),n}st(t){const n=this.Ge.get(t);return n&&n.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new $h),this.We.getRemoteKeysForTarget(t).forEach(n=>{this.Xe(t,n,null)})}It(t,n){return this.We.getRemoteKeysForTarget(t).has(n)}}function Ti(){return new Bt(rt.comparator)}function jh(){return new Bt(rt.comparator)}const qI={asc:"ASCENDING",desc:"DESCENDING"},HI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zI={and:"AND",or:"OR"};class GI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function tl(e,t){return e.useProto3Json||To(t)?t:{value:t}}function el(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function xr(e){return Mt(!!e,49232),ot.fromTimestamp(function(n){const r=Bn(n);return new xt(r.seconds,r.nanos)}(e))}function ig(e,t){return nl(e,t).canonicalString()}function nl(e,t){const n=function(s){return new Vt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function og(e){const t=Vt.fromString(e);return Mt(hg(t),10190,{key:t.toString()}),t}function ga(e,t){const n=og(t);if(n.get(1)!==e.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(lg(n))}function ag(e,t){return ig(e.databaseId,t)}function KI(e){const t=og(e);return t.length===4?Vt.emptyPath():lg(t)}function qh(e){return new Vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lg(e){return Mt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function WI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:at(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Mt(d===void 0||typeof d=="string",58123),Zt.fromBase64String(d||"")):(Mt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Zt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?U.UNKNOWN:eg(h.code);return new X(d,h.message||"")}(a);n=new rg(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ga(e,r.document.name),i=xr(r.document.updateTime),a=r.document.createTime?xr(r.document.createTime):ot.min(),l=new Ye({mapValue:{fields:r.document.fields}}),c=oe.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ni(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ga(e,r.document),i=r.readTime?xr(r.readTime):ot.min(),a=oe.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ni([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ga(e,r.document),i=r.removedTargetIds||[];n=new Ni([],i,s,null)}else{if(!("filter"in t))return at(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new BI(s,i),l=r.targetId;n=new ng(l,a)}}return n}function QI(e,t){return{documents:[ag(e,t.path)]}}function YI(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ag(e,s);const i=function(h){if(h.length!==0)return ug(He.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Ir(m.field),direction:ZI(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=tl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{Vt:n,parent:s}}function JI(e){let t=KI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Mt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=cg(p);return m instanceof He&&Up(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(V){return new Gs(Ar(V.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,To(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Wi(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Wi(v,m)}(n.endAt)),TI(t,s,a,i,l,"F",c,h)}function XI(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return at(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function cg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(n.unaryFilter.field);return qt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ar(n.unaryFilter.field);return qt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return at(61313);default:return at(60726)}}(e):e.fieldFilter!==void 0?function(n){return qt.create(Ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return at(58110);default:return at(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return He.create(n.compositeFilter.filters.map(r=>cg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return at(1026)}}(n.compositeFilter.op))}(e):at(30097,{filter:e})}function ZI(e){return qI[e]}function tA(e){return HI[e]}function eA(e){return zI[e]}function Ir(e){return{fieldPath:e.canonicalString()}}function Ar(e){return le.fromServerFormat(e.fieldPath)}function ug(e){return e instanceof qt?function(n){if(n.op==="=="){if(Vh(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(Ph(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vh(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(Ph(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:tA(n.op),value:n.value}}}(e):e instanceof He?function(n){const r=n.getFilters().map(s=>ug(s));return r.length===1?r[0]:{compositeFilter:{op:eA(n.op),filters:r}}}(e):at(54877,{filter:e})}function hg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Vn{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=Zt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Vn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class nA{constructor(t){this.gt=t}}function rA(e){const t=JI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ja(t,t.limit,"L"):t}/**
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
 */class sA{constructor(){this.Dn=new iA}addToCollectionParentIndex(t,n){return this.Dn.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.Dn.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(Un.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(Un.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class iA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new zt(Vt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new zt(Vt.comparator)).toArray()}}/**
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
 */const Hh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fg=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(fg,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
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
 */class qr{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new qr(0)}static ur(){return new qr(-1)}}/**
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
 */const zh="LruGarbageCollector",oA=1048576;function Gh([e,t],[n,r]){const s=ht(e,n);return s===0?ht(t,r):s}class aA{constructor(t){this.Tr=t,this.buffer=new zt(Gh),this.Ir=0}dr(){return++this.Ir}Er(t){const n=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){J(zh,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Kr(n)?J(zh,"Ignoring IndexedDB error during garbage collection: ",n):await Eo(n)}await this.Rr(3e5)})}}class cA{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.mr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return k.resolve(wo.ue);const r=new aA(n);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Hh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hh):this.pr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),wr()<=yt.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uA(e,t){return new cA(e,t)}/**
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
 */class hA{constructor(){this.changes=new hr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class fA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class dA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&xs(r.mutation,s,Pn.empty(),xt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Et()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Et()){const s=er();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=ms();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=er();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Et()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=qn();const a=Vs(),l=function(){return Vs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof So)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),xs(d.mutation,h,d.mutation.getFieldMask(),xt.now())):a.set(h.key,Pn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new fA(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Vs();let s=new Bt((a,l)=>a-l),i=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Pn.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Et()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Wp();d.forEach(m=>{if(!i.has(m)){const v=Zp(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return rt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Hp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):k.resolve(er());let l=js,c=i;return a.next(h=>k.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,Et())).next(d=>({batchId:l,changes:SI(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new rt(n)).next(r=>{let s=ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=ms();return this.indexManager.getCollectionParents(t,i).next(l=>k.forEach(l,c=>{const h=function(p,m){return new Qr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,oe.newInvalidDocument(d)))});let l=ms();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&xs(d.mutation,h,Pn.empty(),xt.now()),bo(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class pA{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,n){return k.resolve(this.Br.get(n))}saveBundleMetadata(t,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xr(s.createTime)}}(n)),k.resolve()}getNamedQuery(t,n){return k.resolve(this.Lr.get(n))}saveNamedQuery(t,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:rA(s.bundledQuery),readTime:xr(s.readTime)}}(n)),k.resolve()}}/**
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
 */class gA{constructor(){this.overlays=new Bt(rt.comparator),this.kr=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=er();return k.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.wt(t,n,i)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const s=er(),i=n.length+1,a=new rt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Bt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=er(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return k.resolve(l)}wt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new UI(n,r));let i=this.kr.get(n);i===void 0&&(i=Et(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class mA{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,k.resolve()}}/**
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
 */class zl{constructor(){this.qr=new zt(Gt.Qr),this.$r=new zt(Gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,n){const r=new Gt(t,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Wr(new Gt(t,n))}Gr(t,n){t.forEach(r=>this.removeReference(r,n))}zr(t){const n=new rt(new Vt([])),r=new Gt(n,t),s=new Gt(n,t+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const n=new rt(new Vt([])),r=new Gt(n,t),s=new Gt(n,t+1);let i=Et();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Gt(t,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Gt{constructor(t,n){this.key=t,this.Hr=n}static Qr(t,n){return rt.comparator(t.key,n.key)||ht(t.Hr,n.Hr)}static Ur(t,n){return ht(t.Hr,n.Hr)||rt.comparator(t.key,n.key)}}/**
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
 */class _A{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new zt(Gt.Qr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new LI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new Gt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,n){return k.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?rI:this.er-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Gt(n,0),s=new Gt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new zt(ht);return n.forEach(s=>{const i=new Gt(s,0),a=new Gt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;rt.isDocumentKey(i)||(i=i.child(""));const a=new Gt(new rt(i),0);let l=new zt(ht);return this.Yr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)},a),k.resolve(this.ei(l))}ei(t){const n=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Mt(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(n.mutations,s=>{const i=new Gt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,n){const r=new Gt(n,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}ti(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yA{constructor(t){this.ni=t,this.docs=function(){return new Bt(rt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(n))}getEntries(t,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():oe.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=qn();const a=n.path,l=new rt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ZT(XT(d),r)<=0||(s.has(d.key)||bo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(t,n,r,s){at(9500)}ri(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new vA(this)}getSize(t){return k.resolve(this.size)}}class vA extends hA{constructor(t){super(),this.Or=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this.Or.getEntry(t,n)}getAllFromCache(t,n){return this.Or.getEntries(t,n)}}/**
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
 */class EA{constructor(t){this.persistence=t,this.ii=new hr(n=>Ul(n),Bl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.si=0,this.oi=new zl,this.targetCount=0,this._i=qr.ar()}forEachTarget(t,n){return this.ii.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),k.resolve()}hr(t){this.ii.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this._i=new qr(n),this.highestTargetId=n),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,n){return this.hr(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.hr(n),k.resolve()}removeTargetData(t,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.ii.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.oi.Kr(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.oi.zr(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.oi.Jr(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.oi.containsKey(n))}}/**
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
 */class dg{constructor(t,n){this.ai={},this.overlays={},this.ui=new wo(0),this.ci=!1,this.ci=!0,this.li=new mA,this.referenceDelegate=t(this),this.hi=new EA(this),this.indexManager=new sA,this.remoteDocumentCache=function(s){return new yA(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new nA(n),this.Ti=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ai[t.toKey()];return r||(r=new _A(n,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,n,r){J("MemoryPersistence","Starting transaction:",t);const s=new wA(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(t,n){return k.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,n)))}}class wA extends eI{constructor(t){super(),this.currentSequenceNumber=t}}class Gl{constructor(t){this.persistence=t,this.Ai=new zl,this.Ri=null}static Vi(t){return new Gl(t)}get mi(){if(this.Ri)return this.Ri;throw at(60996)}addReference(t,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.mi.add(n.toString()),k.resolve()}removeTarget(t,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ii(){this.Ri=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,r=>{const s=rt.fromPath(r);return this.fi(t,s).next(i=>{i||n.removeEntry(s,ot.min())})}).next(()=>(this.Ri=null,n.apply(t)))}updateLimboDocument(t,n){return this.fi(t,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(t){return 0}fi(t,n){return k.or([()=>k.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class Ji{constructor(t,n){this.persistence=t,this.gi=new hr(r=>iI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uA(this,n)}static Vi(t,n){return new Ji(t,n)}Ii(){}di(t){return k.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}mr(t){const n=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}yr(t){let n=0;return this.gr(t,r=>{n++}).next(()=>n)}gr(t,n){return k.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(i=>i?k.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(t,a=>this.Sr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ot.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.gi.set(n,t.currentSequenceNumber),k.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.gi.set(r,t.currentSequenceNumber),k.resolve()}removeReference(t,n,r){return this.gi.set(r,t.currentSequenceNumber),k.resolve()}updateLimboDocument(t,n){return this.gi.set(n,t.currentSequenceNumber),k.resolve()}Pi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Di(t.data.value)),n}Sr(t,n,r){return k.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.gi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Kl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Is=r,this.ds=s}static Es(t,n){let r=Et(),s=Et();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kl(t,n.fromCache,r,s)}}/**
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
 */class TA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class IA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return ww()?8:nI(yw())>0?6:4}()}initialize(t,n){this.gs=t,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ps(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TA;return this.ws(t,n,a).next(l=>{if(i.result=l,this.Rs)return this.Ss(t,n,a,l.size)})}).next(()=>i.result)}Ss(t,n,r,s){return r.documentReadCount<this.Vs?(wr()<=yt.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Tr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(wr()<=yt.DEBUG&&J("QueryEngine","Query:",Tr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(wr()<=yt.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Tr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ze(n))):k.resolve())}ps(t,n){if(Nh(n))return k.resolve(null);let r=Ze(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ja(n,null,"F"),r=Ze(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=Et(...i);return this.gs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.bs(n,l);return this.Ds(n,h,a,c.readTime)?this.ps(t,Ja(n,null,"F")):this.vs(t,h,n,c)}))})))}ys(t,n,r,s){return Nh(n)||s.isEqual(ot.min())?k.resolve(null):this.gs.getDocuments(t,r).next(i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?k.resolve(null):(wr()<=yt.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tr(n)),this.vs(t,a,n,JT(s,js)).next(l=>l))})}bs(t,n){let r=new zt(Gp(t));return n.forEach((s,i)=>{bo(t,i)&&(r=r.add(i))}),r}Ds(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(t,n,r){return wr()<=yt.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Tr(n)),this.gs.getDocumentsMatchingQuery(t,n,Un.min(),r)}vs(t,n,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Wl="LocalStore",AA=3e8;class bA{constructor(t,n,r,s){this.persistence=t,this.Cs=n,this.serializer=s,this.Fs=new Bt(ht),this.Ms=new hr(i=>Ul(i),Bl),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Fs))}}function RA(e,t,n,r){return new bA(e,t,n,r)}async function pg(e,t){const n=vt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Et();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function gg(e){const t=vt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hi.getLastRemoteSnapshotVersion(n))}function SA(e,t){const n=vt(e),r=t.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.hi.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(Zt.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(N,F,W){return N.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=AA?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,v,d)&&l.push(n.hi.updateTargetData(i,v))});let c=qn(),h=Et();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(CA(i,a,t.documentUpdates).next(d=>{c=d.Ls,h=d.ks})),!r.isEqual(ot.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next(p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Fs=s,i))}function CA(e,t,n){let r=Et(),s=Et();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=qn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ot.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):J(Wl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ls:a,ks:s}})}function PA(e,t){const n=vt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,t).next(i=>i?(s=i,k.resolve(s)):n.hi.allocateTargetId(r).next(a=>(s=new Vn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(t,r.targetId)),r})}async function rl(e,t,n){const r=vt(e),s=r.Fs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Kr(a))throw a;J(Wl,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Kh(e,t,n){const r=vt(e);let s=ot.min(),i=Et();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=vt(c),m=p.Ms.get(d);return m!==void 0?k.resolve(p.Fs.get(m)):p.hi.getTargetData(h,d)}(r,a,Ze(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:Et())).next(l=>(VA(r,AI(t),l),{documents:l,qs:i})))}function VA(e,t,n){let r=e.xs.get(t)||ot.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.xs.set(t,r)}class Wh{constructor(){this.activeTargetIds=VI()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xA{constructor(){this.Fo=new Wh,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,n,r){this.Mo[t]=n}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Wh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DA{xo(t){}shutdown(){}}/**
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
 */const Qh="ConnectivityMonitor";class Yh{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(Qh,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){J(Qh,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ii=null;function sl(){return Ii===null?Ii=function(){return 268435456+Math.round(2147483648*Math.random())}():Ii++,"0x"+Ii.toString(16)}/**
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
 */const ma="RestConnection",OA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NA{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Gi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,n,r,s,i){const a=sl(),l=this.Go(t,n.toUriEncodedString());J(ma,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),d=Ol(h);return this.jo(t,l,c,r,d).then(p=>(J(ma,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Ln(ma,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(t,n,r,s,i,a){return this.Wo(t,n,r,s,i)}zo(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}Go(t,n){const r=OA[t];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class kA{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const re="WebChannelConnection";class MA extends NA{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,n,r,s,i){const a=sl();return new Promise((l,c)=>{const h=new yp;h.setWithCredentials(!0),h.listenOnce(vp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case xi.NO_ERROR:const p=h.getResponseJson();J(re,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case xi.TIMEOUT:J(re,`RPC '${t}' ${a} timed out`),c(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case xi.HTTP_ERROR:const m=h.getStatus();if(J(re,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const V=v==null?void 0:v.error;if(V&&V.status&&V.message){const N=function(W){const B=W.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(B)>=0?B:U.UNKNOWN}(V.status);c(new X(N,V.message))}else c(new X(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new X(U.UNAVAILABLE,"Connection failed."));break;default:at(9055,{c_:t,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{J(re,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);J(re,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}P_(t,n,r){const s=sl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tp(),l=wp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");J(re,`Creating RPC '${t}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.T_(p);let m=!1,v=!1;const V=new kA({Ho:F=>{v?J(re,`Not sending because RPC '${t}' stream ${s} is closed:`,F):(m||(J(re,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),J(re,`RPC '${t}' stream ${s} sending:`,F),p.send(F))},Yo:()=>p.close()}),N=(F,W,B)=>{F.listen(W,H=>{try{B(H)}catch(z){setTimeout(()=>{throw z},0)}})};return N(p,gs.EventType.OPEN,()=>{v||(J(re,`RPC '${t}' stream ${s} transport opened.`),V.s_())}),N(p,gs.EventType.CLOSE,()=>{v||(v=!0,J(re,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(p))}),N(p,gs.EventType.ERROR,F=>{v||(v=!0,Ln(re,`RPC '${t}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),V.__(new X(U.UNAVAILABLE,"The operation could not be completed")))}),N(p,gs.EventType.MESSAGE,F=>{var W;if(!v){const B=F.data[0];Mt(!!B,16349);const H=B,z=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(z){J(re,`RPC '${t}' stream ${s} received error:`,z);const ft=z.status;let pt=function(T){const A=jt[T];if(A!==void 0)return eg(A)}(ft),I=z.message;pt===void 0&&(pt=U.INTERNAL,I="Unknown error status: "+ft+" with message "+z.message),v=!0,V.__(new X(pt,I)),p.close()}else J(re,`RPC '${t}' stream ${s} received:`,B),V.a_(B)}}),N(l,Ep.STAT_EVENT,F=>{F.stat===qa.PROXY?J(re,`RPC '${t}' stream ${s} detected buffering proxy`):F.stat===qa.NOPROXY&&J(re,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.o_()},0),V}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(n=>n===t)}}function _a(){return typeof document<"u"?document:null}/**
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
 */function Po(e){return new GI(e,!0)}/**
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
 */class mg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Fi=t,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Jh="PersistentStream";class FA{constructor(t,n,r,s,i,a,l,c){this.Fi=t,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mg(t,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(n)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{t(()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,n){const r=this.K_(this.b_);this.stream=this.z_(t,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return J(Jh,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return n=>{this.Fi.enqueueAndForget(()=>this.b_===t?n():(J(Jh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LA extends FA{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(t,n){return this.connection.P_("Listen",t,n)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const n=WI(this.serializer,t),r=function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?xr(a.readTime):ot.min()}(t);return this.listener.J_(n,r)}H_(t){const n={};n.database=qh(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Qa(c)?{documents:QI(i,c)}:{query:YI(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=sg(i,a.resumeToken);const h=tl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=el(i,a.snapshotVersion.toTimestamp());const h=tl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=XI(this.serializer,t);r&&(n.labels=r),this.k_(n)}Y_(t){const n={};n.database=qh(this.serializer),n.removeTarget=t,this.k_(n)}}/**
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
 */class UA{}class BA extends UA{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(t,nl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())})}Jo(t,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(t,nl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(U.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class $A{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_n(n),this._a=!1):J("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Hr="RemoteStore";class jA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Zs(this)&&(J(Hr,"Restarting streams for network reachability change."),await async function(c){const h=vt(c);h.Ia.add(4),await Xs(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Vo(h)}(this))})}),this.Aa=new $A(r,s)}}async function Vo(e){if(Zs(e))for(const t of e.da)await t(!0)}async function Xs(e){for(const t of e.da)await t(!1)}function _g(e,t){const n=vt(e);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),Xl(n)?Jl(n):Yr(n).x_()&&Yl(n,t))}function Ql(e,t){const n=vt(e),r=Yr(n);n.Ta.delete(t),r.x_()&&yg(n,t),n.Ta.size===0&&(r.x_()?r.B_():Zs(n)&&n.Aa.set("Unknown"))}function Yl(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Yr(e).H_(t)}function yg(e,t){e.Ra.$e(t),Yr(e).Y_(t)}function Jl(e){e.Ra=new jI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),Yr(e).start(),e.Aa.aa()}function Xl(e){return Zs(e)&&!Yr(e).M_()&&e.Ta.size>0}function Zs(e){return vt(e).Ia.size===0}function vg(e){e.Ra=void 0}async function qA(e){e.Aa.set("Online")}async function HA(e){e.Ta.forEach((t,n)=>{Yl(e,t)})}async function zA(e,t){vg(e),Xl(e)?(e.Aa.la(t),Jl(e)):e.Aa.set("Unknown")}async function GA(e,t,n){if(e.Aa.set("Online"),t instanceof rg&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))}(e,t)}catch(r){J(Hr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xh(e,r)}else if(t instanceof Ni?e.Ra.Ye(t):t instanceof ng?e.Ra.it(t):e.Ra.et(t),!n.isEqual(ot.min()))try{const r=await gg(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(Zt.EMPTY_BYTE_STRING,d.snapshotVersion)),yg(i,c);const p=new Vn(d.target,c,h,d.sequenceNumber);Yl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){J(Hr,"Failed to raise snapshot:",r),await Xh(e,r)}}async function Xh(e,t,n){if(!Kr(t))throw t;e.Ia.add(1),await Xs(e),e.Aa.set("Offline"),n||(n=()=>gg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{J(Hr,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Vo(e)})}async function Zh(e,t){const n=vt(e);n.asyncQueue.verifyOperationInProgress(),J(Hr,"RemoteStore received new credentials");const r=Zs(n);n.Ia.add(3),await Xs(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Vo(n)}async function KA(e,t){const n=vt(e);t?(n.Ia.delete(2),await Vo(n)):t||(n.Ia.add(2),await Xs(n),n.Aa.set("Unknown"))}function Yr(e){return e.Va||(e.Va=function(n,r,s){const i=vt(n);return i.ia(),new LA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:qA.bind(null,e),e_:HA.bind(null,e),n_:zA.bind(null,e),J_:GA.bind(null,e)}),e.da.push(async t=>{t?(e.Va.N_(),Xl(e)?Jl(e):e.Aa.set("Unknown")):(await e.Va.stop(),vg(e))})),e.Va}/**
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
 */class Zl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Zl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eg(e,t){if(_n("AsyncQueue",`${t}: ${e}`),Kr(e))return new X(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Dr{static emptySet(t){return new Dr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||rt.comparator(n.key,r.key):(n,r)=>rt.comparator(n.key,r.key),this.keyedMap=ms(),this.sortedSet=new Bt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Dr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class tf{constructor(){this.fa=new Bt(rt.comparator)}track(t){const n=t.doc.key,r=this.fa.get(n);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(n,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(n):t.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):at(63341,{At:t,ga:r}):this.fa=this.fa.insert(n,t)}pa(){const t=[];return this.fa.inorderTraversal((n,r)=>{t.push(r)}),t}}class zr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new zr(t,n,Dr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ao(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class WA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class QA{constructor(){this.queries=ef(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=vt(n),i=s.queries;s.queries=ef(),i.forEach((a,l)=>{for(const c of l.wa)c.onError(r)})})(this,new X(U.ABORTED,"Firestore shutting down"))}}function ef(){return new hr(e=>zp(e),Ao)}async function YA(e,t){const n=vt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Sa()&&t.ba()&&(r=2):(i=new WA,r=t.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Eg(a,`Initialization of query '${Tr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.wa.push(t),t.va(n.onlineState),i.ya&&t.Ca(i.ya)&&tc(n)}async function JA(e,t){const n=vt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(t);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XA(e,t){const n=vt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&tc(n)}function ZA(e,t,n){const r=vt(e),s=r.queries.get(t);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(t)}function tc(e){e.Da.forEach(t=>{t.next()})}var il,nf;(nf=il||(il={})).Fa="default",nf.Cache="cache";class t0{constructor(t,n,r){this.query=t,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new zr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),n=!0):this.Ba(t,this.onlineState)&&(this.La(t),n=!0),this.Oa=t,n}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),n=!0),n}Ba(t,n){if(!t.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(t){t=zr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==il.Cache}}/**
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
 */class wg{constructor(t){this.key=t}}class Tg{constructor(t){this.key=t}}class e0{constructor(t,n){this.query=t,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Et(),this.mutatedKeys=Et(),this.Xa=Gp(t),this.eu=new Dr(this.Xa)}get tu(){return this.Ha}nu(t,n){const r=n?n.ru:new tf,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),v=bo(this.query,p)?p:null,V=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let F=!1;m&&v?m.data.isEqual(v.data)?V!==N&&(r.track({type:3,doc:v}),F=!0):this.iu(m,v)||(r.track({type:2,doc:v}),F=!0,(c&&this.Xa(v,c)>0||h&&this.Xa(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),F=!0):m&&!v&&(r.track({type:1,doc:m}),F=!0,(c||h)&&(l=!0)),F&&(v?(a=a.add(v),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((d,p)=>function(v,V){const N=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return at(20277,{At:F})}};return N(v)-N(V)}(d.type,p.type)||this.Xa(d.doc,p.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new zr(this.query,t.eu,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new tf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=Et(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return t.forEach(r=>{this.Za.has(r)||n.push(new Tg(r))}),this.Za.forEach(r=>{t.has(r)||n.push(new wg(r))}),n}uu(t){this.Ha=t.qs,this.Za=Et();const n=this.nu(t.documents);return this.applyChanges(n,!0)}cu(){return zr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ec="SyncEngine";class n0{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class r0{constructor(t){this.key=t,this.lu=!1}}class s0{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hr(l=>zp(l),Ao),this.Tu=new Map,this.Iu=new Set,this.du=new Bt(rt.comparator),this.Eu=new Map,this.Au=new zl,this.Ru={},this.Vu=new Map,this.mu=qr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function i0(e,t,n=!0){const r=Sg(e);let s;const i=r.Pu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Ig(r,t,n,!0),s}async function o0(e,t){const n=Sg(e);await Ig(n,t,!0,!1)}async function Ig(e,t,n,r){const s=await PA(e.localStore,Ze(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await a0(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&_g(e.remoteStore,s),l}async function a0(e,t,n,r,s){e.gu=(p,m,v)=>async function(N,F,W,B){let H=F.view.nu(W);H.Ds&&(H=await Kh(N.localStore,F.query,!1).then(({documents:I})=>F.view.nu(I,H)));const z=B&&B.targetChanges.get(F.targetId),ft=B&&B.targetMismatches.get(F.targetId)!=null,pt=F.view.applyChanges(H,N.isPrimaryClient,z,ft);return sf(N,F.targetId,pt._u),pt.snapshot}(e,p,m,v);const i=await Kh(e.localStore,t,!0),a=new e0(t,i.qs),l=a.nu(i.documents),c=Js.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);sf(e,n,h._u);const d=new n0(t,n,a);return e.Pu.set(t,d),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),h.snapshot}async function l0(e,t,n){const r=vt(e),s=r.Pu.get(t),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Ao(a,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ql(r.remoteStore,s.targetId),ol(r,s.targetId)}).catch(Eo)):(ol(r,s.targetId),await rl(r.localStore,s.targetId,!0))}async function c0(e,t){const n=vt(e),r=n.Pu.get(t),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ql(n.remoteStore,r.targetId))}async function Ag(e,t){const n=vt(e);try{const r=await SA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Eu.get(i);a&&(Mt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Mt(a.lu,14607):s.removedDocuments.size>0&&(Mt(a.lu,42227),a.lu=!1))}),await Rg(n,r,t)}catch(r){await Eo(r)}}function rf(e,t,n){const r=vt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=vt(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.wa)m.va(l)&&(h=!0)}),h&&tc(c)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function u0(e,t,n){const r=vt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Eu.get(t),i=s&&s.key;if(i){let a=new Bt(rt.comparator);a=a.insert(i,oe.newNoDocument(i,ot.min()));const l=Et().add(i),c=new Co(ot.min(),new Map,new Bt(ht),a,l);await Ag(r,c),r.du=r.du.remove(i),r.Eu.delete(t),nc(r)}else await rl(r.localStore,t,!1).then(()=>ol(r,t,n)).catch(Eo)}function ol(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Tu.get(t))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(r=>{e.Au.containsKey(r)||bg(e,r)})}function bg(e,t){e.Iu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Ql(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),nc(e))}function sf(e,t,n){for(const r of n)r instanceof wg?(e.Au.addReference(r.key,t),h0(e,r)):r instanceof Tg?(J(ec,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||bg(e,r.key)):at(19791,{yu:r})}function h0(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(J(ec,"New document in limbo: "+n),e.Iu.add(r),nc(e))}function nc(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new rt(Vt.fromString(t)),r=e.mu.next();e.Eu.set(r,new r0(n)),e.du=e.du.insert(n,r),_g(e.remoteStore,new Vn(Ze(qp(n.path)),r,"TargetPurposeLimboResolution",wo.ue))}}async function Rg(e,t,n){const r=vt(e),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{a.push(r.gu(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Kl.Es(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.hu.J_(s),await async function(c,h){const d=vt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,m=>k.forEach(m.Is,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>k.forEach(m.ds,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Kr(p))throw p;J(Wl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.Fs.get(m),V=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(m,N)}}}(r.localStore,i))}async function f0(e,t){const n=vt(e);if(!n.currentUser.isEqual(t)){J(ec,"User change. New user:",t.toKey());const r=await pg(n.localStore,t);n.currentUser=t,function(i,a){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new X(U.CANCELLED,a))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Rg(n,r.Bs)}}function d0(e,t){const n=vt(e),r=n.Eu.get(t);if(r&&r.lu)return Et().add(r.key);{let s=Et();const i=n.Tu.get(t);if(!i)return s;for(const a of i){const l=n.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Sg(e){const t=vt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ag.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=d0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=u0.bind(null,t),t.hu.J_=XA.bind(null,t.eventManager),t.hu.pu=ZA.bind(null,t.eventManager),t}class Xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Po(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,n){return null}Fu(t,n){return null}vu(t){return RA(this.persistence,new IA,t.initialUser,this.serializer)}Du(t){return new dg(Gl.Vi,this.serializer)}bu(t){return new xA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xi.provider={build:()=>new Xi};class p0 extends Xi{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,n){Mt(this.persistence.referenceDelegate instanceof Ji,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,t.asyncQueue,n)}Du(t){const n=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new dg(r=>Ji.Vi(r,n),this.serializer)}}class al{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f0.bind(null,this.syncEngine),await KA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new QA}()}createDatastore(t){const n=Po(t.databaseInfo.databaseId),r=function(i){return new MA(i)}(t.databaseInfo);return function(i,a,l,c){return new BA(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new jA(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>rf(this.syncEngine,n,0),function(){return Yh.C()?new Yh:new DA}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new s0(s,i,a,l,c,h);return d&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=vt(s);J(Hr,"RemoteStore shutting down."),i.Ia.add(5),await Xs(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}al.provider={build:()=>new al};/**
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
 */class g0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):_n("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Hn="FirestoreClient";class m0{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=Rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J(Hn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J(Hn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Eg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ya(e,t){e.asyncQueue.verifyOperationInProgress(),J(Hn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{Ln("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Ln("Terminating Firestore due to IndexedDb database deletion failed",s)})}),e._offlineComponents=t}async function of(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _0(e);J(Hn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Zh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Zh(t.remoteStore,s)),e._onlineComponents=t}async function _0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){J(Hn,"Using user provided OfflineComponentProvider");try{await ya(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ln("Error using user provided cache. Falling back to memory cache: "+n),await ya(e,new Xi)}}else J(Hn,"Using default OfflineComponentProvider"),await ya(e,new p0(void 0));return e._offlineComponents}async function y0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(J(Hn,"Using user provided OnlineComponentProvider"),await of(e,e._uninitializedComponentsProvider._online)):(J(Hn,"Using default OnlineComponentProvider"),await of(e,new al))),e._onlineComponents}async function v0(e){const t=await y0(e),n=t.eventManager;return n.onListen=i0.bind(null,t.syncEngine),n.onUnlisten=l0.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=o0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=c0.bind(null,t.syncEngine),n}function E0(e,t,n={}){const r=new ir;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new g0({next:m=>{d.Ou(),a.enqueueAndForget(()=>JA(i,p)),m.fromCache&&c.source==="server"?h.reject(new X(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new t0(l,d,{includeMetadataChanges:!0,ka:!0});return YA(i,p)}(await v0(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Cg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Pg="firestore.googleapis.com",lf=!0;class cf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pg,this.ssl=lf}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:lf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<oA)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}YT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rc{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $T;switch(r.type){case"firstParty":return new zT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=af.get(n);r&&(J("ComponentProvider","Removing Datastore"),af.delete(n),r.terminate())}(this),Promise.resolve()}}function w0(e,t,n,r={}){var s;e=za(e,rc);const i=Ol(t),a=e._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),c=`${t}:${n}`;i&&(dw(`https://${c}`),_w("Firestore",!0)),a.host!==Pg&&a.host!==c&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Bs(h,l)&&(e._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=se.MOCK_USER;else{d=pw(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new se(m)}e._authCredentials=new jT(new Ap(d,p))}}/**
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
 */class fr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class me{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new me(this.firestore,t,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Ys(n,me._jsonSchema))return new me(t,r||null,new rt(Vt.fromString(n.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Ht("string",me._jsonSchemaVersion),referencePath:Ht("string")};class Or extends fr{constructor(t,n,r){super(t,n,qp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new me(this.firestore,null,new rt(t))}withConverter(t){return new Or(this.firestore,t,this._path)}}function uf(e,t,...n){if(e=Ur(e),e instanceof rc){const r=Vt.fromString(t,...n);return Eh(r),new Or(e,null,r)}{if(!(e instanceof me||e instanceof Or))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Vt.fromString(t,...n));return Eh(r),new Or(e.firestore,null,r)}}/**
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
 */const hf="AsyncQueue";class ff{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mg(this,"async_queue_retry"),this.oc=()=>{const r=_a();r&&J(hf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const n=_a();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const n=_a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ir;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Kr(t))throw t;J(hf,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const n=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,_n("INTERNAL UNHANDLED ERROR: ",df(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(t,n,r){this.ac(),this.sc.indexOf(t)>-1&&(n=0);const s=Zl.createAndSchedule(this,t,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&at(47125,{hc:df(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const n of this.ec)if(n.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const n=this.ec.indexOf(t);this.ec.splice(n,1)}}function df(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Vg extends rc{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new ff,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ff(t),this._firestoreClient=void 0,await t}}}function T0(e,t){const n=typeof e=="object"?e:pp(),r=typeof e=="string"?e:Gi,s=Qs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hw("firestore");i&&w0(s,...i)}return s}function I0(e){if(e._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||A0(e),e._firestoreClient}function A0(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,d){return new lI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Cg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new m0(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
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
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(Zt.fromBase64String(t))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new De(Zt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ys(t,De._jsonSchema))return De.fromBase64String(t.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:Ht("string",De._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class xg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Dg{constructor(t){this._methodName=t}}/**
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
 */class tn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ht(this._lat,t._lat)||ht(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tn._jsonSchemaVersion}}static fromJSON(t){if(Ys(t,tn._jsonSchema))return new tn(t.latitude,t.longitude)}}tn._jsonSchemaVersion="firestore/geoPoint/1.0",tn._jsonSchema={type:Ht("string",tn._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class en{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ys(t,en._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new en(t.vectorValues);throw new X(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:Ht("string",en._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const b0=/^__.*__$/;function Og(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw at(40011,{Ec:e})}}class sc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new sc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ll(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Og(this.Ec)&&b0.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class R0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Po(t)}Dc(t,n,r,s=!1){return new sc({Ec:t,methodName:n,bc:r,path:le.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function S0(e){const t=e._freezeSettings(),n=Po(e._databaseId);return new R0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function C0(e,t,n,r=!1){return ic(n,e.Dc(r?4:3,t))}function ic(e,t){if(Ng(e=Ur(e)))return V0("Unsupported field value:",t,e),P0(e,t);if(e instanceof Dg)return function(r,s){if(!Og(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=ic(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Ur(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xt.fromDate(r);return{timestampValue:el(s.serializer,i)}}if(r instanceof xt){const i=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:el(s.serializer,i)}}if(r instanceof tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:sg(s.serializer,r._byteString)};if(r instanceof me){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ig(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return function(a,l){return{mapValue:{fields:{[kp]:{stringValue:Mp},[Ki]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return $l(l.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${vo(r)}`)}(e,t)}function P0(e,t){const n={};return Pp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wr(e,(r,s)=>{const i=ic(s,t.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ng(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof xt||e instanceof tn||e instanceof De||e instanceof me||e instanceof Dg||e instanceof en)}function V0(e,t,n){if(!Ng(n)||!Sp(n)){const r=vo(n);throw r==="an object"?t.wc(e+" a custom object"):t.wc(e+" "+r)}}const x0=new RegExp("[~\\*/\\[\\]]");function D0(e,t,n){if(t.search(x0)>=0)throw ll(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xg(...t.split("."))._internalPath}catch{throw ll(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ll(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new X(U.INVALID_ARGUMENT,l+e+c)}/**
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
 */class kg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new O0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O0 extends kg{data(){return super.data()}}function xo(e,t){return typeof t=="string"?D0(e,t):t instanceof xg?t._internalPath:t._delegate._internalPath}/**
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
 */function N0(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new X(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oc{}class Mg extends oc{}function pf(e,t,...n){let r=[];t instanceof oc&&r.push(t),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof ac).length,l=i.filter(c=>c instanceof Do).length;if(a>1||a>0&&l>0)throw new X(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Do extends Mg{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Do(t,n,r)}_apply(t){const n=this._parse(t);return Fg(t._query,n),new fr(t.firestore,t.converter,Ya(t._query,n))}_parse(t){const n=S0(t.firestore);return function(i,a,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){_f(p,d);const V=[];for(const N of p)V.push(mf(c,i,N));m={arrayValue:{values:V}}}else m=mf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||_f(p,d),m=C0(l,a,p,d==="in"||d==="not-in");return qt.create(h,d,m)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function k0(e,t,n){const r=t,s=xo("where",e);return Do._create(s,r,n)}class ac extends oc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ac(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:He.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Fg(a,c),a=Ya(a,c)}(t._query,n),new fr(t.firestore,t.converter,Ya(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lc extends Mg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new lc(t,n)}_apply(t){const n=function(s,i,a){if(s.startAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gs(i,a)}(t._query,this._field,this._direction);return new fr(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Qr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function gf(e,t="asc"){const n=t,r=xo("orderBy",e);return lc._create(r,n)}function mf(e,t,n){if(typeof(n=Ur(n))=="string"){if(n==="")throw new X(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hp(t)&&n.indexOf("/")!==-1)throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Vt.fromString(n));if(!rt.isDocumentKey(r))throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ch(e,new rt(r))}if(n instanceof me)return Ch(e,n._key);throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vo(n)}.`)}function _f(e,t){if(!Array.isArray(e)||e.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Fg(e,t){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class M0{convertValue(t,n="none"){switch(jn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes($n(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw at(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Wr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[Ki].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Lt(a.doubleValue));return new en(i)}convertGeoPoint(t){return new tn(Lt(t.latitude),Lt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Io(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qs(t));default:return null}}convertTimestamp(t){const n=Bn(t);return new xt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Vt.fromString(t);Mt(hg(r),9688,{name:t});const s=new Hs(r.get(1),r.get(3)),i=new rt(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Ai{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nr extends kg{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(xo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Nr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nr._jsonSchema={type:Ht("string",Nr._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class ki extends Nr{data(t={}){return super.data(t)}}class kr{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new ki(this._firestore,this._userDataWriter,r.key,r,new Ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:F0(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=kr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Rp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function F0(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return at(61501,{type:e})}}kr._jsonSchemaVersion="firestore/querySnapshot/1.0",kr._jsonSchema={type:Ht("string",kr._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class L0 extends M0{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new me(this.firestore,null,n)}}function yf(e){e=za(e,fr);const t=za(e.firestore,Vg),n=I0(t),r=new L0(t);return N0(e._query),E0(n,e._query).then(s=>new kr(t,r,e,s))}(function(t,n=!0){(function(s){Gr=s})(CT),Fn(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Vg(new qT(r.getProvider("auth-internal")),new GT(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Xe(gh,mh,t),Xe(gh,mh,"esm2017")})();const Lg="@firebase/installations",cc="0.6.18";/**
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
 */const Ug=1e4,Bg=`w:${cc}`,$g="FIS_v2",U0="https://firebaseinstallations.googleapis.com/v1",B0=60*60*1e3,$0="installations",j0="Installations";/**
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
 */const q0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},lr=new yo($0,j0,q0);function jg(e){return e instanceof Gn&&e.code.includes("request-failed")}/**
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
 */function qg({projectId:e}){return`${U0}/projects/${e}/installations`}function Hg(e){return{token:e.token,requestStatus:2,expiresIn:z0(e.expiresIn),creationTime:Date.now()}}async function zg(e,t){const r=(await t.json()).error;return lr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function H0(e,{refreshToken:t}){const n=Gg(e);return n.append("Authorization",G0(t)),n}async function Kg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function z0(e){return Number(e.replace("s","000"))}function G0(e){return`${$g} ${e}`}/**
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
 */async function K0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=qg(e),s=Gg(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:$g,appId:e.appId,sdkVersion:Bg},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Kg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Hg(h.authToken)}}else throw await zg("Create Installation",c)}/**
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
 */function Wg(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function W0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Q0=/^[cdef][\w-]{21}$/,cl="";function Y0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=J0(e);return Q0.test(n)?n:cl}catch{return cl}}function J0(e){return W0(e).substr(0,22)}/**
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
 */const Qg=new Map;function Yg(e,t){const n=Oo(e);Jg(n,t),X0(n,t)}function Jg(e,t){const n=Qg.get(e);if(n)for(const r of n)r(t)}function X0(e,t){const n=Z0();n&&n.postMessage({key:e,fid:t}),tb()}let nr=null;function Z0(){return!nr&&"BroadcastChannel"in self&&(nr=new BroadcastChannel("[Firebase] FID Change"),nr.onmessage=e=>{Jg(e.data.key,e.data.fid)}),nr}function tb(){Qg.size===0&&nr&&(nr.close(),nr=null)}/**
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
 */const eb="firebase-installations-database",nb=1,cr="firebase-installations-store";let va=null;function uc(){return va||(va=fp(eb,nb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}})),va}async function Zi(e,t){const n=Oo(e),s=(await uc()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Yg(e,t.fid),t}async function Xg(e){const t=Oo(e),r=(await uc()).transaction(cr,"readwrite");await r.objectStore(cr).delete(t),await r.done}async function No(e,t){const n=Oo(e),s=(await uc()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Yg(e,l.fid),l}/**
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
 */async function hc(e){let t;const n=await No(e.appConfig,r=>{const s=rb(r),i=sb(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===cl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function rb(e){const t=e||{fid:Y0(),registrationStatus:0};return Zg(t)}function sb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(lr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ib(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ob(e)}:{installationEntry:t}}async function ib(e,t){try{const n=await K0(e,t);return Zi(e.appConfig,n)}catch(n){throw jg(n)&&n.customData.serverCode===409?await Xg(e.appConfig):await Zi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ob(e){let t=await vf(e.appConfig);for(;t.registrationStatus===1;)await Wg(100),t=await vf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hc(e);return r||n}return t}function vf(e){return No(e,t=>{if(!t)throw lr.create("installation-not-found");return Zg(t)})}function Zg(e){return ab(e)?{fid:e.fid,registrationStatus:0}:e}function ab(e){return e.registrationStatus===1&&e.registrationTime+Ug<Date.now()}/**
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
 */async function lb({appConfig:e,heartbeatServiceProvider:t},n){const r=cb(e,n),s=H0(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Bg,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Kg(()=>fetch(r,l));if(c.ok){const h=await c.json();return Hg(h)}else throw await zg("Generate Auth Token",c)}function cb(e,{fid:t}){return`${qg(e)}/${t}/authTokens:generate`}/**
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
 */async function fc(e,t=!1){let n;const r=await No(e.appConfig,i=>{if(!tm(i))throw lr.create("not-registered");const a=i.authToken;if(!t&&fb(a))return i;if(a.requestStatus===1)return n=ub(e,t),i;{if(!navigator.onLine)throw lr.create("app-offline");const l=pb(i);return n=hb(e,l),l}});return n?await n:r.authToken}async function ub(e,t){let n=await Ef(e.appConfig);for(;n.authToken.requestStatus===1;)await Wg(100),n=await Ef(e.appConfig);const r=n.authToken;return r.requestStatus===0?fc(e,t):r}function Ef(e){return No(e,t=>{if(!tm(t))throw lr.create("not-registered");const n=t.authToken;return gb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function hb(e,t){try{const n=await lb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Zi(e.appConfig,r),n}catch(n){if(jg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zi(e.appConfig,r)}throw n}}function tm(e){return e!==void 0&&e.registrationStatus===2}function fb(e){return e.requestStatus===2&&!db(e)}function db(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+B0}function pb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function gb(e){return e.requestStatus===1&&e.requestTime+Ug<Date.now()}/**
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
 */async function mb(e){const t=e,{installationEntry:n,registrationPromise:r}=await hc(t);return r?r.catch(console.error):fc(t).catch(console.error),n.fid}/**
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
 */async function _b(e,t=!1){const n=e;return await yb(n),(await fc(n,t)).token}async function yb(e){const{registrationPromise:t}=await hc(e);t&&await t}/**
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
 */function vb(e){if(!e||!e.options)throw Ea("App Configuration");if(!e.name)throw Ea("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ea(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ea(e){return lr.create("missing-app-config-values",{valueName:e})}/**
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
 */const em="installations",Eb="installations-internal",wb=e=>{const t=e.getProvider("app").getImmediate(),n=vb(t),r=Qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tb=e=>{const t=e.getProvider("app").getImmediate(),n=Qs(t,em).getImmediate();return{getId:()=>mb(n),getToken:s=>_b(n,s)}};function Ib(){Fn(new gn(em,wb,"PUBLIC")),Fn(new gn(Eb,Tb,"PRIVATE"))}Ib();Xe(Lg,cc);Xe(Lg,cc,"esm2017");/**
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
 */const to="analytics",Ab="firebase_id",bb="origin",Rb=60*1e3,Sb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ee=new Nl("@firebase/analytics");/**
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
 */const Cb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},be=new yo("analytics","Analytics",Cb);/**
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
 */function Pb(e){if(!e.startsWith(dc)){const t=be.create("invalid-gtag-resource",{gtagURL:e});return Ee.warn(t.message),""}return e}function nm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Vb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function xb(e,t){const n=Vb("firebase-js-sdk-policy",{createScriptURL:Pb}),r=document.createElement("script"),s=`${dc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Db(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ob(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await nm(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){Ee.error(l)}e("config",s,i)}async function Nb(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await nm(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ee.error(i)}}function kb(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await Nb(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await Ob(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){Ee.error(l)}}return s}function Mb(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=kb(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Fb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(dc)&&n.src.includes(e))return n;return null}/**
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
 */const Lb=30,Ub=1e3;class Bb{constructor(t={},n=Ub){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rm=new Bb;function $b(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function jb(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:$b(r)},i=Sb.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw be.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function qb(e,t=rm,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw be.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Gb;return setTimeout(async()=>{l.abort()},Rb),sm({appId:r,apiKey:s,measurementId:i},a,l,t)}async function sm(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=rm){var i;const{appId:a,measurementId:l}=e;try{await Hb(r,t)}catch(c){if(l)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await jb(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!zb(h)){if(s.deleteThrottleMetadata(a),l)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?ih(n,s.intervalMillis,Lb):ih(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),Ee.debug(`Calling attemptFetch again in ${d} millis`),sm(e,p,r,s)}}function Hb(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zb(e){if(!(e instanceof Gn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Gb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Kb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function Wb(){if(lp())try{await cp()}catch(e){return Ee.warn(be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ee.warn(be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Qb(e,t,n,r,s,i,a){var l;const c=qb(e);c.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Ee.error(v)),t.push(c);const h=Wb().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([c,h]);Fb(i)||xb(i,d.measurementId),s("js",new Date);const m=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return m[bb]="firebase",m.update=!0,p!=null&&(m[Ab]=p),s("config",d.measurementId,m),d.measurementId}/**
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
 */class Yb{constructor(t){this.app=t}_delete(){return delete Ds[this.app.options.appId],Promise.resolve()}}let Ds={},wf=[];const Tf={};let wa="dataLayer",Jb="gtag",If,im,Af=!1;function Xb(){const e=[];if(Ew()&&e.push("This is a browser extension environment."),Tw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=be.create("invalid-analytics-context",{errorInfo:t});Ee.warn(n.message)}}function Zb(e,t,n){Xb();const r=e.options.appId;if(!r)throw be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw be.create("no-api-key");if(Ds[r]!=null)throw be.create("already-exists",{id:r});if(!Af){Db(wa);const{wrappedGtag:i,gtagCore:a}=Mb(Ds,wf,Tf,wa,Jb);im=i,If=a,Af=!0}return Ds[r]=Qb(e,wf,Tf,t,If,wa,n),new Yb(e)}function t1(e=pp()){e=Ur(e);const t=Qs(e,to);return t.isInitialized()?t.getImmediate():e1(e)}function e1(e,t={}){const n=Qs(e,to);if(n.isInitialized()){const s=n.getImmediate();if(Bs(t,n.getOptions()))return s;throw be.create("already-initialized")}return n.initialize({options:t})}function n1(e,t,n,r){e=Ur(e),Kb(im,Ds[e.app.options.appId],t,n,r).catch(s=>Ee.error(s))}const bf="@firebase/analytics",Rf="0.10.17";function r1(){Fn(new gn(to,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Zb(r,s,n)},"PUBLIC")),Fn(new gn("analytics-internal",e,"PRIVATE")),Xe(bf,Rf),Xe(bf,Rf,"esm2017");function e(t){try{const n=t.getProvider(to).getImmediate();return{logEvent:(r,s,i)=>n1(n,r,s,i)}}catch(n){throw be.create("interop-component-reg-failed",{reason:n})}}}r1();const s1={apiKey:"AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg",authDomain:"floppyppua.firebaseapp.com",projectId:"floppyppua",storageBucket:"floppyppua.firebasestorage.app",messagingSenderId:"632221136636",appId:"1:632221136636:web:0c906476f404df50dbc979",measurementId:"G-NJ8ZBYWWYH"},om=dp(s1);t1(om);const Sf=T0(om),i1={class:"xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark"},o1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},a1={methods:{reRender(){this.$forceUpdate()}}},yr=Object.assign(a1,{__name:"Category",props:{cat:{type:String},title:{type:String}},setup(e){const t=e,n=bi([]),r=bi(!0),s=bi(null),i=async a=>{r.value=!0,s.value=null;try{if(t.cat=="newest"){const l=pf(uf(Sf,"programs"),gf("createdAt","desc")),c=await yf(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}else{const l=pf(uf(Sf,"programs"),k0("category","==",a),gf("name","asc")),c=await yf(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}}catch(l){console.error("Помилка при отриманні програм:",l),s.value=l}finally{r.value=!1}};return cd(()=>{i(t.cat)}),(a,l)=>(ge(),Ue("div",{class:oo("wrapper_"+t.cat)},[ct("h2",i1,br(e.title),1),ct("div",o1,[(ge(!0),Ue(Ve,null,k_(n.value,c=>(ge(),po(tw,{key:c.id,id:c.id,name:c.name,description:c.description,createdAt:c.createdAt,icon:c.icon,version:c.version,link64:c.link64,link32:c.link32,linkcommon:c.linkcommon,linkupdate:c.linkupdate,website:c.website},null,8,["id","name","description","createdAt","icon","version","link64","link32","linkcommon","linkupdate","website"]))),128))])],2))}}),am=NE({history:cE(),routes:[{path:"/blog",name:"blog",component:()=>oa(()=>import("./BlogPage-DmCWAmW-.js"),[]),meta:{title:"Блог про програми, систему тощо - Скачати безкоштовний софт | Floppy"}},{path:"/contact",name:"contact",component:()=>oa(()=>import("./ContactPage-Cz6waT07.js"),[]),meta:{title:"Контакти - Скачати безкоштовний софт | Floppy"}},{path:"/faq",name:"faq",component:()=>oa(()=>import("./FAQPage-B30tdVva.js"),[]),meta:{title:"Часті питання - Скачати безкоштовний софт | Floppy"}},{path:"/",name:"newest",component:yr,props:{cat:"newest",title:"Останні оновлення програм"},meta:{title:""}},{path:"/internet",name:"internet",component:yr,props:{cat:"internet",title:"Програми для Інтернету"},meta:{title:"Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy"}},{path:"/system",name:"system",component:yr,props:{cat:"system",title:"Системні утиліти"},meta:{title:"Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy"}},{path:"/media",name:"media",component:yr,props:{cat:"media",title:"Програми для медіа"},meta:{title:"Програми для аудіо, відео - Скачати безкоштовний софт | Floppy"}},{path:"/files",name:"files",component:yr,props:{cat:"files",title:"Робота з файлами"},meta:{title:"Робота з файлами - Скачати безкоштовний софт | Floppy"}},{path:"/development",name:"development",component:yr,props:{cat:"dev",title:"Розробка, програмування"},meta:{title:"Розробка, програмування - Скачати безкоштовний софт | Floppy"}}]});am.beforeEach((e,t,n)=>{document.title=e.meta.title||"Скачати безкоштовний софт | Floppy",n()});const l1=gv({tagId:"G-LVRGKFB5Y6"}),pc=Gy(Vv);pc.use(am);pc.use(l1);pc.mount("#app");export{Ve as F,zd as _,c1 as a,po as b,Ue as c,xe as d,ct as e,ge as o,N_ as r,un as w};
