import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SCREEN',
  EMAIL: {
    DEFAULT: '~Email Address'
  },
  NEXT_BUTTON: {
    DEFAULT: '~Next'
  }
};

class LoginScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get email() {
    return $(super.app(SELECTORS.EMAIL));
  }

  get nextButton() {
    return $(super.app(SELECTORS.NEXT_BUTTON));
  }

  get alert() {
    return NativeAlert;
  }

  set email(value) {
    return this.email.setValue(value);
  }

  clickNextButton() {
    return this.nextButton.click();
  }

  /**
   * Enter the email and click next
   *
   * @return {bool}
   */
  useEmail(email) {
    this.email = email;
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    return this.clickNextButton();
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

export default new LoginScreen();
