import React, { Component } from "react";
import { ListStyles } from "./list.styles";
import { ListItem } from "./list-item/list-item";
import { ListItemProps } from "./list-item/list-item.interface";
import { FlatList, Text, View } from "react-native";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import {
  LIST_LEFT_PADDING,
  LIST_RIGHT_PADDING,
  PRIMARY_VIEW_LEFT_PADDING,
  PRIMARY_VIEW_RIGHT_PADDING
} from "../../../shared/consts";
import { SecondaryDarkTextColor } from "../../../shared/colors";


interface ListProps {
  list: ListItemProps[]
}


@observer
export class List extends Component<ListProps, {}> {

  @observable public width: number;

  @action setWidth(v: number) {
    this.width = v;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  findDimensions(layout) {
    const {width} = layout;
    this.setWidth(width);
  }

  cutLastNumbers(n: number): number {
    return ((parseInt(String(n * 100))) / 100);
  }

  listItemWidth(fullWidth?: number): number {
    const maxWidthItem = 110;

    if(!fullWidth) return maxWidthItem;
    const widthView = fullWidth - PRIMARY_VIEW_LEFT_PADDING - PRIMARY_VIEW_RIGHT_PADDING - LIST_LEFT_PADDING - LIST_RIGHT_PADDING;

    const countItemsRow = Math.floor(widthView / maxWidthItem);
    return this.cutLastNumbers(widthView / countItemsRow);
  }

  get widthItem(): number {
    return this.listItemWidth(this.width);
  }

  renderItem({item}) {
    const path = 'https://img.pokemondb.net/artwork/';
    return (
      <ListItem
        name={item.name}
        url={`${path}${item.name}.jpg`}
        width={this.widthItem}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.list}
        contentContainerStyle={ListStyles.container}
        style={{paddingLeft: PRIMARY_VIEW_LEFT_PADDING, paddingRight: PRIMARY_VIEW_RIGHT_PADDING}}
        onLayout={(event) => this.findDimensions(event.nativeEvent.layout)}
        renderItem={(item) => this.renderItem(item)}
        keyExtractor={(item) => item.name.toString()}
        ListFooterComponent={<View><Text style={{padding: 12}}/></View>}
        initialNumToRender={20}
        ListEmptyComponent={() => (
          <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 32, paddingBottom: 32, flex: 1}}>
            <Text style={{color: SecondaryDarkTextColor, fontSize: 16}}>No results</Text>
          </View>
        )}
      />
    );
  }
}
