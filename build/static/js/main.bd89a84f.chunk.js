(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),s=n(21),i=n.n(s),u=n(7),o=n(31),l=n(53),j=n(54),b=n(6),d=n(8),O=function(e,t,n){return function(){var c=Object(d.a)(Object(b.a)().mark((function c(a){return Object(b.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:r&&clearTimeout(r),a({type:"SET_NOTIFICATION",content:e,style:t}),r=setTimeout((function(){a({type:"CLEAR_NOTIFICATION"})}),1e3*n);case 3:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t;case"CLEAR_NOTIFICATION":return"";default:return e}},f=n(12),h=n(59),x=n(18),v=n.n(x),g="/api/blogs",m=null,y=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,v.a.post(g,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(Object(b.a)().mark((function e(t,n){var r,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:m}},e.next=3,v.a.put("".concat(g,"/").concat(t),n,r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,v.a.delete("".concat(g,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={setToken:function(e){m="bearer ".concat(e)},getAll:y,create:w,update:L,remove:k},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return[].concat(Object(h.a)(e),[t.data]);case"LIKE_BLOG":case"NEW_COMMENT":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},C=function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={login:C},_=function(){return JSON.parse(window.localStorage.getItem("loggedBlogappUser")||null)},E=function(e){return function(){var t=Object(d.a)(Object(b.a)().mark((function t(n){var r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.login(e);case 3:r=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),I.setToken(r.token),n(O("Welcome ".concat(e.username),"success",5)),n({type:"LOG_IN",data:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(O("wrong username or password","warning",5));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_FROM_LOCAL_STORAGE":case"LOG_IN":return t.data;case"LOG_OUT":return null;default:return e}},A=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B={getAll:A},G=function(){return function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"INIT_USERS"===t.type?t.data:e},U=Object(o.combineReducers)({notification:p,blogs:T,user:S,allUsers:R}),F=Object(o.createStore)(U,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(j.a))),D=n(16),M=n(9),W=n(94),J=n(96),z=n(93),K=n(25),V=function(e){var t=Object(c.useState)(""),n=Object(K.a)(t,2),r=n[0],a=n[1];return{input:{type:e,value:r,onChange:function(e){a(e.target.value)}},reset:function(){a("")}}},H=n(1),q=function(e){var t=e.toggleForm,n=Object(u.b)(),r=V("text"),c=V("text"),a=V("text"),s=!0;""!==r.input.value&&""!==c.input.value&&""!==a.input.value&&(s=!1);return Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Create new blog"}),Object(H.jsxs)(J.a,{onSubmit:function(e){e.preventDefault();var s={title:r.input.value,author:c.input.value,url:a.input.value};t.current.toggleVisibility(),n(function(e){return function(){var t=Object(d.a)(Object(b.a)().mark((function t(n){var r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.create(e);case 2:r=t.sent,n({type:"NEW_BLOG",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(s)),n({type:"CLEAR_NOTIFICATION"}),n(O('A new blog "'.concat(s.title,'" by "').concat(s.author,'" added'),"success",5)),r.reset(),c.reset(),a.reset()},children:[Object(H.jsx)(J.a.Label,{children:"Title:"}),Object(H.jsx)(J.a.Control,Object(f.a)({id:"title"},r.input)),Object(H.jsx)(J.a.Label,{children:"Author:"}),Object(H.jsx)(J.a.Control,Object(f.a)({id:"author"},c.input)),Object(H.jsx)(J.a.Label,{children:"URL:"}),Object(H.jsx)(J.a.Control,Object(f.a)({id:"url"},a.input)),Object(H.jsx)(z.a,{id:"create",type:"submit",disabled:s,style:{marginTop:10,marginBottom:10},children:"Create"})]})]})},P=a.a.forwardRef((function(e,t){var n=Object(c.useState)(!1),r=Object(K.a)(n,2),a=r[0],s=r[1],i={display:a?"none":""},u={display:a?"":"none"},o=function(){s(!a)};Object(c.useImperativeHandle)(t,(function(){return{toggleVisibility:o}}));var l={marginBottom:10};return Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{style:i,children:Object(H.jsx)(z.a,{onClick:o,style:l,children:e.buttonLabel})}),Object(H.jsxs)("div",{style:u,className:"togglableContent",children:[e.children,Object(H.jsx)(z.a,{onClick:o,style:l,children:"Cancel"})]})]})}));P.displayName="Togglable";var Q=P,X=function(){var e=Object(c.useRef)(),t=Object(u.c)((function(e){return e.blogs}));return Object(H.jsxs)("div",{children:[Object(H.jsx)(Q,{buttonLabel:"Create new blog",ref:e,children:Object(H.jsx)(q,{toggleForm:e})}),Object(H.jsx)(W.a,{striped:!0,children:Object(H.jsx)("tbody",{children:t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(H.jsx)("tr",{children:Object(H.jsx)("td",{children:Object(H.jsx)(D.b,{to:"/blogs/".concat(e.id),children:e.title})})},e.id)}))})})]})},Y=n(95),Z=n(55),$=function(e){var t=e.blog,n=Object(u.b)(),r=V("text");return Object(H.jsx)("div",{children:Object(H.jsx)(J.a,{onSubmit:function(e){e.preventDefault();var c=r.input.value;n(function(e,t){return function(){var n=Object(d.a)(Object(b.a)().mark((function n(r){var c,a,s;return Object(b.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.comments.concat(t),a=Object(f.a)(Object(f.a)({},e),{},{comments:c}),n.next=4,I.update(e.id,a);case 4:s=n.sent,r({type:"NEW_COMMENT",data:s});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,c)),r.reset()},children:Object(H.jsxs)(Y.a,{children:[Object(H.jsx)(Z.a,{children:Object(H.jsx)(J.a.Control,Object(f.a)({placeholder:"Add a comment here",style:{marginBottom:15}},r.input))}),Object(H.jsx)(Z.a,{children:Object(H.jsx)(z.a,{type:"submit",children:"Add"})})]})})})},ee=function(e){var t=e.user,n=Object(u.b)(),r=Object(M.f)(),c=Object(M.g)().id,a=Object(u.c)((function(e){return e.blogs})).find((function(e){return e.id===c?e:null}));return a?Object(H.jsxs)("div",{children:[Object(H.jsxs)("h2",{children:[a.title," - ",a.author]}),Object(H.jsx)("p",{children:Object(H.jsx)("a",{href:a.url,children:a.url})}),Object(H.jsxs)("p",{children:[a.likes," likes",Object(H.jsx)(z.a,{onClick:function(){n(function(e){return function(){var t=Object(d.a)(Object(b.a)().mark((function t(n){var r,c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(f.a)(Object(f.a)({},e),{},{likes:e.likes+1}),t.next=3,I.update(e.id,r);case 3:c=t.sent,n({type:"LIKE_BLOG",data:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))},style:{marginLeft:10},children:"like"})]}),Object(H.jsxs)("p",{children:["Added by ",a.user.username]}),t.username===a.user.username?Object(H.jsx)(z.a,{onClick:function(){window.confirm("Remove blog '".concat(a.title,"' by ").concat(a.author,"?"))&&n(function(e){return function(){var t=Object(d.a)(Object(b.a)().mark((function t(n){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.remove(e.id);case 2:n({type:"DELETE_BLOG",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a)),r.push("/")},style:{marginBottom:10},children:"remove"}):null,Object(H.jsx)("h3",{children:"Comments"}),Object(H.jsx)($,{blog:a}),Object(H.jsx)("ul",{children:a.comments.map((function(e,t){return Object(H.jsx)("li",{children:e},t)}))})]}):null},te=n(99),ne=function(){var e=Object(u.c)((function(e){return e.notification.content})),t=Object(u.c)((function(e){return e.notification.style}));return Object(H.jsx)(te.a,{variant:t,children:e})},re=function(){var e=Object(u.b)(),t=Object(c.useState)(""),n=Object(K.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(K.a)(s,2),o=i[0],l=i[1],j=function(){var t=Object(d.a)(Object(b.a)().mark((function t(n){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(E({username:r,password:o})),a(""),l("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Log In"}),Object(H.jsx)(J.a,{onSubmit:j,children:Object(H.jsxs)(J.a.Group,{children:[Object(H.jsx)(J.a.Label,{children:"username:"}),Object(H.jsx)(J.a.Control,{id:"username",value:r,onChange:function(e){var t=e.target;return a(t.value)}}),Object(H.jsx)(J.a.Label,{children:"password:"}),Object(H.jsx)(J.a.Control,{id:"password",type:"password",value:o,onChange:function(e){var t=e.target;return l(t.value)}}),Object(H.jsx)(z.a,{id:"login-button",variant:"primary",type:"submit",style:{marginTop:10},children:"Login"})]})})]})},ce=n(98),ae=n(97),se=function(e){var t=e.user,n=Object(u.b)(),r=Object(M.f)(),c={paddingRight:10};return Object(H.jsxs)(ce.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:[Object(H.jsx)(ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(H.jsx)(ce.a.Collapse,{id:"responsive-navbar-nav",children:Object(H.jsxs)(ae.a,{className:"mr-auto",children:[Object(H.jsx)(ae.a.Link,{href:"#",as:"span",children:Object(H.jsx)(D.b,{style:c,to:"/",children:"blogs"})}),Object(H.jsx)(ae.a.Link,{href:"#",as:"span",children:Object(H.jsx)(D.b,{style:c,to:"/users",children:"users"})}),Object(H.jsx)(ae.a.Link,{href:"#",as:"span",children:t?Object(H.jsxs)("div",{children:[Object(H.jsxs)("em",{style:c,children:[t.name," logged in"]}),Object(H.jsx)(z.a,{onClick:function(e){e.preventDefault(),n((function(e){window.localStorage.removeItem("loggedBlogappUser"),e({type:"LOG_OUT"})})),r.push("/")},children:"log out"})]}):null})]})})]})},ie=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.allUsers})),n=Object(u.c)((function(e){return e.blogs}));return Object(c.useEffect)((function(){e(G())}),[n]),Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Users"}),Object(H.jsx)(W.a,{striped:!0,children:Object(H.jsxs)("tbody",{children:[Object(H.jsxs)("tr",{children:[Object(H.jsx)("th",{}),Object(H.jsx)("th",{children:Object(H.jsx)("strong",{children:"blogs created"})})]}),t.map((function(e){return Object(H.jsxs)("tr",{children:[Object(H.jsx)("td",{children:Object(H.jsx)(D.b,{to:"/users/".concat(e.id),children:e.name})}),Object(H.jsx)("td",{children:e.blogs.length})]},e.id)}))]})})]})},ue=function(){var e=Object(M.g)().id,t=Object(u.c)((function(e){return e.allUsers})).find((function(t){return t.id===e?t:null}));return t?Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:t.name}),Object(H.jsx)("h3",{children:"added blogs"}),Object(H.jsx)("ul",{children:t.blogs.map((function(e){return Object(H.jsx)("li",{children:e.title},e.id)}))})]}):null},oe=function(){var e=Object(u.b)();Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(G())}),[e]),Object(c.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");t&&e(function(e){var t=JSON.parse(e||null);return I.setToken(t.token),{type:"LOG_IN_FROM_LOCAL_STORAGE",data:t}}(t))}),[e]);var t=Object(u.c)((function(e){return e.user}));return Object(H.jsx)(D.a,{children:Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(se,{user:t}),Object(H.jsx)("h1",{children:"Blogs"}),Object(H.jsx)(ne,{}),Object(H.jsxs)(M.c,{children:[Object(H.jsx)(M.a,{path:"/blogs/:id",children:Object(H.jsx)(ee,{user:t})}),Object(H.jsx)(M.a,{path:"/users/:id",children:Object(H.jsx)(ue,{})}),Object(H.jsx)(M.a,{path:"/users",children:Object(H.jsx)(ie,{})}),Object(H.jsx)(M.a,{path:"/",children:null===t?Object(H.jsx)(re,{}):Object(H.jsx)(X,{})})]})]})})};i.a.render(Object(H.jsx)(u.a,{store:F,children:Object(H.jsx)(oe,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.bd89a84f.chunk.js.map