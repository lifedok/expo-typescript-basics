import React from 'react';
import { StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as MobxProvider } from "mobx-react";
import ListStore from "./src/stores/list.store";
import { PokemonNavigation } from "./src/screens/version1.0/pokemon-navigation";
import { Navigation } from "./src/screens/navigation";
import useCustomFonts from "./src/assets/fonts/use-fonts";

class App extends React.PureComponent {
  private allStores: any;

  state = {
    isFontsLoading: true,
  };

  async _loadFontsAsync() {
    await useCustomFonts();
    this.setState({isFontsLoading: false});
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  public constructor(props) {
    super(props);
    this.allStores = {
      listStore: new ListStore(),
    }
  }

  render() {
    return (
      this.state.isFontsLoading ?
        <View style={{flex: 1}}>
          <ActivityIndicator animating size={'large'} color={'#5868F9'} style={{marginTop: 20}}/>
        </View>
        :
        <MobxProvider store={this.allStores}>
          <SafeAreaProvider>
            <StatusBar/>

            <View style={styles.background}>
              <SafeAreaView style={[styles.safeArea]}>
                <Navigation/>
                {/*<PokemonNavigation/>*/}
              </SafeAreaView>
            </View>
          </SafeAreaProvider>
        </MobxProvider>
    )
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
