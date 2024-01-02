import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export const ListItemNavigation = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.navigationName as any)}>
      {props.children}
    </TouchableOpacity>
  )
}
