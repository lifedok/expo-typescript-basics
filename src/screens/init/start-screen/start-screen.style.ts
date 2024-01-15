import { StyleSheet } from "react-native";

export const StartScreenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 80
  },
  svg: {
    width: '100%',
    height: 140,
  }
});
