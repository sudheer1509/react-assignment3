import React, { Component } from "react";
import classes from "./Footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={classes.fooeter}>@ Copyright 2020</div>;
  }
}

export default Footer;
