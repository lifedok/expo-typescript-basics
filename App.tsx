import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./src/components/welcome";
import { getPokemonList } from "./src/services/user-service/user.service";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import Storybook from "./.storybook";
// import { MenuProvider } from 'react-native-popup-menu';

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <MenuProvider backHandler={true}>
//         <View
//           style={{ flex:1 }}>
//           <StatusBar barStyle="light-content" backgroundColor="rgba(222, 88, 51, 1)"/>
//           <Provider store={store}>
//             <MainAppNavigator/>
//           </Provider>
//         </View>
//       </MenuProvider>
//     );
//   }
// }


// function App() {
//   const [posts, setPosts] = useState([]);
//
//   useEffect(() => {
//     // fetch data
//     const dataFetch = async () => {
//       const data = await getPokemonList();
//       // set state when the data received
//       setPosts(data);
//     };
//
//     dataFetch();
//   }, []);
//   console.log('pokemonList', posts);
//
//   return (
//     <View style={styles.container}>
//
//       <Welcome/>
//       {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

class App extends Component<{}, {}> {
  private data = {}

  // @action
  // setIsShuffledPoolsLoading(key: PoolFilterKeys, value: boolean) {
  //   this.isShuffledPoolsLoading[key] = value;
  // }
  //
  componentDidMount() {
    // this.data = await getPokemonList()
  }

  render() {
    console.log('data', this.data);
    return (
      <View style={styles.container}>

        <Welcome/>
        {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
        <StatusBar style="auto" />
      </View>
    );
  }
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
