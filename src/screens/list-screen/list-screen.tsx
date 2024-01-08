import React, { Component } from "react";
import { action, makeObservable, observable } from "mobx";
import { View, Alert, ScrollView, RefreshControl, Image, Text, FlatList, StyleSheet } from "react-native";
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
import { Images } from "../../assets/images/images";
import { debounce } from "lodash";
import { Avatar, ListItem, SearchBar } from "react-native-elements";


@observer
export class ListScreen extends React.Component<any, any> {

  @observable public isLoading: boolean = true;

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  state = {
    isLoading: true,
    listData: null,
    displayPokemons: null
    // weatherCondition: null,
    // error: null,
  };

  fetchListData() {
    fetch(
      FULL_POKEMON_API
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          listData: data,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.fetchListData();
    // this.updateListData();
    // this.updateFullListData();
    // this.fetchPokemonData(FULL_POKEMON_API);
  }

  componentDidUpdate() {
  }

  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    const pokemonTypes = item.field_pokemon_type.split(", ");
    const PokemonTypeElement = pokemonTypes.map((type, index) => {
      return (
        <View key={index}>
          <PokemonType type={type} />
        </View>
      );
    });

    return (
      <ListItem
        bottomDivider={true}
        onPress={() => {
          this.props.navigation.navigate("PokemonDetail", {
            pokemon: this.state.displayPokemons[index],
          });
        }}
      >
        <Avatar
          source={item.uri ? { uri: item.uri } : Images.emptyImage}
          size="medium"
        />

        <ListItem.Content>
          <ListItem.Title>{item.title_1}</ListItem.Title>

          <ListItem.Subtitle style={styles.listItemSubtitle}>
            #
            {item.number.length <= 3
              ? ("00" + item.number).slice(-3)
              : item.number}
          </ListItem.Subtitle>
        </ListItem.Content>

        <View style={{ flexDirection: "row" }}>{PokemonTypeElement}</View>
      </ListItem>
    );
  };

  render() {
    const { isLoading, listData, displayPokemons } = this.state

    return (
      isLoading ?
        <LoaderWithInfo/>
        :
        <View>
          <FlatList
            data={displayPokemons}
            renderItem={this.renderItem}
            keyExtractor={(item as any) => item.nid}
            initialNumToRender={10}
          />
        </View>

        // <ScrollView
        //   contentContainerStyle={ListScreenStyles.contentContainer}
        //   alwaysBounceVertical={false}
        //   refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => this.fetchListData()}/>}
        // >
        //   <View style={SharedStyles.contentWrapper}>
        //
        //     {/*<SearchBar*/}
        //     {/*  placeholder="Find Pokemon by name ..."*/}
        //     {/*  inputContainerStyle={{backgroundColor: "#e9e9e9"}}*/}
        //     {/*  containerStyle={{backgroundColor: "transparent"}}*/}
        //     {/*  lightTheme={true}*/}
        //     {/*  round={true}*/}
        //     {/*  value={this.keyword}*/}
        //     {/*  onChangeText={this.inputSearchPokemon}*/}
        //     {/*/>*/}
        //
        //     {
        //       listData.map((item) => {
        //         return (
        //           <View key={item.nid} style={{
        //             alignItems: 'center',
        //             borderBottomColor: 'red',
        //             borderBottomWidth: 1,
        //             borderStyle: 'solid'
        //           }}>
        //             <Image source={item.uri ? {uri: item.uri} : Images.emptyImage} width={32} height={32}/>
        //             <Text>{item.title_1}</Text>
        //           </View>
        //         )
        //       })
        //     }
        //     {/*<PreviewBlock info={'Your advertisement may be here ;)'}>*/}
        //     {/*  {*/}
        //     {/*    IS_RUNNING_IN_EXPO_GO ?*/}
        //     {/*      <Pickachu width="100%" height="120" />*/}
        //     {/*      :*/}
        //     {/*      <Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5krfWpMHUZTJd2v6Bihpi9fEYrTh1jDxqqiOUh8ug-b_8L3PL'}}*/}
        //     {/*             resizeMode="contain"*/}
        //     {/*             style={{width:120, height:120, borderRadius: 12}}/>*/}
        //     {/*  }*/}
        //     {/*</PreviewBlock>*/}
        //
        //     {/*<List list={this.list}/>*/}
        //   </View>
        // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  listItemSubtitle: { marginTop: 10, color: "#939393" },
});
