import React from "react";
import { View, Text } from "react-native";

export class TestScreen extends React.PureComponent {

  render() {
    const { store } = this.props;
    console.log('TEST ++> this.props', this.props)
    console.log('TEST ++> store', store)
    return (
      <View>
        <Text>TestScreen</Text>
      </View>
    )
  }
}
