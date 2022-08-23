import React, { Component } from "react";
import classes from "./Header.module.css";
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
        <div className={classes.searchContainer}>
          <input
            type="text"
            placeholder="Search for movie..."
            className={classes.searchBox}
            value={this.props.searchQuery}
            onChange={(e) => this.props.handleSearch(e)}
          />
        </div>
        {/* <div className="searchContainer">
          <input
            type="search"
            placeholder="Search for Movie Title ... "
            className="searchBox"
            onChange={(e) => setSearchedMovies(e.target.value)}
          />
        </div>
        {searchedMovies.length < 3 && (
          <p className="error">Enter atleast 3 characters</p>
        )}
        <div className="moviesWrapper">
          {searchedMovieList &&
          searchedMovieList.length !== 0 &&
          searchedMovies !== ""
            ? searchedMovieList.map((movie, idx) => (
                <MovieCard movie={movie} idx={idx} />
              ))
            : allMovies.map((movie, idx) => (
                <MovieCard movie={movie} idx={idx} />
              ))}
        </div> */}
      </nav>
    );
  }
}

export default Header;
