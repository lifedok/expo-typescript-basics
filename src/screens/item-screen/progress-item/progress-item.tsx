import React, { PureComponent } from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { ProgressItemStyles } from "./progress-item.styles";
import { ProgressItemProps } from "./progress-item.interface";

export class ProgressItem extends PureComponent<ProgressItemProps> {

  render() {
    return (
      <View style={ProgressItemStyles.wrapper}>
        <View style={ProgressItemStyles.field}>
          <View style={[ProgressItemStyles.progress, {width: `${this.props.value}%` as StyleProp<any> }]}/>
        </View>

        <Text style={ProgressItemStyles.label}>
          {this.props.label}
        </Text>
      </View>
    )
  }
}
