import React from "react";
import {Header, Icon} from "react-native-elements";
import { PrimaryBgLight } from "../../../shared/colors";

export default function ItemHeader({navigation}) {

  return (
    <Header
      containerStyle={{
        backgroundColor: PrimaryBgLight,
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
