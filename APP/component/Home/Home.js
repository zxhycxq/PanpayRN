'use strict';
import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
  Button,
} from 'react-native';
const {width, height}=Dimensions.get ('window');
import rechargeHistory from './rechargeHistory';
import { StackNavigator, TabNavigator } from 'react-navigation';
import QRcode from './QRcode';

class HomeScreen extends Component {
  render() {
    return (
        <View >
          {/*<QRcode/>*/}
          <View style={styles.accountYue}>
            <Text>账户余额：1234（元）</Text>
          </View>

          <View style={styles.GridWrap}>
            <View style={styles.GridList}
                  onPress={() => navigate ('rechargeHistory', {user: 'rechargeHistory'})}
            >
              <Image
                  style={styles.UserImgicon}
                  source={require ('../../img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                充值历史
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('../../img/record.jpg')}
              />
              <Text style={styles.Usertext}>
                消费记录
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('../../img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                公共自行车
              </Text>
            </View>
            <View style={styles.GridList}>
              <Image
                  style={styles.UserImgicon}
                  source={require ('../../img/icon.jpg')}
              />
              <Text style={styles.Usertext}>
                更多
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.listTitle}>
              <Text style={{fontSize: 20}}>
                最近交易
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}
                        contentContainerStyle={styles.contentContainer}>
              <View style={{backgroundColor: "#fff"}}>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
                <View style={styles.historyList}>
                  <View style={styles.historyListLeft}>
                    <Text >车费车费车费车费车费</Text>
                    <Text >2017年7月3日14:35:15</Text>
                  </View>
                  <Text >+200.00</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
    );
  }
}

var styles = StyleSheet.create ({

  accountYue: {
    width: width,
    height: 20,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  GridTopWrap: {
    flexDirection: 'row',
    width: width,
    backgroundColor: 'blue'
  },
  GridWrap: {
    flexDirection: 'row',
    width: width,
    backgroundColor: '#fff',
    overflow: "hidden",
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
    height: 60,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderBottomWidth:1,
    // borderBottomColor:"#eee",
  },
  listTitle:{
    width:width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:"#eee",
  },
  contentContainer: {
    width: width,
    // backgroundColor: "#ff0000",
  },
  historyList: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  historyListLeft: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    // borderRadius: 2,
    borderWidth: 1,
    borderColor: '#a52a2a',
    padding: 2,
    margin: 2,
  },
  horizontalItemWrapper: {
    padding: 10
  },
  UserImgicon: {
    width: 30,
    height: 30,
  }
});
// module.exports = HomeScreen;
export default HomeScreen;
