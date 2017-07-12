import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Button,
  TextInput,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
const {width, height}=Dimensions.get ('window');
class Password extends React.Component {
  static navigationOptions = {
    headerTitle: '登录密码设置',
  };
  render() {
    return (
        <View style={styles.psdHtml}>
          <View style={styles.psdBody}>
            <Text>当前密码</Text>
            <TextInput
                style={styles.input}
                placeholder={"请输入当前密码"}
            />
          </View>
          
          <Button
            title="确认"
          />
        </View>
    );
  }
}
const styles = StyleSheet.create ({
  psdHtml: {
    flex: 1,
    backgroundColor: '#fff',
  },
  psdBody:{
    flexDirection: 'column',
    width: width,
    height:height,
  }
})
export default Password;
