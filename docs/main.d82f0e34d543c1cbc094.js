(()=>{"use strict";var e={994:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"h1{\n    color:blueviolet;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=a[u]||0,d="".concat(u," ").concat(s);a[u]=s+1;var f=n(d),v={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(t[f].references++,t[f].updater(v)):t.push({identifier:d,updater:o(v,r),references:1}),i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),u=0;u<a.length;u++){var s=n(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(r,{L:()=>j});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var n,r,o;return n=t,o=[{key:"fromJson",value:function(e){var n=e.id,r=e.tarea,o=e.completado,a=e.creado,i=new t(r);return i.id=n,i.completado=o,i.creado=a,i}}],(r=null)&&e(n.prototype,r),o&&e(n,o),t}();function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.todos=[],this.cargarLocalStorage()}var n,r,a;return n=e,(r=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,n=o(this.todos);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e==e){r.completado=!r.completado,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(t.fromJson)}}])&&i(n.prototype,r),a&&i(n,a),e}(),l=n(379),u=n.n(l),s=n(795),d=n.n(s),f=n(569),v=n.n(f),m=n(565),p=n.n(m),h=n(216),y=n.n(h),g=n(589),b=n.n(g),S=n(994),w={};w.styleTagTransform=b(),w.setAttributes=p(),w.insert=v().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=y();u()(S.Z,w);S.Z&&S.Z.locals&&S.Z.locals;function C(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=document.querySelector(".todo-list"),E=document.querySelector(".new-todo"),T=document.querySelector(".clear-completed"),k=document.querySelector(".filters"),x=document.querySelectorAll(".filtro"),I=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n\t    <div class="view">\n\t        <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n\t        <label>").concat(e.tarea,'</label>\n\t        <button class="destroy"></button>\n\t    </div>\n\t    <input class="edit" value="Create a TodoMVC template">\n\t</li>\n    '),n=document.createElement("div");return n.innerHTML=t,A.append(n.firstElementChild),n.firstElementChild};E.addEventListener("keyup",(function(e){if(13===e.keyCode&&E.value.length>0){var n=new t(E.value);j.nuevoTodo(n),I(n),E.value=""}})),A.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(j.marcarCompletado(r),n.classList.toggle("completed")):t.includes("button")&&(j.eliminarTodo(r),A.removeChild(n))})),T.addEventListener("click",(function(){j.eliminarCompletados();for(var e=A.children.length-1;e>=0;e--){var t=A.children[e];t.classList.contains("completed")&&A.removeChild(t)}})),k.addEventListener("click",(function(e){var t=e.target.text;if(t){x.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=C(A.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var j=new c;j.todos.forEach(I)})()})();