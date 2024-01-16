import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";

export function TestScreen() {
  const [value, setValue] = useState('');

  const [getPokemons, {data, loading, error}] = useQuery(gql`
    mutation($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  `);

  return (
    <View style={{flex: 1}}>
      <TextInput value={value} onChangeText={setValue}/>
      <Button title={'get pokemons'} onPress={() => getPokemons({variables: {first: 10}})}/>
      <Text>{JSON.stringify(error || data)}</Text>
    </View>
  )
}
