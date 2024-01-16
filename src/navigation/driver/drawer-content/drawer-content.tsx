import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { DrawerContentStyles } from "./drawer-content.styles";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerItems } from "../driver-items/driver-items";
import { firebaseAuth } from "../../../../firebase.config";

export class DrawerContent extends React.PureComponent<{ props }> {

  handleSignOut = () => {
    firebaseAuth.signOut().then(() => {
      alert(`You have successfully logged out!`);
    }).catch((error) => alert(error.message))
  }

  get email() {
    return firebaseAuth.currentUser?.email
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...this.props}>
          <View style={{flex: 1}}>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={DrawerContentStyles.infoSection}>
                <Avatar
                  rounded
                  icon={{name: 'user-circle', type: 'font-awesome'}}
                  size="small"
                  containerStyle={{backgroundColor: '#1c1c1ead'}}
                />

                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Text style={DrawerContentStyles.title} numberOfLines={1}>
                    {!!this.email ? this.email.split('@')[0] : 'Unidentified object'}
                  </Text>
                  <Text style={DrawerContentStyles.caption} numberOfLines={1}>
                    {this.email}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={DrawerContentStyles.drawerSection}>
              <DrawerItems/>
            </View>
          </View>
        </DrawerContentScrollView>

        <View style={DrawerContentStyles.bottom}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="sign-out" color={color} size={size} type='font-awesome'/>
            )}
            label="Sign Out"
            onPress={this.handleSignOut}
          />
        </View>

      </View>
    );
  }
}
