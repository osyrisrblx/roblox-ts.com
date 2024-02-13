"use strict";(self.webpackChunkroblox_ts=self.webpackChunkroblox_ts||[]).push([[296],{9372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(7624),a=r(2172);const s={title:"Constructors"},l=void 0,o={id:"api/constructors",title:"Constructors",description:"new Array(length? T)",source:"@site/docs/api/constructors.mdx",sourceDirName:"api",slug:"/api/constructors",permalink:"/roblox-ts.com/docs/api/constructors",draft:!1,unlisted:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/api/constructors.mdx",tags:[],version:"current",frontMatter:{title:"Constructors"},sidebar:"docs",previous:{title:"Roblox API",permalink:"/roblox-ts.com/docs/api/roblox-api"},next:{title:"Functions",permalink:"/roblox-ts.com/docs/api/functions"}},i={},d=[{value:"<code>new Array&lt;T&gt;(length?: number, value?: T)</code>",id:"new-arraytlength-number-value-t",level:3},{value:"<code>new Map&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-mapk-ventries-arrayk-v",level:3},{value:"<code>new ReadonlyMap&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-readonlymapk-ventries-arrayk-v",level:3},{value:"<code>new WeakMap&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-weakmapk-ventries-arrayk-v",level:3},{value:"<code>new Set&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-setvvalues-arrayt",level:3},{value:"<code>new ReadonlySet&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-readonlysetvvalues-arrayt",level:3},{value:"<code>new WeakSet&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-weaksetvvalues-arrayt",level:3},{value:"<code>new Promise&lt;T&gt;()</code>",id:"new-promiset",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"new-arraytlength-number-value-t",children:(0,n.jsx)(t.code,{children:"new Array<T>(length?: number, value?: T)"})}),"\n",(0,n.jsxs)(t.p,{children:["Creates a new ",(0,n.jsx)(t.code,{children:"Array<T>"})," type with the given preallocated length and pre-filled with ",(0,n.jsx)(t.code,{children:"value"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Compiles to either a table literal or a ",(0,n.jsx)(t.code,{children:"table.create()"})," call in Luau."]}),"\n",(0,n.jsx)(t.h3,{id:"new-mapk-ventries-arrayk-v",children:(0,n.jsx)(t.code,{children:"new Map<K, V>(entries?: Array<[K, V]>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Creates a new ",(0,n.jsx)(t.code,{children:"Map<K, V>"})," type pre-filled with the entries given as the argument if provided."]}),"\n",(0,n.jsx)(t.p,{children:"Compiles to a table literal."}),"\n",(0,n.jsx)(t.h3,{id:"new-readonlymapk-ventries-arrayk-v",children:(0,n.jsx)(t.code,{children:"new ReadonlyMap<K, V>(entries?: Array<[K, V]>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Same as ",(0,n.jsx)(t.code,{children:"new Map<K, V>"}),", but creates a ",(0,n.jsx)(t.code,{children:"ReadonlyMap<K, V>"})," type instead."]}),"\n",(0,n.jsx)(t.h3,{id:"new-weakmapk-ventries-arrayk-v",children:(0,n.jsx)(t.code,{children:"new WeakMap<K, V>(entries?: Array<[K, V]>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Same as ",(0,n.jsx)(t.code,{children:"new Map<K, V>"}),", but creates a ",(0,n.jsx)(t.code,{children:"WeakMap<K, V>"})," type instead."]}),"\n",(0,n.jsxs)(t.p,{children:["Compiles using ",(0,n.jsx)(t.code,{children:'setmetatable({}, { __mode = "k" })'}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"new-setvvalues-arrayt",children:(0,n.jsx)(t.code,{children:"new Set<V>(values?: Array<T>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Creates a new ",(0,n.jsx)(t.code,{children:"Set<V>"})," type pre-filled with the values given as the argument if provided."]}),"\n",(0,n.jsx)(t.p,{children:"Compiles to a table literal."}),"\n",(0,n.jsx)(t.h3,{id:"new-readonlysetvvalues-arrayt",children:(0,n.jsx)(t.code,{children:"new ReadonlySet<V>(values?: Array<T>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Same as ",(0,n.jsx)(t.code,{children:"new Set<V>"}),", but creates a ",(0,n.jsx)(t.code,{children:"ReadonlySet<V>"})," type instead."]}),"\n",(0,n.jsx)(t.h3,{id:"new-weaksetvvalues-arrayt",children:(0,n.jsx)(t.code,{children:"new WeakSet<V>(values?: Array<T>)"})}),"\n",(0,n.jsxs)(t.p,{children:["Same as ",(0,n.jsx)(t.code,{children:"new Set<V>"}),", but creates a ",(0,n.jsx)(t.code,{children:"WeakSet<V>"})," type instead."]}),"\n",(0,n.jsxs)(t.p,{children:["Compiles using ",(0,n.jsx)(t.code,{children:'setmetatable({}, { __mode = "k" })'}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"new-promiset",children:(0,n.jsx)(t.code,{children:"new Promise<T>()"})}),"\n",(0,n.jsxs)(t.p,{children:["Creates a new ",(0,n.jsx)(t.code,{children:"Promise<T>"})," type. You can find documentation for the promise library that comes bundled with roblox-ts ",(0,n.jsx)(t.a,{href:"https://eryn.io/roblox-lua-promise/",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,t,r)=>{r.d(t,{I:()=>o,M:()=>l});var n=r(1504);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);