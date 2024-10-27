import{M as C,N as j,x as F,Q as P,R as M,S as U,T as a,P as B,c as e,V as N,U as r,W as n,a1 as o,ap as R,ad as f}from"./index-B1ySa3vZ.js";import{c as T,b as p,u as q,f as g,V as z}from"./vee-validate.esm-CmGSlEdC.js";import{v as E}from"./index-D9k-l6p_.js";import{V as b}from"./VContainer-CgMUdhVE.js";import{V as I,a as v}from"./VRow-aRsc4bx-.js";import{V as $}from"./VDivider-BhPiY8Mx.js";const J={__name:"login",setup(A){const x=B(),y=C(),c=j(),V=T({email:p().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",s=>E.isEmail(s)),password:p().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),t=F(!1),w=()=>{t.value=!t.value},{handleSubmit:_,isSubmitting:m}=q({validationSchema:V}),i=g("email"),u=g("password"),h=_(async s=>{const l=await y.login(s);l==="登入成功"?(c({text:l,snackbarProps:{color:"green"}}),x.push("/")):c({text:l,snackbarProps:{color:"red"}})}),k=()=>{window.location.href="/externalAuth/google"};return(s,l)=>{const S=P("router-link");return M(),U(b,{class:"d-flex align-center justify-center h-100 mt-0 mb-0",fluid:""},{default:a(()=>[e(b,{class:"text-center pa-8 rounded-lg elevation-4",style:{width:"500px","background-color":"white",border:"1px solid rgba(255, 255, 255, 0.1)"}},{default:a(()=>[e(I,{class:"d-flex flex-column justify-center"},{default:a(()=>[e(v,{class:"d-flex flex-column justify-center align-center my-2"},{default:a(()=>[e(S,{to:"/"},{default:a(()=>[e(N,{class:"my-4",width:100,"aspect-ratio":"1/1",cover:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"})]),_:1}),e(r,{outlined:"",border:"",style:{"background-color":"#ffffff"},color:"#000000","prepend-icon":"mdi-google",class:"my-2 elevation-1 w-66 h-25",variant:"plain",onClick:k},{default:a(()=>[n(" 使用 Google 登入 ")]),_:1}),e(r,{outlined:"",border:"",style:{"background-color":"#ffffff"},color:"#000000",size:"default","prepend-icon":"mdi-facebook",class:"my-2 elevation-1 w-66 h-25",variant:"plain",to:"/login"},{default:a(()=>[n(" 使用 Facebook 登入 ")]),_:1})]),_:1}),e($,{class:"my-2"}),e(v,{cols:"12"},{default:a(()=>[e(z,{disabled:o(m),onSubmit:R(o(h),["prevent"])},{default:a(()=>[e(f,{label:"信箱",type:"email",modelValue:o(i).value.value,"onUpdate:modelValue":l[0]||(l[0]=d=>o(i).value.value=d),"error-messages":o(i).errorMessage.value,autocomplete:"email"},null,8,["modelValue","error-messages"]),e(f,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:t.value?"text":"password",modelValue:o(u).value.value,"onUpdate:modelValue":l[1]||(l[1]=d=>o(u).value.value=d),"error-messages":o(u).errorMessage.value,"append-inner-icon":t.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":w,autocomplete:"current-password"},null,8,["type","modelValue","error-messages","append-inner-icon"]),e(r,{type:"submit",outlined:"",border:"",style:{"background-color":"#f4b942","font-weight":"bold","font-size":"16px"},class:"my-4 elevation-1 w-33",loading:o(m)},{default:a(()=>[n(" 登入 ")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"]),e(r,{class:"",ripple:!1,variant:"plain",to:"/register"},{default:a(()=>[n(" 註冊 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{J as default};
