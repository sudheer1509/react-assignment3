import React, { Component } from "react";
import Header from "./component/Header";
import classes from "./App.module.css";
import Card from "./component/Card";
import Footer from "./component/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      loader: true,
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((data) => this.setState({ apiData: data.Search, loader: false }));
  }
  render() {
    let { apiData, loader } = this.state;
    return (
      <>
        <Header />
        <div className={classes.cardGrid}>
          {loader ? (
            <div className={classes.loader}></div>
          ) : (
            apiData.map((item, pos) => (
              <Card key={pos} src={item.Poster} title={item.Title} />
            ))
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
