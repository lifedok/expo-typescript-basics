import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { PrimaryWelcomeStyles } from "./primary-welcome.styles";
import Constants from 'expo-constants'
import Pickachu from './../../../assets/svgs/pickachu.svg';
const isRunningInExpoGo = Constants.appOwnership === 'expo';

export class PrimaryWelcome extends Component<{}, {}> {

  render() {
    return (
      <View style={PrimaryWelcomeStyles.wrapper}>
        <LinearGradient
          colors={['#ffffff', '#f8de76', '#9fcbf1']}
          style={PrimaryWelcomeStyles.gradient}>
          <Text style={PrimaryWelcomeStyles.text}>Welcome to Pokemon</Text>

          {
            isRunningInExpoGo ?
              <Pickachu width="100%" height="120" />
              :
              <Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5krfWpMHUZTJd2v6Bihpi9fEYrTh1jDxqqiOUh8ug-b_8L3PL'}}
                     resizeMode="contain"
                     style={{width:120, height:120, borderRadius: 12}}/>
          }
        </LinearGradient>
      </View>
    );
  }
}
