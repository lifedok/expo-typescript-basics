import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import { Button } from "../../components/simple-components/button/button";
import { AuthForm } from "../components/auth-form/auth-form";
import { LoginSharedStyles } from "../../shared/styles";
import { IS_ANDROID } from "../../shared/utils";


export function SignupScreen({navigation}: { navigation: any }) {
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [errorText, setErrorText] = React.useState<string>('');

  const [password, setPassword] = React.useState<any>('');

  const [confirmPassword, setConfirmPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasErrors, setErrors] = React.useState<boolean>(true);

  function validate() {
    if (!email.includes('@')) {
      setErrorText('Invalid email')
    } else if (email.indexOf(' ') != -1) {
      setErrorText('Email can not contain spaces')
    } else if (password.length < 6) {
      setErrorText('Password should be more then 6 charters')
    } else if (password.indexOf(' ') != -1) {
      setErrorText('Password can not contain spaces')
    } else if (password !== confirmPassword) {
      setErrorText('Password and password confirmation are not the same')
    }
  }

  const firebaseCreateAccount = async () => {
    setLoading(true);
    setErrors(false);

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

  console.log('errorText.length', errorText)
  return (
    <KeyboardAvoidingView
      behavior={IS_ANDROID ? 'height' : 'padding'}
      style={LoginSharedStyles.wrapper}
      enabled={false}>

      <View style={LoginSharedStyles.content}>
        <AuthForm
          welcomeText={'Let\'s get you registered!'}
          valueEmail={email}
          onChangeEmailText={(v) => {
            setEmail(v);
          }}
          valuePassword={password}
          onChangePasswordText={(v) => setPassword(v)}
          isFullForm
          valueUsername={username}
          onChangeUsernameText={(v) => setUsername(v)}
          valueConfirmPassword={confirmPassword}
          onChangeConfirmPasswordText={(v) => setConfirmPassword(v)}
        />

        {!!errorText.length && <Text style={LoginSharedStyles.errorText}>{errorText}</Text>}

        <View style={LoginSharedStyles.buttonContainer}>
          <Button
            onPress={() => {
              setErrorText('');
              validate();
              !errorText.length && firebaseCreateAccount()
            }}
            isFill
            disabled={!email || !password || !username || !confirmPassword}
          >
            {hasErrors || !isLoading ? 'Create account' : 'Creating account'}
          </Button>

          <View style={LoginSharedStyles.footerContent}>
            <Text>Already have an account?</Text>
            <Button
              type={'link'}
              onPress={() => navigation.navigate('LoginScreen')}
            >Login Now</Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
