import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import AppText from '../app_text';
import GoogleStaticMap from 'react-native-google-static-map';
import axios from 'axios';
import { api } from '../../config.json';

class ExploreItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      width:0,
      provider:{},
      program:{}
    }
  }
  componentDidMount(){
    axios.get(api + '/providers/'+ this.props.enrollment.provider_id).then(res=>{
      var provider = res.data;
      provider.lat = provider.lat.toString();
      provider.lon = provider.lon.toString();
      this.setState({provider:provider})
      
    }).then(()=>{
      axios.get(api + '/providers/' + this.props.enrollment.provider_id + '/programs/'+this.props.enrollment.program_id).then(res=>{
        this.setState({program:res.data})
        
      })
    })
  }
  find_dimesions(layout){
    const {x, y, width, height} = layout;
    this.setState({width:Math.round(width)})
  }
  truncate(string) {
    
      if (string.length > 150) return string.substring(0, 150) + "...";
      else return string;
    
    
  }

  render() {
    return (
      <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }} style={styles.container}>
      {this.state.provider.lat != null ? <GoogleStaticMap
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
          <Image style={{resizeMode:'contain', flex:1}} source={require('../../img/child.png')}></Image>
          </View>
          <AppText style={[styles.desc, {color:'#7587db', fontSize:18}]} weight="bold">{this.truncate(this.props.enrollment.student_name)}</AppText>
        </View>
        <AppText style={styles.header} weight="bold">{this.state.program.program_name}</AppText>
        <AppText style={styles.subHeader} weight="bold">{this.state.provider.provider_name}</AppText>
        
        {this.state.program.program_desc != null ?
        <AppText style={styles.desc} weight="regular">{this.truncate(this.state.program.program_desc)}</AppText>
        : null}
        </View>
        
        
      </View>
    );
  }

}
const styles = StyleSheet.create({
  map:{
    backgroundColor:'#fff'
  },
  container:{
    backgroundColor:'#fff',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.14,
    margin:10,
    overflow:'hidden',
    borderColor:'#dfdfdf',
    borderWidth:1,
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
    backgroundColor:"#7587db"
  },
  subHeader:{
    fontSize:18,
    marginBottom:10,
    color:'#7587db'
  },
  desc:{
    fontSize:15,
  }
})
export default ExploreItem;
