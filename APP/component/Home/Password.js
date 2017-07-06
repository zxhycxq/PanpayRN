import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

// class SetPassword extends React.Component {
class Password extends React.Component {
  /*static navigationOptions = {
    headerTitle: '密码修改页面-title',
    // header: null,
  };*/
  render() {
    return <Text>
      密码修改页面text
    </Text>;
  }
}
/*const Password = StackNavigator ({
  Password: {screen:SetPassword,
        navigationOptions:{
          headerTitle:"password",
          // header:null,
          // headerBackTitle:null,
        }
      },
  // Password: {screen: SetPassword},
    }
);*/
export default Password;
