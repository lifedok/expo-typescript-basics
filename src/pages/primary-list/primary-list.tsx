import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert } from "react-native";
import { inject, observer } from "mobx-react";
import ListStore from "../../stores/list.store";
import { ListItem } from "./list-item/list-item";
import { getPokemonImage, getPokemonList } from "../../services/user-service/user.service";

interface ListItemProps {
  name: string,
  url: string
}
const dataList = [
  {id: ''}
]
// @inject(ListStore._name)
@observer
export class PrimaryList extends Component<{}, {}> {
  // private listStore: ListStore = (this.props as any)[ListStore._name];
  //
  // private listStore2 = new ListStore();
  //

  @observable
  public list: ListItemProps[] = [];

  @action setList(value: ListItemProps[]) {
    this.list = value;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  async updateListData() {
    try {
      const data = getPokemonList();
      this.setList(await data);
    } catch (err) {
      console.error('Error fetching list data:', err);
      Alert.alert('Error fetching list data');
      throw err;
    }
  }

  componentDidMount() {
    this.updateListData();
  }
  // @action
  // setIsShuffledPoolsLoading(key: PoolFilterKeys, value: boolean) {
  //   this.isShuffledPoolsLoading[key] = value;
  // }
  //
  componentDidUpdate() {
    // this.updateListData();
  }


  render() {
    const image = 'https://i.pinimg.com/564x/d0/91/c2/d091c214dca29647552651f2549f0f4b.jpg';
    const title = 'Avatars name';
    const description = 'Avatars description';
    console.log('this.list', this.list)
    return (
      <View>
        {
          this.list.map((item, index) => {
            console.log('item', item);
            const url = getPokemonImage(index + 1);
            const json = item.url;
            console.log('json', json)
            return (
              <ListItem
                key={`${item.name}_${index}`}
                title={item.name}
                description={description}
                imageUrl={url}/>
            )
          })
        }
      </View>
    );
  }
}
