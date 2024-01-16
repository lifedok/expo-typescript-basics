import React from "react";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { POKEMON_TYPE_ICON } from "../../../shared/consts";

export default function ItemType({ type }) {
  return (
    <Image
      source={POKEMON_TYPE_ICON[type.toLowerCase()] || POKEMON_TYPE_ICON["default"]}
      style={{ width: 50, height: 50 }}
      placeholderStyle={{ backgroundColor: "transparent" }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
}
