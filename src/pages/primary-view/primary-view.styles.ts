import { StyleSheet } from "react-native";
import { PRIMARY_VIEW_LEFT_PADDING, PRIMARY_VIEW_RIGHT_PADDING } from "../consts";

export const PrimaryViewStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#5c4db5',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  container: {
    paddingTop: 32,
    paddingBottom: 6,
    paddingLeft: PRIMARY_VIEW_LEFT_PADDING,
    paddingRight: PRIMARY_VIEW_RIGHT_PADDING,

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
