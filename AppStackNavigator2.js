import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import EventInputScreen from '../screens/EventInputScreen';
import EventsScreen from '../screens/EventsScreen';


export const AppStackNavigator2 = createStackNavigator({

 EventInput2:{
   screen : EventInputScreen,
   navigationOptions:{
     headerShown: false
   }
 },
Events:{
  screen : EventsScreen
}
 },


  {
    initialRouteName: 'EventInput2'
  }
);
