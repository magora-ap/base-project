gulp.task('css', function () {
    return modules['streamqueue'](
        {objectMode: true},
        gulp.src(config['tasks']['css']['vendors']),
        gulp.src(config['tasks']['css']['watch'])

        .pipe(modules[config['tasks']['css']['method']]())
        .on('error', swallowError)

        .pipe(modules['gulp-if'](config.isProduction, modules['gulp-minify-css'](config['tasks']['css']['params'])))
        .on('error', swallowError)
    )

        .pipe(modules['gulp-concat'](config['tasks']['css']['outFileName']))
        .on('error', swallowError)

        .pipe(gulp.dest(config['tmp']));
});