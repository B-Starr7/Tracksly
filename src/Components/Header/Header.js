import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavBar />
        <h1>Create new playlists instantly!</h1>
      </header>
    );
  }
}
