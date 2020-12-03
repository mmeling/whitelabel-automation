import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="What\'s Your Purpose?"]',
  SKIP_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Next"]'
  },
};

// skip list
const SKIPLIST = ['ZAXBYS'];

class RegistrationPurposeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get skipButton() {
    return $(super.app(SELECTORS.SKIP_BUTTON));
  }

  /**
   * Skip the step by clicking the skip button
   *
   * @return {bool}
   */
  clickSkipButton() {
    console.log('Skipping Purpose: Button');
    return this.skipButton.click();
  }

  /**
   * Skip the step by clicking a location
   *
   * @return {bool}
   */
  clickSkipLocation() {
    console.log('Skipping Purpose: XY');
    return browser.touchAction({
      action: 'tap',
      x: 185,
      y: 605
    });
  }

  /**
   * Skip the step
   *
   * @param  button use the button or x/y
   * @return {bool}
   */
  skip({
    button = true
  }) {
    if (!SKIPLIST.includes(browser.config.app)) {
      super.waitForIsShown(true);
      return button ? this.clickSkipButton() : this.clickSkipLocation();
    }
    return true;
  }
}

export default new RegistrationPurposeScreen();
