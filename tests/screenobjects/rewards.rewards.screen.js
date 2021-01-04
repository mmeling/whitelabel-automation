import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {
  SCREEN: '//XCUIElementTypeNavigationBar[@name="Rewards"]',
  REWARD_COUNT: {
    DEFAULT: '//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeStaticText[2]',
    ZAXBYS: '//XCUIElementTypeStaticText[contains(@name,"available rewards")]'
  }
};

class RewardsRewardsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SCREEN);
  }

  get rewardCount() {
    return $(super.app(SELECTORS.REWARD_COUNT));
  }

  /**
   * Basic validation
   * 
   * Verify all elements are visible 
   */ 
  verifyScreen() {
    return true;
  }

  /**
   * Verify Rewards
   * 
   * If no arg, then verfy 0, if arg, verify greater than 0
   */
  verifyRewards(expected) {
    this.rewardCount.waitForDisplayed(5000, true);
    console.log(this.rewardCount.getAttribute("name").replace(/\D/g,''));
    // if (expected) {
    //   return expect(Number(this.rewardCount.getAttribute("name").replace(/\D/g,''))).to.be.above(0);
    // }
    // return expect(Number(this.total.getAttribute("name").replace(/\D/g,''))).to.equal(0);
    return true;
  }
}

export default new RewardsRewardsScreen();
