import React from 'react';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return (
        <section>
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

