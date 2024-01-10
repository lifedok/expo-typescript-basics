import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { InputStyles } from "./input.styles";

export class Input extends React.PureComponent<TextInputProps> {

  static defaultProps = {
    placeholder: 'Search'
  }

  render() {
    return (
      <TextInput
        placeholderTextColor={'#dddddd'}
        {...this.props}
        style={InputStyles.container}
      />
    );
  }
}
