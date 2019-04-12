const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');
    $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000);// need for step, because test goes very fast

    //click on humburg
    $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(2000);//for clarity
    //click to select category2
    $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(2000);//for clarity

    //click to select content roan 123
    $(ta('exp:rockdaisy:picker:roan123')).click();
    browser.pause(10000);//for clarity

    //click to open comments
    $(ta('exp:rockdaisy:picker:commentsBtn')).click();
    browser.pause(5000);//for clarity
    //click dropdown in comments
    $(ta("spanJul")).click();
    browser.pause(5000);//for clarity

  });
});
