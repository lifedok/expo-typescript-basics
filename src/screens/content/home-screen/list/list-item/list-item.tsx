import * as React from "react";
import { View, Image, Text } from "react-native";
import { ListItemProps } from "./list-item.interface";
import { ListItemStyles } from "./list-item.styles";
import { DirectionNavigator } from "../../../../components/direction-navigator/direction-navigator";

export class ListItem extends React.Component<ListItemProps, {}> {

  render() {
    const {url, name, width} = this.props;
    const padding = 4;
    const imageSize = width - padding * 2;

    return (
      <View style={[ListItemStyles.wrapper, {width: width}]}>
        <DirectionNavigator navigationName={'ItemScreen'} id={name} item={url}>
          <View style={[ListItemStyles.container, {
            cursor: 'pointer', padding: padding,
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
