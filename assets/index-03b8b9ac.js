import{m,t as S,w as h,c as $,n as A}from"./with-install-a78877b5.js";import{b as C,c as d,u as E,e as x}from"./use-translate-0400f29b.js";import{A as v,D as f,e as y}from"./vue-libs-83dbabed.js";const[b,R]=d("row"),w=Symbol(b),V={tag:m("div"),wrap:S,align:String,gutter:{type:[String,Number,Array],default:0},justify:String},j=v({name:b,props:V,setup(s,{slots:o}){const{children:p,linkChildren:l}=C(w),i=f(()=>{const t=[[]];let e=0;return p.forEach((r,a)=>{e+=Number(r.span),e>24?(t.push([a]),e-=24):t[t.length-1].push(a)}),t}),n=f(()=>{let t=0;Array.isArray(s.gutter)?t=Number(s.gutter[0])||0:t=Number(s.gutter);const e=[];return t&&i.value.forEach(r=>{const a=t*(r.length-1)/r.length;r.forEach((c,N)=>{if(N===0)e.push({right:a});else{const g=t-e[c-1].right,P=a-g;e.push({left:g,right:P})}})}),e}),u=f(()=>{const{gutter:t}=s,e=[];if(Array.isArray(t)&&t.length>1){const r=Number(t[1])||0;if(r<=0)return e;i.value.forEach((a,c)=>{c!==i.value.length-1&&a.forEach(()=>{e.push({bottom:r})})})}return e});return l({spaces:n,verticalSpaces:u}),()=>{const{tag:t,wrap:e,align:r,justify:a}=s;return y(t,{class:R({[`align-${r}`]:r,[`justify-${a}`]:a,nowrap:!e})},{default:()=>{var c;return[(c=o.default)==null?void 0:c.call(o)]}})}}}),k=h(j),Y=k,[_,B]=d("col"),D={tag:m("div"),span:$(0),offset:A},I=v({name:_,props:D,setup(s,{slots:o}){const{parent:p,index:l}=E(w),i=f(()=>{if(!p)return;const{spaces:n,verticalSpaces:u}=p;let t={};if(n&&n.value&&n.value[l.value]){const{left:r,right:a}=n.value[l.value];t={paddingLeft:r?`${r}px`:null,paddingRight:a?`${a}px`:null}}const{bottom:e}=u.value[l.value]||{};return x(t,{marginBottom:e?`${e}px`:null})});return()=>{const{tag:n,span:u,offset:t}=s;return y(n,{style:i.value,class:B({[u]:u,[`offset-${t}`]:t})},{default:()=>{var e;return[(e=o.default)==null?void 0:e.call(o)]}})}}}),K=h(I),q=K;export{Y as V,q as a};