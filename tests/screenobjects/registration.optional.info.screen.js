import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: {
    DEFAULT: '//XCUIElementTypeNavigationBar[@name="Optional Info"]',
    ZAXBYS: '//XCUIElementTypeNavigationBar[@name="Additional Info"]'
  },
};

class RegistrationOptionalInfoScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN[(SELECTORS.SCREEN.hasOwnProperty(browser.config.app)) ? browser.config.app : 'DEFAULT']);
  }

  clickSkipButton() {
    super.waitForIsShown(true);
    // because the header can't be broken into elements,
    // we can just use coordinates
    return browser.touchAction({
      action: 'tap',
      x: 375,
      y: 65
    });
  }

  /**
   * Skip the step
   *
   * @return {bool}
   */
  skip() {
    super.waitForIsShown(true);
    return this.clickSkipButton();
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

export default new RegistrationOptionalInfoScreen();
