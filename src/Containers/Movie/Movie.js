import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section className='movie'>
            <img src={poster_path} alt={title} />
            <div>
                <p>{average_rating}</p>
                <p>{title}</p>
                <p>{release_date}</p>
                <p>{overview}</p>
            </div>
        </section> 
    )
}

export default Movie;

