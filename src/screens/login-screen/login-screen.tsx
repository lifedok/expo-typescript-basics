import React, { PureComponent } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { LoginScreenStyles } from "./login-screen.styles";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { auth } from "../../../firebase";

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

  handleSignUp() {
    auth
      .createUserWithEmailAndPassword(this.emailValue, this.passwordValue)
      .then(userCredentials => {
        const user = userCredentials.user;
        // console.log('email',  user.emailValue)
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
            onPress={() => console.log('Login')}
            activeOpacity={0.8}>
            <Text style={LoginScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
            onPress={this.handleSignUp}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Register</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
