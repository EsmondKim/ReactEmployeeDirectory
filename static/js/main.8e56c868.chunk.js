(this.webpackJsonpreactemployeedirectory=this.webpackJsonpreactemployeedirectory||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(28),a=c.n(i),s=(c(35),c(36),c(9)),l=c(2),o=(c(37),c(0));var j=function(e){return Object(o.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var d=function(e){return Object(o.jsx)("div",{className:"container",style:e.style,children:e.children})};var b=function(e){return Object(o.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var h=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(o.jsx)("div",{className:t,children:e.children})};var m=function(){return Object(o.jsx)("footer",{className:"footer justify-content-center text-center",style:{backgroundColor:"#D3D3D3"},children:Object(o.jsx)("p",{children:"Copyright \xa9 2021 EfficienCorp"})})},u=c.p+"static/media/corporateheroimg.2e89bd1d.jpg";var f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{children:Object(o.jsx)("img",{src:u,alt:"Corporate building towering over you."})}),Object(o.jsxs)(d,{style:{marginTop:30},children:[Object(o.jsx)(b,{children:Object(o.jsx)(h,{size:"md-12",children:Object(o.jsx)("h1",{children:"Welcome To EfficienCorp's Employee User Directory!"})})}),Object(o.jsx)(b,{children:Object(o.jsxs)(h,{size:"md-12",children:[Object(o.jsx)("p",{children:"This is a User Directory of EfficienCorp employees.  You can use it to learn more about EfficienCorp's wonderful employees and to find their contact information."}),Object(o.jsx)("p",{children:"Click on Search to see a table of EfficienCorp employees with the option to search by first name or to sort the table."})]})})]}),Object(o.jsx)(m,{})]})},x=c(18),O=c(12),p=c(29),v=c.n(p),y=function(){return v.a.get("https://randomuser.me/api/?results=20&nat=us").then((function(e){return e.data.results.map((function(e){return{id:e.id.value,firstName:e.name.first,lastName:e.name.last,email:e.email,picture:e.picture.thumbnail}}))}))};var N=function(e){var t=Object(r.useState)(),c=Object(O.a)(t,2),n=(c[0],c[1]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h5",{className:"justify-content-center text-center",children:"Hit refresh in your browswer at any time to get a new table of EfficienCorp employees to search or sort."}),Object(o.jsx)("h5",{className:"justify-content-center text-center",style:{color:"blue"},children:"Feel free to narrow the table by searching for an employee's name."}),Object(o.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(o.jsx)("input",{onChange:function(t){return function(t){if(""!==t){n(t.target.value);var c=t.target.value.toLowerCase(),r=e.employees.filter((function(e){return-1!==e.firstName.toLowerCase().indexOf(c)}));if(e.setArray(r),console.log(r),""===c.trim())return e.setArray([]),void console.log("Search bar is empty.")}}(t)},type:"text",className:"form-control",placeholder:"Search For an EfficienCorp Employee By Name"}),Object(o.jsx)("h6",{children:"Filtered search results will appear below."})]})})})};c(57);var g=function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.firstName}),Object(o.jsx)("td",{children:e.lastName}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.picture,alt:"profile"})})]})};c(58);var C=function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.firstName}),Object(o.jsx)("td",{children:e.lastName}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.picture,alt:"profile"})})]})};var w=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)([]),a=Object(O.a)(i,2),s=a[0],l=a[1];return Object(r.useEffect)((function(){y().then((function(e){l(e)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(N,{employees:s,setArray:n}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Emp ID"}),Object(o.jsx)("th",{children:"First Name"}),Object(o.jsx)("th",{children:"Last Name"}),Object(o.jsx)("th",{children:"Email"}),Object(o.jsx)("th",{children:"Profile Pic"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsx)(g,{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,picture:e.picture},e.id)}))})]}),Object(o.jsx)("h1",{children:"EfficienCorp Employee Table"}),Object(o.jsx)("button",{onClick:function(){var e=Object(x.a)(s);e.sort((function(e,t){return e.id>t.id?1:-1})),l(e)},className:"btn btn-secondary",children:"Sort Id's"}),Object(o.jsx)("button",{onClick:function(){var e=Object(x.a)(s);e.sort((function(e,t){return e.firstName>t.firstName?1:-1})),l(e)},className:"btn btn-primary",children:"Sort First Names"}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Emp ID"}),Object(o.jsx)("th",{children:"First Name"}),Object(o.jsx)("th",{children:"Last Name"}),Object(o.jsx)("th",{children:"Email"}),Object(o.jsx)("th",{children:"Profile Pic"})]})}),Object(o.jsx)("tbody",{children:s.map((function(e){return Object(o.jsx)(C,{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,picture:e.picture},e.id)}))})]}),Object(o.jsx)(m,{})]})};c(59);var E=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)(s.b,{className:"navbar-brand",to:"/",children:"EfficienCorp"}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})})]})})]})};var k=function(){return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(E,{}),Object(o.jsx)(l.a,{exact:!0,path:"/ReactEmployeeDirectory",component:f}),Object(o.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(o.jsx)(l.a,{exact:!0,path:"/about",component:f}),Object(o.jsx)(l.a,{exact:!0,path:"/search",component:w})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),i(e),a(e)}))};c(65);a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.8e56c868.chunk.js.map