import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import { DirectionNavigator } from "../components/direction-navigator/direction-navigator";
import Images from "../../assets/images/images";
import { Button } from "../../components/simple-components/button/button";

export class HomeScreen extends Component<{}, {}> {

  render() {
    const {url, name} = this.props;
    return (
      <View style={HomeScreenStyles.container}>
        <ImageBackground source={Images.home} resizeMode={"cover"} style={HomeScreenStyles.image}>
          <Image resizeMode="contain" source={Images.logo}/>
          <Image resizeMode="contain" style={{width: 120, height: 120, borderRadius: 12}}
                 source={{uri: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg'}}/>

          <Button>
            <DirectionNavigator navigationName={'List'} id={name} item={url}>
              <Text>Switch -></Text>
            </DirectionNavigator>
          </Button>
        </ImageBackground>
      </View>
    )
  }
}
