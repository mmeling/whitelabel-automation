import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Optional Info"]'
};

class RegistrationOptionalInfoScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
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
}

export default new RegistrationOptionalInfoScreen();
