import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, ActivityIndicator, Text, FlatList } from "react-native";
import { inject, observer } from "mobx-react";
import { getPokemonList } from "../../services/user-service/user.service";
import { List } from "./list/list";
import { ListItemProps } from "./list-item/list-item.interface";
import { PrimaryWelcome } from "./primary-welcome/primary-welcome";
import { PrimaryViewStyles } from "./primary-view.styles";

@observer
export class PrimaryView extends Component<{}, {}> {

  @observable public isLoading: boolean = true;

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @observable public list: ListItemProps[] = [];

  @action setList(value: ListItemProps[]) {
    this.list = value;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  async updateListData() {
    try {
      this.setIsLoading(true);
      const data = getPokemonList();
      this.setList(await data);
    } catch (err) {
      console.error('Error fetching list data:', err);
      Alert.alert('Error fetching list data');
      throw err;
    } finally {
      this.setIsLoading(false);
    }
  }

  componentDidMount() {
    this.updateListData();
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
      this.isLoading ?
        this.renderPreload()
        :
        <View style={PrimaryViewStyles.container}>
          <PrimaryWelcome/>

          <List list={this.list}></List>
        </View>
    )
  }
}