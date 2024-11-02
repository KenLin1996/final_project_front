import{p as ue,bh as fe,g as me,D as te,a_ as pe,bk as ve,x as B,b9 as ge,o as le,aB as _e,u as ye,bi as be,bj as oe,c as e,G as ne,P as v,r as we,bl as he,ak as xe,a$ as Ve,bm as ke,a3 as Ee,a6 as Ce,a7 as c,aa as R,ac as a,at as Pe,ad as t,ao as Se,aF as ze,a9 as p,ap as Te,a8 as g,ag as Y,aw as ie,ah as Z,au as D,aj as N,J as w,ae as h,ai as ee,ax as Ie,ay as Ue}from"./index-Bzmhv8R7.js";import{c as je,b as L,g as Be,u as Fe,f as O,V as $e}from"./vee-validate.esm-BtqnpI9n.js";import{v as Ae}from"./index-Etsc8UVN.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Re}from"./VContainer-cMmaaPYi.js";import{V as De,a as Ne}from"./VList-CEYxBDgr.js";import{V as Le,a as re,c as ae,b as Oe}from"./VTabs-CsT8so2l.js";import{V as U}from"./VDivider-BRp88LzG.js";import{a as se,V as r}from"./VRow-BUWxvBY3.js";import{m as We,V as de}from"./VSelectionControl-C2QTktfX.js";import"./VSlideGroup-DNihUQjE.js";const Ge=ue({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...fe(),...We()},"VSwitch"),W=me()({name:"VSwitch",inheritAttrs:!1,props:Ge(),emits:{"update:focused":n=>!0,"update:modelValue":n=>!0,"update:indeterminate":n=>!0},setup(n,F){let{attrs:V,slots:u}=F;const k=te(n,"indeterminate"),x=te(n,"modelValue"),{loaderClasses:E}=pe(n),{isFocused:_,focus:G,blur:y}=ve(n),$=B(),b=ge&&window.matchMedia("(forced-colors: active)").matches,J=le(()=>typeof n.loading=="string"&&n.loading!==""?n.loading:n.color),C=_e(),q=le(()=>n.id||`switch-${C}`);function P(){k.value&&(k.value=!1)}function S(z){var T,i;z.stopPropagation(),z.preventDefault(),(i=(T=$.value)==null?void 0:T.input)==null||i.click()}return ye(()=>{const[z,T]=be(V),i=oe.filterProps(n),A=de.filterProps(n);return e(oe,ne({class:["v-switch",{"v-switch--flat":n.flat},{"v-switch--inset":n.inset},{"v-switch--indeterminate":k.value},E.value,n.class]},z,i,{modelValue:x.value,"onUpdate:modelValue":I=>x.value=I,id:q.value,focused:_.value,style:n.style}),{...u,default:I=>{let{id:H,messagesId:K,isDisabled:Q,isReadonly:j,isValid:M}=I;const o={model:x,isValid:M};return e(de,ne({ref:$},A,{modelValue:x.value,"onUpdate:modelValue":[l=>x.value=l,P],id:H.value,"aria-describedby":K.value,type:"checkbox","aria-checked":k.value?"mixed":void 0,disabled:Q.value,readonly:j.value,onFocus:G,onBlur:y},T),{...u,default:l=>{let{backgroundColorClasses:f,backgroundColorStyles:s}=l;return e("div",{class:["v-switch__track",b?void 0:f.value],style:s.value,onClick:S},[u["track-true"]&&e("div",{key:"prepend",class:"v-switch__track-true"},[u["track-true"](o)]),u["track-false"]&&e("div",{key:"append",class:"v-switch__track-false"},[u["track-false"](o)])])},input:l=>{let{inputNode:f,icon:s,backgroundColorClasses:m,backgroundColorStyles:ce}=l;return e(v,null,[f,e("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||n.loading},n.inset||b?void 0:m.value],style:n.inset?void 0:ce.value},[u.thumb?e(we,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[u.thumb({...o,icon:s})]}):e(he,null,{default:()=>[n.loading?e(Ve,{name:"v-switch",active:!0,color:M.value===!1?void 0:J.value},{default:X=>u.loader?u.loader(X):e(ke,{active:X.isActive,color:X.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&e(xe,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),d=n=>(Ie("data-v-3f02ff71"),n=n(),Ue(),n),Je={class:"d-flex"},qe={class:"sidebar",style:{"margin-right":"12px","background-color":"white","border-radius":"12px"}},He=d(()=>t("h3",{class:"mb-1"},"設定",-1)),Ke={class:"content",style:{"background-color":"white","border-radius":"12px"}},Qe=d(()=>t("div",{class:"d-flex align-center justify-space-between mb-4"},[t("h3",null,"帳號設定")],-1)),Xe={id:"profile",class:"b-1 w-50 text-center mx-auto rounded-lg"},Ye=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 暱稱 ",-1)),Ze={style:{"font-size":"18px"}},ea=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 暱稱 ",-1)),aa=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 帳號 ",-1)),sa={style:{"font-size":"18px"}},la=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 帳號 ",-1)),ta=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 密碼 ",-1)),oa={style:{"font-size":"18px"}},na=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 新密碼 ",-1)),ia=d(()=>t("label",{class:"form-label",style:{"font-size":"18px"}}," 確認密碼 ",-1)),ra=d(()=>t("div",{class:"d-flex align-center justify-space-between mb-4"},[t("h3",null,"通知設定")],-1)),da={class:"d-flex align-center justify-space-between py-2"},ca={class:"d-flex align-center justify-space-between w-100"},ua=d(()=>t("p",null,"投票通知",-1)),fa=d(()=>t("p",null,"其他使用者投票給你的故事時寄送推播",-1)),ma={class:"d-flex align-center justify-space-between w-100"},pa=d(()=>t("p",null,"收藏通知",-1)),va=d(()=>t("p",null,"您所收藏的故事有更新時會寄送通知",-1)),ga=d(()=>t("div",{class:"d-flex align-center justify-space-between mb-4"},[t("h3",null,"主題設定")],-1)),_a={class:"d-flex align-center justify-space-between py-2"},ya={class:"d-flex align-center justify-space-between w-100"},ba=d(()=>t("p",null,"淺色模式",-1)),wa={class:"d-flex align-center justify-space-between w-100"},ha=d(()=>t("p",null,"深色模式",-1)),xa={__name:"setting",setup(n){const{apiAuth:F}=Pe(),V=Ee(),u=B("option-1"),k=je({newEmail:L().test("isEmail","使用者信箱格式錯誤",o=>o?Ae.isEmail(o):!0),newUsername:L().min(1,"使用者暱稱長度不符").max(20,"使用者暱稱長度不符"),newPassword:L().min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符"),passwordConfirm:L().oneOf([Be("newPassword")],"密碼不一致")}),{handleSubmit:x,isSubmitting:E}=Fe({validationSchema:k}),{value:_,errorMessage:G}=O("newUsername"),{value:y,errorMessage:$}=O("newEmail"),{value:b,errorMessage:J}=O("newPassword"),{value:C,errorMessage:q}=O("passwordConfirm"),P=B(!1),S=B(!1),z=()=>{P.value=!P.value},T=()=>{S.value=!S.value},i=B([]),A=async()=>{try{const{data:o}=await F.get("/user/profile");i.value=[o.result],i.value[0].newAvatar=i.value[0].avatar,i.value[0].password="********",i.value[0].newUsername=i.value[0].username,i.value[0].newEmail=i.value[0].email,i.value[0].newPassword="",i.value[0].passwordConfirm=""}catch(o){console.log(o)}};A();const I=le(()=>i.value[0]||{}),H=o=>{i.value.forEach(l=>{l.isEditing=!1,l.isEmailToggleEditing=!1,l.passwordisEditing=!1}),o.isEditing=!o.isEditing},K=o=>{i.value.forEach(l=>{l.isEditing=!1,l.isEmailToggleEditing=!1,l.passwordisEditing=!1}),o.isEmailToggleEditing=!o.isEmailToggleEditing},Q=o=>{i.value.forEach(l=>{l.isEditing=!1,l.isEmailToggleEditing=!1,l.passwordisEditing=!1}),o.passwordisEditing=!o.passwordisEditing},j=(o,l)=>{switch(l){case"username":_.value="",o.isEditing=!1;break;case"email":y.value="",o.isEmailToggleEditing=!1;break;case"password":b.value="",C.value="",o.passwordisEditing=!1;break}},M=x(async()=>{var o,l;try{const f={};if(_.value&&_.value!==I.value.username&&(f.username=_.value),y.value&&y.value!==I.value.email&&(f.email=y.value),b.value&&(f.password=b.value),Object.keys(f).length===0){V({text:"沒有任何變更",snackbarProps:{color:"accent"}});return}const s=await F.patch("/user/profile",f);s.data.success?(V({text:"資料修改成功",snackbarProps:{color:"green"}}),A()):V({text:s.data.message||"發生錯誤",snackbarProps:{color:"red"}})}catch(f){V({text:((l=(o=f==null?void 0:f.response)==null?void 0:o.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,l)=>{const f=Ce("vue-file-agent");return c(),R(Re,{style:{padding:"32px"}},{default:a(()=>[t("div",Je,[t("div",qe,[e(Ne,{class:"py-0",dense:""},{default:a(()=>[He,e(De,{class:"d-flex"},{default:a(()=>[e(Le,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=s=>u.value=s),color:"primary",direction:"vertical"},{default:a(()=>[e(re,{class:"my-1","prepend-icon":"mdi-cog-outline",text:"帳號設定",value:"option-1"}),e(re,{class:"my-1","prepend-icon":"mdi-bell-outline",text:"通知設定",value:"option-2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t("div",Ke,[e(Oe,{modelValue:u.value,"onUpdate:modelValue":l[6]||(l[6]=s=>u.value=s)},{default:a(()=>[e(ae,{value:"option-1"},{default:a(()=>[Qe,e(U),e(Se,{flat:""},{default:a(()=>[e($e,{onSubmit:ze(p(M),["prevent"]),disabled:p(E)},{default:a(()=>[e(Te,null,{default:a(()=>[t("div",Xe,[e(f,{class:"d-flex justify-center mb-5",accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"上傳大頭照","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},"file-records":o.fileRecords,"onUpdate:fileRecords":l[1]||(l[1]=s=>o.fileRecords=s)},null,8,["file-records"]),e(se,{class:"text-center",style:{padding:"8px"}},{default:a(()=>[(c(!0),g(v,null,Y(i.value,s=>(c(),g(v,{key:s.id},[s.isEditing?(c(),g(v,{key:1},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[ea]),_:1}),e(r,{cols:"10",class:"my-auto"},{default:a(()=>[e(D,{class:"form-label",style:{"font-size":"18px"},minlength:"3",maxlength:"20",variant:"outlined","single-line":"",density:"comfortable",clearable:"",dense:"",modelValue:p(_),"onUpdate:modelValue":l[2]||(l[2]=m=>N(_)?_.value=m:null),"error-messages":p(G)},null,8,["modelValue","error-messages"])]),_:1}),e(r,{cols:"12",class:"my-auto"},{default:a(()=>[e(w,{variant:"flat",color:"#4E9194",class:"mx-1",onClick:m=>j(s,"username")},{default:a(()=>[h("取消")]),_:2},1032,["onClick"]),e(w,{type:"submit",variant:"flat",color:"#4E9194",class:"mx-1",loading:p(E)},{default:a(()=>[h("保存")]),_:1},8,["loading"])]),_:2},1024)],64)):(c(),g(v,{key:0},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[Ye]),_:1}),e(r,{cols:"8",class:"my-auto"},{default:a(()=>[t("p",Ze,Z(s.username),1)]),_:2},1024)],64)),s.isEditing?ee("",!0):(c(),R(r,{key:2,cols:"2",class:"my-auto pa-0"},{default:a(()=>[e(w,{onClick:m=>H(s),variant:"flat",color:"#4E9194",class:"pa-0"},{default:a(()=>[h("編輯")]),_:2},1032,["onClick"])]),_:2},1024))],64))),128))]),_:1}),e(U,{class:"text-center my-3"}),e(se,{class:"text-center",style:{padding:"8px"}},{default:a(()=>[(c(!0),g(v,null,Y(i.value,s=>(c(),g(v,{key:s.id},[s.isEmailToggleEditing?(c(),g(v,{key:1},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[la]),_:1}),e(r,{cols:"10",class:"my-auto"},{default:a(()=>[e(D,{class:"form-label",style:{"font-size":"18px"},variant:"outlined","single-line":"",density:"comfortable",clearable:"",dense:"",modelValue:p(y),"onUpdate:modelValue":l[3]||(l[3]=m=>N(y)?y.value=m:null),"error-messages":p($)},null,8,["modelValue","error-messages"])]),_:1}),e(r,{cols:"12",class:"my-auto"},{default:a(()=>[e(w,{variant:"flat",color:"#4E9194",class:"mx-1",onClick:m=>j(s,"email")},{default:a(()=>[h("取消")]),_:2},1032,["onClick"]),e(w,{type:"submit",variant:"flat",color:"#4E9194",class:"mx-1",loading:p(E)},{default:a(()=>[h("保存")]),_:1},8,["loading"])]),_:2},1024)],64)):(c(),g(v,{key:0},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[aa]),_:1}),e(r,{cols:"8",class:"my-auto"},{default:a(()=>[t("p",sa,Z(s.email),1)]),_:2},1024)],64)),s.isEmailToggleEditing?ee("",!0):(c(),R(r,{key:2,cols:"2",class:"my-auto pa-0"},{default:a(()=>[e(w,{onClick:m=>K(s),variant:"flat",color:"#4E9194",class:"pa-0"},{default:a(()=>[h("編輯")]),_:2},1032,["onClick"])]),_:2},1024))],64))),128))]),_:1}),e(U,{class:"text-center my-3"}),e(se,{class:"text-center",style:{padding:"8px"}},{default:a(()=>[(c(!0),g(v,null,Y(i.value,s=>(c(),g(v,{key:s.id},[s.passwordisEditing?(c(),g(v,{key:1},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[na]),_:1}),e(r,{cols:"10",class:"my-auto"},{default:a(()=>[e(D,{class:"form-label",style:{"font-size":"18px"},variant:"outlined","single-line":"",density:"comfortable",clearable:"",dense:"",type:P.value?"text":"password",minlength:"4",maxlength:"20",modelValue:p(b),"onUpdate:modelValue":l[4]||(l[4]=m=>N(b)?b.value=m:null),"error-messages":p(J),"append-inner-icon":P.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":z},null,8,["type","modelValue","error-messages","append-inner-icon"])]),_:1}),e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[ia]),_:1}),e(r,{cols:"10",class:"my-auto"},{default:a(()=>[e(D,{class:"form-label",style:{"font-size":"18px"},variant:"outlined","single-line":"",density:"comfortable",clearable:"",dense:"",type:S.value?"text":"password",minlength:"4",maxlength:"20",modelValue:p(C),"onUpdate:modelValue":l[5]||(l[5]=m=>N(C)?C.value=m:null),"error-messages":p(q),"append-inner-icon":S.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":T},null,8,["type","modelValue","error-messages","append-inner-icon","onClick:appendInner"])]),_:1}),e(r,{cols:"12",class:"my-auto"},{default:a(()=>[e(w,{variant:"flat",color:"#4E9194",class:"mx-1",onClick:m=>j(s,"password")},{default:a(()=>[h("取消")]),_:2},1032,["onClick"]),e(w,{type:"submit",variant:"flat",color:"#4E9194",class:"mx-1",loading:p(E)},{default:a(()=>[h("保存")]),_:1},8,["loading"])]),_:2},1024)],64)):(c(),g(v,{key:0},[e(r,{cols:"2",class:"my-auto pa-0"},{default:a(()=>[ta]),_:1}),e(r,{cols:"8",class:"my-auto"},{default:a(()=>[t("p",oa,Z(s.password),1)]),_:2},1024)],64)),s.passwordisEditing?ee("",!0):(c(),R(r,{key:2,cols:"2",class:"my-auto pa-0"},{default:a(()=>[e(w,{variant:"flat",color:"#4E9194",onClick:m=>Q(s)},{default:a(()=>[h("編輯")]),_:2},1032,["onClick"])]),_:2},1024))],64))),128))]),_:1}),e(U,{class:"text-center my-3"})])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1}),e(ae,{value:"option-2",style:{height:"320px"}},{default:a(()=>[ra,e(U),t("div",da,[e(ie,{class:"d-flex flex-column w-100"},{default:a(()=>[t("div",ca,[ua,fa,e(W,{"model-value":!0,color:"primary","hide-details":""})]),t("div",ma,[pa,va,e(W,{"model-value":!0,color:"primary","hide-details":""})])]),_:1})])]),_:1}),e(ae,{value:"option-3",style:{height:"450px"}},{default:a(()=>[ga,e(U),t("div",_a,[e(ie,{class:"d-flex flex-column w-100"},{default:a(()=>[t("div",ya,[ba,e(W,{"model-value":!0,color:"primary","hide-details":""})]),t("div",wa,[ha,e(W,{"model-value":!1,color:"primary","hide-details":""})])]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}}},Ba=Me(xa,[["__scopeId","data-v-3f02ff71"]]);export{Ba as default};
