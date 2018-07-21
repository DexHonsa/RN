import {StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';
import { Font } from 'expo';

class DrawerComponent extends Component {
    async componentDidMount(){
        console.log(this.props);
        await Font.loadAsync({
          'quicksand-bold': require('../fonts/Quicksand-Bold.ttf'),
          'quicksand-regular': require('../fonts/Quicksand-Regular.ttf'),
          'quicksand-medium': require('../fonts/Quicksand-Medium.ttf'),
          'quicksand-light': require('../fonts/Quicksand-Light.ttf'),
          });
      }
    render(){
        return  (
            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={{flex:1, height:100, padding:55, marginTop:25, flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../img/logo_white.png')} style={{flex:1,resizeMode:'contain'}} />
                </SafeAreaView>
                <View style={styles.container} >
                    <TouchableOpacity 
                    style={[styles.optionContainer, this.props.activeItemKey == 'Dashboard' ? styles.activeContainer : null]}
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                    >
                        <Icon name="home" color="#fff" type="font-awesome" size={18} />
                        <Text style={styles.navOption} >Dashboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.optionContainer, this.props.activeItemKey == 'Enrollments' ? styles.activeContainer : null]}
                    onPress={() => this.props.navigation.navigate('Enrollments')}
                    >
                        <Icon name="pencil-square-o" color="#fff" type="font-awesome" size={18} />
                        <Text style={styles.navOption} >Enrollment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.optionContainer, this.props.activeItemKey == 'Providers' ? styles.activeContainer : null]}
                    onPress={() => this.props.navigation.navigate('Providers')}
                    >
                        <Icon name="graduation-cap" color="#fff" type="font-awesome" size={18} />
                        <Text style={styles.navOption} >Providers</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionContainer:{
    display:'flex',
    padding:10,
    flexDirection:'row',
    alignItems:'center'
  },
  activeContainer:{
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  navOption:{
      padding:10,
      fontFamily:'quicksand-bold',
      color:'#fff',
      fontSize:20
  }
});

export default DrawerComponent