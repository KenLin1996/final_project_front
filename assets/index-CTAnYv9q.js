import{M as R,N as S,x as C,A as z,Q as d,R as f,S as a,c as e,V as m,a2 as s,Z as r,U as n,a9 as y,T as _,a1 as P,W as E,Y as F,X as G,al as v,ae as I,O as K}from"./index-DRK1-Qlp.js";import{V as Q}from"./VContainer-Cbd5fH4M.js";import{V as b,a as c}from"./VRow-BeSSNumG.js";import{V as w}from"./VChip-BEEAEfKU.js";import{V as A}from"./VDivider-D5PvHNFX.js";import{V as X}from"./VTextarea-fKr7GPgs.js";import"./VSlideGroup-5NmVpzRI.js";const Z={class:"blue--text text-h5"},j=s("strong",null,"作者：",-1),D={class:"blue--text"},H=s("strong",null,"類別：",-1),U=s("strong",null,"狀態：",-1),Y={class:"orange--text"},J=s("strong",null,"總字數：",-1),$={class:"grey--text"},tt={class:"my-2"},et=s("h3",{class:""},"起始故事",-1),at={class:"py-4"},st=s("h3",{class:"pa-4",style:{"background-color":"rgb(146 224 227)"}},"留言區",-1),ot={class:""},lt={class:"pa-4"},ct=s("span",null,"貓界阿宅",-1),rt=s("p",{class:"ml-13 text-body-2"},"這是本喵看過最好看的喵喵喵喵書",-1),nt={class:"pa-4"},ut=s("span",null,"黑嚕嚕咕嚕嚕",-1),it=s("p",{class:"ml-13 text-body-2"},"喵喵喵可以趕快更新嗎",-1),dt={class:"pa-4"},vt={__name:"index",props:{story:Object,hasCollection:Boolean},setup(L){const B=L,{api:W,apiAuth:x}=I(),p=R(),k=K(),i=S(),h=C(B.hasCollection),t=C({_id:"",image:"",title:"",mainAuthor:"",category:"",chapterLabels:"",state:!0,totalWordCount:0,collectionNum:0,followNum:0,content:[]}),M=async()=>{var l,g;try{const{data:o}=await W.get("/story/"+k.params.id);t.value._id=o.result._id,t.value.image=o.result.image,t.value.title=o.result.title,t.value.mainAuthor=o.result.mainAuthor,t.value.category=o.result.category,t.value.chapterLabels=o.result.chapterLabels,t.value.state=o.result.state,t.value.totalWordCount=o.result.totalWordCount,t.value.collectionNum=o.result.collectionNum,t.value.followNum=o.result.followNum,Array.isArray(o.result.content)&&o.result.content.length>0?t.value.content=o.result.content:t.value.content=[],document.title="界筆 | "+t.value.title}catch(o){console.log(data.result),console.log(o),i({text:((g=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:g.message)||"發生錯誤",snackbarProps:{color:"red"}})}},T=async()=>{if(!p.isLogin){i({text:"請先登入才能收藏",snackbarProps:{color:"red"}});return}try{const l=await x.post("user/addBookmark",{storyId:t.value._id});h.value=l.data.hasCollection,l.data.hasCollection?t.value.collectionNum++:t.value.collectionNum=Math.max(0,t.value.collectionNum-1),i({text:l.data.hasCollection?"收藏故事":"取消收藏",snackbarProps:{color:"accent"}})}catch(l){console.error("收藏操作失败",l),i({text:"收藏操作失败",snackbarProps:{color:"red"}})}},q=async()=>{if(p.isLogin)try{const l=await x.get("user/checkBookmark/"+k.params.id);h.value=l.data.hasCollection}catch(l){console.error("檢查收藏狀態失敗",l)}};return z(async()=>{await M(),p.isLogin&&q()}),(l,g)=>(d(),f(Q,{style:{padding:"32px"}},{default:a(()=>{var o,V;return[e(y,{class:"mb-4"},{default:a(()=>[e(b,{class:"pa-4 align-center"},{default:a(()=>[e(c,{cols:"3"},{default:a(()=>[e(m,{src:t.value.image,alt:"書籍封面","aspect-ratio":"1"},null,8,["src"])]),_:1}),e(c,{cols:"9"},{default:a(()=>[e(b,null,{default:a(()=>[e(c,{cols:"12"},{default:a(()=>[s("h3",Z,r(t.value.title),1)]),_:1}),e(c,{cols:"12"},{default:a(()=>{var u;return[s("p",null,[j,s("span",D,r((u=t.value.mainAuthor)==null?void 0:u.username),1)])]}),_:1}),e(c,{cols:"12"},{default:a(()=>[s("p",null,[H,n(r(t.value.category),1)])]),_:1}),e(c,{cols:"12"},{default:a(()=>[s("p",null,[U,s("span",Y,r(t.value.state?"完結":"連載"),1)])]),_:1}),e(c,{cols:"12"},{default:a(()=>[s("p",null,[J,s("span",$,r(t.value.totalWordCount),1)])]),_:1}),e(c,{cols:"12",class:"d-flex"},{default:a(()=>[e(w,{class:"mr-2 grey--text",label:""},{default:a(()=>[n("收藏數 "+r(t.value.collectionNum),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s("div",tt,[(o=t.value.content[0])!=null&&o._id?(d(),f(_,{key:0,class:"mr-4",style:{"background-color":"#2883d3",color:"white"},to:"/stories/"+t.value._id+"/articles/"+((V=t.value.content[0])==null?void 0:V._id)},{default:a(()=>[n("開始閱讀")]),_:1},8,["to"])):P("",!0),e(_,{class:"mr-4",style:{"background-color":"#2883d3",color:"white"}},{default:a(()=>[n("章節列表")]),_:1}),e(_,{style:{"background-color":"#2883d3",color:"white"},onClick:T,text:h.value?"取消收藏":"收藏故事"},null,8,["text"])]),e(y,{class:"pa-4",style:{"margin-top":"32px"}},{default:a(()=>{var u,N;return[et,e(A,{class:"my-2"}),s("p",at,r((N=(u=t.value.content[0])==null?void 0:u.content)==null?void 0:N[0]),1),(d(!0),E(G,null,F(t.value.chapterLabels,O=>(d(),f(w,{density:"compact",color:"primary",label:!0,class:"mr-2"},{default:a(()=>[n(r(O),1)]),_:2},1024))),256))]}),_:1}),e(y,{style:{"margin-top":"32px"}},{default:a(()=>[st,e(b,{class:""},{default:a(()=>[e(c,null,{default:a(()=>[s("div",ot,[s("div",lt,[e(v,{color:"primary ",class:"me-3",size:"large"},{default:a(()=>[e(m,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAhVMz9jthsapuZL1tkdJks34QlTbXolbmg&s"})]),_:1}),ct,rt]),s("div",nt,[e(v,{color:"secondary ",class:"me-3",size:"large"},{default:a(()=>[e(m,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnRWICFHo49O2OyVoMHrqkQmAevK654iXKw&s"})]),_:1}),ut,it]),e(A),s("div",dt,[e(X,{ref:"textarea",id:"msg",placeholder:"請輸入您的留言或提問",variant:"outlined",width:"600",maxlength:"20",counter:"","auto-grow":""},{prepend:a(()=>[e(v,{color:"primary ",class:"me-1",size:"large"},{default:a(()=>[e(m,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKvt7MWE2LrmiZbNLMYdnwEW-OnNf1sam1g&s"})]),_:1})]),_:1},512),e(_,{variant:"text",class:"rounded-md bg-accent mt-2",density:"comfortable",ripple:!1,id:"submit",style:{"background-color":"#f4b942"}},{default:a(()=>[n("送出")]),_:1})])])]),_:1})]),_:1})]),_:1})]}),_:1}))}};export{vt as default};
