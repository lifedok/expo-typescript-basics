import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import { ProgressListStyles } from "./progress-list.styles";
import { ProgressItem } from "../progress-item/progress-item";
import { ProgressItemProps } from "../progress-item/progress-item.interface";

interface ProgressListProps {
  list: ProgressItemProps[]
}

@observer
export class ProgressList extends PureComponent<ProgressListProps> {

  render() {
    const {list} = this.props;
    return (
      <View style={ProgressListStyles.container}>
        <View style={ProgressListStyles.inner}>
          {
            list.map((item: ProgressItemProps, index) => (
              <ProgressItem {...item} key={`${item.value}_${index}`}/>
            ))
          }
        </View>
      </View>
    )
  }
}
