import { StyleSheet } from "react-native";

export const ProgressListStyles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#e5e5eb',
    borderRadius: 25,

    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity:  0.18,
    shadowRadius: 4.59,
    elevation: 5
  },
  inner: {
    backgroundColor: '#FFF',
    borderRadius: 17,
    gap: 20,
    paddingHorizontal: 18,
    paddingVertical: 32,
  }
});
