import React, { PureComponent } from "react";
import { View } from "react-native";
import { ProgressListStyles } from "./progress-list.styles";
import {
  ProgressWithInfoProps
} from "../../../components/composite-components/progress-with-info/progress-with-info.interface";
import { ProgressWithInfo } from "../../../components/composite-components/progress-with-info/progress-with-info";

interface ProgressListProps {
  list: ProgressWithInfoProps[]
}

export class ProgressList extends PureComponent<ProgressListProps> {

  render() {
    return (
      <View style={ProgressListStyles.container}>
        <View style={ProgressListStyles.inner}>
          {
            this.props.list.map((item: ProgressWithInfoProps, index) => (
              <ProgressWithInfo {...item} key={`${item.value}_${index}`}/>
            ))
          }
        </View>
      </View>
    )
  }
}
