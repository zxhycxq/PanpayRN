import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
class Company extends React.Component {
 /* static navigationOptions = {
    headerTitle: '公司信息-----title',
  };*/

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Button
              title="公司信息、版本 "
          />
        </View>
    );
  }
}

const CompanyScreen = StackNavigator ({
  Company: {
    screen: Company,
    navigationOptions: {
      // headerTitle: null,
      // header:null,
      // headerBackTitle:null,
    }
  }
});

/*Three.navigationOptions = {
 title: '密码修改2222-title',
 };*/
export default CompanyScreen;
