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
import HomeScreen from './APP/component/Home/Home';
import Three from './APP/component/Home/Three';
import CompanyScreen from './APP/component/Home/Company';
import PayStyle from './APP/component/Home/PayStyle';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

class RecentChatsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <View style={styles.GridTopWrap}>
            <View style={styles.GridTopList}>
              <TouchableHighlight
                  onPress={() => navigate ('Three', {user: 'Three'})}
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
                    source={require ('./APP/img/RQcode.jpg')}
                />
              </TouchableHighlight>
              <Text style={styles.Usertext}>
                账户充值
              </Text>
            </View>
          </View>
          <HomeScreen />
        </View>
    );
  }
}

class SetScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Text
              onPress={() => navigate ('MineList', {user: 'MineList'})}
          >999999999999999999999999999999 </Text>
          <Button
              onPress={() => navigate ('Company', {user: 'Company'})}
              title="关于软件button "
          />
        </View>
    );
  }
}
//tab选项卡设置 前者为tab选项卡的title 后边代表着渲染哪个屏幕
const MainScreenNavigator = TabNavigator ({
      首页: {screen: RecentChatsScreen},
      设置: {screen: SetScreen},
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
/*SetScreen.navigationOptions = {
 headerTitle: '详情',
 };*/

//几个链接到的页面必须填写        将tab的包裹，其他类似tab设置
const PanpayRN = StackNavigator ({
      Home: {screen: MainScreenNavigator},
      HomeScreen: {screen: HomeScreen},
      MineList: {screen: MineList},
      Three: {screen: Three},
      PayStyle: {screen: PayStyle},
      CompanyScreen: {screen: CompanyScreen},
    }/*, {
     initialRouteName: 'Main',
     }*/
);

var styles = StyleSheet.create ({
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
  }
});

AppRegistry.registerComponent ('PanpayRN', () => PanpayRN);
