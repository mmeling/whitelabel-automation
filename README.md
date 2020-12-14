# whitelabel-automation
Some of this is stolen absolutely without shame from WebdriverIO

## Get started
To start, do the following:

1. Clone the project — `git clone https://github.com/mmeling/whitelabel-automation.git`

2. Install all the required node modules `npm i`

2. Make a build and add it to the `apps` folder (see below)

2. Set the app name in the config file to match your app (this is made using Zaxby's)

3. Run the tests for iOS with `npm run ios.login`

## Commands

### Running configs
```console
npm run ios.login
```

### Make a build
To make a built app, you'll need to build it in a very specific way to get it to run in the simulator with Appium. Kind of one of the downsides with Appium. Thankfully it's pretty easy

From the source directory for the app you want to build, run
```console
xcodebuild build -workspace "~/projects/{App}.xcworkspace" -destination "platform=iOS Simulator,name=iPhone 11,OS=13.5" -configuration ReleaseStaging -scheme "ReleaseStaging" CONFIGURATION_BUILD_DIR=/Users/mhayward/automation/webdriverio/whitelabel-ios-login-boilerplate/apps
```

Your built app will be made in ~/Library/Developer/Xcode/DerivedData/{APP-randomstring}/Build/Products/{APP}.app

Move that app file to ~/your/automation/path/whitelabel-ios-login-boilerplate/apps (you may have to make the apps folder)

In your config, change the following to the name of your app
```
// The path to the app
'appium:app': join(process.cwd(), './apps/{App}.app'),
```
