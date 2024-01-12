import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../home-screen/home-screen";
import { ItemScreen } from "../item-screen/item-screen";
import { ListScreen } from "../list-screen/list-screen";
import { LoginScreen } from "../login-screen/login-screen";
import { StackNavigatorType } from "./navigation.type";

const Stack = createNativeStackNavigator<StackNavigatorType>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black'
        }}>

        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'List',
            // headerLeft: () => (<Text/>),
        }}/>
        {/*<Stack.Screen*/}
        {/*  name="Item"*/}
        {/*  component={ItemScreen}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

