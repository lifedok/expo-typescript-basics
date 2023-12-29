import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { ListPage } from "./src/pages/list-page/list-page";

class App extends Component<{}, {}> {

  render() {
    return (
      <View style={styles.container}>
        <ListPage/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
