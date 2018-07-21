import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import { logout } from '../actions/auth_actions';
import {connect} from 'react-redux';

class Home extends Component {
  logout(e){
    var that = this;
		e.preventDefault();
		this.props.logout(function(res){
      if(res){
        that.props.navigation.navigate('Login')
      }

    });

	}
  render() {
    return (
      <View style={styles.mainView}><StatusBarPaddingIOS/><Button onPress={this.logout.bind(this)} title="Log Out"></Button></View>
    );
  }



}
const styles = StyleSheet.create({
  mainText:{
    color:"#ff9900"
  },
  mainView:{
    height:'100%',
    width:'100%',
    backgroundColor:'#ff0000',
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  }
})
function mapStateToProps(state){
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(Home)
