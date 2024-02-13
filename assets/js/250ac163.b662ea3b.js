"use strict";(self.webpackChunkroblox_ts=self.webpackChunkroblox_ts||[]).push([[208],{5036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(7624),a=s(2172);const r={title:"Roblox API"},c=void 0,i={id:"api/roblox-api",title:"Roblox API",description:"roblox-ts provides typings for the Roblox API which are partially handwritten and partially automatically generated.",source:"@site/docs/api/roblox-api.mdx",sourceDirName:"api",slug:"/api/roblox-api",permalink:"/roblox-ts.com/docs/api/roblox-api",draft:!1,unlisted:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/api/roblox-api.mdx",tags:[],version:"current",frontMatter:{title:"Roblox API"},sidebar:"docs",previous:{title:"FAQ",permalink:"/roblox-ts.com/docs/faq"},next:{title:"Constructors",permalink:"/roblox-ts.com/docs/api/constructors"}},l={},o=[{value:"Values",id:"values",level:2},{value:"Globals",id:"globals",level:3},{value:"Constructors",id:"constructors",level:3},{value:"nil",id:"nil",level:3},{value:"Types",id:"types",level:2},{value:"Provided Types",id:"provided-types",level:3},{value:"RemoteEvent Types",id:"remoteevent-types",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Utility Interfaces",id:"utility-interfaces",level:2},{value:"Services",id:"services",level:3},{value:"CreatableInstances",id:"creatableinstances",level:3},{value:"AbstractInstances",id:"abstractinstances",level:3},{value:"Instances",id:"instances",level:3},{value:"Usage with Generics",id:"usage-with-generics",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"roblox-ts provides typings for the Roblox API which are partially handwritten and partially automatically generated."}),"\n",(0,t.jsx)(n.p,{children:"In general, everything from the Roblox API is available for use, unless it is deprecated or conflicts with TypeScript."}),"\n",(0,t.jsx)(n.h2,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h3,{id:"globals",children:"Globals"}),"\n",(0,t.jsx)(n.p,{children:"All global values from the Roblox API are present in roblox-ts typings."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'print("Hello World!");\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const zero = math.sin(math.pi);\n"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'coroutine.wrap(() => {\n    print("A");\n    wait(1);\n    print("B");\n})();\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"You can find a list of available globals on the Roblox Developer Hub:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/Lua-Globals",children:"Lua Globals"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/Roblox-Globals",children:"Roblox Globals"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/bit32",children:"bit32"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/coroutine",children:"coroutine"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/debug",children:"debug"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/math",children:"math"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/os",children:"os"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/string",children:"string"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/table",children:"table"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/task",children:"task"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.roblox.com/api-reference/lua-docs/utf8",children:"utf8"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Parts of ",(0,t.jsx)(n.code,{children:"table"})," and ",(0,t.jsx)(n.code,{children:"string"})," have been intentionally omitted."]}),"\n",(0,t.jsx)(n.h3,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".new()"})," functions (like ",(0,t.jsx)(n.code,{children:"Vector3.new()"})," or ",(0,t.jsx)(n.code,{children:"CFrame.new()"}),") should instead be called with the ",(0,t.jsx)(n.code,{children:"new"})," operator."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"new T(...)"})," will always compile to ",(0,t.jsx)(n.code,{children:"T.new(...)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const v3 = new Vector3(1, 2, 3); // compiles to Vector3.new(1, 2, 3)\nprint(v3.X, v3.Y, v3.Z); // 1 2 3\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const part = new Instance("Part");\nprint(part.Color);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"nil",children:"nil"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"undefined"})," is a direct replacement for ",(0,t.jsx)(n.code,{children:"nil"}),". It can be used both as a type and a value."]}),"\n",(0,t.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,t.jsx)(n.h3,{id:"provided-types",children:"Provided Types"}),"\n",(0,t.jsxs)(n.p,{children:["Every Roblox class (",(0,t.jsx)(n.code,{children:"Instance"}),", ",(0,t.jsx)(n.code,{children:"Part"}),", ",(0,t.jsx)(n.code,{children:"Humanoid"}),", ",(0,t.jsx)(n.code,{children:"Workspace"}),", etc.) is provided as a global/ambient type. You can use these types to describe variables, function parameters, function return types, and just about anything else in your code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// note: The type Part could be inferred here if not provided\nconst part: Part = new Instance("Part");\nprint(part.Size);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function takesBasePart(basePart: BasePart) {\n    return basePart.Size.X + basePart.Size.Y + basePart.Size.Z;\n}\n\n// we can use any type which inherits from BasePart!\ntakesBasePart(new Instance("Seat"));\ntakesBasePart(new Instance("Part"));\ntakesBasePart(new Instance("WedgePart"));\n\n// Humanoid does not inherit from BasePart, so this will error!\n// takesBasePart(new Instance("Humanoid"));\n'})}),"\n",(0,t.jsx)(n.h3,{id:"remoteevent-types",children:"RemoteEvent Types"}),"\n",(0,t.jsxs)(n.p,{children:["New roblox-ts users are usually confused why ",(0,t.jsx)(n.code,{children:"RemoteEvent.OnServerEvent"})," only allows ",(0,t.jsx)(n.code,{children:"unknown"})," arguments."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const remoteEvent = new Instance("RemoteEvent");\n\n// this works fine\nremoteEvent.OnClientEvent.Connect((points: number) => {});\n\n// changing unknown to number causes an error!\nremoteEvent.OnServerEvent.Connect((player: Player, points: unknown) => {});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The reason for this is because client-to-server networking ",(0,t.jsx)(n.em,{children:"cannot"})," be trusted. Exploiters or cheaters in your game can fire your RemoteEvent functions with whatever data they want."]}),"\n",(0,t.jsxs)(n.p,{children:["If your code is expecting ",(0,t.jsx)(n.code,{children:"points"})," to be a ",(0,t.jsx)(n.code,{children:"number"}),", but the client sends a ",(0,t.jsx)(n.code,{children:"nil"})," value, the server will error. By sending a large number of requests very quickly which result in errors, an exploiter could crash your game server and disconnect all of your players."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead, you should assume your inputs can be any possible value and validate the type at runtime using the ",(0,t.jsx)(n.code,{children:"typeIs"})," macro:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const remoteEvent = new Instance("RemoteEvent");\n\nremoteEvent.OnServerEvent.Connect((player: Player, points: unknown) => {\n\tif (!typeIs(points, "number")) {\n\t\treturn;\n\t}\n\t// do something with points\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can also verify the arguments with a type validation package like ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@rbxts/t",children:(0,t.jsx)(n.code,{children:"@rbxts/t"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, the community has created a few networking libraries which make the experience much nicer!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@rbxts/net",children:"@rbxts/net"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@rbxts/networked-signals",children:"@rbxts/networked-signals"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@rbxts/remo",children:"@rbxts/remo"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"exceptions",children:"Exceptions"}),"\n",(0,t.jsx)(n.p,{children:"Deprecated types are usually not provided. Exceptions to this rule are made for API members which do not have a non-deprecated functional equivalent."}),"\n",(0,t.jsxs)(n.p,{children:["One notable exception: ",(0,t.jsx)(n.code,{children:"Instance.Changed"})," is not provided as it conflicts with inheritance. Usually, you want to use ",(0,t.jsx)(n.code,{children:"Instance.GetPropertyChangedSignal()"})," instead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Workspace } from "@rbxts/services";\nWorkspace.GetPropertyChangedSignal("DistributedGameTime").Connect(() => {\n\tprint(Workspace.DistributedGameTime);\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you ",(0,t.jsx)(n.em,{children:"must"})," use ",(0,t.jsx)(n.code,{children:"Instance.Changed"}),", you can workaround this by asserting an intersection type with ",(0,t.jsx)(n.code,{children:"ChangedSignal"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function foo(part: Part) {\n    (part as Part & ChangedSignal).Changed.Connect(name => {})\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"utility-interfaces",children:"Utility Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"There are a few key global interfaces which make manipulating types easier:"}),"\n",(0,t.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Services"})," is an interface consisting of a mapping of string name to type for every Roblox service which you can fetch with ",(0,t.jsx)(n.code,{children:'game:GetService("ServiceName")'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Services {\n\tAnalyticsService: AnalyticsService;\n\tAppUpdateService: AppUpdateService;\n\tAssetCounterService: AssetCounterService;\n\tAssetDeliveryProxy: AssetDeliveryProxy;\n\t// ... many more services!\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can get a union of all service names with ",(0,t.jsx)(n.code,{children:"keyof Services"}),".\nAnd you can get a union of all service types with ",(0,t.jsx)(n.code,{children:"Services[keyof Services]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type AllServiceNames = keyof Services;\ntype AllServices = Services[keyof Services];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"creatableinstances",children:"CreatableInstances"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CreatableInstances"})," is an interface consisting of a mapping of string name to type for every Roblox instance which can be created with ",(0,t.jsx)(n.code,{children:'Instance.new("ClassName")'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface CreatableInstances {\n\tAccessory: Accessory;\n\tAccoutrement: Accoutrement;\n\tActor: Actor;\n\tAlignOrientation: AlignOrientation;\n\t// ... many more instances!\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can get a union of all creatable instance names with ",(0,t.jsx)(n.code,{children:"keyof CreatableInstances"}),".\nAnd you can get a union of all creatable instance types with ",(0,t.jsx)(n.code,{children:"CreatableInstances[keyof CreatableInstances]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type AllCreatableInstanceNames = keyof CreatableInstances;\ntype AllCreatableInstances = CreatableInstances[keyof CreatableInstances];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"abstractinstances",children:"AbstractInstances"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AbstractInstances"})," is an interface consisting of a mapping of string name to type for every Roblox instance which will ",(0,t.jsx)(n.em,{children:"never"})," be created. Generally, these are useful for functions that check inheritance like ",(0,t.jsx)(n.code,{children:'Instance:IsA("ClassName")'}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface AbstractInstances {\n\tBackpackItem: BackpackItem;\n\tBasePart: BasePart;\n\tBasePlayerGui: BasePlayerGui;\n\tBaseScript: BaseScript;\n\t// ... many more instances!\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can get a union of all abstract instance names with ",(0,t.jsx)(n.code,{children:"keyof AbstractInstances"}),".\nAnd you can get a union of all abstract instance types with ",(0,t.jsx)(n.code,{children:"AbstractInstances[keyof AbstractInstances]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type AllAbstractInstanceNames = keyof AbstractInstances;\ntype AllAbstractInstances = AbstractInstances[keyof AbstractInstances];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"instances",children:"Instances"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Instances"})," is an interface consisting of a mapping of string name to type for every Roblox instance. It inherits from ",(0,t.jsx)(n.code,{children:"Services"}),", ",(0,t.jsx)(n.code,{children:"CreatableInstances"}),", and ",(0,t.jsx)(n.code,{children:"AbstractInstances"}),". ",(0,t.jsx)(n.code,{children:"Instances"})," and also includes any type of Instance which:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["cannot be created with ",(0,t.jsx)(n.code,{children:'Instance.new("ClassName")'})]}),"\n",(0,t.jsxs)(n.li,{children:["cannot be fetched with ",(0,t.jsx)(n.code,{children:'game:GetService("ServiceName")'})]}),"\n",(0,t.jsxs)(n.li,{children:["but ",(0,t.jsx)(n.em,{children:"can"})," be given a reference to"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DataModel"})," is a class that cannot be created or fetched with GetService, but is given by the ",(0,t.jsx)(n.code,{children:"game"})," global value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AnimationTrack"})," can only be given a reference to via ",(0,t.jsx)(n.code,{children:":LoadAnimation()"})," from ",(0,t.jsx)(n.code,{children:"Humanoid"})," or ",(0,t.jsx)(n.code,{children:"AnimationTrack"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Instances extends Services, CreatableInstances, AbstractInstances {\n\tAnimationTrack: AnimationTrack;\n\tBaseWrap: BaseWrap;\n\tCatalogPages: CatalogPages;\n\tDataModel: DataModel;\n\t// ... many more instances!\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can get a union of all instance names with ",(0,t.jsx)(n.code,{children:"keyof Instances"}),".\nAnd you can get a union of all instance types with ",(0,t.jsx)(n.code,{children:"Instances[keyof Instances]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type AllInstanceNames = keyof Instances;\ntype AllInstances = Instances[keyof Instances];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"usage-with-generics",children:"Usage with Generics"}),"\n",(0,t.jsx)(n.p,{children:"You can use any of these utility interfaces with generic functions. This is useful for taking an argument string and returning a matching instance type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Workspace } from "@rbxts/services";\n\nfunction getDescendantsWhichIsA<T extends keyof Instances>(parent: Instance, className: T): Instances[T][] {\n\treturn parent.GetDescendants().filter((descendant): descendant is Instances[T] => descendant.IsA(className));\n}\n\nconst humanoidsInWorkspace: Array<Humanoid> = getDescendantsWhichIsA(Workspace, "Humanoid");\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>i,M:()=>c});var t=s(1504);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);