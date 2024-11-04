import{p as me,az as fe,aA as pe,g as ge,D as ve,Z as he,aB as xe,o as q,x as b,G as Q,u as Ve,aC as X,c as e,aD as ye,a2 as _e,A as be,a3 as we,a6 as Me,a7 as m,aa as f,ac as l,a5 as ke,at as Ce,ad as u,ak as p,ae as i,ai as h,aE as x,au as j,a9 as r,J as Se,aF as Pe,ax as qe,ay as Le}from"./index-CMDPz1iI.js";import{c as Te,a as Y,b as I,d as Ne,e as W,u as Ue,f as y,V as ze}from"./vee-validate.esm-BC-4pRiV.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Re}from"./VContainer-g3jdrtIP.js";import{V as Ie}from"./VDivider-DaNqOWKQ.js";import{a as g,V as v}from"./VRow-C3nHuvOV.js";import{V as Ae}from"./VTextarea-DXlOjkcZ.js";import{V as H,a as ee,b as J}from"./VRadioGroup-DSywdmS8.js";import"./VList-BjvGmilH.js";import"./VMenu-DD6-aPbs.js";import"./VSelectionControl-megJJnPQ.js";import"./VChip-CbLGqeyu.js";import"./VSlideGroup-CUhd6x8O.js";const Be=me({id:String,text:String,...fe(pe({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Oe=ge()({name:"VTooltip",props:Be(),emits:{"update:modelValue":o=>!0},setup(o,L){let{slots:w}=L;const T=ve(o,"modelValue"),{scopeId:A}=he(),U=xe(),N=q(()=>o.id||`v-tooltip-${U}`),V=b(),z=q(()=>o.location.split(" ").length>1?o.location:o.location+" center"),c=q(()=>o.origin==="auto"||o.origin==="overlap"||o.origin.split(" ").length>1||o.location.split(" ").length>1?o.origin:o.origin+" center"),B=q(()=>o.transition?o.transition:T.value?"scale-transition":"fade-transition"),O=q(()=>Q({"aria-describedby":N.value},o.activatorProps));return Ve(()=>{const F=X.filterProps(o);return e(X,Q({ref:V,class:["v-tooltip",o.class],style:o.style,id:N.value},F,{modelValue:T.value,"onUpdate:modelValue":M=>T.value=M,transition:B.value,absolute:!0,location:z.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:O.value,_disableGlobalStack:!0},A),{activator:w.activator,default:function(){var C;for(var M=arguments.length,k=new Array(M),_=0;_<M;_++)k[_]=arguments[_];return((C=w.default)==null?void 0:C.call(w,...k))??o.text}})}),ye({},V)}}),le=o=>(qe("data-v-0507d325"),o=o(),Le(),o),$e=le(()=>u("h2",null,"創作新故事",-1)),De={class:"me-2"},Ee={class:"d-flex align-center w-75 h-100"},Ge={style:{height:"52%"}},je=le(()=>u("div",{class:"",style:{padding:"12px"}},[u("p",null,[u("strong",null,"詩")]),u("ul",null,[u("li",null,"短詩：50 字以内")]),u("p",null,[u("strong",null,"短品")]),u("ul",null,[u("li",null,"短篇散文：500 ~ 5,000 字")]),u("p",null,[u("strong",null,"小說")]),u("ul",null,[u("li",null,"短篇：1,000 ~ 20,000 字"),u("li",null,"長篇：超過 50,000 字")])],-1)),He={class:"d-flex align-center"},Je={class:"d-flex align-center"},Qe={__name:"createStory",setup(o){const L=ke(),w=_e(),T=()=>{w.isLogin?L.push("/createStory"):L.push("/login")};be(()=>{T()});const{apiAuth:A}=Ce(),U=we(),N=b(null),V=b([]),z=b([]),c=["totalWordCount","title","chapterName","content","category","chapterLabels","state","show","fileRecords"],B=Te({totalWordCount:Y().required("文章總字數必填").typeError("文章總字數必須是數字").positive("文章總字數必須是正數").integer("文章總字數必須是整數").min(1,"文章總字數不能為 0").max(5e6,"總字數不能超過 500 萬字"),title:I().required("故事名稱必填"),chapterName:I().required("章節名稱必填"),content:I().required("內容必填").test("max-length",function(){return`不能超過 ${P.value} 個字`},function(a){return a.length<=P.value}),category:I().required("作品分類必填"),chapterLabels:Ne().min(1,"至少需要選擇一個標籤").required("作品標籤必填"),state:W().required("狀態必填"),show:W().required("顯示方式必填"),voteTime:Y().required("投票時間必填").min(10)}),{handleSubmit:O,isSubmitting:F,resetForm:M}=Ue({validationSchema:B,initialValues:{totalWordCount:0,title:"",chapterName:"",content:"",voteTime:1e3*5*60,category:"",chapterLabels:[],state:!1,show:!0}}),k=y("title"),_=y("chapterName"),C=y("voteTime"),$=y("category"),D=y("chapterLabels"),E=y("state"),G=y("show"),R=y("totalWordCount"),S=y("content"),P=q(()=>{const a=Number(R.value.value);return Math.max(1,Math.floor(a/5))}),ae=()=>{S.value.value.length>P.value&&(S.value.value=S.value.value.slice(0,P.value))},te=b(["愛情","奇幻玄幻","科幻未來","驚悚推理","靈異恐怖","武俠仙俠","都市","心情抒發","LGBTQ+","勵志成長","幽默諷喻","影視","同人","網遊","歷史傳記","軍事戰爭","生活風格","親子共享","藝術設計","科普","商業理財","文藝評論","其他"]),se=b(["不限","戀愛","異界","校園","戰鬥","冒險","魔法","異能","超能力","超自然","重生","穿越","爽文/輕鬆","搞笑","虐心","復仇","靈異神怪","暗黑","恐怖","奇幻","異世界轉生","逆襲","未來世界","英雄","百合","同志","日常","科幻","成長","家庭","友情","偵探","職場","青梅竹馬","後宮","妖怪","節操","二創","悲劇","喜劇","異國","輕小說","心理","神話","蒸汽龐克","時間旅行","機器人","人工智能","動物","快樂","悲傷","焦慮","平靜","懷舊","希望","孤獨","愛","失落","感激","興奮","迷惘","安慰","熱情","自在"]),re=b([{title:"10 秒",value:1e3*10},{title:"20 秒",value:1e3*20},{title:"5 分鐘",value:1e3*5*60},{title:"10 分鐘",value:1e3*10*60},{title:"30 分鐘",value:1e3*30*60},{title:"1 小時",value:1e3*60*60},{title:"2 小時",value:1e3*2*60*60},{title:"4 小時",value:1e3*4*60*60},{title:"8 小時",value:1e3*8*60*60},{title:"12 小時",value:1e3*12*60*60},{title:"24 小時",value:1e3*24*60*60},{title:"36 小時",value:1e3*36*60*60}]),oe=()=>{M(),N.value.deleteFileRecord()},ne=a=>{let t,d,s;if(a<=1e3)t=Math.ceil(a/200),d=Math.ceil(a/t),s=50;else if(a<=4e4)t=Math.ceil(a/3e3),d=Math.ceil(a/t),s=300;else if(a<=1e5)t=Math.ceil(a/5e3),d=Math.ceil(a/t),s=500;else if(a<=3e5)t=Math.ceil(a/7e3),d=Math.ceil(a/t),s=1e3;else if(a<=6e5)t=Math.ceil(a/1e4),d=Math.ceil(a/t),s=2e3;else if(a<=1e6)t=Math.ceil(a/15e3),d=Math.ceil(a/t),s=3e3;else if(a<=2e6)t=Math.ceil(a/2e4),d=Math.ceil(a/t),s=4e3;else if(a<=5e6)t=Math.ceil(a/3e4),d=Math.ceil(a/t),s=5e3;else throw new Error("總字數超出範圍 (最多 5,000,000 字)。");return{chapters:t,wordsPerChapter:d,extendWordLimit:s}},ie=a=>a.length,ue=O(async a=>{var s,Z,K;a.totalWordCount=Number(a.totalWordCount);const t=ne(a.totalWordCount),d=ie(a.content);if((s=V.value[0])!=null&&s.error){console.log("文件錯誤：",V.value[0].error);return}try{const n=new FormData;n.append("totalWordCount",a.totalWordCount),n.append("title",a.title),n.append("chapterName",a.chapterName),n.append("content",a.content),n.append("voteTime",a.voteTime),n.append("category",a.category);for(const ce of a.chapterLabels)n.append("chapterLabels",ce);n.append("state",a.state),n.append("show",a.show),V.value.length>0&&n.append("image",V.value[0].file),n.append("chapters",t.chapters),n.append("wordsPerChapter",t.wordsPerChapter),n.append("extendWordLimit",t.extendWordLimit),n.append("currentChapterWordCount",d),console.log("FormData 內容：",Object.fromEntries(n));const de=await A.post("/story",n);console.log("API 響應：",de.data),U({text:"新增成功",snackbarProps:{color:"green"}}),oe(),L.push("/")}catch(n){console.error("提交表單時發生錯誤:",n),U({text:((K=(Z=n==null?void 0:n.response)==null?void 0:Z.data)==null?void 0:K.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(a,t)=>{const d=Me("vue-file-agent");return m(),f(Re,{style:{padding:"32px"}},{default:l(()=>[$e,e(Ie,{class:"mb-5"}),e(ze,{onSubmit:Pe(r(ue),["prevent"]),disabled:r(F),style:{padding:"10px 20px"}},{default:l(()=>[e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[u("div",De,[c.includes("totalWordCount")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-6 mb-0"},{default:l(()=>[i("總字數")]),_:1})]),u("div",Ee,[e(j,{type:"number",class:"flex-grow-1",modelValue:r(R).value.value,"onUpdate:modelValue":t[0]||(t[0]=s=>r(R).value.value=s),"error-messages":r(R).errorMessage.value,maxlength:5e6,required:""},null,8,["modelValue","error-messages"]),u("div",Ge,[e(Oe,{location:"bottom"},{activator:l(({props:s})=>[e(p,Q({class:"mdi mdi-lightbulb-outline"},s,{style:{color:"darkorange"}}),null,16)]),default:l(()=>[je]),_:1})])])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("title")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("故事名稱")]),_:1}),e(j,{class:"flex-grow-1",modelValue:r(k).value.value,"onUpdate:modelValue":t[1]||(t[1]=s=>r(k).value.value=s),"error-messages":r(k).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("chapterName")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("章節名稱")]),_:1}),e(j,{class:"flex-grow-1",modelValue:r(_).value.value,"onUpdate:modelValue":t[2]||(t[2]=s=>r(_).value.value=s),"error-messages":r(_).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("content")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("起始故事")]),_:1}),e(Ae,{class:"flex-grow-1",counter:P.value,modelValue:r(S).value.value,"onUpdate:modelValue":t[3]||(t[3]=s=>r(S).value.value=s),"error-messages":r(S).errorMessage.value,maxlength:P.value,onInput:ae,"auto-grow":"",required:""},null,8,["counter","modelValue","error-messages","maxlength"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("投票時間")]),_:1}),e(H,{class:"flex-grow-1","hide-details":"",modelValue:r(C).value.value,"onUpdate:modelValue":t[4]||(t[4]=s=>r(C).value.value=s),"error-messages":r(C).errorMessage.value,items:re.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("作品分類")]),_:1}),e(H,{class:"flex-grow-1","hide-details":"",modelValue:r($).value.value,"onUpdate:modelValue":t[5]||(t[5]=s=>r($).value.value=s),"error-messages":r($).errorMessage.value,items:te.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("chapterLabels")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("作品標籤")]),_:1}),e(H,{class:"flex-grow-1",multiple:"",chips:"","hide-details":"",modelValue:r(D).value.value,"onUpdate:modelValue":t[6]||(t[6]=s=>r(D).value.value=s),"error-messages":r(D).errorMessage.value,items:se.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("state")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("故事狀態")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-2",row:"","hide-details":"",modelValue:r(E).value.value,"onUpdate:modelValue":t[7]||(t[7]=s=>r(E).value.value=s),"error-messages":r(E).errorMessage.value},{default:l(()=>[u("div",He,[e(J,{label:"連載中",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("show")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("顯示方式")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-1",row:"","hide-details":"",modelValue:r(G).value.value,"onUpdate:modelValue":t[8]||(t[8]=s=>r(G).value.value=s),"error-messages":r(G).errorMessage.value},{default:l(()=>[u("div",Je,[e(J,{label:"公開",value:!0,class:"me-4"}),e(J,{label:"隱藏",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("fileRecords")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px",icon:"mdi-asterisk"})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[i("封面圖片")]),_:1}),e(d,{modelValue:V.value,"onUpdate:modelValue":t[9]||(t[9]=s=>V.value=s),"raw-model-value":z.value,"onUpdate:rawModelValue":t[10]||(t[10]=s=>z.value=s),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:N},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex justify-center"},{default:l(()=>[e(Se,{type:"submit",loading:r(F),style:{"background-color":"#4e9194",color:"#ffffff"}},{default:l(()=>[i("發布")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})}}},il=Fe(Qe,[["__scopeId","data-v-0507d325"]]);export{il as default};
