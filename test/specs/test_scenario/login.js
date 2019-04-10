const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    $(ta('exp:rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    browser.pause(2000)
  });
});
