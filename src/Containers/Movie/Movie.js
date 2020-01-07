import React, { Component } from 'react';
import { addRatings, getMovies, fetchRatings } from '../../utils/apiCalls';
import { addMoviesData, setUserRatings } from '../../actions';
import './Movie.scss';
import { connect } from 'react-redux';


export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: null
        }
    }

    handleChange = (value) => {
        this.setState({rating: parseInt(value)})
    }

    handleSubmit = async () => {
        addRatings(this.props.id, this.state.rating);
        const movies = await getMovies();
        this.props.addMoviesData(movies);
        fetchRatings()
            .then(data => this.props.setUserRatings(data))
    }
    
    findRatedMovie = () => {
        if (this.props.userRatings.length !== 0) {
            return this.props.userRatings.find(movie => movie.movie_id === parseInt(this.props.id))
        }
    }
    
    render() {
        const { average_rating, id, backdrop_path, overview, poster_path, release_date, title, userRatings} = this.props

        return ( 
            <section className='movie'>
                <h2 className='title' >{title}</h2>
                <h3>Out on: {release_date}</h3>
                <p>Avg. rating: {average_rating.toFixed(2)}</p>
                {this.findRatedMovie() ? 
                    <p>Your rating: {this.findRatedMovie().rating}</p>
                :
                    <div className='rating'>
                        <p> Add your rating </p>
                        <form>
                            <select onChange={(e) => this.handleChange(e.target.value)}>
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
                            <button 
                                type='button'
                                onClick={this.handleSubmit}
                                >SUBMIT
                            </button>
                        </form>
                    </div>
                }
                <img className ='back-ground' src={backdrop_path} alt={title} />
                <section className='movie-info'>
                    <img className ='main-img' src={poster_path} alt={title} />
                    <div className='overview-rating'>
                        <p>{overview}</p>
                    </div>
                </section>
            </section>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    addMoviesData: movies => dispatch(addMoviesData(movies)),
    setUserRatings: ratedMovies => dispatch(setUserRatings(ratedMovies))
  })

export const mapStateToProps = (state) => ({
    movies: state.movies,
    userRatings: state.userRatings,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

