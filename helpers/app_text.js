import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Font} from 'expo';

class AppText extends Component {
  constructor(props){
    super(props);
    this.state={
      fontLoaded:false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'quicksand-bold': require('../fonts/Quicksand-Bold.ttf'),
      'quicksand-regular': require('../fonts/Quicksand-Regular.ttf'),
      'quicksand-medium': require('../fonts/Quicksand-Medium.ttf'),
      'quicksand-light': require('../fonts/Quicksand-Light.ttf'),
      });
      this.setState({fontLoaded:true})
  }

  render() {
    var weight;
    if(this.props.weight == 'bold'){
      weight = styles.bold;
    }
    if(this.props.weight == 'regular'){
      weight = styles.regular;
    }
    if(this.props.weight == 'light'){
      weight = styles.light;
    }
    if(this.props.weight == undefined){
      weight = styles.regular;
    }
    return (

        <Text style={this.state.fontLoaded ? [this.props.style,weight] : null}>{this.props.children}</Text>

    );
  }

}
const styles = StyleSheet.create({
  bold:{
    fontFamily:'quicksand-bold'
  },
  regular:{
    fontFamily:'quicksand-medium'
  },
  light:{
    fontFamily:'quicksand-light'
  }
})

export default AppText;
