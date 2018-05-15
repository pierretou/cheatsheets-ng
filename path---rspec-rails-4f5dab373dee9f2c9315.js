webpackJsonp([31430474393135],{979:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Spec tasks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rake spec:controllers\nrake spec:helpers\nrake spec:lib\nrake spec:mailers\nrake spec:models\nrake spec:requests\nrake spec:routing\nrake spec:views\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Models"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# spec/models/*.rb\ndescribe MyModel do\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Controllers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'# spec/controllers/*.rb\ndescribe MyController do\n  describe "POST update" do\n    render_views #optional\n\n    it "works" do\n      post :update, { user: { name: "john" } }\n\n      controller\n      controller.send ...\n\n      response\n      expect(response).to be_success\n      expect(response).to have_http_status(200)\n      expect(response).to render_template("index")\n      expect(response).to redirect_to \'/..\'\n\n      expect(assigns :article).to eq article\n\n      response.status\n    end\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Request"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'# spec/requests/*.rb\ndescribe "home page" do\n  it "displays the user\'s username after successful login" do\n    get "/login"\n    post "/login", username: "jdoe", password: "secret"\n\n    expect(response.status).to eql 200\n    expect(response).to redirect_to(...)\n    expect(response).to render_template(:show)\n    expect(response.body).to include \'hello\'\n    follow_redirect!\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Routing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'# spec/routing/*.rb\ndescribe "routing to profiles" do\n  it "routes /profile/:username to profile#show for username" do\n    expect(get: "/profiles/jsmith").to route_to(\n      controller: "profiles",\n      action: "show",\n      username: "jsmith"\n    )\n  end\n\n  it "does not expose a list of profiles" do\n    expect(get: "/profiles").not_to be_routable\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Helpers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'# spec/helpers/*.rb\ndescribe EventsHelper do\n  describe "#link_to_event" do\n    it "displays the title, and formatted date" do\n      event = Event.new("Ruby Kaigi", Date.new(2010, 8, 27))\n\n      # helper is an instance of ActionView::Base configured with the\n      # EventsHelper and all of Rails\' built-in helpers\n      expect(helper.link_to_event).to match /Ruby Kaigi, 27 Aug, 2010/\n    end\n  end\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Features"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# spec/features/*.rb\nfeature 'Signing in' do\n  given(:something) { \"hi\" }\n\n  background do\n    User.make email: 'hi@gmail.com'\n  end\n\n  scenario 'Signing in with credentials' do\n  end\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Matchers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"be_a_new(Widget)  # new_record?\nrender_template(\"new\")\nrender_template(partial: 'form', locals: {...})\nredirect_to(widgets_path)\nroute_to(..)\nbe_routable\nhave_http_status(500)\nhave_http_status(:created)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Time helpers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"travel_to Time.new(2014, 11, 14, 01, 04, 44)\n...\ntravel_back\n\ntravel_to Time.new(2014, 11, 14, 01, 04, 44) do\n  ...\nend\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Rspec-rails",category:"Ruby",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /rbenv",context:{nodePath:"/rbenv",category:"Ruby",title:"rbenv"}}},{node:{id:"SitePage /activeadmin",context:{nodePath:"/activeadmin",category:"Ruby",title:"ActiveAdmin"}}},{node:{id:"SitePage /bundler",context:{nodePath:"/bundler",category:"Ruby",title:"Bundler"}}},{node:{id:"SitePage /minitest",context:{nodePath:"/minitest",category:"Ruby",title:"Minitest"}}},{node:{id:"SitePage /rake",context:{nodePath:"/rake",category:"Ruby",title:"Rake"}}},{node:{id:"SitePage /rspec",context:{nodePath:"/rspec",category:"Ruby",title:"RSpec"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rspec-rails.md absPath of file >>> MarkdownRemark",nodePath:"/rspec-rails",nodeType:"sheet",title:"Rspec-rails",category:"Ruby",weight:0,updated:null}}}});
//# sourceMappingURL=path---rspec-rails-4f5dab373dee9f2c9315.js.map