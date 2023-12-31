import React from 'react';
import { View, Text } from 'react-native';
import { PreviewBlock } from "./preview-block";
import { SharedStyles } from "../../../shared/styles";

const PreviewBlockMeta = {
  title: 'Composite-components/PreviewBlock',
  component: PreviewBlock,
  args: {
    info: 'Preview Block text',
    children: <Text>render some children</Text>
  },
  decorators: [
    (Story) => <View style={SharedStyles.viewCenter}><Story /></View>,
  ],
};

export default PreviewBlockMeta;

export const PreviewBlockDefault = {};
