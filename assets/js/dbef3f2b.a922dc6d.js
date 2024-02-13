"use strict";(self.webpackChunkroblox_ts=self.webpackChunkroblox_ts||[]).push([[600],{4480:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var s=o(7624),r=o(2172);const n={title:"DataType Math"},a=void 0,c={id:"guides/datatype-math",title:"DataType Math",description:'Roblox features a bunch of "DataType" classes and many of these use operator overloading for math operations. i.e. Vector2, Vector3, CFrame',source:"@site/docs/guides/datatype-math.mdx",sourceDirName:"guides",slug:"/guides/datatype-math",permalink:"/roblox-ts.com/docs/guides/datatype-math",draft:!1,unlisted:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/datatype-math.mdx",tags:[],version:"current",frontMatter:{title:"DataType Math"},sidebar:"docs",previous:{title:"Callbacks vs Methods",permalink:"/roblox-ts.com/docs/guides/callbacks-vs-methods"},next:{title:"Indexing Children",permalink:"/roblox-ts.com/docs/guides/indexing-children"}},d={},i=[];function l(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://developer.roblox.com/en-us/api-reference/data-types",children:'Roblox features a bunch of "DataType" classes'})," and many of these use operator overloading for math operations. i.e. ",(0,s.jsx)(t.code,{children:"Vector2"}),", ",(0,s.jsx)(t.code,{children:"Vector3"}),", ",(0,s.jsx)(t.code,{children:"CFrame"})]}),"\n",(0,s.jsx)(t.p,{children:"Unfortunately, TypeScript does not have a way to describe operator overloading with types."}),"\n",(0,s.jsxs)(t.p,{children:["To get around this, roblox-ts adds four macro methods ",(0,s.jsx)(t.code,{children:".add()"}),", ",(0,s.jsx)(t.code,{children:".sub()"}),", ",(0,s.jsx)(t.code,{children:".mul()"}),", and ",(0,s.jsx)(t.code,{children:".div()"})," to DataType classes which support math operators."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"a.add(b)"})," compiles to ",(0,s.jsx)(t.code,{children:"a + b"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"a.sub(b)"})," compiles to ",(0,s.jsx)(t.code,{children:"a - b"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"a.mul(b)"})," compiles to ",(0,s.jsx)(t.code,{children:"a * b"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"a.div(b)"})," compiles to ",(0,s.jsx)(t.code,{children:"a / b"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/roblox-ts/types/blob/master/include/macro_math.d.ts",children:"You can see an up to date list of classes which support math operators here."})})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>c,M:()=>a});var s=o(1504);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);