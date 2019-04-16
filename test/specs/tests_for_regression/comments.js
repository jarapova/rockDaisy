const ta = require('trueautomation-helper').ta;

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
    browser.pause(2000)//for clarity

    //click to select category2
    // $(ta("(//div[@class='sports-science-nav-bar__group-content']//a)[3]").click();
    $(ta('rockdaisy:atom:category2', "(//div[@class='sports-science-nav-bar__group-content']//a)[3]")).click();
    // $(ta(   'exp:rockdaisy:picker:category2')).click();
    browser.pause(2000)//for clarity

    //click to select content roan 123
    // $("(//a[@class='view-content'])[2]").click();
    $(ta('rockdaisy:atom:roan123', "(//a[@class='view-content'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:roan123')).click();
    browser.pause(10000)//for clarity

    //click to open comment
    // $("//ul[@k-orientation="'vertical'"]/li[7]").click();
    $(ta('rockdaisy:atom:commentsBtn', "//ul[@k-orientation]/li[7]")).click();
    // $(ta(   'exp:rockdaisy:picker:commentsBtn')).click();
    browser.pause(5000)//for clarity

    browser.switchToFrame($("//iframe[@class='k-content']"))
        //$("//body[@class='k-placeholder']").setValue('textValue');
        $(ta('rockdaisy:atom:iframe',"//body[@class='k-placeholder']")).setValue('textValue')
        //$(ta(   'rockdaisy:atom:iframe')).setValue('textValue');
        browser.pause(5000)//for clarity
    browser.switchToFrame(null)
    browser.pause(5000)//for clarity

  });
});
