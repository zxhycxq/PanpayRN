import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ListView,
  Button,
  TextInput,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
const {width, height}=Dimensions.get ('window');
class creditScore extends React.Component {
  static navigationOptions = {
    headerTitle: '信用积分',
  };
  render() {
    return (
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
    );
  }
}
const styles = StyleSheet.create ({
  psdHtml: {
    flex: 1,
    backgroundColor: '#fff',
  },
  psdBody:{
    flexDirection: 'column',
    width: width,
    height:height,
  }
})
export default creditScore;
