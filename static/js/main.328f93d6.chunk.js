(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),s=t.n(c),r=t(11),m=t(12),i=t(14),o=t(13),d=t(15),E=t(141),u=t(130),p=t(16),v=t(132),h=t(133),N=t(134),f=t(135),g=t(136),b=t(137),k=t(143),w=t(144),y=t(138),O=t(139),C=t(142),A=t(62),j=t.n(A),S=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(j.a,{show:this.props.show,type:"info",title:"Comming Soon",text:"This feature is not available yet",onConfirm:this.props.onConfirm}))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).toggle=t.toggle.bind(Object(p.a)(Object(p.a)(t))),t.collapse=t.collapse.bind(Object(p.a)(Object(p.a)(t))),t.cs=t.cs.bind(Object(p.a)(Object(p.a)(t))),t.state={isOpen:!1,swalShow:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"collapse",value:function(){this.setState({isOpen:!1})}},{key:"cs",value:function(){this.setState({swalShow:!this.state.swalShow})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.changeNav)}},{key:"changeNav",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,a=document.getElementById("navbar");e>40?a.classList.add("isScrollDown"):a.classList.remove("isScrollDown")}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a,{className:"fixed-top",color:"light",light:!0,expand:"md",id:"navbar"},l.a.createElement(h.a,{id:"name",href:"/"},"arfani hidayat"),l.a.createElement(N.a,{onClick:this.toggle}),l.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(g.a,{className:"ml-auto",navbar:!0},l.a.createElement(b.a,null,l.a.createElement(C.a,{exact:!0,to:"/",activeClassName:"active",className:"nav-link",onClick:this.collapse},"Home")),l.a.createElement(b.a,null,l.a.createElement(C.a,{to:"/experiences",activeClassName:"active",className:"nav-link",onClick:this.collapse},"Experiences")),l.a.createElement(b.a,null,l.a.createElement(C.a,{to:"/services",activeClassName:"active",className:"nav-link",onClick:this.collapse},"Services")),l.a.createElement(b.a,null,l.a.createElement("button",{className:"nav-link",onClick:this.cs,style:{background:"transparent"}},"Portfolio")),l.a.createElement(k.a,{nav:!0,inNavbar:!0},l.a.createElement(w.a,{nav:!0,caret:!0,title:"Select your language"},"Lang"),l.a.createElement(y.a,{right:!0},l.a.createElement(O.a,{onClick:this.collapse},"English"),l.a.createElement(O.a,{onClick:this.cs},"Bahasa Indonesia"),l.a.createElement(O.a,{onClick:this.cs},"Sasak (Lombok)"),l.a.createElement(O.a,{onClick:this.cs},"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"))))),l.a.createElement(S,{show:this.state.swalShow,onConfirm:function(){return e.setState({swalShow:!1})}}))}}]),a}(n.Component),x=function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"copyright"},"\xa9 2019 All rights reserved. CV template by rfun"))},I=t(65),L=t.n(I),B=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={linkWA:"https://web.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20",pp:"/images/pp.png"},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&this.setState({linkWA:"https://api.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20"}),new L.a("#prof",{strings:["Computer Engineering","Informatics Engineering"],typeSpeed:50,backSpeed:30,backDelay:1500,startDelay:1e3,cursorChar:"_",loop:!0})}},{key:"render",value:function(){return l.a.createElement("div",{id:"home"},l.a.createElement("div",{className:"header",style:{backgroundColor:"#343a40"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"photo",className:"col-md-6"},l.a.createElement("img",{src:this.state.pp,style:{width:270,height:270},alt:"Profile"})),l.a.createElement("div",{id:"id1",className:"col-md-6"},l.a.createElement("h1",{id:"name"},"Arfani Hidayat"),l.a.createElement("p",{id:"prof"}),l.a.createElement("div",{id:"links"},l.a.createElement("a",{href:"https://github.com/arfani"},l.a.createElement("span",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://fb.me/muhammadarfanihidayat"},l.a.createElement("span",{className:"fa fa-facebook-square"})),l.a.createElement("a",{href:"https://arfanihidayat.wordpress.com"},l.a.createElement("span",{className:"fa fa-wordpress"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/arfani-hidayat-0949a5102"},l.a.createElement("span",{className:"fa fa-linkedin-square"})))))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"about",className:"col-lg-6"},l.a.createElement("h3",null,"About Me"),l.a.createElement("p",null,"Bismillah. My Name is Arfani Hidayat. You can call me Arfan, if you wanna know me deeply just click button bellow. Thanks"),l.a.createElement("a",{href:this.state.linkWA,className:"btn btn-success mb-3"},l.a.createElement("span",{className:"fa fa-whatsapp"})," Poke Me")),l.a.createElement("div",{id:"id2",className:"col-lg-6"},l.a.createElement("h3",null,"Detail"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Born"),l.a.createElement("span",{className:"value"},"Mataram, 3 Mei 1993")),l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Residence"),l.a.createElement("span",{className:"value"},"Indonesia")),l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Address"),l.a.createElement("span",{className:"value"},"Mataram, Lombok")),l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Email"),l.a.createElement("span",{className:"value"},"Arfanihidayat@gmail.com")),l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Phone/WA"),l.a.createElement("span",{className:"value"},"+62 81907456710")),l.a.createElement("li",null,l.a.createElement("span",{className:"label"},"Freelance"),l.a.createElement("span",{className:"value"},"Available")))))))}}]),a}(n.Component),D=t(66),P=t.n(D),q=t(67),W=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={swalShow:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"genCanvas",value:function(){P()(document.getElementById("exp")).then(function(e){var a=e.toDataURL("image/png"),t=new q;t.addImage(a,"JPEG",0,0,210,260),t.setFontSize(12),t.setTextColor(150),t.text("phone: 081907456710 || email : arfanihidayat@gmail.com",50,293),t.save("rfunExp.pdf")})}},{key:"render",value:function(){return l.a.createElement("div",{id:"exp"},l.a.createElement("div",{className:"header",style:{backgroundColor:"#343a40"}},l.a.createElement("h1",null,"Experiences")),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"block work"},l.a.createElement("div",{className:"block-title"},l.a.createElement("h3",null,"Work")),l.a.createElement("div",{className:"timeline"},l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Software Developer"),l.a.createElement("span",{className:"period"},"Sep 2017 - Current"),l.a.createElement("span",{className:"company"},"PT. Braja Marketindo"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"IT Support"),l.a.createElement("span",{className:"period"},"Jan 2017 - Apr 2017"),l.a.createElement("span",{className:"company"},"AKBID Bhakti Kencana Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Computer Teacher"),l.a.createElement("span",{className:"period"},"Sep 2015 - Apr 2017"),l.a.createElement("span",{className:"company"},"SMK Bhakti Kencana Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Visitor"),l.a.createElement("span",{className:"period"},"Feb 2013 - Dec 2014"),l.a.createElement("span",{className:"company"},"KISEL Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Employee"),l.a.createElement("span",{className:"period"},"Mar 2011 - Aug 2011"),l.a.createElement("span",{className:"company"},"Galaxy Electronic"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur"))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"block edu"},l.a.createElement("div",{className:"block-title"},l.a.createElement("h3",null,"Education")),l.a.createElement("div",{className:"timeline"},l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Bachelor of Informatics Engineering"),l.a.createElement("span",{className:"period"},"2016 - 2018"),l.a.createElement("span",{className:"school"},"STMIK Bumigora Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"D3 Computer Engineering"),l.a.createElement("span",{className:"period"},"2012 - 2015"),l.a.createElement("span",{className:"school"},"AMIKOM Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("h5",{className:"title"},"Science Class"),l.a.createElement("span",{className:"period"},"2008 - 2011"),l.a.createElement("span",{className:"school"},"Madrasah Aliyah Negeri 1 Mataram"),l.a.createElement("div",{className:"desc"},"Lorem fugiat pariatur aspernatur deserunt consequatur")))))),l.a.createElement("button",{className:"btn btn-warning",onClick:this.genCanvas,"data-html2canvas-ignore":!0},"Download Resume")))}}]),a}(l.a.Component),T=function(e){return l.a.createElement("div",{id:"services"},l.a.createElement("div",{className:"header",style:{backgroundColor:"#343a40"}},l.a.createElement("h1",null,"Services")),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"block-title"},l.a.createElement("h3",null,"My Services"))),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-hospital-o"}))),l.a.createElement("h5",null,"Network Installation"),l.a.createElement("p",null,"Included: cable installation, modem and mikrotik setting, etc.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-terminal"}))),l.a.createElement("h5",null,"Back-End Coding"),l.a.createElement("p",null,"Included: regular App, restfulAPI, etc.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-laptop"}))),l.a.createElement("h5",null,"Web Design"),l.a.createElement("p",null,"included: responsive design, SPA, etc.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-shopping-cart"}))),l.a.createElement("h5",null,"E-commerce"),l.a.createElement("p",null,"Regular e-commerce website for your products.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-android"}))),l.a.createElement("h5",null,"Android App"),l.a.createElement("p",null,"Regular android mobile application.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6",style:{opacity:"0.5"}},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-apple"}))),l.a.createElement("h5",null,"iOS App"),l.a.createElement("p",{style:{color:"#aa0000"}},"Not available yet.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-desktop"}))),l.a.createElement("h5",null,"Desktop App"),l.a.createElement("p",null,"Regular desktop application for your company, shop, etc.")))," ",l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("div",{className:"service-block"},l.a.createElement("div",{className:"service-info"},l.a.createElement("div",{className:"service-image"},l.a.createElement("span",{className:"fa fa-mortar-board"}))),l.a.createElement("h5",null,"Private Course"),l.a.createElement("p",null,"We can discuss the method and time to learn programming, wordpress, linux, software office tools, etc.")))," ")))},K=function(e){return l.a.createElement("div",{id:"404"},l.a.createElement("h2",null,"Location ",l.a.createElement("code",null,e.location.pathname)," doesn't exist"))},R=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{id:"preload"}),l.a.createElement("div",{id:"root-content"},l.a.createElement(M,null),l.a.createElement("div",{id:"box"},l.a.createElement(E.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:B}),l.a.createElement(u.a,{path:"/experiences",component:W}),l.a.createElement(u.a,{path:"/services",component:T}),l.a.createElement(u.a,{component:K})))),l.a.createElement(x,null))}}]),a}(n.Component),F=t(140);t(123),t(125),t(127),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=document.getElementById("root");s.a.render(l.a.createElement(F.a,null,l.a.createElement(R,null)),H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,a,t){e.exports=t(129)}},[[68,2,1]]]);
//# sourceMappingURL=main.328f93d6.chunk.js.map