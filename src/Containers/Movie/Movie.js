import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section className='movie'>
            <p>{average_rating}</p>
            <p>{title}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
            <img src={poster_path} alt={title} />
            <p>{}</p>
        </section> 
    )
}

export default Movie;

