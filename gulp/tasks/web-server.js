gulp.task('web-server', function () {
    gulp.src(config['public'])
        .pipe(modules['gulp-webserver'](config['tasks']['web-server']['server']));
});