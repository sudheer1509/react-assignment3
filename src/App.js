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
      filteredMovieList: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((data) => this.setState({ apiData: data.Search }));
  }
  handleSearch = (e) => {
    let filteredMovieList = this.state.apiData.filter((movie) =>
      movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredMovieList);
    this.setState({
      filteredMovieList: filteredMovieList,
      searchQuery: e.target.value,
    });
  };
  render() {
    let { apiData, filteredMovieList, searchQuery } = this.state;
    return (
      <>
        <Header
          searchQuery={this.searchQuery}
          handleSearch={this.handleSearch}
        />
        <div>
          <div className={classes.cardGrid}>
            {filteredMovieList && searchQuery !== ""
              ? filteredMovieList.map((item, pos) => (
                  <Card key={pos} src={item.Poster} title={item.Title} />
                ))
              : apiData.map((item, pos) => (
                  <Card key={pos} src={item.Poster} title={item.Title} />
                ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
