gulp.task('tpl-layout', function () {
    return gulp.src(config['tasks']['tpl-layout']['watch'])

        .pipe(modules['gulp-include']())
        .on('error', swallowError)

        .pipe(gulp.dest(config['tmp']));
});