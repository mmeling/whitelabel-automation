import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeTable[@name="Item Options Table"]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeImage',
  UNFILLED_RADIO: {
    DEFAULT: '(//XCUIElementTypeButton[@name="radioUnfilled"])[1]'
  },
  ADD_TO_ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[contains(@name,"Add to Order")]'
  }
};

class OrderItemScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get unfilledRadio() {
    return $(super.app(SELECTORS.UNFILLED_RADIO));
  }

  get addToOrderButton() {
    return $(super.app(SELECTORS.ADD_TO_ORDER_BUTTON));
  }

  /**
   * Select all required options
   *
   * @return {bool}
   */
  selectAllRequired() {
    console.log('Select all required options');
    return this.unfilledRadio.click();
  }

  /**
   * Click Add to Cart Button
   *
   * @return {bool}
   */
  clickAddToOrderButton() {
    console.log('Click Add to Order Button');
    return this.addToOrderButton.click();
  }
}

export default new OrderItemScreen();
