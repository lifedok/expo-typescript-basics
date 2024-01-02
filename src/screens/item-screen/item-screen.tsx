import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, ActivityIndicator, Text } from "react-native";
import { observer } from "mobx-react";
import { ListItemProps } from "../list-screen/list/list-item/list-item.interface";
import { ItemScreenStyles } from "./item-screen.styles";
import { getPokemonItem } from "../../services/user-service/user.service";

@observer
export class ItemScreen extends Component<{}, {}> {

  @observable public isLoading: boolean = true;

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @observable public item: ListItemProps;

  @action setItem(value: ListItemProps) {
    this.item = value;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  async updateItemData() {
    try {
      this.setIsLoading(true);
      const data = getPokemonItem(2);
      this.setItem(await data);
    } catch (err) {
      console.error('Error fetching item data:', err);
      Alert.alert('Error fetching item data');
      throw err;
    } finally {
      this.setIsLoading(false);
    }
  }

  componentDidMount() {
    this.updateItemData();
  }

  componentDidUpdate() {
  }

  renderPreload() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}/>
        <Text style={{marginTop: 12}}>Loading...</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={ItemScreenStyles.container}>
        <Text style={ItemScreenStyles.text}>item description</Text>
      </View>
    )
  }
}
