import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppText from '../app_text';
class FriendItem extends Component {

  render() {
    return (
      <View style={styles.friendItemContainer}>
        <Image style={styles.friendImg} source={this.props.img}/>
        <AppText>{this.props.name}</AppText>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  friendItemContainer:{
    padding:15,
    display:'flex',
    alignItems:'center',
    flexDirection:'row'
  },
  friendImg:{
    height:50,
    width:50,
    borderRadius:25,
    overflow:'hidden',
    resizeMode:'contain',
    marginRight:15
  }

})

export default FriendItem;
