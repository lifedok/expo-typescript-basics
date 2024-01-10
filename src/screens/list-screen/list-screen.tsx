import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { getPokemonList } from "../../services/user-service/user.service";
import { LoaderWithInfo } from "../../components/composite-components/loader-with-info/loader-with-info";
import { Input } from "../../components/simple-components/input/input";

interface ListScreenStateProps {
  isLoading: boolean;
  listData: [];
  filteredListData: [];
}

export class ListScreen extends React.PureComponent {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      listData: [],
      filteredListData: []
    } as ListScreenStateProps
  }

  async updateListData() {
    try {
      const data = getPokemonList();
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
        <Input onChangeText={(value) => this.searchValue(value)}/>

        <View style={{flex: 1, paddingTop: 12}}>
          {
            state.isLoading ?
              <LoaderWithInfo/>
            :
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
          }

        </View>
      </View>
    )
  }
}
