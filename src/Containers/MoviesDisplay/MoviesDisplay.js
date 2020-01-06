import React from 'react';
import './MoviesDisplay.scss';
import { Link } from 'react-router-dom';

const MoviesDisplay = ({ average_rating, id,poster_path, title}) => {
    return (
        <Link to={`/movies/${id}`} key={id} className='movies-display'>
            <section>
                <h3>{title}</h3>
                <img src={poster_path} alt={title} />
                <p>Avg. rating: {average_rating.toFixed(2)}</p>
            </section>
        </Link> 
    )
}

export default MoviesDisplay;