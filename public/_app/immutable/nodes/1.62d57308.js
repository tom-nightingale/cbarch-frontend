import{s as F,a as b,c as w,i as $,d as p,r as N,f as C,g as x,h as P,j,v as S,l as I,m as W,n as T,x as q,y as A}from"../chunks/scheduler.c2f04ea4.js";import{S as D,i as U,b as c,d as g,m as _,a as f,t as m,e as h,g as V,c as z}from"../chunks/index.db8bb9b7.js";import{p as B}from"../chunks/stores.81104c84.js";import{C as G,T as E}from"../chunks/Button.f00f46fb.js";import{W as H}from"../chunks/WorkWithUs.d3fe026b.js";function J(n){let t=(n[0]&&n[0].error&&n[0].error.message)+"",o;return{c(){o=I(t)},l(r){o=W(r,t)},m(r,a){$(r,o,a)},p(r,a){a&1&&t!==(t=(r[0]&&r[0].error&&r[0].error.message)+"")&&T(o,t)},d(r){r&&p(o)}}}function v(n){let t,o;return t=new E({props:{component:"p",$$slots:{default:[K]},$$scope:{ctx:n}}}),{c(){c(t.$$.fragment)},l(r){g(t.$$.fragment,r)},m(r,a){_(t,r,a),o=!0},i(r){o||(f(t.$$.fragment,r),o=!0)},o(r){m(t.$$.fragment,r),o=!1},d(r){h(t,r)}}}function K(n){let t,o,r="homepage.";return{c(){t=I(`It looks like the page your are looking for no longer exists. Please go
        back to the `),o=C("a"),o.textContent=r,this.h()},l(a){t=W(a,`It looks like the page your are looking for no longer exists. Please go
        back to the `),o=x(a,"A",{href:!0,"data-svelte-h":!0}),q(o)!=="svelte-7jj9f7"&&(o.textContent=r),this.h()},h(){j(o,"href","/")},m(a,e){$(a,t,e),$(a,o,e)},p:A,d(a){a&&(p(t),p(o))}}}function L(n){var i,u;let t,o,r,a;o=new E({props:{component:"h2",variant:"headline2",theme:"text-blue",$$slots:{default:[J]},$$scope:{ctx:n}}});let e=n[0]&&((u=(i=n[0])==null?void 0:i.error)==null?void 0:u.message)==="Not Found"&&v(n);return{c(){t=C("div"),c(o.$$.fragment),r=b(),e&&e.c(),this.h()},l(s){t=x(s,"DIV",{class:!0});var l=P(t);g(o.$$.fragment,l),r=w(l),e&&e.l(l),l.forEach(p),this.h()},h(){j(t,"class","flex flex-col gap-8 p-4 prose md:w-1/2 md:p-8 md:mx-auto")},m(s,l){$(s,t,l),_(o,t,null),S(t,r),e&&e.m(t,null),a=!0},p(s,l){var k,y;const d={};l&3&&(d.$$scope={dirty:l,ctx:s}),o.$set(d),s[0]&&((y=(k=s[0])==null?void 0:k.error)==null?void 0:y.message)==="Not Found"?e?l&1&&f(e,1):(e=v(s),e.c(),f(e,1),e.m(t,null)):e&&(V(),m(e,1,1,()=>{e=null}),z())},i(s){a||(f(o.$$.fragment,s),f(e),a=!0)},o(s){m(o.$$.fragment,s),m(e),a=!1},d(s){s&&p(t),h(o),e&&e.d()}}}function M(n){let t,o,r,a;return t=new G({props:{$$slots:{default:[L]},$$scope:{ctx:n}}}),r=new H({}),{c(){c(t.$$.fragment),o=b(),c(r.$$.fragment)},l(e){g(t.$$.fragment,e),o=w(e),g(r.$$.fragment,e)},m(e,i){_(t,e,i),$(e,o,i),_(r,e,i),a=!0},p(e,[i]){const u={};i&3&&(u.$$scope={dirty:i,ctx:e}),t.$set(u)},i(e){a||(f(t.$$.fragment,e),f(r.$$.fragment,e),a=!0)},o(e){m(t.$$.fragment,e),m(r.$$.fragment,e),a=!1},d(e){e&&p(o),h(t,e),h(r,e)}}}function O(n,t,o){let r;return N(n,B,a=>o(0,r=a)),n.$$.update=()=>{n.$$.dirty&1&&console.log(r.error)},[r]}class ee extends D{constructor(t){super(),U(this,t,O,M,F,{})}}export{ee as component};
