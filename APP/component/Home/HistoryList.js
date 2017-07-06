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
} from 'react-native';
const {width, height}=Dimensions.get ('window');

// class HistoryList extends React.Component{
class HistoryList extends Component {
  render() {
    return (
        <HistoryList style={styles.container}>
          <Text style={styles.welcome}>
            最近交易
          </Text>
          <ScrollView showsVerticalScrollIndicator={true}
                      contentContainerStyle={styles.contentContainer}>
            <View style={{margin: 5, fontSize: 16, backgroundColor: "blue"}}>
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
            </View>
          </ScrollView>
        </HistoryList>
    );
  }
}

var styles = StyleSheet.create ({
  container: {

    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    width:width,
    margin: 10,
    backgroundColor: "#ff0000",
  },
  historyList: {
    flexDirection: 'row',
    justifyContent:'space-around',
    borderBottomWidth:1,
  },
  historyListLeft: {
    flexDirection: 'column',
    justifyContent:'space-around'
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
export default HistoryList;
