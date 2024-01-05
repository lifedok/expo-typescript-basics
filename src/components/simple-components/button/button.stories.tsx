import React from 'react';
import { View } from 'react-native';
import { Button } from './button';

const ButtonMeta = {
  title: 'Simple-components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    children: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const ButtonDefault = {};

export const ButtonSecondary = {
  args: {
    text: 'button secondary',
  },
};
