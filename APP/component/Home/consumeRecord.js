'use strict';
import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  InteractionManager,
  TextInput,
} from 'react-native';
const {width, height}=Dimensions.get ('window');
import commonRN from '../common/commonRN';

class consumeRecord extends React.Component {
  static navigationOptions = {
    headerTitle: '消费记录',
    title: null,
  };
  render() {
    return (
        <ScrollView>
          <View style={{margin: 5, backgroundColor: "#fff"}}>
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
    );
  }
}

const styles = StyleSheet.create ({
  historyList: {
    flex: 1,
    backgroundColor: '#eee',
  },

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
})

export default consumeRecord;
