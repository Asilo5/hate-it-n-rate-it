import React from 'react';
import { connect } from 'react-redux';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';

const MoviesContainer = ({ movies }) => {
    let theMovie = movies.map((movie) => {
        return <MoviesDisplay key={movie.id} {...movie} /> 
    })
    return (
        <section>
           {theMovie}
        </section>
    )
}

const mapStateToProps = (state) => ({
    movies : state.movies
})

export default connect(mapStateToProps)(MoviesContainer);