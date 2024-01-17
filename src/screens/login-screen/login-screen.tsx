import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import { Button } from "../../components/simple-components/button/button";
import { AuthForm } from "../components/auth-form/auth-form";
import { LoginSharedStyles } from "../../shared/styles";
import { IS_ANDROID } from "../../shared/utils";

export function LoginScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasErrors, setErrors] = React.useState<boolean>(true);
  const [errorText, setErrorText] = React.useState<string>('');

  const isFormError = (): boolean => {
    let isError: boolean = false;
    if (!!email?.length) {
      if (!email.includes('@')) {
        setErrorText('Invalid email')
        isError = true;
      } else if (email.indexOf(' ') != -1) {
        setErrorText('Email can not contain spaces')
        isError = true;
      }
    }
    if (!!password?.length) {
      if (password.length < 6) {
        setErrorText('Password should be more then 6 charters')
        isError = true;
      } else if (password.indexOf(' ') != -1) {
        setErrorText('Password can not contain spaces')
        isError = true;
      }
    }
    return isError;
  }

  const handleSignIn = () => {
    const formIsValid = isFormError();
    if (!formIsValid) {
      firebaseSignIn();
    }
  }

  const firebaseSignIn = async () => {
    setLoading(true);
    setErrors(false);

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

  return (
    <KeyboardAvoidingView
      behavior={IS_ANDROID ? 'height' : 'padding'}
      style={LoginSharedStyles.wrapper}
      enabled={false}>

      <View style={LoginSharedStyles.content}>
        <AuthForm
          welcomeText={'Let\'s get you signed in!'}
          valueEmail={email}
          onChangeEmailText={(v) => {setEmail(v), setErrorText('')}}
          valuePassword={password}
          onChangePasswordText={(v) => {setPassword(v), setErrorText('')}}
        />

        {!!errorText?.length && <Text style={LoginSharedStyles.errorText}>{errorText}</Text>}

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
