import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
  InteractionManager,
  TextInput,
} from 'react-native';
import MineList from './MineList';
const {width, height}=Dimensions.get ('window');
class MineCenter extends React.Component {
  render() {
    return (
        <View style={styles.userPage}>
          <View>
            <Text style={styles.Navtext}>
              个人中心
            </Text>
          </View>
          <View style={styles.UserImg}>
            <Image
                style={styles.UserImgicon}
                source={require ('../../img/minelogo.jpg')}
            />
            <Text style={styles.Usertext}>
              昵称
            </Text>
          </View>
          <View>
            <MineList/>                                        
          </View>
          <View>
            <TouchableOpacity  style={styles.exit}   onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}>
              <Text style={styles.exitText}>退出登录</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  userPage:{
    width:width,
    height:height,
    backgroundColor: '#ebebeb'
  },
  Usertext: {
    textAlign: "center",
    color: '#fff',
    marginTop: 20,
    fontSize:18
  },
  UserImg: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
    width: width,
    height: 200,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  UserImgicon:{
    borderRadius:100
  },
  NavText: {
    textAlign: "center",
    color: '#fff',
    fontSize:22
  },
  exit:{
    width: width,
    height: 50,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:"red",
    backgroundColor: '#fff',
  },
  exitText:{
    flex:1,
    textAlign:"center",
    color:"red",
    fontSize:18,
  }
})
export default MineCenter;
