import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '/XCUIElementTypeNavigationBar[@name="Menu"]',
  TOP_ITEM: {
    DEFAULT: '(//XCUIElementTypeImage[@name="tableAccessoryImage"])[1]'
  },
  REVIEW_ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[@name="Review Order ($5.99)"]'
  }
};

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
    return browser.touchAction({
      action: 'tap',
      x: 100,
      y: 250
    });
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
}

export default new OrderMenuScreen                   ();
