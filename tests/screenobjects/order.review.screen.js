import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Review Order"]',
  PLACE_ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[@name="Place Order"]',
    ZAXBYS: '//XCUIElementTypeStaticText[contains(@name,"ORDER NOW")]'
  },
  TOP_ITEM_NAME: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[1]'
  },
  TOP_ITEM_PRICE: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[3]/XCUIElementTypeStaticText[3]',
    ZAXBYS: '~Item Amount'
  },
  SUBTOTAL: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[4]/XCUIElementTypeStaticText[1]',
    ZAXBYS: '~Subtotal Amount'
  },
  TAX: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[5]/XCUIElementTypeStaticText[1]',
    ZAXBYS: '~Tax Amount'
  },
  TIP: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[6]/XCUIElementTypeStaticText[2]',
    ZAXBYS: '~Tax Amount'
  },
  TOTAL: {
    DEFAULT: '//XCUIElementTypeTable[@name="Review Order Table"]/XCUIElementTypeCell[7]/XCUIElementTypeStaticText[1]',
    ZAXBYS: '~Total Amount'
  }
};

// Does the page use value instead of name
const ATTRIBUTE_VALUE = ['ZAXBYS'];

class OrderReviewScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get placeOrderButton() {
    return $(super.app(SELECTORS.PLACE_ORDER_BUTTON));
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

  get tip() {
    return $(super.app(SELECTORS.TIP));
  }

  get total() {
    return $(super.app(SELECTORS.TOTAL));
  }

  /**
   * Click Place Order Button
   *
   * @return {bool}
   */
  clickPlaceOrderButton() {
    console.log('Click Place Order Button');
    return this.placeOrderButton.click();
  }

  /**
   * Return order details
   * 
   * @return {object}
   */
  getOrderDetails() {
    let attribute = ATTRIBUTE_VALUE.includes(browser.config.app) ? 'value' : 'name';
    return {
      'itemName': this.topItemName.getAttribute(attribute),
      'itemPrice': this.topItemPrice.getAttribute(attribute),
      'subtotal': this.subtotal.getAttribute(attribute),
      'tax': this.tax.getAttribute(attribute),
      'tip': this.tip.getAttribute(attribute),
      'total': this.total.getAttribute(attribute)
    }
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
   * Verify order has values
   * 
   * Verify all elements have correct values and totals match
   */
  verifyOrder() {
    let attribute = ATTRIBUTE_VALUE.includes(browser.config.app) ? 'value' : 'name';

    this.topItemName.waitForDisplayed(5000, true);
    expect(this.topItemName.getAttribute(attribute).length).toBeGreaterThanOrEqual(1);
    this.topItemPrice.waitForDisplayed(5000, true);
    expect(this.topItemPrice.getAttribute(attribute)).toContain('$');
    this.subtotal.waitForDisplayed(5000, true);
    expect(this.subtotal.getAttribute(attribute)).toContain('$');
    this.tax.waitForDisplayed(5000, true);
    expect(this.tax.getAttribute(attribute)).toContain('$');
    this.tip.waitForDisplayed(5000, true);
    expect(this.tip.getAttribute(attribute)).toContain('$');
    this.total.waitForDisplayed(5000, true);
    expect(this.total.getAttribute(attribute)).toContain('$');
    // expect(parseFloat(this.total.getAttribute(attribute).substring(1))).toContain(parseFloat(this.subtotal.getAttribute(attribute).substring(1))+parseFloat(this.tax.getAttribute(attribute).substring(1))+parseFloat(this.tip.getAttribute(attribute).substring(1)));
  }
}

export default new OrderReviewScreen();
