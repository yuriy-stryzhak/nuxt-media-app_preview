import{u as _,a as v}from"./BwC3k-Vi.js";import{d as h,J as x,r as u,o as b,v as V,z as o,A as n,V as j,x as y,y as C,t as w,L as k,M as A,O as B,K as e,P as L,N as p}from"./nDQ2BZ9T.js";import{_ as D}from"./BlqUI7wT.js";const N={class:"container mx-auto py-10"},S={class:"text-2xl font-bold mb-4 mt-10 text-center"},P=h({__name:"index",setup($){const t=_(),i=x(),r=u([]),l=u(""),m=async()=>{t.loading=!0;try{const a=await v.get("https://sat7.faulio.com/api/v1/pageblocks/vod_main_page");l.value=a.data[2].title,r.value=a.data[2].programsobjects,t.loading=!1}catch(a){t.loading=!1,console.error("Error fetching projects:",a)}},f=()=>{i.push("/signin")};return b(()=>{m(),t.restoreSession()}),(a,s)=>(w(),V("div",N,[o(j,null,{default:n(()=>[o(k,null,{default:n(()=>[o(A,{cols:"12",class:"d-flex justify-between align-center mb-10"},{default:n(()=>{var c,d;return[o(B,{content:(c=e(t).favoritesData)==null?void 0:c.count_item,color:"red",overlap:"",class:L(((d=e(t).favoritesData)==null?void 0:d.count_item)===0?"invisible":"")},{default:n(()=>[o(p,{"append-icon":"mdi-heart",text:"Favorites",rounded:"","min-width":"auto",border:"",elevation:"4",disabled:!e(t).isAuthenticated,onClick:s[0]||(s[0]=g=>e(i).push("/favorites"))},null,8,["disabled"])]),_:1},8,["content","class"]),o(p,{color:"primary","append-icon":e(t).isAuthenticated?"mdi-logout":"mdi-login",text:e(t).isAuthenticated?"Logout":"Login",rounded:"","min-width":"auto",border:"",elevation:"4",onClick:s[1]||(s[1]=g=>e(t).isAuthenticated?e(t).logout():f())},null,8,["append-icon","text"])]}),_:1})]),_:1})]),_:1}),y("h1",S,C(l.value),1),o(D,{projects:r.value},null,8,["projects"])]))}});export{P as default};