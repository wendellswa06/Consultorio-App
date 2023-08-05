import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import router from './Router';



export default createAppContainer(createSwitchNavigator({
  router: MainTabNavigator,
}));