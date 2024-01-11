import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={buttonStyles.container} onPress={onPress} activeOpacity={0.8}>
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#293441',
    borderRadius: 12,
  },
  text: { color: 'white' },
});
