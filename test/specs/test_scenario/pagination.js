const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });
    browser.url('https://test.rockdaisy.com');
//==== login
    // $("(//input[@placeholder='Email'])[1]").setValue('eugene@trueautomation.io');
    $(ta('rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    // $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');

    // $("//input[@placeholder='Password']").setValue('trueautomation.io');
    $(ta('rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    // $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');

    // $("(//button[@class='k-button pull-right'])[1]").click();
    $(ta('rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast
//=============
    //click on humburg
    // $("//a[@class='sports-science-nav-bar']").click();
    $(ta('rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    // $(ta('exp:rockdaisy:picker:humburg')).click();

    //click to select category2
    // $("(//div[@class='sports-science-nav-bar__group-content']//a)[3]").click();
    $(ta('rockdaisy:atom:category2', "(//div[@class='sports-science-nav-bar__group-content']//a)[3]")).click();
    // $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(1000)//for clarity

    //click to add new
    // $("(//span[@class='icon-add'])[1]").click();
    $(ta('rockdaisy:atom:new', "(//span[@class='icon-add'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:new')).click();
    browser.pause(1000)//for clarity

    //click to add advensed search
    // $("(//a[@class='k-button rd-custom-tooltip'])[1]").click();
    $(ta('rockdaisy:atom:nadvensedSearchew', "(//a[@class='k-button rd-custom-tooltip'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:nadvensedSearchew')).click();
    browser.pause(2000)//for clarity

    //click to for collapse TEAM:ATL
    // $("(//a[@class='k-icon k-i-collapse'])[2]").click();
    $(ta('rockdaisy:atom:teamATL', "(//a[@class='k-icon k-i-collapse'])[2]")).click();
    // $(ta('exp:rockdaisy:picker:teamATL')).click();
    browser.pause(1000)//for clarity

    //click to select pagination
    // $("//a[@data-page='3']").click();
    $(ta('rockdaisy:atom:pagination3', "//a[@data-page='3']")).click();
    // $(ta('exp:rockdaisy:picker:pagination3')).click();
    browser.pause(1000)//for clarity

    //click to select pagination
    // $("//a[@data-page='5']").click();
    $(ta('rockdaisy:atom:pagination5', "//a[@data-page='5']")).click();
    // $(ta('exp:rockdaisy:picker:pagination5')).click();
    browser.pause(1000)//for clarity
  });
});
