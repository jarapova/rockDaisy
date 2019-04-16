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
    browser.pause(4000)//for clarity

    //click to select content roan 123
    // $("(//a[@class='view-content'])[2]").click();
    $(ta('rockdaisy:atom:roan123', "(//a[@class='view-content'])[2]")).click();
    // $(ta(   'exp:rockdaisy:picker:roan123')).click();
    browser.pause(4000)//for clarity

    //click to select  reports compare
    // $("//ul[@k-orientation]/li[1]").click();
    $(ta('rockdaisy:atom:compare', "//ul[@k-orientation]/li[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:compare')).click();
    browser.pause(3000)//for clarity

    //click to select  reports compare
    // $("(//div[@class='comparison-list-item'])[1]").click();
    $(ta('rockdaisy:atom:person4', "(//div[@class='comparison-list-item'])[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:person4')).click();
    browser.pause(3000)//for clarity
    //click to select  reports compare
    // $("(//div[@class='comparison-list-item'])[1]").click();
    $(ta('rockdaisy:atom:person5', "(//div[@class='comparison-list-item'])[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:person5')).click();
    browser.pause(3000)//for clarity

    //click to select  reports compare
    // $("(//div[@class='comparison-list-item'])[1]").click();
    $(ta('rockdaisy:atom:person6', "(//div[@class='comparison-list-item'])[1]")).click();
    // $(ta(   'exp:rockdaisy:picker:person6')).click();
    browser.pause(3000)//for clarity

    //click to close filter panel
    // $("//span[@class='icon-close']").click();
    $(ta('rockdaisy:atom:closePanel', "//span[@class='icon-close']")).click();
    // $(ta(   'exp:rockdaisy:picker:closePanel')).click();
    browser.pause(3000)//for clarity
  });
});
