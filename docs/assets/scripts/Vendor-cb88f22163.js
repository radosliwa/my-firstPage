!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}({8:function(t,e,n){"use strict";n(9),window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.expand=10,lazySizesConfig.expFactor=1.2},9:function(t,e){!function(e,n){var i=function(t,e){"use strict";if(!e.getElementsByClassName)return;var n,i,a=e.documentElement,r=t.Date,o=t.HTMLPictureElement,s="addEventListener",l="getAttribute",c=t[s],u=t.setTimeout,d=t.requestAnimationFrame||u,f=t.requestIdleCallback,m=/^picture$/i,z=["load","error","lazyincluded","_lazyloaded"],g={},y=Array.prototype.forEach,v=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t[l]("class")||"")&&g[e]},p=function(t,e){v(t,e)||t.setAttribute("class",(t[l]("class")||"").trim()+" "+e)},h=function(t,e){var n;(n=v(t,e))&&t.setAttribute("class",(t[l]("class")||"").replace(n," "))},C=function(t,e,n){var i=n?s:"removeEventListener";n&&C(t,e),z.forEach(function(n){t[i](n,e)})},b=function(t,i,a,r,o){var s=e.createEvent("CustomEvent");return a||(a={}),a.instance=n,s.initCustomEvent(i,!r,!o,a),t.dispatchEvent(s),s},A=function(e,n){var a;!o&&(a=t.picturefill||i.pf)?a({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},E=function(t,e){return(getComputedStyle(t,null)||{})[e]},w=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},x=function(){var t,n,i=[],a=[],r=i,o=function(){var e=r;for(r=i.length?a:i,t=!0,n=!1;e.length;)e.shift()();t=!1},s=function(i,a){t&&!a?i.apply(this,arguments):(r.push(i),n||(n=!0,(e.hidden?u:d)(o)))};return s._lsFlush=o,s}(),M=function(t,e){return e?function(){x(t)}:function(){var e=this,n=arguments;x(function(){t.apply(e,n)})}},_=function(t){var e,n,i=function(){e=null,t()},a=function(){var t=r.now()-n;t<99?u(a,99-t):(f||i)(i)};return function(){n=r.now(),e||(e=u(a,99))}};!function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,u(function(){i.init&&W()})}();var N=function(){var o,d,z,g,w,N,W,T,F,B,O,L,P,R,k=/^img$/i,H=/^iframe$/i,$="onscroll"in t&&!/glebot/.test(navigator.userAgent),D=0,j=0,I=-1,q=function(t){j--,t&&t.target&&C(t.target,q),(!t||j<0||!t.target)&&(j=0)},G=function(t,n){var i,r=t,o="hidden"==E(e.body,"visibility")||"hidden"!=E(t,"visibility");for(T-=n,O+=n,F-=n,B+=n;o&&(r=r.offsetParent)&&r!=e.body&&r!=a;)(o=(E(r,"opacity")||1)>0)&&"visible"!=E(r,"overflow")&&(i=r.getBoundingClientRect(),o=B>i.left&&F<i.right&&O>i.top-1&&T<i.bottom+1);return o},J=function(){var t,r,s,c,u,f,m,z,y,v=n.elements;if((g=i.loadMode)&&j<8&&(t=v.length)){r=0,I++,null==P&&("expand"in i||(i.expand=a.clientHeight>500&&a.clientWidth>500?500:370),L=i.expand,P=L*i.expFactor),D<P&&j<1&&I>2&&g>2&&!e.hidden?(D=P,I=0):D=g>1&&I>1&&j<6?L:0;for(;r<t;r++)if(v[r]&&!v[r]._lazyRace)if($)if((z=v[r][l]("data-expand"))&&(f=1*z)||(f=D),y!==f&&(N=innerWidth+f*R,W=innerHeight+f,m=-1*f,y=f),s=v[r].getBoundingClientRect(),(O=s.bottom)>=m&&(T=s.top)<=W&&(B=s.right)>=m*R&&(F=s.left)<=N&&(O||B||F||T)&&(i.loadHidden||"hidden"!=E(v[r],"visibility"))&&(d&&j<3&&!z&&(g<3||I<4)||G(v[r],f))){if(Z(v[r]),u=!0,j>9)break}else!u&&d&&!c&&j<4&&I<4&&g>2&&(o[0]||i.preloadAfterLoad)&&(o[0]||!z&&(O||B||F||T||"auto"!=v[r][l](i.sizesAttr)))&&(c=o[0]||v[r]);else Z(v[r]);c&&!u&&Z(c)}},K=function(t){var e,n=0,a=i.ricTimeout,o=function(){e=!1,n=r.now(),t()},s=f&&i.ricTimeout?function(){f(o,{timeout:a}),a!==i.ricTimeout&&(a=i.ricTimeout)}:M(function(){u(o)},!0);return function(t){var i;(t=!0===t)&&(a=33),e||(e=!0,(i=125-(r.now()-n))<0&&(i=0),t||i<9&&f?s():u(s,i))}}(J),Q=function(t){p(t.target,i.loadedClass),h(t.target,i.loadingClass),C(t.target,V),b(t.target,"lazyloaded")},U=M(Q),V=function(t){U({target:t.target})},X=function(t){var e,n=t[l](i.srcsetAttr);(e=i.customMedia[t[l]("data-media")||t[l]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},Y=M(function(t,e,n,a,r){var o,s,c,d,f,g;(f=b(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?p(t,i.autosizesClass):t.setAttribute("sizes",a)),s=t[l](i.srcsetAttr),o=t[l](i.srcAttr),r&&(c=t.parentNode,d=c&&m.test(c.nodeName||"")),g=e.firesLoad||"src"in t&&(s||o||d),f={target:t},g&&(C(t,q,!0),clearTimeout(z),z=u(q,2500),p(t,i.loadingClass),C(t,V,!0)),d&&y.call(c.getElementsByTagName("source"),X),s?t.setAttribute("srcset",s):o&&!d&&(H.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}}(t,o):t.src=o),r&&(s||d)&&A(t,{src:o})),t._lazyRace&&delete t._lazyRace,h(t,i.lazyClass),x(function(){(!g||t.complete&&t.naturalWidth>1)&&(g?q(f):j--,Q(f))},!0)}),Z=function(t){var e,n=k.test(t.nodeName),a=n&&(t[l](i.sizesAttr)||t[l]("sizes")),r="auto"==a;(!r&&d||!n||!t[l]("src")&&!t.srcset||t.complete||v(t,i.errorClass)||!v(t,i.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&S.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,j++,Y(t,e,r,a,n))},tt=function(){if(!d)if(r.now()-w<999)u(tt,999);else{var t=_(function(){i.loadMode=3,K()});d=!0,i.loadMode=3,K(),c("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){w=r.now(),n.elements=e.getElementsByClassName(i.lazyClass),o=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),R=i.hFac,c("scroll",K,!0),c("resize",K,!0),t.MutationObserver?new MutationObserver(K).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a[s]("DOMNodeInserted",K,!0),a[s]("DOMAttrModified",K,!0),setInterval(K,999)),c("hashchange",K,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e[s](t,K,!0)}),/d$|^c/.test(e.readyState)?tt():(c("load",tt),e[s]("DOMContentLoaded",K),u(tt,2e4)),n.elements.length?(J(),x._lsFlush()):K()},checkElems:K,unveil:Z}}(),S=function(){var t,n=M(function(t,e,n,i){var a,r,o;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),m.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),r=0,o=a.length;r<o;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||A(t,n.detail)}),a=function(t,e,i){var a,r=t.parentNode;r&&(i=w(t,r,i),(a=b(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&n(t,r,a,i))},r=_(function(){var e,n=t.length;if(n)for(e=0;e<n;e++)a(t[e])});return{_:function(){t=e.getElementsByClassName(i.autosizesClass),c("resize",r)},checkElems:r,updateElem:a}}(),W=function(){W.i||(W.i=!0,S._(),N._())};return n={cfg:i,autoSizer:S,loader:N,init:W,uP:A,aC:p,rC:h,hC:v,fire:b,gW:w,rAF:x}}(e,e.document);e.lazySizes=i,"object"==typeof t&&t.exports&&(t.exports=i)}(window)}});