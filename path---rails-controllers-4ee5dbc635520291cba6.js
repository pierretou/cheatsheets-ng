webpackJsonp([0x6112340d18e3],{1001:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Common stuff"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'redirect_to root_url\nredirect_to root_url, notice: "Good."\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Special hashes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'session[:user_id] = nil\n\nflash[:notice] = "Hello"    # Gets flushed on next request\nflash.keep                  # Persist flash values\nflash.now[:error] = "Boo"   # Available on the same request\n\ncookies[:hello] = "Hi"\n\nparams[:page]\n\n# params is a combination of:\nquery_parameters\npath_parameters\nrequest_parameters\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"respond_to"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"respond_to do |format|\n  format.html\n  format.xml  { render xml: @users }\n  format.json { render json: @users }\n  format.js    # Will be executed by the browser\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"default"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"url"}]},{type:"text",value:"options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# The options parameter is the hash passed in to 'url_for'\ndef default_url_options(options)\n  {:locale => I18n.locale}\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Filters"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Filter with callbacks\nbefore_filter :authenticate\nbefore_filter :authenticate, except: [:login]\nbefore_filter :authenticate, only: [:login]\ndef authenticate\n  redirect_to login_url unless controller.logged_in?\nend\n\n# Filter with inline\nbefore_filter do |controller|\n  redirect_to login_url unless controller.logged_in?\nend\n\n# Filter with external classes\nbefore_filter LoginFilter\nclass LoginFilter\n  def self.filter(controller) ...; end\nend\n\n# Filter exceptions\nskip_before_filter :require_login, only: [:new, :create]\n\n# Before/after filters\naround_filter :wrap_in_transaction\ndef wrap_in_transaction(&blk)\n  ActiveRecord::Base.transaction { yield }\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HTTP basic authentication"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'before_filter :authenticate\n\n# Basic authentication:\ndef authenticate\n  authenticate_or_request_with_http_basic { |u, p|\n    u == "root" && p == "alpine"\n  }\nend\n\n# ...or digest (hashed) authentication:\n# uses the ha1 hash (username:realm:password)\ndef authenticate_by_digest\n  realm = "Secret3000"\n  users = {\n    "rsc" => Digest::MD5.hexdigest("rsc:#{realm}:passwordhere")\n  }\n\n  authenticate_or_request_with_http_digest(realm) { |user|\n    users[user]\n  }\nend\n\n# For integration tests\ndef test_access\n  auth = ActionController::HttpAuthentication::Basic.encode_credentials(user, pass)\n  get "/notes/1.xml", nil, \'HTTP_AUTHORIZATION\' => auth\nend\n\n# Token auth\nis_logged_in = authenticate_with_http_token do |token, options|\n  token == our_secret_token\nend\n\nrequest_http_token_authentication  unless is_logged_in\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Request/response"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'request.host            #=> "www.example.com"\nrequest.domain          #=> "www.example.com"\nrequest.domain(n=2)     #=> "example.com"\nrequest.port            #=> 80\nrequest.protocol        #=> "http://"\nrequest.query_string    #=> "q=duck+tales"\nrequest.url             #=> "http://www.example.com/search?q=duck+tales"\nrequest.fullpath        #=> "/search?q=duck+tales"\n\nrequest.headers         # Returns a hash\n\nrequest.format          #=> "text/html"\nrequest.remote_ip       #=> "203.167.220.220"\nrequest.local?          #=> true (if localhost/127.0.0.1)\n\nrequest.xhr?\n\nrequest.method          #=> "POST"\nrequest.method_symbol   #=> :post\nrequest.get?\nrequest.post?\nrequest.put?\nrequest.delete?\nrequest.head?\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"response"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'response.body\nresponse.status         #=> 404\nresponse.location       # Redirect location\nresponse.content_type\nresponse.charset\nresponse.headers\n\nresponse.headers["Content-Type"] = "application/pdf"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Streaming"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"send_data pdfdata, filename: \"foo.pdf\", type: \"application/pdf\"\nsend_file Rails.root.join('public','filename.txt') [filename: '..', type: '..']\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://guides.rubyonrails.org/action_controller_overview.html"},children:[{type:"text",value:"Guide"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic.html"},children:[{type:"text",value:"HttpAuthentication::Basic"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html"},children:[{type:"text",value:"HttpAuthentication::Token"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Controllers",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-helpers",context:{nodePath:"/rails-helpers",category:"Rails",title:"Helpers"}}},{node:{id:"SitePage /rails-i18n",context:{nodePath:"/rails-i18n",category:"Rails",title:"i18n"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-controllers.md absPath of file >>> MarkdownRemark",nodePath:"/rails-controllers",nodeType:"sheet",title:"Controllers",category:"Rails",weight:0,updated:null}}}});
//# sourceMappingURL=path---rails-controllers-4ee5dbc635520291cba6.js.map