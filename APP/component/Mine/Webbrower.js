import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  WebView
} from 'react-native';


let DEFAULT_URL="http://www.baidu.com/";
class Webbrower extends React.Component{
  render() {
    return (
        <View style={{flex:1}}>
          <Text style={{height:40}}>简单的网页显示</Text>
          <WebView style={styles.webview_style}
                   url={DEFAULT_URL}
                   startInLoadingState={true}
                   domStorageEnabled={true}
                   javaScriptEnabled={true}
          >
          </WebView>
        </View>
    );
  }
};
var styles = StyleSheet.create({
  webview_style:{
    backgroundColor:'#eee',
  }
});

export default Webbrower ;
