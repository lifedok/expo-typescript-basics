import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ListItemProps } from "./list-item.interface";
import { ListItemStyles } from "./list-item.styles";
import { ListItemNavigation } from "./list-item-navigation/list-item-navigation";

export class ListItem extends React.Component<ListItemProps, {}> {

  get genHexCode() {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  render() {
    const {url, name} = this.props;
    return (
      <View style={ListItemStyles.wrapper}>
        <ListItemNavigation navigationName={'Item'} id={name} item={url}>
          <View style={[ListItemStyles.container, {backgroundColor: this.genHexCode, cursor: 'pointer'}]}>
            <View style={ListItemStyles.inner}>
              <Image style={ListItemStyles.image} resizeMode="contain" source={{uri: url}}/>
              <View style={[ListItemStyles.content]}>
                <Text ellipsizeMode={'tail'} numberOfLines={1} style={ListItemStyles.title}>{name}</Text>
              </View>
            </View>
          </View>
        </ListItemNavigation>
      </View>
    );
  }
}
