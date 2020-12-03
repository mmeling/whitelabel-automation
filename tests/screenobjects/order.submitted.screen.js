import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Order Submitted"]',
  CLOSE_BUTTON: {
    DEFAULT: '~Done'
  }
};

class OrderSubmittedScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get closeButton() {
    return $(super.app(SELECTORS.CLOSE_BUTTON));
  }

  /**
   * Click Place Order Button
   *
   * @return {bool}
   */
  clickCloseButton() {
    console.log('Click Close Button');
    return this.closeButton.click();
  }
}

export default new OrderSubmittedScreen();
