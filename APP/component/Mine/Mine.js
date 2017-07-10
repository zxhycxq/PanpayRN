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
  Button,
  TextInput,
} from 'react-native';
import MineList from './MineList';
import Password from '../Home/Password';
const {width, height}=Dimensions.get ('window');
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
class MineCenter extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.userPage}>
          <View style={styles.topReturn}>
            <Text style={styles.Navtext}
                  onPress={() => this.props.navigation.goBack()}
            >
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
            <TouchableOpacity
                style={styles.exit}
                onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}>
              <Text style={styles.exitText}>退出登录</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  topReturn:{
    height:30,
    width:width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
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
    backgroundColor: '#008eee',
  },
  UserImgicon:{
    borderRadius:100
  },
  NavText: {
    color: '#008eee',
    backgroundColor: '#fff',
    fontSize:22,

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
