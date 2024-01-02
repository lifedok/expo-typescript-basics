import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View, StatusBar } from 'react-native';

export const LoaderInfo = () => {
  return (
    <View style={LoaderInfoStyles.content}>
      <ActivityIndicator size={'large'}/>
      <Text style={{marginTop: 12}}>Loading...</Text>
      {/*<StatusBar theme={'auto'}/>*/}
    </View>
  );
};

const LoaderInfoStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    // backgroundColor: 'red'
  }
});
