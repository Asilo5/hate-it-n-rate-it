import React from 'react';
import './MoviesDisplay.scss';

const MoviesDisplay = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section className='movies-display'>
            <p>Avg. rating: {average_rating}</p>
            <p>{title}</p>
            <img src={poster_path} alt={title} />
        </section>
    )
}

export default MoviesDisplay;