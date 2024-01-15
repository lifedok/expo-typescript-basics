import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase.config";
import { Input } from "../../../components/simple-components/input/input";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/elements";
import { Button } from "../../../components/simple-components/button/button";
import { InitSharedStyles } from "../init-shared.styles";


export function SignupScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isSecureText, setSecureText] = React.useState<boolean>(true);
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

      <View>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#002856', paddingBottom: 42}}>
          Let's get you registered!
        </Text>

        <View style={InitSharedStyles.inputContainer}>
          <Input
            placeholder={'Enter your email'}
            value={email}
            onChangeText={(v) => {
              let value = v.toLowerCase();
              setEmail(value)
            }}
          />

          <View style={InitSharedStyles.inputSecure}>
            <Input
              placeholder={'Enter your password'}
              secureTextEntry={isSecureText}
              value={password}
              onChangeText={(v) => {
                let value = v.toLowerCase();
                setPassword(value)
              }}
            />

            <View style={InitSharedStyles.inputLeftSide}>
              <Text style={InitSharedStyles.textSecure}
                    onPress={() => setSecureText(!isSecureText)}>
                {isSecureText ? 'off' : 'on'}
              </Text>
            </View>
          </View>
        </View>
      </View>

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
    </KeyboardAvoidingView>
  )
}
