import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-typescript-basics",
  slug: "expo-typescript-basics",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/images/pickachu-big.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./src/assets/images/favicon.png"
  },
  "plugins": [
    [
      "expo-font",
      {
        "fonts": [
          "./src/assets/fonts/Poppins/Poppins-Regular.ttf"
        ]
      }
    ]
  ],
  extra: {
    storybookEnabled: process.env.STORYBOOK === '1'
  }
});
