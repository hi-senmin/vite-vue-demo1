import{d as e,r as t,o,c as n,a as s,p as r,b as a,e as l,t as u,F as c,w as d,f as i,g as m,h as p,i as h,j as v,k as f}from"./vendor.8b3775d8.js";var g=e({name:"App",components:{}});let _;g.render=function(e,s,r,a,l,u){const c=t("router-view");return o(),n(c)};const E={},b=function(e,t){if(!t||0===t.length)return e();if(void 0===_){const e=document.createElement("link").relList;_=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":_,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};var x=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:s(0)})});const k=d("data-v-0d0728d1");r("data-v-0d0728d1");const j=i(" Recommended IDE setup: "),V=i("vuex"),y=i(" + "),D=i("test"),A=i(" or "),H=i("axios"),L=l("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),W=i(" (if using "),I=l("code",null,"<script setup>",-1),P=i(") "),R=l("p",null,[i("See "),l("code",null,"README.md"),i(" for more information.")],-1),w=l("p",{class:"content"},[l("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),i(" | "),l("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1),O=l("p",null,[i(" Edit "),l("code",null,"components/HelloWorld.vue"),i(" to test hot module replacement. ")],-1);a();const S=k(((e,s,r,a,d,i)=>{const m=t("router-link");return o(),n(c,null,[l("h1",null,u(e.msg),1),l("p",null,[j,l(m,{to:"/vuex"},{default:k((()=>[V])),_:1}),y,l(m,{to:"/test"},{default:k((()=>[D])),_:1}),A,l(m,{to:"/axios"},{default:k((()=>[H])),_:1}),L,W,I,P]),R,w,l("button",{type:"button",onClick:s[1]||(s[1]=t=>e.count++)},"count is: "+u(e.count),1),O],64)}));x.render=S,x.__scopeId="data-v-0d0728d1";const T=e({name:"home",components:{HelloWorld:x},methods:{getTest(){}}}),$=l("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);T.render=function(e,s,r,a,u,d){const i=t("HelloWorld");return o(),n(c,null,[$,l(i,{msg:"Home"})],64)};const q=e({name:"vuex1",components:{}});q.render=function(e,t,s,r,a,l){return o(),n("h3",null,"vuex")};const C=[{path:"/",name:"home",component:T},{path:"/vuex",name:"Vuex",component:q},{path:"/test",name:"test",component:()=>b((()=>import("./test.b9c046ec.js")),["assets/test.b9c046ec.js","assets/vendor.8b3775d8.js"])},{path:"/axios",name:"Axios",component:()=>b((()=>import("./axios.b14735d2.js")),["assets/axios.b14735d2.js","assets/vendor.8b3775d8.js"])}],F=m({history:p(),routes:C}),M={count:0};var z=h({state:()=>M,mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});v(g).use(F).use(z).use(f).mount("#app");
