import React from "react";
import { View, Text, ImageBackground } from "react-native";
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

        <Text style={{fontFamily: 'PoppinsRegular', backgroundColor: '#10ac84', width: 120, height: 120}}>
          Welcome to
        </Text>

        <Button
          onPress={() => navigation.navigate(
            'List' as any,
            {id: props.id, item: props.item} as any)
          }>
          Switch to ->
        </Button>

      </ImageBackground>
    </View>
  )
}
