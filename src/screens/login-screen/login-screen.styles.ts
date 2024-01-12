import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 6
  },
  buttonContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonOutline: {
    backgroundColor: '#fff',
    marginTop: 6,
    borderColor: '#0782F9',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  buttonText: {
    color: "#fff",
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText: {
    color: "#0782F9",
  }
});
