"use strict";(self["webpackChunkxbox_web_app"]=self["webpackChunkxbox_web_app"]||[]).push([[261],{4261:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>i,OVERLAY_BACK_BUTTON_PRIORITY:()=>o,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>a});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,r=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(a);const o=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(i);null!=e&&await e}}catch(e){console.error(e)}},i=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,r=r.filter((e=>e.id!==t.id)),o(t).then((()=>e=!1))}};i()}))},o=100,i=99}}]);
//# sourceMappingURL=261.js.map