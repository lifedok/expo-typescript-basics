import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { LoginScreenStyles } from "./login-screen.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";


export function LoginScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);


  const handleSignIn = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredentials => {
        console.log('userCredentials', userCredentials);
        // navigation.navigate('HomeScreen');
        setLoading(false);
        alert(`Login successful! \n Welcome ${firebaseAuth.currentUser?.email}`);
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={LoginScreenStyles.wrapper}>
      <View style={LoginScreenStyles.inputContainer}>
        <TextInput
          placeholder={'Enter your email'}
          value={email}
          onChangeText={(v) => {
            let value = v.toLowerCase();
            setEmail(value)
          }}
          style={LoginScreenStyles.input}
        />
        <TextInput
          placeholder={'Enter your password'}
          secureTextEntry={false}
          value={password}
          onChangeText={(v) => {
            let value = v.toLowerCase();
            setPassword(value)
          }}
          style={LoginScreenStyles.input}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
          onPress={() => navigation.navigate('ForgotScreen')}
          activeOpacity={0.8}>
          <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={LoginScreenStyles.buttonContainer}>
        <TouchableOpacity
          style={LoginScreenStyles.button}
          onPress={handleSignIn}
          activeOpacity={0.8}>
          <Text style={LoginScreenStyles.buttonText}>
            {isLoading ? 'Logging' : 'Login'}
          </Text>
        </TouchableOpacity>

        <View style={LoginScreenStyles.buttonContainer}>
          <Text>New here?</Text>
          <TouchableOpacity
            style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
            onPress={() => navigation.navigate('SignupScreen')}
            // onPress={handleCreateAccount}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
