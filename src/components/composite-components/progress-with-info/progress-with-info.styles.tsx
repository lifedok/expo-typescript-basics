import { StyleSheet } from "react-native";

export const ProgressWithInfoStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
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
    backgroundColor: '#1a87d9',
  },
  label: {
    fontSize: 16,
    color: "#1a87d9",
    fontWeight: "bold",
  }
});
