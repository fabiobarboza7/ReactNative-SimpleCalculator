import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const starter = () => (
	<App />
);

AppRegistry.registerComponent(appName, () => starter);
