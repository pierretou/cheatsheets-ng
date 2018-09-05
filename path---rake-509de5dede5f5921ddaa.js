webpackJsonp([0xbe1584b9e7e2],{1013:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic syntax"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'namespace :foo do\n  desc "Description"\n  task :bar do\n    ...\n  end\n\n  task :baz => :dependency do\n  end\n\n  task :baz => [:dep1, :dep2, :dep3] do\n  end\nend\n\n# rake foo:bar\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Rake task with arguments"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'desc "Do something"\ntask :workit, [:id] => :environment do |_, args|\n  id = args[:id]\nend\n\n# rake workit[234]\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Rake",category:"Ruby",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /rbenv",context:{nodePath:"/rbenv",category:"Ruby",title:"rbenv"}}},{node:{id:"SitePage /activeadmin",context:{nodePath:"/activeadmin",category:"Ruby",title:"ActiveAdmin"}}},{node:{id:"SitePage /bundler",context:{nodePath:"/bundler",category:"Ruby",title:"Bundler"}}},{node:{id:"SitePage /minitest",context:{nodePath:"/minitest",category:"Ruby",title:"Minitest"}}},{node:{id:"SitePage /rspec-rails",context:{nodePath:"/rspec-rails",category:"Ruby",title:"Rspec-rails"}}},{node:{id:"SitePage /rspec",context:{nodePath:"/rspec",category:"Ruby",title:"RSpec"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rake.md absPath of file >>> MarkdownRemark",nodePath:"/rake",nodeType:"sheet",title:"Rake",category:"Ruby",weight:0,updated:null}}}});
//# sourceMappingURL=path---rake-509de5dede5f5921ddaa.js.map