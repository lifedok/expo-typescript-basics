import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/login-screen/login-screen";
import { SignupScreen } from "../screens/signup-screen/signup-screen";
import { ForgotScreen } from "../screens/forgot-screen/forgot-screen";
import { StartScreen } from "../screens/start-screen/start-screen";

const Stack = createNativeStackNavigator();

export default function InitNavigation() {

  return (
    <Stack.Navigator initialRouteName="Onboarding">

      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureDirection: 'vertical',
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_left'
      }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
      }}
      />
    </Stack.Navigator>
  )
}
