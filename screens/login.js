import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button,KeyboardAvoidingView, TouchableHighlight,  Animated, Easing } from 'react-native';

import axios from 'axios';
import validateInput from '../validators/login_validator';
import {connect} from 'react-redux';
import { userLogin, logout } from '../actions/auth_actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { Font, AppLoading, Asset, DangerZone } from 'expo';

import Animate from './animation';
import CapLoader from './cap_loader';



class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    username:'admin',
    password:'pass123$$$',
    errors:'',
    isLoading:true,
    fontLoaded: false,
    progress: new Animated.Value(0),
    loading:false
  }
}

componentDidMount(){
  Animated.timing(this.state.progress, {
    toValue: 1,
    duration: 5000,
    easing: Easing.linear,
  }).start();
}


async getFonts(){
   return Promise.all([
    Asset.loadAsync([
      require('../img/cap.png'),
      require('../img/bg2.jpg'),
      require('../img/logo_white.png'),
      require('../img/child.png'),
      require('../img/cap.png'),
      require('../img/logo_color.png'),
      
    ]),
    
    Font.loadAsync({
      'quicksand-bold': require('../fonts/Quicksand-Bold.ttf'),
      'quicksand-regular': require('../fonts/Quicksand-Regular.ttf'),
      'quicksand-medium': require('../fonts/Quicksand-Medium.ttf'),
      'quicksand-light': require('../fonts/Quicksand-Light.ttf'),
      })
   ]);
  
}
isValid(){
  const { errors, isValid } = validateInput(this.state);
  if(!isValid){
    this.setState({
      errors : errors
    })
  }
  return isValid;
}
onChange(e){
  this.setState({
    [e.target.name] : e.target.value
  })
}
onSubmit(e){
  this.props.logout();
  dismissKeyboard();
this.props.userLogin(this.state).then(
      (res) => {
        // this.setState({errors: {form:res.message}, isLoading: true});
        
        if(res.error_code != undefined){
          
          this.setState({errors: {form:res.message}, isLoading: false});
        }else{
          this.setState({loading:true})
          var that = this;
          setTimeout(function(){
            that.setState({loading:false})
            that.props.navigation.navigate('MainStack');
          },2000)
          
        
        }
        
      }
      );
  
  
  if(this.isValid()){
    var data = this.state;
    var that = this;

    e.preventDefault();
     this.setState({errors: {}, isLoading: true});
    // this.props.userLogin(this.state).then(
    //   (res) => {
    //     this.setState({errors: {form:res.message}, isLoading: false});
        
    //     if(res.error_code != undefined){
          
    //       this.setState({errors: {form:res.message}, isLoading: false});
    //     }else{
    //       this.props.navigation.navigate('MainStack');
    //     this.setState({isLoading:false})
    //     }
        
    //   }
    //   );
  }
}
  render() {
    const {username, password, errors, isLoading} = this.state;
    if (this.state.isLoading) {
      return (
        <AppLoading
          startAsync={this.getFonts}
          onFinish={() => this.setState({ isLoading: false })}
          onError={console.warn}
        />
      );
    }
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    {this.state.loading ? 
      <View style={{position:'absolute',top:0,left:0,zIndex:100000, flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff',height:'100%',width:'100%'}} >
      <CapLoader />
      </View>
       :null}
    
    <View style={{flex:1, position:'absolute',zIndex:1, height:'100%',width:'100%', backgroundColor:'#eee'}}>
    
      <View style={{position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',}}>
              
            <Image style={{
                flex: 1,
                resizeMode:'cover',
              }} source={require('../img/bg2.jpg')} />
        </View>
      </View>
      <View style={styles.loginBox}>
      <Animate />
      {/* <Image style={styles.image} source={require('../img/logo_color.png')} /> */}
      <View style={styles.inputItem}>
        <TextInput

        style={styles.inputInput}
        underlineColorAndroid="transparent"
        placeholder="Username"
        onChangeText={(text) => this.setState({username:text})}
        value={this.state.username}
        />
      </View>
      <View style={styles.inputItem}>
        <TextInput

        style={styles.inputInput}
        underlineColorAndroid="transparent"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password:text})}
        value={this.state.password}
        />
      </View>
      <TouchableHighlight underlayColor="#6470a7" style={styles.loginBtn} onPress={this.onSubmit.bind(this)}>
        <Text style={styles.loginBtnText}>LOGIN</Text>
      </TouchableHighlight>

      {errors.form && <View style={styles.alertContainer}><Text  style={styles.alertMessage}>{errors.form}</Text></View>}
      </View>
      </KeyboardAvoidingView>
    );
  }

}
var darkColor = '#7587db';
var lightColor = '#45b5ba';
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  loadingBox:{
    flex:1,
    width:'100%',
    position:'absolute',
    zIndex:10,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    
    backgroundColor:'#fff',
    opacity:1
  },
  loadingGif:{
    width: '60%',
    resizeMode: 'contain',
    flex:1
  },
  visable:{
    opacity:1
  },
  inputItem:{
    width:'80%',
    marginTop:10,
  },
  alertContainer:{
    backgroundColor:'#f8d7da',
    borderColor:'#f5c6cb',
    width:'80%',
    marginTop:15,
    borderRadius: 3
  },
  alertMessage:{
    padding:15,
  	color:'#721c24',
  	fontSize: 12,
    textAlign:'center'
  },
  loginBtn:{
    backgroundColor:darkColor,
    padding:15,
    width:'80%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    marginTop:15
  },
  loginBtnText:{
    color:'#fff',
    fontSize:15,
    letterSpacing:2,
    fontFamily:'quicksand-bold'
  },
  image: {
    width: '80%',
    height: 60,
    resizeMode: 'contain',
    marginBottom:15
  },
  inputInput:{
    padding:10,
    borderWidth:1,
    borderColor:'#eaeaea',
    backgroundColor:'#fff',
    fontSize:19,
    fontFamily:'quicksand-bold',
    borderRadius:3,
    color:darkColor
  },
  loginBox:{
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    zIndex:10
  },
  animated:{
    flex:1,
    width:300,
    backgroundColor:'transparent'
  }
})

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {userLogin, logout})(Login);
