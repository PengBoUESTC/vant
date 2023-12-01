import{V as w,b as Y}from"./index-3bb89b35.js";import{V as I}from"./index-3124e750.js";import{V as L}from"./index-fcac6cfc.js";import{m as R,c as E,o as $,h as V,l as G,a0 as W,a as j}from"./use-translate-0400f29b.js";import{u as q}from"./use-lock-scroll-1eff2e8c.js";import{u as J}from"./use-touch-8cd17a21.js";import{u as K}from"./use-sync-prop-ref-60eae172.js";import{A as U,y as x,D as y,u as Q,e as n,o as k,c as X,w as s,C as e,a as Z,F as ee,b as te,d as _,t as P}from"./vue-libs-83dbabed.js";import{c as M}from"./closest-17b2cc6c.js";import{c as B,b as ae,t as H,w as ne}from"./with-install-a78877b5.js";import"./use-id-c5eb2431.js";import"./use-expose-efcfdee3.js";import"./use-route-b1061918.js";import"./index-c916422a.js";import"./index-d928a42a.js";import"./on-popup-reopen-bcf43cef.js";import"./use-refs-374c0fba.js";import"./index-e72b81d7.js";import"./constant-ee6e27d7.js";import"./interceptor-3c3c2616.js";import"./index-5a7b6df9.js";import"./use-scope-id-e548748d.js";const oe={height:B(0),anchors:ae(),duration:B(.3),contentDraggable:H,lockScroll:Boolean,safeAreaInsetBottom:H},[re,b]=E("floating-panel"),le=U({name:re,props:oe,emits:["heightChange","update:height"],setup(o,{emit:h,slots:l}){const i=x(),m=x(),a=K(()=>+o.height,t=>h("update:height",t)),r=y(()=>({min:o.anchors[0]??100,max:o.anchors[o.anchors.length-1]??Math.round($.value*.6)})),C=y(()=>o.anchors.length>=2?o.anchors:[r.value.min,r.value.max]),f=x(!1),F=y(()=>({height:V(r.value.max),transform:`translateY(calc(100% + ${V(-a.value)}))`,transition:f.value?"none":`transform ${o.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`})),N=t=>{const c=Math.abs(t),{min:g,max:u}=r.value;return c>u?-(u+(c-u)*.2):c<g?-(g-(g-c)*.2):t};let v,d=-1;const p=J(),z=t=>{p.start(t),f.value=!0,v=-a.value,d=-1},O=t=>{var u;p.move(t);const c=t.target;if(m.value===c||(u=m.value)!=null&&u.contains(c)){const{scrollTop:T}=m.value;if(d=Math.max(d,T),!o.contentDraggable)return;if(-v<r.value.max)G(t,!0);else if(!(T<=0&&p.deltaY.value>0)||d>0)return}const g=p.deltaY.value+v;a.value=-N(g)},A=()=>{d=-1,f.value=!1,a.value=M(C.value,a.value),a.value!==-v&&h("heightChange",{height:a.value})};return Q(r,()=>{a.value=M(C.value,a.value)},{immediate:!0}),q(i,()=>o.lockScroll||f.value),R("touchmove",O,{target:i}),()=>{var t;return n("div",{class:[b(),{"van-safe-area-bottom":o.safeAreaInsetBottom}],ref:i,style:F.value,onTouchstartPassive:z,onTouchend:A,onTouchcancel:A},[n("div",{class:b("header")},[n("div",{class:b("header-bar")},null)]),n("div",{class:b("content"),ref:m},[(t=l.default)==null?void 0:t.call(l)])])}}}),se=ne(le),S=se,ie={style:{"text-align":"center",padding:"15px"}},ce={style:{"text-align":"center",padding:"15px"}},Be=U({__name:"index",setup(o){const{height:h}=W(),l=j({"zh-CN":{customAnchors:"自定义锚点",headDragOnly:"仅头部拖拽",panelShowHeight:"面板显示高度",contentUnDrag:"内容不可拖拽"},"en-US":{customAnchors:"Custom Anchors",headDragOnly:"Head Drag Only",panelShowHeight:"Panel Show Height",contentUnDrag:"Content cannot be dragged"}}),D=[100,Math.round(.4*h.value),Math.round(.7*h.value)],i=x(D[0]);return(m,a)=>(k(),X(e(Y),null,{default:s(()=>[n(e(w),{title:e(l)("basicUsage")},{default:s(()=>[n(e(S),null,{default:s(()=>[n(e(L),null,{default:s(()=>[(k(),Z(ee,null,te(26,r=>n(e(I),{key:r,title:String.fromCharCode(r+64),size:"large"},null,8,["title"])),64))]),_:1})]),_:1})]),_:1},8,["title"]),n(e(w),{title:e(l)("customAnchors")},{default:s(()=>[n(e(S),{height:i.value,"onUpdate:height":a[0]||(a[0]=r=>i.value=r),anchors:D},{default:s(()=>[_("div",ie,[_("p",null,P(e(l)("panelShowHeight"))+" "+P(i.value.toFixed(0))+" px",1)])]),_:1},8,["height"])]),_:1},8,["title"]),n(e(w),{title:e(l)("headDragOnly")},{default:s(()=>[n(e(S),{"content-draggable":!1},{default:s(()=>[_("div",ce,[_("p",null,P(e(l)("contentUnDrag")),1)])]),_:1})]),_:1},8,["title"])]),_:1}))}});export{Be as default};
