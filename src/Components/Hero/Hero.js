import React, { Component } from "react";
import "./Hero.css";
import SearchBar from "../SearchBar/SearchBar";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <SearchBar onSearch={this.props.onSearch} />
      </div>
    );
  }
}
