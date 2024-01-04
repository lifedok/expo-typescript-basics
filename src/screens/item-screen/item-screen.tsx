import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, Image } from "react-native";
import { observer } from "mobx-react";
import { ListItemProps } from "../list-screen/list/list-item/list-item.interface";
import { ItemScreenStyles } from "./item-screen.styles";
import { getPokemonItem } from "../../services/user-service/user.service";
import { PreviewBlock } from "../../components/composite-components/preview-block/preview-block";
import { IS_RUNNING_IN_EXPO_GO } from "../../shared/utils";
import Pickachu from "../../assets/svgs/pickachu.svg";
import { SharedStyles } from "../../shared/styles";
import { ProgressList } from "./progress-list/progress-list";
import { ListScreenMockData } from "./list-screen-mock.data";

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
    console.log('props', this.props)
    const {route: {params: {id, item}}} = this.props;
    return (
      <View style={[SharedStyles.contentWrapper, ItemScreenStyles.container]}>
        <PreviewBlock info={id}>
          {
            IS_RUNNING_IN_EXPO_GO ?
              <Pickachu width="100%" height="120"/>
              :
              <Image
                source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5krfWpMHUZTJd2v6Bihpi9fEYrTh1jDxqqiOUh8ug-b_8L3PL'}}
                resizeMode="contain"
                style={{width: 120, height: 120, borderRadius: 12}}/>
          }
        </PreviewBlock>

        <ProgressList list={ListScreenMockData}/>
      </View>
    )
  }
}
