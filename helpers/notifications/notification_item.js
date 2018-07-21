import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppText from '../app_text';

class NotificationItem extends Component {

  render() {
    return (
      <View style={styles.container}>
      <AppText weight="regular" style={styles.value}><AppText style={{color:'#45b5ba'}} weight="bold">Bethany Rivers</AppText> Commented on your photo.</AppText>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    padding:15,
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    borderBottomColor:'#dfdfdf',
    borderBottomWidth:1
  },
  value:{
    fontSize:15,
    fontFamily:'quicksand-light'
  }
})
export default NotificationItem;
