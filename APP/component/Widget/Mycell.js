import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconsome from 'react-native-vector-icons/FontAwesome';
import { width, height } from './Size';

class Mycell extends React.Component {

  render() {
    let {iconname, title} = this.props;
    return (
        <View>
          <TouchableOpacity style={styles.ListItemL}
                            onPress={(info) => this.props.onPress (info)}
          >
            <Icon name={iconname} size={30} color="#008eee" style={{marginRight: 10, width: 40}}/>
            <Text style={styles.Navtext}>{title}</Text>
          </TouchableOpacity>
          <Icon name="chevron-right" size={30} color="#aaa"/>
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

export default Mycell;
