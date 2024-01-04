import React from 'react';
import { View } from 'react-native';
import { LoaderInfo } from "./loader-info";
import { ViewCenterStyles } from "../../../shared/styles";

const LoaderInfoMeta = {
  title: 'Composite-components/LoaderInfo',
  component: LoaderInfo,
  decorators: [
    (Story) => <View style={{...ViewCenterStyles()}}><Story /></View>,
  ],
};

export default LoaderInfoMeta;

export const LoaderInfoDefault = {};
