import{p as B,aq as ae,g as G,D as Q,o as A,u as q,az as fe,c as f,G as D,m as be,I as ke,z as U,W as j,a_ as Ce,s as K,H as ie,x as E,bc as Ie,y as re,bd as Te,aF as Se,aL as ce,J as Fe,aT as Re,K as Ae,t as Oe,E as Me,v as le,A as De,be as Be,aA as Le,aB as _e,bf as Ke,aC as Ee,aE as He,ab as he,ak as Ue,Z as ge,aG as $e,r as Ne,T as ze,aI as je,aJ as de,bg as ye,$ as J,ba as Ge,bh as qe,aO as We,bi as Je,bj as Ve,aQ as Qe}from"./index-BQtH6iZV.js";import{m as Xe,d as Ye,V as Ze,a as pe}from"./VList-CT45dZ_r.js";import{V as et}from"./VMenu-DcIoYLm7.js";import{m as Pe,V as X,a as tt,b as lt}from"./VSelectionControl-BQPrHjww.js";import{V as at}from"./VChip-CvazLWZ2.js";const nt=B({indeterminate:Boolean,indeterminateIcon:{type:ae,default:"$checkboxIndeterminate"},...Pe({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ot=G()({name:"VCheckboxBtn",props:nt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:t}=s;const o=Q(e,"indeterminate"),r=Q(e,"modelValue");function c(l){o.value&&(o.value=!1)}const m=A(()=>o.value?e.indeterminateIcon:e.falseIcon),u=A(()=>o.value?e.indeterminateIcon:e.trueIcon);return q(()=>{const l=fe(X.filterProps(e),["modelValue"]);return f(X,D(l,{modelValue:r.value,"onUpdate:modelValue":[h=>r.value=h,c],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:m.value,trueIcon:u.value,"aria-checked":o.value?"mixed":void 0}),t)}),{}}}),ut=B({renderless:Boolean,...be()},"VVirtualScrollItem"),rt=G()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ut(),emits:{"update:height":e=>!0},setup(e,s){let{attrs:t,emit:o,slots:r}=s;const{resizeRef:c,contentRect:m}=ke(void 0,"border");U(()=>{var u;return(u=m.value)==null?void 0:u.height},u=>{u!=null&&o("update:height",u)}),q(()=>{var u,l;return e.renderless?f(j,null,[(u=r.default)==null?void 0:u.call(r,{itemRef:c})]):f("div",D({ref:c,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(l=r.default)==null?void 0:l.call(r)])})}}),st=-1,it=1,se=100,ct=B({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function dt(e,s){const t=Ce(),o=K(0);ie(()=>{o.value=parseFloat(e.itemHeight||0)});const r=K(0),c=K(Math.ceil((parseInt(e.height)||t.height.value)/(o.value||16))||1),m=K(0),u=K(0),l=E(),h=E();let x=0;const{resizeRef:S,contentRect:i}=ke();ie(()=>{S.value=l.value});const v=A(()=>{var a;return l.value===document.documentElement?t.height.value:((a=i.value)==null?void 0:a.height)||parseInt(e.height)||0}),V=A(()=>!!(l.value&&h.value&&v.value&&o.value));let k=Array.from({length:s.value.length}),g=Array.from({length:s.value.length});const p=K(0);let C=-1;function L(a){return k[a]||o.value}const M=Te(()=>{const a=performance.now();g[0]=0;const d=s.value.length;for(let P=1;P<=d-1;P++)g[P]=(g[P-1]||0)+L(P-1);p.value=Math.max(p.value,performance.now()-a)},p),Y=U(V,a=>{a&&(Y(),x=h.value.offsetTop,M.immediate(),_(),~C&&Se(()=>{ce&&window.requestAnimationFrame(()=>{te(C),C=-1})}))});Ie(()=>{M.clear()});function ne(a,d){const P=k[a],I=o.value;o.value=I?Math.min(o.value,d):d,(P!==d||I!==o.value)&&(k[a]=d,M())}function T(a){return a=re(a,0,s.value.length-1),g[a]||0}function Z(a){return ft(g,a)}let $=0,H=0,W=0;U(v,(a,d)=>{d&&(_(),a<d&&requestAnimationFrame(()=>{H=0,_()}))});function oe(){if(!l.value||!h.value)return;const a=l.value.scrollTop,d=performance.now();d-W>500?(H=Math.sign(a-$),x=h.value.offsetTop):H=a-$,$=a,W=d,_()}function N(){!l.value||!h.value||(H=0,W=0,_())}let ee=-1;function _(){cancelAnimationFrame(ee),ee=requestAnimationFrame(ue)}function ue(){if(!l.value||!v.value)return;const a=$-x,d=Math.sign(H),P=Math.max(0,a-se),I=re(Z(P),0,s.value.length),y=a+v.value+se,w=re(Z(y)+1,I+1,s.value.length);if((d!==st||I<r.value)&&(d!==it||w>c.value)){const b=T(r.value)-T(I),F=T(w)-T(c.value);Math.max(b,F)>se?(r.value=I,c.value=w):(I<=0&&(r.value=I),w>=s.value.length&&(c.value=w))}m.value=T(r.value),u.value=T(s.value.length)-T(c.value)}function te(a){const d=T(a);!l.value||a&&!d?C=a:l.value.scrollTop=d}const n=A(()=>s.value.slice(r.value,c.value).map((a,d)=>({raw:a,index:d+r.value})));return U(s,()=>{k=Array.from({length:s.value.length}),g=Array.from({length:s.value.length}),M.immediate(),_()},{deep:!0}),{containerRef:l,markerRef:h,computedItems:n,paddingTop:m,paddingBottom:u,scrollToIndex:te,handleScroll:oe,handleScrollend:N,handleItemResize:ne}}function ft(e,s){let t=e.length-1,o=0,r=0,c=null,m=-1;if(e[t]<s)return t;for(;o<=t;)if(r=o+t>>1,c=e[r],c>s)t=r-1;else if(c<s)m=r,o=r+1;else return c===s?r:o;return m}const vt=B({items:{type:Array,default:()=>[]},renderless:Boolean,...ct(),...be(),...Fe()},"VVirtualScroll"),mt=G()({name:"VVirtualScroll",props:vt(),setup(e,s){let{slots:t}=s;const o=Re("VVirtualScroll"),{dimensionStyles:r}=Ae(e),{containerRef:c,markerRef:m,handleScroll:u,handleScrollend:l,handleItemResize:h,scrollToIndex:x,paddingTop:S,paddingBottom:i,computedItems:v}=dt(e,Oe(e,"items"));return Me(()=>e.renderless,()=>{function V(){var p,C;const g=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";c.value===document.documentElement?(document[g]("scroll",u,{passive:!0}),document[g]("scrollend",l)):((p=c.value)==null||p[g]("scroll",u,{passive:!0}),(C=c.value)==null||C[g]("scrollend",l))}De(()=>{c.value=Be(o.vnode.el,!0),V(!0)}),Ie(V)}),q(()=>{const V=v.value.map(k=>f(rt,{key:k.index,renderless:e.renderless,"onUpdate:height":g=>h(k.index,g)},{default:g=>{var p;return(p=t.default)==null?void 0:p.call(t,{item:k.raw,index:k.index,...g})}}));return e.renderless?f(j,null,[f("div",{ref:m,class:"v-virtual-scroll__spacer",style:{paddingTop:le(S.value)}},null),V,f("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:le(i.value)}},null)]):f("div",{ref:c,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:l,style:[r.value,e.style]},[f("div",{ref:m,class:"v-virtual-scroll__container",style:{paddingTop:le(S.value),paddingBottom:le(i.value)}},[V])])}),{scrollToIndex:x}}});function ht(e,s){const t=K(!1);let o;function r(u){cancelAnimationFrame(o),t.value=!0,o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{t.value=!1})})}async function c(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(t.value){const l=U(t,()=>{l(),u()})}else u()})}async function m(u){var x,S;if(u.key==="Tab"&&((x=s.value)==null||x.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const l=(S=e.value)==null?void 0:S.$el;if(!l)return;(u.key==="Home"||u.key==="End")&&l.scrollTo({top:u.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await c();const h=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const i=l.getBoundingClientRect().top;for(const v of h)if(v.getBoundingClientRect().top>=i){v.focus();break}}else{const i=l.getBoundingClientRect().bottom;for(const v of[...h].reverse())if(v.getBoundingClientRect().bottom<=i){v.focus();break}}}return{onListScroll:r,onListKeydown:m}}const gt=B({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ae,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Xe({itemChildren:!1})},"Select"),yt=B({...gt(),...fe(Le({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),..._e({transition:{component:Ke}})},"VSelect"),Ct=G()({name:"VSelect",props:yt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:t}=s;const{t:o}=Ee(),r=E(),c=E(),m=E(),u=Q(e,"menu"),l=A({get:()=>u.value,set:n=>{var a;u.value&&!n&&((a=c.value)!=null&&a.ΨopenChildren)||(u.value=n)}}),{items:h,transformIn:x,transformOut:S}=Ye(e),i=Q(e,"modelValue",[],n=>x(n===null?[null]:de(n)),n=>{const a=S(n);return e.multiple?a:a[0]??null}),v=A(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:i.value.length),V=He(),k=A(()=>i.value.map(n=>n.value)),g=K(!1),p=A(()=>l.value?e.closeText:e.openText);let C="",L;const M=A(()=>e.hideSelected?h.value.filter(n=>!i.value.some(a=>e.valueComparator(a,n))):h.value),Y=A(()=>e.hideNoData&&!M.value.length||e.readonly||(V==null?void 0:V.isReadonly.value)),ne=A(()=>{var n;return{...e.menuProps,activatorProps:{...((n=e.menuProps)==null?void 0:n.activatorProps)||{},"aria-haspopup":"listbox"}}}),T=E(),{onListScroll:Z,onListKeydown:$}=ht(T,r);function H(n){e.openOnClear&&(l.value=!0)}function W(){Y.value||(l.value=!l.value)}function oe(n){var y,w;if(!n.key||e.readonly||V!=null&&V.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(n.key)&&n.preventDefault(),["Enter","ArrowDown"," "].includes(n.key)&&(l.value=!0),["Escape","Tab"].includes(n.key)&&(l.value=!1),n.key==="Home"?(y=T.value)==null||y.focus("first"):n.key==="End"&&((w=T.value)==null||w.focus("last"));const a=1e3;function d(b){const F=b.key.length===1,R=!b.ctrlKey&&!b.metaKey&&!b.altKey;return F&&R}if(e.multiple||!d(n))return;const P=performance.now();P-L>a&&(C=""),C+=n.key.toLowerCase(),L=P;const I=h.value.find(b=>b.title.toLowerCase().startsWith(C));if(I!==void 0){i.value=[I];const b=M.value.indexOf(I);ce&&window.requestAnimationFrame(()=>{var F;b>=0&&((F=m.value)==null||F.scrollToIndex(b))})}}function N(n){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!n.props.disabled)if(e.multiple){const d=i.value.findIndex(I=>e.valueComparator(I.value,n.value)),P=a??!~d;if(~d){const I=P?[...i.value,n]:[...i.value];I.splice(d,1),i.value=I}else P&&(i.value=[...i.value,n])}else{const d=a!==!1;i.value=d?[n]:[],Se(()=>{l.value=!1})}}function ee(n){var a;(a=T.value)!=null&&a.$el.contains(n.relatedTarget)||(l.value=!1)}function _(){var n;g.value&&((n=r.value)==null||n.focus())}function ue(n){g.value=!0}function te(n){if(n==null)i.value=[];else if(ye(r.value,":autofill")||ye(r.value,":-webkit-autofill")){const a=h.value.find(d=>d.title===n);a&&N(a)}else r.value&&(r.value.value="")}return U(l,()=>{if(!e.hideSelected&&l.value&&i.value.length){const n=M.value.findIndex(a=>i.value.some(d=>e.valueComparator(d.value,a.value)));ce&&window.requestAnimationFrame(()=>{var a;n>=0&&((a=m.value)==null||a.scrollToIndex(n))})}}),U(()=>e.items,(n,a)=>{l.value||g.value&&!a.length&&n.length&&(l.value=!0)}),q(()=>{const n=!!(e.chips||t.chip),a=!!(!e.hideNoData||M.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),d=i.value.length>0,P=he.filterProps(e),I=d||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return f(he,D({ref:r},P,{modelValue:i.value.map(y=>y.props.value).join(", "),"onUpdate:modelValue":te,focused:g.value,"onUpdate:focused":y=>g.value=y,validationValue:i.externalValue,counterValue:v.value,dirty:d,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:I,"onClick:clear":H,"onMousedown:control":W,onBlur:ee,onKeydown:oe,"aria-label":o(p.value),title:o(p.value)}),{...t,default:()=>f(j,null,[f(et,D({ref:c,modelValue:l.value,"onUpdate:modelValue":y=>l.value=y,activator:"parent",contentClass:"v-select__content",disabled:Y.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:_},ne.value),{default:()=>[a&&f(Ze,D({ref:T,selected:k.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:y=>y.preventDefault(),onKeydown:$,onFocusin:ue,onScrollPassive:Z,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var y,w,b;return[(y=t["prepend-item"])==null?void 0:y.call(t),!M.value.length&&!e.hideNoData&&(((w=t["no-data"])==null?void 0:w.call(t))??f(pe,{title:o(e.noDataText)},null)),f(mt,{ref:m,renderless:!0,items:M.value},{default:F=>{var me;let{item:R,index:z,itemRef:O}=F;const ve=D(R.props,{ref:O,key:z,onClick:()=>N(R,null)});return((me=t.item)==null?void 0:me.call(t,{item:R,index:z,props:ve}))??f(pe,D(ve,{role:"option"}),{prepend:we=>{let{isSelected:xe}=we;return f(j,null,[e.multiple&&!e.hideSelected?f(ot,{key:R.value,modelValue:xe,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&f(Ue,{image:R.props.prependAvatar},null),R.props.prependIcon&&f(ge,{icon:R.props.prependIcon},null)])}})}}),(b=t["append-item"])==null?void 0:b.call(t)]}})]}),i.value.map((y,w)=>{function b(O){O.stopPropagation(),O.preventDefault(),N(y,!1)}const F={"onClick:close":b,onKeydown(O){O.key!=="Enter"&&O.key!==" "||(O.preventDefault(),O.stopPropagation(),b(O))},onMousedown(O){O.preventDefault(),O.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=n?!!t.chip:!!t.selection,z=R?$e(n?t.chip({item:y,index:w,props:F}):t.selection({item:y,index:w})):void 0;if(!(R&&!z))return f("div",{key:y.value,class:"v-select__selection"},[n?t.chip?f(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:y.title}}},{default:()=>[z]}):f(at,D({key:"chip",closable:e.closableChips,size:"small",text:y.title,disabled:y.props.disabled},F),null):z??f("span",{class:"v-select__selection-text"},[y.title,e.multiple&&w<i.value.length-1&&f("span",{class:"v-select__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var F;for(var y=arguments.length,w=new Array(y),b=0;b<y;b++)w[b]=arguments[b];return f(j,null,[(F=t["append-inner"])==null?void 0:F.call(t,...w),e.menuIcon?f(ge,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),je({isFocused:g,menu:l,select:N},r)}}),Vt=(e,s,t)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),Tt=B({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function pt(e,s,t){var u;const o=[],r=(t==null?void 0:t.default)??Vt,c=t!=null&&t.filterKeys?de(t.filterKeys):!1,m=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return o;e:for(let l=0;l<e.length;l++){const[h,x=h]=de(e[l]),S={},i={};let v=-1;if((s||m>0)&&!(t!=null&&t.noFilter)){if(typeof h=="object"){const g=c||Object.keys(x);for(const p of g){const C=Ge(x,p),L=(u=t==null?void 0:t.customKeyFilter)==null?void 0:u[p];if(v=L?L(C,s,h):r(C,s,h),v!==-1&&v!==!1)L?S[p]=v:i[p]=v;else if((t==null?void 0:t.filterMode)==="every")continue e}}else v=r(h,s,h),v!==-1&&v!==!1&&(i.title=v);const V=Object.keys(i).length,k=Object.keys(S).length;if(!V&&!k||(t==null?void 0:t.filterMode)==="union"&&k!==m&&!V||(t==null?void 0:t.filterMode)==="intersection"&&(k!==m||!V))continue}o.push({index:l,matches:{...i,...S}})}return o}function Ft(e,s,t,o){const r=E([]),c=E(new Map),m=A(()=>o!=null&&o.transform?J(s).map(l=>[l,o.transform(l)]):J(s));ie(()=>{const l=typeof t=="function"?t():J(t),h=typeof l!="string"&&typeof l!="number"?"":String(l),x=pt(m.value,h,{customKeyFilter:{...e.customKeyFilter,...J(o==null?void 0:o.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),S=J(s),i=[],v=new Map;x.forEach(V=>{let{index:k,matches:g}=V;const p=S[k];i.push(p),v.set(p.value,g)}),r.value=i,c.value=v});function u(l){return c.value.get(l.value)}return{filteredItems:r,filteredMatches:c,getMatches:u}}const bt=B({...Pe({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Rt=G()({name:"VRadio",props:bt(),setup(e,s){let{slots:t}=s;return q(()=>{const o=X.filterProps(e);return f(X,D(o,{class:["v-radio",e.class],style:e.style,type:"radio"}),t)}),{}}}),kt=B({height:{type:[Number,String],default:"auto"},...qe(),...fe(tt(),["multiple"]),trueIcon:{type:ae,default:"$radioOn"},falseIcon:{type:ae,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),At=G()({name:"VRadioGroup",inheritAttrs:!1,props:kt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:t,slots:o}=s;const r=We(),c=A(()=>e.id||`radio-group-${r}`),m=Q(e,"modelValue");return q(()=>{const[u,l]=Je(t),h=Ve.filterProps(e),x=X.filterProps(e),S=o.label?o.label({label:e.label,props:{for:c.value}}):e.label;return f(Ve,D({class:["v-radio-group",e.class],style:e.style},u,h,{modelValue:m.value,"onUpdate:modelValue":i=>m.value=i,id:c.value}),{...o,default:i=>{let{id:v,messagesId:V,isDisabled:k,isReadonly:g}=i;return f(j,null,[S&&f(Qe,{id:v.value},{default:()=>[S]}),f(lt,D(x,{id:v.value,"aria-describedby":V.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:k.value,readonly:g.value,"aria-labelledby":S?v.value:void 0,multiple:!1},l,{modelValue:m.value,"onUpdate:modelValue":p=>m.value=p}),o)])}})}),{}}});export{mt as V,gt as a,ht as b,ot as c,Ct as d,At as e,Rt as f,Tt as m,Ft as u};
