webpackJsonp([0xe7ebc452c5b8],{786:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Assert"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const { assert } = require('chai')\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert(val)\nassert.fail(actual, expected)\nassert.ok(val)                        // is truthy\nassert.equal(actual, expected)        // compare with ==\nassert.strictEqual(actual, expected)  // compare with ===\nassert.deepEqual(actual, expected)    // deep equal check\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert.isTrue(val)\nassert.isFalse(val)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert.isNull(val)\nassert.isNotNull(val)\nassert.isUndefined(val)\nassert.isDefined(val)\nassert.isFunction(val)\nassert.isObject(val)\nassert.isArray(val)\nassert.isString(val)\nassert.isNumber(val)\nassert.isBoolean(val)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert.typeOf(/tea/, 'regexp') // Object.prototype.toString()\nassert.instanceOf(chai, Tea)\nassert.include([ a,b,c ], a)\nassert.match(val, /regexp/)\nassert.property(obj, 'tea') // 'tea' in object\nassert.deepProperty(obj, 'tea.green')\nassert.propertyVal(person, 'name', 'John')\nassert.deepPropertyVal(post, 'author.name', 'John')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert.lengthOf(object, 3)\nassert.throws(function() { ... })\nassert.throws(function() { ... }, /reference error/)\nassert.doesNotThrow\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"assert.operator(1, '<', 2)\nassert.closeTo(actual, expected)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://chaijs.com/api/assert/"},children:[{type:"text",value:"Assert API"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(chaijs.com)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"BDD syntax"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const { expect } = require('chai')\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(object)\n  .to.equal(expected)\n  .to.eql(expected)        // deep equality\n  .to.deep.equal(expected) // same as .eql\n  .to.be.a('string')\n  .to.include(val)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .be.ok(val)\n  .be.true\n  .be.false\n  .to.exist\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .to.be.null\n  .to.be.undefined\n  .to.be.empty\n  .to.be.arguments\n  .to.be.function\n  .to.be.instanceOf\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .to.be.gt(5)  // aka: .above .greaterThan\n  .to.be.gte(5) // aka: .at.least\n  .to.be.lt(5)  // aka: .below\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .to.respondTo('bar')\n  .to.satisfy((n) => n > 0)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .to.have.members([2, 3, 4])\n  .to.have.keys(['foo'])\n  .to.have.key('foo')\n  .to.have.lengthOf(3)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(() => { ··· })\n  .to.throw(/not a function/)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://chaijs.com/api/bdd/"},children:[{type:"text",value:"BDD"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(chaijs.com)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Should: chains"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".to .be .been .is .that .and .have .with .at .of .same\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These don't do anything and can be chained."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Should not"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(object).not.equal('x')\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Chai with jQuery"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using chai-jquery"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"global.jQuery = ···\nchai.use(require('chai-jquery'))\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect($body)\n  .have.attr('foo')\n  .have.prop('disabled')\n  .have.css('background')\n  .have.css('background-color', '#ffffff')\n  .have.data('foo')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .have.class('active')\n  .have.id('id')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .have.html('<em>hi</em>')\n  .have.text('hello')\n  .have.value('2013')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Continued"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect($body)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .be.visible\n  .be.hidden\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .be.checked\n  .be.selected\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .be.enabled\n  .be.disabled\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  .be.empty\n  .to.exist\n  .to.contain('text')\n  .to.have('.selector')\n"}]}]}]},frontmatter:{title:"Chai.js",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}},{node:{id:"SitePage /bluebird",context:{nodePath:"/bluebird",category:"JavaScript libraries",title:"bluebird.js"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/chai.md absPath of file >>> MarkdownRemark",nodePath:"/chai",nodeType:"sheet",title:"Chai.js",category:"JavaScript libraries",weight:-3,updated:"2017-08-30T00:00:00.000Z"}}}});
//# sourceMappingURL=path---chai-845f084c7691bf93a830.js.map