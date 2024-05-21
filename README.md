# 项目介绍

入坑 react native 0.71.11，整合 react-vision-camera，实现相机功能。

# 项目版本

```bash
~/Documents/fuck_rn_fuck_rn/fuck_rn_0_71_11[main~]  react-native info
info Fetching system and libraries information...
System:
    OS: macOS 14.4.1
    CPU: (12) arm64 Apple M2 Pro
    Memory: 76.48 MB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 18.20.2 - /usr/local/bin/node
    Yarn: 1.22.22 - /opt/homebrew/bin/yarn
    npm: 10.5.0 - /usr/local/bin/npm
    Watchman: 2024.05.06.00 - /opt/homebrew/bin/watchman
  Managers:
    CocoaPods: 1.15.2 - /opt/homebrew/bin/pod
  SDKs:
    iOS SDK: Not Found
    Android SDK:
      Android NDK: 22.1.7171670
  IDEs:
    Android Studio: 2023.3 AI-233.14808.21.2331.11709847
    Xcode: /undefined - /usr/bin/xcodebuild
  Languages:
    Java: 11.0.23 - /Users/jianjianjianjian/.jenv/shims/javac
  npmPackages:
    @react-native-community/cli: Not Found
    react: 18.2.0 => 18.2.0
    react-native: 0.71.11 => 0.71.11
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found

```

# react-native-reanimated version

dont use stupid react-native-reanimated@2.12.0, because it will cause crash !

update to react-native-reanimated@2.17.0, it will work

```bash
npm i react-native-reanimated@2.17.0
```
