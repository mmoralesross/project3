(this.webpackJsonpmarketreact=this.webpackJsonpmarketreact||[]).push([[0],{39:function(e,t,a){e.exports=a(72)},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=a(11),i=a(3),m=a(4),u=a.n(m),s=function(){return u.a.get("/api/reactions")},d=function(e){return u.a.post("/api/reactions",e)},E=function(e,t){return u.a.post("/api/sentiments/"+e,t)},p=function(e){return u.a.post("/api/users/signup",e)},f=function(){return u.a.post("/api/users/login")},b=function(){return u.a.get("/api/users/logout")},g=function(e){return u.a.get("/api/users/"+e)},h=function(){return u.a.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=2MlxruKUsf94PqwoSGi3oOM3YvCl1Gab")},v=a(75),j=a(76);var N=function(e){return l.a.createElement(v.a,{bg:"light",expand:"lg",className:"mb-1"},l.a.createElement(v.a.Brand,null,"MarketReact"),l.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(j.a,{className:"ml-auto"},e.children)))};var O=function(e){return l.a.createElement("div",{className:"container-lg"},e.children)},w=a(14),y=a(12),k=a(8);var C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",Object.assign({className:"card alert-"+e.color},e),l.a.createElement("div",{className:"card-body"},e.children)),l.a.createElement("br",null))};var S=function(e){return l.a.createElement("button",Object.assign({},e,{type:"button",className:"btn btn-outline-"+e.color,style:{float:"right",marginBottom:10}}),e.children)};var x=function(e){return l.a.createElement("div",{className:"input-group input-group-sm mb-3"},l.a.createElement("input",Object.assign({},e,{type:"text",className:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})),e.children)};var _=function(){var e=Object(n.useState)({email:""}),t=Object(k.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(k.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)({}),d=Object(k.a)(u,2),p=d[0],b=d[1];function g(e){var t=e.target,a=t.name,n=t.value;b(Object(y.a)(Object(y.a)({},p),{},Object(w.a)({},a,n)))}function h(e){e.preventDefault(),E({sentiment:p.sentiment,email:a}).then((function(e){return console.log(e)})).catch((function(e){return console.group(e)}))}return Object(n.useEffect)((function(){f().then((function(e){return r(e.email)})).catch((function(e){return console.log(e)})),s().then((function(e){return m(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(O,null,i.length?l.a.createElement(O,null,i.map((function(e){return l.a.createElement(C,{key:e._id,"data-card-id":e._id,color:"info"},l.a.createElement("p",null,l.a.createElement("strong",null,e.email,":")),l.a.createElement("hr",null),l.a.createElement("p",null,e.reaction),l.a.createElement(x,{onChange:g,name:"sentiment","data-sentiment-id":e._id,placeholder:"Comment"}),l.a.createElement(S,{color:"success btn-sm",disabled:!p.sentiment,onClick:h},"Reply"),l.a.createElement("div",null,e.sentiments.map((function(e){return l.a.createElement(C,{key:e._id,id:e._id,color:"danger"},l.a.createElement("p",null,l.a.createElement("strong",null,e.email," says:")," ",e.sentiment),l.a.createElement("hr",null))}))))}))):l.a.createElement("div",null,"No reactions yet :("))};a(67);var P=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){h().then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[a]),l.a.createElement(O,null,a.length?l.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},a.map((function(e){return l.a.createElement("li",{"data-target":e.uri,"data-slide-to":e.uri})}))),l.a.createElement("div",{className:"carousel-inner"},a.map((function(e){return l.a.createElement("div",{className:"carousel-item","data-img-id":e.uri},l.a.createElement("img",{src:e.multimedia[1].url,className:"d-block w-100",alt:a[0].multimedia[0].caption}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",null,e.multimedia[1].caption)))})))):l.a.createElement("h1",null,"No Data found!"))};var D=function(){return l.a.createElement(O,null,l.a.createElement(N,null,l.a.createElement(o.b,{to:"/profile"},"Profile"),l.a.createElement(o.b,{style:{float:"right"},onClick:function(){b().then((function(){return window.location.replace("/login")})).catch((function(e){return console.log(e)}))}},"Log Out")),l.a.createElement(O,null,l.a.createElement(P,null)),l.a.createElement(_,null))};var L=function(e){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"MarketReact"),l.a.createElement("p",{className:"lead"},"Stock market community")))};var M=function(){var e=Object(n.useState)({}),t=Object(k.a)(e,2),a=t[0],r=t[1];function c(e){var t=e.target,n=t.name,l=t.value;r(Object(y.a)(Object(y.a)({},a),{},Object(w.a)({},n,l)))}return l.a.createElement(O,null,l.a.createElement(L,null),l.a.createElement("form",{className:"px-4 py-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{name:"email"},"Email address"),l.a.createElement("input",{onChange:c,name:"email",id:"email",type:"email",className:"form-control",placeholder:"email@example.com"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{name:"password"},"Password"),l.a.createElement("input",{onChange:c,name:"password",id:"password",type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("button",{disabled:!(a.email&&a.password),onClick:function(e){e.preventDefault(),f({email:a.email,password:a.password}).then((function(){return window.location.replace("/home")})).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-success"},"Log in")),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement(o.b,{to:"/signup",className:"dropdown-item"},"New around here? Sign up"))};var B=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card form alert-"+e.color},l.a.createElement("div",{className:"card-body"},e.children)),l.a.createElement("br",null))};var G=function(){var e=Object(n.useState)({email:""}),t=Object(k.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),o=Object(k.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){f().then((function(e){return r(e.email)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(O,null,l.a.createElement(B,null,l.a.createElement(x,{onChange:function(e){var t=e.target,a=t.name,n=t.value;m(Object(y.a)(Object(y.a)({},i),{},Object(w.a)({},a,n)))},name:"reaction",id:"reaction",placeholder:"Post content"}),l.a.createElement(S,{color:"info",disabled:!i.reaction,onClick:function(e){e.preventDefault(),d({reaction:i.reaction,email:a}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Post")))};var R=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){g("6054663061870724d4e99c3e").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(O,null,l.a.createElement(N,null,l.a.createElement(o.b,{to:"/home"},"Home"),l.a.createElement(o.b,{style:{float:"right"},onClick:function(){b().then((function(){return window.location.replace("/login")})).catch((function(e){return console.log(e)}))}},"Log Out")),l.a.createElement(G,null),l.a.createElement(O,null,a.length?l.a.createElement(O,null,a.map((function(e){return l.a.createElement(C,{key:e._id,"data-card-id":e._id,color:"info"},l.a.createElement("p",null,l.a.createElement("strong",null,e.email,":")),l.a.createElement("hr",null),l.a.createElement("p",null,e.reaction),e.sentiments?l.a.createElement("div",null,e.sentiments.map((function(e){return l.a.createElement(C,{key:e._id,id:e._id,color:"danger"},l.a.createElement("p",null,l.a.createElement("strong",null,e.email," says:")," ",e.sentiment),l.a.createElement("hr",null))}))):"no comments yet...")}))):l.a.createElement("div",null,"No reactions yet :(")))};var F=function(){var e=Object(n.useState)({}),t=Object(k.a)(e,2),a=t[0],r=t[1];function c(e){var t=e.target,n=t.name,l=t.value;r(Object(y.a)(Object(y.a)({},a),{},Object(w.a)({},n,l)))}return l.a.createElement(O,null,l.a.createElement(L,null),l.a.createElement("form",{className:"px-4 py-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{name:"email"},"Email address"),l.a.createElement("input",{onChange:c,name:"email",id:"email",type:"email",className:"form-control",placeholder:"email@example.com"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{name:"password"},"Password"),l.a.createElement("input",{onChange:c,name:"password",id:"password",type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("button",{disabled:!(a.email&&a.password),onClick:function(e){e.preventDefault(),p({email:a.email,password:a.password}).then((function(){return window.location.replace("/home")})).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-success"},"Sign Up")),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement(o.b,{to:"/login",className:"dropdown-item"},"Log In"))};var I=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/signup"]},l.a.createElement(F,null)),l.a.createElement(i.a,{exact:!0,path:"/login"},l.a.createElement(M,null)),l.a.createElement(i.a,{exact:!0,path:"/home"},l.a.createElement(D,null)),l.a.createElement(i.a,{exact:!0,path:"/profile"},l.a.createElement(R,null)))))};a(71);c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f04e6535.chunk.js.map