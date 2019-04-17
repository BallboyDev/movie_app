import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

class App2 extends Component {

  state = {

  }

  componentWillMount() {
    // request api 호출
    // console.log('componentWillMount() called');
  }

  componentDidMount() {
    // after request api
    // processing response
    // console.log('componentDidMount() called');
    // setTimeout((a, b) => {
    //   this.setState({
    //     movies: [
    //       { title: '생일', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdumxTWn1UVIEo4wx2qatQh0p_lwpJcFZm_UV5me-cdJGYSbyq' },
    //       { title: '헬보이', poster: 'https://seoul-p-studio.bunjang.net/product/90573459_1_1552438935_w640.jpg' },
    //       { title: '샤잠', poster: 'http://www.theviewers.co.kr/news/photo/201903/30230_25907_240.jpg' },
    //       { title: '극한직업', poster: 'http://cphoto.asiae.co.kr/listimglink/1/2019041209403556617_1555029635.jpg' },
    //       { title: '미성년', poster: 'https://file2.nocutnews.co.kr/newsroom/image/2019/04/10/20190410163315804515_0_777_1109.jpg' },
    //       { title: '어벤져스', poster: 'http://cphoto.asiae.co.kr/listimglink/1/2019041209403556617_1555029635.jpg' }
    //     ]
    //   });
    // }, 2000);

    // $.get('', function(response){
    //  이건 옛날 방식
    // });
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then((response) => response.json()) // image = .??? 찾아보기 (fetch 메소드)
    .then((json) => {
      console.log(json)
      this.setState({
        movies: json.data.movies
      })
    })
    .catch((err) => console.error(err))
  }

  _renderMovies() {
    // const movies = [<movie/>, <movie/>]
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />
    });

    return movies;
  }

  render() {
    return (

      <div className='App'>
        {
          // this._render()
          (this.state.movies == null) ? <h5>loading.... I'm so sorry....</h5> : this._renderMovies()

        }
      </div>
    );
  }
}

export default App2;
