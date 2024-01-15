import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { InputStyles } from "./input.styles";

interface IInput extends TextInputProps {
  type?: 'default' | 'search'
}
export class Input extends React.PureComponent<IInput> {

  static defaultProps = {
    type: 'default',
    placeholder: 'Search'
  }

  render() {
    const { type } = this.props;
    return (
      <TextInput
        placeholderTextColor={'#dddddd'}
        {...this.props}
        style={[InputStyles.container, InputStyles[`containerType_${type}`]]}
      />
    );
  }
}
