import { StyleSheet } from "react-native";
import { LIST_LEFT_PADDING, LIST_RIGHT_PADDING } from "../../../../shared/consts";

export const ListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row', // horizontal={false}
    flexWrap: 'wrap', // numColumns={3?}
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 12,
    paddingLeft: LIST_LEFT_PADDING,
    paddingRight: LIST_RIGHT_PADDING,
  }
});
