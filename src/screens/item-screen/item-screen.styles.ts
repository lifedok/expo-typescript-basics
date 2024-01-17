import { StyleSheet } from "react-native";
import { PRIMARY_VIEW_LEFT_PADDING, PRIMARY_VIEW_RIGHT_PADDING } from "../../shared/consts";
import { SharedShadowStyles } from "../../shared/styles";
import { ItemBg, PrimaryBgLight, SecondaryColorLight } from "../../shared/colors";

export const ItemScreenStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: PrimaryBgLight,
    flex: 1,
  },
  container: {
    gap: 12,
    paddingLeft: PRIMARY_VIEW_LEFT_PADDING,
    paddingRight: PRIMARY_VIEW_RIGHT_PADDING,
  },
  content: {
    flex: 1,
    backgroundColor: ItemBg,
    borderRadius: 36,
    padding: 20,
    minHeight: 480,
    marginTop: 120,
    marginBottom: 30,
    marginHorizontal: 15,
    ...SharedShadowStyles
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: -120,
    resizeMode: "contain",
    backgroundColor: ItemBg,
    borderRadius: 12,
  },
  itemName: {
    marginTop: 90,
    alignSelf: "center",
    fontSize: 30,
    color: SecondaryColorLight,
  },
  pokemonType: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  }
});

