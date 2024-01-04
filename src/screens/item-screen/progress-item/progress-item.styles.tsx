import { StyleSheet } from "react-native";

export const ProgressItemStyles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  field: {
    width: '100%',
    height: 12,
    backgroundColor: '#e1dede',
    overflow: "hidden",
    borderRadius: 12,
    position: 'relative'
  },
  progress: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#4586be',
  },
  label: {
    fontSize: 16
  }

});
