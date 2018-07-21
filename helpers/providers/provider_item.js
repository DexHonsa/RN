import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import AppText from '../app_text';
import GoogleStaticMap from 'react-native-google-static-map';
import axios from 'axios';
import { api } from '../../config.json';

class ProviderItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      width:355,
      provider:{}
    }
  }
  componentDidMount(){
    var provider = this.props.provider;
    provider.lat = provider.lat.toString();
    provider.lon = provider.lon.toString();
    this.setState({provider});
  }

  find_dimesions(layout){
    const {width} = layout;
    var newWidth = Math.round(width);
    this.setState({width:newWidth})
  }
  truncate(string) {
    
      if (string.length > 150) return string.substring(0, 150) + "...";
      else return string;
    
    
  }

  render() {
    return (
      <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }} style={styles.container}>
      {this.state.provider.lat != null && this.state.width != 0 ? <GoogleStaticMap
            style={styles.map}
            latitude={this.state.provider.lat}
            longitude={this.state.provider.lon}
            zoom={13}
            size={{ width: this.state.width, height: 100 }}
            apiKey={'AIzaSyCfmDMsmF2LQAT3SU8vUgdwjGex1i7aFbE'}
        /> 
        : null}
        <View style={{padding:15}}>
        
        <View style={{height:50,marginBottom:10, flex:1, flexDirection:'row', alignItems:'center'}}>
          <View style={styles.panelAvatar}>
          <Image style={{resizeMode:'contain', flex:1, padding:10}} source={require('../../img/cap.png')}></Image>
          </View>
          <AppText style={[styles.desc, {color:'#7587db', fontSize:18}]} weight="bold">{this.state.provider.provider_name}</AppText>
        </View>
        <AppText style={styles.subHeader}>{this.state.provider.address1}</AppText>
        
        </View>
        
        
      </View>
    );
  }

}
const styles = StyleSheet.create({
  map:{
    
  },
  container:{
    backgroundColor:'#fff',
    margin:10,
    
    elevation: 2,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.14,
  },
  exploreImg:{
    width:'100%',
    padding:5,
    height:200,
  },
  header:{
    fontSize:25,
  },
  panelAvatar:{
    flex: 1,
    height:50,
    maxWidth:50,
    display:'flex',
    alignItems:'center',
    marginRight:10,
    overflow:'hidden',
    flexDirection:'row',
    borderRadius:50,
    backgroundColor:"#e8ecee"
  },
  subHeader:{
    fontSize:15,
    marginBottom:10,
    color:'#aeaeae',
    fontFamily:'quicksand-medium'
  },
  desc:{
    fontSize:15,
  }
})
export default ProviderItem;
