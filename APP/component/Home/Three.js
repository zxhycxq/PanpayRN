import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Password from './Password';
// class ThreeScreen extends React.Component {
class ThreeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '密码修改111-----title',
    title: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Button
              onPress={() => navigate ('Password', {user: 'Password'})}
              title="999999999999999999999999999999 "
          />
        </View>
    );
  }
}

const Three = StackNavigator ({
  ThreeScreen: {screen: ThreeScreen,},
      Password: {screen: Password,
        navigationOptions:{
          headerTitle:null,
          header:null,
        }},
    }
);
export default Three ;
