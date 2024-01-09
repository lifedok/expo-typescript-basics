import React, { Component } from "react";
import { ListStyles } from "./list.styles";
import { getPokemonImage } from "../../../services/user-service/user.service";
import { ListItem } from "./list-item/list-item";
import { ListItemProps } from "./list-item/list-item.interface";
import { View } from "react-native";
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

  findDimensions(layout){
    const {width} = layout;
    this.setWidth(width);
  }

  render() {
    return (
      <View style={ListStyles.container} onLayout={(event) => { this.findDimensions(event.nativeEvent.layout)}}>
        {
          this.props.list.map((item, index) => {
            const url = getPokemonImage(index + 1);
            return (
              <ListItem
                key={`${item.name}_${index}`}
                name={item.name}
                url={url}
                width={this.width}
              />
            )
          })
        }
      </View>
    );
  }
}
