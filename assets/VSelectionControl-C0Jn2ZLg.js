import{p as h,aM as T,aT as $,m as U,aN as Q,f as z,g as R,D as _,aB as q,o,aP as J,T as K,q as W,t as u,u as E,c as v,bA as X,s as D,x as Y,bi as Z,G as w,bp as p,bq as ee,P as le,ak as ae,aE as te,aQ as ne,aO as oe,aH as I,aL as ue,h as ie,bg as re,a1 as ce}from"./index-D7Xhxmta.js";const L=Symbol.for("vuetify:selection-control-group"),M=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:T,trueIcon:T,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:$},...U(),...Q(),...z()},"SelectionControlGroup"),se=h({...M({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),me=R()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=_(e,"modelValue"),t=q(),b=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||b.value),a=new Set;return J(L,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),K(()=>{a.delete(n)})}}),W({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),E(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=f.default)==null?void 0:n.call(f)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...M()},"VSelectionControl");function ve(e){const i=ne(L,void 0),{densityClasses:f}=oe(e),l=_(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),b=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:b.value;let y=r;c.value&&(y=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=y:l.value=y}}),{textColorClasses:n,textColorStyles:C}=ue(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:g}=ie(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:b,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:g,icon:k}}const ye=R()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:b,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:g,trueValue:k}=ve(e),m=q(),r=D(!1),y=D(!1),s=Y(),S=o(()=>e.id||`input-${m}`),P=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function x(d){P.value&&(r.value=!0,re(d.target,":focus-visible")!==!1&&(y.value=!0))}function A(){r.value=!1,y.value=!1}function N(d){d.stopPropagation()}function j(d){if(!P.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&ce(()=>t.forceUpdate()),a.value=d.target.checked}return E(()=>{var F,G;const d=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[H,O]=Z(f),B=v("input",w({ref:s,checked:a.value,disabled:!!e.disabled,id:S.value,onBlur:A,onFocus:x,onInput:j,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},O),null);return v("div",w({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},b.value,e.class]},H,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(F=l.default)==null?void 0:F.call(l,{backgroundColorClasses:V,backgroundColorStyles:g}),p(v("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:g,inputNode:B,icon:c.value,props:{onFocus:x,onBlur:A,id:S.value}}))??v(le,null,[c.value&&v(ae,{key:"icon",icon:c.value},null),B])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(te,{for:S.value,onClick:N},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{ye as V,M as a,me as b,de as m};