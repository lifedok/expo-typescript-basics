import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { LoginScreenStyles } from "./login-screen.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase.config";
import Constants from 'expo-constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { Input } from "../../../components/simple-components/input/input";
import { Button } from "../../../components/simple-components/button/button";

export function LoginScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isSecureText, setSecureText] = React.useState<boolean>(true);
  const [hasErrors, setErrors] = React.useState<boolean>(true);


  const handleSignIn = async () => {
    setLoading(true);
    setErrors(false)
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        setLoading(false);
        alert(`Login successful! \n Welcome ${firebaseAuth.currentUser?.email}`);
      })
      .catch((error) => {
        alert(error.message);
        setErrors(true)
      })
  }

  {/*<View style={{backgroundColor: 'white', padding: 12}}>*/
  }
  {/*  <Text>Email: {firebaseAuth.currentUser?.email}</Text>*/
  }
  {/*</View>*/
  }

  {/*onPress={() => navigation.navigate((user ? 'ContentNavigation' : 'InitNavigation') as any, { screen: user ? 'ContentNavigation' : 'InitNavigation' } as any)}*/
  }

  const height = useHeaderHeight()
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={height + Constants.statusBarHeight}
      style={LoginScreenStyles.wrapper}
      enabled>

      <View style={LoginScreenStyles.content}>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#002856', paddingBottom: 42}}>
          Let's get you signed in!
        </Text>

        <View style={LoginScreenStyles.inputContainer}>
          <Input
            placeholder={'Enter your email'}
            value={email}
            onChangeText={(v) => {
              let value = v.toLowerCase();
              setEmail(value)
            }}
          />

          <View style={LoginScreenStyles.inputSecure}>
            <Input
              placeholder={'Enter your password'}
              secureTextEntry={isSecureText}
              value={password}
              onChangeText={(v) => {
                let value = v.toLowerCase();
                setPassword(value)
              }}
            />

            <View style={LoginScreenStyles.inputLeftSide}>
              <Text style={LoginScreenStyles.textSecure}
                    onPress={() => setSecureText(!isSecureText)}>
                {isSecureText ? 'off' : 'on'}
              </Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'flex-end', paddingTop: 8, width: '100%'}}>
          <Button
            type={'link'}
            onPress={() => navigation.navigate('ForgotScreen')}
          >Forgot Password?</Button>
        </View>

        <View style={LoginScreenStyles.buttonContainer}>
          <Button
            onPress={handleSignIn}
            isFill
            disabled={!email || !password}
          >
            {hasErrors || !isLoading ? 'Login' : 'Logging'}
          </Button>

          <View style={LoginScreenStyles.footerContent}>
            <Text>New here?</Text>
            <Button
              type={'link'}
              onPress={() => navigation.navigate('SignupScreen')}
            >Sign up</Button>
          </View>
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}
