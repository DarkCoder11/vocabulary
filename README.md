# Vocabulary Builder App

A React Native vocabulary-building app with an onboarding flow, built using **Expo Router**, **TypeScript**, and **MMKV** for local storage.

## 🚀 Features

- Onboarding flow to guide users through app features.
- Persistent storage using MMKV for fast and efficient data handling.
- Seamless navigation with Expo Router.
- Dark and light mode support.

## 🛠️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)


### Install Dependencies
```bash
yarn install
```

### Prebuild (Optional)
If you need to customize native code, run the following command to generate the native Android and iOS directories:
```bash
expo prebuild
```

This command sets up the `android` and `ios` directories for custom native code modifications. Learn more about [Expo Prebuild](https://docs.expo.dev/workflow/customizing/).

---

## 💻 Running the App

### Start the Development Server
Run the app in development mode:
```bash
yarn start
```

### Open the App
- **iOS**: Press `i` in the terminal or scan the QR code with your iOS device.
- **Android**: Press `a` in the terminal or scan the QR code with your Android device.
- **Web**: Press `w` in the terminal to open the app in your web browser.

---

## 📜 How To Run the App

- **Prebuild for Native Code**:
  ```bash
  expo prebuild
  ```
  
- **Build App On The iOS**:
  ```bash
  yarn ios
  ```
- **Build App On The Android**:
  ```bash
  yarn android
  ```
- **Start Development Server**:
  ```bash
  yarn start
  ```
