import React, { Component } from "react";
import classes from "./Header.module.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Search for movie..."
          className={classes.searchBox}
          value={this.props.searchQuery}
          onChange={(e) => this.props.handleSearch(e)}
        />
      </div>
    );
  }
}

export default Header;
