import{p as Y,m as Q,a as ne,g as X,u as U,c as l,b as ve,d as de,e as me,f as fe,h as re,t as Z,i as he,j as ge,k as ye,l as be,n as Re,s as L,o as c,q as De,V as ae,r as ie,v as K,w as Qe,x as oe,y as et,z as A,A as _e,B as we,C as ke,D as ze,E as le,F as xe,G as j,H as Ae,I as tt,J as q,K as at,L as $e,M as lt,N as nt,O as Ye,S as ot,P as N,Q as st,R as it,T as ut,U as rt,W as ct,X as Fe,Y as vt,Z as dt,_ as mt,$ as ft,a0 as ht,a1 as gt,a2 as yt,a3 as bt,a4 as Oe,a5 as _t,a6 as We,a7 as x,a8 as R,a9 as D,aa as P,ab as wt,ac as i,ad as $,ae as M,af as Pe,ag as O,ah as W,ai as ue,aj as kt,ak as xt,al as pt,am as St,an as Vt}from"./index-Bzmhv8R7.js";import{_ as Tt}from"./stor-genLogo-CZoS3VG_.js";import{_ as Xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as pe,V as z,a as ee,b as te,c as Bt}from"./VList-CEYxBDgr.js";import{V as Ie}from"./VDivider-BRp88LzG.js";import{V as Ct}from"./VContainer-cMmaaPYi.js";import{V as ce}from"./VMenu-CVES9l16.js";const Et=Y({text:String,...Q(),...ne()},"VToolbarTitle"),Pt=X()({name:"VToolbarTitle",props:Et(),setup(e,u){let{slots:t}=u;return U(()=>{const s=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[s&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),It=[null,"prominent","default","comfortable","compact"],Ue=Y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>It.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...Q(),...de(),...me(),...ne({tag:"header"}),...fe()},"VToolbar"),Le=X()({name:"VToolbar",props:Ue(),setup(e,u){var h;let{slots:t}=u;const{backgroundColorClasses:s,backgroundColorStyles:a}=re(Z(e,"color")),{borderClasses:n}=he(e),{elevationClasses:o}=ge(e),{roundedClasses:v}=ye(e),{themeClasses:b}=be(e),{rtlClasses:_}=Re(),m=L(!!(e.extended||(h=t.extension)!=null&&h.call(t))),f=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=c(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return De({VBtn:{variant:"text"}}),U(()=>{var S;const r=!!(e.title||t.title),p=!!(t.image||e.image),d=(S=t.extension)==null?void 0:S.call(t);return m.value=!!(e.extended||d),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,n.value,o.value,v.value,b.value,_.value,e.class],style:[a.value,e.style]},{default:()=>[p&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(ie,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ae,{key:"image-img",cover:!0,src:e.image},null)]),l(ie,{defaults:{VTabs:{height:K(f.value)}}},{default:()=>{var C,w,H;return[l("div",{class:"v-toolbar__content",style:{height:K(f.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),r&&l(Pt,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(H=t.append)==null?void 0:H.call(t)])])]}}),l(ie,{defaults:{VTabs:{height:K(g.value)}}},{default:()=>[l(Qe,null,{default:()=>[m.value&&l("div",{class:"v-toolbar__extension",style:{height:K(g.value)}},[d])]})]})]})}),{contentHeight:f,extensionHeight:g}}}),Lt=Y({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ht(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let s=0,a=0;const n=oe(null),o=L(0),v=L(0),b=L(0),_=L(!1),m=L(!1),f=c(()=>Number(e.scrollThreshold)),g=c(()=>et((f.value-o.value)/f.value||0)),h=()=>{const r=n.value;if(!r||t&&!t.value)return;s=o.value,o.value="window"in r?r.pageYOffset:r.scrollTop;const p=r instanceof Window?document.documentElement.scrollHeight:r.scrollHeight;if(a!==p){a=p;return}m.value=o.value<s,b.value=Math.abs(o.value-f.value)};return A(m,()=>{v.value=v.value||o.value}),A(_,()=>{v.value=0}),_e(()=>{A(()=>e.scrollTarget,r=>{var d;const p=r?document.querySelector(r):window;p&&p!==n.value&&((d=n.value)==null||d.removeEventListener("scroll",h),n.value=p,n.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),we(()=>{var r;(r=n.value)==null||r.removeEventListener("scroll",h)}),t&&A(t,h,{immediate:!0}),{scrollThreshold:f,currentScroll:o,currentThreshold:b,isScrollActive:_,scrollRatio:g,isScrollingUp:m,savedScroll:v}}const Nt=Y({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ue(),...ke(),...Lt(),height:{type:[Number,String],default:64}},"VAppBar"),Mt=X()({name:"VAppBar",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const s=oe(),a=ze(e,"modelValue"),n=c(()=>{var H;const w=new Set(((H=e.scrollBehavior)==null?void 0:H.split(" "))??[]);return{hide:w.has("hide"),fullyHide:w.has("fully-hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),o=c(()=>{const w=n.value;return w.hide||w.fullyHide||w.inverted||w.collapse||w.elevate||w.fadeImage||!a.value}),{currentScroll:v,scrollThreshold:b,isScrollingUp:_,scrollRatio:m}=Ht(e,{canScroll:o}),f=c(()=>n.value.hide||n.value.fullyHide),g=c(()=>e.collapse||n.value.collapse&&(n.value.inverted?m.value>0:m.value===0)),h=c(()=>e.flat||n.value.fullyHide&&!a.value||n.value.elevate&&(n.value.inverted?v.value>0:v.value===0)),r=c(()=>n.value.fadeImage?n.value.inverted?1-m.value:m.value:void 0),p=c(()=>{var F,y;const w=Number(((F=s.value)==null?void 0:F.contentHeight)??e.height),H=Number(((y=s.value)==null?void 0:y.extensionHeight)??0);return f.value?v.value<b.value||n.value.fullyHide?w+H:w:w+H});le(c(()=>!!e.scrollBehavior),()=>{Ae(()=>{f.value?n.value.inverted?a.value=v.value>b.value:a.value=_.value||v.value<b.value:a.value=!0})});const{ssrBootStyles:d}=pe(),{layoutItemStyles:S,layoutIsReady:C}=xe({id:e.name,order:c(()=>parseInt(e.order,10)),position:Z(e,"location"),layoutSize:p,elementSize:L(void 0),active:a,absolute:Z(e,"absolute")});return U(()=>{const w=Le.filterProps(e);return l(Le,j({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...S.value,"--v-toolbar-image-opacity":r.value,height:void 0,...d.value},e.style]},w,{collapse:g.value,flat:h.value}),t)}),C}}),Rt=Y({...tt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Dt=X()({name:"VAppBarNavIcon",props:Rt(),setup(e,u){let{slots:t}=u;return U(()=>l(q,j(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),zt=Y({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...Q(),...de(),...ke(),...me(),...ne({tag:"footer"}),...fe()},"VFooter"),At=X()({name:"VFooter",props:zt(),setup(e,u){let{slots:t}=u;const{themeClasses:s}=be(e),{backgroundColorClasses:a,backgroundColorStyles:n}=re(Z(e,"color")),{borderClasses:o}=he(e),{elevationClasses:v}=ge(e),{roundedClasses:b}=ye(e),_=L(32),{resizeRef:m}=at(r=>{r.length&&(_.value=r[0].target.clientHeight)}),f=c(()=>e.height==="auto"?_.value:parseInt(e.height,10)),{layoutItemStyles:g,layoutIsReady:h}=xe({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:f,elementSize:c(()=>e.height==="auto"?void 0:f.value),active:c(()=>e.app),absolute:Z(e,"absolute")});return U(()=>l(e.tag,{ref:m,class:["v-footer",s.value,a.value,o.value,v.value,b.value,e.class],style:[n.value,e.app?g.value:{height:K(e.height)},e.style]},t)),e.app?h:{}}}),$t=Y({...Q(),...$e(),...lt()},"VLayout"),Yt=X()({name:"VLayout",props:$t(),setup(e,u){let{slots:t}=u;const{layoutClasses:s,layoutStyles:a,getLayoutItem:n,items:o,layoutRef:v}=nt(e),{dimensionStyles:b}=Ye(e);return U(()=>l("div",{ref:v,class:[s.value,e.class],style:[b.value,a.value,e.style]},[l(ot,null,{default:()=>{var _;return[l(N,null,[(_=t.default)==null?void 0:_.call(t)])]}})])),{getLayoutItem:n,items:o}}}),Ft=Y({scrollable:Boolean,...Q(),...$e(),...ne({tag:"main"})},"VMain"),qe=X()({name:"VMain",props:Ft(),setup(e,u){let{slots:t}=u;const{dimensionStyles:s}=Ye(e),{mainStyles:a,layoutIsReady:n}=st(),{ssrBootStyles:o}=pe();return U(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[a.value,o.value,s.value,e.style]},{default:()=>{var v,b;return[e.scrollable?l("div",{class:"v-main__scroller"},[(v=t.default)==null?void 0:v.call(t)]):(b=t.default)==null?void 0:b.call(t)]}})),n}});function Ot(e){let{rootEl:u,isSticky:t,layoutItemStyles:s}=e;const a=L(!1),n=L(0),o=c(()=>{const _=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[_]:K(n.value)}:{top:s.value.top}]});_e(()=>{A(t,_=>{_?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),we(()=>{window.removeEventListener("scroll",b)});let v=0;function b(){const _=v>window.scrollY?"up":"down",m=u.value.getBoundingClientRect(),f=parseFloat(s.value.top??0),g=window.scrollY-Math.max(0,n.value-f),h=m.height+Math.max(n.value,f)-window.scrollY-window.innerHeight,r=parseFloat(getComputedStyle(u.value).getPropertyValue("--v-body-scroll-y"))||0;m.height<window.innerHeight-f?(a.value="top",n.value=f):_==="up"&&a.value==="bottom"||_==="down"&&a.value==="top"?(n.value=window.scrollY+m.top-r,a.value=!0):_==="down"&&h<=0?(n.value=0,a.value="bottom"):_==="up"&&g<=0&&(r?a.value!=="top"&&(n.value=-g+r+f,a.value="top"):(n.value=m.top+g,a.value="top")),v=window.scrollY}return{isStuck:a,stickyStyles:o}}const Wt=100,Xt=20;function He(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ne(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let u=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const s=He(u),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);u+=(a-s)*Math.abs(a),t===e.length-1&&(u*=.5)}return He(u)*1e3}function Ut(){const e={};function u(a){Array.from(a.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new it(Xt))).push([a.timeStamp,n])})}function t(a){Array.from(a.changedTouches).forEach(n=>{delete e[n.identifier]})}function s(a){var _;const n=(_=e[a])==null?void 0:_.values().reverse();if(!n)throw new Error(`No samples for touch id ${a}`);const o=n[0],v=[],b=[];for(const m of n){if(o[0]-m[0]>Wt)break;v.push({t:m[0],d:m[1].clientX}),b.push({t:m[0],d:m[1].clientY})}return{x:Ne(v),y:Ne(b),get direction(){const{x:m,y:f}=this,[g,h]=[Math.abs(m),Math.abs(f)];return g>h&&m>=0?"right":g>h&&m<=0?"left":h>g&&f>=0?"down":h>g&&f<=0?"up":qt()}}}return{addMovement:u,endTouch:t,getVelocity:s}}function qt(){throw new Error}function jt(e){let{el:u,isActive:t,isTemporary:s,width:a,touchless:n,position:o}=e;_e(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",H,{passive:!0})}),we(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",H)});const v=c(()=>["left","right"].includes(o.value)),{addMovement:b,endTouch:_,getVelocity:m}=Ut();let f=!1;const g=L(!1),h=L(0),r=L(0);let p;function d(y,k){return(o.value==="left"?y:o.value==="right"?document.documentElement.clientWidth-y:o.value==="top"?y:o.value==="bottom"?document.documentElement.clientHeight-y:J())-(k?a.value:0)}function S(y){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const V=o.value==="left"?(y-r.value)/a.value:o.value==="right"?(document.documentElement.clientWidth-y-r.value)/a.value:o.value==="top"?(y-r.value)/a.value:o.value==="bottom"?(document.documentElement.clientHeight-y-r.value)/a.value:J();return k?Math.max(0,Math.min(1,V)):V}function C(y){if(n.value)return;const k=y.changedTouches[0].clientX,V=y.changedTouches[0].clientY,T=25,E=o.value==="left"?k<T:o.value==="right"?k>document.documentElement.clientWidth-T:o.value==="top"?V<T:o.value==="bottom"?V>document.documentElement.clientHeight-T:J(),B=t.value&&(o.value==="left"?k<a.value:o.value==="right"?k>document.documentElement.clientWidth-a.value:o.value==="top"?V<a.value:o.value==="bottom"?V>document.documentElement.clientHeight-a.value:J());(E||B||t.value&&s.value)&&(p=[k,V],r.value=d(v.value?k:V,t.value),h.value=S(v.value?k:V),f=r.value>-20&&r.value<80,_(y),b(y))}function w(y){const k=y.changedTouches[0].clientX,V=y.changedTouches[0].clientY;if(f){if(!y.cancelable){f=!1;return}const E=Math.abs(k-p[0]),B=Math.abs(V-p[1]);(v.value?E>B&&E>3:B>E&&B>3)?(g.value=!0,f=!1):(v.value?B:E)>3&&(f=!1)}if(!g.value)return;y.preventDefault(),b(y);const T=S(v.value?k:V,!1);h.value=Math.max(0,Math.min(1,T)),T>1?r.value=d(v.value?k:V,!0):T<0&&(r.value=d(v.value?k:V,!1))}function H(y){if(f=!1,!g.value)return;b(y),g.value=!1;const k=m(y.changedTouches[0].identifier),V=Math.abs(k.x),T=Math.abs(k.y);(v.value?V>T&&V>400:T>V&&T>3)?t.value=k.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||J()):t.value=h.value>.5}const F=c(()=>g.value?{transform:o.value==="left"?`translateX(calc(-100% + ${h.value*a.value}px))`:o.value==="right"?`translateX(calc(100% - ${h.value*a.value}px))`:o.value==="top"?`translateY(calc(-100% + ${h.value*a.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${h.value*a.value}px))`:J(),transition:"none"}:void 0);return le(g,()=>{var V,T;const y=((V=u.value)==null?void 0:V.style.transform)??null,k=((T=u.value)==null?void 0:T.style.transition)??null;Ae(()=>{var E,B,G,se;(B=u.value)==null||B.style.setProperty("transform",((E=F.value)==null?void 0:E.transform)||"none"),(se=u.value)==null||se.style.setProperty("transition",((G=F.value)==null?void 0:G.transition)||null)}),ut(()=>{var E,B;(E=u.value)==null||E.style.setProperty("transform",y),(B=u.value)==null||B.style.setProperty("transition",k)})}),{isDragging:g,dragProgress:h,dragStyles:F}}function J(){throw new Error}const Zt=["start","end","left","right","top","bottom"],Gt=Y({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Zt.includes(e)},sticky:Boolean,...ve(),...Q(),...rt(),...ct({mobile:null}),...de(),...ke(),...me(),...ne({tag:"nav"}),...fe()},"VNavigationDrawer"),Me=X()({name:"VNavigationDrawer",props:Gt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,u){let{attrs:t,emit:s,slots:a}=u;const{isRtl:n}=Re(),{themeClasses:o}=be(e),{borderClasses:v}=he(e),{backgroundColorClasses:b,backgroundColorStyles:_}=re(Z(e,"color")),{elevationClasses:m}=ge(e),{displayClasses:f,mobile:g}=Fe(e),{roundedClasses:h}=ye(e),r=vt(),p=ze(e,"modelValue",null,I=>!!I),{ssrBootStyles:d}=pe(),{scopeId:S}=dt(),C=oe(),w=L(!1),{runOpenDelay:H,runCloseDelay:F}=ht(e,I=>{w.value=I}),y=c(()=>e.rail&&e.expandOnHover&&w.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),k=c(()=>mt(e.location,n.value)),V=c(()=>e.persistent),T=c(()=>!e.permanent&&(g.value||e.temporary)),E=c(()=>e.sticky&&!T.value&&k.value!=="bottom");le(()=>e.expandOnHover&&e.rail!=null,()=>{A(w,I=>s("update:rail",!I))}),le(()=>!e.disableResizeWatcher,()=>{A(T,I=>!e.permanent&&gt(()=>p.value=!I))}),le(()=>!e.disableRouteWatcher&&!!r,()=>{A(r.currentRoute,()=>T.value&&(p.value=!1))}),A(()=>e.permanent,I=>{I&&(p.value=!0)}),e.modelValue==null&&!T.value&&(p.value=e.permanent||!g.value);const{isDragging:B,dragProgress:G}=jt({el:C,isActive:p,isTemporary:T,width:y,touchless:Z(e,"touchless"),position:k}),se=c(()=>{const I=T.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):y.value;return B.value?I*G.value:I}),je=c(()=>["top","bottom"].includes(e.location)?0:y.value),{layoutItemStyles:Se,layoutItemScrimStyles:Ze,layoutIsReady:Ge}=xe({id:e.name,order:c(()=>parseInt(e.order,10)),position:k,layoutSize:se,elementSize:je,active:c(()=>p.value||B.value),disableTransitions:c(()=>B.value),absolute:c(()=>e.absolute||E.value&&typeof Ve.value!="string")}),{isStuck:Ve,stickyStyles:Je}=Ot({rootEl:C,isSticky:E,layoutItemStyles:Se}),Te=re(c(()=>typeof e.scrim=="string"?e.scrim:null)),Ke=c(()=>({...B.value?{opacity:G.value*.2,transition:"none"}:void 0,...Ze.value}));return De({VList:{bgColor:"transparent"}}),U(()=>{const I=a.image||e.image;return l(N,null,[l(e.tag,j({ref:C,onMouseenter:H,onMouseleave:F,class:["v-navigation-drawer",`v-navigation-drawer--${k.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":T.value,"v-navigation-drawer--persistent":V.value,"v-navigation-drawer--active":p.value,"v-navigation-drawer--sticky":E.value},o.value,b.value,v.value,f.value,m.value,h.value,e.class],style:[_.value,Se.value,d.value,Je.value,e.style,["top","bottom"].includes(k.value)?{height:"auto"}:{}]},S,t),{default:()=>{var Be,Ce,Ee;return[I&&l("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?l(ie,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):l(ae,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(Be=a.prepend)==null?void 0:Be.call(a)]),l("div",{class:"v-navigation-drawer__content"},[(Ce=a.default)==null?void 0:Ce.call(a)]),a.append&&l("div",{class:"v-navigation-drawer__append"},[(Ee=a.append)==null?void 0:Ee.call(a)])]}}),l(ft,{name:"fade-transition"},{default:()=>[T.value&&(B.value||p.value)&&!!e.scrim&&l("div",j({class:["v-navigation-drawer__scrim",Te.backgroundColorClasses.value],style:[Ke.value,Te.backgroundColorStyles.value],onClick:()=>{V.value||(p.value=!1)}},S),null)]})])}),Ge.then(()=>({isStuck:Ve}))}}),Jt={class:"ma-5 pa-2"},Kt={class:"d-flex align-center"},Qt={__name:"NavBar",setup(e){const{mobile:u}=Fe(),t=oe(!1),s=yt(),a=bt(),n=Oe(),o=_t(),v=c(()=>n.path==="/login"||n.path==="/register"),b=c(()=>[{title:"故事",items:[{to:"/createStory",text:"創建新故事"},{to:"/category",text:"故事分類"}]},{title:"創作資源",items:[{to:"/articleArea",text:"創作指引"}]}]),_=c(()=>[{to:"/notification1",text:"通知一",show:s.isLogin},{to:"/notification2",text:"通知二",show:s.isLogin}]),m=c(()=>[{to:"/management",text:"故事管理",show:s.isLogin},{to:"/setting",text:"設定",show:s.isLogin},{text:"登出",click:f,show:s.isLogin}]),f=async()=>{await s.logout(),a({text:"登出成功",snackbarProps:{color:"green"}}),o.push("/")},g=h=>{h.click&&h.click()};return(h,r)=>{const p=We("router-link");return x(),R(N,null,[D(u)?(x(),P(Me,{key:0,modelValue:D(t),"onUpdate:modelValue":r[0]||(r[0]=d=>kt(t)?t.value=d:null),width:220,temporary:"",class:"position-fixed",color:"#4E9194"},wt({default:i(()=>[l(z,{"prepend-icon":"mdi-home",title:"首頁",to:"/",lines:"two"}),l(Ie),l(ee,{nav:""},{default:i(()=>[(x(!0),R(N,null,O(b.value,d=>(x(),P(z,{key:d.title},{default:i(()=>[l(Bt,null,{activator:i(({props:S})=>[l(z,j({ref_for:!0},S),{default:i(()=>[M(W(d.title),1)]),_:2},1040)]),default:i(()=>[(x(!0),R(N,null,O(d.items,(S,C)=>(x(),P(z,{key:C,to:S.to,link:""},{default:i(()=>[l(te,{style:{"font-size":"20px","line-height":"20px"}},{default:i(()=>[M(W(S.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:2},[!D(s).isLogin&&!v.value?{name:"append",fn:i(()=>[$("div",Jt,[l(q,{block:"",outlined:"",border:"",variant:"elevated",color:"#F4B942",size:"default","prepend-icon":"mdi-login",to:"/login"},{default:i(()=>[M(" 登入 ")]),_:1})])]),key:"0"}:{name:"append",fn:i(()=>[D(s).isLogin?(x(),P(Yt,{key:0},{default:i(()=>[l(Me,{permanent:"",color:"#4E9194"},{default:i(()=>[l(z,{class:"d-flex align-center"},{default:i(()=>[$("div",Kt,[l(Pe,{color:"secondary",class:""},{default:i(()=>[l(ae,{src:D(s).avatar},null,8,["src"])]),_:1}),l(z,{title:D(s).username},null,8,["title"])])]),_:1}),l(Ie),l(ee,{class:"pa-2 text-left",density:"default",lines:!1,nav:""},{default:i(()=>[(x(!0),R(N,null,O(m.value,(d,S)=>(x(),P(z,{class:"px-5 py-0 my-5 cursor-pointer",key:S,to:d.to,link:"",onClick:C=>g(d)},{default:i(()=>[l(te,{style:{"font-size":"20px","line-height":"24px"}},{default:i(()=>[M(W(d.text),1)]),_:2},1024)]),_:2},1032,["to","onClick"]))),128))]),_:1})]),_:1}),l(qe,{style:{height:"400px"}})]),_:1})):ue("",!0)]),key:"1"}]),1032,["modelValue"])):ue("",!0),l(Mt,{color:"#4E9194",class:"position-fixed",elevation:5,style:{height:"64px"}},{default:i(()=>[l(Ct,{class:"d-flex align-center justify-space-between",fluid:""},{default:i(()=>[l(p,{to:"/"},{default:i(()=>[l(ae,{class:"mx-3",width:"40","aspect-ratio":"1/1",cover:"",src:Tt})]),_:1}),D(u)?(x(),P(Dt,{key:0,onClick:r[1]||(r[1]=d=>t.value=!0)})):(x(),R(N,{key:1},[l(q,{text:"",to:"/",active:!1,ripple:!1,variant:"plain"},{default:i(()=>[M("首頁")]),_:1}),(x(!0),R(N,null,O(b.value,d=>(x(),P(ce,{key:d.title,"open-on-hover":"",transition:"slide-y-transition"},{activator:i(({props:S})=>[l(q,j({ref_for:!0},S,{color:"white",ripple:!1,variant:"plain"}),{default:i(()=>[M(W(d.title)+" ",1),l(xt,{right:""},{default:i(()=>[M("mdi-menu-down")]),_:1})]),_:2},1040)]),default:i(()=>[l(ee,{class:"pa-2 text-center",density:"compact",lines:!1,nav:""},{default:i(()=>[(x(!0),R(N,null,O(d.items,(S,C)=>(x(),P(z,{class:"px-5 py-0 my-0 custom-menu-item",key:C,to:S.to,link:""},{default:i(()=>[l(te,null,{default:i(()=>[M(W(S.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1024))),128)),l(pt),!D(s).isLogin&&!v.value?(x(),P(q,{key:0,outlined:"",border:"",variant:"elevated",color:"#F4B942",size:"default","prepend-icon":"mdi-login",class:"mx-2",to:"/login"},{default:i(()=>[M(" 登入 ")]),_:1})):(x(),R(N,{key:1},[l(ce,{"open-on-hover":"",transition:"slide-y-transition"},{default:i(()=>[l(ee,{class:"pa-2 text-center",density:"compact",lines:!1,nav:""},{default:i(()=>[(x(!0),R(N,null,O(_.value,(d,S)=>(x(),P(z,{class:"px-5 py-0 my-0 custom-menu-item",key:S,to:d.to,link:""},{default:i(()=>[l(te,null,{default:i(()=>[M(W(d.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),D(s).isLogin?(x(),P(ce,{key:0,"open-on-hover":"",transition:"slide-y-transition"},{activator:i(({props:d})=>[l(q,j({icon:""},d,{class:"d-flex"}),{default:i(()=>[l(Pe,{color:"secondary",class:""},{default:i(()=>[l(ae,{src:D(s).avatar},null,8,["src"])]),_:1})]),_:2},1040)]),default:i(()=>[l(ee,{class:"pa-2 text-center",density:"compact",lines:!1,nav:""},{default:i(()=>[(x(!0),R(N,null,O(m.value,(d,S)=>(x(),P(z,{class:"px-5 py-0 my-0 custom-menu-item",key:S,to:d.to,link:"",onClick:C=>g(d)},{default:i(()=>[l(te,null,{default:i(()=>[M(W(d.text),1)]),_:2},1024)]),_:2},1032,["to","onClick"]))),128))]),_:1})]),_:1})):ue("",!0)],64))],64))]),_:1})]),_:1})],64)}}},ea=Xe(Qt,[["__scopeId","data-v-77bba944"]]),ta={class:"d-flex justify-space-between px-16 py-0"},aa=$("div",{class:"d-flex flex-column align-start pt-0 w-75"},[$("p",{style:{color:"black","font-size":"16px"}},"關於我們"),$("p",{class:"text-left",style:{color:"black","font-size":"16px"}}," 「界筆」是指世界之筆，我們期望構築一個文字的世界！「界」有「借鑑」與「世界」兩個概念，代表每個故事的後續都是借鑑最初的故事以及我們有著遍佈全世界的野望！ ")],-1),la={class:"my-1"},na=$("strong",null,"界筆",-1),oa={__name:"Footer",setup(e){const u=oe([{name:"mdi-instagram",link:"https://www.example.com/instagram"},{name:"mdi-facebook",link:"https://www.example.com/facebook"},{name:"mdi-linkedin",link:"https://www.example.com/linkedin"}]),t=s=>{window.open(s,"_blank")};return(s,a)=>(x(),P(At,{class:"text-center d-flex flex-column",color:"#4E9194",density:"comfortable"},{default:i(()=>[$("div",ta,[aa,$("div",null,[(x(!0),R(N,null,O(u.value,n=>(x(),P(q,{key:n,icon:n.name,class:"mx-4",variant:"text",onClick:o=>t(n.link)},null,8,["icon","onClick"]))),128))])]),$("div",la,[M(W(new Date().getFullYear())+" — ",1),na])]),_:1}))}},sa={__name:"default",setup(e){const u=Oe(),t=c(()=>u.meta.hideFooter!==!0),s=c(()=>["/login","/register"].includes(u.name));return(a,n)=>{const o=We("router-view");return x(),P(Vt,null,{default:i(()=>[l(ea),l(qe,{class:St([{"auth-page":s.value},"main-content"])},{default:i(()=>[(x(),P(o,{key:a.$route.fullPath}))]),_:1},8,["class"]),t.value?(x(),P(oa,{key:0,style:{"max-height":"120px"}})):ue("",!0)]),_:1})}}},fa=Xe(sa,[["__scopeId","data-v-cefca9a3"]]);export{fa as default};
