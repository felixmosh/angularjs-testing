const babel = require('babel-core');
const wallabyWebpack = require('wallaby-webpack');
process.env.npm_lifecycle_event = 'test';
const webpackConfig = require('./webpack.config');
webpackConfig.entryPatterns = ['src/app/index.js', 'src/**/*.spec.js'];
module.exports = function (wallaby) {
  return {
    debug: true,
    files: [
      'node_modules/babel-polyfill/browser.js',
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.js', load: false},
      {pattern: 'src/**/*.spec.js', ignore: true}
    ],
    tests: [
      {pattern: 'src/**/*.spec.js', load: false}
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        sourceMap: true,
        presets: ['es2015', 'stage-2']
      })
    },
    postprocessor: wallabyWebpack(webpackConfig),
    env: {
      type: 'browser',
      runner: require('phantomjs2-ext').path,
      params: {runner: '--web-security=false'}
    },
    testFramework: 'jasmine',
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  }
};
