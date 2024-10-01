import{p as P,m as M,a as U,g as L,u as z,c as a,b as Z,d as ee,e as te,f as ae,h as le,t as E,i as oe,j as ne,k as se,l as ie,n as he,s as p,o as r,q as ye,V as re,r as $,v as I,w as be,x as W,y as _e,z as D,A as ke,B as xe,C as ue,D as Se,E as Ve,F as ce,G,H as pe,I as Te,J as we,K as Be,L as Ce,M as Pe,N as Ie,O as de,P as ve,Q as g,R as _,S as i,T as H,U as V,W as B,X as C,Y as N,Z as R,_ as He,$ as Ne,a0 as Q,a1 as me,a2 as w,a3 as Re,a4 as Ee}from"./index-D8Mo-riY.js";import{V as Le}from"./VContainer-D2_Tlp7J.js";import{V as Y}from"./VMenu-DNuh_dXC.js";import{u as fe,V as O,a as j,b as q}from"./VList-CF621bau.js";import"./VDivider-BzHLweN9.js";const ze=P({text:String,...M(),...U()},"VToolbarTitle"),Fe=L()({name:"VToolbarTitle",props:ze(),setup(e,d){let{slots:t}=d;return z(()=>{const u=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[u&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ae=[null,"prominent","default","comfortable","compact"],ge=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ae.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Z(),...M(),...ee(),...te(),...U({tag:"header"}),...ae()},"VToolbar"),X=L()({name:"VToolbar",props:ge(),setup(e,d){var s;let{slots:t}=d;const{backgroundColorClasses:u,backgroundColorStyles:n}=le(E(e,"color")),{borderClasses:l}=oe(e),{elevationClasses:v}=ne(e),{roundedClasses:m}=se(e),{themeClasses:h}=ie(e),{rtlClasses:k}=he(),f=p(!!(e.extended||(s=t.extension)!=null&&s.call(t))),y=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),x=r(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ye({VBtn:{variant:"text"}}),z(()=>{var F;const o=!!(e.title||t.title),b=!!(t.image||e.image),T=(F=t.extension)==null?void 0:F.call(t);return f.value=!!(e.extended||T),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,l.value,v.value,m.value,h.value,k.value,e.class],style:[n.value,e.style]},{default:()=>[b&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a($,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(re,{key:"image-img",cover:!0,src:e.image},null)]),a($,{defaults:{VTabs:{height:I(y.value)}}},{default:()=>{var A,c,S;return[a("div",{class:"v-toolbar__content",style:{height:I(y.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),o&&a(Fe,{key:"title",text:e.title},{text:t.title}),(c=t.default)==null?void 0:c.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(S=t.append)==null?void 0:S.call(t)])])]}}),a($,{defaults:{VTabs:{height:I(x.value)}}},{default:()=>[a(be,null,{default:()=>[f.value&&a("div",{class:"v-toolbar__extension",style:{height:I(x.value)}},[T])]})]})]})}),{contentHeight:y,extensionHeight:x}}}),De=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Me(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let u=0,n=0;const l=W(null),v=p(0),m=p(0),h=p(0),k=p(!1),f=p(!1),y=r(()=>Number(e.scrollThreshold)),x=r(()=>_e((y.value-v.value)/y.value||0)),s=()=>{const o=l.value;if(!o||t&&!t.value)return;u=v.value,v.value="window"in o?o.pageYOffset:o.scrollTop;const b=o instanceof Window?document.documentElement.scrollHeight:o.scrollHeight;if(n!==b){n=b;return}f.value=v.value<u,h.value=Math.abs(v.value-y.value)};return D(f,()=>{m.value=m.value||v.value}),D(k,()=>{m.value=0}),ke(()=>{D(()=>e.scrollTarget,o=>{var T;const b=o?document.querySelector(o):window;b&&b!==l.value&&((T=l.value)==null||T.removeEventListener("scroll",s),l.value=b,l.value.addEventListener("scroll",s,{passive:!0}))},{immediate:!0})}),xe(()=>{var o;(o=l.value)==null||o.removeEventListener("scroll",s)}),t&&D(t,s,{immediate:!0}),{scrollThreshold:y,currentScroll:v,currentThreshold:h,isScrollActive:k,scrollRatio:x,isScrollingUp:f,savedScroll:m}}const Ue=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ge(),...ue(),...De(),height:{type:[Number,String],default:64}},"VAppBar"),$e=L()({name:"VAppBar",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const u=W(),n=Se(e,"modelValue"),l=r(()=>{var S;const c=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:c.has("hide"),fullyHide:c.has("fully-hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),v=r(()=>{const c=l.value;return c.hide||c.fullyHide||c.inverted||c.collapse||c.elevate||c.fadeImage||!n.value}),{currentScroll:m,scrollThreshold:h,isScrollingUp:k,scrollRatio:f}=Me(e,{canScroll:v}),y=r(()=>l.value.hide||l.value.fullyHide),x=r(()=>e.collapse||l.value.collapse&&(l.value.inverted?f.value>0:f.value===0)),s=r(()=>e.flat||l.value.fullyHide&&!n.value||l.value.elevate&&(l.value.inverted?m.value>0:m.value===0)),o=r(()=>l.value.fadeImage?l.value.inverted?1-f.value:f.value:void 0),b=r(()=>{var J,K;const c=Number(((J=u.value)==null?void 0:J.contentHeight)??e.height),S=Number(((K=u.value)==null?void 0:K.extensionHeight)??0);return y.value?m.value<h.value||l.value.fullyHide?c+S:c:c+S});Ve(r(()=>!!e.scrollBehavior),()=>{pe(()=>{y.value?l.value.inverted?n.value=m.value>h.value:n.value=k.value||m.value<h.value:n.value=!0})});const{ssrBootStyles:T}=fe(),{layoutItemStyles:F,layoutIsReady:A}=ce({id:e.name,order:r(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:b,elementSize:p(void 0),active:n,absolute:E(e,"absolute")});return z(()=>{const c=X.filterProps(e);return a(X,G({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...F.value,"--v-toolbar-image-opacity":o.value,height:void 0,...T.value},e.style]},c,{collapse:x.value,flat:s.value}),t)}),A}}),Ye=P({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Z(),...M(),...ee(),...ue(),...te(),...U({tag:"footer"}),...ae()},"VFooter"),Oe=L()({name:"VFooter",props:Ye(),setup(e,d){let{slots:t}=d;const{themeClasses:u}=ie(e),{backgroundColorClasses:n,backgroundColorStyles:l}=le(E(e,"color")),{borderClasses:v}=oe(e),{elevationClasses:m}=ne(e),{roundedClasses:h}=se(e),k=p(32),{resizeRef:f}=Te(o=>{o.length&&(k.value=o[0].target.clientHeight)}),y=r(()=>e.height==="auto"?k.value:parseInt(e.height,10)),{layoutItemStyles:x,layoutIsReady:s}=ce({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:y,elementSize:r(()=>e.height==="auto"?void 0:y.value),active:r(()=>e.app),absolute:E(e,"absolute")});return z(()=>a(e.tag,{ref:f,class:["v-footer",u.value,n.value,v.value,m.value,h.value,e.class],style:[l.value,e.app?x.value:{height:I(e.height)},e.style]},t)),e.app?s:{}}}),je=P({scrollable:Boolean,...M(),...we(),...U({tag:"main"})},"VMain"),qe=L()({name:"VMain",props:je(),setup(e,d){let{slots:t}=d;const{dimensionStyles:u}=Be(e),{mainStyles:n,layoutIsReady:l}=Ce(),{ssrBootStyles:v}=fe();return z(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,v.value,u.value,e.style]},{default:()=>{var m,h;return[e.scrollable?a("div",{class:"v-main__scroller"},[(m=t.default)==null?void 0:m.call(t)]):(h=t.default)==null?void 0:h.call(t)]}})),l}}),Ge={__name:"NavBar",setup(e){const d=Pe(),t=Ie(),u=de(),n=r(()=>u.path==="/login"||u.path==="/register"),l=r(()=>[{title:"故事",items:[{to:"/createStory",text:"創建新故事"},{to:"/category",text:"故事分類"}]},{title:"創作資源",items:[{to:"/articleArea",text:"創作指引"}]}]),v=r(()=>[{to:"/notification1",text:"通知一"},{to:"/notification2",text:"通知二"}]),m=r(()=>[{to:"/management",text:"故事管理"},{to:"/setting",text:"設定"},{text:"登出",click:h}]),h=async()=>{await d.logout(),t({text:"登出成功",snackbarProps:{color:"green"}})},k=f=>{f.click&&f.click()};return(f,y)=>{const x=ve("router-link");return g(),_($e,{color:"#4E9194",density:"comfortable",class:"position-fixed",elevation:5},{default:i(()=>[a(Le,{class:"d-flex align-center",fluid:""},{default:i(()=>[a(x,{to:"/"},{default:i(()=>[a(re,{class:"mx-3",width:"50","aspect-ratio":"1/1",cover:"",src:"https://img.icons8.com/?size=100&id=zVbUsD7GnSYl&format=png&color=000000"})]),_:1}),a(H,{text:"",to:"/",active:!1,ripple:!1,variant:"plain"},{default:i(()=>[V("首頁")]),_:1}),(g(!0),B(C,null,N(l.value,s=>(g(),_(Y,{key:s.title,"open-on-hover":"",transition:"slide-y-transition"},{activator:i(({props:o})=>[a(H,G({ref_for:!0},o,{color:"white",ripple:!1,variant:"plain"}),{default:i(()=>[V(R(s.title)+" ",1),a(He,{right:""},{default:i(()=>[V("mdi-menu-down")]),_:1})]),_:2},1040)]),default:i(()=>[a(O,null,{default:i(()=>[(g(!0),B(C,null,N(s.items,(o,b)=>(g(),_(j,{key:b,to:o.to,link:""},{default:i(()=>[a(q,null,{default:i(()=>[V(R(o.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1024))),128)),a(Ne),!Q(d).isLogin&&!n.value?(g(),_(H,{key:0,outlined:"",border:"",variant:"elevated",color:"#F4B942",size:"default","prepend-icon":"mdi-login",class:"mx-2",to:"/login"},{default:i(()=>[V(" 登入/註冊 ")]),_:1})):(g(),B(C,{key:1},[a(Y,{"open-on-hover":"",transition:"slide-y-transition"},{default:i(()=>[a(O,null,{default:i(()=>[(g(!0),B(C,null,N(v.value,(s,o)=>(g(),_(j,{key:o,to:s.to,link:""},{default:i(()=>[a(q,null,{default:i(()=>[V(R(s.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),Q(d).isLogin?(g(),_(Y,{key:0,"open-on-hover":"",transition:"slide-y-transition"},{activator:i(({props:s})=>[a(H,G({icon:"mdi-account"},s),null,16)]),default:i(()=>[a(O,null,{default:i(()=>[(g(!0),B(C,null,N(m.value,(s,o)=>(g(),_(j,{key:o,to:s.to,link:"",onClick:b=>k(s)},{default:i(()=>[a(q,null,{default:i(()=>[V(R(s.text),1)]),_:2},1024)]),_:2},1032,["to","onClick"]))),128))]),_:1})]),_:1})):me("",!0)],64))]),_:1})]),_:1})}}},We={class:"d-flex justify-space-between px-16"},Je=w("div",{class:"d-flex flex-column align-start pt-0 w-66"},[w("p",{style:{color:"black","font-size":"16px"}},"關於我們"),w("p",{class:"text-left",style:{color:"black","font-size":"14px"}}," 『界筆』是指世界之筆，我們期望構築一個筆、文字的世界！起頭的『界』也取同音的『借』的概念，每個故事的後續都是借鑑、借用最初的故事。而『界』的世界概念也彰顯著『界筆』有著遍佈全世界的野望！ ")],-1),Ke={class:"my-2"},Qe=w("strong",null,"界筆",-1),Xe={__name:"Footer",setup(e){const d=W([{name:"mdi-instagram",link:"https://www.example.com/instagram"},{name:"mdi-facebook",link:"https://www.example.com/facebook"},{name:"mdi-linkedin",link:"https://www.example.com/linkedin"}]),t=u=>{window.open(u,"_blank")};return(u,n)=>(g(),_(Oe,{class:"mt-5 text-center d-flex flex-column",color:"#4E9194",density:"comfortable"},{default:i(()=>[w("div",We,[Je,w("div",null,[(g(!0),B(C,null,N(d.value,l=>(g(),_(H,{key:l,icon:l.name,class:"mx-4",variant:"text",onClick:v=>t(l.link)},null,8,["icon","onClick"]))),128))])]),w("div",Ke,[V(R(new Date().getFullYear())+" — ",1),Qe])]),_:1}))}},ot={__name:"default",setup(e){const d=de(),t=r(()=>d.meta.hideFooter!==!0),u=r(()=>["/login","/register"].includes(d.name));return(n,l)=>{const v=ve("router-view");return g(),_(Ee,null,{default:i(()=>[a(Ge),a(qe,{class:Re({"auth-page":u.value})},{default:i(()=>[(g(),_(v,{key:n.$route.fullPath}))]),_:1},8,["class"]),t.value?(g(),_(Xe,{key:0})):me("",!0)]),_:1})}}};export{ot as default};
