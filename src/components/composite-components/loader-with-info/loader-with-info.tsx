import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';

export const LoaderWithInfo = () => {
  return (
    <View style={LoaderWithInfoStyles.content}>
      <ActivityIndicator size={'large'}/>
      <Text style={{marginTop: 12}}>Loading...</Text>
    </View>
  );
};

const LoaderWithInfoStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
