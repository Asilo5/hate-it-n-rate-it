import React from 'react';
import './Movie.scss';

export const Movie = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
    return ( 
        <section className='movie'>
            <h2 className='title' >{title}</h2>
            <h3>Out on: {release_date}</h3>
            <p>Avg. rating: {average_rating.toFixed(2)}</p>
            <img className ='back-ground' src={backdrop_path} alt={title} />
            <section className='movie-info'>
                <img className ='main-img' src={poster_path} alt={title} />
                <div className='overview-rating'>
                    <p>{overview}</p>
                    <div className='rating'>
                        {/* <p>Avg. rating: {average_rating}</p> */}
                        <p> Add your rating </p>
                        <select>
                            <option value={1} >1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                            <option value={5} >5</option>
                            <option value={6} >6</option>
                            <option value={7} >7</option>
                            <option value={8} >8</option>
                            <option value={9} >9</option>
                            <option value={10} >10</option>
                        </select>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Movie;

