import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, Image, ScrollView, ActivityIndicator, Text } from "react-native";
import { observer } from "mobx-react";
import { ItemScreenStyles } from "./item-screen.styles";
import { getPokemonItem } from "../../../services/user-service/user.service";
import { SharedStyles } from "../../../shared/styles";
import { ProgressList } from "./progress-list/progress-list";
import {
  ProgressWithInfoProps
} from "../../../components/composite-components/progress-with-info/progress-with-info.interface";
import ItemType from "./item-type/item-type";
import ItemHeader from "./item-header/item-header";

@observer
export class ItemScreen extends Component<{ props }, {}> {

  @observable public isLoading: boolean = true;

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @observable item = [];

  @action setItem(data) {
    this.item = data;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  async updateItemData(id: string) {
    try {
      this.setIsLoading(true);
      const data = await getPokemonItem(id);
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
    const {route: {params: {id}}, navigation} = this.props;
    navigation.setOptions({title: id})

    this.updateItemData(id);
  }

  getPokemonStats(): ProgressWithInfoProps[] {
    const pokemon = this.item as any;
    return pokemon.stats.map((item) => {
      const {stat, base_stat} = item;
      return ({
        label: stat.name,
        value: base_stat
      })
    })
  }

  render() {
    const {route: {params: {id, item}}, navigation} = this.props;
    const pokemon = this.item as any;

    return (
      <View style={[ItemScreenStyles.wrapper]}>
        {
          this.isLoading ?
            <ActivityIndicator animating size="large" color={'#fff'} style={{marginTop: 40}}/>
            :
            <View style={[SharedStyles.contentWrapper, ItemScreenStyles.container]}>
              <ItemHeader navigation={navigation} />
              <ScrollView style={{flex: 1}}>
                <View style={ItemScreenStyles.content}>
                  <Image
                    style={ItemScreenStyles.avatar}
                    placeholderStyle={{backgroundColor: "transparent"}}
                    PlaceholderContent={<ActivityIndicator/>}
                    source={{uri: item}}
                  />
                  <Text style={ItemScreenStyles.itemName}>{pokemon.name}</Text>

                  <View style={{flexDirection: "row", justifyContent: "center", paddingBottom: 32}}>
                    {
                      pokemon.types.map(({type}, index) => {
                        return (
                          <View style={ItemScreenStyles.pokemonType} key={`${type.name}_${index}`}>
                            <ItemType type={type.name}/>
                            <Text>{type.name}</Text>
                          </View>
                        )
                      })
                    }
                  </View>

                  <ProgressList list={this.getPokemonStats()}/>
                </View>
              </ScrollView>
            </View>
        }
      </View>
    )
  }
}
