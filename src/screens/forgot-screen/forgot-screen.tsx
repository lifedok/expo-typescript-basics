import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { ForgotScreenStyles } from "./forgot-screen.styles";
import { LoginScreenStyles } from "../login-screen/login-screen.styles";


export function ForgotScreen({navigation}: { navigation: any }) {

    return (
      <KeyboardAvoidingView
        behavior={'padding'}
        style={ForgotScreenStyles.wrapper}>

        <View style={ForgotScreenStyles.inputContainer}>
          <TouchableOpacity
            style={[LoginScreenStyles.button, LoginScreenStyles.buttonOutline]}
            onPress={() => navigation.push('LoginScreen')}
            activeOpacity={0.8}>
            <Text style={[LoginScreenStyles.buttonText, LoginScreenStyles.buttonOutlineText]}>Back to login</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
}
