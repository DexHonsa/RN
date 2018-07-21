import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppText from '../app_text';

class ProfileListItem extends Component {

  render() {
    return (
      <View style={this.props.last ? [styles.profileListItemContainer,styles.bottomBorder] : styles.profileListItemContainer}>
        <AppText style={styles.field}>{this.props.field}</AppText>
        <AppText style={styles.value}>{this.props.value}</AppText>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  profileListItemContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    backgroundColor:'#fff',
    borderTopColor:'#dfdfdf',
    borderTopWidth:1,

  },
  bottomBorder:{
    borderBottomColor:'#dfdfdf',
    borderBottomWidth:1,
  },
  field:{
    color:'#000'
  },
  value:{
    marginLeft:'auto',
    color:'#d0d0d0'
  }
})

export default ProfileListItem;
