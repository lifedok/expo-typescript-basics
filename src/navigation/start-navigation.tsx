import { HomeScreen } from "../screens/home-screen/home-screen";
import { ListScreen } from "../screens/list-screen/list-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemScreen } from "../screens/item-screen/item-screen";

const Stack = createNativeStackNavigator();

export default function StartNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'List',
          // headerLeft: () => (<Text/>),
        }}/>
      <Stack.Screen name="Item" component={ItemScreen}/>
    </Stack.Navigator>
  )
}
