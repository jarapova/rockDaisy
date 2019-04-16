const ta = require('trueautomation-helper').ta;


//**** if this text fall check test 'sliderModal.js', cause  SLIDERSHOWS on home page
//**** may be uncleaned

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });
    browser.url('https://test.rockdaisy.com');
//==== login
    // $("(//input[@placeholder='Email'])[1]").setValue('eugene@trueautomation.io');
    $(ta('rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    // $(ta(   'exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');

    // $("//input[@placeholder='Password']").setValue('trueautomation.io');
    $(ta('rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    // $(ta(   'exp:rockdaisy:picker:pass')).setValue('trueautomation.io');

    // $("(//button[@class='k-button pull-right'])[1]").click();
    $(ta('rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast
//=============

    //click on humburg
    // $("//a[@class='sports-science-nav-bar']").click();
    $(ta('rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    // $(ta(   'exp:rockdaisy:picker:humburg')).click();

    //click to select category2
    // $("(//div[@class='sports-science-nav-bar__group-content']//a)[3]").click();
    $(ta('rockdaisy:atom:category2', "(//div[@class='sports-science-nav-bar__group-content']//a)[3]")).click();
    // $(ta(   'exp:rockdaisy:picker:category2')).click();
    browser.pause(1000)//for clarity

    //click to select content roan 123
    // $("(//a[@class='view-content'])[2]").click();
    $(ta('rockdaisy:atom:roan123', "(//a[@class='view-content'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:roan123')).click();
    browser.pause(10000)//for clarity

    //click to open SlideShow modal
    // $("//span[@class='icon-slideshow']").click();
    $(ta('rockdaisy:atom:addSlideShow',"//span[@class='icon-slideshow']")).click();
    // $(ta(   'exp:rockdaisy:picker:addSlideShow')).click();
    browser.pause(1000)//for clarity

    //click to set new name
    // $("//input[@name='UserUserGroupViewName']").setValue('newSlide1');
    $(ta('rockdaisy:atom:sliderName', "//input[@name='UserUserGroupViewName']")).setValue('newSlide1');
    // $(ta(   'exp:rockdaisy:picker:sliderName')).setValue('newSlide1');
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[2]").click();
    $(ta('rockdaisy:atom:newSlideName2', "(//div[@class='edit-views-favorites-list__item-sub-header'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName2')).click();
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[3]").click();
    $(ta('rockdaisy:atom:newSlideName3', "(//div[@class='edit-views-favorites-list__item-sub-header'])[3]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName3')).click();
    browser.pause(1000)//for clarity

    //click to save
    // $("//button[text()='SAVE']")).click();
    $(ta('rockdaisy:atom:saveBtn', "//button[text()='SAVE']")).click();
    // $(ta(   'exp:rockdaisy:picker:saveBtn')).click();
    browser.pause(1000)//for clarity

    //click to open SlideShow modal
    // $("//span[@class='icon-slideshow']").click();
    $(ta('rockdaisy:atom:addSlideShow',"//span[@class='icon-slideshow']")).click();
    // $(ta(   'exp:rockdaisy:picker:addSlideShow')).click();
    browser.pause(1000)//for clarity

    //click to create new slide
    // $("//button[@ng-click='toggleModalModeToCreateNewSlideShow()']")).click();
    $(ta('rockdaisy:atom:createNewSlide', "//button[@ng-click='toggleModalModeToCreateNewSlideShow()']")).click();
    // $(ta(   'exp:rockdaisy:picker:createNewSlide')).click();
    browser.pause(1000)//for clarity

    //click to set new name
    // $("//input[@name='UserUserGroupViewName']").setValue('newSlide2');
    $(ta('rockdaisy:atom:sliderName', "//input[@name='UserUserGroupViewName']")).setValue('newSlide2');
    // $(ta(   'exp:rockdaisy:picker:sliderName')).setValue('newSlide2');
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[2]").click();
    $(ta('rockdaisy:atom:newSlideName2', "(//div[@class='edit-views-favorites-list__item-sub-header'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName2')).click();
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[3]").click();
    $(ta('rockdaisy:atom:newSlideName3', "(//div[@class='edit-views-favorites-list__item-sub-header'])[3]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName3')).click();
    browser.pause(1000)//for clarity

    //click to save
    // $("//button[text()='SAVE']")).click();
    $(ta('rockdaisy:atom:saveBtn', "//button[text()='SAVE']")).click();
    // $(ta(   'exp:rockdaisy:picker:saveBtn')).click();
    browser.pause(5000)//for clarity

    //click to open SlideShow modal
    // $("//span[@class='icon-slideshow']").click();
    $(ta('rockdaisy:atom:addSlideShow',"//span[@class='icon-slideshow']")).click();
    // $(ta(   'exp:rockdaisy:picker:addSlideShow')).click();
    browser.pause(1000)//for clarity

    //click to create new slide
    // $("//button[@ng-click='toggleModalModeToCreateNewSlideShow()']")).click();
    $(ta('rockdaisy:atom:createNewSlide', "//button[@ng-click='toggleModalModeToCreateNewSlideShow()']")).click();
    // $(ta(   'exp:rockdaisy:picker:createNewSlide')).click();
    browser.pause(1000)//for clarity

    //click to set new name
    // $("//input[@name='UserUserGroupViewName']").setValue('newSlide3');
    $(ta('rockdaisy:atom:sliderName', "//input[@name='UserUserGroupViewName']")).setValue('newSlide3');
    // $(ta(   'exp:rockdaisy:picker:sliderName')).setValue('newSlide3');
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[2]").click();
    $(ta('rockdaisy:atom:newSlideName2', "(//div[@class='edit-views-favorites-list__item-sub-header'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName2')).click();
    browser.pause(1000)//for clarity

    //click to add slides
    // $("(//div[@class='edit-views-favorites-list__item-sub-header'])[3]").click();
    $(ta('rockdaisy:atom:newSlideName3', "(//div[@class='edit-views-favorites-list__item-sub-header'])[3]")).click();
    // $(ta(   'exp:rockdaisy:picker:newSlideName3')).click();
    browser.pause(1000)//for clarity

    //click to save
    // $("//button[text()='SAVE']")).click();
    $(ta('rockdaisy:atom:saveBtn', "//button[text()='SAVE']")).click();
    // $(ta(   'exp:rockdaisy:picker:saveBtn')).click();
    browser.pause(5000)//for clarity

    //click on logo to comeback on home page
    // $("//a[@class='client-logo-link']").click();
    $(ta('rockdaisy:atom:logo', "//a[@class='client-logo-link']")).click();
    // $(ta(   'exp:rockdaisy:picker:logo')).click();
    browser.pause(1000)//for clarity

    //click to toggle tabs
    // $("(//a[@class='rd-custom-tooltip'])[1]").click();
    $(ta('rockdaisy:atom:togleTabs', "(//a[@class='rd-custom-tooltip'])[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:togleTabs')).click();
    browser.pause(1000)//for clarity

    //click to delete created slider
    // $("//span[@class='icon-delete']").click();
    $(ta('rockdaisy:atom:deleteSlider', "//span[@class='icon-delete']")).click();
    // $(ta(   'exp:rockdaisy:picker:deleteSlider')).click();
    browser.pause(1000)//for clarity

    //click removeBtn
    // $("//button[@ng-click='removeFavoriteGroup(dataItem)']").click();
    $(ta('rockdaisy:picker:removeBtn', "//button[@ng-click='removeFavoriteGroup(dataItem)']")).click();
    // $(ta(   'exp:rockdaisy:picker:removeBtn')).click();
    browser.pause(6000)//for clarity

    //click to delete created slider
    // $("//span[@class='icon-delete']").click();
    $(ta('rockdaisy:atom:deleteSlider', "//span[@class='icon-delete']")).click();
    // $(ta(   'exp:rockdaisy:picker:deleteSlider')).click();
    browser.pause(2000)//for clarity

    //click removeBtn
    // $("//button[@ng-click='removeFavoriteGroup(dataItem)']").click();
    $(ta('rockdaisy:picker:removeBtn', "//button[@ng-click='removeFavoriteGroup(dataItem)']")).click();
    // $(ta(   'exp:rockdaisy:picker:removeBtn')).click();
    browser.pause(6000)//for clarity

    //click to delete created slider
    // $("//span[@class='icon-delete']").click();
    $(ta('rockdaisy:atom:deleteSlider', "//span[@class='icon-delete']")).click();
    // $(ta(   'exp:rockdaisy:picker:deleteSlider')).click();
    browser.pause(2000)//for clarity

    //click removeBtn
    // $("//button[@ng-click='removeFavoriteGroup(dataItem)']").click();
    $(ta('rockdaisy:picker:removeBtn', "//button[@ng-click='removeFavoriteGroup(dataItem)']")).click();
    // $(ta(   'exp:rockdaisy:picker:removeBtn')).click();
    browser.pause(3000)//for clarity

  });
});
