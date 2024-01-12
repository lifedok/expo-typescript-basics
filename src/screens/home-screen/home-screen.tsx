import React from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import Images from "../../assets/images/images";
import Pickachu from "../../assets/svg/jsx/pickachu";
import { Button } from "../../components/simple-components/button/button";
import { useNavigation } from "@react-navigation/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";

export const HomeScreen = (props) => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login' as any)
    }).catch((error) => alert(error.message))
  }

  return (
    <View style={HomeScreenStyles.container}>
      <ImageBackground source={Images.home} resizeMode={"cover"} style={HomeScreenStyles.image}>
        <Pickachu style={HomeScreenStyles.svg}/>

        <Text>Email: {auth.currentUser?.email}</Text>
        <Button onPress={handleSignOut}>
          Sign Out
        </Button>

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
