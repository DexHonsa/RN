import {StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';
import { Font } from 'expo';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            searching:false,
            searchTerm:''
        }
    }

    setSearching(){
        this.setState({searching:!this.state.searching})
    }
    getSearch(){
        return this.state.searching.toString();
    }
    async componentDidMount(){
       
        await Font.loadAsync({
          'quicksand-bold': require('../fonts/Quicksand-Bold.ttf'),
          'quicksand-regular': require('../fonts/Quicksand-Regular.ttf'),
          'quicksand-medium': require('../fonts/Quicksand-Medium.ttf'),
          'quicksand-light': require('../fonts/Quicksand-Light.ttf'),
          });
      }
      render(){
          return (
            <SafeAreaView style={styles.header} forceInset={{ top: 'always', horizontal: 'never' }}> 
            {!this.state.searching ? 
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')} style={styles.searchBtn}>
                <Icon  name="bars" color="#fff" type="font-awesome" size={18} />
            </TouchableOpacity> 
            :null}
            
            {!this.state.searching ? 
                <Text style={{color:'#fff', flex:1, textAlign:'center', fontFamily:'quicksand-bold', fontSize:20}}>Providers</Text> 
            : null }
            {this.state.searching ? 
            <View style={{flex:1, flexDirection:'row'}}>
                <Icon style={{width:50}} name="search" color="#fff" type="font-awesome" size={18}></Icon> 
                <TextInput
                    style={styles.inputInput}
                    underlineColorAndroid="transparent"
                    placeholder="Search"
                    onChangeText={(text) => this.setState({searchTerm:text})}
                    value={this.state.searchTerm}
                    placeholderTextColor="#fff"
                    returnKeyType='search'
                    />
                </View>
            : null }
            {!this.state.searching ? <TouchableOpacity onPress={() => this.setSearching()} style={styles.searchBtn}>
                <Icon style={styles.searchBtn} name="search" color="#fff" type="font-awesome" size={18} />
                </TouchableOpacity> : <TouchableOpacity onPress={() => this.setSearching()} style={styles.searchBtn}>
                <Icon style={styles.searchBtn} name="close" color="#fff" type="font-awesome" size={18} />
                </TouchableOpacity> }
               
                
            </SafeAreaView>
          )
      }
}
const styles = StyleSheet.create({ 
    header:{
        backgroundColor:'#7587db',
        position:'absolute',
        zIndex:100,
        width:'100%',
        padding:10,
        paddingTop:20,
        paddingBottom:5,
        alignItems:'center',
        flexDirection:'row',
        height:47
    },
    searchBtn:{
        width:50
    },
    inputInput:{
        backgroundColor:'transparent',
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        fontSize:17,
        padding:5,
        marginLeft:10,
        flex:1,
        fontFamily:'quicksand-bold',
        color:'#fff'
    }
})

export default withNavigation(HeaderComponent)