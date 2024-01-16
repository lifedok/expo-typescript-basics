import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ItemScreen } from "../screens/content/item-screen/item-screen";
import { HomeScreen } from "../screens/content/home-screen/home-screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function ContentNavigation() {

  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}/>
      <Drawer.Screen
        name="ItemScreen"
        component={ItemScreen}
      />
    </Drawer.Navigator>
  )
}
