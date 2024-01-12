import React, { PureComponent } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { LoginScreenStyles } from "./login-screen.styles";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });


export function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    console.log('handleCreateAccount', email)
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('user',  user)
      })
      .catch((error) => alert(error.message))
  }

  const handleSignIn = () => {
    console.log('handleSignIn')
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        // const user = userCredentials.user;
        console.log('userCredentials',  userCredentials)
      })
      .catch((error) => alert(error.message))
  }

    return (
      <KeyboardAvoidingView
        behavior={'padding'}
        style={LoginScreenStyles.wrapper}>
        <View style={LoginScreenStyles.inputContainer}>
          <TextInput
            placeholder={'Email'}
            value={email}
            onChangeText={(v) => setEmail(v)}
            style={LoginScreenStyles.input}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry
            value={password}
            onChangeText={(v) => setPassword(v)}
            style={LoginScreenStyles.input}
          />
        </View>

        <View style={LoginScreenStyles.buttonContainer}>
          <TouchableOpacity
            style={LoginScreenStyles.button}
            onPress={handleSignIn}
            activeOpacity={0.8}>
            <Text style={LoginScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
            onPress={handleCreateAccount}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Register</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
}
