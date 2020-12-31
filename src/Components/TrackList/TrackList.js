import React, { Component } from "react";
import TracklistSong from "../TracklistSong/TracklistSong";
import "./TrackList.css";

export default class TrackList extends Component {
  render() {
    return (
      <div className="tracklist">
        {this.props.tracks.map(track => {
          return (
            <TracklistSong
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}
