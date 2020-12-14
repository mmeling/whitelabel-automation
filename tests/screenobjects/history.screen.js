import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeStaticText[@name="Receipt"]',
  RECEIPT_BUTTON: {
    DEFAULT: '~RECEIPT'
  },
  BACK_BUTTON: {
    DEFAULT: '~Back'
  }
};

class HistoryScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get backButton() {
    return $(super.app(SELECTORS.BACK_BUTTON));
  }

  /**
   * Select Top Receipt
   *
   * @return {bool}
   */
  selectFirstReceipt() {
    console.log('Select First Receipt');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 390,
      y: 110
    });
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
}

export default new HistoryScreen();
