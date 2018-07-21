import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, ScrollView, Image, RefreshControl} from 'react-native';
import ProviderItem from '../helpers/providers/provider_item';;
import { connect } from 'react-redux';
import axios from 'axios';
import { api } from '../config.json';
import HeaderComponent from '../helpers/header_component';
import { Header } from '../node_modules/react-native-elements';

class Providers extends Component {
  constructor(props){
    super(props);
    this.state = {
      providers: [],
      refreshing:false
    }
  }
  static navigationOptions = {
    header: null
  }
componentDidMount(){
  this.fetchData();
}
fetchData(){
  var that = this;
  return new Promise(function(resolve,reject){
    axios.get(api + '/providers').then(res=>{
      that.setState({providers:res.data.items})
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
      <HeaderComponent />
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
      <ScrollView style={styles.providerList}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View>
          {this.state.providers.map((provider,key)=>{
            return <ProviderItem key={key} provider={provider} />
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
  },
  providerList:{
    marginTop:100
  }
})

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Providers);
