const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');

    //$("//button[@class='k-button k-primary']").click();
    $(ta('rockdaisy:atom:signUpBtn', "//button[@class='k-button k-primary']")).click();
    //$(ta(   'exp:rockdaisy:picker:signUpBtn')).click();
    browser.pause(2000)//for clarity

    //$("(//input[@placeholder='Email'])[3]").setValue('test@trueautomation.io');
    $(ta('rockdaisy:atom:signUpemail', "(//input[@placeholder='Email'])[3]")).setValue('test@trueautomation.io');
    // $(ta(   'exp:rockdaisy:picker:signUpemail')).setValue('test@trueautomation.io');

    // $("//input[@placeholder='FirstName']").setValue('name');
    $(ta('rockdaisy:atom:signUpFirstName', "//input[@placeholder='FirstName']")).setValue('name');
    // $(ta(   'exp:rockdaisy:picker:signUpName')).setValue('name');

    // $("//input[@placeholder='LastName']").setValue('surename');
    $(ta('rockdaisy:atom:signUpSurename', "//input[@placeholder='LastName']")).setValue('surename');
    // $(ta(   'exp:rockdaisy:picker:signUpSurename')).setValue('surename');

    // $("(//input[@placeholder='Password'])[2]").setValue('123456789qwerty');
    $(ta('rockdaisy:atom:signUpPass', "(//input[@placeholder='Password'])[2]")).setValue('123456789qwerty');
    // $(ta(   'exp:rockdaisy:picker:signUpPass')).setValue('123456789qwerty');

    // $("//input[@placeholder='Confirm Password']").setValue('123456789qwerty');
    $(ta('rockdaisy:atom:signUpPassConfirm',"//input[@placeholder='Confirm Password']")).setValue('123456789qwerty');
    // $(ta(   'exp:rockdaisy:picker:signUpPassConfirm')).setValue('123456789qwerty');

    // $("(//button[@class='k-button k-primary'])[2]").click();
    $(ta('rockdaisy:atom:signUp', "(//button[@class='k-button k-primary'])[2]")).click();
    // $(ta(   'rockdaisy:picker:signUp')).click();

    browser.pause(1000)
  });
});
