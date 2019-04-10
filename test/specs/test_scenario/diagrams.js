const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
      //browser.setViewportSize({width:1200,height:662});
    //client.setViewportSize('1280/600',false).then(callback);
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    //$(ta('exp:rockdaisy:picker:email',  "(//input[@placeholder='Email'])[1]")).setValue('eugene@trueautomation.io');
    $("(//input[@placeholder='Email'])[1]").setValue('eugene@trueautomation.io');
    //$(ta('exp:rockdaisy:picker:email')).setValue('eugene@trueautomation.io');

    //$(ta('exp:rockdaisy:picker:pass', "//input[@placeholder='Password']")).setValue('trueautomation.io');
    $("//input[@placeholder='Password']").setValue('trueautomation.io');
    //$(ta('exp:rockdaisy:picker:pass')).setValue('trueautomation.io');

    //$(ta('exp:rockdaisy:picker:loginBtn', "(//button[@class='k-button pull-right'])[1]")).click();
    $("(//button[@class='k-button pull-right'])[1]").click();
    //$(ta('exp:rockdaisy:picker:loginBtn')).click();

    browser.pause(2000);
    //click on humburg
    //$(ta('exp:rockdaisy:picker:humburg', "//a[@class='sports-science-nav-bar']")).click();
    $("//a[@class='sports-science-nav-bar']").click();
    //$(ta('exp:rockdaisy:picker:humburg')).click();

    //click to select category2
    //$(ta('exp:rockdaisy:picker:category2', "//div[@class='rd-custom-tooltip 5']/a")).click();
    $("//div[@class='rd-custom-tooltip 5']/a").click();
    //$(ta('exp:rockdaisy:picker:category2')).click();

    //click to select content TEST THIRD PARTY 2
    //$(ta('exp:rockdaisy:picker:roan123', "(//a[@class='view-content'])[2]")).click();
    $("(//a[@class='view-content'])[2]").click();
    //$(ta('exp:rockdaisy:picker:roan123')).click();

    browser.pause(2000);
    //select sector of diagrams
    $("/*[1]/*[2]/*[1]/*[1]/*[1]/*[2]/*[2]/*[2]/*[3]/*[1]/*[2]/*[1]/*[1]/*[1]/*[1]/*[2]/*[2]/*[1]/*[1]/*[1]/*[1]/*[2]/*[6]/*[1]/*[5]/*[2]").moveTo();
    //browser.elementHover("/*[1]/*[2]/*[1]/*[1]/*[1]/*[2]/*[2]/*[2]/*[3]/*[1]/*[2]/*[1]/*[1]/*[1]/*[1]/*[2]/*[2]/*[1]/*[1]/*[1]/*[1]/*[2]/*[6]/*[1]/*[5]/*[2]");
    $(ta('exp:rockdaisy:123')).click();

    //close statistic modal
    //$(ta('exp:rockdaisy:picker:closeModalStat', "(//span[@class='icon-close'])[9]")).click();
    //$("(//span[@class='icon-close'])[9]").click();
    $(ta('exp:rockdaisy:picker:closeModalStat')).click();

    browser.pause(5000);


  });
});
