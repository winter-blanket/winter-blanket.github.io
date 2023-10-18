"use strict";(self.webpackChunkwinterblanket_archive=self.webpackChunkwinterblanket_archive||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(5999),r=a(2244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&l.createElement(r.Z,{permalink:o,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6010),r=a(5999),o=a(8824),s=a(1944),m=a(5281),i=a(9960),c=a(9058),u=a(9703),g=a(197),d=a(4148);function p(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=p(t);return l.createElement(l.Fragment,null,l.createElement(s.d,{title:a}),l.createElement(g.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:n,listMetadata:o}=e;const s=p(t);return l.createElement(c.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,s),l.createElement(i.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(d.Z,{items:a}),l.createElement(u.Z,{metadata:o}))}function b(e){return l.createElement(s.FG,{className:(0,n.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(E,e))}},1164:(e,t,a)=>{a.d(t,{Z:()=>R});var l=a(7294),n=a(6010),r=a(9460),o=a(5999),s=a(8824),m=a(4996);function i(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o}=(0,r.C)(),{withBaseUrl:s}=(0,m.C)(),i=o.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&l.createElement("meta",{itemProp:"image",content:s(i,{absolute:!0})}),t)}var c=a(9960);const u={title:"title_xvU1"};function g(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,i=o?"h1":"h2";return l.createElement(i,{className:(0,n.Z)(u.title,t),itemProp:"headline"},o?m:l.createElement(c.Z,{itemProp:"url",to:s},m))}const d={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:m}=a;return l.createElement("div",{className:(0,n.Z)(d.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==m&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:m})))}function f(e){return e.href?l.createElement(c.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:m,email:i}=t,c=s||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},m&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:m,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function P(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return l.createElement("header",null,l.createElement(g,null),l.createElement(b,null),l.createElement(P,null))}var T=a(8780),w=a(4859);function k(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?T.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(w.Z,null,t))}var _=a(4881),y=a(1526),C=a(7462);function x(){return l.createElement("b",null,l.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,C.Z)({"aria-label":(0,o.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(x,null))}const I={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function A(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:m}=e,i=!t&&m,c=a.length>0;return c||i||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&I.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":i})},l.createElement(y.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(_.Z,{editUrl:s})),i&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":c})},l.createElement(F,{blogPostTitle:o,to:e.permalink}))):null}var M=a(3944);function U(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function R(e){let{children:t,className:a,customIndex:o,customIndexLength:s}=e;const m=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}(),{metadata:c,isBlogPostPage:u}=(0,r.C)(),{frontMatter:g,slug:d,title:p,tags:h,date:E,formattedDate:b,readingTime:f}=c,{comments:v=!0}=g;return l.createElement(i,{className:(0,n.Z)(m,a)},l.createElement("div",{className:"blog-post-item-wrap"},l.createElement("div",{className:"blog-post-metadata-wrap"},l.createElement("h5",{className:"post-index",alt:"\uac8c\uc2dc\uae00 \ubc88\ud638"},s-o),h.length>=1&&h[0].label.includes("#")?l.createElement("h5",{className:"post-first-tag",alt:"\uc2dc\ub9ac\uc988 \uc81c\ubaa9"},h[0].label):l.createElement("div",{className:"book-metadata"},l.createElement("h5",{className:"book-author"},`${h[0].label}`),l.createElement("h5",{className:"book-publisher"},`${h[1].label}`))),l.createElement("div",{className:"blog-post-wrap"},l.createElement(Z,null),l.createElement(k,null,t),l.createElement(A,null))),l.createElement("div",{className:"blog-post-date"},l.createElement("strong",{className:"date"},b),l.createElement("strong",{className:"reading-time"},l.createElement(U,{readingTime:f}))),v&&l.createElement(M.qw,{shortname:"gyeoulibulyi-akaibeu",config:{url:d,identifier:d,title:p,language:"kr_KR.UTF-8"}}))}},4148:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(9460),r=a(1164);function o(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map(((e,r)=>{let{content:o}=e;return l.createElement(n.n,{key:o.metadata.permalink,content:o},l.createElement(a,{customIndex:r,customIndexLength:t.length},l.createElement(o,null)))})))}},8974:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7462),n=a(7294),r=a(1470);a(4996);function o(e){const[t,a]=(0,n.useState)(!1),[o,s]=(0,n.useState)(""),m=()=>{a(!1)};return n.createElement(n.Fragment,null,n.createElement(r.Z,(0,l.Z)({},e,{onClick:()=>{return t=e.src,s(t),void a(!0);var t}})),t&&n.createElement("div",{className:"popup-overlay",onClick:m},n.createElement("a",{className:"bg-color-empty has-icn-true has-label-false",onClick:m},"\ub2eb\uae30"),n.createElement("div",{className:"popup-wrapper"},n.createElement("div",{className:"popup-content"},n.createElement("img",{src:o,alt:"Expanded Image"})))))}}}]);