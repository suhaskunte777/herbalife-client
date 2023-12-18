import{_ as m}from"./AuthHeader-UjLprxd0.js";import{d as h,o as _,s as r,r as u,a as l,c as x,w as a,e as s,b as o,f as e,g as c,h as f,F as w,t as i,u as d}from"./index-0XO5Nko-.js";import{r as b,a as g,b as y}from"./PhoneIcon-gWNL_IRQ.js";const C={class:"flex flex-col"},k={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},v={class:"inline-block min-w-full py-2 sm:px-6 lg:px-8"},N={class:"overflow-hidden"},B={class:"min-w-full text-left text-sm font-light"},M=e("caption",{class:"p-5 text-lg font-medium text-gray-900"},"List of clients",-1),A=e("thead",{class:"border-b font-medium dark:border-neutral-500"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"ID"),e("th",{scope:"col",class:"px-6 py-3"},"Full Name"),e("th",{scope:"col",class:"px-6 py-3"},"Connect with"),e("th",{scope:"col",class:"px-6 py-3"},"Actions")])],-1),E={class:"whitespace-nowrap px-6 py-4 font-medium"},F={class:"whitespace-nowrap px-6 py-4"},S={class:"whitespace-nowrap px-6 py-4"},V=["href"],$=["href"],D=["href"],I={class:"whitespace-nowrap px-6 py-4"},G={__name:"ClientIndex",setup(L){const p=h(()=>r.state.clients);return _(async()=>{await r.dispatch("getClients")}),(T,W)=>{const n=u("router-link");return l(),x(m,{title:"Clients"},{default:a(()=>[s(n,{to:{name:"ClientsCreate"},class:"bg-blue-500 p-3 rounded-md text-white"},{default:a(()=>[o("Create New Client ")]),_:1}),e("div",C,[e("div",k,[e("div",v,[e("div",N,[e("table",B,[M,A,e("tbody",null,[(l(!0),c(w,null,f(p.value,t=>(l(),c("tr",{key:t.id,class:"border-b dark:border-neutral-500"},[e("td",E,i(t.id),1),e("td",F,i(t.fullName),1),e("td",S,[e("a",{href:"tel:"+t.countryCode+ +t.phone,class:"bg-blue-500 p-1 m-1 rounded-md text-white inline-block"},[s(d(b),{class:"h-5 w-5 mx-3 text-green-300 inline-block"}),o("Call ")],8,V),e("a",{href:"https://wa.me/"+t.countryCode+t.phone,target:"_blank",class:"bg-green-500 p-1 m-1 rounded-md text-white inline-block"},[s(d(g),{class:"h-5 w-5 mx-3 text-green-900 inline-block"}),o(" WhatsApp ")],8,$),e("a",{href:"sms:"+t.countryCode+ +t.phone,class:"bg-blue-600 p-1 m-1 rounded-md text-white inline-block"},[s(d(y),{class:"h-5 w-5 mx-3 text-green-300 inline-block"}),o(" Message ")],8,D)]),e("td",I,[s(n,{to:{name:"ClientsShow",params:{id:t.id}},class:"bg-green-500 p-2 m-2 rounded-md text-white"},{default:a(()=>[o("Show")]),_:2},1032,["to"]),s(n,{to:{name:"ClientsEdit",params:{id:t.id}},class:"bg-yellow-500 p-2 m-2 rounded-md text-white"},{default:a(()=>[o("Edit")]),_:2},1032,["to"]),s(n,{to:{name:"MeasurementsCreate",params:{id:t.id}},class:"bg-indigo-500 p-2 m-2 rounded-md text-white"},{default:a(()=>[o("Add Measurement")]),_:2},1032,["to"])])]))),128))])])])])])])]),_:1})}}};export{G as default};
