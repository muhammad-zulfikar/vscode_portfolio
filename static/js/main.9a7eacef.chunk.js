/*! For license information please see main.9a7eacef.chunk.js.LICENSE.txt */
(this["webpackJsonpdeveloper-portfolio-app"]=this["webpackJsonpdeveloper-portfolio-app"]||[]).push([[0],{158:function(e,t,n){var a={"./about.md":[161,3],"./education.md":[162,4],"./experience.md":[163,5],"./projects.md":[164,6]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(a)},r.id=158,e.exports=r},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n.n(o),l=(n(58),n(11)),c=n(42),s=n(4);l.b.add(c.a,s.i,s.h,s.a,s.c,s.m,s.q,s.b,s.p,s.n,s.o,s.e,s.l,s.d,s.k,s.f,s.j,s.g);var u,p,m,d,h,f=n(10),g=n(2),b=n(24),y=n(3),v=n(20),x=n(15),w=n(8),E="45rem",j=50,k=200,O=40,N=22,S="'Ubuntu', sans-serif",L={root:{'& a[aria-current="page"] span':{display:"inline-block !important"}},navText:Object(g.a)({marginLeft:"8px"},"@media screen and (max-width: ".concat(E,")"),{display:"none"}),currentTab:{"& .closeButton":(u={color:"#abb2bf",marginLeft:"8px",paddingLeft:"8px"},Object(g.a)(u,"@media screen and (max-width: ".concat(E,")"),{paddingLeft:"8px"}),Object(g.a)(u,"&:hover",{color:"#f3f3f3"}),u)},otherTab:{"& .closeButton":{display:"none"}}},z=["name","url","mdFileName"],H=Object(y.a)(L),I=function(e){var t=e.name,n=e.url,a=(e.mdFileName,Object(x.a)(e,z)),o=H();return r.a.createElement("span",{className:o.root},r.a.createElement(f.a,{to:n,getProps:function(e){return{className:e.isCurrent?o.currentTab:o.otherTab}}},r.a.createElement(w.a,Object.assign({},a,{size:a.size||"lg"})),r.a.createElement("span",{className:o.navText},t),r.a.createElement(w.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Object(f.d)("/")},className:"closeButton",icon:"times",size:"1x",title:"Close"})))},D=n(6),T=n.n(D),C={root:{fontFamily:S,height:O},list:{color:"#abb2bf",listStyle:"none",margin:"0",padding:"0"},listItem:{display:"inline-block","& a":(p={borderRight:"1px solid ".concat(T()("#282c34").darken(.05).string()),borderTop:"4px solid ".concat("#21252b"),cursor:"pointer",display:"inline-block",fontSize:"1.2rem",letterSpacing:"0.5px",padding:"10px 15px",textTransform:"lowercase",transition:"background, border-color 250ms ease"},Object(g.a)(p,"@media screen and (max-width: ".concat(E,")"),{letterSpacing:"0",padding:"10px"}),Object(g.a)(p,'&:hover, &[aria-current="page"]',{borderTopColor:"#21252b",background:T()("#21252b").lighten(.02).string(),color:"#f3f3f3"}),Object(g.a)(p,'&[aria-current="page"]',{background:"#282c34",borderTopColor:T()("#21252b").lighten(.05).string()}),p)}},F=Object(y.a)(C),_=function(e){var t=e.tabs,n=F();return r.a.createElement("nav",{className:n.root},r.a.createElement("ul",{className:n.list},t.map((function(e){return r.a.createElement("li",{className:n.listItem,key:e.name},r.a.createElement(I,e))}))))},P={root:{background:"#21252b",position:"sticky",top:0,left:0,width:"100%",height:O}},M=Object(y.a)(P),W=function(e){var t=e.tabs,n=M();return r.a.createElement("header",{className:n.root},r.a.createElement(_,{tabs:t}))},B={link:{color:"#9599a0",cursor:"pointer",marginBottom:"10px",transition:"color 100ms ease","&:hover":{color:T()("#9599a0").lighten(.2).string()},"&:last-of-type":{marginBottom:"20px"}},iconWrapper:{position:"relative",display:"inline-block"},icon:{padding:"10px"},badge:{position:"absolute",right:"4px",top:"4px",fontSize:"0.8em",backgroundColor:"#98c379",borderRadius:"4px",color:"#111",padding:"1px 2px",opacity:"0.9"}},G=Object(y.a)(B),A=function(e){var t=e.name,n=e.url,a=e.icon,o=e.isInternal,i=e.badge,l=G(),c=r.a.createElement("span",{className:l.iconWrapper},r.a.createElement(w.a,{className:l.icon,icon:a,size:"lg"}),i&&r.a.createElement("span",{className:l.badge},i));return o?r.a.createElement(f.a,{to:n,key:"left-bar-".concat(t),className:l.link,"aria-label":t,title:t},c):r.a.createElement("a",{href:n,key:"left-bar-".concat(t),className:l.link,"aria-label":"Find me on ".concat(t),title:"Find me on ".concat(t),target:"_blank",rel:"noopener noreferrer"},c)},U=n(45),J=n.n(U),R={root:{background:"#21252b",borderRadius:"4px",color:"#abb2bf",display:"flex",margin:"8px",transition:"color 500ms ease","&:hover":{background:T()("#21252b").darken(.1).string()},"&:hover .icon":{color:"#42a5f5"}},contents:{alignItems:"center",display:"flex",minHeight:"24px",padding:"6px 10px"},text:{fontSize:"1.2rem",fontWeight:400,marginLeft:"6px"},count:{fontSize:"1.2rem",background:T()("#21252b").lighten(.5).string(),borderRadius:"50%",marginLeft:"10px",padding:"4px 8px"}},Z=Object(y.a)(R),K=function(e){var t=e.href,n=e.title,a=e.icon,o=e.size,i=e.text,l=e.showCount,c=e.count,s=Z();return r.a.createElement("a",{className:s.root,href:t,"aria-label":n,title:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:s.contents},r.a.createElement(w.a,{className:"icon",icon:a,size:o||"lg"}),r.a.createElement("span",{className:s.text},i),!!l&&r.a.createElement("span",{className:s.count},c)))},q=(n(25),n(33)),Y={root:{display:"flex",flexDirection:"column",marginTop:"50px","& div":{display:"flex",alignItems:"center",justifyContent:"center"}},mainButtons:(m={display:"flex",flexDirection:"row"},Object(g.a)(m,"@media screen and (max-width: ".concat(E,")"),{flexDirection:"column"}),Object(g.a)(m,"& div",{display:"flex",alignItems:"center",justifyContent:"center"}),m)},Q=Object(y.a)(Y),V=function(e){var t=e.contactData,n=e.repoUrl,a=Q(),o=function(e){var t=new URL(e).pathname.split("/");return{repo:t.pop()||"",username:t.pop()||""}}(n),i=(o.repo,o.username,t.filter((function(e){return e.isCenter}))[0]),l=t.filter((function(e){return e.isMain}));return r.a.createElement("div",{className:a.root},r.a.createElement("div",null,r.a.createElement(K,{key:"main-contact-".concat(i.icon),href:i.url,icon:i.icon,size:"lg",text:i.text||"",title:""})),r.a.createElement("div",{className:a.mainButtons},l.map((function(e){return r.a.createElement(K,{key:"main-contact-".concat(e.icon),href:e.url,icon:e.icon,size:"lg",text:e.text||"",title:""})}))))},$=n(46),X=n(5),ee=function(e){var t=e.title,n=e.description,a=e.lang,o=void 0===a?"en":a,i=e.meta,l=void 0===i?[]:i,c=n||X.description;return r.a.createElement($.a,{htmlAttributes:{lang:o},title:t,titleTemplate:"%s \u2022 ".concat(X.title),meta:[{name:"description",content:c},{name:"keywords",content:X.keywords},{name:"canonical",content:X.homepage},{name:"theme-color",content:X.themeColor},{property:"og:title",content:X.title},{property:"og:description",content:X.description},{property:"og:type",content:"website"},{property:"og:url",content:X.homepage},{property:"og:image",content:X.image},{property:"og:image:width",content:"320"},{property:"og:image:height",content:"320"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:X.homepage},{name:"twitter:title",content:X.title},{name:"twitter:description",content:X.description},{name:"twitter:image",content:X.image},{name:"google-site-verification",content:X.verification.google}].concat(l)})},te={root:{alignItems:"center",display:"flex",flexDirection:"column",width:"100%",height:"calc(100vh - ".concat(O+N,"px)"),justifyContent:"center",fontFamily:S},heading:Object(g.a)({color:"#c2c2c2",fontWeight:400,fontSize:"3.2rem",letterSpacing:"2px",margin:"10px 20px",padding:"0",textShadow:"5px 5px ".concat("#21252b"),userSelect:"none"},"@media screen and (max-width: ".concat(E,")"),{fontSize:"2.4rem"}),typedWrap:Object(g.a)({color:"#909295",fontSize:"2.4rem",fontWeight:400,margin:"5px",padding:"0",userSelect:"none","& a":{textDecoration:"none",borderBottom:"1px dashed ".concat("#909295")},"& strong":{fontWeight:"500"}},"@media screen and (max-width: ".concat(E,")"),{fontSize:"2.0rem"}),subHeading:Object(g.a)({color:"#909295",fontSize:"1.6rem",fontWeight:400,margin:"5px",padding:"0",userSelect:"none","& a":{textDecoration:"none"},"& strong":{fontWeight:"500"}},"@media screen and (max-width: ".concat(E,")"),{fontSize:"2.0rem"}),".typed-cursor":{color:"#42a5f5"}},ne=Object(y.a)(te),ae=function(e){var t=e.staticData,n=e.contactData,o=e.repoUrl,i=ne();Object(a.useEffect)((function(){var e={strings:t.typed,typeSpeed:70,backSpeed:70,loop:!0,smartBackspace:!0},n=new J.a("#typed-insert-point",e);return function(){n.destroy()}}),[t]);var l=function(){var e=Math.floor(Math.random()*q.length);return"".concat(q[e].hello,"!")}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{title:l}),r.a.createElement("section",{className:i.root},r.a.createElement("h1",{className:i.heading},t.mainLine),r.a.createElement("div",{className:i.typedWrap},r.a.createElement("span",{id:"typed-insert-point",style:{whiteSpace:"pre"}})),r.a.createElement(V,{contactData:n,repoUrl:o})))},re=n(49),oe=n(22),ie=n(23),le=[{name:"Home",url:"/",icon:"home",isInternal:!0,comp:function(){return r.a.createElement(ae,{staticData:re,contactData:oe,repoUrl:ie.repository.url})}}],ce=[{name:"experience.html",url:"/experience",icon:["fab","html5"],color:"orange",mdFileName:"experience"},{name:"education.css",url:"/education",icon:["fab","css3"],color:"#42a5f5",mdFileName:"education"},{name:"projects.js",url:"/projects",icon:["fab","js"],color:"#ffca28",mdFileName:"projects"},{name:"about.py",url:"/about",icon:["fab","python"],color:"#42a5f5",mdFileName:"about"}],se={root:(d={alignItems:"center",background:"#333842",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",position:"fixed",left:"0",top:"0",width:"".concat(j,"px")},Object(g.a)(d,"@media screen and (max-width: ".concat(E,")"),{display:"none"}),Object(g.a)(d,"& div",{display:"flex",alignItems:"center",flexDirection:"column",padding:"10px 0"}),d),divider:{height:"1px",background:T()("#333842").lighten(.35).string(),width:"95%",marginTop:"4px",marginBottom:"12px"}},ue=Object(y.a)(se),pe=function(e){var t=e.contactData,n=ue(),a=le.map((function(e){return{name:e.name,url:e.url,icon:e.icon,isInternal:e.isInternal,badge:e.badge}})),o=function(e){return e.map((function(e){return r.a.createElement(A,Object.assign({key:e.name},e))}))};return r.a.createElement("div",{className:n.root},r.a.createElement("div",null,o(a),r.a.createElement("span",{className:n.divider}),o(t)),r.a.createElement("div",null,o([{name:"Useless button!",url:"",icon:"cog",isInternal:!0}])))},me={root:{background:"#21252b",height:"100vh",position:"fixed",top:"0",left:j,width:k,"& li":{listStyle:"none",padding:"6px 12px"}},closed:{display:"none"}},de=Object(y.a)(me),he=function(e){var t=e.tabs,n=e.open,a=de();return r.a.createElement("div",{className:Object(v.a)(a.root,Object(g.a)({},a.closed,!n))},t.map((function(e){return r.a.createElement("li",{key:e.name},e.mdFileName)})))},fe={root:{bottom:"0",background:"#21252b",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:S,fontWeight:400,left:"0",position:"fixed",width:"100vw",height:N,"& span, & a":{display:"inline-block",padding:"2px 8px","&:hover":{background:"#282c34",cursor:"pointer"}}},icon:{color:"#abb2bf"},text:{color:"#abb2bf",fontSize:"1.2rem",padding:"0 4px"}},ge=Object(y.a)(fe),be=function(){var e=ge();return r.a.createElement("footer",{className:e.root},r.a.createElement("a",{href:ie.repository.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(w.a,{className:e.icon,icon:"code-branch",size:"xs",inverse:!0}),r.a.createElement("span",{className:e.text},"master")),r.a.createElement("span",null,r.a.createElement(w.a,{className:e.icon,icon:"smile",size:"sm",inverse:!0})))},ye={"@global":{html:{fontSize:"62.5%"},body:{fontFamily:"'Ubuntu Mono', monospace",fontSize:"1.6rem",background:"#282c34",boxSizing:"border-box"},button:{cursor:"pointer","&:disabled":{cursor:"default"}},a:{color:"#abb2bf",textDecoration:"none",transition:"color 500ms ease","&:visited":{color:T()("#abb2bf").darken(.1).string()}},".color-transform":{transform:"color 500ms ease"}},root:(h={position:"absolute",height:"100vh",width:"calc(100% - ".concat(j,"px)")},Object(g.a)(h,"@media screen and (max-width: ".concat(E,")"),{width:"100%"}),Object(g.a)(h,"padding",0),Object(g.a)(h,"margin",0),h),content:Object(g.a)({position:"relative",top:0,left:"".concat(j,"px"),right:0,width:"100%"},"@media screen and (max-width: ".concat(E,")"),{left:"0"}),explorerOpen:{left:"".concat(j+k,"px")}},ve=Object(y.a)(ye),xe=function(e){var t=e.children,n=e.tabs,o=e.contactData,i=Object(a.useState)(!1),l=Object(b.a)(i,2),c=l[0],s=(l[1],ve());return r.a.createElement("div",{className:s.root},r.a.createElement(pe,{contactData:o}),r.a.createElement(he,{tabs:n,open:c}),r.a.createElement("main",{className:Object(v.a)(s.content,Object(g.a)({},s.explorerOpen,c))},r.a.createElement(W,{tabs:n}),t),r.a.createElement(be,null))},we=n(50),Ee=n(51),je=n.n(Ee),ke={root:Object(g.a)({maxWidth:"960px",padding:"0 20px",marginBottom:"200px","& a:hover":{color:"#c2c2c2"},"& li":{listStyle:"square"}},"@media screen and (max-width: ".concat(E,")"),{marginLeft:0}),content:{color:"#abb2bf",fontSize:"1.6rem","& h3":{color:"#42a5f5"},"& ul":Object(g.a)({"& li":{paddingBottom:"4px","& a":{color:"#42a5f5"}}},"@media screen and (max-width: ".concat(E,")"),{paddingLeft:"20px"})}},Oe=Object(y.a)(ke),Ne=function(e){var t=e.seo,n=e.children,a=Oe();return r.a.createElement(r.a.Fragment,null,!!t&&r.a.createElement(ee,t),r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.content},n)))};function Se(){Se=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new O(r||[]);return a(i,"_invoke",{value:w(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var p={};function m(){}function d(){}function h(){}var f={};c(f,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==t&&n.call(b,o)&&(f=b);var y=h.prototype=m.prototype=Object.create(f);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(x.prototype),c(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new x(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}var Le=Object(y.a)({mdpage:{paddingBottom:"10rem"}}),ze=function(e){var t=e.fileName,o=Object(a.useState)(""),i=Object(b.a)(o,2),l=i[0],c=i[1],s=Le();return Object(a.useEffect)((function(){(function(){var e=Object(we.a)(Se().mark((function e(){var a,r,o;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(158)("./".concat(t,".md"));case 2:return a=e.sent,e.next=5,fetch(a.default);case 5:return r=e.sent,e.next=8,r.text();case 8:o=e.sent,c(o);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement(Ne,{seo:{title:t}},r.a.createElement(je.a,{className:s.mdpage,source:l,escapeHtml:!1}))},He=["comp"],Ie=["name","url","comp"],De=function(e){var t=e.comp,n=Object(x.a)(e,He);return r.a.createElement(t,n)},Te=function(e){var t=e.fileName;return r.a.createElement(ze,{fileName:t})},Ce=[le.map((function(e){var t=e.name,n=e.url,a=e.comp,o=Object(x.a)(e,Ie);return r.a.createElement(De,Object.assign({path:n,key:t,comp:a},o))})),ce.map((function(e){var t=e.name,n=e.url,a=e.mdFileName;return r.a.createElement(Te,{path:n,key:t,fileName:a})})),r.a.createElement(f.b,{key:"notfound",from:"*",to:"/",default:!0,noThrow:!0})],Fe=function(){return r.a.createElement(xe,{tabs:ce,contactData:oe},r.a.createElement(f.c,null,Ce))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=n(52);n.n(_e).a.config(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e){e.exports=JSON.parse('[{"name":"Email","url":"mailto:zulfikar6556@gmail.com","icon":["fas","envelope"],"isMain":true,"text":"E-mail"},{"name":"LinkedIn","url":"https://linkedin.com/in/muhammad-zulfikar-076a7b227","icon":["fab","linkedin"],"isMain":true,"text":"LinkedIn"},{"name":"WhatsApp","url":"https://wa.me/+6285156453730","icon":["fab","whatsapp"],"isMain":true,"text":"WhatsApp"},{"name":"GitHub","url":"https://github.com/muhammad-zulfikar","icon":["fab","github"],"isMain":true,"text":"GitHub"},{"name":"Resume","url":"/resume.pdf","icon":["fas","file-pdf"],"isMain":false,"isCenter":true,"text":"Resume"}]')},23:function(e){e.exports=JSON.parse('{"name":"developer-portfolio-app","version":"2.0.0","description":"VS Code/Atom One Dark inspired developer portfolio app.","private":true,"repository":{"type":"git","url":"https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io"},"homepage":"http://muhammad-zulfikar.github.io","license":"GNU GPLv3","scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts --openssl-legacy-provider start","build":"react-scripts --openssl-legacy-provider build","test:base":"react-scripts test --passWithNoTests","test":"npm run test:base -- --watchAll=false","test:watch":"npm run test:base -- --watchAll","test:update":"npm run test:base -- --updateSnapshot --forceExit","eject":"react-scripts eject","lint":"eslint \\"*/**/*.{js,ts,tsx}\\"","lint:ci":"npm run lint -- --quiet","lint:fix":"npm run lint -- --fix","progress":"ts-node -O \'{\\"module\\":\\"commonjs\\"}\' scripts/updateProgress.ts"},"husky":{"hooks":{"pre-commit":"lint-staged","pre-push":"npm test"}},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.36","@fortawesome/free-brands-svg-icons":"^5.15.4","@fortawesome/free-solid-svg-icons":"^5.15.4","@fortawesome/react-fontawesome":"^0.1.16","@reach/router":"^1.3.4","clsx":"^1.1.1","color":"^3.2.1","dayjs":"^1.10.7","dotenv":"^8.6.0","isomorphic-unfetch":"^3.1.0","normalize.css":"^8.0.1","react":"^16.14.0","react-circular-progressbar":"^2.0.4","react-dom":"^16.14.0","react-helmet":"^6.1.0","react-jss":"^10.8.2","react-markdown":"^4.3.1","react-scripts":"3.4.1","react-tooltip":"^4.2.21","rehype-raw":"^6.1.1","typed.js":"^2.0.12"},"devDependencies":{"@testing-library/jest-dom":"^5.14.1","@testing-library/react":"^10.4.9","@testing-library/user-event":"^12.8.3","@types/color":"^3.0.2","@types/jest":"^25.2.3","@types/node":"^14.17.32","@types/reach__router":"^1.3.9","@types/react":"^16.14.20","@types/react-dom":"^16.9.14","@types/react-helmet":"^5.0.19","@typescript-eslint/eslint-plugin":"^2.34.0","@typescript-eslint/parser":"^2.34.0","eslint":"6.8.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.4.1","eslint-plugin-react":"^7.26.1","gh-pages":"^6.1.1","husky":"^4.3.8","lint-staged":"^10.5.4","prettier":"^2.4.1","ts-node":"^9.1.1","ts-node-dev":"^1.1.8","typescript":"^3.9.10"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},33:function(e){e.exports=JSON.parse('[{"language":"Afrikaans","hello":"hallo"},{"language":"Azerbaijani","hello":"Salam"},{"language":"Catalan","hello":"Hola"},{"language":"Cebuano","hello":"Hello"},{"language":"Dutch","hello":"Hallo"},{"language":"English","hello":"Hello"},{"language":"Filipino","hello":"Hello"},{"language":"Finnish","hello":"Hei"},{"language":"French","hello":"Bonjour"},{"language":"Frisian","hello":"Hello"},{"language":"Galician","hello":"Ola"},{"language":"German","hello":"Hallo"},{"language":"Haitian Creole","hello":"Bonjou"},{"language":"Hungarian","hello":"Hell\xf3"},{"language":"Icelandic","hello":"Hall\xf3"},{"language":"Indonesian","hello":"Halo"},{"language":"Italian","hello":"Ciao"},{"language":"Javanese","hello":"Hello"},{"language":"Kurdish (Kurmanji)","hello":"Hello"},{"language":"Malagasy","hello":"Hello"},{"language":"Malay","hello":"Hello"},{"language":"Maltese","hello":"Hello"},{"language":"Maori","hello":"Hiha"},{"language":"Norwegian","hello":"Hallo"},{"language":"Pashto","hello":"Salam"},{"language":"Persian","hello":"Salam"},{"language":"Polish","hello":"Cze\u015b\u0107"},{"language":"Portuguese","hello":"Ol\xe1"},{"language":"Romanian","hello":"Alo"},{"language":"Scots Gaelic","hello":"Hello"},{"language":"Sesotho","hello":"Hello"},{"language":"Shona","hello":"Hello"},{"language":"Somali","hello":"Hello"},{"language":"Spanish","hello":"Hola"},{"language":"Sundanese","hello":"halo"},{"language":"Swahili","hello":"Sawa"},{"language":"Swedish","hello":"Hall\xe5"},{"language":"Turkish","hello":"Merhaba"},{"language":"Urdu","hello":"\u06c1\u06cc\u0644\u0648"},{"language":"Uzbek","hello":"Salom"},{"language":"Welsh","hello":"Helo"},{"language":"Yoruba","hello":"Kaabo"}]')},49:function(e){e.exports=JSON.parse('{"mainLine":"Hi! I\'m Zulfikar","typed":["Welcome to my portfolio","I\'m a <strong>Data Analyst</strong>","Click on the tabs above to navigate","I\'m an <a href=\'https://fisip.upnvj.ac.id/tentang-s1-hubungan-internasional\'>IR student @ UPNVJ</a>","I have a relationship with data","I\'m an <a href=\'https://16personalities.com/intp-personality\'>INTP </a>through and through","I play <a href=\'https://tetr.io\'>Tetris</a>"]}')},5:function(e){e.exports=JSON.parse('{"title":"Zulfikar | Data Analyst","description":"Zulikar\'s portfolio website","keywords":"Muhammad Zulfikar, Zulfikar, muhammad.zulfikar, m.zulfikar, zulfikar, zulfikar@gmail.com, SQL, Python, R, HTML, CSS, JavaScript","homepage":"https://muhammad-zulfikar.github.io","themeColor":"#21252b","image":"/images/logo512.png","verification":{"google":"yoA6kTc96mzuKG5z93MpyxJbTBmCeHRsP64QEEGuI28"}}')},53:function(e,t,n){e.exports=n(160)}},[[53,1,2]]]);
//# sourceMappingURL=main.9a7eacef.chunk.js.map