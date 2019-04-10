const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://test.rockdaisy.com');
    $(ta('exp:rockdaisy:picker:signUpBtn')).click();
    $(ta('exp:rockdaisy:picker:signUpemail')).setValue('test@trueautomation.io');
    $(ta('exp:rockdaisy:picker:signUpName')).setValue('name');
    $(ta('exp:rockdaisy:picker:signUpSurename')).setValue('surename');
    $(ta('exp:rockdaisy:picker:signUpPass')).setValue('123456789qwerty');
    $(ta('exp:rockdaisy:picker:signUpPassConfirm')).setValue('123456789qwerty');

    $(ta('rockdaisy:picker:signUp')).click();

    browser.pause(1000)
  });
});
