How I Built the Application
Setup: Initialized a new React Native project using Expo CLI. Installed necessary dependencies for navigation, theming, and styled-components.

bash
Copy code
npx expo-cli init MyMobileApp
cd MyMobileApp
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-native-vector-icons
npm install styled-components
Navigation: Implemented navigation using React Navigation with a bottom tab navigator. Created separate screens for Home and Settings.

Theming: Used React Context to manage light and dark themes. Styled-components were used for applying themes to the app.

Home Screen: Designed the Home screen with user profile, welcome message, MasterCard image, transaction icons, and a scrollable list of transactions.

Settings Screen: Designed the Settings screen with options for language, profile, contact, password, privacy policy, and a theme toggle switch.

Custom Components: Created custom components for reusable UI elements and applied consistent styling.

Assets: Added images and icons to the assets folder for use in the application.

Styling: Used styled-components to style the app according to the specified design, ensuring the app looks polished and professional.
![WhatsApp Image 2024-06-26 at 9 09 02 AM](https://github.com/Papakwame888/rn-assignment5-11112468/assets/170115382/9df8b811-34f2-448c-8e16-346f98155e8b)
![WhatsApp Image 2024-06-26 at 9 09 01 AM (1)](https://github.com/Papakwame888/rn-assignment5-11112468/assets/170115382/5b98d6e7-5817-459a-b2a9-7b6a5083ef53)
![WhatsApp Image 2024-06-26 at 9 09 01 AM (2)](https://github.com/Papakwame888/rn-assignment5-11112468/assets/170115382/25c7e899-2ffa-4155-8f9d-58eb1e5aae55)
![WhatsApp Image 2024-06-26 at 9 09 01 AM](https://github.com/Papakwame888/rn-assignment5-11112468/assets/170115382/56e2fd13-d835-4a79-92b8-92d8fae96375)
