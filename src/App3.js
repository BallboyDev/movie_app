import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

class App2 extends Component {

  state = {

  }

  componentWillMount() {
    
  }

  componentDidMount() {
      this._getMovies();
  }

  // async function _getMovies() => {} // 옛날 방식
  _getMovies = async () => {    // 비동기 방식
    const movies = await this._callApi();
    this.setState({
        movies: movies
    })
  }

  _callApi = async() => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then((response) => response.json()) // image = .??? 찾아보기 (fetch 메소드)
    .then((json) => json.data.movies)
    .catch((err) => console.error(err))
  }

  _renderMovies() {
    // const movies = [<movie/>, <movie/>]
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        synopsis={movie.synopsis} 
        key={index} />
    });

    return movies;
  }

  render() { 
    const {movies} = this.state;
    return (

      <div className={movies? 'App' : 'App--loading'}>
        { movies ? this._renderMovies() : 'loading....' }
      </div>
    );
  }
}

export default App2;
