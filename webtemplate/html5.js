<<<<<<< HEAD
<<<<<<< HEAD
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 downloaded from http://www.humber.ca/sites/all/themes/adaptivetheme/at_core/scripts/html5.js?nztwcq 2016-08-17
*/
(function(j,f){function s(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function o(){var a=d.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=t[a[u]];b||(b={},p++,a[u]=p,t[p]=b);return b}function v(a,b,c){b||(b=f);if(e)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():y.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);
return b.canHaveChildren&&!z.test(a)?c.frag.appendChild(b):b}function A(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!d.shivMethods?b.createElem(c):v(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(d,b.frag)}
function w(a){a||(a=f);var b=n(a);if(d.shivCSS&&!q&&!b.hasCSS)b.hasCSS=!!s(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}");e||A(a,b);return a}function B(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(l+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function x(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);c=null}
var c,f,d=n(a),e=a.namespaces,j=a.parentWindow;if(!C||a.printShived)return a;"undefined"==typeof e[l]&&e.add(l);j.attachEvent("onbeforeprint",function(){b();var g,i,d;d=a.styleSheets;for(var e=[],h=d.length,k=Array(h);h--;)k[h]=d[h];for(;d=k.pop();)if(!d.disabled&&D.test(d.media)){try{g=d.imports,i=g.length}catch(j){i=0}for(h=0;h<i;h++)k.push(g[h]);try{e.push(d.cssText)}catch(n){}}g=e.reverse().join("").split("{");i=g.length;h=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(k=
"$1"+l+"\\:$2";i--;)e=g[i]=g[i].split("}"),e[e.length-1]=e[e.length-1].replace(h,k),g[i]=e.join("}");e=g.join("{");i=a.getElementsByTagName("*");h=i.length;k=RegExp("^(?:"+o().join("|")+")$","i");for(d=[];h--;)g=i[h],k.test(g.nodeName)&&d.push(g.applyElement(B(g)));f=d;c=s(a,e)});j.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var r=j.html5||{},z=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q,u="_html5shiv",p=0,t={},e;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";q="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}e=b}catch(d){e=q=!0}})();var d={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
version:"3.6.2pre",shivCSS:!1!==r.shivCSS,supportsUnknownElements:e,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:w,createElement:v,createDocumentFragment:function(a,b){a||(a=f);if(e)return a.createDocumentFragment();for(var b=b||n(a),c=b.frag.cloneNode(),d=0,j=o(),l=j.length;d<l;d++)c.createElement(j[d]);return c}};j.html5=d;w(f);var D=/^$|\b(?:all|print)\b/,l="html5shiv",C=!e&&function(){var a=f.documentElement;return!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||
"undefined"==typeof a.applyElement||"undefined"==typeof a.removeNode||"undefined"==typeof j.attachEvent)}();d.type+=" print";d.shivPrint=x;x(f)})(this,document);
=======
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 downloaded from http://www.humber.ca/sites/all/themes/adaptivetheme/at_core/scripts/html5.js?nztwcq 2016-08-17
*/
(function(j,f){function s(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function o(){var a=d.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=t[a[u]];b||(b={},p++,a[u]=p,t[p]=b);return b}function v(a,b,c){b||(b=f);if(e)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():y.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);
return b.canHaveChildren&&!z.test(a)?c.frag.appendChild(b):b}function A(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!d.shivMethods?b.createElem(c):v(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(d,b.frag)}
function w(a){a||(a=f);var b=n(a);if(d.shivCSS&&!q&&!b.hasCSS)b.hasCSS=!!s(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}");e||A(a,b);return a}function B(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(l+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function x(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);c=null}
var c,f,d=n(a),e=a.namespaces,j=a.parentWindow;if(!C||a.printShived)return a;"undefined"==typeof e[l]&&e.add(l);j.attachEvent("onbeforeprint",function(){b();var g,i,d;d=a.styleSheets;for(var e=[],h=d.length,k=Array(h);h--;)k[h]=d[h];for(;d=k.pop();)if(!d.disabled&&D.test(d.media)){try{g=d.imports,i=g.length}catch(j){i=0}for(h=0;h<i;h++)k.push(g[h]);try{e.push(d.cssText)}catch(n){}}g=e.reverse().join("").split("{");i=g.length;h=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(k=
"$1"+l+"\\:$2";i--;)e=g[i]=g[i].split("}"),e[e.length-1]=e[e.length-1].replace(h,k),g[i]=e.join("}");e=g.join("{");i=a.getElementsByTagName("*");h=i.length;k=RegExp("^(?:"+o().join("|")+")$","i");for(d=[];h--;)g=i[h],k.test(g.nodeName)&&d.push(g.applyElement(B(g)));f=d;c=s(a,e)});j.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var r=j.html5||{},z=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q,u="_html5shiv",p=0,t={},e;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";q="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}e=b}catch(d){e=q=!0}})();var d={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
version:"3.6.2pre",shivCSS:!1!==r.shivCSS,supportsUnknownElements:e,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:w,createElement:v,createDocumentFragment:function(a,b){a||(a=f);if(e)return a.createDocumentFragment();for(var b=b||n(a),c=b.frag.cloneNode(),d=0,j=o(),l=j.length;d<l;d++)c.createElement(j[d]);return c}};j.html5=d;w(f);var D=/^$|\b(?:all|print)\b/,l="html5shiv",C=!e&&function(){var a=f.documentElement;return!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||
"undefined"==typeof a.applyElement||"undefined"==typeof a.removeNode||"undefined"==typeof j.attachEvent)}();d.type+=" print";d.shivPrint=x;x(f)})(this,document);
>>>>>>> 8a103ce10295b93906701569b8b3f837fb3e2209
=======
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 downloaded from http://www.humber.ca/sites/all/themes/adaptivetheme/at_core/scripts/html5.js?nztwcq 2016-08-17
*/
(function(j,f){function s(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function o(){var a=d.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=t[a[u]];b||(b={},p++,a[u]=p,t[p]=b);return b}function v(a,b,c){b||(b=f);if(e)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():y.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);
return b.canHaveChildren&&!z.test(a)?c.frag.appendChild(b):b}function A(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!d.shivMethods?b.createElem(c):v(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(d,b.frag)}
function w(a){a||(a=f);var b=n(a);if(d.shivCSS&&!q&&!b.hasCSS)b.hasCSS=!!s(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}");e||A(a,b);return a}function B(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(l+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function x(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);c=null}
var c,f,d=n(a),e=a.namespaces,j=a.parentWindow;if(!C||a.printShived)return a;"undefined"==typeof e[l]&&e.add(l);j.attachEvent("onbeforeprint",function(){b();var g,i,d;d=a.styleSheets;for(var e=[],h=d.length,k=Array(h);h--;)k[h]=d[h];for(;d=k.pop();)if(!d.disabled&&D.test(d.media)){try{g=d.imports,i=g.length}catch(j){i=0}for(h=0;h<i;h++)k.push(g[h]);try{e.push(d.cssText)}catch(n){}}g=e.reverse().join("").split("{");i=g.length;h=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(k=
"$1"+l+"\\:$2";i--;)e=g[i]=g[i].split("}"),e[e.length-1]=e[e.length-1].replace(h,k),g[i]=e.join("}");e=g.join("{");i=a.getElementsByTagName("*");h=i.length;k=RegExp("^(?:"+o().join("|")+")$","i");for(d=[];h--;)g=i[h],k.test(g.nodeName)&&d.push(g.applyElement(B(g)));f=d;c=s(a,e)});j.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var r=j.html5||{},z=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q,u="_html5shiv",p=0,t={},e;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";q="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}e=b}catch(d){e=q=!0}})();var d={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
version:"3.6.2pre",shivCSS:!1!==r.shivCSS,supportsUnknownElements:e,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:w,createElement:v,createDocumentFragment:function(a,b){a||(a=f);if(e)return a.createDocumentFragment();for(var b=b||n(a),c=b.frag.cloneNode(),d=0,j=o(),l=j.length;d<l;d++)c.createElement(j[d]);return c}};j.html5=d;w(f);var D=/^$|\b(?:all|print)\b/,l="html5shiv",C=!e&&function(){var a=f.documentElement;return!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||
"undefined"==typeof a.applyElement||"undefined"==typeof a.removeNode||"undefined"==typeof j.attachEvent)}();d.type+=" print";d.shivPrint=x;x(f)})(this,document);
>>>>>>> origin/master
