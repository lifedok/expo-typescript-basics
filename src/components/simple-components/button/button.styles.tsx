import { StyleSheet } from "react-native";

export const ButtonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonType_default: {
    backgroundColor: '#0782F9',
  },
  buttonType_outline: {
    backgroundColor: '#fff',
    borderColor: '#0782F9',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  buttonType_link: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.25,
  },
  textType_default: {
    color: "#fff",
  },
  textType_outline: {
    color: "#0782F9",
  },
  textType_link: {
    fontSize: 11,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: "#000",
  }
})
