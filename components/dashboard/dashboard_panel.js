import React, { Component } from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Font} from 'expo';
// import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';


class DashboardPanel extends Component {
  constructor(props){
    super(props);
    this.state ={
      fontLoaded:false,
      isLoading:true,
    }
  }
  async componentDidMount(){
    this.setState({ fontLoaded: false, isLoading:true });
    await Font.loadAsync({
      'quicksand-bold': require('../../fonts/Quicksand-Bold.ttf'),
      'quicksand-regular': require('../../fonts/Quicksand-Regular.ttf'),
      'quicksand-medium': require('../../fonts/Quicksand-Medium.ttf'),
      'quicksand-light': require('../../fonts/Quicksand-Light.ttf'),
      });
      this.setState({ fontLoaded: true, isLoading:false });

  }

  render() {
    var imgStr = '../../img/' + this.props.img;
    return (
      <View style={styles.panel}>
      <View style={styles.panelAvatar}>
      <Image style={{resizeMode:'contain', flex:1}} source={require('../../img/child.png')}></Image>
      </View>
        <View style={styles.panelContent}>
        {this.state.fontLoaded ? (<View><Text style={styles.panelHeader}>{this.props.title}</Text>
        <Text style={styles.panelDesc}>{this.props.school}</Text></View>) : null }
        </View>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loadingBox:{
    width:'100%',
    position:'absolute',
    zIndex:10,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ff9900',
    opacity:0
  },
  loadingGif:{
    width: '60%',
    resizeMode: 'contain',
    flex:1
  },
  visable:{
    opacity:1
  },
  panelAvatar:{
    flex: 1,
    height:50,
    maxWidth:50,
    display:'flex',
    alignItems:'center',
    marginLeft:10,
    flexDirection:'row',
    borderRadius:50,
    backgroundColor:"#e8ecee"
  },
  panelIcons:{
    marginTop:15,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    borderTopColor:'#eaeaea',
    borderTopWidth:1
  },
  panel:{
    margin:10,
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#fff',
    shadowOffset:{  width: 1,  height: 1,  },
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.14,
  },
  panelContent:{
    padding:10
  },
  panelImg:{
    width:'100%',
    height:200
  },
  panelHeader:{
    color:'#000',
    fontSize:20,
    marginBottom:10,
    fontFamily:'quicksand-bold',
  },
  panelDesc:{
    color:'#000',
    fontSize:15,
    fontFamily:'quicksand-regular'
  }
})

export default DashboardPanel;
