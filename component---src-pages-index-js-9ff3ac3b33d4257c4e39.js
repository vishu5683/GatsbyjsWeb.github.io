"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=n(c)===c&&r(c)!==c,l=i,i=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return N},P:function(){return E},S:function(){return M},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),s=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],m=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,g);return n.createElement(n.Fragment,null,n.createElement(m,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:o}=e,c=l(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=l(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},s,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var v;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?n.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(y,i({},e)),n.createElement("noscript",null,n.createElement(y,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let A,O;const j=function(e){let{as:t="div",image:r,style:s,backgroundColor:d,className:u,class:g,onStartLoad:m,onLoad:p,onError:h}=e,f=l(e,T);const{width:b,height:y,layout:v}=r,w=c(b,y,v),{style:E,className:N}=w,k=l(w,I),S=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(u=g);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,b,y);return(0,n.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(x);if(O&&_.has(x))return;let t,n;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(x),image:r},f)),_.has(x)||(t=requestAnimationFrame((()=>{S.current&&(n=l(S.current,x,_,s,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{_.has(x)&&O&&(S.current.innerHTML=O(i({isLoading:_.has(x),isLoaded:_.has(x),image:r},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:N+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},z=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));z.propTypes=L,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:r,__error:s}=t,o=l(t,R);return s&&console.warn(s),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const F=q((function(e){let{as:t="div",className:a,class:r,style:s,image:o,loading:g="lazy",imgClassName:m,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:y}=e,v=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=i({objectFit:b,objectPosition:y,backgroundColor:f},h);const{width:w,height:C,layout:L,images:T,placeholder:I,backgroundColor:_}=o,A=c(w,C,L),{style:O,className:j}=A,z=l(A,S),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?x(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,i({},z,{style:i({},O,s,{backgroundColor:f}),className:j+(a?" "+a:"")}),n.createElement(p,{layout:L,width:w,height:C},n.createElement(E,i({},u(I,!1,L,w,C,_,b,y))),n.createElement(N,i({"data-gatsby-image-ssr":"",className:m},v,d("eager"===g,!1,R,g,h)))))})),W=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),H={src:s().string.isRequired,alt:C,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=H;const M=q(z);M.displayName="StaticImage",M.propTypes=H},7966:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(8032);var s=()=>n.createElement(n.Fragment,null,n.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"brand-container"},n.createElement("a",{className:"navbar-brand",href:"#",style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement(r.S,{className:"Logoimg",src:"./assets/logo.png",alt:"logo",__imageData:a(293)}),n.createElement("div",{className:"brandNameContainer"},n.createElement("h2",{className:"brandNameHeading brandNameHeading1"},"Sternet"),n.createElement("h2",{className:"brandNameHeading brandNameHeading2"},"Smart")))),n.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 linkContainer"},n.createElement("li",{className:"nav-item"},n.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},n.createElement("h5",{className:"links",style:{fontFamily:"Arial, sans-serif",fontWeight:"bold",fontSize:"32px"}},"Products"))),n.createElement("li",{className:"nav-item"},n.createElement("a",{className:"nav-link active",href:"#"},n.createElement("h5",{className:"links",style:{fontFamily:"Arial, sans-serif",fontWeight:"bold",fontSize:"32px"}},"App"))),n.createElement("li",{className:"nav-item"},n.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},n.createElement("h5",{className:"links",style:{fontFamily:"Arial, sans-serif",fontWeight:"bold",fontSize:"32px"}},"Support"))),n.createElement("li",{className:"nav-item"},n.createElement("a",{className:"nav-link active",href:"#",tabindex:"-1","aria-disabled":"true"},n.createElement("h5",{className:"links",style:{fontFamily:"Arial, sans-serif",fontWeight:"bold",fontSize:"32px"}},"About Us"))))))));function i(){return n.createElement(n.Fragment,null,n.createElement(s,null))}},293:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/856df/logo.png","srcSet":"/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/29278/logo.png 12w,\\n/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/88208/logo.png 25w,\\n/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/856df/logo.png 49w","sizes":"(min-width: 49px) 49px, 100vw"},"sources":[{"srcSet":"/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/30aa9/logo.webp 12w,\\n/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/2fa99/logo.webp 25w,\\n/gatsby-plugin-images.github.io/static/c90124fb2b69cc803d5c02e072764901/f2d16/logo.webp 49w","type":"image/webp","sizes":"(min-width: 49px) 49px, 100vw"}]},"width":49,"height":49}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9ff3ac3b33d4257c4e39.js.map