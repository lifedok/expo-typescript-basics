import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const maxWidth = 145;
const countItemsRow = Math.floor(width / maxWidth);
const ratioWidth = width / countItemsRow;

export const ListItemStyles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderStyle: 'solid',
    position: "relative",
    alignItems: 'center',
    width: ratioWidth,
    aspectRatio: 1,

  },
  inner: {
    position: "relative",

  },
  image: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  content: {
    position: "absolute",
    bottom: 6,
    backgroundColor: '#fff',
    color: '#000',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    marginTop: 2,
    color: 'rgba(0, 0, 0, 0.4)'
  }
});
