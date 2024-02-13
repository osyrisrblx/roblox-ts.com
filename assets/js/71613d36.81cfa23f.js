"use strict";(self.webpackChunkroblox_ts=self.webpackChunkroblox_ts||[]).push([[448],{7395:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=o(7624),s=o(2172);o(1504);const r=()=>(0,n.jsx)("div",{style:{width:100,fontSize:"32px",marginTop:"-20px"},children:(0,n.jsx)("center",{children:"\u2b07\ufe0f"})}),i={title:"Syncing with Rojo"},l=void 0,c={id:"guides/syncing-with-rojo",title:"Syncing with Rojo",description:"Introduction",source:"@site/docs/guides/syncing-with-rojo.mdx",sourceDirName:"guides",slug:"/guides/syncing-with-rojo",permalink:"/roblox-ts.com/docs/guides/syncing-with-rojo",draft:!1,unlisted:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/syncing-with-rojo.mdx",tags:[],version:"current",frontMatter:{title:"Syncing with Rojo"},sidebar:"docs",previous:{title:"Utility Types",permalink:"/roblox-ts.com/docs/api/utility-types"},next:{title:"Callbacks vs Methods",permalink:"/roblox-ts.com/docs/guides/callbacks-vs-methods"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Customization",id:"customization",level:2},{value:"Example",id:"example",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["The role of roblox-ts is to turn TypeScript (",(0,n.jsx)(t.code,{children:".ts"}),") files into Luau files (",(0,n.jsx)(t.code,{children:".lua"}),"). That alone isn't very useful! You need to move the files into Roblox Studio to be able to use them for a game, plugin, model, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["To do this, you can use ",(0,n.jsx)(t.a,{href:"https://rojo.space/",children:"Rojo"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"Rojo takes files from your local filesystem and will either:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["turn them into a single Roblox file (",(0,n.jsx)(t.code,{children:".rbxm"}),", ",(0,n.jsx)(t.code,{children:".rbxl"}),", ",(0,n.jsx)(t.code,{children:".rbxmx"}),", or ",(0,n.jsx)(t.code,{children:".rbxlx"}),") via ",(0,n.jsx)(t.code,{children:"rojo build"})]}),"\n",(0,n.jsxs)(t.li,{children:["sync them into an open Roblox Studio session via ",(0,n.jsx)(t.code,{children:"rojo serve"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Rojo uses a ",(0,n.jsx)(t.code,{children:"default.project.json"})," file to describe how files should be organized within a Roblox file."]}),"\n",(0,n.jsx)(t.admonition,{title:"Heads up!",type:"note",children:(0,n.jsxs)(t.p,{children:["Your ",(0,n.jsx)(t.code,{children:"default.project.json"})," file should have all ",(0,n.jsx)(t.code,{children:'"$path"'})," fields relative to your ",(0,n.jsx)(t.code,{children:"outDir"})," (which is the ",(0,n.jsx)(t.code,{children:'"out"'})," folder by default)."]})}),"\n",(0,n.jsx)(t.p,{children:"The workflow should look like this:"}),"\n","\n","\n",(0,n.jsx)("div",{className:"card",style:{fontSize:"20px",width:"350px"},children:(0,n.jsx)("div",{className:"card__body",children:(0,n.jsxs)("center",{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:".ts"})," files in ",(0,n.jsx)(t.code,{children:"src"})]}),(0,n.jsx)(r,{}),(0,n.jsxs)(t.p,{children:["roblox-ts via ",(0,n.jsx)(t.code,{children:"rbxtsc"})]}),(0,n.jsx)(r,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:".lua"})," files in ",(0,n.jsx)(t.code,{children:"out"})]}),(0,n.jsx)(r,{}),(0,n.jsxs)(t.p,{children:["Rojo via ",(0,n.jsx)(t.code,{children:"rojo build"})," or ",(0,n.jsx)(t.code,{children:"rojo serve"})]}),(0,n.jsx)(r,{}),(0,n.jsxs)(t.p,{children:["Roblox Studio ","\ud83c\udf89"]})]})})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.p,{children:["roblox-ts will use your ",(0,n.jsx)(t.code,{children:"project.json"})," file to understand how TypeScript (",(0,n.jsx)(t.code,{children:".ts"}),") files eventually end up inside of Roblox Studio. This is primarily used for compiling import statements."]}),"\n",(0,n.jsxs)(t.p,{children:["To use a different ",(0,n.jsx)(t.code,{children:"project.json"})," file instead of ",(0,n.jsx)(t.code,{children:"default.project.json"})," for compiling, you can use the ",(0,n.jsx)(t.code,{children:"--rojo"})," flag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"rbxtsc --rojo other.project.json\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customization",children:"Customization"}),"\n",(0,n.jsx)(t.p,{children:"Like any other Rojo project, you can organize a roblox-ts project however you'd like with a few restrictions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"include"})," folder and ",(0,n.jsx)(t.code,{children:"node_modules"})," folder must be in a place that is visible to both the client and server"]}),"\n",(0,n.jsxs)(t.li,{children:["All ",(0,n.jsx)(t.code,{children:'"$path"'})," fields should be relative to your ",(0,n.jsx)(t.code,{children:"outDir"})," (which is the ",(0,n.jsx)(t.code,{children:'"out"'})," folder by default)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"default.project.json"})," file should look something like this (truncated):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n\t"name": "roblox-ts-game",\n\t"tree": {\n\t\t"$className": "DataModel",\n\t\t"ServerScriptService": {\n\t\t\t"$className": "ServerScriptService",\n\t\t\t"TS": {\n\t\t\t\t"$path": "out/server" // server folder goes in ServerScriptService.TS\n\t\t\t}\n\t\t},\n\t\t"ReplicatedStorage": {\n\t\t\t"$className": "ReplicatedStorage",\n\t\t\t// this _must_ stay the same (except for the name)\n\t\t\t"rbxts_include": {\n\t\t\t\t"$path": "include",\n\t\t\t\t"node_modules": {\n\t\t\t\t\t"$path": "node_modules/@rbxts"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"TS": {\n\t\t\t\t"$path": "out/shared" // shared folder goes in ReplicatedStorage.TS\n\t\t\t}\n\t\t},\n\t\t"StarterPlayer": {\n\t\t\t"$className": "StarterPlayer",\n\t\t\t"StarterPlayerScripts": {\n\t\t\t\t"$className": "StarterPlayerScripts",\n\t\t\t\t"TS": {\n\t\t\t\t\t"$path": "out/client" // client folder goes in StarterPlayer.StarterPlayerScripts.TS\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/roblox-ts/roblox-ts/blob/master/templates/game/default.project.json",children:"You can find the full version here."})}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Suppose you wanted to add scripts to ",(0,n.jsx)(t.code,{children:"StarterPlayer.StarterCharacterScripts"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To do this, we'll need to add a folder to ",(0,n.jsx)(t.code,{children:"src"})," (so that when we compile it will have a matching folder in ",(0,n.jsx)(t.code,{children:"out"}),"). We'll call this ",(0,n.jsx)(t.code,{children:"src/character"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, we need to update our ",(0,n.jsx)(t.code,{children:"default.project.json"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"StarterPlayer": {\n\t"$className": "StarterPlayer",\n\t"StarterPlayerScripts": {\n\t\t"$className": "StarterPlayerScripts",\n\t\t"TS": {\n\t\t\t"$path": "out/client"\n\t\t}\n\t},\n\t// highlight-start\n\t"StarterCharacterScripts": {\n\t\t"$className": "StarterCharacterScripts",\n\t\t"TS": {\n\t\t\t"$path": "out/character"\n\t\t}\n\t}\n\t// highlight-end\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>l,M:()=>i});var n=o(1504);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);