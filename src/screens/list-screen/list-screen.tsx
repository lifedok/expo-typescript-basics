import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, ActivityIndicator, Text, ScrollView, RefreshControl, Image } from "react-native";
import { observer } from "mobx-react";
import { getPokemonList } from "../../services/user-service/user.service";
import { List } from "./list/list";
import { ListItemProps } from "./list/list-item/list-item.interface";
import { ListScreenStyles } from "./list-screen.styles";
import { PreviewBlock } from "../../components/composite-components/preview-block/preview-block";
import Pickachu from "../../assets/svgs/pickachu.svg";
import { IS_RUNNING_IN_EXPO_GO } from "../../shared/utils";

@observer
export class ListScreen extends Component<{}, {}> {

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
        <ScrollView
          contentContainerStyle={ListScreenStyles.contentContainer}
          alwaysBounceVertical={false}
          refreshControl={<RefreshControl refreshing={this.isLoading} onRefresh={() => this.updateListData()}/>}
        >
          <View style={ListScreenStyles.container}>
            <PreviewBlock info={'Your advertisement may be here ;)'}>
              {
                IS_RUNNING_IN_EXPO_GO ?
                  <Pickachu width="100%" height="120" />
                  :
                  <Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5krfWpMHUZTJd2v6Bihpi9fEYrTh1jDxqqiOUh8ug-b_8L3PL'}}
                         resizeMode="contain"
                         style={{width:120, height:120, borderRadius: 12}}/>
              }
            </PreviewBlock>

            <List list={this.list}></List>
          </View>
        </ScrollView>
    )
  }
}
