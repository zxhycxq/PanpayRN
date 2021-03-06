import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import 'whatwg-fetch';
import 'es6-promise';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
const {width, height}=Dimensions.get ('window');
class Login extends React.Component {
  static navigationOptions = {
    headerTitle: '登录',
  };

  /*
   export function  postData({
   var result=fetch('/api/post',{
   methos:'POST',
   credentials:'include',
   headers:{
   'Accept':'application/json,text/plain,*!/!*',
   'Content-Type':'application/x-www-form-urlencoded'
   },
   body:'a=10&b=200'
   });

   result.then(res=>{
   return res.json()
   }).then(text=>{
   console.log(text);
   })
   })
   */
  constructor(props) {
    super (props);
    this.state = {
      text: '',
      password: '',
      token: ''
    };
    this.handleChange = this.handleChange.bind (this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*onPressCallback = () => {
   let formData = new FormData ();
   formData.append ("loginName", this.userName);
   formData.append ("pwd", this.password);
   let url = "http://localhost:8080/loginApp";
   NetUitl.postJson (url, formData, (responseText) => {
   alert (responseText);
   this.onLoginSuccess ();
   })
   };*/

  handleChange(event) {
    this.setState ({value: event.target.value});
  }

  postDate() {
    fetch ({})
  }

  sendAjax() {
    /*var str = "{\"txninfo\":\""
     +"{'txncode':'AccountQrcodeGenerate','instid':'10000002','mchntid':'100000020000001'"
     +",'txntype':'00','userid':'20170630000000032801','syssesq':'2017071317144100','accounttype':'0080'"
     +",'txndate':'20170707','txntime':'150000','usertype':'00','authcode':'4C42E69EC2C545E88EE123A5EF6FE2B0'"
     +",'randnum':'43639828444C4346955ABA7E2053F492','imei':'ABC123456EFD','seid':'ABC123456EFD'"
     +"}\",\"signcode\":\"0000000000\"}";*/
    /*var str = "{\"txninfo\"" +
        ":\"{\"usertype\":\"00\"," +
        "\"syssesq\":\"2017071317394835850\"," +
        "\"txntime\":\"173948\",\"logintype\":\"0\"," +
        "\"city\":\"8340\",\"instid\":\"10000002\"," +
        "\"mchntid\":\"100000020000001\",\"txndate\":\"20170713\"," +
        "\"txncode\":\"UserLogin\",\"loginpasswd\":\"F07046D596B0B656D34ED6E019E7EC4B\"," +
        "\"loginname\":\"17721036947\"}\"," +
        "\"signcode\":\"0000000000\"}\";*/
       var str="{\"txninfo\":\""
               +"{\"txncode\":\"UserLogin\","
               + "\"instid\":\"10000002\","
               + "\"mchntid\":\"100000020000001\","
               + "\"syssesq\":\""+1234567+"\","
               + "\"txndate\":\""+12345678+"\","
               + "\"txntime\":\""+12345678+"\","
               + "\"city\":\"8340\","//城市代码
               + "\"loginname\":\"18133223506\","//登陆名
               + "\"loginpasswd\":\"006B60E26EE349B9C9CECD8F59CBDC88\","//登陆密码
               + "\"logintype\":\"0\"}\",\"signcode\":\"0000000000\"}"//登陆类型	M	0：个人版	1：商户版
           ;

    //POST方式
    fetch ("http://192.168.1.134:20012", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'data=' + str
    }).then (function (res) {
      console.log ("fetch request ", JSON.stringify (res.ok));
      if (res.ok) {
        res.json ().then (function (json) {
          console.info (json);
          Alert.alert ('提示', '来自后台数据：名字' + json.name + '、年龄' + json.age, [{
            text: '确定',
            onPress: () => console.log ('OK Pressed!')
          },]);
        });
      } else {
        Alert.alert ('提示', '请求失败', [{text: '确定', onPress: () => console.log ('OK Pressed!')},]);
      }

    }).catch (function (e) {
      console.log ("fetch fail");
      Alert.alert ('提示', '系统错误', [{text: '确定', onPress: () => console.log ('OK Pressed!')},]);
    });
  }

  loginSubmit() {
    this.state = {
      text: this.state.text.trim (),
      password: this.state.text.trim (),
      token: ''
    };
    alert (this.state.text + '----' + this.state.password);
  }

  render() {
    return (
        <View style={styles.psdHtml}>
          <View style={styles.psdBody}>
            <Text style={{fontSize: 18}}>账号</Text>
            <TextInput
                style={styles.loginInput}
                multiline={false}
                autoFocus={true}
                placeholder='请输入账号'
                onChangeText={(text) => this.setState ({text})}
            />
          </View>
          <View style={styles.psdBody}>
            <Text style={{fontSize: 18}}>密码</Text>
            <TextInput
                style={styles.loginInput}
                multiline={false}
                numberOfLine={1}
                autoFocus={true}
                placeholder='请输入密码'
                onChangeText={(password) => this.setState ({password})}
            />
          </View>

          <Button
              title="确认"

              onPress={this.sendAjax.bind (this)}
          />
        </View>
    );
  }
}
const styles = StyleSheet.create ({
  psdHtml: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  psdBody: {
    width: width * 0.6,
    height: 100,
    justifyContent: 'center',
  },
  loginInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
})
export default Login;
//onPress={this.loginSubmit.bind(this)}
