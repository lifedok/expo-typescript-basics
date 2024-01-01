import React, { Component } from "react";
import { makeObservable } from "mobx";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import ListStore from "../../stores/list.store";

const dataList = [
  {id: ''}
]
// @inject(ListStore._name)
// @observer
export class ListPage extends Component<{}, {}> {
  // private listStore: ListStore = (this.props as any)[ListStore._name];
  //
  // private listStore2 = new ListStore();
  //
  // constructor(props: any) {
  //   super(props);
  //   makeObservable(this);
  // }

  componentDidMount() {
    // this.listStore.loadList()
    // this.listStore2.loadList()
  }
  // @action
  // setIsShuffledPoolsLoading(key: PoolFilterKeys, value: boolean) {
  //   this.isShuffledPoolsLoading[key] = value;
  // }
  //
  // componentDidMount() {
  // this.data = await getPokemonList()

  // }


  render() {
    // console.log('this.listStore', this.listStore.list);
    // console.log('this.listStore2', this.listStore2.list);
    return (
      <View>
        {
          <Text>12</Text>
        }
      </View>
    );
  }
}
