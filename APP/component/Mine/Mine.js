import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
  ListView,
  ScrollView,
} from 'react-native';
import Password from './Password';
import Login from './Login';

const {width, height} = Dimensions.get ('window');
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconsome from 'react-native-vector-icons/FontAwesome';
import Mycell from '../Widget/Mycell';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

class MineCenter extends React.Component {
  static navigationOptions = {
    headerTitle: '个人中心',
  };

  //todo title顶部 全局统一  \列表图片的对其
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.userPage}>
          <View style={styles.topReturn}>
            <Text style={styles.Navtext}
                  onPress={() => this.props.navigation.goBack ()}
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
          <ScrollView
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.ListContainer} horizontal={false}>
            <Mycell
                iconname="key"
                title="我是第一"
                onPress={(Password) => {
                  navigate ('Password', {user: 'Password'})
                }}
            />

            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('UploadIdCard', {user: 'UploadIdCard'})}
                >
                  <Icons name="ios-phone-portrait-outline" size={30} color="#008eee"
                         style={{marginRight: 10, width: 40,}}/>
                  <Text style={styles.Navtext}>身份证绑定</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>

            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('CameraScreen', {user: 'CameraScreen'})}
                >
                  <Icons name="ios-phone-portrait-outline" size={30} color="#008eee"
                         style={{marginRight: 10, width: 40,}}/>
                  <Text style={styles.Navtext}>扫描</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('Webbrower', {user: 'Webbrower'})}
                >
                  <Icons name="ios-phone-portrait-outline" size={30} color="#008eee"
                         style={{marginRight: 10, width: 40,}}/>
                  <Text style={styles.Navtext}>webview</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>

            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('FlatListExample', {user: 'FlatListExample'})}
                >
                  <Icons name="ios-phone-portrait-outline" size={30} color="#008eee"
                         style={{marginRight: 10, width: 40,}}/>
                  <Text style={styles.Navtext}>手机绑定</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('creditScore', {user: 'creditScore'})}
                >
                  <Icon name="credit-card" size={30} color="#008eee" style={{marginRight: 10, width: 40,}}/>
                  <Text style={styles.Navtext}>信用积分</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('Login', {user: 'Login'})}
                >
                  <Icon name="login" size={30} color="#008eee" style={{marginRight: 10, width: 40}}/>
                  <Text style={styles.Navtext}>登录</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('About', {user: 'About'})}
                >
                  <Iconsome name="envelope-o" size={30} color="#008eee" style={{marginRight: 10, width: 40}}/>
                  <Text style={styles.Navtext}>消息</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
            <View style={styles.ListItem}>
              <View style={styles.ListItemL}>
                <TouchableOpacity style={styles.ListItemL}
                                  onPress={() => navigate ('About', {user: 'About'})}
                >
                  <Icon name="info" size={30} color="#008eee" style={{marginRight: 10, width: 40}}/>
                  <Text style={styles.Navtext}>关于</Text>
                </TouchableOpacity>
              </View>
              <Icon name="chevron-right" size={30} color="#aaa"/>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity
                style={styles.exit}
                onPress={() => Alert.alert ('温馨提醒', '确定退出吗?')}>
              <Text style={styles.exitText}>退出应用</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  topReturn: {
    height: 30,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userPage: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: '#ebebeb'
  },
  Usertext: {
    textAlign: "center",
    color: '#fff',
    marginTop: 10,
    fontSize: 18
  },
  UserImg: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10,
    width: width,
    height: 180,
    justifyContent: 'center',
    backgroundColor: '#008eee',
  },
  UserImgicon: {
    borderRadius: 100
  },
  NavText: {
    color: '#008eee',
    backgroundColor: '#fff',
    fontSize: 22,

  },
  exit: {
    width: width,
    height: 50,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "red",
    backgroundColor: '#fff',
  },
  exitText: {
    flex: 1,
    textAlign: "center",
    color: "red",
    fontSize: 18,
  },
  ListContainer: {
    width: width,
    // height:120,
    backgroundColor: '#fff',
  },
  ListItem: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#aaa',
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
