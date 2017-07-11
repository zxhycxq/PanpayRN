<View style={styles.GridWrap}>
  <View style={styles.GridList}
  >
    <TouchableHighlight
        onPress={() => navigate ('rechargeHistory', {user: 'rechargeHistory'})}
    >
      <Image
          style={styles.UserImgicon}
          source={require ('./APP/img/icon.jpg')}
      />
    </TouchableHighlight>
    <Text style={styles.Usertext}>
      充值历史
    </Text>
  </View>
  <View style={styles.GridList}>
    <Image
        style={styles.UserImgicon}
        source={require ('./APP/img/record.jpg')}
    />
    <Text style={styles.Usertext}>
      消费记录
    </Text>
  </View>
  <View style={styles.GridList}>
    <Image
        style={styles.UserImgicon}
        source={require ('./APP/img/icon.jpg')}
    />
    <Text style={styles.Usertext}>
      公共自行车
    </Text>
  </View>
  <View style={styles.GridList}>
    <Image
        style={styles.UserImgicon}
        source={require ('./APP/img/icon.jpg')}
    />
    <Text style={styles.Usertext}>
      更多
    </Text>
  </View>
</View>
