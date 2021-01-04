import AppScreen from '../app.screen';
import NativeAlert from '../../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Open sidebar menu.")]',
    ZAXBYS: '//XCUIElementTypeButton[@name="luui side nav button"]'
  },
  MENU_OPEN_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Open sidebar menu.")]',
    ZAXBYS: '//XCUIElementTypeButton[@name="luui side nav button"]'
  },
  SCREEN_RETURN: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Open sidebar menu.")]',
    ZAXBYS: '//XCUIElementTypeButton[@name="luui side nav button"]'
  },
  MENU_OPEN_BUTTON_RETURN: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Open sidebar menu.")]',
    ZAXBYS: '//XCUIElementTypeButton[@name="luui side nav button"]'
  },
  MENU_CLOSE_BUTTON: '~Close sidebar menu.',
  PROFILE_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Profile"]'
  },
  HISTORY_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Transaction History"]'
  },
  CARDS_LINK: {
    DEFAULT: '~Manage Cards'
  },
  LOCATIONS_LINK: {
    DEFAULT: '~Locations'
  },
  SCAN_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Scan to Add Rewards"]',
    ZAXBYS: '//XCUIElementTypeStaticText[@name="Claim Reward"]'
  },
  SUBSCRIPTIONS_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Manage Your Subscriptions"]'
  },
  GIFT_CARD_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Digitize Gift Card"]'
  },
  PIN_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Enable PIN Lock"]'
  },
  SUPPORT_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Guest Support"]',
    ZAXBYS: '//XCUIElementTypeStaticText[@name="Customer Support"]'
  },
  TUTORIAL_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Tutorial"]'
  },
  LOG_OUT_LINK: {
    DEFAULT: '~Log Out'
  },
  FACEBOOK_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Facebook"]'
  },
  INSTAGRAM_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Instagram"]'
  },
  TWITTER_LINK: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Twitter"]'
  },
  SMOOTHIES_LINK: { // SMOOTHIEKING
    SMOOTHIEKING: `//XCUIElementTypeStaticText[@name="Smoothies"]`
  },
  ENHANCERS_LINK: { // SMOOTHIEKING
    SMOOTHIEKING: `//XCUIElementTypeStaticText[@name="Enhancers & Extras"]`
  },
  HOME_SCREEN_REWARDS: { // SMOOTHIEKING
    SMOOTHIEKING: `~Redeem Healthy Rewards`,
    ZAXBYS: `~REWARDS`
  }
};

// skip list
const HOME_SCREEN_REWARDS = ['SMOOTHIEKING', 'ZAXBYS'];

