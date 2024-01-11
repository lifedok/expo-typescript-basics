import * as Font from "expo-font";

const useCustomFonts = async () => {
  await Font.loadAsync({
    "PoppinsRegular" : require("./Poppins/Poppins-Regular.ttf"),
    "PoppinsMedium" : require("./Poppins/Poppins-Medium.ttf"),
    "PoppinsSemibold" : require("./Poppins/Poppins-Semibold.ttf"),
  });
};

export default useCustomFonts;
