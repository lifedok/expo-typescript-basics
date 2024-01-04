import React, { Component } from "react";
import { View, Text } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import { DirectionNavigator } from "../components/direction-navigator/direction-navigator";

export class HomeScreen extends Component<{}, {}> {

  render() {
    const {url, name} = this.props;
    return (
      <View style={HomeScreenStyles.container}>
        <DirectionNavigator navigationName={'List'} id={name} item={url}>
          <Text style={HomeScreenStyles.text}>
            WELCOME
          </Text>
        </DirectionNavigator>
      </View>
    )
  }
}
