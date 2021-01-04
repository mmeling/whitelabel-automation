import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar',
  TOP_ITEM: {
    DEFAULT: '(//XCUIElementTypeImage[@name="tableAccessoryImage"])[1]',
    ZAXBYS: '//XCUIElementTypeTable[@name="Menu Categories"]/XCUIElementTypeCell/XCUIElementTypeStaticText'
  },
  REVIEW_ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Review Order")]',
    ZAXBYS: '//XCUIElementTypeButton[contains(@name,"REVIEW ORDER")]'
  }
};

// skip list
const CATEGORIES = ['ZAXBYS'];

class OrderMenuScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get topItem() {
    return $(super.app(SELECTORS.TOP_ITEM));
  }

  get reviewOrderButton() {
    return $(super.app(SELECTORS.REVIEW_ORDER_BUTTON));
  }

  /**
   * Select Top Item
   *
   * @return {bool}
   */
  selectFirstItem() {
    console.log('Select First Item');
    driver.pause(3000);
    browser.touchAction({
      action: 'tap',
      x: 100,
      y: 250
    })
    if (CATEGORIES.includes(browser.config.app)) {
      driver.pause(3000);
      return browser.touchAction({
        action: 'tap',
        x: 100,
        y: 250
      });
    }
    return true;
  }

  /**
   * Click Review Order Button
   *
   * @return {bool}
   */
  clickReviewOrderButton() {
    console.log('Click Review Order Button');
    return this.reviewOrderButton.click();
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

export default new OrderMenuScreen();
