gulp.task('clean', function () {
    return gulp.src(config['tasks']['clean']['watch'])

        .pipe(modules['gulp-clean'](config['tasks']['clean']['params']))
        .on('error', swallowError);
});