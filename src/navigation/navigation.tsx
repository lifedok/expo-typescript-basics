import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from "../../firebase.config";
import ContentNavigation from "./content-navigation";
import InitNavigation from "./init-navigation";
import { StartScreen } from "../screens/start-screen/start-screen";
import { PrimaryColor } from "../shared/colors";

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
        initialRouteName={!user ? 'StartScreen' : 'HomeScreen'}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: PrimaryColor
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

