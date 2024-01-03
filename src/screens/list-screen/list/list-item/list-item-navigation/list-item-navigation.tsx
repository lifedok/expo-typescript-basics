import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export const ListItemNavigation = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(
        props.navigationName as any,
        {id: props.id, item: props.item} as any)
    }>
      {props.children}
    </TouchableOpacity>
  )
}
