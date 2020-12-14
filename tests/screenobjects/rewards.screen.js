import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Receipt"]',
  REWARDS_BUTTON: {
    DEFAULT: '~Rewards'
  },
  STATUS_BUTTON: {
    DEFAULT: '~Status'
  },
  BACK_BUTTON: {
    DEFAULT: '~Back'
  }
};

class RewardsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  /**
   * Select Rewards
   *
   * @return {bool}
   */
  clickRewards() {
    console.log('Select Rewards');
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
    console.log('Select Status');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 310,
      y: 110
    });
  }

  /**
   * Click Place Order Button
   *
   * @return {bool}
   */
  clickBackButton() {
    console.log('Click Back Button');
    return this.backButton.click();
  }
}

export default new RewardsScreen();
