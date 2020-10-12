import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
// import TrackList from "../TrackList/TrackList";
import Playlist from "../Playlist/Playlist";
import "./ResultsPage.css";

export default class ResultsPage extends Component {
  render() {
    return (
      <div className="results_page">
        <SearchBar />
        <h2>Results</h2>
        <SearchResults
          searchResults={this.props.searchResults}
          onAdd={this.props.onAdd}
        />
        <Playlist
          playlistName={this.props.playlistName}
          playlistTracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
        />
      </div>
    );
  }
}
