(window.webpackJsonpsocialmatch=window.webpackJsonpsocialmatch||[]).push([[0],{25:function(e,t,a){},42:function(e,t,a){e.exports=a(80)},51:function(e,t,a){},55:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),i=(a(25),a(3)),c=a(5),s=a(37),u=(a(49),s.initializeApp({apiKey:"AIzaSyDbzHD2z_11lY6J3_oKJczQMGGEyavNmwg",authDomain:"socialmatch-427aa.firebaseapp.com",databaseURL:"https://socialmatch-427aa.firebaseio.com",projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/nmikeytruong/project-3",REACT_APP_FIREBASE_DATABASE:"https://socialmatch-427aa.firebaseio.com",REACT_APP_FIREBASE_DOMAIN:"socialmatch-427aa.firebaseapp.com",REACT_APP_FIREBASE_KEY:"AIzaSyDbzHD2z_11lY6J3_oKJczQMGGEyavNmwg",REACT_APP_FIREBASE_PROJECT_ID:"socialmatch-427aa",REACT_APP_FIREBASE_SENDER_ID:"207361512095",REACT_APP_FIREBASE_STORAGE_BUCKET:""}).REACT_APP_PROTECT_ID,storageBucket:"",messagingSenderId:"207361512095"}));a(51);var m=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Social Match Dating App"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"/"===window.location.pathname||"/rate"===window.location.pathname?"nav-link active":"nav-link"},"Rate your Date")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/profiles",className:"/profiles"===window.location.pathname?"nav-link-active":"nav-link"},"Profiles")))))},f=(a(55),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("button",{onClick:function(){return u.auth().signOut()}},"Sign Out "))}),d=a(10),E=a.n(d),g=a(13),p=a(40),h=r.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(p.a)(a,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){u.auth().onAuthStateChanged(i)}),[]),r.a.createElement(h.Provider,{value:{currentUser:o}},t)},v=Object(c.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(g.a)(E.a.mark((function e(a){var n,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,l=n.password,e.prev=2,e.next=5,u.auth().signInWithEmailAndPassword(r.value,l.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(h).currentUser?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",{className:"animated flipInX"},"Social Match"),r.a.createElement("h1",{className:"login"},"Sign in"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email:"," ",r.a.createElement("input",{name:"email",type:"email",placeholder:"",className:"email"}))," ",r.a.createElement("label",null,"Password:"," ",r.a.createElement("input",{name:"password",type:"password",placeholder:"",className:"password"}))," ",r.a.createElement("button",{type:"submit"},"Log In ")," ",r.a.createElement(i.b,{to:"/Register"},"Register")))})),P=Object(c.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(g.a)(E.a.mark((function e(a){var n,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,l=n.password,e.prev=2,e.next=5,u.auth().createUserWithEmailAndPassword(r.value,l.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",null,r.a.createElement("h1",{className:"register"},"Register"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:""})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:""})),r.a.createElement("button",{type:"submit"},"Sign Up"),r.a.createElement(i.b,{to:"/Login"},"Login")))})),k=a(14),w=a(15),O=a(16),j=a(18),A=a(17),N=a(19),C=a(12),_=a.n(C),y={getProfiles:function(){return _.a.get("/api/profiles")},getProfile:function(e){return _.a.get("/api/profiles/"+e)},deleteProfile:function(e){return _.a.delete("/api/profiles/"+e)},saveProfile:function(e){return _.a.post("/api/profiles",e)}};var S=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var I=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var F=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};a(74);var R=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.username,src:e.imageurl})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("li",null,r.a.createElement("strong",null,"Gender:")," ",e.gender),r.a.createElement("li",null,r.a.createElement("strong",null,"Looking For:")," ",e.lookingFor),r.a.createElement("li",null,r.a.createElement("strong",null,"Interests:")," ",e.interests),r.a.createElement("li",null,r.a.createElement("strong",null,"About Me:")," ",e.aboutMe))),r.a.createElement("span",{onClick:function(){return e.deleteProfile(e.id)},className:"remove"},"\ud835\ude05"))};a(75);a(76);a(77);var M=function(e){return r.a.createElement("div",Object.assign({className:"wrapper"},e))},D=(a(78),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={profiles:[],imageurl:"",email:"",username:"",gender:"",lookingFor:"",interests:"",aboutMe:""},a.loadProfiles=function(){y.getProfiles().then((function(e){return a.setState({profiles:e.data,imageurl:"",email:"",username:"",gender:"",lookingFor:"",interests:"",aboutMe:""})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(k.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.username&&a.state.gender&&a.state.lookingFor&&y.saveProfile({imageurl:a.state.imageurl,email:a.state.email,username:a.state.username,gender:a.state.gender,lookingFor:a.state.lookingFor,interests:a.state.interests,aboutMe:a.state.aboutMe}).then((function(e){return a.loadProfiles()})).catch((function(e){return console.log(e)}))},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.loadProfiles()}},{key:"render",value:function(){return r.a.createElement(S,{style:{mariginTop:30}},r.a.createElement(I,null,r.a.createElement(F,{size:"md-12"},r.a.createElement("h1",null,"Social Match Profile"),r.a.createElement("h3",null,"Your Profile"),this.state.profiles.forEach((function(e){return r.a.createElement(R,{id:e._id,key:e._id,username:e.username,imageurl:e.imageurl,gender:e.gender,lookingFor:e.lookingFor,interests:e.interests,aboutMe:e.aboutMe})})),r.a.createElement(i.b,{to:"/EditProfile",className:"/EditProfile"===window.location.pathname?"nav-link-active":"nav-link"},"Edit Profile"),r.a.createElement("h1",null,"Other Profiles"),r.a.createElement(M,null,this.state.profiles.map((function(e){return r.a.createElement(R,{id:e._id,key:e._id,username:e.username,imageurl:e.imageurl,gender:e.gender,lookingFor:e.lookingFor,interests:e.interests,aboutMe:e.aboutMe})}))))))}}]),t}(n.Component));function x(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function T(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function z(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(79);function B(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function U(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"10"},e)))}function L(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var G=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={profiles:[],imageurl:"",email:"",username:"",gender:"",lookingFor:"",interests:"",aboutMe:""},a.loadProfiles=function(){y.getProfiles().then((function(e){return a.setState({profiles:e.data,imageurl:"",email:"",username:"",gender:"",lookingFor:"",interests:"",aboutMe:""})})).catch((function(e){return console.log(e)}))},a.deleteProfile=function(e){y.deleteProfile(e).then((function(e){return a.loadProfiles()})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(k.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.username&&a.state.gender&&a.state.lookingFor&&y.saveProfile({imageurl:a.state.imageurl,username:a.state.username,gender:a.state.gender,lookingFor:a.state.lookingFor,interests:a.state.interests,aboutMe:a.state.aboutMe}).then((function(e){return a.loadProfiles()})).catch((function(e){return console.log(e)}))},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.loadProfiles()}},{key:"render",value:function(){return r.a.createElement(x,{fluid:!0},r.a.createElement(T,null,r.a.createElement(z,{size:"md-6"},r.a.createElement("form",null,r.a.createElement(B,{value:this.state.username,onChange:this.handleInputChange,name:"username",placeholder:"Username (required)"}),r.a.createElement(B,{value:this.state.gender,onChange:this.handleInputChange,name:"gender",placeholder:"Gender (required)"}),r.a.createElement(B,{value:this.state.imageurl,onChange:this.handleInputChange,name:"imageurl",placeholder:"Image URL (required)"}),r.a.createElement(U,{value:this.state.aboutMe,onChange:this.handleInputChange,name:"aboutMe",placeholder:"About Yourself (Optional)"}),r.a.createElement(U,{value:this.state.interests,onChange:this.handleInputChange,name:"interests",placeholder:"Interests (Optional)"}),r.a.createElement(L,{disabled:!(this.state.username&&this.state.gender),onClick:this.handleFormSubmit},"Save Profile")))))}}]),t}(n.Component),J=a(41),K=function(e){var t=e.component,a=Object(J.a)(e,["component"]),l=Object(n.useContext)(h).currentUser;return r.a.createElement(c.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(c.a,{to:"/login"})}}))},Y=function(){return r.a.createElement(b,null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(K,{exact:!0,path:"/",component:f}),r.a.createElement(c.b,{exact:!0,path:"/Login",component:v}),r.a.createElement(c.b,{exact:!0,path:"/Register",component:P}),r.a.createElement(c.b,{exact:!0,path:"/Profiles",component:D}),r.a.createElement(c.b,{exact:!0,path:"/EditProfile",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9f747e2f.chunk.js.map