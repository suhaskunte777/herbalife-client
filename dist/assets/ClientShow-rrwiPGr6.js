import{a as r,g as d,f as t,i as w,d as _,j as v,s as n,r as k,c as M,w as g,e as o,b as i,t as a,u as c,k as h,h as C,F as B,n as m}from"./index-0XO5Nko-.js";import{_ as O}from"./AuthHeader-UjLprxd0.js";import{r as F,a as N,b as A}from"./PhoneIcon-gWNL_IRQ.js";function S(b,p){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[t("path",{d:"M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"}),t("path",{d:"M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"})])}const V={class:"flex flex-col"},D={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},z={class:"inline-block min-w-full py-2 sm:px-6 lg:px-8"},R={class:"overflow-hidden"},$={class:"md:px-32 py-8 w-full"},I={class:"shadow overflow-hidden rounded border-b border-gray-200"},L={class:"min-w-full bg-white table-auto"},T={class:"text-gray-700"},W={class:"bg-gray-100"},Y=t("td",{class:"w-1/3 text-left py-3 px-4"},"Full Name",-1),j={class:"w-1/3 text-left py-3 px-4"},E=t("td",{class:"w-1/3 text-left py-3 px-4"},"Birth Date / Birth Year / Age",-1),H={class:"w-1/3 text-left py-3 px-4"},q={class:"bg-gray-100"},G=t("td",{class:"w-1/3 text-left py-3 px-4"},"Sponser Name",-1),J={class:"w-1/3 text-left py-3 px-4"},K=t("td",{class:"w-1/3 text-left py-3 px-4"},"Contact Details",-1),P={class:"w-1/3 text-left py-3 px-4"},Q=["href"],U=["href"],X=t("br",null,null,-1),Z=["href"],tt=["href"],et={class:"bg-gray-100"},st=t("td",{class:"w-1/3 text-left py-3 px-4"},"Address",-1),at={class:"w-1/3 text-left py-3 px-4"},lt={key:0},it={key:1},rt=t("br",null,null,-1),ot={class:"md:px-16 py-8 w-full"},dt={class:"shadow overflow-hidden rounded border-b border-gray-200"},nt={class:"min-w-full bg-white table-auto"},ct=t("thead",{class:"bg-gray-100"},[t("tr",null,[t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Age "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Height "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Weight "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Body Fat % "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Visceral Fat "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," BMR (RM) "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," BMI "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Body Age "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Trunk Fat "),t("th",{class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"}," Muscle Mass ")])],-1),pt={class:"text-gray-700"},xt={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},ut={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},_t={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},gt={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},ht={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},mt={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},bt={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},ft={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},yt={class:"text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"},Bt={__name:"ClientShow",setup(b){const p=w(),e=_(()=>n.state.currentClient),f=_(()=>"Information For : "+n.state.currentClient.fullName),l={bmiMal1:{min:1,max:18,class:"bg-yellow-100"},bmiMal2:{min:18.1,max:20,class:"bg-yellow-100"},bmiStandard:{min:20.1,max:23,class:"bg-green-100"},bmiObesMin:{min:23.1,max:25,class:"bg-orange-100"},bmiObes1:{min:25.1,max:28,class:"bg-orange-100"},bmiObes2:{min:28.1,max:30,class:"bg-orange-100"},bmiObes3:{min:30,max:99,class:"bg-red-100"}};return v(async()=>{await n.dispatch("getClient",p.params.id),console.log("From mounted",p.params.id,n.state.currentClient)}),(wt,vt)=>{const y=k("router-link");return r(),M(O,{title:f.value},{default:g(()=>{var x,u;return[o(y,{to:{name:"ClientsIndex"},class:"bg-blue-500 p-3 rounded-md text-white"},{default:g(()=>[i(" Back ")]),_:1}),t("div",V,[t("div",D,[t("div",z,[t("div",R,[t("div",$,[t("div",I,[t("table",L,[t("tbody",T,[t("tr",W,[Y,t("td",j,a(e.value.fullName),1)]),t("tr",null,[E,t("td",H,a(e.value.birthDate?e.value.birthDate+" / "+e.value.age:e.value.birthYear+" / "+e.value.age),1)]),t("tr",q,[G,t("td",J,a(e.value.referredBy),1)]),t("tr",null,[K,t("td",P,[t("a",{href:"tel:"+e.value.countryCode+ +e.value.phone,class:"bg-blue-500 p-2 m-2 rounded-md text-white inline-block"},[o(c(F),{class:"h-5 w-5 mx-3 text-green-300 inline-block"}),i(" Call ")],8,Q),t("a",{href:"https://wa.me/"+e.value.countryCode+e.value.phone,target:"_blank",class:"bg-green-500 p-2 m-2 rounded-md text-white inline-block"},[o(c(N),{class:"h-5 w-5 mx-3 text-green-900 inline-block"}),i(" WhatsApp ")],8,U),X,t("a",{href:"sms:"+e.value.countryCode+ +e.value.phone,class:"bg-blue-600 p-2 m-2 rounded-md text-white inline-block"},[o(c(A),{class:"h-5 w-5 mx-3 text-green-300 inline-block"}),i(" Message ")],8,Z),t("a",{href:"mailto:"+e.value.email,class:"bg-blue-600 p-2 m-2 rounded-md text-white inline-block",target:"_blank"},[o(c(S),{class:"h-5 w-5 mx-3 text-green-300 inline-block"}),i(" Mail ")],8,tt)])]),t("tr",et,[st,t("td",at,[t("address",null,[i(a((x=e.value)!=null&&x.address1?e.value.address1+",":"")+" ",1),e.value.address1?(r(),d("br",lt)):h("",!0),i(" "+a((u=e.value)!=null&&u.address2?e.value.address2+",":"")+" ",1),e.value.address2?(r(),d("br",it)):h("",!0),i(" "+a(e.value.city)+", "+a(e.value.state)+", "+a(e.value.country)+" - "+a(e.value.zip),1)])])])])])])]),rt,t("div",ot,[t("div",dt,[t("table",nt,[ct,t("tbody",pt,[(r(!0),d(B,null,C(e.value.measurements,s=>(r(),d("tr",{key:s.id,class:m(s.id%2===0?"bg-gray-100":"bg-white")},[t("td",xt,a(s.age),1),t("td",ut,a(s.height),1),t("td",{class:m(["text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider",{"bg-yellow-100":s.bmi>=l.bmiMal1Min&&s.bmi<=l.bmiMal2Max,"bg-green-100":s.bmi>=l.bmiStandardMin&&s.bmi<=l.bmiStandardMax,"bg-orange-100":s.bmi>=l.bmiObesMin&&s.bmi<=l.bmiObes1Max||s.bmi>=l.bmiObes2Min&&s.bmi<=l.bmiObes2Max,"bg-red-100":s.bmi>=l.bmiObes3Min}])},a(s.weight),3),t("td",_t,a(s.body_fat),1),t("td",gt,a(s.visceral_fat),1),t("td",ht,a(s.bmr),1),t("td",mt,a(s.bmi),1),t("td",bt,a(s.body_age),1),t("td",ft,a(s.trunk_fat),1),t("td",yt,a(s.muscle_mass),1)],2))),128))])])])])])])])])]}),_:1},8,["title"])}}};export{Bt as default};