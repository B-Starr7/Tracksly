import React, { Component } from "react";
import "./HomePage.css";
import Hero from "../Hero/Hero";

export default class HomePage extends Component {
  componentDidMount() {
    console.log("home_page");
    this.props.onAuthentication();
  }

  render() {
    return (
      <div className="home_page">
        <Hero onSearch={this.props.onSearch} />
      </div>
    );
  }
}
