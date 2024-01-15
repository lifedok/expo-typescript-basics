import { ListScreen } from "../screens/content/list-screen/list-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemScreen } from "../screens/content/item-screen/item-screen";

const Stack = createNativeStackNavigator();

export default function ContentNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
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
