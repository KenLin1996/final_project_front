import{M as I,N as R,x as C,Q as T,R as P,S as U,T as a,P as D,c as e,V as j,U as r,W as n,a1 as o,ap as F,ad as p}from"./index-BiU6_x0i.js";import{c as M,b as f,u as B,f as g,V as L}from"./vee-validate.esm-Co8z-nHt.js";import{v as N}from"./index-Br0axvf4.js";import{V as v}from"./VContainer-BReUjGsM.js";import{V as O,a as _}from"./VRow-BxDLvSf-.js";import{V as $}from"./VDivider-CPhV-GDD.js";var b={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API:"https://back-txvy.onrender.com"};const J={__name:"login",setup(A){const V=D(),y=I(),d=R(),x=M({email:f().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",l=>N.isEmail(l)),password:f().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),s=C(!1),h=()=>{s.value=!s.value},{handleSubmit:w,isSubmitting:m}=B({validationSchema:x}),i=g("email"),u=g("password"),k=w(async l=>{const t=await y.login(l);t==="登入成功"?(d({text:t,snackbarProps:{color:"green"}}),V.push("/")):d({text:t,snackbarProps:{color:"red"}})}),E=()=>{const l=`https://accounts.google.com/o/oauth2/auth?client_id=${b.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${b.VITE_REDIRECT_URI}&scope=email profile&response_type=token`;window.location.href=l};return(l,t)=>{const S=T("router-link");return P(),U(v,{class:"d-flex align-center justify-center h-100 mt-0 mb-0",fluid:""},{default:a(()=>[e(v,{class:"text-center pa-8 rounded-lg elevation-4",style:{width:"500px","background-color":"white",border:"1px solid rgba(255, 255, 255, 0.1)"}},{default:a(()=>[e(O,{class:"d-flex flex-column justify-center"},{default:a(()=>[e(_,{class:"d-flex flex-column justify-center align-center my-2"},{default:a(()=>[e(S,{to:"/"},{default:a(()=>[e(j,{class:"my-4",width:100,"aspect-ratio":"1/1",cover:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"})]),_:1}),e(r,{outlined:"",border:"",style:{"background-color":"#ffffff"},color:"#000000","prepend-icon":"mdi-google",class:"my-2 elevation-1 w-66 h-25",variant:"plain",to:"/externalAuth/google",onClick:E},{default:a(()=>[n(" 使用 Google 登入 ")]),_:1}),e(r,{outlined:"",border:"",style:{"background-color":"#ffffff"},color:"#000000",size:"default","prepend-icon":"mdi-facebook",class:"my-2 elevation-1 w-66 h-25",variant:"plain",to:"/login"},{default:a(()=>[n(" 使用 Facebook 登入 ")]),_:1})]),_:1}),e($,{class:"my-2"}),e(_,{cols:"12"},{default:a(()=>[e(L,{disabled:o(m),onSubmit:F(o(k),["prevent"])},{default:a(()=>[e(p,{label:"信箱",type:"email",modelValue:o(i).value.value,"onUpdate:modelValue":t[0]||(t[0]=c=>o(i).value.value=c),"error-messages":o(i).errorMessage.value,autocomplete:"email"},null,8,["modelValue","error-messages"]),e(p,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:s.value?"text":"password",modelValue:o(u).value.value,"onUpdate:modelValue":t[1]||(t[1]=c=>o(u).value.value=c),"error-messages":o(u).errorMessage.value,"append-inner-icon":s.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":h,autocomplete:"current-password"},null,8,["type","modelValue","error-messages","append-inner-icon"]),e(r,{type:"submit",outlined:"",border:"",style:{"background-color":"#f4b942","font-weight":"bold","font-size":"16px"},class:"my-4 elevation-1 w-33",loading:o(m)},{default:a(()=>[n(" 登入 ")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"]),e(r,{class:"",ripple:!1,variant:"plain",to:"/register"},{default:a(()=>[n(" 註冊 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{J as default};
