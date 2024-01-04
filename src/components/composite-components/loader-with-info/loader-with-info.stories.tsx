import React from 'react';
import { View } from 'react-native';
import { LoaderWithInfo } from "./loader-with-info";
import { SharedStyles } from "../../../shared/styles";

const LoaderWithInfoMeta = {
  title: 'Composite-components/LoaderWithInfo',
  component: LoaderWithInfo,
  decorators: [
    (Story) => <View style={SharedStyles.viewCenter}><Story /></View>,
  ],
};

export default LoaderWithInfoMeta;

export const LoaderWithInfoDefault = {};
