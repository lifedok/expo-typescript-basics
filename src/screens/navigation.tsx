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
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="List" component={ListScreen} options={{title: 'List'}}/>
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={{
            gestureEnabled: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

