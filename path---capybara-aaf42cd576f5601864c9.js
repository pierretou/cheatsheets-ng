webpackJsonp([0x721294c1c1e9],{784:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Navigating"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"visit articles_path\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Clicking links and buttons"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"click 'Link Text'\nclick_button\nclick_link\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Interacting with forms"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"attach_file 'Image', '/path/to/image.jpg'\nfill_in 'First Name', with: 'John'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"check 'A checkbox'\nuncheck 'A checkbox'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"choose 'A radio button'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"select 'Option', from: 'Select box'\nunselect\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Limiting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"within '.classname' do\n  click '...'\nend\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"within_fieldset :id do\n  ...\nend\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Querying"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Predicates"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.has_css?('.button')\nexpect(page).to have_css('.button')\npage.should have_css('.button')\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Positive"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Negative"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_content?"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_content?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_css?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_css?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_xpath?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(path)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_xpath?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_link?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_link?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_button?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_button?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_field?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_field?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_checked_field?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_unchecked_field?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_table?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_table?"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_select?"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(selector)"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_no_select?"}]}]}]}]}]},{type:"comment",value:" {.-headers.-left-align} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In Rspec, these also map to matchers like "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"page.should have_content"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Selectors"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to have_button('Save')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to have_button('#submit')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to have_button('//[@id=\"submit\"]')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"selector"}]},{type:"text",value:" arguments can be text, CSS selector, or XPath expression."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"RSpec assertions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.has_button?('Save')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to have_no_button('Save')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In RSpec, you can use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"page.should"}]},{type:"text",value:" assertions."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"About negatives"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to have_no_button('Save')   # OK\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).not_to have_button('Save')  # Bad\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"should have_no_*"}]},{type:"text",value:" versions with RSpec matchers because\n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"should_not have_*"}]},{type:"text",value:" doesn't wait for a timeout from the driver."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"RSpec"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Matchers"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"expect(page).to \\\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  have_selector '.blank-state'\n  have_selector 'h1#hola', text: 'Welcome'\n  have_button 'Save'\n  have_checked_field '#field'\n  have_unchecked_field\n  have_css '.class'\n  have_field '#field'\n  have_table '#table'\n  have_xpath '//div'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  have_link 'Logout', href: logout_path\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  have_select 'Language',\n    selected: 'German'\n    options: ['Engish', 'German']\n    with_options: ['Engish', 'German'] # partial match\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  have_text 'Hello',\n    type: :visible # or :all\n    # alias: have_content\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Common options"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"All matchers have these options:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  text: 'welcome'\n  text: /Hello/\n  visible: true\n  count: 4\n  between: 2..5\n  minimum: 2\n  maximum: 5\n  wait: 10\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other features"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Finding"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"find(selector)\nfind_button(selector)\nfind_by_id(id)\nfind_field(selector)\nfind_link(selector)\nlocate\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Scoping"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"within '#delivery' do\n  fill_in 'Street', with: 'Hello'\nend\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"within :xpath, '//article'\nwithin_fieldset\nwithin_table\nwithin_frame\nscope_to\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"find('#x').fill_in('Street', with: 'Hello')\n# same as within\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Scripting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"execute_script('$(\"input\").trigger('change')')\nevaluate_script('window.ga')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Executes JavaScript."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Debugging"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"save_and_open_page\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Opens the webpage in your browser."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Page"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page\n  .all('h3')\n  .body\n  .html\n  .source\n  .current_host\n  .current_path\n  .current_url\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"AJAX"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"using_wait_time 10 do\n  ...\nend\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Misc"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"drag\nfield_labeled\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Page object"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.status_code == 200\npage.response_headers\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Session"},children:[{type:"text",value:"http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Session"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Poltergeist"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Capybara.register_driver :poltergeist do |app|\n  Capybara::Poltergeist::Driver.new(app, :inspector => true)\nend\nCapybara.javascript_driver = :poltergeist\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"https://github.com/teampoltergeist/poltergeist"},children:[{type:"text",value:"poltergeist"}]},{type:"text",value:" to integrate PhantomJS."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Blacklist"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"config.before :each, :js do\n  page.driver.browser.url_blacklist = [\n    'fonts.googleapis.com',\n    'use.typekit.net',\n    'f.vimeocdn.com',\n    'player.vimeo.com',\n    'www.googletagmanager.com'\n  ].flat_map { |domain| [ \"http://#{domain}\", \"https://#{domain}\" ] }\nend\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Debugging"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Enable "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"inspector: true"}]},{type:"text",value:" and then:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.driver.debug\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To pause execution for a while:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.driver.pause\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Selenium"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Accepting confirm() and alert()"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"accept_alert { ... }\ndismiss_confirm { ... }\naccept_prompt(with: 'hi') { ... }\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Alternatively:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.driver.browser.switch_to.alert.accept\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Updating session"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"page.set_rack_session(foo: 'bar')\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"See also"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://rubydoc.info/github/jnicklas/capybara/Capybara/RSpecMatchers"},children:[{type:"text",value:"http://rubydoc.info/github/jnicklas/capybara/Capybara/RSpecMatchers"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Matchers"},children:[{type:"text",value:"http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Matchers"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Capybara",category:"Ruby libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /ronn",context:{nodePath:"/ronn",category:"Ruby libraries",title:"Ronn"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /chunky_png",context:{nodePath:"/chunky_png",category:"Ruby libraries",title:"Chunky PNG"}}},{node:{id:"SitePage /do",context:{nodePath:"/do",category:"Ruby libraries",title:"Do gem"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/capybara.md absPath of file >>> MarkdownRemark",nodePath:"/capybara",nodeType:"sheet",title:"Capybara",category:"Ruby libraries",weight:-5,updated:"2017-08-30T00:00:00.000Z"}}}});
//# sourceMappingURL=path---capybara-aaf42cd576f5601864c9.js.map