import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from "../../firebase.config";
import StartNavigation from "./start-navigation";
import InitNavigation from "./init-navigation";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [user, serUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('user', user);
      serUser(user as any);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'HomeScreen' : 'LoginScreen'}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black'
        }}>

        {
          user ?
            <Stack.Screen
              name={'StartNavigation' as any}
              component={StartNavigation}
              options={{headerShown: false}}
            />
            :
            <Stack.Screen
              name={'InitNavigation' as any}
              component={InitNavigation}
              options={{headerShown: false}}
            />
        }

      </Stack.Navigator>
    </NavigationContainer>
  )
}

