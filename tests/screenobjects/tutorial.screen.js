import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SKIP',
  SKIP_BUTTON: {
    DEFAULT: '~SKIP',
    ZAXBYS: '~Skip'
  },
};

// skip list
const SKIPLIST = [];

class TutorialScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get skipButton() {
    return $(super.app(SELECTORS.SKIP_BUTTON));
  }

  get alert() {
    return NativeAlert;
  }

  clickSkipButton() {
    return (SKIPLIST.includes(browser.config.app)) ? true : this.skipButton.click();
  }

  /**
   * Skip tutorial
   */
  skip() {
    return this.clickSkipButton();
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

export default new TutorialScreen();
