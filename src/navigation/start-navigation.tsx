import { HomeScreen } from "../screens/home-screen/home-screen";
import { ListScreen } from "../screens/list-screen/list-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemScreen } from "../screens/item-screen/item-screen";

const Stack = createNativeStackNavigator();

export default function StartNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          title: 'List',
          // headerLeft: () => (<Text/>),
        }}/>
      <Stack.Screen name="ItemScreen" component={ItemScreen}/>
    </Stack.Navigator>
  )
}
