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
    //click to select category2
    $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(1000)//for clarity

    //click to select content roan 123
    $(ta('exp:rockdaisy:picker:roan123')).click();
    browser.pause(1000)//for clarity

    //click to open filters
    $(ta('exp:rockdaisy:picker:filtersBtn')).click();
    browser.pause(2000)//for clarity

    //click to select test date
    $(ta('exp:rockdaisy:picker:testDate')).click();
    browser.pause(2000)//for clarity

    //click to Apply
    $(ta('exp:rockdaisy:picker:apply')).click();
    browser.pause(2000)//for clarity

    //click to come back
    $(ta('exp:rockdaisy:picker:arrowBack')).click();
    browser.pause(2000)//for clarity

    //click on HOME/AWAY
    $(ta('exp:rockdaisy:picker:homeAwayFilter')).click();
    browser.pause(2000)//for clarity

    //click to switch HOME
    $(ta('exp:rockdaisy:picker:switchHome')).click();
    browser.pause(2000)//for clarity

    //click to Apply
    $(ta('exp:rockdaisy:picker:apply')).click();
    browser.pause(2000)//for clarity

    //click to close filter panel
    $(ta('exp:rockdaisy:picker:closePanel')).click();
    browser.pause(2000)//for clarity

  });
});
