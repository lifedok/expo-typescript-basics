import { StyleSheet } from "react-native";

export const ListItemStyles = StyleSheet.create({
  wrapper: {
    padding: 2,

  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderStyle: 'solid',
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inner: {
    position: "relative",
    alignItems: 'center',
  },
  image: {
    flex: 1,
    marginBottom: 32,
    borderRadius: 12,
  },
  content: {
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    color: '#000',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 8,
    width: '100%'
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  }
});
