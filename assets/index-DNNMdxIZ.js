import{a5 as ie,P as Be,Q as d,R as I,S as t,c as e,V as Fe,a2 as n,a6 as ee,U as f,Z as p,a7 as G,a8 as te,M as J,x as b,a9 as ye,o as ne,a0 as a,_ as K,T as A,G as X,W as $,X as P,Y as F,aa as re,ab as ue,N as Le,A as be,ac as we,z as _e,a1 as Z,a3 as Ue,$ as He,ad as We,ae as Oe,af as qe,ag as Ge,ah as Ye}from"./index-D8Mo-riY.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Qe}from"./VChip-CuIev6Op.js";import{c as Xe,a as he,u as Ze,b as ge}from"./vee-validate.esm-7QMx_sga.js";import{V as Je}from"./VMenu-DNuh_dXC.js";import{V as Ve,a as Ce,b as ke}from"./VList-CF621bau.js";import{V as Ke,a as et,b as ve,c as tt}from"./VExpansionPanels-Bch60zVU.js";import{V as N,a as u}from"./VRow-BdRUm_bt.js";import{V as at}from"./VForm-Cgkhuj3f.js";import{V as st}from"./VTextarea-z-G7oqnu.js";import{V as O}from"./VContainer-D2_Tlp7J.js";import{V as q}from"./VDivider-BzHLweN9.js";import"./VSlideGroup-DZptSWD8.js";const ot={class:"d-flex justify-space-between align-center"},lt={__name:"BookCard",props:["_id","image","title","category","mainAuthor","content"],setup(o){const m=ie(),c=r=>{m.push(r)};return(r,g)=>{const E=Be("router-link");return d(),I(te,{class:"pa-3 customMargin",width:"220"},{default:t(()=>[e(E,{to:"/stories/"+o._id},{default:t(()=>[e(Fe,{class:"cursor-pointer",height:"150px",src:o.image,cover:""},null,8,["src"])]),_:1},8,["to"]),n("div",ot,[e(ee,{class:"px-0 py-1 text-subtitle-1 cursor-pointer",onClick:g[0]||(g[0]=v=>c("/123"))},{default:t(()=>[f(p(o.title),1)]),_:1}),e(Qe,{density:"compact",color:"primary",label:"",style:{"font-size":"12px",padding:"2px 6px"}},{default:t(()=>[f(p(o.category),1)]),_:1})]),e(G,{class:"pa-0 cursor-pointer",style:{"font-size":"12px",color:"#4e9194"},onClick:g[1]||(g[1]=v=>c("/1234"))},{default:t(()=>{var v;return[f(p((v=o.mainAuthor)==null?void 0:v.username),1)]}),_:1}),e(G,{class:"pa-0"},{default:t(()=>[f(p(o.content[0].content[0]),1)]),_:1})]),_:1})}}},xe=de(lt,[["__scopeId","data-v-f2bd186d"]]);function nt(o){return{all:o=o||new Map,on:function(m,c){var r=o.get(m);r?r.push(c):o.set(m,[c])},off:function(m,c){var r=o.get(m);r&&(c?r.splice(r.indexOf(c)>>>0,1):o.set(m,[]))},emit:function(m,c){var r=o.get(m);r&&r.slice().map(function(g){g(c)}),(r=o.get("*"))&&r.slice().map(function(g){g(m,c)})}}}const ce=nt(),rt={class:"title-row"},ct={class:"title-text"},it={class:"card-title my-1"},ut={class:"vote-section"},dt={class:"vote-count text-body-2"},pt={__name:"VoteItem",props:["content","chapterName","author","voteCount","storyId","extensionId","voteStatus"],setup(o){const{apiAuth:m}=ue(),c=J(),r=b([{title:"檢舉"},{title:"刪除"}]),g=b(!1),E=o,{content:v,author:M,voteStatus:w,voteCount:C,storyId:j,extensionId:x}=ye(E),V=c.userId,i=ne(()=>C.value.includes(V)),T=async L=>{try{(await m.patch(`/story/${j.value}/${x.value}`,{voteCountChange:L})).data.hasVotedInOtherExtension||(g.value=!0),ce.emit("updateStory")}catch(k){console.log(k),console.error("Error updating vote count:",k)}};return(L,k)=>(d(),I(te,{class:"w-100 px-6 py-2 rounded-lg",style:{border:"1px solid #48a9a6",margin:"16px 0px"}},{default:t(()=>[e(ee,{class:"pa-0"},{default:t(()=>{var S;return[n("div",rt,[n("div",ct,[n("h1",it,p((S=a(M))==null?void 0:S.username),1)]),n("div",ut,[e(K,{class:"vote-icon",size:"20"},{default:t(()=>[f("mdi-vote")]),_:1}),n("span",dt,p(o.voteCount.length),1),e(Je,{location:"end"},{activator:t(({props:R})=>[e(A,X({icon:""},R,{class:"menu-btn",style:{width:"30px",height:"30px",padding:"auto"},variant:"plain"}),{default:t(()=>[e(K,{size:"20"},{default:t(()=>[f("mdi-dots-vertical")]),_:1})]),_:2},1040)]),default:t(()=>[e(Ve,{class:"pa-0"},{default:t(()=>[(d(!0),$(P,null,F(r.value,(R,B)=>(d(),I(Ce,{key:B,class:""},{default:t(()=>[e(ke,null,{default:t(()=>[f(p(R.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])]}),_:1}),e(G,{class:"pa-0 mx-7 py-1"},{default:t(()=>{var S;return[f(p((S=a(v))==null?void 0:S[0].latestContent),1)]}),_:1}),e(re,{class:"d-flex justify-end"},{default:t(()=>[e(A,{disabled:a(i)||a(w).hasVoted,style:{"background-color":"#f24e1e",color:"white"},onClick:k[0]||(k[0]=S=>T(1))},{default:t(()=>[f("投票")]),_:1},8,["disabled"]),e(A,{disabled:!a(i)||a(w).hasVoted&&!a(w).voteThis,style:{"background-color":"#f4b942",color:"black","margin-right":"24px"},onClick:k[1]||(k[1]=S=>T(-1))},{default:t(()=>[f("取消")]),_:1},8,["disabled"])]),_:1})]),_:1}))}},ft=de(pt,[["__scopeId","data-v-e3cc8cd3"]]),Y=o=>(Ge("data-v-6d8a06d0"),o=o(),Ye(),o),mt={class:"text--muted"},_t={class:"font-weight-black",style:{"font-size":"16px","margin-right":"4px"}},ht=Y(()=>n("br",null,null,-1)),gt={key:0,class:"text--danger my-2 d-inline-block font-weight-black",style:{"font-size":"12px"}},vt=Y(()=>n("br",null,null,-1)),xt={style:{color:"#4e9194","margin-right":"10px","font-size":"14px"}},yt=Y(()=>n("br",null,null,-1)),bt={key:0,class:"my-2 d-inline-block",style:{color:"black","margin-right":"10px"}},wt=Y(()=>n("br",null,null,-1)),Vt={style:{color:"black","margin-right":"10px"}},Ct={style:{"word-wrap":"break-word"}},kt=Y(()=>n("h1",null,"故事投票",-1)),St={__name:"StoryItem",props:["category","title","chapterName","mainAuthor","content","createdAt","extensions","_id","voteTime","voteStart","voteEnd"],emits:["update"],setup(o,{emit:m}){const c=J(),r=J(),g=ie(),E=c.userId,v=m,{apiAuth:M}=ue(),w=b("");let C=0;const j=Le(),x=b(10),V=b(50),i=Xe({newChapterName:he().required("章節名稱必填").min(1).max(60),newChapterContent:he().required("故事內容必填").min(x.value,`故事內容不能少於 ${x.value} 字`).max(V.value,`故事內容不能超過 ${V.value} 字`)}),{handleSubmit:T,isSubmitting:L,resetForm:k}=Ze({validationSchema:i,initialValues:{newChapterContent:""}}),S=ge("newChapterName"),R=ge("newChapterContent"),B=b(!1),Q=b(!1),ae=o,{category:Se,title:$e,chapterName:Ie,mainAuthor:je,content:se,createdAt:Ne,_id:U}=ae,pe=b(se?se[0].content:[]),{extensions:y,voteEnd:oe}=ye(ae),Te=()=>{B.value=!B.value},ze=ne(()=>B.value?"mdi-heart":"mdi-heart-outline"),Ae=()=>{r.isLogin?Q.value=!0:g.push("/login")},Ee=ne(()=>[_=>_.length>=x.value&&_.length<=V.value||`內容字數需在 ${x.value} 至 ${V.value} 字之間`]),le=b(!1),Me=async()=>{var _,h,s;try{if(!y.value.length){console.log("沒有延續故事可供合併"),v("update");return}if(le.value){v("update");return}if(le.value=!0,!y.value.filter(D=>D.voteCount.length>0).length){console.log("所有延續故事的票數為 0，清空延續故事"),await M.patch(`/story/${U}/clearExtensions`),j({text:"所有延續故事的票數為 0，已清空延續故事",snackbarProps:{color:"red"}}),v("update");return}const z=y.value.reduce((D,H)=>H.voteCount.length>D.voteCount.length?H:D);if(!(z!=null&&z._id))throw new Error("延續故事未找到");await M.patch(`/story/${U}/merge`,{extensionsId:z._id}),j({text:"延續故事已成功合併到主故事中",snackbarProps:{color:"green"}}),console.log("即將觸發 emit update"),v("update"),console.log("已觸發 emit update")}catch(l){console.error("合併故事時發生錯誤",((_=l.response)==null?void 0:_.data)||l.message||l),j({text:((s=(h=l==null?void 0:l.response)==null?void 0:h.data)==null?void 0:s.message)||"合併故事時發生錯誤",snackbarProps:{color:"red"}})}finally{le.value=!1}},De=async()=>{const _=Date.now(),s=new Date(oe.value).getTime()-_;if(s<=0){clearInterval(C),w.value="",y.value.length>0&&await Me();return}const l=Math.floor(s/1e3),z=Math.floor(l/(24*3600)),D=Math.floor(l%(24*3600)/3600),H=Math.floor(l%3600/60),me=l%60,W=[];z>0&&W.push(`${z} 天`),D>0&&W.push(`${D} 小時`),H>0&&W.push(`${H} 分`),me>0&&W.push(`${me} 秒`),w.value=W.join(" ")},fe=()=>{C=setInterval(()=>{De()},1e3)};be(()=>{oe&&fe()});const Pe=T(async _=>{var h,s;try{console.log(U);const l=y.value.length===0;await M.post(`/story/${U}`,{chapterName:_.newChapterName,content:_.newChapterContent,voteStart:l?new Date:void 0}),j({text:"延伸內容提交成功",snackbarProps:{color:"green"}}),k(),Q.value=!1,v("update")}catch(l){console.log(l),j({text:((s=(h=l==null?void 0:l.response)==null?void 0:h.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}});we(()=>{clearInterval(C)}),_e(()=>ae.content,_=>{pe.value=_[0].content}),_e(oe,_=>{_&&fe()});const Re=_=>{let h=!1,s=!1;for(const l of y.value)l.voteCount.indexOf(E)>-1&&(h=!0,l._id===_._id&&(s=!0));return{hasVoted:h,voteThis:s}};return(_,h)=>(d(),I(tt,{class:"customMb"},{default:t(()=>[e(Ke,null,{default:t(()=>[e(et,null,{default:t(()=>[e(N,{"no-gutters":""},{default:t(()=>[e(u,{class:"d-flex align-center justify-center text--secondary",style:{"padding-right":"24px"},cols:"1"},{default:t(()=>[n("div",mt,p(a(Se)),1)]),_:1}),e(u,{cols:"8",class:"text--secondary"},{default:t(()=>[n("span",_t,p(a($e)),1),ht,a(y)&&a(y).length>0?(d(),$("span",gt,"投票倒數計時：")):Z("",!0),vt,n("span",null,p(a(Ie)),1)]),_:1}),e(u,{cols:"3",class:"text-right",style:{color:"#4e9194"}},{default:t(()=>{var s;return[n("span",xt,p((s=a(je))==null?void 0:s.username),1),yt,a(y)&&a(y).length>0?(d(),$("span",bt,p(w.value),1)):Z("",!0),wt,n("span",Vt,p(new Date(a(Ne)).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"})),1)]}),_:1})]),_:1})]),_:1}),e(ve,null,{default:t(()=>[e(N,{style:{padding:"12px"}},{default:t(()=>[e(u,{cols:"12",class:"mt-1 pa-0",style:{"font-size":"8px"}},{default:t(()=>[n("h1",null,p(a(se)[0].latestContent?"最新內容":"開始故事"),1)]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(N,null,{default:t(()=>[e(u,{cols:"1",class:"d-flex align-center justify-center pa-0"},{default:t(()=>[e(A,{text:"",ripple:!1,variant:"text",class:Ue(["heart-button pa-0",{filled:B.value}]),onClick:Te},{default:t(()=>[e(K,null,{default:t(()=>[f(p(ze.value),1)]),_:1})]),_:1},8,["class"])]),_:1}),e(u,{cols:"11",class:"pl-0"},{default:t(()=>[n("p",Ct,p(pe.value.join("")),1),e(re,null,{default:t(()=>[e(He),e(A,{color:"secondary",variant:"outlined",onClick:Ae},{default:t(()=>[f(" 延續故事 ")]),_:1})]),_:1}),e(We,{modelValue:Q.value,"onUpdate:modelValue":h[2]||(h[2]=s=>Q.value=s),"max-width":"500"},{default:t(()=>[e(at,{onSubmit:Oe(a(Pe),["prevent"]),disabled:a(L)},{default:t(()=>[e(te,null,{default:t(()=>[e(ee,{class:"text-center",style:{"background-color":"#97d8c4"}},{default:t(()=>[f("延續故事")]),_:1}),e(G,{class:"py-4 pb-0"},{default:t(()=>[e(qe,{modelValue:a(S).value.value,"onUpdate:modelValue":h[0]||(h[0]=s=>a(S).value.value=s),class:"mb-4",label:"輸入章節名稱","hide-details":"",minlength:1,maxlength:60},null,8,["modelValue"]),e(st,{modelValue:a(R).value.value,"onUpdate:modelValue":h[1]||(h[1]=s=>a(R).value.value=s),label:`故事內容（字數：${x.value} - ${V.value} 字`,rows:"10",minlength:`${x.value}`,maxlength:`${V.value}`,counter:"",rules:Ee.value,style:{"margin-bottom":"8px"}},null,8,["modelValue","label","minlength","maxlength","rules"])]),_:1}),e(re,{class:"justify-center align-start py-0"},{default:t(()=>[e(A,{style:{"background-color":"#4e9194",color:"#000000"},type:"submit",loading:a(L)},{default:t(()=>[f("發布")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(y)&&a(y).length>0?(d(),I(ve,{key:0},{default:t(()=>[e(u,{cols:"12",class:"mt-1 mb-3 pa-0",style:{"font-size":"8px"}},{default:t(()=>[kt]),_:1}),(d(!0),$(P,null,F(a(y).slice(0,5),(s,l)=>(d(),I(ft,{key:l,storyId:a(U),extensionId:s._id,content:s.content,chapterName:s.chapterName,author:s.author,voteCount:s.voteCount,voteStatus:Re(s)},null,8,["storyId","extensionId","content","chapterName","author","voteCount","voteStatus"]))),128))]),_:1})):Z("",!0)]),_:1})]),_:1}))}},$t=de(St,[["__scopeId","data-v-6d8a06d0"]]),It={class:"pa-0 px-4"},jt=n("h2",null,"追蹤故事",-1),Nt=n("h2",null,"熱門故事",-1),Tt=n("h2",null,"最新故事",-1),zt=n("h2",null,"完結故事",-1),At={key:1,class:""},Et=n("h2",null,"創作資源區",-1),Yt={__name:"index",setup(o){const m=J(),{api:c}=ue(),r=b([]),g=ie(),E=()=>{m.isLogin?g.push("/createStory"):g.push("/login")},v=b([]),M=b([]),w=b([]),C=async()=>{try{const{data:x}=await c.get("/story");r.value=x.result.data;const V=await c.get("/story/getPopularStories");v.value=V.data.result.data;const i=await c.get("/story/getNewestStories");M.value=i.data.result.data;const T=await c.get("/story/getCompletedStories");w.value=T.data.result.data}catch(x){console.error("Failed to load stories:",x)}},j=[{to:"/articleArea",icon:"mdi-lightbulb-on-outline",title:"創作指引",color:"#F9A825"}];return be(()=>{C(),ce.on("updateStory",C)}),we(()=>{ce.off("updateStory",C)}),(x,V)=>(d(),$(P,null,[e(N,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(te,{class:"rounded-0 px-10 py-auto",height:"200px",color:"surface-variant",image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",cover:"",elevation:"5"},{default:t(()=>[e(u,null,{default:t(()=>[e(ee,{class:"text-h4 font-weight-bold"},{default:t(()=>[f(" 歡迎來到界筆！ ")]),_:1}),e(G,{class:"font-weight-bold pa-0 py-2 px-4 mb-2",style:{"font-size":"24px","letter-spacing":"12px"}},{default:t(()=>[f(" 探索和創作無限可能的故事 ")]),_:1}),n("div",It,[e(A,{class:"font-weight-black mr-3 px-4",variant:"elevated",color:"#CCB78E",onClick:E,to:"/createStory"},{default:t(()=>[f(" 立即創作 ")]),_:1}),e(A,{class:"font-weight-black px-4",outlined:"",border:"",variant:"elevated",style:{color:"#ccb78e",border:"1px solid #ccb78e","background-color":"rgba(0, 0, 0, 0.47)"},to:"/category"},{default:t(()=>[f(" 探索故事 ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),a(m).isLogin?(d(),I(O,{key:0,style:{padding:"32px"}},{default:t(()=>[e(N,{class:"justify-space-between"},{default:t(()=>[e(u,{cols:"12",class:"pb-0"},{default:t(()=>[jt]),_:1}),e(q,{class:"mb-3"}),e(u,{cols:"12",class:"d-flex flex-column justify-space-between"},{default:t(()=>[(d(!0),$(P,null,F(r.value,i=>(d(),I($t,X({key:i._id,ref_for:!0},i,{onUpdate:C}),null,16))),128))]),_:1})]),_:1})]),_:1})):Z("",!0),e(O,{style:{padding:"32px"}},{default:t(()=>[e(N,{class:"justify-space-between"},{default:t(()=>[e(u,{cols:"12",class:"pb-0"},{default:t(()=>[Nt]),_:1}),e(q,{class:"mb-3"}),e(u,{cols:"12",class:"d-flex flex-row justify-start"},{default:t(()=>[(d(!0),$(P,null,F(v.value,i=>(d(),I(xe,X({key:i._id,ref_for:!0},i),null,16))),128))]),_:1})]),_:1})]),_:1}),e(O,{style:{padding:"32px"}},{default:t(()=>[e(N,{class:"justify-space-between"},{default:t(()=>[e(u,{cols:"12",class:"pb-0"},{default:t(()=>[Tt]),_:1}),e(q,{class:"mb-3"}),e(u,{cols:"12",class:"d-flex flex-column justify-space-between"})]),_:1})]),_:1}),e(O,{style:{padding:"32px"}},{default:t(()=>[e(N,{class:"justify-space-between"},{default:t(()=>[e(u,{cols:"12",class:"pb-0"},{default:t(()=>[zt]),_:1}),e(q,{class:"mb-3"}),e(u,{cols:"12",class:"d-flex flex-row justify-space-between"},{default:t(()=>[w.value.length>0?(d(!0),$(P,{key:0},F(w.value,i=>(d(),I(xe,X({key:i._id,ref_for:!0},i),null,16))),128)):(d(),$("div",At,"尚未有已完結故事"))]),_:1})]),_:1})]),_:1}),e(O,{style:{padding:"32px"}},{default:t(()=>[e(N,{class:"justify-space-between"},{default:t(()=>[e(u,{cols:"12",class:"pb-0"},{default:t(()=>[Et]),_:1}),e(q,{class:"mb-3"}),e(u,{cols:"12",class:"d-flex flex-row justify-space-between py-0"},{default:t(()=>[e(Ve,{class:"d-flex justify-space-between w-100 py-0",style:{"background-color":"transparent"}},{default:t(()=>[(d(),$(P,null,F(j,(i,T)=>e(Ce,{key:T,to:i.to,link:""},{prepend:t(()=>[e(K,{size:"80",color:i.color},{default:t(()=>[f(p(i.icon),1)]),_:2},1032,["color"])]),default:t(()=>[e(ke,{style:{"font-size":"20px","font-weight":"bold"},textContent:p(i.title)},null,8,["textContent"])]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{Yt as default};
