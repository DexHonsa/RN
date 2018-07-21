import axios from 'axios';
import setAuthorizationToken from '../utils/set_authorization_token';
import { StyleSheet, Text, View, AsyncStorage  } from 'react-native';
import { SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';

import PropTypes from "prop-types";
import { push, routeActions } from 'react-router-redux';



export function setCurrentUser(user){
 return {
   type: SET_CURRENT_USER,
   user
 };
}
export function logout(callback){
 return async dispatch => {
   try {
     await AsyncStorage.removeItem('jwtToken');
   const value = await AsyncStorage.getItem('jwtToken');

   if (value !== null){
     setAuthorizationToken(false);
     callback(true);
   }else{
     dispatch(setCurrentUser({
       id:undefined,
       username:undefined,
       iat:undefined
     }));
     callback(true);
   }
 } catch (error) {
   console.log(error)
 }

 }
}
export function userLogin(data) {
 return dispatch => {
   return axios.post('http://167.99.161.41:8080/v1/auth', data).then(res => {
     const token = res.data.token;
     AsyncStorage.setItem('jwtToken', token);
     setAuthorizationToken(token);
     dispatch(setCurrentUser(jwtDecode(token)));
     return token;

   }, err => {
     
     return err.response.data
   })
 }
}

export function userSignup(data) {
 return dispatch => {
   return axios.post('/api/sign_up', data).then(res => {
     const token = res.data.token;
     AsyncStorage.setItem('jwtToken', token);
     setAuthorizationToken(token);

     dispatch(setCurrentUser(jwtDecode(token)));

   })
 }
}
