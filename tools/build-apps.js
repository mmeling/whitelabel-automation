#!/usr/bin/env node

const { spawn } = require("child_process");
const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');

let app = prompt('Enter which app you want to build (lower-case format). Leave blank or use ./* to build all): ');
let phone = prompt('Enter which phone you want to build for, number only. Leave blank or use ./* to build latest): ');
let os = prompt('Enter which OS you want to use. Leave blank or use ./* to build latest): ');

const apps = {
  'smoothie-king': 'SmoothieKing',
  'zaxbys': 'Zaxbys',
  'sweetgreen': 'Sweetgreen',
  'potbelly': 'Potbelly',
  'bob-evans': 'BobEvans',
  'mountain-mikes': 'MountainMikes',
  'kung-fu-tea': 'KungFuTea',
  'scooters-coffee': 'ScootersCoffee',
  'pita-pit': 'PitaPit',
  'freshii': 'Freshii',
  'tcby': 'Tcby',
  'bluestone-lane': 'BluestoneLane'
};

if (!phone) {
  phone = '11';
}

if (!os) {
  os = '14.2';
}

// delete git Dir in build location
let deleteGitDir = `rm -rf $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp`;

// create temp git directory
let makeTmpDir = `mkdir -p $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp`;

let request = `${deleteGitDir} ; ${makeTmpDir}`;

for ( const [key,value] of Object.entries( (app in apps ? { [app]: apps[app] } : apps) ) ) {
  // create new app git directory
  let makeGitDir = `mkdir -p $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp/whitelabel-ios-${key}`;

  // clone app
  let cloneRepo = `git clone https://github.com/TheLevelUp/whitelabel-ios-${key}.git $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp/whitelabel-ios-${key}`;

  // open app git directory
  let openGitDir = `cd $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp/whitelabel-ios-${key}`;

  // pod install
  let podInstall = `pod install --repo-update`;

  // delete specific built app
  let deleteBuiltApp = `rm -rf $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate/apps/ios/${key}/`;

  // create new app directory
  let makeAppDir = `mkdir -p $HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/apps/ios/${key}`;

  // build app
  let buildApp = `xcodebuild build -workspace "$HOME/automation/webdriverio/whitelabel-ios-login-boilerplate2/tmp/whitelabel-ios-${key}/${value}.xcworkspace" -destination "platform=iOS Simulator,name=iPhone ${phone},OS=${os}" -configuration ReleaseStaging -scheme "ReleaseStaging" CONFIGURATION_BUILD_DIR=~/automation/webdriverio/whitelabel-ios-login-boilerplate2/apps/ios/${key}`;

  request = `${request} ; ${makeGitDir} ; ${cloneRepo} ; ${openGitDir} ; ${podInstall} ; ${deleteBuiltApp} ; ${makeAppDir} ; ${buildApp}`;
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
