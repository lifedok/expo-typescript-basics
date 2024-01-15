import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemScreen } from "../screens/content/item-screen/item-screen";
import { HomeScreen } from "../screens/content/home-screen/home-screen";

const Stack = createNativeStackNavigator();

export default function ContentNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}/>
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
      />
    </Stack.Navigator>
  )
}
