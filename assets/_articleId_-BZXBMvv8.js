import{bM as u,x as p,Q as _,R as a,P as m,a0 as s,Y as n,c as o,T as c,S as r,ac as h}from"./index-BQtH6iZV.js";import{V as x}from"./VContainer-BM79zw4O.js";const f={class:"my-4",style:{"white-space":"pre-line","word-wrap":"break-word"}},y={class:"text-center"},b={__name:"[articleId]",setup(v){const{api:i}=h(),d=u(),e=p({_id:"",chapterName:"",content:[]});return(async()=>{try{const{data:t}=await i.get("/story/"+d.params.id);e.value._id=t.result._id,e.value.chapterName=t.result.chapterName,e.value.content=t.result.content,document.title="界筆 | "+e.value.chapterName}catch(t){console.log(t)}})(),(t,N)=>(m(),_(x,{style:{padding:"32px","min-height":"480px"},class:"d-flex flex-column justify-space-between"},{default:a(()=>{var l;return[s("div",null,[s("h2",null,n(e.value.chapterName),1),s("p",f,n((l=e.value.content[0])==null?void 0:l.content),1)]),s("div",y,[o(r,{class:"mx-2"},{default:a(()=>[c("上一章")]),_:1}),o(r,{class:"mx-2",to:"/stories/"+e.value._id,style:{"background-color":"rgb(40, 131, 211)",color:"white"}},{default:a(()=>[c("回故事頁")]),_:1},8,["to"]),o(r,{class:"mx-2"},{default:a(()=>[c("下一章")]),_:1})])]}),_:1}))}};export{b as default};
