import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigatorType } from "./navigation.type";
import { useEffect, useState } from "react";
import firebase from "firebase/compat";
import {onAuthStateChanged} from 'firebase/auth'
import User = firebase.User;
import { firebaseAuth } from "../../firebase.config";
import StartNavigation from "./start-navigation";
import InitNavigation from "./init-navigation";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [user, serUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('user', user);
      serUser(user as User);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'InitNavigation' as any}
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

