import React, { Component } from "react";
import "./TracklistSong.css";

export default class TracklistSong extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  addTrack = () => {
    this.props.onAdd(this.props.track);
  };

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  };

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="track_action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="track_action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  render() {
    return (
      <div className="tracklist_song">
        <div className="track_information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
