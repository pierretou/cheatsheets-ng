webpackJsonp([65232388483329],{1075:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Vagrantfile"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:'Vagrant.configure("2") do |config|\n  # All Vagrant configuration is done here. The most common configuration\n  # options are documented and commented below. For a complete reference,\n  # please see the online documentation at vagrantup.com.\n\n  # Every Vagrant virtual environment requires a box to build off of.\n  config.vm.box = "precise64"\n\n  # The url from where the \'config.vm.box\' box will be fetched if it\n  # doesn\'t already exist on the user\'s system.\n  # config.vm.box_url = "http://domain.com/path/to/above.box"\n\n  # Create a forwarded port mapping which allows access to a specific port\n  # within the machine from a port on the host machine. In the example below,\n  # accessing "localhost:8080" will access port 80 on the guest machine.\n  # config.vm.network :forwarded_port, guest: 80, host: 8080\n\n  # Create a private network, which allows host-only access to the machine\n  # using a specific IP.\n  # config.vm.network :private_network, ip: "192.168.33.10"\n\n  # Create a public network, which generally matched to bridged network.\n  # Bridged networks make the machine appear as another physical device on\n  # your network.\n  # config.vm.network :public_network\n\n  # If true, then any SSH connections made will enable agent forwarding.\n  # Default value: false\n  # config.ssh.forward_agent = true\n\n  # Share an additional folder to the guest VM. The first argument is\n  # the path on the host to the actual folder. The second argument is\n  # the path on the guest to mount the folder. And the optional third\n  # argument is a set of non-required options.\n  # config.vm.synced_folder "../data", "/vagrant_data"\n\n  # Provider-specific configuration so you can fine-tune various\n  # backing providers for Vagrant. These expose provider-specific options.\n  # Example for VirtualBox:\n  #\n  # config.vm.provider :virtualbox do |vb|\n  #   # Don\'t boot with headless mode\n  #   vb.gui = true\n  #\n  #   # Use VBoxManage to customize the VM. For example to change memory:\n  #   vb.customize ["modifyvm", :id, "--memory", "1024"]\n  # end\n  #\n  # View the documentation for the provider you\'re using for more\n  # information on available options.\n\n  # Enable provisioning with Puppet stand alone.  Puppet manifests\n  # are contained in a directory path relative to this Vagrantfile.\n  # You will need to create the manifests directory and a manifest in\n  # the file precise64.pp in the manifests_path directory.\n  #\n  # An example Puppet manifest to provision the message of the day:\n  #\n  # # group { "puppet":\n  # #   ensure => "present",\n  # # }\n  # #\n  # # File { owner => 0, group => 0, mode => 0644 }\n  # #\n  # # file { \'/etc/motd\':\n  # #   content => "Welcome to your Vagrant-built virtual machine!\n  # #               Managed by Puppet.\\n"\n  # # }\n  #\n  # config.vm.provision :puppet do |puppet|\n  #   puppet.manifests_path = "manifests"\n  #   puppet.manifest_file  = "init.pp"\n  # end\n\n  # Enable provisioning with chef solo, specifying a cookbooks path, roles\n  # path, and data_bags path (all relative to this Vagrantfile), and adding\n  # some recipes and/or roles.\n  #\n  # config.vm.provision :chef_solo do |chef|\n  #   chef.cookbooks_path = "../my-recipes/cookbooks"\n  #   chef.roles_path = "../my-recipes/roles"\n  #   chef.data_bags_path = "../my-recipes/data_bags"\n  #   chef.add_recipe "mysql"\n  #   chef.add_role "web"\n  #\n  #   # You may also specify custom JSON attributes:\n  #   chef.json = { :mysql_password => "foo" }\n  # end\n\n  # Enable provisioning with chef server, specifying the chef server URL,\n  # and the path to the validation key (relative to this Vagrantfile).\n  #\n  # The Opscode Platform uses HTTPS. Substitute your organization for\n  # ORGNAME in the URL and validation key.\n  #\n  # If you have your own Chef Server, use the appropriate URL, which may be\n  # HTTP instead of HTTPS depending on your configuration. Also change the\n  # validation key to validation.pem.\n  #\n  # config.vm.provision :chef_client do |chef|\n  #   chef.chef_server_url = "https://api.opscode.com/organizations/ORGNAME"\n  #   chef.validation_key_path = "ORGNAME-validator.pem"\n  # end\n  #\n  # If you\'re using the Opscode platform, your validator client is\n  # ORGNAME-validator, replacing ORGNAME with your organization name.\n  #\n  # If you have your own Chef Server, the default validation client name is\n  # chef-validator, unless you changed the configuration.\n  #\n  #   chef.validation_client_name = "ORGNAME-validator"\nend\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"./vagrant"},children:[{type:"text",value:"Vagrant cheatsheet"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Vagrantfile",category:"Devops",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /docker-compose",context:{nodePath:"/docker-compose",category:"Devops",title:"docker-compose"}}},{node:{id:"SitePage /awscli",context:{nodePath:"/awscli",category:"Devops",title:"AWS CLI"}}},{node:{id:"SitePage /chef",context:{nodePath:"/chef",category:"Devops",title:"Chef"}}},{node:{id:"SitePage /deis",context:{nodePath:"/deis",category:"Devops",title:"Deis"}}},{node:{id:"SitePage /dockerfile",context:{nodePath:"/dockerfile",category:"Devops",title:"Dockerfile"}}},{node:{id:"SitePage /docker",context:{nodePath:"/docker",category:"Devops",title:"Docker CLI"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vagrantfile.md absPath of file >>> MarkdownRemark",nodePath:"/vagrantfile",nodeType:"sheet",title:"Vagrantfile",category:"Devops",weight:0,updated:null}}}});
//# sourceMappingURL=path---vagrantfile-d3311d707429d5824ee1.js.map