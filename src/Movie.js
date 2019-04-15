// const React = require('react');
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{

    /* 렌더링 */
    render(){
        return (
            <div className='Movie'>
                <h1>극한직업</h1>
                <img alt='' src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUkrSE.img?h=396&w=624&m=6&q=60&o=f&l=f&x=736&y=364'/>
            </div>
        )
    }
}

export default Movie;