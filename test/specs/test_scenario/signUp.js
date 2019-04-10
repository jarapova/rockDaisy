const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:atom:signUpBtn', "//button[@class='k-button k-primary']")).click();
    $(ta('exp:rockdaisy:atom:signUpemail', "(//input[@placeholder='Email'])[3]")).setValue('test@trueautomation.io');
    $(ta('exp:rockdaisy:atom:signUpFirstName', "//input[@placeholder='FirstName']")).setValue('name');
    $(ta('exp:rockdaisy:atom:signUpSurename', "//input[@placeholder='LastName']")).setValue('surename');
    $(ta('exp:rockdaisy:atom:signUpPass', "(//input[@placeholder='Password'])[2]")).setValue('123456789qwerty');
    $(ta('exp:rockdaisy:atom:signUpPassConfirm',"//input[@placeholder='Confirm Password']")).setValue('123456789qwerty');

    $(ta(   'rockdaisy:atom:signUp', "(//button[@class='k-button k-primary'])[2]")).click();
    browser.pause(1000)
  });
});
