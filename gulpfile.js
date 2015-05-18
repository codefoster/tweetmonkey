/// <vs AfterBuild='deploy' />
var gulp = require('gulp');
var config = require('./gulpconfig');
var Candyman = require('candyman');

var candyman = new Candyman(config);

gulp.task('deploy', function () {
    return candyman.deploy();
});