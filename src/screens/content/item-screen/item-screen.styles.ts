import { StyleSheet } from "react-native";
import { PRIMARY_VIEW_LEFT_PADDING, PRIMARY_VIEW_RIGHT_PADDING } from "../../../shared/consts";

export const ItemScreenStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#559EDF',
    flex: 1,
  },
  container: {
    gap: 12,
    paddingLeft: PRIMARY_VIEW_LEFT_PADDING,
    paddingRight: PRIMARY_VIEW_RIGHT_PADDING,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 36,
    padding: 20,
    minHeight: 480,
    marginTop: 120,
    marginBottom: 30,
    marginHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: -120,
    resizeMode: "contain",
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  itemName: {
    marginTop: 90,
    alignSelf: "center",
    fontSize: 30,
    color: "#4f4f4f",
  },
  pokemonType: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  }
});

