import{u as x,r as y}from"./use-route-b1061918.js";import{I as f}from"./index-5a7b6df9.js";import{A as L,e as t}from"./vue-libs-83dbabed.js";import{c as V,e as D,i as c}from"./use-translate-0400f29b.js";import{m as I,n as o,t as B,u,w as q}from"./with-install-a78877b5.js";const[A,r]=V("cell"),z={tag:I("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:B,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},N=D({},z,y),R=L({name:A,props:N,setup(e,{slots:n}){const b=x(),m=()=>{if(n.label||c(e.label))return t("div",{class:[r("label"),e.labelClass]},[n.label?n.label():e.label])},g=()=>{var a;if(n.title||c(e.title)){const l=(a=n.title)==null?void 0:a.call(n);return Array.isArray(l)&&l.length===0?void 0:t("div",{class:[r("title"),e.titleClass],style:e.titleStyle},[l||t("span",null,[e.title]),m()])}},h=()=>{const a=n.value||n.default;if(a||c(e.value))return t("div",{class:[r("value"),e.valueClass]},[a?a():t("span",null,[e.value])])},C=()=>{if(n.icon)return n.icon();if(e.icon)return t(f,{name:e.icon,class:r("left-icon"),classPrefix:e.iconPrefix},null)},v=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const a=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return t(f,{name:a,class:r("right-icon")},null)}};return()=>{const{tag:a,size:l,center:w,border:P,isLink:S,required:k}=e,i=e.clickable??S,s={center:w,required:!!k,clickable:i,borderless:!P};return l&&(s[l]=!!l),t(a,{class:r(s),role:i?"button":void 0,tabindex:i?0:void 0,onClick:b},{default:()=>{var d;return[C(),g(),h(),v(),(d=n.extra)==null?void 0:d.call(n)]}})}}}),T=q(R),G=T;export{T as C,G as V,z as c};
