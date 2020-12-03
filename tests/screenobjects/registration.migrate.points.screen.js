import AppScreen from './app.screen';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Migrate Points"]'
};

// skip list
const SKIPLIST = ['SMOOTHIEKING'];

class RegistrationMigratePointsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get screen() {
    return $(SELECTORS.SCREEN);
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
    if (!SKIPLIST.includes(browser.config.app)) {
      super.waitForIsShown(true);
      return this.clickSkipButton();
    }
    return true;
  }
}

export default new RegistrationMigratePointsScreen();
