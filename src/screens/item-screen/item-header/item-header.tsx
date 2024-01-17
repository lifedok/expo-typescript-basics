import React from "react";
import {Icon} from "react-native-elements";
import { View } from "react-native";

export default function ItemHeader({navigation}) {

  return (
    <View style={{width: 42, height: 42}}>
      <Icon
        name="keyboard-arrow-left"
        color="#fff"
        size={40}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  )
}
