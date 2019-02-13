exports.config = {
  baseUrl: 'http://localhost:8080/',

  specs: [
    'e2e/*.e2e-spec.js'
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function () {
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

    browser.ignoreSynchronization = true;
  }
};
