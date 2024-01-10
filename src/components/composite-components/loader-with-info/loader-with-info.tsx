import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';

export const LoaderWithInfo = () => {
  return (
    <View style={LoaderWithInfoStyles.content}>
      <ActivityIndicator animating size={'large'} color={'#5868F9'} style={{marginTop: 20}}/>
      <Text style={{marginTop: 12, color: '#5868F9'}}>Loading...</Text>
    </View>
  );
};

const LoaderWithInfoStyles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
