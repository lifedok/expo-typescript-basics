import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  containerType_default: {
    backgroundColor: '#fff',
    color: '#000',

    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  containerType_search : {
    backgroundColor: '#002856',
    color: '#5868F9',

    borderRadius: 17,
    paddingHorizontal: 18,
    paddingVertical: 8,

    height: 56,
    fontSize: 28,
    fontWeight: 'normal',
  }
});
