import * as React from "react";
import { styles } from "./list-item.styles"
import { View, Image, Text } from "react-native";

interface IListItem {
  imageUrl: string;
  title: string;
  description: string;
}
export class ListItem extends React.Component<IListItem, {}> {

  get genHexCode() {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for( let i = 0; i < 6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  render() {
    const {imageUrl, description, title} = this.props;
    console.log('genHexCode', this.genHexCode)
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  }
}
