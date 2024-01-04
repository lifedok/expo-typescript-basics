import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import { DirectionNavigator } from "../components/direction-navigator/direction-navigator";

export class HomeScreen extends Component<{}, {}> {

  render() {
    const {url, name} = this.props;
    const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };
    return (
      <View style={HomeScreenStyles.container}>
        <ImageBackground source={image} resizeMode={"contain"} style={HomeScreenStyles.image}>
          <DirectionNavigator navigationName={'List'} id={name} item={url}>
            <Text style={HomeScreenStyles.text}>Switch</Text>
          </DirectionNavigator>
        </ImageBackground>
      </View>
    )
  }
}
