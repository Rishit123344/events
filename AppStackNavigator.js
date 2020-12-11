import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import EventInputScreen from '../screens/EventInputScreen';
import EventsScreen from '../screens/EventsScreen';
import {AppStackNavigator2} from './AppStackNavigator2'

export const AppStackNavigator = createStackNavigator({
  EventsList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

 EventInput:{
   screen : AppStackNavigator2,
   navigationOptions:{
     headerShown: false
   }
 },
 },


  {
    initialRouteName: 'EventsList'
  }
);
