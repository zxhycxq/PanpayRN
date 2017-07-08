import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Password from './Password';
const {width, height}=Dimensions.get ('window');
// class ScanScreen extends React.Component {
class ScanScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '乘车码',
    title: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.codehtml}>
          <View style={styles.codeBody}>
            <Image
                style={styles.codeCenter}
                source={require ('../../img/codecenter.jpg')}
            />

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  codehtml:{
    flex: 1,
    backgroundColor: '#008eee',
  },
  codeBody: {
    // flex: 1,
    // width:width*0.6,
    // height:height*0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    padding:20,
  },
  codeCenter:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ScanScreen ;
