(this.webpackJsonpvdp=this.webpackJsonpvdp||[]).push([[0],{126:function(e,a,t){},127:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),n=t(20),c=t.n(n),r=(t(126),t(116)),o=t(212),d=(t(127),t(128),t.p+"static/media/s-1.a039937d.jpg"),l=t.p+"static/media/s-2.508f0aaf.jpg",j=t.p+"static/media/s-3.2743c882.jpg",u=t.p+"static/media/s-4.b0cd7e4c.jpg",h=t.p+"static/media/s-5.52d6607d.jpg",b=t.p+"static/media/s-6.52d6607d.jpg",p=t.p+"static/media/s-7.97b92628.jpg",m=t(215),v=t(213),O=t.p+"static/media/logo.7dda1dce.jpeg",g=t(5);function f(){return Object(g.jsxs)(v.a.header,{initial:{opacity:0},animate:{opacity:1},children:[Object(g.jsx)(v.a.img,{animate:{height:"50vh"},transition:{delay:2},src:O,alt:"logo"}),Object(g.jsxs)(v.a.nav,{initial:{y:10},animate:{y:0},children:[Object(g.jsx)(m.a,{href:"#services",children:"Services"}),Object(g.jsx)(m.a,{href:"#contact",children:"Contact us"}),Object(g.jsx)(m.a,{href:"#works",children:"Works"})]})]})}var x=t(41),y=t(40),w=t(211),k=t(214),N=t(74),W=t(75),S=t.n(W),C=t(99),D=t(103);D.a.initializeApp({apiKey:"AIzaSyA9C0KYn8VJbdqhdviD2Tlv9qB82ZRFzqY",authDomain:"vdp-project-d09fd.firebaseapp.com",projectId:"vdp-project-d09fd",storageBucket:"vdp-project-d09fd.appspot.com",messagingSenderId:"305179282624",appId:"1:305179282624:web:bcdf34be5a66481f7ab125"});var I=D.a.firestore().collection("responses");function A(){return(A=Object(C.a)(S.a.mark((function e(a){var t,s,i,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.name,s=a.number,i=a.email,n=a.message,e.next=3,I.add({name:t,number:s,email:i,message:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){var e=Object(s.useState)({name:"",number:"",email:"",message:""}),a=Object(y.a)(e,2),t=a[0],i=a[1],n=function(){t.name&&t.number&&t.email&&t.message?function(e){return A.apply(this,arguments)}(t).then((function(){alert("your response has been recorded"),i({name:"",number:"",email:"",message:""})})).catch((function(){alert("your response has failed to be recorded")})):alert("enter all fields")};return Object(g.jsxs)("div",{className:"social",id:"contact",children:[Object(g.jsx)(w.a,{variant:"h4",children:"Contact us"}),Object(g.jsx)(w.a,{paragraph:!0,children:"we would love to hear it from you on your query and Contact"}),Object(g.jsxs)("form",{action:"POST",children:[Object(g.jsx)(k.a,{onChange:function(e){i((function(a){return Object(x.a)(Object(x.a)({},a),{},{name:e.target.value})}))},margin:"dense",variant:"outlined",label:"name",value:t.name,fullWidth:!0}),Object(g.jsx)(k.a,{onChange:function(e){i((function(a){return Object(x.a)(Object(x.a)({},a),{},{number:e.target.value})}))},value:t.number,margin:"dense",variant:"outlined",label:"number",fullWidth:!0}),Object(g.jsx)(k.a,{onChange:function(e){i((function(a){return Object(x.a)(Object(x.a)({},a),{},{email:e.target.value})}))},value:t.email,margin:"dense",variant:"outlined",label:"email",fullWidth:!0}),Object(g.jsx)(k.a,{onChange:function(e){i((function(a){return Object(x.a)(Object(x.a)({},a),{},{message:e.target.value})}))},value:t.message,variant:"outlined",label:"message",multiline:!0,fullWidth:!0}),Object(g.jsx)(m.a,{onClick:function(e){e.preventDefault(),n()},children:"Submit"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(N.SocialIcon,{className:"sicon",url:"https://instagram.com/"}),Object(g.jsx)(N.SocialIcon,{className:"sicon",url:"https://www.linkedin.com/in/"}),Object(g.jsx)(N.SocialIcon,{className:"sicon",url:"https://twitter.com/"}),Object(g.jsx)(N.SocialIcon,{className:"sicon",network:"telegram",url:"https://t.me/"})]})]})}function P(e){var a=e.s,t=e.i;return Object(g.jsxs)("div",{className:"work",children:[Object(g.jsx)("img",{src:a,alt:"i"},t),Object(g.jsxs)(v.a.div,{className:"info",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Lorem ipsum"}),Object(g.jsx)(w.a,{paragraph:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias odit, architecto fugit tenetur impedit!"})]})]})}function q(){return Object(g.jsxs)("div",{className:"works",id:"works",children:[Object(g.jsx)(w.a,{variant:"h4",children:"Our Works"}),Object(g.jsx)("div",{className:"work-grid",children:Y.map((function(e,a){return Object(g.jsx)(P,{s:e,i:a})}))})]})}function V(){return Object(g.jsxs)("div",{id:"services",className:"services",children:[Object(g.jsx)(w.a,{variant:"h4",children:"Services"}),Object(g.jsxs)("div",{className:"services-container",children:[Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Development"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We develop responsive, functional and super-fast websites. We keep User Experience in mind while creating websites. A website should load quickly and should be accessible even on a small view-port and slow internet connection"})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Mobile Application"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We offer a wide range of professional Android, iOS & Hybrid app development services for our global clients, from a start up to a large enterprise."})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Design"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We offer professional Graphic design, Brochure design & Logo design. We are experts in crafting visual content to convey the right message to the customers. We also design custom wraps for your products(also known as package designing)"})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Consultancy"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We are here to provide you with expert advice on your design and development requirement."})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Videos"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We create a polished professional video that impresses your audience."})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Product photoshoot"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We create a polished professional photo of the products that impresses your audience."})]}),Object(g.jsxs)("div",{className:"service",children:[Object(g.jsx)(w.a,{variant:"h6",children:"Social media management"}),Object(g.jsx)(w.a,{paragraph:!0,children:"We will manage your social media with graphically impressive posts and stories that helps you get better leads and increases popularity"})]})]})]})}var B=t(114),J=t.n(B);function L(){return Object(g.jsxs)("div",{className:"featured",children:[Object(g.jsx)(w.a,{variant:"h4",children:"Featured Works"}),Object(g.jsx)(J.a,{duration:4e3,autoPlay:!0,fadeOutAnimation:!0,mouseDragEnabled:!0,children:Y.map((function(e,a){return Object(g.jsx)("img",{src:e,alt:""},a)}))})]})}var E=t(117),T=t(216);function z(){var e=function(e){var a=Object(E.a)({threshold:e||.5}),t=Object(y.a)(a,2),i=t[0],n=t[1],c=Object(T.a)();return Object(s.useEffect)((function(){c&&(c.set({opacity:0,y:10}),n&&c.start({opacity:1,y:0}),n||c.set({opacity:0,y:10}))}),[n,c]),[i,c]}(),a=Object(y.a)(e,2),t=a[0],i=a[1];return Object(g.jsxs)(v.a.div,{animate:i,className:"about",ref:t,children:[Object(g.jsx)(w.a,{variant:"h4",children:"About us"}),Object(g.jsx)(w.a,{paragraph:!0,children:"VDP solns is a digital service provider that aims to provide software, designing and marketing solutions to individuals and businesses. At VDP, it is believed that service and quality is the key to success. Founded and Funded by Graphic designers from Jahirathu Junction, VDP solns has now set a new path towards Digital Solutions."})]})}function G(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(f,{}),Object(g.jsx)(z,{}),Object(g.jsx)(L,{}),Object(g.jsx)(V,{}),Object(g.jsx)(q,{}),Object(g.jsx)(F,{})]})}var K=t(115),M=t(22),Y=[d,l,j,u,h,b,p];function H(){return Object(g.jsx)("div",{className:"admin"})}var R=function(){var e=Object(r.a)({palette:{type:"dark"}});return Object(g.jsx)(o.a,{theme:e,children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(M.c,{children:[Object(g.jsx)(M.a,{path:"/",exact:!0,children:Object(g.jsx)(G,{})}),Object(g.jsx)(M.a,{path:"/admin",children:Object(g.jsx)(H,{})})]})})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,217)).then((function(a){var t=a.getCLS,s=a.getFID,i=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),s(e),i(e),n(e),c(e)}))};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),U()}},[[178,1,2]]]);
//# sourceMappingURL=main.a2488073.chunk.js.map