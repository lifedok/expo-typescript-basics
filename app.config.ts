import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-typescript-basics",
  slug: "expo-typescript-basics",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/png/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/png/pickachu.jpg",
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
      foregroundImage: "./src/assets/png/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./src/assets/png/favicon.png"
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK === '1'
  }
});
