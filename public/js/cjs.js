!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./public/js",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(e){const t="gallery-one-preview",n="hero-tile_active";var l=document.querySelectorAll("["+t+"]"),o=document.querySelectorAll("[gallery-one-stage]");function r(e){var r=e.getAttribute("data-index"),c=e.getAttribute(t);!function(e,t){[].forEach.call(e,function(e,l){l==t&&e.classList.contains(n)||(l==t?e.classList.add(n):e.classList.contains(n)&&e.classList.remove(n))})}(l,r),[].forEach.call(o,function(e,t){t==r?e.classList.add(c):e.classList.contains(c)&&e.classList.remove(c)})}0!==l.length&&function(t){[].forEach.call(t,function(t,l){t.onclick=function(e){r(t)},t.classList.contains(n)?t.click():l==e&&t.click()})}(l)}(0),function(){const e="gallery-two-url";var t=document.querySelectorAll("[gallery-two-link]"),n=document.querySelectorAll("[gallery-two-popup]")[0],l=document.querySelectorAll("[gallery-two-popup-padd]")[0],o=document.querySelectorAll("[gallery-two-popup-content]")[0],r=document.querySelectorAll("[gallery-two-popup-close]")[0],c="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png";function i(){o.innerHTML="",n.style.display="none"}0!==t.length&&([].forEach.call(t,function(t,r){t.onclick=function(r){!function(t){var r="";let i=!1;var u=t.getAttribute(e),a=""!==u?u:c;r=(i=function(e){let t=e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!t&&t[1]}(a))?'<iframe id="content"  width="100%" height="100%" src="https://www.youtube.com/embed/'+i+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="content" width="100%"  height="100%" src="'+a+'"></img>',l.style.width="100%",l.style.height="100%",l.style.margin="0 auto",setTimeout(function(e){o.innerHTML=e,n.style.display="flex";var t=.5625*(e=document.getElementById("content")).clientWidth;e.style.height=t+"px"}(r),100)}(t)}}),r.onclick=function(e){i()},n.onclick=function(e){i()})}(),function(){const e="gallery-three-url";var t=document.querySelectorAll("[gallery-three-link]"),n=document.querySelectorAll("[gallery-three-popup]")[0],l=document.querySelectorAll("[gallery-three-popup-padd]")[0],o=document.querySelectorAll("[gallery-three-popup-content]")[0],r=document.querySelectorAll("[gallery-three-popup-close]")[0],c="https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png";function i(){o.innerHTML="",n.style.display="none"}0!==t.length&&([].forEach.call(t,function(t,r){t.onclick=function(r){!function(t){var r="";let i=!1;var u=t.getAttribute(e),a=""!==u?u:c;r=(i=function(e){let t=e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!t&&t[1]}(a))?'<iframe id="contentGalleryThreePopup"  width="100%" height="100%" src="https://www.youtube.com/embed/'+i+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img id="contentGalleryThreePopup" width="100%"  height="100%" src="'+a+'"></img>',l.style.width="100%",l.style.height="100%",l.style.margin="0 auto",setTimeout(function(e){o.innerHTML=e,n.style.display="flex";var t=.5625*(e=document.getElementById("contentGalleryThreePopup")).clientWidth;e.style.height=t+"px"}(r),500)}(t)}}),r.onclick=function(e){i()},n.onclick=function(e){i()})}()}]);