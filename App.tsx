import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from "./src/navigation/navigation";

class App extends React.PureComponent {

  render() {
    return (
      <SafeAreaProvider>
        <StatusBar/>

        <View style={styles.background}>
          <SafeAreaView style={[styles.safeArea]}>
            <Navigation/>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const marginColor = '#fff';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: marginColor,
  },
  safeArea: {
    flex: 1,
    borderRadius: 16,
  },
});
