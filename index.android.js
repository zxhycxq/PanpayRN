import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
  Button,
} from 'react-native';
const {width, height}=Dimensions.get ('window');
import MineList from './APP/component/Mine/MineList';
import MineCenter from './APP/component/Mine/Mine';
import HomeScreen from './APP/component/Home/Home';
import ScanScreen from './APP/component/Home/Scan';
import Password from './APP/component/Mine/Password';
import rechargeHistory from './APP/component/Home/rechargeHistory';
import consumeRecord from './APP/component/Home/consumeRecord';
import CompanyScreen from './APP/component/Home/Company';
import QRcode from './APP/component/Home/QRcode';
import PayStyle from './APP/component/Home/PayStyle';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
      Login with Facebook
    </Icon.Button>
);
class RecentChatsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.body}>
          {/*<MyButton/>*/}
          <View style={styles.GridTopWrap}>
            <View style={styles.GridTopList}>
              <TouchableHighlight
                  onPress={() => navigate ('Scan', {user: 'Scan'})}
              >
                <Image
                    style={styles.UserImgicon}
                    source={require ('./APP/img/RQcode.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                扫码乘车
              </Text>
            </View>
            <View style={styles.GridTopList}>
              <TouchableHighlight
                  onPress={() => navigate ('PayStyle', {user: 'PayStyle'})}
              >
                <Image
                    style={styles.UserImgicon}
                    source={require ('./APP/img/homePay.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                账户充值
              </Text>
            </View>
          </View>

          <View style={styles.GridWrap}>
            <View style={styles.GridList}>
              <TouchableHighlight
                  onPress={() => navigate ('rechargeHistory', {user: 'rechargeHistory'})}
              >
                <Image
                    style={styles.UserImgicon}
                    source={require ('./APP/img/icon.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                充值历史
              </Text>
            </View>
            <View style={styles.GridList}>
              <TouchableHighlight
                  onPress={() => navigate ('consumeRecord', {user: 'consumeRecord'})}
              >
                <Image
                    style={styles.UserImgicon}
                    source={require ('./APP/img/record.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                消费记录
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('./APP/img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                公共自行车
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('./APP/img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                更多
              </Text>
            </View>
          </View>
          <HomeScreen />
        </View>
    );
  }
}


class codeScreen extends React.Component {
  render() {
    return <View>
    </View>;
  }
}
//tab选项卡设置 前者为tab选项卡的title 后边代表着渲染哪个屏幕
const MainScreenNavigator = TabNavigator ({
      首页: {screen: RecentChatsScreen},
      二维码: {screen: ScanScreen},
      // 设置: {screen: SetScreen},
      设置: {screen: MineCenter},
    },
    {
      tabBarPosition: 'bottom',
      // swipeEnabled: false,
      // animationEnabled: false,
      tabBarOptions: {
        style: {
          height: 49
        },
        // activeBackgroundColor: 'white',
        // activeTintColor: '#4ECBFC',
        // inactiveBackgroundColor: 'white',
        // inactiveTintColor: '#aaa',
        // showLabel: false,
      }
    });
//顶部标题 
MainScreenNavigator.navigationOptions = {
  // title: '公交卡应用',
  header: null,
};

//几个链接到的页面必须填写        将tab的包裹，其他类似tab设置
const PanpayRN = StackNavigator ({
      Home: {screen: MainScreenNavigator},
      HomeScreen: {screen: HomeScreen},
      MineList: {screen: MineList},
      Scan: {screen: ScanScreen},
      Password: {screen: Password},
      QRcode: {screen: QRcode},
      PayStyle: {screen: PayStyle},
      rechargeHistory: {screen: rechargeHistory},
      consumeRecord: {screen: consumeRecord},
      CompanyScreen: {screen: CompanyScreen},
    }/*, {
     initialRouteName: 'Main',
     }*/
);

var styles = StyleSheet.create ({
  body: {
    backgroundColor: '#fff',
  },
  accountYue: {
    width: width,
    justifyContent: 'space-around'
  },
  GridTopWrap: {
    flexDirection: 'row',
    width: width,
    backgroundColor: '#008eee'
  },
  GridWrap: {
    flexDirection: 'row',
    width: width,
  },

  GridTopList: {
    width: width * 0.5,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GridList: {
    width: width * 0.25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    width: width,
    backgroundColor: "#ff0000",
  },
  historyList: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },
  historyListLeft: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50
  },
  UserImgicon: {
    width: 80,
    height: 80,
  },
  Usertext: {
    color: "#000",
    paddingTop: 10,
  }
});

AppRegistry.registerComponent ('PanpayRN', () => PanpayRN);
