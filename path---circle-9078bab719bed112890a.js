webpackJsonp([0xa688f94ddd3c],{791:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"circle.yml"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"machine"}]},{type:"text",value:": adjusting the VM to your preferences and requirements"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"checkout"}]},{type:"text",value:": checking out and cloning your git repo"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"dependencies"}]},{type:"text",value:": setting up your project's language-specific dependencies"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"database"}]},{type:"text",value:": preparing the databases for your tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"test"}]},{type:"text",value:": running your tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"deployment"}]},{type:"text",value:": deploying your code to your web servers"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://circleci.com/docs/configuration"},children:[{type:"text",value:"https://circleci.com/docs/configuration"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Sample"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yml"]},children:[{type:"text",value:"## Customize the test machine\nmachine:\n\n  timezone:\n    America/Los_Angeles # Set the timezone\n\n  # Version of ruby to use\n  ruby:\n    version:\n      1.8.7-p358-falcon-perf\n\n  # Override /etc/hosts\n  hosts:\n    circlehost: 127.0.0.1\n    dev.mycompany.com: 127.0.0.1\n\n  # Add some environment variables\n  environment:\n    CIRCLE_ENV: test\n    DATABASE_URL: postgres://ubuntu:@127.0.0.1:5432/circle_test\n\n## Customize checkout\ncheckout:\n  post:\n    - git submodule sync\n    - git submodule update --init # use submodules\n\n## Customize dependencies\ndependencies:\n  pre:\n    - npm install coffeescript # install from a different package manager\n    - gem uninstall bundler # use a custom version of bundler\n    - gem install bundler --pre\n\n  override:\n    - bundle install: # note ':' here\n        timeout: 180 # fail if command has no output for 3 minutes\n\n  # we automatically cache and restore many dependencies between\n  # builds. If you need to, you can add custom paths to cache:\n  cache_directories:\n    - \"custom_1\"   # relative to the build directory\n    - \"~/custom_2\" # relative to the user's home directory\n\n## Customize database setup\ndatabase:\n  override:\n    # replace CircleCI's generated database.yml\n    - cp config/database.yml.ci config/database.yml\n    - bundle exec rake db:create db:schema:load\n\n## Customize test commands\ntest:\n  override:\n    - phpunit test/unit-tests # use PHPunit for testing\n  post:\n    - bundle exec rake jasmine:ci: # add an extra test type\n        environment:\n          RAILS_ENV: test\n          RACK_ENV: test\n\n## Customize deployment commands\ndeployment:\n  staging:\n    branch: master\n    heroku:\n      appname: foo-bar-123\n\n## Custom notifications\nnotify:\n  webhooks:\n    # A list of hashes representing hooks. Only the url field is supported.\n    - url: https://someurl.com/hooks/circle\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://circleci.com/docs/config-sample"},children:[{type:"text",value:"https://circleci.com/docs/config-sample"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"CircleCI",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/circle.md absPath of file >>> MarkdownRemark",nodePath:"/circle",nodeType:"sheet",title:"CircleCI",category:"",weight:0,updated:null}}}});
//# sourceMappingURL=path---circle-9078bab719bed112890a.js.map