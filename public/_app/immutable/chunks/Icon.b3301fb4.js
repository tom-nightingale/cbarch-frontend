import{s as v,L as f,M as _,h as r,d as o,j as c,K as g,i as m,v as d,y as u}from"./scheduler.c2f04ea4.js";import{S as y,i as w}from"./index.db8bb9b7.js";function N(n){let e,i,a,l,h;return{c(){e=f("svg"),i=f("use"),this.h()},l(t){e=_(t,"svg",{class:!0,style:!0});var s=r(e);i=_(s,"use",{href:!0}),r(i).forEach(o),s.forEach(o),this.h()},h(){c(i,"href",a=`/icons/icon-sprite.svg#icon-${n[0]}`),c(e,"class",l=g(`icon icon-${n[0]} ${n[1]}`)+" svelte-1ax0rdf"),c(e,"style",h=`width: ${n[2]}px; height: ${n[3]}px;`)},m(t,s){m(t,e,s),d(e,i)},p(t,[s]){s&1&&a!==(a=`/icons/icon-sprite.svg#icon-${t[0]}`)&&c(i,"href",a),s&3&&l!==(l=g(`icon icon-${t[0]} ${t[1]}`)+" svelte-1ax0rdf")&&c(e,"class",l),s&12&&h!==(h=`width: ${t[2]}px; height: ${t[3]}px;`)&&c(e,"style",h)},i:u,o:u,d(t){t&&o(e)}}}function I(n,e,i){let{icon:a=""}=e,{classNames:l=""}=e,{width:h=24}=e,{height:t=24}=e;return n.$$set=s=>{"icon"in s&&i(0,a=s.icon),"classNames"in s&&i(1,l=s.classNames),"width"in s&&i(2,h=s.width),"height"in s&&i(3,t=s.height)},[a,l,h,t]}class j extends y{constructor(e){super(),w(this,e,I,N,v,{icon:0,classNames:1,width:2,height:3})}}export{j as I};
