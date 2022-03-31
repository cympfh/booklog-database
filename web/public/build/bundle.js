var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const l=c(t,n,e,o);return t[0](l)}}function c(t,e,o,l){return t[1]&&l?n(o.ctx.slice(),t[1](l(e))):o.ctx}function a(t,n,e,o,l,r,i){const s=function(t,n,e,o){if(t[2]&&o){const l=t[2](o(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|l[o];return t}return n.dirty|l}return n.dirty}(n,o,l,r);if(s){const l=c(n,e,o,i);t.p(l,s)}}let u,f=!1;function d(t,n,e,o){for(;t<n;){const l=t+(n-t>>1);e(l)<=o?t=l+1:n=l}return t}function p(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let l=0;for(let t=0;t<n.length;t++){const r=d(1,l+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[r]+1;const i=r+1;e[i]=t,l=Math.max(i,l)}const r=[],i=[];let s=n.length-1;for(let t=e[l]+1;0!=t;t=o[t-1]){for(r.push(n[t-1]);s>=t;s--)i.push(n[s]);s--}for(;s>=0;s--)i.push(n[s]);r.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<r.length&&i[n].claim_order>=r[e].claim_order;)e++;const o=e<r.length?r[e]:null;t.insertBefore(i[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function h(t,n,e){f&&!e?p(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function y(){return b("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t){return function(n){return n.preventDefault(),t.call(this,n)}}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){for(const e in n)_(t,e,n[e])}function z(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function M(t,n){t.value=null==n?"":n}function N(t,n,e){t.classList[e?"add":"remove"](n)}function j(t){u=t}function E(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const B=[],L=[],S=[],C=[],A=Promise.resolve();let T=!1;function I(t){S.push(t)}let H=!1;const O=new Set;function D(){if(!H){H=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];j(n),R(n.$$)}for(j(null),B.length=0;L.length;)L.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];O.has(n)||(O.add(n),n())}S.length=0}while(B.length);for(;C.length;)C.pop()();T=!1,H=!1,O.clear()}}function R(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const F=new Set;let G;function P(){G={r:0,c:[],p:G}}function W(){G.r||l(G.c),G=G.p}function J(t,n){t&&t.i&&(F.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),G.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Q(t,n){const e={},o={},l={$$scope:1};let r=t.length;for(;r--;){const i=t[r],s=n[r];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)l[t]||(e[t]=s[t],l[t]=1);t[r]=s}else for(const t in i)l[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function U(t){t&&t.c()}function V(t,n,o,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,o),i||I((()=>{const n=c.map(e).filter(r);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(I)}function X(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){-1===t.$$.dirty[0]&&(B.push(t),T||(T=!0,A.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Z(n,e,r,i,s,c,a=[-1]){const d=u;j(n);const p=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let h=!1;if(p.ctx=r?r(n,e.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),h&&Y(n,t)),e})):[],p.update(),h=!0,l(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){f=!0;const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach($)}else p.fragment&&p.fragment.c();e.intro&&J(n.$$.fragment),V(n,e.target,e.anchor,e.customElement),f=!1,D()}j(d)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(e){let o,l,r=[{key:l="path-"+e[0]},e[1]],i={};for(let t=0;t<r.length;t+=1)i=n(i,r[t]);return{c(){o=g("path"),k(o,i)},m(t,n){h(t,o,n)},p(t,[n]){k(o,i=Q(r,[1&n&&l!==(l="path-"+t[0])&&{key:l},2&n&&t[1]]))},i:t,o:t,d(t){t&&$(o)}}}function et(t,n,e){let{id:o=""}=n,{data:l={}}=n;return t.$$set=t=>{"id"in t&&e(0,o=t.id),"data"in t&&e(1,l=t.data)},[o,l]}class ot extends tt{constructor(t){super(),Z(this,t,et,nt,i,{id:0,data:1})}}function lt(e){let o,l,r=[{key:l="polygon-"+e[0]},e[1]],i={};for(let t=0;t<r.length;t+=1)i=n(i,r[t]);return{c(){o=g("polygon"),k(o,i)},m(t,n){h(t,o,n)},p(t,[n]){k(o,i=Q(r,[1&n&&l!==(l="polygon-"+t[0])&&{key:l},2&n&&t[1]]))},i:t,o:t,d(t){t&&$(o)}}}function rt(t,n,e){let{id:o=""}=n,{data:l={}}=n;return t.$$set=t=>{"id"in t&&e(0,o=t.id),"data"in t&&e(1,l=t.data)},[o,l]}class it extends tt{constructor(t){super(),Z(this,t,rt,lt,i,{id:0,data:1})}}function st(n){let e;return{c(){e=g("g")},m(t,o){h(t,e,o),e.innerHTML=n[0]},p(t,[n]){1&n&&(e.innerHTML=t[0])},i:t,o:t,d(t){t&&$(e)}}}function ct(t,n,e){let o,l=870711;let{data:r}=n;function i(t){if(!t||!t.raw)return null;let n=t.raw;const e={};return n=n.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,n)=>{const o=(l+=1,`fa-${l.toString(16)}`);return e[n]=o,` id="${o}"`})),n=n.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,n,o,l)=>{const r=n||l;return r&&e[r]?`#${e[r]}`:t})),n}return t.$$set=t=>{"data"in t&&e(1,r=t.data)},t.$$.update=()=>{2&t.$$.dirty&&e(0,o=i(r))},[o,r]}class at extends tt{constructor(t){super(),Z(this,t,ct,st,i,{data:1})}}function ut(t){let n,e,o,l;const r=t[13].default,i=s(r,t,t[12],null);return{c(){n=g("svg"),i&&i.c(),_(n,"version","1.1"),_(n,"class",e="fa-icon "+t[0]+" svelte-roizm6"),_(n,"x",t[8]),_(n,"y",t[9]),_(n,"width",t[1]),_(n,"height",t[2]),_(n,"aria-label",t[11]),_(n,"role",o=t[11]?"img":"presentation"),_(n,"viewBox",t[3]),_(n,"style",t[10]),N(n,"fa-spin",t[4]),N(n,"fa-pulse",t[6]),N(n,"fa-inverse",t[5]),N(n,"fa-flip-horizontal","horizontal"===t[7]),N(n,"fa-flip-vertical","vertical"===t[7])},m(t,e){h(t,n,e),i&&i.m(n,null),l=!0},p(t,[s]){i&&i.p&&(!l||4096&s)&&a(i,r,t,t[12],l?s:-1,null,null),(!l||1&s&&e!==(e="fa-icon "+t[0]+" svelte-roizm6"))&&_(n,"class",e),(!l||256&s)&&_(n,"x",t[8]),(!l||512&s)&&_(n,"y",t[9]),(!l||2&s)&&_(n,"width",t[1]),(!l||4&s)&&_(n,"height",t[2]),(!l||2048&s)&&_(n,"aria-label",t[11]),(!l||2048&s&&o!==(o=t[11]?"img":"presentation"))&&_(n,"role",o),(!l||8&s)&&_(n,"viewBox",t[3]),(!l||1024&s)&&_(n,"style",t[10]),17&s&&N(n,"fa-spin",t[4]),65&s&&N(n,"fa-pulse",t[6]),33&s&&N(n,"fa-inverse",t[5]),129&s&&N(n,"fa-flip-horizontal","horizontal"===t[7]),129&s&&N(n,"fa-flip-vertical","vertical"===t[7])},i(t){l||(J(i,t),l=!0)},o(t){K(i,t),l=!1},d(t){t&&$(n),i&&i.d(t)}}}function ft(t,n,e){let{$$slots:o={},$$scope:l}=n,{class:r}=n,{width:i}=n,{height:s}=n,{box:c}=n,{spin:a=!1}=n,{inverse:u=!1}=n,{pulse:f=!1}=n,{flip:d=null}=n,{x:p}=n,{y:h}=n,{style:$}=n,{label:m}=n;return t.$$set=t=>{"class"in t&&e(0,r=t.class),"width"in t&&e(1,i=t.width),"height"in t&&e(2,s=t.height),"box"in t&&e(3,c=t.box),"spin"in t&&e(4,a=t.spin),"inverse"in t&&e(5,u=t.inverse),"pulse"in t&&e(6,f=t.pulse),"flip"in t&&e(7,d=t.flip),"x"in t&&e(8,p=t.x),"y"in t&&e(9,h=t.y),"style"in t&&e(10,$=t.style),"label"in t&&e(11,m=t.label),"$$scope"in t&&e(12,l=t.$$scope)},[r,i,s,c,a,u,f,d,p,h,$,m,l,o]}class dt extends tt{constructor(t){super(),Z(this,t,ft,ut,i,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function pt(t,n,e){const o=t.slice();return o[24]=n[e],o[26]=e,o}function ht(t,n,e){const o=t.slice();return o[27]=n[e],o[26]=e,o}function $t(t){let n,e,o,l,r=t[0].paths&&mt(t),i=t[0].polygons&&gt(t),s=t[0].raw&&vt(t);return{c(){r&&r.c(),n=v(),i&&i.c(),e=v(),s&&s.c(),o=y()},m(t,c){r&&r.m(t,c),h(t,n,c),i&&i.m(t,c),h(t,e,c),s&&s.m(t,c),h(t,o,c),l=!0},p(t,l){t[0].paths?r?(r.p(t,l),1&l&&J(r,1)):(r=mt(t),r.c(),J(r,1),r.m(n.parentNode,n)):r&&(P(),K(r,1,1,(()=>{r=null})),W()),t[0].polygons?i?(i.p(t,l),1&l&&J(i,1)):(i=gt(t),i.c(),J(i,1),i.m(e.parentNode,e)):i&&(P(),K(i,1,1,(()=>{i=null})),W()),t[0].raw?s?(s.p(t,l),1&l&&J(s,1)):(s=vt(t),s.c(),J(s,1),s.m(o.parentNode,o)):s&&(P(),K(s,1,1,(()=>{s=null})),W())},i(t){l||(J(r),J(i),J(s),l=!0)},o(t){K(r),K(i),K(s),l=!1},d(t){r&&r.d(t),t&&$(n),i&&i.d(t),t&&$(e),s&&s.d(t),t&&$(o)}}}function mt(t){let n,e,o=t[0].paths,l=[];for(let n=0;n<o.length;n+=1)l[n]=qt(ht(t,o,n));const r=t=>K(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=y()},m(t,o){for(let n=0;n<l.length;n+=1)l[n].m(t,o);h(t,n,o),e=!0},p(t,e){if(1&e){let i;for(o=t[0].paths,i=0;i<o.length;i+=1){const r=ht(t,o,i);l[i]?(l[i].p(r,e),J(l[i],1)):(l[i]=qt(r),l[i].c(),J(l[i],1),l[i].m(n.parentNode,n))}for(P(),i=o.length;i<l.length;i+=1)r(i);W()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)J(l[t]);e=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)K(l[t]);e=!1},d(t){m(l,t),t&&$(n)}}}function qt(t){let n,e;return n=new ot({props:{id:t[26],data:t[27]}}),{c(){U(n.$$.fragment)},m(t,o){V(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.data=t[27]),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function gt(t){let n,e,o=t[0].polygons,l=[];for(let n=0;n<o.length;n+=1)l[n]=bt(pt(t,o,n));const r=t=>K(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=y()},m(t,o){for(let n=0;n<l.length;n+=1)l[n].m(t,o);h(t,n,o),e=!0},p(t,e){if(1&e){let i;for(o=t[0].polygons,i=0;i<o.length;i+=1){const r=pt(t,o,i);l[i]?(l[i].p(r,e),J(l[i],1)):(l[i]=bt(r),l[i].c(),J(l[i],1),l[i].m(n.parentNode,n))}for(P(),i=o.length;i<l.length;i+=1)r(i);W()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)J(l[t]);e=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)K(l[t]);e=!1},d(t){m(l,t),t&&$(n)}}}function bt(t){let n,e;return n=new it({props:{id:t[26],data:t[24]}}),{c(){U(n.$$.fragment)},m(t,o){V(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.data=t[24]),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function vt(t){let n,e,o;function l(n){t[15](n)}let r={};return void 0!==t[0]&&(r.data=t[0]),n=new at({props:r}),L.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(n,"data",l))),{c(){U(n.$$.fragment)},m(t,e){V(n,t,e),o=!0},p(t,o){const l={};var r;!e&&1&o&&(e=!0,l.data=t[0],r=()=>e=!1,C.push(r)),n.$set(l)},i(t){o||(J(n.$$.fragment,t),o=!0)},o(t){K(n.$$.fragment,t),o=!1},d(t){X(n,t)}}}function yt(t){let n;const e=t[14].default,o=s(e,t,t[16],null),l=o||function(t){let n,e,o=t[0]&&$t(t);return{c(){o&&o.c(),n=y()},m(t,l){o&&o.m(t,l),h(t,n,l),e=!0},p(t,e){t[0]?o?(o.p(t,e),1&e&&J(o,1)):(o=$t(t),o.c(),J(o,1),o.m(n.parentNode,n)):o&&(P(),K(o,1,1,(()=>{o=null})),W())},i(t){e||(J(o),e=!0)},o(t){K(o),e=!1},d(t){o&&o.d(t),t&&$(n)}}}(t);return{c(){l&&l.c()},m(t,e){l&&l.m(t,e),n=!0},p(t,r){o?o.p&&(!n||65536&r)&&a(o,e,t,t[16],n?r:-1,null,null):l&&l.p&&(!n||1&r)&&l.p(t,n?r:-1)},i(t){n||(J(l,t),n=!0)},o(t){K(l,t),n=!1},d(t){l&&l.d(t)}}}function xt(t){let n,e;return n=new dt({props:{label:t[6],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[2],flip:t[5],inverse:t[3],pulse:t[4],class:t[1],$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment)},m(t,o){V(n,t,o),e=!0},p(t,[e]){const o={};64&e&&(o.label=t[6]),128&e&&(o.width=t[7]),256&e&&(o.height=t[8]),1024&e&&(o.box=t[10]),512&e&&(o.style=t[9]),4&e&&(o.spin=t[2]),32&e&&(o.flip=t[5]),8&e&&(o.inverse=t[3]),16&e&&(o.pulse=t[4]),2&e&&(o.class=t[1]),65537&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function wt(t,n,e){let o,l,r,i,{$$slots:s={},$$scope:c}=n,{class:a=""}=n,{data:u}=n,{scale:f=1}=n,{spin:d=!1}=n,{inverse:p=!1}=n,{pulse:h=!1}=n,{flip:$=null}=n,{label:m=null}=n,{self:q=null}=n,{style:g=null}=n;function b(){let t=1;return void 0!==f&&(t=Number(f)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function v(){return q?Math.max(q.width,q.height)/16:1}return t.$$set=t=>{"class"in t&&e(1,a=t.class),"data"in t&&e(11,u=t.data),"scale"in t&&e(12,f=t.scale),"spin"in t&&e(2,d=t.spin),"inverse"in t&&e(3,p=t.inverse),"pulse"in t&&e(4,h=t.pulse),"flip"in t&&e(5,$=t.flip),"label"in t&&e(6,m=t.label),"self"in t&&e(0,q=t.self),"style"in t&&e(13,g=t.style),"$$scope"in t&&e(16,c=t.$$scope)},t.$$.update=()=>{14336&t.$$.dirty&&(!function(){if(void 0===u)return;const t=function(t){if("iconName"in t&&"icon"in t){let n={},e=t.icon,o=t.iconName,l={width:e[0],height:e[1],paths:[{d:e[4]}]};return n[o]=l,n}return t}(u),[n]=Object.keys(t),o=t[n];o.paths||(o.paths=[]),o.d&&o.paths.push({d:o.d}),o.polygons||(o.polygons=[]),o.points&&o.polygons.push({points:o.points}),e(0,q=o)}(),e(7,o=q?q.width/v()*b():0),e(8,l=q?q.height/v()*b():0),e(9,r=function(){let t="";null!==g&&(t+=g);let n=b();if(1===n){if(0===t.length)return;return t}return""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${n}em`}()),e(10,i=q?`0 0 ${q.width} ${q.height}`:`0 0 ${o} ${l}`))},[q,a,d,p,h,$,m,o,l,r,i,u,f,g,s,function(t){q=t,e(0,q)},c]}class _t extends tt{constructor(t){super(),Z(this,t,wt,xt,i,{class:1,data:11,scale:12,spin:2,inverse:3,pulse:4,flip:5,label:6,self:0,style:13})}}var kt={user:{width:1280,height:1792,paths:[{d:"M1280 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zM1024 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"}]}},zt={book:{width:1664,height:1792,paths:[{d:"M1639 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 0.5-30t-0.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t0.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zM575 480q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zM492 736q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z"}]}},Mt={globe:{width:1536,height:1792,paths:[{d:"M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM1042 649q-2 1-9.5 9.5t-13.5 9.5q2 0 4.5-5t5-11 3.5-7q6-7 22-15 14-6 52-12 34-8 51 11-2-2 9.5-13t14.5-12q3-2 15-4.5t15-7.5l2-22q-12 1-17.5-7t-6.5-21q0 2-6 8 0-7-4.5-8t-11.5 1-9 1q-10-3-15-7.5t-8-16.5-4-15q-2-5-9.5-11t-9.5-10q-1-2-2.5-5.5t-3-6.5-4-5.5-5.5-2.5-7 5-7.5 10-4.5 5q-3-2-6-1.5t-4.5 1-4.5 3-5 3.5q-3 2-8.5 3t-8.5 2q15-5-1-11-10-4-16-3 9-4 7.5-12t-8.5-14h5q-1-4-8.5-8.5t-17.5-8.5-13-6q-8-5-34-9.5t-33-0.5q-5 6-4.5 10.5t4 14 3.5 12.5q1 6-5.5 13t-6.5 12q0 7 14 15.5t10 21.5q-3 8-16 16t-16 12q-5 8-1.5 18.5t10.5 16.5q2 2 1.5 4t-3.5 4.5-5.5 4-6.5 3.5l-3 2q-11 5-20.5-6t-13.5-26q-7-25-16-30-23-8-29 1-5-13-41-26-25-9-58-4 6-1 0-15-7-15-19-12 3-6 4-17.5t1-13.5q3-13 12-23 1-1 7-8.5t9.5-13.5 0.5-6q35 4 50-11 5-5 11.5-17t10.5-17q9-6 14-5.5t14.5 5.5 14.5 5q14 1 15.5-11t-7.5-20q12 1 3-17-4-7-8-9-12-4-27 5-8 4 2 8-1-1-9.5 10.5t-16.5 17.5-16-5q-1-1-5.5-13.5t-9.5-13.5q-8 0-16 15 3-8-11-15t-24-8q19-12-8-27-7-4-20.5-5t-19.5 4q-5 7-5.5 11.5t5 8 10.5 5.5 11.5 4 8.5 3q14 10 8 14-2 1-8.5 3.5t-11.5 4.5-6 4q-3 4 0 14t-2 14q-5-5-9-17.5t-7-16.5q7 9-25 6l-10-1q-4 0-16 2t-20.5 1-13.5-8q-4-8 0-20 1-4 4-2-4-3-11-9.5t-10-8.5q-46 15-94 41 6 1 12-1 5-2 13-6.5t10-5.5q34-14 42-7l5-5q14 16 20 25-7-4-30-1-20 6-22 12 7 12 5 18-4-3-11.5-10t-14.5-11-15-5q-16 0-22 1-146 80-235 222 7 7 12 8 4 1 5 9t2.5 11 11.5-3q9 8 3 19 1-1 44 27 19 17 21 21 3 11-10 18-1-2-9-9t-9-4q-3 5 0.5 18.5t10.5 12.5q-7 0-9.5 16t-2.5 35.5-1 23.5l2 1q-3 12 5.5 34.5t21.5 19.5q-13 3 20 43 6 8 8 9 3 2 12 7.5t15 10 10 10.5q4 5 10 22.5t14 23.5q-2 6 9.5 20t10.5 23q-1 0-2.5 1t-2.5 1q3 7 15.5 14t15.5 13q1 3 2 10t3 11 8 2q2-20-24-62-15-25-17-29-3-5-5.5-15.5t-4.5-14.5q2 0 6 1.5t8.5 3.5 7.5 4 2 3q-3 7 2 17.5t12 18.5 17 19 12 13q6 6 14 19.5t0 13.5q9 0 20 10.5t17 19.5q5 8 8 26t5 24q2 7 8.5 13.5t12.5 9.5l16 8t13 7q5 2 18.5 10.5t21.5 11.5q10 4 16 4t14.5-2.5 13.5-3.5q15-2 29 15t21 21q36 19 55 11-2 1 0.5 7.5t8 15.5 9 14.5 5.5 8.5q5 6 18 15t18 15q6-4 7-9-3 8 7 20t18 10q14-3 14-32-31 15-49-18 0-1-2.5-5.5t-4-8.5-2.5-8.5 0-7.5 5-3q9 0 10-3.5t-2-12.5-4-13q-1-8-11-20t-12-15q-5 9-16 8t-16-9q0 1-1.5 5.5t-1.5 6.5q-13 0-15-1 1-3 2.5-17.5t3.5-22.5q1-4 5.5-12t7.5-14.5 4-12.5-4.5-9.5-17.5-2.5q-19 1-26 20-1 3-3 10.5t-5 11.5-9 7q-7 3-24 2t-24-5q-13-8-22.5-29t-9.5-37q0-10 2.5-26.5t3-25-5.5-24.5q3-2 9-9.5t10-10.5q2-1 4.5-1.5t4.5 0 4-1.5 3-6q-1-1-4-3-3-3-4-3 7 3 28.5-1.5t27.5 1.5q15 11 22-2 0-1-2.5-9.5t-0.5-13.5q5 27 29 9 3 3 15.5 5t17.5 5q3 2 7 5.5t5.5 4.5 5-0.5 8.5-6.5q10 14 12 24 11 40 19 44 7 3 11 2t4.5-9.5 0-14-1.5-12.5l-1-8v-18l-1-8q-15-3-18.5-12t1.5-18.5 15-18.5q1-1 8-3.5t15.5-6.5 12.5-8q21-19 15-35 7 0 11-9-1 0-5-3t-7.5-5-4.5-2q9-5 2-16 5-3 7.5-11t7.5-10q9 12 21 2 8-8 1-16 5-7 20.5-10.5t18.5-9.5q7 2 8-2t1-12 3-12q4-5 15-9t13-5l17-11q3-4 0-4 18 2 31-11 10-11-6-20 3-6-3-9.5t-15-5.5q3-1 11.5-0.5t10.5-1.5q15-10-7-16-17-5-43 12zM879 1526q206-36 351-189-3-3-12.5-4.5t-12.5-3.5q-18-7-24-8 1-7-2.5-13t-8-9-12.5-8-11-7q-2-2-7-6t-7-5.5-7.5-4.5-8.5-2-10 1l-3 1q-3 1-5.5 2.5t-5.5 3-4 3 0 2.5q-21-17-36-22-5-1-11-5.5t-10.5-7-10-1.5-11.5 7q-5 5-6 15t-2 13q-7-5 0-17.5t2-18.5q-3-6-10.5-4.5t-12 4.5-11.5 8.5-9 6.5-8.5 5.5-8.5 7.5q-3 4-6 12t-5 11q-2-4-11.5-6.5t-9.5-5.5q2 10 4 35t5 38q7 31-12 48-27 25-29 40-4 22 12 26 0 7-8 20.5t-7 21.5q0 6 2 16z"}]}},Nt={magic:{width:1664,height:1792,paths:[{d:"M1190 581l293-293-107-107-293 293zM1637 288q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zM286 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM636 260l196 60-196 60-60 196-60-196-196-60 196-60 60-196zM1566 738l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM926 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98z"}]}},jt={undo:{width:1536,height:1792,paths:[{d:"M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"}]}},Et={amazon:{width:1792,height:1792,paths:[{d:"M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zM1758 1361q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 0.5h-5.5-4.5t-3-0.5-2-1.5l-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zM1364 918q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zM692 939q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"}]}};function Bt(t){let n,e,o,r,i,s,c,a,u,f,d,m;return c=new _t({props:{data:kt}}),{c(){n=q("form"),e=q("div"),o=q("div"),r=q("input"),i=v(),s=q("span"),U(c.$$.fragment),a=v(),u=q("div"),u.innerHTML='<button type="submit" class="button is-primary">Go</button>',_(r,"class","input"),_(r,"type","text"),_(r,"placeholder","booklog ID"),_(s,"class","icon is-small is-left"),_(o,"class","control has-icons-left"),_(u,"class","control"),_(e,"class","field has-addons has-addons-centered")},m(l,$){h(l,n,$),p(n,e),p(e,o),p(o,r),M(r,t[0]),p(o,i),p(o,s),V(c,s,null),p(e,a),p(e,u),f=!0,d||(m=[x(r,"input",t[2]),x(n,"submit",w(t[1]))],d=!0)},p(t,[n]){1&n&&r.value!==t[0]&&M(r,t[0])},i(t){f||(J(c.$$.fragment,t),f=!0)},o(t){K(c.$$.fragment,t),f=!1},d(t){t&&$(n),X(c),d=!1,l(m)}}}function Lt(t,n,e){let o;return[o,function(){return location.assign(`/book/${o}/`),!1},function(){o=this.value,e(0,o)}]}class St extends tt{constructor(t){super(),Z(this,t,Lt,Bt,i,{})}}function Ct(t){let n,e,o,l,r,i,s,c,a,u,f,d,m,g,y,x,w,k,M,N,j,E,B,L,S,C,A,T,I,H,O,D,R,F,G,P,W,Q,Y,Z,tt,nt,et,ot,lt,rt=t[0].title+"",it=t[0].authors.join(" / ")+"",st=t[0].publisher+"",ct=t[0].release_date+"",at=t[0].category_name+"",ut=t[0].tags.join(" / ")+"",ft=t[0].read_datetime+"";return w=new _t({props:{data:Et}}),j=new _t({props:{data:Mt}}),{c(){n=q("div"),e=q("div"),o=q("header"),l=q("p"),r=b(rt),i=v(),s=q("div"),c=q("article"),a=q("div"),u=q("figure"),f=q("img"),m=v(),g=q("div"),y=q("div"),x=q("a"),U(w.$$.fragment),M=v(),N=q("a"),U(j.$$.fragment),B=v(),L=q("footer"),S=q("p"),C=b(it),A=v(),T=q("p"),I=b(st),H=v(),O=q("p"),D=b("Release:"),R=b(ct),F=v(),G=q("footer"),P=q("p"),W=b(at),Q=v(),Y=q("p"),Z=b(ut),tt=v(),nt=q("p"),et=b("Read:"),ot=b(ft),_(l,"class","card-header-title"),_(o,"class","card-header"),f.src!==(d=t[0].image)&&_(f,"src",d),_(f,"alt","Book Cover"),_(u,"class","image is-96x96"),_(a,"class","media-left"),_(x,"class","icon"),_(x,"href",k=t[0].amazon_link.replace("booklogjp-default-22","cympfh-22")),_(N,"class","icon"),_(N,"href",E=t[0].booklog_link),_(y,"class","card-container has-text-right"),_(S,"class","card-footer-item"),_(T,"class","card-footer-item"),_(O,"class","card-footer-item"),_(L,"class","card-footer"),_(P,"class","card-footer-item"),_(Y,"class","card-footer-item"),_(nt,"class","card-footer-item"),_(G,"class","card-footer"),_(g,"class","media-content"),_(c,"class","media"),_(s,"class","box"),_(e,"class","card"),_(n,"class","content")},m(t,d){h(t,n,d),p(n,e),p(e,o),p(o,l),p(l,r),p(e,i),p(e,s),p(s,c),p(c,a),p(a,u),p(u,f),p(c,m),p(c,g),p(g,y),p(y,x),V(w,x,null),p(y,M),p(y,N),V(j,N,null),p(g,B),p(g,L),p(L,S),p(S,C),p(L,A),p(L,T),p(T,I),p(L,H),p(L,O),p(O,D),p(O,R),p(g,F),p(g,G),p(G,P),p(P,W),p(G,Q),p(G,Y),p(Y,Z),p(G,tt),p(G,nt),p(nt,et),p(nt,ot),lt=!0},p(t,[n]){(!lt||1&n)&&rt!==(rt=t[0].title+"")&&z(r,rt),(!lt||1&n&&f.src!==(d=t[0].image))&&_(f,"src",d),(!lt||1&n&&k!==(k=t[0].amazon_link.replace("booklogjp-default-22","cympfh-22")))&&_(x,"href",k),(!lt||1&n&&E!==(E=t[0].booklog_link))&&_(N,"href",E),(!lt||1&n)&&it!==(it=t[0].authors.join(" / ")+"")&&z(C,it),(!lt||1&n)&&st!==(st=t[0].publisher+"")&&z(I,st),(!lt||1&n)&&ct!==(ct=t[0].release_date+"")&&z(R,ct),(!lt||1&n)&&at!==(at=t[0].category_name+"")&&z(W,at),(!lt||1&n)&&ut!==(ut=t[0].tags.join(" / ")+"")&&z(Z,ut),(!lt||1&n)&&ft!==(ft=t[0].read_datetime+"")&&z(ot,ft)},i(t){lt||(J(w.$$.fragment,t),J(j.$$.fragment,t),lt=!0)},o(t){K(w.$$.fragment,t),K(j.$$.fragment,t),lt=!1},d(t){t&&$(n),X(w),X(j)}}}function At(t,n,e){let{book:o}=n;return t.$$set=t=>{"book"in t&&e(0,o=t.book)},[o]}class Tt extends tt{constructor(t){super(),Z(this,t,At,Ct,i,{book:0})}}function It(t,n,e){const o=t.slice();return o[10]=n[e],o}function Ht(n){let e;return{c(){e=q("div"),e.textContent="Loading...",_(e,"class","subtitle")},m(t,n){h(t,e,n)},p:t,i:t,o:t,d(t){t&&$(e)}}}function Ot(t){let n,e,o,l,r,i=t[2],s=[];for(let n=0;n<i.length;n+=1)s[n]=Dt(It(t,i,n));const c=t=>K(s[t],1,1,(()=>{s[t]=null}));return{c(){n=q("div"),e=b(t[1]),o=v();for(let t=0;t<s.length;t+=1)s[t].c();l=y(),_(n,"class","subtitle")},m(t,i){h(t,n,i),p(n,e),h(t,o,i);for(let n=0;n<s.length;n+=1)s[n].m(t,i);h(t,l,i),r=!0},p(t,n){if((!r||2&n)&&z(e,t[1]),4&n){let e;for(i=t[2],e=0;e<i.length;e+=1){const o=It(t,i,e);s[e]?(s[e].p(o,n),J(s[e],1)):(s[e]=Dt(o),s[e].c(),J(s[e],1),s[e].m(l.parentNode,l))}for(P(),e=i.length;e<s.length;e+=1)c(e);W()}},i(t){if(!r){for(let t=0;t<i.length;t+=1)J(s[t]);r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)K(s[t]);r=!1},d(t){t&&$(n),t&&$(o),m(s,t),t&&$(l)}}}function Dt(t){let n,e;return n=new Tt({props:{book:t[10]}}),{c(){U(n.$$.fragment)},m(t,o){V(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.book=t[10]),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function Rt(t){let n,e,o,r,i,s,c,a,u,f,d,m,g,b,y,k;c=new _t({props:{data:Nt}});const z=[Ot,Ht],N=[];function j(t,n){return t[1]&&t[2]?0:1}return m=j(t),g=N[m]=z[m](t),{c(){n=q("form"),e=q("div"),o=q("div"),r=q("input"),i=v(),s=q("span"),U(c.$$.fragment),a=v(),u=q("div"),u.innerHTML='<button type="submit" class="button is-primary">Search</button>',f=v(),d=q("div"),g.c(),_(r,"class","input"),_(r,"type","text"),_(r,"placeholder","keyword"),_(s,"class","icon is-small is-left"),_(o,"class","control has-icons-left"),_(u,"class","control"),_(e,"class","field has-addons has-addons-centered"),_(d,"class","container")},m(l,$){h(l,n,$),p(n,e),p(e,o),p(o,r),M(r,t[0]),p(o,i),p(o,s),V(c,s,null),p(e,a),p(e,u),h(l,f,$),h(l,d,$),N[m].m(d,null),b=!0,y||(k=[x(r,"input",t[4]),x(n,"submit",w(t[3]))],y=!0)},p(t,[n]){1&n&&r.value!==t[0]&&M(r,t[0]);let e=m;m=j(t),m===e?N[m].p(t,n):(P(),K(N[e],1,1,(()=>{N[e]=null})),W(),g=N[m],g?g.p(t,n):(g=N[m]=z[m](t),g.c()),J(g,1),g.m(d,null))},i(t){b||(J(c.$$.fragment,t),J(g),b=!0)},o(t){K(c.$$.fragment,t),K(g),b=!1},d(t){t&&$(n),X(c),t&&$(f),t&&$(d),N[m].d(),y=!1,l(k)}}}function Ft(t,n,e){const o=location.pathname.split("/")[2];let l,r,i;function s(t,n){e(1,r=t),e(2,i=n)}return E((()=>{fetch(`/book/api/${o}?limit=${20}`).then((t=>t.json())).then((t=>s("Latest Items",t)))})),[l,r,i,function(){return function(t,n){fetch(`/book/api/${o}?limit=${t}&q=${n}`).then((t=>t.json())).then((t=>s(`Search with ${n}`,t)))}(100,l),e(1,r=null),e(2,i=[]),!1},function(){l=this.value,e(0,l)}]}class Gt extends tt{constructor(t){super(),Z(this,t,Ft,Rt,i,{})}}function Pt(n){return document.title="/book/"+n[0]+"/",{c:t,m:t,d:t}}function Wt(n){return{c(){document.title="/book/"},m:t,d:t}}function Jt(t){let n,e,o;return e=new Gt({}),{c(){n=q("div"),U(e.$$.fragment),_(n,"class","content")},m(t,l){h(t,n,l),V(e,n,null),o=!0},i(t){o||(J(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){t&&$(n),X(e)}}}function Kt(t){let n,e,o;return e=new St({}),{c(){n=q("div"),U(e.$$.fragment),_(n,"class","content")},m(t,l){h(t,n,l),V(e,n,null),o=!0},i(t){o||(J(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){t&&$(n),X(e)}}}function Qt(n){let e,o,l,r,i,s,c,a,u,f,d,m,g,b,x,w,k;let z=function(t,n){return t[0]?Pt:Wt}(n)(n);a=new _t({props:{data:zt,scale:"2"}});let M=n[0]&&function(n){let e,o,l,r,i,s,c,a;return i=new _t({props:{data:jt}}),{c(){e=q("div"),o=q("span"),l=q("span"),r=q("a"),U(i.$$.fragment),s=v(),c=q("span"),c.textContent=`username=${n[0]}`,_(r,"href","/book/"),_(l,"class","icon"),_(o,"class","icon-text has-text-info"),_(e,"class","container has-text-right")},m(t,n){h(t,e,n),p(e,o),p(o,l),p(l,r),V(i,r,null),p(o,s),p(o,c),a=!0},p:t,i(t){a||(J(i.$$.fragment,t),a=!0)},o(t){K(i.$$.fragment,t),a=!1},d(t){t&&$(e),X(i)}}}(n);const N=[Kt,Jt],j=[];return x=function(t,n){return t[0]?1:0}(n),w=j[x]=N[x](n),{c(){z.c(),e=y(),o=v(),l=q("section"),r=q("div"),i=q("div"),s=q("p"),c=q("span"),U(a.$$.fragment),u=v(),f=q("span"),f.textContent=`${n[1]}`,d=v(),M&&M.c(),m=v(),g=q("div"),b=q("div"),w.c(),_(c,"class","icon-text"),_(s,"class","title"),_(i,"class","container"),_(r,"class","hero-body"),_(l,"class","hero"),_(b,"class","container"),_(g,"class","section")},m(t,n){z.m(document.head,null),p(document.head,e),h(t,o,n),h(t,l,n),p(l,r),p(r,i),p(i,s),p(s,c),V(a,c,null),p(c,u),p(c,f),p(r,d),M&&M.m(r,null),h(t,m,n),h(t,g,n),p(g,b),j[x].m(b,null),k=!0},p(t,[n]){t[0]&&M.p(t,n)},i(t){k||(J(a.$$.fragment,t),J(M),J(w),k=!0)},o(t){K(a.$$.fragment,t),K(M),K(w),k=!1},d(t){z.d(t),$(e),t&&$(o),t&&$(l),X(a),M&&M.d(),t&&$(m),t&&$(g),j[x].d()}}}function Ut(t){const n=location.pathname,e=n.split("/")[2];let o=e?`/book/${e}/`:"/book/";return E((()=>{"/"===n&&location.replace("/book/"),"/book"===n&&location.replace("/book/")})),[e,o]}return new class extends tt{constructor(t){super(),Z(this,t,Ut,Qt,i,{})}}({target:document.body,props:{}})}();