'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get ('window');
import commonRN from '../Widget/Size';

class PayStyle extends React.Component {
  static navigationOptions = {
    title: '用户充值',
  };
  /*alertname(event){
    console.log(event.target.innerHTML);
  }*/


  render() {
    const {goBack} = this.props.navigation;
    return (
        <View style={styles.payWrap}>
          <View>
            <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10,}}>用户ID：123456963</Text>
          </View>
          <View style={styles.payBottom}>
            <View style={styles.payBody}>
             {/* <View style={styles.moneyTit}>
                <Text style={{marginTop: 10, marginBottom: 10,}}>选择金额</Text>
              </View>*/}
              <View style={styles.priceBtnWrap}>
                <Text style={styles.priceBtn} ref="myBtn" onPress={this.alertname.bind(this)}>10</Text>
                <Text style={styles.priceBtn}  onPress={this.alertname.bind(this)}>20</Text>
                <Text style={styles.priceBtn}  onPress={this.alertname.bind(this)}>30</Text>
                <Text style={styles.priceBtn}  onPress={this.alertname.bind(this)}>100</Text>
                <Text style={styles.priceBtn}  onPress={this.alertname}>200</Text>
                <Text style={[styles.priceBtn,{color:'#fff',borderWidth:0}]}>300</Text>
              </View>
             {/* <View>
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
              />        */}

            </View>
            <TouchableHighlight
                style={styles.Cbutton}
                underlayColor="#a5a5a5"
            >
              <Text style={styles.buttonText}>确定</Text>
            </TouchableHighlight>
          </View>

        </View>
    );
  }

  alertname(){
    var btnval=this.refs.myBtn;
    console.log(btnval.props.children);
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
    // borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: "center",
  },
  priceBtnWrap: {
    width: width * 0.8,
    flexWrap: "wrap",
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center'
    justifyContent: 'space-between',
  },
  priceBtn: {
    width: width / 4,
    // flexDirection: 'column',
    textAlign: "center",
    // justifyContent: 'space-around',
    // alignItems:'center',
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#000',
    color: "#000",
    // height:30,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  moneyTit:{
    width: width * 0.8,
    height:20,
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
  },
  Cbutton:{
    width:width*0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'blue'
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    // borderRadius:'blue'
  }

})
export default PayStyle;
