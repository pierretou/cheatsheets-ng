webpackJsonp([0xfa2e1d8be73b],{914:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Types"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Stream"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Readable"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Data emitter"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Writable"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Data receiver"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Transform"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Emitter and receiver"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Duplex"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Emitter and receiver (independent)"}]}]}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://nodejs.org/api/stream.html#stream_stream"},children:[{type:"text",value:"Stream"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(nodejs.org)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Streams"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const Readable = require('stream').Readable\nconst Writable = require('stream').Writable\nconst Transform = require('stream').Transform\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Piping"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"clock()              // Readable stream\n  .pipe(xformer())   // Transform stream\n  .pipe(renderer())  // Writable stream\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"stream.push(/*...*/)         // Emit a chunk\nstream.emit('error', error)  // Raise an error\nstream.push(null)            // Close a stream\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Events"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const st = source()\nst.on('data', (data) => { console.log('<-', data) })\nst.on('error', (err) => { console.log('!', err.message) })\nst.on('close', () => { console.log('** bye') })\nst.on('finish', () => { console.log('** bye') })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Assuming "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"source()"}]},{type:"text",value:" is a readable stream."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Flowing mode"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Toggle flowing mode\nst.resume()\nst.pause()\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Automatically turns on flowing mode\nst.on('data', /*...*/)\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Stream types"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Readable"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function clock () {\n  const stream = new Readable({\n    objectMode: true,\n    read() {}\n  })\n\n  setInterval(() => {\n    stream.push({ time: new Date() })\n  }, 1000)\n\n  return stream\n}\n\n// Implement read() if you\n// need on-demand reading.\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Readable streams are generators of data. Write data using "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stream.push()"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Transform"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function xformer () {\n  let count = 0\n\n  return new Transform({\n    objectMode: true,\n    transform: (data, _, done) => {\n      done(null, { ...data, index: count++ })\n    }\n  })\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Pass the updated chunk to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"done(null, chunk)"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Writable"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"function renderer () {\n  return new Writable({\n    objectMode: true,\n    write: (data, _, done) => {\n      console.log('<-', data)\n      done()\n    }\n  })\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"All together now"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"clock()              // Readable stream\n  .pipe(xformer())   // Transform stream\n  .pipe(renderer())  // Writable stream\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://nodejs.org/api/stream.html"},children:[{type:"text",value:"https://nodejs.org/api/stream.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/substack/stream-handbook"},children:[{type:"text",value:"https://github.com/substack/stream-handbook"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Node.js streams",category:"Node.js",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /package.json",context:{nodePath:"/package.json",category:"Node.js",title:"package.json"}}},{node:{id:"SitePage /nodejs-fs",context:{nodePath:"/nodejs-fs",category:"Node.js",title:"fs"}}},{node:{id:"SitePage /nodejs-assert",context:{nodePath:"/nodejs-assert",category:"Node.js",title:"assert"}}},{node:{id:"SitePage /nodejs-path",context:{nodePath:"/nodejs-path",category:"Node.js",title:"path"}}},{node:{id:"SitePage /nodejs-process",context:{nodePath:"/nodejs-process",category:"Node.js",title:"process"}}},{node:{id:"SitePage /nodejs",context:{nodePath:"/nodejs",category:"Node.js",title:"Node.js API"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/nodejs-stream.md absPath of file >>> MarkdownRemark",nodePath:"/nodejs-stream",nodeType:"sheet",title:"Node.js streams",category:"Node.js",weight:-1,updated:"2017-08-30T00:00:00.000Z"}}}});
//# sourceMappingURL=path---nodejs-stream-2beabc1d69e70a5526b4.js.map