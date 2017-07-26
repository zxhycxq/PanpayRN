'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
} from 'react-native';
import QRCode from 'react-native-qrcode';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

const {width, height} = Dimensions.get ('window');

class QRcodeScreen extends React.Component {
  // 构造
  constructor(props) {
    super (props);
    // 初始状态
    this.state = {
      text: 'http://facebook.github.io/react-native/',
    };
  };

  /*static navigationOptions = {
    headerTitle: '乘车码',
    title:null,
  };*/

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
        <Text style={{color: 'blue', fontSize: 18}}>一点点</Text>
    ),
    headerRight: (
        <View>
          <Image
              style={{width: 30, height: 30}}
              source={require ('../../img/home.png')}
          />
        </View>
    ),
    headerLeft: (
        <Text style={{marginLeft: 10, marginRight: 20, fontSize: 18}}
              
        >左边</Text>
    ),
    headerStyle: {backgroundColor: 'orange'},
  })

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

          <QRCode style={styles.QRcode}
                  value={this.state.text}
                  size={300}
                  bgColor='#000'
                  fgColor='#fff'/>
        </View>
    );
  }
}

var styles = StyleSheet.create ({
  container: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  QRcode: {
    width: width * 0.8,
    flexDirection: 'row',

  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});

export default QRcodeScreen;
