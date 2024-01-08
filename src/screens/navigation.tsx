import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./home-screen/home-screen";
import { ItemScreen } from "./item-screen/item-screen";
import { ListScreen } from "./list-screen/list-screen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black'
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '', headerShown: false}}/>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'Pokemons',
            gestureEnabled: true,
            // headerLeft: () => (<Text/>),
        }}/>
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={{
            title: 'List',
            gestureEnabled: true,
            // headerLeft: () => (<Text/>),
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

