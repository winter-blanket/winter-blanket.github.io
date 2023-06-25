"use strict";(self.webpackChunkwinterblanket_archive=self.webpackChunkwinterblanket_archive||[]).push([[4195],{2571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Te});var n,a,o,i,c=r(7294),l=r(2263),s=r(7961),u=r(4996),m=r(5697),p=r.n(m),d=r(3524),f=r.n(d),h=r(9590),g=r.n(h),y=r(7418),w=r.n(y),b="bodyAttributes",_="htmlAttributes",E="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),k="cssText",N="href",A="http-equiv",C="innerHTML",S="itemprop",O="name",I="property",P="rel",x="src",j="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",F="encodeSpecialCharacters",B="onChangeClientState",Z="titleTemplate",H=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],U="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,v.TITLE),r=X(e,Z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,M);return t||n||void 0},$=function(e){return X(e,B)||function(){}},z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===P&&"canonical"===e[r].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==k&&c!==S||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=w()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,p=e.titleAttributes;se(v.BODY,n),se(v.HTML,a),le(m,p);var d={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,o),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,s),styleTags:ue(v.STYLE,u)},f={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(f[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,f,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(U),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)r.removeAttribute(o[m]);a.length===o.length?r.removeAttribute(U):r.getAttribute(U)!==i.join(",")&&r.setAttribute(U,i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+U+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===k)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(U,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[U]=!0,a=pe(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=me(r),o=ce(t);return a?"<"+e+" "+U+'="true" '+a+">"+J(o,n)+"</"+e+">":"<"+e+" "+U+'="true">'+J(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case _:return{toComponent:function(){return pe(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[U]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===k){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===k)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+" "+U+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,p=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(b,r,n),htmlAttributes:de(_,a,n),link:de(v.LINK,o,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,l,n),style:de(v.STYLE,s,n),title:de(v.TITLE,{title:m,titleAttributes:p},n)}},he=f()((function(e){return{baseTag:Q([N,j],e),bodyAttributes:z(b,e),defer:X(e,R),encode:X(e,F),htmlAttributes:z(_,e),linkTags:V(v.LINK,[P,N],e),metaTags:V(v.META,[O,T,A,I,S],e),noscriptTags:V(v.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:V(v.SCRIPT,[x,C],e),styleTags:V(v.STYLE,[k],e),title:G(e),titleAttributes:z(E,e)}}),(function(e){oe&&ne(oe),e.defer?oe=re((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),ge=(a=he,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return W({},a,((t={})[n.type]=i,t.titleAttributes=W({},o),t));case v.BODY:return W({},a,{bodyAttributes:W({},o)});case v.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((r={})[n.type]=W({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(K(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind;r(100);function ye(e){let{title_kr:t,title_en:r}=e;return c.createElement("div",{className:"SectionTitle"},c.createElement("h2",null,c.createElement("span",{className:"color-primary"},t),c.createElement("span",null," "),c.createElement("span",null,r)))}function we(e){let{company_logo_src:t,company_name:r,company_url:n,company_tag1:a,company_tag2:o,company_tag3:i,company_period:l,company_position:s}=e;return c.createElement("div",{className:"SectionCompany border-lg"},c.createElement("div",{className:"company-name-wrapper"},c.createElement("a",{className:"bg-color-empty has-label-false",href:n,target:"_blank"},c.createElement("div",{className:"icn icn-out"})),c.createElement("img",{className:"company-logo",src:t,alt:r})),c.createElement("div",{className:"chip-wrapper"},c.createElement("div",{className:"chip bg-color-white"},a),c.createElement("div",{className:"chip bg-color-white"},o),c.createElement("div",{className:"chip bg-color-white"},i)),c.createElement("div",{className:"company-position-wrapper"},c.createElement("h5",{className:"company-period"},l),c.createElement("h5",{className:"company-position"},s)))}function be(e){let{product_desc:t,product_desc_img:r,feature_desc:n}=e;return c.createElement("div",{className:"SectionProduct"},c.createElement("div",{className:"product-title-wrapper"},c.createElement("a",{className:"btn-product-title bg-color-empty bg-no-bolder has-label-false"},c.createElement("div",{className:"icn icn-triangle"})),c.createElement("div",{className:"chip bg-color-white"},"\ub2f4\ub2f9 \uc81c\ud488"),c.createElement("h5",{className:"product-title"},t)),c.createElement("div",{className:"product-desc-wrapper"},c.createElement("div",{className:"product-desc-img-wrapper"},c.createElement("img",{src:r,alt:t})),c.createElement("div",{className:"feature-desc-wrapper"},c.createElement("div",{className:"chip bg-color-white"},"\uc8fc\uc694 \uae30\ub2a5"),c.createElement("ul",{className:"feature-list"},n.map(((e,t)=>{const r=Object.keys(e)[0],n=e[r];return c.createElement("li",{key:t},c.createElement("div",{className:"feature-item"},c.createElement("strong",null,r)," | ",n))}))))))}function _e(e){let{work_image:t,work_title:r,work_desc_list:n,work_tools_list:a}=e;return c.createElement("div",{className:"WorkItem row row--no-gutters"},c.createElement("div",{className:"work-image col col--4"},c.createElement("img",{src:t,alt:`${r}\uc744 \ubb18\uc0ac\ud55c \uc774\ubbf8\uc9c0`})),c.createElement("div",{className:"work-desc col"},c.createElement("div",{className:"work-contents"},c.createElement("h2",null,r),c.createElement("ul",null,n.map(((e,t)=>c.createElement("li",{key:t},c.createElement("h5",null,e)))))),c.createElement("div",{className:"work-tools"},c.createElement("h5",null,"\uc0ac\uc6a9\ud55c \ub3c4\uad6c\ub4e4"),c.createElement("div",{className:"work-tools-items"},a.map(((e,t)=>{const r=Object.keys(e)[0],n=e[r];return c.createElement("a",{key:t,className:"bg-color-white has-label-true has-icn-true",href:n,target:"_blank"},c.createElement("img",{src:(0,u.Z)(`/img/index/img_icn_${r.toLowerCase()}.png`)}),r)}))))))}function Ee(e){let{edu_logo:t,edu_title:r,edu_sub_title:n,edu_period:a}=e;return c.createElement("div",{className:"EducationItem col bg-color-white border-lg"},c.createElement("div",{className:"edu-title-wrapper"},c.createElement("img",{src:t,alt:`${r}\uc758 \ub85c\uace0`}),c.createElement("h3",{className:"edu-title"},r)),c.createElement("h5",{className:"edu-period"},a),c.createElement("h5",{className:"edu-sub-title"},n))}function ve(e){let{research_title:t,research_desc:r,research_url:n}=e;return c.createElement("div",{className:"ResearchItem col bg-color-empty border-lg"},c.createElement("h3",null,t),c.createElement("p",null,r),c.createElement("a",{className:"bg-color-empty has-label-false",href:n,target:"_blank"},c.createElement("div",{className:"icn icn-out"})))}function Te(){const{siteConfig:e}=(0,l.Z)(),t=[{Slack:"https://slack.com/"},{Notion:"http://notion.so/"},{Figma:"https://www.figma.com"},{Jira:"https://www.atlassian.com/ko/software/jira"},{Amplitude:"https://amplitude.com"},{Metabase:"https://www.metabase.com"},{Overflow:"https://overflow.io"},{Typeform:"https://www.typeform.com"}];function r(e){for(let r=0;r<t.length;r++){const n=t[r];if(e in n)return n[e]}return null}return c.createElement(s.Z,{title:"\uaca8\uc6b8\uc774\ubd88\uc758 \uc544\uce74\uc774\ube0c",description:"\ube14\ub85c\uadf8, \uacf5\ubd80 \uae30\ub85d \ub4f1 \uc628\uac16 \uac1c\uc778\uc801\uc778 \uad00\uc2ec\uc0ac\ub97c \ubaa8\uc544\ub450\ub294 \uacf3\uc785\ub2c8\ub2e4."},c.createElement("main",{className:"container"},c.createElement("div",{className:"row hero-profile bg-color-emtpy bg-no-bolder"},c.createElement("div",{className:"col"},c.createElement("div",{className:"row contact-wrapper"},c.createElement("a",{className:"chip bg-color-secondary has-icn-true",href:"mailto:miyeon.ha.22@gmail.com",target:"_blank"},c.createElement("img",{src:(0,u.Z)("/img/index/img_icn_email.png")}),"miyeon.ha.22@gmail.com"),c.createElement("a",{className:"chip bg-color-secondary has-icn-true",href:"https://www.linkedin.com/in/miyeonha17/",target:"_blank"},c.createElement("img",{src:(0,u.Z)("/img/index/img_icn_out.png")}),"Linkedin")),c.createElement("div",{className:"row profile-wrapper"},c.createElement("div",{className:"col-4 profile-image"},c.createElement("img",{src:(0,u.Z)("/img/index/img_profile.png"),alt:"\ud504\ub85c\ud544 \uc0ac\uc9c4"})),c.createElement("div",{className:"col profile-desc "},c.createElement("h1",null,"\ubc18\uac00\uc6cc\uc694! \ud83d\udc4b",c.createElement("br",null),"\ud558\ubbf8\uc5f0\uc785\ub2c8\ub2e4."),c.createElement("h4",null,"\ub098\ub9cc\uc758 \ubfb0\uc871\ud55c \ubd84\uc57c\ub97c \uac00\uc9c4 \uc81c\ub108\ub7f4\ub9ac\uc2a4\ud2b8\ub97c \uafc8\uafc9\ub2c8\ub2e4."),c.createElement("p",null,"\uc6b0\uc5f0\ud788 \uc2dc\uc791\ud55c \ucf54\ub529 \uacf5\ubd80\uac00 \uacc4\uae30\uac00 \ub418\uc5b4 IT \uc5c5\uacc4\ub85c \uc9c4\ub85c\ub97c \ubc14\uafb8\uace0 \ub300\ud559\uc6d0\uc5d0\uc11c HCI\ub97c \uacf5\ubd80\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uae30\uc6c3\uac70\ub9ac\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \ub514\uc790\uc778, \uac1c\ubc1c, \ub370\uc774\ud130 \ubd84\uc11d, AI Chatbot \ub4f1, \ub2e4\uc591\ud55c \uae30\uc220\uc744 \uc9c1\uc811 \ub2e4\ub8f0 \uc218 \uc788\uc744\ub9cc\ud07c \ud0d0\uad6c\ud558\uace4 \ud569\ub2c8\ub2e4. \uc81c\ub108\ub7f4\ub9ac\uc2a4\ud2b8\ub97c \uc9c0\ud5a5\ud558\ub294 \uc800\uc758 \uc774\ub7f0 \uc131\uaca9\uc740 \ud504\ub85c\ub355\ud2b8 \ub9e4\ub2c8\uc800\ub85c \ucee4\ub9ac\uc5b4\ub97c \uc2dc\uc791\ud558\ub294 \ub370 \ub9ce\uc740 \ub3c4\uc6c0\uc744 \uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."))))),c.createElement("div",{className:"row"},c.createElement("div",{className:"col work-experience"},c.createElement(ye,{title_kr:"\uc5c5\ubb34 \uacbd\ud5d8",title_en:"Work Experience"}),c.createElement("div",{className:"work-experience-inner"},c.createElement("div",{className:"company-wrapper"},c.createElement(we,{company_logo_src:(0,u.Z)("/img/index/img_logo_classum.png"),company_name:"\ud074\ub77c\uc378",company_url:"https://www.classum.com",company_tag1:"#\uc5d0\ub4c0\ud14c\ud06c \uc2a4\ud0c0\ud2b8\uc5c5",company_tag2:"#B2B SaaS",company_tag3:"#Pre-SeriesB",company_period:"2021.05 - 2023.06",company_position:"Product Manager"}),c.createElement(be,{product_desc:"CLASSUM  |  \uae30\uc5c5/\ub300\ud559\uc744 \uc704\ud55c \uad50\uc721/\ud559\uc2b5 \uc18c\ud1b5 \ud50c\ub7ab\ud3fc",product_desc_img:(0,u.Z)("/img/index/img_product_classum.png"),feature_desc:[{"\ucee4\ubba4\ub2c8\ud2f0":"SNS \ud615\uc2dd\uc758 \uac8c\uc2dc\uae00 \ud53c\ub4dc\ub97c \uc911\uc2ec\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc9c8\ubb38\uc744 \uc62c\ub9ac\uac70\ub098 \uc758\uacac\uc744 \uad50\ub958\ud558\ub294 \uc18c\ud1b5 \uc7a5\uc18c."},{"\ucf58\ud150\uce20":"\ud559\uc2b5\uc5d0 \ud544\uc694\ud55c \uc601\uc0c1, \ud14d\uc2a4\ud2b8 \uc790\ub8cc, \ud034\uc988 \ub4f1\uc744 \uc62c\ub824\uc11c LMS \uc5ed\ud560\uc744 \ud558\ub294 \ucee4\ub9ac\ud058\ub7fc \uc124\uacc4 \uae30\ub2a5."},{"\ucc4c\ub9b0\uc9c0":"\uc0ac\uc6a9\uc790\uac00 \uc218\ud589\ud574\uc57c \ud558\ub294 \ud559\uc2b5 \ubaa9\ud45c\ub97c \uc9c0\uc815\ud574\uc11c \uc2a4\ud130\ub514, \uac15\uc758\ud615 \uad50\uc721\uc758 \uacfc\uc5c5\uc744 \uc124\uacc4\ud558\ub294 \uae30\ub2a5."},{"\ub3c4\ud2b8":"\uc790\uccb4 \uac1c\ubc1c\ud55c NLP AI \ubaa8\ub378\uacfc GPT\ub85c \uc0ac\uc6a9\uc790\uc758 \uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\uc744 \ucc3e\uc544\uc8fc\ub294 AI Assistant."}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_classum1.png"),work_title:"\uc2a4\ucffc\ub4dc \uc6b4\uc601",work_desc_list:["\u2219 \uac1c\ubc1c\uc790, \ub514\uc790\uc774\ub108, QA\ub85c \uad6c\uc131\ub41c Cross-functional \uc870\uc9c1 \uc2a4\ucffc\ub4dc\uc758 \uc6b4\uc601/\uad00\ub9ac","\u2219 \ub370\uc77c\ub9ac \uc2a4\ud06c\ub7fc, \uc2a4\ud504\ub9b0\ud2b8 \ud50c\ub798\ub2dd\ub4f1 \uc560\uc790\uc77c \ubc29\ubc95\ub860\uc5d0 \uae30\ubc18\ud55c \ud300 \uc6b4\uc601"],work_tools_list:[{Slack:r("Slack")},{Notion:r("Notion")},{Figma:r("Figma")},{Jira:r("Jira")}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_classum2.png"),work_title:"\uc2e0\uae30\ub2a5 \uae30\ud68d/\ub7f0\uce6d",work_desc_list:["\u2219 \uc0ac\uc6a9\uc131 \uac1c\uc120 \ubc0f \uc2e0\uaddc \uae30\ub2a5 \ub7f0\uce6d \uc2dc PRD\uc640 \ucd08\uae30 \uae30\ud68d\uc11c\ub97c \ud1a0\ub300\ub85c \ud0a5\uc624\ud504 \uc9c4\ud589","\u2219 \uc2a4\ucffc\ub4dc \ub2f4\ub2f9 \ud30c\ud2b8\uc758 User Story \ubaa9\ub85d\uacfc \uc5f0\uacb0\ub41c \uc815\ucc45\uc744 \ubb38\uc11c\ud654\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud568"],work_tools_list:[{Notion:r("Notion")},{Figma:r("Figma")}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_classum3.png"),work_title:"\uc0ac\uc6a9\uc790 \ub9ac\uc11c\uce58",work_desc_list:["\u2219 \uc815\ub7c9 \uc124\ubb38\uc870\uc0ac\uc640 \uc815\uc131 \uc778\ud130\ubdf0\uc758 \uacc4\ud68d, \uc9c4\ud589, \uc778\uc0ac\uc774\ud2b8 \ubd84\uc11d\uae4c\uc9c0\uc758 \uc804\uccb4 \ud504\ub85c\uc138\uc2a4\ub97c \ub2f4\ub2f9\ud568","\u2219 \ub9ac\uc11c\uce58 \uacb0\uacfc\ub97c \ud1a0\ub300\ub85c \ud604 \uc11c\ube44\uc2a4 \uc0ac\uc6a9\uc790\uc758 User Group\uc744 \ub3c4\ucd9c\ud558\uace0 \uac01 User Group\uc758 Journey\ub97c \uad6c\uccb4\ud654\ud568"],work_tools_list:[{Notion:r("Notion")},{Amplitude:r("Amplitude")},{Typeform:r("Typeform")},{Metabase:r("Metabase")}]})),c.createElement("div",{className:"company-wrapper"},c.createElement(we,{company_logo_src:(0,u.Z)("/img/index/img_logo_skelterlabs.png"),company_url:"https://www.skelterlabs.com",company_name:"\uc2a4\ucf08\ud130\ub7a9\uc2a4",company_tag1:"#AI \uc2a4\ud0c0\ud2b8\uc5c5",company_tag2:"#B2B SaaS",company_tag3:"#SeriesB",company_period:"2019.05 - 2021.05",company_position:"Product Manager"}),c.createElement(be,{product_desc:"AIQ.TALK Chatbot  |  AI \ucc57\ubd07 \uac1c\ubc1c \uc194\ub8e8\uc158",product_desc_img:(0,u.Z)("/img/index/img_product_classum.png"),feature_desc:[{"\uc778\ud150\ud2b8/\uc5d4\ud2f0\ud2f0":"\uc0ac\uc6a9\uc790\uac00 \ubcf4\uc720\ud55c \uc790\uc5f0\uc5b4 \ub370\uc774\ud130\ub97c \uc785\ub825\ud574\uc11c \uc790\uc2e0\uc758 \ub370\uc774\ud130\uc5d0 \ub9de\ub294 NLU AI \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ud0a4\ub294 \uae30\ub2a5"},{"\ub2e4\uc774\uc5bc\ub85c\uadf8":"\ucc57\ubd07\uc774 \uac01 \ub300\ud654 \uc0c1\ud669\uc5d0\uc11c \uc5b4\ub5a4 \ub2f5\ubcc0\uc744 \ucd9c\ub825\ud574\uc57c \ud558\ub294\uc9c0 \ub300\ud654 \ub85c\uc9c1\uc744 \uc9c0\uc815\ud568"},{"\ud568\uc218":"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc640 Webhook\uc73c\ub85c \uc678\ubd80 \uc2dc\uc2a4\ud15c(ex. \uace0\uac1d \uc8fc\ubb38 \ub0b4\uc5ed \ub4f1)\uacfc \ucc57\ubd07\uc744 \uc5f0\ub3d9\ud560 \uc218 \uc788\uc74c"}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_skelterlabs1.png"),work_title:"NLU AI \uc194\ub8e8\uc158 \uc81c\ud488 \uad00\ub9ac",work_desc_list:["\u2219 AI \uc5d4\uc9c0\ub2c8\uc5b4, \ud504\ub85c\ub355\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uad6c\uc131\ub41c \ud300\uc5d0\uc11c \uc81c\ud488 \uad00\ub9ac\ub97c \ub2f4\ub2f9\ud568","\u2219 \uace0\uac1d\uc0ac \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790 \uc758\uacac\uc744 \uc218\ub834","\u2219 \ub0b4\ubd80 \uac1c\ubc1c \uc9c4\ud589 \uc0c1\ud669\uacfc \uc815\uae30 \ubc30\ud3ec \uc77c\uc815\uc744 \uad00\ub9ac\ud568"],work_tools_list:[{Slack:r("Slack")},{Figma:r("Figma")},{Jira:r("Jira")}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_skelterlabs2.png"),work_title:"\uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc \uc81c\uc791",work_desc_list:["\u2219 NLU AI, \ucc57\ubd07\uc5d0 \ub300\ud55c \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0ac\uc6a9\uc790\ub3c4 \uc81c\ud488 \uc0ac\uc6a9\ubc95\uc744 \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc \uc804\uccb4\ub97c \uae30\ud68d/\uc791\uc131\ud568","\u2219 \uac01 \uae30\ub2a5\uc5d0 \ub300\ud55c \ub2e8\uc21c\ud55c \uc0ac\uc6a9\ubc95 \ubfd0\ub9cc \uc544\ub2c8\ub77c, AI \uae30\uc220 \uc6d0\ub9ac\uc640 \ucc57\ubd07 \uac1c\ubc1c \ubc29\ubc95\ub860\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \ub367\ubd99\uc5ec \uc81c\ud488 \uc0ac\uc6a9\uc5d0 \ud544\uc694\ud55c \uc0ac\uc804 \uc9c0\uc2dd\uc744 \uc81c\uacf5\ud558\uace0\uc790 \ud568"],work_tools_list:[{Notion:r("Notion")},{Figma:r("Figma")}]}),c.createElement(_e,{work_image:(0,u.Z)("/img/index/img_work_item_skelterlabs3.png"),work_title:"AI Chatbot \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac",work_desc_list:["\u2219 \uc774\ucee4\uba38\uc2a4, \uc81c\uc57d \uc5c5\uccb4\uc758 CS \ucc57\ubd07 \ub7f0\uce6d \ud504\ub85c\uc81d\ud2b8\ub97c \ub2f4\ub2f9\ud568","\u2219 \uace0\uac1d\uc0ac \uc694\uad6c\uc0ac\ud56d\uc5d0 \uadfc\uac70\ud574 \ucc57\ubd07 \ub300\ud654 \uc2dc\ub098\ub9ac\uc624\ub97c \uae30\ud68d, \uac1c\ubc1c\ud558\uace0 \ud504\ub85c\uc81d\ud2b8 \uc804\ubc18\uc758 \uc77c\uc815 \uad00\ub9ac\ub97c \uc9c4\ud589\ud568"],work_tools_list:[{Overflow:r("Overflow")}]}))))),c.createElement("div",{className:"row"},c.createElement("div",{className:"col"},c.createElement(ye,{title_kr:"\ud559\ub825",title_en:"Education"}),c.createElement("div",{className:"education-wrapper row"},c.createElement(Ee,{edu_logo:(0,u.Z)("/img/index/img_icn_yonsei.png"),edu_title:"\uc5f0\uc138\ub300\ud559\uad50 \uc77c\ubc18\ub300\ud559\uc6d0",edu_period:"2017.03 - 2019.02",edu_sub_title:"\uae30\uc220\uacbd\uc601\ud611\ub3d9\uacfc\uc815 \uc11d\uc0ac| HCI Lab"}),c.createElement(Ee,{edu_logo:(0,u.Z)("/img/index/img_icn_yonsei.png"),edu_title:"\uc5f0\uc138\ub300\ud559\uad50",edu_period:"2011.03 - 2017.02",edu_sub_title:"\uacbd\uc81c\ud559\uacfc \ud559\uc0ac"})))),c.createElement("div",{className:"row"},c.createElement("div",{className:"col"},c.createElement(ye,{title_kr:"\ub17c\ubb38",title_en:"Research Projects"}),c.createElement("div",{className:"row research-wrapper"},c.createElement(ve,{research_title:"\ubc95\ub960 \ubd84\uc57c AI Chatbot \uc0ac\uc5c5 \uacc4\ud68d \uc5f0\uad6c",research_desc:"Lawper : \uc790\uc5f0\uc5b4 \ucc98\ub9ac \uae30\uc220\uc744 \ud1b5\ud55c \ubc95\ub960 \uc0c1\ub2f4 \ub3c4\uc6b0\ubbf8 \uc778\uacf5\uc9c0\ub2a5 \ucc57\ubd07 \uc0ac\uc5c5\uacc4\ud68d\uc11c",research_url:"http://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=141b2555eede521fffe0bdc3ef48d419&keyword=lawper"}),c.createElement(ve,{research_title:"AI \uc815\ud655\ub3c4 \uac1c\uc120\uc744 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ub799\uc158 \uc5f0\uad6c",research_desc:"Egoistic and altruistic motivation : How to induce users' willingness to help for imperfect AI, Computers in Human Behavior, 2019",research_url:"https://doi.org/10.1016/j.chb.2019.06.009"}),c.createElement(ve,{research_title:"\ube14\ub85d\uccb4\uc778 \uae30\ubc18 \ub370\uc774\ud130 \uac70\ub798 \ud50c\ub7ab\ud3fc \uc5f0\uad6c",research_desc:"Where WTS meets WTB: A Blockchain-based Marketplace for Digital Me to trade users\u2019 private data, Pervasive and Mobile Computing, 2019",research_url:"https://doi.org/10.1016/j.pmcj.2019.101078"}))))))}},3524:(e,t,r)=>{var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),m.canUseDOM?t(l):r&&(l=r(l))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(m,"canUseDOM",c),m}}}}]);