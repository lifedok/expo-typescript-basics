import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';

export const LoaderInfo = () => {
  return (
    <View style={LoaderInfoStyles.content}>
      <ActivityIndicator size={'large'}/>
      <Text style={{marginTop: 12}}>Loading...</Text>
    </View>
  );
};

const LoaderInfoStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
