"use strict";(self.webpackChunkxre_be=self.webpackChunkxre_be||[]).push([[6614],{26614:(V,T,t)=>{t.d(T,{ProtectedListPage:()=>ct});var s=t(19968),c=t(62552),x=t(3400),M=t(20596),C=t(48112),b=t(28464),W=t(52051),g=t(63358),i=t(35676),o=t(42816),h=t(5e3),d=t(42848),f=t(89616),$=t(20464),D=t(76512),l=t(9752),O=t(19576),_=t(35480),tt=t(48744),A=t(48936),Z=t(5596);const k=Z.cp.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=Z.cp.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${k} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${k}:before {
    transform: translateX(1rem);
  }
`,ot=c.forwardRef(({label:n,onChange:u,onLabel:P="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...R},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...R,children:(0,s.jsxs)(A.C,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)("span",{children:P}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.k,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?P:S})]})}));var H=t(23264),et=t(36132),at=t(26272),v=t(79632),I=t(48636),J=t(71324),nt=t(89940),rt=t(79848),dt=t(14632),X=t(49008),it=t(39380),Y=t(94248),lt=t(54196),Ct=t(54320),bt=t(5240),Wt=t(91892),St=t(36196),Et=t(20880),Lt=t(21424),Dt=t(70516),Ot=t(31812),Pt=t(18424),pt=t(52540),Bt=t(21968),$t=t(12132),At=t(48632),kt=t(85676),It=t(35184),Rt=t(99568),Ut=t(96556),Kt=t(13192),Ft=t(30840),Nt=t(77784),zt=t(79371),Gt=t(67888),Vt=t(52600),Zt=t(95752),Ht=t(37388),Jt=t(61840),Xt=t(49108),Yt=t(44632),Qt=t(50840),wt=t(20252),qt=t(86432),_t=t(22612),ts=t(24808),ss=t(24024),os=t(40960),es=t(33656),as=t(43280),ns=t(79804),rs=t(19632),ds=t(29576),is=t(61152),ls=t(9589),hs=t(45488),cs=t(75516);const ht=()=>{const[n,u]=c.useState(!1),[P,S]=c.useState(!1),[j,m]=c.useState([]),R=(0,Y.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,dt.c)(),{_unstableFormatAPIError:p}=(0,v.An)(),y=(0,v.eo)();(0,v.G0)();const{push:gt}=(0,X.Uz)(),{pathname:Q}=(0,X.IT)(),{isLoading:mt,allowedActions:{canCreate:U,canUpdate:K,canDelete:w}}=(0,v.aU)(R),{notifyStatus:q}=(0,x.O)(),{isLoading:vt,webhooks:E,error:F,updateWebhook:ut,deleteManyWebhooks:xt}=(0,lt.u)();c.useEffect(()=>{if(F){y({type:"warning",message:p(F)});return}E&&q(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,F,y,a,q,p]);const ft=async e=>{try{const r=await ut(e);"error"in r&&y({type:"warning",message:p(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await xt({ids:j});if("error"in e){y({type:"warning",message:p(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),u(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?G=>[...G,r]:G=>G.filter(Mt=>Mt!==r)),N=e=>()=>gt(`${Q}/${e}`),z=mt||vt,B=E?.length??0,L=j.length;return(0,s.jsxs)(M._,{children:[(0,s.jsx)(v.K8,{name:"Webhooks"}),(0,s.jsxs)(C.G,{"aria-busy":z,children:[(0,s.jsx)(b.a,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:U&&!z&&(0,s.jsx)(at.E,{as:it.Af,startIcon:(0,s.jsx)(I.c,{}),variant:"default",to:`${Q}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),L>0&&w&&(0,s.jsx)(W.U,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.O,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})}),(0,s.jsx)(i.Z,{onClick:()=>u(!0),startIcon:(0,s.jsx)(J.c,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.S,{children:z?(0,s.jsx)(h.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.Wm,{})}):B>0?(0,s.jsxs)(d.o,{colCount:5,rowCount:B+1,footer:(0,s.jsx)(f.U,{onClick:U?N("create"):void 0,icon:(0,s.jsx)(I.c,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)($.o,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(O.c,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<B,value:L===B,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(_.K,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(tt.K,{children:E?.map(e=>(0,s.jsxs)(D.Tr,{onClick:K?N(e.id):void 0,style:{cursor:K?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(O.c,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.O,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.O,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(A.C,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(A.C,{gap:1,children:[K&&(0,s.jsx)(H.w,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.c,{}),noBorder:!0}),w&&(0,s.jsx)(H.w,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(J.c,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.S,{icon:(0,s.jsx)(rt.c,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.Z,{variant:"secondary",startIcon:(0,s.jsx)(I.c,{}),onClick:()=>U?N("create"):{},children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.cz,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:jt,isConfirmButtonLoading:P})]})},ct=()=>{const n=(0,Y.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.rF,{permissions:n,children:(0,s.jsx)(ht,{})})}},54196:(V,T,t)=>{t.d(T,{u:()=>g});var s=t(94248);const c=s.m.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:x,useCreateWebhookMutation:M,useUpdateWebhookMutation:C,useTriggerWebhookMutation:b,useDeleteManyWebhooksMutation:W}=c,g=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=x(i,o),[$]=M(),[D]=C(),[l]=b(),[O]=W();return{webhooks:h,isLoading:d,error:f,createWebhook:$,updateWebhook:D,triggerWebhook:l,deleteManyWebhooks:O}}},89616:(V,T,t)=>{t.d(T,{U:()=>i});var s=t(19968),c=t(5596),x=t(5e3),M=t(6912),C=t(48936),b=t(63358);const W=(0,c.cp)(x.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,g=(0,c.cp)(x.k)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.c,{}),(0,s.jsx)(g,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(C.C,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(x.k,{paddingLeft:3,children:(0,s.jsx)(b.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
