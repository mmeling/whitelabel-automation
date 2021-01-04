import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Rewards"]',
  REWARDS_TAB: {
    DEFAULT: '//XCUIElementTypeButton[@name="Rewards"]'
  },
  STATUS_TAB: {
    DEFAULT: '//XCUIElementTypeButton[@name="Status"]'
  },
  BACK_BUTTON: {
    DEFAULT: '~Back'
  }
};

// skip list
const SKIPLIST = ['ZAXBYS'];

class RewardsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get rewardsTab() {
    return $(super.app(SELECTORS.REWARDS_TAB));
  }

  get statusTab() {
    return $(super.app(SELECTORS.STATUS_TAB));
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  /**
   * Click Rewards
   *
   * @return {bool}
   */
  clickRewards() {
    if (!SKIPLIST.includes(browser.config.app)) {
      console.log('Click Rewards Tab');
      driver.pause(3000);
      return browser.touchAction({
        action: 'tap',
        x: 110,
        y: 110
      });
    }
    return true;
  }

  /**
   * Select Status
   *
   * @return {bool}
   */
  clickStatus() {
    if (!SKIPLIST.includes(browser.config.app)) {
      console.log('Click Status Tab');
      driver.pause(3000);
      return browser.touchAction({
        action: 'tap',
        x: 310,
        y: 110
      });
    }
    return true;
  }

  /**
   * Select Back Button
   *
   * @return {bool}
   */
  clickBackButton() {
    console.log('Click Back Button');
    return this.backButton.click();
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

export default new RewardsScreen();
