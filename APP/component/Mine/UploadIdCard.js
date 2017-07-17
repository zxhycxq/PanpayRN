import React, { Component } from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  InteractionManager,
  TextInput,
} from 'react-native';
const {width, height}=Dimensions.get ('window');
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
class UploadIdCard extends React.Component {
  static navigationOptions = {
    title: '上传身份证',
  };

  render() {
    // const {navigate} = this.props.navigation;
    // onPress={() => navigate ('Password', {user: 'Password'})}
    return (
        <View style={styles.ListContainer}>
          
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  
})
export default UploadIdCard;
