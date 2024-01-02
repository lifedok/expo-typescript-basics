import React, { Component } from "react";
import { ListStyles } from "./list.styles";
import { getPokemonImage } from "../../../services/user-service/user.service";
import { ListItem } from "./list-item/list-item";
import { ListItemProps } from "./list-item/list-item.interface";
import { View } from "react-native";


interface ListProps {
  list: ListItemProps[]
}

export class List extends Component<ListProps, {}> {

  render() {
    return (
      <View style={ListStyles.container}>
        {
          this.props.list.map((item, index) => {
            const url = getPokemonImage(index + 1);
            return (
              <ListItem
                key={`${item.name}_${index}`}
                name={item.name}
                url={url}/>
            )
          })
        }
      </View>
    );
  }
}
