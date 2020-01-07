import React from 'react';
import './MoviesDisplay.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const MoviesDisplay = ({ average_rating, id, poster_path, title, userRatings}) => {
    
    const findRatedMovie = () => {
        if (userRatings.length !== 0) {
            return userRatings.find(movie => movie.movie_id === id)
        }
    }

    return (
        <Link to={`/movies/${id}`} key={id} className='movies-display'>
            <section>
                <h3>{title}</h3>
                <img src={poster_path} alt={title} />
                <hr />
                {findRatedMovie() ? 
                    <p>Your rating: {findRatedMovie().rating}</p>
                :
                    <p></p>
                }
                <p>Avg. rating: {average_rating.toFixed(2)}</p>
                <hr />
            </section>
        </Link> 
    )
}

export const mapStateToProps = (state) => ({
    movies: state.movies,
    userRatings: state.userRatings,
    user: state.user
})

export default connect(mapStateToProps)(MoviesDisplay);