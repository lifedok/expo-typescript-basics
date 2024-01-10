import React from "react";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { View, Text, ActivityIndicator, FlatList, Alert, TextInput } from "react-native";
import { SearchBar } from "./search-bar/search-bar";
import { getPokemonList } from "../../services/user-service/user.service";
import { SearchBarStyles } from "./search-bar/search-bar.styles";

interface ListScreenStateProps {
  isLoading: boolean;
  listData: [];
  filteredListData: [];
}

@observer
export class ListScreen extends React.PureComponent {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      listData: [],
      filteredListData: []
    } as ListScreenStateProps
    // makeObservable(this);
  }

  async updateListData() {
    try {
      const data = getPokemonList();
      console.log('data', data)
      this.setState({
        listData: await data,
        filteredListData: await data
      })
    } catch (err) {
      Alert.alert('Error fetching list data');
      throw err;
    } finally {
      this.setState({isLoading: false})
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true})
    this.updateListData()
  }

  searchValue(value) {
    const filteredList = (this.state as ListScreenStateProps).filteredListData.filter(
      (item) => {
        let itemName = (item as any).name.toLowerCase();
        let searchItemName = value.toLowerCase();
        return itemName.indexOf(searchItemName) > - 1;
      }
    )

    this.setState({listData: filteredList})
  }

  renderItem({item}) {
    console.log('item', item);
    return (
      <View style={{minHeight: 42, padding: 5}}>
        <Text style={{fontSize: 22, color: '#5868F9', fontWeight: '600'}}>
          {item.name}
        </Text>
      </View>
    )
  }

  render() {
    const state = (this.state as ListScreenStateProps);
    return (
      <View style={{flex: 1}}>
        {/*<SearchBar/>*/}
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={'#dddddd'}
          style={SearchBarStyles.container}
          onChangeText={(value) => this.searchValue(value)}
        />
        <View style={{flex: 1, paddingTop: 12}}>
          {
            state.isLoading &&
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating size="large" style={{marginTop: 20}} color={'#5868F9'}/>
              </View>
          }

          <FlatList
            data={state.listData}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 32}}>
                <Text style={{color: '#5868F9', fontSize: 16}}>No results</Text>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}
