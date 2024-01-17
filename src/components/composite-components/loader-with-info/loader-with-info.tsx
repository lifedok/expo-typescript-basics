import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { SecondaryDarkTextColor } from "../../../shared/colors";

export const LoaderWithInfo = () => {
  return (
    <View style={LoaderWithInfoStyles.content}>
      <ActivityIndicator animating size={'large'} color={SecondaryDarkTextColor} style={{marginTop: 20}}/>
      <Text style={{marginTop: 12, color: SecondaryDarkTextColor}}>Loading...</Text>
    </View>
  );
};

const LoaderWithInfoStyles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
