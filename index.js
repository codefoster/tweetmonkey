let five = require("johnny-five");
let Pi = require("raspi-io");
let Twitter = require('twitter');

let board = new five.Board({
  io: new Pi()
});

// configure the Twitter module with our consumer and access keys
// obtain these by going to apps.twitter.com
let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let ON_DURATION = 2000;
let SEARCH_TERM = "#tweetmonkey";

board.on("ready", () => {
    let monkey = new five.Pin("GPIO23");
    let light = new five.Led("GPIO24");

    //monitor tweets by tracking a hash tag
    client.stream('statuses/filter', { track: SEARCH_TERM }, stream => {
        //turn on an LED to indicate that we're waiting for a tweet
        light.on();

        stream.on('data', tweet => {
            //log the tweet to the screen so we can see it if we have a console
            console.log('Tweet received from ' + tweet.user.screen_name + ': "' + tweet.text + '"');
            
            //take the pin high to animate the monkey
            monkey.high();
            
            //after some time, turn the monkey back off again
            setTimeout(() => monkey.low(), ON_DURATION);
        });

        stream.on('error', err => console.log(err));
    });

    board.on("warn", event => {
        //when the process shuts down, turn off the light
        if(event.class === 'Board' || event.message === 'Closing.') {
            monkey.low();
            light.off();
        }
    });
});