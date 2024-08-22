import{p as B,m as _,g as T,u as x,c as u,bt as ce,a as Y,bu as de,o as g,aD as j,aq as ve,aX as F,e as fe,h as U,t as V,b9 as q,k as me,q as N,Z as be,r as he,W as A,G as $,bv as Z,f as ge,l as ye,n as Ce,aC as Ve,ay as Se,x as R,s as H,z as we,av as ke,S as X,ao as J,as as Be,at as Te,al as xe,am as K,au as Ie,an as Pe,ap as $e,bw as We,v as D,aF as _e,az as Q,bx as Ee,aI as Re,by as Xe,bz as Ye,D as p,aN as He,bA as De}from"./index-BQtH6iZV.js";import{u as Ae}from"./VList-CT45dZ_r.js";import{m as Me,V as L}from"./VSlideGroup-ClZW227d.js";const ze=B({divider:[Number,String],..._()},"VBreadcrumbsDivider"),Le=T()({name:"VBreadcrumbsDivider",props:ze(),setup(e,a){let{slots:t}=a;return x(()=>{var n;return u("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),Ge=B({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,..._(),...ce(),...Y({tag:"li"})},"VBreadcrumbsItem"),Oe=T()({name:"VBreadcrumbsItem",props:Ge(),setup(e,a){let{slots:t,attrs:n}=a;const s=de(e,n),i=g(()=>{var c;return e.active||((c=s.isActive)==null?void 0:c.value)}),o=g(()=>i.value?e.activeColor:e.color),{textColorClasses:v,textColorStyles:l}=j(o);return x(()=>u(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},v.value,e.class],style:[l.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var c,C;return[s.isLink.value?u("a",{class:"v-breadcrumbs-item--link",href:s.href.value,"aria-current":i.value?"page":void 0,onClick:s.navigate},[((C=t.default)==null?void 0:C.call(t))??e.title]):((c=t.default)==null?void 0:c.call(t))??e.title]}})),{}}}),je=B({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:ve,items:{type:Array,default:()=>[]},..._(),...F(),...fe(),...Y({tag:"ul"})},"VBreadcrumbs"),dt=T()({name:"VBreadcrumbs",props:je(),setup(e,a){let{slots:t}=a;const{backgroundColorClasses:n,backgroundColorStyles:s}=U(V(e,"bgColor")),{densityClasses:i}=q(e),{roundedClasses:o}=me(e);N({VBreadcrumbsDivider:{divider:V(e,"divider")},VBreadcrumbsItem:{activeClass:V(e,"activeClass"),activeColor:V(e,"activeColor"),color:V(e,"color"),disabled:V(e,"disabled")}});const v=g(()=>e.items.map(l=>typeof l=="string"?{item:{title:l},raw:l}:{item:l,raw:l}));return x(()=>{const l=!!(t.prepend||e.icon);return u(e.tag,{class:["v-breadcrumbs",n.value,i.value,o.value,e.class],style:[s.value,e.style]},{default:()=>{var c;return[l&&u("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?u(he,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):u(be,{key:"prepend-icon",start:!0,icon:e.icon},null)]),v.value.map((C,b,d)=>{var y;let{item:r,raw:f}=C;return u(A,null,[((y=t.item)==null?void 0:y.call(t,{item:r,index:b}))??u(Oe,$({key:b,disabled:b>=d.length-1},typeof r=="string"?{title:r}:r),{default:t.title?()=>{var S;return(S=t.title)==null?void 0:S.call(t,{item:r,index:b})}:void 0}),b<d.length-1&&u(Le,null,{default:t.divider?()=>{var S;return(S=t.divider)==null?void 0:S.call(t,{item:f,index:b})}:void 0})])}),(c=t.default)==null?void 0:c.call(t)]}})}),{}}}),Fe=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:s}=e,i=.5,o=16;e.offsetX=t-a,e.offsetY=s-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<a-o&&e.left(e),e.right&&t>a+o&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<n-o&&e.up(e),e.down&&s>n+o&&e.down(e))};function Ue(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function qe(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),Fe(a)}function Ne(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ue(t,a),touchend:t=>qe(t,a),touchmove:t=>Ne(t,a)}}function Je(e,a){var v;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},i=(v=a.instance)==null?void 0:v.$.uid;if(!n||!i)return;const o=Ze(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=o,Z(o).forEach(l=>{n.addEventListener(l,o[l],s)})}function Ke(e,a){var i,o;const t=(i=a.value)!=null&&i.parent?e.parentElement:e,n=(o=a.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const s=t._touchHandlers[n];Z(s).forEach(v=>{t.removeEventListener(v,s[v])}),delete t._touchHandlers[n]}const ee={mounted:Je,unmounted:Ke},Qe=ee,te=Symbol.for("vuetify:v-window"),ne=Symbol.for("vuetify:v-window-group"),ae=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},..._(),...Y(),...ge()},"VWindow"),G=T()({name:"VWindow",directives:{Touch:ee},props:ae(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=ye(e),{isRtl:s}=Ce(),{t:i}=Ve(),o=Se(e,ne),v=R(),l=g(()=>s.value?!e.reverse:e.reverse),c=H(!1),C=g(()=>{const m=e.direction==="vertical"?"y":"x",w=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${m}${w}-transition`}),b=H(0),d=R(void 0),r=g(()=>o.items.value.findIndex(m=>o.selected.value.includes(m.id)));we(r,(m,h)=>{const w=o.items.value.length,k=w-1;w<=2?c.value=m<h:m===k&&h===0?c.value=!0:m===0&&h===k?c.value=!1:c.value=m<h}),ke(te,{transition:C,isReversed:c,transitionCount:b,transitionHeight:d,rootRef:v});const f=g(()=>e.continuous||r.value!==0),y=g(()=>e.continuous||r.value!==o.items.value.length-1);function S(){f.value&&o.prev()}function E(){y.value&&o.next()}const I=g(()=>{const m=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,"aria-label":i("$vuetify.carousel.prev")};m.push(f.value?t.prev?t.prev({props:h}):u(X,h,null):u("div",null,null));const w={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,"aria-label":i("$vuetify.carousel.next")};return m.push(y.value?t.next?t.next({props:w}):u(X,w,null):u("div",null,null)),m}),P=g(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?S():E()},right:()=>{l.value?E():S()},start:h=>{let{originalEvent:w}=h;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return x(()=>J(u(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var m,h;return[u("div",{class:"v-window__container",style:{height:d.value}},[(m=t.default)==null?void 0:m.call(t,{group:o}),e.showArrows!==!1&&u("div",{class:"v-window__controls"},[I.value])]),(h=t.additional)==null?void 0:h.call(t,{group:o})]}}),[[Be("touch"),P.value]])),{group:o}}}),oe=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},..._(),...Te(),...xe()},"VWindowItem"),O=T()({name:"VWindowItem",directives:{Touch:Qe},props:oe(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=K(te),s=Ie(e,ne),{isBooted:i}=Ae();if(!n||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=H(!1),v=g(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var f;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=D((f=n.rootRef.value)==null?void 0:f.clientHeight)),n.transitionCount.value+=1)}function C(){l()}function b(f){o.value&&_e(()=>{!v.value||!o.value||!n||(n.transitionHeight.value=D(f.clientHeight))})}const d=g(()=>{const f=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof f!="string"?n.transition.value:f,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:C,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:C,onEnter:b}:!1}),{hasContent:r}=Pe(e,s.isSelected);return x(()=>u(We,{transition:d.value,disabled:!i.value},{default:()=>{var f;return[J(u("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((f=t.default)==null?void 0:f.call(t))]),[[$e,s.isSelected.value]])]}})),{groupItem:s}}}),M=Symbol.for("vuetify:v-tabs"),pe=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Q(Ee({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),et=T()({name:"VTab",props:pe(),setup(e,a){let{slots:t,attrs:n}=a;const{textColorClasses:s,textColorStyles:i}=j(e,"sliderColor"),o=R(),v=R(),l=g(()=>e.direction==="horizontal"),c=g(()=>{var b,d;return((d=(b=o.value)==null?void 0:b.group)==null?void 0:d.isSelected.value)??!1});function C(b){var r,f;let{value:d}=b;if(d){const y=(f=(r=o.value)==null?void 0:r.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),S=v.value;if(!y||!S)return;const E=getComputedStyle(y).color,I=y.getBoundingClientRect(),P=S.getBoundingClientRect(),m=l.value?"x":"y",h=l.value?"X":"Y",w=l.value?"right":"bottom",k=l.value?"width":"height",se=I[m],le=P[m],W=se>le?I[w]-P[w]:I[m]-P[m],ie=Math.sign(W)>0?l.value?"right":"bottom":Math.sign(W)<0?l.value?"left":"top":"center",ue=(Math.abs(W)+(Math.sign(W)<0?I[k]:P[k]))/Math.max(I[k],P[k])||0,re=I[k]/P[k]||0,z=1.5;Xe(S,{backgroundColor:[E,"currentcolor"],transform:[`translate${h}(${W}px) scale${h}(${re})`,`translate${h}(${W/z}px) scale${h}(${(ue-1)/z+1})`,"none"],transformOrigin:Array(3).fill(ie)},{duration:225,easing:Ye})}}return x(()=>{const b=X.filterProps(e);return u(X,$({symbol:M,ref:o,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},b,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":C}),{...t,default:()=>{var d;return u(A,null,[((d=t.default)==null?void 0:d.call(t))??e.text,!e.hideSlider&&u("div",{ref:v,class:["v-tab__slider",s.value],style:i.value},null)])}})}),Re({},o)}}),tt=B({...Q(ae(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),nt=T()({name:"VTabsWindow",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=K(M,null),s=p(e,"modelValue"),i=g({get(){var o;return s.value!=null||!n?s.value:(o=n.items.value.find(v=>n.selected.value.includes(v.id)))==null?void 0:o.value},set(o){s.value=o}});return x(()=>{const o=G.filterProps(e);return u(G,$({_as:"VTabsWindow"},o,{modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),t)}),{}}}),at=B({...oe()},"VTabsWindowItem"),ot=T()({name:"VTabsWindowItem",props:at(),setup(e,a){let{slots:t}=a;return x(()=>{const n=O.filterProps(e);return u(O,$({_as:"VTabsWindowItem"},n,{class:["v-tabs-window-item",e.class],style:e.style}),t)}),{}}});function st(e){return e?e.map(a=>De(a)?a:{text:a,value:a}):[]}const lt=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Me({mandatory:"force",selectedClass:"v-tab-item--selected"}),...F(),...Y()},"VTabs"),vt=T()({name:"VTabs",props:lt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:t,slots:n}=a;const s=p(e,"modelValue"),i=g(()=>st(e.items)),{densityClasses:o}=q(e),{backgroundColorClasses:v,backgroundColorStyles:l}=U(V(e,"bgColor")),{scopeId:c}=He();return N({VTab:{color:V(e,"color"),direction:V(e,"direction"),stacked:V(e,"stacked"),fixed:V(e,"fixedTabs"),sliderColor:V(e,"sliderColor"),hideSlider:V(e,"hideSlider")}}),x(()=>{const C=L.filterProps(e),b=!!(n.window||e.items.length>0);return u(A,null,[u(L,$(C,{modelValue:s.value,"onUpdate:modelValue":d=>s.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,v.value,e.class],style:[{"--v-tabs-height":D(e.height)},l.value,e.style],role:"tablist",symbol:M},c,t),{default:()=>{var d;return[((d=n.default)==null?void 0:d.call(n))??i.value.map(r=>{var f;return((f=n.tab)==null?void 0:f.call(n,{item:r}))??u(et,$(r,{key:r.text,value:r.value}),{default:n[`tab.${r.value}`]?()=>{var y;return(y=n[`tab.${r.value}`])==null?void 0:y.call(n,{item:r})}:void 0})})]}}),b&&u(nt,$({modelValue:s.value,"onUpdate:modelValue":d=>s.value=d,key:"tabs-window"},c),{default:()=>{var d;return[i.value.map(r=>{var f;return((f=n.item)==null?void 0:f.call(n,{item:r}))??u(ot,{value:r.value},{default:()=>{var y;return(y=n[`item.${r.value}`])==null?void 0:y.call(n,{item:r})}})}),(d=n.window)==null?void 0:d.call(n)]}})])}),{}}});export{dt as V,vt as a,et as b,nt as c,ot as d};
