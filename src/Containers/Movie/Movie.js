import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section className='movie'>
            <p>{title}</p>
            <img className ='back-ground' src={backdrop_path} alt={title} />
            <section className='movie-info'>
                <img className ='main-img' src={poster_path} alt={title} />
                <div>
                    <p>Avg. rating: {average_rating}</p>
                    <p>{release_date}</p>
                    <p>{overview}</p>
                </div>
            </section>
        </section> 
    )
}

export default Movie;

