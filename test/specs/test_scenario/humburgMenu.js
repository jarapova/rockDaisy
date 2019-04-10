const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    $(ta('exp:rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    browser.pause(2000)// need for step, because test goes very fast

    //click on humburg
    $(ta('exp:rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    browser.pause(1000)//for clarity
    //click to select dashboard portal
    $(ta('exp:rockdaisy:atom:dashboardPortal', "//div[@class='rd-custom-tooltip 1']/a")).click();
    browser.pause(1000)//for clarity
    //click to select content TEST THIRD PARTY 2
    $(ta('exp:rockdaisy:atom:dashboardContent', "(//a[@class='view-content'])[3]")).click();
    browser.pause(1000)//for clarity














    browser.pause(2000)


  });
});
