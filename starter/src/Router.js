import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import ResultScreen from './components/ResultScreen'

const AppNavigator = createStackNavigator(
	{
		// Home: HomeScreen,
		// Result: ResultScreen	
	},
	{
		// initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);