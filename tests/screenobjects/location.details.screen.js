import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[contains(@name,"Find a")]',
  ORDER_BUTTON: {
    DEFAULT: '//XCUIElementTypeButton[@name="Order"]'
  }
};

class LocationDetailsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get orderButton() {
    return $(super.app(SELECTORS.ORDER_BUTTON));
  }

  /**
   * Click Order Button
   *
   * @return {bool}
   */
  clickOrderButton() {
    console.log('Click Order Button');
    driver.pause(2000);
    return browser.touchAction({
      action: 'tap',
      x: 205,
      y: 650
    });
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

export default new LocationDetailsScreen();
