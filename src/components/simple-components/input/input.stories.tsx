import React from 'react';
import { View } from 'react-native';
import { SharedStyles } from "../../../shared/styles";
import { Input } from "./input";

const InputMeta = {
  title: 'Simple-components/Input',
  component: Input,
  argTypes: {
    onChangeText: { action: 'onChangeText' },
  },
  args: {
    placeholderTextColor: '#dddddd'
  },
  decorators: [
    (Story) => (
      <View style={SharedStyles.viewCenter}>
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

export const InputDefault = {};

export const InputSecondary = {
  args: {
    placeholder: 'Custom placeholder',
  },
};
