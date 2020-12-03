import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '~SKIP',
  SKIP_BUTTON: {
    DEFAULT: '~SKIP'
  },
};

// skip list
const SKIPLIST = ['ZAXBYS'];

class RewardsRewardsScreen extends AppScreen {
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
  verifyRewards() {
    return true;
  }
}

export default new RewardsRewardsScreen();
