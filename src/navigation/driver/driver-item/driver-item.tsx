import React from "react";
import { IDrawerItem } from "./drawer-item.interface";
import { DrawerItem as DrawerItemRN } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export function DrawerItem(props: IDrawerItem) {
  const navigation = useNavigation();

  const {icon, label, navigateTo} = props;
  return (
    <DrawerItemRN
      icon={({color, size}) => (
        <Icon name={icon} color={color} size={size} type='font-awesome'/>
      )}
      label={label}
      onPress={() => navigation.navigate(navigateTo as any)}
      style={{width: '100%', paddingHorizontal: 12, backgroundColor: '#f4f3ef', borderRadius: 8}}/>
  );
}
