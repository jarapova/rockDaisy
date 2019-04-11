const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta(   'exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');
    $(ta(   'exp:rockdaisy:picker:pass')).setValue('trueautomation.io');
    $(ta(   'exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast

    //click on humburg
    $(ta(   'exp:rockdaisy:picker:humburg')).click();
    browser.pause(1000)//for clarity
    //click to select category2
    $(ta(   'exp:rockdaisy:picker:category2')).click();
    browser.pause(1000)//for clarity

    //click to select content roan 123
    $(ta(   'exp:rockdaisy:picker:roan123')).click();
    browser.pause(2000)//for clarity

    //click to select  reports category
    $(ta(   'exp:rockdaisy:picker:reports')).click();
    browser.pause(2000)//for clarity

    //click to select  reports type Pass YDS
    $(ta(   'exp:rockdaisy:picker:typeYDS')).click();
    browser.pause(1000)//for clarity

    //click to select  reports type VIDEA PERSON SALARY
    $(ta(   'exp:rockdaisy:picker:typeVideaPersonSalary')).click();
    browser.pause(1000)//for clarity

    //click to select  reports type TARGET BREAKDOWN
    $(ta(   'exp:rockdaisy:picker:typeTargetBreakdown')).click();
    browser.pause(1000)//for clarity

  });
});
