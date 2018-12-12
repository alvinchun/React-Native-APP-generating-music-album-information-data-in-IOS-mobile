// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Hey'} />
    <AlbumList />
  </View>
);
// You don't have to use render() for functional component
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
