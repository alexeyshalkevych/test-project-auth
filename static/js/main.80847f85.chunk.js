(this.webpackJsonptest_for_auth=this.webpackJsonptest_for_auth||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=a(5),s=a(7),u=a(2),p=a.n(u),i=a(3),m=a(6),h=a(18),d=a(19),f=a.n(d),v=a(4),O=a.n(v),w=function(){var e=Object(n.useState)({email:"",password:"",confirmPassword:"",name:""}),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),d=u[0],v=u[1],w=Object(n.useState)(""),b=Object(m.a)(w,2),g=b[0],E=b[1],k=function(){var e=Object(i.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("https://powerful-waters-91620.herokuapp.com/auth/register",a);case 4:n=e.sent,r=n.data,console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:o({email:"",password:"",confirmPassword:"",name:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.target,n=t.value,r=t.name;o(Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},r,n)))},L=function(){var e=Object(i.a)(p.a.mark((function e(t){var a,n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.accessToken,console.log(t),n={accessToken:a},e.next=6,O.a.post("https://powerful-waters-91620.herokuapp.com/auth/google",n);case 6:r=e.sent,o=r.data,v(o.token),E(""),console.log("GOOGLE LOGIN GOOD"),console.log(o),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("GOOGLE LOGIN FAILED"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(p.a.mark((function e(t){var a,n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.accessToken,n={accessToken:a},e.next=5,O.a.post("https://powerful-waters-91620.herokuapp.com/auth/facebook",n);case 5:r=e.sent,o=r.data,E(o.token),v(""),console.log("FACEBOOK LOGIN GOOD"),console.log(o),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("FACEBOOK LOGIN FAILED"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,d?t=d:g&&(t=g),e.prev=2,a={method:"POST",url:"https://powerful-waters-91620.herokuapp.com/auth/logout",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/x-www-form-urlencoded"}},e.next=6,O()(a);case 6:n=e.sent,console.log("LOGOUT GOOD"),console.log(n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("LOGOUT FAILED"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:k},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"email",name:"email",value:a.email,onChange:x})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"password",name:"password",value:a.password,onChange:x})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"confirm password",name:"confirmPassword",value:a.confirmPassword,onChange:x})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:a.name,onChange:x})),r.a.createElement("button",{type:"submit"},"register")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(h.GoogleLogin,{clientId:"1016113227604-0u7tph6hm9s2bbnvi19h8dvdg3h5lqu4.apps.googleusercontent.com",buttonText:"Login",onSuccess:L,onFailure:L,autoLoad:!1,cookiePolicy:"https://powerful-waters-91620.herokuapp.com"}),r.a.createElement(f.a,{appId:"628094021455729",fields:"name,email,picture",callback:G,autoLoad:!1,buttonStyle:{padding:"12px 16px",fontSize:"14px",marginLeft:"10px"}})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:j},"logout")))},b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Hello Github"),r.a.createElement(w,null))};a(43);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.80847f85.chunk.js.map