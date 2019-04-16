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

    //click select sorting
    $(ta('exp:rockdaisy:picker:sortByName')).click();
    browser.pause(3000)//for clarity

    $(ta('exp:rockdaisy:picker:sortByName')).getAttribute('data-offset-index','1');
    browser.pause(3000)//for clarity
    browser.keys("\uE007");
    browser.pause(3000)//for clarity

    //click select sorting
    $(ta('exp:rockdaisy:picker:filterBy')).click();
    browser.pause(3000)//for clarity

    $(ta('exp:rockdaisy:picker:filterBy')).getAttribute('data-offset-index','2');
    browser.pause(3000)//for clarity
    browser.keys("\uE007");
    browser.pause(3000)//for clarity
  });
});
