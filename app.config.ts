import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-typescript-basics",
  slug: "expo-typescript-basics",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/splash.png",
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
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./src/assets/favicon.png"
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK === '1'
  }
});
