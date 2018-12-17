import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // console.log(this.state.albums);

    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  //no id shown in this case, so we use just album.title

  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}
// Lifecycle methods

export default AlbumList;
