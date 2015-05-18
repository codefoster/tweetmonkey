var twitter = require('twitter');
var cylon = require('cylon');
var config = require('./config');

var twit = new twitter({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token_key: config.accessTokenKey,
    access_token_secret: config.accessTokenSecret
});

cylon.robot({
    name: 'edison',
    connections: { edison: { adaptor: 'intel-iot' } },
    devices: { monkey: { driver: 'direct-pin', pin: 2 } },
    work: function (edison) {
        //monitor by topic
        twit.stream('filter', { track: '#tweetmonkey' }, function (stream) {
            stream.on('data', function (data) {
                console.log('Tweet received from ' + data.user.screen_name + ': "' + data.text + '"');
                edison.monkey.digitalWrite(1);
                setTimeout(function () { edison.monkey.digitalWrite(0); }, 2000);
            });
        });
    }
}).start();

