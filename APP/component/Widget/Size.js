import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  PixelRatio,
} from 'react-native';
// export const {width, height}=Dimensions.get ('window');

export default {
  width: Dimensions.get ('window').width,
  height: Dimensions.get ('window').height,
  onePixel: 1 / PixelRatio.get (),
  statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
const styles = StyleSheet.create ({

  codehtml: {
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
    padding: 20,
  },
  codeCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

