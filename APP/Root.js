import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get ('window');
import UploadIdCard from './component/Mine/UploadIdCard';
import MineCenter from './component/Mine/Mine';
import Login from './component/Mine/Login';
import FlatListExample from './component/Mine/FlatList';
import HomeScreen from './component/Home/Home';
import About from './component/Mine/About';
import Webbrower from './component/Mine/Webbrower';
import CameraScreen from './component/Mine/CameraScreen';
import Password from './component/Mine/Password';
import creditScore from './component/Mine/creditScore';
import rechargeHistory from './component/Home/rechargeHistory';
import consumeRecord from './component/Home/consumeRecord';
import CompanyScreen from './component/Home/Company';
import QRcodeScreen from './component/Home/QRcode';
import PayStyle from './component/Home/PayStyle';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class RecentChatsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.body}>

          <View style={styles.GridTopWrap}>
            <View style={styles.GridTopList}>
              <TouchableHighlight
                  onPress={() => navigate ('QRcodeScreen', {user: 'QRcodeScreen'})}
              >
                <Image
                    style={styles.UserImgicon}
                    source={require ('./img/RQcode.jpg')}
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
                    source={require ('./img/homePay.jpg')}
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
                    source={require ('./img/icon.jpg')}
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
                    source={require ('./img/record.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                消费记录
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('./img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                公共自行车
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('./img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                更多
              </Text>
            </View>
          </View>
          <HomeScreen/>
        </View>
    );
  }
}


const MainScreenNavigator = TabNavigator ({
      首页: {
        screen: RecentChatsScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) =>
              ( <Icon name="home" size={30} color="#fff"/>),
        }
      },
      二维码: {
        screen: QRcodeScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) =>
              ( <Icon name="qrcode" size={30} color="#fff"/>),
        }
      },
      设置: {
        screen: MineCenter,
        navigationOptions: {
          tabBarIcon: ({tintColor}) =>
              ( <Icon name="user" size={30} color="#fff"/>),
        }
      },
    },
    {
      tabBarPosition: 'bottom',
      // swipeEnabled: false,
      // animationEnabled: false,
      tabBarOptions: {
        style: {
          // backgroundColor: '#f7f7f7',
          height: 69
        },
        // activeBackgroundColor: '#008eee',
        inactiveTintColor: '#fff',
        activeTintColor: '#000',
        /* indicatorStyle: {
           height: 0
         },*/
        showIcon: true,
        labelStyle: {
          fontSize: 18, // 文字大小
        },
        // pressColor:material
        // showLabel: false,
      }
    });
//顶部标题
MainScreenNavigator.navigationOptions = {
  title: '公交卡应用',// header: null,
};

//几个链接到的页面必须填写        将tab的包裹，其他类似tab设置
const PanpayRN = StackNavigator ({
      Home: {screen: MainScreenNavigator},
      HomeScreen: {screen: HomeScreen},
      UploadIdCard: {screen: UploadIdCard},
      Password: {screen: Password},
      creditScore: {screen: creditScore},
      QRcodeScreen: {screen: QRcodeScreen},
      Login: {screen: Login},
      About: {screen: About},
      Webbrower: {screen: Webbrower},
      CameraScreen: {screen: CameraScreen},
      FlatListExample: {screen: FlatListExample},
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
    borderColor: '#aaa',
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
    width: 60,
    height: 60,
  },
  Usertext: {
    color: "#000",
    paddingTop: 10,
  }
});

export default PanpayRN;
