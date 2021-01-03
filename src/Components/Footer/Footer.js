import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/B-Starr7/tracksly"
          target="_blank"
          className="repo"
        >
          GitHub Repo
        </a>
      </div>
    );
  }
}
