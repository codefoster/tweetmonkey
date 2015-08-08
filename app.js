var five = require("johnny-five");
var Edison = require("edison-io");
var Twitter = require('twitter');
var config = require('./config');

var board = new five.Board({
  io: new Edison()
});

//configure the Twitter module with our consumer and access keys
//obtain these by going to apps.twitter.com
var twit = new Twitter({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token_key: config.twitter.accessTokenKey,
    access_token_secret: config.twitter.accessTokenSecret
});

var ON_DURATION = 2000;

board.on("ready", function() {
  var monkey = new five.Pin("GP44");
    
    //monitor tweets by tracking a hash tag
    twit.stream('filter', { track: '#tweetmonkey' }, function (stream) {
        stream.on('data', function (data) {
            //log the tweet to the screen so we can see it if we have a console
            console.log('Tweet received from ' + data.user.screen_name + ': "' + data.text + '"');
            
            //take the pin high to animate the monkey
            monkey.high();
            
            //after some time, turn the monkey back off again
            setTimeout(function () { monkey.low(); }, ON_DURATION);
        });
    });

});