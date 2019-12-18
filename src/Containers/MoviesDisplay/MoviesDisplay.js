import React from 'react';
import './MoviesDisplay.scss';
import { Link } from 'react-router-dom';

const MoviesDisplay = ({ average_rating, id,poster_path, title}) => {
    return (
        <Link to={`/movies/${id}`} key={id} className='movies-display'>
            <section>
                <p>Avg. rating: {average_rating}</p>
                <p>{title}</p>
                <img src={poster_path} alt={title} />
            </section>
        </Link>
    )
}

export default MoviesDisplay;