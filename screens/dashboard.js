import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet,ScrollView, Image, RefreshControl} from 'react-native';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import DashboardPanel from '../components/dashboard/dashboard_panel';
import { connect } from 'react-redux';
import {api} from '../config.json';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      students:[],
      refreshing: false,
      loaded:false
    }
  }
  static navigationOptions ={
    headerTitle: (<Text style={{fontFamily:'quicksand-bold', color:'#fff',fontSize:20} }>Dashboard</Text>),
    drawerIcon:(
      <Icon name="home" color="#fff" type="font-awesome" size={18} />
    )
  }
  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  componentDidMount(){
    this.fetchData();
  }
fetchData(){
  var that = this;
  return new Promise(function(resolve,reject){
    axios.get(api + '/providers/' + that.props.auth.user.provider_id+'/students').then(res=>{
      that.setState({students:res.data.items})
      resolve();
    })
  })
}
  render() {
    
    return (
      <View style={{flex:1}}>
      {!this.state.loaded ? 
        <View style={styles.loadingBox}>
        <Image style={styles.loadingGif} source={require('../img/loading.gif')}></Image>
      </View>
      : null}
        <View style={{position: 'absolute',
              top: 0,
              left: 0,
              bottom:0,
              right:0
              }}>
            <Image style={{
                flex:1,
                resizeMode:'cover',
              }} onLoad={this._onLoad} source={require('../img/bg2.jpg')} />
        </View>
      <ScrollView 
      style={styles.dashboardHome}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }
      >
      
      {this.state.students.map((student, key) => {
         return (
            <DashboardPanel key={key} title={student.first_name + ' ' + student.last_name} grade={student.grade} school={student.school}></DashboardPanel>
           
         );
      })}
      
      

      </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  dashboardHome:{
    flex:1
  },
  loadingBox:{
    flex:1,
    width:'100%',
    position:'absolute',
    height:'100%',
    zIndex:10,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent',
    opacity:1,
    backgroundColor:'#f8fafb'
  },
  loadingGif:{
    width: '60%',
    resizeMode: 'contain',
    flex:1
  },
  visable:{
    opacity:1
  },
})

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Dashboard);
