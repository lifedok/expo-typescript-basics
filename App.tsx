import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, StatusBar, View, ScrollView } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryView } from "./src/pages/primary-view/primary-view";
import { getAllPokemon, getPokemon } from "./src/services/user-service/user.service";

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, isLoading] = useState(true)
  const apiURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL)
      await loadPokemon(response.results)
      isLoading(false)
      console.log(response)
    }

    fetchData()
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet;
    }))
    setPokemonData(_pokemonData)
  }

  // console.log('loading', loading)
  // console.log('pokemonData', pokemonData);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent"/>

      <View style={styles.background}>
        <SafeAreaView style={[styles.safeArea]}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            alwaysBounceVertical={false}>
            <PrimaryView/>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const marginColor = '#fff';
const paddingColor = '#10ac84';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: marginColor,
  },
  safeArea: {
    flex: 1,
    // backgroundColor: paddingColor,
    borderRadius: 16,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#5c4db5',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
});
