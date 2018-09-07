webpackJsonp([40953350335117],{1077:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Command mode"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Align by delimiters"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:':EasyAlign :       " preset characters (\\=:.,&#|)\n:EasyAlign |\n:EasyAlign \\       " \\ means space\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Align by regexp"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:":EasyAlign /[:;]+/\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Specify which"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:':EasyAlign |       " align by 1st `|`\n:EasyAlign 3 |     " align by 3rd `|`\n:EasyAlign * |     " align by all `|`s\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Add options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:':EasyAlign * | l4r1\n\n  l4     " lN - left_margin\n  r1     " rN - right_margin\n         "    spaces to the left/right of `|`\n  ar     " a[lrc] - align\n         "    align left/right/center\n  dr     " d[lrc] - delimiter_align\n         "    alignment of the delimiter itself\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Spaces are optional"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:":EasyAlign * /[;:]+/ l3\n:EasyAlign*/[;:]+/l3\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":EasyAlign = dr"}]},{type:"text",value:" (delimiter_align right)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"apple    = 1\nbanana  += apple\ncake   ||= banana\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":EasyAlign :"}]},{type:"text",value:" (for json or yaml)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"url:      jdbc:mysql://localhost/test\ndatabase: test\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":EasyAlign *|"}]},{type:"text",value:" (markdown tables)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-nohighlight"]},children:[{type:"text",value:"| `<Enter>` | right align                   |\n| `1`       | on 1st occurrence             |\n| `2`       | on 2nd occurrence (and so on) |\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Interactive mode"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{Visual}"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"⏎"}]},{type:"text",value:"  | activate for selection          |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ga"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{motion}"}]},{type:"text",value:" | activate for motion/text object |\n{:.greycode}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then press options (if available), then a delimiter."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Interactive mode options"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"⏎"}]},{type:"text",value:"              | Set "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"alignment"}]},{type:"text",value:"                                  |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<ctrl-l>"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"4 ⏎"}]},{type:"text",value:" | Set "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"left_margin"}]},{type:"text",value:" (to the left of the delimiter) |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<ctrl-r>"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"4 ⏎"}]},{type:"text",value:" | Set "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"right_margin"}]},{type:"text",value:"                               |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"↓"}]},{type:"text",value:"              | no margin                                        |\n{:.greycode}"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Example"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gaip"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<ctrl-l>"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"8⏎"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"="}]},{type:"text",value:" - puts 8 spaces before the equal sign"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/junegunn/vim-easy-align"},children:[{type:"text",value:"vim-easy-align"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/junegunn/vim-easy-align#examples"},children:[{type:"text",value:"Examples"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/junegunn/vim-easy-align#alignment-options"},children:[{type:"text",value:"Alignment options"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Vim Easyalign",category:"Vim",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /tabular",context:{nodePath:"/tabular",category:"Vim",title:"Tabular"}}},{node:{id:"SitePage /projectionist",context:{nodePath:"/projectionist",category:"Vim",title:"Projectionist"}}},{node:{id:"SitePage /vim-digraphs",context:{nodePath:"/vim-digraphs",category:"Vim",title:"Vim digraphs"}}},{node:{id:"SitePage /vim-help",context:{nodePath:"/vim-help",category:"Vim",title:"Vim helpfiles"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vim-easyalign.md absPath of file >>> MarkdownRemark",nodePath:"/vim-easyalign",nodeType:"sheet",title:"Vim Easyalign",category:"Vim",weight:0,updated:null}}}});
//# sourceMappingURL=path---vim-easyalign-4f1d3cf882efa1004fbb.js.map