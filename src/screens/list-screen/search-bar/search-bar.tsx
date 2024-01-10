import React from "react";
import { TextInput } from "react-native";
import { SearchBarStyles } from "./search-bar.styles";

export class SearchBar extends React.PureComponent {

  render() {
    return (
      <TextInput
        placeholder={'Search'}
        placeholderTextColor={'#dddddd'}
        style={SearchBarStyles.container}
        // onChangeText={}
      />
    );
  }
}
