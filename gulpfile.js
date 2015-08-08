/// <vs AfterBuild='deploy' />
var gulp = require('gulp');
var Candyman = require('candyman');

var candyman = new Candyman({
    targetDevices: [
        { devicename: 'mydevice', hostname: 'mydevice.local' }
    ],
    projectName: 'tweetmonkey',
    user: 'root',
    password: '',
    startFile: 'app.js'
});

gulp.task('deploy', function () {
    return candyman.deploy();
});