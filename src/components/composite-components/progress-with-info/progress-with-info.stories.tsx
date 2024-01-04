import React from 'react';
import { View } from 'react-native';
import { SharedStyles } from "../../../shared/styles";
import { ProgressWithInfo } from "./progress-with-info";

const ProgressWithInfoMeta = {
  title: 'Composite-components/ProgressWithInfo',
  component: ProgressWithInfo,
  args: {
    value: 20,
    label: 'Label'
  },
  decorators: [
    (Story) => <View style={SharedStyles.viewCenter}><Story /></View>,
  ],
};

export default ProgressWithInfoMeta;

export const ProgressWithInfoDefault = {};
