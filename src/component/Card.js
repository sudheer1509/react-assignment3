import React, { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={classes.card} style={{ width: "18rem" }}>
          <img src={this.props.src} alt="" />
          <div className={classes.cardoverlay}>
            <h5 style={{ color: "white" }}>{this.props.title}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
