import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SKIP',
  CHANGE_LOCATION_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Change Location"]'
  },
  ORDER_TYPE: {
    DEFAULT: '~Select Pick Up or Delivery'
  },
  ORDER_TYPE_PICKUP: {
    DEFAULT: '~Pick Up'
  },
  ORDER_TYPE_DELIVERY: {
    DEFAULT: '~Delivery'
  },
  ORDER_TYPE_EDIT_BUTTON: {
    DEFAULT: '~edit'
  },
  ORDER_NOW_BUTTON: {
    DEFAULT: '//XCUIElementTypeStaticText[@name="Order Now"]'
  },
};

class OrderScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get changeLocationButton() {
    return $(super.app(SELECTORS.CHANGE_LOCATION_BUTTON));
  }

  get orderType() {
    return $(super.app(SELECTORS.ORDER_TYPE));
  }

  get orderTypePickup() {
    return $(super.app(SELECTORS.ORDER_TYPE_PICKUP));
  }

  get orderTypeDelivery() {
    return $(super.app(SELECTORS.ORDER_TYPE_DELIVERY));
  }

  get orderTypeEditButton() {
    return $(super.app(SELECTORS.ORDER_TYPE_EDIT_BUTTON));
  }

  get orderNowButton() {
    return $(super.app(SELECTORS.ORDER_NOW_BUTTON));
  }

  /**
   * Click Change Location Button
   *
   * @return {bool}
   */
  clickChangeLocationButton() {
    console.log('Click Change Location Button');
    return this.changeLocationButton.click();
  }

  /**
   * Click Order Type Edit Button
   *
   * @return {bool}
   */
  clickOrdertypeEditButton() {
    console.log('Click Order Type Edit Button');
    return this.orderTypeEditButton.click();
  }

  /**
   * Click Order Now Button
   *
   * @return {bool}
   */
  clickOrderNowButton() {
    console.log('Click Order Now Button');
    return this.orderNowButton.click();
  }
}

export default new OrderScreen();
