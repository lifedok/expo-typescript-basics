import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export const DirectionNavigator = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(
        props.navigationName,
        {id: props.id, item: props.item} as any)
      }>
      {props.children}
    </TouchableOpacity>
  )
}
