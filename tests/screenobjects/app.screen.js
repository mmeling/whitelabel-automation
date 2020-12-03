import {
  DEFAULT_TIMEOUT
} from '../constants';

export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   * @return {boolean}
   */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed({
      timeout: DEFAULT_TIMEOUT,
      reverse: !isShown,
    });
  }

  /**
   * Check if selector has app specific selector or is generic
   *
   * @param {object} selector
   * @return {string}
   */
  app(selector) {
    return selector[(selector.hasOwnProperty(browser.config.app)) ? browser.config.app : 'DEFAULT'];
  }
}
