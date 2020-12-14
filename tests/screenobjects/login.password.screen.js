import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~LogIn',
  EMAIL: {
    DEFAULT: '~UserEmail'
  },
  PASSWORD: {
    DEFAULT: '~Password'
  },
  LOGIN_BUTTON: {
    DEFAULT: '~LogIn'
  },
  FORGOT_PASSWORD_BUTTON: {
    DEFAULT: '~FORGOT PASSWORD'
  },
};

class LoginPasswordScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get email() {
    return $(super.app(SELECTORS.EMAIL));
  }

  get password() {
    return $(super.app(SELECTORS.PASSWORD));
  }

  get loginButton() {
    return $(super.app(SELECTORS.LOGIN_BUTTON));
  }

  get forgotPasswordButton() {
    return $(super.app(SELECTORS.FORGOT_PASSWORD_BUTTON));
  }

  get alert() {
    return NativeAlert;
  }

  set email(value) {
    return this.email.setValue(value);
  }

  set password(value) {
    return this.password.setValue(value);
  }

  clickLoginButton() {
    return this.loginButton.click();
  }

  clickForgotPasswordButton() {
    return this.forgotPasswordButton.click();
  }

  /**
   * Enter the password and click login
   *
   * @return {bool}
   */
  usePassword(password) {
    this.password = password;
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    return this.clickLoginButton();
  }

  /**
   * Close an alert
   *
   * @return {bool}
   */
  closeAlert() {
    this.alert.waitForIsShown();
    this.alert.pressButton('Cancel');
    this.alert.waitForIsShown(false);
    return true;
  }

  /**
   * Verify an alert
   *
   * @return {bool}
   */
  verifyAlert(expected) {
    this.alert.waitForIsShown();
    expect(this.alert.text()).toEqual(expected);
    this.alert.pressButton('Cancel');
    this.alert.waitForIsShown(false);
    return true;
  }
}

export default new LoginPasswordScreen();
