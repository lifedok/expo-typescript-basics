import React from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import Images from "../../assets/images/images";
import Pickachu from "../../assets/svg/jsx/pickachu";
import { Button } from "../../components/simple-components/button/button";
import { firebaseAuth } from "../../../firebase.config";

export function HomeScreen({navigation, props}: { navigation: any, props: any }) {

  const handleSignOut = () => {
    firebaseAuth.signOut().then(() => {
      navigation.navigate('LoginScreen')
    }).catch((error) => alert(error.message))
  }

  return (
    <View style={HomeScreenStyles.container}>
      <ImageBackground source={Images.home} resizeMode={"cover"} style={HomeScreenStyles.image}>
        <Pickachu style={HomeScreenStyles.svg}/>

        <View style={{backgroundColor: 'white', padding: 12}}>
          <Text>Email: {firebaseAuth.currentUser?.email}</Text>
        </View>
        <Button onPress={handleSignOut}>
          Sign Out
        </Button>

        <Button
          onPress={() => navigation.navigate(
            'ListScreen' as any,
            {id: props.id, item: props.item} as any)
          }>
          Switch to ->
        </Button>

      </ImageBackground>
    </View>
  )
}
