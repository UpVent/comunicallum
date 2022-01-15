var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,r;function s(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function d(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function b(){return f("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n){t.classList[n?"add":"remove"](e)}class y{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=g(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(u)}}function $(t){r=t}const k=[],N=[],C=[],M=[],j=Promise.resolve();let T=!1;function L(t){C.push(t)}const _=new Set;let E=0;function A(){const t=r;do{for(;E<k.length;){const t=k[E];E++,$(t),z(t.$$)}for($(null),k.length=0,E=0;N.length;)N.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];_.has(e)||(_.add(e),e())}C.length=0}while(k.length);for(;M.length;)M.pop()();T=!1,_.clear(),$(t)}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const P=new Set;function S(t,e){t&&t.i&&(P.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),undefined.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function O(t){t&&t.c()}function B(t,n,a,c){const{fragment:r,on_mount:s,on_destroy:l,after_update:d}=t.$$;r&&r.m(n,a),c||L((()=>{const n=s.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(L)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(k.push(t),T||(T=!0,j.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,i,a,c,s,l,d,m=[-1]){const p=r;$(e);const g=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||p.$$.root};d&&d(g.root);let f=!1;if(g.ctx=a?a(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=i)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](i),f&&G(e,t)),n})):[],g.update(),f=!0,o(g.before_update),g.fragment=!!c&&c(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();i.intro&&S(e.$$.fragment),B(e,i.target,i.anchor,i.customElement),A()}$(p)}class U{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const o=t.slice();return o[11]=e[n],o}function Z(t,e,n){const o=t.slice();return o[14]=e[n],o}function I(t,e,n){const o=t.slice();return o[17]=e[n],o}function F(e){return document.title=e[0],{c:t,m:t,d:t}}function J(t){let e;return{c(){e=g("meta"),w(e,"name","description"),w(e,"content",t[3])},m(t,n){m(t,e,n)},p(t,n){8&n&&w(e,"content",t[3])},d(t){t&&u(e)}}}function Y(t){let e;return{c(){e=g("link"),w(e,"rel","canonical"),w(e,"href",t[5])},m(t,n){m(t,e,n)},p(t,n){32&n&&w(e,"href",t[5])},d(t){t&&u(e)}}}function R(t){let e;return{c(){e=g("meta"),w(e,"name","keywords"),w(e,"content",t[4])},m(t,n){m(t,e,n)},p(t,n){16&n&&w(e,"content",t[4])},d(t){t&&u(e)}}}function K(t){let e,n,o,i,a,c,r=t[6].title&&Q(t),s=t[6].description&&X(t),l=(t[6].url||t[5])&&tt(t),d=t[6].type&&et(t),p=t[6].article&&nt(t),g=t[6].images&&t[6].images.length&&mt(t);return{c(){r&&r.c(),e=h(),s&&s.c(),n=h(),l&&l.c(),o=h(),d&&d.c(),i=h(),p&&p.c(),a=h(),g&&g.c(),c=b()},m(t,u){r&&r.m(t,u),m(t,e,u),s&&s.m(t,u),m(t,n,u),l&&l.m(t,u),m(t,o,u),d&&d.m(t,u),m(t,i,u),p&&p.m(t,u),m(t,a,u),g&&g.m(t,u),m(t,c,u)},p(t,m){t[6].title?r?r.p(t,m):(r=Q(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[6].description?s?s.p(t,m):(s=X(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),t[6].url||t[5]?l?l.p(t,m):(l=tt(t),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null),t[6].type?d?d.p(t,m):(d=et(t),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null),t[6].article?p?p.p(t,m):(p=nt(t),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null),t[6].images&&t[6].images.length?g?g.p(t,m):(g=mt(t),g.c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null)},d(t){r&&r.d(t),t&&u(e),s&&s.d(t),t&&u(n),l&&l.d(t),t&&u(o),d&&d.d(t),t&&u(i),p&&p.d(t),t&&u(a),g&&g.d(t),t&&u(c)}}}function Q(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:title"),w(e,"content",n=t[6].title)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].title)&&w(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:description"),w(e,"content",n=t[6].description)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].description)&&w(e,"content",n)},d(t){t&&u(e)}}}function tt(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:url"),w(e,"content",n=t[6].url||t[5])},m(t,n){m(t,e,n)},p(t,o){96&o&&n!==(n=t[6].url||t[5])&&w(e,"content",n)},d(t){t&&u(e)}}}function et(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:type"),w(e,"content",n=t[6].type.toLowerCase())},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].type.toLowerCase())&&w(e,"content",n)},d(t){t&&u(e)}}}function nt(t){let e,n,o,i,a,c,r=t[6].article.publishedTime&&ot(t),s=t[6].article.modifiedTime&&it(t),l=t[6].article.expirationTime&&at(t),d=t[6].article.section&&ct(t),p=t[6].article.authors&&t[6].article.authors.length&&rt(t),g=t[6].article.tags&&t[6].article.tags.length&&lt(t);return{c(){r&&r.c(),e=h(),s&&s.c(),n=h(),l&&l.c(),o=h(),d&&d.c(),i=h(),p&&p.c(),a=h(),g&&g.c(),c=b()},m(t,u){r&&r.m(t,u),m(t,e,u),s&&s.m(t,u),m(t,n,u),l&&l.m(t,u),m(t,o,u),d&&d.m(t,u),m(t,i,u),p&&p.m(t,u),m(t,a,u),g&&g.m(t,u),m(t,c,u)},p(t,m){t[6].article.publishedTime?r?r.p(t,m):(r=ot(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[6].article.modifiedTime?s?s.p(t,m):(s=it(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),t[6].article.expirationTime?l?l.p(t,m):(l=at(t),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null),t[6].article.section?d?d.p(t,m):(d=ct(t),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null),t[6].article.authors&&t[6].article.authors.length?p?p.p(t,m):(p=rt(t),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null),t[6].article.tags&&t[6].article.tags.length?g?g.p(t,m):(g=lt(t),g.c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null)},d(t){r&&r.d(t),t&&u(e),s&&s.d(t),t&&u(n),l&&l.d(t),t&&u(o),d&&d.d(t),t&&u(i),p&&p.d(t),t&&u(a),g&&g.d(t),t&&u(c)}}}function ot(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:published_time"),w(e,"content",n=t[6].article.publishedTime)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.publishedTime)&&w(e,"content",n)},d(t){t&&u(e)}}}function it(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:modified_time"),w(e,"content",n=t[6].article.modifiedTime)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.modifiedTime)&&w(e,"content",n)},d(t){t&&u(e)}}}function at(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:expiration_time"),w(e,"content",n=t[6].article.expirationTime)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.expirationTime)&&w(e,"content",n)},d(t){t&&u(e)}}}function ct(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:section"),w(e,"content",n=t[6].article.section)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.section)&&w(e,"content",n)},d(t){t&&u(e)}}}function rt(t){let e,n=t[6].article.authors,o=[];for(let e=0;e<n.length;e+=1)o[e]=st(I(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=b()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,i){if(64&i){let a;for(n=t[6].article.authors,a=0;a<n.length;a+=1){const c=I(t,n,a);o[a]?o[a].p(c,i):(o[a]=st(c),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){p(o,t),t&&u(e)}}}function st(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:author"),w(e,"content",n=t[17])},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[17])&&w(e,"content",n)},d(t){t&&u(e)}}}function lt(t){let e,n=t[6].article.tags,o=[];for(let e=0;e<n.length;e+=1)o[e]=dt(Z(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=b()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,i){if(64&i){let a;for(n=t[6].article.tags,a=0;a<n.length;a+=1){const c=Z(t,n,a);o[a]?o[a].p(c,i):(o[a]=dt(c),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){p(o,t),t&&u(e)}}}function dt(t){let e,n;return{c(){e=g("meta"),w(e,"property","article:tag"),w(e,"content",n=t[14])},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[14])&&w(e,"content",n)},d(t){t&&u(e)}}}function mt(t){let e,n=t[6].images,o=[];for(let e=0;e<n.length;e+=1)o[e]=ft(W(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=b()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);m(t,e,n)},p(t,i){if(64&i){let a;for(n=t[6].images,a=0;a<n.length;a+=1){const c=W(t,n,a);o[a]?o[a].p(c,i):(o[a]=ft(c),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){p(o,t),t&&u(e)}}}function ut(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:image:alt"),w(e,"content",n=t[11].alt)},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[11].alt)&&w(e,"content",n)},d(t){t&&u(e)}}}function pt(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:image:width"),w(e,"content",n=t[11].width.toString())},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[11].width.toString())&&w(e,"content",n)},d(t){t&&u(e)}}}function gt(t){let e,n;return{c(){e=g("meta"),w(e,"property","og:image:height"),w(e,"content",n=t[11].height.toString())},m(t,n){m(t,e,n)},p(t,o){64&o&&n!==(n=t[11].height.toString())&&w(e,"content",n)},d(t){t&&u(e)}}}function ft(t){let e,n,o,i,a,c,r=t[11].alt&&ut(t),s=t[11].width&&pt(t),l=t[11].height&&gt(t);return{c(){e=g("meta"),o=h(),r&&r.c(),i=h(),s&&s.c(),a=h(),l&&l.c(),c=b(),w(e,"property","og:image"),w(e,"content",n=t[11].url)},m(t,n){m(t,e,n),m(t,o,n),r&&r.m(t,n),m(t,i,n),s&&s.m(t,n),m(t,a,n),l&&l.m(t,n),m(t,c,n)},p(t,o){64&o&&n!==(n=t[11].url)&&w(e,"content",n),t[11].alt?r?r.p(t,o):(r=ut(t),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),t[11].width?s?s.p(t,o):(s=pt(t),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null),t[11].height?l?l.p(t,o):(l=gt(t),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null)},d(t){t&&u(e),t&&u(o),r&&r.d(t),t&&u(i),s&&s.d(t),t&&u(a),l&&l.d(t),t&&u(c)}}}function ht(t){let e,n,o,i,a,c,r,s=t[7].site&&bt(t),l=t[7].title&&xt(t),d=t[7].description&&wt(t),p=t[7].image&&vt(t),f=t[7].imageAlt&&yt(t);return{c(){e=g("meta"),n=h(),s&&s.c(),o=h(),l&&l.c(),i=h(),d&&d.c(),a=h(),p&&p.c(),c=h(),f&&f.c(),r=b(),w(e,"name","twitter:card"),w(e,"content","summary_large_image")},m(t,u){m(t,e,u),m(t,n,u),s&&s.m(t,u),m(t,o,u),l&&l.m(t,u),m(t,i,u),d&&d.m(t,u),m(t,a,u),p&&p.m(t,u),m(t,c,u),f&&f.m(t,u),m(t,r,u)},p(t,e){t[7].site?s?s.p(t,e):(s=bt(t),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),t[7].title?l?l.p(t,e):(l=xt(t),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),t[7].description?d?d.p(t,e):(d=wt(t),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null),t[7].image?p?p.p(t,e):(p=vt(t),p.c(),p.m(c.parentNode,c)):p&&(p.d(1),p=null),t[7].imageAlt?f?f.p(t,e):(f=yt(t),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},d(t){t&&u(e),t&&u(n),s&&s.d(t),t&&u(o),l&&l.d(t),t&&u(i),d&&d.d(t),t&&u(a),p&&p.d(t),t&&u(c),f&&f.d(t),t&&u(r)}}}function bt(t){let e,n;return{c(){e=g("meta"),w(e,"name","twitter:site"),w(e,"content",n=t[7].site)},m(t,n){m(t,e,n)},p(t,o){128&o&&n!==(n=t[7].site)&&w(e,"content",n)},d(t){t&&u(e)}}}function xt(t){let e,n;return{c(){e=g("meta"),w(e,"name","twitter:title"),w(e,"content",n=t[7].title)},m(t,n){m(t,e,n)},p(t,o){128&o&&n!==(n=t[7].title)&&w(e,"content",n)},d(t){t&&u(e)}}}function wt(t){let e,n;return{c(){e=g("meta"),w(e,"name","twitter:description"),w(e,"content",n=t[7].description)},m(t,n){m(t,e,n)},p(t,o){128&o&&n!==(n=t[7].description)&&w(e,"content",n)},d(t){t&&u(e)}}}function vt(t){let e,n;return{c(){e=g("meta"),w(e,"name","twitter:image"),w(e,"content",n=t[7].image)},m(t,n){m(t,e,n)},p(t,o){128&o&&n!==(n=t[7].image)&&w(e,"content",n)},d(t){t&&u(e)}}}function yt(t){let e,n;return{c(){e=g("meta"),w(e,"name","twitter:image:alt"),w(e,"content",n=t[7].imageAlt)},m(t,n){m(t,e,n)},p(t,o){128&o&&n!==(n=t[7].imageAlt)&&w(e,"content",n)},d(t){t&&u(e)}}}function $t(t){let e,n,o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[8]})+"<"}/script>`;return{c(){e=new y,n=b(),e.a=n},m(t,i){e.m(o,t,i),m(t,n,i)},p(t,n){256&n&&o!==(o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[8]})+"<"}/script>`)&&e.p(o)},d(t){t&&u(n),t&&e.d()}}}function kt(t){let e,n,o,i,a,c,r,s,m,p,f,h=t[0]&&F(t),x=t[3]&&J(t),v=t[5]&&Y(t),y=t[4]&&R(t),$=t[6]&&K(t),k=t[7]&&ht(t),N=t[8]&&$t(t);const C=t[10].default,M=function(t,e,n,o){if(t){const i=l(t,e,n,o);return t[0](i)}}(C,t,t[9],null);return{c(){h&&h.c(),e=g("meta"),o=g("meta"),x&&x.c(),a=b(),v&&v.c(),c=b(),y&&y.c(),r=b(),$&&$.c(),s=b(),k&&k.c(),m=b(),N&&N.c(),p=b(),M&&M.c(),w(e,"name","robots"),w(e,"content",n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`),w(o,"name","googlebot"),w(o,"content",i=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)},m(t,n){h&&h.m(document.head,null),d(document.head,e),d(document.head,o),x&&x.m(document.head,null),d(document.head,a),v&&v.m(document.head,null),d(document.head,c),y&&y.m(document.head,null),d(document.head,r),$&&$.m(document.head,null),d(document.head,s),k&&k.m(document.head,null),d(document.head,m),N&&N.m(document.head,null),d(document.head,p),M&&M.m(document.head,null),f=!0},p(t,[d]){t[0]?h||(h=F(t),h.c(),h.m(e.parentNode,e)):h&&(h.d(1),h=null),(!f||6&d&&n!==(n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`))&&w(e,"content",n),(!f||6&d&&i!==(i=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`))&&w(o,"content",i),t[3]?x?x.p(t,d):(x=J(t),x.c(),x.m(a.parentNode,a)):x&&(x.d(1),x=null),t[5]?v?v.p(t,d):(v=Y(t),v.c(),v.m(c.parentNode,c)):v&&(v.d(1),v=null),t[4]?y?y.p(t,d):(y=R(t),y.c(),y.m(r.parentNode,r)):y&&(y.d(1),y=null),t[6]?$?$.p(t,d):($=K(t),$.c(),$.m(s.parentNode,s)):$&&($.d(1),$=null),t[7]?k?k.p(t,d):(k=ht(t),k.c(),k.m(m.parentNode,m)):k&&(k.d(1),k=null),t[8]?N?N.p(t,d):(N=$t(t),N.c(),N.m(p.parentNode,p)):N&&(N.d(1),N=null),M&&M.p&&(!f||512&d)&&function(t,e,n,o,i,a){if(i){const c=l(e,n,o,a);t.p(c,i)}}(M,C,t,t[9],f?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(C,t[9],d,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[9]),null)},i(t){f||(S(M,t),f=!0)},o(t){H(M,t),f=!1},d(t){h&&h.d(t),u(e),u(o),x&&x.d(t),u(a),v&&v.d(t),u(c),y&&y.d(t),u(r),$&&$.d(t),u(s),k&&k.d(t),u(m),N&&N.d(t),u(p),M&&M.d(t)}}}function Nt(t,e,n){let{$$slots:o={},$$scope:i}=e,{title:a}=e,{noindex:c=!1}=e,{nofollow:r=!1}=e,{description:s}=e,{keywords:l}=e,{canonical:d}=e,{openGraph:m}=e,{twitter:u}=e,{jsonLd:p}=e;return t.$$set=t=>{"title"in t&&n(0,a=t.title),"noindex"in t&&n(1,c=t.noindex),"nofollow"in t&&n(2,r=t.nofollow),"description"in t&&n(3,s=t.description),"keywords"in t&&n(4,l=t.keywords),"canonical"in t&&n(5,d=t.canonical),"openGraph"in t&&n(6,m=t.openGraph),"twitter"in t&&n(7,u=t.twitter),"jsonLd"in t&&n(8,p=t.jsonLd),"$$scope"in t&&n(9,i=t.$$scope)},[a,c,r,s,l,d,m,u,p,i,o]}class Ct extends U{constructor(t){super(),V(this,t,Nt,kt,a,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7,jsonLd:8})}}function Mt(e){let n,o;return n=new Ct({props:{title:"Comunicallum - Agencia de Marketing Digital para tu negocio.",description:"Comunicallum es una agencia de marketing digital dedicada al aumento de alcance, optimización y propio manejo de la información en los negocios Mexicanos.",keywords:"Marketing Digital, Monterrey, Calidad, Negocio con poca inversión, Marketing, Agencia, Agencia de Marketing, UpVent, UpVent Technologies, VentGrey",openGraph:{title:"Comunicallum - Agencia de Marketing Digital para tu negocio.",description:"Comunicallum es una agencia de marketing digital dedicada al aumento de alcance, optimización y propio manejo de la información en los negocios Mexicanos.",type:"website",url:"https://cominucallum.com/",images:[{url:"https://comunicallum.com/images/opengraph.jpeg",width:850,height:650,alt:"Logo Comunicallum Grande"}]},jsonLd:{"@type":"WebPage",mainEntityOfPage:{"@type":"WebPage","@id":"https://comunicallum.com/"},image:["https://comunicallum.com/images/opengraph.jpeg"],datePublished:"2021-01-03T17:31:37Z",author:{"@type":"Person",name:"El Equipo de Comunicallum"}}+"}"}}),{c(){O(n.$$.fragment)},m(t,e){B(n,t,e),o=!0},p:t,i(t){o||(S(n.$$.fragment,t),o=!0)},o(t){H(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}class jt extends U{constructor(t){super(),V(this,t,null,Mt,a,{})}}function Tt(e){let n,o,i,a,c,r,l,p;return{c(){n=g("header"),o=g("a"),i=g("img"),c=h(),r=g("ul"),r.innerHTML='<li><a class="nav-link fs-5 px-2 link-dark">Agencia</a></li> \n        <li><a class="nav-link fs-5 px-2 link-dark">Servicios</a></li> \n        <li><a class="nav-link fs-5 px-2 link-dark">Portafolio</a></li> \n        <li><a class="nav-link fs-5 px-2 link-dark">Galería</a></li>',l=h(),p=g("div"),p.innerHTML='<a type="button" class="btn btn-lg btn-warning bg-gradient shadow-sm">Contáctanos <i class="bi bi-envelope"></i></a>',w(i,"class","mx-auto"),w(i,"width","200"),w(i,"height","60"),s(i.src,a=Lt)||w(i,"src",a),w(i,"alt","Comunicallum Logo"),w(o,"href","/"),w(o,"class","d-flex align-items-center col-md-3 mb-2 mb-md-0 text-light text-decoration-none"),w(r,"class","nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"),w(p,"class","col-md-3 p-1 text-end"),w(n,"class","p-1 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(n,c),d(n,r),d(n,l),d(n,p)},p:t,i:t,o:t,d(t){t&&u(n)}}}const Lt="images/logo-text.svg";class _t extends U{constructor(t){super(),V(this,t,null,Tt,a,{})}}function Et(e){let n,o,i,a,c,r,l,p;return{c(){n=g("section"),o=g("div"),i=g("div"),a=g("div"),c=g("img"),l=h(),p=g("div"),p.innerHTML='<h1 class="display-4 text-center text-md-start">Bienvenid@ a <span class="text-success">Comu</span><span class="text-primary">nica</span><span class="text-warning">llu</span><span class="text-danger">m</span>.</h1> \n\n            \n            <p class="lead text-center text-md-start text-muted mb-6 mb-lg-8">Marketing Digital y Comunicación Estratégica para empresas.</p> \n            \n            <div class="text-center text-md-start"><a href="overview.html" class="btn btn-primary btn-lg bg-gradient shadow me-1">Ver Portafolio <i class="bi bi-arrow-right d-none d-md-inline ms-3"></i></a> \n              <a href="docs/index.html" class="btn btn-secondary bg-gradient btn-lg">Conócenos</a></div>',s(c.src,r=At)||w(c,"src",r),w(c,"height","350"),w(c,"width","350"),w(c,"class","img-fluid logo-img rounded-circle mb-6 mb-md-0"),w(c,"alt","logo"),w(a,"class","col-12 col-md-5 col-lg-6 order-md-2"),w(p,"class","col-12 col-md-7 col-lg-6 order-md-1"),w(i,"class","row align-items-center"),w(o,"class","container"),w(n,"class","pt-4 mt-5 mb-5 pt-md-11")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(i,a),d(a,c),d(i,l),d(i,p)},p:t,i:t,o:t,d(t){t&&u(n)}}}const At="images/logo-web.png";class zt extends U{constructor(t){super(),V(this,t,null,Et,a,{})}}function Pt(e){let n,o,i,a,c,r,s,l,p,b,x,v;return{c(){n=g("footer"),o=g("div"),o.innerHTML='<section class="mb-4"><a class="btn btn-primary border-0 m-1 fbutton svelte-w250dc" href="https://www.facebook.com/Comunicallum/" role="button"><i class="bi bi-facebook text-white"></i></a> \n      \n      <a class="btn btn-primary border-0 m-1 ibutton svelte-w250dc" href="https://www.instagram.com/comunicallum/" role="button"><i class="bi bi-instagram text-white"></i></a></section> \n\n    <section class="mb-4"><p>Desarrollamos tu marca u organización a través de una <a class="text-info" href="https://www.instagram.com/explore/tags/comunicaci%C3%B3nestrat%C3%A9gica/">#comunicaciónestratégica</a> digital 💻.\n            <br/>\n            En nuestra agencia de marketing digital, gestionamos diversos proyectos de investigación de mercados, marketing, publicidad, estrategias de comunicación, desarrollo web, y proyectos de innovación.</p></section>',i=h(),a=g("div"),c=f("© "),r=f(e[0]),s=f(" Copyright:\n    "),l=g("a"),l.textContent="comunicallum.com",p=h(),b=g("div"),b.innerHTML='Hecho con <i class="bi bi-heart-fill text-danger"></i> por <a class="text-white" href="https://upvent.codes/">UpVent Technologies</a>',x=h(),v=g("div"),v.innerHTML='<p>El <a href="https://github.com/UpVent/comunicallum">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a></p>',w(o,"class","container p-4"),w(l,"class","text-white"),w(l,"href","https://comunicallum.com/"),w(a,"class","text-center p-3 upvent-mask svelte-w250dc"),w(b,"class","text-center p-3 upvent-mask svelte-w250dc"),w(v,"class","container text-center text-light small mt-5 border-top"),w(n,"class","text-center text-white bg-dark bg-gradient")},m(t,e){m(t,n,e),d(n,o),d(n,i),d(n,a),d(a,c),d(a,r),d(a,s),d(a,l),d(n,p),d(n,b),d(n,x),d(n,v)},p:t,i:t,o:t,d(t){t&&u(n)}}}function St(t){return[(new Date).getFullYear()]}class Ht extends U{constructor(t){super(),V(this,t,St,Pt,a,{})}}function qt(e){let n;return{c(){n=g("section"),n.innerHTML='<div class="container"><div class="row"><div class="col-12 col-md-4"><div class="text-primary mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="text-warning bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path></svg></div> \n            <h3>Misión</h3> \n            <p class="text-muted text-wrap text-break mb-6 mb-md-0">Somos una organizacion de luz con la misión de desarrollar e impulsar a un crecimiento exponencial a marcas y organizaciones del ámbito deportivo a través de una comunicación estratégica digital productiva. Para ayudarlos a gestionar recursos por medio de nuestros servicios del marketing digital y así puedan crecer sus comunidades de luz.</p></div> \n          <div class="col-12 col-md-4"><div class="text-primary mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="text-danger bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg></div> \n\n            \n            <h3>Visión</h3> \n            \n            <p class="text-muted text-wrap text-break mb-6 mb-md-0">Para el 2025 estaremos posicionados a nivel nacional por nuestra labor de impulsar el deporte en la sociedad especialmente en los más jóvenes a través de la comunicación y su difusión.</p></div> \n          <div class="col-12 col-md-4"><div class="text-primary mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="text-dark bi bi-yin-yang" viewBox="0 0 16 16"><path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"></path></svg></div> \n            <h3>Filosofía</h3> \n            <p class="text-muted text-wrap text-break mb-0">Todos somos uno solo. Creemos firmemente en que ayudar a tu entorno es ayudarse a sí mismo y viceversa. Por eso tratamos de colaborar con personas que compartan nuestra visión de comunicar luz, es decir conocimiento, valores, experiencias; inspirar a través de lo que comunicamos para generar una comunidad que transforme con la comunicación.</p></div></div></div>',w(n,"class","py-8 py-md-11 mt-5 mb-5 border-bottom")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class Ot extends U{constructor(t){super(),V(this,t,null,qt,a,{})}}function Bt(e){let n,o,i,a,c,r,l;return{c(){n=g("section"),o=g("img"),a=h(),c=g("h1"),c.textContent="Nuestros clientes ya son los #1.",r=h(),l=g("div"),l.innerHTML='<p class="lead mb-4">Analizamos y creamos estrategias modernas de marketing digital para que, como nuestros clientes, tu negocio crezca desde el primer día.</p> \n      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"><button type="button" class="btn btn-warning bg-gradient btn-lg px-4 gap-3">¡Contrátanos! <i class="bi bi-star"></i></button> \n        <button type="button" class="btn btn-outline-danger btn-lg px-4">Ver Portafolio <i class="bi bi-briefcase"></i></button></div>',w(o,"class","d-block mx-auto mb-4 ghost svelte-1is89hm"),s(o.src,i=Dt)||w(o,"src",i),w(o,"alt",""),w(o,"width","100"),w(o,"height","100"),w(c,"class","display-5 fw-bold"),w(l,"class","col-lg-6 mx-auto"),w(n,"class","px-4 py-5 my-5 text-center")},m(t,e){m(t,n,e),d(n,o),d(n,a),d(n,c),d(n,r),d(n,l)},p:t,i:t,o:t,d(t){t&&u(n)}}}let Dt="images/medal.png";class Gt extends U{constructor(t){super(),V(this,t,null,Bt,a,{})}}function Vt(e){let n,o,i,a,c,r,l,p,f,b,x,v,y,$,k,N,C,M,j,T,L,_,E,A,z,P,S,H,q,O,B,D;return{c(){n=g("section"),o=g("div"),i=g("div"),a=g("div"),c=g("div"),r=g("img"),p=h(),f=g("div"),b=g("div"),x=g("img"),y=h(),$=g("div"),k=g("div"),N=g("img"),M=h(),j=g("div"),T=g("div"),L=g("img"),E=h(),A=g("div"),z=g("div"),P=g("img"),H=h(),q=g("div"),O=g("div"),B=g("img"),w(r,"width","145"),w(r,"height","46"),w(r,"class","img-fluid"),s(r.src,l=Ut)||w(r,"src",l),w(r,"alt","logo 1"),w(c,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w(a,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(x,"width","145"),w(x,"height","46"),w(x,"class","img-fluid"),s(x.src,v=Wt)||w(x,"src",v),w(x,"alt","logo 2"),w(b,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w(f,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(N,"width","145"),w(N,"height","46"),w(N,"class","img-fluid"),s(N.src,C=Zt)||w(N,"src",C),w(N,"alt","logo 3"),w(k,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w($,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(L,"width","145"),w(L,"height","46"),w(L,"class","img-fluid"),s(L.src,_=It)||w(L,"src",_),w(L,"alt","logo 4"),w(T,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w(j,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(P,"width","145"),w(P,"height","46"),w(P,"class","img-fluid"),s(P.src,S=Ft)||w(P,"src",S),w(P,"alt","logo 5"),w(z,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w(A,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(B,"width","145"),w(B,"height","46"),w(B,"class","img-fluid"),s(B.src,D=Jt)||w(B,"src",D),w(B,"alt","logo 6"),w(O,"class","img-fluid text-gray-600 mb-2 mb-md-0"),w(q,"class","col-6 col-sm-4 col-md-2 mb-4 mb-md-0"),w(i,"class","row align-items-center justify-content-center"),w(o,"class","container"),w(n,"class","py-6 py-md-8 border-bottom")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(i,a),d(a,c),d(c,r),d(i,p),d(i,f),d(f,b),d(b,x),d(i,y),d(i,$),d($,k),d(k,N),d(i,M),d(i,j),d(j,T),d(T,L),d(i,E),d(i,A),d(A,z),d(z,P),d(i,H),d(i,q),d(q,O),d(O,B)},p:t,i:t,o:t,d(t){t&&u(n)}}}let Ut="images/logo1.png",Wt="images/logo2.png",Zt="images/logo3.jpg",It="images/logo4.jpg",Ft="images/logo5.png",Jt="images/logo6.png";class Yt extends U{constructor(t){super(),V(this,t,null,Vt,a,{})}}function Rt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Kt(e){let n,o,i,a,c,r,l,p,b,x,v,y,$=e[1].name+"",k=e[1].text+"";return{c(){n=g("div"),o=g("div"),i=g("img"),c=h(),r=g("div"),l=g("h4"),p=f($),b=h(),x=g("p"),v=f(k),y=h(),w(i,"class","img-fluid card-img-top"),w(i,"alt","100%x280"),s(i.src,a=e[1].image)||w(i,"src",a),w(l,"class","card-title text-muted border-bottom"),w(x,"class","card-text text-muted small"),w(r,"class","card-body"),w(o,"class","card border-0 rounded-3 shadow"),w(n,"class","col-md-4 mb-3")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(o,c),d(o,r),d(r,l),d(l,p),d(r,b),d(r,x),d(x,v),d(n,y)},p:t,d(t){t&&u(n)}}}function Qt(e){let n,o,i,a,c,r,s,l=e[0],f=[];for(let t=0;t<l.length;t+=1)f[t]=Kt(Rt(e,l,t));return{c(){n=g("section"),o=g("h2"),o.textContent="Nuestros servicios",i=h(),a=g("div"),c=g("div"),r=g("div"),s=g("div");for(let t=0;t<f.length;t+=1)f[t].c();w(o,"class","display-5 fw-bold pb-2 border-bottom"),w(s,"class","row"),w(r,"class","col-sm-1 col-md-12"),w(c,"class","row"),w(a,"class","container"),w(n,"class","mt-5 mb-5")},m(t,e){m(t,n,e),d(n,o),d(n,i),d(n,a),d(a,c),d(c,r),d(r,s);for(let t=0;t<f.length;t+=1)f[t].m(s,null)},p(t,[e]){if(1&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const o=Rt(t,l,n);f[n]?f[n].p(o,e):(f[n]=Kt(o),f[n].c(),f[n].m(s,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=l.length}},i:t,o:t,d(t){t&&u(n),p(f,t)}}}function Xt(t){return[[{image:"images/servicio1.png",name:"SEO & SEM",text:"Posicionaremos tu negocio en los motores de búsqueda más populares. Contamos con un plan de contenido para lograr que tus clientes te encuentren fácilmente al buscar tu producto o servicio en Internet."},{image:"images/servicio2.png",name:"Estrategia Digital",text:"Te ayudaremos a incrementar las ventas de tu negocio a través de una estrategia digital para que obtengas los mejores resultados."},{image:"images/servicio3.png",name:"Campañas de Publicidad",text:"Optimizamos tus campañas de publicidad en redes sociales, asegurando de que tu inversión en las mismas genere nuevos clientes."},{image:"images/servicio4.png",name:"Manejo de Redes Sociales",text:"Llevamos tus redes sociales al siguiente nivel con nuestros expertos. Aumentamos tu visibilidad y tu número de likes desde el primer día."},{image:"images/servicio5.png",name:"Branding",text:"¿Necesitas desarrollar contenido para tu marca? Nosotros te tenemos cubierto con diseñadores expertos y una gran variedad de opciones."},{image:"images/servicio6.png",name:"Cobertura de Eventos",text:"Filmaciones, fotografía profesional, material audiovisual y mucho más para que tus eventos sean el trending topic de tu zona."},{image:"images/servicio7.png",name:"Elaboración de Páginas Web",text:"Posicionamos tu negocio en internet, no necesitas experiencia ¡Nosotros nos encargamos de tener tu página web en menos de 24 horas!"}]]}class te extends U{constructor(t){super(),V(this,t,Xt,Qt,a,{})}}function ee(e){let n,o,i,a,c,r,l,p,f,b,x;return{c(){n=g("section"),o=g("div"),i=g("div"),a=g("h1"),a.innerHTML='Contacto <i class="bi bi-envelope"></i>',c=h(),r=g("p"),r.textContent="¡Siempre queremos saber de ti! Dinos saber cómo podemos ayudarte y haremos nuestro mejor esfuerzo.",l=h(),p=g("img"),b=h(),x=g("div"),x.innerHTML='<form class="border-0 shadow rounded m-2 p-2 form" id="my-form" action="https://formspree.io/f/xqknepzp" method="POST"><label class="form-label lead">Email:</label> \n                <input class="form-control" type="email" name="email"/> \n                <label class="form-label lead">Mensaje:</label> \n                <input class="form-control" type="text" name="message"/> \n                <hr/> \n                <button class="btn btn-success mt-2 lead" id="my-form-button">Enviar <i class="bi bi-envelope"></i></button> \n                <p id="my-form-status"></p></form>',w(a,"class","display-4 fw-bold lh-1 mb-3"),w(r,"class","col-lg-10 fs-4"),w(p,"class","img-fluid"),s(p.src,f=ne)||w(p,"src",f),w(p,"alt",""),w(i,"class","col-lg-7 text-center text-lg-start"),w(x,"class","col-md-10 mx-auto col-lg-5"),w(x,"data-aos","flip-left"),w(o,"class","row align-items-center g-lg-5 py-5"),w(n,"class","container col-xl-10 col-xxl-8 px-4 py-5 bg-contact")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(i,a),d(i,c),d(i,r),d(i,l),d(i,p),d(o,b),d(o,x)},p:t,i:t,o:t,d(t){t&&u(n)}}}let ne="images/contact.svg";function oe(t){return document.getElementById("my-form"),[]}class ie extends U{constructor(t){super(),V(this,t,oe,ee,a,{})}}function ae(e){let n,i,a;return{c(){n=g("div"),n.innerHTML='<i class="my-2 px-2 bi bi-caret-up-fill"></i>',w(n,"class","back-to-top svelte-6ayoqw"),v(n,"hidden",e[0])},m(t,o){m(t,n,o),i||(a=[x(window,"scroll",e[1]),x(n,"click",ce)],i=!0)},p(t,[e]){1&e&&v(n,"hidden",t[0])},i:t,o:t,d(t){t&&u(n),i=!1,o(a)}}}function ce(){document.body.scrollIntoView()}function re(){return document.documentElement||document.body}function se(t,e,n){let{showOnPx:o=150}=e,i=!0;return t.$$set=t=>{"showOnPx"in t&&n(2,o=t.showOnPx)},[i,function(){re()&&(re().scrollTop>o?n(0,i=!1):n(0,i=!0))},o]}class le extends U{constructor(t){super(),V(this,t,se,ae,a,{showOnPx:2})}}function de(e){let n,o,i,a,c,r,l,p,f;return{c(){n=g("section"),o=g("div"),i=g("div"),a=g("div"),a.innerHTML='<h1 class="display-3 border-bottom">¡Síguenos en nuestras redes sociales!</h1> \n                <p class="lead">Subimos contenido de forma regular, así como coberturas de eventos, tips y mucho más.</p> \n                <a class="btn btn-primary text-white border-0" style="background-color: #3b5998;" href="https://www.facebook.com/Comunicallum/" role="button"><i class="bi bi-facebook"></i></a> \n\n                <a class="btn btn-primary text-white border-0" style="background-color: #ac2bac;" href="https://www.instagram.com/comunicallum/" role="button"><i class="bi bi-instagram"></i></a>',c=h(),r=g("div"),l=g("a"),p=g("img"),w(a,"class","col-md-8"),w(p,"class","img-fluid rounded shadow img-spot svelte-5s0b5m"),s(p.src,f=me)||w(p,"src",f),w(p,"alt",""),w(l,"href","https://www.instagram.com/comunicallum/"),w(l,"target","_blank"),w(r,"class","col-md-4"),w(i,"class","row"),w(o,"class","container"),w(n,"class","mt-2 mb-2")},m(t,e){m(t,n,e),d(n,o),d(o,i),d(i,a),d(i,c),d(i,r),d(r,l),d(l,p)},p:t,i:t,o:t,d(t){t&&u(n)}}}let me="images/screen.jpeg";class ue extends U{constructor(t){super(),V(this,t,null,de,a,{})}}const{document:pe}=q;function ge(e){let n,o,i,a,c,r,s,l,p,f,b,x,v,y,$,k,N,C,M,j,T,L,_,E;return i=new jt({}),c=new _t({}),s=new zt({}),p=new Ot({}),b=new ue({}),v=new Gt({}),$=new Yt({}),N=new te({}),M=new ie({}),T=new Ht({}),_=new le({}),{c(){n=g("link"),o=h(),O(i.$$.fragment),a=h(),O(c.$$.fragment),r=h(),O(s.$$.fragment),l=h(),O(p.$$.fragment),f=h(),O(b.$$.fragment),x=h(),O(v.$$.fragment),y=h(),O($.$$.fragment),k=h(),O(N.$$.fragment),C=h(),O(M.$$.fragment),j=h(),O(T.$$.fragment),L=h(),O(_.$$.fragment),w(n,"rel","stylesheet"),w(n,"href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css")},m(t,e){d(pe.head,n),m(t,o,e),B(i,t,e),m(t,a,e),B(c,t,e),m(t,r,e),B(s,t,e),m(t,l,e),B(p,t,e),m(t,f,e),B(b,t,e),m(t,x,e),B(v,t,e),m(t,y,e),B($,t,e),m(t,k,e),B(N,t,e),m(t,C,e),B(M,t,e),m(t,j,e),B(T,t,e),m(t,L,e),B(_,t,e),E=!0},p:t,i(t){E||(S(i.$$.fragment,t),S(c.$$.fragment,t),S(s.$$.fragment,t),S(p.$$.fragment,t),S(b.$$.fragment,t),S(v.$$.fragment,t),S($.$$.fragment,t),S(N.$$.fragment,t),S(M.$$.fragment,t),S(T.$$.fragment,t),S(_.$$.fragment,t),E=!0)},o(t){H(i.$$.fragment,t),H(c.$$.fragment,t),H(s.$$.fragment,t),H(p.$$.fragment,t),H(b.$$.fragment,t),H(v.$$.fragment,t),H($.$$.fragment,t),H(N.$$.fragment,t),H(M.$$.fragment,t),H(T.$$.fragment,t),H(_.$$.fragment,t),E=!1},d(t){u(n),t&&u(o),D(i,t),t&&u(a),D(c,t),t&&u(r),D(s,t),t&&u(l),D(p,t),t&&u(f),D(b,t),t&&u(x),D(v,t),t&&u(y),D($,t),t&&u(k),D(N,t),t&&u(C),D(M,t),t&&u(j),D(T,t),t&&u(L),D(_,t)}}}function fe(t){return function(){var t={facebook:"108264074873815",whatsapp:"+52 462 288 8642",call_to_action:"¡Envíanos un mensaje!",button_color:"#000000",position:"left",order:"facebook,whatsapp",pre_filled_message:"¡Hola me comunico desde tu página web!"},e=document.location.protocol,n="getbutton.io",o=e+"//static."+n,i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=o+"/widget-send-button/js/init.js",i.onload=function(){WhWidgetSendButton.init(n,e,t)};var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a)}(),[]}return new class extends U{constructor(t){super(),V(this,t,fe,ge,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
