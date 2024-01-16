import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, Image } from "react-native";
import { observer } from "mobx-react";
import { ItemScreenStyles } from "./item-screen.styles";
import { getPokemonItem } from "../../../services/user-service/user.service";
import { PreviewBlock } from "../../../components/composite-components/preview-block/preview-block";
import { IS_RUNNING_IN_EXPO_GO } from "../../../shared/utils";
import Pickachu from "../../../assets/svg/pickachu.svg";
import { SharedStyles } from "../../../shared/styles";
import { ProgressList } from "./progress-list/progress-list";
import { HomeScreenMockData } from "./home-screen-mock.data";
import { LoaderWithInfo } from "../../../components/composite-components/loader-with-info/loader-with-info";

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

  render() {
    const {route: {params: {id, item}}} = this.props;
    console.log('render ==> this.item', this.item);
    return (
      this.isLoading ?
        <LoaderWithInfo/>
        :
        <View style={[SharedStyles.contentWrapper, ItemScreenStyles.container]}>
          <PreviewBlock info={id}>
            {
              IS_RUNNING_IN_EXPO_GO ?
                <Pickachu width="100%" height="120"/>
                :
                <Image
                  source={{uri: item}}
                  resizeMode="contain"
                  style={{width: 120, height: 120, borderRadius: 12}}/>
            }
          </PreviewBlock>

          <ProgressList list={HomeScreenMockData}/>
        </View>
    )
  }
}
