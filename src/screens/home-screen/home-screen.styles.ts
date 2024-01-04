import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
