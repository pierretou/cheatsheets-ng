webpackJsonp([0xd0952c7a77a3],{817:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/DAddYE/do"},children:[{type:"text",value:"DAddYE/do"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Connection"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server = DO::Server.new('srv1', 'srv1.domain.local', 'root', :key => \n    %w[srv1.pem]\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Run"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.run 'uname'\n# root@srv1 ~ # uname\n# Linux\n\nserver.run 'uname', '-a'\n# root@srv1 ~ # uname -a\n# Linux srv1.lipsiasoft.net 2.6.18-194.32.1.el5  x86_64 x86_64 x86_64 GNU/Linux\n\nserver.run 'mysqladmin -u root -p password \"oldone\"', 'newpassword'\n# root@srv1 ~ # mysqladmin -u root -p password 'oldone'\n# Enter password: oldone\n# mysqladmin: connect to server at 'localhost' failed\n# error: 'Access denied for user 'root'@'localhost' (using password: YES)'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Files"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.exist?('~/.ssh')\n# root@srv1 ~ # test -e ~/.ssh && echo True\n# => true\n\nserver.read('/etc/redhat-release')\n# root@srv1 ~ # cat /etc/redhat-release\n# => \"CentOS release 5.5 (Final)\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Upload/download"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.upload '/tmp/file', '/tmp/foo'\n# root@srv1 ~ # upload from '/tmp/file' to '/tmp/foo'\n\nserver.download '/tmp/foo', '/tmp/file2'\n# root@srv1 ~ # download from '/tmp/foo' to '/tmp/file2'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Replace"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.replace :all, 'new content', '/tmp/file'\n# root@srv1 ~ # replace all in '/tmp/foo'\n\nserver.read('/tmp/foo')\n# root@srv1 ~ # cat /tmp/foo\n# => \"new content\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Replace via regex"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.replace /content$/, 'changed content', '/tmp/foo'\n# root@srv1 ~ # replace /content$/ in '/tmp/foo'\n\nserver.read('/tmp/foo')\n# root@srv1 ~ # cat /tmp/foo\n# => \"new changed content\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Append"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.append('appended', '/tmp/foo')\n# root@srv1 ~ # append to 'bottom' in '/tmp/foo'\n\nserver.read('/tmp/foo')\n# root@srv1 ~ # cat /tmp/foo\n# => \"new changed contentappended\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Append to top"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"server.append('---', '/tmp/foo', :top)\n# root@srv1 ~ # append to 'top' in '/tmp/foo'\n\nserver.read('/tmp/foo')\n# root@srv1 ~ # cat /tmp/foo\n# => \"---new changed contentappended\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Prompt"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'server.ask "Please choose"\n# root@srv1 ~ # Please choose: foo\n# => "foo"\n\nserver.yes? "Do you want to proceed"\n# root@srv1 ~ # Do you want to proceed? (y/n): y\n# => 0\n\nserver.wait\n# Press ENTER to continue...\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Do gem",category:"Ruby libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /ronn",context:{nodePath:"/ronn",category:"Ruby libraries",title:"Ronn"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /chunky_png",context:{nodePath:"/chunky_png",category:"Ruby libraries",title:"Chunky PNG"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/do.md absPath of file >>> MarkdownRemark",nodePath:"/do",nodeType:"sheet",title:"Do gem",category:"Ruby libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---do-9ed8790fc877a528fb7f.js.map