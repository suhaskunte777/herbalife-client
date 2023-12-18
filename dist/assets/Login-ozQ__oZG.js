import{l as y,r as h,a,g as k,e as l,f as e,p as V,u as r,c as f,k as x,q as n,v as b,w as _,M as N,b as d,t as R,s as i}from"./index-0XO5Nko-.js";import{_ as q}from"./GuestHeader-GXDtD-_4.js";import{I as v}from"./InputError-aQZSOD7q.js";const B={class:"flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},C={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},M=["onSubmit"],S=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email address",-1),j={class:"mt-2"},E={class:"flex items-center justify-between"},L=e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1),U={class:"text-sm"},D={class:"mt-2"},I={class:"mt-2 flex items-center"},P=e("label",{for:"remember",class:"pl-2 text-block text-sm font-medium leading-6 text-gray-900"},"Remember me",-1),T=e("div",null,[e("button",{type:"submit",class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Sign in")],-1),F={class:"mt-10 text-center text-sm text-gray-500"},J={__name:"Login",setup($){const s=y({email:"",password:"",remember:!1}),w=()=>{i.dispatch("login",s.value)};return(z,t)=>{var u,c,g,p;const m=h("router-link");return a(),k("div",null,[l(q,{title:"Log in to your account"}),e("div",B,[e("div",C,[e("form",{class:"space-y-6",onSubmit:V(w,["prevent"])},[e("div",null,[S,(u=r(i).state.errors)!=null&&u.email?(a(),f(v,{key:0,messages:(c=r(i).state.errors)==null?void 0:c.email,entity:"email"},null,8,["messages"])):x("",!0),e("div",j,[n(e("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.email=o),autocomplete:"email",required:"true",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[b,s.value.email]])])]),e("div",null,[e("div",E,[L,e("div",U,[l(m,{to:{name:"RequestPasswordReset"},class:"font-semibold text-indigo-600 hover:text-indigo-500"},{default:_(()=>[d("Forgot password?")]),_:1})])]),(g=r(i).state.errors)!=null&&g.password?(a(),f(v,{key:0,messages:(p=r(i).state.errors)==null?void 0:p.password,entity:"password"},null,8,["messages"])):x("",!0),e("div",D,[n(e("input",{id:"password",name:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.password=o),required:"true",autocomplete:"current-password",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[b,s.value.password]])])]),e("div",null,[e("div",I,[n(e("input",{id:"remember",name:"remember",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.remember=o),autocomplete:"remember",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[N,s.value.remember]]),P])]),T],40,M),e("p",F,[d(" Not a member? "+R(" ")+" "),l(m,{to:{name:"Register"},class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:_(()=>[d("Register here")]),_:1})])])])])}}};export{J as default};