import{p as ie,m as Se,bh as pt,g as ue,aA as Re,bj as vt,u as ce,c as t,be as Le,bk as ft,w as mt,aw as Ne,bq as ht,h as Be,o as g,bf as gt,r as ze,$ as oe,d as xt,bg as yt,e as bt,a as De,bi as Ct,j as _t,k as Vt,az as kt,br as wt,bs as St,f as It,bd as Pt,l as $t,q as Et,t as P,M as le,N as Me,x as M,aP as xe,z as ne,R as $,X as H,T as n,a9 as ye,a4 as x,a2 as Tt,V as Nt,a1 as s,_ as k,W as E,U as j,G as Wt,Y as be,Z as je,S as G,a8 as Ce,af as se,a7 as _e,ap as Fe,a0 as Ue,aQ as qe,ac as Oe,ag as Ge,ah as He,P as At,A as Rt,ab as Lt,a3 as ae,a5 as Bt,ad as We}from"./index-D7Ak4P4d.js";import{c as Qe,b as Ve,u as Xe,f as ke,V as Ye}from"./vee-validate.esm-n0mYqsAE.js";import{_ as Ze}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as zt}from"./VMenu-Cm7ojpY7.js";import{V as Dt,a as Mt,b as jt}from"./VList-DdlcFOqs.js";import{V as Je}from"./VTextarea-C_1aVLGw.js";import{V as ge,a as D}from"./VRow-D61Wexp4.js";const Z=Symbol.for("vuetify:v-expansion-panel"),Ke=ie({...Se(),...pt()},"VExpansionPanelText"),re=ue()({name:"VExpansionPanelText",props:Ke(),setup(e,u){let{slots:l}=u;const a=Re(Z);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:m,onAfterLeave:T}=vt(e,a.isSelected);return ce(()=>t(mt,{onAfterLeave:T},{default:()=>{var d;return[Le(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&m.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(d=l.default)==null?void 0:d.call(l)])]),[[ft,a.isSelected.value]])]}})),{}}}),et=ie({color:String,expandIcon:{type:Ne,default:"$expand"},collapseIcon:{type:Ne,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...Se()},"VExpansionPanelTitle"),we=ue()({name:"VExpansionPanelTitle",directives:{Ripple:ht},props:et(),setup(e,u){let{slots:l}=u;const a=Re(Z);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:m,backgroundColorStyles:T}=Be(e,"color"),d=g(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),y=g(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return ce(()=>{var I;return Le(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},m.value,e.class],style:[T.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(I=l.default)==null?void 0:I.call(l,d.value),!e.hideActions&&t(ze,{defaults:{VIcon:{icon:y.value}}},{default:()=>{var b;return[t("span",{class:"v-expansion-panel-title__icon"},[((b=l.actions)==null?void 0:b.call(l,d.value))??t(oe,null,null)])]}})]),[[gt("ripple"),e.ripple]])}),{}}}),tt=ie({title:String,text:String,bgColor:String,...xt(),...yt(),...bt(),...De(),...et(),...Ke()},"VExpansionPanel"),Ft=ue()({name:"VExpansionPanel",props:tt(),emits:{"group:selected":e=>!0},setup(e,u){let{slots:l}=u;const a=Ct(e,Z),{backgroundColorClasses:m,backgroundColorStyles:T}=Be(e,"bgColor"),{elevationClasses:d}=_t(e),{roundedClasses:y}=Vt(e),I=g(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=g(()=>a.group.items.value.reduce((h,C,L)=>(a.group.selected.value.includes(C.id)&&h.push(L),h),[])),N=g(()=>{const h=a.group.items.value.findIndex(C=>C.id===a.id);return!a.isSelected.value&&b.value.some(C=>C-h===1)}),i=g(()=>{const h=a.group.items.value.findIndex(C=>C.id===a.id);return!a.isSelected.value&&b.value.some(C=>C-h===-1)});return kt(Z,a),ce(()=>{const h=!!(l.text||e.text),C=!!(l.title||e.title),L=we.filterProps(e),U=re.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":N.value,"v-expansion-panel--after-active":i.value,"v-expansion-panel--disabled":I.value},y.value,m.value,e.class],style:[T.value,e.style]},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...d.value]},null),t(ze,{defaults:{VExpansionPanelTitle:{...L},VExpansionPanelText:{...U}}},{default:()=>{var q;return[C&&t(we,{key:"title"},{default:()=>[l.title?l.title():e.title]}),h&&t(re,{key:"text"},{default:()=>[l.text?l.text():e.text]}),(q=l.default)==null?void 0:q.call(l)]}})]})}),{groupItem:a}}}),Ut=["default","accordion","inset","popout"],qt=ie({flat:Boolean,...wt(),...St(tt(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...It(),...Se(),...De(),variant:{type:String,default:"default",validator:e=>Ut.includes(e)}},"VExpansionPanels"),Ot=ue()({name:"VExpansionPanels",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:l}=u;const{next:a,prev:m}=Pt(e,Z),{themeClasses:T}=$t(e),d=g(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Et({VExpansionPanel:{bgColor:P(e,"bgColor"),collapseIcon:P(e,"collapseIcon"),color:P(e,"color"),eager:P(e,"eager"),elevation:P(e,"elevation"),expandIcon:P(e,"expandIcon"),focusable:P(e,"focusable"),hideActions:P(e,"hideActions"),readonly:P(e,"readonly"),ripple:P(e,"ripple"),rounded:P(e,"rounded"),static:P(e,"static")}}),ce(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},T.value,d.value,e.class],style:e.style},{default:()=>{var y;return[(y=l.default)==null?void 0:y.call(l,{prev:m,next:a})]}})),{next:a,prev:m}}});function Gt(e){return{all:e=e||new Map,on:function(u,l){var a=e.get(u);a?a.push(l):e.set(u,[l])},off:function(u,l){var a=e.get(u);a&&(l?a.splice(a.indexOf(l)>>>0,1):e.set(u,[]))},emit:function(u,l){var a=e.get(u);a&&a.slice().map(function(m){m(l)}),(a=e.get("*"))&&a.slice().map(function(m){m(u,l)})}}}const Ae=Gt(),Ht=e=>(Ge("data-v-5a1957af"),e=e(),He(),e),Qt={class:"title-row"},Xt={class:"title-text"},Yt={class:"card-title my-1"},Zt={class:"vote-section"},Jt={class:"vote-count text-body-2"},Kt=Ht(()=>x("span",{class:"headline"},"檢舉故事",-1)),ea={__name:"VoteItem",props:["content","chapterName","author","voteCount","storyId","extensionId","voteStatus","authorId"],setup(e){const{apiAuth:u}=Oe(),l=le(),a=le(),m=Me(),T=M(!1),d=e,{content:y,author:I,voteStatus:b,voteCount:N,storyId:i,extensionId:h}=xe(d),C=l.userId,L=g(()=>N.value.includes(C)),U=async _=>{var f,c;if(!a.isLogin){m({text:"請先登入才能投票",snackbarProps:{color:"red"}});return}try{(await u.patch(`/story/${i.value}/${h.value}`,{voteCountChange:_})).data.hasVotedInOtherExtension||(T.value=!0);const R=await u.get(`/VoteRecord/${i.value}/${h.value}`);_>0?R.data.exists?console.log("投票紀錄已存在，無需重複創建"):(await u.post(`/VoteRecord/postVoteRec/${i.value}/${h.value}`,{content:(c=(f=y.value)==null?void 0:f[0])==null?void 0:c.latestContent,exAuthor:I.value.username}),console.log("投票紀錄已創建")):R.data.exists?(await u.delete(`/VoteRecord/delVoteRec/${i.value}/${h.value}`),console.log("投票紀錄已刪除")):console.log("投票紀錄不存在，無需刪除"),Ae.emit("updateStory")}catch(V){console.log(V),console.error("Error updating vote count:",V)}},q=Qe({report:Ve().required("請描述檢舉原因").min(50,"檢舉不能低於 50 字")}),{handleSubmit:A,isSubmitting:B,resetForm:Q}=Xe({validationSchema:q,initialValues:{report:""}}),F=ke("report"),w=M(!1),de=()=>{w.value=!0},K=g(()=>{const _=[{title:"檢舉",action:de}];return C===d.authorId&&_.push({title:"刪除",action:ve}),_}),pe=A(async _=>{if(!a.isLogin){m({text:"請先登入才能檢舉",snackbarProps:{color:"red"}});return}try{console.log("檢舉已提交"),w.value=!1}catch(f){console.log(f)}}),ve=async()=>{var _,f;try{await u.delete(`/story/${i.value}/${h.value}/deleteExtensionStory`),m({text:"刪除成功",snackbarProps:{color:"green"}}),Ae.emit("updateStory")}catch(c){console.log(c),m({text:((f=(_=c==null?void 0:c.response)==null?void 0:_.data)==null?void 0:f.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return ne(w,_=>{_||Q()}),(_,f)=>($(),H(be,null,[t(_e,{class:"w-100 px-3 py-3 rounded-lg",style:{border:"1px solid #48a9a6",margin:"16px 0px"}},{default:n(()=>[t(ye,{class:"pa-0"},{default:n(()=>{var c;return[x("div",Qt,[x("div",Xt,[t(Tt,{color:"secondary",class:"me-3",size:"46"},{default:n(()=>{var V;return[t(Nt,{src:(V=s(I))==null?void 0:V.avatar},null,8,["src"])]}),_:1}),x("h1",Yt,k((c=s(I))==null?void 0:c.username),1)]),x("div",Zt,[t(oe,{class:"vote-icon",size:"20"},{default:n(()=>[E("mdi-vote")]),_:1}),x("span",Jt,k(e.voteCount.length),1),t(zt,{location:"end"},{activator:n(({props:V})=>[t(j,Wt({icon:""},V,{class:"menu-btn",style:{width:"30px",height:"30px",padding:"auto"},variant:"plain"}),{default:n(()=>[t(oe,{size:"20"},{default:n(()=>[E("mdi-dots-vertical")]),_:1})]),_:2},1040)]),default:n(()=>[t(Dt,{class:"pa-0"},{default:n(()=>[($(!0),H(be,null,je(s(K),(V,R)=>($(),G(Mt,{class:"px-4 py-1 my-0",key:R,onClick:fe=>V.action?V.action():null,link:""},{default:n(()=>[t(jt,null,{default:n(()=>[E(k(V.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})])])]}),_:1}),t(Ce,{class:"pa-0 mx-7 pl-8 pr-2 py-1"},{default:n(()=>{var c;return[E(k((c=s(y))==null?void 0:c[0].latestContent),1)]}),_:1}),t(se,{class:"d-flex justify-end"},{default:n(()=>[t(j,{disabled:s(L)||s(b).hasVoted,style:{"background-color":"#f24e1e",color:"white"},onClick:f[0]||(f[0]=c=>U(1))},{default:n(()=>[E("投票")]),_:1},8,["disabled"]),t(j,{disabled:!s(L)||s(b).hasVoted&&!s(b).voteThis,style:{"background-color":"#f4b942",color:"black","margin-right":"24px"},onClick:f[1]||(f[1]=c=>U(-1))},{default:n(()=>[E("取消")]),_:1},8,["disabled"])]),_:1})]),_:1}),t(qe,{modelValue:w.value,"onUpdate:modelValue":f[4]||(f[4]=c=>w.value=c),"max-width":"500px"},{default:n(()=>[t(Ye,{onSubmit:Fe(s(pe),["prevent"]),disabled:s(B)},{default:n(()=>[t(_e,null,{default:n(()=>[t(ye,null,{default:n(()=>[Kt]),_:1}),t(Ce,null,{default:n(()=>[t(Je,{modelValue:s(F).value.value,"onUpdate:modelValue":f[2]||(f[2]=c=>s(F).value.value=c),"error-messages":s(F).errorMessage.value,label:"請描述檢舉原因",rows:"3","auto-grow":""},null,8,["modelValue","error-messages"])]),_:1}),t(se,null,{default:n(()=>[t(Ue),t(j,{color:"blue darken-1",text:"",onClick:f[3]||(f[3]=c=>w.value=!1)},{default:n(()=>[E("取消")]),_:1}),t(j,{color:"blue darken-1",text:"",type:"submit",loading:s(B)},{default:n(()=>[E("提交")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64))}},ta=Ze(ea,[["__scopeId","data-v-5a1957af"]]),J=e=>(Ge("data-v-380d252f"),e=e(),He(),e),aa={class:"text--muted"},na={class:"font-weight-black",style:{"font-size":"16px","margin-right":"4px"}},oa={key:0,style:{color:"#4e9194","font-size":"14px"}},la=J(()=>x("br",null,null,-1)),sa={key:1,class:"text--danger my-2 d-inline-block font-weight-black",style:{"font-size":"12px"}},ra=J(()=>x("br",null,null,-1)),ia={style:{color:"#4e9194","margin-right":"10px","font-size":"14px"}},ua=J(()=>x("br",null,null,-1)),ca={key:0,class:"my-2 d-inline-block",style:{color:"black","margin-right":"10px"}},da=J(()=>x("br",null,null,-1)),pa={style:{color:"black","margin-right":"10px"}},va={style:{"word-wrap":"break-word"}},fa=J(()=>x("h1",null,"故事投票",-1)),O=1,ma={__name:"StoryItem",props:{category:String,title:String,mainAuthor:[String,Object],content:{type:Array,default:()=>[]},createdAt:String,extensions:{type:Array,default:()=>[]},_id:String,voteTime:[String,Number],voteStart:[String,Date],voteEnd:[String,Date],totalWordCount:{type:Number,required:!0},extendWordLimit:{type:Number,default:50},chapters:{type:Number,default:1},wordsPerChapter:{type:Number,default:100},currentChapterWordCount:{type:Number,default:0},chapterWordCount:{type:Number,default:0},state:{type:Boolean,default:!1},isExpanded:Boolean},emits:["update","toggle"],setup(e,{emit:u}){const l=le(),a=le(),m=At(),T=l.userId,d=u,{apiAuth:y}=Oe(),I=M("");let b=0;const N=Me(),i=e,h=M(i.isExpanded?[0]:null),{category:C,title:L,mainAuthor:U,createdAt:q,_id:A}=i,{content:B}=xe(i),Q=g(()=>i.state),F=g(()=>B.value&&B.value.length>0&&B.value[B.value.length-1].chapterName||"暫無章節名"),w=g(()=>{const o=i.wordsPerChapter-i.currentChapterWordCount;return o===0?i.extendWordLimit:o<i.extendWordLimit?o:i.extendWordLimit||50}),de=g(()=>[o=>o.length>=O&&o.length<=w.value||`內容字數需在 ${O} 至 ${w.value} 字之間`]),K=g(()=>i.currentChapterWordCount>=i.wordsPerChapter),pe=g(()=>{const o={newChapterContent:Ve().required("故事內容必填").min(O,`故事內容不能少於 ${O} 字`).max(w.value,`故事內容不能超過 ${w.value} 字`)};return K.value&&(o.newChapterName=Ve().required("章節名稱必填").min(1).max(60)),Qe(o)}),{handleSubmit:ve,isSubmitting:_,resetForm:f}=Xe({validationSchema:pe,initialValues:{newChapterContent:"",newChapterName:""}}),c=ke("newChapterName"),V=ke("newChapterContent"),R=M(!1),fe=g(()=>i.content&&i.content.length>0?i.content[i.content.length-1].content||[]:[]),at=()=>{const o=(i.content.length-1)*i.wordsPerChapter,p=i.currentChapterWordCount,r=o+p;return Math.max(0,i.totalWordCount-r)},Ie=g(()=>at()),{extensions:S,voteEnd:me}=xe(i),Pe=M(!1),ee=M(!1),nt=async()=>{if(a.isLogin)try{const o=await y.get(`user/checkBookmark/${A}`);Pe.value=o.data.hasCollection,ee.value=o.data.hasCollection}catch(o){console.error("檢查收藏狀態失敗",o)}},ot=async()=>{if(!a.isLogin){N({text:"請先登入才能收藏",snackbarProps:{color:"red"}});return}try{const o=await y.post("user/addBookmark",{storyId:A});Pe.value=o.data.hasCollection,ee.value=o.data.hasCollection,N({text:o.data.hasCollection?"收藏故事":"取消收藏",snackbarProps:{color:"accent"}})}catch(o){console.error("收藏操作失败",o),N({text:"收藏操作失败",snackbarProps:{color:"red"}})}},lt=g(()=>ee.value?"mdi-heart":"mdi-heart-outline"),st=()=>{a.isLogin?R.value=!0:(N({text:"請先登入才能收藏",snackbarProps:{color:"red"}}),m.push("/login"))},te=M(!1),rt=async o=>{var p,r;console.log("mergeHighestVotedStory 開始執行");try{if(!S.value.length){console.log("沒有延續故事可供合併"),d("update");return}if(te.value){d("update");return}if(te.value=!0,!S.value.filter(z=>z.voteCount.length>0).length){console.log("所有延續故事的票數為 0，清空延續故事"),await y.patch(`/story/${A}/clearExtensions`),d("update");return}const W=S.value.reduce((z,X)=>X.voteCount.length>z.voteCount.length?X:z);if(!(W!=null&&W._id))throw new Error("延續故事未找到");i.currentChapterWordCount===i.wordsPerChapter?(console.log("當前章節已達到字數上限，準備創建新章節"),await y.post(`/story/${A}/newChapter`,{newContent:(p=W.content[0])==null?void 0:p.latestContent,newChapterName:W.chapterName}),console.log("觸發 newChapter"),d("update")):(await y.patch(`/story/${A}/merge`,{extensionsId:W._id})).data.isCompleted&&(i.state=!0),console.log("即將觸發 emit update"),d("update"),console.log("已觸發 emit update"),console.log("合併操作完成")}catch(v){console.error("合併故事時發生錯誤",((r=v.response)==null?void 0:r.data)||v.message||v)}finally{console.log("重置 hasMerged "),te.value=!1,d("update")}};let he=!1;const $e=async()=>{const o=Date.now(),r=new Date(me.value).getTime()-o;if(r<=0){clearInterval(b),I.value="",S.value.length>0&&!te.value&&!he&&(he=!0,await rt(),he=!1);return}const v=Math.floor(r/1e3),W=Math.floor(v/(24*3600)),z=Math.floor(v%(24*3600)/3600),X=Math.floor(v%3600/60),Te=v%60,Y=[];W>0&&Y.push(`${W} 天`),z>0&&Y.push(`${z} 小時`),X>0&&Y.push(`${X} 分`),Te>0&&Y.push(`${Te} 秒`),I.value=Y.join(" ")},Ee=()=>{b&&clearInterval(b),$e(),b=setInterval($e,1e3)};Rt(()=>{a.isLogin&&nt(),me&&Ee()});const it=ve(async o=>{var p,r;try{const v=S.value.length===0;await y.post(`/story/${A}`,{chapterName:o.newChapterName,content:o.newChapterContent,voteStart:v?new Date:void 0}),N({text:"延伸內容提交成功",snackbarProps:{color:"green"}}),f(),R.value=!1,d("update")}catch(v){console.log(v),N({text:((r=(p=v==null?void 0:v.response)==null?void 0:p.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}});Lt(()=>{b&&clearInterval(b)}),ne(()=>i.content,o=>{fe.value=o[0].content}),ne(me,o=>{o&&Ee()});const ut=o=>{let p=!1,r=!1;for(const v of S.value)v.voteCount.indexOf(T)>-1&&(p=!0,v._id===o._id&&(r=!0));return{hasVoted:p,voteThis:r}};ne(()=>i.isExpanded,o=>{h.value=o?[0]:null});const ct=()=>{console.log("正在執行 emit(toggle)"),d("toggle")},dt=()=>{console.log("正在執行 emit(toggle)"),d("toggle")};return(o,p)=>($(),G(Ot,{class:"customMb",modelValue:h.value,"onUpdate:modelValue":p[4]||(p[4]=r=>h.value=r),onChange:ct},{default:n(()=>[t(Ft,{style:{"border-radius":"10px"}},{default:n(()=>[t(we,{onClick:dt},{default:n(()=>[t(ge,{"no-gutters":""},{default:n(()=>[t(D,{class:"d-flex align-center justify-center text--secondary",style:{"padding-right":"24px"},cols:"1"},{default:n(()=>[x("div",aa,k(s(C)),1)]),_:1}),t(D,{cols:"8",class:"text--secondary"},{default:n(()=>[x("span",na,k(s(L)),1),Q.value?($(),H("span",oa," （已完結） ")):ae("",!0),la,s(S)&&s(S).length>0?($(),H("span",sa,"投票倒數計時：")):ae("",!0),ra,x("span",null,k(F.value),1)]),_:1}),t(D,{cols:"3",class:"text-right",style:{color:"#4e9194"}},{default:n(()=>{var r;return[x("span",ia,k((r=s(U))==null?void 0:r.username),1),ua,s(S)&&s(S).length>0?($(),H("span",ca,k(I.value),1)):ae("",!0),da,x("span",pa,k(new Date(s(q)).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"})),1)]}),_:1})]),_:1})]),_:1}),t(re,null,{default:n(()=>[t(ge,{style:{padding:"12px"}},{default:n(()=>[t(D,{cols:"12",class:"mt-1 pa-0",style:{"font-size":"8px"}},{default:n(()=>[x("h1",null,k(s(B).length>0?"最新內容":"開始故事")+" ("+k(Ie.value===0?"已結束":`剩餘字數：${Ie.value}`)+") ",1)]),_:1}),t(D,{cols:"12"},{default:n(()=>[t(ge,null,{default:n(()=>[t(D,{cols:"1",class:"d-flex align-center justify-center pa-0"},{default:n(()=>[t(j,{text:"",ripple:!1,variant:"text",class:Bt(["heart-button pa-0",{filled:ee.value}]),onClick:ot},{default:n(()=>[t(oe,null,{default:n(()=>[E(k(lt.value),1)]),_:1})]),_:1},8,["class"])]),_:1}),t(D,{cols:"11",class:"pl-0"},{default:n(()=>[x("p",va,k(fe.value.join("")),1),t(se,null,{default:n(()=>[t(Ue),t(j,{color:"secondary",variant:"outlined",onClick:st,disabled:Q.value},{default:n(()=>[E(k(Q.value?"故事已完结":"延續故事"),1)]),_:1},8,["disabled"])]),_:1}),t(qe,{modelValue:R.value,"onUpdate:modelValue":p[3]||(p[3]=r=>R.value=r),"max-width":"500"},{default:n(()=>[t(Ye,{onSubmit:Fe(s(it),["prevent"]),disabled:s(_)},{default:n(()=>[t(_e,null,{default:n(()=>[t(ye,{class:"text-center",style:{"background-color":"#97d8c4"}},{default:n(()=>[E("延續故事")]),_:1}),t(Ce,{class:"py-4 pb-0"},{default:n(()=>[K.value?($(),G(We,{key:0,modelValue:s(c).value.value,"onUpdate:modelValue":p[0]||(p[0]=r=>s(c).value.value=r),class:"mb-4",label:"輸入章節名稱","hide-details":"",minlength:1,maxlength:60},null,8,["modelValue"])):($(),G(We,{key:1,modelValue:F.value,"onUpdate:modelValue":p[1]||(p[1]=r=>F.value=r),class:"mb-4",label:"當前章節名稱","hide-details":"",disabled:""},null,8,["modelValue"])),t(Je,{modelValue:s(V).value.value,"onUpdate:modelValue":p[2]||(p[2]=r=>s(V).value.value=r),label:`故事內容（字數：${O} - ${w.value} 字）`,rows:"10",minlength:O,maxlength:w.value,counter:"","auto-grow":"",rules:de.value,style:{"margin-bottom":"8px"}},null,8,["modelValue","label","maxlength","rules"])]),_:1}),t(se,{class:"justify-center align-start py-0"},{default:n(()=>[t(j,{style:{"background-color":"#4e9194",color:"#000000"},type:"submit",loading:s(_)},{default:n(()=>[E("發布")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(S)&&s(S).length>0?($(),G(re,{key:0},{default:n(()=>[t(D,{cols:"12",class:"mt-1 mb-3 pa-0",style:{"font-size":"8px"}},{default:n(()=>[fa]),_:1}),($(!0),H(be,null,je(s(S).slice(0,5),(r,v)=>($(),G(ta,{key:v,storyId:s(A),authorId:r.author._id,extensionId:r._id,content:r.content,chapterName:r.chapterName,author:r.author,voteCount:r.voteCount,voteStatus:ut(r)},null,8,["storyId","authorId","extensionId","content","chapterName","author","voteCount","voteStatus"]))),128))]),_:1})):ae("",!0)]),_:1})]),_:1},8,["modelValue"]))}},Va=Ze(ma,[["__scopeId","data-v-380d252f"]]);export{Va as S,Ae as m};