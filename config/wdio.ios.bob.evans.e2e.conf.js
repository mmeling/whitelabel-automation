const {
  join
} = require('path');
const {
  config
} = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
  './tests/specs/**/app.e2e.spec.js',
];

// ============
// Services
// ============
config.services = ['shared-store'];

// ============
// Services
// ============
config.app = 'SMOOTHIEKING';

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  // The defaults you need to have in your config
  app: 'DEFAULT',
  platformName: 'iOS',
  maxInstances: 1,
  // For W3C the appium capabilities need to have an extension prefix
  // This is `appium:` for all Appium Capabilities which can be found here
  // http://appium.io/docs/en/writing-running-appium/caps/
  'appium:deviceName': 'iPhone 11',
  'appium:platformVersion': '13.5',
  'appium:orientation': 'PORTRAIT',
  // `automationName` will be mandatory, see
  // https://github.com/appium/appium/releases/tag/v1.13.0
  'appium:automationName': 'XCUITest',
  // The path to the app
  'appium:app': join(process.cwd(), './apps/ios/smoothie.king.app'),
  // Read the reset strategies very well, they differ per platform, see
  // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
  'appium:noReset': true,
  'appium:newCommandTimeout': 240,
  path: '/wd/hub', // fix: The URL '/session' did not map to a valid resource
  usePrebuiltWDA: false
}, ];

exports.config = config;
