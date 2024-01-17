import { StyleSheet } from "react-native";
import { LIST_LEFT_PADDING, LIST_RIGHT_PADDING } from "../../../shared/consts";
import { SharedShadowStyles } from "../../../shared/styles";
import { ListBg } from "../../../shared/colors";

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
    backgroundColor: ListBg,
    ...SharedShadowStyles
  }
});
