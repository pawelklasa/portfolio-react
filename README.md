# React Portfolio

## Install dependencies
```bash
yarn # :)
```

## Serving the app
```bash
$ yarn serve
or
$ yarn ionic:serve
```

## Building the app
```bash
$ yarn build
```

### For iOS
(make sure you're signed into the TT iTunes Dev account in XCODE)
```bash
$ yarn install:certificates
$ yarn ios:build

open `./platforms/ios/MyTalkTalk Beta.xcworkspace`

Select the General Tab and disable "automatically manage signing"
set the "Signing (Debug)" Provisioning Profile: to MyTalkTalkDev
set the "Signing (Release)" Provisioning Profile: to MyTalkTalkDev - Production

Select the Capabilities Tab
Make sure Push Notifications are enabled

Set your device to "Build Only Device"
Goto the Product Menu and select Archive

The XCODE Organiser will open
To get the IPA: Right click on the latest archive and select "reveal in finder"
To submit it to Testflight: Select the latest archive and click "Upload to App Store"

```

### For Android
```bash
$ yarn android:build
$ yarn android:sign
$ yarn android:optimise
```

Your APK will be available at `./MyTalkTalkDev.apk`


## Style guides

Angular.io
https://angular.io/styleguide

Ionic Framework
http://ionicframework.com/docs/
