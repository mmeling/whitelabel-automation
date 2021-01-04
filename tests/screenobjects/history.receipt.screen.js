import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Receipt"]',
  BACK_BUTTON: {
    DEFAULT: '~Back'
  },
  TOTAL: {
    DEFAULT: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[2]'
  }
};

// Does the page use value instead of name
const ATTRIBUTE_VALUE = ['ZAXBYS'];

class HistoryReceiptScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  get total() {
    return $(super.app(SELECTORS.TOTAL));
  }

  /**
   * Click Back Button
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

  /**
   * Verify order matches saved order
   */
  verifyOrder(order) {
    let attribute = ATTRIBUTE_VALUE.includes(browser.config.app) ? 'value' : 'name';
    this.total.waitForDisplayed(5000, true);
    expect(this.total.getAttribute(attribute).replace('Total,$','')).toContain(order._total);
  }
}

export default new HistoryReceiptScreen();
