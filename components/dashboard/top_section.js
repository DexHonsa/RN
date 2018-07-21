import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, ScrollView, Image} from 'react-native';


class TopSection extends Component {

  render() {
    return (
      <View style={styles.topSection}>
        <View style={{position:'absolute', height:'100%', width:"100%", flexDirection:'row', justifyContent:'center',left:0, backgroundColor:'#eaeaea'}}>
          <Image style={styles.buildingImage} source={require('../../img/building.jpg')}/>
          </View>
          <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
         <Text style={styles.mainText}>111 TECH PLACE</Text>
         </View>



      </View>
    );
  }

}

const styles = StyleSheet.create({
  buildingImage:{
    height:147,
    resizeMode:'cover',
  },
  mainText:{
    color:'#fff',
    fontSize:18,
    letterSpacing:3,
  },
  topSection:{
    height:147,
    position:'relative',
    width:'100%',
    backgroundColor:'#eaeaea',
    overflow:'hidden',
    backgroundColor:'#d0d0d0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default TopSection;
