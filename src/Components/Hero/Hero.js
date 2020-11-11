import React, { Component } from "react";
import "./Hero.css";
// import NavBar from "../NavBar/NavBar";
// import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <SearchBar
          onSearch={this.props.onSearch}
          // searchResults={this.props.searchResults}
        />
        {/* HERO IMAGE/BACKGROUND */}
      </div>
    );
  }
}
