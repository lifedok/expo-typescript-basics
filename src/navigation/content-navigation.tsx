import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ItemScreen } from "../screens/content/item-screen/item-screen";
import { HomeScreen } from "../screens/content/home-screen/home-screen";
import { DrawerContent } from "./driver/drawer-content/drawer-content";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function ContentNavigation() {

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => <DrawerContent {...props}/>}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={StackNav}
        options={{
          headerShown: false,
        }}/>
    </Drawer.Navigator>
  )
}

const StackNav = () => {
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
