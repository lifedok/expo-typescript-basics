import { StyleSheet } from "react-native";
import { SharedShadowStyles } from "../../../shared/styles";
import { ProgressBg, SecondaryBg } from "../../../shared/colors";

export const ProgressListStyles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: ProgressBg,
    borderRadius: 25,

    ...SharedShadowStyles
  },
  inner: {
    backgroundColor: SecondaryBg,
    borderRadius: 17,
    gap: 20,
    paddingHorizontal: 18,
    paddingVertical: 32,
  }
});
