import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search_box">
        <div className="search_bar">
          <input
            type="text"
            className="search_input"
            placeholder="Search Tracks"
          />
          <button className="search_button">Search</button>
        </div>
      </div>
    );
  }
}
