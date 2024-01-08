import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, ScrollView, RefreshControl, Image, Text } from "react-native";
import { observer } from "mobx-react";
import { FULL_POKEMON_API, getPokemonFullList, getPokemonList } from "../../services/user-service/user.service";
import { List } from "./list/list";
import { ListItemProps } from "./list/list-item/list-item.interface";
import { ListScreenStyles } from "./list-screen.styles";
import { PreviewBlock } from "../../components/composite-components/preview-block/preview-block";
import Pickachu from "../../assets/svg/pickachu.svg";
import { IS_RUNNING_IN_EXPO_GO } from "../../shared/utils";
import { SharedStyles } from "../../shared/styles";
import { LoaderWithInfo } from "../../components/composite-components/loader-with-info/loader-with-info";
import { SearchBar } from "react-native-elements";
import { Images } from "../../assets/images/images";
// import { debounce } from "lodash";

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

  @observable public fullList: any[] = [];

  @action setFullList(value: []) {
    this.fullList = value;
  }

  @observable public pokemons: any;

  @action setPokemons(value) {
    this.pokemons = value;
  }

  @observable public displayPokemons: any;

  @action setDisplayPokemons(value) {
    this.displayPokemons = value;
  }

  @observable keyword: any;

  @action setKeyword(value) {
    this.keyword = value;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  async fetchData(url) {
      try {
        this.setIsLoading(true);
        const response = await fetch(url);
        const responseJson = await response.json();

        this.setPokemons(responseJson);
        this.setDisplayPokemons(responseJson);
        this.setKeyword("");

      } catch (error) {
        Alert.alert("Cannot connect to Server!");
      } finally {
        this.setIsLoading(false);
      }
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

  async updateFullListData() {
    try {
      this.setIsLoading(true);
      const data = getPokemonFullList();
      this.setFullList(await data);
    } catch (err) {
      console.error('Error fetching list data:', err);
      Alert.alert('Error fetching list data');
      throw err;
    } finally {
      this.setIsLoading(false);
    }
  }

  // searchPokemon = useCallback(
  //   debounce((keyword) => {
  //     if (keyword == "") {
  //       this.setDisplayPokemons(pokemons);
  //     } else {
  //       const filteredPokemons = this.pokemons.filter((pokemon) => {
  //         return pokemon.title_1.toLowerCase().includes(keyword.toLowerCase());
  //       });
  //       this.setDisplayPokemons(filteredPokemons);
  //     }
  //   }, 1000),
  //   [this.pokemons]
  // );

  searchPokemon() {
    console.log('this', this);
      // debounce((keyword) => {
    //     if (keyword == "") {
    //       this.setDisplayPokemons(pokemons);
    //     } else {
    //       const filteredPokemons = this.pokemons.filter((pokemon) => {
    //         return pokemon.title_1.toLowerCase().includes(keyword.toLowerCase());
    //       });
    //       this.setDisplayPokemons(filteredPokemons);
    //     }
    //   }, 1000),
    //   [this.pokemons]
  }

  inputSearchPokemon = (keyword) => {
    console.log('keyword', keyword)
    this.setKeyword(keyword);
    // this.searchPokemon(keyword);
    this.searchPokemon.bind(this);
  };

  componentDidMount() {
    // this.updateListData();
    this.updateFullListData();
  }

  componentDidUpdate() {
  }

  render() {
    console.log('fullList', this.fullList)
    return (
      this.isLoading ?
        <LoaderWithInfo/>
        :
        <ScrollView
          contentContainerStyle={ListScreenStyles.contentContainer}
          alwaysBounceVertical={false}
          refreshControl={<RefreshControl refreshing={this.isLoading} onRefresh={() => this.updateListData()}/>}
        >
          <View style={SharedStyles.contentWrapper}>

            <SearchBar
              placeholder="Find Pokemon by name ..."
              inputContainerStyle={{ backgroundColor: "#e9e9e9" }}
              containerStyle={{ backgroundColor: "transparent" }}
              lightTheme={true}
              round={true}
              value={this.keyword}
              onChangeText={this.inputSearchPokemon}
            />

            {
              this.fullList.map((item) => {
                return (
                  <View key={item.nid} style={{alignItems: 'center', borderBottomColor: 'red', borderBottomWidth: 1, borderStyle: 'solid'}}>
                    <Image source={item.uri ? { uri: item.uri } : Images.emptyImage} width={32} height={32}/>
                    <Text>{item.title_1}</Text>
                  </View>
                )
              })
            }
            {/*<PreviewBlock info={'Your advertisement may be here ;)'}>*/}
            {/*  {*/}
            {/*    IS_RUNNING_IN_EXPO_GO ?*/}
            {/*      <Pickachu width="100%" height="120" />*/}
            {/*      :*/}
            {/*      <Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5krfWpMHUZTJd2v6Bihpi9fEYrTh1jDxqqiOUh8ug-b_8L3PL'}}*/}
            {/*             resizeMode="contain"*/}
            {/*             style={{width:120, height:120, borderRadius: 12}}/>*/}
            {/*  }*/}
            {/*</PreviewBlock>*/}

            {/*<List list={this.list}/>*/}
          </View>
        </ScrollView>
    )
  }
}
