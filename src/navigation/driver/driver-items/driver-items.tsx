import React from "react";
import { DrawerItem } from "../driver-item/driver-item";
import { IDrawerItem } from "../driver-item/drawer-item.interface";

// icon from font-awesome (https://fontawesome.com/v4/icons/)
const DrawerList: IDrawerItem[] = [
  {icon: 'home', label: 'Home', navigateTo: 'Home'},
];

export class DrawerItems extends React.PureComponent {

  render() {
    return DrawerList.map((item: IDrawerItem, index) =>
      <DrawerItem
        key={index}
        icon={item.icon}
        label={item.label}
        navigateTo={item.navigateTo}/>
    );
  }
}
