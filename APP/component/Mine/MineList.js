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
const {width,height}=Dimensions.get('window');
class MineList extends React.Component {

  render() {
    return (
        <View style={styles.ListContainer}>
          <View  style={styles.ListItem}>
            <View  style={styles.ListItemL}>
            <Image
                style={styles.icon}
                source={require('../../img/listimg.jpg')}
            />
            <Text style={styles.Navtext}>密码设置</Text>
          </View>
            <Image
                source={require('../../img/right-arrow.jpg')}
            />
          </View>
          {/*<TouchableOpacity></TouchableOpacity>*/}
          <View  style={styles.ListItem}>
            <View  style={styles.ListItemL}>
            <Image
                style={styles.icon}
                source={require('../../img/listimg.jpg')}
            />
            <Text style={styles.Navtext}>手机号码绑定</Text>
          </View>
            <Image
                source={require('../../img/right-arrow.jpg')}
            />
          </View>
          <View  style={styles.ListItem}>
            <View  style={styles.ListItemL}>
            <Image
                style={styles.icon}
                source={require('../../img/listimg.jpg')}
            />
            <Text style={styles.Navtext}>实名认证</Text>
            </View>
            <Image
                source={require('../../img/right-arrow.jpg')}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  ListContainer: {
    width:width,
    backgroundColor: '#fff',
  },
  ListItem:{
    flexDirection:"row",
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'space-between',
    alignItems:'center',
    width:width*0.8,
    height:50,
    borderBottomWidth:1,
    borderColor:'#000',
  },
  ListItemL:{
    flexDirection: 'row'
  },
  Navtext: {
    fontSize:20,
  },
  icon:{
    marginRight:20,
  },
})
export default MineList;
