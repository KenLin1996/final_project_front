import{a2 as C,a3 as F,x as P,a6 as j,a7 as B,aa as M,ac as a,a5 as U,c as e,V as q,J as u,ae as d,a9 as o,aF as A,au as p}from"./index-Bzmhv8R7.js";import{_ as E}from"./stor-genLogo-CZoS3VG_.js";import{c as I,b as f,u as N,f as g,V as R}from"./vee-validate.esm-BtqnpI9n.js";import{v as T}from"./index-Etsc8UVN.js";import{V as v}from"./VContainer-cMmaaPYi.js";import{a as $,V as b}from"./VRow-BUWxvBY3.js";import{V as z}from"./VDivider-BRp88LzG.js";const W={__name:"login",setup(D){const x=U(),V=C(),c=F(),w=I({email:f().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",l=>T.isEmail(l)),password:f().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),t=P(!1),y=()=>{t.value=!t.value},{handleSubmit:_,isSubmitting:m}=N({validationSchema:w}),r=g("email"),n=g("password"),h=_(async l=>{const s=await V.login(l);s==="登入成功"?(c({text:s,snackbarProps:{color:"green"}}),x.push("/")):c({text:s,snackbarProps:{color:"red"}})}),k=async()=>{window.location.href="http://localhost:4000/externalAuth/google"};return(l,s)=>{const S=j("router-link");return B(),M(v,{class:"d-flex align-center justify-center h-100 mt-0 mb-0",fluid:""},{default:a(()=>[e(v,{class:"text-center pa-8 rounded-lg elevation-4",style:{width:"500px","background-color":"white",border:"1px solid rgba(255, 255, 255, 0.1)"}},{default:a(()=>[e($,{class:"d-flex flex-column justify-center"},{default:a(()=>[e(b,{class:"d-flex flex-column justify-center align-center my-2"},{default:a(()=>[e(S,{to:"/"},{default:a(()=>[e(q,{class:"my-4",width:50,cover:"",src:E})]),_:1}),e(u,{outlined:"",border:"",style:{"background-color":"#ffffff"},color:"#000000","prepend-icon":"mdi-google",class:"my-2 elevation-1 w-66 h-25",variant:"plain",to:"/externalAuth/google",onClick:k},{default:a(()=>[d(" 使用 Google 登入 ")]),_:1})]),_:1}),e(z,{class:"my-2"}),e(b,{cols:"12"},{default:a(()=>[e(R,{disabled:o(m),onSubmit:A(o(h),["prevent"])},{default:a(()=>[e(p,{label:"信箱",type:"email",modelValue:o(r).value.value,"onUpdate:modelValue":s[0]||(s[0]=i=>o(r).value.value=i),"error-messages":o(r).errorMessage.value,autocomplete:"email"},null,8,["modelValue","error-messages"]),e(p,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:t.value?"text":"password",modelValue:o(n).value.value,"onUpdate:modelValue":s[1]||(s[1]=i=>o(n).value.value=i),"error-messages":o(n).errorMessage.value,"append-inner-icon":t.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":y,autocomplete:"current-password"},null,8,["type","modelValue","error-messages","append-inner-icon"]),e(u,{type:"submit",outlined:"",border:"",style:{"background-color":"#f4b942","font-weight":"bold","font-size":"16px"},class:"my-4 elevation-1 w-33",loading:o(m)},{default:a(()=>[d(" 登入 ")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"]),e(u,{class:"",ripple:!1,variant:"plain",to:"/register"},{default:a(()=>[d(" 註冊 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{W as default};
