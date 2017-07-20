'use strict';
import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
} from 'react-native';
const {width, height}=Dimensions.get ('window');
import commonRN from '../Widget/Size';

class PayStyle extends React.Component {
  static navigationOptions = {
    title: '用户充值',
  };

  render() {
    const {goBack} = this.props.navigation;
    return (
        <View style={styles.payWrap}>
          <View>
            <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>用户ID：123456963</Text>
          </View>
          <View style={styles.payBottom}>
            <View style={styles.payBody}>
              <View>
                <Text style={{marginTop: 10, marginBottom: 10,}}>选择金额</Text>
              </View>
              <View style={styles.priceBtnWrap}>
                <Text style={styles.priceBtn}>10</Text>
                <Text style={styles.priceBtn}>10</Text>
                <Text style={styles.priceBtn}>10</Text>
                <Text style={styles.priceBtn}>100</Text>
                <Text style={styles.priceBtn}>200</Text>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>其他金额</Text>
              </View>
              <TextInput style={styles.priceInput}
                         multiline={false}
                         placeholder='其他金额'
                         keyboardType="numeric"
              />
              <Button
                  style={styles.payConfirm}
                  title="确认支付"
              />
            </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create ({
  payWrap: {
    backgroundColor: '#fff',
    height: height,
  },
  topTitle: {
    justifyContent: 'center',
  },
  payBottom: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
  },
  payBody: {
    width: width * 0.8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',

    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: "center",
  },
  priceBtnWrap: {
    width: width * 0.8,
    flexWrap: "wrap",
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center'
    // justifyContent: 'space-between',
  },
  priceBtn: {
    width: 100,
    flexDirection: 'column',
    textAlign: "center",
    // justifyContent: 'center',
    // alignItems:'center',
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    color: "#000",
    // height:30,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  priceInput: {
    width: 200,
    height: 30,
    borderColor: 'red',
    borderWidth: 1
  },
  payConfirm: {
    width: width,
    height: 30,
  }

})
export default PayStyle;
