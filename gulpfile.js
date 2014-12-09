var gulp = require('gulp');
var scp = require('gulp-scp2');

gulp.task('deploy', function () {
    return gulp.src(['*.{js,json}','!gulpfile.js'])
        .pipe(scp({
            host: '192.168.1.13',
            username: 'root',
            password: '12345678',
            dest: 'tweetmonkey'
        }))
        .on('error', function (err) {
            console.log('ERR: ' + err);
        });
});
