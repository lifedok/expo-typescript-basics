import React, { Component, PropsWithChildren } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { PreviewBlockStyles } from "./preview-block.styles";

interface PreviewBlockProps extends PropsWithChildren {
  info: string
}

export class PreviewBlock extends Component<PreviewBlockProps, {}> {

  render() {
    const {info, children} = this.props;
    return (
      <View style={PreviewBlockStyles.wrapper}>
        <LinearGradient
          colors={['#ffffff', '#f8de76', '#9fcbf1']}
          style={PreviewBlockStyles.gradient}>
          <Text style={PreviewBlockStyles.text}>{info}</Text>

          {children}

        </LinearGradient>
      </View>
    );
  }
}
