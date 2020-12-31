import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ResultsPage from "./Components/ResultsPage/ResultsPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Spotify from "../src/util/Spotify";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    };
  }

  componentDidMount() {
    console.log("app");
  }

  addTrack = track => {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrackSong => savedTrackSong.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  };

  removeTrack = track => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(
      currentTrackSong => currentTrackSong.id !== track.id
    );
    this.setState({
      playlistTracks: tracks
    });
  };

  updatePlaylistName = name => {
    this.setState({
      playlistName: name
    });
  };

  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      });
    });
  };

  search = term => {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    });
  };

  authenticate = () => {
    Spotify.authenticate().then(results => console.log(results));
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  onSearch={this.search}
                  onAuthentication={this.authenticate}
                />
              )}
            />
            <Route
              path="/results"
              render={() => (
                <ResultsPage
                  searchResults={this.state.searchResults}
                  onAdd={this.addTrack}
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}
                  onSearch={this.search}
                  onAuthentication={this.authenticate}
                />
              )}
            />
            <Route render={() => <NotFoundPage />} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
