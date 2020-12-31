import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  componentDidMount() {
    console.log("search_bar");
  }

  search = () => {
    this.props.onSearch(this.state.term);
  };

  handleTermChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  enterKeySearch = event => {
    if (event.key === "Enter") {
      this.search();
    }
  };

  render() {
    return (
      <div className="search_box">
        <div className="search_bar">
          <input
            type="text"
            className="search_input"
            placeholder="Search Tracks"
            onChange={this.handleTermChange}
            onKeyPress={this.enterKeySearch}
          />
          <button className="search_button" onClick={this.search}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
