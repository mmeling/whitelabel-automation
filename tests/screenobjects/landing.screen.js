import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SIGN IN | SIGN UP',
  SIGN_IN_BUTTON: {
    DEFAULT: '~SIGN IN | SIGN UP'
  },
  LOCATE_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="FIND"]',
    SMOOTHIEKING: `//XCUIElementTypeStaticText[@name="FIND A SMOOTHIE KING"]`,
    ZAXBYS: `//XCUIElementTypeStaticText[@name="FIND A ZAXBY’S"]`
  },
};

class LandingScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get signInButton() {
    return $(super.app(SELECTORS.SIGN_IN_BUTTON));
  }

  get alert() {
    return NativeAlert;
  }

  clickSignInButton() {
    return this.signInButton.click();
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

export default new LandingScreen();
