import React, {Component} from 'react';
import AppText from '../helpers/app_text';
import ProfileListItem from '../helpers/profile/profile_list_item';
import {connect} from 'react-redux';
import { logout } from '../actions/auth_actions';
import { ImagePicker } from 'expo';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  ScrollView
} from 'react-native';
class UserProfile extends Component {
  state = {
    image: null,
  }
  logout(e){
    var that = this;
    e.preventDefault();
    this.props.logout(function(res){
      if(res){
        that.props.navigation.navigate('Login')
      }

    });

  }
  componentDidMount(){
    
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  render() {
    let { image } = this.state;
    const user = this.props.auth.user;
    return (<ScrollView contentContainerstyle={styles.profileImgContainer}>
      
      <View style={styles.profileContentContainer}>
      <ProfileListItem field="Username" value={user.name}/>
      <ProfileListItem field="Role" value={user.role} last={true}/>
      
      </View>
      <View style={styles.otherOptions}>
        <TouchableOpacity onPress={this.logout.bind(this)} style={styles.signout}><View><AppText style={{fontSize:15}}>Sign Out</AppText></View></TouchableOpacity>

        <TouchableOpacity style={styles.deleteAccount}><View><AppText style={{fontSize:15, color:'#e36e6e'}}>Delete Account</AppText></View></TouchableOpacity>

      </View>
    </ScrollView>);
  }

}
const styles = StyleSheet.create({
  deleteAccount:{
    padding:15,
    backgroundColor:'#fff',
    borderTopColor:'#dfdfdf',
    borderTopWidth:1,
    borderBottomColor:'#dfdfdf',
    borderBottomWidth:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:15

  },
  signout:{
    padding:15,
    backgroundColor:'#fff',
    borderTopColor:'#dfdfdf',
    borderTopWidth:1,
    borderBottomColor:'#dfdfdf',
    borderBottomWidth:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

  },
  otherOptions:{
    marginTop:25,
  },
  profileTop:{
    justifyContent:'center',
    alignItems:'center'
  },
  profileImgContainer: {
    padding:15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  profileName: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginTop:10
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden'
  },
  profileContentContainer:{
    backgroundColor:'#eaeaea',
    borderTopColor:'#d0d0d0',
    borderTopWidth:1,
    paddingTop:15,
  }
})
function mapStateToProps(state){
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(UserProfile)
