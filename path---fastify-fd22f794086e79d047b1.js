webpackJsonp([0xdfc1e8bb99dd],{842:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hello world"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const fastify = require('fastify')()\n\nfastify.get('/', (req, reply) => {\n  reply.send({ hello: 'world' })\n})\n\nfastify.listen(3000, err => {\n  if (err) throw err\n  const port = fastify.server.address().port\n  console.log(`server listening on ${port}`)\n})\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Plugins"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"app.js"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.register(require('./route'))\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"route.js"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function (fastify, opts, next) {\n  fastify.get('/', (req, reply) => {\n    reply.send({ hello: 'world' })\n  })\n\n  next()\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Compose your app functionality into plugins. Plugins are simply functions."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Plugins.md"},children:[{type:"text",value:"Plugins"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Routes"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Writing routes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.route({\n  method: 'GET',\n  url: '/',\n  schema: { ··· },\n  handler: (req, reply) => { ··· }\n  beforeHandler: (req, reply, done) => { ··· }\n})\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Shorthand declarations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.get(path, [options], handler)\nfastify.head(···)\nfastify.post(···)\nfastify.put(···)\nfastify.delete(···)\nfastify.options(···)\nfastify.patch(···)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Async/await"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.get('/', options, async (req, reply) => {\n  return data\n  // or\n  reply.send(data)\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When using async functions, you can either "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"return"}]},{type:"text",value:" data or use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"reply.send"}]},{type:"text",value:"."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Request/reply"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Request"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"request.query\nrequest.body\nrequest.params\nrequest.headers\nrequest.req // Node.js core\nrequest.log.info('hello')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Request.md"},children:[{type:"text",value:"Request"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reply"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Response headers"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"reply.code(404)\nreply.header('Content-Type', 'text/html')\nreply.type('text/html')\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Redirects"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"reply.redirect('/foo')\nreply.redirect(302, '/foo')\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Sending"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"reply.send(payload)\nreply.sent // → true|false\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Reply.md"},children:[{type:"text",value:"Reply"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"JSON schema"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Define a JSON schema"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const schema = {\n  querystring: {\n    name: { type: 'string' },\n    excitement: { type: 'integer' }\n  },\n  response: {\n    200: {\n      type: 'object',\n      properties: {\n        hello: { type: 'string' }\n      }\n    }\n  }\n}\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Pass it to the route"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.get('/', { schema }, (req, reply) => {\n  ···\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"or (same as above)"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.route({\n  method: 'GET',\n  url: '/',\n  schema,\n  handler: (req, reply) => { ··· }\n})\n"}]}]},{type:"comment",value:' {data-line="4"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"By defining a JSON schema, you get validation and improved performance."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Validation-And-Serialize.md"},children:[{type:"text",value:"Validation and serialize"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Plugins"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"With function"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.register(require('./route'), err => {\n  if (err) throw err\n})\n"}]}]},{type:"comment",value:' {data-line="3"} '},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"route.js"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"module.exports = (fastify, options, next) => {\n  fastify.get('/', ···)\n  next()\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md#register"},children:[{type:"text",value:"Register"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.register(\n  [require('./another-route'), require('./yet-another-route')],\n  opts,\n  err => {\n    if (err) throw err\n  }\n)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can pass arrays to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"register()"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Register with prefix"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.register(require('./route'), { prefix: '/v1' })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This prefixes all routes in that module."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Helmet"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const helmet = require('fastify-helmet')\n\nfastify.register(helmet)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify-helmet"},children:[{type:"text",value:"fastify-helmet"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"fastify-plugin"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const fp = require('fastify-plugin')\n\nmodule.exports = fp((fastify, opts, next) => {\n  // your plugin code\n  fastify.decorate('utility', () => {})\n\n  next()\n}, '0.x')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Allows you to limit Fastify versions via semver, and allows you not make a new Fastify scope."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify-plugin"},children:[{type:"text",value:"fastify-plugin"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Decorators"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Middleware"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Middleware"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.use(require('cors')())\nfastify.use(require('dns-prefetch-control')())\nfastify.use(require('frameguard')())\nfastify.use(require('hide-powered-by')())\nfastify.use(require('hsts')())\nfastify.use(require('ienoopen')())\nfastify.use(require('x-xss-protection')())\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Compatible with Express and Restify middlewares. (Don't use these middleware, these are covered by "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify-helmet"},children:[{type:"text",value:"fastify-helmet"}]},{type:"text",value:".)"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/fastify/blob/master/docs/Middlewares.md"},children:[{type:"text",value:"Middlewares"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Template rendering"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"point-of-view"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const fastify = require('fastify')()\n\nfastify.register(require('point-of-view'), {\n  engine: {\n    ejs: require('ejs')\n  }\n})\n"}]}]},{type:"comment",value:' {data-line="3"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.get('/', (req, reply) => {\n  reply.view('/templates/index.ejs', { text: 'text' })\n})\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Support "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ejs"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"pug"}]},{type:"text",value:", "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"handlebars"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"marko"}]},{type:"text",value:"."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/fastify/point-of-view"},children:[{type:"text",value:"point-of-view"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"fastify.register(require('point-of-view'), {\n  engine: {\n    ejs: require('ejs')\n  },\n  templates: '/templates',\n  options: {}\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"templates"}]},{type:"text",value:" lets you update the templates folder. "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"options"}]},{type:"text",value:" are options passed onto the template engines."}]}]},frontmatter:{title:"Fastify",category:"JavaScript libraries",intro:"[Fastify](https://github.com/fastify/fastify) lets you create HTTP servers in Node.js with good performance. This guide targets fastify v0.28.x.\n"}},relatedPages:{edges:[{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}},{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/fastify.md absPath of file >>> MarkdownRemark",nodePath:"/fastify",nodeType:"sheet",title:"Fastify",category:"JavaScript libraries",weight:0,updated:"2017-09-21T00:00:00.000Z"}}}});
//# sourceMappingURL=path---fastify-fd22f794086e79d047b1.js.map