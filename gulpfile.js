var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    karma = require('gulp-karma'),
    ts = require('gulp-typescript');

gulp.task('typescript', function() {
    console.log('Compiling typescript');
    return gulp.src(['app/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .pipe(gulp.dest('app'))
        .on('finish', function(){
            console.log("finished compiling typescript")
        });
});

var testFiles = [
    'node_modules/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'app/common/conf/app.modules.registry.js',
    'app/common/conf/app.core.module.js',
    'app/**/*.js',
    'test/**/*.js'
];

gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules{,/**}']).pipe(jshint()).pipe(jshint.reporter(stylish))
});

gulp.task('default', ['typescript','lint','test']);
