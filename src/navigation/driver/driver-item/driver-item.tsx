import React, { Component } from "react";
import { IDrawerItem } from "./drawer-item.interface";
import {DrawerItem as DrawerItemRN} from '@react-navigation/drawer';
import { Icon } from "react-native-elements";


export class DrawerItem extends Component<IDrawerItem, {}> {

  render() {
    const {icon, label, navigateTo, navigation} = this.props;
    return (
      <DrawerItemRN
        icon={({color, size}) => (
          <Icon name={icon} color={color} size={size} type='font-awesome'/>
        )}
        label={label}
        onPress={() => {
          navigation.navigate(navigateTo);
        }}
        pressOpacity={0.7}
        style={{width: '100%', paddingHorizontal: 12, backgroundColor: '#f4f3ef', borderRadius: 8}}/>
    );
  }
}
