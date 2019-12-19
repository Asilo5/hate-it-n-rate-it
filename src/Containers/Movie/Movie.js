import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section className='movie'>
            <p className='title' >{title}</p>
            <p>Out on: {release_date}</p>
            <img className ='back-ground' src={backdrop_path} alt={title} />
            <section className='movie-info'>
                <img className ='main-img' src={poster_path} alt={title} />
                <div className='overview-rating'>
                    <p>{overview}</p>
                    <div className='rating'>
                        <p>Avg. rating: {average_rating}</p>
                        <p> Add your rating </p>
                    </div>
                </div>
            </section>
        </section> 
    )
}

export default Movie;

