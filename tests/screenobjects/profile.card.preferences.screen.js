import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Payment Preferences"]',
  BACK_BUTTON: {
    DEFAULT: '~Back'
  },
  ADD_FUNDS_TAB: {
    DEFAULT: '~Add Funds'
  },
  INSTANT_BILLING_TAB: {
    DEFAULT: '~Instant Billing'
  },
  CONFIRM_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Confirm"]',
    ZAXBYS: '~CONFIRM'
  }
};

class ProfileCardPreferencesScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  get addFundsTab() {
    return $(super.app(SELECTORS.ADD_FUNDS_TAB));
  }

  get instantBillingTab() {
    return $(super.app(SELECTORS.INSTANT_BILLING_TAB));
  }

  get confirmButton() {
    return $(super.app(SELECTORS.CONFIRM_BUTTON));
  }

  /**
   * Click Back button
   */
  clickBackButton() {
    return this.backButton.click();
  }

  /**
   * Click Add Funds Tab
   */
  clickAddFundsTab() {
    return this.addFundsTab.click();
  }

  /**
   * Click Instant Billing tab
   */
  clickInstantBillingTab() {
    return this.instantBillingTab.click();
  }

  /**
   * Click Confirm Button
   */
  clickConfirmButton() {
    return this.confirmButton.click();
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

export default new ProfileCardPreferencesScreen();
