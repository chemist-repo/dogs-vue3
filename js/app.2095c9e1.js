(function(e){function t(t){for(var n,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={app:0},o=[];function a(e){return i.p+"js/"+({Breed:"Breed",Favorites:"Favorites",Home:"Home"}[e]||e)+"."+{Breed:"023e3b6f",Favorites:"1425310d",Home:"e84c651d"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=c[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"6f32":function(e,t,r){var n={"./arrow-down.svg":"c874","./close.svg":"8b1b","./heart-solid.svg":"b877","./heart.svg":"7d16","./menu.svg":"d17f"};function c(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id="6f32"},"7d16":function(e,t,r){"use strict";r.r(t),t["default"]={id:"heart-usage",viewBox:"0 0 32 32",url:r.p+"img/icons.7c7c26f9.svg#heart",toString:function(){return this.url}}},"8b1b":function(e,t,r){"use strict";r.r(t),t["default"]={id:"close-usage",viewBox:"0 0 32 32",url:r.p+"img/icons.7c7c26f9.svg#close",toString:function(){return this.url}}},b877:function(e,t,r){"use strict";r.r(t),t["default"]={id:"heart-solid-usage",viewBox:"0 0 32 32",url:r.p+"img/icons.7c7c26f9.svg#heart-solid",toString:function(){return this.url}}},c1c3:function(e,t,r){},c874:function(e,t,r){"use strict";r.r(t),t["default"]={id:"arrow-down-usage",viewBox:"0 0 32 32",url:r.p+"img/icons.7c7c26f9.svg#arrow-down",toString:function(){return this.url}}},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c={class:"__app__"};function o(e,t,r,o,a,i){var u=Object(n["x"])("PartialHeader"),s=Object(n["x"])("RouterView");return Object(n["r"])(),Object(n["e"])("div",c,[Object(n["h"])(u),Object(n["h"])(s)])}var a={class:"header"},i=Object(n["g"])("Случайные собачки"),u=Object(n["g"])("Избранное");function s(e,t,r,c,o,s){var l=Object(n["x"])("RouterLink"),d=Object(n["x"])("UiIcon"),f=Object(n["x"])("UiSelect");return Object(n["r"])(),Object(n["e"])("header",a,[Object(n["h"])(l,{to:"/",class:"logo"},{default:Object(n["D"])((function(){return[Object(n["h"])("img",{src:c.logo,alt:"dogs-vue",class:"logo-img"},null,8,["src"])]})),_:1}),Object(n["h"])("button",{onClick:t[1]||(t[1]=function(){return c.onToggleActive&&c.onToggleActive.apply(c,arguments)}),class:"menu"},[c.active?(Object(n["r"])(),Object(n["e"])(d,{key:1,name:"close"})):(Object(n["r"])(),Object(n["e"])(d,{key:0,name:"menu"}))]),Object(n["h"])("nav",{class:["nav",{active:c.active}]},[Object(n["h"])(l,{to:{name:"Home"},class:"ui-button"},{default:Object(n["D"])((function(){return[i]})),_:1}),Object(n["h"])(f,{"onUpdate:current":c.onSelectBreed,options:c.allBreedsList,current:c.breed},{arrow:Object(n["D"])((function(){return[Object(n["h"])(d,{name:"arrow-down"})]})),_:1},8,["onUpdate:current","options","current"]),Object(n["h"])(l,{to:{name:"Favorites"},class:"ui-button"},{default:Object(n["D"])((function(){return[u]})),_:1})],2)])}r("96cf");var l=r("1da1"),d=r("6c02"),f=r("5502"),b="/dogs-vue3",p={name:"PartialHeader",setup:function(){var e=Object(d["d"])(),t=Object(d["c"])(),r=Object(f["e"])(),c=Object(n["u"])(!1),o="".concat(b,"/img/logo.png"),a=Object(n["c"])((function(){return t.params.breed})),i=Object(n["c"])((function(){return r.state.allBreedsList}));return Object(n["p"])(Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.dispatch("getAllBreedsList");case 2:case"end":return e.stop()}}),e)})))),{active:c,logo:o,breed:a,allBreedsList:i,onToggleActive:function(){c.value=!c.value},onSelectBreed:function(t){e.push({name:"Breed",params:{breed:t}})}}}};p.render=s;var m=p,v=Object(n["i"])({name:"app",components:{PartialHeader:m}});v.render=o;var O,g=v,j=(r("d3b7"),Object(d["a"])({history:Object(d["b"])(),routes:[{path:"/",name:"Home",component:function(){return r.e("Home").then(r.bind(null,"bb51"))}},{path:"/favorites",name:"Favorites",component:function(){return r.e("Favorites").then(r.bind(null,"48d5"))}},{path:"/b/:breed",name:"Breed",component:function(){return r.e("Breed").then(r.bind(null,"8cbe"))}}]})),h=function(){return{allBreedsList:[],randomDogsList:[],breedDogsList:[],favorites:[],isRandomDogsAction:!1,isBreedDogsAction:!1}},w=(r("99af"),r("ade3")),_="SET_ALL_BREEDS_LIST",y="SET_RANDOM_DOGS_LIST",S="SET_MORE_RANDOM_DOGS_LIST",k="SET_FAVORITES",x="SET_IS_RANDOM_DOGS_ACTION",E="SET_BREED_DOGS_LIST",L="SET_MORE_BREED_DOGS_LIST",D="SET_IS_BREED_DOGS_ACTION",R=(O={},Object(w["a"])(O,_,(function(e,t){e.allBreedsList=t})),Object(w["a"])(O,y,(function(e,t){e.randomDogsList=t})),Object(w["a"])(O,S,(function(e,t){e.randomDogsList=e.randomDogsList.concat(t)})),Object(w["a"])(O,k,(function(e,t){e.favorites=t})),Object(w["a"])(O,x,(function(e,t){e.isRandomDogsAction=t})),Object(w["a"])(O,E,(function(e,t){e.breedDogsList=t})),Object(w["a"])(O,L,(function(e,t){e.breedDogsList=e.breedDogsList.concat(t)})),Object(w["a"])(O,D,(function(e,t){e.isBreedDogsAction=t})),O),T=(r("b64b"),r("bc3a")),P=r.n(T),B=r("bb9d"),C=P.a.create({baseURL:"https://dog.ceo/api"}),A={getAllBreedsList:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,C({url:"/breeds/list/all",method:"GET"});case 4:return n=t.sent,c=n.data,o=Object.keys(Object(B["a"])(c,(function(e){var t=e.message;return t}),{})),r(_,o),t.abrupt("return",Promise.resolve(o));case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getRandomDogsList:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,C({url:"/breeds/image/random/20",method:"GET"});case 4:return n=t.sent,c=n.data,o=Object(B["a"])(c,(function(e){var t=e.message;return t}),[]),r(y,o),t.abrupt("return",Promise.resolve(o));case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getMoreRandomDogsList:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r(x,!0),t.prev=2,t.next=5,C({url:"/breeds/image/random/20",method:"GET"});case 5:return n=t.sent,c=n.data,o=Object(B["a"])(c,(function(e){var t=e.message;return t}),[]),r(S,o),t.abrupt("return",Promise.resolve(o));case 12:return t.prev=12,t.t0=t["catch"](2),t.abrupt("return",Promise.reject(t.t0));case 15:return t.prev=15,r(x,!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})))()},getBreedRandomDogsList:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,c,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,C({url:"/breed/".concat(t,"/images/random/20"),method:"GET"});case 4:return c=r.sent,o=c.data,a=Object(B["a"])(o,(function(e){var t=e.message;return t}),[]),n(E,a),r.abrupt("return",Promise.resolve(a));case 11:return r.prev=11,r.t0=r["catch"](1),r.abrupt("return",Promise.reject(r.t0));case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()},getMoreBreedRandomDogsList:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,c,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n(D,!0),r.prev=2,r.next=5,C({url:"/breed/".concat(t,"/images/random/20"),method:"GET"});case 5:return c=r.sent,o=c.data,a=Object(B["a"])(o,(function(e){var t=e.message;return t}),[]),n(L,a),r.abrupt("return",Promise.resolve(a));case 12:return r.prev=12,r.t0=r["catch"](2),r.abrupt("return",Promise.reject(r.t0));case 15:return r.prev=15,n(D,!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[2,12,15,18]])})))()}},U={},I=Object(f["a"])({state:h,mutations:R,actions:A,getters:U});function G(e,t,r,c,o,a){return Object(n["r"])(),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),class:"ui-button"},[Object(n["w"])(e.$slots,"default")])}var M={name:"UiButton"};M.render=G;var F=M,H={class:"ui-select"},N={class:"ui-select-value"},V={class:"ui-select-arrow"},$={key:0,class:"ui-select-wrap"};function q(e,t,r,c,o,a){var i=Object(n["y"])("outside");return Object(n["E"])((Object(n["r"])(),Object(n["e"])("div",H,[Object(n["h"])("a",{onClick:t[1]||(t[1]=Object(n["F"])((function(){return e.onClickSelect&&e.onClickSelect.apply(e,arguments)}),["prevent"])),href:"#",class:["ui-select-current",{active:e.active}]},[Object(n["h"])("span",N,Object(n["A"])(e.current),1),Object(n["h"])("span",V,[Object(n["w"])(e.$slots,"arrow")])],2),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["D"])((function(){return[e.active?(Object(n["r"])(),Object(n["e"])("div",$,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(e.filteredOptions,(function(t,r){return Object(n["r"])(),Object(n["e"])("a",{onClick:Object(n["F"])((function(r){return e.onClickOption(t)}),["prevent"]),key:"option-".concat(r),href:"#",class:"ui-select-option"},Object(n["A"])(t),9,["onClick"])})),128))])):Object(n["f"])("",!0)]})),_:1})],512)),[[i,e.onCLose]])}r("4de4");var J=r("5530"),z=Object(n["i"])({name:"UiSelect",props:{current:{type:String,default:"Выберите значение"},options:{type:Array,default:function(){return[]}}},setup:function(e,t){var r=Object(n["u"])(!1),c=Object(n["c"])((function(){return e.options.filter((function(t){return t!==e.current}))})),o={onClickOption:function(e){r.value=!1,t.emit("update:current",e),t.emit("toggle",r.value)},onClickSelect:function(){r.value=!r.value,t.emit("toggle",r.value)},onCLose:function(){r.value=!1,t.emit("toggle",r.value)}};return Object(J["a"])(Object(J["a"])(Object(J["a"])({},e),o),{},{filteredOptions:c,active:r})}});z.render=q;var K=z;function Q(e,t,r,c,o,a){return Object(n["r"])(),Object(n["e"])("picture",{class:["ui-picture","ui-picture-format--".concat(e.format)]},[Object(n["h"])("img",{src:e.imgPath,alt:e.alt,class:"ui-picture--img"},null,8,["src","alt"])],2)}r("4d63"),r("ac1f"),r("25f0");function W(e){return e instanceof Object&&e.constructor===Object}function X(e){return"string"===typeof e}function Y(e){return"function"===typeof e}var Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(X(e)){var r=new Image;return r.src=e,r.style.display="none",document.body.appendChild(r),new Promise((function(n){r.onload=function(){n(e),document.body.removeChild(r)},r.onerror=function(){n(t),document.body.removeChild(r)}}))}return Promise.resolve(t)},ee=new RegExp("^(?:[a-z]+:)?//","i"),te="/dogs-vue3",re="".concat(te,"/img/no-image.jpg"),ne=Object(n["i"])({name:"UiPicture",props:{src:{type:String,default:re},alt:{type:String,default:"no-image"},format:{type:String,default:"4x3"}},setup:function(e,t){var r=Object(n["u"])(re);return Object(n["C"])((function(){return e.src}),function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!ee.test(n)){e.next=7;break}return e.next=3,Z(n,re);case 3:r.value=e.sent,t.emit("onload"),e.next=8;break;case 7:r.value=n;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(n["p"])(Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!ee.test(e.src)){t.next=4;break}return t.next=3,Z(e.src,re);case 3:r.value=t.sent;case 4:case"end":return t.stop()}}),t)})))),Object(J["a"])(Object(J["a"])({},e),{},{imgPath:r})}});ne.render=Q;var ce=ne,oe={class:"ui-gallery"};function ae(e,t,r,c,o,a){return Object(n["r"])(),Object(n["e"])("div",oe,[Object(n["w"])(e.$slots,"default")])}var ie={name:"UiGallery"};ie.render=ae;var ue=ie,se={key:0};function le(e,t,r,c,o,a){return Object(n["r"])(),Object(n["e"])("svg",{class:e.className,xmlns:"http://www.w3.org/2000/svg"},[e.title?(Object(n["r"])(),Object(n["e"])("title",se,Object(n["A"])(e.title),1)):Object(n["f"])("",!0),Object(n["h"])("use",{"xlink:href":e.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"},null,8,["xlink:href"])],2)}r("b0c0");var de=Object(n["i"])({name:"UiIcon",props:{name:{type:String,required:!0},title:{type:String,default:""}},setup:function(e){var t=Object(n["c"])((function(){return"ui-icon ui-icon--".concat(e.name)})),c=Object(n["c"])((function(){var t=r("6f32")("./".concat(e.name,".svg"));return Object.prototype.hasOwnProperty.call(t,"default")&&(t=t.default),t.url}));return Object(J["a"])(Object(J["a"])({},e),{},{className:t,iconPath:c})}});de.render=le;var fe=de,be={install:function(e){e.component("UiButton",F),e.component("UiSelect",K),e.component("UiPicture",ce),e.component("UiGallery",ue),e.component("UiIcon",fe)}},pe=r("61be"),me={mounted:function(e,t){if(W(t.value))if(Y(t.value.handler)){var r=Object(pe["debounce"])(t.value.handler,t.value.time||100,t.value.option||{}),n=t.value.isThisElementScroll,c={passive:!0};n?e.addEventListener("scroll",r,c):window.addEventListener("scroll",r,c),e._onScroll={callback:r,options:c,isThisElementScroll:n},t.modifiers&&t.modifiers.quiet||r()}else{var o="[Vue-scroll:] 'value.handler' params handler is not a function or undefined, but has to be";console.warn(o)}else{var a="[Vue-scroll:] value is not a object, but has to be";console.warn(a)}},unmounted:function(e){if(e._onScroll){var t=e._onScroll,r=t.callback,n=t.options,c=t.isThisElementScroll;c?e.removeEventListener("scroll",r,n):window.removeEventListener("scroll",r,n),delete e._onScroll}}},ve=me,Oe={beforeMount:function(e,t){var r=t.modifiers.bubble,n=function(n){(r||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=n,setTimeout((function(){window.addEventListener("click",n)}),0)},unmounted:function(e){window.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}},ge=Oe,je={install:function(e){e.directive("scroll",ve),e.directive("outside",ge)}};r("c1c3");Object(n["d"])(g).use(j).use(I).use(be).use(je).mount("#app")},d17f:function(e,t,r){"use strict";r.r(t),t["default"]={id:"menu-usage",viewBox:"0 0 32 32",url:r.p+"img/icons.7c7c26f9.svg#menu",toString:function(){return this.url}}}});
//# sourceMappingURL=app.2095c9e1.js.map