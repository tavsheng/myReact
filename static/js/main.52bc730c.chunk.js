(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(43),a=n(9),o={dialogs:[{id:1,name:"Dmitry"},{id:2,name:"Vadim"},{id:3,name:"Aleksandr"},{id:4,name:"Maksim"}],messages:[{id:1,message:"Hi! How are you doing?"},{id:2,message:"What's up bro?"},{id:3,message:"I'm OK. What about you?"},{id:4,message:"Hi!"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"027da528-2565-4528-be5d-2ae5e3655c3f"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e),{}).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Follow profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},133:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1Yuk4"}},134:function(e,t){e.exports="data:image/png;base64,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"},135:function(e,t,n){e.exports=n.p+"static/media/preloader.9064981b.svg"},14:function(e,t,n){e.exports={nav:"Navbar_nav__1q7Z1",item:"Navbar_item__3HYQC",active:"Navbar_active__3rqdG"}},163:function(e,t,n){e.exports=n(292)},168:function(e,t,n){},169:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(64),u=n.n(o),i=(n(168),n(27)),c=n(28),s=n(30),l=n(29),f=(n(169),n(14)),m=n.n(f),p=n(11),d=function(){return a.a.createElement("div",{className:m.a.nav},a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(p.b,{to:"/profile",activeClassName:m.a.active},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:m.a.active},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:m.a.active},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/friends",activeClassName:m.a.active},"Friends")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:m.a.active},"Settings")))},g=n(24),h=(n(174),function(){return a.a.createElement("div",null,"Music")}),E=(n(175),function(){return a.a.createElement("div",null,"Friends")}),v=(n(176),function(){return a.a.createElement("div",null,"Settings")}),b=n(10),O=n(8),w=n.n(O),S=n(19),P=n(43),j=n(9),y=n(13),A=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)({},e,{},r):e}))},C={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},N=function(e){return{type:"FOLLOW",userId:e}},k=function(e){return{type:"UNFOLLOW",userId:e}},I=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},T=function(e){return{type:"TOGLE-IS-FETCHING",isFetching:e}},F=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},D=function(){var e=Object(S.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)({},e,{users:A(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)({},e,{users:A(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(j.a)({},e,{users:t.users});case"SET-CURRENT-PAGE":return Object(j.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(j.a)({},e,{totalUsersCount:t.count});case"TOGLE-IS-FETCHING":return Object(j.a)({},e,{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(j.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},B=n(44),L=n(67),x=n(128),M=n(69),G=n.n(M),R=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/c),p=Object(r.useState)(1),d=Object(x.a)(p,2),g=d[0],h=d[1],E=(g-1)*c+1,v=g*c;return a.a.createElement("div",{className:G.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:(Object(L.a)({},G.a.selectedPage,o===e),G.a.pageNumber),key:e,onClick:function(t){u(e)}},e)})),m>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},W=n(133),z=n.n(W),q=n(134),H=n.n(q),V=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement(p.b,{to:"/profile/"+t.id}," ",a.a.createElement("div",null," ",a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:H.a,className:z.a.userPhoto}))),a.a.createElement("div",null," ",t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},X=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,u=Object(B.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged"]);return a.a.createElement("div",null,a.a.createElement(R,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,u.users.map((function(e){return a.a.createElement(V,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})}))))},Q=n(47),Z=n(94),_=n(7),J=function(e){return e.usersPage.users},K=function(e){return e.usersPage.pageSize},Y=function(e){return e.usersPage.totalUsersCount},$=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Q.a,null):null,a.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),re=Object(_.d)(Z.a,Object(b.b)((function(e){return{users:J(e),pageSize:K(e),totalUsersCount:Y(e),currentPage:$(e),isFetching:ee(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=y.c.follow.bind(y.c),D(n,e,r,N);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=y.c.unfollow.bind(y.c),D(n,e,r,k);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,toggleFollowingProgress:F,getUsers:function(e,t){return function(){var n=Object(S.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(e)),r(T(!0)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(T(!1)),r({type:"SET-USERS",users:a.items}),r({type:"SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ne),ae=n(91),oe=n.n(ae),ue=function(e){return a.a.createElement("div",{className:oe.a.header},a.a.createElement("img",{src:"https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}),a.a.createElement("div",{className:oe.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout}," Log out")):a.a.createElement(p.b,{to:"/login"},"Login")))},ie=n(37),ce="samuray-network-SET-USER-DATA",se={userId:null,email:null,login:null,isAuth:!1},le=function(e,t,n,r){return{type:ce,payload:{userId:e,email:t,login:n,isAuth:r}}},fe=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,r,a,o,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,u=r.login,t(le(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(j.a)({},e,{},t.payload);default:return e}},pe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(ue,this.props)}}]),n}(a.a.Component),de=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(pe),ge=n(127),he=n(36),Ee=n(85),ve=n(53),be=n.n(ve),Oe=Object(ge.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(he.c)("Email","email",[Ee.b],he.a),Object(he.c)("Password","password",[Ee.b],he.a,{type:"password"}),Object(he.c)(null,"rememberMe",[],he.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:be.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),we=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(S.a)(w.a.mark((function r(a){var o,u;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(fe()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(ie.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Oe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Se={initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(j.a)({},e,{initialized:!0});default:return e}},je=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Ae=a.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(de,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/profile/:userId?",render:je(Ae)}),a.a.createElement(g.b,{path:"/dialogs",render:je(ye)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(re,null)}}),a.a.createElement(g.b,{path:"/music",render:function(){return a.a.createElement(h,null)}}),a.a.createElement(g.b,{path:"/friends",render:function(){return a.a.createElement(E,null)}}),a.a.createElement(g.b,{path:"/settings",render:function(){return a.a.createElement(v,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(we,null)}}))):a.a.createElement(Q.a,null)}}]),n}(r.Component),Ne=Object(_.d)(g.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(fe()).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(Ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=n(126),Ie=n(95),Te=n(137),Fe=n(129),De=Object(_.c)({profilePage:Ie.b,dialogsPage:ke.a,usersPage:U,auth:me,form:Fe.a,app:Pe}),Ue=Object(_.e)(De,Object(_.a)(Te.a));u.a.render(a.a.createElement(p.a,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(b.a,{store:Ue},a.a.createElement(Ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(44),a=n(0),o=n.n(a),u=n(53),i=n.n(u),c=n(88),s=function(e){e.input;var t=e.meta,n=(e.child,Object(r.a)(e,["input","meta","child"])),a=t.touched&&t.error;return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},47:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(135),u=n.n(o);t.a=function(e){return a.a.createElement("img",{src:u.a})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3L-G9",error:"FormsControls_error__1k18i",formSummaryError:"FormsControls_formSummaryError__fxb6p"}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__1QUPj",pageNumber:"Paginator_pageNumber__cZgMJ",selectedPage:"Paginator_selectedPage__28iTK"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},91:function(e,t,n){e.exports={header:"Header_header__3vyV3",loginBlock:"Header_loginBlock__1GmrB"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(27),a=n(28),o=n(30),u=n(29),i=n(0),c=n.n(i),s=n(24),l=n(10),f=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(u.a)(i);function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(s.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(f)(t)}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(8),a=n.n(r),o=n(19),u=n(43),i=n(9),c=n(13),s={posts:[{id:1,message:"Hey there! How are you?",likes:5},{id:2,message:"What's up fellow?",likes:51},{id:3,message:"Here I am a young man, crashing computer program",likes:145}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostElement:e}},f=function(e){return{type:"SET-STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.newPostElement;return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[{id:4,message:n,likes:0}])});case"SET-STATUS":return Object(i.a)({},e,{status:t.status});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.52bc730c.chunk.js.map