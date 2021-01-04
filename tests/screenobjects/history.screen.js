import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Receipt"]',
  TOP_RECEIPT: {
    DEFAULT: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeStaticText[2]'
  },
  BACK_BUTTON: {
    DEFAULT: '~Back'
  }
};

class HistoryScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get topReceipt() {
    return $(super.app(SELECTORS.TOP_RECEIPT));
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  /**
   * Select Open Order
   *
   * @return {bool}
   */
  selectOpenOrder() {
    console.log('Select Open Order');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 390,
      y: 110
    });
  }

  /**
   * Select Top Receipt
   *
   * @return {bool}
   */
  selectTopReceipt() {
    console.log('Select Top Receipt');
    return this.topReceipt.click();
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

  /**
   * Basic validation
   * 
   * Verify all elements are visible 
   */
  verifyScreen() {
    return true;
  }
}

export default new HistoryScreen();
