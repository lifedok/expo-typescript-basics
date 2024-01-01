import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { ListItem } from "./list-item";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderStyle: 'solid'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  content: {},
  title: {
    fontSize: 17,
    fontWeight: '700'
  },
  description: {
    fontSize: 12,
    marginTop: 2,
    color: 'rgba(0, 0, 0, 0.4)'
  }
});
