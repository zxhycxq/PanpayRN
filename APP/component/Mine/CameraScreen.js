
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Vibration,
  View
} from 'react-native';
import Camera from 'react-native-camera';


 class CameraScreen extends React.Component {
   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
         camera: {
           aspect: Camera.constants.Aspect.fill,
           captureTarget: Camera.constants.CaptureTarget.cameraRoll,
           type: Camera.constants.Type.back,
           orientation: Camera.constants.Orientation.auto,
           flashMode: Camera.constants.FlashMode.auto,
         },
       };
     }
  render() {
    return (
        <View style={styles.container}>
          <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              onBarCodeRead={
                this.barcodeReceived
              }
          />
        </View>
    );
  }
   barcodeReceived(e) {
     if (e.data !== this.transCode) {
       Vibration.vibrate([0, 500, 200, 500]);
       this.transCode = e.data; // 放在this上，防止触发多次，setstate有延时
      
       console.log("transCode="+e.data);//输出扫描结果
     }
   }
   onBarCodeRead=(e)=>{
     console.log(e.data);
   }
   takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
export default CameraScreen;
//https://github.com/lwansbrough/react-native-camera
