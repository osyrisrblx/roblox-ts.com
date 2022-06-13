"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[937],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9880:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={title:"Introduction",slug:"/"},l=void 0,u={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is roblox-ts?",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/roblox-ts.com/docs/",draft:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/roblox-ts.com/docs/quick-start"}},c={},p=[{value:"What is roblox-ts?",id:"what-is-roblox-ts",level:2},{value:"Features",id:"features",level:2},{value:"Why should you use roblox-ts?",id:"why-should-you-use-roblox-ts",level:2},{value:"Why should you <em>not</em> use roblox-ts?",id:"why-should-you-not-use-roblox-ts",level:2},{value:"Learning Resources",id:"learning-resources",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("center",null,(0,i.kt)("img",{src:o(5654).Z})),(0,i.kt)("h2",{id:"what-is-roblox-ts"},"What is roblox-ts?"),(0,i.kt)("p",null,"In short, roblox-ts is a way to use the tooling and ecosystem surrounding TypeScript for Roblox development. This includes intellisense, IDE extensions, linters, code formatters, and more! It allows you to write TypeScript code that is then compiled into Luau code for use inside of Roblox."),(0,i.kt)("p",null,"roblox-ts works with both ",(0,i.kt)("strong",{parentName:"p"},"TypeScript")," files (",(0,i.kt)("inlineCode",{parentName:"p"},".ts"),") ",(0,i.kt)("em",{parentName:"p"},"and")," ",(0,i.kt)("strong",{parentName:"p"},"Luau")," files (",(0,i.kt)("inlineCode",{parentName:"p"},".lua"),") which are paired with TypeScript type definition files (",(0,i.kt)("inlineCode",{parentName:"p"},".d.ts"),")."),(0,i.kt)("p",null,"Typings for the Roblox API are partially handwritten and partially automatically generated from the Roblox API dump and Developer Hub documentation."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write TypeScript code, run it in Roblox"),(0,i.kt)("li",{parentName:"ul"},"Automatic project structure setup for creating games, models, plugins, and packages"),(0,i.kt)("li",{parentName:"ul"},"Automatically generated type definitions for the Roblox API"),(0,i.kt)("li",{parentName:"ul"},"Infers the structure of your game using your Rojo configuration file"),(0,i.kt)("li",{parentName:"ul"},"Use VSCode's intellisense, autocompletion, and type checking abilities"),(0,i.kt)("li",{parentName:"ul"},"Use industry standard tools for linting and formatting like ",(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")," and ",(0,i.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/org/rbxts"},"Growing collection of NPM packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/madou/typescript-transformer-handbook"},"TypeScript Transformer Plugins"))),(0,i.kt)("h2",{id:"why-should-you-use-roblox-ts"},"Why should you use roblox-ts?"),(0,i.kt)("p",null,"roblox-ts is great for managing large scale projects. Static types and intellisense allow you and your IDE to understand what your code is doing on a deeper level without having to mentally track what's going on. TypeScript's typing system allows you to clearly describe what each function expects as inputs and gives back as an output."),(0,i.kt)("p",null,"roblox-ts, TypeScript, and most of the related tooling is open source! This means you can hack it, tweak it, and customize it to your liking. roblox-ts supports ",(0,i.kt)("a",{parentName:"p",href:"./guides/typescript-transformers"},"TypeScript transformer plugins")," which allow you to modify the behavior of the compiler itself! You can also write your own ESLint plugins to enforce certain rules on your code."),(0,i.kt)("h2",{id:"why-should-you-not-use-roblox-ts"},"Why should you ",(0,i.kt)("em",{parentName:"h2"},"not")," use roblox-ts?"),(0,i.kt)("p",null,"The biggest downside to using roblox-ts is debugging. When you use the Roblox Studio debugger (or when you encounter an error), you will see the compiled Luau code instead of TypeScript code. While we actively work to make the compiled Luau code as readable as possible, this does still introduce a bit of complexity. Usually, it's pretty easy to mentally map your compiled Luau code to your TypeScript code."),(0,i.kt)("p",null,"The silver lining here is that the remaining few bugs should be logical bugs anyway!"),(0,i.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Need help?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Feel free to ask us questions in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/f6Rn6RY"},"Discord server's #help channel"),"!"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"},"TypeScript for the New Programmer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html"},"TypeScript Tooling in 5 minutes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/typescript/"},"Learn X in Y minutes TypeScript Walk-through"))))}m.isMDXComponent=!0},5654:function(e,t,o){t.Z=o.p+"assets/images/roblox-ts-256-87091e1f34fdfaa0a2ac1a7666b607e1.png"}}]);