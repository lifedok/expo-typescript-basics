import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { ListPage } from "./src/pages/list-page/list-page";
import { SafeAreaProvider } from 'react-native-safe-area-context';

class App extends Component<{}, {}> {

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <ListPage/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    );
  }
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mediumslateblue',
  },
});
