import{r as D,s as E,l as O}from"./use-translate-0400f29b.js";import{u as C}from"./use-touch-8cd17a21.js";import{L as T,I as g,u as S}from"./vue-libs-83dbabed.js";let e=0;const m="van-overflow-hidden";function b(v,n){const t=C(),f="01",h="10",c=o=>{t.move(o);const L=t.deltaY.value>0?h:f,I=E(o.target,v.value),{scrollHeight:u,offsetHeight:l,scrollTop:d}=I;let s="11";d===0?s=l>=u?"00":"01":d+l>=u&&(s="10"),s!=="11"&&t.isVertical()&&!(parseInt(s,2)&parseInt(L,2))&&O(o,!0)},a=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",c,{passive:!1}),e||document.body.classList.add(m),e++},r=()=>{e&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",c),e--,e||document.body.classList.remove(m))},p=()=>n()&&a(),i=()=>n()&&r();D(p),T(i),g(i),S(n,o=>{o?a():r()})}export{b as u};
