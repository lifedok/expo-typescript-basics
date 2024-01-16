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
import { ListItemProps } from "../home-screen/list/list-item/list-item.interface";

@observer
export class ItemScreen extends Component<{ props }, {}> {

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
    const {route: {params: {id, item}}} = this.props;
    const {navigation} = this.props;
    navigation.setOptions({title: id})
    this.updateItemData();
  }

  componentDidUpdate() {
  }

  render() {
    const {route: {params: {id, item}}} = this.props;
    console.log('item', item)
    return (
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
