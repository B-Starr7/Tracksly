import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
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
      searchResults: [
        {
          name: "boi",
          artist: "rahh",
          album: "blah",
          id: "1"
        },
        {
          name: "shie",
          artist: "mang",
          album: "doh",
          id: "2"
        },
        {
          name: "abra",
          artist: "kadabra",
          album: "grahh",
          id: "3"
        }
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        {
          name: "boi",
          artist: "rahh",
          album: "blah",
          id: "1"
        },
        {
          name: "shie",
          artist: "mang",
          album: "doh",
          id: "2"
        },
        {
          name: "abra",
          artist: "kadabra",
          album: "grahh",
          id: "3"
        }
      ]
    };
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
    this.setState({
      playlistTracks: trackUris
    });
  };

  search = term => {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage}>
              <HomePage onSearch={this.search} />
            </Route>
            {/* <Link
              to={{
                pathname: "/results",
                state: { searchResults: this.state.searchResults }
              }}
            >
              Search Results
            </Link> */}
            {/* <Route
              path="/results"
              component={ResultsPage}
              searchResults={this.state.searchResults}
            /> */}
            {/* <Route
              path={{
                pathname: "/results",
                component: { ResultsPage },
                state: { searchResults: this.state.searchResults }
              }}
            /> */}
            <Route path="/results" component={ResultsPage}>
              <ResultsPage
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                onSearch={this.search}
              />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
