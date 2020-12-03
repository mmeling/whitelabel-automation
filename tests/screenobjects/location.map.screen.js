import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[contains(@name,"Find a")]',
  TOP_LOCATION: {
    DEFAULT: '(//XCUIElementTypeImage[@name="tableAccessoryImage"])[1]'
  }
};

class LocationMapScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get topLocation() {
    return $(super.app(SELECTORS.TOP_LOCATION));
  }

  /**
   * Select Top Location
   *
   * @return {bool}
   */
  selectTopLocation() {
    console.log('Select Top Location');
    driver.pause(3000);
    return browser.touchAction({
      action: 'tap',
      x: 370,
      y: 600
    });
  }
}

export default new LocationMapScreen();
