import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';


// const movieTitles = [
//   '생일',
//   '헬보이',
//   '샤잠',
//   '극한직업',
//   '미성년',
//   '어벤져스'
// ]

// 
// Life Circle 
// 

// render: componentWillMount() -> render() -> componentDidMount()
// update : componentWillReceiveProps() -> componentShouldUpdate() -> componentWillUpdate() -> render()
//                                         return(old props != new props)

class App1 extends Component {

    state = {
        greeting: 'Good Morning',
        movies: [
            {title:'생일',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdumxTWn1UVIEo4wx2qatQh0p_lwpJcFZm_UV5me-cdJGYSbyq'},
            {title:'헬보이',poster:'https://seoul-p-studio.bunjang.net/product/90573459_1_1552438935_w640.jpg'},
            {title:'샤잠',poster:'http://www.theviewers.co.kr/news/photo/201903/30230_25907_240.jpg'},
            {title:'극한직업',poster:'http://cphoto.asiae.co.kr/listimglink/1/2019041209403556617_1555029635.jpg'},
            {title:'미성년',poster:'https://file2.nocutnews.co.kr/newsroom/image/2019/04/10/20190410163315804515_0_777_1109.jpg'},
            {title:'어벤져스',poster:'http://cphoto.asiae.co.kr/listimglink/1/2019041209403556617_1555029635.jpg'}
          ]
    }

  componentWillMount(){
    // request api 호출
    console.log('componentWillMount() called');
  }

  componentDidMount(){  
    // after request api
    console.log('componentDidMount() called');
    setTimeout((a, b) => {
        this.setState({
            greeting: 'Good Afternoon',
            // movies: this.state.movies.concat([{title:'토르:라그나로크', poster:'http://image.cine21.com/resize/cine21/poster/2017/1023/10_06_52__59ed40ac408ca[X230,330].jpg'}])
            movies: [
                ...this.state.movies, { // 토르를 뒤에 추가 할 때   // 추가 되는 위치 확인하기
                    title:'토르:라그나로크', 
                    poster:'http://image.cine21.com/resize/cine21/poster/2017/1023/10_06_52__59ed40ac408ca[X230,330].jpg'
                }, ...this.state.movies]    // 토르를 앞에 추가 할 때   // 추가 되는 위치 확인하기
        }); // 여기의 this는 컴포넌트의 this가 아니다. function의 this이다.
    }, 1000);
  }

  render() {
    return (

      <div className='App'>
        <h1>Good Morning {this.state.greeting}</h1>
        {
          this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })
        }
      </div>
    );
  }
}

export default App1;
