!function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],p=0,s=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(d&&d(t);s.length;)s.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;c.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var r=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};var o=function(e){switch(e){case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return"right"}};String.prototype.firstLetterCaps=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var c=function(){for(var e=document.querySelector("table"),t=0;t<e.children.length;t++)for(var n=e.children[t],r=0;r<n.children.length;r++){var c=n.children[r],a=c.id,i=+a.split(",")[0],l=+a.split(",")[1],u={};for(var d in u.Left=document.getElementById("".concat(i-1,",").concat(l)),u.Right=document.getElementById("".concat(i+1,",").concat(l)),u.Top=document.getElementById("".concat(i,",").concat(l+1)),u.Bottom=document.getElementById("".concat(i,",").concat(l-1)),u)if(u[d]){var p=o(d.toLowerCase());"none"===u[d].style["border".concat(p.firstLetterCaps())]&&(c.style["border".concat(d)]="none")}}};var a=function(e,t,n,r,o){var c=document.getElementById("".concat(e,",").concat(t)),a=o[o.length-1],i=document.getElementById("".concat(a.x,",").concat(a.y)),l=document.createElement("div");l.classList.add("finish-icon"),i.style.position="relative",i.appendChild(l),l.style.backgroundImage="url(".concat(r,")"),c.style.backgroundImage="url(".concat(n,")")},i=["right","left","bottom","top","right","bottom","left","right"];var l={width:r(10,40),height:r(10,20),exitIcon:"img/exit-icon.png"},u={playerX:1,playerY:1,playerIcon:"img/player-icon.png"},d=u.playerX,p=u.playerY,s=[];!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;try{var n={},o=i[r(0,4)],c="";switch(o){case"right":if(d===l.width)break;d++,c="right";break;case"top":if(p===l.height)return;p++,c="top";break;case"left":if(1===d)break;d--,c="left";break;case"bottom":if(1===p)break;p--,c="bottom"}return n={x:d,y:p,border:c},s.push(n),e(t+1)}catch(e){return'There was an exception: "'.concat(e,"\" when tryin' to make iteration no. ").concat(t)}}();var y=s;var f=function(e,t){e.style.backgroundImage="none";var n=t.playerIcon,r="".concat(t.playerX,",").concat(t.playerY);document.getElementById(r).style.backgroundImage="url(".concat(n,")")};document.addEventListener("click",(function(e){var t=document.querySelector(".bg-popup"),n=document.querySelector(".msg-block");e.target.classList.contains("play-btn")&&(n.style.display="none",t.style.display="none",location.reload())}));var h=function(){var e=document.querySelector(".bg-popup"),t=document.querySelector(".msg-block");e.style.display="block",t.style.display="block"};var b=function(e){document.addEventListener("keydown",(function(e){if("Arrow"===e.key.slice(0,5)){var t=e.key.slice(5).toLowerCase(),n=u.playerX,r=u.playerY,o="".concat(n,",").concat(r),c=document.getElementById("".concat(o));switch(t){case"up":"none"===c.style.borderTop&&r<l.height&&(u.playerY++,f(c,u));break;case"down":"none"===c.style.borderBottom&&r>1&&(u.playerY--,f(c,u));break;case"left":"none"===c.style.borderLeft&&n>1&&(u.playerX--,f(c,u));break;case"right":"none"===c.style.borderRight&&n<l.width&&(u.playerX++,f(c,u))}}})),document.addEventListener("keyup",(function(){var t="".concat(u.playerX,",").concat(u.playerY),n=e[e.length-1];t==="".concat(n.x,",").concat(n.y)&&h()}))};var m=function(e){for(var t=e,n=document.createElement("table"),d=function(e){for(var t=document.createElement("tr"),c=function(n){var c=document.createElement("td");c.setAttribute("id","".concat(n,",").concat(e));var a=y.find((function(t){if(t.y===e&&t.x===n)return t}));if(a){var l=o(a.border);c.setAttribute("style","border-".concat(l,":none;}"))}else{var u=i[r(0,7)];c.setAttribute("style","border-".concat(u,":none;"))}t.appendChild(c)},a=1;a<=l.width;a++)c(a);n.appendChild(t)},p=l.height;p>0;p--)d(p);t.appendChild(n),b(y),a(u.playerX,u.playerY,u.playerIcon,l.exitIcon,y),c()};n(308);m(document.querySelector(".maze"))}});