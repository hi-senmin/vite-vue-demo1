import{d as e,r as t,o,c as n,a,p as s,b as c,e as r,t as d,F as l,w as u,f as m,g as i,h as p,i as f,j as h,k as v,l as g}from"./vendor.c97e773d.js";var _=e({name:"App",components:{}});let k;_.render=function(e,a,s,c,r,d){const l=t("router-view");return o(),n(l)};const E={},b=function(e,t){if(!t||0===t.length)return e();if(void 0===k){const e=document.createElement("link").relList;k=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":k,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};var V=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:a(0)})});const j=u("data-v-8c9fce48");s("data-v-8c9fce48");const x=m('<p data-v-8c9fce48> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-8c9fce48>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-8c9fce48> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-8c9fce48>Volar</a> (if using <code data-v-8c9fce48>&lt;script setup&gt;</code>) </p><p data-v-8c9fce48>See <code data-v-8c9fce48>README.md</code> for more information.</p><p class="content" data-v-8c9fce48><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-8c9fce48> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-8c9fce48>Vue 3 Docs</a></p>',3),y=r("p",null,[i(" Edit "),r("code",null,"components/HelloWorld.vue"),i(" to test hot module replacement. ")],-1);c();const D=j(((e,t,a,s,c,u)=>(o(),n(l,null,[r("h1",null,d(e.msg),1),x,r("button",{type:"button",onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+d(e.count),1),y],64))));V.render=D,V.__scopeId="data-v-8c9fce48";const A=e({name:"home",components:{HelloWorld:V},methods:{getTest(){}}}),H=r("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);A.render=function(e,a,s,c,d,u){const m=t("HelloWorld");return o(),n(l,null,[H,r(m,{msg:"Home"})],64)};const L=e({name:"vuex1",components:{}});L.render=function(e,t,a,s,c,r){return o(),n("h3",null,"vuex")};const W=[{path:"/",name:"home",component:A},{path:"/vuex",name:"Vuex",component:L},{path:"/test",name:"test",component:()=>b((()=>import("./test.ab068462.js")),["assets/test.ab068462.js","assets/vendor.c97e773d.js"])},{path:"/axios",name:"Axios",component:()=>b((()=>import("./axios.def6ffcc.js")),["assets/axios.def6ffcc.js","assets/vendor.c97e773d.js"])}],I=p({history:f(),routes:W}),P={count:0};var R=h({state:()=>P,mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});v(_).use(I).use(R).use(g).mount("#app");