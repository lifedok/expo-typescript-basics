import { StyleSheet } from "react-native";

export const InitSharedStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '75%',
    alignItems: 'center'
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
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  footerContent: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6
  }
});
