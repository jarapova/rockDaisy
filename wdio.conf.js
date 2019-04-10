exports.config = {
  runner: 'local',
  specs: [
    //'./test/specs/**/*.js'
    './test/specs/**/loginPicker.js'
    //'./test/specs/**/comments.js'
    //'./test/specs/test_scenario/exampleTest.js'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'error',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 120000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['trueautomation'],
  path: '/',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },
}
