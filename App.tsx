import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./components/welcome";
import { getPokemonList } from "./services/user-service/user.service";
import { useEffect, useState } from "react";
// npx sb@latest init --type react_native
export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
