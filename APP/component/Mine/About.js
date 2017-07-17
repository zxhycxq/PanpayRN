import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
const {width, height}=Dimensions.get ('window');
class About extends React.Component {
  static navigationOptions = {
    // headerTitle: null,
    // title:null,
    header: null,
  };
  render() {
    return (
        <View style={styles.psdHtml}>
          <View style={styles.psdBody}>
            <Text style={{fontSize:20,color:'#000',textAlign:'center',marginTop:20,marginBottom:20}}>公交二维码</Text>
            <Text  style={{fontSize:14,color:'#000',textAlign:'center',marginTop:10,marginBottom:10}}>2017年7月17日</Text>
            <Text>版本号 V1.0</Text>
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
export default About;
