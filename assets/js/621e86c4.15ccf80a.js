"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[81],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Callbacks vs Methods"},s=void 0,c={unversionedId:"guides/callbacks-vs-methods",id:"guides/callbacks-vs-methods",title:"Callbacks vs Methods",description:"To begin, let's quickly define two Luau terms:",source:"@site/docs/guides/callbacks-vs-methods.mdx",sourceDirName:"guides",slug:"/guides/callbacks-vs-methods",permalink:"/roblox-ts.com/docs/guides/callbacks-vs-methods",draft:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/callbacks-vs-methods.mdx",tags:[],version:"current",frontMatter:{title:"Callbacks vs Methods"},sidebar:"docs",previous:{title:"Syncing with Rojo",permalink:"/roblox-ts.com/docs/guides/syncing-with-rojo"},next:{title:"DataType Math",permalink:"/roblox-ts.com/docs/guides/datatype-math"}},u={},p=[{value:"Callbacks",id:"callbacks",level:2},{value:"Methods",id:"methods",level:2},{value:"Overrides",id:"overrides",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To begin, let's quickly define two Luau terms:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'A "callback" is a function that is called in the form of ',(0,a.kt)("inlineCode",{parentName:"li"},"foo.bar()"),"."),(0,a.kt)("li",{parentName:"ol"},'A "method" is a function that is called in the form of ',(0,a.kt)("inlineCode",{parentName:"li"},"foo:bar()"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"self")," is implicitly passed as the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"foo"),".")))),(0,a.kt)("p",null,"However, in TypeScript, all functions inside of objects are called as simply ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.bar()"),". To decide whether or not a function call should compile using ",(0,a.kt)("inlineCode",{parentName:"p"},".")," or ",(0,a.kt)("inlineCode",{parentName:"p"},":"),", roblox-ts follows a simple set of rules:"),(0,a.kt)("h2",{id:"callbacks"},"Callbacks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Function declarations are considered ",(0,a.kt)("strong",{parentName:"li"},"callbacks"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function foo(bar: number) {}\nconst obj = { foo: foo };\nobj.foo(123); // obj.foo(123)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arrow function expressions are considered ",(0,a.kt)("strong",{parentName:"li"},"callbacks"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n    foo: (bar: number) => {}\n}\nobj.foo(123); // obj.foo(123)\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method declarations are considered ",(0,a.kt)("strong",{parentName:"li"},"methods"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n    foo(bar: number) {}\n}\nobj.foo(123); // obj:foo(123)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Function expressions inside of object literals are considered ",(0,a.kt)("strong",{parentName:"li"},"methods"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n    foo: function (bar: number) {}\n}\nobj.foo(123); // obj:foo(123)\n")),(0,a.kt)("h2",{id:"overrides"},"Overrides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a function has a parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"this: void"),", it is ",(0,a.kt)("em",{parentName:"li"},"always")," considered to be a ",(0,a.kt)("strong",{parentName:"li"},"callback"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n    foo(this: void, bar: number) {}\n}\nobj.foo(123); // obj.foo(123)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a function has a parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," which is typed as anything except ",(0,a.kt)("inlineCode",{parentName:"li"},"void"),", it is ",(0,a.kt)("em",{parentName:"li"},"always")," considered to be a ",(0,a.kt)("strong",{parentName:"li"},"method"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare const obj: {\n    foo: (this: typeof obj, bar: number) => void;\n}\nobj.foo(123); // obj:foo(123)\n")))}m.isMDXComponent=!0}}]);