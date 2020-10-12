import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        <input defaultValue={"New Playlist"} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="playlist-save">Save To Spotify</button>
      </div>
    );
  }
}
