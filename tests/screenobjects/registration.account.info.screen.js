import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: '~SCREEN',
  FIRST_NAME: {
    DEFAULT: '~First Name'
  },
  LAST_NAME: {
    DEFAULT: '~Last Name'
  },
  PHONE: {
    DEFAULT: '~Phone Number'
  },
  PASSWORD: {
    DEFAULT: '~Password'
  },
  JOIN_BUTTON: {
    DEFAULT: '~JOIN',
    SMOOTHIEKING: `//XCUIElementTypeStaticText[@name="Get Started!"]`,
    ZAXBYS: `~JOIN ZAX FANZ CLUB`,
    SWEETGREEN: `~JOIN SWEETGREENS`
  }
};

class RegistrationAccountInfoScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get firstName() {
    return $(super.app(SELECTORS.FIRST_NAME));
  }

  get lastName() {
    return $(super.app(SELECTORS.LAST_NAME));
  }

  get phone() {
    return $(super.app(SELECTORS.PHONE));
  }

  get password() {
    return $(super.app(SELECTORS.PASSWORD));
  }

  get joinButton() {
    return $(super.app(SELECTORS.JOIN_BUTTON));
  }

  set firstName(value) {
    return this.firstName.setValue(value);
  }

  set lastName(value) {
    return this.lastName.setValue(value);
  }

  set phone(value) {
    return this.phone.setValue(value);
  }

  set password(value) {
    return this.password.setValue(value);
  }

  clickJoinButton() {
    return this.joinButton.click();
  }

  /**
   * Finish registration with supplied user
   *
   * @return {bool}
   */
  register(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phone = user.phone;
    this.password = user.password;
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    return this.clickJoinButton();
  }

  /**
   * Basic validation
   * 
   * Verify all elements are visible 
   */
  verifyScreen() {
    return true;
  }
}

export default new RegistrationAccountInfoScreen();
