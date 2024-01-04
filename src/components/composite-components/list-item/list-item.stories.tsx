import React from 'react';
import { View } from 'react-native';
import { ListItem } from './list-item';
import { ViewCenterStyles } from "../../../shared/styles";

const ListItemMeta = {
  title: 'Composite-components/ListItem',
  component: ListItem,
  args: {
    text: 'info for list item',
  },
  decorators: [
    (Story) => <View style={{...ViewCenterStyles()}}><Story /></View>,
  ],
};

export default ListItemMeta;

export const ListItemDefault = {};

export const ListItemSelected = {
  args: {
    text: 'list item for another example',
  },
};
