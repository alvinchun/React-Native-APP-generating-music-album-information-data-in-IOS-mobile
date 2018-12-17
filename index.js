// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import { YellowBox } from 'react-native';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Music Album App'} />
    <AlbumList />
  </View>
);
// You don't have to use render() for functional component
// Render it to the device

YellowBox.ignoreWarnings(['Remote debugger']);
console.ignoredYellowBox = ['Remote debugger'];

AppRegistry.registerComponent('albums', () => App);
