## Write the code

Actually, you're mostly going to download and then configure your code. It's all written for you.

The GitHub repository for the entire Tweet Monkey project is at <a href="http://github.com/codefoster/tweetmonkey">github.com/codefoster/tweetmonkey</a>. That repository uses submodules to link in the Raspbian specific project code which is under its own repository at <a href="http://github.com/codefoster/tweetmonkey-raspi">github.com/codefoster/tweetmonkey-raspi</a>. You can either choose to clone the entire Tweet Monkey project or you can just grab the Raspbian code.

To clone the Raspbian code only, do this...

1. Make sure git works at your console by opening a console window and typing `git`.
1. Change to whatever directory you use for storing your repositories (mine is `c:\code`).
1. Clone the repository by executing `git clone https://github.com/codefoster/tweetmonkey-raspi.git`

Now you have the code. There's really only one thing you need to do and that is edit the config.js file.

You can use whatever text editor you want for editing JavaScript, but I like Visual Studio Code and that's what I'll be showing here.

You can download Code for Windows, Mac, or Linux and it's free, so no excuses there. Go to <a href="http://visualstudio.com">visualstudio.com</a>

<img alt="Visual Studio Code" src="images/tweetmonkey/vs-code.png"/>

To open your code in Visual Studio Code, you simply change to the tweetmonkey-raspi directory that was created when you cloned the project and type 'code .'. That opens the current directory in Code. 

Now we need to transfer the code onto the raspberry pi. We need to use scp to transfer the files on to the pi. Be sure you are in the tweetmonkey-raspi folder. 

To SCP, use... 
```
scp index.js config.js package.json pi@192.168.1.13 // or whatever your IP address happens to be
```