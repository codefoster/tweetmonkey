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

Then configure your Twitter API environment variables using...

```
export TWITTER_CONSUMER_KEY="(value)"
export TWITTER_CONSUMER_SECRET="(value)"
export TWITTER_ACCESS_TOKEN_KEY="(value)"
export TWITTER_ACCESS_TOKEN_SECRET="(value)"
```

And finally, you can run your code with...
```
node .
```