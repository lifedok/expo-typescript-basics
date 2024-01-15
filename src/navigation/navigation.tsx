import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from "../../firebase.config";
import ContentNavigation from "./content-navigation";
import InitNavigation from "./init-navigation";
import { StartScreen } from "../screens/init/start-screen/start-screen";

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
        initialRouteName={!user ? 'StartScreen' : 'ListScreen'}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black'
        }}>

        {
          !user ?
            <Stack.Screen
              name={'InitNavigation' as any}
              component={InitNavigation}
              options={{headerShown: false}}
            />
            :
            <Stack.Screen
              name={'ContentNavigation' as any}
              component={ContentNavigation}
              options={{headerShown: false}}
            />
        }

      </Stack.Navigator>
    </NavigationContainer>
  )
}

