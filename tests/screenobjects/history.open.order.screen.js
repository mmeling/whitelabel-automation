import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Order Submitted"]',
  BACK_BUTTON: {
    DEFAULT: '~Back'
  },
  TOP_ITEM_NAME: {
    DEFAULT: '//XCUIElementTypeTable[@name="Completed Order Table"]/XCUIElementTypeCell[2]/XCUIElementTypeStaticText[1]'
  },
  TOP_ITEM_PRICE: {
    DEFAULT: '//XCUIElementTypeTable[@name="Completed Order Table"]/XCUIElementTypeCell[2]/XCUIElementTypeStaticText[3]'
  },
  SUBTOTAL: {
    DEFAULT: '//XCUIElementTypeTable[@name="Completed Order Table"]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[1]',
    ZAXBYS: '~Subtotal Amount'
  },
  TAX: {
    DEFAULT: '//XCUIElementTypeTable[@name="Completed Order Table"]/XCUIElementTypeCell[4]/XCUIElementTypeStaticText[1]',
    ZAXBYS: '~Tax Amount'
  },
  TOTAL: {
    DEFAULT: '//XCUIElementTypeTable[@name="Completed Order Table"]/XCUIElementTypeCell[5]/XCUIElementTypeStaticText[1]'
  }
};

// Does the page use value instead of name
const ATTRIBUTE_VALUE = ['ZAXBYS'];

class HistoryOpenOrderScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  get topItemName() {
    return $(super.app(SELECTORS.TOP_ITEM_NAME));
  }

  get topItemPrice() {
    return $(super.app(SELECTORS.TOP_ITEM_PRICE));
  }

  get subtotal() {
    return $(super.app(SELECTORS.SUBTOTAL));
  }

  get tax() {
    return $(super.app(SELECTORS.TAX));
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
   * Verify order matches last screen
   */
  verifyOrder(order) {
    let attribute = ATTRIBUTE_VALUE.includes(browser.config.app) ? 'value' : 'name';
    this.topItemName.waitForDisplayed(5000, true);
    expect(this.topItemName.getAttribute(attribute)).toContain(order._itemName);
    this.topItemPrice.waitForDisplayed(5000, true);
    expect(this.topItemPrice.getAttribute(attribute)).toContain(order._itemPrice);
    this.subtotal.waitForDisplayed(5000, true);
    expect(this.subtotal.getAttribute(attribute)).toContain(order._subtotal);
    this.tax.waitForDisplayed(5000, true);
    expect(this.tax.getAttribute(attribute)).toContain(order._tax);
    this.total.waitForDisplayed(5000, true);
    expect(this.total.getAttribute(attribute)).toContain(order._total);
    // expect(parseFloat(this.total.getAttribute(attribute).substring(1))).toContain(parseFloat(this.subtotal.getAttribute(attribute).substring(1))+parseFloat(this.tax.getAttribute(attribute).substring(1)));
  }
}

export default new HistoryOpenOrderScreen();
