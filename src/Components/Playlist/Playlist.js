import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default class Playlist extends Component {
  handleNameChange = event => {
    this.props.onNameChange(event.target.value);
  };

  enterKeySave = event => {
    if (event.key === "Enter") {
      this.onSave();
    }
  };

  render() {
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
          //   onKeyDown={this.enterKeySave}
        />
        <button className="playlist_save" onClick={this.props.onSave}>
          Save To Spotify
        </button>
      </div>
    );
  }
}
