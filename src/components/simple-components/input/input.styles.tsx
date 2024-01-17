import { StyleSheet } from "react-native";
import { SearchBg, SearchColor, SecondaryBg, SecondaryColor } from "../../../shared/colors";

export const InputStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  containerType_default: {
    backgroundColor: SecondaryBg,
    color: SecondaryColor,

    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  containerType_search : {
    backgroundColor: SearchBg,
    color: SearchColor,

    borderRadius: 17,
    paddingHorizontal: 18,
    paddingVertical: 8,

    height: 56,
    fontSize: 28,
    fontWeight: 'normal',
  }
});
