import React from "react";
import { View, Text } from "react-native";

export class TestScreen extends React.PureComponent {

  render() {
    const { store } = this.props;
    return (
      <View>
        <Text>TestScreen</Text>
      </View>
    )
  }
}
