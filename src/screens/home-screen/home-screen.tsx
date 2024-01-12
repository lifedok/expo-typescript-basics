import React from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import Images from "../../assets/images/images";
import Pickachu from "../../assets/svg/jsx/pickachu";
import { Button } from "../../components/simple-components/button/button";
import { useNavigation } from "@react-navigation/core";
// import { initializeApp } from "firebase/app";
import { firebaseAuth } from "../../../firebase.config";
// import { firebaseConfig } from "../../../firebase.config";
// import { getAuth } from "firebase/auth";

export const HomeScreen = (props) => {
  const navigation = useNavigation();
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  const handleSignOut = () => {
    firebaseAuth.signOut().then(() => {
      navigation.navigate('LoginScreen' as any)
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
            'List' as any,
            {id: props.id, item: props.item} as any)
          }>
          Switch to ->
        </Button>

      </ImageBackground>
    </View>
  )
}
