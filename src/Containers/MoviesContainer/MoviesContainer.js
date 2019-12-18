import React from 'react';
import { connect } from 'react-redux';

const MoviesContainer = ({ movies }) => {
    console.log(movies)
    return (
        <section>
           <h2> Movie Container </h2>
        </section>
    )
}

const mapStateToProps = (state) => ({
    movies : state.movies
})

export default connect(mapStateToProps)(MoviesContainer);