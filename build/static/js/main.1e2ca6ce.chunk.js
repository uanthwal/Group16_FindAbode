(this.webpackJsonpfindabode=this.webpackJsonpfindabode||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/launch.30045daa.png"},34:function(e,a,t){},37:function(e,a,t){e.exports=t.p+"static/media/ad.05980418.jpg"},38:function(e,a,t){e.exports=t(74)},43:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(35),s=t.n(l),i=t(1),c=(t(43),t(2)),o=t(3),m=t(5),u=t(4),p=t(6),d=t(9),E=t.n(d),b=t(15),f=t(18),h=t(14),v=t(13),g=t.n(v),N=t(21),k=Object(n.createContext)(),w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",login:!1},e.credential=function(a){e.setState({email:a,login:!e.state.login})},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(k.Provider,{value:Object(N.a)(Object(N.a)({},this.state),{},{credential:this.credential})},this.props.children)}}]),t}(n.Component),y=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),O=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChange=function(e){var a=e.target,t=a.name,r=a.value,l=n.state.formError;switch(t){case"username":l.username=r.length<3?"minimum 3 characters required":"";break;case"email":l.email=y.test(r)?"":"invalid email address";break;case"password":l.password=r.length<6?"minimum 6 characters required":""}n.setState(Object(h.a)({formError:l},t,r))},n.formValid=function(e){var a=e.formError,t=Object(f.a)(e,["formError"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){void 0===e&&(n=!1)})),n},n.onSubmit=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,r,l,s,i,c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=n.context.credential,r=!1,l=n.state,s=l.username,i=l.email,c=l.password,!n.formValid(n.state)){e.next=9;break}return e.next=7,g.a.get("https://a2-ruize-nie.herokuapp.com/signup/"+i).then((function(e){0!==e.data.length?n.setState({result:"This email address has been token"}):(r=!0,t(i),n.setState({result:""}))}));case 7:e.next=10;break;case 9:n.setState({result:"Please fill out all the entry and make sure you meet all the requirement"});case 10:r&&(o={username:s,email:i,password:c},g.a.post("https://a2-ruize-nie.herokuapp.com/signup",o).then((function(e){return console.log(e.data)})),n.setState({username:s,email:i,password:c}),n.props.history.push({pathname:"/"}));case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={username:void 0,email:void 0,password:void 0,formError:{username:"",email:"",password:""},result:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.password,l=e.result,s=e.formError;return r.a.createElement("div",{className:"sign-main-container"},r.a.createElement("section",{className:"sign-side"}),r.a.createElement("section",{className:"sign-content"},r.a.createElement("div",{className:"sign-container"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"sign-form",noValidate:!0},r.a.createElement("h2",null,"Sign up to FindAbode"),r.a.createElement("div",{className:"social-container"},r.a.createElement(i.b,{to:"",className:"facebook"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement(i.b,{to:"",className:"google"},r.a.createElement("i",{className:"fab fa-google-plus-g"})),r.a.createElement(i.b,{to:"",className:"linkedin"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("hr",{className:"divider"}),l.length>0&&r.a.createElement("span",{className:"error-message"},l),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:s.username.length>0?"input-field error":"input-field",type:"text",name:"username",id:"username",value:a||"",onChange:this.onChange,noValidate:!0}),s.username.length>0&&r.a.createElement("span",{className:"error-message"},s.username),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:s.email.length>0?"input-field error":"input-field",type:"email",name:"email",id:"emial",value:t||"",onChange:this.onChange,noValidate:!0}),s.email.length>0&&r.a.createElement("span",{className:"error-message"},s.email),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:s.password.length>0?"input-field error":"input-field",type:"password",name:"password",id:"password",placeholder:"6+ Characters",value:n||"",onChange:this.onChange,noValidate:!0}),s.password.length>0&&r.a.createElement("span",{className:"error-message"},s.password),r.a.createElement("input",{className:"button",type:"submit",value:"Create Account"})))))}}]),t}(n.Component);O.contextType=k;var j=Object(p.g)(O),x=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),C=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChange=function(e){var a=e.target,t=a.name,r=a.value,l=n.state.formError;switch(t){case"email":l.email=x.test(r)?"":"invalid email address";break;case"password":l.password=r.length<6?"minimum 6 characters required":""}n.setState(Object(h.a)({formError:l},t,r))},n.formValid=function(e){var a=e.formError,t=Object(f.a)(e,["formError"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){void 0===e&&(n=!1)})),n},n.onSubmit=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,r,l,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=n.context.credential,r=n.state,l=r.email,s=r.password,!n.formValid(n.state)){e.next=8;break}return e.next=6,g.a.get("https://a2-ruize-nie.herokuapp.com/signup/"+l).then((function(e){0===e.data.length?n.setState({result:"This email doesn't exist"}):s===e.data[0].password?(n.setState({email:l,password:s,result:""}),t(l),n.props.history.push({pathname:"/"})):n.setState({result:"The password doesn't match"})}));case 6:e.next=9;break;case 8:n.setState({result:"Please fill out all the entry and make sure you meet all the requirement"});case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={email:void 0,password:void 0,formError:{email:"",password:""},result:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.result,l=e.formError;return r.a.createElement("div",{className:"sign-main-container"},r.a.createElement("section",{className:"sign-side"}),r.a.createElement("section",{className:"sign-content"},r.a.createElement("div",{className:"sign-container"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"sign-form",noValidate:!0},r.a.createElement("h2",null,"Sign in to FindAbode"),r.a.createElement("div",{className:"social-container"},r.a.createElement(i.b,{to:"",className:"facebook"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement(i.b,{to:"",className:"google"},r.a.createElement("i",{className:"fab fa-google-plus-g"})),r.a.createElement(i.b,{to:"",className:"linkedin"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("hr",{className:"divider"}),n.length>0&&r.a.createElement("span",{className:"error-message"},n),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:l.email.length>0?"input-field error":"input-field",type:"email",name:"email",id:"emial",value:a||"",onChange:this.onChange,noValidate:!0}),l.email.length>0&&r.a.createElement("span",{className:"error-message"},l.email),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:l.password.length>0?"input-field error":"input-field",type:"password",name:"password",id:"password",placeholder:"6+ Characters",value:t||"",onChange:this.onChange,noValidate:!0}),l.password.length>0&&r.a.createElement("span",{className:"error-message"},l.password),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))))}}]),t}(n.Component);C.contextType=k;var A=Object(p.g)(C),S=(t(34),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"links"},r.a.createElement("div",{className:"links-inner"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Company")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Careers")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"About FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Company news")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Privacy at FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Inverstors"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Company")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Careers")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"About FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Company news")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Privacy at FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Inverstors"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Company")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Careers")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"About FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Company news")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Privacy at FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Inverstors"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Company")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Careers")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"About FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Company news")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Privacy at FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Inverstors")))))}}]),t}(n.Component)),F=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-inner"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-globe fa-2x"})," English (Canada)"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Contact FindAbode")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Privacy & cookies")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Terms of use")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"Safety & eco")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"About our ads")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"",className:"footer-link"},"\xa9 FindAbode 2020")))))}}]),t}(n.Component),q=(t(67),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChange=function(e){var a=e.target,t=a.name,r=a.value,l=n.state.formError;switch(t){case"username":l.username=r.length<3?"minimum 3 characters required":"";break;case"password":l.password=r.length<6?"minimum 6 characters required":""}n.setState(Object(h.a)({formError:l},t,r))},n.onUpdate=function(){var e=Object(b.a)(E.a.mark((function e(a,t,r,l){var s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!n.formValid(n.state)){e.next=8;break}return n.setState({result:"Update Successful!",green:!0}),s={username:r,password:l},e.next=6,g.a.post("https://a2-ruize-nie.herokuapp.com/signup/"+t,s);case 6:e.next=9;break;case 8:n.setState({result:"Please fill out all the entry and make sure you meet all the requirement",green:!1});case 9:case"end":return e.stop()}}),e)})));return function(a,t,n,r){return e.apply(this,arguments)}}(),n.onDelete=Object(b.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.context,t=a.email,(0,a.credential)(""),e.next=4,g.a.delete("https://a2-ruize-nie.herokuapp.com/signup/"+t);case 4:case"end":return e.stop()}}),e)}))),n.formValid=function(e){var a=e.formError,t=Object(f.a)(e,["formError"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){void 0===e&&(n=!1)})),n},n.onLogout=function(){(0,n.context.credential)("")},n.state={detail:{},username:void 0,password:void 0,formError:{username:"",password:""},result:"",green:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark((function e(){var a,t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.context.email,e.next=3,g.a.get("https://a2-ruize-nie.herokuapp.com/signup/"+a);case 3:t=e.sent,n=t.data,this.setState({detail:n[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.username,n=a.password,l=a.result,s=a.formError,c=a.green,o=this.state.detail;return r.a.createElement("div",null,r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-card"},r.a.createElement("form",{onSubmit:function(a){return e.onUpdate(a,o.email,t,n)},className:"sign-form",noValidate:!0},r.a.createElement("h2",{className:"profile-title"},"User Profile"),l.length>0&&r.a.createElement("span",{className:c?"success-message":"error-message"},l),r.a.createElement("label",{htmlFor:"email"},"Account"),r.a.createElement("input",{className:"input-field",type:"email",name:"email",id:"email",value:o.email,readOnly:!0}),r.a.createElement("label",{htmlFor:"username"},"Enter New Username"),r.a.createElement("input",{className:s.username.length>0?"input-field error":"input-field",type:"text",name:"username",id:"username",placeholder:o.username,value:t||"",onChange:this.onChange,noValidate:!0}),s.username.length>0&&r.a.createElement("span",{className:"error-message"},s.username),r.a.createElement("label",{htmlFor:"password"},"Enter New Password"),r.a.createElement("input",{className:s.password.length>0?"input-field error":"input-field",type:"password",name:"password",id:"password",placeholder:o.password,value:n||"",onChange:this.onChange,noValidate:!0}),s.password.length>0&&r.a.createElement("span",{className:"error-message"},s.password),r.a.createElement("div",{className:"update-container"},r.a.createElement("input",{className:"button update",type:"submit",value:"Update"})))),r.a.createElement("div",{className:"profile-primary-btn"},r.a.createElement(i.b,{onClick:this.onLogout,className:"logout link sign-up",to:"/"},r.a.createElement("button",null,"Logout Account")),r.a.createElement(i.b,{onClick:this.onDelete,to:"/",className:"link sign-up"},r.a.createElement("button",null,"Delete Account")))),r.a.createElement(S,null),r.a.createElement(F,null))}}]),t}(n.Component));q.contextType=k;var T=q,L=t(17),V=t.n(L),z=(t(68),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"header-container"},r.a.createElement("div",{className:"header-text"},r.a.createElement("h1",null,"Find the best places to stay quickly"),r.a.createElement("span",{className:"square"}),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, veritatis fugit? Eveniet repudiandae rerum esse labore vero repellat ut placeat tempora neque? Eius tenetur adipisci ab. Consequuntur a explicabo tempora!"),r.a.createElement("button",{className:"common-btn"},"Read More")),r.a.createElement("img",{className:"launch",src:V.a,alt:"launch page"}))}}]),t}(n.Component)),P=(t(69),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"features"},r.a.createElement("h1",{className:"timeline service-provide"},"SERVICES PROVIDED"),r.a.createElement("br",null),r.a.createElement("div",{className:"section-features"},r.a.createElement("div",{className:"feature-box"},r.a.createElement("h3",{className:"feature-heading"},"Explore the world"),r.a.createElement("p",{className:"feature-box-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.")),r.a.createElement("div",{className:"feature-box"},r.a.createElement("h3",{className:"feature-heading"},"Meet nature"),r.a.createElement("p",{className:"feature-box-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.")),r.a.createElement("div",{className:"feature-box"},r.a.createElement("h3",{className:"feature-heading"},"Find your way"),r.a.createElement("p",{className:"feature-box-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.")),r.a.createElement("div",{className:"feature-box"},r.a.createElement("h3",{className:"feature-heading"},"Live a healthier life"),r.a.createElement("p",{className:"feature-box-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."))))}}]),t}(n.Component)),D=(t(70),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={featureRoom:[{id:"1",subTitle:"3 beds 2 baths",title:"Modern home in the heart of historic Halifax",desc:"$1,900.00 ",descTail:"/ month",review:"4/5 stars ",reviewTail:"(based on 34 reviews)"},{id:"2",subTitle:"3 beds 2 baths",title:"Modern home in the heart of historic Halifax",desc:"$1,900.00 ",descTail:"/ month",review:"4/5 stars ",reviewTail:"(based on 34 reviews)"},{id:"3",subTitle:"3 beds 2 baths",title:"Modern home in the heart of historic Halifax",desc:"$1,900.00 ",descTail:"/ month",review:"4/5 stars ",reviewTail:"(based on 34 reviews)"},{id:"4",subTitle:"3 beds 2 baths",title:"Modern home in the heart of historic Halifax",desc:"$1,900.00 ",descTail:"/ month",review:"4/5 stars ",reviewTail:"(based on 34 reviews)"}]},e.viewDetail=function(a,t){a.preventDefault(),e.props.history.push({pathname:"/search/"+t})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"section-apartments"},r.a.createElement("div",{className:"timeline"},r.a.createElement("h1",null,"We're currently in these cities")),r.a.createElement("div",{className:"apartments-containers"},this.state.featureRoom.map((function(a,t){return r.a.createElement("div",{onClick:function(t){return e.viewDetail(t,a.id)},key:t,className:"card-container"},r.a.createElement("img",{src:V.a,className:"card-img",alt:"aprts showcases"}),r.a.createElement("div",{className:"text-container"},r.a.createElement("p",{className:"text-subtitle"},a.subTitle),r.a.createElement("p",{className:"text-title"},a.title),r.a.createElement("p",{className:"text-desc"},a.desc,r.a.createElement("span",{className:"text-tiny"},a.descTail)),r.a.createElement("p",{className:"text-review"},a.review,r.a.createElement("span",{className:"text-tiny"},a.reviewTail))))}))),r.a.createElement(i.b,{to:"/search"},r.a.createElement("button",{className:"view-more"},"View More")))}}]),t}(n.Component)),R=Object(p.g)(D),U=(t(71),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section-testimonials"},r.a.createElement("div",{className:"timeline"},r.a.createElement("h2",null,"Our customers can't live without us")),r.a.createElement("div",{className:"testimonials"},r.a.createElement("div",null,r.a.createElement("blockquote",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quasi enim suscipit eligendi, modi nam nesciunt, saepe odio sunt eaque earum? Esse alias possimus ipsum vero eligendi voluptas maiores?",r.a.createElement("cite",null,"Ruize Nie"))),r.a.createElement("div",null,r.a.createElement("blockquote",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quasi enim suscipit eligendi, modi nam nesciunt, saepe odio sunt eaque earum? Esse alias possimus ipsum vero eligendi voluptas maiores?",r.a.createElement("cite",null,"Ruize Nie"))),r.a.createElement("div",null,r.a.createElement("blockquote",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste quasi enim suscipit eligendi, modi nam nesciunt, saepe odio sunt eaque earum? Esse alias possimus ipsum vero eligendi voluptas maiores?",r.a.createElement("cite",null,"Ruize Nie")))))}}]),t}(n.Component)),$=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(P,null),r.a.createElement(R,null),r.a.createElement(U,null),r.a.createElement(S,null),r.a.createElement(F,null))}}]),t}(n.Component),I=t(37),M=t.n(I),Z=(t(72),{name:"single economy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero cupiditate dignissimos eius porro id obcaecati beatae repellendus? Rerum et maiores voluptates quisquam a reiciendis mollitia ipsa veniam laborum voluptatem!",extras:["Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet consectetur adipisicing elit."],price:100,size:200,capacity:1,pets:!1,breakfast:!1}),H=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={result:n.props.match.params.result},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"single-room"},r.a.createElement("div",{className:"book-container"},r.a.createElement("img",{src:V.a,alt:"",className:"room-images-banner"}),r.a.createElement("div",{className:"book-card"},r.a.createElement("img",{className:"ad-img",src:M.a,alt:"image not found"}),r.a.createElement("button",{className:"book-btn"},"Book Appointment"))),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("div",{className:"desc"},r.a.createElement("h3",null,"details"),r.a.createElement("p",null,Z.description)),r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,"info"),r.a.createElement("p",null,"price : $",Z.price),r.a.createElement("p",null,"size : ",Z.size," SQFT"),r.a.createElement("p",null,"max capacity : ",Z.capacity>1?"".concat(Z.capacity," people"):"".concat(Z.capacity," person")),r.a.createElement("p",null,Z.pets?"pets allowed":"no pets allowed"),r.a.createElement("p",null,Z.breakfast&&"free breakfast included")))),r.a.createElement("section",{className:"room-extras"},r.a.createElement("h6",null,"extras"),r.a.createElement("ul",{className:"extras"},Z.extras.map((function(e,a){return r.a.createElement("li",{key:a},"- ",e)})))),r.a.createElement(S,null),r.a.createElement(F,null))}}]),t}(n.Component),B=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),J=Object(p.g)(B),Q=(t(73),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.context.login;return r.a.createElement("header",{className:"nav-home"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",{className:"nav-logo"},r.a.createElement(i.b,{className:"link",to:"/"},"FindAbode")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-link"},r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/search"},"Search")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/favorite"},"Favorite")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/faq"},"FAQ")),!e&&r.a.createElement("li",null,r.a.createElement(i.b,{className:"link",to:"/signin"},"Sign In"))),e?r.a.createElement(i.b,{className:"link sign-up",to:"/profile"},r.a.createElement("button",null,"Profile")):r.a.createElement(i.b,{className:"link sign-up",to:"/signup"},r.a.createElement("button",null,"Sign Up")))))}}]),t}(n.Component));Q.contextType=k;var _=Q,W=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null,r.a.createElement(J,null),r.a.createElement(_,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:$}),r.a.createElement(p.b,{exact:!0,path:"/search/:result",component:H}),r.a.createElement(p.b,{exact:!0,path:"/signup",component:j}),r.a.createElement(p.b,{exact:!0,path:"/signin",component:A}),r.a.createElement(p.b,{exact:!0,path:"/profile",component:T}),r.a.createElement(p.b,{exact:!0,path:"/search"}),r.a.createElement(p.b,{exact:!0,path:"/blog"}),r.a.createElement(p.b,{exact:!0,path:"/favorite"}),r.a.createElement(p.b,{exact:!0,path:"/about"}),r.a.createElement(p.b,{exact:!0,path:"/contact"}),r.a.createElement(p.b,{exact:!0,path:"/faq"}),r.a.createElement(p.a,{to:"/"}))))}}]),t}(n.Component);s.a.render(r.a.createElement(i.a,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1e2ca6ce.chunk.js.map