'use strict';
import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
} from 'react-native';
const {width, height}=Dimensions.get ('window');


class PayStyle extends React.Component {
  static navigationOptions = {
    title: '用户充值',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
        <View>
           <View>
             <Text>用户ID：123456963</Text>
           </View>
        </View>
    );
  }
}

export default PayStyle;
