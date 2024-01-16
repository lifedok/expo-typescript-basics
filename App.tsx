import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as MobxProvider } from "mobx-react";
import ListStore from "./src/stores/list.store";
import { PokemonNavigation } from "./src/screens/old-version/pokemon-navigation";
import Navigation from "./src/navigation/navigation";

class App extends React.PureComponent {
  private allStores: any;

  componentDidMount() {
  }

  public constructor(props) {
    super(props);
    this.allStores = {
      listStore: new ListStore(),
    }
  }

  render() {
    return (
      <MobxProvider store={this.allStores}>
        <SafeAreaProvider>
          <StatusBar/>

          <View style={styles.background}>
            <SafeAreaView style={[styles.safeArea]}>
              {/*<Navigation/>*/}
              <PokemonNavigation/>
            </SafeAreaView>
          </View>
        </SafeAreaProvider>
      </MobxProvider>
    )
  }
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

const marginColor = '#fff';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: marginColor,
  },
  safeArea: {
    flex: 1,
    borderRadius: 16,
  },
});
