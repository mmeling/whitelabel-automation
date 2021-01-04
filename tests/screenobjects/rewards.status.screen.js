import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Rewards"]',
  STATUS_COUNT: {
    DEFAULT: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeStaticText[2]'
  }
};

class RewardsStatusScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get Statusount() {
    return $(super.app(SELECTORS.STATUS_COUNT));
  }

  /**
   * Basic validation
   * 
   * Verify all elements are visible 
   */ 
  verifyScreen() {
    return true;
  }

  /**
   * Verify Status
   * 
   * This will take some additional work, and should be done in individual tests
   */
  verifyStatus(expected) {
    return true;
  }
}

export default new RewardsStatusScreen();
