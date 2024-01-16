import React, { Component } from "react";
import { View, Text, FlatList, Alert, Image } from "react-native";
import { getPokemonList } from "../../../services/user-service/user.service";
import { LoaderWithInfo } from "../../../components/composite-components/loader-with-info/loader-with-info";
import { firebaseAuth } from "../../../../firebase.config";
import { action, makeObservable, observable } from "mobx";
import { SharedStyles } from "../../../shared/styles";
import { observer } from "mobx-react";
import { List } from "./list/list";
import { Icon, SearchBar } from "react-native-elements";

interface HomeScreenStateProps {
  isLoading: boolean;
  listData: [];
  width: number;
  searchValue: string;
  filteredListData: [];
}

@observer
export class HomeScreen extends Component<{ props }, {}> {

  constructor(props: any) {
    super(props);
    makeObservable(this);
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
    const filteredList = (this.state as HomeScreenStateProps).filteredListData.filter(
      (item) => {
        let itemName = (item as any).name.toLowerCase();
        let searchItemName = value.toLowerCase();
        return itemName.indexOf(searchItemName) > -1;
      }
    )

    this.setState({listData: filteredList, searchValue: value})
  }

  handleSignOut = () => {
    firebaseAuth.signOut().then(() => {
      alert(`You have successfully logged out!`);
    }).catch((error) => alert(error.message))
  }

  findDimensions(layout) {
    const {width} = layout;
    this.setState({width: width})
  }

  render() {
    const state = (this.state as HomeScreenStateProps);
    const {navigation} = this.props;
    return (
      <View style={SharedStyles.contentWrapper}>

        <View style={{flexDirection: 'row'}}>
          <SearchBar
            placeholder="Find Pokemon by name ..."
            inputContainerStyle={{backgroundColor: "#e9e9e9"}}
            containerStyle={{backgroundColor: "transparent"}}
            lightTheme={true}
            round={true}
            value={state.searchValue}
            onChangeText={(value) => this.searchValue(value)}
          />
          <Icon
            raised
            name='sign-out'
            type='font-awesome'
            color='#f50'
            onPress={() => {
              navigation.openDrawer();
              console.log('openDrawer')
            }} />
        </View>

        {
          state.isLoading ? <LoaderWithInfo/> : <List list={state.listData}/>
        }
      </View>
    )
  }
}
