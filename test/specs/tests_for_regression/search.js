const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });
    browser.url('https://test.rockdaisy.com');
//==== login
    // $("(//input[@placeholder='Email'])[1]").setValue('eugene@trueautomation.io');
    $(ta('exp:rockdaisy:atom:email', "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    // $(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');

    // $("//input[@placeholder='Password']").setValue('trueautomation.io');
    $(ta('exp:rockdaisy:atom:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    // $(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');

    // $("(//button[@class='k-button pull-right'])[1]").click();
    $(ta('exp:rockdaisy:atom:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:loginBtn')).click();
    browser.pause(2000)// need for step, because test goes very fast
//=============
    //click on humburg
    // $("//a[@class='sports-science-nav-bar']").click();
    $(ta('rockdaisy:atom:humburg', "//a[@class='sports-science-nav-bar']")).click();
    // $(ta('exp:rockdaisy:picker:humburg')).click();
    browser.pause(2000)//for clarity

    //click to select category2
    // $(ta("(//div[@class='sports-science-nav-bar__group-content']//a)[3]").click();
    $(ta('rockdaisy:atom:category2', "(//div[@class='sports-science-nav-bar__group-content']//a)[3]")).click();
    // $(ta('exp:rockdaisy:picker:category2')).click();
    browser.pause(2000)//for clarity

    //click to add new
    // $("(//span[@class='icon-add'])[1]").click();
    $(ta('rockdaisy:atom:new', "(//span[@class='icon-add'])[1]")).click();
    // $(ta('exp:rockdaisy:picker:new')).click();
    browser.pause(2000)//for clarity

    //click to add new
    // $("(//div[@class='search-block']/input)[3]").setValue('test');
    $(ta('rockdaisy:atom:serchInput', "(//div[@class='search-block']/input)[3]")).setValue('test');
    // $(ta('exp:rockdaisy:picker:serchInput')).setValue('test');
    browser.pause(2000)//for clarity
  });
});
