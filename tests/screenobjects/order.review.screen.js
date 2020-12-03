import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Review Order"]',
  PLACE_ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[@name="Place Order"]'
  }
};

class OrderReviewScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get placeOrderButton() {
    return $(super.app(SELECTORS.PLACE_ORDER_BUTTON));
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
}

export default new OrderReviewScreen();
