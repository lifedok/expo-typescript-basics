import React, { PureComponent } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { LoginScreenStyles } from "./login-screen.styles";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });


interface LoginScreenProps {
}

@observer
export class LoginScreen extends PureComponent<LoginScreenProps> {
  @observable emailValue = '';
  @observable passwordValue = '';


  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  handleCreateAccount() {

    console.log('handleCreateAccount', this.emailValue)
    createUserWithEmailAndPassword(auth, this.emailValue, this.passwordValue)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('user',  user)
      })
      .catch((error) => alert(error.message))
  }

  handleSignIn() {
    console.log('handleSignIn')
    signInWithEmailAndPassword(auth, this.emailValue, this.passwordValue)
      .then(userCredentials => {
        // const user = userCredentials.user;
        console.log('userCredentials',  userCredentials)
      })
      .catch((error) => alert(error.message))
  }

  @action setEmail(input: string) {
    const prevInput = this.emailValue;
    console.log('setEmail', input)
    this.emailValue = input;
  }

  @action setPassword(input: string) {
    console.log('setPassword', input)
    this.passwordValue = input;
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={'padding'}
        style={LoginScreenStyles.wrapper}>
        <View style={LoginScreenStyles.inputContainer}>
          <TextInput
            placeholder={'Email'}
            value={this.emailValue}
            onChangeText={(v) => this.setEmail(v)}
            style={LoginScreenStyles.input}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry
            value={this.passwordValue}
            onChangeText={(v) => this.setPassword(v)}
            style={LoginScreenStyles.input}
          />
        </View>

        <View style={LoginScreenStyles.buttonContainer}>
          <TouchableOpacity
            style={LoginScreenStyles.button}
            onPress={this.handleSignIn}
            activeOpacity={0.8}>
            <Text style={LoginScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
            onPress={this.handleCreateAccount}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Register</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
