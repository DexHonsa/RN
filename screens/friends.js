import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import AppText from '../helpers/app_text';
import FriendItem from '../helpers/friends/friend_item';
class Friends extends Component {

  render() {
    return (
      <ScrollView>
        <FriendItem name="Tom Jacoobs" img={require('../img/130.jpg')} />
        <FriendItem name="Jake Myers" img={require('../img/131.jpg')} />
        <FriendItem name="Mary Poppins" img={require('../img/132.jpg')} />
      </ScrollView>
    );
  }

}

export default Friends;
