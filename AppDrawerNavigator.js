import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSidebarMenu'
import SettingScreen from '../screens/SettingScreen'
import MyEventsScreen from '../screens/MyEventsScreen'
import NotificationScreen from '../screens/NotificationsScreen'
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  MyEvents : {
    screen : MyEventsScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Events"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  
},
{
    contentComponent:CustomSideBarMenu
},{intialRouteName:'Home'})
