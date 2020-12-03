#!/usr/bin/env node

// Make sure to change .zshrc to .bash_profile or whatever you’re using before running this

const { spawn } = require("child_process");
const chalk = require('chalk');
let request = `echo "Appium Install Helper is a go"`;

const commands = [
  `echo "general requirements"`,
  `echo "$1" | sudo -S chown -R `whoami` /usr/local`,
  `npm install -g appium`,
  `npm install -g appium-doctor`,
  `echo "android"`,
  `path=$($HOME)`,
  `echo $path`,
  `cd $path`,
  `mkdir ~/appium && ~/appium`,
  `mkdir ~/android && ~/android`,
  `curl -O 'https://dl.google.com/android/repository/sdk-tools-darwin-3859397.zip'`,
  `mkdir android`,
  `mv sdk-tools-darwin-*.zip android/`,
  `cd android`,
  `unzip sdk-tools-darwin-*.zip`,
  `yes Yes | tools/bin/sdkmanager --licenses`,
  `yes Yes | tools/bin/sdkmanager --update`,
  `tools/bin/sdkmanager "platforms;android-25" "build-tools;25.0.2" "extras;google;m2repository" "extras;android;m2repository"`,
  `rm sdk-tools-darwin-*.zip`,
  `echo "export ANDROID_HOME=$PWD" >> ~/.zshrc`,
  `echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/tools:$ANDROID_HOME/platform-tools/adb:$ANDROID_HOME/build-tools:$ANDROID_HOME/bundle-tools:$ANDROID_HOME/emulator:$JAVA_HOME/bin:/usr/local/bin:$HOME/drivers/bundle-tools:/usr/l$' >> ~/.zshrc`,
  `echo "ios"`,
  `npm install -g authorize-ios`,
  `echo "$1" | sudo -S authorize-ios`,
  `echo "$1" | sudo -S xcode-select -s /Applications/Xcode.app/Contents/Developer`,
  `npm install -g ios-deploy`,
  `echo "$1" | gem install xcpretty`,
  `brew install carthage`,
  `brew install libimobiledevice --HEAD`,
  `brew upgrade libimobiledevice --HEAD`,
  `brew install ideviceinstaller`,
  `brew upgrade ideviceinstaller`,
  `brew install ios-webkit-debug-proxy`,
  `brew upgrade ios-webkit-debug-proxy`,
  `echo "$1" | sudo -S chmod +x /var/db/lockdown`,
  `cd /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent/`,
  `mkdir -p Resources/WebDriverAgent.bundle`,
  `./Scripts/bootstrap.sh -d`,
  `open WebDriverAgent.xcodeproj`,
  `appium-doctor --yes`,
];``

for(let command of commands) {
  request = `${request} && ${command}`;
}

let build = spawn(request, {
  shell: true
});

build.stdout.on("data", data => {
    console.log(`${data}`);
});

build.stderr.on("data", data => {
    console.log(`${data}`);
});
