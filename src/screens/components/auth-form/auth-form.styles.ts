import { StyleSheet } from "react-native";

export const AuthFormStyles = StyleSheet.create({
  content: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#002856',
    paddingBottom: 42
  },
  inputContainer: {
    width: '100%',
    gap: 8,
  },
  inputSecure: {
    position: "relative",
    width: '100%'
  },
  inputLeftSide: {
    position: 'absolute',
    right: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  textSecure: {
    backgroundColor: '#fff',
    color: '#0782f9',
    paddingHorizontal: 6,
    paddingVertical: 4,
  }
});
