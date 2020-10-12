import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavBar />
        <h1>Discover new music!</h1>
      </header>
    );
  }
}
