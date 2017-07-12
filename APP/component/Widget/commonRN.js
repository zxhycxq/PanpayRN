import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
  Button,
} from 'react-native';
const {width, height}=Dimensions.get ('window');


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

export {width, height} ;
