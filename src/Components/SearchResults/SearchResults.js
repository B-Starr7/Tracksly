import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

export default class SearchResults extends Component {
  render() {
    return (
      <div className="search_results">
        <h2>Tracks</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}
