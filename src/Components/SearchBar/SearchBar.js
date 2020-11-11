import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    // const initialSearchTerm = () =>
    //   String(window.localStorage.getItem("searchTerm") || "");
    // const [searchTerm] = useState(initialSearchTerm);
    // useEffect(() => {
    //   window.localStorage.setItem("searchTerm", searchTerm);
    // }, [searchTerm]);

    this.state = {
      term: ""
      // term: JSON.parse(localStorage.getItem("term")) || ""
    };

    // input = React.createRef();
  }

  // input = React.createRef();

  search = () => {
    this.props.onSearch(this.state.term);
  };

  // setSearchTerm = term => {
  //   this.setState(
  //     {
  //       term: term
  //     },
  //     () => {
  //       localStorage.setItem("term", JSON.stringify(this.state.term));
  //     }
  //   );
  // };

  // handleInitialSearchTerm = () => {
  //   if (typeof Storage !== "undefined") {
  //     if (localStorage.term) {
  //       return localStorage.term;
  //     } else {
  //       return this.setSearchTerm(
  //         String(window.localStorage.getItem("term") || "")
  //       );
  //     }
  //   }
  // };

  // search = () => {
  //   this.props.onSearch(this.state.term, () => {
  //     this.props.history.push("/results");
  //   });
  // };

  // search = () => {
  //   this.props.onSearch(this.state.term);
  //   return this.props.location.hash.push("/results");
  // };

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

  // getInitialState = () => {
  //   let stateValue = localStorage.getItem("term" || "");
  // };

  // handleSubmit = () => {};

  // componentDidMount() {
  //   let data = JSON.parse(localStorage.getItem("this.state.term"));
  //   if (data) {
  //     this.setState(data);
  //   }
  // }

  render() {
    return (
      <div className="search_box">
        <div className="search_bar">
          <input
            type="text"
            className="search_input"
            placeholder="Search Tracks"
            // value={this.handleValue()}
            // ref={this.input}
            onChange={this.handleTermChange}
            onKeyPress={this.enterKeySearch}
          />
          <button className="search_button" onClick={this.search}>
            Search
            {/* <Link
            to={this.search}
            className="search_button" */}
            {/* // onClick={this.search}> Search */}
            {/* </Link> */}
          </button>
        </div>
      </div>
    );
  }
}
