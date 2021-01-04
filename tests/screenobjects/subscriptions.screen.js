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

class SubscriptionsScreen extends AppScreen {
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
    console.log('Click Rewards Tab');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 110,
      y: 110
    });
  }

  /**
   * Select Status
   *
   * @return {bool}
   */
  clickStatus() {
    console.log('Click Status Tab');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 310,
      y: 110
    });
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

export default new SubscriptionsScreen();
