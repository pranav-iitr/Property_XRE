"use strict";(self.webpackChunkxre_be=self.webpackChunkxre_be||[]).push([[3664],{5016:(w,h,r)=>{r.r(h),r.d(h,{FieldActionWrapper:()=>f,default:()=>O});var o=r(19968),m=r(62552),F=r(14632),R=r(5596),S=r(51384);const y={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const A=new Uint8Array(16);function E(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(A)}const e=[];for(let n=0;n<256;++n)e.push((n+256).toString(16).slice(1));function I(n,t=0){return e[n[t+0]]+e[n[t+1]]+e[n[t+2]]+e[n[t+3]]+"-"+e[n[t+4]]+e[n[t+5]]+"-"+e[n[t+6]]+e[n[t+7]]+"-"+e[n[t+8]]+e[n[t+9]]+"-"+e[n[t+10]]+e[n[t+11]]+e[n[t+12]]+e[n[t+13]]+e[n[t+14]]+e[n[t+15]]}function b(n,t=0){const s=I(n,t);if(!validate(s))throw TypeError("Stringified UUID is invalid");return s}const k=null;function M(n,t,s){if(y.randomUUID&&!t&&!n)return y.randomUUID();n=n||{};const d=n.random||(n.rng||E)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){s=s||0;for(let u=0;u<16;++u)t[s+u]=d[u];return t}return I(d)}const T=M,$=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function C(n){return typeof n=="string"&&$.test(n)}const G=C;var H=r(17324),W=r(5e3),B=r(95080),L=r(11772),N=r(48936),Q=r(33128),z=r(79672),J=r(79080),K=r(74264),p=r(98480);const f=(0,R.cp)(H.d)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:n})=>n.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:n})=>n.colors.primary600};
    }
  }
`,O=({attribute:n,description:t,placeholder:s,disabled:d,error:u,intlLabel:P,labelAction:X,name:a,onChange:U,value:l=""})=>{const{formatMessage:v}=(0,F.c)(),[Y,x]=(0,m.useState)(!1),g=(0,m.useRef)(""),D=()=>n.options&&n.options["uuid-format"]?n.options["uuid-format"]:null,j=()=>{const i=D();return i?(0,p.g1)(i):T()};return(0,m.useEffect)(()=>{const i=D();if(!l){const Z=j();U({target:{value:Z,name:a}})}if(l&&l!==g.current&&(g.current=l),!(i?(0,p.G2)(i,l):G(l)))return x(!0);x(!1)},[l,n]),(0,o.jsx)(W.k,{children:(0,o.jsx)(B.I,{id:a,name:a,hint:t&&v(t),error:u??(Y?v({id:"uuid.form.field.error",defaultMessage:"The UUID format is invalid."}):null),children:(0,o.jsxs)(L.y,{spacing:1,children:[(0,o.jsx)(N.C,{children:(0,o.jsx)(Q.u,{children:v(P)})}),(0,o.jsx)(z.e,{onChange:U,labelAction:X,placeholder:s,disabled:d||!0,required:!0,value:l,ref:g,endAction:(0,o.jsx)(f,{onClick:()=>{const i=j();U({target:{value:i,name:a}})},label:v({id:"uuid.form.field.generate",defaultMessage:"Generate"}),children:(0,o.jsx)(S.c,{})})}),(0,o.jsx)(J.o,{}),(0,o.jsx)(K.Q,{})]})})})}}}]);
