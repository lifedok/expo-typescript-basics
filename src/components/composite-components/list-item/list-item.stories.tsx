import React from 'react';
import { View } from 'react-native';
import { ListItem } from './list-item';

const ListItemMeta = {
  title: 'Composite-components/ListItem',
  component: ListItem,
  args: {
    text: 'info for list item',
  },
  decorators: [
    (Story) => <View><Story /></View>,
  ],
};

export default ListItemMeta;

export const ListItemDefault = {};

export const ListItemSelected = {
  args: {
    text: 'list item for another example',
  },
};
