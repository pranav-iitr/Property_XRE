"use strict";(self.webpackChunkxre_be=self.webpackChunkxre_be||[]).push([[560],{60560:(I,D,_)=>{_.r(D),_.d(D,{LoginEE:()=>T});var E=_(19968),P=_(6912),a=_(5e3),O=_(48936),o=_(63358),l=_(14632),i=_(5596),n=_(94248),M=_(132),L=_(79632),r=_(54320),d=_(5240),C=_(91892),s=_(36196),h=_(20880),B=_(21424),t=_(62552),K=_(70516),m=_(31812),g=_(18424),x=_(52540),j=_(21968),c=_(12132),f=_(48632),y=_(85676),S=_(35184),$=_(99568),N=_(96556),F=_(13192),Z=_(30840),z=_(77784),G=_(79371),H=_(67888),J=_(52600),Y=_(95752),Q=_(37388),V=_(61840),X=_(49108),u=_(44632),p=_(50840),e=_(20252),k=_(86432),w=_(22612),b=_(24808),q=_(24024),__=_(40960),E_=_(33656),s_=_(43280),t_=_(79804),a_=_(19632),O_=_(29576),n_=_(61152),D_=_(9589),P_=_(45488),M_=_(75516);const v=(0,i.cp)(P.c)`
  flex: 1;
`,T=R=>{const{formatMessage:U}=(0,l.c)(),{isLoading:W,data:A=[]}=(0,n.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!W&&A.length===0?(0,E.jsx)(n.L,{...R}):(0,E.jsx)(n.L,{...R,children:(0,E.jsx)(a.k,{paddingTop:7,children:(0,E.jsxs)(O.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(O.C,{children:[(0,E.jsx)(v,{}),(0,E.jsx)(a.k,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.O,{variant:"sigma",textColor:"neutral600",children:U({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(v,{})]}),(0,E.jsx)(M.S,{providers:A,displayAllProviders:!1})]})})})}},132:(I,D,_)=>{_.d(D,{S:()=>L});var E=_(19968),P=_(28724),a=_(70996),O=_(70544),o=_(48936),l=_(63358),i=_(14632),n=_(39380),M=_(5596);const L=({providers:s,displayAllProviders:h})=>{const{formatMessage:B}=(0,i.c)();return h?(0,E.jsx)(P.y,{gap:4,children:s.map(t=>(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid))}):s.length>2&&!h?(0,E.jsxs)(P.y,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid)),(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(O.o,{label:B({id:"global.see-more"}),children:(0,E.jsx)(C,{as:n.cH,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(r,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(d,{provider:t},t.uid))})},r=(0,M.cp)(o.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,d=({provider:s})=>(0,E.jsx)(O.o,{label:s.displayName,children:(0,E.jsx)(C,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.O,{children:s.displayName})})}),C=M.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
