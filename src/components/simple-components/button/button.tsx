import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonStyles } from "./button.styles";

interface IButton {
  type?: 'default' | 'outline' | 'link',
  isFill?: boolean,
  disabled?: boolean
}
export class Button extends React.PureComponent<IButton> {

  static defaultProps = {
    type: 'default',
    isFill: false,
    disabled: false
  }

  render() {
    const {children, onPress, type, isFill, disabled} = this.props;
    return (
      <TouchableOpacity
        style={[
          ButtonStyles.button,
          ButtonStyles[`buttonType_${type}`],
          {width: isFill ? '100%': 'auto'},
          disabled && {opacity: 0.4, pointerEvents: 'none'}
        ]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={[ButtonStyles.text, ButtonStyles[`textType_${type}`]]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}
