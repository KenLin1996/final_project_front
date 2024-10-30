import{p as me,ai as fe,aj as pe,g as ge,D as ve,ak as he,al as Ve,o as q,x as _,G as J,u as xe,am as Y,c as e,an as ye,M as be,A as _e,N as we,Q as Me,R as m,S as f,T as l,ac as ke,a4 as u,$ as p,W as i,a3 as h,ao as V,ad as E,a1 as r,U as Ce,ap as Se,P as Pe,ag as qe,ah as Le}from"./index-BIN4xXzS.js";import{c as Te,a as Z,b as I,d as Ne,e as W,u as Ue,f as y,V as ze}from"./vee-validate.esm-gN_lHLOm.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Re}from"./VContainer-fiIYO9S3.js";import{V as Ie}from"./VDivider-Dj8k0zg1.js";import{a as g,V as v}from"./VRow-Dn2zIg0j.js";import{V as Oe}from"./VTextarea-Cq6Jzfk8.js";import{V as Q,a as ee,b as H}from"./VRadioGroup-CF1hfMBx.js";import"./VList-BJwBop1F.js";import"./VMenu-BFDAHzYg.js";import"./VSelectionControl-2F1w-riH.js";import"./VChip-DQHDAmCk.js";import"./VSlideGroup-DPAmxAr-.js";const Ae=me({id:String,text:String,...fe(pe({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Be=ge()({name:"VTooltip",props:Ae(),emits:{"update:modelValue":o=>!0},setup(o,N){let{slots:w}=N;const L=ve(o,"modelValue"),{scopeId:O}=he(),U=Ve(),T=q(()=>o.id||`v-tooltip-${U}`),x=_(),z=q(()=>o.location.split(" ").length>1?o.location:o.location+" center"),c=q(()=>o.origin==="auto"||o.origin==="overlap"||o.origin.split(" ").length>1||o.location.split(" ").length>1?o.origin:o.origin+" center"),A=q(()=>o.transition?o.transition:L.value?"scale-transition":"fade-transition"),B=q(()=>J({"aria-describedby":T.value},o.activatorProps));return xe(()=>{const F=Y.filterProps(o);return e(Y,J({ref:x,class:["v-tooltip",o.class],style:o.style,id:T.value},F,{modelValue:L.value,"onUpdate:modelValue":M=>L.value=M,transition:A.value,absolute:!0,location:z.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:B.value,_disableGlobalStack:!0},O),{activator:w.activator,default:function(){var C;for(var M=arguments.length,k=new Array(M),b=0;b<M;b++)k[b]=arguments[b];return((C=w.default)==null?void 0:C.call(w,...k))??o.text}})}),ye({},x)}}),le=o=>(qe("data-v-250f43b1"),o=o(),Le(),o),$e=le(()=>u("h2",null,"創作新故事",-1)),je={class:"me-2"},De={class:"d-flex align-center w-75 h-100"},Ge={style:{height:"52%"}},Ee=le(()=>u("div",{class:"",style:{padding:"12px"}},[u("p",null,[u("strong",null,"詩")]),u("ul",null,[u("li",null,"短詩：50 字以内")]),u("p",null,[u("strong",null,"短品")]),u("ul",null,[u("li",null,"短篇散文：500 ~ 5,000 字")]),u("p",null,[u("strong",null,"小說")]),u("ul",null,[u("li",null,"短篇：1,000 ~ 20,000 字"),u("li",null,"長篇：超過 50,000 字")])],-1)),Qe={class:"d-flex align-center"},He={class:"d-flex align-center"},Je={__name:"createStory",setup(o){const N=Pe(),w=be(),L=()=>{w.isLogin?N.push("/createStory"):N.push("/login")};_e(()=>{L()});const{apiAuth:O}=ke(),U=we(),T=_(null),x=_([]),z=_([]),c=["totalWordCount","title","chapterName","content","category","chapterLabels","state","show","fileRecords"],A=Te({totalWordCount:Z().required("文章總字數必填").typeError("文章總字數必須是數字").positive("文章總字數必須是正數").integer("文章總字數必須是整數").min(1,"文章總字數不能為 0").max(5e6,"總字數不能超過 500 萬字"),title:I().required("故事名稱必填"),chapterName:I().required("章節名稱必填"),content:I().required("內容必填").test("max-length",function(){return`不能超過 ${P.value} 個字`},function(t){return t.length<=P.value}),category:I().required("作品分類必填"),chapterLabels:Ne().min(1,"至少需要選擇一個標籤").required("作品標籤必填"),state:W().required("狀態必填"),show:W().required("顯示方式必填"),voteTime:Z().required("投票時間必填").min(10)}),{handleSubmit:B,isSubmitting:F,resetForm:M}=Ue({validationSchema:A,initialValues:{totalWordCount:0,title:"",chapterName:"",content:"",voteTime:1e3*5*60,category:"",chapterLabels:[],state:!1,show:!0}}),k=y("title"),b=y("chapterName"),C=y("voteTime"),$=y("category"),j=y("chapterLabels"),D=y("state"),G=y("show"),R=y("totalWordCount"),S=y("content"),P=q(()=>{const t=Number(R.value.value);return Math.max(1,Math.floor(t/5))}),te=()=>{S.value.value.length>P.value&&(S.value.value=S.value.value.slice(0,P.value))},ae=_(["愛情","奇幻玄幻","科幻未來","驚悚推理","靈異恐怖","武俠仙俠","都市","LGBTQ+","勵志成長","幽默諷喻","影視","同人","網遊","歷史傳記","軍事戰爭","生活風格","親子共享","藝術設計","科普","商業理財","文藝評論","其他"]),se=_(["不限","戀愛","異界","校園","戰鬥","冒險","魔法","異能","超能力","超自然","重生","穿越","爽文/輕鬆","搞笑","虐心","復仇","靈異神怪","暗黑","恐怖","奇幻","異世界轉生","逆襲","未來世界","英雄","百合","同志","日常","科幻","成長","家庭","友情","偵探","職場","青梅竹馬","後宮","妖怪","節操","二創","悲劇","喜劇","異國","輕小說","心理","神話","蒸汽龐克","時間旅行","機器人","人工智能","動物"]),re=_([{title:"10 秒",value:1e3*10},{title:"20 秒",value:1e3*20},{title:"5 分鐘",value:1e3*5*60},{title:"10 分鐘",value:1e3*10*60},{title:"30 分鐘",value:1e3*30*60},{title:"1 小時",value:1e3*60*60},{title:"2 小時",value:1e3*2*60*60},{title:"4 小時",value:1e3*4*60*60},{title:"8 小時",value:1e3*8*60*60},{title:"12 小時",value:1e3*12*60*60},{title:"24 小時",value:1e3*24*60*60},{title:"36 小時",value:1e3*36*60*60}]),oe=()=>{M(),T.value.deleteFileRecord()},ne=t=>{let a,d,s;if(t<=1e3)a=Math.ceil(t/200),d=Math.ceil(t/a),s=50;else if(t<=4e4)a=Math.ceil(t/3e3),d=Math.ceil(t/a),s=300;else if(t<=1e5)a=Math.ceil(t/5e3),d=Math.ceil(t/a),s=500;else if(t<=3e5)a=Math.ceil(t/7e3),d=Math.ceil(t/a),s=1e3;else if(t<=6e5)a=Math.ceil(t/1e4),d=Math.ceil(t/a),s=2e3;else if(t<=1e6)a=Math.ceil(t/15e3),d=Math.ceil(t/a),s=3e3;else if(t<=2e6)a=Math.ceil(t/2e4),d=Math.ceil(t/a),s=4e3;else if(t<=5e6)a=Math.ceil(t/3e4),d=Math.ceil(t/a),s=5e3;else throw new Error("總字數超出範圍 (最多 5,000,000 字)。");return{chapters:a,wordsPerChapter:d,extendWordLimit:s}},ie=t=>t.length,ue=B(async t=>{var s,K,X;t.totalWordCount=Number(t.totalWordCount);const a=ne(t.totalWordCount),d=ie(t.content);if((s=x.value[0])!=null&&s.error){console.log("文件錯誤：",x.value[0].error);return}try{const n=new FormData;n.append("totalWordCount",t.totalWordCount),n.append("title",t.title),n.append("chapterName",t.chapterName),n.append("content",t.content),n.append("voteTime",t.voteTime),n.append("category",t.category);for(const ce of t.chapterLabels)n.append("chapterLabels",ce);n.append("state",t.state),n.append("show",t.show),x.value.length>0&&n.append("image",x.value[0].file),n.append("chapters",a.chapters),n.append("wordsPerChapter",a.wordsPerChapter),n.append("extendWordLimit",a.extendWordLimit),n.append("currentChapterWordCount",d),console.log("FormData 內容：",Object.fromEntries(n));const de=await O.post("/story",n);console.log("API 響應：",de.data),U({text:"新增成功",snackbarProps:{color:"green"}}),oe()}catch(n){console.error("提交表單時發生錯誤:",n),U({text:((X=(K=n==null?void 0:n.response)==null?void 0:K.data)==null?void 0:X.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(t,a)=>{const d=Me("vue-file-agent");return m(),f(Re,{style:{padding:"32px"}},{default:l(()=>[$e,e(Ie,{class:"mb-5"}),e(ze,{onSubmit:Se(r(ue),["prevent"]),disabled:r(F),style:{padding:"10px 20px"}},{default:l(()=>[e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[u("div",je,[c.includes("totalWordCount")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-6 mb-0"},{default:l(()=>[i("總字數")]),_:1})]),u("div",De,[e(E,{type:"number",class:"flex-grow-1",modelValue:r(R).value.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r(R).value.value=s),"error-messages":r(R).errorMessage.value,maxlength:5e6,required:""},null,8,["modelValue","error-messages"]),u("div",Ge,[e(Be,{location:"bottom"},{activator:l(({props:s})=>[e(p,J({class:"mdi mdi-lightbulb-outline"},s,{style:{color:"darkorange"}}),null,16)]),default:l(()=>[Ee]),_:1})])])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("title")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("故事名稱")]),_:1}),e(E,{class:"flex-grow-1",modelValue:r(k).value.value,"onUpdate:modelValue":a[1]||(a[1]=s=>r(k).value.value=s),"error-messages":r(k).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("chapterName")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("章節名稱")]),_:1}),e(E,{class:"flex-grow-1",modelValue:r(b).value.value,"onUpdate:modelValue":a[2]||(a[2]=s=>r(b).value.value=s),"error-messages":r(b).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("content")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("起始故事")]),_:1}),e(Oe,{class:"flex-grow-1",counter:P.value,modelValue:r(S).value.value,"onUpdate:modelValue":a[3]||(a[3]=s=>r(S).value.value=s),"error-messages":r(S).errorMessage.value,maxlength:P.value,onInput:te,"auto-grow":"",required:""},null,8,["counter","modelValue","error-messages","maxlength"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("投票時間")]),_:1}),e(Q,{class:"flex-grow-1","hide-details":"",modelValue:r(C).value.value,"onUpdate:modelValue":a[4]||(a[4]=s=>r(C).value.value=s),"error-messages":r(C).errorMessage.value,items:re.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("作品分類")]),_:1}),e(Q,{class:"flex-grow-1","hide-details":"",modelValue:r($).value.value,"onUpdate:modelValue":a[5]||(a[5]=s=>r($).value.value=s),"error-messages":r($).errorMessage.value,items:ae.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("chapterLabels")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("作品標籤")]),_:1}),e(Q,{class:"flex-grow-1",multiple:"",chips:"","hide-details":"",modelValue:r(j).value.value,"onUpdate:modelValue":a[6]||(a[6]=s=>r(j).value.value=s),"error-messages":r(j).errorMessage.value,items:se.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("state")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("故事狀態")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-2",row:"","hide-details":"",modelValue:r(D).value.value,"onUpdate:modelValue":a[7]||(a[7]=s=>r(D).value.value=s),"error-messages":r(D).errorMessage.value},{default:l(()=>[u("div",Qe,[e(H,{label:"連載中",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("show")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[i("mdi-asterisk")]),_:1})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("顯示方式")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-1",row:"","hide-details":"",modelValue:r(G).value.value,"onUpdate:modelValue":a[8]||(a[8]=s=>r(G).value.value=s),"error-messages":r(G).errorMessage.value},{default:l(()=>[u("div",He,[e(H,{label:"公開",value:!0,class:"me-4"}),e(H,{label:"隱藏",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex align-center"},{default:l(()=>[c.includes("fileRecords")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px",icon:"mdi-asterisk"})):h("",!0),e(V,{class:"me-4 mb-0"},{default:l(()=>[i("封面圖片")]),_:1}),e(d,{modelValue:x.value,"onUpdate:modelValue":a[9]||(a[9]=s=>x.value=s),"raw-model-value":z.value,"onUpdate:rawModelValue":a[10]||(a[10]=s=>z.value=s),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:T},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(v,{cols:"12",class:"d-flex justify-center"},{default:l(()=>[e(Ce,{type:"submit",loading:r(F),style:{"background-color":"#4e9194",color:"#ffffff"}},{default:l(()=>[i("發布")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})}}},il=Fe(Je,[["__scopeId","data-v-250f43b1"]]);export{il as default};
