import React, { Component } from "react";
import "./HomePage.css";
import Hero from "../Hero/Hero";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home_page">
        <Hero
          onSearch={this.props.onSearch}
          // searchResults={this.props.searchResults}
        />
      </div>
    );
  }
}