class Menu extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN[(SELECTORS.SCREEN.hasOwnProperty(browser.config.app)) ? browser.config.app : 'DEFAULT']);
  }

  get alert() {
    return NativeAlert;
  }

  get menuButton() {
    return $(super.app(SELECTORS.MENU_BUTTON));
  }

  get menuReturnButton() {
    return $(super.app(SELECTORS.MENU_OPEN_BUTTON_RETURN));
  }

  get profileLink() {
    return $(super.app(SELECTORS.PROFILE_LINK));
  }

  get historyLink() {
    return $(super.app(SELECTORS.HISTORY_LINK));
  }

  get cardsLink() {
    return $(super.app(SELECTORS.CARDS_LINK));
  }

  get locationsLink() {
    return $(super.app(SELECTORS.LOCATIONS_LINK));
  }

  get scanLink() {
    return $(super.app(SELECTORS.SCAN_LINK));
  }

  get subscriptionsLink() {
    return $(super.app(SELECTORS.SUBSCRIPTIONS_LINK));
  }

  get giftCardLink() {
    return $(super.app(SELECTORS.GIFT_CARD_LINK));
  }

  get pinLink() {
    return $(super.app(SELECTORS.PIN_LINK));
  }

  get supportLink() {
    return $(super.app(SELECTORS.SUPPORT_LINK));
  }

  get tutorialLink() {
    return $(super.app(SELECTORS.TUTORIAL_LINK));
  }

  get logOutLink() {
    return $(super.app(SELECTORS.LOG_OUT_LINK));
  }

  get facebookLink() {
    return $(super.app(SELECTORS.FACEBOOK_LINK));
  }

  get instagramLink() {
    return $(super.app(SELECTORS.INSTAGRAM_LINK));
  }

  get twitterLink() {
    return $(super.app(SELECTORS.TWITTER_LINK));
  }

  /**
   * App Specific selectors
   */
   // SMOOTHIEKING
  get smoothiesLink() {
    return $(super.app(SELECTORS.SMOOTHIES_LINK));
  }

  get enhancersLink() {
    return $(super.app(SELECTORS.ENHANCERS_LINK));
  }

  get homeScreenRewards() {
    return $(super.app(SELECTORS.HOME_SCREEN_REWARDS));
  }

  clickProfileLink() {
    return this.profileLink.click();
  }

  clickHistoryLink() {
    return this.historyLink.click();
  }

  clickCardsLink() {
    return this.cardsLink.click();
  }

  clickLocationsLink() {
    return this.locationsLink.click();
  }

  clickScanLink() {
    return this.scanLink.click();
  }

  clickSubscriptionsLink() {
    return this.subscriptionsLink.click();
  }

  clickGiftCardLink() {
    return this.giftCardLink.click();
  }

  clickPINLink() {
    return this.pinLink.click();
  }

  clickSupportLink() {
    return this.supportLink.click();
  }

  clickTutorialLink() {
    return this.tutorialLink.click();
  }

  clickLogOutLink() {
    return this.logOutLink.click();
  }

  clickFacebookLink() {
    return this.facebookLink.click();
  }

  clickInstagramLink() {
    return this.instagramLink.click();
  }

  clickTwitterLink() {
    return this.twitterLink.click();
  }

  /**
   * App Specific interactions
   */
   // SMOOTHIEKING
  clickSmoothiesLink() {
    return this.smoothiesLink.click();
  }

  clickEnhancersLink() {
    return this.enhancersLink.click();
  }

  clickHomeScreenRewards() {
    return this.homeScreenRewards.click();
  }


  /**
   * General Helpers
   * These are general helpers for menu related activities
   *
   * These can be used by invoking them from any part of the app, and it will open the
   * asssociated social app
   */

  /**
   * Open the side menu
   *
   * This needs to be done with a touch action as the element can't seem to be found
   */
  openMenu({
    returning = false
  }) {
    console.log(`Open Hamburger Menu`);
    if (returning) {
      driver.pause(3000);
    } else {
      driver.pause(3000);
    }
    return browser.touchAction({
      action: 'tap',
      x: 35,
      y: 70
    });
  }

  /**
   * Close the side menu
   *
   * This needs to be done with a touch action as the element can't seem to be found
   */
  closeMenu() {
    console.log(`Close Hamburger Menu`);
    super.waitForIsShown(true);
    return browser.touchAction({
      action: 'tap',
      x: 380,
      y: 70
    });
  }

  /**
   * Handle the logout alert
   * The alert is thrown when you attempt to logout, so handle that
   */
  handleLogoutAlert() {
    this.alert.waitForIsShown();
    this.alert.pressButton('Confirm');
    this.alert.waitForIsShown(false);
    return true;
  }

  /**
   * Standard Helpers
   * These are the standard menu helpers most apps have
   *
   * These can be used by invoking them from any part of the app, and it will open the
   * asssociated social app
   */

  /**
   * Account:
   * Open Profile
   */
  openProfile({
    returning = false
  }) {
    console.log(`\t - Open Profile`);
    this.openMenu(returning);
    return this.clickProfileLink();
  }

  /**
   * Account:
   * Open History
   */
  openHistory({
    returning = false
  }) {
    console.log(`\t - Open History`);
    this.openMenu(returning);
    return this.clickHistoryLink();
  }

  /**
   * Account:
   * Open Cards
   */
  openCards({
    returning = false
  }) {
    console.log(`\t - Open Cards`);
    this.openMenu(returning);
    this.clickCardsLink();
    return true;
  }

  /**
   * Account:
   * Open Locations
   */
  openLocations({
    returning = false
  }) {
    console.log(`\t - Open Locations`);
    this.openMenu(returning);
    this.clickLocationsLink();
    return true;
  }

  /**
   * Account:
   * Open Subscriptions
   */
  openSubscriptions({
    returning = false
  }) {
    console.log(`\t - Open Subscriptions`);
    this.openMenu(returning);
    return this.clickSubscriptionsLink();
  }

  /**
   * Account:
   * Open Rewards
   */
  openRewards({
    returning = false
  }) {
    console.log(`\t - Open Rewards`);
    if (HOME_SCREEN_REWARDS.includes(browser.config.app)) {
      return this.clickHomeScreenRewards();
    }
    this.openMenu(returning);
    return this.clickRewardsLink();
  }

  /**
   * Account:
   * Open Gift Cards
   */
  openGiftCards({
    returning = false
  }) {
    console.log(`\t - Open Gift Cards`);
    this.openMenu(returning);
    return this.clickGiftCardLink();
  }

  /**
   * Security & Help:
   * Open PIN
   */
  openPIN({
    returning = false
  }) {
    console.log(`\t - Open PIN`);
    this.openMenu(returning);
    return this.clickPINLink();
  }

  /**
   * Security & Help:
   * Enable PIN
   *
   * @param  pin the pin to use
   */
  enablePIN(pin) {
    console.log(`\t - Enable PIN`);
    this.openMenu(returning);
    return this.clickPINLink();
  }

  /**
   * Security & Help:
   * Disable PIN
   *
   * @param  pin the pin to use
   */
  disablePIN(pin) {
    console.log(`\t - Disable PIN`);
    this.openMenu(returning);
    return this.clickPINLink();
  }

  /**
   * Security & Help:
   * Open Support
   */
  openSupport({
    returning = false
  }) {
    console.log(`\t - Open Support`);
    this.openMenu(returning);
    return this.clickSupportLink();
  }

  /**
   * Security & Help:
   * Open Tutorial
   */
  openTutorial({
    returning = false
  }) {
    console.log(`\t - Open Tutorial`);
    this.openMenu(returning);
    return this.clickTutorialLink();
  }

  /**
   * Security & Help:
   * Log out
   */
  logout({
    returning = false
  }) {
    console.log(`\t - Logout`);
    this.openMenu(returning);
    this.clickLogOutLink();
    return this.handleLogoutAlert();
  }

  /**
   * Social Links
   * These may exist or not exist depending on the app
   * These can be used by invoking them from any part of the app, and it will open the
   * asssociated social app
   */

  /**
   * Open Facebook
   */
  openFacebook({
    returning = false
  }) {
    console.log(`\t - Open Facebook`);
    super.waitForIsShown(true);
    this.openMenu(returning);
    return this.clickFacebookLink();
  }

  /**
   * Open Instagram
   */
  openInstagram({
    returning = false
  }) {
    console.log(`\t - Open Instagram`);
    super.waitForIsShown(true);
    this.openMenu(returning);
    return this.clickInstagramLink();
  }

  /**
   * Open Twitter
   */
  openTwitter({
    returning = false
  }) {
    console.log(`\t - Open Twitter`);
    super.waitForIsShown(true);
    this.openMenu(returning);
    return this.clickTwitterLink();
  }

  /**
   * SMOOTHIEKING
   * These are Smoothie king specific menu helpers
   *
   * These can be used by invoking them from any part of the app, and it will open the
   * asssociated social app
   */

  /**
   * Menu:
   * Open Smoothies
   */
  openSmoothies({
    returning = false
  }) {
    console.log(`\t - Open Smoothies`);
    super.waitForIsShown(true);
    this.openMenu(returning);
    return this.clickSmoothiesLink();
  }

  /**
   * Menu:
   * Open Enhancers
   */
  openEnhancers({
    returning = false
  }) {
    console.log(`\t - Open Enhancers`);
    super.waitForIsShown(true);
    this.openMenu(returning);
    return this.clickEnhancersLink();
  }
}

export default new Menu();
