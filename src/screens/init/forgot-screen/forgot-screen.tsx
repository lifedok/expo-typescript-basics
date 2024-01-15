import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ForgotScreenStyles } from "./forgot-screen.styles";
import { LoginScreenStyles } from "../login-screen/login-screen.styles";
import { useHeaderHeight } from "@react-navigation/elements";
import Constants from "expo-constants";
import { Input } from "../../../components/simple-components/input/input";
import { Button } from "../../../components/simple-components/button/button";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../../../../firebase.config";


export function ForgotScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [isResetLink, setResetLink] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasErrors, setErrors] = React.useState<boolean>(true);

  const height = useHeaderHeight();

  const handleResetPassword = async () => {
    setLoading(true);
    setErrors(false);
    await sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        setLoading(false);
        setResetLink(true);
        alert(`Password reset email (${firebaseAuth.currentUser?.email}) send!`);
      })
      .catch((error) => {
        alert(error.message);
        setErrors(true);
        setResetLink(false);
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={height + Constants.statusBarHeight}
      style={ForgotScreenStyles.wrapper}
      enabled>

      <View style={LoginScreenStyles.content}>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#002856', paddingBottom: 42}}>
          Reset you password
        </Text>

        <View style={LoginScreenStyles.inputSecure}>
          <Input
            placeholder={'Enter your email'}
            value={email}
            onChangeText={(v) => {
              let value = v.toLowerCase();
              setEmail(value)
            }}
          />

          {
            isResetLink && (
              <View style={[LoginScreenStyles.inputLeftSide, {width: '100%', top: '77%', alignItems: 'center', paddingHorizontal: 0}]}>
                <Text style={[LoginScreenStyles.textSecure, {fontSize: 9, backgroundColor: 'transparent'}]}>
                  Check your email or spam folder to find password reset link
                </Text>
              </View>
            )
          }
        </View>

        <View style={LoginScreenStyles.buttonContainer}>
          <Button
            onPress={handleResetPassword}
            isFill
            disabled={!email}
          >
            {`Reset${hasErrors || !isLoading ? '' : 'ing'} password`}
          </Button>

          <View style={{alignItems: 'flex-end', paddingTop: 8}}>
            <Button
              type={'link'}
              onPress={() => navigation.navigate('LoginScreen')}
            >Back to login</Button>
          </View>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}
