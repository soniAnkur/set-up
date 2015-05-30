var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    karma = require('gulp-karma'),
    ts = require('gulp-typescript'),
    gutil = require('gulp-util'),
    path = require('path'),
    server = require('karma/lib/server')
    karmaParseConfig = require('karma/lib/config').parseConfig;

function runKarma(configFilePath, options, cb) {

    configFilePath = path.resolve(configFilePath);

    var log=gutil.log, colors=gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {
        config[key] = options[key];
    });

    server.start(config, function(exitCode) {
        log('Karma has exited with ' + colors.red(exitCode));
        cb();
        process.exit(exitCode);
    });
}

/** actual tasks */

/** single run */
gulp.task('test', function(cb) {
    runKarma('karma.conf.js', {
        autoWatch: false,
        singleRun: true
    }, cb);
});


gulp.task('typescript', function() {
    console.log('Compiling typescript');
    return gulp.src(['app/**/*.ts'])
        .pipe(ts({module: 'AMD'}))
        .pipe(gulp.dest('app'))
        .on('finish', function(){
            console.log("finished compiling typescript")
        });
});

gulp.task('test-typescript', function() {
    console.log('Compiling test typescript');
    return gulp.src(['test/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .pipe(gulp.dest('test'))
        .on('finish', function(){
            console.log("finished compiling test typescript")
        });
});



gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules{,/**}']).pipe(jshint()).pipe(jshint.reporter(stylish))
});

gulp.task('default', ['test-typescript','typescript','lint','test']);
