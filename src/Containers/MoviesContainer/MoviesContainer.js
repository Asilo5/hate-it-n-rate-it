import React from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';

const MoviesContainer = ({ movies }) => {
    console.log(movies);
    let theMovie = movies.map((movie) => {
        return <Movie key={movie.id} {...movie} /> 
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