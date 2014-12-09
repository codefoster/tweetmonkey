var twitter = require('twitter');
var cylon = require('cylon');

var SCREEN_NAME = 'codefoster';
var userId;

var twit = new twitter({
    consumer_key: 'PtSCmBwpSPtc8zQRDJ3FtbhJj',
    consumer_secret: 'CsAsJ8fMDS3EPvhQhJato8La6MwSiuEm1pAZbEDKDYULCFO517',
    access_token_key: '476376242-RgYPm0nf8GWNe7ppxU5fLq9KXbnu5m2AS3qB0Aox',
    access_token_secret: 'P0V7b94x0Csmw31GvbwfI45h9p4gKPMAIXNtMauFtz8vT'
});

cylon.robot({
    connections: { edison: { adaptor: 'intel-iot' } },
    devices: { monkey: { driver: 'direct-pin', pin: 2 } },
    work: function (edison) {
        twit.stream('filter', { track: '#cfmonkey' }, function (stream) {
            stream.on('data', function (data) {
                edison.monkey.digitalWrite(1);
                setTimeout(function () { edison.monkey.digitalWrite(0); }, 5000);
            });
        });
    }
}).start();

