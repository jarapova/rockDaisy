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
    browser.pause(2000)//for clarity
    //click to select category2
    $(ta('exp:rockdaisy:atom:category2', "//div[@class='rd-custom-tooltip 5']/a")).click();
    browser.pause(2000)//for clarity


    //click to select content roan 123
    $(ta('exp:rockdaisy:atom:roan123', "(//a[@class='view-content'])[2]")).click();
    browser.pause(2000)//for clarity

    //click to open filters
    $(ta('exp:rockdaisy:atom:filtersBtn', "//div[text()='Filters']")).click();
    browser.pause(2000)//for clarity

    //click to select test date
    $(ta('exp:rockdaisy:atom:testDate', "(//a/span[@class='dimension-label rd-custom-tooltip'])[1]")).click();
    browser.pause(2000)//for clarity

    //click to Apply
    $(ta('exp:rockdaisy:atom:apply', "//button[text()='APPLY']")).click();
    browser.pause(2000)//for clarity

    //click to come back
    $(ta('exp:rockdaisy:atom:arrowBack', "//span[@class='icon-arrow-back']")).click();
    browser.pause(2000)//for clarity

    //click on HOME/AWAY
    $(ta('exp:rockdaisy:atom:homeAwayFilter', "(//a/span[@class='dimension-label rd-custom-tooltip'])[1]")).click();
    browser.pause(2000)//for clarity

    //click to switch HOME
    $(ta('exp:rockdaisy:atom:switchHome', "(//button[@class='k-button rd-list-link-item k-primary'])[1]")).click();
    browser.pause(2000)//for clarity

    //click to Apply
    $(ta('exp:rockdaisy:atom:apply', "//button[text()='APPLY']")).click();
    browser.pause(2000)//for clarity

    //click to close filter panel
    $(ta('exp:rockdaisy:atom:closePanel', "//span[@class='icon-close']")).click();
    browser.pause(2000)//for clarity
  });
});
