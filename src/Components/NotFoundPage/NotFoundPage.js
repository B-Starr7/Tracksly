import React, { Component } from "react";
import "./NotFoundPage.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="not_found_page">
        <br />
        <h2>Page Not Found</h2>
        <br />
        <p>
          This page doesn't exist, try going back or clicking the Tracksly logo.
        </p>
      </div>
    );
  }
}
