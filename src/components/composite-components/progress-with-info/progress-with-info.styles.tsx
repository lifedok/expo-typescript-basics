import { StyleSheet } from "react-native";
import { PrimaryBg, PrimaryColor, ProgressBg } from "../../../shared/colors";

export const ProgressWithInfoStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  field: {
    width: '100%',
    height: 12,
    backgroundColor: ProgressBg,
    overflow: "hidden",
    borderRadius: 12,
    position: 'relative'
  },
  progress: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: PrimaryBg,
  },
  label: {
    fontSize: 16,
    color: PrimaryColor,
    fontWeight: "bold",
  }
});
