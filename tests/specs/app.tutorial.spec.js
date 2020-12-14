import LandingScreen from '../screenobjects/landing.screen';
import LoginScreen from '../screenobjects/login.screen';
import LoginPasswordScreen from '../screenobjects/login.password.screen';
import RegistrationAccountInfoScreen from '../screenobjects/registration.account.info.screen';
import RegistrationLinkCardScreen from '../screenobjects/registration.link.card.screen';
import RegistrationOptionalInfoScreen from '../screenobjects/registration.optional.info.screen';
import RegistrationMigratePointsScreen from '../screenobjects/registration.migrate.points.screen';
import Menu from '../screenobjects/components/menu';
// data stuff
const User = require('../lib/classes/User');
let user;

describe('When logging in with existing account,', () => {
  beforeEach(() => {
    // Fresh user, fresh app
    user = new User;
    driver.launchApp();
    // Register new user to get around account locking
    LandingScreen.clickSignInButton();
    LoginScreen.useEmail(user.email);
    RegistrationAccountInfoScreen.register(user);
    RegistrationLinkCardScreen.skip();
    RegistrationOptionalInfoScreen.skip();
    RegistrationMigratePointsScreen.skip();
    Menu.logout();
    // Get to login screen
    driver.launchApp();
    LandingScreen.signInButton.click();
  });

  it('should successfully log in', () => {
    LoginScreen.useEmail(user.email);
    LoginPasswordScreen.usePassword(user.password);
    RegistrationMigratePointsScreen.skip();
    Menu.logout();
  });

  it('should successfully log in with whitespace before email', () => {
    LoginScreen.useEmail(` ${user.email}`);
    LoginPasswordScreen.usePassword(user.password);
    RegistrationMigratePointsScreen.skip();
    Menu.logout();
  });

  it('should successfully log in with whitespace after email', () => {
    LoginScreen.useEmail(`${user.email} `);
    LoginPasswordScreen.usePassword(user.password);
    RegistrationMigratePointsScreen.skip();
    Menu.logout();
  });

  it('should fail logging in with blank email', () => {
    LoginScreen.useEmail('');
    LoginScreen.verifyAlert('Please enter an email address.');
  });

  it('should fail logging in with invalid email', () => {
    LoginScreen.useEmail('invalid');
    LoginScreen.verifyAlert('Something\'s gone wrong\nEmail does not appear to be a valid e-mail address');
  });

  it('should fail logging in with incorrect password', () => {
    LoginScreen.useEmail(user.email);
    LoginPasswordScreen.usePassword('incorrect');
    LoginPasswordScreen.verifyAlert('Something\'s gone wrong\nThe email address or password you provided is incorrect.');
  });

  it('should fail logging in with blank password', () => {
    LoginScreen.useEmail(user.email);
    LoginPasswordScreen.usePassword('');
    LoginPasswordScreen.verifyAlert('Something\'s gone wrong\nThe email address or password you provided is incorrect.');
  });

  it('should fail logging in with whitespace before password', () => {
    LoginScreen.useEmail(user.email);
    LoginPasswordScreen.usePassword(` ${user.password}`);
    LoginPasswordScreen.verifyAlert('Something\'s gone wrong\nThe email address or password you provided is incorrect.');
  });

  it('should fail logging in with whitespace after password', () => {
    LoginScreen.useEmail(user.email);
    LoginPasswordScreen.usePassword(`${user.password} `);
    LoginPasswordScreen.verifyAlert('Something\'s gone wrong\nThe email address or password you provided is incorrect.');
  });

  it('should lock an account after 3 failed login attempts', () => {
    LoginScreen.useEmail(user.email);
    [1, 2, 3].forEach((i) => {
      LoginPasswordScreen.usePassword('');
      LoginPasswordScreen.closeAlert();
    });
    LoginPasswordScreen.usePassword('');
    LoginPasswordScreen.verifyAlert('Something\'s gone wrong\nYou\'ve tried to access this account too many times. It is now locked for 1 minute. Please try again later or email support@thelevelup.com for assistance.');
  });

  // The following is a list of tests that need to be written checking
  // for vulnerabilities in data encoding.
  // A good starting point here is JS, SQL, special characters. Here is
  // a list of naughty strings that's been compiled by QA Engineers:
  // https://github.com/minimaxir/big-list-of-naughty-strings
  // These should be tested with email/ password fields, as well as changing the
  // email field on the password page

  xit('should not catastrophically fail logging in with JS injection', () => {});

  xit('should not catastrophically fail logging in with SQL injection', () => {});

  xit('should not catastrophically fail logging in with special characters', () => {});

  xit('should not catastrophically fail logging in with zero width space', () => {});
});
