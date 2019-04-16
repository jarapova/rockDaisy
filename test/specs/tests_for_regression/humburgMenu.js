const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
//==== login
    // $("(//input[@placeholder='Email'])[1]").setValue('eugene@trueautomation.io');
    $(ta('rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    // $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');

    // $("//input[@placeholder='Password']").setValue('trueautomation.io');
    $(ta('rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    // $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');

    // $("(//button[@class='k-button pull-right'])[1]").click();
    $(ta('rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast
//=============
    //click on humburg
    // $(="//a[@class='sports-science-nav-bar']").click();
    $(ta('rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    // $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(2000)//for clarity

    //click to select dashboard portal
    // $("//div[@class='rd-custom-tooltip 1']/a").click();
    $(ta('rockdaisy:atom:dashboardPortal', "//div[@class='rd-custom-tooltip 1']/a")).click();
    // $(ta('exp:rockdaisy:picker:dashboardPortal')).click();
    browser.pause(2000)//for clarity

    //click to select content TEST THIRD PARTY 2
    // $("(//a[@class='view-content'])[3]").click();
    $(ta('rockdaisy:atom:dashboardContent', "(//a[@class='view-content'])[3]")).click();
    // $(ta('exp:rockdaisy:picker:dashboardContent')).click();
    browser.pause(2000)


  });
});
