import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PokemonList from "./pokemon-list";
import PokemonDetail from "./pokemon-detail";
import {HomeScreen} from "../home-screen/home-screen";

const PokemonStack = createNativeStackNavigator();

export const PokemonNavigation = () => {
  return (
    <NavigationContainer>
      <PokemonStack.Navigator
        initialRouteName="PokemonList"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black',
          headerShown: false,
          gestureEnabled: true,
        }}>
        <PokemonStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: '', headerShown: false}}/>
        <PokemonStack.Screen name="PokemonList" component={PokemonList}/>
        <PokemonStack.Screen name="PokemonDetail" component={PokemonDetail}/>
      </PokemonStack.Navigator>
    </NavigationContainer>
  )
}

