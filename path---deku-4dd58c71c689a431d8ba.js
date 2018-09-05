webpackJsonp([0xa801d1859022],{814:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Components"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/** @jsx element */\nimport { element } from 'deku'\n\nfunction render ({ props, children, context, path }) {\n  // props    = properties object\n  // children = children array\n  // path     = path to current component (like 0.1.5.2)\n  // context  = common properties in all components\n  return (\n    <div class='App' hidden={props.hidden} color={context.theme.color}>\n      {children}\n    </div>\n  }\n}\n\nfunction onCreate ({ props, dispatch, path }) { ... }\nfunction onUpdate ({ props, dispatch, path }) { ... }\nfunction onRemove ({ props, dispatch, path }) { ... }\n// actually { children, props, path, context }\n\nexport default { render, onCreate, onRemove }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Rendering"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { createStore } from 'redux'\nimport { dom, element } from 'deku'\n\n// Create a Redux store to handle all UI actions and side-effects\nlet store = createStore(reducer)\n\n// Create a renderer that can turn vnodes into real DOM elements\nlet render = createRenderer(document.body, store.dispatch)\n\n// Update the page and add redux state to the context\nrender(\n  <MyButton>Hello World!</MyButton>,\n  store.getState()\n  )\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Deku v2",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/deku.md absPath of file >>> MarkdownRemark",nodePath:"/deku",nodeType:"sheet",title:"Deku v2",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---deku-4dd58c71c689a431d8ba.js.map