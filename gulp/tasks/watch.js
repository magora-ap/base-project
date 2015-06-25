gulp.task('watch', function () {

    function watch(src, task) {
        modules['gulp-watch'](src, function () {
            gulp.start(task);
        });
    }

    for (var key in config['tasks']['watch']['tasks']) {
        if (!config['tasks']['watch']['tasks'].hasOwnProperty(key)) {
            continue;
        }

        if (typeof config['tasks']['watch']['tasks'][key] === 'string') {
            var task = config['tasks']['watch']['tasks'][key];
            watch(config['tasks'][task]['watch'], task)
        }
        else {
            watch(config['tasks']['watch']['tasks'][key]['src'], modules['gulp-sync'](gulp).sync(config['tasks']['watch']['tasks'][key]['tasks']))
        }
    }

});