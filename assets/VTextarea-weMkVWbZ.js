import{p,bh as ee,bD as te,g as ae,bE as ne,D as le,bk as oe,o as y,x as v,s as ue,H as ie,A as re,z as x,B as se,u as ce,bi as de,bj as N,bF as fe,c as l,bG as ve,G as I,P as R,bp as T,bq as xe,bH as me,bI as ge,aD as he,a1 as S,bJ as we,v as Ve,y as ye}from"./index-D7Xhxmta.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,_){let{attrs:b,emit:H,slots:i}=_;const o=le(e,"modelValue"),{isFocused:f,focus:E,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),j=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=v(),m=v(),M=ue(""),g=v(),q=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function J(t){F(),H("click:control",t)}function K(t){H("mousedown:control",t)}function L(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function Q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,C,k);h.value=Math.floor((s-a)/w),M.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...C}=N.filterProps(e),k=fe(e);return l(N,I({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,C,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:z,isDirty:A,isReadonly:W,isValid:X}=s;return l(ve,I({ref:m,style:{"--v-textarea-control-height":M.value},onClick:J,onMousedown:K,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:q.value||A.value,centerAffix:h.value===1&&!P.value,dirty:A.value||e.dirty,disabled:z.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:D,...G}}=Y;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",I({ref:g,class:D,value:o.value,onInput:Q,autofocus:e.autofocus,readonly:W.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},G,u),null),[[xe("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[D,"v-textarea__sizer"],id:`${G.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:j.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},B,m,g)}});export{Pe as V};