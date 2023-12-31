import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as MobxProvider } from "mobx-react";
import ListStore from "./src/stores/list.store";
import { TestScreen } from "./src/screens/test-screen/test-screen";
import { PokemonNavigation } from "./src/screens/version1.0/pokemon-navigation";
import { Navigation } from "./src/screens/navigation";

class App extends React.PureComponent {
  private allStores: any;

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
          <StatusBar backgroundColor="transparent"/>

          <View style={styles.background}>
            <SafeAreaView style={[styles.safeArea]}>
              <Navigation/>
              {/*<PokemonNavigation/>*/}
              {/*<TestScreen/>*/}
            </SafeAreaView>
          </View>
        </SafeAreaProvider>
      </MobxProvider>
    );
  }
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
});
