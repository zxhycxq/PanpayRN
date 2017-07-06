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
import QRCode  from 'react-native-qrcode';
const {width, height}=Dimensions.get ('window');
class QRcode extends React.Component {
  getInitialState() {
  return {
    text: 'http://facebook.github.io/react-native/',
  };
}
  render() {
    return (
        <View style={styles.container}>
          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
          />
          <QRCode   style={styles.QRcode}
              value={this.state.text}
              size={300}
              bgColor='purple'
              fgColor='white'/>
        </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    width:width*0.8,
    backgroundColor: 'orange',
  },
  QRcode:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  input: {
    height:60,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});

export default QRCode;
