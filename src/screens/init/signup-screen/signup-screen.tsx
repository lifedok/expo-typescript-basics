import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase.config";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/elements";
import { Button } from "../../../components/simple-components/button/button";
import { InitSharedStyles } from "../init-shared.styles";
import { AuthForm } from "../../components/auth-form/auth-form";


export function SignupScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasErrors, setErrors] = React.useState<boolean>(true);

  const handleCreateAccount = async () => {
    setLoading(true);
    setErrors(false)
    console.log('handleCreateAccount', email)
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('user', user)
        setLoading(false);
        alert(`The account has been successfully created! \n Welcome ${firebaseAuth.currentUser?.email}`);
      })
      .catch((error) => {
        alert(error.message);
        setErrors(true);
      })
  }

  const height = useHeaderHeight()
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={height + Constants.statusBarHeight}
      style={InitSharedStyles.wrapper}
      enabled>

      <View style={InitSharedStyles.content}>
        <AuthForm
          welcomeText={'Let\'s get you registered!'}
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

        <View style={InitSharedStyles.buttonContainer}>
          <Button
            onPress={handleCreateAccount}
            isFill
            disabled={!email || !password}
          >
            {hasErrors || !isLoading ? 'Create account' : 'Creating account'}
          </Button>

          <View style={InitSharedStyles.footerContent}>
            <Text>Already have an account?</Text>
            <Button
              type={'link'}
              onPress={() => navigation.navigate('LoginScreen')}
            >Sign up</Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
