import React, { Component } from "react";
import { View, Alert } from "react-native";
import { getPokemonList } from "../../../services/user-service/user.service";
import { LoaderWithInfo } from "../../../components/composite-components/loader-with-info/loader-with-info";
import { SharedStyles } from "../../../shared/styles";
import { List } from "./list/list";
import { Icon, SearchBar } from "react-native-elements";

interface HomeScreenStateProps {
  isLoading: boolean;
  listData: [];
  width: number;
  searchValue: string;
  filteredListData: [];
}

export class HomeScreen extends Component<{ props }, {}> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      listData: [],
      width: null,
      searchValue: '',
      filteredListData: []
    } as HomeScreenStateProps
  }

  async updateListData() {
    try {
      const data = getPokemonList(); // TODO: add apollo with GraphQL
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

  componentDidMount() {
    this.setState({isLoading: true})
    this.updateListData()
  }

  searchValue(value) {
    const filteredList = (this.state as HomeScreenStateProps).filteredListData.filter(
      (item) => {
        let itemName = (item as any).name.toLowerCase();
        let searchItemName = value.toLowerCase();
        return itemName.indexOf(searchItemName) > -1;
      }
    )

    this.setState({listData: filteredList, searchValue: value})
  }

  render() {
    const state = (this.state as HomeScreenStateProps);
    const {navigation} = this.props;
    return (
      <View style={[SharedStyles.contentWrapper]}>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 12, paddingRight: 10}}>
          <SearchBar
            placeholder="Find Pokemon by name ..."
            inputContainerStyle={{backgroundColor: "#e9e9e9"}}
            containerStyle={{backgroundColor: "transparent", flex: 1}}
            lightTheme={true}
            round={true}
            value={state.searchValue}
            onChangeText={(value) => this.searchValue(value)}
          />
          <Icon
            name='navicon'
            type='font-awesome'
            color='#453535'
            size={24}
            onPress={() => navigation.openDrawer()} />
        </View>

        {
          state.isLoading ? <LoaderWithInfo/> : <List list={state.listData}/>
        }
      </View>
    )
  }
}
