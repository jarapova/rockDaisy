const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    //before the test you need to move 100RUSHYDS to another position and record it

    browser.url('https://test.rockdaisy.com');
    $(ta(   'exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');
    $(ta(   'exp:rockdaisy:picker:pass')).setValue('trueautomation.io');
    $(ta(   'exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000);// need for step, because test goes very fast

    //click on humburg
    $(ta(   'exp:rockdaisy:picker:humburg')).click();
    browser.pause(1000);//for clarity
    //click to select category2
    $(ta(   'exp:rockdaisy:picker:category2')).click();
    browser.pause(1000);//for clarity

    //click to select content roan 123
    $(ta(   'exp:rockdaisy:picker:roan123')).click();
    browser.pause(3000);//for clarity

    $(ta(   'exp:rockdaisy:picker:100RUSHYDS')).click();
     browser.pause(2000);//for clarity

  });
});
