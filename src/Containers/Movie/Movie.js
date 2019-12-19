import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return ( 
        <section className='movie'>
            <section className='movie-images'>
                <img className ='back-ground' src={backdrop_path} alt={title} />
                <img className ='main-img' src={poster_path} alt={title} />
            </section>
            <section className='movie-info'>
                <p className='title' >{title}</p>
                <p>Out on: {release_date}</p>
                <p>{overview}</p>
                    <div className='rating'>
                        <p>Avg. rating: {average_rating}</p>
                        <p> Add your rating </p>
                    </div>
            </section>
        </section> 
    )
}

export default Movie;

