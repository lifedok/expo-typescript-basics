import { StyleSheet } from "react-native";

export const DrawerContentStyles = StyleSheet.create({
  infoSection: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: '#6e6e6e',
    width: '100%',
  },
  drawerSection: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  bottom: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  }
});
