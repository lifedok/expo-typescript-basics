import React from "react";
import { View, ImageBackground } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import Images from "../../assets/images/images";
import Pickachu from "../../assets/svg/jsx/pickachu";
import { Button } from "../../components/simple-components/button/button";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={HomeScreenStyles.container}>
      <ImageBackground source={Images.home} resizeMode={"cover"} style={HomeScreenStyles.image}>
        <Pickachu style={HomeScreenStyles.svg}/>

        <Button
          onPress={() => navigation.navigate(
          'PokemonList' as any,
          {id: props.id, item: props.item} as any)
        }>
          Switch to version 1.0 ->
        </Button>

        <Button
          onPress={() => navigation.navigate(
            'List' as any,
            {id: props.id, item: props.item} as any)
          }>
          Switch to version 1.1 ->
        </Button>

      </ImageBackground>
    </View>
  )
}
