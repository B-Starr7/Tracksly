import React, { Component } from "react";
import Hero from "../Hero/Hero";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./ResultsPage.css";

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: true };
  }

  isHidden = () => {
    this.setState({
      showing: false
    });
  };

  isShowing = () => {
    this.setState({
      showing: true
    });
  };

  componentDidMount() {
    console.log("results_page");
    if (window.location.hash) {
      window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      this.isHidden();
    }
  }

  UNSAFE_componentWillReceiveProps() {
    if (window.location.hash) {
      window.location.hash.substring(-1);
    }
    this.isShowing();
  }

  render() {
    const { showing } = this.state;
    return (
      <div className="results_page">
        <Hero onSearch={this.props.onSearch} />
        <h2
          className="results_title"
          style={{ display: showing ? "" : "none " }}
        >
          Results
        </h2>
        <div
          className="results_container"
          style={{ display: showing ? "" : "none " }}
        >
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
