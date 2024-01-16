import React from "react";
import {Header, Icon} from "react-native-elements";
import {BackgroundColor} from "../constants";

export default function MainHeader({navigation}) {

  return (
    <Header
      containerStyle={{
        backgroundColor: BackgroundColor,
        borderBottomWidth: 0,
        shadowColor: "transparent",
      }}
      leftComponent={
        <Icon
          name="keyboard-arrow-left"
          color="#fff"
          size={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
      }
    />
  );
}
