(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Breed"],{2532:function(t,e,r){"use strict";var n=r("23e7"),a=r("5a34"),o=r("1d80"),i=r("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(o(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),o=r("7dd0"),i="String Iterator",c=a.set,s=a.getterFor(i);o(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,d,f,l,v,b=a(t),g="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,m=void 0!==h,y=u(b),O=0;if(m&&(h=n(h,p>2?arguments[2]:void 0,2)),void 0==y||g==Array&&i(y))for(e=c(b.length),r=new g(e);e>O;O++)v=m?h(b[O],O):b[O],s(r,O,v);else for(f=y.call(b),l=f.next,r=new g;!(d=l.call(f)).done;O++)v=m?o(f,h,[d.value,O],!0):d.value,s(r,O,v);return r.length=O,r}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),o=function(t){return function(e,r){var o,i,c=String(a(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):o:t?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6aee":function(t,e,r){"use strict";r("caad"),r("2532");var n=r("7a23"),a={class:"container-fluid py-3"};function o(t,e,r,o,i,c){var s=Object(n["x"])("PartialCard"),u=Object(n["x"])("UiGallery"),d=Object(n["y"])("scroll");return Object(n["E"])((Object(n["r"])(),Object(n["e"])("div",a,[Object(n["h"])(u,null,{default:Object(n["D"])((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(t.images,(function(e,r){return Object(n["r"])(),Object(n["e"])(s,{onClickCard:t.setFavorite,key:"dog-".concat(r),src:e,active:t.favorites.includes(e)},null,8,["onClickCard","src","active"])})),128))]})),_:1})],512)),[[d,{handler:function(e){t.$emit("scroll",e)}}]])}r("99af"),r("4de4");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function u(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return c(t)||s(t)||u(t)||d()}var l=r("5530"),v=r("5502"),b={class:"card-icon"};function g(t,e,r,a,o,i){var c=Object(n["x"])("UiPicture"),s=Object(n["x"])("UiIcon");return Object(n["r"])(),Object(n["e"])("div",{onClick:e[1]||(e[1]=function(e){return t.$emit("clickCard",t.src)}),class:"card"},[Object(n["h"])(c,{src:t.src},null,8,["src"]),Object(n["h"])("i",b,[t.active?(Object(n["r"])(),Object(n["e"])(s,{key:0,name:"heart-solid"})):(Object(n["r"])(),Object(n["e"])(s,{key:1,name:"heart"}))])])}var p=Object(n["i"])({name:"PartialCard",props:{src:{type:String,default:""},active:{type:Boolean,default:!1}}});p.render=g;var h=p,m=r("c83b"),y=Object(n["i"])({name:"PartialList",components:{PartialCard:h},props:{images:{type:Array,default:function(){return[]}},favorites:{type:Array,default:function(){return[]}}},methods:Object(l["a"])(Object(l["a"])({},Object(v["c"])(["SET_FAVORITES"])),{},{setFavorite:function(t){var e=m["a"].get("favorites")||[],r=[];r=e.includes(t)?e.filter((function(e){return e!==t})):[].concat(f(e),[t]),this.SET_FAVORITES(r),m["a"].set("favorites",r)}})});y.render=o;e["a"]=y},"8cbe":function(t,e,r){"use strict";r.r(e);var n=r("7a23");function a(t,e,r,a,o,i){var c=Object(n["x"])("PartialList");return Object(n["r"])(),Object(n["e"])(c,{onScroll:i.scroll,images:t.breedDogsList,favorites:t.favorites},null,8,["onScroll","images","favorites"])}var o=r("5530"),i=(r("96cf"),r("1da1")),c=r("6aee"),s=r("5502"),u={name:"view-breed",components:{PartialList:c["a"]},watch:{"$route.params.breed":function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.getBreedRandomDogsList(t);case 2:case"end":return r.stop()}}),r)})))()}},computed:Object(o["a"])({},Object(s["d"])(["breedDogsList","favorites","isBreedDogsAction"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["getBreedRandomDogsList","getMoreBreedRandomDogsList"])),{},{scroll:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=.95,n=(window.scrollY||document.documentElement.scrollTop)+window.innerHeight,a=document.documentElement.offsetHeight*r,!(n>=a)||t.isBreedDogsAction){e.next=6;break}return e.next=6,t.getMoreBreedRandomDogsList(t.$route.params.breed);case 6:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getBreedRandomDogsList(t.$route.params.breed);case 2:case"end":return e.stop()}}),e)})))()}};u.render=a;e["default"]=u},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){throw a(t),i}}},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},ab13:function(t,e,r){var n=r("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},c83b:function(t,e,r){"use strict";e["a"]={get:function(t){return JSON.parse(localStorage.getItem(t)||"false")},set:function(t,e){localStorage.setItem(t,JSON.stringify(e))},remove:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}}},caad:function(t,e,r){"use strict";var n=r("23e7"),a=r("4d64").includes,o=r("44d2"),i=r("ae40"),c=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("e260"),i=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),d=o.values;for(var f in a){var l=n[f],v=l&&l.prototype;if(v){if(v[s]!==d)try{i(v,s,d)}catch(g){v[s]=d}if(v[u]||i(v,u,f),a[f])for(var b in o)if(v[b]!==o[b])try{i(v,b,o[b])}catch(g){v[b]=o[b]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var f={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new d(t):void 0===t?d():d(t);return""===t&&(f[e]=!0),e};u(l,d);var v=l.prototype=d.prototype;v.constructor=l;var b=v.toString,g="Symbol(test)"==String(d("test")),p=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(i(f,t))return"";var r=g?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:l})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),d=r("b622"),f=r("1dde"),l=r("ae40"),v=f("slice"),b=l("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),p=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!v||!b},{slice:function(t,e){var r,n,d,f=s(this),l=c(f.length),v=i(t,l),b=i(void 0===e?l:e,l);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,v,b);for(n=new(void 0===r?Array:r)(h(b-v,0)),d=0;v<b;v++,d++)v in f&&u(n,d,f[v]);return n.length=d,n}})}}]);
//# sourceMappingURL=Breed.023e3b6f.js.map