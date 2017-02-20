## Write the Code

Actually, you're mostly going to just configure your code. I've written it all for you.

You can use whatever text editor you want for editing JavaScript, but I like Visual Studio Code and that's what I'll be showing here.

You can download Code for Windows, Mac, or Linux and it's free, so no excuses there. Go to [visualstudio.com](http://visualstudio.com).

![Visual Studio Code](images/tweetmonkey/vs-code.png)

To open your code in Visual Studio Code, you simply change to the tweetmonkey-raspi directory that was created when you cloned the project and type `code .`. That opens the current directory in Code. 

Now we need to transfer the code onto the Pi using either `rsync` or `scp`. If you're a Windows user, you may not have access to these applications. In that case, simply add the `usr/bin` folder from your Git installation to the PATH environment varialbe. This lighs up a ton of Linux commands from PowerShell/cmd.

Be sure you are in the tweetmonkey folder. 

To SCP, use... 
```
scp index.js package.json pi@raspberrypi.local
```

I like to use `rsync`. Here's how to do that...

```
rsync -av -e ssh . pi@raspberrypi.local:~/tweetmonkey
```

In both cases, you'll be prompted for your the password to your Pi until you setup ssh keys to make that annoyance go away.

Next, learn how to [deploy and run the program](deploy.md).