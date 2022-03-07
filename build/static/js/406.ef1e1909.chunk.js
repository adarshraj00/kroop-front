"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[406],{9487:function(e,t,n){var r=n(4569),a=n.n(r);t.Z={saveNewBook:function(e){return a().post("/api/books/add-new-book",e,{withCredentials:!0})},getAllBooks:function(){return a().get("/api/books/all",{withCredentials:!0})},getAvailableBooks:function(){return a().get("/api/books/available",{withCredentials:!0})},incrementBookCount:function(e){return a().put("/api/books/increment-book-count/".concat(e),{withCredentials:!0})},decrementBookCount:function(e){return a().put("/api/books/decrement-book-count/".concat(e),{withCredentials:!0})},deleteBook:function(e){return a().delete("/api/books/".concat(e),{withCredentials:!0})},getRecommendations:function(e){return a().get("/api/books/recommendations",{withCredentials:!0})},getSearchResults:function(e){var t=e.author,n=e.title,r=e.startYear,s=e.endYear,o="";return t.length>0&&(o+="author="+t+"&"),n.length>0&&(o+="title="+n+"&"),r>0&&(o+="startYear="+r+"&"),s>0&&(o+="endYear="+s),console.log(o),a().get("/api/books/search?".concat(o),{withCredentials:!0})},issueBook:function(e){return a().post("api/books/issue/".concat(e),{widthCredentials:!0})}}},4908:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(5861),a=n(4942),s=n(1413),o=n(885),i=n(7757),c=n.n(i),u=n(2791),l=n(9487),d=function(e,t){var n=(0,u.useState)(!1),a=(0,o.Z)(n,2),s=a[0],i=a[1],d=(0,u.useState)([]),h=(0,o.Z)(d,2),p=h[0],x=h[1],f=(0,u.useState)(""),m=(0,o.Z)(f,2),v=m[0],b=m[1];return(0,u.useEffect)((function(){i(!0),(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"/admin"!==e){t.next=7;break}return t.next=4,l.Z.getAllBooks();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,l.Z.getAvailableBooks();case 9:n=t.sent;case 10:x(n.data.books),console.log(n.data.books),i(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),b(t.t0.response.data),i(!1);case 20:case"end":return t.stop()}}),t,null,[[0,15]])})))()}),[t]),[s,p,x,v]},h=n(6871),p=n(184),x=function(){var e=(0,h.TH)(),t=(0,u.useState)({title:"",author:"",startYear:0,endYear:0}),n=(0,o.Z)(t,2),i=n[0],x=n[1],f=(0,u.useState)(!1),m=(0,o.Z)(f,2),v=m[0],b=m[1],j=d(e.pathname,v),k=(0,o.Z)(j,4),Z=k[0],g=k[1],C=k[2],w=k[3],y=function(e){console.log(e.target.name,e.target.value),x((0,s.Z)((0,s.Z)({},i),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:"text-center text-2xl w-[100%]",children:"Search the database"}),(0,p.jsxs)("div",{className:"h-[20%] m-auto w-[100%] ",children:[(0,p.jsx)("input",{type:"text",placeholder:"search by author",name:"author",onChange:y,value:i.author}),(0,p.jsx)("input",{type:"text",placeholder:"search by name",name:"title",onChange:y,value:i.title}),(0,p.jsx)("input",{type:"number",placeholder:"startYear",name:"startYear",onChange:y,value:i.startYear}),(0,p.jsx)("input",{type:"number",placeholder:"endYear",name:"endYear",onChange:y,value:i.endYear}),(0,p.jsxs)("div",{className:"flex w-[100%] justify-around  m-2 ",children:[(0,p.jsx)("button",{onClick:function(){b(!v)},children:"reset filter"}),(0,p.jsx)("button",{onClick:(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getSearchResults(i);case 2:t=e.sent,console.log(t),C(t.data.books);case 5:case"end":return e.stop()}}),e)}))),children:"search"})]})]}),(0,p.jsxs)("div",{className:"p-2 h-[80%] text-center",children:[(0,p.jsx)("p",{className:"text-2xl",children:"list of books"}),(0,p.jsxs)("div",{className:"border-2 h-[90%]",children:[Z&&(0,p.jsx)("p",{children:"loading..."}),w&&(0,p.jsx)("p",{className:"text-red-500",children:w.msg}),(0,p.jsxs)("div",{className:"flex w-[80%] m-auto border-2 justify-around font-bold",children:[(0,p.jsx)("h2",{children:"author"}),(0,p.jsx)("h2",{children:"title"}),(0,p.jsx)("h2",{children:"year of publication"}),(0,p.jsx)("h2",{children:"total count"}),(0,p.jsx)("h2",{children:"available"}),"/admin"===e.pathname&&(0,p.jsx)("h2",{children:"del"}),"/user"===e.pathname&&(0,p.jsx)("h2",{children:"issue book"})]}),g.map((function(t){return(0,p.jsxs)("div",{className:"flex w-[80%] border-2 m-auto justify-around",children:[(0,p.jsx)("p",{children:t.author}),(0,p.jsx)("p",{children:t.title}),(0,p.jsx)("p",{children:t.yearOfPublication}),(0,p.jsxs)("div",{className:"flex  cursor-pointer text-3xl",children:["/admin"===e.pathname&&(0,p.jsx)("p",{onClick:(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.decrementBookCount(t._id);case 3:n=e.sent,C((function(e){return e.map((function(e){return e._id===t._id?(0,s.Z)((0,s.Z)({},e),{},{noOfCopies:n.data.count}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"-"}),(0,p.jsx)("p",{children:t.noOfCopies}),console.log(e),"/admin"===e.pathname&&(0,p.jsx)("p",{onClick:(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.incrementBookCount(t._id);case 3:n=e.sent,C((function(e){return e.map((function(e){return e._id===t._id?(0,s.Z)((0,s.Z)({},e),{},{noOfCopies:n.data.count}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"+"})]}),(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:t.noOfCopies-t.issueCount})}),(0,p.jsxs)("div",{className:"cursor-pointer",children:["/admin"===e.pathname&&(0,p.jsx)("p",{onClick:(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.deleteBook(t._id);case 3:e.sent,C((function(e){return e.filter((function(e){return e._id!==t._id}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"delete"}),"/user"===e.pathname&&(0,p.jsx)("p",{onClick:(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.issueBook(t._id);case 3:n=e.sent,C((function(e){return e.map((function(e){return e._id===t._id?(0,s.Z)((0,s.Z)({},e),{},{issueCount:n.data.book.issueCount}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"issue"})]})]},t._id)}))]})]})]})}},6406:function(e,t,n){n.r(t);var r=n(4942),a=n(5861),s=n(1413),o=n(885),i=n(7757),c=n.n(i),u=n(2791),l=n(4908),d=n(9487),h=n(5502),p=n(6871),x=n(6030),f=n(1830),m=n.n(f),v=n(184);t.default=function(){var e=(0,p.s0)(),t=(0,x.I0)(),n=(0,u.useState)(!1),i=(0,o.Z)(n,2),f=i[0],b=i[1],j=(0,u.useState)({author:"",title:"",yearOfPublication:"",noOfCopies:""}),k=(0,o.Z)(j,2),Z=k[0],g=k[1],C=(0,u.useState)({author:"",title:"",yearOfPublication:"",noOfCopies:""}),w=(0,o.Z)(C,2),y=w[0],N=w[1],O=(0,x.v9)((function(e){return e.auth})),B=function(){var e=0;return""===Z.author&&(N((0,s.Z)((0,s.Z)({},y),{},{author:"author is required"})),e=1),""===Z.title&&(N((0,s.Z)((0,s.Z)({},y),{},{title:"title is required"})),e=1),""===Z.yearOfPublication&&(N((0,s.Z)((0,s.Z)({},y),{},{yearOfPublication:"year of publication is required"})),e=1),""===Z.noOfCopies&&(N((0,s.Z)((0,s.Z)({},y),{},{noOfCopies:"no of copies is required"})),e=1),1!==e},_=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,B()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,d.Z.saveNewBook(Z);case 5:t=e.sent,console.log(t),b(!1),m().fire("done","updated db","success"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),S=function(e){g((0,s.Z)((0,s.Z)({},Z),{},(0,r.Z)({},e.target.name,e.target.value))),console.log(Z),""===e.target.value?N((0,s.Z)((0,s.Z)({},y),{},(0,r.Z)({},e.target.name,"should not be empty"))):N((0,s.Z)((0,s.Z)({},y),{},(0,r.Z)({},e.target.name,"")))};return(0,u.useEffect)((function(){O.isAdmin||O.isUser||e("/")}),[O.isAdmin,O.isUser]),(0,v.jsxs)("div",{className:"relative",children:[(0,v.jsxs)("div",{className:"text-3xl text-center",children:[(0,v.jsx)("p",{children:"Books Management System"}),(0,v.jsx)("p",{children:"Welcome Admin"})]}),(0,v.jsxs)("div",{className:"h-15 border-2 w-[20vw] m-auto mt-4 mb-4 flex justify-around  ",children:[(0,v.jsx)("p",{className:"cursor-pointer",onClick:function(){b(!0)},children:"Add Book"}),(0,v.jsx)("p",{className:"text-red-500 cursor-pointer",onClick:function(){return t({type:h.Z.LOGOUT})},children:"LOGOUT"}),f&&(0,v.jsx)("div",{className:"absolute border-4 w-[100vw] h-[100vh] m-auto  border-gray-500 top-0 left-0 ",children:(0,v.jsxs)("div",{className:"w-[50%] h-[50%] bg-white m-auto flex flex-col justify-center items-center ",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Author"}),(0,v.jsx)("input",{type:"text",name:"author",onChange:S}),""!==y.author&&(0,v.jsx)("p",{className:"text-red-500",children:y.author})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Title"}),(0,v.jsx)("input",{type:"text",name:"title",onChange:S}),""!==y.title&&(0,v.jsx)("p",{className:"text-red-500",children:y.title})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Published year"}),(0,v.jsx)("input",{type:"text",name:"yearOfPublication",onChange:S}),""!==y.yearOfPublication&&(0,v.jsx)("p",{className:"text-red-500",children:y.yearOfPublication})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"No of copies"}),(0,v.jsx)("input",{type:"number",name:"noOfCopies",onChange:S}),""!==y.noOfCopies&&(0,v.jsx)("p",{className:"text-red-500",children:y.noOfCopies})]}),(0,v.jsx)("p",{className:"border-2 w-[50%] text-center m-auto cursor-pointer",onClick:_,children:"submit"}),(0,v.jsx)("p",{className:"border-2 w-[50%] text-center m-auto cursor-pointer",onClick:function(){return b(!1)},children:"close"})]})})]}),(0,v.jsx)("div",{className:"border-red-700 border-2 w-[80vw] m-auto p-3 h-[80vh] overflow-scroll",children:(0,v.jsx)(l.Z,{})})]})}},5861:function(e,t,n){function r(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var o=e.apply(t,n);function i(e){r(o,a,s,i,c,"next",e)}function c(e){r(o,a,s,i,c,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=406.ef1e1909.chunk.js.map