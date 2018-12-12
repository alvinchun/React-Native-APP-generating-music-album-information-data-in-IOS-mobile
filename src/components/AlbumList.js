import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = { album: [] };

  componentWillMount() {
    axios
      .get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ album: response.data[0].title }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}
// Lifecycle methods

export default AlbumList;
