import React from "react";
import { Text, View } from "react-native";
import { Input } from "../../../components/simple-components/input/input";
import { observer } from "mobx-react";
import { action, makeObservable, observable } from "mobx";
import { AuthFormStyles } from "./auth-form.styles";
import { Icon } from "react-native-elements";

interface IAuthForm {
  welcomeText: string,
  valueEmail: string,
  onChangeEmailText: (event: string) => void,
  valuePassword: string,
  onChangePasswordText: (event: string) => void,
  valueUsername?: string,
  onChangeUsernameText?: (e: string) => void,
  valueConfirmPassword?: string,
  onChangeConfirmPasswordText?: (e: string) => void,
  isFullForm?: boolean,
}

@observer
export class AuthForm extends React.PureComponent<IAuthForm> {

  @observable isSecureText: boolean = true;
  @action setSecureText(value: boolean) {
    this.isSecureText = value;
  }

  @observable isSecureConfirmText: boolean = true;
  @action setSecureConfirmText(value: boolean) {
    this.isSecureConfirmText = value;
  }

  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  render() {
    const {
      welcomeText,
      valueEmail,
      onChangeEmailText,
      valuePassword,
      onChangePasswordText,
      valueUsername,
      onChangeUsernameText,
      valueConfirmPassword,
      onChangeConfirmPasswordText,
      isFullForm
    } = this.props;
    return (
      <View style={AuthFormStyles.content}>
        <Text style={AuthFormStyles.text}>{welcomeText}</Text>

        <View style={AuthFormStyles.inputContainer}>

          {
            isFullForm &&
            <Input
              placeholder={'Enter your username'}
              value={valueUsername}
              onChangeText={onChangeUsernameText}
            />
          }

          <Input
            placeholder={'Enter your email'}
            value={valueEmail}
            onChangeText={(v) => onChangeEmailText(v)}
          />

          <View style={AuthFormStyles.inputSecure}>
            <Input
              placeholder={'Enter your password'}
              secureTextEntry={this.isSecureText}
              value={valuePassword}
              onChangeText={onChangePasswordText}
            />
            <View style={AuthFormStyles.inputLeftSide}>
              <Icon
                name={this.isSecureText ? 'eye-slash' : 'eye'}
                type='font-awesome'
                color='#0782f9'
                onPress={() => this.setSecureText(!this.isSecureText)}
              />
            </View>
          </View>

          {
            isFullForm &&
            <View style={AuthFormStyles.inputSecure}>
              <Input
                placeholder={'Confirm your password'}
                secureTextEntry={this.isSecureConfirmText}
                value={valueConfirmPassword}
                onChangeText={onChangeConfirmPasswordText}
              />
              <View style={AuthFormStyles.inputLeftSide}>
                <Icon
                  name={this.isSecureConfirmText ? 'eye-slash' : 'eye'}
                  type='font-awesome'
                  color='#0782f9'
                  onPress={() => this.setSecureConfirmText(!this.isSecureConfirmText)}
                />
              </View>
            </View>
          }

        </View>
      </View>
    );
  }
}
