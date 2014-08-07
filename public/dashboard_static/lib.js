
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*!
 * Davis - http://davisjs.com - JavaScript Routing - 0.9.8
 * Copyright (C) 2011 Oliver Nightingale
 * MIT Licensed
 */Davis=function(a){var b=new Davis.App;return a&&a.call(b),Davis.$(function(){b.start()}),b},window.jQuery?Davis.$=jQuery:Davis.$=null,Davis.supported=function(){return typeof window.history.pushState=="function"},Davis.noop=function(){},Davis.extend=function(a){a(Davis)},Davis.version="0.9.8",Davis.utils=function(){if(Array.prototype.every)var a=function(a,b){return a.every(b,arguments[2])};else var a=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=arguments[2];for(var f=0;f<d;f++)if(f in c&&!b.call(e,c[f],f,c))return!1;return!0};if(Array.prototype.forEach)var b=function(a,b){return a.forEach(b,arguments[2])};else var b=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=arguments[2];for(var f=0;f<d;f++)f in c&&b.call(e,c[f],f,c)};if(Array.prototype.filter)var c=function(a,b){return a.filter(b,arguments[2])};else var c=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=[],f=arguments[2];for(var g=0;g<d;g++)if(g in c){var h=c[g];b.call(f,h,g,c)&&e.push(h)}return e};if(Array.prototype.map)var d=function(a,b){return a.map(b,arguments[2])};else var d=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=new Array(d),f=arguments[2];for(var g=0;g<d;g++)g in c&&(e[g]=b.call(f,c[g],g,c));return e};var e=function(a,b){return Array.prototype.slice.call(a,b||0)};return{every:a,forEach:b,filter:c,toArray:e,map:d}}(),Davis.listener=function(){var a={A:function(a){return a.host!==window.location.host||a.protocol!==window.location.protocol},FORM:function(a){var b=document.createElement("a");return b.href=a.action,this.A(b)}},b=function(b){return a[b.nodeName.toUpperCase()]?a[b.nodeName.toUpperCase()](b):!0},c=function(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey},d=function(a){return function(d){if(c(d))return!0;if(b(this))return!0;var e=new Davis.Request(a.call(Davis.$(this)));return Davis.location.assign(e),d.stopPropagation(),d.preventDefault(),!1}},e=d(function(){var a=this;return{method:"get",fullPath:this.prop("href"),title:this.attr("title"),delegateToServer:function(){window.location=a.prop("href")}}}),f=d(function(){var a=this;return{method:this.attr("method"),fullPath:this.serialize()?[this.prop("action"),this.serialize()].join("?"):this.prop("action"),title:this.attr("title"),delegateToServer:function(){a.submit()}}});this.listen=function(){Davis.$(document).delegate(this.settings.formSelector,"submit",f),Davis.$(document).delegate(this.settings.linkSelector,"click",e)},this.unlisten=function(){Davis.$(document).undelegate(this.settings.linkSelector,"click",e),Davis.$(document).undelegate(this.settings.formSelector,"submit",f)}},Davis.event=function(){var a={};this.bind=function(b,c){return(a[b]=a[b]||[]).push(c),this},this.trigger=function(b){var c=Davis.utils.toArray(arguments,1),d=a[b];if(!d)return this;for(var e=0,f=d.length;e<f;++e)d[e].apply(this,c);return this}},Davis.logger=function(){function a(){return"["+Date()+"]"}function b(b){var c=Davis.utils.toArray(b);return c.unshift(a()),c.join(" ")}var c=function(a){return function(){window.console&&console[a](b(arguments))}},d=c("error"),e=c("info"),f=c("warn");this.logger={error:d,info:e,warn:f}},Davis.Route=function(){var a=/:([\w\d]+)/g,b="([^/]+)",c=/\*([\w\d]+)/g,d="(.*)",e=/[:|\*]([\w\d]+)/g,f=function(f,g,h){var i=function(){if(g instanceof RegExp)return g;var e=g.replace(a,b).replace(c,d);return g.lastIndex=0,new RegExp("^"+e+"$","gi")},j=function(){return f instanceof RegExp?f:new RegExp("^"+f+"$","i")},k=function(){var a=[],b;while(b=e.exec(g))a.push(b[1]);return a};this.paramNames=k(),this.path=i(),this.method=j(),typeof h=="function"?this.handlers=[h]:this.handlers=h};return f.prototype.match=function(a,b){return this.reset(),this.method.test(a)&&this.path.test(b)},f.prototype.reset=function(){this.method.lastIndex=0,this.path.lastIndex=0},f.prototype.run=function(a){this.reset();var b=this.path.exec(a.path);if(b){b.shift();for(var c=0;c<b.length;c++)a.params[this.paramNames[c]]=b[c]}var d=Davis.utils.map(this.handlers,function(a,b){return function(c){return a.call(c,c,d[b+1])}});return d[0](a)},f.prototype.toString=function(){return[this.method,this.path].join(" ")},f}(),Davis.router=function(){this.route=function(b,d){var e=function(d){var e=Davis.utils.toArray(arguments,1),f=c.join(""),g,h;return typeof d=="string"?g=f+d:g=d,h=new Davis.Route(b,g,e),a.push(h),h};return arguments.length==1?e:e.apply(this,Davis.utils.toArray(arguments,1))},this.get=this.route("get"),this.post=this.route("post"),this.put=this.route("put"),this.del=this.route("delete"),this.state=this.route("state"),this.scope=function(a,b){c.push(a);if(arguments.length==1)return;b.call(this,this),c.pop()},this.trans=function(a,b){if(b)var c=[a,decodeURIComponent(Davis.$.param(b))].join("?");else var c=a;var d=new Davis.Request({method:"state",fullPath:c,title:""});Davis.location.assign(d)},this.filter=function(a){return function(){var d=/.+/;if(arguments.length==1)var e=/.+/,f=arguments[0];else if(arguments.length==2)var e=c.join("")+arguments[0],f=arguments[1];var g=new Davis.Route(d,e,f);return b[a].push(g),g}},this.lookupFilter=function(a){return function(c,d){return Davis.utils.filter(b[a],function(a){return a.match(c,d)})}},this.before=this.filter("before"),this.after=this.filter("after"),this.lookupBeforeFilter=this.lookupFilter("before"),this.lookupAfterFilter=this.lookupFilter("after");var a=[],b={before:[],after:[]},c=[];this.lookupRoute=function(b,c){return Davis.utils.filter(a,function(a){return a.match(b,c)})[0]}},Davis.history=function(){function c(b){a.push(b)}function d(a){window.addEventListener("popstate",a,!0)}function e(a){return function(c){c.state&&c.state._davis?a(new Davis.Request(c.state._davis)):b&&a(Davis.Request.forPageLoad()),b=!0}}function f(a){return{_davis:a}}function g(a){c(a),d(e(a))}function h(c){return function(d,e){b=!0,history[c](f(d.toJSON()),d.title,d.location());if(e&&e.silent)return;Davis.utils.forEach(a,function(a){a(d)})}}function k(){return window.location.pathname+(window.location.search?window.location.search:"")}var a=[],b=!1,i=h("pushState"),j=h("replaceState");return{onChange:g,current:k,assign:i,replace:j}}(),Davis.location=function(){function b(b){a=b}function c(){return a.current()}function d(b){return function(c,d){typeof c=="string"&&(c=new Davis.Request(c)),a[b](c,d)}}function g(b){a.onChange(b)}var a=Davis.history,e=d("assign"),f=d("replace");return{setLocationDelegate:b,current:c,assign:e,replace:f,onChange:g}}(),Davis.Request=function(){var a=function(b,c){typeof b=="object"&&(c=b,b=c.fullPath,delete c.fullPath);var d=Davis.$.extend({},{title:"",fullPath:b,method:"get",timestamp:+(new Date)},c);d.fullPath=d.fullPath.replace(/\+/g,"%20");var e=this;this.raw=d,this.params={},this.title=d.title,this.queryString=d.fullPath.split("?")[1],this.timestamp=d.timestamp,this._staleCallback=function(){},this.queryString&&Davis.utils.forEach(this.queryString.split("&"),function(a){var b=a.split("=")[0],c=a.split("=")[1],d=/^(\w+)\[(\w+)?\](\[\])?/,f;if(f=d.exec(b)){var g=f[1],b=f[2],h=!!f[3],i=e.params[g]||{};h?(i[b]=i[b]||[],i[b].push(decodeURIComponent(c)),e.params[g]=i):!b&&!h?(i=e.params[g]||[],i.push(decodeURIComponent(c)),e.params[g]=i):(i[b]=decodeURIComponent(c),e.params[g]=i)}else e.params[b]=decodeURIComponent(c)}),d.fullPath=d.fullPath.replace(/^https?:\/\/.+?\//,"/"),this.method=(this.params._method||d.method).toLowerCase(),this.path=d.fullPath.replace(/\?(.|[\r\n])+$/,"").replace(/^https?:\/\/[^\/]+/,""),this.fullPath=d.fullPath,this.delegateToServer=d.delegateToServer||Davis.noop,this.isForPageLoad=d.forPageLoad||!1,a.prev&&a.prev.makeStale(this),a.prev=this};return a.prototype.redirect=function(b,c){Davis.location.replace(new a({method:"get",fullPath:b,title:this.title}),c)},a.prototype.whenStale=function(a){this._staleCallback=a},a.prototype.makeStale=function(a){this._staleCallback.call(a,a)},a.prototype.location=function(){return this.method==="get"?this.fullPath:""},a.prototype.toString=function(){return[this.method.toUpperCase(),this.path].join(" ")},a.prototype.toJSON=function(){return{title:this.raw.title,fullPath:this.raw.fullPath,method:this.raw.method,timestamp:this.raw.timestamp}},a.forPageLoad=function(){return new this({method:"get",fullPath:Davis.location.current(),title:document.title,forPageLoad:!0})},a.prev=null,a}(),Davis.App=function(){function a(){this.running=!1,this.boundToInternalEvents=!1,this.use(Davis.listener),this.use(Davis.event),this.use(Davis.router),this.use(Davis.logger)}return a.prototype.configure=function(a){a.call(this.settings,this.settings)},a.prototype.use=function(a){a.apply(this,Davis.utils.toArray(arguments,1))},a.prototype.helpers=function(a){for(property in a)a.hasOwnProperty(property)&&(Davis.Request.prototype[property]=a[property])},a.prototype.settings={linkSelector:"a",formSelector:"form",throwErrors:!0,handleRouteNotFound:!1,generateRequestOnPageLoad:!1},a.prototype.start=function(){var a=this;if(this.running)return;if(!Davis.supported()){this.trigger("unsupported");return}var b=function(a){return function(b){var c=b.run(a,a);return typeof c=="undefined"||c}},c=function(c){return Davis.utils.every(a.lookupBeforeFilter(c.method,c.path),b(c))},d=function(d){if(c(d)){a.trigger("lookupRoute",d);var e=a.lookupRoute(d.method,d.path);if(e){a.trigger("runRoute",d,e);try{e.run(d),a.trigger("routeComplete",d,e)}catch(f){a.trigger("routeError",d,e,f)}Davis.utils.every(a.lookupAfterFilter(d.method,d.path),b(d))}else a.trigger("routeNotFound",d)}else a.trigger("requestHalted",d)},e=function(){a.bind("runRoute",function(b){a.logger.info("runRoute: "+b.toString())}).bind("routeNotFound",function(b){!a.settings.handleRouteNotFound&&!b.isForPageLoad&&(a.stop(),b.delegateToServer()),a.logger.warn("routeNotFound: "+b.toString())}).bind("start",function(){a.logger.info("application started")}).bind("stop",function(){a.logger.info("application stopped")}).bind("routeError",function(b,c,d){if(a.settings.throwErrors)throw d;a.logger.error(d.message,d.stack)}),Davis.location.onChange(function(a){d(a)}),a.boundToInternalEvents=!0};this.boundToInternalEvents||e(),this.listen(),this.trigger("start"),this.running=!0,this.settings.generateRequestOnPageLoad&&d(Davis.Request.forPageLoad())},a.prototype.stop=function(){this.unlisten(),this.trigger("stop"),this.running=!1},a}();// Memory Leaks patch from http://explorercanvas.googlecode.com/svn/trunk/ 
//  svn : r73
// ------------------------------------------------------------------
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Known Issues:
//
// * Patterns only support repeat.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Clipping paths are not implemented.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Non uniform scaling does not correctly scale strokes.
// * Optimize. There is always room for speed improvements.

// Only add this code if we do not already have a canvas implementation
if (!document.createElement('canvas').getContext) {

(function() {

  // alias some functions to make (compiled) code shorter
  var m = Math;
  var mr = m.round;
  var ms = m.sin;
  var mc = m.cos;
  var abs = m.abs;
  var sqrt = m.sqrt;

  // this is used for sub pixel precision
  var Z = 10;
  var Z2 = Z / 2;

  var IE_VERSION = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

  /**
   * This funtion is assigned to the <canvas> elements as element.getContext().
   * @this {HTMLElement}
   * @return {CanvasRenderingContext2D_}
   */
  function getContext() {
    return this.context_ ||
        (this.context_ = new CanvasRenderingContext2D_(this));
  }

  var slice = Array.prototype.slice;

  /**
   * Binds a function to an object. The returned function will always use the
   * passed in {@code obj} as {@code this}.
   *
   * Example:
   *
   *   g = bind(f, obj, a, b)
   *   g(c, d) // will do f.call(obj, a, b, c, d)
   *
   * @param {Function} f The function to bind the object to
   * @param {Object} obj The object that should act as this when the function
   *     is called
   * @param {*} var_args Rest arguments that will be used as the initial
   *     arguments when the function is called
   * @return {Function} A new function that has bound this
   */
  function bind(f, obj, var_args) {
    var a = slice.call(arguments, 2);
    return function() {
      return f.apply(obj, a.concat(slice.call(arguments)));
    };
  }

  function encodeHtmlAttribute(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  function addNamespace(doc, prefix, urn) {
    if (!doc.namespaces[prefix]) {
      doc.namespaces.add(prefix, urn, '#default#VML');
    }
  }

  function addNamespacesAndStylesheet(doc) {
    addNamespace(doc, 'g_vml_', 'urn:schemas-microsoft-com:vml');
    addNamespace(doc, 'g_o_', 'urn:schemas-microsoft-com:office:office');

    // Setup default CSS.  Only add one style sheet per document
    if (!doc.styleSheets['ex_canvas_']) {
      var ss = doc.createStyleSheet();
      ss.owningElement.id = 'ex_canvas_';
      ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
          // default size is 300x150 in Gecko and Opera
          'text-align:left;width:300px;height:150px}';
    }
  }

  // Add namespaces and stylesheet at startup.
  addNamespacesAndStylesheet(document);

  var G_vmlCanvasManager_ = {
    init: function(opt_doc) {
      var doc = opt_doc || document;
      // Create a dummy element so that IE will allow canvas elements to be
      // recognized.
      doc.createElement('canvas');
      doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
    },

    init_: function(doc) {
      // find all canvas elements
      var els = doc.getElementsByTagName('canvas');
      for (var i = 0; i < els.length; i++) {
        this.initElement(els[i]);
      }
    },

    /**
     * Public initializes a canvas element so that it can be used as canvas
     * element from now on. This is called automatically before the page is
     * loaded but if you are creating elements using createElement you need to
     * make sure this is called on the element.
     * @param {HTMLElement} el The canvas element to initialize.
     * @return {HTMLElement} the element that was created.
     */
    initElement: function(el) {
      if (!el.getContext) {
        el.getContext = getContext;

        // Add namespaces and stylesheet to document of the element.
        addNamespacesAndStylesheet(el.ownerDocument);

        // Remove fallback content. There is no way to hide text nodes so we
        // just remove all childNodes. We could hide all elements and remove
        // text nodes but who really cares about the fallback content.
        el.innerHTML = '';

        // do not use inline function because that will leak memory
        el.attachEvent('onpropertychange', onPropertyChange);
        el.attachEvent('onresize', onResize);

        var attrs = el.attributes;
        if (attrs.width && attrs.width.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setWidth_(attrs.width.nodeValue);
          el.style.width = attrs.width.nodeValue + 'px';
        } else {
          el.width = el.clientWidth;
        }
        if (attrs.height && attrs.height.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setHeight_(attrs.height.nodeValue);
          el.style.height = attrs.height.nodeValue + 'px';
        } else {
          el.height = el.clientHeight;
        }
        //el.getContext().setCoordsize_()
      }
      return el;
    },

    // Memory Leaks patch : see http://code.google.com/p/explorercanvas/issues/detail?id=82
    uninitElement: function(el){
      if (el.getContext) {
        var ctx = el.getContext();
        delete ctx.element_;
        delete ctx.canvas;
        el.innerHTML = "";
        //el.outerHTML = "";
        el.context_ = null;
        el.getContext = null;
        el.detachEvent("onpropertychange", onPropertyChange);
        el.detachEvent("onresize", onResize);
      }
    }
  };

  function onPropertyChange(e) {
    var el = e.srcElement;

    switch (e.propertyName) {
      case 'width':
        el.getContext().clearRect();
        el.style.width = el.attributes.width.nodeValue + 'px';
        // In IE8 this does not trigger onresize.
        el.firstChild.style.width =  el.clientWidth + 'px';
        break;
      case 'height':
        el.getContext().clearRect();
        el.style.height = el.attributes.height.nodeValue + 'px';
        el.firstChild.style.height = el.clientHeight + 'px';
        break;
    }
  }

  function onResize(e) {
    var el = e.srcElement;
    if (el.firstChild) {
      el.firstChild.style.width =  el.clientWidth + 'px';
      el.firstChild.style.height = el.clientHeight + 'px';
    }
  }

  G_vmlCanvasManager_.init();

  // precompute "00" to "FF"
  var decToHex = [];
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
    }
  }

  function createMatrixIdentity() {
    return [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
  }

  function matrixMultiply(m1, m2) {
    var result = createMatrixIdentity();

    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        var sum = 0;

        for (var z = 0; z < 3; z++) {
          sum += m1[x][z] * m2[z][y];
        }

        result[x][y] = sum;
      }
    }
    return result;
  }

  function copyState(o1, o2) {
    o2.fillStyle     = o1.fillStyle;
    o2.lineCap       = o1.lineCap;
    o2.lineJoin      = o1.lineJoin;
    o2.lineWidth     = o1.lineWidth;
    o2.miterLimit    = o1.miterLimit;
    o2.shadowBlur    = o1.shadowBlur;
    o2.shadowColor   = o1.shadowColor;
    o2.shadowOffsetX = o1.shadowOffsetX;
    o2.shadowOffsetY = o1.shadowOffsetY;
    o2.strokeStyle   = o1.strokeStyle;
    o2.globalAlpha   = o1.globalAlpha;
    o2.font          = o1.font;
    o2.textAlign     = o1.textAlign;
    o2.textBaseline  = o1.textBaseline;
    o2.arcScaleX_    = o1.arcScaleX_;
    o2.arcScaleY_    = o1.arcScaleY_;
    o2.lineScale_    = o1.lineScale_;
  }

  var colorData = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    grey: '#808080',
    greenyellow: '#ADFF2F',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgreen: '#90EE90',
    lightgrey: '#D3D3D3',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#FF00FF',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    oldlace: '#FDF5E6',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    whitesmoke: '#F5F5F5',
    yellowgreen: '#9ACD32'
  };


  function getRgbHslContent(styleString) {
    var start = styleString.indexOf('(', 3);
    var end = styleString.indexOf(')', start + 1);
    var parts = styleString.substring(start + 1, end).split(',');
    // add alpha if needed
    if (parts.length != 4 || styleString.charAt(3) != 'a') {
      parts[3] = 1;
    }
    return parts;
  }

  function percent(s) {
    return parseFloat(s) / 100;
  }

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function hslToRgb(parts){
    var r, g, b, h, s, l;
    h = parseFloat(parts[0]) / 360 % 360;
    if (h < 0)
      h++;
    s = clamp(percent(parts[1]), 0, 1);
    l = clamp(percent(parts[2]), 0, 1);
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    return '#' + decToHex[Math.floor(r * 255)] +
        decToHex[Math.floor(g * 255)] +
        decToHex[Math.floor(b * 255)];
  }

  function hueToRgb(m1, m2, h) {
    if (h < 0)
      h++;
    if (h > 1)
      h--;

    if (6 * h < 1)
      return m1 + (m2 - m1) * 6 * h;
    else if (2 * h < 1)
      return m2;
    else if (3 * h < 2)
      return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    else
      return m1;
  }

  var processStyleCache = {};

  function processStyle(styleString) {
    if (styleString in processStyleCache) {
      return processStyleCache[styleString];
    }

    var str, alpha = 1;

    styleString = String(styleString);
    if (styleString.charAt(0) == '#') {
      str = styleString;
    } else if (/^rgb/.test(styleString)) {
      var parts = getRgbHslContent(styleString);
      var str = '#', n;
      for (var i = 0; i < 3; i++) {
        if (parts[i].indexOf('%') != -1) {
          n = Math.floor(percent(parts[i]) * 255);
        } else {
          n = +parts[i];
        }
        str += decToHex[clamp(n, 0, 255)];
      }
      alpha = +parts[3];
    } else if (/^hsl/.test(styleString)) {
      var parts = getRgbHslContent(styleString);
      str = hslToRgb(parts);
      alpha = parts[3];
    } else {
      str = colorData[styleString] || styleString;
    }
    return processStyleCache[styleString] = {color: str, alpha: alpha};
  }

  var DEFAULT_STYLE = {
    style: 'normal',
    variant: 'normal',
    weight: 'normal',
    size: 10,
    family: 'sans-serif'
  };

  // Internal text style cache
  var fontStyleCache = {};

  function processFontStyle(styleString) {
    if (fontStyleCache[styleString]) {
      return fontStyleCache[styleString];
    }

    var el = document.createElement('div');
    var style = el.style;
    try {
      style.font = styleString;
    } catch (ex) {
      // Ignore failures to set to invalid font.
    }

    return fontStyleCache[styleString] = {
      style: style.fontStyle || DEFAULT_STYLE.style,
      variant: style.fontVariant || DEFAULT_STYLE.variant,
      weight: style.fontWeight || DEFAULT_STYLE.weight,
      size: style.fontSize || DEFAULT_STYLE.size,
      family: style.fontFamily || DEFAULT_STYLE.family
    };
  }

  function getComputedStyle(style, element) {
    var computedStyle = {};

    for (var p in style) {
      computedStyle[p] = style[p];
    }

    // Compute the size
    var canvasFontSize = parseFloat(element.currentStyle.fontSize),
        fontSize = parseFloat(style.size);

    if (typeof style.size == 'number') {
      computedStyle.size = style.size;
    } else if (style.size.indexOf('px') != -1) {
      computedStyle.size = fontSize;
    } else if (style.size.indexOf('em') != -1) {
      computedStyle.size = canvasFontSize * fontSize;
    } else if(style.size.indexOf('%') != -1) {
      computedStyle.size = (canvasFontSize / 100) * fontSize;
    } else if (style.size.indexOf('pt') != -1) {
      computedStyle.size = fontSize / .75;
    } else {
      computedStyle.size = canvasFontSize;
    }

    // Different scaling between normal text and VML text. This was found using
    // trial and error to get the same size as non VML text.
    computedStyle.size *= 0.981;

    // Fix for VML handling of bare font family names.  Add a '' around font family names.
    computedStyle.family =  "'" + computedStyle.family.replace(/(\'|\")/g,'').replace(/\s*,\s*/g, "', '") + "'";

    return computedStyle;
  }

  function buildStyle(style) {
    return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
        style.size + 'px ' + style.family;
  }

  var lineCapMap = {
    'butt': 'flat',
    'round': 'round'
  };

  function processLineCap(lineCap) {
    return lineCapMap[lineCap] || 'square';
  }

  /**
   * This class implements CanvasRenderingContext2D interface as described by
   * the WHATWG.
   * @param {HTMLElement} canvasElement The element that the 2D context should
   * be associated with
   */
  function CanvasRenderingContext2D_(canvasElement) {
    this.m_ = createMatrixIdentity();

    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];

    // Canvas context properties
    this.strokeStyle = '#000';
    this.fillStyle = '#000';

    this.lineWidth = 1;
    this.lineJoin = 'miter';
    this.lineCap = 'butt';
    this.miterLimit = Z * 1;
    this.globalAlpha = 1;
    this.font = '10px sans-serif';
    this.textAlign = 'left';
    this.textBaseline = 'alphabetic';
    this.canvas = canvasElement;

    var cssText = 'width:' + canvasElement.clientWidth + 'px;height:' +
        canvasElement.clientHeight + 'px;overflow:hidden;position:absolute';
    var el = canvasElement.ownerDocument.createElement('div');
    el.style.cssText = cssText;
    canvasElement.appendChild(el);

    var overlayEl = el.cloneNode(false);
    // Use a non transparent background.
    overlayEl.style.backgroundColor = 'red';
    overlayEl.style.filter = 'alpha(opacity=0)';
    canvasElement.appendChild(overlayEl);

    this.element_ = el;
    this.arcScaleX_ = 1;
    this.arcScaleY_ = 1;
    this.lineScale_ = 1;
  }

  var contextPrototype = CanvasRenderingContext2D_.prototype;
  contextPrototype.clearRect = function() {
    if (this.textMeasureEl_) {
      this.textMeasureEl_.removeNode(true);
      this.textMeasureEl_ = null;
    }
    this.element_.innerHTML = '';
  };

  contextPrototype.beginPath = function() {
    // TODO: Branch current matrix so that save/restore has no effect
    //       as per safari docs.
    this.currentPath_ = [];
  };

  contextPrototype.moveTo = function(aX, aY) {
    var p = getCoords(this, aX, aY);
    this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.lineTo = function(aX, aY) {
    var p = getCoords(this, aX, aY);
    this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                            aCP2x, aCP2y,
                                            aX, aY) {
    var p = getCoords(this, aX, aY);
    var cp1 = getCoords(this, aCP1x, aCP1y);
    var cp2 = getCoords(this, aCP2x, aCP2y);
    bezierCurveTo(this, cp1, cp2, p);
  };

  // Helper function that takes the already fixed cordinates.
  function bezierCurveTo(self, cp1, cp2, p) {
    self.currentPath_.push({
      type: 'bezierCurveTo',
      cp1x: cp1.x,
      cp1y: cp1.y,
      cp2x: cp2.x,
      cp2y: cp2.y,
      x: p.x,
      y: p.y
    });
    self.currentX_ = p.x;
    self.currentY_ = p.y;
  }

  contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
    // the following is lifted almost directly from
    // http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

    var cp = getCoords(this, aCPx, aCPy);
    var p = getCoords(this, aX, aY);

    var cp1 = {
      x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
      y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
    };
    var cp2 = {
      x: cp1.x + (p.x - this.currentX_) / 3.0,
      y: cp1.y + (p.y - this.currentY_) / 3.0
    };

    bezierCurveTo(this, cp1, cp2, p);
  };

  contextPrototype.arc = function(aX, aY, aRadius,
                                  aStartAngle, aEndAngle, aClockwise) {
    aRadius *= Z;
    var arcType = aClockwise ? 'at' : 'wa';

    var xStart = aX + mc(aStartAngle) * aRadius - Z2;
    var yStart = aY + ms(aStartAngle) * aRadius - Z2;

    var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
    var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

    // IE won't render arches drawn counter clockwise if xStart == xEnd.
    if (xStart == xEnd && !aClockwise) {
      xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
                       // that can be represented in binary
    }

    var p = getCoords(this, aX, aY);
    var pStart = getCoords(this, xStart, yStart);
    var pEnd = getCoords(this, xEnd, yEnd);

    this.currentPath_.push({type: arcType,
                           x: p.x,
                           y: p.y,
                           radius: aRadius,
                           xStart: pStart.x,
                           yStart: pStart.y,
                           xEnd: pEnd.x,
                           yEnd: pEnd.y});

  };

  contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
  };

  contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
    var oldPath = this.currentPath_;
    this.beginPath();

    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.stroke();

    this.currentPath_ = oldPath;
  };

  contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
    var oldPath = this.currentPath_;
    this.beginPath();

    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.fill();

    this.currentPath_ = oldPath;
  };

  contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
    var gradient = new CanvasGradient_('gradient');
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    return gradient;
  };

  contextPrototype.createRadialGradient = function(aX0, aY0, aR0,
                                                   aX1, aY1, aR1) {
    var gradient = new CanvasGradient_('gradientradial');
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.r0_ = aR0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    gradient.r1_ = aR1;
    return gradient;
  };

  contextPrototype.drawImage = function(image, var_args) {
    var dx, dy, dw, dh, sx, sy, sw, sh;

    // to find the original width we overide the width and height
    var oldRuntimeWidth = image.runtimeStyle.width;
    var oldRuntimeHeight = image.runtimeStyle.height;
    image.runtimeStyle.width = 'auto';
    image.runtimeStyle.height = 'auto';

    // get the original size
    var w = image.width;
    var h = image.height;

    // and remove overides
    image.runtimeStyle.width = oldRuntimeWidth;
    image.runtimeStyle.height = oldRuntimeHeight;

    if (arguments.length == 3) {
      dx = arguments[1];
      dy = arguments[2];
      sx = sy = 0;
      sw = dw = w;
      sh = dh = h;
    } else if (arguments.length == 5) {
      dx = arguments[1];
      dy = arguments[2];
      dw = arguments[3];
      dh = arguments[4];
      sx = sy = 0;
      sw = w;
      sh = h;
    } else if (arguments.length == 9) {
      sx = arguments[1];
      sy = arguments[2];
      sw = arguments[3];
      sh = arguments[4];
      dx = arguments[5];
      dy = arguments[6];
      dw = arguments[7];
      dh = arguments[8];
    } else {
      throw Error('Invalid number of arguments');
    }

    var d = getCoords(this, dx, dy);

    var w2 = sw / 2;
    var h2 = sh / 2;

    var vmlStr = [];

    var W = 10;
    var H = 10;

    // For some reason that I've now forgotten, using divs didn't work
    vmlStr.push(' <g_vml_:group',
                ' coordsize="', Z * W, ',', Z * H, '"',
                ' coordorigin="0,0"' ,
                ' style="width:', W, 'px;height:', H, 'px;position:absolute;');

    // If filters are necessary (rotation exists), create them
    // filters are bog-slow, so only create them if abbsolutely necessary
    // The following check doesn't account for skews (which don't exist
    // in the canvas spec (yet) anyway.

    if (this.m_[0][0] != 1 || this.m_[0][1] ||
        this.m_[1][1] != 1 || this.m_[1][0]) {
      var filter = [];

      // Note the 12/21 reversal
      filter.push('M11=', this.m_[0][0], ',',
                  'M12=', this.m_[1][0], ',',
                  'M21=', this.m_[0][1], ',',
                  'M22=', this.m_[1][1], ',',
                  'Dx=', mr(d.x / Z), ',',
                  'Dy=', mr(d.y / Z), '');

      // Bounding box calculation (need to minimize displayed area so that
      // filters don't waste time on unused pixels.
      var max = d;
      var c2 = getCoords(this, dx + dw, dy);
      var c3 = getCoords(this, dx, dy + dh);
      var c4 = getCoords(this, dx + dw, dy + dh);

      max.x = m.max(max.x, c2.x, c3.x, c4.x);
      max.y = m.max(max.y, c2.y, c3.y, c4.y);

      vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
                  'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
                  filter.join(''), ", sizingmethod='clip');");

    } else {
      vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
    }

    vmlStr.push(' ">' ,
                '<g_vml_:image src="', image.src, '"',
                ' style="width:', Z * dw, 'px;',
                ' height:', Z * dh, 'px"',
                ' cropleft="', sx / w, '"',
                ' croptop="', sy / h, '"',
                ' cropright="', (w - sx - sw) / w, '"',
                ' cropbottom="', (h - sy - sh) / h, '"',
                ' />',
                '</g_vml_:group>');

    this.element_.insertAdjacentHTML('BeforeEnd', vmlStr.join(''));
  };

  contextPrototype.stroke = function(aFill) {
    var lineStr = [];
    var lineOpen = false;

    var W = 10;
    var H = 10;

    lineStr.push('<g_vml_:shape',
                 ' filled="', !!aFill, '"',
                 ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
                 ' coordorigin="0,0"',
                 ' coordsize="', Z * W, ',', Z * H, '"',
                 ' stroked="', !aFill, '"',
                 ' path="');

    var newSeq = false;
    var min = {x: null, y: null};
    var max = {x: null, y: null};

    for (var i = 0; i < this.currentPath_.length; i++) {
      var p = this.currentPath_[i];
      var c;

      switch (p.type) {
        case 'moveTo':
          c = p;
          lineStr.push(' m ', mr(p.x), ',', mr(p.y));
          break;
        case 'lineTo':
          lineStr.push(' l ', mr(p.x), ',', mr(p.y));
          break;
        case 'close':
          lineStr.push(' x ');
          p = null;
          break;
        case 'bezierCurveTo':
          lineStr.push(' c ',
                       mr(p.cp1x), ',', mr(p.cp1y), ',',
                       mr(p.cp2x), ',', mr(p.cp2y), ',',
                       mr(p.x), ',', mr(p.y));
          break;
        case 'at':
        case 'wa':
          lineStr.push(' ', p.type, ' ',
                       mr(p.x - this.arcScaleX_ * p.radius), ',',
                       mr(p.y - this.arcScaleY_ * p.radius), ' ',
                       mr(p.x + this.arcScaleX_ * p.radius), ',',
                       mr(p.y + this.arcScaleY_ * p.radius), ' ',
                       mr(p.xStart), ',', mr(p.yStart), ' ',
                       mr(p.xEnd), ',', mr(p.yEnd));
          break;
      }


      // TODO: Following is broken for curves due to
      //       move to proper paths.

      // Figure out dimensions so we can do gradient fills
      // properly
      if (p) {
        if (min.x == null || p.x < min.x) {
          min.x = p.x;
        }
        if (max.x == null || p.x > max.x) {
          max.x = p.x;
        }
        if (min.y == null || p.y < min.y) {
          min.y = p.y;
        }
        if (max.y == null || p.y > max.y) {
          max.y = p.y;
        }
      }
    }
    lineStr.push(' ">');

    if (!aFill) {
      appendStroke(this, lineStr);
    } else {
      appendFill(this, lineStr, min, max);
    }

    lineStr.push('</g_vml_:shape>');

    this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
  };

  function appendStroke(ctx, lineStr) {
    var a = processStyle(ctx.strokeStyle);
    var color = a.color;
    var opacity = a.alpha * ctx.globalAlpha;
    var lineWidth = ctx.lineScale_ * ctx.lineWidth;

    // VML cannot correctly render a line if the width is less than 1px.
    // In that case, we dilute the color to make the line look thinner.
    if (lineWidth < 1) {
      opacity *= lineWidth;
    }

    lineStr.push(
      '<g_vml_:stroke',
      ' opacity="', opacity, '"',
      ' joinstyle="', ctx.lineJoin, '"',
      ' miterlimit="', ctx.miterLimit, '"',
      ' endcap="', processLineCap(ctx.lineCap), '"',
      ' weight="', lineWidth, 'px"',
      ' color="', color, '" />'
    );
  }

  function appendFill(ctx, lineStr, min, max) {
    var fillStyle = ctx.fillStyle;
    var arcScaleX = ctx.arcScaleX_;
    var arcScaleY = ctx.arcScaleY_;
    var width = max.x - min.x;
    var height = max.y - min.y;
    if (fillStyle instanceof CanvasGradient_) {
      // TODO: Gradients transformed with the transformation matrix.
      var angle = 0;
      var focus = {x: 0, y: 0};

      // additional offset
      var shift = 0;
      // scale factor for offset
      var expansion = 1;

      if (fillStyle.type_ == 'gradient') {
        var x0 = fillStyle.x0_ / arcScaleX;
        var y0 = fillStyle.y0_ / arcScaleY;
        var x1 = fillStyle.x1_ / arcScaleX;
        var y1 = fillStyle.y1_ / arcScaleY;
        var p0 = getCoords(ctx, x0, y0);
        var p1 = getCoords(ctx, x1, y1);
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        angle = Math.atan2(dx, dy) * 180 / Math.PI;

        // The angle should be a non-negative number.
        if (angle < 0) {
          angle += 360;
        }

        // Very small angles produce an unexpected result because they are
        // converted to a scientific notation string.
        if (angle < 1e-6) {
          angle = 0;
        }
      } else {
        var p0 = getCoords(ctx, fillStyle.x0_, fillStyle.y0_);
        focus = {
          x: (p0.x - min.x) / width,
          y: (p0.y - min.y) / height
        };

        width  /= arcScaleX * Z;
        height /= arcScaleY * Z;
        var dimension = m.max(width, height);
        shift = 2 * fillStyle.r0_ / dimension;
        expansion = 2 * fillStyle.r1_ / dimension - shift;
      }

      // We need to sort the color stops in ascending order by offset,
      // otherwise IE won't interpret it correctly.
      var stops = fillStyle.colors_;
      stops.sort(function(cs1, cs2) {
        return cs1.offset - cs2.offset;
      });

      var length = stops.length;
      var color1 = stops[0].color;
      var color2 = stops[length - 1].color;
      var opacity1 = stops[0].alpha * ctx.globalAlpha;
      var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

      var colors = [];
      for (var i = 0; i < length; i++) {
        var stop = stops[i];
        colors.push(stop.offset * expansion + shift + ' ' + stop.color);
      }

      // When colors attribute is used, the meanings of opacity and o:opacity2
      // are reversed.
      lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
                   ' method="none" focus="100%"',
                   ' color="', color1, '"',
                   ' color2="', color2, '"',
                   ' colors="', colors.join(','), '"',
                   ' opacity="', opacity2, '"',
                   ' g_o_:opacity2="', opacity1, '"',
                   ' angle="', angle, '"',
                   ' focusposition="', focus.x, ',', focus.y, '" />');
    } else if (fillStyle instanceof CanvasPattern_) {
      if (width && height) {
        var deltaLeft = -min.x;
        var deltaTop = -min.y;
        lineStr.push('<g_vml_:fill',
                     ' position="',
                     deltaLeft / width * arcScaleX * arcScaleX, ',',
                     deltaTop / height * arcScaleY * arcScaleY, '"',
                     ' type="tile"',
                     // TODO: Figure out the correct size to fit the scale.
                     //' size="', w, 'px ', h, 'px"',
                     ' src="', fillStyle.src_, '" />');
       }
    } else {
      var a = processStyle(ctx.fillStyle);
      var color = a.color;
      var opacity = a.alpha * ctx.globalAlpha;
      lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
                   '" />');
    }
  }

  contextPrototype.fill = function() {
    this.stroke(true);
  };

  contextPrototype.closePath = function() {
    this.currentPath_.push({type: 'close'});
  };

  function getCoords(ctx, aX, aY) {
    var m = ctx.m_;
    return {
      x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
      y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
    };
  };

  contextPrototype.save = function() {
    var o = {};
    copyState(this, o);
    this.aStack_.push(o);
    this.mStack_.push(this.m_);
    this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
  };

  contextPrototype.restore = function() {
    if (this.aStack_.length) {
      copyState(this.aStack_.pop(), this);
      this.m_ = this.mStack_.pop();
    }
  };

  function matrixIsFinite(m) {
    return isFinite(m[0][0]) && isFinite(m[0][1]) &&
        isFinite(m[1][0]) && isFinite(m[1][1]) &&
        isFinite(m[2][0]) && isFinite(m[2][1]);
  }

  function setM(ctx, m, updateLineScale) {
    if (!matrixIsFinite(m)) {
      return;
    }
    ctx.m_ = m;

    if (updateLineScale) {
      // Get the line scale.
      // Determinant of this.m_ means how much the area is enlarged by the
      // transformation. So its square root can be used as a scale factor
      // for width.
      var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
      ctx.lineScale_ = sqrt(abs(det));
    }
  }

  contextPrototype.translate = function(aX, aY) {
    var m1 = [
      [1,  0,  0],
      [0,  1,  0],
      [aX, aY, 1]
    ];

    setM(this, matrixMultiply(m1, this.m_), false);
  };

  contextPrototype.rotate = function(aRot) {
    var c = mc(aRot);
    var s = ms(aRot);

    var m1 = [
      [c,  s, 0],
      [-s, c, 0],
      [0,  0, 1]
    ];

    setM(this, matrixMultiply(m1, this.m_), false);
  };

  contextPrototype.scale = function(aX, aY) {
    this.arcScaleX_ *= aX;
    this.arcScaleY_ *= aY;
    var m1 = [
      [aX, 0,  0],
      [0,  aY, 0],
      [0,  0,  1]
    ];

    setM(this, matrixMultiply(m1, this.m_), true);
  };

  contextPrototype.transform = function(m11, m12, m21, m22, dx, dy) {
    var m1 = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx,  dy,  1]
    ];

    setM(this, matrixMultiply(m1, this.m_), true);
  };

  contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
    var m = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx,  dy,  1]
    ];

    setM(this, m, true);
  };

  /**
   * The text drawing function.
   * The maxWidth argument isn't taken in account, since no browser supports
   * it yet.
   */
  contextPrototype.drawText_ = function(text, x, y, maxWidth, stroke) {
    var m = this.m_,
        delta = 1000,
        left = 0,
        right = delta,
        offset = {x: 0, y: 0},
        lineStr = [];

    var fontStyle = getComputedStyle(processFontStyle(this.font), this.element_);

    var fontStyleString = buildStyle(fontStyle);

    var elementStyle = this.element_.currentStyle;
    var textAlign = this.textAlign.toLowerCase();
    switch (textAlign) {
      case 'left':
      case 'center':
      case 'right':
        break;
      case 'end':
        textAlign = elementStyle.direction == 'ltr' ? 'right' : 'left';
        break;
      case 'start':
        textAlign = elementStyle.direction == 'rtl' ? 'right' : 'left';
        break;
      default:
        textAlign = 'left';
    }

    // 1.75 is an arbitrary number, as there is no info about the text baseline
    switch (this.textBaseline) {
      case 'hanging':
      case 'top':
        offset.y = fontStyle.size / 1.75;
        break;
      case 'middle':
        break;
      default:
      case null:
      case 'alphabetic':
      case 'ideographic':
      case 'bottom':
        offset.y = -fontStyle.size / 2.25;
        break;
    }

    switch(textAlign) {
      case 'right':
        left = delta;
        right = 0.05;
        break;
      case 'center':
        left = right = delta / 2;
        break;
    }

    var d = getCoords(this, x + offset.x, y + offset.y);

    lineStr.push('<g_vml_:line from="', -left ,' 0" to="', right ,' 0.05" ',
                 ' coordsize="100 100" coordorigin="0 0"',
                 ' filled="', !stroke, '" stroked="', !!stroke,
                 '" style="position:absolute;width:1px;height:1px;">');

    if (stroke) {
      appendStroke(this, lineStr);
    } else {
      // TODO: Fix the min and max params.
      appendFill(this, lineStr, {x: -left, y: 0},
                 {x: right, y: fontStyle.size});
    }

    var skewM = m[0][0].toFixed(3) + ',' + m[1][0].toFixed(3) + ',' +
                m[0][1].toFixed(3) + ',' + m[1][1].toFixed(3) + ',0,0';

    var skewOffset = mr(d.x / Z + 1 - m[0][0]) + ',' + mr(d.y / Z - 2 * m[1][0]);


    lineStr.push('<g_vml_:skew on="t" matrix="', skewM ,'" ',
                 ' offset="', skewOffset, '" origin="', left ,' 0" />',
                 '<g_vml_:path textpathok="true" />',
                 '<g_vml_:textpath on="true" string="',
                 encodeHtmlAttribute(text),
                 '" style="v-text-align:', textAlign,
                 ';font:', encodeHtmlAttribute(fontStyleString),
                 '" /></g_vml_:line>');

    this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
  };

  contextPrototype.fillText = function(text, x, y, maxWidth) {
    this.drawText_(text, x, y, maxWidth, false);
  };

  contextPrototype.strokeText = function(text, x, y, maxWidth) {
    this.drawText_(text, x, y, maxWidth, true);
  };

  contextPrototype.measureText = function(text) {
    if (!this.textMeasureEl_) {
      var s = '<span style="position:absolute;' +
          'top:-20000px;left:0;padding:0;margin:0;border:none;' +
          'white-space:pre;"></span>';
      this.element_.insertAdjacentHTML('beforeEnd', s);
      this.textMeasureEl_ = this.element_.lastChild;
    }
    var doc = this.element_.ownerDocument;
    this.textMeasureEl_.innerHTML = '';
    this.textMeasureEl_.style.font = this.font;
    // Don't use innerHTML or innerText because they allow markup/whitespace.
    this.textMeasureEl_.appendChild(doc.createTextNode(text));
    return {width: this.textMeasureEl_.offsetWidth};
  };

  /******** STUBS ********/
  contextPrototype.clip = function() {
    // TODO: Implement
  };

  contextPrototype.arcTo = function() {
    // TODO: Implement
  };

  contextPrototype.createPattern = function(image, repetition) {
    return new CanvasPattern_(image, repetition);
  };

  // Gradient / Pattern Stubs
  function CanvasGradient_(aType) {
    this.type_ = aType;
    this.x0_ = 0;
    this.y0_ = 0;
    this.r0_ = 0;
    this.x1_ = 0;
    this.y1_ = 0;
    this.r1_ = 0;
    this.colors_ = [];
  }

  CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
    aColor = processStyle(aColor);
    this.colors_.push({offset: aOffset,
                       color: aColor.color,
                       alpha: aColor.alpha});
  };

  function CanvasPattern_(image, repetition) {
    assertImageIsValid(image);
    switch (repetition) {
      case 'repeat':
      case null:
      case '':
        this.repetition_ = 'repeat';
        break;
      case 'repeat-x':
      case 'repeat-y':
      case 'no-repeat':
        this.repetition_ = repetition;
        break;
      default:
        throwException('SYNTAX_ERR');
    }

    this.src_ = image.src;
    this.width_ = image.width;
    this.height_ = image.height;
  }

  function throwException(s) {
    throw new DOMException_(s);
  }

  function assertImageIsValid(img) {
    if (!img || img.nodeType != 1 || img.tagName != 'IMG') {
      throwException('TYPE_MISMATCH_ERR');
    }
    if (img.readyState != 'complete') {
      throwException('INVALID_STATE_ERR');
    }
  }

  function DOMException_(s) {
    this.code = this[s];
    this.message = s +': DOM Exception ' + this.code;
  }
  var p = DOMException_.prototype = new Error;
  p.INDEX_SIZE_ERR = 1;
  p.DOMSTRING_SIZE_ERR = 2;
  p.HIERARCHY_REQUEST_ERR = 3;
  p.WRONG_DOCUMENT_ERR = 4;
  p.INVALID_CHARACTER_ERR = 5;
  p.NO_DATA_ALLOWED_ERR = 6;
  p.NO_MODIFICATION_ALLOWED_ERR = 7;
  p.NOT_FOUND_ERR = 8;
  p.NOT_SUPPORTED_ERR = 9;
  p.INUSE_ATTRIBUTE_ERR = 10;
  p.INVALID_STATE_ERR = 11;
  p.SYNTAX_ERR = 12;
  p.INVALID_MODIFICATION_ERR = 13;
  p.NAMESPACE_ERR = 14;
  p.INVALID_ACCESS_ERR = 15;
  p.VALIDATION_ERR = 16;
  p.TYPE_MISMATCH_ERR = 17;

  // set up externs
  G_vmlCanvasManager = G_vmlCanvasManager_;
  CanvasRenderingContext2D = CanvasRenderingContext2D_;
  CanvasGradient = CanvasGradient_;
  CanvasPattern = CanvasPattern_;
  DOMException = DOMException_;
  G_vmlCanvasManager._version = 888;
})();

} // if
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();
/**
 * Title: jqPlot Charts
 * 
 * Pure JavaScript plotting plugin for jQuery.
 * 
 * About: Version
 * 
 * version: 1.0.8 
 * revision: 1250
 * 
 * About: Copyright & License
 * 
 * Copyright (c) 2009-2013 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 * 
 * See <GPL Version 2> and <MIT License> contained within this distribution for further information. 
 *
 * The author would appreciate an email letting him know of any substantial
 * use of jqPlot.  You can reach the author at: chris at jqplot dot com 
 * or see http://www.jqplot.com/info.php.  This is, of course, not required.
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php.
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 * 
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 * 
 * About: Introduction
 * 
 * jqPlot requires jQuery (1.4+ required for certain features). jQuery 1.4.2 is included in the distribution.  
 * To use jqPlot include jQuery, the jqPlot jQuery plugin, the jqPlot css file and optionally 
 * the excanvas script for IE support in your web page:
 * 
 * > <!--[if lt IE 9]><script language="javascript" type="text/javascript" src="excanvas.js"></script><![endif]-->
 * > <script language="javascript" type="text/javascript" src="jquery-1.4.4.min.js"></script>
 * > <script language="javascript" type="text/javascript" src="jquery.jqplot.min.js"></script>
 * > <link rel="stylesheet" type="text/css" href="jquery.jqplot.css" />
 * 
 * jqPlot can be customized by overriding the defaults of any of the objects which make
 * up the plot. The general usage of jqplot is:
 * 
 * > chart = $.jqplot('targetElemId', [dataArray,...], {optionsObject});
 * 
 * The options available to jqplot are detailed in <jqPlot Options> in the jqPlotOptions.txt file.
 * 
 * An actual call to $.jqplot() may look like the 
 * examples below:
 * 
 * > chart = $.jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
 * 
 * or
 * 
 * > dataArray = [34,12,43,55,77];
 * > chart = $.jqplot('targetElemId', [dataArray, ...], {title:'My Plot', axes:{yaxis:{min:20, max:100}}});
 * 
 * For more inforrmation, see <jqPlot Usage>.
 * 
 * About: Usage
 * 
 * See <jqPlot Usage>
 * 
 * About: Available Options 
 * 
 * See <jqPlot Options> for a list of options available thorugh the options object (not complete yet!)
 * 
 * About: Options Usage
 * 
 * See <Options Tutorial>
 * 
 * About: Changes
 * 
 * See <Change Log>
 * 
 */

(function($) {
    // make sure undefined is undefined
    var undefined;
    
    $.fn.emptyForce = function() {
      for ( var i = 0, elem; (elem = $(this)[i]) != null; i++ ) {
        // Remove element nodes and prevent memory leaks
        if ( elem.nodeType === 1 ) {
          $.cleanData( elem.getElementsByTagName("*") );
        }
  
        // Remove any remaining nodes
        if ($.jqplot.use_excanvas) {
          elem.outerHTML = "";
        }
        else {
          while ( elem.firstChild ) {
            elem.removeChild( elem.firstChild );
          }
        }

        elem = null;
      }
  
      return $(this);
    };
  
    $.fn.removeChildForce = function(parent) {
      while ( parent.firstChild ) {
        this.removeChildForce( parent.firstChild );
        parent.removeChild( parent.firstChild );
      }
    };

    $.fn.jqplot = function() {
        var datas = [];
        var options = [];
        // see how many data arrays we have
        for (var i=0, l=arguments.length; i<l; i++) {
            if ($.isArray(arguments[i])) {
                datas.push(arguments[i]);
            }
            else if ($.isPlainObject(arguments[i])) {
                options.push(arguments[i]);
            }
        }

        return this.each(function(index) {
            var tid, 
                plot, 
                $this = $(this),
                dl = datas.length,
                ol = options.length,
                data, 
                opts;

            if (index < dl) {
                data = datas[index];
            }
            else {
                data = dl ? datas[dl-1] : null;
            }

            if (index < ol) {
                opts = options[index];
            }
            else {
                opts = ol ? options[ol-1] : null;
            }

            // does el have an id?
            // if not assign it one.
            tid = $this.attr('id');
            if (tid === undefined) {
                tid = 'jqplot_target_' + $.jqplot.targetCounter++;
                $this.attr('id', tid);
            }

            plot = $.jqplot(tid, data, opts);

            $this.data('jqplot', plot);
        });
    };


    /**
     * Namespace: $.jqplot
     * jQuery function called by the user to create a plot.
     *  
     * Parameters:
     * target - ID of target element to render the plot into.
     * data - an array of data series.
     * options - user defined options object.  See the individual classes for available options.
     * 
     * Properties:
     * config - object to hold configuration information for jqPlot plot object.
     * 
     * attributes:
     * enablePlugins - False to disable plugins by default.  Plugins must then be explicitly 
     *   enabled in the individual plot options.  Default: false.
     *   This property sets the "show" property of certain plugins to true or false.
     *   Only plugins that can be immediately active upon loading are affected.  This includes
     *   non-renderer plugins like cursor, dragable, highlighter, and trendline.
     * defaultHeight - Default height for plots where no css height specification exists.  This
     *   is a jqplot wide default.
     * defaultWidth - Default height for plots where no css height specification exists.  This
     *   is a jqplot wide default.
     */

    $.jqplot = function(target, data, options) {
        var _data = null, _options = null;

        if (arguments.length === 3) {
            _data = data;
            _options = options;
        }

        else if (arguments.length === 2) {
            if ($.isArray(data)) {
                _data = data;
            }

            else if ($.isPlainObject(data)) {
                _options = data;
            }
        }

        if (_data === null && _options !== null && _options.data) {
            _data = _options.data;
        }

        var plot = new jqPlot();
        // remove any error class that may be stuck on target.
        $('#'+target).removeClass('jqplot-error');
        
        if ($.jqplot.config.catchErrors) {
            try {
                plot.init(target, _data, _options);
                plot.draw();
                plot.themeEngine.init.call(plot);
                return plot;
            }
            catch(e) {
                var msg = $.jqplot.config.errorMessage || e.message;
                $('#'+target).append('<div class="jqplot-error-message">'+msg+'</div>');
                $('#'+target).addClass('jqplot-error');
                document.getElementById(target).style.background = $.jqplot.config.errorBackground;
                document.getElementById(target).style.border = $.jqplot.config.errorBorder;
                document.getElementById(target).style.fontFamily = $.jqplot.config.errorFontFamily;
                document.getElementById(target).style.fontSize = $.jqplot.config.errorFontSize;
                document.getElementById(target).style.fontStyle = $.jqplot.config.errorFontStyle;
                document.getElementById(target).style.fontWeight = $.jqplot.config.errorFontWeight;
            }
        }
        else {        
            plot.init(target, _data, _options);
            plot.draw();
            plot.themeEngine.init.call(plot);
            return plot;
        }
    };

    $.jqplot.version = "1.0.8";
    $.jqplot.revision = "1250";

    $.jqplot.targetCounter = 1;

    // canvas manager to reuse canvases on the plot.
    // Should help solve problem of canvases not being freed and
    // problem of waiting forever for firefox to decide to free memory.
    $.jqplot.CanvasManager = function() {
        // canvases are managed globally so that they can be reused
        // across plots after they have been freed
        if (typeof $.jqplot.CanvasManager.canvases == 'undefined') {
            $.jqplot.CanvasManager.canvases = [];
            $.jqplot.CanvasManager.free = [];
        }
        
        var myCanvases = [];
        
        this.getCanvas = function() {
            var canvas;
            var makeNew = true;
            
            if (!$.jqplot.use_excanvas) {
                for (var i = 0, l = $.jqplot.CanvasManager.canvases.length; i < l; i++) {
                    if ($.jqplot.CanvasManager.free[i] === true) {
                        makeNew = false;
                        canvas = $.jqplot.CanvasManager.canvases[i];
                        // $(canvas).removeClass('jqplot-canvasManager-free').addClass('jqplot-canvasManager-inuse');
                        $.jqplot.CanvasManager.free[i] = false;
                        myCanvases.push(i);
                        break;
                    }
                }
            }

            if (makeNew) {
                canvas = document.createElement('canvas');
                myCanvases.push($.jqplot.CanvasManager.canvases.length);
                $.jqplot.CanvasManager.canvases.push(canvas);
                $.jqplot.CanvasManager.free.push(false);
            }   
            
            return canvas;
        };
        
        // this method has to be used after settings the dimesions
        // on the element returned by getCanvas()
        this.initCanvas = function(canvas) {
            if ($.jqplot.use_excanvas) {
                return window.G_vmlCanvasManager.initElement(canvas);
            }
            return canvas;
        };

        this.freeAllCanvases = function() {
            for (var i = 0, l=myCanvases.length; i < l; i++) {
                this.freeCanvas(myCanvases[i]);
            }
            myCanvases = [];
        };

        this.freeCanvas = function(idx) {
            if ($.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== undefined) {
                // excanvas can't be reused, but properly unset
                window.G_vmlCanvasManager.uninitElement($.jqplot.CanvasManager.canvases[idx]);
                $.jqplot.CanvasManager.canvases[idx] = null;
            } 
            else {
                var canvas = $.jqplot.CanvasManager.canvases[idx];
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                $(canvas).unbind().removeAttr('class').removeAttr('style');
                // Style attributes seemed to be still hanging around.  wierd.  Some ticks
                // still retained a left: 0px attribute after reusing a canvas.
                $(canvas).css({left: '', top: '', position: ''});
                // setting size to 0 may save memory of unused canvases?
                canvas.width = 0;
                canvas.height = 0;
                $.jqplot.CanvasManager.free[idx] = true;
            }
        };
        
    };

            
    // Convienence function that won't hang IE or FF without FireBug.
    $.jqplot.log = function() {
        if (window.console) {
            window.console.log.apply(window.console, arguments);
        }
    };
        
    $.jqplot.config = {
        addDomReference: false,
        enablePlugins:false,
        defaultHeight:300,
        defaultWidth:400,
        UTCAdjust:false,
        timezoneOffset: new Date(new Date().getTimezoneOffset() * 60000),
        errorMessage: '',
        errorBackground: '',
        errorBorder: '',
        errorFontFamily: '',
        errorFontSize: '',
        errorFontStyle: '',
        errorFontWeight: '',
        catchErrors: false,
        defaultTickFormatString: "%.1f",
        defaultColors: [ "#4bb2c5", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"],
        defaultNegativeColors: [ "#498991", "#C08840", "#9F9274", "#546D61", "#646C4A", "#6F6621", "#6E3F5F", "#4F64B0", "#A89050", "#C45923", "#187399", "#945381", "#959E5C", "#C7AF7B", "#478396", "#907294"],
        dashLength: 4,
        gapLength: 4,
        dotGapLength: 2.5,
        srcLocation: 'jqplot/src/',
        pluginLocation: 'jqplot/src/plugins/'
    };
    
    
    $.jqplot.arrayMax = function( array ){
        return Math.max.apply( Math, array );
    };
    
    $.jqplot.arrayMin = function( array ){
        return Math.min.apply( Math, array );
    };
    
    $.jqplot.enablePlugins = $.jqplot.config.enablePlugins;
    
    // canvas related tests taken from modernizer:
    // Copyright (c) 2009 - 2010 Faruk Ates.
    // http://www.modernizr.com
    
    $.jqplot.support_canvas = function() {
        if (typeof $.jqplot.support_canvas.result == 'undefined') {
            $.jqplot.support_canvas.result = !!document.createElement('canvas').getContext; 
        }
        return $.jqplot.support_canvas.result;
    };
            
    $.jqplot.support_canvas_text = function() {
        if (typeof $.jqplot.support_canvas_text.result == 'undefined') {
            if (window.G_vmlCanvasManager !== undefined && window.G_vmlCanvasManager._version > 887) {
                $.jqplot.support_canvas_text.result = true;
            }
            else {
                $.jqplot.support_canvas_text.result = !!(document.createElement('canvas').getContext && typeof document.createElement('canvas').getContext('2d').fillText == 'function');
            }
             
        }
        return $.jqplot.support_canvas_text.result;
    };
    
    $.jqplot.use_excanvas = ((!$.support.boxModel || !$.support.objectAll || !$support.leadingWhitespace) && !$.jqplot.support_canvas()) ? true : false;
    
    /**
     * 
     * Hooks: jqPlot Pugin Hooks
     * 
     * $.jqplot.preInitHooks - called before initialization.
     * $.jqplot.postInitHooks - called after initialization.
     * $.jqplot.preParseOptionsHooks - called before user options are parsed.
     * $.jqplot.postParseOptionsHooks - called after user options are parsed.
     * $.jqplot.preDrawHooks - called before plot draw.
     * $.jqplot.postDrawHooks - called after plot draw.
     * $.jqplot.preDrawSeriesHooks - called before each series is drawn.
     * $.jqplot.postDrawSeriesHooks - called after each series is drawn.
     * $.jqplot.preDrawLegendHooks - called before the legend is drawn.
     * $.jqplot.addLegendRowHooks - called at the end of legend draw, so plugins
     *     can add rows to the legend table.
     * $.jqplot.preSeriesInitHooks - called before series is initialized.
     * $.jqplot.postSeriesInitHooks - called after series is initialized.
     * $.jqplot.preParseSeriesOptionsHooks - called before series related options
     *     are parsed.
     * $.jqplot.postParseSeriesOptionsHooks - called after series related options
     *     are parsed.
     * $.jqplot.eventListenerHooks - called at the end of plot drawing, binds
     *     listeners to the event canvas which lays on top of the grid area.
     * $.jqplot.preDrawSeriesShadowHooks - called before series shadows are drawn.
     * $.jqplot.postDrawSeriesShadowHooks - called after series shadows are drawn.
     * 
     */
    
    $.jqplot.preInitHooks = [];
    $.jqplot.postInitHooks = [];
    $.jqplot.preParseOptionsHooks = [];
    $.jqplot.postParseOptionsHooks = [];
    $.jqplot.preDrawHooks = [];
    $.jqplot.postDrawHooks = [];
    $.jqplot.preDrawSeriesHooks = [];
    $.jqplot.postDrawSeriesHooks = [];
    $.jqplot.preDrawLegendHooks = [];
    $.jqplot.addLegendRowHooks = [];
    $.jqplot.preSeriesInitHooks = [];
    $.jqplot.postSeriesInitHooks = [];
    $.jqplot.preParseSeriesOptionsHooks = [];
    $.jqplot.postParseSeriesOptionsHooks = [];
    $.jqplot.eventListenerHooks = [];
    $.jqplot.preDrawSeriesShadowHooks = [];
    $.jqplot.postDrawSeriesShadowHooks = [];

    // A superclass holding some common properties and methods.
    $.jqplot.ElemContainer = function() {
        this._elem;
        this._plotWidth;
        this._plotHeight;
        this._plotDimensions = {height:null, width:null};
    };
    
    $.jqplot.ElemContainer.prototype.createElement = function(el, offsets, clss, cssopts, attrib) {
        this._offsets = offsets;
        var klass = clss || 'jqplot';
        var elem = document.createElement(el);
        this._elem = $(elem);
        this._elem.addClass(klass);
        this._elem.css(cssopts);
        this._elem.attr(attrib);
        // avoid memory leak;
        elem = null;
        return this._elem;
    };
    
    $.jqplot.ElemContainer.prototype.getWidth = function() {
        if (this._elem) {
            return this._elem.outerWidth(true);
        }
        else {
            return null;
        }
    };
    
    $.jqplot.ElemContainer.prototype.getHeight = function() {
        if (this._elem) {
            return this._elem.outerHeight(true);
        }
        else {
            return null;
        }
    };
    
    $.jqplot.ElemContainer.prototype.getPosition = function() {
        if (this._elem) {
            return this._elem.position();
        }
        else {
            return {top:null, left:null, bottom:null, right:null};
        }
    };
    
    $.jqplot.ElemContainer.prototype.getTop = function() {
        return this.getPosition().top;
    };
    
    $.jqplot.ElemContainer.prototype.getLeft = function() {
        return this.getPosition().left;
    };
    
    $.jqplot.ElemContainer.prototype.getBottom = function() {
        return this._elem.css('bottom');
    };
    
    $.jqplot.ElemContainer.prototype.getRight = function() {
        return this._elem.css('right');
    };
    

    /**
     * Class: Axis
     * An individual axis object.  Cannot be instantiated directly, but created
     * by the Plot object.  Axis properties can be set or overridden by the 
     * options passed in from the user.
     * 
     */
    function Axis(name) {
        $.jqplot.ElemContainer.call(this);
        // Group: Properties
        //
        // Axes options are specified within an axes object at the top level of the 
        // plot options like so:
        // > {
        // >    axes: {
        // >        xaxis: {min: 5},
        // >        yaxis: {min: 2, max: 8, numberTicks:4},
        // >        x2axis: {pad: 1.5},
        // >        y2axis: {ticks:[22, 44, 66, 88]}
        // >        }
        // > }
        // There are 2 x axes, 'xaxis' and 'x2axis', and 
        // 9 yaxes, 'yaxis', 'y2axis'. 'y3axis', ...  Any or all of which may be specified.
        this.name = name;
        this._series = [];
        // prop: show
        // Wether to display the axis on the graph.
        this.show = false;
        // prop: tickRenderer
        // A class of a rendering engine for creating the ticks labels displayed on the plot, 
        // See <$.jqplot.AxisTickRenderer>.
        this.tickRenderer = $.jqplot.AxisTickRenderer;
        // prop: tickOptions
        // Options that will be passed to the tickRenderer, see <$.jqplot.AxisTickRenderer> options.
        this.tickOptions = {};
        // prop: labelRenderer
        // A class of a rendering engine for creating an axis label.
        this.labelRenderer = $.jqplot.AxisLabelRenderer;
        // prop: labelOptions
        // Options passed to the label renderer.
        this.labelOptions = {};
        // prop: label
        // Label for the axis
        this.label = null;
        // prop: showLabel
        // true to show the axis label.
        this.showLabel = true;
        // prop: min
        // minimum value of the axis (in data units, not pixels).
        this.min = null;
        // prop: max
        // maximum value of the axis (in data units, not pixels).
        this.max = null;
        // prop: autoscale
        // DEPRECATED
        // the default scaling algorithm produces superior results.
        this.autoscale = false;
        // prop: pad
        // Padding to extend the range above and below the data bounds.
        // The data range is multiplied by this factor to determine minimum and maximum axis bounds.
        // A value of 0 will be interpreted to mean no padding, and pad will be set to 1.0.
        this.pad = 1.2;
        // prop: padMax
        // Padding to extend the range above data bounds.
        // The top of the data range is multiplied by this factor to determine maximum axis bounds.
        // A value of 0 will be interpreted to mean no padding, and padMax will be set to 1.0.
        this.padMax = null;
        // prop: padMin
        // Padding to extend the range below data bounds.
        // The bottom of the data range is multiplied by this factor to determine minimum axis bounds.
        // A value of 0 will be interpreted to mean no padding, and padMin will be set to 1.0.
        this.padMin = null;
        // prop: ticks
        // 1D [val, val, ...] or 2D [[val, label], [val, label], ...] array of ticks for the axis.
        // If no label is specified, the value is formatted into an appropriate label.
        this.ticks = [];
        // prop: numberTicks
        // Desired number of ticks.  Default is to compute automatically.
        this.numberTicks;
        // prop: tickInterval
        // number of units between ticks.  Mutually exclusive with numberTicks.
        this.tickInterval;
        // prop: renderer
        // A class of a rendering engine that handles tick generation, 
        // scaling input data to pixel grid units and drawing the axis element.
        this.renderer = $.jqplot.LinearAxisRenderer;
        // prop: rendererOptions
        // renderer specific options.  See <$.jqplot.LinearAxisRenderer> for options.
        this.rendererOptions = {};
        // prop: showTicks
        // Wether to show the ticks (both marks and labels) or not.
        // Will not override showMark and showLabel options if specified on the ticks themselves.
        this.showTicks = true;
        // prop: showTickMarks
        // Wether to show the tick marks (line crossing grid) or not.
        // Overridden by showTicks and showMark option of tick itself.
        this.showTickMarks = true;
        // prop: showMinorTicks
        // Wether or not to show minor ticks.  This is renderer dependent.
        this.showMinorTicks = true;
        // prop: drawMajorGridlines
        // True to draw gridlines for major axis ticks.
        this.drawMajorGridlines = true;
        // prop: drawMinorGridlines
        // True to draw gridlines for minor ticks.
        this.drawMinorGridlines = false;
        // prop: drawMajorTickMarks
        // True to draw tick marks for major axis ticks.
        this.drawMajorTickMarks = true;
        // prop: drawMinorTickMarks
        // True to draw tick marks for minor ticks.  This is renderer dependent.
        this.drawMinorTickMarks = true;
        // prop: useSeriesColor
        // Use the color of the first series associated with this axis for the
        // tick marks and line bordering this axis.
        this.useSeriesColor = false;
        // prop: borderWidth
        // width of line stroked at the border of the axis.  Defaults
        // to the width of the grid boarder.
        this.borderWidth = null;
        // prop: borderColor
        // color of the border adjacent to the axis.  Defaults to grid border color.
        this.borderColor = null;
        // prop: scaleToHiddenSeries
        // True to include hidden series when computing axes bounds and scaling.
        this.scaleToHiddenSeries = false;
        // minimum and maximum values on the axis.
        this._dataBounds = {min:null, max:null};
        // statistics (min, max, mean) as well as actual data intervals for each series attached to axis.
        // holds collection of {intervals:[], min:, max:, mean: } objects for each series on axis.
        this._intervalStats = [];
        // pixel position from the top left of the min value and max value on the axis.
        this._offsets = {min:null, max:null};
        this._ticks=[];
        this._label = null;
        // prop: syncTicks
        // true to try and synchronize tick spacing across multiple axes so that ticks and
        // grid lines line up.  This has an impact on autoscaling algorithm, however.
        // In general, autoscaling an individual axis will work better if it does not
        // have to sync ticks.
        this.syncTicks = null;
        // prop: tickSpacing
        // Approximate pixel spacing between ticks on graph.  Used during autoscaling.
        // This number will be an upper bound, actual spacing will be less.
        this.tickSpacing = 75;
        // Properties to hold the original values for min, max, ticks, tickInterval and numberTicks
        // so they can be restored if altered by plugins.
        this._min = null;
        this._max = null;
        this._tickInterval = null;
        this._numberTicks = null;
        this.__ticks = null;
        // hold original user options.
        this._options = {};
    }
    
    Axis.prototype = new $.jqplot.ElemContainer();
    Axis.prototype.constructor = Axis;
    
    Axis.prototype.init = function() {
        if ($.isFunction(this.renderer)) {
            this.renderer = new this.renderer();  
        }
        // set the axis name
        this.tickOptions.axis = this.name;
        // if showMark or showLabel tick options not specified, use value of axis option.
        // showTicks overrides showTickMarks.
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTicks;
        }
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTickMarks;
        }
        if (this.tickOptions.showLabel == null) {
            this.tickOptions.showLabel = this.showTicks;
        }
        
        if (this.label == null || this.label == '') {
            this.showLabel = false;
        }
        else {
            this.labelOptions.label = this.label;
        }
        if (this.showLabel == false) {
            this.labelOptions.show = false;
        }
        // set the default padMax, padMin if not specified
        // special check, if no padding desired, padding
        // should be set to 1.0
        if (this.pad == 0) {
            this.pad = 1.0;
        }
        if (this.padMax == 0) {
            this.padMax = 1.0;
        }
        if (this.padMin == 0) {
            this.padMin = 1.0;
        }
        if (this.padMax == null) {
            this.padMax = (this.pad-1)/2 + 1;
        }
        if (this.padMin == null) {
            this.padMin = (this.pad-1)/2 + 1;
        }
        // now that padMin and padMax are correctly set, reset pad in case user has supplied 
        // padMin and/or padMax
        this.pad = this.padMax + this.padMin - 1;
        if (this.min != null || this.max != null) {
            this.autoscale = false;
        }
        // if not set, sync ticks for y axes but not x by default.
        if (this.syncTicks == null && this.name.indexOf('y') > -1) {
            this.syncTicks = true;
        }
        else if (this.syncTicks == null){
            this.syncTicks = false;
        }
        this.renderer.init.call(this, this.rendererOptions);
        
    };
    
    Axis.prototype.draw = function(ctx, plot) {
        // Memory Leaks patch
        if (this.__ticks) {
          this.__ticks = null;
        }

        return this.renderer.draw.call(this, ctx, plot);
        
    };
    
    Axis.prototype.set = function() {
        this.renderer.set.call(this);
    };
    
    Axis.prototype.pack = function(pos, offsets) {
        if (this.show) {
            this.renderer.pack.call(this, pos, offsets);
        }
        // these properties should all be available now.
        if (this._min == null) {
            this._min = this.min;
            this._max = this.max;
            this._tickInterval = this.tickInterval;
            this._numberTicks = this.numberTicks;
            this.__ticks = this._ticks;
        }
    };
    
    // reset the axis back to original values if it has been scaled, zoomed, etc.
    Axis.prototype.reset = function() {
        this.renderer.reset.call(this);
    };
    
    Axis.prototype.resetScale = function(opts) {
        $.extend(true, this, {min: null, max: null, numberTicks: null, tickInterval: null, _ticks: [], ticks: []}, opts);
        this.resetDataBounds();
    };
    
    Axis.prototype.resetDataBounds = function() {
        // Go through all the series attached to this axis and find
        // the min/max bounds for this axis.
        var db = this._dataBounds;
        db.min = null;
        db.max = null;
        var l, s, d;
        // check for when to force min 0 on bar series plots.
        var doforce = (this.show) ? true : false;
        for (var i=0; i<this._series.length; i++) {
            s = this._series[i];
            if (s.show || this.scaleToHiddenSeries) {
                d = s._plotData;
                if (s._type === 'line' && s.renderer.bands.show && this.name.charAt(0) !== 'x') {
                    d = [[0, s.renderer.bands._min], [1, s.renderer.bands._max]];
                }

                var minyidx = 1, maxyidx = 1;

                if (s._type != null && s._type == 'ohlc') {
                    minyidx = 3;
                    maxyidx = 2;
                }
                
                for (var j=0, l=d.length; j<l; j++) { 
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        if ((d[j][0] != null && d[j][0] < db.min) || db.min == null) {
                            db.min = d[j][0];
                        }
                        if ((d[j][0] != null && d[j][0] > db.max) || db.max == null) {
                            db.max = d[j][0];
                        }
                    }              
                    else {
                        if ((d[j][minyidx] != null && d[j][minyidx] < db.min) || db.min == null) {
                            db.min = d[j][minyidx];
                        }
                        if ((d[j][maxyidx] != null && d[j][maxyidx] > db.max) || db.max == null) {
                            db.max = d[j][maxyidx];
                        }
                    }              
                }

                // Hack to not pad out bottom of bar plots unless user has specified a padding.
                // every series will have a chance to set doforce to false.  once it is set to 
                // false, it cannot be reset to true.
                // If any series attached to axis is not a bar, wont force 0.
                if (doforce && s.renderer.constructor !== $.jqplot.BarRenderer) {
                    doforce = false;
                }

                else if (doforce && this._options.hasOwnProperty('forceTickAt0') && this._options.forceTickAt0 == false) {
                    doforce = false;
                }

                else if (doforce && s.renderer.constructor === $.jqplot.BarRenderer) {
                    if (s.barDirection == 'vertical' && this.name != 'xaxis' && this.name != 'x2axis') { 
                        if (this._options.pad != null || this._options.padMin != null) {
                            doforce = false;
                        }
                    }

                    else if (s.barDirection == 'horizontal' && (this.name == 'xaxis' || this.name == 'x2axis')) {
                        if (this._options.pad != null || this._options.padMin != null) {
                            doforce = false;
                        }
                    }

                }
            }
        }

        if (doforce && this.renderer.constructor === $.jqplot.LinearAxisRenderer && db.min >= 0) {
            this.padMin = 1.0;
            this.forceTickAt0 = true;
        }
    };

    /**
     * Class: Legend
     * Legend object.  Cannot be instantiated directly, but created
     * by the Plot object.  Legend properties can be set or overridden by the 
     * options passed in from the user.
     */
    function Legend(options) {
        $.jqplot.ElemContainer.call(this);
        // Group: Properties
        
        // prop: show
        // Wether to display the legend on the graph.
        this.show = false;
        // prop: location
        // Placement of the legend.  one of the compass directions: nw, n, ne, e, se, s, sw, w
        this.location = 'ne';
        // prop: labels
        // Array of labels to use.  By default the renderer will look for labels on the series.
        // Labels specified in this array will override labels specified on the series.
        this.labels = [];
        // prop: showLabels
        // true to show the label text on the  legend.
        this.showLabels = true;
        // prop: showSwatch
        // true to show the color swatches on the legend.
        this.showSwatches = true;
        // prop: placement
        // "insideGrid" places legend inside the grid area of the plot.
        // "outsideGrid" places the legend outside the grid but inside the plot container, 
        // shrinking the grid to accomodate the legend.
        // "inside" synonym for "insideGrid", 
        // "outside" places the legend ouside the grid area, but does not shrink the grid which
        // can cause the legend to overflow the plot container.
        this.placement = "insideGrid";
        // prop: xoffset
        // DEPRECATED.  Set the margins on the legend using the marginTop, marginLeft, etc. 
        // properties or via CSS margin styling of the .jqplot-table-legend class.
        this.xoffset = 0;
        // prop: yoffset
        // DEPRECATED.  Set the margins on the legend using the marginTop, marginLeft, etc. 
        // properties or via CSS margin styling of the .jqplot-table-legend class.
        this.yoffset = 0;
        // prop: border
        // css spec for the border around the legend box.
        this.border;
        // prop: background
        // css spec for the background of the legend box.
        this.background;
        // prop: textColor
        // css color spec for the legend text.
        this.textColor;
        // prop: fontFamily
        // css font-family spec for the legend text.
        this.fontFamily; 
        // prop: fontSize
        // css font-size spec for the legend text.
        this.fontSize ;
        // prop: rowSpacing
        // css padding-top spec for the rows in the legend.
        this.rowSpacing = '0.5em';
        // renderer
        // A class that will create a DOM object for the legend,
        // see <$.jqplot.TableLegendRenderer>.
        this.renderer = $.jqplot.TableLegendRenderer;
        // prop: rendererOptions
        // renderer specific options passed to the renderer.
        this.rendererOptions = {};
        // prop: predraw
        // Wether to draw the legend before the series or not.
        // Used with series specific legend renderers for pie, donut, mekko charts, etc.
        this.preDraw = false;
        // prop: marginTop
        // CSS margin for the legend DOM element. This will set an element 
        // CSS style for the margin which will override any style sheet setting.
        // The default will be taken from the stylesheet.
        this.marginTop = null;
        // prop: marginRight
        // CSS margin for the legend DOM element. This will set an element 
        // CSS style for the margin which will override any style sheet setting.
        // The default will be taken from the stylesheet.
        this.marginRight = null;
        // prop: marginBottom
        // CSS margin for the legend DOM element. This will set an element 
        // CSS style for the margin which will override any style sheet setting.
        // The default will be taken from the stylesheet.
        this.marginBottom = null;
        // prop: marginLeft
        // CSS margin for the legend DOM element. This will set an element 
        // CSS style for the margin which will override any style sheet setting.
        // The default will be taken from the stylesheet.
        this.marginLeft = null;
        // prop: escapeHtml
        // True to escape special characters with their html entity equivalents
        // in legend text.  "<" becomes &lt; and so on, so html tags are not rendered.
        this.escapeHtml = false;
        this._series = [];
        
        $.extend(true, this, options);
    }
    
    Legend.prototype = new $.jqplot.ElemContainer();
    Legend.prototype.constructor = Legend;
    
    Legend.prototype.setOptions = function(options) {
        $.extend(true, this, options);
        
        // Try to emulate deprecated behaviour
        // if user has specified xoffset or yoffset, copy these to
        // the margin properties.
        
        if (this.placement ==  'inside') {
            this.placement = 'insideGrid';
        }
        
        if (this.xoffset >0) {
            if (this.placement == 'insideGrid') {
                switch (this.location) {
                    case 'nw':
                    case 'w':
                    case 'sw':
                        if (this.marginLeft == null) {
                            this.marginLeft = this.xoffset + 'px';
                        }
                        this.marginRight = '0px';
                        break;
                    case 'ne':
                    case 'e':
                    case 'se':
                    default:
                        if (this.marginRight == null) {
                            this.marginRight = this.xoffset + 'px';
                        }
                        this.marginLeft = '0px';
                        break;
                }
            }
            else if (this.placement == 'outside') {
                switch (this.location) {
                    case 'nw':
                    case 'w':
                    case 'sw':
                        if (this.marginRight == null) {
                            this.marginRight = this.xoffset + 'px';
                        }
                        this.marginLeft = '0px';
                        break;
                    case 'ne':
                    case 'e':
                    case 'se':
                    default:
                        if (this.marginLeft == null) {
                            this.marginLeft = this.xoffset + 'px';
                        }
                        this.marginRight = '0px';
                        break;
                }
            }
            this.xoffset = 0;
        }
        
        if (this.yoffset >0) {
            if (this.placement == 'outside') {
                switch (this.location) {
                    case 'sw':
                    case 's':
                    case 'se':
                        if (this.marginTop == null) {
                            this.marginTop = this.yoffset + 'px';
                        }
                        this.marginBottom = '0px';
                        break;
                    case 'ne':
                    case 'n':
                    case 'nw':
                    default:
                        if (this.marginBottom == null) {
                            this.marginBottom = this.yoffset + 'px';
                        }
                        this.marginTop = '0px';
                        break;
                }
            }
            else if (this.placement == 'insideGrid') {
                switch (this.location) {
                    case 'sw':
                    case 's':
                    case 'se':
                        if (this.marginBottom == null) {
                            this.marginBottom = this.yoffset + 'px';
                        }
                        this.marginTop = '0px';
                        break;
                    case 'ne':
                    case 'n':
                    case 'nw':
                    default:
                        if (this.marginTop == null) {
                            this.marginTop = this.yoffset + 'px';
                        }
                        this.marginBottom = '0px';
                        break;
                }
            }
            this.yoffset = 0;
        }
        
        // TO-DO:
        // Handle case where offsets are < 0.
        //
    };
    
    Legend.prototype.init = function() {
        if ($.isFunction(this.renderer)) {
            this.renderer = new this.renderer();  
        }
        this.renderer.init.call(this, this.rendererOptions);
    };
    
    Legend.prototype.draw = function(offsets, plot) {
        for (var i=0; i<$.jqplot.preDrawLegendHooks.length; i++){
            $.jqplot.preDrawLegendHooks[i].call(this, offsets);
        }
        return this.renderer.draw.call(this, offsets, plot);
    };
    
    Legend.prototype.pack = function(offsets) {
        this.renderer.pack.call(this, offsets);
    };

    /**
     * Class: Title
     * Plot Title object.  Cannot be instantiated directly, but created
     * by the Plot object.  Title properties can be set or overridden by the 
     * options passed in from the user.
     * 
     * Parameters:
     * text - text of the title.
     */
    function Title(text) {
        $.jqplot.ElemContainer.call(this);
        // Group: Properties
        
        // prop: text
        // text of the title;
        this.text = text;
        // prop: show
        // whether or not to show the title
        this.show = true;
        // prop: fontFamily
        // css font-family spec for the text.
        this.fontFamily;
        // prop: fontSize
        // css font-size spec for the text.
        this.fontSize ;
        // prop: textAlign
        // css text-align spec for the text.
        this.textAlign;
        // prop: textColor
        // css color spec for the text.
        this.textColor;
        // prop: renderer
        // A class for creating a DOM element for the title,
        // see <$.jqplot.DivTitleRenderer>.
        this.renderer = $.jqplot.DivTitleRenderer;
        // prop: rendererOptions
        // renderer specific options passed to the renderer.
        this.rendererOptions = {};   
        // prop: escapeHtml
        // True to escape special characters with their html entity equivalents
        // in title text.  "<" becomes &lt; and so on, so html tags are not rendered.
        this.escapeHtml = false;
    }
    
    Title.prototype = new $.jqplot.ElemContainer();
    Title.prototype.constructor = Title;
    
    Title.prototype.init = function() {
        if ($.isFunction(this.renderer)) {
            this.renderer = new this.renderer();  
        }
        this.renderer.init.call(this, this.rendererOptions);
    };
    
    Title.prototype.draw = function(width) {
        return this.renderer.draw.call(this, width);
    };
    
    Title.prototype.pack = function() {
        this.renderer.pack.call(this);
    };


    /**
     * Class: Series
     * An individual data series object.  Cannot be instantiated directly, but created
     * by the Plot object.  Series properties can be set or overridden by the 
     * options passed in from the user.
     */
    function Series(options) {
        options = options || {};
        $.jqplot.ElemContainer.call(this);
        // Group: Properties
        // Properties will be assigned from a series array at the top level of the
        // options.  If you had two series and wanted to change the color and line
        // width of the first and set the second to use the secondary y axis with
        // no shadow and supply custom labels for each:
        // > {
        // >    series:[
        // >        {color: '#ff4466', lineWidth: 5, label:'good line'},
        // >        {yaxis: 'y2axis', shadow: false, label:'bad line'}
        // >    ]
        // > }

        // prop: show
        // whether or not to draw the series.
        this.show = true;
        // prop: xaxis
        // which x axis to use with this series, either 'xaxis' or 'x2axis'.
        this.xaxis = 'xaxis';
        this._xaxis;
        // prop: yaxis
        // which y axis to use with this series, either 'yaxis' or 'y2axis'.
        this.yaxis = 'yaxis';
        this._yaxis;
        this.gridBorderWidth = 2.0;
        // prop: renderer
        // A class of a renderer which will draw the series, 
        // see <$.jqplot.LineRenderer>.
        this.renderer = $.jqplot.LineRenderer;
        // prop: rendererOptions
        // Options to pass on to the renderer.
        this.rendererOptions = {};
        this.data = [];
        this.gridData = [];
        // prop: label
        // Line label to use in the legend.
        this.label = '';
        // prop: showLabel
        // true to show label for this series in the legend.
        this.showLabel = true;
        // prop: color
        // css color spec for the series
        this.color;
        // prop: negativeColor
        // css color spec used for filled (area) plots that are filled to zero and
        // the "useNegativeColors" option is true.
        this.negativeColor;
        // prop: lineWidth
        // width of the line in pixels.  May have different meanings depending on renderer.
        this.lineWidth = 2.5;
        // prop: lineJoin
        // Canvas lineJoin style between segments of series.
        this.lineJoin = 'round';
        // prop: lineCap
        // Canvas lineCap style at ends of line.
        this.lineCap = 'round';
        // prop: linePattern
        // line pattern 'dashed', 'dotted', 'solid', some combination
        // of '-' and '.' characters such as '.-.' or a numerical array like 
        // [draw, skip, draw, skip, ...] such as [1, 10] to draw a dotted line, 
        // [1, 10, 20, 10] to draw a dot-dash line, and so on.
        this.linePattern = 'solid';
        this.shadow = true;
        // prop: shadowAngle
        // Shadow angle in degrees
        this.shadowAngle = 45;
        // prop: shadowOffset
        // Shadow offset from line in pixels
        this.shadowOffset = 1.25;
        // prop: shadowDepth
        // Number of times shadow is stroked, each stroke offset shadowOffset from the last.
        this.shadowDepth = 3;
        // prop: shadowAlpha
        // Alpha channel transparency of shadow.  0 = transparent.
        this.shadowAlpha = '0.1';
        // prop: breakOnNull
        // Wether line segments should be be broken at null value.
        // False will join point on either side of line.
        this.breakOnNull = false;
        // prop: markerRenderer
        // A class of a renderer which will draw marker (e.g. circle, square, ...) at the data points,
        // see <$.jqplot.MarkerRenderer>.
        this.markerRenderer = $.jqplot.MarkerRenderer;
        // prop: markerOptions
        // renderer specific options to pass to the markerRenderer,
        // see <$.jqplot.MarkerRenderer>.
        this.markerOptions = {};
        // prop: showLine
        // whether to actually draw the line or not.  Series will still be renderered, even if no line is drawn.
        this.showLine = true;
        // prop: showMarker
        // whether or not to show the markers at the data points.
        this.showMarker = true;
        // prop: index
        // 0 based index of this series in the plot series array.
        this.index;
        // prop: fill
        // true or false, whether to fill under lines or in bars.
        // May not be implemented in all renderers.
        this.fill = false;
        // prop: fillColor
        // CSS color spec to use for fill under line.  Defaults to line color.
        this.fillColor;
        // prop: fillAlpha
        // Alpha transparency to apply to the fill under the line.
        // Use this to adjust alpha separate from fill color.
        this.fillAlpha;
        // prop: fillAndStroke
        // If true will stroke the line (with color this.color) as well as fill under it.
        // Applies only when fill is true.
        this.fillAndStroke = false;
        // prop: disableStack
        // true to not stack this series with other series in the plot.
        // To render properly, non-stacked series must come after any stacked series
        // in the plot's data series array.  So, the plot's data series array would look like:
        // > [stackedSeries1, stackedSeries2, ..., nonStackedSeries1, nonStackedSeries2, ...]
        // disableStack will put a gap in the stacking order of series, and subsequent
        // stacked series will not fill down through the non-stacked series and will
        // most likely not stack properly on top of the non-stacked series.
        this.disableStack = false;
        // _stack is set by the Plot if the plot is a stacked chart.
        // will stack lines or bars on top of one another to build a "mountain" style chart.
        // May not be implemented in all renderers.
        this._stack = false;
        // prop: neighborThreshold
        // how close or far (in pixels) the cursor must be from a point marker to detect the point.
        this.neighborThreshold = 4;
        // prop: fillToZero
        // true will force bar and filled series to fill toward zero on the fill Axis.
        this.fillToZero = false;
        // prop: fillToValue
        // fill a filled series to this value on the fill axis.
        // Works in conjunction with fillToZero, so that must be true.
        this.fillToValue = 0;
        // prop: fillAxis
        // Either 'x' or 'y'.  Which axis to fill the line toward if fillToZero is true.
        // 'y' means fill up/down to 0 on the y axis for this series.
        this.fillAxis = 'y';
        // prop: useNegativeColors
        // true to color negative values differently in filled and bar charts.
        this.useNegativeColors = true;
        this._stackData = [];
        // _plotData accounts for stacking.  If plots not stacked, _plotData and data are same.  If
        // stacked, _plotData is accumulation of stacking data.
        this._plotData = [];
        // _plotValues hold the individual x and y values that will be plotted for this series.
        this._plotValues = {x:[], y:[]};
        // statistics about the intervals between data points.  Used for auto scaling.
        this._intervals = {x:{}, y:{}};
        // data from the previous series, for stacked charts.
        this._prevPlotData = [];
        this._prevGridData = [];
        this._stackAxis = 'y';
        this._primaryAxis = '_xaxis';
        // give each series a canvas to draw on.  This should allow for redrawing speedups.
        this.canvas = new $.jqplot.GenericCanvas();
        this.shadowCanvas = new $.jqplot.GenericCanvas();
        this.plugins = {};
        // sum of y values in this series.
        this._sumy = 0;
        this._sumx = 0;
        this._type = '';
    }
    
    Series.prototype = new $.jqplot.ElemContainer();
    Series.prototype.constructor = Series;
    
    Series.prototype.init = function(index, gridbw, plot) {
        // weed out any null values in the data.
        this.index = index;
        this.gridBorderWidth = gridbw;
        var d = this.data;
        var temp = [], i, l;
        for (i=0, l=d.length; i<l; i++) {
            if (! this.breakOnNull) {
                if (d[i] == null || d[i][0] == null || d[i][1] == null) {
                    continue;
                }
                else {
                    temp.push(d[i]);
                }
            }
            else {
                // TODO: figure out what to do with null values
                // probably involve keeping nulls in data array
                // and then updating renderers to break line
                // when it hits null value.
                // For now, just keep value.
                temp.push(d[i]);
            }
        }
        this.data = temp;

        // parse the renderer options and apply default colors if not provided
        // Set color even if not shown, so series don't change colors when other
        // series on plot shown/hidden.
        if (!this.color) {
            this.color = plot.colorGenerator.get(this.index);
        }
        if (!this.negativeColor) {
            this.negativeColor = plot.negativeColorGenerator.get(this.index);
        }


        if (!this.fillColor) {
            this.fillColor = this.color;
        }
        if (this.fillAlpha) {
            var comp = $.jqplot.normalize2rgb(this.fillColor);
            var comp = $.jqplot.getColorComponents(comp);
            this.fillColor = 'rgba('+comp[0]+','+comp[1]+','+comp[2]+','+this.fillAlpha+')';
        }
        if ($.isFunction(this.renderer)) {
            this.renderer = new this.renderer();  
        }
        this.renderer.init.call(this, this.rendererOptions, plot);
        this.markerRenderer = new this.markerRenderer();
        if (!this.markerOptions.color) {
            this.markerOptions.color = this.color;
        }
        if (this.markerOptions.show == null) {
            this.markerOptions.show = this.showMarker;
        }
        this.showMarker = this.markerOptions.show;
        // the markerRenderer is called within its own scope, don't want to overwrite series options!!
        this.markerRenderer.init(this.markerOptions);
    };
    
    // data - optional data point array to draw using this series renderer
    // gridData - optional grid data point array to draw using this series renderer
    // stackData - array of cumulative data for stacked plots.
    Series.prototype.draw = function(sctx, opts, plot) {
        var options = (opts == undefined) ? {} : opts;
        sctx = (sctx == undefined) ? this.canvas._ctx : sctx;
        
        var j, data, gridData;
        
        // hooks get called even if series not shown
        // we don't clear canvas here, it would wipe out all other series as well.
        for (j=0; j<$.jqplot.preDrawSeriesHooks.length; j++) {
            $.jqplot.preDrawSeriesHooks[j].call(this, sctx, options);
        }
        if (this.show) {
            this.renderer.setGridData.call(this, plot);
            if (!options.preventJqPlotSeriesDrawTrigger) {
                $(sctx.canvas).trigger('jqplotSeriesDraw', [this.data, this.gridData]);
            }
            data = [];
            if (options.data) {
                data = options.data;
            }
            else if (!this._stack) {
                data = this.data;
            }
            else {
                data = this._plotData;
            }
            gridData = options.gridData || this.renderer.makeGridData.call(this, data, plot);

            if (this._type === 'line' && this.renderer.smooth && this.renderer._smoothedData.length) {
                gridData = this.renderer._smoothedData;
            }

            this.renderer.draw.call(this, sctx, gridData, options, plot);
        }
        
        for (j=0; j<$.jqplot.postDrawSeriesHooks.length; j++) {
            $.jqplot.postDrawSeriesHooks[j].call(this, sctx, options, plot);
        }
        
        sctx = opts = plot = j = data = gridData = null;
    };
    
    Series.prototype.drawShadow = function(sctx, opts, plot) {
        var options = (opts == undefined) ? {} : opts;
        sctx = (sctx == undefined) ? this.shadowCanvas._ctx : sctx;
        
        var j, data, gridData;
        
        // hooks get called even if series not shown
        // we don't clear canvas here, it would wipe out all other series as well.
        for (j=0; j<$.jqplot.preDrawSeriesShadowHooks.length; j++) {
            $.jqplot.preDrawSeriesShadowHooks[j].call(this, sctx, options);
        }
        if (this.shadow) {
            this.renderer.setGridData.call(this, plot);

            data = [];
            if (options.data) {
                data = options.data;
            }
            else if (!this._stack) {
                data = this.data;
            }
            else {
                data = this._plotData;
            }
            gridData = options.gridData || this.renderer.makeGridData.call(this, data, plot);
        
            this.renderer.drawShadow.call(this, sctx, gridData, options, plot);
        }
        
        for (j=0; j<$.jqplot.postDrawSeriesShadowHooks.length; j++) {
            $.jqplot.postDrawSeriesShadowHooks[j].call(this, sctx, options);
        }
        
        sctx = opts = plot = j = data = gridData = null;
        
    };
    
    // toggles series display on plot, e.g. show/hide series
    Series.prototype.toggleDisplay = function(ev, callback) {
        var s, speed;
        if (ev.data.series) {
            s = ev.data.series;
        }
        else {
            s = this;
        }

        if (ev.data.speed) {
            speed = ev.data.speed;
        }
        if (speed) {
            // this can be tricky because series may not have a canvas element if replotting.
            if (s.canvas._elem.is(':hidden') || !s.show) {
                s.show = true;

                s.canvas._elem.removeClass('jqplot-series-hidden');
                if (s.shadowCanvas._elem) {
                    s.shadowCanvas._elem.fadeIn(speed);
                }
                s.canvas._elem.fadeIn(speed, callback);
                s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).fadeIn(speed);
            }
            else {
                s.show = false;

                s.canvas._elem.addClass('jqplot-series-hidden');
                if (s.shadowCanvas._elem) {
                    s.shadowCanvas._elem.fadeOut(speed);
                }
                s.canvas._elem.fadeOut(speed, callback);
                s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).fadeOut(speed);
            }
        }
        else {
            // this can be tricky because series may not have a canvas element if replotting.
            if (s.canvas._elem.is(':hidden') || !s.show) {
                s.show = true;

                s.canvas._elem.removeClass('jqplot-series-hidden');
                if (s.shadowCanvas._elem) {
                    s.shadowCanvas._elem.show();
                }
                s.canvas._elem.show(0, callback);
                s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).show();
            }
            else {
                s.show = false;

                s.canvas._elem.addClass('jqplot-series-hidden');
                if (s.shadowCanvas._elem) {
                    s.shadowCanvas._elem.hide();
                }
                s.canvas._elem.hide(0, callback);
                s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).hide();
            }
        }
    };
    


    /**
     * Class: Grid
     * 
     * Object representing the grid on which the plot is drawn.  The grid in this
     * context is the area bounded by the axes, the area which will contain the series.
     * Note, the series are drawn on their own canvas.
     * The Grid object cannot be instantiated directly, but is created by the Plot object.  
     * Grid properties can be set or overridden by the options passed in from the user.
     */
    function Grid() {
        $.jqplot.ElemContainer.call(this);
        // Group: Properties
        
        // prop: drawGridlines
        // whether to draw the gridlines on the plot.
        this.drawGridlines = true;
        // prop: gridLineColor
        // color of the grid lines.
        this.gridLineColor = '#cccccc';
        // prop: gridLineWidth
        // width of the grid lines.
        this.gridLineWidth = 1.0;
        // prop: background
        // css spec for the background color.
        this.background = '#fffdf6';
        // prop: borderColor
        // css spec for the color of the grid border.
        this.borderColor = '#999999';
        // prop: borderWidth
        // width of the border in pixels.
        this.borderWidth = 2.0;
        // prop: drawBorder
        // True to draw border around grid.
        this.drawBorder = true;
        // prop: shadow
        // whether to show a shadow behind the grid.
        this.shadow = true;
        // prop: shadowAngle
        // shadow angle in degrees
        this.shadowAngle = 45;
        // prop: shadowOffset
        // Offset of each shadow stroke from the border in pixels
        this.shadowOffset = 1.5;
        // prop: shadowWidth
        // width of the stoke for the shadow
        this.shadowWidth = 3;
        // prop: shadowDepth
        // Number of times shadow is stroked, each stroke offset shadowOffset from the last.
        this.shadowDepth = 3;
        // prop: shadowColor
        // an optional css color spec for the shadow in 'rgba(n, n, n, n)' form
        this.shadowColor = null;
        // prop: shadowAlpha
        // Alpha channel transparency of shadow.  0 = transparent.
        this.shadowAlpha = '0.07';
        this._left;
        this._top;
        this._right;
        this._bottom;
        this._width;
        this._height;
        this._axes = [];
        // prop: renderer
        // Instance of a renderer which will actually render the grid,
        // see <$.jqplot.CanvasGridRenderer>.
        this.renderer = $.jqplot.CanvasGridRenderer;
        // prop: rendererOptions
        // Options to pass on to the renderer,
        // see <$.jqplot.CanvasGridRenderer>.
        this.rendererOptions = {};
        this._offsets = {top:null, bottom:null, left:null, right:null};
    }
    
    Grid.prototype = new $.jqplot.ElemContainer();
    Grid.prototype.constructor = Grid;
    
    Grid.prototype.init = function() {
        if ($.isFunction(this.renderer)) {
            this.renderer = new this.renderer();  
        }
        this.renderer.init.call(this, this.rendererOptions);
    };
    
    Grid.prototype.createElement = function(offsets,plot) {
        this._offsets = offsets;
        return this.renderer.createElement.call(this, plot);
    };
    
    Grid.prototype.draw = function() {
        this.renderer.draw.call(this);
    };
    
    $.jqplot.GenericCanvas = function() {
        $.jqplot.ElemContainer.call(this);
        this._ctx;  
    };
    
    $.jqplot.GenericCanvas.prototype = new $.jqplot.ElemContainer();
    $.jqplot.GenericCanvas.prototype.constructor = $.jqplot.GenericCanvas;
    
    $.jqplot.GenericCanvas.prototype.createElement = function(offsets, clss, plotDimensions, plot) {
        this._offsets = offsets;
        var klass = 'jqplot';
        if (clss != undefined) {
            klass = clss;
        }
        var elem;

        elem = plot.canvasManager.getCanvas();
        
        // if new plotDimensions supplied, use them.
        if (plotDimensions != null) {
            this._plotDimensions = plotDimensions;
        }
        
        elem.width = this._plotDimensions.width - this._offsets.left - this._offsets.right;
        elem.height = this._plotDimensions.height - this._offsets.top - this._offsets.bottom;
        this._elem = $(elem);
        this._elem.css({ position: 'absolute', left: this._offsets.left, top: this._offsets.top });
        
        this._elem.addClass(klass);
        
        elem = plot.canvasManager.initCanvas(elem);
        
        elem = null;
        return this._elem;
    };
    
    $.jqplot.GenericCanvas.prototype.setContext = function() {
        this._ctx = this._elem.get(0).getContext("2d");
        return this._ctx;
    };
    
    // Memory Leaks patch
    $.jqplot.GenericCanvas.prototype.resetCanvas = function() {
      if (this._elem) {
        if ($.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== undefined) {
           window.G_vmlCanvasManager.uninitElement(this._elem.get(0));
        }
        
        //this._elem.remove();
        this._elem.emptyForce();
      }
      
      this._ctx = null;
    };
    
    $.jqplot.HooksManager = function () {
        this.hooks =[];
        this.args = [];
    };
    
    $.jqplot.HooksManager.prototype.addOnce = function(fn, args) {
        args = args || [];
        var havehook = false;
        for (var i=0, l=this.hooks.length; i<l; i++) {
            if (this.hooks[i] == fn) {
                havehook = true;
            }
        }
        if (!havehook) {
            this.hooks.push(fn);
            this.args.push(args);
        }
    };
    
    $.jqplot.HooksManager.prototype.add = function(fn, args) {
        args = args || [];
        this.hooks.push(fn);
        this.args.push(args);
    };
    
    $.jqplot.EventListenerManager = function () {
        this.hooks =[];
    };
    
    $.jqplot.EventListenerManager.prototype.addOnce = function(ev, fn) {
        var havehook = false, h, i;
        for (var i=0, l=this.hooks.length; i<l; i++) {
            h = this.hooks[i];
            if (h[0] == ev && h[1] == fn) {
                havehook = true;
            }
        }
        if (!havehook) {
            this.hooks.push([ev, fn]);
        }
    };
    
    $.jqplot.EventListenerManager.prototype.add = function(ev, fn) {
        this.hooks.push([ev, fn]);
    };


    var _axisNames = ['yMidAxis', 'xaxis', 'yaxis', 'x2axis', 'y2axis', 'y3axis', 'y4axis', 'y5axis', 'y6axis', 'y7axis', 'y8axis', 'y9axis'];

    /**
     * Class: jqPlot
     * Plot object returned by call to $.jqplot.  Handles parsing user options,
     * creating sub objects (Axes, legend, title, series) and rendering the plot.
     */
    function jqPlot() {
        // Group: Properties
        // These properties are specified at the top of the options object
        // like so:
        // > {
        // >     axesDefaults:{min:0},
        // >     series:[{color:'#6633dd'}],
        // >     title: 'A Plot'
        // > }
        //

        // prop: animate
        // True to animate the series on initial plot draw (renderer dependent).
        // Actual animation functionality must be supported in the renderer.
        this.animate = false;
        // prop: animateReplot
        // True to animate series after a call to the replot() method.
        // Use with caution!  Replots can happen very frequently under
        // certain circumstances (e.g. resizing, dragging points) and
        // animation in these situations can cause problems.
        this.animateReplot = false;
        // prop: axes
        // up to 4 axes are supported, each with its own options, 
        // See <Axis> for axis specific options.
        this.axes = {xaxis: new Axis('xaxis'), yaxis: new Axis('yaxis'), x2axis: new Axis('x2axis'), y2axis: new Axis('y2axis'), y3axis: new Axis('y3axis'), y4axis: new Axis('y4axis'), y5axis: new Axis('y5axis'), y6axis: new Axis('y6axis'), y7axis: new Axis('y7axis'), y8axis: new Axis('y8axis'), y9axis: new Axis('y9axis'), yMidAxis: new Axis('yMidAxis')};
        this.baseCanvas = new $.jqplot.GenericCanvas();
        // true to intercept right click events and fire a 'jqplotRightClick' event.
        // this will also block the context menu.
        this.captureRightClick = false;
        // prop: data
        // user's data.  Data should *NOT* be specified in the options object,
        // but be passed in as the second argument to the $.jqplot() function.
        // The data property is described here soley for reference. 
        // The data should be in the form of an array of 2D or 1D arrays like
        // > [ [[x1, y1], [x2, y2],...], [y1, y2, ...] ].
        this.data = [];
        // prop: dataRenderer
        // A callable which can be used to preprocess data passed into the plot.
        // Will be called with 3 arguments: the plot data, a reference to the plot,
        // and the value of dataRendererOptions.
        this.dataRenderer;
        // prop: dataRendererOptions
        // Options that will be passed to the dataRenderer.
        // Can be of any type.
        this.dataRendererOptions;
        this.defaults = {
            // prop: axesDefaults
            // default options that will be applied to all axes.
            // see <Axis> for axes options.
            axesDefaults: {},
            axes: {xaxis:{}, yaxis:{}, x2axis:{}, y2axis:{}, y3axis:{}, y4axis:{}, y5axis:{}, y6axis:{}, y7axis:{}, y8axis:{}, y9axis:{}, yMidAxis:{}},
            // prop: seriesDefaults
            // default options that will be applied to all series.
            // see <Series> for series options.
            seriesDefaults: {},
            series:[]
        };
        // prop: defaultAxisStart
        // 1-D data series are internally converted into 2-D [x,y] data point arrays
        // by jqPlot.  This is the default starting value for the missing x or y value.
        // The added data will be a monotonically increasing series (e.g. [1, 2, 3, ...])
        // starting at this value.
        this.defaultAxisStart = 1;
        // this.doCustomEventBinding = true;
        // prop: drawIfHidden
        // True to execute the draw method even if the plot target is hidden.
        // Generally, this should be false.  Most plot elements will not be sized/
        // positioned correclty if renderered into a hidden container.  To render into
        // a hidden container, call the replot method when the container is shown.
        this.drawIfHidden = false;
        this.eventCanvas = new $.jqplot.GenericCanvas();
        // prop: fillBetween
        // Fill between 2 line series in a plot.
        // Options object:
        // {
        //    series1: first index (0 based) of series in fill
        //    series2: second index (0 based) of series in fill
        //    color: color of fill [default fillColor of series1]
        //    baseSeries:  fill will be drawn below this series (0 based index)
        //    fill: false to turn off fill [default true].
        //  }
        this.fillBetween = {
            series1: null,
            series2: null,
            color: null,
            baseSeries: 0,
            fill: true
        };
        // prop; fontFamily
        // css spec for the font-family attribute.  Default for the entire plot.
        this.fontFamily;
        // prop: fontSize
        // css spec for the font-size attribute.  Default for the entire plot.
        this.fontSize;
        // prop: grid
        // See <Grid> for grid specific options.
        this.grid = new Grid();
        // prop: legend
        // see <$.jqplot.TableLegendRenderer>
        this.legend = new Legend();
        // prop: noDataIndicator
        // Options to set up a mock plot with a data loading indicator if no data is specified.
        this.noDataIndicator = {    
            show: false,
            indicator: 'Loading Data...',
            axes: {
                xaxis: {
                    min: 0,
                    max: 10,
                    tickInterval: 2,
                    show: true
                },
                yaxis: {
                    min: 0,
                    max: 12,
                    tickInterval: 3,
                    show: true
                }
            }
        };
        // prop: negativeSeriesColors 
        // colors to use for portions of the line below zero.
        this.negativeSeriesColors = $.jqplot.config.defaultNegativeColors;
        // container to hold all of the merged options.  Convienence for plugins.
        this.options = {};
        this.previousSeriesStack = [];
        // Namespace to hold plugins.  Generally non-renderer plugins add themselves to here.
        this.plugins = {};
        // prop: series
        // Array of series object options.
        // see <Series> for series specific options.
        this.series = [];
        // array of series indices. Keep track of order
        // which series canvases are displayed, lowest
        // to highest, back to front.
        this.seriesStack = [];
        // prop: seriesColors
        // Ann array of CSS color specifications that will be applied, in order,
        // to the series in the plot.  Colors will wrap around so, if their
        // are more series than colors, colors will be reused starting at the
        // beginning.  For pie charts, this specifies the colors of the slices.
        this.seriesColors = $.jqplot.config.defaultColors;
        // prop: sortData
        // false to not sort the data passed in by the user.
        // Many bar, stacked and other graphs as well as many plugins depend on
        // having sorted data.
        this.sortData = true;
        // prop: stackSeries
        // true or false, creates a stack or "mountain" plot.
        // Not all series renderers may implement this option.
        this.stackSeries = false;
        // a shortcut for axis syncTicks options.  Not implemented yet.
        this.syncXTicks = true;
        // a shortcut for axis syncTicks options.  Not implemented yet.
        this.syncYTicks = true;
        // the jquery object for the dom target.
        this.target = null; 
        // The id of the dom element to render the plot into
        this.targetId = null;
        // prop textColor
        // css spec for the css color attribute.  Default for the entire plot.
        this.textColor;
        // prop: title
        // Title object.  See <Title> for specific options.  As a shortcut, you
        // can specify the title option as just a string like: title: 'My Plot'
        // and this will create a new title object with the specified text.
        this.title = new Title();
        // Count how many times the draw method has been called while the plot is visible.
        // Mostly used to test if plot has never been dran (=0), has been successfully drawn
        // into a visible container once (=1) or draw more than once into a visible container.
        // Can use this in tests to see if plot has been visibly drawn at least one time.
        // After plot has been visibly drawn once, it generally doesn't need redrawing if its
        // container is hidden and shown.
        this._drawCount = 0;
        // sum of y values for all series in plot.
        // used in mekko chart.
        this._sumy = 0;
        this._sumx = 0;
        // array to hold the cumulative stacked series data.
        // used to ajust the individual series data, which won't have access to other
        // series data.
        this._stackData = [];
        // array that holds the data to be plotted. This will be the series data
        // merged with the the appropriate data from _stackData according to the stackAxis.
        this._plotData = [];
        this._width = null;
        this._height = null; 
        this._plotDimensions = {height:null, width:null};
        this._gridPadding = {top:null, right:null, bottom:null, left:null};
        this._defaultGridPadding = {top:10, right:10, bottom:23, left:10};

        this._addDomReference = $.jqplot.config.addDomReference;

        this.preInitHooks = new $.jqplot.HooksManager();
        this.postInitHooks = new $.jqplot.HooksManager();
        this.preParseOptionsHooks = new $.jqplot.HooksManager();
        this.postParseOptionsHooks = new $.jqplot.HooksManager();
        this.preDrawHooks = new $.jqplot.HooksManager();
        this.postDrawHooks = new $.jqplot.HooksManager();
        this.preDrawSeriesHooks = new $.jqplot.HooksManager();
        this.postDrawSeriesHooks = new $.jqplot.HooksManager();
        this.preDrawLegendHooks = new $.jqplot.HooksManager();
        this.addLegendRowHooks = new $.jqplot.HooksManager();
        this.preSeriesInitHooks = new $.jqplot.HooksManager();
        this.postSeriesInitHooks = new $.jqplot.HooksManager();
        this.preParseSeriesOptionsHooks = new $.jqplot.HooksManager();
        this.postParseSeriesOptionsHooks = new $.jqplot.HooksManager();
        this.eventListenerHooks = new $.jqplot.EventListenerManager();
        this.preDrawSeriesShadowHooks = new $.jqplot.HooksManager();
        this.postDrawSeriesShadowHooks = new $.jqplot.HooksManager();
        
        this.colorGenerator = new $.jqplot.ColorGenerator();
        this.negativeColorGenerator = new $.jqplot.ColorGenerator();

        this.canvasManager = new $.jqplot.CanvasManager();

        this.themeEngine = new $.jqplot.ThemeEngine();
        
        var seriesColorsIndex = 0;

        // Group: methods
        //
        // method: init
        // sets the plot target, checks data and applies user
        // options to plot.
        this.init = function(target, data, options) {
            options = options || {};
            for (var i=0; i<$.jqplot.preInitHooks.length; i++) {
                $.jqplot.preInitHooks[i].call(this, target, data, options);
            }

            for (var i=0; i<this.preInitHooks.hooks.length; i++) {
                this.preInitHooks.hooks[i].call(this, target, data, options);
            }
            
            this.targetId = '#'+target;
            this.target = $('#'+target);

            //////
            // Add a reference to plot
            //////
            if (this._addDomReference) {
                this.target.data('jqplot', this);
            }
            // remove any error class that may be stuck on target.
            this.target.removeClass('jqplot-error');
            if (!this.target.get(0)) {
                throw new Error("No plot target specified");
            }
            
            // make sure the target is positioned by some means and set css
            if (this.target.css('position') == 'static') {
                this.target.css('position', 'relative');
            }
            if (!this.target.hasClass('jqplot-target')) {
                this.target.addClass('jqplot-target');
            }
            
            // if no height or width specified, use a default.
            if (!this.target.height()) {
                var h;
                if (options && options.height) {
                    h = parseInt(options.height, 10);
                }
                else if (this.target.attr('data-height')) {
                    h = parseInt(this.target.attr('data-height'), 10);
                }
                else {
                    h = parseInt($.jqplot.config.defaultHeight, 10);
                }
                this._height = h;
                this.target.css('height', h+'px');
            }
            else {
                this._height = h = this.target.height();
            }
            if (!this.target.width()) {
                var w;
                if (options && options.width) {
                    w = parseInt(options.width, 10);
                }
                else if (this.target.attr('data-width')) {
                    w = parseInt(this.target.attr('data-width'), 10);
                }
                else {
                    w = parseInt($.jqplot.config.defaultWidth, 10);
                }
                this._width = w;
                this.target.css('width', w+'px');
            }
            else {
                this._width = w = this.target.width();
            }

            for (var i=0, l=_axisNames.length; i<l; i++) {
                this.axes[_axisNames[i]] = new Axis(_axisNames[i]);
            }
            
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            if (this._height <=0 || this._width <=0 || !this._height || !this._width) {
                throw new Error("Canvas dimension not set");
            }
            
            if (options.dataRenderer && $.isFunction(options.dataRenderer)) {
                if (options.dataRendererOptions) {
                    this.dataRendererOptions = options.dataRendererOptions;
                }
                this.dataRenderer = options.dataRenderer;
                data = this.dataRenderer(data, this, this.dataRendererOptions);
            }
            
            if (options.noDataIndicator && $.isPlainObject(options.noDataIndicator)) {
                $.extend(true, this.noDataIndicator, options.noDataIndicator);
            }
            
            if (data == null || $.isArray(data) == false || data.length == 0 || $.isArray(data[0]) == false || data[0].length == 0) {
                
                if (this.noDataIndicator.show == false) {
                    throw new Error("No data specified");
                }
                
                else {
                    // have to be descructive here in order for plot to not try and render series.
                    // This means that $.jqplot() will have to be called again when there is data.
                    //delete options.series;
                    
                    for (var ax in this.noDataIndicator.axes) {
                        for (var prop in this.noDataIndicator.axes[ax]) {
                            this.axes[ax][prop] = this.noDataIndicator.axes[ax][prop];
                        }
                    }
                    
                    this.postDrawHooks.add(function() {
                        var eh = this.eventCanvas.getHeight();
                        var ew = this.eventCanvas.getWidth();
                        var temp = $('<div class="jqplot-noData-container" style="position:absolute;"></div>');
                        this.target.append(temp);
                        temp.height(eh);
                        temp.width(ew);
                        temp.css('top', this.eventCanvas._offsets.top);
                        temp.css('left', this.eventCanvas._offsets.left);
                        
                        var temp2 = $('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');
                        temp.append(temp2);
                        temp2.html(this.noDataIndicator.indicator);
                        var th = temp2.height();
                        var tw = temp2.width();
                        temp2.height(th);
                        temp2.width(tw);
                        temp2.css('top', (eh - th)/2 + 'px');
                    });

                }
            }
            
            // make a copy of the data
            this.data = $.extend(true, [], data);
            
            this.parseOptions(options);
            
            if (this.textColor) {
                this.target.css('color', this.textColor);
            }
            if (this.fontFamily) {
                this.target.css('font-family', this.fontFamily);
            }
            if (this.fontSize) {
                this.target.css('font-size', this.fontSize);
            }
            
            this.title.init();
            this.legend.init();
            this._sumy = 0;
            this._sumx = 0;
            this.computePlotData();
            for (var i=0; i<this.series.length; i++) {
                // set default stacking order for series canvases
                this.seriesStack.push(i);
                this.previousSeriesStack.push(i);
                this.series[i].shadowCanvas._plotDimensions = this._plotDimensions;
                this.series[i].canvas._plotDimensions = this._plotDimensions;
                for (var j=0; j<$.jqplot.preSeriesInitHooks.length; j++) {
                    $.jqplot.preSeriesInitHooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                for (var j=0; j<this.preSeriesInitHooks.hooks.length; j++) {
                    this.preSeriesInitHooks.hooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                // this.populatePlotData(this.series[i], i);
                this.series[i]._plotDimensions = this._plotDimensions;
                this.series[i].init(i, this.grid.borderWidth, this);
                for (var j=0; j<$.jqplot.postSeriesInitHooks.length; j++) {
                    $.jqplot.postSeriesInitHooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                for (var j=0; j<this.postSeriesInitHooks.hooks.length; j++) {
                    this.postSeriesInitHooks.hooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                this._sumy += this.series[i]._sumy;
                this._sumx += this.series[i]._sumx;
            }

            var name,
                axis;
            for (var i=0, l=_axisNames.length; i<l; i++) {
                name = _axisNames[i];
                axis = this.axes[name];
                axis._plotDimensions = this._plotDimensions;
                axis.init();
                if (this.axes[name].borderColor == null) {
                    if (name.charAt(0) !== 'x' && axis.useSeriesColor === true && axis.show) {
                        axis.borderColor = axis._series[0].color;
                    }
                    else {
                        axis.borderColor = this.grid.borderColor;
                    }
                }
            }
            
            if (this.sortData) {
                sortData(this.series);
            }
            this.grid.init();
            this.grid._axes = this.axes;
            
            this.legend._series = this.series;

            for (var i=0; i<$.jqplot.postInitHooks.length; i++) {
                $.jqplot.postInitHooks[i].call(this, target, this.data, options);
            }

            for (var i=0; i<this.postInitHooks.hooks.length; i++) {
                this.postInitHooks.hooks[i].call(this, target, this.data, options);
            }
        };  
        
        // method: resetAxesScale
        // Reset the specified axes min, max, numberTicks and tickInterval properties to null
        // or reset these properties on all axes if no list of axes is provided.
        //
        // Parameters:
        // axes - Boolean to reset or not reset all axes or an array or object of axis names to reset.
        this.resetAxesScale = function(axes, options) {
            var opts = options || {};
            var ax = axes || this.axes;
            if (ax === true) {
                ax = this.axes;
            }
            if ($.isArray(ax)) {
                for (var i = 0; i < ax.length; i++) {
                    this.axes[ax[i]].resetScale(opts[ax[i]]);
                }
            }
            else if (typeof(ax) === 'object') {
                for (var name in ax) {
                    this.axes[name].resetScale(opts[name]);
                }
            }
        };
        // method: reInitialize
        // reinitialize plot for replotting.
        // not called directly.
        this.reInitialize = function (data, opts) {
            // Plot should be visible and have a height and width.
            // If plot doesn't have height and width for some
            // reason, set it by other means.  Plot must not have
            // a display:none attribute, however.

            var options = $.extend(true, {}, this.options, opts);

            var target = this.targetId.substr(1);
            var tdata = (data == null) ? this.data : data;

            for (var i=0; i<$.jqplot.preInitHooks.length; i++) {
                $.jqplot.preInitHooks[i].call(this, target, tdata, options);
            }

            for (var i=0; i<this.preInitHooks.hooks.length; i++) {
                this.preInitHooks.hooks[i].call(this, target, tdata, options);
            }
            
            this._height = this.target.height();
            this._width = this.target.width();
            
            if (this._height <=0 || this._width <=0 || !this._height || !this._width) {
                throw new Error("Target dimension not set");
            }
            
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;

            var name,
                t, 
                j, 
                axis;

            for (var i=0, l=_axisNames.length; i<l; i++) {
                name = _axisNames[i];
                axis = this.axes[name];

                // Memory Leaks patch : clear ticks elements
                t = axis._ticks;
                for (var j = 0, tlen = t.length; j < tlen; j++) {
                  var el = t[j]._elem;
                  if (el) {
                    // if canvas renderer
                    if ($.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== undefined) {
                      window.G_vmlCanvasManager.uninitElement(el.get(0));
                    }
                    el.emptyForce();
                    el = null;
                    t._elem = null;
                  }
                }
                t = null;

                delete axis.ticks;
                delete axis._ticks;
                this.axes[name] = new Axis(name);
                this.axes[name]._plotWidth = this._width;
                this.axes[name]._plotHeight = this._height;
            }
            
            if (data) {
                if (options.dataRenderer && $.isFunction(options.dataRenderer)) {
                    if (options.dataRendererOptions) {
                        this.dataRendererOptions = options.dataRendererOptions;
                    }
                    this.dataRenderer = options.dataRenderer;
                    data = this.dataRenderer(data, this, this.dataRendererOptions);
                }
                
                // make a copy of the data
                this.data = $.extend(true, [], data);
            }

            if (opts) {
                this.parseOptions(options);
            }
            
            this.title._plotWidth = this._width;
            
            if (this.textColor) {
                this.target.css('color', this.textColor);
            }
            if (this.fontFamily) {
                this.target.css('font-family', this.fontFamily);
            }
            if (this.fontSize) {
                this.target.css('font-size', this.fontSize);
            }

            this.title.init();
            this.legend.init();
            this._sumy = 0;
            this._sumx = 0;

            this.seriesStack = [];
            this.previousSeriesStack = [];

            this.computePlotData();
            for (var i=0, l=this.series.length; i<l; i++) {
                // set default stacking order for series canvases
                this.seriesStack.push(i);
                this.previousSeriesStack.push(i);
                this.series[i].shadowCanvas._plotDimensions = this._plotDimensions;
                this.series[i].canvas._plotDimensions = this._plotDimensions;
                for (var j=0; j<$.jqplot.preSeriesInitHooks.length; j++) {
                    $.jqplot.preSeriesInitHooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                for (var j=0; j<this.preSeriesInitHooks.hooks.length; j++) {
                    this.preSeriesInitHooks.hooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                // this.populatePlotData(this.series[i], i);
                this.series[i]._plotDimensions = this._plotDimensions;
                this.series[i].init(i, this.grid.borderWidth, this);
                for (var j=0; j<$.jqplot.postSeriesInitHooks.length; j++) {
                    $.jqplot.postSeriesInitHooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                for (var j=0; j<this.postSeriesInitHooks.hooks.length; j++) {
                    this.postSeriesInitHooks.hooks[j].call(this.series[i], target, this.data, this.options.seriesDefaults, this.options.series[i], this);
                }
                this._sumy += this.series[i]._sumy;
                this._sumx += this.series[i]._sumx;
            }

            for (var i=0, l=_axisNames.length; i<l; i++) {
                name = _axisNames[i];
                axis = this.axes[name];

                axis._plotDimensions = this._plotDimensions;
                axis.init();
                if (axis.borderColor == null) {
                    if (name.charAt(0) !== 'x' && axis.useSeriesColor === true && axis.show) {
                        axis.borderColor = axis._series[0].color;
                    }
                    else {
                        axis.borderColor = this.grid.borderColor;
                    }
                }
            }
            
            if (this.sortData) {
                sortData(this.series);
            }
            this.grid.init();
            this.grid._axes = this.axes;
            
            this.legend._series = this.series;

            for (var i=0, l=$.jqplot.postInitHooks.length; i<l; i++) {
                $.jqplot.postInitHooks[i].call(this, target, this.data, options);
            }

            for (var i=0, l=this.postInitHooks.hooks.length; i<l; i++) {
                this.postInitHooks.hooks[i].call(this, target, this.data, options);
            }
        };



        // method: quickInit
        // 
        // Quick reinitialization plot for replotting.
        // Does not parse options ore recreate axes and series.
        // not called directly.
        this.quickInit = function () {
            // Plot should be visible and have a height and width.
            // If plot doesn't have height and width for some
            // reason, set it by other means.  Plot must not have
            // a display:none attribute, however.
            
            this._height = this.target.height();
            this._width = this.target.width();
            
            if (this._height <=0 || this._width <=0 || !this._height || !this._width) {
                throw new Error("Target dimension not set");
            }
            
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            
            for (var n in this.axes) {
                this.axes[n]._plotWidth = this._width;
                this.axes[n]._plotHeight = this._height;
            }
            
            this.title._plotWidth = this._width;
            
            if (this.textColor) {
                this.target.css('color', this.textColor);
            }
            if (this.fontFamily) {
                this.target.css('font-family', this.fontFamily);
            }
            if (this.fontSize) {
                this.target.css('font-size', this.fontSize);
            }
            
            this._sumy = 0;
            this._sumx = 0;
            this.computePlotData();
            for (var i=0; i<this.series.length; i++) {
                // this.populatePlotData(this.series[i], i);
                if (this.series[i]._type === 'line' && this.series[i].renderer.bands.show) {
                    this.series[i].renderer.initBands.call(this.series[i], this.series[i].renderer.options, this);
                }
                this.series[i]._plotDimensions = this._plotDimensions;
                this.series[i].canvas._plotDimensions = this._plotDimensions;
                //this.series[i].init(i, this.grid.borderWidth);
                this._sumy += this.series[i]._sumy;
                this._sumx += this.series[i]._sumx;
            }

            var name;
            
            for (var j=0; j<12; j++) {
                name = _axisNames[j];
                // Memory Leaks patch : clear ticks elements
                var t = this.axes[name]._ticks;
                for (var i = 0; i < t.length; i++) {
                  var el = t[i]._elem;
                  if (el) {
                    // if canvas renderer
                    if ($.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== undefined) {
                      window.G_vmlCanvasManager.uninitElement(el.get(0));
                    }
                    el.emptyForce();
                    el = null;
                    t._elem = null;
                  }
                }
                t = null;
                
                this.axes[name]._plotDimensions = this._plotDimensions;
                this.axes[name]._ticks = [];
                // this.axes[name].renderer.init.call(this.axes[name], {});
            }
            
            if (this.sortData) {
                sortData(this.series);
            }
            
            this.grid._axes = this.axes;
            
            this.legend._series = this.series;
        };
        
        // sort the series data in increasing order.
        function sortData(series) {
            var d, sd, pd, ppd, ret;
            for (var i=0; i<series.length; i++) {
                var check;
                var bat = [series[i].data, series[i]._stackData, series[i]._plotData, series[i]._prevPlotData];
                for (var n=0; n<4; n++) {
                    check = true;
                    d = bat[n];
                    if (series[i]._stackAxis == 'x') {
                        for (var j = 0; j < d.length; j++) {
                            if (typeof(d[j][1]) != "number") {
                                check = false;
                                break;
                            }
                        }
                        if (check) {
                            d.sort(function(a,b) { return a[1] - b[1]; });
                        }
                    }
                    else {
                        for (var j = 0; j < d.length; j++) {
                            if (typeof(d[j][0]) != "number") {
                                check = false;
                                break;
                            }
                        }
                        if (check) {
                            d.sort(function(a,b) { return a[0] - b[0]; });
                        }
                    }
                }
               
            }
        }

        this.computePlotData = function() {
            this._plotData = [];
            this._stackData = [];
            var series,
                index,
                l;


            for (index=0, l=this.series.length; index<l; index++) {
                series = this.series[index];
                this._plotData.push([]);
                this._stackData.push([]);
                var cd = series.data;
                this._plotData[index] = $.extend(true, [], cd);
                this._stackData[index] = $.extend(true, [], cd);
                series._plotData = this._plotData[index];
                series._stackData = this._stackData[index];
                var plotValues = {x:[], y:[]};

                if (this.stackSeries && !series.disableStack) {
                    series._stack = true;
                    ///////////////////////////
                    // have to check for nulls
                    ///////////////////////////
                    var sidx = (series._stackAxis === 'x') ? 0 : 1;

                    for (var k=0, cdl=cd.length; k<cdl; k++) {
                        var temp = cd[k][sidx];
                        if (temp == null) {
                            temp = 0;
                        }
                        this._plotData[index][k][sidx] = temp;
                        this._stackData[index][k][sidx] = temp;

                        if (index > 0) {
                            for (var j=index; j--;) {
                                var prevval = this._plotData[j][k][sidx];
                                // only need to sum up the stack axis column of data
                                // and only sum if it is of same sign.
                                // if previous series isn't same sign, keep looking
                                // at earlier series untill we find one of same sign.
                                if (temp * prevval >= 0) {
                                    this._plotData[index][k][sidx] += prevval;
                                    this._stackData[index][k][sidx] += prevval;
                                    break;
                                } 
                            }
                        }
                    }

                }
                else {
                    for (var i=0; i<series.data.length; i++) {
                        plotValues.x.push(series.data[i][0]);
                        plotValues.y.push(series.data[i][1]);
                    }
                    this._stackData.push(series.data);
                    this.series[index]._stackData = series.data;
                    this._plotData.push(series.data);
                    series._plotData = series.data;
                    series._plotValues = plotValues;
                }
                if (index>0) {
                    series._prevPlotData = this.series[index-1]._plotData;
                }
                series._sumy = 0;
                series._sumx = 0;
                for (i=series.data.length-1; i>-1; i--) {
                    series._sumy += series.data[i][1];
                    series._sumx += series.data[i][0];
                }
            }

        };
        
        // populate the _stackData and _plotData arrays for the plot and the series.
        this.populatePlotData = function(series, index) {
            // if a stacked chart, compute the stacked data
            this._plotData = [];
            this._stackData = [];
            series._stackData = [];
            series._plotData = [];
            var plotValues = {x:[], y:[]};
            if (this.stackSeries && !series.disableStack) {
                series._stack = true;
                var sidx = (series._stackAxis === 'x') ? 0 : 1;
                // var idx = sidx ? 0 : 1;
                // push the current data into stackData
                //this._stackData.push(this.series[i].data);
                var temp = $.extend(true, [], series.data);
                // create the data that will be plotted for this series
                var plotdata = $.extend(true, [], series.data);
                var tempx, tempy, dval, stackval, comparator;
                // for first series, nothing to add to stackData.
                for (var j=0; j<index; j++) {
                    var cd = this.series[j].data;
                    for (var k=0; k<cd.length; k++) {
                        dval = cd[k];
                        tempx = (dval[0] != null) ? dval[0] : 0;
                        tempy = (dval[1] != null) ? dval[1] : 0;
                        temp[k][0] += tempx;
                        temp[k][1] += tempy;
                        stackval = (sidx) ? tempy : tempx;
                        // only need to sum up the stack axis column of data
                        // and only sum if it is of same sign.
                        if (series.data[k][sidx] * stackval >= 0) {
                            plotdata[k][sidx] += stackval;
                        }
                    }
                }
                for (var i=0; i<plotdata.length; i++) {
                    plotValues.x.push(plotdata[i][0]);
                    plotValues.y.push(plotdata[i][1]);
                }
                this._plotData.push(plotdata);
                this._stackData.push(temp);
                series._stackData = temp;
                series._plotData = plotdata;
                series._plotValues = plotValues;
            }
            else {
                for (var i=0; i<series.data.length; i++) {
                    plotValues.x.push(series.data[i][0]);
                    plotValues.y.push(series.data[i][1]);
                }
                this._stackData.push(series.data);
                this.series[index]._stackData = series.data;
                this._plotData.push(series.data);
                series._plotData = series.data;
                series._plotValues = plotValues;
            }
            if (index>0) {
                series._prevPlotData = this.series[index-1]._plotData;
            }
            series._sumy = 0;
            series._sumx = 0;
            for (i=series.data.length-1; i>-1; i--) {
                series._sumy += series.data[i][1];
                series._sumx += series.data[i][0];
            }
        };
        
        // function to safely return colors from the color array and wrap around at the end.
        this.getNextSeriesColor = (function(t) {
            var idx = 0;
            var sc = t.seriesColors;
            
            return function () { 
                if (idx < sc.length) {
                    return sc[idx++];
                }
                else {
                    idx = 0;
                    return sc[idx++];
                }
            };
        })(this);
    
        this.parseOptions = function(options){
            for (var i=0; i<this.preParseOptionsHooks.hooks.length; i++) {
                this.preParseOptionsHooks.hooks[i].call(this, options);
            }
            for (var i=0; i<$.jqplot.preParseOptionsHooks.length; i++) {
                $.jqplot.preParseOptionsHooks[i].call(this, options);
            }
            this.options = $.extend(true, {}, this.defaults, options);
            var opts = this.options;
            this.animate = opts.animate;
            this.animateReplot = opts.animateReplot;
            this.stackSeries = opts.stackSeries;
            if ($.isPlainObject(opts.fillBetween)) {

                var temp = ['series1', 'series2', 'color', 'baseSeries', 'fill'], 
                    tempi;

                for (var i=0, l=temp.length; i<l; i++) {
                    tempi = temp[i];
                    if (opts.fillBetween[tempi] != null) {
                        this.fillBetween[tempi] = opts.fillBetween[tempi];
                    }
                }
            }

            if (opts.seriesColors) {
                this.seriesColors = opts.seriesColors;
            }
            if (opts.negativeSeriesColors) {
                this.negativeSeriesColors = opts.negativeSeriesColors;
            }
            if (opts.captureRightClick) {
                this.captureRightClick = opts.captureRightClick;
            }
            this.defaultAxisStart = (options && options.defaultAxisStart != null) ? options.defaultAxisStart : this.defaultAxisStart;
            this.colorGenerator.setColors(this.seriesColors);
            this.negativeColorGenerator.setColors(this.negativeSeriesColors);
            // var cg = new this.colorGenerator(this.seriesColors);
            // var ncg = new this.colorGenerator(this.negativeSeriesColors);
            // this._gridPadding = this.options.gridPadding;
            $.extend(true, this._gridPadding, opts.gridPadding);
            this.sortData = (opts.sortData != null) ? opts.sortData : this.sortData;
            for (var i=0; i<12; i++) {
                var n = _axisNames[i];
                var axis = this.axes[n];
                axis._options = $.extend(true, {}, opts.axesDefaults, opts.axes[n]);
                $.extend(true, axis, opts.axesDefaults, opts.axes[n]);
                axis._plotWidth = this._width;
                axis._plotHeight = this._height;
            }
            // if (this.data.length == 0) {
            //     this.data = [];
            //     for (var i=0; i<this.options.series.length; i++) {
            //         this.data.push(this.options.series.data);
            //     }    
            // }
                
            var normalizeData = function(data, dir, start) {
                // return data as an array of point arrays,
                // in form [[x1,y1...], [x2,y2...], ...]
                var temp = [];
                var i, l;
                dir = dir || 'vertical';
                if (!$.isArray(data[0])) {
                    // we have a series of scalars.  One line with just y values.
                    // turn the scalar list of data into a data array of form:
                    // [[1, data[0]], [2, data[1]], ...]
                    for (i=0, l=data.length; i<l; i++) {
                        if (dir == 'vertical') {
                            temp.push([start + i, data[i]]);   
                        }
                        else {
                            temp.push([data[i], start+i]);
                        }
                    }
                }            
                else {
                    // we have a properly formatted data series, copy it.
                    $.extend(true, temp, data);
                }
                return temp;
            };

            var colorIndex = 0;
            this.series = [];
            for (var i=0; i<this.data.length; i++) {
                var sopts = $.extend(true, {index: i}, {seriesColors:this.seriesColors, negativeSeriesColors:this.negativeSeriesColors}, this.options.seriesDefaults, this.options.series[i], {rendererOptions:{animation:{show: this.animate}}});
                // pass in options in case something needs set prior to initialization.
                var temp = new Series(sopts);
                for (var j=0; j<$.jqplot.preParseSeriesOptionsHooks.length; j++) {
                    $.jqplot.preParseSeriesOptionsHooks[j].call(temp, this.options.seriesDefaults, this.options.series[i]);
                }
                for (var j=0; j<this.preParseSeriesOptionsHooks.hooks.length; j++) {
                    this.preParseSeriesOptionsHooks.hooks[j].call(temp, this.options.seriesDefaults, this.options.series[i]);
                }
                // Now go back and apply the options to the series.  Really should just do this during initializaiton, but don't want to
                // mess up preParseSeriesOptionsHooks at this point.
                $.extend(true, temp, sopts);
                var dir = 'vertical';
                if (temp.renderer === $.jqplot.BarRenderer && temp.rendererOptions && temp.rendererOptions.barDirection == 'horizontal') {
                    dir = 'horizontal';
                    temp._stackAxis = 'x';
                    temp._primaryAxis = '_yaxis';
                }
                temp.data = normalizeData(this.data[i], dir, this.defaultAxisStart);
                switch (temp.xaxis) {
                    case 'xaxis':
                        temp._xaxis = this.axes.xaxis;
                        break;
                    case 'x2axis':
                        temp._xaxis = this.axes.x2axis;
                        break;
                    default:
                        break;
                }
                temp._yaxis = this.axes[temp.yaxis];
                temp._xaxis._series.push(temp);
                temp._yaxis._series.push(temp);
                if (temp.show) {
                    temp._xaxis.show = true;
                    temp._yaxis.show = true;
                }
                else {
                    if (temp._xaxis.scaleToHiddenSeries) {
                        temp._xaxis.show = true;
                    }
                    if (temp._yaxis.scaleToHiddenSeries) {
                        temp._yaxis.show = true;
                    }
                }

                // // parse the renderer options and apply default colors if not provided
                // if (!temp.color && temp.show != false) {
                //     temp.color = cg.next();
                //     colorIndex = cg.getIndex() - 1;;
                // }
                // if (!temp.negativeColor && temp.show != false) {
                //     temp.negativeColor = ncg.get(colorIndex);
                //     ncg.setIndex(colorIndex);
                // }
                if (!temp.label) {
                    temp.label = 'Series '+ (i+1).toString();
                }
                // temp.rendererOptions.show = temp.show;
                // $.extend(true, temp.renderer, {color:this.seriesColors[i]}, this.rendererOptions);
                this.series.push(temp);  
                for (var j=0; j<$.jqplot.postParseSeriesOptionsHooks.length; j++) {
                    $.jqplot.postParseSeriesOptionsHooks[j].call(this.series[i], this.options.seriesDefaults, this.options.series[i]);
                }
                for (var j=0; j<this.postParseSeriesOptionsHooks.hooks.length; j++) {
                    this.postParseSeriesOptionsHooks.hooks[j].call(this.series[i], this.options.seriesDefaults, this.options.series[i]);
                }
            }
            
            // copy the grid and title options into this object.
            $.extend(true, this.grid, this.options.grid);
            // if axis border properties aren't set, set default.
            for (var i=0, l=_axisNames.length; i<l; i++) {
                var n = _axisNames[i];
                var axis = this.axes[n];
                if (axis.borderWidth == null) {
                    axis.borderWidth =this.grid.borderWidth;
                }
            }
            
            if (typeof this.options.title == 'string') {
                this.title.text = this.options.title;
            }
            else if (typeof this.options.title == 'object') {
                $.extend(true, this.title, this.options.title);
            }
            this.title._plotWidth = this._width;
            this.legend.setOptions(this.options.legend);
            
            for (var i=0; i<$.jqplot.postParseOptionsHooks.length; i++) {
                $.jqplot.postParseOptionsHooks[i].call(this, options);
            }
            for (var i=0; i<this.postParseOptionsHooks.hooks.length; i++) {
                this.postParseOptionsHooks.hooks[i].call(this, options);
            }
        };
        
        // method: destroy
        // Releases all resources occupied by the plot
        this.destroy = function() {
            this.canvasManager.freeAllCanvases();
            if (this.eventCanvas && this.eventCanvas._elem) {
                this.eventCanvas._elem.unbind();
            }
            // Couple of posts on Stack Overflow indicate that empty() doesn't
            // always cear up the dom and release memory.  Sometimes setting
            // innerHTML property to null is needed.  Particularly on IE, may 
            // have to directly set it to null, bypassing $.
            this.target.empty();

            this.target[0].innerHTML = '';
        };
        
        // method: replot
        // Does a reinitialization of the plot followed by
        // a redraw.  Method could be used to interactively
        // change plot characteristics and then replot.
        //
        // Parameters:
        // options - Options used for replotting.
        //
        // Properties:
        // clear - false to not clear (empty) the plot container before replotting (default: true).
        // resetAxes - true to reset all axes min, max, numberTicks and tickInterval setting so axes will rescale themselves.
        //             optionally pass in list of axes to reset (e.g. ['xaxis', 'y2axis']) (default: false).
        this.replot = function(options) {
            var opts =  options || {};
            var data = opts.data || null;
            var clear = (opts.clear === false) ? false : true;
            var resetAxes = opts.resetAxes || false;
            delete opts.data;
            delete opts.clear;
            delete opts.resetAxes;

            this.target.trigger('jqplotPreReplot');
            
            if (clear) {
                this.destroy();
            }
            // if have data or other options, full reinit.
            // otherwise, quickinit.
            if (data || !$.isEmptyObject(opts)) {
                this.reInitialize(data, opts);
            }
            else {
                this.quickInit();
            }

            if (resetAxes) {
                this.resetAxesScale(resetAxes, opts.axes);
            }
            this.draw();
            this.target.trigger('jqplotPostReplot');
        };
        
        // method: redraw
        // Empties the plot target div and redraws the plot.
        // This enables plot data and properties to be changed
        // and then to comletely clear the plot and redraw.
        // redraw *will not* reinitialize any plot elements.
        // That is, axes will not be autoscaled and defaults
        // will not be reapplied to any plot elements.  redraw
        // is used primarily with zooming. 
        //
        // Parameters:
        // clear - false to not clear (empty) the plot container before redrawing (default: true).
        this.redraw = function(clear) {
            clear = (clear != null) ? clear : true;
            this.target.trigger('jqplotPreRedraw');
            if (clear) {
                this.canvasManager.freeAllCanvases();
                this.eventCanvas._elem.unbind();
                // Dont think I bind any events to the target, this shouldn't be necessary.
                // It will remove user's events.
                // this.target.unbind();
                this.target.empty();
            }
             for (var ax in this.axes) {
                this.axes[ax]._ticks = [];
            }
            this.computePlotData();
            // for (var i=0; i<this.series.length; i++) {
            //     this.populatePlotData(this.series[i], i);
            // }
            this._sumy = 0;
            this._sumx = 0;
            for (var i=0, tsl = this.series.length; i<tsl; i++) {
                this._sumy += this.series[i]._sumy;
                this._sumx += this.series[i]._sumx;
            }
            this.draw();
            this.target.trigger('jqplotPostRedraw');
        };
        
        // method: draw
        // Draws all elements of the plot into the container.
        // Does not clear the container before drawing.
        this.draw = function(){
            if (this.drawIfHidden || this.target.is(':visible')) {
                this.target.trigger('jqplotPreDraw');
                var i,
                    j,
                    l,
                    tempseries;
                for (i=0, l=$.jqplot.preDrawHooks.length; i<l; i++) {
                    $.jqplot.preDrawHooks[i].call(this);
                }
                for (i=0, l=this.preDrawHooks.hooks.length; i<l; i++) {
                    this.preDrawHooks.hooks[i].apply(this, this.preDrawSeriesHooks.args[i]);
                }
                // create an underlying canvas to be used for special features.
                this.target.append(this.baseCanvas.createElement({left:0, right:0, top:0, bottom:0}, 'jqplot-base-canvas', null, this));
                this.baseCanvas.setContext();
                this.target.append(this.title.draw());
                this.title.pack({top:0, left:0});
                
                // make room  for the legend between the grid and the edge.
                // pass a dummy offsets object and a reference to the plot.
                var legendElem = this.legend.draw({}, this);
                
                var gridPadding = {top:0, left:0, bottom:0, right:0};
                
                if (this.legend.placement == "outsideGrid") {
                    // temporarily append the legend to get dimensions
                    this.target.append(legendElem);
                    switch (this.legend.location) {
                        case 'n':
                            gridPadding.top += this.legend.getHeight();
                            break;
                        case 's':
                            gridPadding.bottom += this.legend.getHeight();
                            break;
                        case 'ne':
                        case 'e':
                        case 'se':
                            gridPadding.right += this.legend.getWidth();
                            break;
                        case 'nw':
                        case 'w':
                        case 'sw':
                            gridPadding.left += this.legend.getWidth();
                            break;
                        default:  // same as 'ne'
                            gridPadding.right += this.legend.getWidth();
                            break;
                    }
                    legendElem = legendElem.detach();
                }
                
                var ax = this.axes;
                var name;
                // draw the yMidAxis first, so xaxis of pyramid chart can adjust itself if needed.
                for (i=0; i<12; i++) {
                    name = _axisNames[i];
                    this.target.append(ax[name].draw(this.baseCanvas._ctx, this));
                    ax[name].set();
                }
                if (ax.yaxis.show) {
                    gridPadding.left += ax.yaxis.getWidth();
                }
                var ra = ['y2axis', 'y3axis', 'y4axis', 'y5axis', 'y6axis', 'y7axis', 'y8axis', 'y9axis'];
                var rapad = [0, 0, 0, 0, 0, 0, 0, 0];
                var gpr = 0;
                var n;
                for (n=0; n<8; n++) {
                    if (ax[ra[n]].show) {
                        gpr += ax[ra[n]].getWidth();
                        rapad[n] = gpr;
                    }
                }
                gridPadding.right += gpr;
                if (ax.x2axis.show) {
                    gridPadding.top += ax.x2axis.getHeight();
                }
                if (this.title.show) {
                    gridPadding.top += this.title.getHeight();
                }
                if (ax.xaxis.show) {
                    gridPadding.bottom += ax.xaxis.getHeight();
                }
                
                // end of gridPadding adjustments.

                // if user passed in gridDimensions option, check against calculated gridPadding
                if (this.options.gridDimensions && $.isPlainObject(this.options.gridDimensions)) {
                    var gdw = parseInt(this.options.gridDimensions.width, 10) || 0;
                    var gdh = parseInt(this.options.gridDimensions.height, 10) || 0;
                    var widthAdj = (this._width - gridPadding.left - gridPadding.right - gdw)/2;
                    var heightAdj = (this._height - gridPadding.top - gridPadding.bottom - gdh)/2;

                    if (heightAdj >= 0 && widthAdj >= 0) {
                        gridPadding.top += heightAdj;
                        gridPadding.bottom += heightAdj;
                        gridPadding.left += widthAdj;
                        gridPadding.right += widthAdj;
                    }
                }
                var arr = ['top', 'bottom', 'left', 'right'];
                for (var n in arr) {
                    if (this._gridPadding[arr[n]] == null && gridPadding[arr[n]] > 0) {
                        this._gridPadding[arr[n]] = gridPadding[arr[n]];
                    }
                    else if (this._gridPadding[arr[n]] == null) {
                        this._gridPadding[arr[n]] = this._defaultGridPadding[arr[n]];
                    }
                }
                
                var legendPadding = this._gridPadding;
                
                if (this.legend.placement === 'outsideGrid') {
                    legendPadding = {top:this.title.getHeight(), left: 0, right: 0, bottom: 0};
                    if (this.legend.location === 's') {
                        legendPadding.left = this._gridPadding.left;
                        legendPadding.right = this._gridPadding.right;
                    }
                }
                
                ax.xaxis.pack({position:'absolute', bottom:this._gridPadding.bottom - ax.xaxis.getHeight(), left:0, width:this._width}, {min:this._gridPadding.left, max:this._width - this._gridPadding.right});
                ax.yaxis.pack({position:'absolute', top:0, left:this._gridPadding.left - ax.yaxis.getWidth(), height:this._height}, {min:this._height - this._gridPadding.bottom, max: this._gridPadding.top});
                ax.x2axis.pack({position:'absolute', top:this._gridPadding.top - ax.x2axis.getHeight(), left:0, width:this._width}, {min:this._gridPadding.left, max:this._width - this._gridPadding.right});
                for (i=8; i>0; i--) {
                    ax[ra[i-1]].pack({position:'absolute', top:0, right:this._gridPadding.right - rapad[i-1]}, {min:this._height - this._gridPadding.bottom, max: this._gridPadding.top});
                }
                var ltemp = (this._width - this._gridPadding.left - this._gridPadding.right)/2.0 + this._gridPadding.left - ax.yMidAxis.getWidth()/2.0;
                ax.yMidAxis.pack({position:'absolute', top:0, left:ltemp, zIndex:9, textAlign: 'center'}, {min:this._height - this._gridPadding.bottom, max: this._gridPadding.top});
            
                this.target.append(this.grid.createElement(this._gridPadding, this));
                this.grid.draw();
                
                var series = this.series;
                var seriesLength = series.length;
                // put the shadow canvases behind the series canvases so shadows don't overlap on stacked bars.
                for (i=0, l=seriesLength; i<l; i++) {
                    // draw series in order of stacking.  This affects only
                    // order in which canvases are added to dom.
                    j = this.seriesStack[i];
                    this.target.append(series[j].shadowCanvas.createElement(this._gridPadding, 'jqplot-series-shadowCanvas', null, this));
                    series[j].shadowCanvas.setContext();
                    series[j].shadowCanvas._elem.data('seriesIndex', j);
                }
                
                for (i=0, l=seriesLength; i<l; i++) {
                    // draw series in order of stacking.  This affects only
                    // order in which canvases are added to dom.
                    j = this.seriesStack[i];
                    this.target.append(series[j].canvas.createElement(this._gridPadding, 'jqplot-series-canvas', null, this));
                    series[j].canvas.setContext();
                    series[j].canvas._elem.data('seriesIndex', j);
                }
                // Need to use filled canvas to capture events in IE.
                // Also, canvas seems to block selection of other elements in document on FF.
                this.target.append(this.eventCanvas.createElement(this._gridPadding, 'jqplot-event-canvas', null, this));
                this.eventCanvas.setContext();
                this.eventCanvas._ctx.fillStyle = 'rgba(0,0,0,0)';
                this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width, this.eventCanvas._ctx.canvas.height);
            
                // bind custom event handlers to regular events.
                this.bindCustomEvents();
            
                // draw legend before series if the series needs to know the legend dimensions.
                if (this.legend.preDraw) {  
                    this.eventCanvas._elem.before(legendElem);
                    this.legend.pack(legendPadding);
                    if (this.legend._elem) {
                        this.drawSeries({legendInfo:{location:this.legend.location, placement:this.legend.placement, width:this.legend.getWidth(), height:this.legend.getHeight(), xoffset:this.legend.xoffset, yoffset:this.legend.yoffset}});
                    }
                    else {
                        this.drawSeries();
                    }
                }
                else {  // draw series before legend
                    this.drawSeries();
                    if (seriesLength) {
                        $(series[seriesLength-1].canvas._elem).after(legendElem);
                    }
                    this.legend.pack(legendPadding);                
                }
            
                // register event listeners on the overlay canvas
                for (var i=0, l=$.jqplot.eventListenerHooks.length; i<l; i++) {
                    // in the handler, this will refer to the eventCanvas dom element.
                    // make sure there are references back into plot objects.
                    this.eventCanvas._elem.bind($.jqplot.eventListenerHooks[i][0], {plot:this}, $.jqplot.eventListenerHooks[i][1]);
                }
            
                // register event listeners on the overlay canvas
                for (var i=0, l=this.eventListenerHooks.hooks.length; i<l; i++) {
                    // in the handler, this will refer to the eventCanvas dom element.
                    // make sure there are references back into plot objects.
                    this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[i][0], {plot:this}, this.eventListenerHooks.hooks[i][1]);
                }

                var fb = this.fillBetween;
                if (fb.fill && fb.series1 !== fb.series2 && fb.series1 < seriesLength && fb.series2 < seriesLength && series[fb.series1]._type === 'line' && series[fb.series2]._type === 'line') {
                    this.doFillBetweenLines();
                }

                for (var i=0, l=$.jqplot.postDrawHooks.length; i<l; i++) {
                    $.jqplot.postDrawHooks[i].call(this);
                }

                for (var i=0, l=this.postDrawHooks.hooks.length; i<l; i++) {
                    this.postDrawHooks.hooks[i].apply(this, this.postDrawHooks.args[i]);
                }
            
                if (this.target.is(':visible')) {
                    this._drawCount += 1;
                }

                var temps, 
                    tempr,
                    sel,
                    _els;
                // ughh.  ideally would hide all series then show them.
                for (i=0, l=seriesLength; i<l; i++) {
                    temps = series[i];
                    tempr = temps.renderer;
                    sel = '.jqplot-point-label.jqplot-series-'+i;
                    if (tempr.animation && tempr.animation._supported && tempr.animation.show && (this._drawCount < 2 || this.animateReplot)) {
                        _els = this.target.find(sel);
                        _els.stop(true, true).hide();
                        temps.canvas._elem.stop(true, true).hide();
                        temps.shadowCanvas._elem.stop(true, true).hide();
                        temps.canvas._elem.jqplotEffect('blind', {mode: 'show', direction: tempr.animation.direction}, tempr.animation.speed);
                        temps.shadowCanvas._elem.jqplotEffect('blind', {mode: 'show', direction: tempr.animation.direction}, tempr.animation.speed);
                        _els.fadeIn(tempr.animation.speed*0.8);
                    }
                }
                _els = null;
            
                this.target.trigger('jqplotPostDraw', [this]);
            }
        };

        jqPlot.prototype.doFillBetweenLines = function () {
            var fb = this.fillBetween;
            var sid1 = fb.series1;
            var sid2 = fb.series2;
            // first series should always be lowest index
            var id1 = (sid1 < sid2) ? sid1 : sid2;
            var id2 = (sid2 >  sid1) ? sid2 : sid1;

            var series1 = this.series[id1];
            var series2 = this.series[id2];

            if (series2.renderer.smooth) {
                var tempgd = series2.renderer._smoothedData.slice(0).reverse();
            }
            else {
                var tempgd = series2.gridData.slice(0).reverse();
            }

            if (series1.renderer.smooth) {
                var gd = series1.renderer._smoothedData.concat(tempgd);
            }
            else {
                var gd = series1.gridData.concat(tempgd);
            }

            var color = (fb.color !== null) ? fb.color : this.series[sid1].fillColor;
            var baseSeries = (fb.baseSeries !== null) ? fb.baseSeries : id1;

            // now apply a fill to the shape on the lower series shadow canvas,
            // so it is behind both series.
            var sr = this.series[baseSeries].renderer.shapeRenderer;
            var opts = {fillStyle: color, fill: true, closePath: true};
            sr.draw(series1.shadowCanvas._ctx, gd, opts);
        };
        
        this.bindCustomEvents = function() {
            this.eventCanvas._elem.bind('click', {plot:this}, this.onClick);
            this.eventCanvas._elem.bind('dblclick', {plot:this}, this.onDblClick);
            this.eventCanvas._elem.bind('mousedown', {plot:this}, this.onMouseDown);
            this.eventCanvas._elem.bind('mousemove', {plot:this}, this.onMouseMove);
            this.eventCanvas._elem.bind('mouseenter', {plot:this}, this.onMouseEnter);
            this.eventCanvas._elem.bind('mouseleave', {plot:this}, this.onMouseLeave);
            if (this.captureRightClick) {
                this.eventCanvas._elem.bind('mouseup', {plot:this}, this.onRightClick);
                this.eventCanvas._elem.get(0).oncontextmenu = function() {
                    return false;
                };
            }
            else {
                this.eventCanvas._elem.bind('mouseup', {plot:this}, this.onMouseUp);
            }
        };
        
        function getEventPosition(ev) {
            var plot = ev.data.plot;
            var go = plot.eventCanvas._elem.offset();
            var gridPos = {x:ev.pageX - go.left, y:ev.pageY - go.top};
            var dataPos = {xaxis:null, yaxis:null, x2axis:null, y2axis:null, y3axis:null, y4axis:null, y5axis:null, y6axis:null, y7axis:null, y8axis:null, y9axis:null, yMidAxis:null};
            var an = ['xaxis', 'yaxis', 'x2axis', 'y2axis', 'y3axis', 'y4axis', 'y5axis', 'y6axis', 'y7axis', 'y8axis', 'y9axis', 'yMidAxis'];
            var ax = plot.axes;
            var n, axis;
            for (n=11; n>0; n--) {
                axis = an[n-1];
                if (ax[axis].show) {
                    dataPos[axis] = ax[axis].series_p2u(gridPos[axis.charAt(0)]);
                }
            }

            return {offsets:go, gridPos:gridPos, dataPos:dataPos};
        }
        
        
        // function to check if event location is over a area area
        function checkIntersection(gridpos, plot) {
            var series = plot.series;
            var i, j, k, s, r, x, y, theta, sm, sa, minang, maxang;
            var d0, d, p, pp, points, bw, hp;
            var threshold, t;
            for (k=plot.seriesStack.length-1; k>=0; k--) {
                i = plot.seriesStack[k];
                s = series[i];
                hp = s._highlightThreshold;
                switch (s.renderer.constructor) {
                    case $.jqplot.BarRenderer:
                        x = gridpos.x;
                        y = gridpos.y;
                        for (j=0; j<s._barPoints.length; j++) {
                            points = s._barPoints[j];
                            p = s.gridData[j];
                            if (x>points[0][0] && x<points[2][0] && y>points[2][1] && y<points[0][1]) {
                                return {seriesIndex:s.index, pointIndex:j, gridData:p, data:s.data[j], points:s._barPoints[j]};
                            }
                        }
                        break;
                    case $.jqplot.PyramidRenderer:
                        x = gridpos.x;
                        y = gridpos.y;
                        for (j=0; j<s._barPoints.length; j++) {
                            points = s._barPoints[j];
                            p = s.gridData[j];
                            if (x > points[0][0] + hp[0][0] && x < points[2][0] + hp[2][0] && y > points[2][1] && y < points[0][1]) {
                                return {seriesIndex:s.index, pointIndex:j, gridData:p, data:s.data[j], points:s._barPoints[j]};
                            }
                        }
                        break;
                    
                    case $.jqplot.DonutRenderer:
                        sa = s.startAngle/180*Math.PI;
                        x = gridpos.x - s._center[0];
                        y = gridpos.y - s._center[1];
                        r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                        if (x > 0 && -y >= 0) {
                            theta = 2*Math.PI - Math.atan(-y/x);
                        }
                        else if (x > 0 && -y < 0) {
                            theta = -Math.atan(-y/x);
                        }
                        else if (x < 0) {
                            theta = Math.PI - Math.atan(-y/x);
                        }
                        else if (x == 0 && -y > 0) {
                            theta = 3*Math.PI/2;
                        }
                        else if (x == 0 && -y < 0) {
                            theta = Math.PI/2;
                        }
                        else if (x == 0 && y == 0) {
                            theta = 0;
                        }
                        if (sa) {
                            theta -= sa;
                            if (theta < 0) {
                                theta += 2*Math.PI;
                            }
                            else if (theta > 2*Math.PI) {
                                theta -= 2*Math.PI;
                            }
                        }
            
                        sm = s.sliceMargin/180*Math.PI;
                        if (r < s._radius && r > s._innerRadius) {
                            for (j=0; j<s.gridData.length; j++) {
                                minang = (j>0) ? s.gridData[j-1][1]+sm : sm;
                                maxang = s.gridData[j][1];
                                if (theta > minang && theta < maxang) {
                                    return {seriesIndex:s.index, pointIndex:j, gridData:[gridpos.x,gridpos.y], data:s.data[j]};
                                }
                            }
                        }
                        break;
                        
                    case $.jqplot.PieRenderer:
                        sa = s.startAngle/180*Math.PI;
                        x = gridpos.x - s._center[0];
                        y = gridpos.y - s._center[1];
                        r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                        if (x > 0 && -y >= 0) {
                            theta = 2*Math.PI - Math.atan(-y/x);
                        }
                        else if (x > 0 && -y < 0) {
                            theta = -Math.atan(-y/x);
                        }
                        else if (x < 0) {
                            theta = Math.PI - Math.atan(-y/x);
                        }
                        else if (x == 0 && -y > 0) {
                            theta = 3*Math.PI/2;
                        }
                        else if (x == 0 && -y < 0) {
                            theta = Math.PI/2;
                        }
                        else if (x == 0 && y == 0) {
                            theta = 0;
                        }
                        if (sa) {
                            theta -= sa;
                            if (theta < 0) {
                                theta += 2*Math.PI;
                            }
                            else if (theta > 2*Math.PI) {
                                theta -= 2*Math.PI;
                            }
                        }
            
                        sm = s.sliceMargin/180*Math.PI;
                        if (r < s._radius) {
                            for (j=0; j<s.gridData.length; j++) {
                                minang = (j>0) ? s.gridData[j-1][1]+sm : sm;
                                maxang = s.gridData[j][1];
                                if (theta > minang && theta < maxang) {
                                    return {seriesIndex:s.index, pointIndex:j, gridData:[gridpos.x,gridpos.y], data:s.data[j]};
                                }
                            }
                        }
                        break;
                        
                    case $.jqplot.BubbleRenderer:
                        x = gridpos.x;
                        y = gridpos.y;
                        var ret = null;
                        
                        if (s.show) {
                            for (var j=0; j<s.gridData.length; j++) {
                                p = s.gridData[j];
                                d = Math.sqrt( (x-p[0]) * (x-p[0]) + (y-p[1]) * (y-p[1]) );
                                if (d <= p[2] && (d <= d0 || d0 == null)) {
                                   d0 = d;
                                   ret = {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                }
                            }
                            if (ret != null) {
                                return ret;
                            }
                        }
                        break;
                        
                    case $.jqplot.FunnelRenderer:
                        x = gridpos.x;
                        y = gridpos.y;
                        var v = s._vertices,
                            vfirst = v[0],
                            vlast = v[v.length-1],
                            lex,
                            rex,
                            cv;
    
                        // equations of right and left sides, returns x, y values given height of section (y value and 2 points)
    
                        function findedge (l, p1 , p2) {
                            var m = (p1[1] - p2[1])/(p1[0] - p2[0]);
                            var b = p1[1] - m*p1[0];
                            var y = l + p1[1];
        
                            return [(y - b)/m, y];
                        }
    
                        // check each section
                        lex = findedge(y, vfirst[0], vlast[3]);
                        rex = findedge(y, vfirst[1], vlast[2]);
                        for (j=0; j<v.length; j++) {
                            cv = v[j];
                            if (y >= cv[0][1] && y <= cv[3][1] && x >= lex[0] && x <= rex[0]) {
                                return {seriesIndex:s.index, pointIndex:j, gridData:null, data:s.data[j]};
                            }
                        }         
                        break;           
                    
                    case $.jqplot.LineRenderer:
                        x = gridpos.x;
                        y = gridpos.y;
                        r = s.renderer;
                        if (s.show) {
                            if ((s.fill || (s.renderer.bands.show && s.renderer.bands.fill)) && (!plot.plugins.highlighter || !plot.plugins.highlighter.show)) {
                                // first check if it is in bounding box
                                var inside = false;
                                if (x>s._boundingBox[0][0] && x<s._boundingBox[1][0] && y>s._boundingBox[1][1] && y<s._boundingBox[0][1]) { 
                                    // now check the crossing number   
                                    
                                    var numPoints = s._areaPoints.length;
                                    var ii;
                                    var j = numPoints-1;

                                    for(var ii=0; ii < numPoints; ii++) { 
                                        var vertex1 = [s._areaPoints[ii][0], s._areaPoints[ii][1]];
                                        var vertex2 = [s._areaPoints[j][0], s._areaPoints[j][1]];

                                        if (vertex1[1] < y && vertex2[1] >= y || vertex2[1] < y && vertex1[1] >= y)     {
                                            if (vertex1[0] + (y - vertex1[1]) / (vertex2[1] - vertex1[1]) * (vertex2[0] - vertex1[0]) < x) {
                                                inside = !inside;
                                            }
                                        }

                                        j = ii;
                                    }        
                                }
                                if (inside) {
                                    return {seriesIndex:i, pointIndex:null, gridData:s.gridData, data:s.data, points:s._areaPoints};
                                }
                                break;
                                
                            }

                            else {
                                t = s.markerRenderer.size/2+s.neighborThreshold;
                                threshold = (t > 0) ? t : 0;
                                for (var j=0; j<s.gridData.length; j++) {
                                    p = s.gridData[j];
                                    // neighbor looks different to OHLC chart.
                                    if (r.constructor == $.jqplot.OHLCRenderer) {
                                        if (r.candleStick) {
                                            var yp = s._yaxis.series_u2p;
                                            if (x >= p[0]-r._bodyWidth/2 && x <= p[0]+r._bodyWidth/2 && y >= yp(s.data[j][2]) && y <= yp(s.data[j][3])) {
                                                return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                            }
                                        }
                                        // if an open hi low close chart
                                        else if (!r.hlc){
                                            var yp = s._yaxis.series_u2p;
                                            if (x >= p[0]-r._tickLength && x <= p[0]+r._tickLength && y >= yp(s.data[j][2]) && y <= yp(s.data[j][3])) {
                                                return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                            }
                                        }
                                        // a hi low close chart
                                        else {
                                            var yp = s._yaxis.series_u2p;
                                            if (x >= p[0]-r._tickLength && x <= p[0]+r._tickLength && y >= yp(s.data[j][1]) && y <= yp(s.data[j][2])) {
                                                return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                            }
                                        }
                            
                                    }
                                    else if (p[0] != null && p[1] != null){
                                        d = Math.sqrt( (x-p[0]) * (x-p[0]) + (y-p[1]) * (y-p[1]) );
                                        if (d <= threshold && (d <= d0 || d0 == null)) {
                                           d0 = d;
                                           return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                        }
                                    }
                                } 
                            }
                        }
                        break;
                        
                    default:
                        x = gridpos.x;
                        y = gridpos.y;
                        r = s.renderer;
                        if (s.show) {
                            t = s.markerRenderer.size/2+s.neighborThreshold;
                            threshold = (t > 0) ? t : 0;
                            for (var j=0; j<s.gridData.length; j++) {
                                p = s.gridData[j];
                                // neighbor looks different to OHLC chart.
                                if (r.constructor == $.jqplot.OHLCRenderer) {
                                    if (r.candleStick) {
                                        var yp = s._yaxis.series_u2p;
                                        if (x >= p[0]-r._bodyWidth/2 && x <= p[0]+r._bodyWidth/2 && y >= yp(s.data[j][2]) && y <= yp(s.data[j][3])) {
                                            return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                        }
                                    }
                                    // if an open hi low close chart
                                    else if (!r.hlc){
                                        var yp = s._yaxis.series_u2p;
                                        if (x >= p[0]-r._tickLength && x <= p[0]+r._tickLength && y >= yp(s.data[j][2]) && y <= yp(s.data[j][3])) {
                                            return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                        }
                                    }
                                    // a hi low close chart
                                    else {
                                        var yp = s._yaxis.series_u2p;
                                        if (x >= p[0]-r._tickLength && x <= p[0]+r._tickLength && y >= yp(s.data[j][1]) && y <= yp(s.data[j][2])) {
                                            return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                        }
                                    }
                            
                                }
                                else {
                                    d = Math.sqrt( (x-p[0]) * (x-p[0]) + (y-p[1]) * (y-p[1]) );
                                    if (d <= threshold && (d <= d0 || d0 == null)) {
                                       d0 = d;
                                       return {seriesIndex: i, pointIndex:j, gridData:p, data:s.data[j]};
                                    }
                                }
                            } 
                        }
                        break;
                }
            }
            
            return null;
        }
        
        
        
        this.onClick = function(ev) {
            // Event passed in is normalized and will have data attribute.
            // Event passed out is unnormalized.
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var neighbor = checkIntersection(positions.gridPos, p);
            var evt = $.Event('jqplotClick');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
        };
        
        this.onDblClick = function(ev) {
            // Event passed in is normalized and will have data attribute.
            // Event passed out is unnormalized.
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var neighbor = checkIntersection(positions.gridPos, p);
            var evt = $.Event('jqplotDblClick');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
        };
        
        this.onMouseDown = function(ev) {
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var neighbor = checkIntersection(positions.gridPos, p);
            var evt = $.Event('jqplotMouseDown');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
        };
        
        this.onMouseUp = function(ev) {
            var positions = getEventPosition(ev);
            var evt = $.Event('jqplotMouseUp');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, null, ev.data.plot]);
        };
        
        this.onRightClick = function(ev) {
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var neighbor = checkIntersection(positions.gridPos, p);
            if (p.captureRightClick) {
                if (ev.which == 3) {
                var evt = $.Event('jqplotRightClick');
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                    $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
                }
                else {
                var evt = $.Event('jqplotMouseUp');
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                    $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
                }
            }
        };
        
        this.onMouseMove = function(ev) {
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var neighbor = checkIntersection(positions.gridPos, p);
            var evt = $.Event('jqplotMouseMove');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, neighbor, p]);
        };
        
        this.onMouseEnter = function(ev) {
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var evt = $.Event('jqplotMouseEnter');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            evt.relatedTarget = ev.relatedTarget;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, null, p]);
        };
        
        this.onMouseLeave = function(ev) {
            var positions = getEventPosition(ev);
            var p = ev.data.plot;
            var evt = $.Event('jqplotMouseLeave');
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            evt.relatedTarget = ev.relatedTarget;
            $(this).trigger(evt, [positions.gridPos, positions.dataPos, null, p]);
        };
        
        // method: drawSeries
        // Redraws all or just one series on the plot.  No axis scaling
        // is performed and no other elements on the plot are redrawn.
        // options is an options object to pass on to the series renderers.
        // It can be an empty object {}.  idx is the series index
        // to redraw if only one series is to be redrawn.
        this.drawSeries = function(options, idx){
            var i, series, ctx;
            // if only one argument passed in and it is a number, use it ad idx.
            idx = (typeof(options) === "number" && idx == null) ? options : idx;
            options = (typeof(options) === "object") ? options : {};
            // draw specified series
            if (idx != undefined) {
                series = this.series[idx];
                ctx = series.shadowCanvas._ctx;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                series.drawShadow(ctx, options, this);
                ctx = series.canvas._ctx;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                series.draw(ctx, options, this);
                if (series.renderer.constructor == $.jqplot.BezierCurveRenderer) {
                    if (idx < this.series.length - 1) {
                        this.drawSeries(idx+1); 
                    }
                }
            }
            
            else {
                // if call series drawShadow method first, in case all series shadows
                // should be drawn before any series.  This will ensure, like for 
                // stacked bar plots, that shadows don't overlap series.
                for (i=0; i<this.series.length; i++) {
                    // first clear the canvas
                    series = this.series[i];
                    ctx = series.shadowCanvas._ctx;
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    series.drawShadow(ctx, options, this);
                    ctx = series.canvas._ctx;
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    series.draw(ctx, options, this);
                }
            }
            options = idx = i = series = ctx = null;
        };
        
        // method: moveSeriesToFront
        // This method requires jQuery 1.4+
        // Moves the specified series canvas in front of all other series canvases.
        // This effectively "draws" the specified series on top of all other series,
        // although it is performed through DOM manipulation, no redrawing is performed.
        //
        // Parameters:
        // idx - 0 based index of the series to move.  This will be the index of the series
        // as it was first passed into the jqplot function.
        this.moveSeriesToFront = function (idx) { 
            idx = parseInt(idx, 10);
            var stackIndex = $.inArray(idx, this.seriesStack);
            // if already in front, return
            if (stackIndex == -1) {
                return;
            }
            if (stackIndex == this.seriesStack.length -1) {
                this.previousSeriesStack = this.seriesStack.slice(0);
                return;
            }
            var opidx = this.seriesStack[this.seriesStack.length -1];
            var serelem = this.series[idx].canvas._elem.detach();
            var shadelem = this.series[idx].shadowCanvas._elem.detach();
            this.series[opidx].shadowCanvas._elem.after(shadelem);
            this.series[opidx].canvas._elem.after(serelem);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(stackIndex, 1);
            this.seriesStack.push(idx);
        };
        
        // method: moveSeriesToBack
        // This method requires jQuery 1.4+
        // Moves the specified series canvas behind all other series canvases.
        //
        // Parameters:
        // idx - 0 based index of the series to move.  This will be the index of the series
        // as it was first passed into the jqplot function.
        this.moveSeriesToBack = function (idx) {
            idx = parseInt(idx, 10);
            var stackIndex = $.inArray(idx, this.seriesStack);
            // if already in back, return
            if (stackIndex == 0 || stackIndex == -1) {
                return;
            }
            var opidx = this.seriesStack[0];
            var serelem = this.series[idx].canvas._elem.detach();
            var shadelem = this.series[idx].shadowCanvas._elem.detach();
            this.series[opidx].shadowCanvas._elem.before(shadelem);
            this.series[opidx].canvas._elem.before(serelem);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(stackIndex, 1);
            this.seriesStack.unshift(idx);
        };
        
        // method: restorePreviousSeriesOrder
        // This method requires jQuery 1.4+
        // Restore the series canvas order to its previous state.
        // Useful to put a series back where it belongs after moving
        // it to the front.
        this.restorePreviousSeriesOrder = function () {
            var i, j, serelem, shadelem, temp, move, keep;
            // if no change, return.
            if (this.seriesStack == this.previousSeriesStack) {
                return;
            }
            for (i=1; i<this.previousSeriesStack.length; i++) {
                move = this.previousSeriesStack[i];
                keep = this.previousSeriesStack[i-1];
                serelem = this.series[move].canvas._elem.detach();
                shadelem = this.series[move].shadowCanvas._elem.detach();
                this.series[keep].shadowCanvas._elem.after(shadelem);
                this.series[keep].canvas._elem.after(serelem);
            }
            temp = this.seriesStack.slice(0);
            this.seriesStack = this.previousSeriesStack.slice(0);
            this.previousSeriesStack = temp;
        };
        
        // method: restoreOriginalSeriesOrder
        // This method requires jQuery 1.4+
        // Restore the series canvas order to its original order
        // when the plot was created.
        this.restoreOriginalSeriesOrder = function () {
            var i, j, arr=[], serelem, shadelem;
            for (i=0; i<this.series.length; i++) {
                arr.push(i);
            }
            if (this.seriesStack == arr) {
                return;
            }
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack = arr;
            for (i=1; i<this.seriesStack.length; i++) {
                serelem = this.series[i].canvas._elem.detach();
                shadelem = this.series[i].shadowCanvas._elem.detach();
                this.series[i-1].shadowCanvas._elem.after(shadelem);
                this.series[i-1].canvas._elem.after(serelem);
            }
        };
        
        this.activateTheme = function (name) {
            this.themeEngine.activate(this, name);
        };
    }
    
    
    // conpute a highlight color or array of highlight colors from given colors.
    $.jqplot.computeHighlightColors  = function(colors) {
        var ret;
        if ($.isArray(colors)) {
            ret = [];
            for (var i=0; i<colors.length; i++){
                var rgba = $.jqplot.getColorComponents(colors[i]);
                var newrgb = [rgba[0], rgba[1], rgba[2]];
                var sum = newrgb[0] + newrgb[1] + newrgb[2];
                for (var j=0; j<3; j++) {
                    // when darkening, lowest color component can be is 60.
                    newrgb[j] = (sum > 660) ?  newrgb[j] * 0.85 : 0.73 * newrgb[j] + 90;
                    newrgb[j] = parseInt(newrgb[j], 10);
                    (newrgb[j] > 255) ? 255 : newrgb[j];
                }
                // newrgb[3] = (rgba[3] > 0.4) ? rgba[3] * 0.4 : rgba[3] * 1.5;
                // newrgb[3] = (rgba[3] > 0.5) ? 0.8 * rgba[3] - .1 : rgba[3] + 0.2;
                newrgb[3] = 0.3 + 0.35 * rgba[3];
                ret.push('rgba('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+','+newrgb[3]+')');
            }
        }
        else {
            var rgba = $.jqplot.getColorComponents(colors);
            var newrgb = [rgba[0], rgba[1], rgba[2]];
            var sum = newrgb[0] + newrgb[1] + newrgb[2];
            for (var j=0; j<3; j++) {
                // when darkening, lowest color component can be is 60.
                // newrgb[j] = (sum > 570) ?  newrgb[j] * 0.8 : newrgb[j] + 0.3 * (255 - newrgb[j]);
                // newrgb[j] = parseInt(newrgb[j], 10);
                newrgb[j] = (sum > 660) ?  newrgb[j] * 0.85 : 0.73 * newrgb[j] + 90;
                newrgb[j] = parseInt(newrgb[j], 10);
                (newrgb[j] > 255) ? 255 : newrgb[j];
            }
            // newrgb[3] = (rgba[3] > 0.4) ? rgba[3] * 0.4 : rgba[3] * 1.5;
            // newrgb[3] = (rgba[3] > 0.5) ? 0.8 * rgba[3] - .1 : rgba[3] + 0.2;
            newrgb[3] = 0.3 + 0.35 * rgba[3];
            ret = 'rgba('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+','+newrgb[3]+')';
        }
        return ret;
    };
        
   $.jqplot.ColorGenerator = function(colors) {
        colors = colors || $.jqplot.config.defaultColors;
        var idx = 0;
        
        this.next = function () { 
            if (idx < colors.length) {
                return colors[idx++];
            }
            else {
                idx = 0;
                return colors[idx++];
            }
        };
        
        this.previous = function () { 
            if (idx > 0) {
                return colors[idx--];
            }
            else {
                idx = colors.length-1;
                return colors[idx];
            }
        };
        
        // get a color by index without advancing pointer.
        this.get = function(i) {
            var idx = i - colors.length * Math.floor(i/colors.length);
            return colors[idx];
        };
        
        this.setColors = function(c) {
            colors = c;
        };
        
        this.reset = function() {
            idx = 0;
        };

        this.getIndex = function() {
            return idx;
        };

        this.setIndex = function(index) {
            idx = index;
        };
    };

    // convert a hex color string to rgb string.
    // h - 3 or 6 character hex string, with or without leading #
    // a - optional alpha
    $.jqplot.hex2rgb = function(h, a) {
        h = h.replace('#', '');
        if (h.length == 3) {
            h = h.charAt(0)+h.charAt(0)+h.charAt(1)+h.charAt(1)+h.charAt(2)+h.charAt(2);
        }
        var rgb;
        rgb = 'rgba('+parseInt(h.slice(0,2), 16)+', '+parseInt(h.slice(2,4), 16)+', '+parseInt(h.slice(4,6), 16);
        if (a) {
            rgb += ', '+a;
        }
        rgb += ')';
        return rgb;
    };
    
    // convert an rgb color spec to a hex spec.  ignore any alpha specification.
    $.jqplot.rgb2hex = function(s) {
        var pat = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;
        var m = s.match(pat);
        var h = '#';
        for (var i=1; i<4; i++) {
            var temp;
            if (m[i].search(/%/) != -1) {
                temp = parseInt(255*m[i]/100, 10).toString(16);
                if (temp.length == 1) {
                    temp = '0'+temp;
                }
            }
            else {
                temp = parseInt(m[i], 10).toString(16);
                if (temp.length == 1) {
                    temp = '0'+temp;
                }
            }
            h += temp;
        }
        return h;
    };
    
    // given a css color spec, return an rgb css color spec
    $.jqplot.normalize2rgb = function(s, a) {
        if (s.search(/^ *rgba?\(/) != -1) {
            return s; 
        }
        else if (s.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/) != -1) {
            return $.jqplot.hex2rgb(s, a);
        }
        else {
            throw new Error('Invalid color spec');
        }
    };
    
    // extract the r, g, b, a color components out of a css color spec.
    $.jqplot.getColorComponents = function(s) {
        // check to see if a color keyword.
        s = $.jqplot.colorKeywordMap[s] || s;
        var rgb = $.jqplot.normalize2rgb(s);
        var pat = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;
        var m = rgb.match(pat);
        var ret = [];
        for (var i=1; i<4; i++) {
            if (m[i].search(/%/) != -1) {
                ret[i-1] = parseInt(255*m[i]/100, 10);
            }
            else {
                ret[i-1] = parseInt(m[i], 10);
            }
        }
        ret[3] = parseFloat(m[4]) ? parseFloat(m[4]) : 1.0;
        return ret;
    };
    
    $.jqplot.colorKeywordMap = {
        aliceblue: 'rgb(240, 248, 255)',
        antiquewhite: 'rgb(250, 235, 215)',
        aqua: 'rgb( 0, 255, 255)',
        aquamarine: 'rgb(127, 255, 212)',
        azure: 'rgb(240, 255, 255)',
        beige: 'rgb(245, 245, 220)',
        bisque: 'rgb(255, 228, 196)',
        black: 'rgb( 0, 0, 0)',
        blanchedalmond: 'rgb(255, 235, 205)',
        blue: 'rgb( 0, 0, 255)',
        blueviolet: 'rgb(138, 43, 226)',
        brown: 'rgb(165, 42, 42)',
        burlywood: 'rgb(222, 184, 135)',
        cadetblue: 'rgb( 95, 158, 160)',
        chartreuse: 'rgb(127, 255, 0)',
        chocolate: 'rgb(210, 105, 30)',
        coral: 'rgb(255, 127, 80)',
        cornflowerblue: 'rgb(100, 149, 237)',
        cornsilk: 'rgb(255, 248, 220)',
        crimson: 'rgb(220, 20, 60)',
        cyan: 'rgb( 0, 255, 255)',
        darkblue: 'rgb( 0, 0, 139)',
        darkcyan: 'rgb( 0, 139, 139)',
        darkgoldenrod: 'rgb(184, 134, 11)',
        darkgray: 'rgb(169, 169, 169)',
        darkgreen: 'rgb( 0, 100, 0)',
        darkgrey: 'rgb(169, 169, 169)',
        darkkhaki: 'rgb(189, 183, 107)',
        darkmagenta: 'rgb(139, 0, 139)',
        darkolivegreen: 'rgb( 85, 107, 47)',
        darkorange: 'rgb(255, 140, 0)',
        darkorchid: 'rgb(153, 50, 204)',
        darkred: 'rgb(139, 0, 0)',
        darksalmon: 'rgb(233, 150, 122)',
        darkseagreen: 'rgb(143, 188, 143)',
        darkslateblue: 'rgb( 72, 61, 139)',
        darkslategray: 'rgb( 47, 79, 79)',
        darkslategrey: 'rgb( 47, 79, 79)',
        darkturquoise: 'rgb( 0, 206, 209)',
        darkviolet: 'rgb(148, 0, 211)',
        deeppink: 'rgb(255, 20, 147)',
        deepskyblue: 'rgb( 0, 191, 255)',
        dimgray: 'rgb(105, 105, 105)',
        dimgrey: 'rgb(105, 105, 105)',
        dodgerblue: 'rgb( 30, 144, 255)',
        firebrick: 'rgb(178, 34, 34)',
        floralwhite: 'rgb(255, 250, 240)',
        forestgreen: 'rgb( 34, 139, 34)',
        fuchsia: 'rgb(255, 0, 255)',
        gainsboro: 'rgb(220, 220, 220)',
        ghostwhite: 'rgb(248, 248, 255)',
        gold: 'rgb(255, 215, 0)',
        goldenrod: 'rgb(218, 165, 32)',
        gray: 'rgb(128, 128, 128)',
        grey: 'rgb(128, 128, 128)',
        green: 'rgb( 0, 128, 0)',
        greenyellow: 'rgb(173, 255, 47)',
        honeydew: 'rgb(240, 255, 240)',
        hotpink: 'rgb(255, 105, 180)',
        indianred: 'rgb(205, 92, 92)',
        indigo: 'rgb( 75, 0, 130)',
        ivory: 'rgb(255, 255, 240)',
        khaki: 'rgb(240, 230, 140)',
        lavender: 'rgb(230, 230, 250)',
        lavenderblush: 'rgb(255, 240, 245)',
        lawngreen: 'rgb(124, 252, 0)',
        lemonchiffon: 'rgb(255, 250, 205)',
        lightblue: 'rgb(173, 216, 230)',
        lightcoral: 'rgb(240, 128, 128)',
        lightcyan: 'rgb(224, 255, 255)',
        lightgoldenrodyellow: 'rgb(250, 250, 210)',
        lightgray: 'rgb(211, 211, 211)',
        lightgreen: 'rgb(144, 238, 144)',
        lightgrey: 'rgb(211, 211, 211)',
        lightpink: 'rgb(255, 182, 193)',
        lightsalmon: 'rgb(255, 160, 122)',
        lightseagreen: 'rgb( 32, 178, 170)',
        lightskyblue: 'rgb(135, 206, 250)',
        lightslategray: 'rgb(119, 136, 153)',
        lightslategrey: 'rgb(119, 136, 153)',
        lightsteelblue: 'rgb(176, 196, 222)',
        lightyellow: 'rgb(255, 255, 224)',
        lime: 'rgb( 0, 255, 0)',
        limegreen: 'rgb( 50, 205, 50)',
        linen: 'rgb(250, 240, 230)',
        magenta: 'rgb(255, 0, 255)',
        maroon: 'rgb(128, 0, 0)',
        mediumaquamarine: 'rgb(102, 205, 170)',
        mediumblue: 'rgb( 0, 0, 205)',
        mediumorchid: 'rgb(186, 85, 211)',
        mediumpurple: 'rgb(147, 112, 219)',
        mediumseagreen: 'rgb( 60, 179, 113)',
        mediumslateblue: 'rgb(123, 104, 238)',
        mediumspringgreen: 'rgb( 0, 250, 154)',
        mediumturquoise: 'rgb( 72, 209, 204)',
        mediumvioletred: 'rgb(199, 21, 133)',
        midnightblue: 'rgb( 25, 25, 112)',
        mintcream: 'rgb(245, 255, 250)',
        mistyrose: 'rgb(255, 228, 225)',
        moccasin: 'rgb(255, 228, 181)',
        navajowhite: 'rgb(255, 222, 173)',
        navy: 'rgb( 0, 0, 128)',
        oldlace: 'rgb(253, 245, 230)',
        olive: 'rgb(128, 128, 0)',
        olivedrab: 'rgb(107, 142, 35)',
        orange: 'rgb(255, 165, 0)',
        orangered: 'rgb(255, 69, 0)',
        orchid: 'rgb(218, 112, 214)',
        palegoldenrod: 'rgb(238, 232, 170)',
        palegreen: 'rgb(152, 251, 152)',
        paleturquoise: 'rgb(175, 238, 238)',
        palevioletred: 'rgb(219, 112, 147)',
        papayawhip: 'rgb(255, 239, 213)',
        peachpuff: 'rgb(255, 218, 185)',
        peru: 'rgb(205, 133, 63)',
        pink: 'rgb(255, 192, 203)',
        plum: 'rgb(221, 160, 221)',
        powderblue: 'rgb(176, 224, 230)',
        purple: 'rgb(128, 0, 128)',
        red: 'rgb(255, 0, 0)',
        rosybrown: 'rgb(188, 143, 143)',
        royalblue: 'rgb( 65, 105, 225)',
        saddlebrown: 'rgb(139, 69, 19)',
        salmon: 'rgb(250, 128, 114)',
        sandybrown: 'rgb(244, 164, 96)',
        seagreen: 'rgb( 46, 139, 87)',
        seashell: 'rgb(255, 245, 238)',
        sienna: 'rgb(160, 82, 45)',
        silver: 'rgb(192, 192, 192)',
        skyblue: 'rgb(135, 206, 235)',
        slateblue: 'rgb(106, 90, 205)',
        slategray: 'rgb(112, 128, 144)',
        slategrey: 'rgb(112, 128, 144)',
        snow: 'rgb(255, 250, 250)',
        springgreen: 'rgb( 0, 255, 127)',
        steelblue: 'rgb( 70, 130, 180)',
        tan: 'rgb(210, 180, 140)',
        teal: 'rgb( 0, 128, 128)',
        thistle: 'rgb(216, 191, 216)',
        tomato: 'rgb(255, 99, 71)',
        turquoise: 'rgb( 64, 224, 208)',
        violet: 'rgb(238, 130, 238)',
        wheat: 'rgb(245, 222, 179)',
        white: 'rgb(255, 255, 255)',
        whitesmoke: 'rgb(245, 245, 245)',
        yellow: 'rgb(255, 255, 0)',
        yellowgreen: 'rgb(154, 205, 50)'
    };

    


    // class: $.jqplot.AxisLabelRenderer
    // Renderer to place labels on the axes.
    $.jqplot.AxisLabelRenderer = function(options) {
        // Group: Properties
        $.jqplot.ElemContainer.call(this);
        // name of the axis associated with this tick
        this.axis;
        // prop: show
        // whether or not to show the tick (mark and label).
        this.show = true;
        // prop: label
        // The text or html for the label.
        this.label = '';
        this.fontFamily = null;
        this.fontSize = null;
        this.textColor = null;
        this._elem;
        // prop: escapeHTML
        // true to escape HTML entities in the label.
        this.escapeHTML = false;
        
        $.extend(true, this, options);
    };
    
    $.jqplot.AxisLabelRenderer.prototype = new $.jqplot.ElemContainer();
    $.jqplot.AxisLabelRenderer.prototype.constructor = $.jqplot.AxisLabelRenderer;
    
    $.jqplot.AxisLabelRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
    
    $.jqplot.AxisLabelRenderer.prototype.draw = function(ctx, plot) {
        // Memory Leaks patch
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null;
        }

        this._elem = $('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');
        
        if (Number(this.label)) {
            this._elem.css('white-space', 'nowrap');
        }
        
        if (!this.escapeHTML) {
            this._elem.html(this.label);
        }
        else {
            this._elem.text(this.label);
        }
        if (this.fontFamily) {
            this._elem.css('font-family', this.fontFamily);
        }
        if (this.fontSize) {
            this._elem.css('font-size', this.fontSize);
        }
        if (this.textColor) {
            this._elem.css('color', this.textColor);
        }
        
        return this._elem;
    };
    
    $.jqplot.AxisLabelRenderer.prototype.pack = function() {
    };

    // class: $.jqplot.AxisTickRenderer
    // A "tick" object showing the value of a tick/gridline on the plot.
    $.jqplot.AxisTickRenderer = function(options) {
        // Group: Properties
        $.jqplot.ElemContainer.call(this);
        // prop: mark
        // tick mark on the axis.  One of 'inside', 'outside', 'cross', '' or null.
        this.mark = 'outside';
        // name of the axis associated with this tick
        this.axis;
        // prop: showMark
        // whether or not to show the mark on the axis.
        this.showMark = true;
        // prop: showGridline
        // whether or not to draw the gridline on the grid at this tick.
        this.showGridline = true;
        // prop: isMinorTick
        // if this is a minor tick.
        this.isMinorTick = false;
        // prop: size
        // Length of the tick beyond the grid in pixels.
        // DEPRECATED: This has been superceeded by markSize
        this.size = 4;
        // prop:  markSize
        // Length of the tick marks in pixels.  For 'cross' style, length
        // will be stoked above and below axis, so total length will be twice this.
        this.markSize = 6;
        // prop: show
        // whether or not to show the tick (mark and label).
        // Setting this to false requires more testing.  It is recommended
        // to set showLabel and showMark to false instead.
        this.show = true;
        // prop: showLabel
        // whether or not to show the label.
        this.showLabel = true;
        this.label = null;
        this.value = null;
        this._styles = {};
        // prop: formatter
        // A class of a formatter for the tick text.  sprintf by default.
        this.formatter = $.jqplot.DefaultTickFormatter;
        // prop: prefix
        // String to prepend to the tick label.
        // Prefix is prepended to the formatted tick label.
        this.prefix = '';
        // prop: suffix
        // String to append to the tick label.
        // Suffix is appended to the formatted tick label.
        this.suffix = '';
        // prop: formatString
        // string passed to the formatter.
        this.formatString = '';
        // prop: fontFamily
        // css spec for the font-family css attribute.
        this.fontFamily;
        // prop: fontSize
        // css spec for the font-size css attribute.
        this.fontSize;
        // prop: textColor
        // css spec for the color attribute.
        this.textColor;
        // prop: escapeHTML
        // true to escape HTML entities in the label.
        this.escapeHTML = false;
        this._elem;
        this._breakTick = false;
        
        $.extend(true, this, options);
    };
    
    $.jqplot.AxisTickRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
    
    $.jqplot.AxisTickRenderer.prototype = new $.jqplot.ElemContainer();
    $.jqplot.AxisTickRenderer.prototype.constructor = $.jqplot.AxisTickRenderer;
    
    $.jqplot.AxisTickRenderer.prototype.setTick = function(value, axisName, isMinor) {
        this.value = value;
        this.axis = axisName;
        if (isMinor) {
            this.isMinorTick = true;
        }
        return this;
    };
    
    $.jqplot.AxisTickRenderer.prototype.draw = function() {
        if (this.label === null) {
            this.label = this.prefix + this.formatter(this.formatString, this.value) + this.suffix;
        }
        var style = {position: 'absolute'};
        if (Number(this.label)) {
            style['whitSpace'] = 'nowrap';
        }
        
        // Memory Leaks patch
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null;
        }

        this._elem = $(document.createElement('div'));
        this._elem.addClass("jqplot-"+this.axis+"-tick");
        
        if (!this.escapeHTML) {
            this._elem.html(this.label);
        }
        else {
            this._elem.text(this.label);
        }
        
        this._elem.css(style);

        for (var s in this._styles) {
            this._elem.css(s, this._styles[s]);
        }
        if (this.fontFamily) {
            this._elem.css('font-family', this.fontFamily);
        }
        if (this.fontSize) {
            this._elem.css('font-size', this.fontSize);
        }
        if (this.textColor) {
            this._elem.css('color', this.textColor);
        }
        if (this._breakTick) {
          this._elem.addClass('jqplot-breakTick');
        }
        
        return this._elem;
    };
        
    $.jqplot.DefaultTickFormatter = function (format, val) {
        if (typeof val == 'number') {
            if (!format) {
                format = $.jqplot.config.defaultTickFormatString;
            }
            return $.jqplot.sprintf(format, val);
        }
        else {
            return String(val);
        }
    };
        
    $.jqplot.PercentTickFormatter = function (format, val) {
        if (typeof val == 'number') {
            val = 100 * val;
            if (!format) {
                format = $.jqplot.config.defaultTickFormatString;
            }
            return $.jqplot.sprintf(format, val);
        }
        else {
            return String(val);
        }
    };
    
    $.jqplot.AxisTickRenderer.prototype.pack = function() {
    };
     
    // Class: $.jqplot.CanvasGridRenderer
    // The default jqPlot grid renderer, creating a grid on a canvas element.
    // The renderer has no additional options beyond the <Grid> class.
    $.jqplot.CanvasGridRenderer = function(){
        this.shadowRenderer = new $.jqplot.ShadowRenderer();
    };
    
    // called with context of Grid object
    $.jqplot.CanvasGridRenderer.prototype.init = function(options) {
        this._ctx;
        $.extend(true, this, options);
        // set the shadow renderer options
        var sopts = {lineJoin:'miter', lineCap:'round', fill:false, isarc:false, angle:this.shadowAngle, offset:this.shadowOffset, alpha:this.shadowAlpha, depth:this.shadowDepth, lineWidth:this.shadowWidth, closePath:false, strokeStyle:this.shadowColor};
        this.renderer.shadowRenderer.init(sopts);
    };
    
    // called with context of Grid.
    $.jqplot.CanvasGridRenderer.prototype.createElement = function(plot) {
        var elem;
        // Memory Leaks patch
        if (this._elem) {
          if ($.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== undefined) {
            elem = this._elem.get(0);
            window.G_vmlCanvasManager.uninitElement(elem);
            elem = null;
          }
          
          this._elem.emptyForce();
          this._elem = null;
        }
      
        elem = plot.canvasManager.getCanvas();

        var w = this._plotDimensions.width;
        var h = this._plotDimensions.height;
        elem.width = w;
        elem.height = h;
        this._elem = $(elem);
        this._elem.addClass('jqplot-grid-canvas');
        this._elem.css({ position: 'absolute', left: 0, top: 0 });
        
        elem = plot.canvasManager.initCanvas(elem);

        this._top = this._offsets.top;
        this._bottom = h - this._offsets.bottom;
        this._left = this._offsets.left;
        this._right = w - this._offsets.right;
        this._width = this._right - this._left;
        this._height = this._bottom - this._top;
        // avoid memory leak
        elem = null;
        return this._elem;
    };
    
    $.jqplot.CanvasGridRenderer.prototype.draw = function() {
        this._ctx = this._elem.get(0).getContext("2d");
        var ctx = this._ctx;
        var axes = this._axes;
        // Add the grid onto the grid canvas.  This is the bottom most layer.
        ctx.save();
        ctx.clearRect(0, 0, this._plotDimensions.width, this._plotDimensions.height);
        ctx.fillStyle = this.backgroundColor || this.background;
        ctx.fillRect(this._left, this._top, this._width, this._height);
        
        ctx.save();
        ctx.lineJoin = 'miter';
        ctx.lineCap = 'butt';
        ctx.lineWidth = this.gridLineWidth;
        ctx.strokeStyle = this.gridLineColor;
        var b, e, s, m;
        var ax = ['xaxis', 'yaxis', 'x2axis', 'y2axis'];
        for (var i=4; i>0; i--) {
            var name = ax[i-1];
            var axis = axes[name];
            var ticks = axis._ticks;
            var numticks = ticks.length;
            if (axis.show) {
                if (axis.drawBaseline) {
                    var bopts = {};
                    if (axis.baselineWidth !== null) {
                        bopts.lineWidth = axis.baselineWidth;
                    }
                    if (axis.baselineColor !== null) {
                        bopts.strokeStyle = axis.baselineColor;
                    }
                    switch (name) {
                        case 'xaxis':
                            drawLine (this._left, this._bottom, this._right, this._bottom, bopts);
                            break;
                        case 'yaxis':
                            drawLine (this._left, this._bottom, this._left, this._top, bopts);
                            break;
                        case 'x2axis':
                            drawLine (this._left, this._bottom, this._right, this._bottom, bopts);
                            break;
                        case 'y2axis':
                            drawLine (this._right, this._bottom, this._right, this._top, bopts);
                            break;
                    }
                }
                for (var j=numticks; j>0; j--) {
                    var t = ticks[j-1];
                    if (t.show) {
                        var pos = Math.round(axis.u2p(t.value)) + 0.5;
                        switch (name) {
                            case 'xaxis':
                                // draw the grid line if we should
                                if (t.showGridline && this.drawGridlines && ((!t.isMinorTick && axis.drawMajorGridlines) || (t.isMinorTick && axis.drawMinorGridlines)) ) {
                                    drawLine(pos, this._top, pos, this._bottom);
                                }
                                // draw the mark
                                if (t.showMark && t.mark && ((!t.isMinorTick && axis.drawMajorTickMarks) || (t.isMinorTick && axis.drawMinorTickMarks)) ) {
                                    s = t.markSize;
                                    m = t.mark;
                                    var pos = Math.round(axis.u2p(t.value)) + 0.5;
                                    switch (m) {
                                        case 'outside':
                                            b = this._bottom;
                                            e = this._bottom+s;
                                            break;
                                        case 'inside':
                                            b = this._bottom-s;
                                            e = this._bottom;
                                            break;
                                        case 'cross':
                                            b = this._bottom-s;
                                            e = this._bottom+s;
                                            break;
                                        default:
                                            b = this._bottom;
                                            e = this._bottom+s;
                                            break;
                                    }
                                    // draw the shadow
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(ctx, [[pos,b],[pos,e]], {lineCap:'butt', lineWidth:this.gridLineWidth, offset:this.gridLineWidth*0.75, depth:2, fill:false, closePath:false});
                                    }
                                    // draw the line
                                    drawLine(pos, b, pos, e);
                                }
                                break;
                            case 'yaxis':
                                // draw the grid line
                                if (t.showGridline && this.drawGridlines && ((!t.isMinorTick && axis.drawMajorGridlines) || (t.isMinorTick && axis.drawMinorGridlines)) ) {
                                    drawLine(this._right, pos, this._left, pos);
                                }
                                // draw the mark
                                if (t.showMark && t.mark && ((!t.isMinorTick && axis.drawMajorTickMarks) || (t.isMinorTick && axis.drawMinorTickMarks)) ) {
                                    s = t.markSize;
                                    m = t.mark;
                                    var pos = Math.round(axis.u2p(t.value)) + 0.5;
                                    switch (m) {
                                        case 'outside':
                                            b = this._left-s;
                                            e = this._left;
                                            break;
                                        case 'inside':
                                            b = this._left;
                                            e = this._left+s;
                                            break;
                                        case 'cross':
                                            b = this._left-s;
                                            e = this._left+s;
                                            break;
                                        default:
                                            b = this._left-s;
                                            e = this._left;
                                            break;
                                            }
                                    // draw the shadow
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(ctx, [[b, pos], [e, pos]], {lineCap:'butt', lineWidth:this.gridLineWidth*1.5, offset:this.gridLineWidth*0.75, fill:false, closePath:false});
                                    }
                                    drawLine(b, pos, e, pos, {strokeStyle:axis.borderColor});
                                }
                                break;
                            case 'x2axis':
                                // draw the grid line
                                if (t.showGridline && this.drawGridlines && ((!t.isMinorTick && axis.drawMajorGridlines) || (t.isMinorTick && axis.drawMinorGridlines)) ) {
                                    drawLine(pos, this._bottom, pos, this._top);
                                }
                                // draw the mark
                                if (t.showMark && t.mark && ((!t.isMinorTick && axis.drawMajorTickMarks) || (t.isMinorTick && axis.drawMinorTickMarks)) ) {
                                    s = t.markSize;
                                    m = t.mark;
                                    var pos = Math.round(axis.u2p(t.value)) + 0.5;
                                    switch (m) {
                                        case 'outside':
                                            b = this._top-s;
                                            e = this._top;
                                            break;
                                        case 'inside':
                                            b = this._top;
                                            e = this._top+s;
                                            break;
                                        case 'cross':
                                            b = this._top-s;
                                            e = this._top+s;
                                            break;
                                        default:
                                            b = this._top-s;
                                            e = this._top;
                                            break;
                                            }
                                    // draw the shadow
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(ctx, [[pos,b],[pos,e]], {lineCap:'butt', lineWidth:this.gridLineWidth, offset:this.gridLineWidth*0.75, depth:2, fill:false, closePath:false});
                                    }
                                    drawLine(pos, b, pos, e);
                                }
                                break;
                            case 'y2axis':
                                // draw the grid line
                                if (t.showGridline && this.drawGridlines && ((!t.isMinorTick && axis.drawMajorGridlines) || (t.isMinorTick && axis.drawMinorGridlines)) ) {
                                    drawLine(this._left, pos, this._right, pos);
                                }
                                // draw the mark
                                if (t.showMark && t.mark && ((!t.isMinorTick && axis.drawMajorTickMarks) || (t.isMinorTick && axis.drawMinorTickMarks)) ) {
                                    s = t.markSize;
                                    m = t.mark;
                                    var pos = Math.round(axis.u2p(t.value)) + 0.5;
                                    switch (m) {
                                        case 'outside':
                                            b = this._right;
                                            e = this._right+s;
                                            break;
                                        case 'inside':
                                            b = this._right-s;
                                            e = this._right;
                                            break;
                                        case 'cross':
                                            b = this._right-s;
                                            e = this._right+s;
                                            break;
                                        default:
                                            b = this._right;
                                            e = this._right+s;
                                            break;
                                            }
                                    // draw the shadow
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(ctx, [[b, pos], [e, pos]], {lineCap:'butt', lineWidth:this.gridLineWidth*1.5, offset:this.gridLineWidth*0.75, fill:false, closePath:false});
                                    }
                                    drawLine(b, pos, e, pos, {strokeStyle:axis.borderColor});
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
                t = null;
            }
            axis = null;
            ticks = null;
        }
        // Now draw grid lines for additional y axes
        //////
        // TO DO: handle yMidAxis
        //////
        ax = ['y3axis', 'y4axis', 'y5axis', 'y6axis', 'y7axis', 'y8axis', 'y9axis', 'yMidAxis'];
        for (var i=7; i>0; i--) {
            var axis = axes[ax[i-1]];
            var ticks = axis._ticks;
            if (axis.show) {
                var tn = ticks[axis.numberTicks-1];
                var t0 = ticks[0];
                var left = axis.getLeft();
                var points = [[left, tn.getTop() + tn.getHeight()/2], [left, t0.getTop() + t0.getHeight()/2 + 1.0]];
                // draw the shadow
                if (this.shadow) {
                    this.renderer.shadowRenderer.draw(ctx, points, {lineCap:'butt', fill:false, closePath:false});
                }
                // draw the line
                drawLine(points[0][0], points[0][1], points[1][0], points[1][1], {lineCap:'butt', strokeStyle:axis.borderColor, lineWidth:axis.borderWidth});
                // draw the tick marks
                for (var j=ticks.length; j>0; j--) {
                    var t = ticks[j-1];
                    s = t.markSize;
                    m = t.mark;
                    var pos = Math.round(axis.u2p(t.value)) + 0.5;
                    if (t.showMark && t.mark) {
                        switch (m) {
                            case 'outside':
                                b = left;
                                e = left+s;
                                break;
                            case 'inside':
                                b = left-s;
                                e = left;
                                break;
                            case 'cross':
                                b = left-s;
                                e = left+s;
                                break;
                            default:
                                b = left;
                                e = left+s;
                                break;
                        }
                        points = [[b,pos], [e,pos]];
                        // draw the shadow
                        if (this.shadow) {
                            this.renderer.shadowRenderer.draw(ctx, points, {lineCap:'butt', lineWidth:this.gridLineWidth*1.5, offset:this.gridLineWidth*0.75, fill:false, closePath:false});
                        }
                        // draw the line
                        drawLine(b, pos, e, pos, {strokeStyle:axis.borderColor});
                    }
                    t = null;
                }
                t0 = null;
            }
            axis = null;
            ticks =  null;
        }
        
        ctx.restore();
        
        function drawLine(bx, by, ex, ey, opts) {
            ctx.save();
            opts = opts || {};
            if (opts.lineWidth == null || opts.lineWidth != 0){
                $.extend(true, ctx, opts);
                ctx.beginPath();
                ctx.moveTo(bx, by);
                ctx.lineTo(ex, ey);
                ctx.stroke();
                ctx.restore();
            }
        }
        
        if (this.shadow) {
            var points = [[this._left, this._bottom], [this._right, this._bottom], [this._right, this._top]];
            this.renderer.shadowRenderer.draw(ctx, points);
        }
        // Now draw border around grid.  Use axis border definitions. start at
        // upper left and go clockwise.
        if (this.borderWidth != 0 && this.drawBorder) {
            drawLine (this._left, this._top, this._right, this._top, {lineCap:'round', strokeStyle:axes.x2axis.borderColor, lineWidth:axes.x2axis.borderWidth});
            drawLine (this._right, this._top, this._right, this._bottom, {lineCap:'round', strokeStyle:axes.y2axis.borderColor, lineWidth:axes.y2axis.borderWidth});
            drawLine (this._right, this._bottom, this._left, this._bottom, {lineCap:'round', strokeStyle:axes.xaxis.borderColor, lineWidth:axes.xaxis.borderWidth});
            drawLine (this._left, this._bottom, this._left, this._top, {lineCap:'round', strokeStyle:axes.yaxis.borderColor, lineWidth:axes.yaxis.borderWidth});
        }
        // ctx.lineWidth = this.borderWidth;
        // ctx.strokeStyle = this.borderColor;
        // ctx.strokeRect(this._left, this._top, this._width, this._height);
        
        ctx.restore();
        ctx =  null;
        axes = null;
    };
 
    // Class: $.jqplot.DivTitleRenderer
    // The default title renderer for jqPlot.  This class has no options beyond the <Title> class. 
    $.jqplot.DivTitleRenderer = function() {
    };
    
    $.jqplot.DivTitleRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
    
    $.jqplot.DivTitleRenderer.prototype.draw = function() {
        // Memory Leaks patch
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null;
        }

        var r = this.renderer;
        var elem = document.createElement('div');
        this._elem = $(elem);
        this._elem.addClass('jqplot-title');

        if (!this.text) {
            this.show = false;
            this._elem.height(0);
            this._elem.width(0);
        }
        else if (this.text) {
            var color;
            if (this.color) {
                color = this.color;
            }
            else if (this.textColor) {
                color = this.textColor;
            }

            // don't trust that a stylesheet is present, set the position.
            var styles = {position:'absolute', top:'0px', left:'0px'};

            if (this._plotWidth) {
                styles['width'] = this._plotWidth+'px';
            }
            if (this.fontSize) {
                styles['fontSize'] = this.fontSize;
            }
            if (typeof this.textAlign === 'string') {
                styles['textAlign'] = this.textAlign;
            }
            else {
                styles['textAlign'] = 'center';
            }
            if (color) {
                styles['color'] = color;
            }
            if (this.paddingBottom) {
                styles['paddingBottom'] = this.paddingBottom;
            }
            if (this.fontFamily) {
                styles['fontFamily'] = this.fontFamily;
            }

            this._elem.css(styles);
            if (this.escapeHtml) {
                this._elem.text(this.text);
            }
            else {
                this._elem.html(this.text);
            }


            // styletext += (this._plotWidth) ? 'width:'+this._plotWidth+'px;' : '';
            // styletext += (this.fontSize) ? 'font-size:'+this.fontSize+';' : '';
            // styletext += (this.textAlign) ? 'text-align:'+this.textAlign+';' : 'text-align:center;';
            // styletext += (color) ? 'color:'+color+';' : '';
            // styletext += (this.paddingBottom) ? 'padding-bottom:'+this.paddingBottom+';' : '';
            // this._elem = $('<div class="jqplot-title" style="'+styletext+'">'+this.text+'</div>');
            // if (this.fontFamily) {
            //     this._elem.css('font-family', this.fontFamily);
            // }
        }

        elem = null;
        
        return this._elem;
    };
    
    $.jqplot.DivTitleRenderer.prototype.pack = function() {
        // nothing to do here
    };
  

    var dotlen = 0.1;

    $.jqplot.LinePattern = function (ctx, pattern) {

        var defaultLinePatterns = {
            dotted: [ dotlen, $.jqplot.config.dotGapLength ],
            dashed: [ $.jqplot.config.dashLength, $.jqplot.config.gapLength ],
            solid: null
        };

        if (typeof pattern === 'string') {
            if (pattern[0] === '.' || pattern[0] === '-') {
                var s = pattern;
                pattern = [];
                for (var i=0, imax=s.length; i<imax; i++) {
                    if (s[i] === '.') {
                        pattern.push( dotlen );
                    }
                    else if (s[i] === '-') {
                        pattern.push( $.jqplot.config.dashLength );
                    }
                    else {
                        continue;
                    }
                    pattern.push( $.jqplot.config.gapLength );
                }
            }
            else {
                pattern = defaultLinePatterns[pattern];
            }
        }

        if (!(pattern && pattern.length)) {
            return ctx;
        }

        var patternIndex = 0;
        var patternDistance = pattern[0];
        var px = 0;
        var py = 0;
        var pathx0 = 0;
        var pathy0 = 0;

        var moveTo = function (x, y) {
            ctx.moveTo( x, y );
            px = x;
            py = y;
            pathx0 = x;
            pathy0 = y;
        };

        var lineTo = function (x, y) {
            var scale = ctx.lineWidth;
            var dx = x - px;
            var dy = y - py;
            var dist = Math.sqrt(dx*dx+dy*dy);
            if ((dist > 0) && (scale > 0)) {
                dx /= dist;
                dy /= dist;
                while (true) {
                    var dp = scale * patternDistance;
                    if (dp < dist) {
                        px += dp * dx;
                        py += dp * dy;
                        if ((patternIndex & 1) == 0) {
                            ctx.lineTo( px, py );
                        }
                        else {
                            ctx.moveTo( px, py );
                        }
                        dist -= dp;
                        patternIndex++;
                        if (patternIndex >= pattern.length) {
                            patternIndex = 0;
                        }
                        patternDistance = pattern[patternIndex];
                    }
                    else {
                        px = x;
                        py = y;
                        if ((patternIndex & 1) == 0) {
                            ctx.lineTo( px, py );
                        }
                        else {
                            ctx.moveTo( px, py );
                        }
                        patternDistance -= dist / scale;
                        break;
                    }
                }
            }
        };

        var beginPath = function () {
            ctx.beginPath();
        };

        var closePath = function () {
            lineTo( pathx0, pathy0 );
        };

        return {
            moveTo: moveTo,
            lineTo: lineTo,
            beginPath: beginPath,
            closePath: closePath
        };
    };

    // Class: $.jqplot.LineRenderer
    // The default line renderer for jqPlot, this class has no options beyond the <Series> class.
    // Draws series as a line.
    $.jqplot.LineRenderer = function(){
        this.shapeRenderer = new $.jqplot.ShapeRenderer();
        this.shadowRenderer = new $.jqplot.ShadowRenderer();
    };
    
    // called with scope of series.
    $.jqplot.LineRenderer.prototype.init = function(options, plot) {
        // Group: Properties
        //
        options = options || {};
        this._type='line';
        this.renderer.animation = {
            show: false,
            direction: 'left',
            speed: 2500,
            _supported: true
        };
        // prop: smooth
        // True to draw a smoothed (interpolated) line through the data points
        // with automatically computed number of smoothing points.
        // Set to an integer number > 2 to specify number of smoothing points
        // to use between each data point.
        this.renderer.smooth = false;  // true or a number > 2 for smoothing.
        this.renderer.tension = null; // null to auto compute or a number typically > 6.  Fewer points requires higher tension.
        // prop: constrainSmoothing
        // True to use a more accurate smoothing algorithm that will
        // not overshoot any data points.  False to allow overshoot but
        // produce a smoother looking line.
        this.renderer.constrainSmoothing = true;
        // this is smoothed data in grid coordinates, like gridData
        this.renderer._smoothedData = [];
        // this is smoothed data in plot units (plot coordinates), like plotData.
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];

        // prop: bandData
        // Data used to draw error bands or confidence intervals above/below a line.
        //
        // bandData can be input in 3 forms.  jqPlot will figure out which is the
        // low band line and which is the high band line for all forms:
        // 
        // A 2 dimensional array like [[yl1, yl2, ...], [yu1, yu2, ...]] where
        // [yl1, yl2, ...] are y values of the lower line and
        // [yu1, yu2, ...] are y values of the upper line.
        // In this case there must be the same number of y data points as data points
        // in the series and the bands will inherit the x values of the series.
        //
        // A 2 dimensional array like [[[xl1, yl1], [xl2, yl2], ...], [[xh1, yh1], [xh2, yh2], ...]]
        // where [xl1, yl1] are x,y data points for the lower line and
        // [xh1, yh1] are x,y data points for the high line.
        // x values do not have to correspond to the x values of the series and can
        // be of any arbitrary length.
        //
        // Can be of form [[yl1, yu1], [yl2, yu2], [yl3, yu3], ...] where
        // there must be 3 or more arrays and there must be the same number of arrays
        // as there are data points in the series.  In this case, 
        // [yl1, yu1] specifies the lower and upper y values for the 1st
        // data point and so on.  The bands will inherit the x
        // values from the series.
        this.renderer.bandData = [];

        // Group: bands
        // Banding around line, e.g error bands or confidence intervals.
        this.renderer.bands = {
            // prop: show
            // true to show the bands.  If bandData or interval is
            // supplied, show will be set to true by default.
            show: false,
            hiData: [],
            lowData: [],
            // prop: color
            // color of lines at top and bottom of bands [default: series color].
            color: this.color,
            // prop: showLines
            // True to show lines at top and bottom of bands [default: false].
            showLines: false,
            // prop: fill
            // True to fill area between bands [default: true].
            fill: true,
            // prop: fillColor
            // css color spec for filled area.  [default: series color].
            fillColor: null,
            _min: null,
            _max: null,
            // prop: interval
            // User specified interval above and below line for bands [default: '3%''].
            // Can be a value like 3 or a string like '3%' 
            // or an upper/lower array like [1, -2] or ['2%', '-1.5%']
            interval: '3%'
        };


        var lopts = {highlightMouseOver: options.highlightMouseOver, highlightMouseDown: options.highlightMouseDown, highlightColor: options.highlightColor};
        
        delete (options.highlightMouseOver);
        delete (options.highlightMouseDown);
        delete (options.highlightColor);
        
        $.extend(true, this.renderer, options);

        this.renderer.options = options;

        // if we are given some band data, and bands aren't explicity set to false in options, turn them on.
        if (this.renderer.bandData.length > 1 && (!options.bands || options.bands.show == null)) {
            this.renderer.bands.show = true;
        }

        // if we are given an interval, and bands aren't explicity set to false in options, turn them on.
        else if (options.bands && options.bands.show == null && options.bands.interval != null) {
            this.renderer.bands.show = true;
        }

        // if plot is filled, turn off bands.
        if (this.fill) {
            this.renderer.bands.show = false;
        }

        if (this.renderer.bands.show) {
            this.renderer.initBands.call(this, this.renderer.options, plot);
        }


        // smoothing is not compatible with stacked lines, disable
        if (this._stack) {
            this.renderer.smooth = false;
        }

        // set the shape renderer options
        var opts = {lineJoin:this.lineJoin, lineCap:this.lineCap, fill:this.fill, isarc:false, strokeStyle:this.color, fillStyle:this.fillColor, lineWidth:this.lineWidth, linePattern:this.linePattern, closePath:this.fill};
        this.renderer.shapeRenderer.init(opts);

        var shadow_offset = options.shadowOffset;
        // set the shadow renderer options
        if (shadow_offset == null) {
            // scale the shadowOffset to the width of the line.
            if (this.lineWidth > 2.5) {
                shadow_offset = 1.25 * (1 + (Math.atan((this.lineWidth/2.5))/0.785398163 - 1)*0.6);
                // var shadow_offset = this.shadowOffset;
            }
            // for skinny lines, don't make such a big shadow.
            else {
                shadow_offset = 1.25 * Math.atan((this.lineWidth/2.5))/0.785398163;
            }
        }
        
        var sopts = {lineJoin:this.lineJoin, lineCap:this.lineCap, fill:this.fill, isarc:false, angle:this.shadowAngle, offset:shadow_offset, alpha:this.shadowAlpha, depth:this.shadowDepth, lineWidth:this.lineWidth, linePattern:this.linePattern, closePath:this.fill};
        this.renderer.shadowRenderer.init(sopts);
        this._areaPoints = [];
        this._boundingBox = [[],[]];
        
        if (!this.isTrendline && this.fill || this.renderer.bands.show) {
            // Group: Properties
            //        
            // prop: highlightMouseOver
            // True to highlight area on a filled plot when moused over.
            // This must be false to enable highlightMouseDown to highlight when clicking on an area on a filled plot.
            this.highlightMouseOver = true;
            // prop: highlightMouseDown
            // True to highlight when a mouse button is pressed over an area on a filled plot.
            // This will be disabled if highlightMouseOver is true.
            this.highlightMouseDown = false;
            // prop: highlightColor
            // color to use when highlighting an area on a filled plot.
            this.highlightColor = null;
            // if user has passed in highlightMouseDown option and not set highlightMouseOver, disable highlightMouseOver
            if (lopts.highlightMouseDown && lopts.highlightMouseOver == null) {
                lopts.highlightMouseOver = false;
            }
        
            $.extend(true, this, {highlightMouseOver: lopts.highlightMouseOver, highlightMouseDown: lopts.highlightMouseDown, highlightColor: lopts.highlightColor});
            
            if (!this.highlightColor) {
                var fc = (this.renderer.bands.show) ? this.renderer.bands.fillColor : this.fillColor;
                this.highlightColor = $.jqplot.computeHighlightColors(fc);
            }
            // turn off (disable) the highlighter plugin
            if (this.highlighter) {
                this.highlighter.show = false;
            }
        }
        
        if (!this.isTrendline && plot) {
            plot.plugins.lineRenderer = {};
            plot.postInitHooks.addOnce(postInit);
            plot.postDrawHooks.addOnce(postPlotDraw);
            plot.eventListenerHooks.addOnce('jqplotMouseMove', handleMove);
            plot.eventListenerHooks.addOnce('jqplotMouseDown', handleMouseDown);
            plot.eventListenerHooks.addOnce('jqplotMouseUp', handleMouseUp);
            plot.eventListenerHooks.addOnce('jqplotClick', handleClick);
            plot.eventListenerHooks.addOnce('jqplotRightClick', handleRightClick);
        }

    };

    $.jqplot.LineRenderer.prototype.initBands = function(options, plot) {
        // use bandData if no data specified in bands option
        //var bd = this.renderer.bandData;
        var bd = options.bandData || [];
        var bands = this.renderer.bands;
        bands.hiData = [];
        bands.lowData = [];
        var data = this.data;
        bands._max = null;
        bands._min = null;
        // If 2 arrays, and each array greater than 2 elements, assume it is hi and low data bands of y values.
        if (bd.length == 2) {
            // Do we have an array of x,y values?
            // like [[[1,1], [2,4], [3,3]], [[1,3], [2,6], [3,5]]]
            if ($.isArray(bd[0][0])) {
                // since an arbitrary array of points, spin through all of them to determine max and min lines.

                var p;
                var bdminidx = 0, bdmaxidx = 0;
                for (var i = 0, l = bd[0].length; i<l; i++) {
                    p = bd[0][i];
                    if ((p[1] != null && p[1] > bands._max) || bands._max == null) {
                        bands._max = p[1];
                    }
                    if ((p[1] != null && p[1] < bands._min) || bands._min == null) {
                        bands._min = p[1];
                    }
                }
                for (var i = 0, l = bd[1].length; i<l; i++) {
                    p = bd[1][i];
                    if ((p[1] != null && p[1] > bands._max) || bands._max == null) {
                        bands._max = p[1];
                        bdmaxidx = 1;
                    }
                    if ((p[1] != null && p[1] < bands._min) || bands._min == null) {
                        bands._min = p[1];
                        bdminidx = 1;
                    }
                }

                if (bdmaxidx === bdminidx) {
                    bands.show = false;
                }

                bands.hiData = bd[bdmaxidx];
                bands.lowData = bd[bdminidx];
            }
            // else data is arrays of y values
            // like [[1,4,3], [3,6,5]]
            // must have same number of band data points as points in series
            else if (bd[0].length === data.length && bd[1].length === data.length) {
                var hi = (bd[0][0] > bd[1][0]) ? 0 : 1;
                var low = (hi) ? 0 : 1;
                for (var i=0, l=data.length; i < l; i++) {
                    bands.hiData.push([data[i][0], bd[hi][i]]);
                    bands.lowData.push([data[i][0], bd[low][i]]);
                }
            }

            // we don't have proper data array, don't show bands.
            else {
                bands.show = false;
            }
        }

        // if more than 2 arrays, have arrays of [ylow, yhi] values.
        // note, can't distinguish case of [[ylow, yhi], [ylow, yhi]] from [[ylow, ylow], [yhi, yhi]]
        // this is assumed to be of the latter form.
        else if (bd.length > 2 && !$.isArray(bd[0][0])) {
            var hi = (bd[0][0] > bd[0][1]) ? 0 : 1;
            var low = (hi) ? 0 : 1;
            for (var i=0, l=bd.length; i<l; i++) {
                bands.hiData.push([data[i][0], bd[i][hi]]);
                bands.lowData.push([data[i][0], bd[i][low]]);
            }
        }

        // don't have proper data, auto calculate
        else {
            var intrv = bands.interval;
            var a = null;
            var b = null;
            var afunc = null;
            var bfunc = null;

            if ($.isArray(intrv)) {
                a = intrv[0];
                b = intrv[1];
            }
            else {
                a = intrv;
            }

            if (isNaN(a)) {
                // we have a string
                if (a.charAt(a.length - 1) === '%') {
                    afunc = 'multiply';
                    a = parseFloat(a)/100 + 1;
                }
            }

            else {
                a = parseFloat(a);
                afunc = 'add';
            }

            if (b !== null && isNaN(b)) {
                // we have a string
                if (b.charAt(b.length - 1) === '%') {
                    bfunc = 'multiply';
                    b = parseFloat(b)/100 + 1;
                }
            }

            else if (b !== null) {
                b = parseFloat(b);
                bfunc = 'add';
            }

            if (a !== null) {
                if (b === null) {
                    b = -a;
                    bfunc = afunc;
                    if (bfunc === 'multiply') {
                        b += 2;
                    }
                }

                // make sure a always applies to hi band.
                if (a < b) {
                    var temp = a;
                    a = b;
                    b = temp;
                    temp = afunc;
                    afunc = bfunc;
                    bfunc = temp;
                }

                for (var i=0, l = data.length; i < l; i++) {
                    switch (afunc) {
                        case 'add':
                            bands.hiData.push([data[i][0], data[i][1] + a]);
                            break;
                        case 'multiply':
                            bands.hiData.push([data[i][0], data[i][1] * a]);
                            break;
                    }
                    switch (bfunc) {
                        case 'add':
                            bands.lowData.push([data[i][0], data[i][1] + b]);
                            break;
                        case 'multiply':
                            bands.lowData.push([data[i][0], data[i][1] * b]);
                            break;
                    }
                }
            }

            else {
                bands.show = false;
            }
        }

        var hd = bands.hiData;
        var ld = bands.lowData;
        for (var i = 0, l = hd.length; i<l; i++) {
            if ((hd[i][1] != null && hd[i][1] > bands._max) || bands._max == null) {
                bands._max = hd[i][1];
            }
        }
        for (var i = 0, l = ld.length; i<l; i++) {
            if ((ld[i][1] != null && ld[i][1] < bands._min) || bands._min == null) {
                bands._min = ld[i][1];
            }
        }

        // one last check for proper data
        // these don't apply any more since allowing arbitrary x,y values
        // if (bands.hiData.length != bands.lowData.length) {
        //     bands.show = false;
        // }

        // if (bands.hiData.length != this.data.length) {
        //     bands.show = false;
        // }

        if (bands.fillColor === null) {
            var c = $.jqplot.getColorComponents(bands.color);
            // now adjust alpha to differentiate fill
            c[3] = c[3] * 0.5;
            bands.fillColor = 'rgba(' + c[0] +', '+ c[1] +', '+ c[2] +', '+ c[3] + ')';
        }
    };

    function getSteps (d, f) {
        return (3.4182054+f) * Math.pow(d, -0.3534992);
    }

    function computeSteps (d1, d2) {
        var s = Math.sqrt(Math.pow((d2[0]- d1[0]), 2) + Math.pow ((d2[1] - d1[1]), 2));
        return 5.7648 * Math.log(s) + 7.4456;
    }

    function tanh (x) {
        var a = (Math.exp(2*x) - 1) / (Math.exp(2*x) + 1);
        return a;
    }

    //////////
    // computeConstrainedSmoothedData
    // An implementation of the constrained cubic spline interpolation
    // method as presented in:
    //
    // Kruger, CJC, Constrained Cubic Spine Interpolation for Chemical Engineering Applications
    // http://www.korf.co.uk/spline.pdf
    //
    // The implementation below borrows heavily from the sample Visual Basic
    // implementation by CJC Kruger found in http://www.korf.co.uk/spline.xls
    //
    /////////

    // called with scope of series
    function computeConstrainedSmoothedData (gd) {
        var smooth = this.renderer.smooth;
        var dim = this.canvas.getWidth();
        var xp = this._xaxis.series_p2u;
        var yp = this._yaxis.series_p2u; 
        var steps =null;
        var _steps = null;
        var dist = gd.length/dim;
        var _smoothedData = [];
        var _smoothedPlotData = [];

        if (!isNaN(parseFloat(smooth))) {
            steps = parseFloat(smooth);
        }
        else {
            steps = getSteps(dist, 0.5);
        }

        var yy = [];
        var xx = [];

        for (var i=0, l = gd.length; i<l; i++) {
            yy.push(gd[i][1]);
            xx.push(gd[i][0]);
        }

        function dxx(x1, x0) {
            if (x1 - x0 == 0) {
                return Math.pow(10,10);
            }
            else {
                return x1 - x0;
            }
        }

        var A, B, C, D;
        // loop through each line segment.  Have # points - 1 line segments.  Nmber segments starting at 1.
        var nmax = gd.length - 1;
        for (var num = 1, gdl = gd.length; num<gdl; num++) {
            var gxx = [];
            var ggxx = [];
            // point at each end of segment.
            for (var j = 0; j < 2; j++) {
                var i = num - 1 + j; // point number, 0 to # points.

                if (i == 0 || i == nmax) {
                    gxx[j] = Math.pow(10, 10);
                }
                else if (yy[i+1] - yy[i] == 0 || yy[i] - yy[i-1] == 0) {
                    gxx[j] = 0;
                }
                else if (((xx[i+1] - xx[i]) / (yy[i+1] - yy[i]) + (xx[i] - xx[i-1]) / (yy[i] - yy[i-1])) == 0 ) {
                    gxx[j] = 0;
                }
                else if ( (yy[i+1] - yy[i]) * (yy[i] - yy[i-1]) < 0 ) {
                    gxx[j] = 0;
                }

                else {
                    gxx[j] = 2 / (dxx(xx[i + 1], xx[i]) / (yy[i + 1] - yy[i]) + dxx(xx[i], xx[i - 1]) / (yy[i] - yy[i - 1]));
                }
            }

            // Reset first derivative (slope) at first and last point
            if (num == 1) {
                // First point has 0 2nd derivative
                gxx[0] = 3 / 2 * (yy[1] - yy[0]) / dxx(xx[1], xx[0]) - gxx[1] / 2;
            }
            else if (num == nmax) {
                // Last point has 0 2nd derivative
                gxx[1] = 3 / 2 * (yy[nmax] - yy[nmax - 1]) / dxx(xx[nmax], xx[nmax - 1]) - gxx[0] / 2;
            }   

            // Calc second derivative at points
            ggxx[0] = -2 * (gxx[1] + 2 * gxx[0]) / dxx(xx[num], xx[num - 1]) + 6 * (yy[num] - yy[num - 1]) / Math.pow(dxx(xx[num], xx[num - 1]), 2);
            ggxx[1] = 2 * (2 * gxx[1] + gxx[0]) / dxx(xx[num], xx[num - 1]) - 6 * (yy[num] - yy[num - 1]) / Math.pow(dxx(xx[num], xx[num - 1]), 2);

            // Calc constants for cubic interpolation
            D = 1 / 6 * (ggxx[1] - ggxx[0]) / dxx(xx[num], xx[num - 1]);
            C = 1 / 2 * (xx[num] * ggxx[0] - xx[num - 1] * ggxx[1]) / dxx(xx[num], xx[num - 1]);
            B = (yy[num] - yy[num - 1] - C * (Math.pow(xx[num], 2) - Math.pow(xx[num - 1], 2)) - D * (Math.pow(xx[num], 3) - Math.pow(xx[num - 1], 3))) / dxx(xx[num], xx[num - 1]);
            A = yy[num - 1] - B * xx[num - 1] - C * Math.pow(xx[num - 1], 2) - D * Math.pow(xx[num - 1], 3);

            var increment = (xx[num] - xx[num - 1]) / steps;
            var temp, tempx;

            for (var j = 0, l = steps; j < l; j++) {
                temp = [];
                tempx = xx[num - 1] + j * increment;
                temp.push(tempx);
                temp.push(A + B * tempx + C * Math.pow(tempx, 2) + D * Math.pow(tempx, 3));
                _smoothedData.push(temp);
                _smoothedPlotData.push([xp(temp[0]), yp(temp[1])]);
            }
        }

        _smoothedData.push(gd[i]);
        _smoothedPlotData.push([xp(gd[i][0]), yp(gd[i][1])]);

        return [_smoothedData, _smoothedPlotData];
    }

    ///////
    // computeHermiteSmoothedData
    // A hermite spline smoothing of the plot data.
    // This implementation is derived from the one posted
    // by krypin on the jqplot-users mailing list:
    //
    // http://groups.google.com/group/jqplot-users/browse_thread/thread/748be6a445723cea?pli=1
    //
    // with a blog post:
    //
    // http://blog.statscollector.com/a-plugin-renderer-for-jqplot-to-draw-a-hermite-spline/
    //
    // and download of the original plugin:
    //
    // http://blog.statscollector.com/wp-content/uploads/2010/02/jqplot.hermiteSplineRenderer.js
    //////////

    // called with scope of series
    function computeHermiteSmoothedData (gd) {
        var smooth = this.renderer.smooth;
        var tension = this.renderer.tension;
        var dim = this.canvas.getWidth();
        var xp = this._xaxis.series_p2u;
        var yp = this._yaxis.series_p2u; 
        var steps =null;
        var _steps = null;
        var a = null;
        var a1 = null;
        var a2 = null;
        var slope = null;
        var slope2 = null;
        var temp = null;
        var t, s, h1, h2, h3, h4;
        var TiX, TiY, Ti1X, Ti1Y;
        var pX, pY, p;
        var sd = [];
        var spd = [];
        var dist = gd.length/dim;
        var min, max, stretch, scale, shift;
        var _smoothedData = [];
        var _smoothedPlotData = [];
        if (!isNaN(parseFloat(smooth))) {
            steps = parseFloat(smooth);
        }
        else {
            steps = getSteps(dist, 0.5);
        }
        if (!isNaN(parseFloat(tension))) {
            tension = parseFloat(tension);
        }

        for (var i=0, l = gd.length-1; i < l; i++) {

            if (tension === null) {
                slope = Math.abs((gd[i+1][1] - gd[i][1]) / (gd[i+1][0] - gd[i][0]));

                min = 0.3;
                max = 0.6;
                stretch = (max - min)/2.0;
                scale = 2.5;
                shift = -1.4;

                temp = slope/scale + shift;

                a1 = stretch * tanh(temp) - stretch * tanh(shift) + min;

                // if have both left and right line segments, will use  minimum tension. 
                if (i > 0) {
                    slope2 = Math.abs((gd[i][1] - gd[i-1][1]) / (gd[i][0] - gd[i-1][0]));
                }
                temp = slope2/scale + shift;

                a2 = stretch * tanh(temp) - stretch * tanh(shift) + min;

                a = (a1 + a2)/2.0;

            }
            else {
                a = tension;
            }
            for (t=0; t < steps; t++) {
                s = t / steps;
                h1 = (1 + 2*s)*Math.pow((1-s),2);
                h2 = s*Math.pow((1-s),2);
                h3 = Math.pow(s,2)*(3-2*s);
                h4 = Math.pow(s,2)*(s-1);     
                
                if (gd[i-1]) {  
                    TiX = a * (gd[i+1][0] - gd[i-1][0]); 
                    TiY = a * (gd[i+1][1] - gd[i-1][1]);
                } else {
                    TiX = a * (gd[i+1][0] - gd[i][0]); 
                    TiY = a * (gd[i+1][1] - gd[i][1]);                                  
                }
                if (gd[i+2]) {  
                    Ti1X = a * (gd[i+2][0] - gd[i][0]); 
                    Ti1Y = a * (gd[i+2][1] - gd[i][1]);
                } else {
                    Ti1X = a * (gd[i+1][0] - gd[i][0]); 
                    Ti1Y = a * (gd[i+1][1] - gd[i][1]);                                 
                }
                
                pX = h1*gd[i][0] + h3*gd[i+1][0] + h2*TiX + h4*Ti1X;
                pY = h1*gd[i][1] + h3*gd[i+1][1] + h2*TiY + h4*Ti1Y;
                p = [pX, pY];

                _smoothedData.push(p);
                _smoothedPlotData.push([xp(pX), yp(pY)]);
            }
        }
        _smoothedData.push(gd[l]);
        _smoothedPlotData.push([xp(gd[l][0]), yp(gd[l][1])]);

        return [_smoothedData, _smoothedPlotData];
    }
    
    // setGridData
    // converts the user data values to grid coordinates and stores them
    // in the gridData array.
    // Called with scope of a series.
    $.jqplot.LineRenderer.prototype.setGridData = function(plot) {
        // recalculate the grid data
        var xp = this._xaxis.series_u2p;
        var yp = this._yaxis.series_u2p;
        var data = this._plotData;
        var pdata = this._prevPlotData;
        this.gridData = [];
        this._prevGridData = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var bands = this.renderer.bands;
        var hasNull = false;
        for (var i=0, l=data.length; i < l; i++) {
            // if not a line series or if no nulls in data, push the converted point onto the array.
            if (data[i][0] != null && data[i][1] != null) {
                this.gridData.push([xp.call(this._xaxis, data[i][0]), yp.call(this._yaxis, data[i][1])]);
            }
            // else if there is a null, preserve it.
            else if (data[i][0] == null) {
                hasNull = true;
                this.gridData.push([null, yp.call(this._yaxis, data[i][1])]);
            }
            else if (data[i][1] == null) {
                hasNull = true;
                this.gridData.push([xp.call(this._xaxis, data[i][0]), null]);
            }
            // if not a line series or if no nulls in data, push the converted point onto the array.
            if (pdata[i] != null && pdata[i][0] != null && pdata[i][1] != null) {
                this._prevGridData.push([xp.call(this._xaxis, pdata[i][0]), yp.call(this._yaxis, pdata[i][1])]);
            }
            // else if there is a null, preserve it.
            else if (pdata[i] != null && pdata[i][0] == null) {
                this._prevGridData.push([null, yp.call(this._yaxis, pdata[i][1])]);
            }  
            else if (pdata[i] != null && pdata[i][0] != null && pdata[i][1] == null) {
                this._prevGridData.push([xp.call(this._xaxis, pdata[i][0]), null]);
            }
        }

        // don't do smoothing or bands on broken lines.
        if (hasNull) {
            this.renderer.smooth = false;
            if (this._type === 'line') {
                bands.show = false;
            }
        }

        if (this._type === 'line' && bands.show) {
            for (var i=0, l=bands.hiData.length; i<l; i++) {
                this.renderer._hiBandGridData.push([xp.call(this._xaxis, bands.hiData[i][0]), yp.call(this._yaxis, bands.hiData[i][1])]);
            }
            for (var i=0, l=bands.lowData.length; i<l; i++) {
                this.renderer._lowBandGridData.push([xp.call(this._xaxis, bands.lowData[i][0]), yp.call(this._yaxis, bands.lowData[i][1])]);
            }
        }

        // calculate smoothed data if enough points and no nulls
        if (this._type === 'line' && this.renderer.smooth && this.gridData.length > 2) {
            var ret;
            if (this.renderer.constrainSmoothing) {
                ret = computeConstrainedSmoothedData.call(this, this.gridData);
                this.renderer._smoothedData = ret[0];
                this.renderer._smoothedPlotData = ret[1];

                if (bands.show) {
                    ret = computeConstrainedSmoothedData.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = ret[0];
                    ret = computeConstrainedSmoothedData.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = ret[0];
                }

                ret = null;
            }
            else {
                ret = computeHermiteSmoothedData.call(this, this.gridData);
                this.renderer._smoothedData = ret[0];
                this.renderer._smoothedPlotData = ret[1];

                if (bands.show) {
                    ret = computeHermiteSmoothedData.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = ret[0];
                    ret = computeHermiteSmoothedData.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = ret[0];
                }

                ret = null;
            }
        }
    };
    
    // makeGridData
    // converts any arbitrary data values to grid coordinates and
    // returns them.  This method exists so that plugins can use a series'
    // linerenderer to generate grid data points without overwriting the
    // grid data associated with that series.
    // Called with scope of a series.
    $.jqplot.LineRenderer.prototype.makeGridData = function(data, plot) {
        // recalculate the grid data
        var xp = this._xaxis.series_u2p;
        var yp = this._yaxis.series_u2p;
        var gd = [];
        var pgd = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var bands = this.renderer.bands;
        var hasNull = false;
        for (var i=0; i<data.length; i++) {
            // if not a line series or if no nulls in data, push the converted point onto the array.
            if (data[i][0] != null && data[i][1] != null) {
                gd.push([xp.call(this._xaxis, data[i][0]), yp.call(this._yaxis, data[i][1])]);
            }
            // else if there is a null, preserve it.
            else if (data[i][0] == null) {
                hasNull = true;
                gd.push([null, yp.call(this._yaxis, data[i][1])]);
            }
            else if (data[i][1] == null) {
                hasNull = true;
                gd.push([xp.call(this._xaxis, data[i][0]), null]);
            }
        }

        // don't do smoothing or bands on broken lines.
        if (hasNull) {
            this.renderer.smooth = false;
            if (this._type === 'line') {
                bands.show = false;
            }
        }

        if (this._type === 'line' && bands.show) {
            for (var i=0, l=bands.hiData.length; i<l; i++) {
                this.renderer._hiBandGridData.push([xp.call(this._xaxis, bands.hiData[i][0]), yp.call(this._yaxis, bands.hiData[i][1])]);
            }
            for (var i=0, l=bands.lowData.length; i<l; i++) {
                this.renderer._lowBandGridData.push([xp.call(this._xaxis, bands.lowData[i][0]), yp.call(this._yaxis, bands.lowData[i][1])]);
            }
        }

        if (this._type === 'line' && this.renderer.smooth && gd.length > 2) {
            var ret;
            if (this.renderer.constrainSmoothing) {
                ret = computeConstrainedSmoothedData.call(this, gd);
                this.renderer._smoothedData = ret[0];
                this.renderer._smoothedPlotData = ret[1];

                if (bands.show) {
                    ret = computeConstrainedSmoothedData.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = ret[0];
                    ret = computeConstrainedSmoothedData.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = ret[0];
                }

                ret = null;
            }
            else {
                ret = computeHermiteSmoothedData.call(this, gd);
                this.renderer._smoothedData = ret[0];
                this.renderer._smoothedPlotData = ret[1];

                if (bands.show) {
                    ret = computeHermiteSmoothedData.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = ret[0];
                    ret = computeHermiteSmoothedData.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = ret[0];
                }

                ret = null;
            }
        }
        return gd;
    };
    

    // called within scope of series.
    $.jqplot.LineRenderer.prototype.draw = function(ctx, gd, options, plot) {
        var i;
        // get a copy of the options, so we don't modify the original object.
        var opts = $.extend(true, {}, options);
        var shadow = (opts.shadow != undefined) ? opts.shadow : this.shadow;
        var showLine = (opts.showLine != undefined) ? opts.showLine : this.showLine;
        var fill = (opts.fill != undefined) ? opts.fill : this.fill;
        var fillAndStroke = (opts.fillAndStroke != undefined) ? opts.fillAndStroke : this.fillAndStroke;
        var xmin, ymin, xmax, ymax;
        ctx.save();
        if (gd.length) {
            if (showLine) {
                // if we fill, we'll have to add points to close the curve.
                if (fill) {
                    if (this.fillToZero) { 
                        // have to break line up into shapes at axis crossings
                        var negativeColor = this.negativeColor;
                        if (! this.useNegativeColors) {
                            negativeColor = opts.fillStyle;
                        }
                        var isnegative = false;
                        var posfs = opts.fillStyle;
                    
                        // if stoking line as well as filling, get a copy of line data.
                        if (fillAndStroke) {
                            var fasgd = gd.slice(0);
                        }
                        // if not stacked, fill down to axis
                        if (this.index == 0 || !this._stack) {
                        
                            var tempgd = [];
                            var pd = (this.renderer.smooth) ? this.renderer._smoothedPlotData : this._plotData;
                            this._areaPoints = [];
                            var pyzero = this._yaxis.series_u2p(this.fillToValue);
                            var pxzero = this._xaxis.series_u2p(this.fillToValue);

                            opts.closePath = true;
                            
                            if (this.fillAxis == 'y') {
                                tempgd.push([gd[0][0], pyzero]);
                                this._areaPoints.push([gd[0][0], pyzero]);
                                
                                for (var i=0; i<gd.length-1; i++) {
                                    tempgd.push(gd[i]);
                                    this._areaPoints.push(gd[i]);
                                    // do we have an axis crossing?
                                    if (pd[i][1] * pd[i+1][1] <= 0) {
                                        if (pd[i][1] < 0) {
                                            isnegative = true;
                                            opts.fillStyle = negativeColor;
                                        }
                                        else {
                                            isnegative = false;
                                            opts.fillStyle = posfs;
                                        }
                                        
                                        var xintercept = gd[i][0] + (gd[i+1][0] - gd[i][0]) * (pyzero-gd[i][1])/(gd[i+1][1] - gd[i][1]);
                                        tempgd.push([xintercept, pyzero]);
                                        this._areaPoints.push([xintercept, pyzero]);
                                        // now draw this shape and shadow.
                                        if (shadow) {
                                            this.renderer.shadowRenderer.draw(ctx, tempgd, opts);
                                        }
                                        this.renderer.shapeRenderer.draw(ctx, tempgd, opts);
                                        // now empty temp array and continue
                                        tempgd = [[xintercept, pyzero]];
                                        // this._areaPoints = [[xintercept, pyzero]];
                                    }   
                                }
                                if (pd[gd.length-1][1] < 0) {
                                    isnegative = true;
                                    opts.fillStyle = negativeColor;
                                }
                                else {
                                    isnegative = false;
                                    opts.fillStyle = posfs;
                                }
                                tempgd.push(gd[gd.length-1]);
                                this._areaPoints.push(gd[gd.length-1]);
                                tempgd.push([gd[gd.length-1][0], pyzero]); 
                                this._areaPoints.push([gd[gd.length-1][0], pyzero]); 
                            }
                            // now draw the last area.
                            if (shadow) {
                                this.renderer.shadowRenderer.draw(ctx, tempgd, opts);
                            }
                            this.renderer.shapeRenderer.draw(ctx, tempgd, opts);
                            
                            
                            // var gridymin = this._yaxis.series_u2p(0);
                            // // IE doesn't return new length on unshift
                            // gd.unshift([gd[0][0], gridymin]);
                            // len = gd.length;
                            // gd.push([gd[len - 1][0], gridymin]);                   
                        }
                        // if stacked, fill to line below 
                        else {
                            var prev = this._prevGridData;
                            for (var i=prev.length; i>0; i--) {
                                gd.push(prev[i-1]);
                                // this._areaPoints.push(prev[i-1]);
                            }
                            if (shadow) {
                                this.renderer.shadowRenderer.draw(ctx, gd, opts);
                            }
                            this._areaPoints = gd;
                            this.renderer.shapeRenderer.draw(ctx, gd, opts);
                        }
                    }
                    /////////////////////////
                    // Not filled to zero
                    ////////////////////////
                    else {                    
                        // if stoking line as well as filling, get a copy of line data.
                        if (fillAndStroke) {
                            var fasgd = gd.slice(0);
                        }
                        // if not stacked, fill down to axis
                        if (this.index == 0 || !this._stack) {
                            // var gridymin = this._yaxis.series_u2p(this._yaxis.min) - this.gridBorderWidth / 2;
                            var gridymin = ctx.canvas.height;
                            // IE doesn't return new length on unshift
                            gd.unshift([gd[0][0], gridymin]);
                            var len = gd.length;
                            gd.push([gd[len - 1][0], gridymin]);                   
                        }
                        // if stacked, fill to line below 
                        else {
                            var prev = this._prevGridData;
                            for (var i=prev.length; i>0; i--) {
                                gd.push(prev[i-1]);
                            }
                        }
                        this._areaPoints = gd;
                        
                        if (shadow) {
                            this.renderer.shadowRenderer.draw(ctx, gd, opts);
                        }
            
                        this.renderer.shapeRenderer.draw(ctx, gd, opts);                        
                    }
                    if (fillAndStroke) {
                        var fasopts = $.extend(true, {}, opts, {fill:false, closePath:false});
                        this.renderer.shapeRenderer.draw(ctx, fasgd, fasopts);
                        //////////
                        // TODO: figure out some way to do shadows nicely
                        // if (shadow) {
                        //     this.renderer.shadowRenderer.draw(ctx, fasgd, fasopts);
                        // }
                        // now draw the markers
                        if (this.markerRenderer.show) {
                            if (this.renderer.smooth) {
                                fasgd = this.gridData;
                            }
                            for (i=0; i<fasgd.length; i++) {
                                this.markerRenderer.draw(fasgd[i][0], fasgd[i][1], ctx, opts.markerOptions);
                            }
                        }
                    }
                }
                else {

                    if (this.renderer.bands.show) {
                        var bdat;
                        var bopts = $.extend(true, {}, opts);
                        if (this.renderer.bands.showLines) {
                            bdat = (this.renderer.smooth) ? this.renderer._hiBandSmoothedData : this.renderer._hiBandGridData;
                            this.renderer.shapeRenderer.draw(ctx, bdat, opts);
                            bdat = (this.renderer.smooth) ? this.renderer._lowBandSmoothedData : this.renderer._lowBandGridData;
                            this.renderer.shapeRenderer.draw(ctx, bdat, bopts);
                        }

                        if (this.renderer.bands.fill) {
                            if (this.renderer.smooth) {
                                bdat = this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse());
                            }
                            else {
                                bdat = this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse());
                            }
                            this._areaPoints = bdat;
                            bopts.closePath = true;
                            bopts.fill = true;
                            bopts.fillStyle = this.renderer.bands.fillColor;
                            this.renderer.shapeRenderer.draw(ctx, bdat, bopts);
                        }
                    }

                    if (shadow) {
                        this.renderer.shadowRenderer.draw(ctx, gd, opts);
                    }
    
                    this.renderer.shapeRenderer.draw(ctx, gd, opts);
                }
            }
            // calculate the bounding box
            var xmin = xmax = ymin = ymax = null;
            for (i=0; i<this._areaPoints.length; i++) {
                var p = this._areaPoints[i];
                if (xmin > p[0] || xmin == null) {
                    xmin = p[0];
                }
                if (ymax < p[1] || ymax == null) {
                    ymax = p[1];
                }
                if (xmax < p[0] || xmax == null) {
                    xmax = p[0];
                }
                if (ymin > p[1] || ymin == null) {
                    ymin = p[1];
                }
            }

            if (this.type === 'line' && this.renderer.bands.show) {
                ymax = this._yaxis.series_u2p(this.renderer.bands._min);
                ymin = this._yaxis.series_u2p(this.renderer.bands._max);
            }

            this._boundingBox = [[xmin, ymax], [xmax, ymin]];
        
            // now draw the markers
            if (this.markerRenderer.show && !fill) {
                if (this.renderer.smooth) {
                    gd = this.gridData;
                }
                for (i=0; i<gd.length; i++) {
                    if (gd[i][0] != null && gd[i][1] != null) {
                        this.markerRenderer.draw(gd[i][0], gd[i][1], ctx, opts.markerOptions);
                    }
                }
            }
        }
        
        ctx.restore();
    };  
    
    $.jqplot.LineRenderer.prototype.drawShadow = function(ctx, gd, options) {
        // This is a no-op, shadows drawn with lines.
    };
    
    // called with scope of plot.
    // make sure to not leave anything highlighted.
    function postInit(target, data, options) {
        for (var i=0; i<this.series.length; i++) {
            if (this.series[i].renderer.constructor == $.jqplot.LineRenderer) {
                // don't allow mouseover and mousedown at same time.
                if (this.series[i].highlightMouseOver) {
                    this.series[i].highlightMouseDown = false;
                }
            }
        }
    }  
    
    // called within context of plot
    // create a canvas which we can draw on.
    // insert it before the eventCanvas, so eventCanvas will still capture events.
    function postPlotDraw() {
        // Memory Leaks patch    
        if (this.plugins.lineRenderer && this.plugins.lineRenderer.highlightCanvas) {
          this.plugins.lineRenderer.highlightCanvas.resetCanvas();
          this.plugins.lineRenderer.highlightCanvas = null;
        }
        
        this.plugins.lineRenderer.highlightedSeriesIndex = null;
        this.plugins.lineRenderer.highlightCanvas = new $.jqplot.GenericCanvas();
        
        this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-lineRenderer-highlight-canvas', this._plotDimensions, this));
        this.plugins.lineRenderer.highlightCanvas.setContext();
        this.eventCanvas._elem.bind('mouseleave', {plot:this}, function (ev) { unhighlight(ev.data.plot); });
    } 
    
    function highlight (plot, sidx, pidx, points) {
        var s = plot.series[sidx];
        var canvas = plot.plugins.lineRenderer.highlightCanvas;
        canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width, canvas._ctx.canvas.height);
        s._highlightedPoint = pidx;
        plot.plugins.lineRenderer.highlightedSeriesIndex = sidx;
        var opts = {fillStyle: s.highlightColor};
        if (s.type === 'line' && s.renderer.bands.show) {
            opts.fill = true;
            opts.closePath = true;
        }
        s.renderer.shapeRenderer.draw(canvas._ctx, points, opts);
        canvas = null;
    }
    
    function unhighlight (plot) {
        var canvas = plot.plugins.lineRenderer.highlightCanvas;
        canvas._ctx.clearRect(0,0, canvas._ctx.canvas.width, canvas._ctx.canvas.height);
        for (var i=0; i<plot.series.length; i++) {
            plot.series[i]._highlightedPoint = null;
        }
        plot.plugins.lineRenderer.highlightedSeriesIndex = null;
        plot.target.trigger('jqplotDataUnhighlight');
        canvas = null;
    }
    
    
    function handleMove(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt1 = jQuery.Event('jqplotDataMouseOver');
            evt1.pageX = ev.pageX;
            evt1.pageY = ev.pageY;
            plot.target.trigger(evt1, ins);
            if (plot.series[ins[0]].highlightMouseOver && !(ins[0] == plot.plugins.lineRenderer.highlightedSeriesIndex)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, neighbor.seriesIndex, neighbor.pointIndex, neighbor.points);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    }
    
    function handleMouseDown(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            if (plot.series[ins[0]].highlightMouseDown && !(ins[0] == plot.plugins.lineRenderer.highlightedSeriesIndex)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, neighbor.seriesIndex, neighbor.pointIndex, neighbor.points);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    }
    
    function handleMouseUp(ev, gridpos, datapos, neighbor, plot) {
        var idx = plot.plugins.lineRenderer.highlightedSeriesIndex;
        if (idx != null && plot.series[idx].highlightMouseDown) {
            unhighlight(plot);
        }
    }
    
    function handleClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt = jQuery.Event('jqplotDataClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }
    
    function handleRightClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var idx = plot.plugins.lineRenderer.highlightedSeriesIndex;
            if (idx != null && plot.series[idx].highlightMouseDown) {
                unhighlight(plot);
            }
            var evt = jQuery.Event('jqplotDataRightClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }
    
    
    // class: $.jqplot.LinearAxisRenderer
    // The default jqPlot axis renderer, creating a numeric axis.
    $.jqplot.LinearAxisRenderer = function() {
    };
    
    // called with scope of axis object.
    $.jqplot.LinearAxisRenderer.prototype.init = function(options){
        // prop: breakPoints
        // EXPERIMENTAL!! Use at your own risk!
        // Works only with linear axes and the default tick renderer.
        // Array of [start, stop] points to create a broken axis.
        // Broken axes have a "jump" in them, which is an immediate 
        // transition from a smaller value to a larger value.
        // Currently, axis ticks MUST be manually assigned if using breakPoints
        // by using the axis ticks array option.
        this.breakPoints = null;
        // prop: breakTickLabel
        // Label to use at the axis break if breakPoints are specified.
        this.breakTickLabel = "&asymp;";
        // prop: drawBaseline
        // True to draw the axis baseline.
        this.drawBaseline = true;
        // prop: baselineWidth
        // width of the baseline in pixels.
        this.baselineWidth = null;
        // prop: baselineColor
        // CSS color spec for the baseline.
        this.baselineColor = null;
        // prop: forceTickAt0
        // This will ensure that there is always a tick mark at 0.
        // If data range is strictly positive or negative,
        // this will force 0 to be inside the axis bounds unless
        // the appropriate axis pad (pad, padMin or padMax) is set
        // to 0, then this will force an axis min or max value at 0.
        // This has know effect when any of the following options
        // are set:  autoscale, min, max, numberTicks or tickInterval.
        this.forceTickAt0 = false;
        // prop: forceTickAt100
        // This will ensure that there is always a tick mark at 100.
        // If data range is strictly above or below 100,
        // this will force 100 to be inside the axis bounds unless
        // the appropriate axis pad (pad, padMin or padMax) is set
        // to 0, then this will force an axis min or max value at 100.
        // This has know effect when any of the following options
        // are set:  autoscale, min, max, numberTicks or tickInterval.
        this.forceTickAt100 = false;
        // prop: tickInset
        // Controls the amount to inset the first and last ticks from 
        // the edges of the grid, in multiples of the tick interval.
        // 0 is no inset, 0.5 is one half a tick interval, 1 is a full
        // tick interval, etc.
        this.tickInset = 0;
        // prop: minorTicks
        // Number of ticks to add between "major" ticks.
        // Major ticks are ticks supplied by user or auto computed.
        // Minor ticks cannot be created by user.
        this.minorTicks = 0;
        // prop: alignTicks
        // true to align tick marks across opposed axes
        // such as from the y2axis to yaxis.
        this.alignTicks = false;
        this._autoFormatString = '';
        this._overrideFormatString = false;
        this._scalefact = 1.0;
        $.extend(true, this, options);
        if (this.breakPoints) {
            if (!$.isArray(this.breakPoints)) {
                this.breakPoints = null;
            }
            else if (this.breakPoints.length < 2 || this.breakPoints[1] <= this.breakPoints[0]) {
                this.breakPoints = null;
            }
        }
        if (this.numberTicks != null && this.numberTicks < 2) {
            this.numberTicks = 2;
        }
        this.resetDataBounds();
    };
    
    // called with scope of axis
    $.jqplot.LinearAxisRenderer.prototype.draw = function(ctx, plot) {
        if (this.show) {
            // populate the axis label and value properties.
            // createTicks is a method on the renderer, but
            // call it within the scope of the axis.
            this.renderer.createTicks.call(this, plot);
            // fill a div with axes labels in the right direction.
            // Need to pregenerate each axis to get its bounds and
            // position it and the labels correctly on the plot.
            var dim=0;
            var temp;
            // Added for theming.
            if (this._elem) {
                // Memory Leaks patch
                //this._elem.empty();
                this._elem.emptyForce();
                this._elem = null;
            }
            
            this._elem = $(document.createElement('div'));
            this._elem.addClass('jqplot-axis jqplot-'+this.name);
            this._elem.css('position', 'absolute');

            
            if (this.name == 'xaxis' || this.name == 'x2axis') {
                this._elem.width(this._plotDimensions.width);
            }
            else {
                this._elem.height(this._plotDimensions.height);
            }
            
            // create a _label object.
            this.labelOptions.axis = this.name;
            this._label = new this.labelRenderer(this.labelOptions);
            if (this._label.show) {
                var elem = this._label.draw(ctx, plot);
                elem.appendTo(this._elem);
                elem = null;
            }
    
            var t = this._ticks;
            var tick;
            for (var i=0; i<t.length; i++) {
                tick = t[i];
                if (tick.show && tick.showLabel && (!tick.isMinorTick || this.showMinorTicks)) {
                    this._elem.append(tick.draw(ctx, plot));
                }
            }
            tick = null;
            t = null;
        }
        return this._elem;
    };
    
    // called with scope of an axis
    $.jqplot.LinearAxisRenderer.prototype.reset = function() {
        this.min = this._options.min;
        this.max = this._options.max;
        this.tickInterval = this._options.tickInterval;
        this.numberTicks = this._options.numberTicks;
        this._autoFormatString = '';
        if (this._overrideFormatString && this.tickOptions && this.tickOptions.formatString) {
            this.tickOptions.formatString = '';
        }

        // this._ticks = this.__ticks;
    };
    
    // called with scope of axis
    $.jqplot.LinearAxisRenderer.prototype.set = function() { 
        var dim = 0;
        var temp;
        var w = 0;
        var h = 0;
        var lshow = (this._label == null) ? false : this._label.show;
        if (this.show) {
            var t = this._ticks;
            var tick;
            for (var i=0; i<t.length; i++) {
                tick = t[i];
                if (!tick._breakTick && tick.show && tick.showLabel && (!tick.isMinorTick || this.showMinorTicks)) {
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        temp = tick._elem.outerHeight(true);
                    }
                    else {
                        temp = tick._elem.outerWidth(true);
                    }
                    if (temp > dim) {
                        dim = temp;
                    }
                }
            }
            tick = null;
            t = null;
            
            if (lshow) {
                w = this._label._elem.outerWidth(true);
                h = this._label._elem.outerHeight(true); 
            }
            if (this.name == 'xaxis') {
                dim = dim + h;
                this._elem.css({'height':dim+'px', left:'0px', bottom:'0px'});
            }
            else if (this.name == 'x2axis') {
                dim = dim + h;
                this._elem.css({'height':dim+'px', left:'0px', top:'0px'});
            }
            else if (this.name == 'yaxis') {
                dim = dim + w;
                this._elem.css({'width':dim+'px', left:'0px', top:'0px'});
                if (lshow && this._label.constructor == $.jqplot.AxisLabelRenderer) {
                    this._label._elem.css('width', w+'px');
                }
            }
            else {
                dim = dim + w;
                this._elem.css({'width':dim+'px', right:'0px', top:'0px'});
                if (lshow && this._label.constructor == $.jqplot.AxisLabelRenderer) {
                    this._label._elem.css('width', w+'px');
                }
            }
        }  
    };    
    
    // called with scope of axis
    $.jqplot.LinearAxisRenderer.prototype.createTicks = function(plot) {
        // we're are operating on an axis here
        var ticks = this._ticks;
        var userTicks = this.ticks;
        var name = this.name;
        // databounds were set on axis initialization.
        var db = this._dataBounds;
        var dim = (this.name.charAt(0) === 'x') ? this._plotDimensions.width : this._plotDimensions.height;
        var interval;
        var min, max;
        var pos1, pos2;
        var tt, i;
        // get a copy of user's settings for min/max.
        var userMin = this.min;
        var userMax = this.max;
        var userNT = this.numberTicks;
        var userTI = this.tickInterval;

        var threshold = 30;
        this._scalefact =  (Math.max(dim, threshold+1) - threshold)/300.0;
        
        // if we already have ticks, use them.
        // ticks must be in order of increasing value.
        
        if (userTicks.length) {
            // ticks could be 1D or 2D array of [val, val, ,,,] or [[val, label], [val, label], ...] or mixed
            for (i=0; i<userTicks.length; i++){
                var ut = userTicks[i];
                var t = new this.tickRenderer(this.tickOptions);
                if ($.isArray(ut)) {
                    t.value = ut[0];
                    if (this.breakPoints) {
                        if (ut[0] == this.breakPoints[0]) {
                            t.label = this.breakTickLabel;
                            t._breakTick = true;
                            t.showGridline = false;
                            t.showMark = false;
                        }
                        else if (ut[0] > this.breakPoints[0] && ut[0] <= this.breakPoints[1]) {
                            t.show = false;
                            t.showGridline = false;
                            t.label = ut[1];
                        }
                        else {
                            t.label = ut[1];
                        }
                    }
                    else {
                        t.label = ut[1];
                    }
                    t.setTick(ut[0], this.name);
                    this._ticks.push(t);
                }

                else if ($.isPlainObject(ut)) {
                    $.extend(true, t, ut);
                    t.axis = this.name;
                    this._ticks.push(t);
                }
                
                else {
                    t.value = ut;
                    if (this.breakPoints) {
                        if (ut == this.breakPoints[0]) {
                            t.label = this.breakTickLabel;
                            t._breakTick = true;
                            t.showGridline = false;
                            t.showMark = false;
                        }
                        else if (ut > this.breakPoints[0] && ut <= this.breakPoints[1]) {
                            t.show = false;
                            t.showGridline = false;
                        }
                    }
                    t.setTick(ut, this.name);
                    this._ticks.push(t);
                }
            }
            this.numberTicks = userTicks.length;
            this.min = this._ticks[0].value;
            this.max = this._ticks[this.numberTicks-1].value;
            this.tickInterval = (this.max - this.min) / (this.numberTicks - 1);
        }
        
        // we don't have any ticks yet, let's make some!
        else {
            if (name == 'xaxis' || name == 'x2axis') {
                dim = this._plotDimensions.width;
            }
            else {
                dim = this._plotDimensions.height;
            }

            var _numberTicks = this.numberTicks;

            // if aligning this axis, use number of ticks from previous axis.
            // Do I need to reset somehow if alignTicks is changed and then graph is replotted??
            if (this.alignTicks) {
                if (this.name === 'x2axis' && plot.axes.xaxis.show) {
                    _numberTicks = plot.axes.xaxis.numberTicks;
                }
                else if (this.name.charAt(0) === 'y' && this.name !== 'yaxis' && this.name !== 'yMidAxis' && plot.axes.yaxis.show) {
                    _numberTicks = plot.axes.yaxis.numberTicks;
                }
            }
        
            min = ((this.min != null) ? this.min : db.min);
            max = ((this.max != null) ? this.max : db.max);

            var range = max - min;
            var rmin, rmax;
            var temp;

            if (this.tickOptions == null || !this.tickOptions.formatString) {
                this._overrideFormatString = true;
            }

            // Doing complete autoscaling
            if (this.min == null || this.max == null && this.tickInterval == null && !this.autoscale) {
                // Check if user must have tick at 0 or 100 and ensure they are in range.
                // The autoscaling algorithm will always place ticks at 0 and 100 if they are in range.
                if (this.forceTickAt0) {
                    if (min > 0) {
                        min = 0;
                    }
                    if (max < 0) {
                        max = 0;
                    }
                }

                if (this.forceTickAt100) {
                    if (min > 100) {
                        min = 100;
                    }
                    if (max < 100) {
                        max = 100;
                    }
                }

                var keepMin = false,
                    keepMax = false;

                if (this.min != null) {
                    keepMin = true;
                }

                else if (this.max != null) {
                    keepMax = true;
                }

                // var threshold = 30;
                // var tdim = Math.max(dim, threshold+1);
                // this._scalefact =  (tdim-threshold)/300.0;
                var ret = $.jqplot.LinearTickGenerator(min, max, this._scalefact, _numberTicks, keepMin, keepMax); 
                // calculate a padded max and min, points should be less than these
                // so that they aren't too close to the edges of the plot.
                // User can adjust how much padding is allowed with pad, padMin and PadMax options. 
                // If min or max is set, don't pad that end of axis.
                var tumin = (this.min != null) ? min : min + range*(this.padMin - 1);
                var tumax = (this.max != null) ? max : max - range*(this.padMax - 1);

                // if they're equal, we shouldn't have to do anything, right?
                // if (min <=tumin || max >= tumax) {
                if (min <tumin || max > tumax) {
                    tumin = (this.min != null) ? min : min - range*(this.padMin - 1);
                    tumax = (this.max != null) ? max : max + range*(this.padMax - 1);
                    ret = $.jqplot.LinearTickGenerator(tumin, tumax, this._scalefact, _numberTicks, keepMin, keepMax);
                }

                this.min = ret[0];
                this.max = ret[1];
                // if numberTicks specified, it should return the same.
                this.numberTicks = ret[2];
                this._autoFormatString = ret[3];
                this.tickInterval = ret[4];
            }

            // User has specified some axis scale related option, can use auto algorithm
            else {
                
                // if min and max are same, space them out a bit
                if (min == max) {
                    var adj = 0.05;
                    if (min > 0) {
                        adj = Math.max(Math.log(min)/Math.LN10, 0.05);
                    }
                    min -= adj;
                    max += adj;
                }
                
                // autoscale.  Can't autoscale if min or max is supplied.
                // Will use numberTicks and tickInterval if supplied.  Ticks
                // across multiple axes may not line up depending on how
                // bars are to be plotted.
                if (this.autoscale && this.min == null && this.max == null) {
                    var rrange, ti, margin;
                    var forceMinZero = false;
                    var forceZeroLine = false;
                    var intervals = {min:null, max:null, average:null, stddev:null};
                    // if any series are bars, or if any are fill to zero, and if this
                    // is the axis to fill toward, check to see if we can start axis at zero.
                    for (var i=0; i<this._series.length; i++) {
                        var s = this._series[i];
                        var faname = (s.fillAxis == 'x') ? s._xaxis.name : s._yaxis.name;
                        // check to see if this is the fill axis
                        if (this.name == faname) {
                            var vals = s._plotValues[s.fillAxis];
                            var vmin = vals[0];
                            var vmax = vals[0];
                            for (var j=1; j<vals.length; j++) {
                                if (vals[j] < vmin) {
                                    vmin = vals[j];
                                }
                                else if (vals[j] > vmax) {
                                    vmax = vals[j];
                                }
                            }
                            var dp = (vmax - vmin) / vmax;
                            // is this sries a bar?
                            if (s.renderer.constructor == $.jqplot.BarRenderer) {
                                // if no negative values and could also check range.
                                if (vmin >= 0 && (s.fillToZero || dp > 0.1)) {
                                    forceMinZero = true;
                                }
                                else {
                                    forceMinZero = false;
                                    if (s.fill && s.fillToZero && vmin < 0 && vmax > 0) {
                                        forceZeroLine = true;
                                    }
                                    else {
                                        forceZeroLine = false;
                                    }
                                }
                            }
                            
                            // if not a bar and filling, use appropriate method.
                            else if (s.fill) {
                                if (vmin >= 0 && (s.fillToZero || dp > 0.1)) {
                                    forceMinZero = true;
                                }
                                else if (vmin < 0 && vmax > 0 && s.fillToZero) {
                                    forceMinZero = false;
                                    forceZeroLine = true;
                                }
                                else {
                                    forceMinZero = false;
                                    forceZeroLine = false;
                                }
                            }
                            
                            // if not a bar and not filling, only change existing state
                            // if it doesn't make sense
                            else if (vmin < 0) {
                                forceMinZero = false;
                            }
                        }
                    }
                    
                    // check if we need make axis min at 0.
                    if (forceMinZero) {
                        // compute number of ticks
                        this.numberTicks = 2 + Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);
                        this.min = 0;
                        userMin = 0;
                        // what order is this range?
                        // what tick interval does that give us?
                        ti = max/(this.numberTicks-1);
                        temp = Math.pow(10, Math.abs(Math.floor(Math.log(ti)/Math.LN10)));
                        if (ti/temp == parseInt(ti/temp, 10)) {
                            ti += temp;
                        }
                        this.tickInterval = Math.ceil(ti/temp) * temp;
                        this.max = this.tickInterval * (this.numberTicks - 1);
                    }
                    
                    // check if we need to make sure there is a tick at 0.
                    else if (forceZeroLine) {
                        // compute number of ticks
                        this.numberTicks = 2 + Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);
                        var ntmin = Math.ceil(Math.abs(min)/range*(this.numberTicks-1));
                        var ntmax = this.numberTicks - 1  - ntmin;
                        ti = Math.max(Math.abs(min/ntmin), Math.abs(max/ntmax));
                        temp = Math.pow(10, Math.abs(Math.floor(Math.log(ti)/Math.LN10)));
                        this.tickInterval = Math.ceil(ti/temp) * temp;
                        this.max = this.tickInterval * ntmax;
                        this.min = -this.tickInterval * ntmin;
                    }
                    
                    // if nothing else, do autoscaling which will try to line up ticks across axes.
                    else {  
                        if (this.numberTicks == null){
                            if (this.tickInterval) {
                                this.numberTicks = 3 + Math.ceil(range / this.tickInterval);
                            }
                            else {
                                this.numberTicks = 2 + Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);
                            }
                        }
                
                        if (this.tickInterval == null) {
                            // get a tick interval
                            ti = range/(this.numberTicks - 1);

                            if (ti < 1) {
                                temp = Math.pow(10, Math.abs(Math.floor(Math.log(ti)/Math.LN10)));
                            }
                            else {
                                temp = 1;
                            }
                            this.tickInterval = Math.ceil(ti*temp*this.pad)/temp;
                        }
                        else {
                            temp = 1 / this.tickInterval;
                        }
                        
                        // try to compute a nicer, more even tick interval
                        // temp = Math.pow(10, Math.floor(Math.log(ti)/Math.LN10));
                        // this.tickInterval = Math.ceil(ti/temp) * temp;
                        rrange = this.tickInterval * (this.numberTicks - 1);
                        margin = (rrange - range)/2;
           
                        if (this.min == null) {
                            this.min = Math.floor(temp*(min-margin))/temp;
                        }
                        if (this.max == null) {
                            this.max = this.min + rrange;
                        }
                    }

                    // Compute a somewhat decent format string if it is needed.
                    // get precision of interval and determine a format string.
                    var sf = $.jqplot.getSignificantFigures(this.tickInterval);

                    var fstr;

                    // if we have only a whole number, use integer formatting
                    if (sf.digitsLeft >= sf.significantDigits) {
                        fstr = '%d';
                    }

                    else {
                        var temp = Math.max(0, 5 - sf.digitsLeft);
                        temp = Math.min(temp, sf.digitsRight);
                        fstr = '%.'+ temp + 'f';
                    }

                    this._autoFormatString = fstr;
                }
                
                // Use the default algorithm which pads each axis to make the chart
                // centered nicely on the grid.
                else {

                    rmin = (this.min != null) ? this.min : min - range*(this.padMin - 1);
                    rmax = (this.max != null) ? this.max : max + range*(this.padMax - 1);
                    range = rmax - rmin;
        
                    if (this.numberTicks == null){
                        // if tickInterval is specified by user, we will ignore computed maximum.
                        // max will be equal or greater to fit even # of ticks.
                        if (this.tickInterval != null) {
                            this.numberTicks = Math.ceil((rmax - rmin)/this.tickInterval)+1;
                        }
                        else if (dim > 100) {
                            this.numberTicks = parseInt(3+(dim-100)/75, 10);
                        }
                        else {
                            this.numberTicks = 2;
                        }
                    }
                
                    if (this.tickInterval == null) {
                        this.tickInterval = range / (this.numberTicks-1);
                    }
                    
                    if (this.max == null) {
                        rmax = rmin + this.tickInterval*(this.numberTicks - 1);
                    }        
                    if (this.min == null) {
                        rmin = rmax - this.tickInterval*(this.numberTicks - 1);
                    }

                    // get precision of interval and determine a format string.
                    var sf = $.jqplot.getSignificantFigures(this.tickInterval);

                    var fstr;

                    // if we have only a whole number, use integer formatting
                    if (sf.digitsLeft >= sf.significantDigits) {
                        fstr = '%d';
                    }

                    else {
                        var temp = Math.max(0, 5 - sf.digitsLeft);
                        temp = Math.min(temp, sf.digitsRight);
                        fstr = '%.'+ temp + 'f';
                    }


                    this._autoFormatString = fstr;

                    this.min = rmin;
                    this.max = rmax;
                }
                
                if (this.renderer.constructor == $.jqplot.LinearAxisRenderer && this._autoFormatString == '') {
                    // fix for misleading tick display with small range and low precision.
                    range = this.max - this.min;
                    // figure out precision
                    var temptick = new this.tickRenderer(this.tickOptions);
                    // use the tick formatString or, the default.
                    var fs = temptick.formatString || $.jqplot.config.defaultTickFormatString; 
                    var fs = fs.match($.jqplot.sprintf.regex)[0];
                    var precision = 0;
                    if (fs) {
                        if (fs.search(/[fFeEgGpP]/) > -1) {
                            var m = fs.match(/\%\.(\d{0,})?[eEfFgGpP]/);
                            if (m) {
                                precision = parseInt(m[1], 10);
                            }
                            else {
                                precision = 6;
                            }
                        }
                        else if (fs.search(/[di]/) > -1) {
                            precision = 0;
                        }
                        // fact will be <= 1;
                        var fact = Math.pow(10, -precision);
                        if (this.tickInterval < fact) {
                            // need to correct underrange
                            if (userNT == null && userTI == null) {
                                this.tickInterval = fact;
                                if (userMax == null && userMin == null) {
                                    // this.min = Math.floor((this._dataBounds.min - this.tickInterval)/fact) * fact;
                                    this.min = Math.floor(this._dataBounds.min/fact) * fact;
                                    if (this.min == this._dataBounds.min) {
                                        this.min = this._dataBounds.min - this.tickInterval;
                                    }
                                    // this.max = Math.ceil((this._dataBounds.max + this.tickInterval)/fact) * fact;
                                    this.max = Math.ceil(this._dataBounds.max/fact) * fact;
                                    if (this.max == this._dataBounds.max) {
                                        this.max = this._dataBounds.max + this.tickInterval;
                                    }
                                    var n = (this.max - this.min)/this.tickInterval;
                                    n = n.toFixed(11);
                                    n = Math.ceil(n);
                                    this.numberTicks = n + 1;
                                }
                                else if (userMax == null) {
                                    // add one tick for top of range.
                                    var n = (this._dataBounds.max - this.min) / this.tickInterval;
                                    n = n.toFixed(11);
                                    this.numberTicks = Math.ceil(n) + 2;
                                    this.max = this.min + this.tickInterval * (this.numberTicks-1);
                                }
                                else if (userMin == null) {
                                    // add one tick for bottom of range.
                                    var n = (this.max - this._dataBounds.min) / this.tickInterval;
                                    n = n.toFixed(11);
                                    this.numberTicks = Math.ceil(n) + 2;
                                    this.min = this.max - this.tickInterval * (this.numberTicks-1);
                                }
                                else {
                                    // calculate a number of ticks so max is within axis scale
                                    this.numberTicks = Math.ceil((userMax - userMin)/this.tickInterval) + 1;
                                    // if user's min and max don't fit evenly in ticks, adjust.
                                    // This takes care of cases such as user min set to 0, max set to 3.5 but tick
                                    // format string set to %d (integer ticks)
                                    this.min =  Math.floor(userMin*Math.pow(10, precision))/Math.pow(10, precision);
                                    this.max =  Math.ceil(userMax*Math.pow(10, precision))/Math.pow(10, precision);
                                    // this.max = this.min + this.tickInterval*(this.numberTicks-1);
                                    this.numberTicks = Math.ceil((this.max - this.min)/this.tickInterval) + 1;
                                }
                            }
                        }
                    }
                }
                
            }
            
            if (this._overrideFormatString && this._autoFormatString != '') {
                this.tickOptions = this.tickOptions || {};
                this.tickOptions.formatString = this._autoFormatString;
            }

            var t, to;
            for (var i=0; i<this.numberTicks; i++){
                tt = this.min + i * this.tickInterval;
                t = new this.tickRenderer(this.tickOptions);
                // var t = new $.jqplot.AxisTickRenderer(this.tickOptions);

                t.setTick(tt, this.name);
                this._ticks.push(t);

                if (i < this.numberTicks - 1) {
                    for (var j=0; j<this.minorTicks; j++) {
                        tt += this.tickInterval/(this.minorTicks+1);
                        to = $.extend(true, {}, this.tickOptions, {name:this.name, value:tt, label:'', isMinorTick:true});
                        t = new this.tickRenderer(to);
                        this._ticks.push(t);
                    }
                }
                t = null;
            }
        }

        if (this.tickInset) {
            this.min = this.min - this.tickInset * this.tickInterval;
            this.max = this.max + this.tickInset * this.tickInterval;
        }

        ticks = null;
    };
    
    // Used to reset just the values of the ticks and then repack, which will
    // recalculate the positioning functions.  It is assuemd that the 
    // number of ticks is the same and the values of the new array are at the
    // proper interval.
    // This method needs to be called with the scope of an axis object, like:
    //
    // > plot.axes.yaxis.renderer.resetTickValues.call(plot.axes.yaxis, yarr);
    //
    $.jqplot.LinearAxisRenderer.prototype.resetTickValues = function(opts) {
        if ($.isArray(opts) && opts.length == this._ticks.length) {
            var t;
            for (var i=0; i<opts.length; i++) {
                t = this._ticks[i];
                t.value = opts[i];
                t.label = t.formatter(t.formatString, opts[i]);
                t.label = t.prefix + t.label;
                t._elem.html(t.label);
            }
            t = null;
            this.min = $.jqplot.arrayMin(opts);
            this.max = $.jqplot.arrayMax(opts);
            this.pack();
        }
        // Not implemented yet.
        // else if ($.isPlainObject(opts)) {
        // 
        // }
    };
    
    // called with scope of axis
    $.jqplot.LinearAxisRenderer.prototype.pack = function(pos, offsets) {
        // Add defaults for repacking from resetTickValues function.
        pos = pos || {};
        offsets = offsets || this._offsets;
        
        var ticks = this._ticks;
        var max = this.max;
        var min = this.min;
        var offmax = offsets.max;
        var offmin = offsets.min;
        var lshow = (this._label == null) ? false : this._label.show;
        
        for (var p in pos) {
            this._elem.css(p, pos[p]);
        }
        
        this._offsets = offsets;
        // pixellength will be + for x axes and - for y axes becasue pixels always measured from top left.
        var pixellength = offmax - offmin;
        var unitlength = max - min;
        
        // point to unit and unit to point conversions references to Plot DOM element top left corner.
        if (this.breakPoints) {
            unitlength = unitlength - this.breakPoints[1] + this.breakPoints[0];
            
            this.p2u = function(p){
                return (p - offmin) * unitlength / pixellength + min;
            };
        
            this.u2p = function(u){
                if (u > this.breakPoints[0] && u < this.breakPoints[1]){
                    u = this.breakPoints[0];
                }
                if (u <= this.breakPoints[0]) {
                    return (u - min) * pixellength / unitlength + offmin;
                }
                else {
                    return (u - this.breakPoints[1] + this.breakPoints[0] - min) * pixellength / unitlength + offmin;
                }
            };
                
            if (this.name.charAt(0) == 'x'){
                this.series_u2p = function(u){
                    if (u > this.breakPoints[0] && u < this.breakPoints[1]){
                        u = this.breakPoints[0];
                    }
                    if (u <= this.breakPoints[0]) {
                        return (u - min) * pixellength / unitlength;
                    }
                    else {
                        return (u - this.breakPoints[1] + this.breakPoints[0] - min) * pixellength / unitlength;
                    }
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + min;
                };
            }
        
            else {
                this.series_u2p = function(u){
                    if (u > this.breakPoints[0] && u < this.breakPoints[1]){
                        u = this.breakPoints[0];
                    }
                    if (u >= this.breakPoints[1]) {
                        return (u - max) * pixellength / unitlength;
                    }
                    else {
                        return (u + this.breakPoints[1] - this.breakPoints[0] - max) * pixellength / unitlength;
                    }
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + max;
                };
            }
        }
        else {
            this.p2u = function(p){
                return (p - offmin) * unitlength / pixellength + min;
            };
        
            this.u2p = function(u){
                return (u - min) * pixellength / unitlength + offmin;
            };
                
            if (this.name == 'xaxis' || this.name == 'x2axis'){
                this.series_u2p = function(u){
                    return (u - min) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + min;
                };
            }
        
            else {
                this.series_u2p = function(u){
                    return (u - max) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + max;
                };
            }
        }
        
        if (this.show) {
            if (this.name == 'xaxis' || this.name == 'x2axis') {
                for (var i=0; i<ticks.length; i++) {
                    var t = ticks[i];
                    if (t.show && t.showLabel) {
                        var shim;
                        
                        if (t.constructor == $.jqplot.CanvasAxisTickRenderer && t.angle) {
                            // will need to adjust auto positioning based on which axis this is.
                            var temp = (this.name == 'xaxis') ? 1 : -1;
                            switch (t.labelPosition) {
                                case 'auto':
                                    // position at end
                                    if (temp * t.angle < 0) {
                                        shim = -t.getWidth() + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    }
                                    // position at start
                                    else {
                                        shim = -t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'end':
                                    shim = -t.getWidth() + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                                case 'start':
                                    shim = -t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    break;
                                case 'middle':
                                    shim = -t.getWidth()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                                default:
                                    shim = -t.getWidth()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                            }
                        }
                        else {
                            shim = -t.getWidth()/2;
                        }
                        var val = this.u2p(t.value) + shim + 'px';
                        t._elem.css('left', val);
                        t.pack();
                    }
                }
                if (lshow) {
                    var w = this._label._elem.outerWidth(true);
                    this._label._elem.css('left', offmin + pixellength/2 - w/2 + 'px');
                    if (this.name == 'xaxis') {
                        this._label._elem.css('bottom', '0px');
                    }
                    else {
                        this._label._elem.css('top', '0px');
                    }
                    this._label.pack();
                }
            }
            else {
                for (var i=0; i<ticks.length; i++) {
                    var t = ticks[i];
                    if (t.show && t.showLabel) {                        
                        var shim;
                        if (t.constructor == $.jqplot.CanvasAxisTickRenderer && t.angle) {
                            // will need to adjust auto positioning based on which axis this is.
                            var temp = (this.name == 'yaxis') ? 1 : -1;
                            switch (t.labelPosition) {
                                case 'auto':
                                    // position at end
                                case 'end':
                                    if (temp * t.angle < 0) {
                                        shim = -t._textRenderer.height * Math.cos(-t._textRenderer.angle) / 2;
                                    }
                                    else {
                                        shim = -t.getHeight() + t._textRenderer.height * Math.cos(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'start':
                                    if (t.angle > 0) {
                                        shim = -t._textRenderer.height * Math.cos(-t._textRenderer.angle) / 2;
                                    }
                                    else {
                                        shim = -t.getHeight() + t._textRenderer.height * Math.cos(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'middle':
                                    // if (t.angle > 0) {
                                    //     shim = -t.getHeight()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    // }
                                    // else {
                                    //     shim = -t.getHeight()/2 - t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    // }
                                    shim = -t.getHeight()/2;
                                    break;
                                default:
                                    shim = -t.getHeight()/2;
                                    break;
                            }
                        }
                        else {
                            shim = -t.getHeight()/2;
                        }
                        
                        var val = this.u2p(t.value) + shim + 'px';
                        t._elem.css('top', val);
                        t.pack();
                    }
                }
                if (lshow) {
                    var h = this._label._elem.outerHeight(true);
                    this._label._elem.css('top', offmax - pixellength/2 - h/2 + 'px');
                    if (this.name == 'yaxis') {
                        this._label._elem.css('left', '0px');
                    }
                    else {
                        this._label._elem.css('right', '0px');
                    }   
                    this._label.pack();
                }
            }
        }

        ticks = null;
    };


    /**
    * The following code was generaously given to me a while back by Scott Prahl.
    * He did a good job at computing axes min, max and number of ticks for the 
    * case where the user has not set any scale related parameters (tickInterval,
    * numberTicks, min or max).  I had ignored this use case for a long time,
    * focusing on the more difficult case where user has set some option controlling
    * tick generation.  Anyway, about time I got this into jqPlot.
    * Thanks Scott!!
    */
    
    /**
    * Copyright (c) 2010 Scott Prahl
    * The next three routines are currently available for use in all personal 
    * or commercial projects under both the MIT and GPL version 2.0 licenses. 
    * This means that you can choose the license that best suits your project 
    * and use it accordingly. 
    */

    // A good format string depends on the interval. If the interval is greater 
    // than 1 then there is no need to show any decimal digits. If it is < 1.0, then
    // use the magnitude of the interval to determine the number of digits to show.
    function bestFormatString (interval)
    {
        var fstr;
        interval = Math.abs(interval);
        if (interval >= 10) {
            fstr = '%d';
        }

        else if (interval > 1) {
            if (interval === parseInt(interval, 10)) {
                fstr = '%d';
            }
            else {
                fstr = '%.1f';
            }
        }

        else {
            var expv = -Math.floor(Math.log(interval)/Math.LN10);
            fstr = '%.' + expv + 'f';
        }
        
        return fstr; 
    }

    var _factors = [0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 1, 2, 3, 4, 5];

    var _getLowerFactor = function(f) {
        var i = _factors.indexOf(f);
        if (i > 0) {
            return _factors[i-1];
        }
        else {
            return _factors[_factors.length - 1] / 100;
        }
    };

    var _getHigherFactor = function(f) {
        var i = _factors.indexOf(f);
        if (i < _factors.length-1) {
            return _factors[i+1];
        }
        else {
            return _factors[0] * 100;
        }
    };

    // Given a fixed minimum and maximum and a target number ot ticks
    // figure out the best interval and 
    // return min, max, number ticks, format string and tick interval
    function bestConstrainedInterval(min, max, nttarget) {
        // run through possible number to ticks and see which interval is best
        var low = Math.floor(nttarget/2);
        var hi = Math.ceil(nttarget*1.5);
        var badness = Number.MAX_VALUE;
        var r = (max - min);
        var temp;
        var sd;
        var bestNT;
        var gsf = $.jqplot.getSignificantFigures;
        var fsd;
        var fs;
        var currentNT;
        var bestPrec;

        for (var i=0, l=hi-low+1; i<l; i++) {
            currentNT = low + i;
            temp = r/(currentNT-1);
            sd = gsf(temp);

            temp = Math.abs(nttarget - currentNT) + sd.digitsRight;
            if (temp < badness) {
                badness = temp;
                bestNT = currentNT;
                bestPrec = sd.digitsRight;
            }
            else if (temp === badness) {
                // let nicer ticks trump number ot ticks
                if (sd.digitsRight < bestPrec) {
                    bestNT = currentNT;
                    bestPrec = sd.digitsRight;
                }
            }

        }

        fsd = Math.max(bestPrec, Math.max(gsf(min).digitsRight, gsf(max).digitsRight));
        if (fsd === 0) {
            fs = '%d';
        }
        else {
            fs = '%.' + fsd + 'f';
        }
        temp = r / (bestNT - 1);
        // min, max, number ticks, format string, tick interval
        return [min, max, bestNT, fs, temp];
    }

    // This will return an interval of form 2 * 10^n, 5 * 10^n or 10 * 10^n
    // it is based soley on the range and number of ticks.  So if user specifies
    // number of ticks, use this.
    function bestInterval(range, numberTicks) {
        numberTicks = numberTicks || 7;
        var minimum = range / (numberTicks - 1);
        var magnitude = Math.pow(10, Math.floor(Math.log(minimum) / Math.LN10));
        var residual = minimum / magnitude;
        var interval;
        // "nicest" ranges are 1, 2, 5 or powers of these.
        // for magnitudes below 1, only allow these. 
        if (magnitude < 1) {
            if (residual > 5) {
                interval = 10 * magnitude;
            }
            else if (residual > 2) {
                interval = 5 * magnitude;
            }
            else if (residual > 1) {
                interval = 2 * magnitude;
            }
            else {
                interval = magnitude;
            }
        }
        // for large ranges (whole integers), allow intervals like 3, 4 or powers of these.
        // this helps a lot with poor choices for number of ticks. 
        else {
            if (residual > 5) {
                interval = 10 * magnitude;
            }
            else if (residual > 4) {
                interval = 5 * magnitude;
            }
            else if (residual > 3) {
                interval = 4 * magnitude;
            }
            else if (residual > 2) {
                interval = 3 * magnitude;
            }
            else if (residual > 1) {
                interval = 2 * magnitude;
            }
            else {
                interval = magnitude;
            }
        }

        return interval;
    }

    // This will return an interval of form 2 * 10^n, 5 * 10^n or 10 * 10^n
    // it is based soley on the range of data, number of ticks must be computed later.
    function bestLinearInterval(range, scalefact) {
        scalefact = scalefact || 1;
        var expv = Math.floor(Math.log(range)/Math.LN10);
        var magnitude = Math.pow(10, expv);
        // 0 < f < 10
        var f = range / magnitude;
        var fact;
        // for large plots, scalefact will decrease f and increase number of ticks.
        // for small plots, scalefact will increase f and decrease number of ticks.
        f = f/scalefact;

        // for large plots, smaller interval, more ticks.
        if (f<=0.38) {
            fact = 0.1;
        }
        else if (f<=1.6) {
            fact = 0.2;
        }
        else if (f<=4.0) {
            fact = 0.5;
        }
        else if (f<=8.0) {
            fact = 1.0;
        }
        // for very small plots, larger interval, less ticks in number ticks
        else if (f<=16.0) {
            fact = 2;
        }
        else {
            fact = 5;
        } 

        return fact*magnitude; 
    }

    function bestLinearComponents(range, scalefact) {
        var expv = Math.floor(Math.log(range)/Math.LN10);
        var magnitude = Math.pow(10, expv);
        // 0 < f < 10
        var f = range / magnitude;
        var interval;
        var fact;
        // for large plots, scalefact will decrease f and increase number of ticks.
        // for small plots, scalefact will increase f and decrease number of ticks.
        f = f/scalefact;

        // for large plots, smaller interval, more ticks.
        if (f<=0.38) {
            fact = 0.1;
        }
        else if (f<=1.6) {
            fact = 0.2;
        }
        else if (f<=4.0) {
            fact = 0.5;
        }
        else if (f<=8.0) {
            fact = 1.0;
        }
        // for very small plots, larger interval, less ticks in number ticks
        else if (f<=16.0) {
            fact = 2;
        }
        // else if (f<=20.0) {
        //     fact = 3;
        // }
        // else if (f<=24.0) {
        //     fact = 4;
        // }
        else {
            fact = 5;
        } 

        interval = fact * magnitude;

        return [interval, fact, magnitude];
    }

    // Given the min and max for a dataset, return suitable endpoints
    // for the graphing, a good number for the number of ticks, and a
    // format string so that extraneous digits are not displayed.
    // returned is an array containing [min, max, nTicks, format]
    $.jqplot.LinearTickGenerator = function(axis_min, axis_max, scalefact, numberTicks, keepMin, keepMax) {
        // Set to preserve EITHER min OR max.
        // If min is preserved, max must be free.
        keepMin = (keepMin === null) ? false : keepMin;
        keepMax = (keepMax === null || keepMin) ? false : keepMax;
        // if endpoints are equal try to include zero otherwise include one
        if (axis_min === axis_max) {
            axis_max = (axis_max) ? 0 : 1;
        }

        scalefact = scalefact || 1.0;

        // make sure range is positive
        if (axis_max < axis_min) {
            var a = axis_max;
            axis_max = axis_min;
            axis_min = a;
        }

        var r = [];
        var ss = bestLinearInterval(axis_max - axis_min, scalefact);

        var gsf = $.jqplot.getSignificantFigures;
        
        if (numberTicks == null) {

            // Figure out the axis min, max and number of ticks
            // the min and max will be some multiple of the tick interval,
            // 1*10^n, 2*10^n or 5*10^n.  This gaurantees that, if the
            // axis min is negative, 0 will be a tick.
            if (!keepMin && !keepMax) {
                r[0] = Math.floor(axis_min / ss) * ss;  // min
                r[1] = Math.ceil(axis_max / ss) * ss;   // max
                r[2] = Math.round((r[1]-r[0])/ss+1.0);  // number of ticks
                r[3] = bestFormatString(ss);            // format string
                r[4] = ss;                              // tick Interval
            }

            else if (keepMin) {
                r[0] = axis_min;                                        // min
                r[2] = Math.ceil((axis_max - axis_min) / ss + 1.0);     // number of ticks
                r[1] = axis_min + (r[2] - 1) * ss;                      // max
                var digitsMin = gsf(axis_min).digitsRight;
                var digitsSS = gsf(ss).digitsRight;
                if (digitsMin < digitsSS) {
                    r[3] = bestFormatString(ss);                        // format string
                }
                else {
                    r[3] = '%.' + digitsMin + 'f';
                }
                r[4] = ss;                                              // tick Interval
            }

            else if (keepMax) {
                r[1] = axis_max;                                        // max
                r[2] = Math.ceil((axis_max - axis_min) / ss + 1.0);     // number of ticks
                r[0] = axis_max - (r[2] - 1) * ss;                      // min
                var digitsMax = gsf(axis_max).digitsRight;
                var digitsSS = gsf(ss).digitsRight;
                if (digitsMax < digitsSS) {
                    r[3] = bestFormatString(ss);                        // format string
                }
                else {
                    r[3] = '%.' + digitsMax + 'f';
                }
                r[4] = ss;                                              // tick Interval
            }
        }

        else {
            var tempr = [];

            // Figure out the axis min, max and number of ticks
            // the min and max will be some multiple of the tick interval,
            // 1*10^n, 2*10^n or 5*10^n.  This gaurantees that, if the
            // axis min is negative, 0 will be a tick.
            tempr[0] = Math.floor(axis_min / ss) * ss;  // min
            tempr[1] = Math.ceil(axis_max / ss) * ss;   // max
            tempr[2] = Math.round((tempr[1]-tempr[0])/ss+1.0);    // number of ticks
            tempr[3] = bestFormatString(ss);            // format string
            tempr[4] = ss;                              // tick Interval

            // first, see if we happen to get the right number of ticks
            if (tempr[2] === numberTicks) {
                r = tempr;
            }

            else {

                var newti = bestInterval(tempr[1] - tempr[0], numberTicks);

                r[0] = tempr[0];                        // min
                r[2] = numberTicks;                     // number of ticks
                r[4] = newti;                           // tick interval
                r[3] = bestFormatString(newti);         // format string
                r[1] = r[0] + (r[2] - 1) * r[4];        // max
            }
        }

        return r;
    };

    $.jqplot.LinearTickGenerator.bestLinearInterval = bestLinearInterval;
    $.jqplot.LinearTickGenerator.bestInterval = bestInterval;
    $.jqplot.LinearTickGenerator.bestLinearComponents = bestLinearComponents;
    $.jqplot.LinearTickGenerator.bestConstrainedInterval = bestConstrainedInterval;


    // class: $.jqplot.MarkerRenderer
    // The default jqPlot marker renderer, rendering the points on the line.
    $.jqplot.MarkerRenderer = function(options){
        // Group: Properties
        
        // prop: show
        // whether or not to show the marker.
        this.show = true;
        // prop: style
        // One of diamond, circle, square, x, plus, dash, filledDiamond, filledCircle, filledSquare
        this.style = 'filledCircle';
        // prop: lineWidth
        // size of the line for non-filled markers.
        this.lineWidth = 2;
        // prop: size
        // Size of the marker (diameter or circle, length of edge of square, etc.)
        this.size = 9.0;
        // prop: color
        // color of marker.  Will be set to color of series by default on init.
        this.color = '#666666';
        // prop: shadow
        // whether or not to draw a shadow on the line
        this.shadow = true;
        // prop: shadowAngle
        // Shadow angle in degrees
        this.shadowAngle = 45;
        // prop: shadowOffset
        // Shadow offset from line in pixels
        this.shadowOffset = 1;
        // prop: shadowDepth
        // Number of times shadow is stroked, each stroke offset shadowOffset from the last.
        this.shadowDepth = 3;
        // prop: shadowAlpha
        // Alpha channel transparency of shadow.  0 = transparent.
        this.shadowAlpha = '0.07';
        // prop: shadowRenderer
        // Renderer that will draws the shadows on the marker.
        this.shadowRenderer = new $.jqplot.ShadowRenderer();
        // prop: shapeRenderer
        // Renderer that will draw the marker.
        this.shapeRenderer = new $.jqplot.ShapeRenderer();
        
        $.extend(true, this, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
        var sdopt = {angle:this.shadowAngle, offset:this.shadowOffset, alpha:this.shadowAlpha, lineWidth:this.lineWidth, depth:this.shadowDepth, closePath:true};
        if (this.style.indexOf('filled') != -1) {
            sdopt.fill = true;
        }
        if (this.style.indexOf('ircle') != -1) {
            sdopt.isarc = true;
            sdopt.closePath = false;
        }
        this.shadowRenderer.init(sdopt);
        
        var shopt = {fill:false, isarc:false, strokeStyle:this.color, fillStyle:this.color, lineWidth:this.lineWidth, closePath:true};
        if (this.style.indexOf('filled') != -1) {
            shopt.fill = true;
        }
        if (this.style.indexOf('ircle') != -1) {
            shopt.isarc = true;
            shopt.closePath = false;
        }
        this.shapeRenderer.init(shopt);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawDiamond = function(x, y, ctx, fill, options) {
        var stretch = 1.2;
        var dx = this.size/2/stretch;
        var dy = this.size/2*stretch;
        var points = [[x-dx, y], [x, y+dy], [x+dx, y], [x, y-dy]];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points);
        }
        this.shapeRenderer.draw(ctx, points, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawPlus = function(x, y, ctx, fill, options) {
        var stretch = 1.0;
        var dx = this.size/2*stretch;
        var dy = this.size/2*stretch;
        var points1 = [[x, y-dy], [x, y+dy]];
        var points2 = [[x+dx, y], [x-dx, y]];
        var opts = $.extend(true, {}, this.options, {closePath:false});
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points1, {closePath:false});
            this.shadowRenderer.draw(ctx, points2, {closePath:false});
        }
        this.shapeRenderer.draw(ctx, points1, opts);
        this.shapeRenderer.draw(ctx, points2, opts);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawX = function(x, y, ctx, fill, options) {
        var stretch = 1.0;
        var dx = this.size/2*stretch;
        var dy = this.size/2*stretch;
        var opts = $.extend(true, {}, this.options, {closePath:false});
        var points1 = [[x-dx, y-dy], [x+dx, y+dy]];
        var points2 = [[x-dx, y+dy], [x+dx, y-dy]];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points1, {closePath:false});
            this.shadowRenderer.draw(ctx, points2, {closePath:false});
        }
        this.shapeRenderer.draw(ctx, points1, opts);
        this.shapeRenderer.draw(ctx, points2, opts);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawDash = function(x, y, ctx, fill, options) {
        var stretch = 1.0;
        var dx = this.size/2*stretch;
        var dy = this.size/2*stretch;
        var points = [[x-dx, y], [x+dx, y]];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points);
        }
        this.shapeRenderer.draw(ctx, points, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawLine = function(p1, p2, ctx, fill, options) {
        var points = [p1, p2];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points);
        }
        this.shapeRenderer.draw(ctx, points, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawSquare = function(x, y, ctx, fill, options) {
        var stretch = 1.0;
        var dx = this.size/2/stretch;
        var dy = this.size/2*stretch;
        var points = [[x-dx, y-dy], [x-dx, y+dy], [x+dx, y+dy], [x+dx, y-dy]];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points);
        }
        this.shapeRenderer.draw(ctx, points, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.drawCircle = function(x, y, ctx, fill, options) {
        var radius = this.size/2;
        var end = 2*Math.PI;
        var points = [x, y, radius, 0, end, true];
        if (this.shadow) {
            this.shadowRenderer.draw(ctx, points);
        }
        this.shapeRenderer.draw(ctx, points, options);
    };
    
    $.jqplot.MarkerRenderer.prototype.draw = function(x, y, ctx, options) {
        options = options || {};
        // hack here b/c shape renderer uses canvas based color style options
        // and marker uses css style names.
        if (options.show == null || options.show != false) {
            if (options.color && !options.fillStyle) {
                options.fillStyle = options.color;
            }
            if (options.color && !options.strokeStyle) {
                options.strokeStyle = options.color;
            }
            switch (this.style) {
                case 'diamond':
                    this.drawDiamond(x,y,ctx, false, options);
                    break;
                case 'filledDiamond':
                    this.drawDiamond(x,y,ctx, true, options);
                    break;
                case 'circle':
                    this.drawCircle(x,y,ctx, false, options);
                    break;
                case 'filledCircle':
                    this.drawCircle(x,y,ctx, true, options);
                    break;
                case 'square':
                    this.drawSquare(x,y,ctx, false, options);
                    break;
                case 'filledSquare':
                    this.drawSquare(x,y,ctx, true, options);
                    break;
                case 'x':
                    this.drawX(x,y,ctx, true, options);
                    break;
                case 'plus':
                    this.drawPlus(x,y,ctx, true, options);
                    break;
                case 'dash':
                    this.drawDash(x,y,ctx, true, options);
                    break;
                case 'line':
                    this.drawLine(x, y, ctx, false, options);
                    break;
                default:
                    this.drawDiamond(x,y,ctx, false, options);
                    break;
            }
        }
    };
    
    // class: $.jqplot.shadowRenderer
    // The default jqPlot shadow renderer, rendering shadows behind shapes.
    $.jqplot.ShadowRenderer = function(options){ 
        // Group: Properties
        
        // prop: angle
        // Angle of the shadow in degrees.  Measured counter-clockwise from the x axis.
        this.angle = 45;
        // prop: offset
        // Pixel offset at the given shadow angle of each shadow stroke from the last stroke.
        this.offset = 1;
        // prop: alpha
        // alpha transparency of shadow stroke.
        this.alpha = 0.07;
        // prop: lineWidth
        // width of the shadow line stroke.
        this.lineWidth = 1.5;
        // prop: lineJoin
        // How line segments of the shadow are joined.
        this.lineJoin = 'miter';
        // prop: lineCap
        // how ends of the shadow line are rendered.
        this.lineCap = 'round';
        // prop; closePath
        // whether line path segment is closed upon itself.
        this.closePath = false;
        // prop: fill
        // whether to fill the shape.
        this.fill = false;
        // prop: depth
        // how many times the shadow is stroked.  Each stroke will be offset by offset at angle degrees.
        this.depth = 3;
        this.strokeStyle = 'rgba(0,0,0,0.1)';
        // prop: isarc
        // whether the shadow is an arc or not.
        this.isarc = false;
        
        $.extend(true, this, options);
    };
    
    $.jqplot.ShadowRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
    
    // function: draw
    // draws an transparent black (i.e. gray) shadow.
    //
    // ctx - canvas drawing context
    // points - array of points or [x, y, radius, start angle (rad), end angle (rad)]
    $.jqplot.ShadowRenderer.prototype.draw = function(ctx, points, options) {
        ctx.save();
        var opts = (options != null) ? options : {};
        var fill = (opts.fill != null) ? opts.fill : this.fill;
        var fillRect = (opts.fillRect != null) ? opts.fillRect : this.fillRect;
        var closePath = (opts.closePath != null) ? opts.closePath : this.closePath;
        var offset = (opts.offset != null) ? opts.offset : this.offset;
        var alpha = (opts.alpha != null) ? opts.alpha : this.alpha;
        var depth = (opts.depth != null) ? opts.depth : this.depth;
        var isarc = (opts.isarc != null) ? opts.isarc : this.isarc;
        var linePattern = (opts.linePattern != null) ? opts.linePattern : this.linePattern;
        ctx.lineWidth = (opts.lineWidth != null) ? opts.lineWidth : this.lineWidth;
        ctx.lineJoin = (opts.lineJoin != null) ? opts.lineJoin : this.lineJoin;
        ctx.lineCap = (opts.lineCap != null) ? opts.lineCap : this.lineCap;
        ctx.strokeStyle = opts.strokeStyle || this.strokeStyle || 'rgba(0,0,0,'+alpha+')';
        ctx.fillStyle = opts.fillStyle || this.fillStyle || 'rgba(0,0,0,'+alpha+')';
        for (var j=0; j<depth; j++) {
            var ctxPattern = $.jqplot.LinePattern(ctx, linePattern);
            ctx.translate(Math.cos(this.angle*Math.PI/180)*offset, Math.sin(this.angle*Math.PI/180)*offset);
            ctxPattern.beginPath();
            if (isarc) {
                ctx.arc(points[0], points[1], points[2], points[3], points[4], true);                
            }
            else if (fillRect) {
                if (fillRect) {
                    ctx.fillRect(points[0], points[1], points[2], points[3]);
                }
            }
            else if (points && points.length){
                var move = true;
                for (var i=0; i<points.length; i++) {
                    // skip to the first non-null point and move to it.
                    if (points[i][0] != null && points[i][1] != null) {
                        if (move) {
                            ctxPattern.moveTo(points[i][0], points[i][1]);
                            move = false;
                        }
                        else {
                            ctxPattern.lineTo(points[i][0], points[i][1]);
                        }
                    }
                    else {
                        move = true;
                    }
                }
                
            }
            if (closePath) {
                ctxPattern.closePath();
            }
            if (fill) {
                ctx.fill();
            }
            else {
                ctx.stroke();
            }
        }
        ctx.restore();
    };
    
    // class: $.jqplot.shapeRenderer
    // The default jqPlot shape renderer.  Given a set of points will
    // plot them and either stroke a line (fill = false) or fill them (fill = true).
    // If a filled shape is desired, closePath = true must also be set to close
    // the shape.
    $.jqplot.ShapeRenderer = function(options){
        
        this.lineWidth = 1.5;
        // prop: linePattern
        // line pattern 'dashed', 'dotted', 'solid', some combination
        // of '-' and '.' characters such as '.-.' or a numerical array like 
        // [draw, skip, draw, skip, ...] such as [1, 10] to draw a dotted line, 
        // [1, 10, 20, 10] to draw a dot-dash line, and so on.
        this.linePattern = 'solid';
        // prop: lineJoin
        // How line segments of the shadow are joined.
        this.lineJoin = 'miter';
        // prop: lineCap
        // how ends of the shadow line are rendered.
        this.lineCap = 'round';
        // prop; closePath
        // whether line path segment is closed upon itself.
        this.closePath = false;
        // prop: fill
        // whether to fill the shape.
        this.fill = false;
        // prop: isarc
        // whether the shadow is an arc or not.
        this.isarc = false;
        // prop: fillRect
        // true to draw shape as a filled rectangle.
        this.fillRect = false;
        // prop: strokeRect
        // true to draw shape as a stroked rectangle.
        this.strokeRect = false;
        // prop: clearRect
        // true to cear a rectangle.
        this.clearRect = false;
        // prop: strokeStyle
        // css color spec for the stoke style
        this.strokeStyle = '#999999';
        // prop: fillStyle
        // css color spec for the fill style.
        this.fillStyle = '#999999'; 
        
        $.extend(true, this, options);
    };
    
    $.jqplot.ShapeRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
    
    // function: draw
    // draws the shape.
    //
    // ctx - canvas drawing context
    // points - array of points for shapes or 
    // [x, y, width, height] for rectangles or
    // [x, y, radius, start angle (rad), end angle (rad)] for circles and arcs.
    $.jqplot.ShapeRenderer.prototype.draw = function(ctx, points, options) {
        ctx.save();
        var opts = (options != null) ? options : {};
        var fill = (opts.fill != null) ? opts.fill : this.fill;
        var closePath = (opts.closePath != null) ? opts.closePath : this.closePath;
        var fillRect = (opts.fillRect != null) ? opts.fillRect : this.fillRect;
        var strokeRect = (opts.strokeRect != null) ? opts.strokeRect : this.strokeRect;
        var clearRect = (opts.clearRect != null) ? opts.clearRect : this.clearRect;
        var isarc = (opts.isarc != null) ? opts.isarc : this.isarc;
        var linePattern = (opts.linePattern != null) ? opts.linePattern : this.linePattern;
        var ctxPattern = $.jqplot.LinePattern(ctx, linePattern);
        ctx.lineWidth = opts.lineWidth || this.lineWidth;
        ctx.lineJoin = opts.lineJoin || this.lineJoin;
        ctx.lineCap = opts.lineCap || this.lineCap;
        ctx.strokeStyle = (opts.strokeStyle || opts.color) || this.strokeStyle;
        ctx.fillStyle = opts.fillStyle || this.fillStyle;
        ctx.beginPath();
        if (isarc) {
            ctx.arc(points[0], points[1], points[2], points[3], points[4], true);   
            if (closePath) {
                ctx.closePath();
            }
            if (fill) {
                ctx.fill();
            }
            else {
                ctx.stroke();
            }
            ctx.restore();
            return;
        }
        else if (clearRect) {
            ctx.clearRect(points[0], points[1], points[2], points[3]);
            ctx.restore();
            return;
        }
        else if (fillRect || strokeRect) {
            if (fillRect) {
                ctx.fillRect(points[0], points[1], points[2], points[3]);
            }
            if (strokeRect) {
                ctx.strokeRect(points[0], points[1], points[2], points[3]);
                ctx.restore();
                return;
            }
        }
        else if (points && points.length){
            var move = true;
            for (var i=0; i<points.length; i++) {
                // skip to the first non-null point and move to it.
                if (points[i][0] != null && points[i][1] != null) {
                    if (move) {
                        ctxPattern.moveTo(points[i][0], points[i][1]);
                        move = false;
                    }
                    else {
                        ctxPattern.lineTo(points[i][0], points[i][1]);
                    }
                }
                else {
                    move = true;
                }
            }
            if (closePath) {
                ctxPattern.closePath();
            }
            if (fill) {
                ctx.fill();
            }
            else {
                ctx.stroke();
            }
        }
        ctx.restore();
    };
    
    // class $.jqplot.TableLegendRenderer
    // The default legend renderer for jqPlot.
    $.jqplot.TableLegendRenderer = function(){
        //
    };
    
    $.jqplot.TableLegendRenderer.prototype.init = function(options) {
        $.extend(true, this, options);
    };
        
    $.jqplot.TableLegendRenderer.prototype.addrow = function (label, color, pad, reverse) {
        var rs = (pad) ? this.rowSpacing+'px' : '0px';
        var tr;
        var td;
        var elem;
        var div0;
        var div1;
        elem = document.createElement('tr');
        tr = $(elem);
        tr.addClass('jqplot-table-legend');
        elem = null;

        if (reverse){
            tr.prependTo(this._elem);
        }

        else{
            tr.appendTo(this._elem);
        }

        if (this.showSwatches) {
            td = $(document.createElement('td'));
            td.addClass('jqplot-table-legend jqplot-table-legend-swatch');
            td.css({textAlign: 'center', paddingTop: rs});

            div0 = $(document.createElement('div'));
            div0.addClass('jqplot-table-legend-swatch-outline');
            div1 = $(document.createElement('div'));
            div1.addClass('jqplot-table-legend-swatch');
            div1.css({backgroundColor: color, borderColor: color});

            tr.append(td.append(div0.append(div1)));

            // $('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+rs+';">'+
            // '<div><div class="jqplot-table-legend-swatch" style="background-color:'+color+';border-color:'+color+';"></div>'+
            // '</div></td>').appendTo(tr);
        }
        if (this.showLabels) {
            td = $(document.createElement('td'));
            td.addClass('jqplot-table-legend jqplot-table-legend-label');
            td.css('paddingTop', rs);
            tr.append(td);

            // elem = $('<td class="jqplot-table-legend" style="padding-top:'+rs+';"></td>');
            // elem.appendTo(tr);
            if (this.escapeHtml) {
                td.text(label);
            }
            else {
                td.html(label);
            }
        }
        td = null;
        div0 = null;
        div1 = null;
        tr = null;
        elem = null;
    };
    
    // called with scope of legend
    $.jqplot.TableLegendRenderer.prototype.draw = function() {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null;
        }

        if (this.show) {
            var series = this._series;
            // make a table.  one line label per row.
            var elem = document.createElement('table');
            this._elem = $(elem);
            this._elem.addClass('jqplot-table-legend');

            var ss = {position:'absolute'};
            if (this.background) {
                ss['background'] = this.background;
            }
            if (this.border) {
                ss['border'] = this.border;
            }
            if (this.fontSize) {
                ss['fontSize'] = this.fontSize;
            }
            if (this.fontFamily) {
                ss['fontFamily'] = this.fontFamily;
            }
            if (this.textColor) {
                ss['textColor'] = this.textColor;
            }
            if (this.marginTop != null) {
                ss['marginTop'] = this.marginTop;
            }
            if (this.marginBottom != null) {
                ss['marginBottom'] = this.marginBottom;
            }
            if (this.marginLeft != null) {
                ss['marginLeft'] = this.marginLeft;
            }
            if (this.marginRight != null) {
                ss['marginRight'] = this.marginRight;
            }
            
        
            var pad = false, 
                reverse = false,
                s;
            for (var i = 0; i< series.length; i++) {
                s = series[i];
                if (s._stack || s.renderer.constructor == $.jqplot.BezierCurveRenderer){
                    reverse = true;
                }
                if (s.show && s.showLabel) {
                    var lt = this.labels[i] || s.label.toString();
                    if (lt) {
                        var color = s.color;
                        if (reverse && i < series.length - 1){
                            pad = true;
                        }
                        else if (reverse && i == series.length - 1){
                            pad = false;
                        }
                        this.renderer.addrow.call(this, lt, color, pad, reverse);
                        pad = true;
                    }
                    // let plugins add more rows to legend.  Used by trend line plugin.
                    for (var j=0; j<$.jqplot.addLegendRowHooks.length; j++) {
                        var item = $.jqplot.addLegendRowHooks[j].call(this, s);
                        if (item) {
                            this.renderer.addrow.call(this, item.label, item.color, pad);
                            pad = true;
                        } 
                    }
                    lt = null;
                }
            }
        }
        return this._elem;
    };
    
    $.jqplot.TableLegendRenderer.prototype.pack = function(offsets) {
        if (this.show) {       
            if (this.placement == 'insideGrid') {
                switch (this.location) {
                    case 'nw':
                        var a = offsets.left;
                        var b = offsets.top;
                        this._elem.css('left', a);
                        this._elem.css('top', b);
                        break;
                    case 'n':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        var b = offsets.top;
                        this._elem.css('left', a);
                        this._elem.css('top', b);
                        break;
                    case 'ne':
                        var a = offsets.right;
                        var b = offsets.top;
                        this._elem.css({right:a, top:b});
                        break;
                    case 'e':
                        var a = offsets.right;
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({right:a, top:b});
                        break;
                    case 'se':
                        var a = offsets.right;
                        var b = offsets.bottom;
                        this._elem.css({right:a, bottom:b});
                        break;
                    case 's':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        var b = offsets.bottom;
                        this._elem.css({left:a, bottom:b});
                        break;
                    case 'sw':
                        var a = offsets.left;
                        var b = offsets.bottom;
                        this._elem.css({left:a, bottom:b});
                        break;
                    case 'w':
                        var a = offsets.left;
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({left:a, top:b});
                        break;
                    default:  // same as 'se'
                        var a = offsets.right;
                        var b = offsets.bottom;
                        this._elem.css({right:a, bottom:b});
                        break;
                }
                
            }
            else if (this.placement == 'outside'){
                switch (this.location) {
                    case 'nw':
                        var a = this._plotDimensions.width - offsets.left;
                        var b = offsets.top;
                        this._elem.css('right', a);
                        this._elem.css('top', b);
                        break;
                    case 'n':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        var b = this._plotDimensions.height - offsets.top;
                        this._elem.css('left', a);
                        this._elem.css('bottom', b);
                        break;
                    case 'ne':
                        var a = this._plotDimensions.width - offsets.right;
                        var b = offsets.top;
                        this._elem.css({left:a, top:b});
                        break;
                    case 'e':
                        var a = this._plotDimensions.width - offsets.right;
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({left:a, top:b});
                        break;
                    case 'se':
                        var a = this._plotDimensions.width - offsets.right;
                        var b = offsets.bottom;
                        this._elem.css({left:a, bottom:b});
                        break;
                    case 's':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        var b = this._plotDimensions.height - offsets.bottom;
                        this._elem.css({left:a, top:b});
                        break;
                    case 'sw':
                        var a = this._plotDimensions.width - offsets.left;
                        var b = offsets.bottom;
                        this._elem.css({right:a, bottom:b});
                        break;
                    case 'w':
                        var a = this._plotDimensions.width - offsets.left;
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({right:a, top:b});
                        break;
                    default:  // same as 'se'
                        var a = offsets.right;
                        var b = offsets.bottom;
                        this._elem.css({right:a, bottom:b});
                        break;
                }
            }
            else {
                switch (this.location) {
                    case 'nw':
                        this._elem.css({left:0, top:offsets.top});
                        break;
                    case 'n':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        this._elem.css({left: a, top:offsets.top});
                        break;
                    case 'ne':
                        this._elem.css({right:0, top:offsets.top});
                        break;
                    case 'e':
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({right:offsets.right, top:b});
                        break;
                    case 'se':
                        this._elem.css({right:offsets.right, bottom:offsets.bottom});
                        break;
                    case 's':
                        var a = (offsets.left + (this._plotDimensions.width - offsets.right))/2 - this.getWidth()/2;
                        this._elem.css({left: a, bottom:offsets.bottom});
                        break;
                    case 'sw':
                        this._elem.css({left:offsets.left, bottom:offsets.bottom});
                        break;
                    case 'w':
                        var b = (offsets.top + (this._plotDimensions.height - offsets.bottom))/2 - this.getHeight()/2;
                        this._elem.css({left:offsets.left, top:b});
                        break;
                    default:  // same as 'se'
                        this._elem.css({right:offsets.right, bottom:offsets.bottom});
                        break;
                }
            }
        } 
    };

    /**
     * Class: $.jqplot.ThemeEngine
     * Theme Engine provides a programatic way to change some of the  more
     * common jqplot styling options such as fonts, colors and grid options.
     * A theme engine instance is created with each plot.  The theme engine
     * manages a collection of themes which can be modified, added to, or 
     * applied to the plot.
     * 
     * The themeEngine class is not instantiated directly.
     * When a plot is initialized, the current plot options are scanned
     * an a default theme named "Default" is created.  This theme is
     * used as the basis for other themes added to the theme engine and
     * is always available.
     * 
     * A theme is a simple javascript object with styling parameters for
     * various entities of the plot.  A theme has the form:
     * 
     * 
     * > {
     * >     _name:f "Default",
     * >     target: {
     * >         backgroundColor: "transparent"
     * >     },
     * >     legend: {
     * >         textColor: null,
     * >         fontFamily: null,
     * >         fontSize: null,
     * >         border: null,
     * >         background: null
     * >     },
     * >     title: {
     * >         textColor: "rgb(102, 102, 102)",
     * >         fontFamily: "'Trebuchet MS',Arial,Helvetica,sans-serif",
     * >         fontSize: "19.2px",
     * >         textAlign: "center"
     * >     },
     * >     seriesStyles: {},
     * >     series: [{
     * >         color: "#4bb2c5",
     * >         lineWidth: 2.5,
     * >         linePattern: "solid",
     * >         shadow: true,
     * >         fillColor: "#4bb2c5",
     * >         showMarker: true,
     * >         markerOptions: {
     * >             color: "#4bb2c5",
     * >             show: true,
     * >             style: 'filledCircle',
     * >             lineWidth: 1.5,
     * >             size: 4,
     * >             shadow: true
     * >         }
     * >     }],
     * >     grid: {
     * >         drawGridlines: true,
     * >         gridLineColor: "#cccccc",
     * >         gridLineWidth: 1,
     * >         backgroundColor: "#fffdf6",
     * >         borderColor: "#999999",
     * >         borderWidth: 2,
     * >         shadow: true
     * >     },
     * >     axesStyles: {
     * >         label: {},
     * >         ticks: {}
     * >     },
     * >     axes: {
     * >         xaxis: {
     * >             borderColor: "#999999",
     * >             borderWidth: 2,
     * >             ticks: {
     * >                 show: true,
     * >                 showGridline: true,
     * >                 showLabel: true,
     * >                 showMark: true,
     * >                 size: 4,
     * >                 textColor: "",
     * >                 whiteSpace: "nowrap",
     * >                 fontSize: "12px",
     * >                 fontFamily: "'Trebuchet MS',Arial,Helvetica,sans-serif"
     * >             },
     * >             label: {
     * >                 textColor: "rgb(102, 102, 102)",
     * >                 whiteSpace: "normal",
     * >                 fontSize: "14.6667px",
     * >                 fontFamily: "'Trebuchet MS',Arial,Helvetica,sans-serif",
     * >                 fontWeight: "400"
     * >             }
     * >         },
     * >         yaxis: {
     * >             borderColor: "#999999",
     * >             borderWidth: 2,
     * >             ticks: {
     * >                 show: true,
     * >                 showGridline: true,
     * >                 showLabel: true,
     * >                 showMark: true,
     * >                 size: 4,
     * >                 textColor: "",
     * >                 whiteSpace: "nowrap",
     * >                 fontSize: "12px",
     * >                 fontFamily: "'Trebuchet MS',Arial,Helvetica,sans-serif"
     * >             },
     * >             label: {
     * >                 textColor: null,
     * >                 whiteSpace: null,
     * >                 fontSize: null,
     * >                 fontFamily: null,
     * >                 fontWeight: null
     * >             }
     * >         },
     * >         x2axis: {...
     * >         },
     * >         ...
     * >         y9axis: {...
     * >         }
     * >     }
     * > }
     * 
     * "seriesStyles" is a style object that will be applied to all series in the plot.
     * It will forcibly override any styles applied on the individual series.  "axesStyles" is
     * a style object that will be applied to all axes in the plot.  It will also forcibly
     * override any styles on the individual axes.
     * 
     * The example shown above has series options for a line series.  Options for other
     * series types are shown below:
     * 
     * Bar Series:
     * 
     * > {
     * >     color: "#4bb2c5",
     * >     seriesColors: ["#4bb2c5", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"],
     * >     lineWidth: 2.5,
     * >     shadow: true,
     * >     barPadding: 2,
     * >     barMargin: 10,
     * >     barWidth: 15.09375,
     * >     highlightColors: ["rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)", "rgb(129,201,214)"]
     * > }
     * 
     * Pie Series:
     * 
     * > {
     * >     seriesColors: ["#4bb2c5", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"],
     * >     padding: 20,
     * >     sliceMargin: 0,
     * >     fill: true,
     * >     shadow: true,
     * >     startAngle: 0,
     * >     lineWidth: 2.5,
     * >     highlightColors: ["rgb(129,201,214)", "rgb(240,189,104)", "rgb(214,202,165)", "rgb(137,180,158)", "rgb(168,180,137)", "rgb(180,174,89)", "rgb(180,113,161)", "rgb(129,141,236)", "rgb(227,205,120)", "rgb(255,138,76)", "rgb(76,169,219)", "rgb(215,126,190)", "rgb(220,232,135)", "rgb(200,167,96)", "rgb(103,202,235)", "rgb(208,154,215)"]
     * > }
     * 
     * Funnel Series:
     * 
     * > {
     * >     color: "#4bb2c5",
     * >     lineWidth: 2,
     * >     shadow: true,
     * >     padding: {
     * >         top: 20,
     * >         right: 20,
     * >         bottom: 20,
     * >         left: 20
     * >     },
     * >     sectionMargin: 6,
     * >     seriesColors: ["#4bb2c5", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"],
     * >     highlightColors: ["rgb(147,208,220)", "rgb(242,199,126)", "rgb(220,210,178)", "rgb(154,191,172)", "rgb(180,191,154)", "rgb(191,186,112)", "rgb(191,133,174)", "rgb(147,157,238)", "rgb(231,212,139)", "rgb(255,154,102)", "rgb(102,181,224)", "rgb(221,144,199)", "rgb(225,235,152)", "rgb(200,167,96)", "rgb(124,210,238)", "rgb(215,169,221)"]
     * > }
     * 
     */
    $.jqplot.ThemeEngine = function(){
        // Group: Properties
        //
        // prop: themes
        // hash of themes managed by the theme engine.  
        // Indexed by theme name.
        this.themes = {};
        // prop: activeTheme
        // Pointer to currently active theme
        this.activeTheme=null;
        
    };
    
    // called with scope of plot
    $.jqplot.ThemeEngine.prototype.init = function() {
        // get the Default theme from the current plot settings.
        var th = new $.jqplot.Theme({_name:'Default'});
        var n, i, nn;
        
        for (n in th.target) {
            if (n == "textColor") {
                th.target[n] = this.target.css('color');
            }
            else {
                th.target[n] = this.target.css(n);
            }
        }
        
        if (this.title.show && this.title._elem) {
            for (n in th.title) {
                if (n == "textColor") {
                    th.title[n] = this.title._elem.css('color');
                }
                else {
                    th.title[n] = this.title._elem.css(n);
                }
            }
        }
        
        for (n in th.grid) {
            th.grid[n] = this.grid[n];
        }
        if (th.grid.backgroundColor == null && this.grid.background != null) {
            th.grid.backgroundColor = this.grid.background;
        }
        if (this.legend.show && this.legend._elem) {
            for (n in th.legend) {
                if (n == 'textColor') {
                    th.legend[n] = this.legend._elem.css('color');
                }
                else {
                    th.legend[n] = this.legend._elem.css(n);
                }
            }
        }
        var s;
        
        for (i=0; i<this.series.length; i++) {
            s = this.series[i];
            if (s.renderer.constructor == $.jqplot.LineRenderer) {
                th.series.push(new LineSeriesProperties());
            }
            else if (s.renderer.constructor == $.jqplot.BarRenderer) {
                th.series.push(new BarSeriesProperties());
            }
            else if (s.renderer.constructor == $.jqplot.PieRenderer) {
                th.series.push(new PieSeriesProperties());
            }
            else if (s.renderer.constructor == $.jqplot.DonutRenderer) {
                th.series.push(new DonutSeriesProperties());
            }
            else if (s.renderer.constructor == $.jqplot.FunnelRenderer) {
                th.series.push(new FunnelSeriesProperties());
            }
            else if (s.renderer.constructor == $.jqplot.MeterGaugeRenderer) {
                th.series.push(new MeterSeriesProperties());
            }
            else {
                th.series.push({});
            }
            for (n in th.series[i]) {
                th.series[i][n] = s[n];
            }
        }
        var a, ax;
        for (n in this.axes) {
            ax = this.axes[n];
            a = th.axes[n] = new AxisProperties();
            a.borderColor = ax.borderColor;
            a.borderWidth = ax.borderWidth;
            if (ax._ticks && ax._ticks[0]) {
                for (nn in a.ticks) {
                    if (ax._ticks[0].hasOwnProperty(nn)) {
                        a.ticks[nn] = ax._ticks[0][nn];
                    }
                    else if (ax._ticks[0]._elem){
                        a.ticks[nn] = ax._ticks[0]._elem.css(nn);
                    }
                }
            }
            if (ax._label && ax._label.show) {
                for (nn in a.label) {
                    // a.label[nn] = ax._label._elem.css(nn);
                    if (ax._label[nn]) {
                        a.label[nn] = ax._label[nn];
                    }
                    else if (ax._label._elem){
                        if (nn == 'textColor') {
                            a.label[nn] = ax._label._elem.css('color');
                        }
                        else {
                            a.label[nn] = ax._label._elem.css(nn);
                        }
                    }
                }
            }
        }
        this.themeEngine._add(th);
        this.themeEngine.activeTheme  = this.themeEngine.themes[th._name];
    };
    /**
     * Group: methods
     * 
     * method: get
     * 
     * Get and return the named theme or the active theme if no name given.
     * 
     * parameter:
     * 
     * name - name of theme to get.
     * 
     * returns:
     * 
     * Theme instance of given name.
     */   
    $.jqplot.ThemeEngine.prototype.get = function(name) {
        if (!name) {
            // return the active theme
            return this.activeTheme;
        }
        else {
            return this.themes[name];
        }
    };
    
    function numericalOrder(a,b) { return a-b; }
    
    /**
     * method: getThemeNames
     * 
     * Return the list of theme names in this manager in alpha-numerical order.
     * 
     * parameter:
     * 
     * None
     * 
     * returns:
     * 
     * A the list of theme names in this manager in alpha-numerical order.
     */       
    $.jqplot.ThemeEngine.prototype.getThemeNames = function() {
        var tn = [];
        for (var n in this.themes) {
            tn.push(n);
        }
        return tn.sort(numericalOrder);
    };

    /**
     * method: getThemes
     * 
     * Return a list of themes in alpha-numerical order by name.
     * 
     * parameter:
     * 
     * None
     * 
     * returns:
     * 
     * A list of themes in alpha-numerical order by name.
     */ 
    $.jqplot.ThemeEngine.prototype.getThemes = function() {
        var tn = [];
        var themes = [];
        for (var n in this.themes) {
            tn.push(n);
        }
        tn.sort(numericalOrder);
        for (var i=0; i<tn.length; i++) {
            themes.push(this.themes[tn[i]]);
        }
        return themes;
    };
    
    $.jqplot.ThemeEngine.prototype.activate = function(plot, name) {
        // sometimes need to redraw whole plot.
        var redrawPlot = false;
        if (!name && this.activeTheme && this.activeTheme._name) {
            name = this.activeTheme._name;
        }
        if (!this.themes.hasOwnProperty(name)) {
            throw new Error("No theme of that name");
        }
        else {
            var th = this.themes[name];
            this.activeTheme = th;
            var val, checkBorderColor = false, checkBorderWidth = false;
            var arr = ['xaxis', 'x2axis', 'yaxis', 'y2axis'];
            
            for (i=0; i<arr.length; i++) {
                var ax = arr[i];
                if (th.axesStyles.borderColor != null) {
                    plot.axes[ax].borderColor = th.axesStyles.borderColor;
                }
                if (th.axesStyles.borderWidth != null) {
                    plot.axes[ax].borderWidth = th.axesStyles.borderWidth;
                }
            }
            
            for (var axname in plot.axes) {
                var axis = plot.axes[axname];
                if (axis.show) {
                    var thaxis = th.axes[axname] || {};
                    var thaxstyle = th.axesStyles;
                    var thax = $.jqplot.extend(true, {}, thaxis, thaxstyle);
                    val = (th.axesStyles.borderColor != null) ? th.axesStyles.borderColor : thax.borderColor;
                    if (thax.borderColor != null) {
                        axis.borderColor = thax.borderColor;
                        redrawPlot = true;
                    }
                    val = (th.axesStyles.borderWidth != null) ? th.axesStyles.borderWidth : thax.borderWidth;
                    if (thax.borderWidth != null) {
                        axis.borderWidth = thax.borderWidth;
                        redrawPlot = true;
                    }
                    if (axis._ticks && axis._ticks[0]) {
                        for (var nn in thax.ticks) {
                            // val = null;
                            // if (th.axesStyles.ticks && th.axesStyles.ticks[nn] != null) {
                            //     val = th.axesStyles.ticks[nn];
                            // }
                            // else if (thax.ticks[nn] != null){
                            //     val = thax.ticks[nn]
                            // }
                            val = thax.ticks[nn];
                            if (val != null) {
                                axis.tickOptions[nn] = val;
                                axis._ticks = [];
                                redrawPlot = true;
                            }
                        }
                    }
                    if (axis._label && axis._label.show) {
                        for (var nn in thax.label) {
                            // val = null;
                            // if (th.axesStyles.label && th.axesStyles.label[nn] != null) {
                            //     val = th.axesStyles.label[nn];
                            // }
                            // else if (thax.label && thax.label[nn] != null){
                            //     val = thax.label[nn]
                            // }
                            val = thax.label[nn];
                            if (val != null) {
                                axis.labelOptions[nn] = val;
                                redrawPlot = true;
                            }
                        }
                    }
                    
                }
            }            
            
            for (var n in th.grid) {
                if (th.grid[n] != null) {
                    plot.grid[n] = th.grid[n];
                }
            }
            if (!redrawPlot) {
                plot.grid.draw();
            }
            
            if (plot.legend.show) { 
                for (n in th.legend) {
                    if (th.legend[n] != null) {
                        plot.legend[n] = th.legend[n];
                    }
                }
            }
            if (plot.title.show) {
                for (n in th.title) {
                    if (th.title[n] != null) {
                        plot.title[n] = th.title[n];
                    }
                }
            }
            
            var i;
            for (i=0; i<th.series.length; i++) {
                var opts = {};
                var redrawSeries = false;
                for (n in th.series[i]) {
                    val = (th.seriesStyles[n] != null) ? th.seriesStyles[n] : th.series[i][n];
                    if (val != null) {
                        opts[n] = val;
                        if (n == 'color') {
                            plot.series[i].renderer.shapeRenderer.fillStyle = val;
                            plot.series[i].renderer.shapeRenderer.strokeStyle = val;
                            plot.series[i][n] = val;
                        }
                        else if ((n == 'lineWidth') || (n == 'linePattern')) {
                            plot.series[i].renderer.shapeRenderer[n] = val;
                            plot.series[i][n] = val;
                        }
                        else if (n == 'markerOptions') {
                            merge (plot.series[i].markerOptions, val);
                            merge (plot.series[i].markerRenderer, val);
                        }
                        else {
                            plot.series[i][n] = val;
                        }
                        redrawPlot = true;
                    }
                }
            }
            
            if (redrawPlot) {
                plot.target.empty();
                plot.draw();
            }
            
            for (n in th.target) {
                if (th.target[n] != null) {
                    plot.target.css(n, th.target[n]);
                }
            }
        }
        
    };
    
    $.jqplot.ThemeEngine.prototype._add = function(theme, name) {
        if (name) {
            theme._name = name;
        }
        if (!theme._name) {
            theme._name = Date.parse(new Date());
        }
        if (!this.themes.hasOwnProperty(theme._name)) {
            this.themes[theme._name] = theme;
        }
        else {
            throw new Error("jqplot.ThemeEngine Error: Theme already in use");
        }
    };
    
    // method remove
    // Delete the named theme, return true on success, false on failure.
    

    /**
     * method: remove
     * 
     * Remove the given theme from the themeEngine.
     * 
     * parameters:
     * 
     * name - name of the theme to remove.
     * 
     * returns:
     * 
     * true on success, false on failure.
     */
    $.jqplot.ThemeEngine.prototype.remove = function(name) {
        if (name == 'Default') {
            return false;
        }
        return delete this.themes[name];
    };

    /**
     * method: newTheme
     * 
     * Create a new theme based on the default theme, adding it the themeEngine.
     * 
     * parameters:
     * 
     * name - name of the new theme.
     * obj - optional object of styles to be applied to this new theme.
     * 
     * returns:
     * 
     * new Theme object.
     */
    $.jqplot.ThemeEngine.prototype.newTheme = function(name, obj) {
        if (typeof(name) == 'object') {
            obj = obj || name;
            name = null;
        }
        if (obj && obj._name) {
            name = obj._name;
        }
        else {
            name = name || Date.parse(new Date());
        }
        // var th = new $.jqplot.Theme(name);
        var th = this.copy(this.themes['Default']._name, name);
        $.jqplot.extend(th, obj);
        return th;
    };
    
    // function clone(obj) {
    //     return eval(obj.toSource());
    // }
    
    function clone(obj){
        if(obj == null || typeof(obj) != 'object'){
            return obj;
        }
    
        var temp = new obj.constructor();
        for(var key in obj){
            temp[key] = clone(obj[key]);
        }   
        return temp;
    }
    
    $.jqplot.clone = clone;
    
    function merge(obj1, obj2) {
        if (obj2 ==  null || typeof(obj2) != 'object') {
            return;
        }
        for (var key in obj2) {
            if (key == 'highlightColors') {
                obj1[key] = clone(obj2[key]);
            }
            if (obj2[key] != null && typeof(obj2[key]) == 'object') {
                if (!obj1.hasOwnProperty(key)) {
                    obj1[key] = {};
                }
                merge(obj1[key], obj2[key]);
            }
            else {
                obj1[key] = obj2[key];
            }
        }
    }
    
    $.jqplot.merge = merge;
    
        // Use the jQuery 1.3.2 extend function since behaviour in jQuery 1.4 seems problematic
    $.jqplot.extend = function() {
        // copy reference to target object
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !toString.call(target) === "[object Function]" ) {
            target = {};
        }

        for ( ; i < length; i++ ){
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( var name in options ) {
                    var src = target[ name ], copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging object values
                    if ( deep && copy && typeof copy === "object" && !copy.nodeType ) {
                        target[ name ] = $.jqplot.extend( deep, 
                            // Never move original objects, clone them
                            src || ( copy.length != null ? [ ] : { } )
                        , copy );
                    }
                    // Don't bring in undefined values
                    else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };

    /**
     * method: rename
     * 
     * Rename a theme.
     * 
     * parameters:
     * 
     * oldName - current name of the theme.
     * newName - desired name of the theme.
     * 
     * returns:
     * 
     * new Theme object.
     */
    $.jqplot.ThemeEngine.prototype.rename = function (oldName, newName) {
        if (oldName == 'Default' || newName == 'Default') {
            throw new Error ("jqplot.ThemeEngine Error: Cannot rename from/to Default");
        }
        if (this.themes.hasOwnProperty(newName)) {
            throw new Error ("jqplot.ThemeEngine Error: New name already in use.");
        }
        else if (this.themes.hasOwnProperty(oldName)) {
            var th = this.copy (oldName, newName);
            this.remove(oldName);
            return th;
        }
        throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid");
    };

    /**
     * method: copy
     * 
     * Create a copy of an existing theme in the themeEngine, adding it the themeEngine.
     * 
     * parameters:
     * 
     * sourceName - name of the existing theme.
     * targetName - name of the copy.
     * obj - optional object of style parameter to apply to the new theme.
     * 
     * returns:
     * 
     * new Theme object.
     */
    $.jqplot.ThemeEngine.prototype.copy = function (sourceName, targetName, obj) {
        if (targetName == 'Default') {
            throw new Error ("jqplot.ThemeEngine Error: Cannot copy over Default theme");
        }
        if (!this.themes.hasOwnProperty(sourceName)) {
            var s = "jqplot.ThemeEngine Error: Source name invalid";
            throw new Error(s);
        }
        if (this.themes.hasOwnProperty(targetName)) {
            var s = "jqplot.ThemeEngine Error: Target name invalid";
            throw new Error(s);
        }
        else {
            var th = clone(this.themes[sourceName]);
            th._name = targetName;
            $.jqplot.extend(true, th, obj);
            this._add(th);
            return th;
        }
    };
    
    
    $.jqplot.Theme = function(name, obj) {
        if (typeof(name) == 'object') {
            obj = obj || name;
            name = null;
        }
        name = name || Date.parse(new Date());
        this._name = name;
        this.target = {
            backgroundColor: null
        };
        this.legend = {
            textColor: null,
            fontFamily: null,
            fontSize: null,
            border: null,
            background: null
        };
        this.title = {
            textColor: null,
            fontFamily: null,
            fontSize: null,
            textAlign: null
        };
        this.seriesStyles = {};
        this.series = [];
        this.grid = {
            drawGridlines: null,
            gridLineColor: null,
            gridLineWidth: null,
            backgroundColor: null,
            borderColor: null,
            borderWidth: null,
            shadow: null
        };
        this.axesStyles = {label:{}, ticks:{}};
        this.axes = {};
        if (typeof(obj) == 'string') {
            this._name = obj;
        }
        else if(typeof(obj) == 'object') {
            $.jqplot.extend(true, this, obj);
        }
    };
    
    var AxisProperties = function() {
        this.borderColor = null;
        this.borderWidth = null;
        this.ticks = new AxisTicks();
        this.label = new AxisLabel();
    };
    
    var AxisTicks = function() {
        this.show = null;
        this.showGridline = null;
        this.showLabel = null;
        this.showMark = null;
        this.size = null;
        this.textColor = null;
        this.whiteSpace = null;
        this.fontSize = null;
        this.fontFamily = null;
    };
    
    var AxisLabel = function() {
        this.textColor = null;
        this.whiteSpace = null;
        this.fontSize = null;
        this.fontFamily = null;
        this.fontWeight = null;
    };
    
    var LineSeriesProperties = function() {
        this.color=null;
        this.lineWidth=null;
        this.linePattern=null;
        this.shadow=null;
        this.fillColor=null;
        this.showMarker=null;
        this.markerOptions = new MarkerOptions();
    };
    
    var MarkerOptions = function() {
        this.show = null;
        this.style = null;
        this.lineWidth = null;
        this.size = null;
        this.color = null;
        this.shadow = null;
    };
    
    var BarSeriesProperties = function() {
        this.color=null;
        this.seriesColors=null;
        this.lineWidth=null;
        this.shadow=null;
        this.barPadding=null;
        this.barMargin=null;
        this.barWidth=null;
        this.highlightColors=null;
    };
    
    var PieSeriesProperties = function() {
        this.seriesColors=null;
        this.padding=null;
        this.sliceMargin=null;
        this.fill=null;
        this.shadow=null;
        this.startAngle=null;
        this.lineWidth=null;
        this.highlightColors=null;
    };
    
    var DonutSeriesProperties = function() {
        this.seriesColors=null;
        this.padding=null;
        this.sliceMargin=null;
        this.fill=null;
        this.shadow=null;
        this.startAngle=null;
        this.lineWidth=null;
        this.innerDiameter=null;
        this.thickness=null;
        this.ringMargin=null;
        this.highlightColors=null;
    };
    
    var FunnelSeriesProperties = function() {
        this.color=null;
        this.lineWidth=null;
        this.shadow=null;
        this.padding=null;
        this.sectionMargin=null;
        this.seriesColors=null;
        this.highlightColors=null;
    };
    
    var MeterSeriesProperties = function() {
        this.padding=null;
        this.backgroundColor=null;
        this.ringColor=null;
        this.tickColor=null;
        this.ringWidth=null;
        this.intervalColors=null;
        this.intervalInnerRadius=null;
        this.intervalOuterRadius=null;
        this.hubRadius=null;
        this.needleThickness=null;
        this.needlePad=null;
    };
        



    $.fn.jqplotChildText = function() {
        return $(this).contents().filter(function() {
            return this.nodeType == 3;  // Node.TEXT_NODE not defined in I7
        }).text();
    };

    // Returns font style as abbreviation for "font" property.
    $.fn.jqplotGetComputedFontStyle = function() {
        var css = window.getComputedStyle ?  window.getComputedStyle(this[0], "") : this[0].currentStyle;
        var attrs = css['font-style'] ? ['font-style', 'font-weight', 'font-size', 'font-family'] : ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily'];
        var style = [];

        for (var i=0 ; i < attrs.length; ++i) {
            var attr = String(css[attrs[i]]);

            if (attr && attr != 'normal') {
                style.push(attr);
            }
        }
        return style.join(' ');
    };

    /**
     * Namespace: $.fn
     * jQuery namespace to attach functions to jQuery elements.
     *  
     */

    $.fn.jqplotToImageCanvas = function(options) {

        options = options || {};
        var x_offset = (options.x_offset == null) ? 0 : options.x_offset;
        var y_offset = (options.y_offset == null) ? 0 : options.y_offset;
        var backgroundColor = (options.backgroundColor == null) ? 'rgb(255,255,255)' : options.backgroundColor;

        if ($(this).width() == 0 || $(this).height() == 0) {
            return null;
        }

        // excanvas and hence IE < 9 do not support toDataURL and cannot export images.
        if ($.jqplot.use_excanvas) {
            return null;
        }
        
        var newCanvas = document.createElement("canvas");
        var h = $(this).outerHeight(true);
        var w = $(this).outerWidth(true);
        var offs = $(this).offset();
        var plotleft = offs.left;
        var plottop = offs.top;
        var transx = 0, transy = 0;

        // have to check if any elements are hanging outside of plot area before rendering,
        // since changing width of canvas will erase canvas.

        var clses = ['jqplot-table-legend', 'jqplot-xaxis-tick', 'jqplot-x2axis-tick', 'jqplot-yaxis-tick', 'jqplot-y2axis-tick', 'jqplot-y3axis-tick', 
        'jqplot-y4axis-tick', 'jqplot-y5axis-tick', 'jqplot-y6axis-tick', 'jqplot-y7axis-tick', 'jqplot-y8axis-tick', 'jqplot-y9axis-tick',
        'jqplot-xaxis-label', 'jqplot-x2axis-label', 'jqplot-yaxis-label', 'jqplot-y2axis-label', 'jqplot-y3axis-label', 'jqplot-y4axis-label', 
        'jqplot-y5axis-label', 'jqplot-y6axis-label', 'jqplot-y7axis-label', 'jqplot-y8axis-label', 'jqplot-y9axis-label' ];

        var temptop, templeft, tempbottom, tempright;

        for (var i = 0; i < clses.length; i++) {
            $(this).find('.'+clses[i]).each(function() {
                temptop = $(this).offset().top - plottop;
                templeft = $(this).offset().left - plotleft;
                tempright = templeft + $(this).outerWidth(true) + transx;
                tempbottom = temptop + $(this).outerHeight(true) + transy;
                if (templeft < -transx) {
                    w = w - transx - templeft;
                    transx = -templeft;
                }
                if (temptop < -transy) {
                    h = h - transy - temptop;
                    transy = - temptop;
                }
                if (tempright > w) {
                    w = tempright;
                }
                if (tempbottom > h) {
                    h =  tempbottom;
                }
            });
        }

        newCanvas.width = w + Number(x_offset);
        newCanvas.height = h + Number(y_offset);

        var newContext = newCanvas.getContext("2d"); 

        newContext.save();
        newContext.fillStyle = backgroundColor;
        newContext.fillRect(0,0, newCanvas.width, newCanvas.height);
        newContext.restore();

        newContext.translate(transx, transy);
        newContext.textAlign = 'left';
        newContext.textBaseline = 'top';

        function getLineheight(el) {
            var lineheight = parseInt($(el).css('line-height'), 10);

            if (isNaN(lineheight)) {
                lineheight = parseInt($(el).css('font-size'), 10) * 1.2;
            }
            return lineheight;
        }

        function writeWrappedText (el, context, text, left, top, canvasWidth) {
            var lineheight = getLineheight(el);
            var tagwidth = $(el).innerWidth();
            var tagheight = $(el).innerHeight();
            var words = text.split(/\s+/);
            var wl = words.length;
            var w = '';
            var breaks = [];
            var temptop = top;
            var templeft = left;

            for (var i=0; i<wl; i++) {
                w += words[i];
                if (context.measureText(w).width > tagwidth) {
                    breaks.push(i);
                    w = '';
                    i--;
                }   
            }
            if (breaks.length === 0) {
                // center text if necessary
                if ($(el).css('textAlign') === 'center') {
                    templeft = left + (canvasWidth - context.measureText(w).width)/2  - transx;
                }
                context.fillText(text, templeft, top);
            }
            else {
                w = words.slice(0, breaks[0]).join(' ');
                // center text if necessary
                if ($(el).css('textAlign') === 'center') {
                    templeft = left + (canvasWidth - context.measureText(w).width)/2  - transx;
                }
                context.fillText(w, templeft, temptop);
                temptop += lineheight;
                for (var i=1, l=breaks.length; i<l; i++) {
                    w = words.slice(breaks[i-1], breaks[i]).join(' ');
                    // center text if necessary
                    if ($(el).css('textAlign') === 'center') {
                        templeft = left + (canvasWidth - context.measureText(w).width)/2  - transx;
                    }
                    context.fillText(w, templeft, temptop);
                    temptop += lineheight;
                }
                w = words.slice(breaks[i-1], words.length).join(' ');
                // center text if necessary
                if ($(el).css('textAlign') === 'center') {
                    templeft = left + (canvasWidth - context.measureText(w).width)/2  - transx;
                }
                context.fillText(w, templeft, temptop);
            }

        }

        function _jqpToImage(el, x_offset, y_offset) {
            var tagname = el.tagName.toLowerCase();
            var p = $(el).position();
            var css = window.getComputedStyle ?  window.getComputedStyle(el, "") : el.currentStyle; // for IE < 9
            var left = x_offset + p.left + parseInt(css.marginLeft, 10) + parseInt(css.borderLeftWidth, 10) + parseInt(css.paddingLeft, 10);
            var top = y_offset + p.top + parseInt(css.marginTop, 10) + parseInt(css.borderTopWidth, 10)+ parseInt(css.paddingTop, 10);
            var w = newCanvas.width;
            // var left = x_offset + p.left + $(el).css('marginLeft') + $(el).css('borderLeftWidth') 

            // somehow in here, for divs within divs, the width of the inner div should be used instead of the canvas.

            if ((tagname == 'div' || tagname == 'span') && !$(el).hasClass('jqplot-highlighter-tooltip')) {
                $(el).children().each(function() {
                    _jqpToImage(this, left, top);
                });
                var text = $(el).jqplotChildText();

                if (text) {
                    newContext.font = $(el).jqplotGetComputedFontStyle();
                    newContext.fillStyle = $(el).css('color');

                    writeWrappedText(el, newContext, text, left, top, w);
                }
            }

            // handle the standard table legend

            else if (tagname === 'table' && $(el).hasClass('jqplot-table-legend')) {
                newContext.strokeStyle = $(el).css('border-top-color');
                newContext.fillStyle = $(el).css('background-color');
                newContext.fillRect(left, top, $(el).innerWidth(), $(el).innerHeight());
                if (parseInt($(el).css('border-top-width'), 10) > 0) {
                    newContext.strokeRect(left, top, $(el).innerWidth(), $(el).innerHeight());
                }

                // find all the swatches
                $(el).find('div.jqplot-table-legend-swatch-outline').each(function() {
                    // get the first div and stroke it
                    var elem = $(this);
                    newContext.strokeStyle = elem.css('border-top-color');
                    var l = left + elem.position().left;
                    var t = top + elem.position().top;
                    newContext.strokeRect(l, t, elem.innerWidth(), elem.innerHeight());

                    // now fill the swatch
                    
                    l += parseInt(elem.css('padding-left'), 10);
                    t += parseInt(elem.css('padding-top'), 10);
                    var h = elem.innerHeight() - 2 * parseInt(elem.css('padding-top'), 10);
                    var w = elem.innerWidth() - 2 * parseInt(elem.css('padding-left'), 10);

                    var swatch = elem.children('div.jqplot-table-legend-swatch');
                    newContext.fillStyle = swatch.css('background-color');
                    newContext.fillRect(l, t, w, h);
                });

                // now add text

                $(el).find('td.jqplot-table-legend-label').each(function(){
                    var elem = $(this);
                    var l = left + elem.position().left;
                    var t = top + elem.position().top + parseInt(elem.css('padding-top'), 10);
                    newContext.font = elem.jqplotGetComputedFontStyle();
                    newContext.fillStyle = elem.css('color');
                    writeWrappedText(elem, newContext, elem.text(), l, t, w);
                });

                var elem = null;
            }

            else if (tagname == 'canvas') {
                newContext.drawImage(el, left, top);
            }
        }
        $(this).children().each(function() {
            _jqpToImage(this, x_offset, y_offset);
        });
        return newCanvas;
    };

    // return the raw image data string.
    // Should work on canvas supporting browsers.
    $.fn.jqplotToImageStr = function(options) {
        var imgCanvas = $(this).jqplotToImageCanvas(options);
        if (imgCanvas) {
            return imgCanvas.toDataURL("image/png");
        }
        else {
            return null;
        }
    };

    // return a DOM <img> element and return it.
    // Should work on canvas supporting browsers.
    $.fn.jqplotToImageElem = function(options) {
        var elem = document.createElement("img");
        var str = $(this).jqplotToImageStr(options);
        elem.src = str;
        return elem;
    };

    // return a string for an <img> element and return it.
    // Should work on canvas supporting browsers.
    $.fn.jqplotToImageElemStr = function(options) {
        var str = '<img src='+$(this).jqplotToImageStr(options)+' />';
        return str;
    };

    // Not guaranteed to work, even on canvas supporting browsers due to 
    // limitations with location.href and browser support.
    $.fn.jqplotSaveImage = function() {
        var imgData = $(this).jqplotToImageStr({});
        if (imgData) {
            window.location.href = imgData.replace("image/png", "image/octet-stream");
        }

    };

    // Not guaranteed to work, even on canvas supporting browsers due to
    // limitations with window.open and arbitrary data.
    $.fn.jqplotViewImage = function() {
        var imgStr = $(this).jqplotToImageElemStr({});
        var imgData = $(this).jqplotToImageStr({});
        if (imgStr) {
            var w = window.open('');
            w.document.open("image/png");
            w.document.write(imgStr);
            w.document.close();
            w = null;
        }
    };
    



    /** 
     * @description
     * <p>Object with extended date parsing and formatting capabilities.
     * This library borrows many concepts and ideas from the Date Instance 
     * Methods by Ken Snyder along with some parts of Ken's actual code.</p>
     *
     * <p>jsDate takes a different approach by not extending the built-in 
     * Date Object, improving date parsing, allowing for multiple formatting 
     * syntaxes and multiple and more easily expandable localization.</p>
     * 
     * @author Chris Leonello
     * @date #date#
     * @version #VERSION#
     * @copyright (c) 2010-2013 Chris Leonello
     * jsDate is currently available for use in all personal or commercial projects 
     * under both the MIT and GPL version 2.0 licenses. This means that you can 
     * choose the license that best suits your project and use it accordingly.
     * 
     * <p>Ken's original Date Instance Methods and copyright notice:</p>
     * <pre>
     * Ken Snyder (ken d snyder at gmail dot com)
     * 2008-09-10
     * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
     * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
     * </pre>
     * 
     * @class
     * @name jsDate
     * @param  {String | Number | Array | Date&nbsp;Object | Options&nbsp;Object} arguments Optional arguments, either a parsable date/time string,
     * a JavaScript timestamp, an array of numbers of form [year, month, day, hours, minutes, seconds, milliseconds],
     * a Date object, or an options object of form {syntax: "perl", date:some Date} where all options are optional.
     */
     
    var jsDate = function () {
    
        this.syntax = jsDate.config.syntax;
        this._type = "jsDate";
        this.proxy = new Date();
        this.options = {};
        this.locale = jsDate.regional.getLocale();
        this.formatString = '';
        this.defaultCentury = jsDate.config.defaultCentury;

        switch ( arguments.length ) {
            case 0:
                break;
            case 1:
                // other objects either won't have a _type property or,
                // if they do, it shouldn't be set to "jsDate", so
                // assume it is an options argument.
                if (get_type(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                    var opts = this.options = arguments[0];
                    this.syntax = opts.syntax || this.syntax;
                    this.defaultCentury = opts.defaultCentury || this.defaultCentury;
                    this.proxy = jsDate.createDate(opts.date);
                }
                else {
                    this.proxy = jsDate.createDate(arguments[0]);
                }
                break;
            default:
                var a = [];
                for ( var i=0; i<arguments.length; i++ ) {
                    a.push(arguments[i]);
                }
                // this should be the current date/time?
                this.proxy = new Date();
                this.proxy.setFullYear.apply( this.proxy, a.slice(0,3) );
                if ( a.slice(3).length ) {
                    this.proxy.setHours.apply( this.proxy, a.slice(3) );
                }
                break;
        }
    };
    
    /**
     * @namespace Configuration options that will be used as defaults for all instances on the page.
     * @property {String} defaultLocale The default locale to use [en].
     * @property {String} syntax The default syntax to use [perl].
     * @property {Number} defaultCentury The default centry for 2 digit dates.
     */
    jsDate.config = {
        defaultLocale: 'en',
        syntax: 'perl',
        defaultCentury: 1900
    };
        
    /**
     * Add an arbitrary amount to the currently stored date
     * 
     * @param {Number} number      
     * @param {String} unit
     * @returns {jsDate}       
     */
     
    jsDate.prototype.add = function(number, unit) {
        var factor = multipliers[unit] || multipliers.day;
        if (typeof factor == 'number') {
            this.proxy.setTime(this.proxy.getTime() + (factor * number));
        } else {
            factor.add(this, number);
        }
        return this;
    };
        
    /**
     * Create a new jqplot.date object with the same date
     * 
     * @returns {jsDate}
     */  
     
    jsDate.prototype.clone = function() {
            return new jsDate(this.proxy.getTime());
    };

    /**
     * Get the UTC TimeZone Offset of this date in milliseconds.
     *
     * @returns {Number}
     */

    jsDate.prototype.getUtcOffset = function() {
        return this.proxy.getTimezoneOffset() * 60000;
    };

    /**
     * Find the difference between this jsDate and another date.
     * 
     * @param {String| Number| Array| jsDate&nbsp;Object| Date&nbsp;Object} dateObj
     * @param {String} unit
     * @param {Boolean} allowDecimal
     * @returns {Number} Number of units difference between dates.
     */
     
    jsDate.prototype.diff = function(dateObj, unit, allowDecimal) {
        // ensure we have a Date object
        dateObj = new jsDate(dateObj);
        if (dateObj === null) {
            return null;
        }
        // get the multiplying factor integer or factor function
        var factor = multipliers[unit] || multipliers.day;
        if (typeof factor == 'number') {
            // multiply
            var unitDiff = (this.proxy.getTime() - dateObj.proxy.getTime()) / factor;
        } else {
            // run function
            var unitDiff = factor.diff(this.proxy, dateObj.proxy);
        }
        // if decimals are not allowed, round toward zero
        return (allowDecimal ? unitDiff : Math[unitDiff > 0 ? 'floor' : 'ceil'](unitDiff));          
    };
    
    /**
     * Get the abbreviated name of the current week day
     * 
     * @returns {String}
     */   
     
    jsDate.prototype.getAbbrDayName = function() {
        return jsDate.regional[this.locale]["dayNamesShort"][this.proxy.getDay()];
    };
    
    /**
     * Get the abbreviated name of the current month
     * 
     * @returns {String}
     */
     
    jsDate.prototype.getAbbrMonthName = function() {
        return jsDate.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()];
    };
    
    /**
     * Get UPPER CASE AM or PM for the current time
     * 
     * @returns {String}
     */
     
    jsDate.prototype.getAMPM = function() {
        return this.proxy.getHours() >= 12 ? 'PM' : 'AM';
    };
    
    /**
     * Get lower case am or pm for the current time
     * 
     * @returns {String}
     */
     
    jsDate.prototype.getAmPm = function() {
        return this.proxy.getHours() >= 12 ? 'pm' : 'am';
    };
    
    /**
     * Get the century (19 for 20th Century)
     *
     * @returns {Integer} Century (19 for 20th century).
     */
    jsDate.prototype.getCentury = function() { 
        return parseInt(this.proxy.getFullYear()/100, 10);
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getDate = function() {
        return this.proxy.getDate();
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getDay = function() {
        return this.proxy.getDay();
    };
    
    /**
     * Get the Day of week 1 (Monday) thru 7 (Sunday)
     * 
     * @returns {Integer} Day of week 1 (Monday) thru 7 (Sunday)
     */
    jsDate.prototype.getDayOfWeek = function() { 
        var dow = this.proxy.getDay(); 
        return dow===0?7:dow; 
    };
    
    /**
     * Get the day of the year
     * 
     * @returns {Integer} 1 - 366, day of the year
     */
    jsDate.prototype.getDayOfYear = function() {
        var d = this.proxy;
        var ms = d - new Date('' + d.getFullYear() + '/1/1 GMT');
        ms += d.getTimezoneOffset()*60000;
        d = null;
        return parseInt(ms/60000/60/24, 10)+1;
    };
    
    /**
     * Get the name of the current week day
     * 
     * @returns {String}
     */  
     
    jsDate.prototype.getDayName = function() {
        return jsDate.regional[this.locale]["dayNames"][this.proxy.getDay()];
    };
    
    /**
     * Get the week number of the given year, starting with the first Sunday as the first week
     * @returns {Integer} Week number (13 for the 13th full week of the year).
     */
    jsDate.prototype.getFullWeekOfYear = function() {
        var d = this.proxy;
        var doy = this.getDayOfYear();
        var rdow = 6-d.getDay();
        var woy = parseInt((doy+rdow)/7, 10);
        return woy;
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getFullYear = function() {
        return this.proxy.getFullYear();
    };
    
    /**
     * Get the GMT offset in hours and minutes (e.g. +06:30)
     * 
     * @returns {String}
     */
     
    jsDate.prototype.getGmtOffset = function() {
        // divide the minutes offset by 60
        var hours = this.proxy.getTimezoneOffset() / 60;
        // decide if we are ahead of or behind GMT
        var prefix = hours < 0 ? '+' : '-';
        // remove the negative sign if any
        hours = Math.abs(hours);
        // add the +/- to the padded number of hours to : to the padded minutes
        return prefix + addZeros(Math.floor(hours), 2) + ':' + addZeros((hours % 1) * 60, 2);
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getHours = function() {
        return this.proxy.getHours();
    };
    
    /**
     * Get the current hour on a 12-hour scheme
     * 
     * @returns {Integer}
     */
     
    jsDate.prototype.getHours12  = function() {
        var hours = this.proxy.getHours();
        return hours > 12 ? hours - 12 : (hours == 0 ? 12 : hours);
    };
    
    
    jsDate.prototype.getIsoWeek = function() {
        var d = this.proxy;
        var woy = this.getWeekOfYear();
        var dow1_1 = (new Date('' + d.getFullYear() + '/1/1')).getDay();
        // First week is 01 and not 00 as in the case of %U and %W,
        // so we add 1 to the final result except if day 1 of the year
        // is a Monday (then %W returns 01).
        // We also need to subtract 1 if the day 1 of the year is 
        // Friday-Sunday, so the resulting equation becomes:
        var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
        if(idow == 53 && (new Date('' + d.getFullYear() + '/12/31')).getDay() < 4)
        {
            idow = 1;
        }
        else if(idow === 0)
        {
            d = new jsDate(new Date('' + (d.getFullYear()-1) + '/12/31'));
            idow = d.getIsoWeek();
        }
        d = null;
        return idow;
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getMilliseconds = function() {
        return this.proxy.getMilliseconds();
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getMinutes = function() {
        return this.proxy.getMinutes();
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getMonth = function() {
        return this.proxy.getMonth();
    };
    
    /**
     * Get the name of the current month
     * 
     * @returns {String}
     */
     
    jsDate.prototype.getMonthName = function() {
        return jsDate.regional[this.locale]["monthNames"][this.proxy.getMonth()];
    };
    
    /**
     * Get the number of the current month, 1-12
     * 
     * @returns {Integer}
     */
     
    jsDate.prototype.getMonthNumber = function() {
        return this.proxy.getMonth() + 1;
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getSeconds = function() {
        return this.proxy.getSeconds();
    };
    
    /**
     * Return a proper two-digit year integer
     * 
     * @returns {Integer}
     */
     
    jsDate.prototype.getShortYear = function() {
        return this.proxy.getYear() % 100;
    };
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getTime = function() {
        return this.proxy.getTime();
    };
    
    /**
     * Get the timezone abbreviation
     *
     * @returns {String} Abbreviation for the timezone
     */
    jsDate.prototype.getTimezoneAbbr = function() {
        return this.proxy.toString().replace(/^.*\(([^)]+)\)$/, '$1'); 
    };
    
    /**
     * Get the browser-reported name for the current timezone (e.g. MDT, Mountain Daylight Time)
     * 
     * @returns {String}
     */
    jsDate.prototype.getTimezoneName = function() {
        var match = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
        return match[1] || match[2] || 'GMT' + this.getGmtOffset();
    }; 
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getTimezoneOffset = function() {
        return this.proxy.getTimezoneOffset();
    };
    
    
    /**
     * Get the week number of the given year, starting with the first Monday as the first week
     * @returns {Integer} Week number (13 for the 13th week of the year).
     */
    jsDate.prototype.getWeekOfYear = function() {
        var doy = this.getDayOfYear();
        var rdow = 7 - this.getDayOfWeek();
        var woy = parseInt((doy+rdow)/7, 10);
        return woy;
    };
    
    /**
     * Get the current date as a Unix timestamp
     * 
     * @returns {Integer}
     */
     
    jsDate.prototype.getUnix = function() {
        return Math.round(this.proxy.getTime() / 1000, 0);
    }; 
    
    /**
     * Implements Date functionality
     */
    jsDate.prototype.getYear = function() {
        return this.proxy.getYear();
    };
    
    /**
     * Return a date one day ahead (or any other unit)
     * 
     * @param {String} unit Optional, year | month | day | week | hour | minute | second | millisecond
     * @returns {jsDate}
     */
     
    jsDate.prototype.next = function(unit) {
        unit = unit || 'day';
        return this.clone().add(1, unit);
    };
    
    /**
     * Set the jsDate instance to a new date.
     *
     * @param  {String | Number | Array | Date Object | jsDate Object | Options Object} arguments Optional arguments, 
     * either a parsable date/time string,
     * a JavaScript timestamp, an array of numbers of form [year, month, day, hours, minutes, seconds, milliseconds],
     * a Date object, jsDate Object or an options object of form {syntax: "perl", date:some Date} where all options are optional.
     */
    jsDate.prototype.set = function() {
        switch ( arguments.length ) {
            case 0:
                this.proxy = new Date();
                break;
            case 1:
                // other objects either won't have a _type property or,
                // if they do, it shouldn't be set to "jsDate", so
                // assume it is an options argument.
                if (get_type(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                    var opts = this.options = arguments[0];
                    this.syntax = opts.syntax || this.syntax;
                    this.defaultCentury = opts.defaultCentury || this.defaultCentury;
                    this.proxy = jsDate.createDate(opts.date);
                }
                else {
                    this.proxy = jsDate.createDate(arguments[0]);
                }
                break;
            default:
                var a = [];
                for ( var i=0; i<arguments.length; i++ ) {
                    a.push(arguments[i]);
                }
                // this should be the current date/time
                this.proxy = new Date();
                this.proxy.setFullYear.apply( this.proxy, a.slice(0,3) );
                if ( a.slice(3).length ) {
                    this.proxy.setHours.apply( this.proxy, a.slice(3) );
                }
                break;
        }
        return this;
    };
    
    /**
     * Sets the day of the month for a specified date according to local time.
     * @param {Integer} dayValue An integer from 1 to 31, representing the day of the month. 
     */
    jsDate.prototype.setDate = function(n) {
        this.proxy.setDate(n);
        return this;
    };
    
    /**
     * Sets the full year for a specified date according to local time.
     * @param {Integer} yearValue The numeric value of the year, for example, 1995.  
     * @param {Integer} monthValue Optional, between 0 and 11 representing the months January through December.  
     * @param {Integer} dayValue Optional, between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue. 
     */
    jsDate.prototype.setFullYear = function() {
        this.proxy.setFullYear.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Sets the hours for a specified date according to local time.
     * 
     * @param {Integer} hoursValue An integer between 0 and 23, representing the hour.  
     * @param {Integer} minutesValue Optional, An integer between 0 and 59, representing the minutes.  
     * @param {Integer} secondsValue Optional, An integer between 0 and 59, representing the seconds. 
     * If you specify the secondsValue parameter, you must also specify the minutesValue.  
     * @param {Integer} msValue Optional, A number between 0 and 999, representing the milliseconds. 
     * If you specify the msValue parameter, you must also specify the minutesValue and secondsValue. 
     */
    jsDate.prototype.setHours = function() {
        this.proxy.setHours.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setMilliseconds = function(n) {
        this.proxy.setMilliseconds(n);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setMinutes = function() {
        this.proxy.setMinutes.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setMonth = function() {
        this.proxy.setMonth.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setSeconds = function() {
        this.proxy.setSeconds.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setTime = function(n) {
        this.proxy.setTime(n);
        return this;
    };
    
    /**
     * Implements Date functionality
     */ 
    jsDate.prototype.setYear = function() {
        this.proxy.setYear.apply(this.proxy, arguments);
        return this;
    };
    
    /**
     * Provide a formatted string representation of this date.
     * 
     * @param {String} formatString A format string.  
     * See: {@link jsDate.formats}.
     * @returns {String} Date String.
     */
            
    jsDate.prototype.strftime = function(formatString) {
        formatString = formatString || this.formatString || jsDate.regional[this.locale]['formatString'];
        return jsDate.strftime(this, formatString, this.syntax);
    };
        
    /**
     * Return a String representation of this jsDate object.
     * @returns {String} Date string.
     */
    
    jsDate.prototype.toString = function() {
        return this.proxy.toString();
    };
        
    /**
     * Convert the current date to an 8-digit integer (%Y%m%d)
     * 
     * @returns {Integer}
     */
     
    jsDate.prototype.toYmdInt = function() {
        return (this.proxy.getFullYear() * 10000) + (this.getMonthNumber() * 100) + this.proxy.getDate();
    };
    
    /**
     * @namespace Holds localizations for month/day names.
     * <p>jsDate attempts to detect locale when loaded and defaults to 'en'.
     * If a localization is detected which is not available, jsDate defaults to 'en'.
     * Additional localizations can be added after jsDate loads.  After adding a localization,
     * call the jsDate.regional.getLocale() method.  Currently, en, fr and de are defined.</p>
     * 
     * <p>Localizations must be an object and have the following properties defined:  monthNames, monthNamesShort, dayNames, dayNamesShort and Localizations are added like:</p>
     * <pre class="code">
     * jsDate.regional['en'] = {
     * monthNames      : 'January February March April May June July August September October November December'.split(' '),
     * monthNamesShort : 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
     * dayNames        : 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
     * dayNamesShort   : 'Sun Mon Tue Wed Thu Fri Sat'.split(' ')
     * };
     * </pre>
     * <p>After adding localizations, call <code>jsDate.regional.getLocale();</code> to update the locale setting with the
     * new localizations.</p>
     */
     
    jsDate.regional = {
        'en': {
            monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'fr': {
            monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
            monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
            dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'de': {
            monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
            monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
            dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
            dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'es': {
            monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun', 'Jul','Ago','Sep','Oct','Nov','Dic'],
            dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
            dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'ru': {
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'ar': {
            monthNames: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'آذار', 'حزيران','تموز', 'آب', 'أيلول',   'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
            monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            dayNames: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
            dayNamesShort: ['سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'pt': {
            monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
            formatString: '%Y-%m-%d %H:%M:%S'   
        },
        
        'pt-BR': {
            monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },
        
        'pl': {
            monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
            monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze','Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
            dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
            dayNamesShort: ['Ni', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },

        'nl': {
            monthNames: ['Januari','Februari','Maart','April','Mei','Juni','July','Augustus','September','Oktober','November','December'],
            monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Okt','Nov','Dec'],
            dayNames:','['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
            dayNamesShort: ['Zo','Ma','Di','Wo','Do','Vr','Za'],
            formatString: '%Y-%m-%d %H:%M:%S'
        },

        'sv': {
            monthNames: ['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december'],
          monthNamesShort: ['jan','feb','mar','apr','maj','jun','jul','aug','sep','okt','nov','dec'],
            dayNames: ['söndag','måndag','tisdag','onsdag','torsdag','fredag','lördag'],
            dayNamesShort: ['sön','mån','tis','ons','tor','fre','lör'],
            formatString: '%Y-%m-%d %H:%M:%S'
        }
    
    };
    
    // Set english variants to 'en'
    jsDate.regional['en-US'] = jsDate.regional['en-GB'] = jsDate.regional['en'];
    
    /**
     * Try to determine the users locale based on the lang attribute of the html page.  Defaults to 'en'
     * if it cannot figure out a locale of if the locale does not have a localization defined.
     * @returns {String} locale
     */
     
    jsDate.regional.getLocale = function () {
        var l = jsDate.config.defaultLocale;
        
        if ( document && document.getElementsByTagName('html') && document.getElementsByTagName('html')[0].lang ) {
            l = document.getElementsByTagName('html')[0].lang;
            if (!jsDate.regional.hasOwnProperty(l)) {
                l = jsDate.config.defaultLocale;
            }
        }
        
        return l;
    };
    
    // ms in day
    var day = 24 * 60 * 60 * 1000;
    
    // padd a number with zeros
    var addZeros = function(num, digits) {
        num = String(num);
        var i = digits - num.length;
        var s = String(Math.pow(10, i)).slice(1);
        return s.concat(num);
    };

    // representations used for calculating differences between dates.
    // This borrows heavily from Ken Snyder's work.
    var multipliers = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: day,
        week: 7 * day,
        month: {
            // add a number of months
            add: function(d, number) {
                // add any years needed (increments of 12)
                multipliers.year.add(d, Math[number > 0 ? 'floor' : 'ceil'](number / 12));
                // ensure that we properly wrap betwen December and January
                // 11 % 12 = 11
                // 12 % 12 = 0
                var prevMonth = d.getMonth() + (number % 12);
                if (prevMonth == 12) {
                    prevMonth = 0;
                    d.setYear(d.getFullYear() + 1);
                } else if (prevMonth == -1) {
                    prevMonth = 11;
                    d.setYear(d.getFullYear() - 1);
                }
                d.setMonth(prevMonth);
            },
            // get the number of months between two Date objects (decimal to the nearest day)
            diff: function(d1, d2) {
                // get the number of years
                var diffYears = d1.getFullYear() - d2.getFullYear();
                // get the number of remaining months
                var diffMonths = d1.getMonth() - d2.getMonth() + (diffYears * 12);
                // get the number of remaining days
                var diffDays = d1.getDate() - d2.getDate();
                // return the month difference with the days difference as a decimal
                return diffMonths + (diffDays / 30);
            }
        },
        year: {
            // add a number of years
            add: function(d, number) {
                d.setYear(d.getFullYear() + Math[number > 0 ? 'floor' : 'ceil'](number));
            },
            // get the number of years between two Date objects (decimal to the nearest day)
            diff: function(d1, d2) {
                return multipliers.month.diff(d1, d2) / 12;
            }
        }        
    };
    //
    // Alias each multiplier with an 's' to allow 'year' and 'years' for example.
    // This comes from Ken Snyders work.
    //
    for (var unit in multipliers) {
        if (unit.substring(unit.length - 1) != 's') { // IE will iterate newly added properties :|
            multipliers[unit + 's'] = multipliers[unit];
        }
    }
    
    //
    // take a jsDate instance and a format code and return the formatted value.
    // This is a somewhat modified version of Ken Snyder's method.
    //
    var format = function(d, code, syntax) {
        // if shorcut codes are used, recursively expand those.
        if (jsDate.formats[syntax]["shortcuts"][code]) {
            return jsDate.strftime(d, jsDate.formats[syntax]["shortcuts"][code], syntax);
        } else {
            // get the format code function and addZeros() argument
            var getter = (jsDate.formats[syntax]["codes"][code] || '').split('.');
            var nbr = d['get' + getter[0]] ? d['get' + getter[0]]() : '';
            if (getter[1]) {
                nbr = addZeros(nbr, getter[1]);
            }
            return nbr;
        }       
    };
    
    /**
     * @static
     * Static function for convert a date to a string according to a given format.  Also acts as namespace for strftime format codes.
     * <p>strftime formatting can be accomplished without creating a jsDate object by calling jsDate.strftime():</p>
     * <pre class="code">
     * var formattedDate = jsDate.strftime('Feb 8, 2006 8:48:32', '%Y-%m-%d %H:%M:%S');
     * </pre>
     * @param {String | Number | Array | jsDate&nbsp;Object | Date&nbsp;Object} date A parsable date string, JavaScript time stamp, Array of form [year, month, day, hours, minutes, seconds, milliseconds], jsDate Object or Date object.
     * @param {String} formatString String with embedded date formatting codes.  
     * See: {@link jsDate.formats}. 
     * @param {String} syntax Optional syntax to use [default perl].
     * @param {String} locale Optional locale to use.
     * @returns {String} Formatted representation of the date.
    */
    //
    // Logic as implemented here is very similar to Ken Snyder's Date Instance Methods.
    //
    jsDate.strftime = function(d, formatString, syntax, locale) {
        var syn = 'perl';
        var loc = jsDate.regional.getLocale();
        
        // check if syntax and locale are available or reversed
        if (syntax && jsDate.formats.hasOwnProperty(syntax)) {
            syn = syntax;
        }
        else if (syntax && jsDate.regional.hasOwnProperty(syntax)) {
            loc = syntax;
        }
        
        if (locale && jsDate.formats.hasOwnProperty(locale)) {
            syn = locale;
        }
        else if (locale && jsDate.regional.hasOwnProperty(locale)) {
            loc = locale;
        }
        
        if (get_type(d) != "[object Object]" || d._type != "jsDate") {
            d = new jsDate(d);
            d.locale = loc;
        }
        if (!formatString) {
            formatString = d.formatString || jsDate.regional[loc]['formatString'];
        }
        // default the format string to year-month-day
        var source = formatString || '%Y-%m-%d', 
            result = '', 
            match;
        // replace each format code
        while (source.length > 0) {
            if (match = source.match(jsDate.formats[syn].codes.matcher)) {
                result += source.slice(0, match.index);
                result += (match[1] || '') + format(d, match[2], syn);
                source = source.slice(match.index + match[0].length);
            } else {
                result += source;
                source = '';
            }
        }
        return result;
    };
    
    /**
     * @namespace
     * Namespace to hold format codes and format shortcuts.  "perl" and "php" format codes 
     * and shortcuts are defined by default.  Additional codes and shortcuts can be
     * added like:
     * 
     * <pre class="code">
     * jsDate.formats["perl"] = {
     *     "codes": {
     *         matcher: /someregex/,
     *         Y: "fullYear",  // name of "get" method without the "get",
     *         ...,            // more codes
     *     },
     *     "shortcuts": {
     *         F: '%Y-%m-%d',
     *         ...,            // more shortcuts
     *     }
     * };
     * </pre>
     * 
     * <p>Additionally, ISO and SQL shortcuts are defined and can be accesses via:
     * <code>jsDate.formats.ISO</code> and <code>jsDate.formats.SQL</code>
     */
    
    jsDate.formats = {
        ISO:'%Y-%m-%dT%H:%M:%S.%N%G',
        SQL:'%Y-%m-%d %H:%M:%S'
    };
    
    /**
     * Perl format codes and shortcuts for strftime.
     * 
     * A hash (object) of codes where each code must be an array where the first member is 
     * the name of a Date.prototype or jsDate.prototype function to call
     * and optionally a second member indicating the number to pass to addZeros()
     * 
     * <p>The following format codes are defined:</p>
     * 
     * <pre class="code">
     * Code    Result                    Description
     * == Years ==           
     * %Y      2008                      Four-digit year
     * %y      08                        Two-digit year
     * 
     * == Months ==          
     * %m      09                        Two-digit month
     * %#m     9                         One or two-digit month
     * %B      September                 Full month name
     * %b      Sep                       Abbreviated month name
     * 
     * == Days ==            
     * %d      05                        Two-digit day of month
     * %#d     5                         One or two-digit day of month
     * %e      5                         One or two-digit day of month
     * %A      Sunday                    Full name of the day of the week
     * %a      Sun                       Abbreviated name of the day of the week
     * %w      0                         Number of the day of the week (0 = Sunday, 6 = Saturday)
     * 
     * == Hours ==           
     * %H      23                        Hours in 24-hour format (two digits)
     * %#H     3                         Hours in 24-hour integer format (one or two digits)
     * %I      11                        Hours in 12-hour format (two digits)
     * %#I     3                         Hours in 12-hour integer format (one or two digits)
     * %p      PM                        AM or PM
     * 
     * == Minutes ==         
     * %M      09                        Minutes (two digits)
     * %#M     9                         Minutes (one or two digits)
     * 
     * == Seconds ==         
     * %S      02                        Seconds (two digits)
     * %#S     2                         Seconds (one or two digits)
     * %s      1206567625723             Unix timestamp (Seconds past 1970-01-01 00:00:00)
     * 
     * == Milliseconds ==    
     * %N      008                       Milliseconds (three digits)
     * %#N     8                         Milliseconds (one to three digits)
     * 
     * == Timezone ==        
     * %O      360                       difference in minutes between local time and GMT
     * %Z      Mountain Standard Time    Name of timezone as reported by browser
     * %G      06:00                     Hours and minutes between GMT
     * 
     * == Shortcuts ==       
     * %F      2008-03-26                %Y-%m-%d
     * %T      05:06:30                  %H:%M:%S
     * %X      05:06:30                  %H:%M:%S
     * %x      03/26/08                  %m/%d/%y
     * %D      03/26/08                  %m/%d/%y
     * %#c     Wed Mar 26 15:31:00 2008  %a %b %e %H:%M:%S %Y
     * %v      3-Sep-2008                %e-%b-%Y
     * %R      15:31                     %H:%M
     * %r      03:31:00 PM               %I:%M:%S %p
     * 
     * == Characters ==      
     * %n      \n                        Newline
     * %t      \t                        Tab
     * %%      %                         Percent Symbol
     * </pre>
     * 
     * <p>Formatting shortcuts that will be translated into their longer version.
     * Be sure that format shortcuts do not refer to themselves: this will cause an infinite loop.</p>
     * 
     * <p>Format codes and format shortcuts can be redefined after the jsDate
     * module is imported.</p>
     * 
     * <p>Note that if you redefine the whole hash (object), you must supply a "matcher"
     * regex for the parser.  The default matcher is:</p>
     * 
     * <code>/()%(#?(%|[a-z]))/i</code>
     * 
     * <p>which corresponds to the Perl syntax used by default.</p>
     * 
     * <p>By customizing the matcher and format codes, nearly any strftime functionality is possible.</p>
     */
     
    jsDate.formats.perl = {
        codes: {
            //
            // 2-part regex matcher for format codes
            //
            // first match must be the character before the code (to account for escaping)
            // second match must be the format code character(s)
            //
            matcher: /()%(#?(%|[a-z]))/i,
            // year
            Y: 'FullYear',
            y: 'ShortYear.2',
            // month
            m: 'MonthNumber.2',
            '#m': 'MonthNumber',
            B: 'MonthName',
            b: 'AbbrMonthName',
            // day
            d: 'Date.2',
            '#d': 'Date',
            e: 'Date',
            A: 'DayName',
            a: 'AbbrDayName',
            w: 'Day',
            // hours
            H: 'Hours.2',
            '#H': 'Hours',
            I: 'Hours12.2',
            '#I': 'Hours12',
            p: 'AMPM',
            // minutes
            M: 'Minutes.2',
            '#M': 'Minutes',
            // seconds
            S: 'Seconds.2',
            '#S': 'Seconds',
            s: 'Unix',
            // milliseconds
            N: 'Milliseconds.3',
            '#N': 'Milliseconds',
            // timezone
            O: 'TimezoneOffset',
            Z: 'TimezoneName',
            G: 'GmtOffset'  
        },
        
        shortcuts: {
            // date
            F: '%Y-%m-%d',
            // time
            T: '%H:%M:%S',
            X: '%H:%M:%S',
            // local format date
            x: '%m/%d/%y',
            D: '%m/%d/%y',
            // local format extended
            '#c': '%a %b %e %H:%M:%S %Y',
            // local format short
            v: '%e-%b-%Y',
            R: '%H:%M',
            r: '%I:%M:%S %p',
            // tab and newline
            t: '\t',
            n: '\n',
            '%': '%'
        }
    };
    
    /**
     * PHP format codes and shortcuts for strftime.
     * 
     * A hash (object) of codes where each code must be an array where the first member is 
     * the name of a Date.prototype or jsDate.prototype function to call
     * and optionally a second member indicating the number to pass to addZeros()
     * 
     * <p>The following format codes are defined:</p>
     * 
     * <pre class="code">
     * Code    Result                    Description
     * === Days ===        
     * %a      Sun through Sat           An abbreviated textual representation of the day
     * %A      Sunday - Saturday         A full textual representation of the day
     * %d      01 to 31                  Two-digit day of the month (with leading zeros)
     * %e      1 to 31                   Day of the month, with a space preceding single digits.
     * %j      001 to 366                Day of the year, 3 digits with leading zeros
     * %u      1 - 7 (Mon - Sun)         ISO-8601 numeric representation of the day of the week
     * %w      0 - 6 (Sun - Sat)         Numeric representation of the day of the week
     *                                  
     * === Week ===                     
     * %U      13                        Full Week number, starting with the first Sunday as the first week
     * %V      01 through 53             ISO-8601:1988 week number, starting with the first week of the year 
     *                                   with at least 4 weekdays, with Monday being the start of the week
     * %W      46                        A numeric representation of the week of the year, 
     *                                   starting with the first Monday as the first week
     * === Month ===                    
     * %b      Jan through Dec           Abbreviated month name, based on the locale
     * %B      January - December        Full month name, based on the locale
     * %h      Jan through Dec           Abbreviated month name, based on the locale (an alias of %b)
     * %m      01 - 12 (Jan - Dec)       Two digit representation of the month
     * 
     * === Year ===                     
     * %C      19                        Two digit century (year/100, truncated to an integer)
     * %y      09 for 2009               Two digit year
     * %Y      2038                      Four digit year
     * 
     * === Time ===                     
     * %H      00 through 23             Two digit representation of the hour in 24-hour format
     * %I      01 through 12             Two digit representation of the hour in 12-hour format
     * %l      1 through 12              Hour in 12-hour format, with a space preceeding single digits
     * %M      00 through 59             Two digit representation of the minute
     * %p      AM/PM                     UPPER-CASE 'AM' or 'PM' based on the given time
     * %P      am/pm                     lower-case 'am' or 'pm' based on the given time
     * %r      09:34:17 PM               Same as %I:%M:%S %p
     * %R      00:35                     Same as %H:%M
     * %S      00 through 59             Two digit representation of the second
     * %T      21:34:17                  Same as %H:%M:%S
     * %X      03:59:16                  Preferred time representation based on locale, without the date
     * %z      -0500 or EST              Either the time zone offset from UTC or the abbreviation
     * %Z      -0500 or EST              The time zone offset/abbreviation option NOT given by %z
     * 
     * === Time and Date ===            
     * %D      02/05/09                  Same as %m/%d/%y
     * %F      2009-02-05                Same as %Y-%m-%d (commonly used in database datestamps)
     * %s      305815200                 Unix Epoch Time timestamp (same as the time() function)
     * %x      02/05/09                  Preferred date representation, without the time
     * 
     * === Miscellaneous ===            
     * %n        ---                     A newline character (\n)
     * %t        ---                     A Tab character (\t)
     * %%        ---                     A literal percentage character (%)
     * </pre>
     */
 
    jsDate.formats.php = {
        codes: {
            //
            // 2-part regex matcher for format codes
            //
            // first match must be the character before the code (to account for escaping)
            // second match must be the format code character(s)
            //
            matcher: /()%((%|[a-z]))/i,
            // day
            a: 'AbbrDayName',
            A: 'DayName',
            d: 'Date.2',
            e: 'Date',
            j: 'DayOfYear.3',
            u: 'DayOfWeek',
            w: 'Day',
            // week
            U: 'FullWeekOfYear.2',
            V: 'IsoWeek.2',
            W: 'WeekOfYear.2',
            // month
            b: 'AbbrMonthName',
            B: 'MonthName',
            m: 'MonthNumber.2',
            h: 'AbbrMonthName',
            // year
            C: 'Century.2',
            y: 'ShortYear.2',
            Y: 'FullYear',
            // time
            H: 'Hours.2',
            I: 'Hours12.2',
            l: 'Hours12',
            p: 'AMPM',
            P: 'AmPm',
            M: 'Minutes.2',
            S: 'Seconds.2',
            s: 'Unix',
            O: 'TimezoneOffset',
            z: 'GmtOffset',
            Z: 'TimezoneAbbr'
        },
        
        shortcuts: {
            D: '%m/%d/%y',
            F: '%Y-%m-%d',
            T: '%H:%M:%S',
            X: '%H:%M:%S',
            x: '%m/%d/%y',
            R: '%H:%M',
            r: '%I:%M:%S %p',
            t: '\t',
            n: '\n',
            '%': '%'
        }
    };   
    //
    // Conceptually, the logic implemented here is similar to Ken Snyder's Date Instance Methods.
    // I use his idea of a set of parsers which can be regular expressions or functions,
    // iterating through those, and then seeing if Date.parse() will create a date.
    // The parser expressions and functions are a little different and some bugs have been
    // worked out.  Also, a lot of "pre-parsing" is done to fix implementation
    // variations of Date.parse() between browsers.
    //
    jsDate.createDate = function(date) {
        // if passing in multiple arguments, try Date constructor
        if (date == null) {
            return new Date();
        }
        // If the passed value is already a date object, return it
        if (date instanceof Date) {
            return date;
        }
        // if (typeof date == 'number') return new Date(date * 1000);
        // If the passed value is an integer, interpret it as a javascript timestamp
        if (typeof date == 'number') {
            return new Date(date);
        }
        
        // Before passing strings into Date.parse(), have to normalize them for certain conditions.
        // If strings are not formatted staccording to the EcmaScript spec, results from Date parse will be implementation dependent.  
        // 
        // For example: 
        //  * FF and Opera assume 2 digit dates are pre y2k, Chome assumes <50 is pre y2k, 50+ is 21st century.  
        //  * Chrome will correctly parse '1984-1-25' into localtime, FF and Opera will not parse.
        //  * Both FF, Chrome and Opera will parse '1984/1/25' into localtime.
        
        // remove leading and trailing spaces
        var parsable = String(date).replace(/^\s*(.+)\s*$/g, '$1');
        
        // replace dahses (-) with slashes (/) in dates like n[nnn]/n[n]/n[nnn]
        parsable = parsable.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/, "$1/$2/$3");
        
        /////////
        // Need to check for '15-Dec-09' also.
        // FF will not parse, but Chrome will.
        // Chrome will set date to 2009 as well.
        /////////
        
        // first check for 'dd-mmm-yyyy' or 'dd/mmm/yyyy' like '15-Dec-2010'
        parsable = parsable.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i, "$1 $2 $3");
        
        // Now check for 'dd-mmm-yy' or 'dd/mmm/yy' and normalize years to default century.
        var match = parsable.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);
        if (match && match.length > 3) {
            var m3 = parseFloat(match[3]);
            var ny = jsDate.config.defaultCentury + m3;
            ny = String(ny);
            
            // now replace 2 digit year with 4 digit year
            parsable = parsable.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i, match[1] +' '+ match[2] +' '+ ny);
            
        }
        
        // Check for '1/19/70 8:14PM'
        // where starts with mm/dd/yy or yy/mm/dd and have something after
        // Check if 1st postiion is greater than 31, assume it is year.
        // Assme all 2 digit years are 1900's.
        // Finally, change them into US style mm/dd/yyyy representations.
        match = parsable.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);
        
        function h1(parsable, match) {
            var m1 = parseFloat(match[1]);
            var m2 = parseFloat(match[2]);
            var m3 = parseFloat(match[3]);
            var cent = jsDate.config.defaultCentury;
            var ny, nd, nm, str;
            
            if (m1 > 31) { // first number is a year
                nd = m3;
                nm = m2;
                ny = cent + m1;
            }
            
            else { // last number is the year
                nd = m2;
                nm = m1;
                ny = cent + m3;
            }
            
            str = nm+'/'+nd+'/'+ny;
            
            // now replace 2 digit year with 4 digit year
            return  parsable.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/, str);
        
        }
        
        if (match && match.length > 3) {
            parsable = h1(parsable, match);
        }
        
        // Now check for '1/19/70' with nothing after and do as above
        var match = parsable.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);
        
        if (match && match.length > 3) {
            parsable = h1(parsable, match);
        }
                
        
        var i = 0;
        var length = jsDate.matchers.length;
        var pattern,
            ms,
            current = parsable,
            obj;
        while (i < length) {
            ms = Date.parse(current);
            if (!isNaN(ms)) {
                return new Date(ms);
            }
            pattern = jsDate.matchers[i];
            if (typeof pattern == 'function') {
                obj = pattern.call(jsDate, current);
                if (obj instanceof Date) {
                    return obj;
                }
            } else {
                current = parsable.replace(pattern[0], pattern[1]);
            }
            i++;
        }
        return NaN;
    };
    

    /**
     * @static
     * Handy static utility function to return the number of days in a given month.
     * @param {Integer} year Year
     * @param {Integer} month Month (1-12)
     * @returns {Integer} Number of days in the month.
    */
    //
    // handy utility method Borrowed right from Ken Snyder's Date Instance Mehtods.
    // 
    jsDate.daysInMonth = function(year, month) {
        if (month == 2) {
            return new Date(year, 1, 29).getDate() == 29 ? 29 : 28;
        }
        return [undefined,31,undefined,31,30,31,30,31,31,30,31,30,31][month];
    };


    //
    // An Array of regular expressions or functions that will attempt to match the date string.
    // Functions are called with scope of a jsDate instance.
    //
    jsDate.matchers = [
        // convert dd.mmm.yyyy to mm/dd/yyyy (world date to US date).
        [/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/, '$2/$1/$3'],
        // convert yyyy-mm-dd to mm/dd/yyyy (ISO date to US date).
        [/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/, '$2/$3/$1'],
        // Handle 12 hour or 24 hour time with milliseconds am/pm and optional date part.
        function(str) { 
            var match = str.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);
            //                   opt. date      hour       opt. minute     opt. second       opt. msec   opt. am or pm
            if (match) {
                if (match[1]) {
                    var d = this.createDate(match[1]);
                    if (isNaN(d)) {
                        return;
                    }
                } else {
                    var d = new Date();
                    d.setMilliseconds(0);
                }
                var hour = parseFloat(match[2]);
                if (match[6]) {
                    hour = match[6].toLowerCase() == 'am' ? (hour == 12 ? 0 : hour) : (hour == 12 ? 12 : hour + 12);
                }
                d.setHours(hour, parseInt(match[3] || 0, 10), parseInt(match[4] || 0, 10), ((parseFloat(match[5] || 0)) || 0)*1000);
                return d;
            }
            else {
                return str;
            }
        },
        // Handle ISO timestamp with time zone.
        function(str) {
            var match = str.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);
            if (match) {
                if (match[1]) {
                    var d = this.createDate(match[1]);
                    if (isNaN(d)) {
                        return;
                    }
                } else {
                    var d = new Date();
                    d.setMilliseconds(0);
                }
                var hour = parseFloat(match[2]);
                d.setHours(hour, parseInt(match[3], 10), parseInt(match[4], 10), parseFloat(match[5])*1000);
                return d;
            }
            else {
                    return str;
            }
        },
        // Try to match ambiguous strings like 12/8/22.
        // Use FF date assumption that 2 digit years are 20th century (i.e. 1900's).
        // This may be redundant with pre processing of date already performed.
        function(str) {
            var match = str.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);
            if (match) {
                var d = new Date();
                var cent = jsDate.config.defaultCentury;
                var m1 = parseFloat(match[1]);
                var m3 = parseFloat(match[3]);
                var ny, nd, nm;
                if (m1 > 31) { // first number is a year
                    nd = m3;
                    ny = cent + m1;
                }
                
                else { // last number is the year
                    nd = m1;
                    ny = cent + m3;
                }
                
                var nm = inArray(match[2], jsDate.regional[jsDate.regional.getLocale()]["monthNamesShort"]);
                
                if (nm == -1) {
                    nm = inArray(match[2], jsDate.regional[jsDate.regional.getLocale()]["monthNames"]);
                }
            
                d.setFullYear(ny, nm, nd);
                d.setHours(0,0,0,0);
                return d;
            }
            
            else {
                return str;
            }
        }      
    ];

    //
    // I think John Reisig published this method on his blog, ejohn.
    //
    function inArray( elem, array ) {
        if ( array.indexOf ) {
            return array.indexOf( elem );
        }

        for ( var i = 0, length = array.length; i < length; i++ ) {
            if ( array[ i ] === elem ) {
                return i;
            }
        }

        return -1;
    }
    
    //
    // Thanks to Kangax, Christian Sciberras and Stack Overflow for this method.
    //
    function get_type(thing){
        if(thing===null) return "[object Null]"; // special case
        return Object.prototype.toString.call(thing);
    }
    
    $.jsDate = jsDate;

      
    /**
     * JavaScript printf/sprintf functions.
     * 
     * This code has been adapted from the publicly available sprintf methods
     * by Ash Searle. His original header follows:
     *
     *     This code is unrestricted: you are free to use it however you like.
     *     
     *     The functions should work as expected, performing left or right alignment,
     *     truncating strings, outputting numbers with a required precision etc.
     *
     *     For complex cases, these functions follow the Perl implementations of
     *     (s)printf, allowing arguments to be passed out-of-order, and to set the
     *     precision or length of the output based on arguments instead of fixed
     *     numbers.
     *
     *     See http://perldoc.perl.org/functions/sprintf.html for more information.
     *
     *     Implemented:
     *     - zero and space-padding
     *     - right and left-alignment,
     *     - base X prefix (binary, octal and hex)
     *     - positive number prefix
     *     - (minimum) width
     *     - precision / truncation / maximum width
     *     - out of order arguments
     *
     *     Not implemented (yet):
     *     - vector flag
     *     - size (bytes, words, long-words etc.)
     *     
     *     Will not implement:
     *     - %n or %p (no pass-by-reference in JavaScript)
     *
     *     @version 2007.04.27
     *     @author Ash Searle 
     * 
     * You can see the original work and comments on his blog:
     * http://hexmen.com/blog/2007/03/printf-sprintf/
     * http://hexmen.com/js/sprintf.js
     */
     
     /**
      * @Modifications 2009.05.26
      * @author Chris Leonello
      * 
      * Added %p %P specifier
      * Acts like %g or %G but will not add more significant digits to the output than present in the input.
      * Example:
      * Format: '%.3p', Input: 0.012, Output: 0.012
      * Format: '%.3g', Input: 0.012, Output: 0.0120
      * Format: '%.4p', Input: 12.0, Output: 12.0
      * Format: '%.4g', Input: 12.0, Output: 12.00
      * Format: '%.4p', Input: 4.321e-5, Output: 4.321e-5
      * Format: '%.4g', Input: 4.321e-5, Output: 4.3210e-5
      * 
      * Example:
      * >>> $.jqplot.sprintf('%.2f, %d', 23.3452, 43.23)
      * "23.35, 43"
      * >>> $.jqplot.sprintf("no value: %n, decimal with thousands separator: %'d", 23.3452, 433524)
      * "no value: , decimal with thousands separator: 433,524"
      */
    $.jqplot.sprintf = function() {
        function pad(str, len, chr, leftJustify) {
            var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
            return leftJustify ? str + padding : padding + str;

        }

        function thousand_separate(value) {
            var value_str = new String(value);
            for (var i=10; i>0; i--) {
                if (value_str == (value_str = value_str.replace(/^(\d+)(\d{3})/, "$1"+$.jqplot.sprintf.thousandsSeparator+"$2"))) break;
            }
            return value_str; 
        }

        function justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace) {
            var diff = minWidth - value.length;
            if (diff > 0) {
                var spchar = ' ';
                if (htmlSpace) { spchar = '&nbsp;'; }
                if (leftJustify || !zeroPad) {
                    value = pad(value, minWidth, spchar, leftJustify);
                } else {
                    value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                }
            }
            return value;
        }

        function formatBaseX(value, base, prefix, leftJustify, minWidth, precision, zeroPad, htmlSpace) {
            // Note: casts negative numbers to positive ones
            var number = value >>> 0;
            prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
            value = prefix + pad(number.toString(base), precision || 0, '0', false);
            return justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace);
        }

        function formatString(value, leftJustify, minWidth, precision, zeroPad, htmlSpace) {
            if (precision != null) {
                value = value.slice(0, precision);
            }
            return justify(value, '', leftJustify, minWidth, zeroPad, htmlSpace);
        }

        var a = arguments, i = 0, format = a[i++];

        return format.replace($.jqplot.sprintf.regex, function(substring, valueIndex, flags, minWidth, _, precision, type) {
            if (substring == '%%') { return '%'; }

            // parse flags
            var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false, htmlSpace = false, thousandSeparation = false;
            for (var j = 0; flags && j < flags.length; j++) switch (flags.charAt(j)) {
                case ' ': positivePrefix = ' '; break;
                case '+': positivePrefix = '+'; break;
                case '-': leftJustify = true; break;
                case '0': zeroPad = true; break;
                case '#': prefixBaseX = true; break;
                case '&': htmlSpace = true; break;
                case '\'': thousandSeparation = true; break;
            }

            // parameters may be null, undefined, empty-string or real valued
            // we want to ignore null, undefined and empty-string values

            if (!minWidth) {
                minWidth = 0;
            } 
            else if (minWidth == '*') {
                minWidth = +a[i++];
            } 
            else if (minWidth.charAt(0) == '*') {
                minWidth = +a[minWidth.slice(1, -1)];
            } 
            else {
                minWidth = +minWidth;
            }

            // Note: undocumented perl feature:
            if (minWidth < 0) {
                minWidth = -minWidth;
                leftJustify = true;
            }

            if (!isFinite(minWidth)) {
                throw new Error('$.jqplot.sprintf: (minimum-)width must be finite');
            }

            if (!precision) {
                precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void(0);
            } 
            else if (precision == '*') {
                precision = +a[i++];
            } 
            else if (precision.charAt(0) == '*') {
                precision = +a[precision.slice(1, -1)];
            } 
            else {
                precision = +precision;
            }

            // grab value using valueIndex if required?
            var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

            switch (type) {
            case 's': {
                if (value == null) {
                    return '';
                }
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad, htmlSpace);
            }
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad, htmlSpace);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad,htmlSpace);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad, htmlSpace);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad, htmlSpace);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad, htmlSpace).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad, htmlSpace);
            case 'i': {
              var number = parseInt(+value, 10);
              if (isNaN(number)) {
                return '';
              }
              var prefix = number < 0 ? '-' : positivePrefix;
              var number_str = thousandSeparation ? thousand_separate(String(Math.abs(number))): String(Math.abs(number));
              value = prefix + pad(number_str, precision, '0', false);
              //value = prefix + pad(String(Math.abs(number)), precision, '0', false);
              return justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace);
                  }
            case 'd': {
              var number = Math.round(+value);
              if (isNaN(number)) {
                return '';
              }
              var prefix = number < 0 ? '-' : positivePrefix;
              var number_str = thousandSeparation ? thousand_separate(String(Math.abs(number))): String(Math.abs(number));
              value = prefix + pad(number_str, precision, '0', false);
              return justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace);
                  }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                      {
                      var number = +value;
                      if (isNaN(number)) {
                          return '';
                      }
                      var prefix = number < 0 ? '-' : positivePrefix;
                      var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                      var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                      var number_str = Math.abs(number)[method](precision);
                      
                      // Apply the decimal mark properly by splitting the number by the
                      //   decimalMark, applying thousands separator, and then placing it
                      //   back in.
                      var parts = number_str.toString().split('.');
                      parts[0] = thousandSeparation ? thousand_separate(parts[0]) : parts[0];
                      number_str = parts.join($.jqplot.sprintf.decimalMark);
                      
                      value = prefix + number_str;
                      var justified = justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace)[textTransform]();
                      
                      return justified;
                  }
            case 'p':
            case 'P':
            {
                // make sure number is a number
                var number = +value;
                if (isNaN(number)) {
                    return '';
                }
                var prefix = number < 0 ? '-' : positivePrefix;

                var parts = String(Number(Math.abs(number)).toExponential()).split(/e|E/);
                var sd = (parts[0].indexOf('.') != -1) ? parts[0].length - 1 : String(number).length;
                var zeros = (parts[1] < 0) ? -parts[1] - 1 : 0;
                
                if (Math.abs(number) < 1) {
                    if (sd + zeros  <= precision) {
                        value = prefix + Math.abs(number).toPrecision(sd);
                    }
                    else {
                        if (sd  <= precision - 1) {
                            value = prefix + Math.abs(number).toExponential(sd-1);
                        }
                        else {
                            value = prefix + Math.abs(number).toExponential(precision-1);
                        }
                    }
                }
                else {
                    var prec = (sd <= precision) ? sd : precision;
                    value = prefix + Math.abs(number).toPrecision(prec);
                }
                var textTransform = ['toString', 'toUpperCase']['pP'.indexOf(type) % 2];
                return justify(value, prefix, leftJustify, minWidth, zeroPad, htmlSpace)[textTransform]();
            }
            case 'n': return '';
            default: return substring;
            }
        });
    };

    $.jqplot.sprintf.thousandsSeparator = ',';
    // Specifies the decimal mark for floating point values. By default a period '.'
    // is used. If you change this value to for example a comma be sure to also
    // change the thousands separator or else this won't work since a simple String
    // replace is used (replacing all periods with the mark specified here).
    $.jqplot.sprintf.decimalMark = '.';
    
    $.jqplot.sprintf.regex = /%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;

    $.jqplot.getSignificantFigures = function(number) {
        var parts = String(Number(Math.abs(number)).toExponential()).split(/e|E/);
        // total significant digits
        var sd = (parts[0].indexOf('.') != -1) ? parts[0].length - 1 : parts[0].length;
        var zeros = (parts[1] < 0) ? -parts[1] - 1 : 0;
        // exponent
        var expn = parseInt(parts[1], 10);
        // digits to the left of the decimal place
        var dleft = (expn + 1 > 0) ? expn + 1 : 0;
        // digits to the right of the decimal place
        var dright = (sd <= dleft) ? 0 : sd - expn - 1;
        return {significantDigits: sd, digitsLeft: dleft, digitsRight: dright, zeros: zeros, exponent: expn} ;
    };

    $.jqplot.getPrecision = function(number) {
        return $.jqplot.getSignificantFigures(number).digitsRight;
    };

  


    var backCompat = $.uiBackCompat !== false;

    $.jqplot.effects = {
        effect: {}
    };

    // prefix used for storing data on .data()
    var dataSpace = "jqplot.storage.";

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    $.extend( $.jqplot.effects, {
        version: "1.9pre",

        // Saves a set of properties in a data storage
        save: function( element, set ) {
            for( var i=0; i < set.length; i++ ) {
                if ( set[ i ] !== null ) {
                    element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                }
            }
        },

        // Restores a set of previously saved properties from a data storage
        restore: function( element, set ) {
            for( var i=0; i < set.length; i++ ) {
                if ( set[ i ] !== null ) {
                    element.css( set[ i ], element.data( dataSpace + set[ i ] ) );
                }
            }
        },

        setMode: function( el, mode ) {
            if (mode === "toggle") {
                mode = el.is( ":hidden" ) ? "show" : "hide";
            }
            return mode;
        },

        // Wraps the element around a wrapper that copies position properties
        createWrapper: function( element ) {

            // if the element is already wrapped, return it
            if ( element.parent().is( ".ui-effects-wrapper" )) {
                return element.parent();
            }

            // wrap the element
            var props = {
                    width: element.outerWidth(true),
                    height: element.outerHeight(true),
                    "float": element.css( "float" )
                },
                wrapper = $( "<div></div>" )
                    .addClass( "ui-effects-wrapper" )
                    .css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                // Store the size in case width/height are defined in % - Fixes #5245
                size = {
                    width: element.width(),
                    height: element.height()
                },
                active = document.activeElement;

            element.wrap( wrapper );

            // Fixes #7595 - Elements lose focus when wrapped.
            if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                $( active ).focus();
            }

            wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

            // transfer positioning properties to the wrapper
            if ( element.css( "position" ) === "static" ) {
                wrapper.css({ position: "relative" });
                element.css({ position: "relative" });
            } else {
                $.extend( props, {
                    position: element.css( "position" ),
                    zIndex: element.css( "z-index" )
                });
                $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                    props[ pos ] = element.css( pos );
                    if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                        props[ pos ] = "auto";
                    }
                });
                element.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                });
            }
            element.css(size);

            return wrapper.css( props ).show();
        },

        removeWrapper: function( element ) {
            var active = document.activeElement;

            if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                element.parent().replaceWith( element );

                // Fixes #7595 - Elements lose focus when wrapped.
                if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                    $( active ).focus();
                }
            }


            return element;
        }
    });

    // return an effect options object for the given parameters:
    function _normalizeArguments( effect, options, speed, callback ) {

        // short path for passing an effect options object:
        if ( $.isPlainObject( effect ) ) {
            return effect;
        }

        // convert to an object
        effect = { effect: effect };

        // catch (effect)
        if ( options === undefined ) {
            options = {};
        }

        // catch (effect, callback)
        if ( $.isFunction( options ) ) {
            callback = options;
            speed = null;
            options = {};
        }

        // catch (effect, speed, ?)
        if ( $.type( options ) === "number" || $.fx.speeds[ options ]) {
            callback = speed;
            speed = options;
            options = {};
        }

        // catch (effect, options, callback)
        if ( $.isFunction( speed ) ) {
            callback = speed;
            speed = null;
        }

        // add options to effect
        if ( options ) {
            $.extend( effect, options );
        }

        speed = speed || options.duration;
        effect.duration = $.fx.off ? 0 : typeof speed === "number"
            ? speed : speed in $.fx.speeds ? $.fx.speeds[ speed ] : $.fx.speeds._default;

        effect.complete = callback || options.complete;

        return effect;
    }

    function standardSpeed( speed ) {
        // valid standard speeds
        if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
            return true;
        }

        // invalid strings - treat as "normal" speed
        if ( typeof speed === "string" && !$.jqplot.effects.effect[ speed ] ) {
            // TODO: remove in 2.0 (#7115)
            if ( backCompat && $.jqplot.effects[ speed ] ) {
                return false;
            }
            return true;
        }

        return false;
    }

    $.fn.extend({
        jqplotEffect: function( effect, options, speed, callback ) {
            var args = _normalizeArguments.apply( this, arguments ),
                mode = args.mode,
                queue = args.queue,
                effectMethod = $.jqplot.effects.effect[ args.effect ],

                // DEPRECATED: remove in 2.0 (#7115)
                oldEffectMethod = !effectMethod && backCompat && $.jqplot.effects[ args.effect ];

            if ( $.fx.off || !( effectMethod || oldEffectMethod ) ) {
                // delegate to the original method (e.g., .show()) if possible
                if ( mode ) {
                    return this[ mode ]( args.duration, args.complete );
                } else {
                    return this.each( function() {
                        if ( args.complete ) {
                            args.complete.call( this );
                        }
                    });
                }
            }

            function run( next ) {
                var elem = $( this ),
                    complete = args.complete,
                    mode = args.mode;

                function done() {
                    if ( $.isFunction( complete ) ) {
                        complete.call( elem[0] );
                    }
                    if ( $.isFunction( next ) ) {
                        next();
                    }
                }

                // if the element is hiddden and mode is hide,
                // or element is visible and mode is show
                if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
                    done();
                } else {
                    effectMethod.call( elem[0], args, done );
                }
            }

            // TODO: remove this check in 2.0, effectMethod will always be true
            if ( effectMethod ) {
                return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
            } else {
                // DEPRECATED: remove in 2.0 (#7115)
                return oldEffectMethod.call(this, {
                    options: args,
                    duration: args.duration,
                    callback: args.complete,
                    mode: args.mode
                });
            }
        }
    });




    var rvertical = /up|down|vertical/,
        rpositivemotion = /up|left|vertical|horizontal/;

    $.jqplot.effects.effect.blind = function( o, done ) {
        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.jqplot.effects.setMode( el, o.mode || "hide" ),
            direction = o.direction || "up",
            vertical = rvertical.test( direction ),
            ref = vertical ? "height" : "width",
            ref2 = vertical ? "top" : "left",
            motion = rpositivemotion.test( direction ),
            animation = {},
            show = mode === "show",
            wrapper, distance, top;

        // // if already wrapped, the wrapper's properties are my property. #6245
        if ( el.parent().is( ".ui-effects-wrapper" ) ) {
            $.jqplot.effects.save( el.parent(), props );
        } else {
            $.jqplot.effects.save( el, props );
        }
        el.show();
        top = parseInt(el.css('top'), 10);
        wrapper = $.jqplot.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        distance = vertical ? wrapper[ ref ]() + top : wrapper[ ref ]();

        animation[ ref ] = show ? String(distance) : '0';
        if ( !motion ) {
            el
                .css( vertical ? "bottom" : "right", 0 )
                .css( vertical ? "top" : "left", "" )
                .css({ position: "absolute" });
            animation[ ref2 ] = show ? '0' : String(distance);
        }

        // // start at 0 if we are showing
        if ( show ) {
            wrapper.css( ref, 0 );
            if ( ! motion ) {
                wrapper.css( ref2, distance );
            }
        }

        // // Animate
        wrapper.animate( animation, {
            duration: o.duration,
            easing: o.easing,
            queue: false,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.jqplot.effects.restore( el, props );
                $.jqplot.effects.removeWrapper( el );
                done();
            }
        });

    };

})(jQuery);
/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r792
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(a){a.jqplot.DateAxisRenderer=function(){a.jqplot.LinearAxisRenderer.call(this);this.date=new a.jsDate()};a.jqplot.DateAxisRenderer.prototype=new a.jqplot.LinearAxisRenderer();a.jqplot.DateAxisRenderer.prototype.constructor=a.jqplot.DateAxisRenderer;a.jqplot.DateTickFormatter=function(b,c){if(!b){b="%Y/%m/%d"}return a.jsDate.strftime(c,b)};a.jqplot.DateAxisRenderer.prototype.init=function(t){this.tickOptions.formatter=a.jqplot.DateTickFormatter;this.daTickInterval=null;this._daTickInterval=null;a.extend(true,this,t);var q=this._dataBounds,g,k,r,l,o,m,b;for(var f=0;f<this._series.length;f++){g={intervals:[],frequencies:{},sortedIntervals:[],min:null,max:null,mean:null};k=0;r=this._series[f];l=r.data;o=r._plotData;m=r._stackData;b=0;for(var e=0;e<l.length;e++){if(this.name=="xaxis"||this.name=="x2axis"){l[e][0]=new a.jsDate(l[e][0]).getTime();o[e][0]=new a.jsDate(l[e][0]).getTime();m[e][0]=new a.jsDate(l[e][0]).getTime();if((l[e][0]!=null&&l[e][0]<q.min)||q.min==null){q.min=l[e][0]}if((l[e][0]!=null&&l[e][0]>q.max)||q.max==null){q.max=l[e][0]}if(e>0){b=Math.abs(l[e][0]-l[e-1][0]);g.intervals.push(b);if(g.frequencies.hasOwnProperty(b)){g.frequencies[b]+=1}else{g.frequencies[b]=1}}k+=b}else{l[e][1]=new a.jsDate(l[e][1]).getTime();o[e][1]=new a.jsDate(l[e][1]).getTime();m[e][1]=new a.jsDate(l[e][1]).getTime();if((l[e][1]!=null&&l[e][1]<q.min)||q.min==null){q.min=l[e][1]}if((l[e][1]!=null&&l[e][1]>q.max)||q.max==null){q.max=l[e][1]}if(e>0){b=Math.abs(l[e][1]-l[e-1][1]);g.intervals.push(b);if(g.frequencies.hasOwnProperty(b)){g.frequencies[b]+=1}else{g.frequencies[b]=1}}}k+=b}var p=0,h=0;for(var c in g.frequencies){g.sortedIntervals.push({interval:c,frequency:g.frequencies[c]})}g.sortedIntervals.sort(function(i,d){return d.frequency-i.frequency});g.min=a.jqplot.arrayMin(g.intervals);g.max=a.jqplot.arrayMax(g.intervals);g.mean=k/l.length;this._intervalStats.push(g);g=k=r=l=o=m=null}q=null};a.jqplot.DateAxisRenderer.prototype.reset=function(){this.min=this._min;this.max=this._max;this.tickInterval=this._tickInterval;this.numberTicks=this._numberTicks;this.daTickInterval=this._daTickInterval};a.jqplot.DateAxisRenderer.prototype.createTicks=function(){var z=this._ticks;var w=this.ticks;var B=this.name;var y=this._dataBounds;var e=this._intervalStats;var q,x;var o,s;var d,c;var b,u;o=((this.min!=null)?new a.jsDate(this.min).getTime():y.min);s=((this.max!=null)?new a.jsDate(this.max).getTime():y.max);var k=s-o;if(w.length){for(u=0;u<w.length;u++){var g=w[u];var j=new this.tickRenderer(this.tickOptions);if(g.constructor==Array){j.value=new a.jsDate(g[0]).getTime();j.label=g[1];if(!this.showTicks){j.showLabel=false;j.showMark=false}else{if(!this.showTickMarks){j.showMark=false}}j.setTick(j.value,this.name);this._ticks.push(j)}else{j.value=new a.jsDate(g).getTime();if(!this.showTicks){j.showLabel=false;j.showMark=false}else{if(!this.showTickMarks){j.showMark=false}}j.setTick(j.value,this.name);this._ticks.push(j)}}this.numberTicks=w.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.daTickInterval=[(this.max-this.min)/(this.numberTicks-1)/1000,"seconds"]}else{if(this.tickInterval==null&&this.min==null&&this.max==null&&this.numberTicks==null){var A=a.jqplot.LinearTickGenerator(o,s);var n=o+k*(this.padMin-1);var r=s-k*(this.padMax-1);if(o<=n||s>=r){n=o-k*(this.padMin-1);r=s+k*(this.padMax-1);A=a.jqplot.LinearTickGenerator(n,r)}this.min=A[0];this.max=A[1];this.numberTicks=A[2];this.tickInterval=A[4];this.daTickInterval=[this.tickInterval/1000,"seconds"];for(var u=0;u<this.numberTicks;u++){var o=new a.jsDate(this.min);b=o.add(u*this.daTickInterval[0],this.daTickInterval[1]).getTime();var j=new this.tickRenderer(this.tickOptions);if(!this.showTicks){j.showLabel=false;j.showMark=false}else{if(!this.showTickMarks){j.showMark=false}}j.setTick(b,this.name);this._ticks.push(j)}}else{if(B=="xaxis"||B=="x2axis"){q=this._plotDimensions.width}else{q=this._plotDimensions.height}if(this.min!=null&&this.max!=null&&this.numberTicks!=null){this.tickInterval=null}if(this.tickInterval!=null){if(Number(this.tickInterval)){this.daTickInterval=[Number(this.tickInterval),"seconds"]}else{if(typeof this.tickInterval=="string"){var l=this.tickInterval.split(" ");if(l.length==1){this.daTickInterval=[1,l[0]]}else{if(l.length==2){this.daTickInterval=[l[0],l[1]]}}}}}if(o==s){var h=24*60*60*500;o-=h;s+=h}k=s-o;var v=2+parseInt(Math.max(0,q-100)/100,10);var m,p;m=(this.min!=null)?new a.jsDate(this.min).getTime():o-k/2*(this.padMin-1);p=(this.max!=null)?new a.jsDate(this.max).getTime():s+k/2*(this.padMax-1);this.min=m;this.max=p;k=this.max-this.min;if(this.numberTicks==null){if(this.daTickInterval!=null){var f=new a.jsDate(this.max).diff(this.min,this.daTickInterval[1],true);this.numberTicks=Math.ceil(f/this.daTickInterval[0])+1;this.max=new a.jsDate(this.min).add((this.numberTicks-1)*this.daTickInterval[0],this.daTickInterval[1]).getTime()}else{if(q>200){this.numberTicks=parseInt(3+(q-200)/100,10)}else{this.numberTicks=2}}}if(this.daTickInterval==null){this.daTickInterval=[k/(this.numberTicks-1)/1000,"seconds"]}for(var u=0;u<this.numberTicks;u++){var o=new a.jsDate(this.min);b=o.add(u*this.daTickInterval[0],this.daTickInterval[1]).getTime();var j=new this.tickRenderer(this.tickOptions);if(!this.showTicks){j.showLabel=false;j.showMark=false}else{if(!this.showTickMarks){j.showMark=false}}j.setTick(b,this.name);this._ticks.push(j)}}}if(this._daTickInterval==null){this._daTickInterval=this.daTickInterval}}})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r792
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(d){d.jqplot.eventListenerHooks.push(["jqplotMouseMove",f]);d.jqplot.Highlighter=function(h){this.show=d.jqplot.config.enablePlugins;this.markerRenderer=new d.jqplot.MarkerRenderer({shadow:false});this.showMarker=true;this.lineWidthAdjust=2.5;this.sizeAdjust=5;this.showTooltip=true;this.tooltipLocation="nw";this.fadeTooltip=true;this.tooltipFadeSpeed="fast";this.tooltipOffset=2;this.tooltipAxes="both";this.tooltipSeparator=", ";this.tooltipContentEditor=null;this.useAxesFormatters=true;this.tooltipFormatString="%.5P";this.formatString=null;this.yvalues=1;this.bringSeriesToFront=false;this._tooltipElem;this.isHighlighting=false;d.extend(true,this,h)};var b=["nw","n","ne","e","se","s","sw","w"];var e={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var c=["se","s","sw","w","nw","n","ne","e"];d.jqplot.Highlighter.init=function(k,j,i){var h=i||{};this.plugins.highlighter=new d.jqplot.Highlighter(h.highlighter)};d.jqplot.Highlighter.parseOptions=function(i,h){this.showHighlight=true};d.jqplot.Highlighter.postPlotDraw=function(){if(this.plugins.highlighter&&this.plugins.highlighter.highlightCanvas){this.plugins.highlighter.highlightCanvas.resetCanvas();this.plugins.highlighter.highlightCanvas=null}if(this.plugins.highlighter&&this.plugins.highlighter._tooltipElem){this.plugins.highlighter._tooltipElem.emptyForce();this.plugins.highlighter._tooltipElem=null}this.plugins.highlighter.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.highlighter.highlightCanvas.createElement(this._gridPadding,"jqplot-highlight-canvas",this._plotDimensions,this));this.plugins.highlighter.highlightCanvas.setContext();var h=document.createElement("div");this.plugins.highlighter._tooltipElem=d(h);h=null;this.plugins.highlighter._tooltipElem.addClass("jqplot-highlighter-tooltip");this.plugins.highlighter._tooltipElem.css({position:"absolute",display:"none"});this.eventCanvas._elem.before(this.plugins.highlighter._tooltipElem)};d.jqplot.preInitHooks.push(d.jqplot.Highlighter.init);d.jqplot.preParseSeriesOptionsHooks.push(d.jqplot.Highlighter.parseOptions);d.jqplot.postDrawHooks.push(d.jqplot.Highlighter.postPlotDraw);function a(m,o){var j=m.plugins.highlighter;var p=m.series[o.seriesIndex];var h=p.markerRenderer;var i=j.markerRenderer;i.style=h.style;i.lineWidth=h.lineWidth+j.lineWidthAdjust;i.size=h.size+j.sizeAdjust;var l=d.jqplot.getColorComponents(h.color);var n=[l[0],l[1],l[2]];var k=(l[3]>=0.6)?l[3]*0.6:l[3]*(2-l[3]);i.color="rgba("+n[0]+","+n[1]+","+n[2]+","+k+")";i.init();i.draw(p.gridData[o.pointIndex][0],p.gridData[o.pointIndex][1],j.highlightCanvas._ctx)}function g(w,q,m){var k=w.plugins.highlighter;var B=k._tooltipElem;if(k.useAxesFormatters){var u=q._xaxis._ticks[0].formatter;var h=q._yaxis._ticks[0].formatter;var C=q._xaxis._ticks[0].formatString;var r=q._yaxis._ticks[0].formatString;var v;var s=u(C,m.data[0]);var l=[];for(var z=1;z<k.yvalues+1;z++){l.push(h(r,m.data[z]))}if(k.formatString){switch(k.tooltipAxes){case"both":case"xy":l.unshift(s);l.unshift(k.formatString);v=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"yx":l.push(s);l.unshift(k.formatString);v=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"x":v=d.jqplot.sprintf.apply(d.jqplot.sprintf,[k.formatString,s]);break;case"y":l.unshift(k.formatString);v=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;default:l.unshift(s);l.unshift(k.formatString);v=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break}}else{switch(k.tooltipAxes){case"both":case"xy":v=s;for(var z=0;z<l.length;z++){v+=k.tooltipSeparator+l[z]}break;case"yx":v="";for(var z=0;z<l.length;z++){v+=l[z]+k.tooltipSeparator}v+=s;break;case"x":v=s;break;case"y":v=l.join(k.tooltipSeparator);break;default:v=s;for(var z=0;z<l.length;z++){v+=k.tooltipSeparator+l[z]}break}}}else{var v;if(k.tooltipAxes=="both"||k.tooltipAxes=="xy"){v=d.jqplot.sprintf(k.tooltipFormatString,m.data[0])+k.tooltipSeparator+d.jqplot.sprintf(k.tooltipFormatString,m.data[1])}else{if(k.tooltipAxes=="yx"){v=d.jqplot.sprintf(k.tooltipFormatString,m.data[1])+k.tooltipSeparator+d.jqplot.sprintf(k.tooltipFormatString,m.data[0])}else{if(k.tooltipAxes=="x"){v=d.jqplot.sprintf(k.tooltipFormatString,m.data[0])}else{if(k.tooltipAxes=="y"){v=d.jqplot.sprintf(k.tooltipFormatString,m.data[1])}}}}}if(d.isFunction(k.tooltipContentEditor)){v=k.tooltipContentEditor(v,m.seriesIndex,m.pointIndex,w)}B.html(v);var A={x:m.gridData[0],y:m.gridData[1]};var t=0;var j=0.707;if(q.markerRenderer.show==true){t=(q.markerRenderer.size+k.sizeAdjust)/2}var o=b;if(q.fillToZero&&q.fill&&m.data[1]<0){o=c}switch(o[e[k.tooltipLocation]]){case"nw":var p=A.x+w._gridPadding.left-B.outerWidth(true)-k.tooltipOffset-j*t;var n=A.y+w._gridPadding.top-k.tooltipOffset-B.outerHeight(true)-j*t;break;case"n":var p=A.x+w._gridPadding.left-B.outerWidth(true)/2;var n=A.y+w._gridPadding.top-k.tooltipOffset-B.outerHeight(true)-t;break;case"ne":var p=A.x+w._gridPadding.left+k.tooltipOffset+j*t;var n=A.y+w._gridPadding.top-k.tooltipOffset-B.outerHeight(true)-j*t;break;case"e":var p=A.x+w._gridPadding.left+k.tooltipOffset+t;var n=A.y+w._gridPadding.top-B.outerHeight(true)/2;break;case"se":var p=A.x+w._gridPadding.left+k.tooltipOffset+j*t;var n=A.y+w._gridPadding.top+k.tooltipOffset+j*t;break;case"s":var p=A.x+w._gridPadding.left-B.outerWidth(true)/2;var n=A.y+w._gridPadding.top+k.tooltipOffset+t;break;case"sw":var p=A.x+w._gridPadding.left-B.outerWidth(true)-k.tooltipOffset-j*t;var n=A.y+w._gridPadding.top+k.tooltipOffset+j*t;break;case"w":var p=A.x+w._gridPadding.left-B.outerWidth(true)-k.tooltipOffset-t;var n=A.y+w._gridPadding.top-B.outerHeight(true)/2;break;default:var p=A.x+w._gridPadding.left-B.outerWidth(true)-k.tooltipOffset-j*t;var n=A.y+w._gridPadding.top-k.tooltipOffset-B.outerHeight(true)-j*t;break}B.css("left",p);B.css("top",n);if(k.fadeTooltip){B.stop(true,true).fadeIn(k.tooltipFadeSpeed)}else{B.show()}B=null}function f(k,j,n,m,l){var h=l.plugins.highlighter;var o=l.plugins.cursor;if(h.show){if(m==null&&h.isHighlighting){var i=h.highlightCanvas._ctx;i.clearRect(0,0,i.canvas.width,i.canvas.height);if(h.fadeTooltip){h._tooltipElem.fadeOut(h.tooltipFadeSpeed)}else{h._tooltipElem.hide()}if(h.bringSeriesToFront){l.restorePreviousSeriesOrder()}h.isHighlighting=false;i=null}else{if(m!=null&&l.series[m.seriesIndex].showHighlight&&!h.isHighlighting){h.isHighlighting=true;if(h.showMarker){a(l,m)}if(h.showTooltip&&(!o||!o._zoom.started)){g(l,l.series[m.seriesIndex],m)}if(h.bringSeriesToFront){l.moveSeriesToFront(m.seriesIndex)}}}}}})(jQuery);