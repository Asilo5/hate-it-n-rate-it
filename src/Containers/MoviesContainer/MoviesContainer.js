import React from 'react';
import { connect } from 'react-redux';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import './MoviesContainer.scss'

export const MoviesContainer = ({ movies }) => {
    let theMovie = movies.map((movie) => {
        return <MoviesDisplay key={movie.id} {...movie} /> 
    })
    return (
        <section className='movies-container'>
           {theMovie}
        </section>
    )
}

export const mapStateToProps = (state) => ({
    movies : state.movies
})

export default connect(mapStateToProps)(MoviesContainer);