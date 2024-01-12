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
    console.log('handleSignIn');
    setLoading(true);
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredentials => {
        // const user = userCredentials.user;
        console.log('userCredentials', userCredentials);
        navigation.navigate("Home" as any);
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
          onChangeText={(v) => setEmail(v)}
          style={LoginScreenStyles.input}
        />
        <TextInput
          placeholder={'Enter your password'}
          secureTextEntry
          value={password}
          onChangeText={(v) => setPassword(v)}
          style={LoginScreenStyles.input}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
          onPress={() => navigation.push('ForgotScreen')}
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
            onPress={() => navigation.push('SignupScreen')}
            // onPress={handleCreateAccount}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
