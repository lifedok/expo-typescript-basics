import { StyleSheet } from "react-native";
import { PRIMARY_VIEW_LEFT_PADDING, PRIMARY_VIEW_RIGHT_PADDING } from "./consts";

export const SharedStyles = StyleSheet.create({
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
