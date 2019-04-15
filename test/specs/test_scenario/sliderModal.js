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

    //click to select roan 123
    $(ta('exp:rockdaisy:picker:roan123')).click();
    browser.pause(10000)//for clarity

    //click to open SlideShow modal
    $(ta('exp:rockdaisy:picker:addSlideShow')).click();
    browser.pause(1000)//for clarity

    //click to close SlideShow modal
    $(ta('exp:rockdaisy:picker:sliderName')).setValue('newSlideName');
    browser.pause(1000)//for clarity

    //enter name in title
    $(ta('exp:rockdaisy:picker:newSlideName2')).click();
    browser.pause(1000)//for clarity

    //click to add slides
    $(ta('exp:rockdaisy:picker:newSlideName3')).click();
    browser.pause(1000)//for clarity

    //click to save
    $(ta('exp:rockdaisy:picker:saveBtn')).click();
    browser.pause(1000)//for clarity

    //click on logo to comeback on home page
    $(ta('exp:rockdaisy:picker:logo')).click();
    browser.pause(1000)//for clarity

    //click to toggle tabs
    $(ta('exp:rockdaisy:picker:togleTabs')).click();
    browser.pause(1000)//for clarity

    //click to delete created slider
    $(ta('exp:rockdaisy:picker:deleteSlider')).click();
    browser.pause(1000)//for clarity

    //click removeBtn
    $(ta('exp:rockdaisy:picker:removeBtn')).click();
    browser.pause(1000)//for clarity

  });
});
