import React from 'react';
import { View } from 'react-native';
import { LoaderInfo } from "./loader-info";

const LoaderInfoMeta = {
  title: 'Composite-components/LoaderInfo',
  component: LoaderInfo,
  decorators: [
    (Story) => <View><Story /></View>,
  ],
};

export default LoaderInfoMeta;

export const LoaderInfoDefault = {};
