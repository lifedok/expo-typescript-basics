import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./home-screen/home-screen";
import { ItemScreen } from "./item-screen/item-screen";
import { ListScreen } from "./list-screen/list-screen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} options={{title: 'Экран списка покемонов'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Главный экран'}}/>
        <Stack.Screen name="Item" component={ItemScreen} options={{title: 'Элемент покемона'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

