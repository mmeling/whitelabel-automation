import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SCREEN',
  NUMBER: {
    DEFAULT: '~Card Number'
  },
  EXP: {
    DEFAULT: '~Expiration Date'
  },
  CVV: {
    DEFAULT: '~CVV (Security Code)'
  },
  ZIP: {
    DEFAULT: '~Zip Code'
  },
  NICKNAME: {
    DEFAULT: '~Nickname'
  },
  ADD_BUTTON: {
    DEFAULT: '(//XCUIElementTypeStaticText[@name="Add Card"])[2]'
  }
};

class ProfileCardAddScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get number() {
    return $(super.app(SELECTORS.NUMBER));
  }

  get exp() {
    return $(super.app(SELECTORS.EXP));
  }

  get cvv() {
    return $(super.app(SELECTORS.CVV));
  }

  get zip() {
    return $(super.app(SELECTORS.ZIP));
  }

  get nickname() {
    return $(super.app(SELECTORS.NICKNAME));
  }

  get addCardButton() {
    return $(super.app(SELECTORS.ADD_BUTTON));
  }

  set number(value) {
    return this.number.setValue(value);
  }

  set cvv(value) {
    return this.cvv.setValue(value);
  }

  set zip(value) {
    return this.zip.setValue(value);
  }

  set nickname(value) {
    return this.nickname.setValue(value);
  }

  clickExp() {
    return this.exp.click();
  }

  clickAddCardButton() {
    return this.addCardButton.click();
  }

  /**
   * Add a card
   *
   * @param  card user's default card
   * @return {bool}
   */
  addCard({
    card = {}
  }) {
    console.log(card);
    this.number = card.number;
    this.cvv = card.cvv;
    this.zip = card.zip;
    this.nickname = card.nickname;
    this.clickExp();
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    return this.clickAddCardButton();
  }
}

export default new ProfileCardAddScreen();
