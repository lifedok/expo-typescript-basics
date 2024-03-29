import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Input } from "../../components/simple-components/input/input";
import { Button } from "../../components/simple-components/button/button";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import { LoginSharedStyles } from "../../shared/styles";
import { IS_ANDROID } from "../../shared/utils";


export function ForgotScreen({navigation}: { navigation: any }) {
  const [email, setEmail] = React.useState<string>('');
  const [isResetLink, setResetLink] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasErrors, setErrors] = React.useState<boolean>(true);

  const handleResetPassword = async () => {
    setLoading(true);
    setErrors(false);
    await sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        setLoading(false);
        setResetLink(true);
        alert(`Password reset email send!`);
      })
      .catch((error) => {
        alert(error.message);
        setErrors(true);
        setResetLink(false);
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={IS_ANDROID ? 'height' : 'padding'}
      style={LoginSharedStyles.wrapper}
      enabled={false}>

      <View style={LoginSharedStyles.content}>
        <Text style={LoginSharedStyles.text}>
          Reset you password
        </Text>

        <View style={LoginSharedStyles.inputSecure}>
          <Input
            placeholder={'Enter your email'}
            value={email}
            onChangeText={(v) => setEmail(v)}
          />

          {
            isResetLink && (
              <View style={[LoginSharedStyles.inputLeftSide, {width: '100%', top: '77%', alignItems: 'center', paddingHorizontal: 0}]}>
                <Text style={[LoginSharedStyles.textSecure, {fontSize: 9, backgroundColor: 'transparent'}]}>
                  Check your email or spam folder to find password reset link
                </Text>
              </View>
            )
          }
        </View>

        <View style={LoginSharedStyles.buttonContainer}>
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
