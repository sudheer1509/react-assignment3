import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">
          MOVIES
        </a>
      </nav>
    );
  }
}

export default Header;
