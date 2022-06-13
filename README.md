
# React-Native-Boilerplate

The boilerplate contains:

- [React Native](https://facebook.github.io/react-native/) (v**0.63.2**)
- [Clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.5) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.1.3) to separate side-effects and logic from state and UI logic
- [React Navigation 5](https://reactnavigation.org/) with a [`NavigationService`](App/Navigation/NavigationService.js) to handle routing and navigation in the boilerplate
- [i18Next](https://www.i18next.com/) (v11.3.5) to facilitate the more than one language in the App
- [Push Notifications](https://rnfirebase.io/messaging/usage) integrated in the boilerplate
- [Code-Push](https://github.com/Microsoft/react-native-code-push) (v6.2.0) This plugin provides client-side integration for the CodePush service, allowing you to easily add a dynamic update experience to your React Native app(s).
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) (v3.2.0) setup by default
- [axios](https://github.com/axios/axios) to make API calls (v0.19.2)
- [TypeScript](https://www.typescriptlang.org/) configured for React Native
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) pre configured for React Native

**Note:** Custom Drawer and Custom Bottom Tabs are also part of the boilerplate.

## Directory layout

- [`app/components`](app/components): Presentational components
- [`app/screens`](app/screens): The application's screens
- [`app/assets`](app/assets): Assets (image, audio files) used by the application
- [`app/i18next`](app/i18next): Language setup and localize used by the application
- [`app/navigation`](app/navigation): React-Navigation setting
- [`app/redux/store`](app/redux/store): Redux store
- [`app/redux/sagas`](app/redux/saga): Redux sagas
- [`app/redux/actions`](app/redux/action): Redux actions
- [`app/redux/reducers`](app/redux/reducers): Redux reducers
- [`app/redux/connects`](app/redux/connects): Redux data connectors
- [`app/redux/types`](app/redux/types): Redux action types
- [`app/redux/api`](app/redux/api): application services, e.g. API clients
- [`app/Utils`](app/Utils): Styles helpers for the application
- [`app/config`](app/config): Routes and Screen configurations
- [`app/constants`](app/constants): Colors, images and common styles
- [`app/helpers`](app/helpers): Colors, images and common styles

## Using the boilerplate


## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn` or `npm install` to install the dependencies
- Run the following steps for your platform

### Android

- Only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `yarn start` or `npm install` to start the metro bundler, in a dedicated terminal
- `yarn run android:debug-release` or `npm run android:debug-release` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)


### [I18next](https://www.i18next.com/)

I18next is an internationalization-framework written in and for JavaScript. But it's much more than that.

i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

## Why this boilerplate?

I looked into existing boilerplates before starting this project, and while many of them are awesome, But every boilerplate was lacking something, so I come up with a boilerplate that has all the features that modern app needed. For example

- `React Native Latest Stable Version (v0.63.2)`
- `Great Architecture`
- `React Navigation 5 Integrated`
- `Redux Integrated`
- `Redux Saga Integrated`
- `Redux Persist Integrated`
- `Code-Push SDK Integrated`
- `Push Notifications Integratd`
- `Theme Integrated`
- `Multilingual Integrated`
- `Splash Screen Integrated`
- `Vector Icons Integrated`
- `TypeScript Support`
