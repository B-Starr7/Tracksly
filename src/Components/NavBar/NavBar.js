import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav_bar">
        <div className="logo">
          <Link to="/" className="logo_link">
            Tracksly
          </Link>
        </div>
      </nav>
    );
  }
}
