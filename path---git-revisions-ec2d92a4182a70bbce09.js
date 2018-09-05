webpackJsonp([0xadd0a2fdde44],{867:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Example usages"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master...develop"}]},{type:"text",value:"  | inspect differences in branches         |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git rebase -i"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD~3"}]},{type:"text",value:"      | rebase last 3 commits                   |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git reset --hard"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD@{2}"}]},{type:"text",value:" | undo last operation that changed HEAD   |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v2^{}"}]},{type:"text",value:"        | checkout the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v2"}]},{type:"text",value:" tag (not "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v2"}]},{type:"text",value:" branch) |"}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The 3rd argument in each of these commands is a "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gitrevision"}]},{type:"text",value:". These gitrevisions can be passed to many Git commands."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Common git revisions"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Reference"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dae68e1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"sha1"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"reference"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v1.0.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"tag"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"local branch"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"origin/master"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"remote branch"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master~2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"2 commits back from master"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master..fix"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"reachable from \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fix"}]},{type:"text",value:"\n but not \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master...fix"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"reachable from \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fix"}]},{type:"text",value:"\n and \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:"\n, but not both"}]}]}]}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These are just the common ones, there's a lot more below! (These work in many other commands, not just "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git show"}]},{type:"text",value:".)"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Commits"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dae68e1"}]},{type:"text",value:" | sha1 |"}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Example"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"reference"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"branch"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v1.0.0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"tag"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"origin/master"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"aka, \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"refs/remotes/origin/master"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"heads/master"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"aka, \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"refs/heads/master"}]}]}]}]}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Searching back"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Example"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master@{yesterday}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"also \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"1 day ago"}]},{type:"text",value:"\n, etc"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master@{2}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"2nd prior value"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master@{push}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"where \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:"\n would push to"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master^"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"parent commit"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master^2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"2nd parent, eg, what it merged"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master~5"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"5 parents back"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master^0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"this commit; disambiguates from tags"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v0.99.8^{tag}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"can be \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"commit"}]},{type:"text",value:"\n, \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"tag"}]},{type:"text",value:"\n, \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"tree"}]},{type:"text",value:"\n, \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"object"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"v0.99.8^{}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"defaults to \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"{tag}"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git checkout"}]}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'":/fix bug"'}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"searches commit messages"}]}]}]}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Other"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD:README"}]},{type:"text",value:" | ...          |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"0:README"}]},{type:"text",value:"    | (0 to 3) ... |"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Ranges"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ranges"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:"       | reachable parents from master                   |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"^master"}]},{type:"text",value:"      | exclude reachable parents from master           |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master..fix"}]},{type:"text",value:"  | reachable from "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fix"}]},{type:"text",value:" but not "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:"           |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master...fix"}]},{type:"text",value:" | reachable from "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fix"}]},{type:"text",value:" and "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:", but not both |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD^@"}]},{type:"text",value:"       | parents of "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"HEAD"}]},{type:"text",value:"                               |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD^!"}]},{type:"text",value:"       | "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"HEAD"}]},{type:"text",value:", then excluding parents's ancestors      |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"HEAD^{:/fix}"}]},{type:"text",value:" | search previous "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"HEAD"}]},{type:"text",value:"s matching criteria       |"}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ranges illustration"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-nohighlight"]},children:[{type:"text",value:"A ─┬─ E ── F ── G   master\n   │\n   └─ B ── C ── D   fix\n"}]}]},{type:"comment",value:" {.-box-chars.-setup} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master..fix"}]},{type:"text",value:"  | BCD         |\n| "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"git log"}]}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"master...fix"}]},{type:"text",value:" | BCD and EFG |"}]},{type:"comment",value:" {.-mute-em} "},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html"},children:[{type:"text",value:"Git Tools - Revision Selection"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(git-scm.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html"},children:[{type:"text",value:"gitrevisions(7)"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(kernel.org)"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Git revisions",category:"Git",intro:"A list of revision specifications you can use with `git log` and many other Git commands. Summarized from `gitrevisions(7)` man page.\n"}},relatedPages:{edges:[{node:{id:"SitePage /tig",context:{nodePath:"/tig",category:"Git",title:"Tig"}}},{node:{id:"SitePage /git-log-format",context:{nodePath:"/git-log-format",category:"Git",title:"Git log format string"}}},{node:{id:"SitePage /git-branch",context:{nodePath:"/git-branch",category:"Git",title:"Git branches"}}},{node:{id:"SitePage /git-extras",context:{nodePath:"/git-extras",category:"Git",title:"Git extras"}}},{node:{id:"SitePage /git-log",context:{nodePath:"/git-log",category:"Git",title:"git log"}}},{node:{id:"SitePage /git-tricks",context:{nodePath:"/git-tricks",category:"Git",title:"Git tricks"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/git-revisions.md absPath of file >>> MarkdownRemark",nodePath:"/git-revisions",nodeType:"sheet",title:"Git revisions",category:"Git",weight:0,updated:"2017-10-11T00:00:00.000Z"}}}});
//# sourceMappingURL=path---git-revisions-ec2d92a4182a70bbce09.js.map