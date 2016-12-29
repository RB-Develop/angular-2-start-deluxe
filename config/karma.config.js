const conf = require('./gulp.config');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: config.LOG_INFO,
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'jasmine',
      'source-map-support'
    ],
    files: [
      'node_modules/es6-shim/es6-shim.js',
      'karma.entry.ts'
    ],
    preprocessors: {
      'karma.entry.ts': [
        'webpack',
        'sourcemap'
      ]
    },
    reporters: [
      'progress',
      'coverage',
      'remap-coverage',
      'junit'
    ],
    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      'json': './reports/coverage/coverage.json',
      'html': './reports/coverage/html',
      'cobertura': './reports/coverage/cobertura.xml'
    },
    junitReporter: {
      outputDir: 'reports/junit'
    },
    webpack: require('./webpack.config.test'),
    webpackMiddleware: {
      noInfo: true
    }
  };

  config.set(configuration);
};
