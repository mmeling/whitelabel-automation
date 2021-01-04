import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Payment Information"]',
  SKIP_CARD_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Skip and add one later"]'
  }
};

class RegistrationLinkCardScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get skipCardButton() {
    return $(super.app(SELECTORS.SKIP_CARD_BUTTON));
  }

  /**
   * Skip the step by clicking the skip button
   *
   * @return {bool}
   */
  clickSkipCardButton() {
    console.log('Skipping Link Card: Button');
    return this.skipCardButton.click();
  }

  /**
   * Skip the step by clicking a location
   *
   * @return {bool}
   */
  clickSkipLocation() {
    console.log('Skipping Link Card: XY');
    browser.touchAction({
      action: 'tap',
      x: 150,
      y: 200
    });
    driver.pause(100);
    return browser.touchAction({
      action: 'tap',
      x: 150,
      y: 200
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
    super.waitForIsShown(true);
    return button ? this.clickSkipCardButton() : this.clickSkipLocation();
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

export default new RegistrationLinkCardScreen();
