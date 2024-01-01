import * as React from "react";
import { ListItemStyles } from "./list-item.styles"
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { action, makeObservable, observable } from "mobx";
import responsiveContainer from "../responsive-container/responsive-container";


function getListItemWidth(): number {
  const width = Dimensions.get('window').width; // 975
  const maxWidth = 145;
  const countItemsRow = Math.floor(width / maxWidth); // 6.72 => 6
  return  width / countItemsRow;
}

const padding = 12;
const width = getListItemWidth();
const imageSize = width - padding * 2;

interface IListItem {
  imageUrl: string;
  title: string;
}

@observer
export class ListItem extends React.Component<IListItem, {}> {

  // @observable public windowWidth: number = Dimensions.get('window').width;
  // @observable public isLandscape: boolean = Dimensions.get('window').height < Dimensions.get('window').width;
  //
  // @action setWindowWidth(value: number) {
  //   this.windowWidth = value;
  // }
  //
  // @action setIsLandscape(value: boolean) {
  //   this.isLandscape = value;
  // }
  //
  // state = {
  //   landscape: Dimensions.get('window').height < Dimensions.get('window').width
  // }
  //
  // componentDidMount() {
  //   Dimensions.addEventListener('change', this._onDimensionsChange);
  // }

  // componentWillUnmount() {
  //   Dimensions.removeEventListener('change', this._onDimensionsChange);
  // }

  // _onDimensionsChange(event) {
  //   const {width, height} = event.window;
  //   const landscape = height < width;
  //
  //   // this.setState({ landscape });
  //   this.setIsLandscape(landscape);
  // }

  get genHexCode() {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  render() {
    const {imageUrl, title} = this.props;
    return (
      <View style={ListItemStyles.wrapper}>
        <View style={[ListItemStyles.container, {backgroundColor: this.genHexCode, cursor: 'pointer'}]}>
          <View style={ListItemStyles.inner}>
            <Image style={ListItemStyles.image} resizeMode="contain" source={{uri: imageUrl}}/>
            <View style={[ListItemStyles.content]}>
              <Text ellipsizeMode={'tail'} numberOfLines={1} style={ListItemStyles.title}>{title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
