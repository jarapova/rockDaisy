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
    // $("//a[@class='sports-science-nav-bar']").click();
    $(ta('rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    // $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(2000)//for clarity

    //click to select category2
    // $("//div[@class='rd-custom-tooltip 5']/a").click();
    $(ta('rockdaisy:atom:category2', "//div[@class='rd-custom-tooltip 5']/a")).click();
    // $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(2000)//for clarity


    //click to select content roan 123
    // $("//a[@class='view-content'])[2]").click();
    $(ta('rockdaisy:atom:roan123', "(//a[@class='view-content'])[2]")).click();
    // $(ta('exp:rockdaisy:picker:roan123')).click();

    browser.pause(10000)//for clarity

    //click to open filters
    // $("//div[text()='Filters']").click();
    $(ta('rockdaisy:atom:filtersBtn', "//div[text()='Filters']")).click();
    // $(ta('exp:rockdaisy:picker:filtersBtn')).click();
    browser.pause(2000)//for clarity

    //click to select test date
    // $("(//a/span[@class='dimension-label rd-custom-tooltip'])[1]").click();
    $(ta('rockdaisy:atom:testDate', "(//a/span[@class='dimension-label rd-custom-tooltip'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:testDate')).click();
    browser.pause(2000)//for clarity

    //click to Apply
    // $("//button[text()='APPLY']").click();
    $(ta('rockdaisy:atom:apply', "//button[text()='APPLY']")).click();
    // $(ta('exp:rockdaisy:picker:apply')).click();
    browser.pause(2000)//for clarity

    //click to come back
    // $("//span[@class='icon-arrow-back']").click();
    $(ta('rockdaisy:atom:arrowBack', "//span[@class='icon-arrow-back']")).click();
    // $(ta('exp:rockdaisy:picker:arrowBack')).click();
    browser.pause(2000)//for clarity

    //click on HOME/AWAY
    // $("(//a/span[@class='dimension-label rd-custom-tooltip'])[1]").click();
    $(ta('rockdaisy:atom:homeAwayFilter', "(//a/span[@class='dimension-label rd-custom-tooltip'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:homeAwayFilter')).click();
    browser.pause(2000)//for clarity

    //click to switch HOME
    // $("(//button[@class='k-button rd-list-link-item k-primary'])[1]").click();
    $(ta('rockdaisy:atom:switchHome', "(//button[@class='k-button rd-list-link-item k-primary'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:switchHome')).click();
    browser.pause(2000)//for clarity

    //click to Apply
    // $("//button[text()='APPLY']").click();
    $(ta('rockdaisy:atom:apply', "//button[text()='APPLY']")).click();
    // $(ta('exp:rockdaisy:picker:apply')).click();
    browser.pause(2000)//for clarity

    //click to close panel
    // $("//span[@class='icon-close']").click();
    $(ta('rockdaisy:atom:closePanel', "//span[@class='icon-close']")).click();
    // $(ta('exp:rockdaisy:picker:closePanel')).click();
    browser.pause(1000)//for clarity
  });
});
