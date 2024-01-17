import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import Constants from 'expo-constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { Button } from "../../components/simple-components/button/button";
import { AuthForm } from "../components/auth-form/auth-form";
import { LoginSharedStyles } from "../../shared/styles";

export function LoginScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
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

  const height = useHeaderHeight()
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={height + Constants.statusBarHeight}
      style={LoginSharedStyles.wrapper}
      enabled>

      <View style={LoginSharedStyles.content}>
        <AuthForm
          welcomeText={'Let\'s get you signed in!'}
          valueEmail={email}
          onChangeEmailText={(v) => {
            let value = v.toLowerCase();
            setEmail(value)
          }}
          valuePassword={password}
          onChangePasswordText={(v) => {
            let value = v.toLowerCase();
            setPassword(value)
          }}
        />

        <View style={{alignItems: 'flex-end', paddingTop: 8, width: '100%'}}>
          <Button
            type={'link'}
            onPress={() => navigation.navigate('ForgotScreen')}
          >Forgot Password?</Button>
        </View>

        <View style={LoginSharedStyles.buttonContainer}>
          <Button
            onPress={handleSignIn}
            isFill
            disabled={!email || !password}
          >
            {hasErrors || !isLoading ? 'Login' : 'Logging'}
          </Button>

          <View style={LoginSharedStyles.footerContent}>
            <Text>New here?</Text>
            <Button
              type={'link'}
              onPress={() => navigation.navigate('SignupScreen')}
            >Register now</Button>
          </View>
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}