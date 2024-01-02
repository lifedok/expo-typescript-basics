import React from 'react';
import {Text, StyleSheet } from 'react-native';

export const ListItem = ({ text }) => {
  return (
    <Text style={styles.text}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: { color: 'red' }
});
