## Deploy and Run the Program

Next, we are going to ssh to the device and run our code...

```
ssh pi@raspberrypi.local
```

Once on the device, `cd tweetmonkey` to get into the project directory.

Then install npm packages using...
```
npm install
```

That's going to take a while, because it has to do the builds for the `johnny-five` and `raspi-io`. 

Then configure your Twitter API environment variables using...

```
export TWITTER_CONSUMER_KEY="(value)"
export TWITTER_CONSUMER_SECRET="(value)"
export TWITTER_ACCESS_TOKEN_KEY="(value)"
export TWITTER_ACCESS_TOKEN_SECRET="(value)"
```

> I recommend you `sudo nano ~/.profile` and add these environment variables to the end so they'll still be there the next time you login.

And finally, you can run your code with...
```
sudo -E node .
```

You have to use `sudo` because you're accessing the GPIO pins and that's just a requirement. The `-E` variable tells sudo to keep the environment variables from the current user. In case you haven't seen `node .`, that's just the command to execute the node runtime starting with the current directory.
