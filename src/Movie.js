// const React = require('react');
import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{
    /* properties check */
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    /* 렌더링 */
    render(){
        // console.log(this.props.title);
        return (
            <div className='Movie'>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}



class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return (
            <img alt='' src={this.props.poster}/>
        )
    }
}

export default Movie;