import React, { Component } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import Hero from "../Hero/Hero";
import SearchResults from "../SearchResults/SearchResults";
// import TrackList from "../TrackList/TrackList";
import Playlist from "../Playlist/Playlist";
import "./ResultsPage.css";

export default class ResultsPage extends Component {
  render() {
    return (
      <div className="results_page">
        {/* <SearchBar onSearch={this.props.onSearch} /> */}
        <Hero onSearch={this.props.onSearch} />
        <h2 className="results_title">Results</h2>
        <div className="results_container">
          <SearchResults
            searchResults={this.props.searchResults}
            onAdd={this.props.onAdd}
          />
          <Playlist
            playlistName={this.props.playlistName}
            playlistTracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
            onNameChange={this.props.onNameChange}
            onSave={this.props.onSave}
          />
        </div>
      </div>
    );
  }
}
