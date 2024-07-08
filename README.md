# React Native App Template

This repository contains a React Native template that includes various functionalities like dark mode and multilingual support. Follow the instructions below to set up and run the project.

## Libraries Installed

The following libraries are included in this template:

### Navigation
- `@react-navigation/bottom-tabs`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-screens`

### State Management
- `@reduxjs/toolkit`
- `react-redux`
- `redux`

### Network Requests
- `axios`

### Internationalization
- `i18next`
- `react-i18next`
- `react-native-localize`

### UI Components
- `react-native-paper`
- `react-native-vector-icons`

### Utilities
- `react-native-safe-area-context`

## Implemented Functionalities

- **Dark Mode**: The template supports dark mode, allowing users to switch between light and dark themes.
- **Multilingual Support**: The template supports multiple languages, making it easier to internationalize the app.

## Setup Instructions

1. **Clone the repository**:
    ```sh
    git clone <repository_url>
    ```

2. **Navigate to the project directory**:
    ```sh
    cd template
    ```

3. **Remove the existing `.git` folder**:
    ```sh
    rm -rf .git
    ```

4. **Rename the app**:
    ```sh
    npx react-native-rename <new_app_name>
    ```

5. **Install dependencies**:
    ```sh
    npm install
    ```

6. **Run the app on Android**:
    ```sh
    npx react-native run-android
    ```

## Scripts

- `npm run android`: Run the app on an Android device/emulator.
- `npm run ios`: Run the app on an iOS device/simulator.
- `npm run lint`: Lint the project using ESLint.
- `npm run start`: Start the React Native bundler.
- `npm run test`: Run the tests using Jest.

## Additional Information

Ensure you have the following prerequisites installed on your machine:

- Node.js (>=18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

For more information on setting up your development environment, refer to the official [React Native documentation](https://reactnative.dev/docs/environment-setup).
