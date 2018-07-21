import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppText from '../helpers/app_text';
import NotificationItem from '../helpers/notifications/notification_item';

class Notifications extends Component {

  render() {
    return (
      <ScrollView>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      </ScrollView>
    );
  }

}
const styles = StyleSheet.create({

})
export default Notifications;
