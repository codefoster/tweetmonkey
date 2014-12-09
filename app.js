var twitter = require('twitter');
var cylon = require('cylon');

var twit = new twitter({
    consumer_key: '{CONSUMER_KEY}',
    consumer_secret: '{CONSUMER_SECRET}',
    access_token_key: '{ACCESS_TOKEN_KEY}',
    access_token_secret: '{ACCESS_TOKEN}'
});

cylon.robot({
    connections: { edison: { adaptor: 'intel-iot' } },
    devices: { monkey: { driver: 'direct-pin', pin: 2 } },
    work: function (edison) {
        twit.stream('filter', { track: '{TWITTER_SEARCH}' }, function (stream) {
            stream.on('data', function (data) {
                eddie.monkey.turnOn();
                setTimeout(function () { eddie.monkey.turnOff(); }, 5000);
            });
        });
    }
}).start();

