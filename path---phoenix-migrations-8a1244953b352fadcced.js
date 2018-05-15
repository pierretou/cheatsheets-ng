webpackJsonp([77028220929322],{934:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ mix ecto.gen.migration update_posts_table\n  creating priv/repo/migrations/20160602085927_update_posts_table.exs\n  ···\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ mix ecto.migrate\n$ mix ecto.rollback\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Creates a migration (no models)."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating models"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ mix phoenix.gen.model Message messages user_id:integer content:text\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is only for Phoenix 1.2 or older; models aren't available in Phoenix 1.3+."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Migration functions"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating tables"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'create table(:documents) do\n  add :title, :string\n  add :title, :string, size: 40\n  add :title, :string, default: "Hello"\n  add :title, :string, default: fragment("now()")\n  add :title, :string, null: false\n  add :body, :text\n  add :age, :integer\n  add :price, :float\n  add :price, :float, precision: 10, scale: 2\n  add :published_at, :datetime\n  add :group_id, references(:groups)\n  add :object, :json\n\n  timestamps  # inserted_at and updated_at\nend\n\ncreate_if_not_exists table(:documents) do: ... end\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Other operations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"alter table(:posts) do\n  add :summary, :text\n  modify :title, :text\n  remove :views\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"rename table(:posts), :title, to: :summary\nrename table(:posts), to: table(:new_posts)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"drop table(:documents)\ndrop_if_exists table(:documents)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"table(:documents)\ntable(:weather, prefix: :north_america)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Indices"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"create index(:posts, [:slug], concurrently: true)\ncreate unique_index(:posts, [:slug])\ndrop index(:posts, [:name])\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Execute SQL"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'execute "UPDATE posts SET published_at = NULL"\nexecute create: "posts", capped: true, size: 1024\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://devdocs.io/phoenix/ecto/ecto.migration"},children:[{type:"text",value:"Ecto.Migration"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Phoenix: Ecto migrations",category:"Elixir",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /phoenix-conn",context:{nodePath:"/phoenix-conn",category:"Elixir",title:"Phoenix: Plug.Conn"}}},{node:{id:"SitePage /ets",context:{nodePath:"/ets",category:"Elixir",title:"Erlang ETS"}}},{node:{id:"SitePage /phoenix-routing",context:{nodePath:"/phoenix-routing",category:"Elixir",title:"Phoenix: Routing"}}},{node:{id:"SitePage /phoenix",context:{nodePath:"/phoenix",category:"Elixir",title:"Phoenix"}}},{node:{id:"SitePage /phoenix@1.2",context:{nodePath:"/phoenix@1.2",category:"Elixir",title:"Phoenix 1.2"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/phoenix-migrations.md absPath of file >>> MarkdownRemark",nodePath:"/phoenix-migrations",nodeType:"sheet",title:"Phoenix: Ecto migrations",category:"Elixir",weight:-1,updated:"2017-09-04T00:00:00.000Z"}}}});
//# sourceMappingURL=path---phoenix-migrations-8a1244953b352fadcced.js.map