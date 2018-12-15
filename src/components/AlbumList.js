import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    this.state.albums.map(album => (
      <Text key={album.title}>{album.title}</Text>
    ));
    console.log(this.state.albums);
  }

  render() {
    // console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}
// Lifecycle methods

export default AlbumList;
