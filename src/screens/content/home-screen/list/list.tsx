import React, { Component } from "react";
import { ListStyles } from "./list.styles";
import { ListItem } from "./list-item/list-item";
import { ListItemProps } from "./list-item/list-item.interface";
import { FlatList, Text, View } from "react-native";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";


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
    console.log('findDimensions => layout', layout)

    const {width} = layout;
    this.setWidth(width);
  }

  renderItem({item}) {
    return (
      <ListItem
        name={item.name}
        // url={url}
        width={this.width}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.list}
        contentContainerStyle={ListStyles.container}
        onLayout={(event) => this.findDimensions(event.nativeEvent.layout)}
        renderItem={(item) => this.renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={10}
        ListEmptyComponent={() => (
          <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 32, paddingBottom: 32, flex: 1}}>
            <Text style={{color: '#5868F9', fontSize: 16}}>No results</Text>
          </View>
        )}
      />
    );
  }
}
