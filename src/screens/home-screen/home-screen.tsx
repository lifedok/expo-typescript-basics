import React, { Component } from "react";
import { View, Text } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";

export class HomeScreen extends Component<{}, {}> {

  render() {
    return (
      <View style={HomeScreenStyles.container}>
        <Text style={HomeScreenStyles.text}>HomeScreen</Text>
      </View>
    )
  }
}
