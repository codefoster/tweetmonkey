var five = require("johnny-five");
var Pi = require("raspi-io");
var Twitter = require('twitter');

var board = new five.Board({
  io: new Pi()
});

//configure the Twitter module with our consumer and access keys
//obtain these by going to apps.twitter.com
var twit = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var ON_DURATION = 2000;

board.on("ready", function() {
    var monkey = new five.Pin("GPIO23");
    var light = new five.Led("GPIO24");
    
    //monitor tweets by tracking a hash tag
    twit.stream('statuses/filter', { track: '#tweetmonkey' }, function (stream) {
        //turn on an LED to indicate that we're waiting for a tweet
        light.on();

        stream.on('data', function (tweet) {
            //log the tweet to the screen so we can see it if we have a console
            console.log('Tweet received from ' + tweet.user.screen_name + ': "' + tweet.text + '"');
            
            //take the pin high to animate the monkey
            monkey.high();
            
            //after some time, turn the monkey back off again
            setTimeout(function () { monkey.low(); }, ON_DURATION);
        });
    });

    board.on("warn", function(event) {
        //when the process shuts down, turn off the light
        if(event.class === 'Board' || event.message === 'Closing.') {
            monkey.low();
            light.off();
        }
    });

});

