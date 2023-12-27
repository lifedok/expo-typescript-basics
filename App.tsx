import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./src/components/welcome";
import { getPokemonList } from "./src/services/user-service/user.service";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import Storybook from "./.storybook";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await getPokemonList();
      // set state when the data received
      setPosts(data);
    };

    dataFetch();
  }, []);
  console.log('pokemonList', posts);
  return (
    <View style={styles.container}>

      <Welcome/>
      {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
      <StatusBar style="auto" />
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
