import{p as h,aC as M,aD as A,bc as I,g as O,D as S,aE as K,aF as L,o as y,x as U,ap as F,bj as g,s as H,ay as R,bk as j,z as G,G as E,u as N,aG as b,c as w,r as z,aH as Y,aY as $,bl as V,bm as q,bn as k}from"./index-D-j42ziH.js";const B=h({id:String,...M(A({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:I}}),["absolute"])},"VMenu"),W=O()({name:"VMenu",props:B(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:i}=p;const l=S(a,"modelValue"),{scopeId:C}=K(),P=L(),d=y(()=>a.id||`v-menu-${P}`),s=U(),t=F(g,null),c=H(0);R(g,{register(){++c.value},unregister(){--c.value},closeParents(e){setTimeout(()=>{!c.value&&!a.persistent&&(e==null||e&&!j(e,s.value.contentEl))&&(l.value=!1,t==null||t.closeParents())},40)}});async function v(e){var r,u,f;const n=e.relatedTarget,o=e.target;await $(),l.value&&n!==o&&((r=s.value)!=null&&r.contentEl)&&((u=s.value)!=null&&u.globalTop)&&![document,s.value.contentEl].includes(o)&&!s.value.contentEl.contains(o)&&((f=V(s.value.contentEl)[0])==null||f.focus())}G(l,e=>{e?(t==null||t.register(),document.addEventListener("focusin",v,{once:!0})):(t==null||t.unregister(),document.removeEventListener("focusin",v))});function x(e){t==null||t.closeParents(e)}function D(e){var n,o,r;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),q(V((n=s.value)==null?void 0:n.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(r=(o=s.value)==null?void 0:o.activatorEl)==null||r.focus())}else["Enter"," "].includes(e.key)&&a.closeOnContentClick&&(l.value=!1,t==null||t.closeParents())}function m(e){var o;if(a.disabled)return;const n=(o=s.value)==null?void 0:o.contentEl;n&&l.value?e.key==="ArrowDown"?(e.preventDefault(),k(n,"next")):e.key==="ArrowUp"&&(e.preventDefault(),k(n,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const T=y(()=>E({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},a.activatorProps));return N(()=>{const e=b.filterProps(a);return w(b,E({ref:s,id:d.value,class:["v-menu",a.class],style:a.style},e,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,absolute:!0,activatorProps:T.value,"onClick:outside":x,onKeydown:D},C),{activator:i.activator,default:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return w(z,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),Y({id:d,ΨopenChildren:c},s)}});export{W as V};