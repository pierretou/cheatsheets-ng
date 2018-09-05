webpackJsonp([0xe545165b660],{1039:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Semver"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Given a version number "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"MAJOR.MINOR.PATCH"}]},{type:"text",value:":"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"MAJOR"}]},{type:"text",value:" | incompatible API changes                 |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"MINOR"}]},{type:"text",value:" | add functionality (backwards-compatible) |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"PATCH"}]},{type:"text",value:" | bug fixes (backwards-compatible)         |"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Simple ranges"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"  1.2.3\n =1.2.3\n >1.2.3\n <1.2.3\n>=1.2.3\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Note that suffixed versions ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.3-rc1"}]},{type:"text",value:") are not matched."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ranges"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Notes"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~1.2.3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.3 <1.3.0"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^1.2.3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.3 <2.0.0"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^0.2.3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=0.2.3 <0.3.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"(0.x.x is special)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^0.0.1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is  \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"=0.0.1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"(0.0.x is special)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^1.2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.0 <2.0.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"(like ^1.2.0)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~1.2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.0 <1.3.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"(like ~1.2.0)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.0.0 <2.0.0"}]}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"same"}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.x"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"same"}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.*"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"same"}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"same"}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"*"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"any version"}]},{type:"element",tagName:"td",properties:{},children:[]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"x"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"same"}]},{type:"element",tagName:"td",properties:{},children:[]}]}]}]},{type:"comment",value:" {.-shortcuts} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hyphenated ranges"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.3 - 2.3.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.3 <=2.3.4"}]}]}]}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Partial right"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.3 - 2.3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.3 <2.4.0"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.3 - 2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=1.2.3 <3.0.0"}]}]}]}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Partial left"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2 - 2.3.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"is \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.0 - 2.3.0"}]}]}]}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When the right is partial (eg, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"2.3"}]},{type:"text",value:"), missing pieces are assumed to be "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"x"}]},{type:"text",value:" (eg, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"2.3.x"}]},{type:"text",value:")."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When the left is partial (eg, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2"}]},{type:"text",value:"), missing pieces are assumed to be "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"0"}]},{type:"text",value:" (eg, "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.0"}]},{type:"text",value:")."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Combining ranges"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:">=0.14 <16"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"And (space-separated)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"0.14.x || 15.x.x"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Or (pipe-separated)"}]}]}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pre-releases"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.2.3-prerelease+build\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Explanation"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^"}]},{type:"text",value:' | means "compatible with" |\n| '},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~"}]},{type:"text",value:' | means "reasonably close to" |\n| '},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"0.x.x"}]},{type:"text",value:' | is for "initial development" |\n| '},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1.x.x"}]},{type:"text",value:" | means public API is defined |"}]},{type:"comment",value:" {.-shortcuts} "},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://semver.org/"},children:[{type:"text",value:"http://semver.org/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.npmjs.org/doc/misc/semver.html"},children:[{type:"text",value:"https://www.npmjs.org/doc/misc/semver.html"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Semver",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}},{node:{id:"SitePage /bulma",context:{nodePath:"/bulma",category:"",title:"Bulma"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/semver.md absPath of file >>> MarkdownRemark",nodePath:"/semver",nodeType:"sheet",title:"Semver",category:"",weight:-3,updated:"2018-01-15T00:00:00.000Z"}}}});
//# sourceMappingURL=path---semver-ff0995d67f9a5bf36b5a.js.map