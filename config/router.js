import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Enrollments from '../screens/enrollments';
import Providers from '../screens/providers';
import UserProfile from '../screens/user_profile';
import Friends from '../screens/friends';
import Notifications from '../screens/notifications';
import DrawerComponent from '../helpers/drawer_component';
import HeaderComponent from '../helpers/header_component';


const backAction = NavigationActions.back({})

export const Stack = TabNavigator({
  Login: {
    screen: Login,
    title: 'Login',
    navigationOptions: {
      title: 'Login'
    }
  },
  Main: {
    screen: StackNavigator({
      MainStack: {
        screen: DrawerNavigator({
          Dashboard: {

            screen: StackNavigator({
              DashboardInner: {
                screen: Dashboard
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Dashboard',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="user" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          },
          Enrollments: {
            screen: StackNavigator({
              EnrollmentsInner: {
                screen: Enrollments
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Enrollments',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="user" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          },
          Providers: {
            screen: StackNavigator({
              ProvidersInner: {
                screen: Providers
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Providers',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="search" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          },

        }, {

          drawerPosition: 'left',
          drawerBackgroundColor: '#7587db',
          contentComponent:DrawerComponent,
          contentOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#f8fafb'

          }
        })
      },
      UserStack: {
        screen: TabNavigator({
          Profile: {

            screen: StackNavigator({
              ProfileInner: {
                screen: UserProfile
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={28} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              title: 'Profile',
              tabBarIcon: ({tintColor}) => (<Icon name="user" type="font-awesome" color={tintColor} size={20}/>),

              headerStyle: {
                backgroundColor: '#7587db'
              }
            })
          },
          Friends: {

            screen: StackNavigator({
              FriendsInner: {
                screen: Friends
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Friends',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              tabBarIcon: ({tintColor}) => (<Icon name="users" color={tintColor} type="font-awesome" size={20}/>),
              tabBarOptions: {
                activeTintColor: '#7587db'
              },
              title: 'Friends',
              headerStyle: {
                backgroundColor: '#7587db'
              }
            })
          },
          Notifications: {

            screen: StackNavigator({
              NotificationsInner: {
                screen: Notifications
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Notifications',
                headerStyle: {
                  backgroundColor: '#7587db'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#7587db" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              tabBarIcon: ({tintColor}) => (<Icon name="globe" color={tintColor} type="font-awesome" size={25}/>),
              tabBarOptions: {
                activeTintColor: '#7587db'
              },
              title: 'Notifications',
              headerStyle: {
                backgroundColor: '#7587db'
              }
            })
          }

        }, {

          headerMode: 'none',
          tabBarPosition: 'bottom',
          tabBarOptions: {
            showIcon: true,
            activeTintColor: '#7587db',
            inactiveTintColor: '#aeaeae',
            style: {
              backgroundColor: '#f8fafb',
            },
          }
        })
      }
    }, {
      headerMode: 'none',
      mode: 'modal',

      navigationOptions: ({navigation}) => ({})
    })

  }

}, {
  navigationOptions: {
    tabBarVisible:false,
    title: 'Main'
  },



});

export const NewStack = StackNavigator({
  Tabs: {
    screen: TabNavigator({
      Login: {
        screen: Login
      },
      Main: {
        screen: DrawerNavigator({
          Dashboard: {
            screen: Dashboard
          },
          Enrollments: {
            screen: Enrollments
          }
        })
      }
    })
  }
}, {headerMode: 'none'})
