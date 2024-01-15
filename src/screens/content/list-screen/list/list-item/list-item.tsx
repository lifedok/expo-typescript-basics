import * as React from "react";
import { View, Image, Text } from "react-native";
import { ListItemProps } from "./list-item.interface";
import { ListItemStyles } from "./list-item.styles";
import { DirectionNavigator } from "../../../../components/direction-navigator/direction-navigator";
import {
  PRIMARY_VIEW_LEFT_PADDING,
  PRIMARY_VIEW_RIGHT_PADDING
} from "../../../../../shared/consts";

export class ListItem extends React.Component<ListItemProps, {}> {

  get genHexCode() {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  cutLastNumbers(n: number): number {
    return ((parseInt(String(n * 100))) / 100);
  }

  listItemWidth(fullWidth?: number): number {
    const maxWidthItem = 110;

    if(!fullWidth) return maxWidthItem;
    const widthView = fullWidth - PRIMARY_VIEW_LEFT_PADDING - PRIMARY_VIEW_RIGHT_PADDING;

    const countItemsRow = Math.floor(widthView / maxWidthItem);
    return this.cutLastNumbers(widthView / countItemsRow);
  }

  render() {
    const {url, name, width} = this.props;
    const padding = 4;
    const widthItem = this.listItemWidth(width);
    const imageSize = widthItem - padding * 2;
    return (
      <View style={[ListItemStyles.wrapper, {width: widthItem}]}>
        <DirectionNavigator navigationName={'ItemScreen'} id={name} item={url}>
          <View style={[ListItemStyles.container, {
            backgroundColor: this.genHexCode, cursor: 'pointer', padding: padding,
          }]}>
            <View style={ListItemStyles.inner}>
              <Image style={[ListItemStyles.image, {width: imageSize, height: imageSize}]} resizeMode="contain" source={{uri: url}}/>
              <View style={ListItemStyles.content}>
                <Text ellipsizeMode={'tail'} numberOfLines={1} style={ListItemStyles.title}>{name}</Text>
              </View>
            </View>
          </View>
        </DirectionNavigator>
      </View>
    );
  }
}
