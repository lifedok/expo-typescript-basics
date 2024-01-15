import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Images from "../../../assets/images/images";
import Pickachu from "../../../assets/svg/jsx/pickachu";
import { Button } from "../../../components/simple-components/button/button";
import { StartScreenStyles } from "./start-screen.style";

export function StartScreen({navigation}: { navigation: any}) {

  return (
    <View style={StartScreenStyles.container}>
      <ImageBackground source={Images.home} resizeMode={"cover"} style={StartScreenStyles.image}>
        <Pickachu style={StartScreenStyles.svg}/>

        <View style={{gap: 24, alignItems: 'center'}}>
          <Text style={{fontSize: 24,  color: 'white'}}>Welcome to</Text>
          <Text style={{fontSize: 42, color: 'gold', fontWeight: '700', letterSpacing: 1}}>Pokemon</Text>
        </View>

        <Button onPress={() => navigation.navigate('LoginScreen')}>
          Get started
        </Button>

      </ImageBackground>
    </View>
  )
}
