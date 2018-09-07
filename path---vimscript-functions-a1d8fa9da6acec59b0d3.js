webpackJsonp([0x5c7592a78dec],{1082:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Dictionaries"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let colors = {\n  \\ "apple": "red",\n  \\ "banana": "yellow"\n}\n\necho colors["a"]\necho get(colors, "apple")   " suppress error\n\nremove(colors, "apple")\n\n" :help E715\nif has_key(dict, \'foo\')\nif empty(dict)\nkeys(dict)\nlen(dict)\n\nmax(dict)\nmin(dict)\n\ncount(dict, \'x\')\nstring(dict)\n\nmap(dict, \'<>> " . v:val\')\nextend(s:fruits, { ... })\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:"for key in keys(mydict)\n  echo key . ': ' . mydict(key)\nendfor\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Lists"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-vim"]},children:[{type:"text",value:'let mylist = [1, two, 3, "four"]\n\nlet first = mylist[0]\nlet last  = mylist[-1]\n\n" Suppresses errors\nlet second = get(mylist, 1)\nlet second = get(mylist, 1, "NONE")\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Functions"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Buffer"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"line('.')             \" current line number\ncol('.')\ncol('$')\n\ngetline('.')          \" current line as a string\ngetline(1)            \" get line 1\ngetline(1, 5)         \" get lines 1-5\nsearch('^$')          \" next blank line, returns line number\nsearch('^$','n')      \" but don't move cursor\n\ngetcurpos()           \" [bufnum, lnum, col, off, curswant]\ngetpos('.')           \" [bufnum, lnum, col, off]\n\nnextnonblank(1)       \" next non-blank line after line1\nprevnonblank()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Marks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'getpos("\'a")          " position of a mark\nsetpos("\'a",...)\n\ngetpos("\'<")          " position of selection start\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cursor"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'cursor(line,col)      " moves cursor\ncursor(line,col,off,curswant)\n\ngetcurpos()           " returns [bufnum,line,col,off,curswant]\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Expand"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'expand(\'<cword>\')      " word under cursor\nexpand(\'%\')            " current file\n\n" <cword>  current word on cursor\n" :p    full path\n" :h    head\n" :p:h  dirname   (/Users/rsc/project)\n" :t    tail      (file.txt)\n" :r    root      (file)\n" :e    extension (.txt)\n" see :h cmdline-special\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Files"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"fnameescape('string')\nfnamemodify('main.c', ':p:h')\nfnamemodify(fname, ':e')   \" current file extension - see expand()\nfilereadable(fname)\ngetfsize('file.txt')\ngetcwd()\n\nglobpath(&rtp, \"plugin/commentary.vim\")\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Math"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'fmod(9, 2)  " modulus\nabs(-0.5)\nsqrt(9)\n\ntrunc(1.84)\nfloor(1.84)\nceil(1.84)\nfloat2nr(3.14)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Casting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"str2float('0.2')\nstr2nr('240')\nstr2nr('ff', '16')\n\nstring(0.3)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type checking"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'type(var) == type(0)\ntype(var) == type("")\ntype(var) == type(function("tr"))\ntype(var) == type([])\ntype(var) == type({})\ntype(var) == type(0.0)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Date/time"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"strftime('%c')\nstrftime('%c',getftime('file.c'))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Strings"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"if a =~ '\\s*'\nsubstitute(str, '.', 'x', 'g')\nstrpart(\"abcdef\", 3, 2)    \" == \"de\" (substring)\nstrpart(\"abcdef\", 3)       \" == \"def\"\nstridx(\"abcdef\", \"e\")      \" == \"e\"\nstrridx()                  \" reverse\n\nmatchstr('testing','test')  \" == 'test' (or '')\nmatch('testing','test')     \" == 0\nmatchend('testing','test')  \" == 4\nmatch('testing','\\ctest')   \" ignore case\n\nsplit(str, '\\zs')           \" split into characters\n\nstrlen(str)\nstrchars()                  \" accounts for composing chars\nstrwidth()                  \" accounts for ambig characters\nstrdisplaywidth()           \" accounts for tab stops\n\ntoupper(str)\ntolower(str)\ntr('foo', '_-', '  ')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Syntax"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"synstack(line('.'),col('.'))   \" returns many\nsynID(line('.'),col('.'),1)    \" only one\n\nsynIDattr(id,\"bg\")\nsynIDattr(id,\"name\")\nsynIDtrans()\n\n\" syntax stack\nmap(synstack(line('.'), col('.')), 'synIDattr(v:val, \"name\")')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Shell"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"system('ls '.shellescape(expand('%:h')))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Registers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"getreg('*')\ngetregtype('*')     \" v(char), V(line) <ctrl-v>(block)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Comparisons"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"if name ==# 'John'     \" case-sensitive\nif name ==? 'John'     \" case-insensitive\nif name == 'John'      \" depends on :set ignorecase\n\" also: is#, is?, >=#, >=?, and so on\n\nif \"hello\" =~ '.*'\nif \"hello\" !~ '.*'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Executing"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running commands"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"normal 'ddahello'\nexe 'normal ^C'  \" with expansions\nwincmd J\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Vimscript functions",category:"Vim",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /tabular",context:{nodePath:"/tabular",category:"Vim",title:"Tabular"}}},{node:{id:"SitePage /projectionist",context:{nodePath:"/projectionist",category:"Vim",title:"Projectionist"}}},{node:{id:"SitePage /vim-digraphs",context:{nodePath:"/vim-digraphs",category:"Vim",title:"Vim digraphs"}}},{node:{id:"SitePage /vim-easyalign",context:{nodePath:"/vim-easyalign",category:"Vim",title:"Vim Easyalign"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vimscript-functions.md absPath of file >>> MarkdownRemark",nodePath:"/vimscript-functions",nodeType:"sheet",title:"Vimscript functions",category:"Vim",weight:0,updated:null}}}});
//# sourceMappingURL=path---vimscript-functions-a1d8fa9da6acec59b0d3.js.map