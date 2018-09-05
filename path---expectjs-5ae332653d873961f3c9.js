webpackJsonp([0xdc316eb4bb72],{837:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install --save-dev expect\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// using ES6 modules\nimport expect, { createSpy, spyOn, isSpy } from 'expect'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// using CommonJS modules\nvar expect = require('expect')\nvar createSpy = expect.createSpy\nvar spyOn = expect.spyOn\nvar isSpy = expect.isSpy\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Expect is a library for assertions in tests.\nSee: "},{type:"element",tagName:"a",properties:{href:"https://github.com/mjackson/expect"},children:[{type:"text",value:"mjackson/expect"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Assertions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(x).toBe(y)\n  .toBe(val)\n  .toEqual(val)\n  .toThrow(err)\n  .toExist()          // aka: toBeTruthy()\n  .toNotExist()       // aka: toBeFalsy()\n  .toBeA(constructor)\n  .toBeA('string')\n  .toMatch(/expr/)\n  .toBeLessThan(n)\n  .toBeGreaterThan(n)\n  .toBeLessThanOrEqualTo(n)\n  .toBeGreaterThanOrEqualTo(n)\n  .toInclude(val)     // aka: toContain(val)\n  .toExclude(val)\n  .toIncludeKey(key)\n  .toExcludeKey(key)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"toNotBe"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"toNotEqual"}]},{type:"text",value:", etc for negatives."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Chaining assertions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(3.14)\n  .toExist()\n  .toBeLessThan(4)\n  .toBeGreaterThan(3)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Assertions can be chained."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Spies"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const video = {\n  play: function () { ··· }\n}\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"spy = expect.spyOn(video, 'play')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"spy = expect.spyOn(···)\n  .andCallThrough()      // pass through\n  .andCall(fn)\n  .andThrow(exception)\n  .andReturn(value)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Assertions on spies"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(spy.calls.length).toEqual(1)\nexpect(spy.calls[0].context).toBe(video)\nexpect(spy.calls[0].arguments).toEqual([ 'some', 'args' ])\nexpect(spy.getLastCall().arguments).toEqual(...)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(spy).toHaveBeenCalled()\nexpect(spy).toHaveBeenCalledWith('some', 'args')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/expect"},children:[{type:"text",value:"https://www.npmjs.com/package/expect"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/mjackson/expect"},children:[{type:"text",value:"https://github.com/mjackson/expect"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"expect.js",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/expectjs.md absPath of file >>> MarkdownRemark",nodePath:"/expectjs",nodeType:"sheet",title:"expect.js",category:"JavaScript libraries",weight:-1,updated:"2017-09-02T00:00:00.000Z"}}}});
//# sourceMappingURL=path---expectjs-5ae332653d873961f3c9.js.map