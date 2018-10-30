import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        // console.log("ComponentWillMount in Album List");
        // debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />); //Name of the props can be anyhing 
                                                        //then we have to call likewise as this.album={name of the variable}
    }

    render() {
        console.log(this.state);

    return (
        <View>
            {this.renderAlbums()}
        </View>
    );
}
}

export default AlbumList;