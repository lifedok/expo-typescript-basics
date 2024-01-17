import { StyleSheet } from "react-native";
import { ItemBg, SecondaryColor } from "../../../../shared/colors";
import { SharedShadowStyles } from "../../../../shared/styles";

export const ListItemStyles = StyleSheet.create({
  wrapper: {
    padding: 2,
  },
  container: {
    backgroundColor: ItemBg,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderStyle: 'solid',
    position: "relative",
    ...SharedShadowStyles
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
    backgroundColor: ItemBg,
    color: SecondaryColor,
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
