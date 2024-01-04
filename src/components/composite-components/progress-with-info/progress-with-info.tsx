import React, { PureComponent } from "react";
import { View, Text, StyleProp } from "react-native";
import { ProgressWithInfoStyles } from "./progress-with-info.styles";
import { ProgressWithInfoProps } from "./progress-with-info.interface";

export class ProgressWithInfo extends PureComponent<ProgressWithInfoProps> {

  render() {
    return (
      <View style={ProgressWithInfoStyles.wrapper}>
        <View style={ProgressWithInfoStyles.field}>
          <View style={[ProgressWithInfoStyles.progress, {width: `${this.props.value}%` as StyleProp<any>}]}/>
        </View>

        <Text style={ProgressWithInfoStyles.label}>
          {this.props.label}
        </Text>
      </View>
    )
  }
}
