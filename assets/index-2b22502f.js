import{A as y,D as k,R as M,e as t,y as h,r as E,o as R,a as I,w as v,C as a,g as F,t as O,F as $}from"./vue-libs-83dbabed.js";import{c as A,H,a as j}from"./use-translate-0400f29b.js";import{m as q,c as w,a as G,t as N,w as J}from"./with-install-a78877b5.js";import{B as T}from"./constant-ee6e27d7.js";import{V as z}from"./index-5a7b6df9.js";import"./index-c916422a.js";const[K,V,U]=A("pagination"),B=(l,n,s)=>({number:l,text:n,active:s}),L={mode:q("multi"),prevText:String,nextText:String,pageCount:w(0),modelValue:G(0),totalItems:w(0),showPageSize:w(5),itemsPerPage:w(10),forceEllipses:Boolean,showPrevButton:N,showNextButton:N},Q=y({name:K,props:L,emits:["change","update:modelValue"],setup(l,{emit:n,slots:s}){const d=k(()=>{const{pageCount:e,totalItems:o,itemsPerPage:i}=l,m=+e||Math.ceil(+o/+i);return Math.max(1,m)}),b=k(()=>{const e=[],o=d.value,i=+l.showPageSize,{modelValue:m,forceEllipses:p}=l;let P=1,g=o;const S=i<o;S&&(P=Math.max(m-Math.floor(i/2),1),g=P+i-1,g>o&&(g=o,P=g-i+1));for(let c=P;c<=g;c++){const D=B(c,c,c===m);e.push(D)}if(S&&i>0&&p){if(P>1){const c=B(P-1,"...");e.unshift(c)}if(g<o){const c=B(g+1,"...");e.push(c)}}return e}),x=(e,o)=>{e=H(e,1,d.value),l.modelValue!==e&&(n("update:modelValue",e),o&&n("change",e))};M(()=>x(l.modelValue));const C=()=>t("li",{class:V("page-desc")},[s.pageDesc?s.pageDesc():`${l.modelValue}/${d.value}`]),u=()=>{const{mode:e,modelValue:o,showPrevButton:i}=l;if(!i)return;const m=s["prev-text"],p=o===1;return t("li",{class:[V("item",{disabled:p,border:e==="simple",prev:!0}),T]},[t("button",{type:"button",disabled:p,onClick:()=>x(o-1,!0)},[m?m():l.prevText||U("prev")])])},f=()=>{const{mode:e,modelValue:o,showNextButton:i}=l;if(!i)return;const m=s["next-text"],p=o===d.value;return t("li",{class:[V("item",{disabled:p,border:e==="simple",next:!0}),T]},[t("button",{type:"button",disabled:p,onClick:()=>x(o+1,!0)},[m?m():l.nextText||U("next")])])},r=()=>b.value.map(e=>t("li",{class:[V("item",{active:e.active,page:!0}),T]},[t("button",{type:"button","aria-current":e.active||void 0,onClick:()=>x(e.number,!0)},[s.page?s.page(e):e.text])]));return()=>t("nav",{role:"navigation",class:V()},[t("ul",{class:V("items")},[u(),l.mode==="simple"?C():r(),f()])])}}),W=J(Q),_=W,ne=y({__name:"index",setup(l){const n=j({"zh-CN":{title2:"简单模式",title3:"显示省略号",title4:"自定义按钮",prevText:"上一页",nextText:"下一页"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),s=h(1),d=h(1),b=h(1),x=h(1);return(C,u)=>{const f=E("demo-block");return R(),I($,null,[t(f,{title:a(n)("basicUsage")},{default:v(()=>[t(a(_),{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=r=>s.value=r),"total-items":24,"items-per-page":5,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(f,{title:a(n)("title2")},{default:v(()=>[t(a(_),{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=r=>d.value=r),"page-count":12,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(f,{title:a(n)("title3")},{default:v(()=>[t(a(_),{modelValue:b.value,"onUpdate:modelValue":u[2]||(u[2]=r=>b.value=r),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(f,{title:a(n)("title4")},{default:v(()=>[t(a(_),{modelValue:x.value,"onUpdate:modelValue":u[3]||(u[3]=r=>x.value=r),"total-items":125,"show-page-size":5},{"prev-text":v(()=>[t(a(z),{name:"arrow-left"})]),"next-text":v(()=>[t(a(z),{name:"arrow"})]),page:v(({text:r})=>[F(O(r),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{ne as default};
