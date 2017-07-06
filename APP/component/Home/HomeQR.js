import React,{Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
class HomeQR extends React.Component {
  render() {
    return(
        <View style={styles.GridTopWrap}>
          <View style={styles.GridTopList}>
            <Image
                style={styles.UserImgicon}
                source={require ('../../img/minelogo.jpg')}
            />
            <Text style={styles.Usertext}
            >
              扫码乘车
            </Text>
          </View>
          <View style={styles.GridTopList}>
            <Image
                style={styles.UserImgicon}
                source={require ('../../img/minelogo.jpg')}
            />
            <Text style={styles.Usertext}>
              账户充值
            </Text>
          </View>
        </View>  
    ) ;
  }
}
