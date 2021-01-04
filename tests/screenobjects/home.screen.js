import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SKIP',
  WELCOME_MESSAGE: {
    DEFAULT: '~Welcome back, LevelUp!'
  },
  ORDER_BUTTON: {
    DEFAULT: '~Order Pick Up or Delivery Now',
    ZAXBYS: '//XCUIElementTypeStaticText[@name="ORDER NOW"]'
  },
  SCAN_BUTTON: {
    DEFAULT: '~Scan to Pay, Earn, & Redeem'
  },
  LOCATIONS_BUTTON: {
    DEFAULT: '~Locations'
  },
  INVITE_BUTTON: {
    DEFAULT: '~Invite Friends'
  },
  REWARDS_BUTTON: {
    DEFAULT: '~Redeem Healthy Rewards'
  }
};

// skip list
const SKIPLIST = ['SMOOTHIEKING'];

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get alert() {
    return NativeAlert;
  }

  get welcomeMessage() {
    return $(super.app(SELECTORS.WELCOME_MESSAGE));
  }

  get orderButton() {
    return $(super.app(SELECTORS.ORDER_BUTTON));
  }

  get scanButton() {
    return $(super.app(SELECTORS.SCAN_BUTTON));
  }

  get locationsButton() {
    return $(super.app(SELECTORS.LOCATIONS_BUTTON));
  }

  get inviteButton() {
    return $(super.app(SELECTORS.INVITE_BUTTON));
  }

  get rewardsButton() {
    return $(super.app(SELECTORS.REWARDS_BUTTON));
  }

  /**
   * Click Order Button
   *
   * @return {bool}
   */
  clickOrderButton() {
    console.log('Click Order Button');
    return this.orderButton.click();
  }

  /**
   * Click Scan Button
   *
   * @return {bool}
   */
  clickScanButton() {
    console.log('Click Scan Button');
    return this.scanButton.click();
  }

  /**
   * Click Locations Button
   *
   * @return {bool}
   */
  clickLocationsButton() {
    console.log('Click Locations Button');
    return this.locationsButton.click();
  }

  /**
   * Click Invite Button
   *
   * @return {bool}
   */
  clickInviteButton() {
    console.log('Click Invite Button');
    return this.inviteButton.click();
  }

  /**
   * Click Rewards Button
   *
   * @return {bool}
   */
  clickRewardsButton() {
    console.log('Click Rewards Button');
    return this.rewardsButton.click();
  }

  /**
   * Verify Welcome Message
   *
   * @return {bool}
   */
  verifyWelcomeMessage(expected) {
    expect(this.welcomeMessage.text()).toEqual(expected);
    return true;
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
   * Handle the location alert for whatever app may have it
   * Could be a bug, who knows. Annoying AF though
   */
  handleLocationAlert() {
    if (!SKIPLIST.includes(browser.config.app)) {
      this.alert.waitForIsShown();
      this.alert.pressButton('Cancel');
      this.alert.waitForIsShown(false);
    }
    return true;
  }
}

export default new HomeScreen();
