import{p as ee,at as G,m as te,b0 as le,a as oe,az as ne,g as se,n as ae,aV as ie,aB as re,s as b,o as g,I as B,bX as ue,b8 as D,z as ce,u as fe,c as h,bY as L,_ as q,bl as ve}from"./index-D-j42ziH.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=m(v,o),a=K(v,i,o),p=m(v,n),c=U(v,n),S=p*.4;return a>c?c-S:a+d<c+p?c-d+p+S:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=m(i,o),d=U(i,n),a=m(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function K(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function m(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function U(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=ee({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...te(),...le({mobile:null}),...oe(),...ne({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ze=se()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=ae(),{displayClasses:v,mobile:d}=ie(l),a=re(l,l.symbol),p=b(!1),c=b(0),S=b(0),P=b(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=B(),{resizeRef:f,contentRect:R}=B(),A=ue(),C=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),$=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),Q=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(D){let e=-1;ce(()=>[a.selected.value,w.value,R.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&R.value){const t=r.value?"width":"height";S.value=w.value[t],P.value=R.value[t],p.value=S.value+1<P.value}if($.value>=0&&f.el){const t=f.el.children[Q.value];O(t,l.centerActive)}})})}const x=b(!1);function O(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),V(s)}function V(e){if(!D||!u.el)return;const t=m(r.value,u.el),s=K(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:_}=u.el;e=k-_-e}r.value?A.horizontal(e,C.value):A(e,C.value)}}function X(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function Y(e){if(x.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){O(s);return}}}function j(e){x.value=!1}let E=!1;function J(e){var t;!E&&!x.value&&!(e.relatedTarget&&((t=f.el)!=null&&t.contains(e.relatedTarget)))&&z(),E=!1}function W(){E=!0}function Z(e){if(!f.el)return;function t(s){e.preventDefault(),z(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function z(e){var s,y;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return z("first")}else if(e==="prev"){if(t=(y=f.el.querySelector(":focus"))==null?void 0:y.previousElementSibling,!t)return z("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function T(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*S.value;let y=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:_}=u.el;y+=k-_}V(y)}const F=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),I=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),M=g(()=>Math.abs(c.value)>1),H=g(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":I.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:x.value||a.selected.value.length?-1:0,onFocus:J},{default:()=>{var e,t,s;return[I.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!M.value}],onMousedown:W,onClick:()=>M.value&&T("prev")},[((e=o.prev)==null?void 0:e.call(o,F.value))??h(L,null,{default:()=>[h(q,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:Y,onFocusout:j,onKeydown:Z},[(t=o.default)==null?void 0:t.call(o,F.value)])]),I.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!H.value}],onMousedown:W,onClick:()=>H.value&&T("next")},[((s=o.next)==null?void 0:s.call(o,F.value))??h(L,null,{default:()=>[h(q,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:T,scrollOffset:c,focus:z}}});export{ze as V,Se as m};