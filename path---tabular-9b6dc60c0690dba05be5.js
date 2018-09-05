webpackJsonp([0xfdfe849577b5],{1061:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Common usage"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /|\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"| Fruit  | Color  |\n| -----  | -----  |\n| Apple  | Red    |\n| Banana | Yellow |\n| Kiwi   | Green  |\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /=\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'title = "Hello"\nsrc   = "image.jpg"\nwidth = 640\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Colons"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /:\\zs/l0l1\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'title:       "Hello world"\ndescription: "This is a description"\nsrc:         "image.jpg"\nheight:      320\nwidth:       640\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Tab command"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic example"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /:\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"title : My picture\nsrc   : img.jpg\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Right align"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /:/r0\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"title:My picture\n  src:   img.jpg\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"The \\zs atom"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /:\\zs\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"title:  My picture\nsrc:    img.jpg\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"\\zs"}]},{type:"text",value:" atom will exclude the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":"}]},{type:"text",value:" from the search match."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Specifier"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /:/r1c1l0\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"title : My picture\n  src : img.jpg\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Explanation"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"r1"}]},{type:"text",value:" -- Right align with 1 space"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"c1"}]},{type:"text",value:" -- Center align the comma with 1 space"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"l0"}]},{type:"text",value:" -- Left align with 0 spaces"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Regexp"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":Tab /^[^,]*\\zs,/r0\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"abc,hello\n  c,hi there\n  a,yo\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Specifiers"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Specifier"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"r1c1l0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"multiple specifiers, one per column\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n(the separator counts as a column)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"lN"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Left-align (with N spaces padding)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rN"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Right-align (with N spaces padding)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"cN"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Center-align (with N spaces padding)"}]}]}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/godlygeek/tabular"},children:[{type:"text",value:"godlygeek/tabular"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(github.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://vimcasts.org/episodes/aligning-text-with-tabular-vim/"},children:[{type:"text",value:"Aligning text with Tabular.vim"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(vimcasts.org)"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Tabular",category:"Vim",intro:"[Tabular](https://github.com/godlygeek/tabular) is a Vim script for text alignment.\n"}},relatedPages:{edges:[{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /projectionist",context:{nodePath:"/projectionist",category:"Vim",title:"Projectionist"}}},{node:{id:"SitePage /vim-digraphs",context:{nodePath:"/vim-digraphs",category:"Vim",title:"Vim digraphs"}}},{node:{id:"SitePage /vim-easyalign",context:{nodePath:"/vim-easyalign",category:"Vim",title:"Vim Easyalign"}}},{node:{id:"SitePage /vim-help",context:{nodePath:"/vim-help",category:"Vim",title:"Vim helpfiles"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/tabular.md absPath of file >>> MarkdownRemark",nodePath:"/tabular",nodeType:"sheet",title:"Tabular",category:"Vim",weight:-1,updated:"2017-10-11T00:00:00.000Z"}}}});
//# sourceMappingURL=path---tabular-9b6dc60c0690dba05be5.js.map