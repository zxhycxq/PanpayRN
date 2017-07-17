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
            <View style={styles.paslist}>
              <Text style={{color: '#000', fontSize: 14}}>当前密码</Text>
              <TextInput
                  style={styles.input}
                  numberOfLines={1}
                  autoFocus={true}
                  maxLength={6}
                  keyboardType="numeric"
                  placeholder={"请输入当前密码"}
              />
            </View>
            <View style={styles.paslist}>
              <Text style={{color: '#000', fontSize: 14}}>设置新密码</Text>
              <TextInput
                  style={styles.input}
                  numberOfLines={1}
                  keyboardType="numeric"
                  placeholder={"请输入新密码"}
              />
            </View>
            <View style={styles.paslist}>
              <Text style={{color: '#000', fontSize: 14}}>确认新密码</Text>
              <TextInput
                  style={styles.input}
                  numberOfLines={1}
                  keyboardType="numeric"
                  placeholder={"请在此输入新密码"}
              />
            </View>
            <Button
                style={styles.pasBtn}
                title="确认修改"
            />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create ({
  psdHtml: {
    flex: 1,
    backgroundColor: '#fff',
  },
  psdBody: {
    flexDirection: 'column',
    width: width,
    height: height,
    borderBottomColor: "#eee",
    borderWidth: 1,
  },
  paslist: {
    // width: width*0.8,
    width: width,
    flexDirection: 'row',
    // marginLeft:width*0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 100,
    borderBottomColor: "#fff",
  },
  pasBtn: {
    width: width * 0.8,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Password;
