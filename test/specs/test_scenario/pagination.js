const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });
    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');
    $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(1000)// need for step, because test goes very fast

    //click on humburg
    $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(1000)//for clarity
    //click to select category2
    $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(1000)//for clarity

    //click to add new
    $(ta('exp:rockdaisy:picker:new')).click();
    browser.pause(1000)//for clarity

    //click to add advensed search
    $(ta('exp:rockdaisy:picker:nadvensedSearchew')).click();
    browser.pause(2000)//for clarity

    //click to for collapse TEAM:ATL
    $(ta('exp:rockdaisy:picker:teamATL')).click();
    browser.pause(1000)//for clarity

    //click to select pagination
    $(ta('exp:rockdaisy:picker:pagination3')).click();
    browser.pause(1000)//for clarity

    //click to select pagination
    $(ta('exp:rockdaisy:picker:pagination5')).click();
    browser.pause(1000)//for clarity


  });
});
