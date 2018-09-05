webpackJsonp([0xc6c9f39372ed],{750:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Device Basics"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Command"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb devices"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Lists connected devices"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb devices -l"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Lists connected devices and kind"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb root"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Restarts adbd with root permissions"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb start-server"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Starts the adb server"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb kill-server"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Kills the adb server"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb remount"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Remounts file system with read/write access"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb reboot"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Reboots the device"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb reboot bootloader"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Reboots the device into fastboot"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb disable-verity"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Reboots the device into fastboot"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"wait-for-device"}]},{type:"text",value:" can be specified after "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb"}]},{type:"text",value:" to ensure that the command will run once the device is connected."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-s"}]},{type:"text",value:" can be used to send the commands to a specific device when multiple are connected."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ adb wait-for-device devices\n  List of devices attached\n  somedevice-1234 device\n  someotherdevice-1234 device\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ adb -s somedevice-1234 root\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Logcat"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Command"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Starts printing log messages to stdout"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat -g"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Displays current log buffer sizes"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat -G <size>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Sets the buffer size (K or M)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat -c"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Clears the log buffers"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat *:V"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Enables ALL log messages (verbose)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb logcat -f <filename>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Dumps to specified file"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ adb logcat -G 16M\n$ adb logcat *:V > output.log\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"File Management"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Command"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb push <local> <remote>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Copies the local to the device at remote"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb pull <remote> <local>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Copies the remote from the device to local"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'$ echo "This is a test" > test.txt\n$ adb push  test.txt /sdcard/test.txt\n$ adb pull /sdcard/test.txt pulledTest.txt\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Remote Shell"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Command"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell <command>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Runs the specified command on device (most unix commands work here)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell wm size"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Displays the current screen resolution"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell wm size WxH"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Sets the resolution to WxH"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell pm list packages"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Lists all installed packages"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell pm list packages -3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Lists all installed 3rd-party packages"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"adb shell monkey -p app.package.name"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Starts the specified package"}]}]}]}]}],data:{quirksMode:!1}},frontmatter:{title:"adb (Android Debug Bridge)",category:"CLI",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /cron",context:{nodePath:"/cron",category:"CLI",title:"Cron"}}},{node:{id:"SitePage /httpie",context:{nodePath:"/httpie",category:"CLI",title:"httpie"}}},{node:{id:"SitePage /fish-shell",context:{nodePath:"/fish-shell",category:"CLI",title:"Fish shell"}}},{node:{id:"SitePage /composer",context:{nodePath:"/composer",category:"CLI",title:"composer"}}},{node:{id:"SitePage /rsync",context:{nodePath:"/rsync",category:"CLI",title:"Rsync"}}},{node:{id:"SitePage /watchexec",context:{nodePath:"/watchexec",category:"CLI",title:"Watchexec"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/adb.md absPath of file >>> MarkdownRemark",nodePath:"/adb",nodeType:"sheet",title:"adb (Android Debug Bridge)",category:"CLI",weight:-1,updated:"2018-03-06T00:00:00.000Z"}}}});
//# sourceMappingURL=path---adb-1fb45b55639effffe04f.js.map