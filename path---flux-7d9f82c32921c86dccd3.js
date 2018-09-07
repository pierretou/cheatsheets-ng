webpackJsonp([0xced3a7a9fa2c],{858:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Architecture"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Dispatchers"}]},{type:"text",value:" receive "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"actions"}]},{type:"text",value:" that get dispatched to its listeners."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Stores"}]},{type:"text",value:" are objects that store data, usually changed from a dispatcher listener."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Views"}]},{type:"text",value:" are React components that listen to Store changes, or emit "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"actions"}]},{type:"text",value:" to the dispatcher."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Dispatcher"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pub-sub"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://facebook.github.io/flux/docs/dispatcher.html"},children:[{type:"text",value:"A dispatcher"}]},{type:"text",value:" emits events ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".dispatch()"}]},{type:"text",value:") to its listeners ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".register(fn)"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var Dispatcher = require('flux').Dispatcher\n\nd = new Dispatcher()\n\n// send\nd.dispatch({ action: 'edit' /*...*/ })\n\n// receive\ntoken = d.register(payload => {\n  // payload.action === 'edit'\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ensuring proper order"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With multiple listeners, you can ensure one is fired after another using "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".waitFor()"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"token1 = d.register(/*...*/)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"token2 = d.register(payload => {\n  // ensure receiver 1 is fired before this\n  d.waitFor([token1])\n\n  // process here\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Subclassing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},children:[{type:"text",value:"Object.assign"}]},{type:"text",value:" is the preferred way to subclass Dispatcher (think "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$.extend"}]},{type:"text",value:")."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nYou can also make "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"action creators"}]},{type:"text",value:", which are shortcuts for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dispatch()"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var Dispatcher = require('flux').Dispatcher\nvar assign = require('object-assign')\n\nvar AppDispatcher = assign({}, Dispatcher.prototype, {\n  // action creator\n  handleViewAction(action) {\n    this.dispatch({\n      source: 'VIEW_ACTION',\n      action: action\n    })\n  }\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Stores"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Plain objects"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Stores are just like objects."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var TodoStore = { list: [] }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sometimes they're eventemitters, too. Usually it's used to emit "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"change"}]},{type:"text",value:" events for views to pick up."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var TodoStore = assign({}, EventEmitter.prototype, {\n  /*...*/\n});\n\nTodoStore.emit('change');\nTodoStore.on('change', function () { ... });\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Model logic"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Logic can sometimes belong in stores."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{\n  isAllActive() {\n    return this.list.every(item => item.active);\n  }\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Stores and dispatchers"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Instantiate"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make a Dispatcher and Stores."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const d = new Dispatcher()\nconst TabStore = { tab: 'home' }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Updating data"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Dispatch events to alter the store."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"d.dispatch({ action: 'tab.change', tab: 'timeline' })\n\nd.register(function(data) {\n  if (data.action === 'tab.change') {\n    TabStore.tab = data.tab\n  }\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"With Views"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Listen to dispatchers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"class TodoApp extends React.Component {\n  componentDidMount() {\n    this.token = AppDispatcher.register(payload => {\n      switch (payload.action) {\n        case 'tab.change':\n          this.render()\n        // ...\n      }\n    })\n  },\n\n  componentDidUnmount() {\n    AppDispatcher.unregister(this.token)\n  }\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Views (React Components) can listen to Dispatchers."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Listen to Stores"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"class MyComponent extends ReactComponent {\n  componentDidMount() {\n    TodoStore.on('change', this.onChange)\n  }\n\n  componentDidUnmount() {\n    TodoState.removeListener('change', this.onChange)\n  }\n\n  onChange(data) {\n    // ...\n  }\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"...or to Stores's "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"change"}]},{type:"text",value:" events."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Also see"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://facebook.github.io/flux/docs/dispatcher.html"},children:[{type:"text",value:"Dispatcher API"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"react.html"},children:[{type:"text",value:"React cheatsheet"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/facebook/flux/blob/master/src/Dispatcher.js"},children:[{type:"text",value:"Dispatcher.js source"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/facebook/flux/tree/master/examples/flux-todomvc"},children:[{type:"text",value:"Flux-todomvc explanation"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Flux architecture",category:"React",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /redux",context:{nodePath:"/redux",category:"React",title:"Redux"}}},{node:{id:"SitePage /enzyme@2",context:{nodePath:"/enzyme@2",category:"React",title:"Enzyme v2"}}},{node:{id:"SitePage /enzyme",context:{nodePath:"/enzyme",category:"React",title:"Enzyme"}}},{node:{id:"SitePage /awesome-redux",context:{nodePath:"/awesome-redux",category:"React",title:"Awesome Redux"}}},{node:{id:"SitePage /react-router",context:{nodePath:"/react-router",category:"React",title:"React-router"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/flux.md absPath of file >>> MarkdownRemark",nodePath:"/flux",nodeType:"sheet",title:"Flux architecture",category:"React",weight:0,updated:null}}}});
//# sourceMappingURL=path---flux-7d9f82c32921c86dccd3.js.map