gulp.task('javascript', function () {

    return modules['streamqueue'](
        {objectMode: true},
        gulp.src(config['tasks']['javascript']['vendors']),
        gulp.src(config['tasks']['javascript']['watch'])

            .pipe(modules['gulp-jshint']())
            .pipe(modules['gulp-jshint'].reporter('default'))
            .on('error', swallowError)

            .pipe(modules['gulp-if'](config.isProduction, modules['gulp-uglify'](config['tasks']['javascript']['params'])))
            .on('error', swallowError)

            .pipe(modules['gulp-concat']('app.js'))
            .on('error', swallowError)

    )

        .pipe(modules['gulp-concat'](config['tasks']['javascript']['outFileName']))
        .on('error', swallowError)

        .pipe(gulp.dest(config['tmp']));
});