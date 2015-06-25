gulp = require('gulp');
dir = require('require-dir');

config = require('./config.json');

var knownOptions = {
    string: 'env',
    default: {env: process.env.NODE_ENV || 'dev'}
};
var minimist = require('minimist');

var options = minimist(process.argv.slice(2), knownOptions);

if (options['env'] === 'production') {
    config.isProduction = true;
    console.log('Production build')
}
modules = {};

swallowError = function (error) {
    console.log(error.toString());
};

for (var task in config['tasks']) {

    if (!config['tasks'].hasOwnProperty(task)) {
        continue;
    }

    if (config['tasks'][task]['dependence'] && config['tasks'][task]['dependence'].length) {
        for (var i = 0; i < config['tasks'][task]['dependence'].length; i++) {
            if (modules[config['tasks'][task]['dependence'][i]] === undefined) {
                modules[config['tasks'][task]['dependence'][i]] = require(config['tasks'][task]['dependence'][i]);
            }
        }
    }
}

dir('./gulp/tasks', {recurse: true});

gulp.task('default', ['build'], function(){
    gulp.start('watch');
    gulp.start('web-server');
});

