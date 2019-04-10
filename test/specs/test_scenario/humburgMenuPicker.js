const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');
    $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast

    //click on humburg
    $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(1000)//for clarity
    //click to select dashboard portal
    $(ta('exp:rockdaisy:picker:dashboardPortal')).click();
    browser.pause(1000)//for clarity
    //click to select content TEST THIRD PARTY 2
    $(ta('exp:rockdaisy:picker:dashboardContent')).click();
    browser.pause(1000)//for clarity














    browser.pause(2000)


  });
});
