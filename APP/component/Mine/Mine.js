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
  ListView,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import Password from './Password';
import Login from './Login';
const {width, height}=Dimensions.get ('window');
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
class MineCenter extends React.Component {
  //todo title顶部 全局统一
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
          <View style={styles.ListContainer}>
            <View style={styles.ListItem}>
              <TouchableOpacity style={styles.ListItemL}
                                onPress={() => navigate ('Password', {user: 'Password'})}
              >
                <Image
                    style={styles.icon}
                    source={require ('../../img/listimg.jpg')}
                />
                <Text style={styles.Navtext}>密码设置</Text>
              </TouchableOpacity>
              <Image
                  source={require ('../../img/right-arrow.jpg')}
              />
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('FlatListExample', {user: 'FlatListExample'})}
                >
                <Image
                    style={styles.icon}
                    source={require ('../../img/listimg.jpg')}
                />
                <Text style={styles.Navtext}>手机号码绑定</Text>
                </TouchableOpacity>
              </View>
              <Image
                  source={require ('../../img/right-arrow.jpg')}
              />
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('Login', {user: 'Login'})}
                >
                <Image
                    style={styles.icon}
                    source={require ('../../img/listimg.jpg')}
                />
                <Text style={styles.Navtext}>登录</Text>
                </TouchableOpacity>
              </View>
              <Image
                  source={require ('../../img/right-arrow.jpg')}
              />
            </View>
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
  },
  ListContainer: {
    width: width,
    backgroundColor: '#fff',
  },
  ListItem: {
    flexDirection: "row",
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  ListItemL: {
    flexDirection: 'row'
  },
  Navtext: {
    fontSize: 20,
  },
  icon: {
    marginRight: 20,
  },
})
export default MineCenter;
