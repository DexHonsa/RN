import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, ScrollView, Image, RefreshControl} from 'react-native';
import ExploreItem from '../helpers/enrollments/explore_item';
import { connect } from 'react-redux';
import axios from 'axios';
import { api } from '../config.json';

class SocialConnections extends Component {
  constructor(props){
    super(props);
    this.state = {
      enrollments: [],
      refreshing:false
    }
  }
componentDidMount(){
  this.fetchData();
}
fetchData(){
  var that = this;
  return new Promise(function(resolve,reject){
    axios.get(api + '/providers/'+that.props.auth.user.provider_id+'/enrollments').then(res=>{
      that.setState({enrollments:res.data.items})
      resolve();
    })
  })
}
_onRefresh = () => {
  this.setState({refreshing: true});
  this.fetchData().then(() => {
    this.setState({refreshing: false});
  });
}
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{position: 'absolute',
              top: 0,
              left: 0,
              bottom:0,
              right:0
              }}>
            <Image style={{
                flex:1,
                resizeMode:'cover',
              }} source={require('../img/bg2.jpg')} />
        </View>
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View>
          {this.state.enrollments.map((enrollment,key)=>{
            return <ExploreItem key={key} enrollment={enrollment} />
          })}
        </View>
      </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  dashboardHome:{
    flex:1,
  }
})

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(SocialConnections);
