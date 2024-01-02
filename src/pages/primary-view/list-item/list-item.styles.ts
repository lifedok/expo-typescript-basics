import { Dimensions, StyleSheet } from "react-native";
import {
  LIST_LEFT_PADDING,
  LIST_RIGHT_PADDING,
  PRIMARY_VIEW_LEFT_PADDING,
  PRIMARY_VIEW_RIGHT_PADDING
} from "../../consts";

function cutLastNumbers(n: number): number {
  return ((parseInt(String(n * 100))) / 100);
}

function getListItemWidth(): number {
  const fullWidth = Dimensions.get('window').width;
  const width = fullWidth - LIST_LEFT_PADDING - LIST_RIGHT_PADDING - PRIMARY_VIEW_LEFT_PADDING - PRIMARY_VIEW_RIGHT_PADDING;
  const roundingErrorDimensions = 0.1;
  const maxWidth = 110;

  const countItemsRow = Math.floor(width / maxWidth);
  return cutLastNumbers(width / countItemsRow) - roundingErrorDimensions;
}

const padding = 4;
const width = getListItemWidth();
const imageSize = width - padding * 2;

export const ListItemStyles = StyleSheet.create({
  wrapper: {
    width: width,
    padding: 2
  },
  container: {
    padding: padding,
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
    width: imageSize,
    height: imageSize,
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
