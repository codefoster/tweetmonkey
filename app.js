var five = require("johnny-five");
var Edison = require("edison-io");
var Twitter = require('twitter');
var config = require('./config');

var board = new five.Board({
  io: new Edison()
});

var twit = new Twitter({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token_key: config.twitter.accessTokenKey,
    access_token_secret: config.twitter.accessTokenSecret
});

var ON_DURATION = 2000;

board.on("ready", function() {
  var monkey = new five.Pin("GP44");
    
    //monitor by topic
    twit.stream('filter', { track: '#tweetmonkey' }, function (stream) {
        stream.on('data', function (data) {
            console.log('Tweet received from ' + data.user.screen_name + ': "' + data.text + '"');
            monkey.high();
            setTimeout(function () { monkey.low(); }, ON_DURATION);
        });
    });

});