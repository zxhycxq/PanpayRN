'use strict';
import React, { Component } from "react";
import { ActivityIndicator, Animated, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";


var language='javascript';
var sort='stars';
const AnimatedFlatList = Animated.createAnimatedComponent (FlatList);
const REQUEST_URL = `https://api.github.com/search/repositories?q=${language}&sort=${sort}`;
            
class FlatListExample extends Component {
  static navigationOptions = {
    title: 'FlatListExample',
  }

  constructor(props) {
    super (props);
    this.state = {
      isLoading: true,
      //网络请求状态
      error: false,
      errorInfo: "",
      dataArray: [],
    }
  }

  //网络请求
  fetchData() {
    fetch (REQUEST_URL)
        .then ((response) => response.json ())
        .then ((responseData) => {
          let data = responseData.items;
          let dataBlob = [];
          let i = 0;
          data.map (function (item) {
            dataBlob.push ({
              key: i,
              value: item,
            })
            i++;
          });
          this.setState ({
            //复制数据源
            dataArray: dataBlob,
            isLoading: false,
          });
          data = null;
          dataBlob = null;
        })
        .catch ((error) => {
          this.setState ({
            error: true,
            errorInfo: error
          })
        })
        .done ();
  }

  componentDidMount() {
    this.fetchData ();//请求数据
  }

  //加载等待的view
  renderLoadingView() {
    return (
        <View style={styles.container}>
          <ActivityIndicator
              animating={true}
              style={[styles.gray, {height: 80}]}
              color='red'
              size="large"
          />
        </View>
    );
  }

  //加载失败view
  renderErrorView(error) {
    return (
        <View style={styles.container}>
          <Text>
            Fail: {error}
          </Text>
        </View>
    );
  }

  //返回itemView
  renderItemView({item}) {
    return (
        <View>
          <Text style={styles.title}>
            name: {item.value.name}
            ({item.value.stargazers_count} stars)</Text>
          <Text style={styles.content}>
            description: {item.value.description}
            </Text>
        </View>
    );
  }

  renderData() {
    return (
        <ScrollView >
          <Text >
            Data:
          </Text>
          <AnimatedFlatList
              data={this.state.dataArray}
              renderItem={this.renderItemView}
          />
        </ScrollView>
    );
  }

  render() {
    if (this.state.isLoading && !this.state.error) {  //第一次加载等待的view    正在加载并且没有出错
      return this.renderLoadingView ();
    } else if (this.state.error) {
      return this.renderErrorView (this.state.errorInfo);//请求失败view
    }
    return this.renderData ();//加载数据
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 15,
    color: 'blue',
  },
  content: {
    fontSize: 15,
    color: 'black',
  }

});
export default FlatListExample;
