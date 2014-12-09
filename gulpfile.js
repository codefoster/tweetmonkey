/// <vs AfterBuild='deploy' />
var gulp = require('gulp');
var scp = require('gulp-scp2');
var config = require('./config');

gulp.task('deploy', function () {
    return gulp.src(['*.{js,json}','!gulpfile.js'])
        .pipe(scp({
            host: config.ipAddress,
            username: config.username,
            password: config.password,
            dest: config.deployFolder
        }))
        .on('error', function (err) {
            console.log('ERR: ' + err);
        });
});
