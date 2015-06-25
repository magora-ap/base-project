gulp.task('tpl-html', function () {
    return gulp.src(config['tasks']['tpl-html']['watch'])

        .pipe(modules['gulp-minify-html']())
        .on('error', swallowError)

        .pipe(modules['gulp-angular-templatecache'](config['tasks']['tpl-html']['params']))
        .on('error', swallowError)

        .pipe(modules['gulp-if'](config.isProduction, modules['gulp-uglify']()))


        .pipe(gulp.dest(config['tmp']));
});