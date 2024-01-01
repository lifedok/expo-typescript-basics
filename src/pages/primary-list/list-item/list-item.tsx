import * as React from "react";
import { ListItemStyles } from "./list-item.styles"
import { View, Image, Dimensions } from "react-native";
import { observer } from "mobx-react";
import { action, observable } from "mobx";


interface IListItem {
  imageUrl: string;
  title: string;
}

@observer
export class ListItem extends React.Component<IListItem, {}> {

  @observable public windowWidth;
  @action setWindowWidth(value) {
    this.windowWidth = value;
  }

  state = {
    landscape : Dimensions.get('window').height < Dimensions.get('window').width
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this._onDimensionsChange);
  }

  // componentWillUnmount() {
  //   Dimensions.removeEventListener('change', this._onDimensionsChange);
  // }

  _onDimensionsChange(event) {
    const { width, height } = event.window;
    const landscape = height < width;

    this.setState({ landscape });
  }

  get genHexCode() {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for( let i = 0; i < 6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  render() {
    const {imageUrl, title} = this.props;
    console.log('this.state.landscape', this.state.landscape)
    return (
      <View style={[ListItemStyles.container, {backgroundColor: this.genHexCode}]}>
        <View style={ListItemStyles.inner}>
          <Image style={ListItemStyles.image} resizeMode="contain" source={{uri: imageUrl}}/>
          {/*<View style={[ListItemStyles.content]}>*/}
          {/*  <Text ellipsizeMode={'tail'} numberOfLines={1} style={ListItemStyles.title}>{title}</Text>*/}
          {/*</View>*/}
        </View>
      </View>
    );
  }
}
