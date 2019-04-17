// const React = require('react');
import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const Movie = ({title, poster, genres, synopsis}) => (
        <div className='Movie'>
            <div className='Movie__Columns'>
                <MoviePoster poster={poster}/>
            </div>
            <div className='Movie__Columns'>
                <h1>{title}</h1>
                <div className='Movie__Genres'>
                    { genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}    
                </div>
                <p className='Movie__Columns'>{synopsis}</p>
            </div>
        </div>
)

const MoviePoster = ({poster}) => (<img className='Movie__Poster' alt='' src={poster}/>)

const MovieGenre = ({genre}) => (<span className='Movie_Genre'>[{genre}]</span>);

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;
