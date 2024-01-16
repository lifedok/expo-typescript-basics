import { StyleSheet } from "react-native";

const SharedStyles = StyleSheet.create({
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  }
});

const LoginSharedStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '75%',
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
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6
  }
});

export {SharedStyles, LoginSharedStyles}
