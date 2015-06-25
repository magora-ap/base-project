gulp.task('pack-html', function () {
    return gulp.src(config['tasks']['pack-html']['watch'])

        .pipe(modules['gulp-if'](config.isProduction, modules['gulp-minify-html'](config['tasks']['pack-html']['params'])))
        .on('error', swallowError)

        .pipe(modules['gulp-concat'](config['tasks']['pack-html']['outFileName']))
        .on('error', swallowError)

        .pipe(gulp.dest(config['public']));
});