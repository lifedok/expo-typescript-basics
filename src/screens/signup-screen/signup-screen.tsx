import React, {useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { SignupScreenStyles } from "./signup-screen.styles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";


export function SignupScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<any>('');
  const [username, setUsername] = React.useState<string>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home" as any)
      }
    });

    return unsubscribe;
  }, [])

  const handleCreateAccount = async () => {
    setLoading(true);
    console.log('handleCreateAccount', email)
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('user', user)
        setLoading(false);
        alert(`The account has been successfully created! \n Welcome ${firebaseAuth.currentUser?.email}`);
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={SignupScreenStyles.wrapper}>
      <View style={SignupScreenStyles.inputContainer}>
        <TextInput
          placeholder={'Enter your name'}
          value={username}
          onChangeText={(v) => setUsername(v)}
          style={SignupScreenStyles.input}
        />
        <TextInput
          placeholder={'Enter your email'}
          value={email}
          onChangeText={(v) => setEmail(v)}
          style={SignupScreenStyles.input}
        />
        <TextInput
          placeholder={'Enter your password'}
          secureTextEntry
          value={password}
          onChangeText={(v) => setPassword(v)}
          style={SignupScreenStyles.input}
        />
      </View>

      <View style={SignupScreenStyles.buttonContainer}>
        <TouchableOpacity
          style={SignupScreenStyles.button}
          onPress={handleCreateAccount}
          activeOpacity={0.8}>
          <Text style={SignupScreenStyles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={[SignupScreenStyles.button, SignupScreenStyles.buttonOutline]}
          onPress={() => navigation.push('LoginScreen')}
          activeOpacity={0.8}>
          <Text style={[SignupScreenStyles.buttonText, SignupScreenStyles.buttonOutlineText]}>Login</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}
