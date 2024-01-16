import { StyleSheet } from "react-native";
import { LIST_LEFT_PADDING, LIST_RIGHT_PADDING } from "../../../shared/consts";

export const ListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row', // horizontal={false}
    flexWrap: 'wrap', // numColumns={3?}
    borderRadius: 18,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 12,
    paddingLeft: LIST_LEFT_PADDING,
    paddingRight: LIST_RIGHT_PADDING,
    backgroundColor: '#5f9ea0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
