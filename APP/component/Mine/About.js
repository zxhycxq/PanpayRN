import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
const {width, height}=Dimensions.get ('window');
class Password extends React.Component {
  static navigationOptions = {
    headerTitle: null,
  };
  render() {
    return (
        <View styles={styles.psdHtml}>
          <View styles={styles.psdBody}>
            <Text>公交二维码</Text>
          </View>
          <View>
            <Text>2017年7月12日10:49:04</Text>
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
  psdBody:{
    flexDirection: 'column',
    width: width,
    height:height,
  }
})
export default Password;
