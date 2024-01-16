import React from "react";
import {Header, Icon} from "react-native-elements";
import { BACKGROUND_COLOR } from "../../../../shared/consts";

export default function ItemHeader({navigation}) {

  return (
    <Header
      containerStyle={{
        backgroundColor: BACKGROUND_COLOR,
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
