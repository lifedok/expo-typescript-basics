import Constants from 'expo-constants';

export const IS_RUNNING_IN_EXPO_GO = Constants.appOwnership === 'expo';
export const IS_ANDROID = Constants.platform?.android;
