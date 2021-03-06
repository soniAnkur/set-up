// Karma configuration
// Generated on Fri May 22 2015 19:10:21 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','requirejs'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/angular/angular.js', included: true },
      { pattern: 'node_modules/angular-mocks/angular-mocks.js', included: true },
      { pattern: 'app/account-statement/services/vicky.accountStatementService.js', included: true },
      { pattern: 'app/account-statement/controllers/vicky.accountStatementController.js', included: true },
      { pattern: 'test/**/*Test.js', included: false},
      'test-main.js',
    ],
    // list of files to exclude
    exclude: [
      'app/vicky.require.config.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors : {
      'app/**/*.js': 'coverage'
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
