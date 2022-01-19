var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function $(t){m=t}function _(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const y=[],w=[],b=[],v=[],C=Promise.resolve();let k=!1;function x(t){b.push(t)}let S=!1;const O=new Set;function E(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),M(e.$$)}for($(null),y.length=0;w.length;)w.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];O.has(e)||(O.add(e),e())}b.length=0}while(y.length);for(;v.length;)v.pop()();k=!1,S=!1,O.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const j=new Set;function T(t,e){t&&t.i&&(j.delete(t),t.i(e))}function G(t,e){t.d(1),e.delete(t.key)}function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(a,l,s,c,i,u,f,d=[-1]){const g=m;$(a);const h=a.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:l.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||g.$$.root};f&&f(h.root);let _=!1;if(h.ctx=s?s(a,l.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),_&&N(a,t)),e})):[],h.update(),_=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();l.intro&&T(a.$$.fragment),function(t,n,a,l){const{fragment:s,on_mount:c,on_destroy:p,after_update:i}=t.$$;s&&s.m(n,a),l||x((()=>{const n=c.map(e).filter(o);p?p.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(x)}(a,l.target,l.anchor,l.customElement),E()}$(g)}function J(t,e,n){const r=t.slice();return r[6]=e[n][0],r[7]=e[n][1],r}function I(t,e){let n,r,o,a,l,m,$=e[6]+"";return{key:t,first:null,c(){n=i("div"),r=u($),o=f(),g(n,"class",a="ClappersGrid__clapper ClappersGrid__clapper--"+(e[7]?"clapped":"unclapped")+" svelte-1g6wwp7"),this.first=n},m(t,a){c(t,n,a),s(n,r),s(n,o),l||(m=d(n,"click",e[3]),l=!0)},p(t,o){e=t,2&o&&$!==($=e[6]+"")&&h(r,$),2&o&&a!==(a="ClappersGrid__clapper ClappersGrid__clapper--"+(e[7]?"clapped":"unclapped")+" svelte-1g6wwp7")&&g(n,"class",a)},d(t){t&&p(n),l=!1,m()}}}function L(e){let n,r,o,a,m,$,_,y,w,b,v,C,k,x=[],S=new Map,O=Object.entries(e[1]);const E=t=>t[6];for(let t=0;t<O.length;t+=1){let n=J(e,O,t),r=E(n);S.set(r,x[t]=I(r,n))}return{c(){n=i("main"),r=i("div");for(let t=0;t<x.length;t+=1)x[t].c();o=f(),a=i("div"),m=i("div"),$=i("h1"),$.textContent="Today's Clap Announcer",_=f(),y=i("div"),w=u(e[0]),g(r,"class","ClappersGrid svelte-1g6wwp7"),g($,"class","svelte-1g6wwp7"),g(y,"class",b="ClappersGird__clapper TodaysClapper__clapper TodaysClapper__clapper--"+(e[1][e[0]]?"clapped":"unclapped")+" svelte-1g6wwp7"),g(m,"class","svelte-1g6wwp7"),g(a,"class","TodaysClapper svelte-1g6wwp7"),g(n,"class",v=l(e[1][e[0]]&&"MainClapping")+" svelte-1g6wwp7")},m(t,l){c(t,n,l),s(n,r);for(let t=0;t<x.length;t+=1)x[t].m(r,null);s(n,o),s(n,a),s(a,m),s(m,$),s(m,_),s(m,y),s(y,w),C||(k=d(y,"click",e[2]),C=!0)},p(t,[e]){10&e&&(O=Object.entries(t[1]),x=function(t,e,n,r,o,a,l,s,c,p,i,u){let f=t.length,d=a.length,g=f;const h={};for(;g--;)h[t[g].key]=g;const m=[],$=new Map,_=new Map;for(g=d;g--;){const t=u(o,a,g),s=n(t);let c=l.get(s);c?r&&c.p(t,e):(c=p(s,t),c.c()),$.set(s,m[g]=c),s in h&&_.set(s,Math.abs(g-h[s]))}const y=new Set,w=new Set;function b(t){T(t,1),t.m(s,i),l.set(t.key,t),i=t.first,d--}for(;f&&d;){const e=m[d-1],n=t[f-1],r=e.key,o=n.key;e===n?(i=e.first,f--,d--):$.has(o)?!l.has(r)||y.has(r)?b(e):w.has(o)?f--:_.get(r)>_.get(o)?(w.add(r),b(e)):(y.add(o),f--):(c(n,l),f--)}for(;f--;){const e=t[f];$.has(e.key)||c(e,l)}for(;d;)b(m[d-1]);return m}(x,e,E,1,t,O,S,r,G,I,null,J)),1&e&&h(w,t[0]),3&e&&b!==(b="ClappersGird__clapper TodaysClapper__clapper TodaysClapper__clapper--"+(t[1][t[0]]?"clapped":"unclapped")+" svelte-1g6wwp7")&&g(y,"class",b),3&e&&v!==(v=l(t[1][t[0]]&&"MainClapping")+" svelte-1g6wwp7")&&g(n,"class",v)},i:t,o:t,d(t){t&&p(n);for(let t=0;t<x.length;t+=1)x[t].d();C=!1,k()}}}const P="altitude_clappers";function q(t,e,n){let{clappers:r=["Julian","Sheva","Shaheen","Pablo","Shreemathi","Ashwini","Mike","Lucas","Vlad"]}=e;const o=JSON.parse(localStorage.getItem(P)||"{}");!function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}}(r),r.sort(((t,e)=>o[t]>o[e]));let a=Object.fromEntries(r.map((t=>[t,o[t]||!1])));localStorage.setItem(P,JSON.stringify(a));let{todaysClapper:l=r[0]}=e;return _((()=>{if(0===Object.entries(a).filter((([,t])=>!1===t)).length){const t=Object.fromEntries(Object.entries(a).map((([t])=>[t,!1])));n(1,a={...t}),localStorage.setItem(P,JSON.stringify(t))}})),t.$$set=t=>{"clappers"in t&&n(4,r=t.clappers),"todaysClapper"in t&&n(0,l=t.todaysClapper)},[l,a,()=>{n(1,a[l]=!0,a),localStorage.setItem(P,JSON.stringify(a))},t=>{const e=t.target.innerText;a[e]||n(0,l=e)},r]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,q,L,a,{clappers:4,todaysClapper:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
