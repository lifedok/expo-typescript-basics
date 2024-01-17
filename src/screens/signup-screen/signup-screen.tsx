import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import { Button } from "../../components/simple-components/button/button";
import { AuthForm } from "../components/auth-form/auth-form";
import { LoginSharedStyles } from "../../shared/styles";
import { IS_ANDROID } from "../../shared/utils";

interface SignupScreenStateProps {
  username?: string,
  email?: string,
  errorText?: string,
  password?: string,
  confirmPassword?: string,
  isLoading?: boolean,
}

export class SignupScreen extends Component<{ props }, SignupScreenStateProps> {

  constructor(props: any) {
    super(props);

    this.state = {
      username: '',
      email: '',
      errorText: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    } as SignupScreenStateProps
  }

  isFormError(): boolean {
    let hasError: boolean = false;
    const {email, password, confirmPassword} = this.state;

    if (!!email?.length) {
      if (!email.includes('@')) {
        this.setState({errorText: 'Invalid email'})
        hasError = true;
      } else if (email.indexOf(' ') != -1) {
        this.setState({errorText: 'Email can not contain spaces'})
        hasError = true;
      }
    }
    if (!!password?.length) {
      if (password.length < 6) {
        this.setState({errorText: 'Password should be more then 6 charters'})
        hasError = true;
      } else if (password.indexOf(' ') != -1) {
        this.setState({errorText: 'Password can not contain spaces'})
        hasError = true;
      }
    }
    if (!!password?.length && !!confirmPassword?.length && password.localeCompare(confirmPassword) !== 0) {
      this.setState({errorText: 'Password and password confirmation are not the same'})
      hasError = true
    }
    return hasError;
  }

  handelCreateAccount() {
    const formIsValid = this.isFormError();

    if (!formIsValid) {
      this.firebaseCreateAccount();
    }
  }

  async firebaseCreateAccount() {
    this.setState({isLoading: true, hasErrors: false})
    const {email, password, errorText} = this.state;

    if (!!email?.length && !!password?.length && !errorText?.length) {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('user', user)
          this.setState({isLoading: false})
          alert(`The account has been successfully created! \n Welcome ${firebaseAuth.currentUser?.email}`);
        })
        .catch((error) => {
          alert(error.message);
          this.setState({errorText: error.message})
        })
    }
  }

  render() {
    const {email, password, confirmPassword, username, errorText, isLoading} = this.state;
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView
        behavior={IS_ANDROID ? 'height' : 'padding'}
        style={LoginSharedStyles.wrapper}
        enabled={false}>

        <View style={LoginSharedStyles.content}>
          <AuthForm
            welcomeText={'Let\'s get you registered!'}
            valueEmail={!!email ? email : ''}
            onChangeEmailText={(v) => this.setState({email: v, errorText: ''})}
            valuePassword={!!password ? password : ''}
            onChangePasswordText={(v) => this.setState({password: v, errorText: ''})}
            isFullForm
            valueUsername={!!username ? username : ''}
            onChangeUsernameText={(v) => this.setState({username: v, errorText: ''})}
            valueConfirmPassword={!!confirmPassword ? confirmPassword : ''}
            onChangeConfirmPasswordText={(v) => this.setState({confirmPassword: v, errorText: ''})}
          />

          {!!errorText?.length && <Text style={LoginSharedStyles.errorText}>{errorText}</Text>}

          <View style={LoginSharedStyles.buttonContainer}>
            <Button
              onPress={this.handelCreateAccount.bind(this)}
              isFill
              disabled={!email || !password || !username || !confirmPassword}
            >
              {!!errorText?.length || !isLoading ? 'Create account' : 'Creating account'}
            </Button>

            <View style={LoginSharedStyles.footerContent}>
              <Text>Already have an account?</Text>
              <Button
                type={'link'}
                onPress={() => navigation.navigate('LoginScreen')}
              >Login Now</Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
