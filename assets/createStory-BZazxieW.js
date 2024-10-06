import{p as me,aC as fe,aD as pe,g as ve,D as ge,aE as he,aF as xe,o as q,x as _,G as J,u as Ve,aG as Y,c as e,aH as ye,M as be,A as _e,N as we,P as Me,Q as m,R as f,S as l,ab as ke,a2 as n,_ as p,U as u,a1 as h,aI as x,af as j,a0 as r,T as Ce,ae as Se,a5 as Pe,ag as qe,ah as Le}from"./index-D-j42ziH.js";import{a as Ne,d as Z,c as I,e as Te,f as W,u as Ue,b as y}from"./vee-validate.esm-STRXnF5i.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ze}from"./VContainer-CGAFbPNq.js";import{V as Re}from"./VDivider-C-0_hfi6.js";import{V as v,a as g}from"./VRow-kxAzJGzz.js";import{V as Ie}from"./VTextarea-B_sxWLzy.js";import{V as H,a as ee,b as Q}from"./VRadioGroup-DztVVgEt.js";import{V as Oe}from"./VForm-B0joBIqd.js";import"./VList-DdmDu8wS.js";import"./VMenu-h1IQfDTu.js";import"./VSelectionControl-BaHoNh_N.js";import"./VChip-UW99AWWi.js";import"./VSlideGroup-BLB6tykh.js";const Ae=me({id:String,text:String,...fe(pe({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Be=ve()({name:"VTooltip",props:Ae(),emits:{"update:modelValue":o=>!0},setup(o,T){let{slots:w}=T;const L=ge(o,"modelValue"),{scopeId:O}=he(),U=xe(),N=q(()=>o.id||`v-tooltip-${U}`),V=_(),F=q(()=>o.location.split(" ").length>1?o.location:o.location+" center"),d=q(()=>o.origin==="auto"||o.origin==="overlap"||o.origin.split(" ").length>1||o.location.split(" ").length>1?o.origin:o.origin+" center"),A=q(()=>o.transition?o.transition:L.value?"scale-transition":"fade-transition"),B=q(()=>J({"aria-describedby":N.value},o.activatorProps));return Ve(()=>{const z=Y.filterProps(o);return e(Y,J({ref:V,class:["v-tooltip",o.class],style:o.style,id:N.value},z,{modelValue:L.value,"onUpdate:modelValue":M=>L.value=M,transition:A.value,absolute:!0,location:F.value,origin:d.value,persistent:!0,role:"tooltip",activatorProps:B.value,_disableGlobalStack:!0},O),{activator:w.activator,default:function(){var C;for(var M=arguments.length,k=new Array(M),b=0;b<M;b++)k[b]=arguments[b];return((C=w.default)==null?void 0:C.call(w,...k))??o.text}})}),ye({},V)}}),le=o=>(qe("data-v-394c7d23"),o=o(),Le(),o),$e=le(()=>n("h2",null,"創作新故事",-1)),De={class:"me-2"},Ee={class:"d-flex align-center"},Ge=le(()=>n("div",{class:"tooltip-content"},[n("p",null,[n("strong",null,"詩")]),n("ul",null,[n("li",null,"短詩：50字以内"),n("li",null,"長詩：數百到數千字")]),n("p",null,[n("strong",null,"小說")]),n("ul",null,[n("li",null,"短篇小說：1,000到20,000字（通常3,000到7,500字之間）"),n("li",null,"中篇小說：20,000到50,000字"),n("li",null,"長篇小說：超過50,000字（通常80,000到120,000字之間）")]),n("p",null,[n("strong",null,"短品（散文、隨筆等）")]),n("ul",null,[n("li",null,"短篇散文：500到2,000字"),n("li",null,"隨筆：1,000到5,000字")])],-1)),je={class:"d-flex align-center"},He={class:"d-flex align-center"},Qe={__name:"createStory",setup(o){const T=Pe(),w=be(),L=()=>{w.isLogin?T.push("/createStory"):T.push("/login")};_e(()=>{L()});const{apiAuth:O}=ke(),U=we(),N=_(null),V=_([]),F=_([]),d=["totalWordCount","title","chapterName","content","category","chapterLabels","state","show","fileRecords"],A=Ne({totalWordCount:Z().required("文章總字數必填").typeError("文章總字數必須是數字").positive("文章總字數必須是正數").integer("文章總字數必須是整數").min(1,"文章總字數不能為 0").max(5e6,"總字數不能超過 500 萬字"),title:I().required("故事名稱必填"),chapterName:I().required("章節名稱必填"),content:I().required("內容必填").test("max-length",function(){return`不能超過 ${P.value} 個字`},function(t){return t.length<=P.value}),category:I().required("作品分類必填"),chapterLabels:Te().min(1,"至少需要選擇一個標籤").required("作品標籤必填"),state:W().required("狀態必填"),show:W().required("顯示方式必填"),voteTime:Z().required("投票時間必填").min(10)}),{handleSubmit:B,isSubmitting:z,resetForm:M}=Ue({validationSchema:A,initialValues:{totalWordCount:0,title:"",chapterName:"",content:"",voteTime:1e3*5*60,category:"",chapterLabels:[],state:!1,show:!0}}),k=y("title"),b=y("chapterName"),C=y("voteTime"),$=y("category"),D=y("chapterLabels"),E=y("state"),G=y("show"),R=y("totalWordCount"),S=y("content"),P=q(()=>{const t=Number(R.value.value);return Math.max(1,Math.floor(t/10))}),te=()=>{S.value.value.length>P.value&&(S.value.value=S.value.value.slice(0,P.value))},ae=_(["文藝評論","商業理財","藝術設計","人文科普","心靈養生","生活風格","親子共享","傳記/文學史","羅曼史","校園愛情","武俠仙俠","歷史","驚悚推理","奇幻","恐怖靈異","影視","軍事戰爭/災難冒險","溫馨勵志/成長療癒","幽默/諷喻","同志","漫畫","同人","都市","玄幻","科幻","網遊","都會愛情","古代愛情","百合","其他"]),se=_(["不限","爽文","心情抒發","療癒","青梅竹馬","戰鬥","異界","戀愛","日常","校園","搞笑","後宮","異能","妖怪","妹控","節操","二創","百合","虐心","甜文","悲劇","喜劇","輕鬆","暗黑","清水","穿越","重生","靈異神怪","異國","冒險","女性向","男性向","輕小說","同志","恐怖"]),re=_([{title:"10 秒",value:1e3*10},{title:"20 秒",value:1e3*20},{title:"5 分鐘",value:1e3*5*60},{title:"10 分鐘",value:1e3*10*60},{title:"30 分鐘",value:1e3*30*60},{title:"1 小時",value:1e3*60*60},{title:"2 小時",value:1e3*2*60*60},{title:"4 小時",value:1e3*4*60*60},{title:"8 小時",value:1e3*8*60*60},{title:"12 小時",value:1e3*12*60*60},{title:"24 小時",value:1e3*24*60*60},{title:"36 小時",value:1e3*36*60*60}]),oe=()=>{M(),N.value.deleteFileRecord()},ne=t=>{let a,c,s;if(t<=1e3)a=Math.ceil(t/200),c=Math.ceil(t/a),s=50;else if(t<=4e4)a=Math.ceil(t/3e3),c=Math.ceil(t/a),s=300;else if(t<=1e5)a=Math.ceil(t/5e3),c=Math.ceil(t/a),s=500;else if(t<=3e5)a=Math.ceil(t/7e3),c=Math.ceil(t/a),s=1e3;else if(t<=6e5)a=Math.ceil(t/1e4),c=Math.ceil(t/a),s=2e3;else if(t<=1e6)a=Math.ceil(t/15e3),c=Math.ceil(t/a),s=3e3;else if(t<=2e6)a=Math.ceil(t/2e4),c=Math.ceil(t/a),s=4e3;else if(t<=5e6)a=Math.ceil(t/3e4),c=Math.ceil(t/a),s=5e3;else throw new Error("總字數超出範圍 (最多 5,000,000 字)。");return{chapters:a,wordsPerChapter:c,extendWordLimit:s}},ie=t=>t.length,ue=B(async t=>{var s,K,X;t.totalWordCount=Number(t.totalWordCount);const a=ne(t.totalWordCount),c=ie(t.content);if((s=V.value[0])!=null&&s.error){console.log("文件錯誤：",V.value[0].error);return}try{const i=new FormData;i.append("totalWordCount",t.totalWordCount),i.append("title",t.title),i.append("chapterName",t.chapterName),i.append("content",t.content),i.append("voteTime",t.voteTime),i.append("category",t.category);for(const de of t.chapterLabels)i.append("chapterLabels",de);i.append("state",t.state),i.append("show",t.show),V.value.length>0&&i.append("image",V.value[0].file),i.append("chapters",a.chapters),i.append("wordsPerChapter",a.wordsPerChapter),i.append("extendWordLimit",a.extendWordLimit),i.append("currentChapterWordCount",c),console.log("FormData 內容：",Object.fromEntries(i));const ce=await O.post("/story",i);console.log("API 響應：",ce.data),U({text:"新增成功",snackbarProps:{color:"green"}}),oe()}catch(i){console.error("提交表單時發生錯誤:",i),U({text:((X=(K=i==null?void 0:i.response)==null?void 0:K.data)==null?void 0:X.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(t,a)=>{const c=Me("vue-file-agent");return m(),f(ze,{style:{padding:"32px"}},{default:l(()=>[$e,e(Re,{class:"mb-5"}),e(Oe,{onSubmit:Se(r(ue),["prevent"]),disabled:r(z),style:{padding:"10px 20px"}},{default:l(()=>[e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center w-100"},{default:l(()=>[n("div",De,[d.includes("totalWordCount")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("總字數")]),_:1})]),n("div",Ee,[e(j,{"max-width":"600px",type:"number",class:"flex-grow-1",modelValue:r(R).value.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r(R).value.value=s),"error-messages":r(R).errorMessage.value,maxlength:5e6,required:""},null,8,["modelValue","error-messages"]),e(Be,{location:"bottom"},{activator:l(({props:s})=>[e(p,J({class:"mdi mdi-lightbulb-outline"},s),null,16)]),default:l(()=>[Ge]),_:1})])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("title")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("故事名")]),_:1}),e(j,{"max-width":"600px",class:"flex-grow-1",modelValue:r(k).value.value,"onUpdate:modelValue":a[1]||(a[1]=s=>r(k).value.value=s),"error-messages":r(k).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("chapterName")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("章節名稱")]),_:1}),e(j,{class:"flex-grow-1",modelValue:r(b).value.value,"onUpdate:modelValue":a[2]||(a[2]=s=>r(b).value.value=s),"error-messages":r(b).errorMessage.value,required:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("content")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("起始故事")]),_:1}),e(Ie,{class:"flex-grow-1",counter:P.value,modelValue:r(S).value.value,"onUpdate:modelValue":a[3]||(a[3]=s=>r(S).value.value=s),"error-messages":r(S).errorMessage.value,maxlength:P.value,onInput:te,required:""},null,8,["counter","modelValue","error-messages","maxlength"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("投票時間")]),_:1}),e(H,{class:"flex-grow-1","hide-details":"",modelValue:r(C).value.value,"onUpdate:modelValue":a[4]||(a[4]=s=>r(C).value.value=s),"error-messages":r(C).errorMessage.value,items:re.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("category")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("作品分類")]),_:1}),e(H,{class:"flex-grow-1","hide-details":"",modelValue:r($).value.value,"onUpdate:modelValue":a[5]||(a[5]=s=>r($).value.value=s),"error-messages":r($).errorMessage.value,items:ae.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("chapterLabels")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("作品標籤")]),_:1}),e(H,{class:"flex-grow-1",multiple:"",chips:"","hide-details":"",modelValue:r(D).value.value,"onUpdate:modelValue":a[6]||(a[6]=s=>r(D).value.value=s),"error-messages":r(D).errorMessage.value,items:se.value,required:""},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("state")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("故事狀態")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-2",row:"","hide-details":"",modelValue:r(E).value.value,"onUpdate:modelValue":a[7]||(a[7]=s=>r(E).value.value=s),"error-messages":r(E).errorMessage.value},{default:l(()=>[n("div",je,[e(Q,{label:"連載中",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("show")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px"},{default:l(()=>[u("mdi-asterisk")]),_:1})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("顯示方式")]),_:1}),e(ee,{class:"d-flex align-center flex-grow-1",row:"","hide-details":"",modelValue:r(G).value.value,"onUpdate:modelValue":a[8]||(a[8]=s=>r(G).value.value=s),"error-messages":r(G).errorMessage.value},{default:l(()=>[n("div",He,[e(Q,{label:"公開",value:!0,class:"me-4"}),e(Q,{label:"隱藏",value:!1})])]),_:1},8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex align-center"},{default:l(()=>[d.includes("fileRecords")?(m(),f(p,{key:0,class:"me-2",style:{color:"red"},size:"12px",icon:"mdi-asterisk"})):h("",!0),e(x,{class:"me-4 mb-0"},{default:l(()=>[u("封面圖片")]),_:1}),e(c,{modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=s=>V.value=s),"raw-model-value":F.value,"onUpdate:rawModelValue":a[10]||(a[10]=s=>F.value=s),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:N},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(g,{cols:"12",class:"d-flex justify-center"},{default:l(()=>[e(Ce,{type:"submit",loading:r(z),style:{"background-color":"#4e9194",color:"#ffffff"}},{default:l(()=>[u("發布")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})}}},il=Fe(Qe,[["__scopeId","data-v-394c7d23"]]);export{il as default};
