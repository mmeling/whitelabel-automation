import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Payment Information"]',
  BACK_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[@name="Back"]'
  },
  ADD_CARD_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Add a payment card"]'
  },
};

class ProfileCardManageScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  get addCardButton() {
    return $(super.app(SELECTORS.ADD_CARD_BUTTON));
  }

  /**
   * Click Back button
   */
  clickBackButton() {
    console.log('Back to Main Screen');
    return this.backButton.click();
  }

  /**
   * Add a card clicking the button
   *
   * @return {bool}
   */
  clickAddCardButton() {
    console.log('Adding Card: Button');
    return this.addCardButton.click();
  }

  /**
   * Add a card clicking the location
   *
   * @return {bool}
   */
  clickAddCardLocation() {
    console.log('Adding Card: XY');
    browser.touchAction({
      action: 'tap',
      x: 150,
      y: 135
    });
    driver.pause(100);
    return browser.touchAction({
      action: 'tap',
      x: 150,
      y: 135
    });
  }

  /**
   * Click add card button
   *
   * @param  button use the button or x/y
   * @return {bool}
   */
  clickAddCardButton({
    button = true
  }) {
    super.waitForIsShown(true);
    return button ? this.clickAddCardButton() : this.clickAddCardLocation();
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

export default new ProfileCardManageScreen();
